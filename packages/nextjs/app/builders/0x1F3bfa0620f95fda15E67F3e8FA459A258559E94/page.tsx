import Image from "next/image";
import { NextPage } from "next";

const AriiellusWebsite: NextPage = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-5 px-5 relative bg-base-100 text-base-content min-h-screen">
      {/* Skills and Interests Section */}
      <div className="flex justify-between border-b border-base-300 pb-5">
        <div className="flex flex-col">
          <Image
            src="https://raw.githubusercontent.com/Ariiellus/personalWebsite/main/assets/Fuffle1405.png"
            alt="Ariiellus Profile Picture"
            width={144}
            height={144}
            className="w-36 h-36 rounded-full"
          />
          <h2 className="mt-4 text-xl font-semibold">Delegate at</h2>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <a
                href="https://www.tally.xyz/gov/obol/delegate/ariiellus.eth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Obol Collective
              </a>
            </li>
            <li>
              <a
                href="https://vote.ether.fi/delegates/ariiellus.eth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                EtherFi
              </a>
            </li>
          </ul>
        </div>

        <div className="w-1/2">
          <br />

          <h2 className="text-xl font-semibold mt-2">Contact</h2>
          <div className="flex flex-col space-y-1 mt-2">
            <a
              href="https://x.com/Ariiellus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              X
            </a>
            <a
              href="https://t.me/Ariiellus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Telegram
            </a>
            <a
              href="https://github.com/ariiellus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Github
            </a>
          </div>

          <h2 className="text-xl font-semibold mt-4">Node Operator</h2>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Ethereum Mainnet</li>
            <li>Gnosis Mainnet</li>
          </ul>
        </div>
      </div>

      {/* About Section */}
      <div className="border-b border-base-300 pb-5">
        <h2 className="text-2xl font-semibold mt-5 pb-2">About Me</h2>
        <p className="my-4">
          <a
            href="https://www.facebook.com/VDsixsnowboard/videos/403370100085137/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            this process we follow, this cycle we ride
          </a>
        </p>
        <blockquote className="bg-base-200 border-l-4 border-base-300 p-4 italic my-4">
          🧑‍💻 Hi, I am Ariel! Passionate about Ethereum research, MEV, cryptoeconomics, and Security. Learning Solidity.
          When offline, I love chess, calisthenics, running and climb mountains. 🚀
        </blockquote>
        <p className="my-4">
          <a
            href="https://lazyslowdown.com/ichigo-ichie-embracing-joy-in-transitions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            [一期一会]
          </a>
        </p>
      </div>

      {/* Interests and Hobbies Section */}
      <div className="flex justify-between border-b border-base-300 pb-5">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mt-5 pb-2">Interests</h2>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>🧠 MEV</li>
            <li>📝 Cryptoeconomics</li>
            <li>📊 DeFi Analyst</li>
            <li>🕵️‍♂️ Security</li>
            <li>🔬 Ethereum Research</li>
          </ul>
        </div>

        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mt-5 pb-2">Hobbies</h2>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>♟️ Chess</li>
            <li>🤸‍♂️ Calisthenics</li>
            <li>🏃‍♂️ Running</li>
            <li>⛰️ Mountaineering</li>
            <li>🧠 Perpetual Learning</li>
          </ul>
        </div>
      </div>

      {/* What I Do Section */}
      <div className="border-b border-base-300 pb-5">
        <h2 className="text-2xl font-semibold mt-5 pb-2">What I Do</h2>
        <p className="my-4">
          <a
            href="https://x.com/Research_Kairos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            <strong>Kairos Research</strong> ⌛️
          </a>
          <br />
          Co-founder, CEO, and Main Researcher. I lead my team to write amazing blogs.
        </p>
        <p className="my-4">
          <a
            href="https://x.com/Ethereum_mexico"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            <strong>Ethereum Mexico</strong> 🇲🇽
          </a>
          <br />
          Co-founder, former Community Lead and Finance Manager.
        </p>
      </div>
    </div>
  );
};

export default AriiellusWebsite;
