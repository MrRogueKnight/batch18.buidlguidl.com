import React from "react";
import { CheckCircleIcon, UsersIcon } from "@heroicons/react/24/solid";

interface ConnectedWalletStatusProps {
  isBatchMember: boolean;
  isCheckedIn: boolean;
}

export const ConnectedWalletStatus: React.FC<ConnectedWalletStatusProps> = ({ isBatchMember, isCheckedIn }) => {
  if (isCheckedIn) {
    return (
      <span
        className="ml-2 inline-flex items-center gap-1 rounded-full bg-green-100 text-green-800 px-3 py-1 text-xs font-semibold"
        title="This address is checked in"
        aria-label="Checked in"
      >
        <CheckCircleIcon className="w-4 h-4 text-green-500" aria-hidden="true" />
        Checked In
      </span>
    );
  }
  if (isBatchMember) {
    return (
      <span
        className="ml-2 inline-flex items-center gap-1 rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-xs font-semibold"
        title="This address is a Batch 18 member"
        aria-label="Batch 18 member"
      >
        <UsersIcon className="w-4 h-4 text-blue-500" aria-hidden="true" />
        Batch Member
      </span>
    );
  }
  return null;
};
