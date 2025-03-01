"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PeerReview({ txHash, zkp }: { txHash: string; zkp: any }) {
  const handleApprove = () => {
    console.log("Research approved. Tokens rewarded.");
    console.log("ZKP:", zkp);
  };

  return (
    <Card className="w-full max-w-md mt-8">
      <CardHeader>
        <CardTitle>Peer Review</CardTitle>
        <CardDescription>Verify and approve the submitted research.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Transaction Hash: {txHash}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleApprove}  className="cursor-pointer disabled:cursor-not-allowed">Approve Research</Button>
      </CardFooter>
    </Card>
  );
}