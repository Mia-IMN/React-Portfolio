import React from "react";
import Button from "./Button";
import emailjs from 'emailjs-com';

const Messageform = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_uegvry8",
      "template_0xmmks9",
      e.target,
      "user_HeGCFsP2MtwJskPQYtzu3"
    ).then(res=>{
        console.log(res);
    }).catch(err => console.log(err));
  }
  return (
    <div className="message_form" onSubmit={sendEmail}>
      <h3>SEND ME A NOTE</h3>
      <div className="first-row">
        <input type="text" name="name" id="name" placeholder="Name" required />
        <input
          type="email"
          name="user_email"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="Tell me about your needs"
      ></textarea>
      <input type="submit" value="send" text="Send Message" style={{backgroundColor : "skyblue", color: "white", border:"none"}} />
    </div>
  );
};

export default Messageform;
