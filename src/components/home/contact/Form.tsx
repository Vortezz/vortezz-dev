import fetch from "node-fetch";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React, { useState } from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Form() {

    const [fieldsFilledAlert, setFieldsFilledAlert] = useState<boolean>(false);

    const [invalidEmailAlert, setInvalidEmailAlert] = useState<boolean>(false);

    const [mailError, setMailError] = useState<boolean>(false);

    const [messageSended, setMessageSended] = useState<boolean>(false);

    async function doForm() {
        const emailElement = document.getElementById("email");
        const subjectElement = document.getElementById("subject");
        const nameElement = document.getElementById("name");
        const messageElement = document.getElementById("message");

        if (!messageElement || !nameElement || !subjectElement || !emailElement) { return }
        if (!(messageElement instanceof HTMLTextAreaElement) || !(nameElement instanceof HTMLInputElement) || !(subjectElement instanceof HTMLInputElement) || !(emailElement instanceof HTMLInputElement)) { return }

        const email: HTMLInputElement = emailElement;
        const subject: HTMLInputElement = subjectElement;
        const name: HTMLInputElement = nameElement;
        const message: HTMLTextAreaElement = messageElement;

        if (message.value === "" || name.value === "" || subject.value === "" || email.value === "") { return setFieldsFilledAlert(true) }

        var regexp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

        if (!regexp.test(email.value.toLowerCase())) { return setInvalidEmailAlert(true) }

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", email.value);
        urlencoded.append("subject", subject.value);
        urlencoded.append("name", name.value);
        urlencoded.append("content", message.value);

        const request = await fetch("https://web.vortezz.dev/api/sendMessage", {
            method: 'POST',
            body: urlencoded,
            headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
            redirect: 'follow'
        })

        if (request.status != 200) {
            setMailError(true)
            return
        }

        setMessageSended(true)

        message.value = ""
        email.value = ""
        name.value = ""
        subject.value = ""
    }

    return (<div className="w-full bg-vortezz-gray3">
        <Snackbar open={fieldsFilledAlert} autoHideDuration={6000} onClose={() => { setFieldsFilledAlert(false) }}>
            <Alert onClose={() => { setFieldsFilledAlert(false) }} severity="error" sx={{ width: '100%' }}>
                Please fill all fields
            </Alert>
        </Snackbar>
        <Snackbar open={invalidEmailAlert} autoHideDuration={6000} onClose={() => { setInvalidEmailAlert(false) }}>
            <Alert onClose={() => { setInvalidEmailAlert(false) }} severity="error" sx={{ width: '100%' }}>
                Your email seems to be invalid
            </Alert>
        </Snackbar>
        <Snackbar open={mailError} autoHideDuration={6000} onClose={() => { setMailError(false) }}>
            <Alert onClose={() => { setMailError(false) }} severity="error" sx={{ width: '100%' }}>
                Error while sending mail
            </Alert>
        </Snackbar>
        <Snackbar open={messageSended} autoHideDuration={6000} onClose={() => { setMessageSended(false) }}>
            <Alert onClose={() => { setMessageSended(false) }} severity="success" sx={{ width: '100%' }}>
                Message sent successfully
            </Alert>
        </Snackbar>
        <div className="max-w-[calc(40rem)] w-[calc(95%)] flex flex-col m-auto">
            <label className="text-vortezz-white m-2 text-xl font-semibold" htmlFor="email">Email :</label >
            <input className="rounded focus:outline-none focus:ring-2 ring-vortezz-purple h-8 px-2" type="email" id="email" placeholder="contact@vortezz.dev" required />
            <label className="text-vortezz-white m-2 text-xl font-semibold" htmlFor="subject">Subject :</label >
            <input className="rounded focus:outline-none focus:ring-2 ring-vortezz-purple h-8 px-2" type="text" id="subject" placeholder="Lorem ipsum dolor" required />
            <label className="text-vortezz-white m-2 text-xl font-semibold" htmlFor="name">Name :</label >
            <input className="rounded focus:outline-none focus:ring-2 ring-vortezz-purple h-8 px-2" type="text" id="name" placeholder="Vortezz" required />
            <label className="text-vortezz-white m-2 text-xl font-semibold" htmlFor="name">Message :</label >
            <textarea className="rounded focus:outline-none focus:ring-2 ring-vortezz-purple h-40 px-2" id="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..." required />
            <div className="w-full flex">
                <div className="p-4 bg-vortezz-purple rounded-full w-24 text-center text-vortezz-white text-xl font-semibold cursor-pointer mx-auto my-2" onClick={doForm}>Send !</div>
            </div>
        </div>
    </div>)
}