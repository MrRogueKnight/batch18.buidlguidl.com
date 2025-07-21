import Image from "next/image";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const AVATAR_URL = "https://avatars.githubusercontent.com/u/583231?v=4";
const WALLET_ADDRESS = "0xaC1bBf2Aba61D6fC6fCbade72eCe3362de4724c3";

const SOCIALS = [
  { name: "Twitter", url: "https://twitter.com/yourhandle", icon: "🐦" },
  { name: "GitHub", url: "https://github.com/yourhandle", icon: "💻" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourhandle", icon: "🔗" },
];

const Web3ProfilePage: NextPage = () => {
  return (
    <main className="min-h-screen bg-base-100 flex items-center justify-center">
      <section className="bg-base-100 rounded-xl shadow-xl p-10 max-w-md w-full text-center">
        <Image
          src={AVATAR_URL}
          alt="Avatar"
          width={100}
          height={100}
          className="rounded-full object-cover shadow-sm mx-auto mb-4"
          priority
        />
        <h1 className="text-3xl font-bold text-primary mb-2">Gul Ahmed</h1>
        <p className="text-base-content/70 mb-4">
          Web3 developer & blockchain enthusiast. Building the decentralized future, one block at a time.
        </p>
        <div className="mb-4">
          <Address address={WALLET_ADDRESS} />
        </div>
        <div className="flex justify-center gap-4">
          {SOCIALS.map(social => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-2xl hover:text-primary-focus transition-colors"
            >
              <span role="img" aria-label={social.name}>
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Web3ProfilePage;
