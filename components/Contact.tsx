import { firaCodeFont } from "@/utils/fonts";
import React, { useState } from "react";
import axios from "axios";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

type ContactInfo = {
  name: string;
  message: string;
  email: string;
};
type ContactInfoError = {
  name: boolean;
  message: boolean;
  email: boolean;
};

function Contact() {
  const [contact, setContact] = useState<ContactInfo>({
    name: "",
    message: "",
    email: "",
  });
  const [contactError, setContactError] = useState<ContactInfoError>({
    name: false,
    message: false,
    email: false,
  });

  const [hasBeenAltered, setHasBeenAltered] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !contact.email.trim() ||
      !contact.name.trim() ||
      !contact.message.trim()
    ) {
      alert("Please, fill out all the fields.");
      return;
    }

    setLoading(true);
    axios
      .post("/api/email", contact)
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);

        setContact({
          name: "",
          message: "",
          email: "",
        });

        setHasBeenAltered(false);
      })
      .catch((err) => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setContact({ ...contact, [e.target.name]: e.target.value });

    if (!hasBeenAltered) {
      setHasBeenAltered(true);
    }

    if (e.target.name === "email") {
      setContactError({
        ...contactError,
        email: !isValidEmail(e.target.value),
      });
      return;
    }
    setContactError({
      ...contactError,
      [e.target.name]: e.target.value.trim().length === 0,
    });
  }

  function validateInput(
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) {
    if (e.target.name === "email") {
      setContactError({
        ...contactError,
        email: !isValidEmail(e.target.value),
      });
      return;
    }
    setContactError({
      ...contactError,
      [e.target.name]: e.target.value.trim().length === 0,
    });
  }

  function isValidEmail(email: string): boolean {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = emailPattern.test(email);

    // Additional check to validate the domain segment
    if (isValid) {
      const lastPointIndex = email.lastIndexOf(".");
      const domainSegment = email.substring(lastPointIndex + 1);
      isValid = domainSegment.length > 0;
    }
    return isValid;
  }

  const errorStyle = "border-2 border-red-500";

  return (
    <section
      id="contact"
      className={`${firaCodeFont.className} text-offWhite bg-black p-5`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-5xl text-left  lg:text-8xl uppercase font-bold ">
          Contact me.
        </h2>
        <div className="flex space-x-3 text-4xl">
          <Link
            href="https://github.com/ACR1209"
            target="_blank"
            className="hover:text-gray-300 transition-all hover:scale-110"
          >
            <AiFillGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/andres-alejandro-coronel-rodrigues-7a4a4626a/"
            target="_blank"
            className="hover:text-gray-300 transition-all hover:scale-110"
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
      <div className="relative">
        <form onSubmit={handleContact} className="mt-5">
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="text-lg font-bold mb-1">
              Name
            </label>
            <input
              type="text"
              className={`text-black bg-offWhite p-2 ${
                contactError.name ? errorStyle : ""
              }`}
              name="name"
              onBlur={validateInput}
              value={contact.name}
              onChange={handleChange}
            />

            {contactError.name && (
              <p className="text-red-600 font-bold">
                Please, fill out your name.
              </p>
            )}
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="text-lg font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              className={`text-black bg-offWhite p-2 ${
                contactError.email ? errorStyle : ""
              }`}
              name="email"
              onBlur={validateInput}
              value={contact.email}
              onChange={handleChange}
            />

            {contactError.email && (
              <p className="text-red-600 font-bold">
                Please, fill out your email.
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-bold mb-1">
              Message
            </label>
            <textarea
              rows={5}
              onBlur={validateInput}
              className={`text-black bg-offWhite  resize-none p-2 ${
                contactError.message ? errorStyle : ""
              }`}
              name="message"
              value={contact.message}
              onChange={handleChange}
            />

            {contactError.message && (
              <p className="text-red-600 font-bold">
                Please, fill out a message for me.
              </p>
            )}
          </div>
          <div className="w-full flex justify-end">
            <input
              type="submit"
              className="disabled:bg-red-600 disabled:text-offWhite bg-offWhite hover:bg-blackPortfolio hover:text-offWhite transition-all  cursor-pointer mt-5 px-5 py-2 text-blackPortfolio"
              value="Send"
              disabled={
                loading ||
                !hasBeenAltered ||
                Object.values(contactError).some((error) => error === true)
              }
            />
          </div>
        </form>

        <div className="absolute bottom-0">
          {success && (
            <div
              id="success"
              className="bg-green-600 p-2 w-9/12 md:w-full  text-offWhite"
            >
              Message sent succesfully!
            </div>
          )}
          {error && (
            <div
              id="error"
              className="bg-red-600 p-2 w-9/12 md:w-full  text-offWhite"
            >
              There was an error sending the message!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
