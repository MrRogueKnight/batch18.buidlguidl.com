import Image from "next/image";
import type { NextPage } from "next";
import { GithubIcon, TelegramIcon, XIcon } from "~~/components/assets/SocialIcons";
import { Address } from "~~/components/scaffold-eth";

const hedgyAddress = "0xADAeE26D04f78D24F2E73D87944f83E2eE50d6BB"; // my develop address

const ByteHedgy: NextPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <div className="relative w-28 h-28 mb-6">
        <Image src="/avatar/hedgy.webp" alt="hedgy Avatar" className="rounded-full shadow-md" fill />
      </div>

      <h1 className="text-4xl font-bold mb-2">Hedgy</h1>
      <p className="mb-2 italic">Spikes up. Code clean. Web3 forever.</p>

      <p className="mb-2 max-w-md">5 years backend dev at a tech company, currently pursuing a master’s in AI.</p>

      <div className="mb-4 font-mono rounded px-4 py-2 select-all">
        <Address address={hedgyAddress} format="long" onlyEnsOrAddress />
      </div>

      <div className="flex gap-6 text-lg">
        <a href="https://github.com/byte-hedgy" target="_blank" rel="noopener noreferrer" className="link">
          <GithubIcon className="w-4 h-4" />
        </a>
        <a href="https://x.com/byte_hedgy" target="_blank" rel="noopener noreferrer" className="link">
          <XIcon className="w-4 h-4" />
        </a>
        <a href="https://telegram.me/byte_hedgy" target="_blank" rel="noopener noreferrer" className="link">
          <TelegramIcon className="w-4 h-4" />
        </a>
      </div>
    </main>
  );
};

export default ByteHedgy;
