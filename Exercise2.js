// Ex 02
// part 1

let name1 = 'John';  
let name2 = 'Smith';
let name3 = 'Sandy';

const greetingFriends = () => {
    return `Welcome ${name1}, ${name2}, ${name3}`
}

console.log(greetingFriends());


// part 2

ageNow = (birthYear) => {
    let year = 2023;
    ageNow = year - birthYear;
    return `${birthYear} returns ${ageNow}`;
}

console.log(ageNow(1991));


// name and age

const greetings = (name1, age1, name2, age2, name3, age3) => {
  console.log(
    `Welcome ${name1}, you are ${ageNow(
      age1
    )}. Welcome ${name2}, you are ${ageNow(
      age2
    )}. Welcome ${name3}, you are ${ageNow(age3)}.`
  );
};

