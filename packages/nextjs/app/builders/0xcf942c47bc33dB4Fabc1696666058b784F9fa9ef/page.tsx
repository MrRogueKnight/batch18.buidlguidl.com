"use client";

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useTheme } from "next-themes";
import { FaCube, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const name = "Crypto Voyager";
const githubUrl = "https://github.com/Animesh-Parashar";
const linkedinUrl = "https://www.linkedin.com/in/animesh-parashar-378659320/";
const mailTo = "animeshparashar3439@gmail.com";
const walletAddress = "0xcf942c47bc33dB4Fabc1696666058b784F9fa9ef";

const CryptoVoyager: NextPage = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-sm w-full text-center">Loading theme...</div>
      </div>
    );
  }

  const isDarkMode = resolvedTheme === "dark";

  const pageBg = isDarkMode ? "bg-gray-900" : "bg-gray-200";
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const nameColor = isDarkMode ? "text-gray-100" : "text-gray-800";
  const bioColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const socialIcon = isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900";
  const descriptionColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const dividerBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
  const walletLabelColor = isDarkMode ? "text-gray-200" : "text-gray-700";
  const walletBoxBg = isDarkMode ? "bg-gray-700" : "bg-gray-50";
  const walletBoxBorder = isDarkMode ? "border-gray-600" : "border-gray-200";
  const walletAddressColor = isDarkMode ? "text-gray-100" : "text-gray-700";
  const iconBorderColor = isDarkMode ? "border-blue-400" : "border-blue-500";

  return (
    <div className={`min-h-screen flex items-center justify-center ${pageBg} p-4`}>
      <div className={`relative ${cardBg} p-8 rounded-lg shadow-xl max-w-sm w-full text-center`}>
        <div
          className={`w-28 h-28 rounded-full mx-auto mb-6
                     bg-gradient-to-br from-blue-500 to-purple-600
                     flex items-center justify-center ${iconBorderColor}`}
          aria-label="Blockchain/Web3 Icon"
        >
          <FaCube size={48} className="text-white" />
        </div>

        <h1 className={`text-3xl font-bold ${nameColor} mb-2`}>{name}</h1>

        <p className={`${bioColor} text-lg mb-6`}>Hello Everyone,</p>
        <p className={`${bioColor} text-lg mb-6`}>
          My name is Animesh Parashar. I am currently pursuing my undergraduate studies at IIT Dhanbad.
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${socialIcon} transition-colors duration-200`}
            aria-label="GitHub Profile"
          >
            <FaGithub size={32} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${socialIcon} transition-colors duration-200`}
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href={`mailto:${mailTo}`}
            className={`${socialIcon} transition-colors duration-200`}
            aria-label="Send Email"
          >
            <FaEnvelope size={32} />
          </a>
        </div>

        <p className={`${descriptionColor} text-sm mb-6 px-4`}>
          Exploring the decentralized web, from smart contracts to blockchain applications. Passionate about innovation
          and building the future of the internet.
        </p>

        <div className={`mt-8 pt-6 border-t ${dividerBorder}`}>
          <p className={`text-lg font-semibold ${walletLabelColor} mb-3`}>My Wallet Address:</p>
          <div
            className={`${walletBoxBg} p-4 rounded-md break-words ${walletAddressColor} text-sm font-mono select-all
                       border ${walletBoxBorder} flex justify-center items-center`}
          >
            <Address address={walletAddress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoVoyager;
