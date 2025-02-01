import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form1Wrap, Form2Wrap, FormsWrap, SendButton } from './contactStyle';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oj5e3t6', 'template_0j469uk', form.current, {
        publicKey: 'vQPE1NK62wGoG_Ohs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <FormsWrap>
      <form ref={form} onSubmit={sendEmail}>
        <Form1Wrap>
          <div className='inputs-wrap'>
          <div className='input-div'>
            <label>Name</label>
            <input type="text" name="Name" placeholder="Enter your name" />
          </div>
          <div className='input-div'>
            <label>Email</label>
            <input type="email" name="Email" placeholder="Enter email address" />
          </div>
          </div>
        </Form1Wrap>

        <Form2Wrap>
          <div className='inputs-wrap'>
            <div className='input-div'>
              <label>Subject</label>
              <input type="text" name="Subject" placeholder="Write a subject" />
            </div>
            <div className='message-form'>
              <label>Message</label>
              <textarea name="Message" placeholder="Write your message" />
            </div>
          </div>
        </Form2Wrap>
        <SendButton type="submit">Send</SendButton>
      </form>
    </FormsWrap>
  );
};

