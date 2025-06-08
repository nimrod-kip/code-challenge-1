function calculateBodaFare(distanceInKm) {
    const baseFare = 50;
    const chargePerKm = 15;
    const travelCost = distanceInKm * chargePerKm;
    const totalFare = baseFare + travelCost;
  
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${travelCost}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda Pikipiki!");
  }
  
  // Prompt the user for input and call the function
  const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
  const distance = Number(userInput);
  
  if (!isNaN(distance) && distance > 0) {
    calculateBodaFare(distance);
  } else {
    console.log("Tafadhali andika nambari sahihi ya kilomita.");
  }
  