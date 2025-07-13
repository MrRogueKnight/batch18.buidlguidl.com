import React from "react";
import { FaCube, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const CryptoVoyager: React.FC = () => {
  const name = "Crypto Voyager";
  const githubUrl = "https://github.com/Animesh-Parashar";
  const linkedinUrl = "https://www.linkedin.com/in/animesh-parashar-378659320/";
  const mailTo = "animeshparashar3439@gmail.com";
  const walletAddress = "0xcf942c47bc33dB4Fabc1696666058b784F9fa9ef";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-sm w-full text-center">
        <div
          className="w-28 h-28 rounded-full mx-auto mb-6
                     bg-gradient-to-br from-blue-500 to-purple-600
                     flex items-center justify-center"
          aria-label="Blockchain/Web3 Icon"
        >
          <FaCube size={48} className="text-white" />
        </div>

        <h1 className="text-3xl font-bold text-gray-100 mb-2">{name}</h1>

        <p className="text-gray-300 text-lg mb-6">Hello Everyone,</p>
        <p className="text-gray-300 text-lg mb-6">
          My name is Animesh Parashar. I am currently pursuing my undergraduate studies at IIT Dhanbad.
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <FaGithub size={32} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href={`mailto:${mailTo}`}
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Send Email"
          >
            <FaEnvelope size={32} />
          </a>
        </div>

        <p className="text-white-700 text-sm mb-6 px-4">
          Exploring the decentralized web, from smart contracts to blockchain applications. Passionate about innovation
          and building the future of the internet.
        </p>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-lg font-semibold text-gray-200 mb-3">My Wallet Address:</p>
          <div
            className="bg-gray-700 p-4 rounded-md break-words text-gray-100 text-sm font-mono select-all
                       border border-gray-600"
          >
            {walletAddress}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoVoyager;
