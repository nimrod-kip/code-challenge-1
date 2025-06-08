function calculateChaiIngredients(numberOfCups) {
    // Constants per cup
    const WATER_PER_CUP = 200;    // ml
    const MILK_PER_CUP = 50;      // ml
    const TEA_PER_CUP = 1;        // tablespoons
    const SUGAR_PER_CUP = 2;      // teaspoons
  
    const cups = Number(numberOfCups);
    if (isNaN(cups) || cups <= 0) {
      console.log("Please enter a valid positive number of cups.");
      return;
    }
  
    // Calculate totals
    const totalWater = WATER_PER_CUP * cups;
    const totalMilk = MILK_PER_CUP * cups;
    const totalTea = TEA_PER_CUP * cups;
    const totalSugar = SUGAR_PER_CUP * cups;
  
    // Print results
    console.log(`To make ${cups} cups of Kenyan Chai, you will need:`);
    console.log(`• Water: ${totalWater} ml`);
    console.log(`• Milk: ${totalMilk} ml`);
    console.log(`• Tea Leaves (Majani): ${totalTea} tablespoon${totalTea !== 1 ? 's' : ''}`);
    console.log(`• Sugar (Sukari): ${totalSugar} teaspoon${totalSugar !== 1 ? 's' : ''}`);
    console.log("\nEnjoy your Chai Bora! 🍵");
  }
  
  // Prompt user and run
  const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  calculateChaiIngredients(input);
  