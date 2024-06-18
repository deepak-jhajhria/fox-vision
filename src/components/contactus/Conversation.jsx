import { useState, useEffect } from "react";
import conversation from "../../assets/images/webp/conversation.webp";
import captcha from "../../assets/images/svg/captcha.svg";
import Button from "../common/Button";
import { H2, H5 } from "../common/Heading";
import Swal from "sweetalert2";

const Conversation = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    subject: "",
    number: "",
    email: "",
    message: "",
    box: false,
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastname: "",
    subject: "",
    number: "",
    email: "",
    message: "",
    box: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "number") {
      // Allow only digits and restrict to 10 characters
      if (!/^\d*$/.test(value) || value.length > 10) {
        return;
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      lastname: /^[a-zA-Z\s]+$/,
      subject: /^\S+/,
      number: /^\d{10}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: /^\S+/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "Name is invalid.";
    }
    if (!regex.lastname.test(formData.lastname)) {
      errors.lastname = "Last Name is invalid.";
    }
    if (!regex.subject.test(formData.subject)) {
      errors.subject = "Subject is invalid.";
    }
    if (!regex.number.test(formData.number)) {
      errors.number = "Number is invalid.";
    }
    if (!regex.email.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!regex.message.test(formData.message)) {
      errors.message = "Message is invalid.";
    }
    if (!formData.box) {
      errors.box =
        "You must agree to the terms of services and privacy policy.";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        confirmButtonText: "Close",
        willClose: () => {
          setFormData({
            name: "",
            lastname: "",
            subject: "",
            number: "",
            email: "",
            message: "",
            box: false,
          });
          setFormErrors({
            name: "",
            lastname: "",
            subject: "",
            number: "",
            email: "",
            message: "",
            box: "",
          });
        },
      });
    }
  };

  return (
    <div className="pt-12 md:pt-14 lg:pt-[126px]">
      <div className="container xl:max-w-[1164px] px-3 mx-auto">
        <div className="flex flex-wrap flex-row justify-between">
          <div className="w-full px-3 lg:w-[46%]">
            <H5
              className="uppercase max-md:text-center"
              title="Contact With FoxVision"
            />
            <H2
              className="md:mt-3 !leading-120 max-md:text-center max-md:mx-auto max-w-[498px]"
              heading="Let's Start a Conversation"
            />
            <img
              className="w-full max-sm:w-[80%] lg:w-[483px] pt-5 lg:h-[350px] max-lg:mx-auto max-md:mb-7"
              src={conversation}
              alt="conversation_Image"
            />
          </div>
          <div className="w-full px-3 lg:pt-10 lg:w-[53%]">
            <form className="lg:mt-[10px]" onSubmit={handleSubmit}>
              <div className="flex sm:flex-row flex-col sm:gap-4">
                <div className="lg:max-w-[297px] w-full mb-3 sm:mb-[14px]">
                  <input
                    required
                    className="text-sm md:text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border-solid border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                    type="text"
                    placeholder="First Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {formErrors.name && (
                    <p className="error-message font-plusJkarta">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div className="lg:max-w-[297px] w-full mb-3 sm:mb-[14px]">
                  <input
                    required
                    className="text-sm md:text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border-solid border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                    type="text"
                    placeholder="Last Name"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {formErrors.lastname && (
                    <p className="error-message font-plusJkarta">
                      {formErrors.lastname}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex sm:flex-row flex-col sm:gap-4">
                <div className="lg:max-w-[297px] w-full mb-3 sm:mb-[14px]">
                  <input
                    required
                    className="text-sm md:text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border-solid border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                    type="text"
                    placeholder="Subject"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {formErrors.subject && (
                    <p className="error-message font-plusJkarta">
                      {formErrors.subject}
                    </p>
                  )}
                </div>
                <div className="lg:max-w-[297px] w-full mb-3 sm:mb-[14px]">
                  <input
                    required
                    className="text-sm md:text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border-solid border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                    type="number"
                    placeholder="Mobile Number"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    autoComplete="off"
                    maxLength={10}
                  />
                  {formErrors.number && (
                    <p className="error-message font-plusJkarta">
                      {formErrors.number}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full mb-3 sm:mb-[14px]">
                <input
                  required
                  className="text-sm md:text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border-solid border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                  type="text"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {formErrors.email && (
                  <p className="error-message font-plusJkarta">
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div className="w-full mb-3 xl:min-h-[159] sm:mb-[14px] lg:mb-[18px]">
                <textarea
                  required
                  className="resize-none text-sm md:text-base !text-black h-[159px] placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border-solid border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                  placeholder="Tell us more about your projects"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {formErrors.message && (
                  <p className="error-message font-plusJkarta">
                    {formErrors.message}
                  </p>
                )}
              </div>
              <div className="flex items-center mb-4">
                <div
                  htmlFor="box"
                  className="flex justify-between items-center max-[450px]:w-full w-[250px] lg:w-[302px] py-2 px-3 rounded-md border border-noble bg-alabaster"
                >
                  <label className="flex w-[70%] cursor-pointer">
                    <div className="flex items-center">
                      <input
                        required
                        type="checkbox"
                        id="box"
                        name="box"
                        className="custom-checkbox"
                        checked={formData.box}
                        onChange={handleChange}
                      />
                      <span className="ml-2 text-sm md:text-base font-normal text-black opacity-70">
                        I’m not a robot
                      </span>
                    </div>
                  </label>
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[49px] pointer-events-none h-[45px]"
                      src={captcha}
                      alt="captcha_image"
                    />
                    <p className="text-silver !flex-nowrap font-normal font-poppins leading-[12px] text-[8px]">
                      Privacy - Terms
                    </p>
                  </div>
                </div>
              </div>
              {formErrors.box && (
                <p className="error-message font-plusJkarta">
                  {formErrors.box}
                </p>
              )}
              <div className="flex lg:justify-start justify-center">
                <Button
                  type="submit"
                  className="md:!px-[99px]"
                  content="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
