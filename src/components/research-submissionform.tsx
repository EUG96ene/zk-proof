"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generateHash } from "@/lib/hash";
import { ClipLoader } from "react-spinners";
import { generateZKP } from "@/lib/zkp";

type ZKP = {
  proof: string;
  publicSignals: string[];
};

export function ResearchSubmissionForm({
  onSubmission,
}: {
  onSubmission: (hash: string, proof: ZKP) => void; 
}) {
  const [researchContent, setResearchContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      console.log("Generating hash...");
      const hash = await generateHash(researchContent);
      console.log("Hash generated:", hash);

      console.log("Generating ZKP...");
      const zkp = await generateZKP(hash);
      console.log("ZKP generated:", zkp);

      console.log("Submitting to blockchain...");
      const simulatedTxHash = await submitToBlockchain(zkp);
      console.log("Blockchain submission successful. Transaction Hash:", simulatedTxHash);

      setTxHash(simulatedTxHash);
      onSubmission(simulatedTxHash, zkp);
    } catch (error) {
      console.error("Submission failed:", error);
      setError("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const submitToBlockchain = async (zkp: ZKP) => { 
    console.log("Simulating blockchain submission...");
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    return "simulated-transaction-hash";
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Submit Research</CardTitle>
        <CardDescription>Upload your research content to authenticate it using ZK-Proofs.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="researchContent" className="mb-4">Research Content</Label>
            <Input
              id="researchContent"
              type="text"
              placeholder="Enter your research content"
              value={researchContent}
              onChange={(e) => setResearchContent(e.target.value)}
              required
            />
          </div>
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="cursor-pointer disabled:cursor-not-allowed"
          >
            {isSubmitting ? <ClipLoader size={20} color="#ffffff" /> : "Submit Research"}
          </Button>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </CardContent>
      {txHash && (
        <CardFooter>
          <p className="text-sm text-green-600">Research submitted successfully. Transaction Hash: {txHash}</p>
        </CardFooter>
      )}
    </Card>
  );
}