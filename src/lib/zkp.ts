export const generateZKP = async (hash: string) => {
    console.log("Simulating ZKP generation...");
    
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
    return {
      proof: "simulated-proof",
      publicSignals: [hash],
    };
  };