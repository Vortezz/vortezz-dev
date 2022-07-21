import Route from '@ioc:Adonis/Core/Route'
import View from '@ioc:Adonis/Core/View'

import * as fs from "fs";
import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Cache from "tmp-cache";
import ContactController from 'App/Controllers/Http/ContactController';

const mailCache: Cache<string, number> = new Cache<string, number>();

Route.group(() => {
  Route.group(() => {
    Route.post("/send", (context) => {
      return new ContactController().sendContact(context, mailCache)
    })
  }).prefix("/contact")
}).prefix("/api/v1")

Route.any('/static/*', async ({request, response}: HttpContextContract) => {
  const type = request.url().split("/").pop() ?? "index.html";
  let path = __dirname.replace("\\start", "\\front\\build") + request.url().replace(/\//gm, "\\");
  response.type(type)

  if (type.includes(".png")) {
    return response.stream(fs.createReadStream(path))
  } else {
    return fs.readFileSync(path).toString()
  }
})

Route.any('/logo.png', async ({response}: HttpContextContract) => {
  response.type("png")
  return response.stream(fs.createReadStream(__dirname.replace("\\start", "\\front\\build") + '\\logo.png'))
})

Route.any('*', async () => {
  return View.render(__dirname.replace("\\start", "\\front\\build") + '\\index.html')
})
