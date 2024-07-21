import React from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com';
import FullButton from "../Buttons/FullButton";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fname = form.fname.value;
    const email = form.email.value;
    const message = form.message.value;
    
    const templateParams = {
      from_name: fname,
      from_email: email,
      message: message,
    };

    emailjs.send('service_uyigcvx', 'template_ynu523f', templateParams, 'IGtVI7kbHzbTyfhUy')
      .then((response) => {
        console.log('Email sent successfully:', response);
        form.reset();
        alert('Your message has been sent successfully!');
      }, (error) => {
        console.error('Error sending email:', error);
        alert('There was an error sending your message. Please try again.');
      });
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              We are here to assist you with all your shutter and gate needs. Reach out to us for any inquiries or support.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "20px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form onSubmit={handleSubmit}>
                <label className="font13">First name:</label>
                <input type="text" id="fname" name="fname" className="font12" required />
                <label className="font13">Email:</label>
                <input type="email" id="email" name="email" className="font12" required />
                <label className="font13">Message:</label>
                <textarea rows="3" cols="50" id="message" name="message" className="font12" required />
                <FullButton title="Send Mail" />
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "100%" }}>
                <ContactDetails>
                  <ContactItem>
                    <i className="icon-phone"></i>
                    <ContactInfo>Bhargav Upadhyay</ContactInfo>
                    <ContactInfo>(9974735045)</ContactInfo>
                  </ContactItem>
                  <ContactItem>
                    <i className="icon-phone"></i>
                    <ContactInfo>Jaydeep Upadhyay</ContactInfo>
                    <ContactInfo>(95587 55259)</ContactInfo>
                  </ContactItem>
                  <ContactItem>
                    <i className="icon-location2"></i>
                    <ContactInfo>GD No. 14 Near Om Ravi Transport, G.I.D.C., Umbergaon, Valsad, 396171</ContactInfo>
                  </ContactItem>
                  <ContactItem>
                    <i className="icon-mail4"></i>
                    <ContactInfo>gayatrirollingshutters.grs@gmail.com</ContactInfo>
                  </ContactItem>
                  <ContactItem>
                    <i className="icon-facebook2"></i>
                    <i className="icon-instagram"></i>
                    <ContactInfo>/gayatrirollingshutters</ContactInfo>
                  </ContactItem>
                </ContactDetails>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 0 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Form = styled.form`
  padding: 20px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 10px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;

const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const ContactDetails = styled.div`
  padding: 70px 0 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContactInfo = styled.div`
  font-size: 16px;
`;
