import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from "@ioc:Adonis/Core/Validator";
import Mail from "@ioc:Adonis/Addons/Mail";
import { readFileSync } from "fs";
import Cache from "tmp-cache";

function escapeHtml(string) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return string.replace(/[&<>"']/g, function (m) {
    return map[m];
  });
}

export default class PostsController {
  public async sendContact(context: HttpContextContract, mailCache: Cache<string, number>) {
    if (mailCache.has(context.request.ip()) && Date.now() - mailCache.get(context.request.ip())! < 60000) {
      context.response.status(429);
      return {error: "Too many requests"};
    }

    const {email, subject, content, name} = await context.request.validate({
      schema: schema.create({
        email: schema.string([rules.email(), rules.regex(/^((?!vortezz\.dev|vrtz\.dev).)*$/gm)]),
        subject: schema.string(),
        content: schema.string(),
        name: schema.string(),
      })
    });

    mailCache.set(context.request.ip(), Date.now())

    const mailContent = readFileSync(__dirname.replace("/app/Controllers/Http", "/resources/contact.html")).toString()
      .replace("${name}", escapeHtml(name))
      .replace("${email}", escapeHtml(email))
      .replace("${subject}", escapeHtml(subject))
      .replace("${content}", escapeHtml(content))

    const mailTextContent = `Contact Form Confirmation

Thanks for sending a contact request on vortezz.dev, I will reply to you as soon as possible. You will find a copy of your request just below.

Email : ${name}
Name : ${email}
Subject : ${subject}
Content : ${content}

This message was sent automatically, if you haven't sent any form, just ignore this.
`

    await Mail.send((message => {
      message.to(email)
      message.from("noreply@vortezz.dev", "Vortezz No Reply")
      message.subject("Contact form confirmation")
      message.html(mailContent)
      message.text(mailTextContent)
    }));

    await Mail.send((message => {
      message.to("contact@vortezz.dev")
      message.from("noreply@vortezz.dev", name)
      message.subject("Contact Form : " + subject)
      message.html(mailContent.replace("Contact Form Confirmation", "Contact Form"))
      message.text(mailTextContent)
    }))

    return [
      {
        success: true
      },
    ]
  }
}
