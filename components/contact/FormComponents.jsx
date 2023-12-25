"use client";

import { useState } from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function FormComponents() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      return toast.error("Please fill all the fields");
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        toast.success("Message sent");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div className="container grid grid-cols-2 my-10">
      {/*FORM*/}
      <div className="w-full">
        <h1>
          Let{"'"}s <span className="text-primary">begin</span>
        </h1>
        <form className="w-4/5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="on"
          />
          <input
            type="text"
            placeholder="Email adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="on"
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            rows="7"
            className="resize-none w-full rounded outline-none border-2 border-gray-400 p-4 text-xl text-gray-700 my-4"
            placeholder="Tell us about the project"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary hover:bg-orange-800 text-white px-10 py-4 rounded-full"
          >
            Send
          </button>
        </form>
      </div>
      {/*GRID*/}
      <div className="grid grid-cols-2 place-items-center p-10 3xl:p-20">
        <div className="h-full w-full border-r-2 flex flex-col justify-center items-center space-y-3">
          <h2 className="text-[1.2rem] font-extrabold">New Business</h2>
          <p className="font-extrabold text-[0.75rem] text-gray-500">
            HELLO@DOMAIN.COM
          </p>
        </div>
        <div className="h-full w-full border-b-2 flex flex-col justify-center items-center space-y-3 -mb-1">
          <h2 className="text-[1.2rem] font-extrabold">Main Studio</h2>
          <p className="font-extrabold text-[0.75rem] text-gray-500">
            STUDIO@DOMAIN.COM
          </p>
        </div>
        <div className="h-full w-full border-t-2 flex flex-col justify-center items-center space-y-3">
          <h2 className="text-[1.2rem] font-extrabold">Our Office</h2>
          <p className="font-extrabold text-[0.75rem] text-gray-500">
            Akeshusstra Oslo, Norway
          </p>
        </div>

        <div className="h-full w-full border-l-2 flex flex-col justify-center items-center space-y-3 -ml-1">
          <h2 className="text-[1.2rem] font-extrabold">Our Socials</h2>
          <div className="font-extrabold text-[0.75rem] text-gray-500">
            <div className="flex items-center gap-5">
              <FaYoutube className="inline-block" size={20} />
              <FaWhatsapp className="inline-block" size={20} />
              <FaInstagram className="inline-block" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
