import React from "react";

function ContactForm() {

     const recipient = 'sehamanter2@gmail.com';

  // Create the mailto link
  const mailtoLink = `mailto:${recipient}`;

  return (
    <div className="contactform ">
      <div className="container d-flex col-10 col-sm-8 col-md-6 col-xl-4 py-5 mx-auto">
        <div className="contactformparent py-5">
          <h2 className="title">Let's talk!</h2>
          <p className="description">
            Got a project in mind? Fill in the form or send us a{" "}
            <a href={mailtoLink}> direct email.</a>
          </p>
          <div className="d-grid content form py-5">
            <form action="" className="d-grid gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="form-btn btn "
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-btn btn "
              />
              <input
                type="Email"
                placeholder="Email"
                className="form-btn btn "
              />
              <select name="" className="form-btn" id="">
                <option className="btn form-btn text-start" value="">
                  Budget not defined
                </option>
                <option value="" className="form-btn btn">
                  Budget not defined
                </option>
              </select>
              <textarea
                name="Massage"
                className="form-btn btn h-100 "
                placeholder="Massage"
                id=""
                rows="6"
              ></textarea>
              <input
                type="submit"
                className="submit-btn ms-auto"
                value={"Submit"}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="office"></div>
    </div>
  );
}

export default ContactForm;
