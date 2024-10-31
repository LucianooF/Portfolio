import React, { useRef } from 'react';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('contact_service', 'contact_form', form.current, {
        publicKey: 'qtriiT2_yQ4XZ50-L',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error: { text:string }) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
