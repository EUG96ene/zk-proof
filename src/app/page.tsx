"use client";

import { ResearchSubmissionForm } from "@/components/research-submissionform";
import { PeerReview } from "@/components/peer-review";
import { useState } from "react";

type ZKP = {
  proof: string;
  publicSignals: string[];
};

export default function Home() {
  const [txHash, setTxHash] = useState<string | null>(null);
  const [zkp, setZkp] = useState<ZKP | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">ZK-Proof Research Authentication Demo</h1>
      <ResearchSubmissionForm
        onSubmission={(hash, proof) => {
          setTxHash(hash);
          setZkp(proof);
        }}
      />
      {txHash && zkp && <PeerReview txHash={txHash} zkp={zkp} />}
    </main>
  );
}