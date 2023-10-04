// index.js

// Function to calculate distance from headquarters in blocks
function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - 42);
  }
  
  // Function to calculate distance from headquarters in feet
  function distanceFromHqInFeet(blockNumber) {
    const blocks = distanceFromHqInBlocks(blockNumber);
    return blocks * 264; // 1 block = 264 feet
  }
  
  // Function to calcuXlate distance traveled in feet
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(endBlock - startBlock);
    return blocks * 264; // 1 block = 264 feet
  }
  
  // Function to calculate fare price
  function calculatesFarePrice(startBlock, endBlock) {
    const feet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (feet <= 400) {
      return 0; // Free sample
    } else if (feet > 400 && feet <= 2000) {
      return (feet - 400) * 0.02; // 2 cents per foot beyond 400 feet
    } else if (feet > 2000 && feet <= 2500) {
      return 25; // Flat fare for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // Distance exceeds 2500 feet
    }
  }
 