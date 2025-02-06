import React from "react";
import { VscGithub } from "react-icons/vsc";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdPhoneMissed } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  const openInNewWindow = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Rester
            </h1>
            <p className="">
              Restaurant, establishment where refreshments or meals may be
              procured by the public.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaMapLocationDot />
              <p>Dehradun, Uttarakhand </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <MdPhoneMissed />
              <p>+91 9756964307</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                onClick={() => openInNewWindow("https://github.com/rahul2k21")}
              >
                <VscGithub className="text-3xl" />
              </a>
              <a
                href="#"
                onClick={() =>
                  openInNewWindow(
                    "https://www.linkedin.com/in/rahul-mandal-953919245"
                  )
                }
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="#"
                onClick={() => openInNewWindow("https://instagram.com")}
              >
                <FaInstagram className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-16 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  ABOUT
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer">Project</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Blog</li>
                  <li className="cursor-pointer">Awards</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  ADDRESS
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Dehradun,248007</li>
                  <li className="cursor-pointer">Uttarakhand</li>
                  <li className="cursor-pointer">rahulmandal2k21@gmail.com</li>
                  <li className="cursor-pointer">9548979279</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2025 All rights reserved || Made with ❤️ by Rahul Mandal
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
