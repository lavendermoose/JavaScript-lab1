let name = 'Mitch Cuckovich';
let age = 24;
let birthday = 'Jauary 24';
let pineapplePizza = true;

let lifeEvents = ['I was born in Troy, Michigan.', 'I went to Hope College', 'I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event', 'I am a graduate of a Grand Circus bootcamp']

if (pineapplePizza === true) {
  console.log(`My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`);
} 
else {
  console.log(`My name is ${name} and I'm not into pineapples on pizza. I am currently $[age} years old and my birthday is on ${birthday}`);
}

for (let i = 0; i < lifeEvents.length; i++)  {
  console.log()
}

let counter = 0
while (true) {
  console.log(counter);
  counter++;

  const randomNumber = Math.floor(Math.random() * 10) + 1 
  console.log(randomNumber);

  if (randomNumber !==5) {
    console.log('Random number is not equal to five');
    }
  else (randomNumber ===5); {
    console.log('Random number is equal to five');
    break;
  }
 }