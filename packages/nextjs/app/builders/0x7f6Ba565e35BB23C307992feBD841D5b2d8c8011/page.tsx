import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { FaRunning } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { Address } from "~~/components/scaffold-eth";

const KongPage: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col grow pt-6 sm:pt-10">
        <div className="pt-6 sm:pt-10 pb-6 sm:pb-10 px-2 sm:px-5 justify-center items-center flex flex-col bg-base-100 w-full max-w-3xl rounded-3xl">
          <Image
            src="https://avatars.githubusercontent.com/u/18190481?s=400&u=43a299844e466375bb4fe2235125925bff43b9ff&v=4"
            alt="Avatar"
            width={120}
            height={120}
            className="rounded-full mb-4 w-24 h-24 sm:w-36 sm:h-36"
          />
          <span className="text-xl sm:text-2xl font-bold mb-2">My name is Kong</span>
          {/* Add a welcome message and address */}
          <span className="text-xl sm:text-2xl font-bold mb-2">Welcome to my page!</span>
          <span className="text-base sm:text-lg mb-4">This is my personal page on Batch #18.</span>
          {/* Use the Address component to display the address */}
          <span className="text-base sm:text-lg font-bold">My Ethereum Address:</span>
          <Address address="0x7f6Ba565e35BB23C307992feBD841D5b2d8c8011" onlyEnsOrAddress />
          <div className="text-xl sm:text-2xl font-bold mt-3 mb-3">About Me</div>
          <span className="text-base sm:text-xl font-bold mb-4 mt-2 px-2 sm:px-20 text-center">
            I am a backend development engineer with 5 years of work experience, specializing in Java and Python for web
            development.
          </span>
          <span className="text-base sm:text-xl font-bold mb-4 mt-2 px-2 sm:px-20 text-center">
            My passion lies in delving deep into development technologies, constantly exploring new solutions to enhance
            system performance and functionality.
          </span>
          <div className="text-xl sm:text-2xl font-bold mt-3 mb-3">Contact Me</div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
            {/* Add social media links */}
            <span className="text-lg font-bold sm:pl-20 sm:pr-20">
              <Link href="https://github.com/fjkang" target="_blank">
                <SiGithub className="w-8 h-8 sm:w-10 sm:h-10" />
              </Link>
            </span>
            <span className="text-lg font-bold sm:pl-20 sm:pr-20">
              <Link
                href="https://speedrunethereum.com/builders/0x7f6Ba565e35BB23C307992feBD841D5b2d8c8011"
                target="_blank"
              >
                <FaRunning className="w-8 h-8 sm:w-10 sm:h-10" />
              </Link>
            </span>
            <span className="text-lg font-bold sm:pl-20 sm:pr-20">
              <Link href="mailto:fjkang1991@gmail.com">
                <MdOutgoingMail className="w-8 h-8 sm:w-10 sm:h-10" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default KongPage;
