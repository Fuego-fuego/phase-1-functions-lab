// Code your solution in this file!

const scuberHeadquarterStreetNumber = 42;

const blocksToFeetConversionConstant = 264;



function distanceFromHqInBlocks(streetBlockNumber){
    // if block number is higher than HQ block number
    if(scuberHeadquarterStreetNumber < streetBlockNumber){
        
        const blockDistance = streetBlockNumber - scuberHeadquarterStreetNumber;
        
        return blockDistance;
    }
    // if block number is lesser than HQ block number
    else if(scuberHeadquarterStreetNumber > streetBlockNumber){
        
        const blockDistance = scuberHeadquarterStreetNumber -streetBlockNumber;
        
        return blockDistance;
        // if block number is a negativee number
}else if(streetBlockNumber < 0){

    return `not a valid block number`;
}


}

function distanceFromHqInFeet(streetBlockNumber){
    // Calls the f(x) calculating block number difference 
    const blockDistance = distanceFromHqInBlocks(streetBlockNumber);

    // converts blocks streets difference to feet
    const blockDistanceToFeet = blocksToFeetConversionConstant * blockDistance;

    return blockDistanceToFeet;

    
}


function distanceTravelledInFeet(blockNum1,blockNum2){
    
    // Block number 1 is greater than block number 2
    if(blockNum1 > blockNum2){

        const blockDistance = blockNum1 - blockNum2;
        const blockDistanceToFeet = blockDistance * blocksToFeetConversionConstant;
    
        return blockDistanceToFeet;
        
        
    }// Block number 1 is less than block number 2
    else if (blockNum1 < blockNum2){
        
        const blockDistance = blockNum2 - blockNum1;
        const blockDistanceToFeet = blockDistance * blocksToFeetConversionConstant;
    
        return blockDistanceToFeet;
    } // Block number 1 ior block number 2 is a negative number
    else if (blockNum1 < 0 || blockNum2 < 0){

        return `not a valid block address`
    }

}
function calculatesFarePrice(start, destination){

    const fairChargingStartingDistance = 400;
    const distance = distanceTravelledInFeet(start,destination);

    //Distances <= 400 is free   
    if (distance <= fairChargingStartingDistance){
        
        const fairCost = 0;
        return fairCost;
    }
    // Charges 2 cents per foot after 400 feet upto 2000 feet
    else if(distance > fairChargingStartingDistance && distance <= 2000){

        const fairCost = (distance - fairChargingStartingDistance)*0.02;

        return fairCost;

    }
    // Charges 25 dollars for a distance over 2000 feet upto 2500 feet
    else if (distance > 2000 && distance <=2500){
        const fairCost = 25;

        return fairCost;
    }
    // Does not allow rides above 2500 feet
    else if(distance > 2500){

        return `cannot travel that far`;
    }
}

