import React from "react";
import { Balance } from "../Balance";
import { AddressInfoDropdown } from "./AddressInfoDropdown";
import { AddressQRCodeModal } from "./AddressQRCodeModal";
import { WrongNetworkDropdown } from "./WrongNetworkDropdown";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Address } from "viem";
import { useNetworkColor } from "~~/hooks/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { getBlockExplorerAddressLink } from "~~/utils/scaffold-eth";

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton = () => {
  const networkColor = useNetworkColor();
  const { targetNetwork } = useTargetNetwork();

  // We'll use a state to store the current account address
  const [currentAddress, setCurrentAddress] = React.useState<Address | undefined>(undefined);

  // Add contract read hooks for batch membership and checked-in status
  const { data: isBatchMember } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [currentAddress],
  });
  const { data: checkedInAddress } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [currentAddress],
  });
  // Helper to check for zero address
  const isCheckedIn = checkedInAddress && checkedInAddress !== "0x0000000000000000000000000000000000000000";

  // We'll use a ref to store the last account address
  const accountRef = React.useRef<string | undefined>(undefined);

  // This effect will update currentAddress when the account changes
  // We'll get the account address from the ConnectButton.Custom render prop via a setter
  const setAccountAddress = React.useCallback((address: string | undefined) => {
    if (address && accountRef.current !== address) {
      accountRef.current = address;
      setCurrentAddress(address as Address);
    } else if (!address && accountRef.current !== undefined) {
      accountRef.current = undefined;
      setCurrentAddress(undefined);
    }
  }, []);

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        // Call the setter for account address on every render
        setAccountAddress(account?.address);

        const connected = mounted && account && chain;
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(targetNetwork, account.address)
          : undefined;

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button className="btn btn-primary btn-sm" onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported || chain.id !== targetNetwork.id) {
                return <WrongNetworkDropdown />;
              }

              return (
                <>
                  <div className="flex flex-col items-center mr-1">
                    <Balance address={account.address as Address} className="min-h-0 h-auto" />
                    <span className="text-xs" style={{ color: networkColor }}>
                      {chain.name}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <AddressInfoDropdown
                      address={account.address as Address}
                      displayName={account.displayName}
                      ensAvatar={account.ensAvatar}
                      blockExplorerAddressLink={blockExplorerAddressLink}
                    />
                    {/* Badges for batch member and checked-in status */}
                    {isBatchMember && (
                      <span
                        className="ml-2 badge badge-primary text-base align-middle"
                        title="This address is a Batch 18 member"
                        aria-label="Batch 18 member"
                      >
                        🎓 Batch 18
                      </span>
                    )}
                    {isCheckedIn && (
                      <span
                        className="ml-1 badge badge-success text-base align-middle"
                        title="This address is checked in"
                        aria-label="Checked in"
                      >
                        🟢 Checked In
                      </span>
                    )}
                  </div>
                  <AddressQRCodeModal address={account.address as Address} modalId="qrcode-modal" />
                </>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};
