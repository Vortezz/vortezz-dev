import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import mysql from "mysql2";
import { initStatusChecker, resolveStatus } from "./status"
import WebSocket, { Server } from "ws";
import http from "http";
import bodyParser from "body-parser";

require("dotenv").config()

const app = express();

const server = http.createServer(app)

const contactFormRequests = new Map<string, number>()

const wss = new Server({ server: server })

let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST ?? "",
    port: parseInt(process.env.MAIL_PORT ?? "587") ?? 587,
    secure: false,
    auth: {
        user: process.env.MAIL_USER ?? "",
        pass: process.env.MAIL_PASS ?? "",
    },
    tls: {
        rejectUnauthorized: false
    }
});

const connection = mysql.createConnection({
    host: process.env.DDB_HOST ?? "127.0.0.1",
    port: parseInt(process.env.DDB_PORT ?? "3306") ?? 3306,
    user: process.env.DDB_USER ?? "root",
    password: process.env.DDB_PASS ?? "root",
    database: process.env.DDB_NAME ?? "vortezz_web"
})

app.use(express.static(path.join(__dirname.replace("server", "build"))));

app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "web.vortezz.dev");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/sendMessage', (req, res) => {
    if (!contactFormRequests.has(req.headers["x-real-ip"]?.length == 1 ? req.headers["x-real-ip"][0] : "")) {
        contactFormRequests.set(req.headers["x-real-ip"]?.length == 1 ? req.headers["x-real-ip"][0] : "", Date.now());
    } else {
        const lastMessageDate = contactFormRequests.get(req.headers["x-real-ip"]?.length == 1 ? req.headers["x-real-ip"][0] : "") as number;
        if (Date.now() - lastMessageDate < 60000) {
            res.status(429);
            res.end()
            return;
        }
    }
    if (req.body == null || req.body.email == null || req.body.subject == null || req.body.name == null || req.body.content == null) {
        res.send("Bad request");
        res.status(502);
        return;
    }
    const email: string = req.body.email;
    const subject: string = req.body.subject;
    const content: string = req.body.content;
    const html: string = `<style>
    
    #bg {
        width: 100%;
        heigth: 100vh;
    }

    html, body {
        min-height: 100%;
        background: #363535;
        color: #fff
    }
    
    </style>
    <html>
        <body>
            <h1>Thank you for sending a contact request!</h1>
            <br>
            Subject : ${subject}
            <br>
            Your message : ${content}
            <br>
            <p>This message was sent automatically. If you haven't filled the form, please contact us at contact@vortezz.dev</p>
        </body>
    </html>
    <div id="bg">
    </div>`

    const htmlToVortezz: string = `<style>
    
    #bg {
        width: 100%;
        heigth: 100vh;
    }

    html, body {
        min-height: 100%;
        background: #363535;
        color: #fff
    }
    
    </style>
    <html>
        <body>
            <h1>${email} sended a contact request!</h1>
            <br>
            Subject : ${subject}
            <br>
            Your message : ${content}
            <br>
            <p>This message was sent automatically.</p>
        </body>
    </html>
    <div id="bg">
    </div>`

    transporter.sendMail({
        from: '"Vortezz" <noreply@vortezz.dev>',
        to: email,
        subject: "vortezz.dev contact form summary",
        text: content,
        html: html,
    })

    transporter.sendMail({
        from: '"Vortezz" <noreply@vortezz.dev>',
        to: "contact@vortezz.dev",
        subject: "Contact form : " + subject,
        text: content,
        html: htmlToVortezz,
    })

    contactFormRequests.set(req.headers["x-real-ip"]?.length == 1 ? req.headers["x-real-ip"][0] : "", Date.now());

    res.status(200)
    res.end()
});

app.get('/static/*', (req, res) => {
    res.sendFile(__dirname.replace("server", "build") + req.path)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname.replace("server", "build") + '/index.html'));
});

const port = process.env.PORT || 5555;

server.listen(port);

initStatusChecker(wss, connection)

console.log('App is listening on port ' + port);