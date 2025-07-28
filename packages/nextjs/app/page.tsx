"use client";

import Constellation from "../components/Constellation";
import type { NextPage } from "next";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { data: checkedInCounter } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  return (
    <div className="flex grow h-full relative overflow-hidden bg-[url('/background.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex w-full">
        <div className="w-full md:w-1/3 flex flex-col justify-center items-start p-8 md:pl-24">
          <h1 className="text-white text-left">
            <span className="block text-4xl md:text-5xl">Welcome to</span>
            <span className="block text-6xl md:text-7xl font-bold mt-2">Batch 18</span>
          </h1>
          <p className="text-left text-lg text-gray-300 mt-6 max-w-md">
            Get started by taking a look at your batch GitHub repository.
          </p>
          <p className="text-lg flex gap-2 items-center mt-8 font-mono bg-black/40 backdrop-blur-sm p-3 rounded-lg text-cyan-300 border border-cyan-300/20">
            <span className="font-bold text-gray-200">Checked in builders:</span>
            <span className="text-xl">{checkedInCounter?.toString() || "..."}</span>
          </p>
        </div>

        <div className="hidden md:flex w-2/3 h-full">
          <Constellation />
        </div>
      </div>
    </div>
  );
};

export default Home;
