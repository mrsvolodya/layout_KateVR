"use client";
import Logo from "../../../../public/images/icons/svgs/logo.svg";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageButton } from "./LanguageButton";
import { speakersMob } from "../../../../public/images/icons/svgs";

const Header = () => {
  const t = useTranslations("HomePage");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white h-lvh px-5">
      <nav className="flex items-center justify-between py-[18px]">
        <Image src={Logo} width={58} height={12} alt="Logo KateVR" />
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`flex flex-col justify-between items-center w-4 h-3 relative group`}
          >
            <div
              className={`w-full h-[1px] bg-white transition-all duration-300 transform `}
            ></div>

            <div
              className={`w-full h-[1px] bg-white transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0`}
            ></div>

            <div
              className={`w-full h-[1px] bg-white transition-all duration-300`}
            ></div>
          </div>
        </button>

        <h1 className="hidden md:block text-lg font-bold">{t("title")}</h1>

        <div className="hidden md:flex space-x-4">
          <LanguageButton locale="en">English</LanguageButton>
          <LanguageButton locale="ua">Українська</LanguageButton>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black text-white py-4">
          <LanguageButton locale="en">English</LanguageButton>
          <LanguageButton locale="ua">Українська</LanguageButton>
        </div>
      )}

      <div>
        <Image src={speakersMob} className="w-full" alt="Speakers" />
      </div>

      <h1 className="font-bold text-[26px] leading-8 ">
        THE NEW START OF
        <span className="font-normal text-secondTextColor"> VR LOCOMOTION</span>
      </h1>

      <p className="font-medium text-thirdTextColor text-xs leading-6">
        Discover the most comprehensive VR Locomotion system, and unlock
        infinite motion in any games on any platforms!
      </p>

      <p className="text-center text-[18px] leading-[22px] font-medium mt-2">
        1200$
      </p>
    </header>
  );
};

export default Header;
