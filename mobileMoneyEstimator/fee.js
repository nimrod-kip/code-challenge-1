function estimateTransactionFee(amountToSend) {
    const AMOUNT = Number(amountToSend);
  
    if (isNaN(AMOUNT) || AMOUNT <= 0) {
      console.log("Tafadhali ingiza kiasi sahihi zaidi ya sifuri.");
      return;
    }
  
    // 1.5% fee calculation
    const calculatedFee = AMOUNT * 0.015;
  
    // Apply minimum & maximum constraints
    const fee = Math.max(10, Math.min(calculatedFee, 70));
  
    const totalDebited = AMOUNT + fee;
  
    console.log(`Sending KES ${AMOUNT.toLocaleString()}:`);
    console.log(`Calculated Transaction Fee: KES ${fee.toFixed(2)}`);
    console.log(`Total amount to be debited: KES ${totalDebited.toFixed(2)}`);
    console.log("\nSend Money Securely!");
  }
  
  // Prompt the user and run
  const userInput = prompt("Unatuma Ngapi? (KES):");
  estimateTransactionFee(userInput);
  