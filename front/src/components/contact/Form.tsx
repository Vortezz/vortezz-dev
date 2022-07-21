import fetch from "node-fetch";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import React, {useState} from "react";
import language from "../../language";
import TextInput from "../inputs/TextInput";

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

    if (!messageElement || !nameElement || !subjectElement || !emailElement) {
      return
    }
    if (!(messageElement instanceof HTMLTextAreaElement) || !(nameElement instanceof HTMLInputElement) || !(subjectElement instanceof HTMLInputElement) || !(emailElement instanceof HTMLInputElement)) {
      return
    }

    const email: HTMLInputElement = emailElement;
    const subject: HTMLInputElement = subjectElement;
    const name: HTMLInputElement = nameElement;
    const message: HTMLTextAreaElement = messageElement;

    if (message.value === "" || name.value === "" || subject.value === "" || email.value === "") {
      return setFieldsFilledAlert(true)
    }

    var regexp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

    if (!regexp.test(email.value.toLowerCase())) {
      return setInvalidEmailAlert(true)
    }

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email.value);
    urlencoded.append("subject", subject.value);
    urlencoded.append("name", name.value);
    urlencoded.append("content", message.value);

    const request = await fetch("/api/v1/contact/send", {
      method: 'POST',
      body: urlencoded,
      headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
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
    <Snackbar open={fieldsFilledAlert} autoHideDuration={6000} onClose={() => {
      setFieldsFilledAlert(false)
    }}>
      <Alert onClose={() => {
        setFieldsFilledAlert(false)
      }} severity="error" sx={{width: '100%'}}>
        {language.CONTACT.FORM.ALERTS.FILL}
      </Alert>
    </Snackbar>
    <Snackbar open={invalidEmailAlert} autoHideDuration={6000} onClose={() => {
      setInvalidEmailAlert(false)
    }}>
      <Alert onClose={() => {
        setInvalidEmailAlert(false)
      }} severity="error" sx={{width: '100%'}}>
        {language.CONTACT.FORM.ALERTS.INVALID_MAIL}
      </Alert>
    </Snackbar>
    <Snackbar open={mailError} autoHideDuration={6000} onClose={() => {
      setMailError(false)
    }}>
      <Alert onClose={() => {
        setMailError(false)
      }} severity="error" sx={{width: '100%'}}>
        {language.CONTACT.FORM.ALERTS.SENDING_MAIL}
      </Alert>
    </Snackbar>
    <Snackbar open={messageSended} autoHideDuration={6000} onClose={() => {
      setMessageSended(false)
    }}>
      <Alert onClose={() => {
        setMessageSended(false)
      }} severity="success" sx={{width: '100%'}}>
        {language.CONTACT.FORM.ALERTS.MESSAGE_SENDED}
      </Alert>
    </Snackbar>
    <div className="max-w-[calc(40rem)] w-[calc(95%)] flex flex-col m-auto">
      <TextInput name={"email"}
                 label={language.CONTACT.FORM.EMAIL}
                 placeholder={"Email"}
                 type={""}
                 icon={"bx bx-envelope"}
      />
      <TextInput name={"subject"}
                 label={language.CONTACT.FORM.SUBJECT}
                 placeholder={"Subject"}
                 type={""}
                 icon={"bx bx-user"}
      />
      <TextInput name={"name"}
                 label={language.CONTACT.FORM.NAME}
                 placeholder={"Name"}
                 type={""}
                 icon={"bx bx-user"}
      />
      <label className={"text-xl text-vortezz-white"} htmlFor={"message"}>Message</label>
      <textarea className="rounded-lg text-xl focus:outline-none focus:ring-0 border-none h-40 px-2" id="message"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..."
                required/>
      <div className="w-full flex">
        <div
          className={"p-2 bg-vortezz-purple rounded-lg w-[calc(90%)] max-w-[calc(20rem)] text-center text-vortezz-white text-xl font-semibold cursor-pointer mx-auto mt-6"}
          onClick={doForm}>{language.CONTACT.FORM.SEND}</div>
      </div>
    </div>
  </div>)
}
