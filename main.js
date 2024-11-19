const myArray = ["apple", "banana", "cherry", "date", "eggplant"];

//1.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "for-loop"

for (let index = 1; index <= 10; index++) {
  console.log(index);
}

//2.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "while loop"

increment = 1; // Setter først variabelverdien vi trenger
while (increment <= 10) {
  // loop syntaxen while (variabel )
  console.log(increment); // printe loopen
  increment++; // ødelegger loopen. (increment + 1 = 2) hjelper loopen med å bli falsk slik at den stopper, men først etter å ha printet det vi trenger
}

// La oss løyse problemet filosofisk som ein post-strukturalist som i
// "Tingen er definert ut fra alt den ikke er"
let decrement = 10;
while (decrement >= 1) {
  console.log(11 - decrement);
  decrement = decrement - 1;
}
// En voila! Slik kan et decrement være et increment, som å fremkalle et negativ.

//3.--------------------------------------------------------------------------------------
// Print each item in myArray using a "for loop".

for (let fruitList in myArray) {
  // i all hovedsak, bare for å vise frem innholdet i listen
  console.log(myArray[fruitList]); // krøkkete veg til målet, men siden neste oppgave er for of, gjør vi det slik.
}

//4.--------------------------------------------------------------------------------------
// Using the myArray.push() method, add "mango" to the end of myArray.
//print myArray using a for... of loop.

let favouriteFruit = "mango"; // vi lager en let med stringen "mango", klargjort for en .push i metoden
for (revisedFruitList of myArray); // iverksetter en for of loop
{
  myArray.push(favouriteFruit); // .push'er "mango" på myArray
  console.log(myArray); // printer en oppdatert myArray som inneholder .push'et
}

//5.--------------------------------------------------------------------------------------
//Using the myArray.splice() method, remove "cherry" from myArray
// print the result using myArray.foreach()

myArray.splice(2, 1); // Fjerner 1 element som er plassert på index 2. (!0, !1, ===2)
myArray.forEach(
  (
    allTheFruitLeftAfterSplicing // forEach åpner opp for en arrow-funksjon som itererer gjennom en splicet myArray
  ) => console.log(allTheFruitLeftAfterSplicing) // Vi printer den nye splice'de variabelen som har gjernet "cherry"
);

//6.--------------------------------------------------------------------------------------
// Using the .shift() and .pop() method, remove the first and last item from myArray.
//print the result

myArray.shift(); // fjerner første element indexen
myArray.pop(); // fjerner siste element i indexen
console.log(myArray); // printer liste med fjernede første- og siste-elementer

// 7.--------------------------------------------------------------------------------------
// create a variable and assign it the content of myArray as a string using .join().
// print your variable.

function getArticle(vowelControl) {
  // array av konsonanter som skal undersøkes til både en if else statement, en .map og en =>
  const vowels = ["a", "e", "i", "o", "u"];
  // Viss [?] den første bokstaven [0] i vowelControl er en vokal (aeiou) returneres "an", viss ikkje [:] returneres "a". (toLowerCase for global sikring)
  return vowels.includes(vowelControl[0].toLowerCase()) ? "an" : "a";
}

const result = myArray
  // Kartlegger VowelcontrollAdd "an" or "a" before each fruit, depending on the first letter
  .map((vowelControl) => `${getArticle(vowelControl)} ${vowelControl}`)
  .join(", ");
console.log(result);
document.getElementById("fruitsJoined").innerHTML = result;

//BONUS - See if you can make the items be seperated by a space

//8--------------------------------------------------------------------------------------
//Create a function that takes a number as an argument and returns that number squared.
// call your function by using a valid argument
function numberSquared(number) {}

numberSquared();

//9.--------------------------------------------------------------------------------------
//Using the "%" (modulo) operator complete the function,
// it should take "number" as an argument and return "even" if its even and "odd" if its odd.
function oddOrEven(number) {}
//call your function by using one of the options below.
// oddOrEven(prompt());
// oddOrEven()

//10.--------------------------------------------------------------------------------------
//write a function that prints the fibbonacci sequence for the number passed into it
// HINT! fibbonacchi =
//  c = a + b;
//  a = b;
//  b = c;
function Fibbonacci(number) {}
Fibbonacci();

//11.--------------------------------------------------------------------------------------
//BONUS!Implement fizzbuzz, if a number is divisible by 3: Fizz, if a number is divisible by 5: Buzz, if the number is divisible by both 3 and 5, FizzBuzz
// https://www.geeksforgeeks.org/fizz-buzz-implementation/
function fizzbuzz(number) {}

fizzbuzz();

//12.--------------------------------------------------------------------------------------
//SUPERBONUS - we have not talked about recursion yet, but here is a fun one to try.
//recursion is when a function calls itself.
//Complete the function so that it returns the factorial of a number. Factorial (n!) is the product of all whole numbers between 1 and n
//example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
  if (n === 0) return 1;
  return; /// din kode her
}
console.log(factorial(5));
