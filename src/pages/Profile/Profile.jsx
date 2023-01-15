import React from "react";
import Container from "../../components/Container";
import ScrollToTop from "../../components/ScrollToTop";
import { FiMail, FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { BiLinkAlt } from "react-icons/bi";

const Profile = () => {
  return (
    <Container>
      <ScrollToTop />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="bg-slate-100 border rounded-xl p-5">
          <h2 className="text-2xl font-medium text-slate-800 mb-4">About Me</h2>
          <p>
            Hi!,{" "}
            <span className="text-yellow-600 font-bold">I'm Rubel Hossain</span>
            . I'm passionate about Web Development ever since I started loving
            playing around with CSS and creating creative designs. Recently I've
            completed{" "}
            <span className="text-yellow-600 font-bold">
              "Complete Web Development"
            </span>{" "}
            course from{" "}
            <span className="text-yellow-600 font-bold">
              "Programming Hero"
            </span>{" "}
            with an excellent performance.
          </p>
        </div>
        <div className="bg-slate-100 border rounded-xl p-5">
          <h2 className="text-2xl font-medium text-slate-800 mb-4">Contact</h2>
          <ul className="font-medium">
            <li className="flex items-center gap-2">
              <FiMail className="text-lg text-yellow-700" />{" "}
              rubel.hossain0649@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <ImWhatsapp className="text-lg text-yellow-700" /> +8801980728221
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-lg text-yellow-700" />{" "}
              https://github.com/rubel-sh
            </li>
            <li className="flex items-center gap-2">
              <BiLinkAlt className="text-lg text-yellow-700" />{" "}
              https://rubel-hossain.netlify.app/
            </li>
            <li className="flex items-center gap-2">
              <FiLinkedin className="text-lg text-yellow-700" />{" "}
              https://www.linkedin.com/in/connectwithrubel/
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
