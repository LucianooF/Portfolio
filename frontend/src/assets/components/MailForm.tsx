import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {} from '../css/MailForm.css';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('contact_service', 'contact_form', form.current as HTMLFormElement, {
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
    <form className='form' ref={form} onSubmit={sendEmail}>
      
      <input type="text" name="user_name" placeholder='Nombre'/>
      
      <input type="email" name="user_email" placeholder='correo@email.com' />
      
      <textarea name="message" placeholder='tu mensaje'/>
      <input type="submit" value="Enviar" />
    </form>
  );
};
