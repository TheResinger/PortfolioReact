import React from 'react';
import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
// import Mail from 'nodemailer/lib/mailer';

const options = {
  auth: {
    api_user: process.env.SENDGRID_USER,
    api_key: process.env.SENDGRID_KEY,
  },
};

const transporter = nodemailer.createTransport(sgTransport(options));

// const sendMail = message => {
//   return new Promise((res, reject) => {
//     transporter.sendMail(message, (err, info) => {
//       if (err) {
//         reject(error);
//         return;
//       }
//       resolve(info);
//     });
//   });
// };

const ContactForm = () => {
  return (
    <section id="contact" className="section-content bg3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="section-title item_bottom text-center">
            <div>
              <span className="fa fa-envelope fa-2x"></span>
            </div>
            <h1 className="white">Contact Me</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-md-offset-3">
            <div className="form-respond text-center"></div>
            <form
              method="post"
              name="contactform"
              id="contactform"
              className="form validate item_bottom"
              role="form"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control required"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control required email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control input-lg required"
                  rows="9"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <div className="form-group text-center">
                <input
                  type="submit"
                  id="contactForm_submit"
                  className="btn btn-trans btn-border btn-full"
                  value="Submit"
                />
              </div>
              {/* <!-- antispam code --> */}
            </form>
          </div>
        </div>
        {/* <!-- End form contact --> */}
      </div>
    </section>
  );
};

export default ContactForm;
