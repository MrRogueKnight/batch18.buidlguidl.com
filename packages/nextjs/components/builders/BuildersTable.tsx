"use client";

import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

type Props = {
  builders: string[];
};

const CONTRACT_FROM_BLOCK: bigint = 355913556n;

export default function BuildersTable({ builders }: Props) {
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
    <table className="table overflow-hidden">
      <thead>
        <tr>
          <th>Member Address</th>
          <th>Contract Address</th>
          <th>Personal Profile</th>
        </tr>
      </thead>
      <tbody>
        {!filteredEvents || filteredEvents.length === 0 ? (
          <tr>
            <td colSpan={3} className="text-center">
              No Data
            </td>
          </tr>
        ) : (
          filteredEvents?.map((event, index) => {
            return (
              <tr key={index}>
                <td>
                  <Address address={event.args.builder} format="short" onlyEnsOrAddress />
                </td>
                <td>
                  <Address address={event.args.checkInContract} format="short" onlyEnsOrAddress />
                </td>
                <td>
                  {builders.includes(event.args.builder ?? "") ? (
                    <Link
                      href={`builders/${event.args.builder}`}
                      target="_blank"
                      className="text-base text-blue-600 underline hover:text-blue-800 cursor-pointer whitespace-nowrap"
                    >
                      🧑‍💻 builders/{event.args.builder}
                    </Link>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
}
