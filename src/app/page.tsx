"use client";
import { Sepolia } from "@thirdweb-dev/chains";
import React from "react";
import Play from "@/components/Play";
import Adventure from "@/components/Adventure";
import {
  ThirdwebProvider,
  metamaskWallet,
  useContract,
} from "@thirdweb-dev/react";
function App() {
  return (
    <ThirdwebProvider
      activeChain={Sepolia}
      clientId="b3e93dd3314ddba56637593cc3055d23"
      supportedWallets={[metamaskWallet()]} // You can get a client id from dashboard settings
    >
      <Component />
    </ThirdwebProvider>
  );
}
const Component = () => {
  return (
    // <ThirdwebProvider
    //   clientId="b3e93dd3314ddba56637593cc3055d23"
    //   activeChain={Sepolia}
    //   supportedWallets={[metamaskWallet()]}
    // >
    <main className="overflow-hidden">
      <section className="bg-hero  bg-no-repeat  h-full">
        <Play />
      </section>
      <section className="">
        <Adventure />
      </section>
    </main>
  );
};

export default Component;
