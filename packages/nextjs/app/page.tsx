"use client";

import { useMemo } from "react";
import Constellation, { type Builder } from "../components/Constellation";
import type { NextPage } from "next";
import { useScaffoldEventHistory, useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const CONSTELLATION_LAYOUT = [
  { id: "v1", position: { x: 5, y: 15 }, size: "large" as const },
  { id: "v2", position: { x: 35, y: 5 }, size: "small" as const },
  { id: "v3", position: { x: 90, y: 25 }, size: "small" as const },
  { id: "v4", position: { x: 75, y: 50 }, size: "small" as const },
  { id: "v7", position: { x: 50, y: 90 }, size: "small" as const },
  { id: "v8", position: { x: 25, y: 95 }, size: "small" as const },
  { id: "v9", position: { x: 0, y: 75 }, size: "large" as const },
  { id: "v10", position: { x: 45, y: 30 }, size: "small" as const },
  { id: "v11", position: { x: 15, y: 40 }, size: "small" as const },
  { id: "v12", position: { x: 45, y: 65 }, size: "large" as const },
];

const CONTRACT_FROM_BLOCK: bigint = 355913556n;

const Home: NextPage = () => {
  const { data: checkedInCounter } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  const { data: checkedInEvents, isLoading: isEventsLoading } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: CONTRACT_FROM_BLOCK,
    blocksBatchSize: 5000000,
  });

  const processedBuilders: Builder[] = useMemo(() => {
    const uniqueEvents = checkedInEvents?.filter(
      (event, index, self) => index === self.findIndex(e => e.args.builder === event.args.builder),
    );

    return CONSTELLATION_LAYOUT.map((layoutNode, index) => {
      const event = uniqueEvents?.[index];
      const address = event?.args.builder ?? "";

      return {
        id: layoutNode.id,
        address: address,
        position: layoutNode.position,
        size: layoutNode.size,
      };
    });
  }, [checkedInEvents]);

  return (
    <>
      <div
        className="flex grow h-full relative overflow-hidden"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
            {isEventsLoading ? (
              <p className="m-auto text-white">Loading Constellation...</p>
            ) : (
              <Constellation builders={processedBuilders} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
