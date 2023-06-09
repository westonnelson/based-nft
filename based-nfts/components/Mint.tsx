import { useContract, useContractWrite, ConnectWallet } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract("0x910b138643B31CE20b222Ae6BfB3C86b5C4E7910");
  const { mutateAsync: mintTo, isLoading } = useContractWrite(contract, "mintTo")

  const call = async () => {
    try {
      const data = await mintTo({ args: [_to, _tokenURI] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
}