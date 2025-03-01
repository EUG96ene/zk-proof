"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ZKP = {
  proof: string;
  publicSignals: string[];
};

export function PeerReview({ txHash, zkp }: { txHash: string; zkp: ZKP | null }) {
  const handleApprove = () => {
    if (!zkp) {
      console.error("ZKP is null. Cannot approve research.");
      return;
    }

    console.log("Research approved. Tokens rewarded.");
    console.log("ZKP:", zkp);
  };

  return (
    <Card className="w-full max-w-md mx-4 sm:mx-0 mt-8">
      <CardHeader>
        <CardTitle>Peer Review</CardTitle>
        <CardDescription>Verify and approve the submitted research.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Transaction Hash: {txHash}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleApprove} className="w-full sm:w-auto cursor-pointer disabled:cursor-not-allowed">
          Approve Research
        </Button>
      </CardFooter>
    </Card>
  );
}