function reverseNumber(num) {
    // Convert number to string, split into array, reverse, and join back
    let reversed = Math.abs(num).toString().split('').reverse().join('');
    
    // Convert back to number and preserve negative sign if applicable
    return num < 0 ? -Number(reversed) : Number(reversed);
}

// Example usage
console.log(reverseNumber(12345)); 
console.log(reverseNumber(-9876)); 
