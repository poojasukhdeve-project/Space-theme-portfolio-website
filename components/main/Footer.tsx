import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const community = [
    { name: "YouTube", icon: <FaYoutube aria-hidden="true" />, href: "https://youtube.com/" },
    { name: "Github", icon: <RxGithubLogo aria-hidden="true" />, href: "https://github.com/" },
  ];

  const social = [
    { name: "Instagram", icon: <RxInstagramLogo aria-hidden="true" />, href: "https://instagram.com/" },
    { name: "Discord", icon: <RxDiscordLogo aria-hidden="true" />, href: "https://discord.com/" },
    { name: "LinkedIn", icon: <RxLinkedinLogo aria-hidden="true" />, href: "https://www.linkedin.com/" },
    { name: "Twitter", icon: <RxTwitterLogo aria-hidden="true" />, href: "https://twitter.com/" },
  ];

  const about = [
    { name: "Developer" },
    { name: "Learnings" },
    { name: "poojasukhdeve06@gmail.com", isEmail: true },
  ];

  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-around gap-8">
          <section className="min-w-[200px] flex flex-col items-center">
            <h3 className="font-bold text-[16px] mb-2">Community</h3>
            {community.map((item) => (
              <p key={item.name} className="flex items-center my-2">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex items-center gap-3 hover:text-white"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[15px]">{item.name}</span>
                </a>
              </p>
            ))}
          </section>

          <section className="min-w-[200px] flex flex-col items-center">
            <h3 className="font-bold text-[16px] mb-2">Social Media</h3>
            {social.map((item) => (
              <p key={item.name} className="flex items-center my-2">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex items-center gap-3 hover:text-white"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[15px]">{item.name}</span>
                </a>
              </p>
            ))}
          </section>

          <section className="min-w-[200px] flex flex-col items-center">
            <h3 className="font-bold text-[16px] mb-2">About</h3>
            {about.map((a) => (
              <p key={a.name} className="flex items-center my-2">
                {a.isEmail ? (
                  <a href={`mailto:${a.name}`} className="text-[15px] hover:underline">
                    {a.name}
                  </a>
                ) : (
                  <span className="text-[15px]">{a.name}</span>
                )}
              </p>
            ))}
          </section>
        </div>

        <div className="mt-6 text-center text-[15px]">
          &copy; DataAnalytics &amp; Web Dev 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
