import React from "react";
import {
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaSlack,
  FaDiscord,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" mt-24 mb-12 lg:mb-0">
      <div className="h-[150px] w-full grid grid-cols-1 lg:grid-cols-3 justify-between items-center">
        <div className=" mx-auto lg:mx-0">
          {" "}
          <img src="/logas.png" className="w-[300px]" />
        </div>
        <div className="mx-auto">2021 © Argen.AI</div>
        <div className="flex gap-6 items-center lg:ml-auto mx-auto lg:mx-0">
          <div className="h-[50px] w-[50px] rounded-full bg-accent/20 flex items-center justify-center text-xl text-accent">
            <a href="https://t.me/argenai" target="_blank">
              <FaTelegramPlane />
            </a>
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-accent/20 flex items-center justify-center text-xl text-accent">
            <a href="https://twitter.com/Argenai?s=09" target="_blank">
              <FaTwitter />
            </a>
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-accent/20 flex items-center justify-center text-xl text-accent">
            <a
              href="https://instagram.com/argen.ai?utm_medium=copy_link"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-accent/20 flex items-center justify-center text-xl text-accent">
            <a href="https://discord.gg/AG7n2WXd" target="_blank">
              <FaDiscord />
            </a>
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-accent/20 flex items-center justify-center text-xl text-accent">
            <a
              href="https://join.slack.com/t/argenai/shared_invite/zt-v5yvuic0-PRnvVIt5W2aF5qcvZiQxzA"
              target="_blank"
            >
              <FaSlack />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
