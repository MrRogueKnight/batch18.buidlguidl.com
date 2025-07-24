"use client";

import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

type Props = {
  publishedBuilders: string[];
};

const CONTRACT_FROM_BLOCK: bigint = 355913556n;

export default function BuildersGrid({ publishedBuilders }: Props) {
  const { data: checkedInEvents, isLoading: isEventsLoading } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: CONTRACT_FROM_BLOCK,
    blocksBatchSize: 5000000, // default 500, so slowly.
  });
  const filteredEvents = checkedInEvents?.filter(event => event?.args?.first);

  return isEventsLoading ? (
    <p>Loading checked-in events...</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-8 lg:px-10 gap-1 md:gap-2 lg:gap-4 w-full max-w-7xl">
      {filteredEvents?.map((event, index) => {
        return (
          <div
            key={index}
            className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-4 py-4"
          >
            <div className="flex">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex gap-2">
                  <span className="font-bold">Builder</span>
                  <div className="truncate flex-1">
                    <Address address={event.args.builder} format="short" onlyEnsOrAddress />
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Contract</span>
                  <div className="truncate flex-1">
                    <Address address={event.args.checkInContract} format="short" onlyEnsOrAddress />
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Profile</span>
                  {publishedBuilders.includes(event.args.builder ?? "") ? (
                    <div className="flex gap-2 items-center">
                      <Link href={`builders/${event.args.builder}`} target="_blank">
                        <button className="btn btn-secondary btn-xs self-end md:self-start">View 🧑‍💻</button>
                      </Link>
                    </div>
                  ) : (
                    <span className="text-sm">N/A</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
