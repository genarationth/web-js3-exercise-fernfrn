
// Challenge 

let studentScore = score => {
    if (score > 0 && score < 12) {
        if (score === 11) {
            return 'Perfect';
        } if (score >= 8) {
            return 'Excellence';
        } if (score >= 5) {
            return 'true';
        } else {
            return false;
        }
    }
};

console.log(studentScore(1)); // false
console.log(studentScore(5)); // true
console.log(studentScore(8)); // Excellence
console.log(studentScore(11)); // Perfect
