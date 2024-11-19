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

// Inkluderer en funksjon som ikkje bare lager mellomrom til join funksjonen,
// men innfører preposisjon ved hjelp av ein ternary
function getArticle(vowelControl) {
  // array av konsonanter som skal undersøkes til både en if else statement, en .map og en =>
  const vowels = ["a", "e", "i", "o", "u"];
  // Viss [?] den første bokstaven [0] i vowelControl er en vokal (aeiou) returneres "an", viss ikkje [:] returneres "a". (toLowerCase for global sikring)
  return vowels.includes(vowelControl[0].toLowerCase()) ? "an" : "a";
}

const correctedArticle = myArray // slår fast at correctedArticle er det samme som my array
  // Kartlegger VowelcontrollAdd "an" or "a" before each fruit, depending on the first letter
  .map((vowelControl) => `${getArticle(vowelControl)} ${vowelControl}`)
  .join(", ");
console.log(correctedArticle);
// Printer resultatene i HTML div'en fruitsJoined, men det står naturligvis også i loggen
document.getElementById("fruitsJoined").innerHTML = correctedArticle;

//BONUS - See if you can make the items be seperated by a space

//8--------------------------------------------------------------------------------------
//Create a function that takes a number as an argument and returns that number squared.
// call your function by using a valid argument
// Sett i gang en funksjon som skal jazze med et nummer
function numberSquared(number) {
  return number * number; // funksjonen skal bruke samme nummer som argumentet, og kvadrere dette
}
const doTheMath = numberSquared(5); // ny konstant som skal iverksette kvadrering, men nå byttes variabelen ut med en verdi: 5
console.log(doTheMath); // log kvadreringen

//9.--------------------------------------------------------------------------------------
//Using the "%" (modulo) operator complete the function,
// it should take "number" as an argument and return "even" if its even and "odd" if its odd.
function oddOrEven(number) {
  // Let's get odd. (pun intended)
  if (number % 2 === 1) {
    // if the modulo returns an odd number, return the string odd.
    return "odd";
    // if else, we're even.
  } else {
    return "even";
  }
}
// running numbers to verify that the statement works
console.log(oddOrEven(5));
console.log(oddOrEven(2));
console.log(oddOrEven(9));

//call your function by using one of the options below.
// oddOrEven(prompt());
// oddOrEven()

//10.--------------------------------------------------------------------------------------
//write a function that prints the fibbonacci sequence for the number passed into it
// HINT! fibbonacchi =
//  c = a + b;
//  a = b;
//  b = c;

// vi initierer et argument innledningsvis med å klargjøre en øvre grense for kalkulasjonen
function fibbonacciCalculation(limit) {
  // så setter vi verdiene på de minste byggestenene i loopen
  let a = 0,
    b = 1,
    c;
  const summarized = [a, b]; // dette regnestykket initialiserer kalkulasjonens utgangspunkt

  // vi utfører loopsekvensen som en while statement med en boolean
  while (true) {
    c = a + b; // og kalkulerer grunnprinsippet for et fibonacci nummer
    if (c > limit) break; // og sikrer med en if statement, at når grensen vår er nådd, så avbrytes loopen her
    summarized.push(c); // så lenge grensen ikke er nådd, summeres c som et push fra en a+b kalkulasjon
    a = b; // når c pushet er ferdig kalkulert oppdaterer vi a til å være b, klar den neste, økte, fibbonacci kalkulasjonen
    b = c; // når c pushet er ferdig kalkulert oppdaterer vi b til å være c,  klar den neste, økte, fibbonacci kalkulasjonen
  }
  return summarized; // men før vi looper må vi også summere in totalsummen fra dette leddet av sekvensen. Så er vi klare for en loop.
}
console.log(fibbonacciCalculation(100000000)); // Nå kan vi loggføre sekvensen med alle sine tall, og sikrer at når grensen vår er nådd, så avbrytes sekvensen med i statementet på linje 141.

// Denne koden gir oss en konsekvent utregning, som avbrytes med vår fulle kontroll.

//11.--------------------------------------------------------------------------------------
//BONUS!Implement fizzbuzz, if a number is divisible by 3: Fizz, if a number is divisible by 5: Buzz, if the number is divisible by both 3 and 5, FizzBuzz
// https://www.geeksforgeeks.org/fizz-buzz-implementation/

// Vi lager en loop først som itererer mellom 1 og 100 (logikken henter vi fra oppgave 1)
for (let fizzList = 1; fizzList <= 100; fizzList++) {
  // Så setter vi opp en sorteringsorden med if/ else if / else statements. Først en som inkluderer både 3 og 5 gangen
  // kan tallet deles på begge skal konsollen logge "fizzbuzz". Logikken henter vi fra oppgave 9, men vi trenger && for å slå disse to sammen.
  //Her kunne man brukt .splice og .join hvis man snudde ting på hodet, men det blir ryddigere å reverse engineere rekkefølgen i hvordan man bygger opp string-utbyttingen.
  if (fizzList % 3 === 0 && fizzList % 5 === 0) {
    console.log("fizzbuzz");

    // deretter kjører vi dem individuelt. Kan man dele på 3:
  } else if (fizzList % 3 === 0) {
    // skal konsolloggen logge "fizz"
    console.log("fizz");

    // kan man dele på 5:
  } else if (fizzList % 5 === 0) {
    // skal konsollen logge buzz
    console.log("buzz");
    // kan man ingen av delene skal ikke konsollen gjøre endringer.
  } else {
    console.log(fizzList);
  }
}

//12.--------------------------------------------------------------------------------------
//SUPERBONUS - we have not talked about recursion yet, but here is a fun one to try.
//recursion is when a function calls itself.
//Complete the function so that it returns the factorial of a number. Factorial (n!) is the product of all whole numbers between 1 and n
//example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
  if (n === 0) return 1; // utgangspunktet er at når n er dønn lik 0 returneres 1.
  return n * factorial(n - 1); // så returnerer me n * n minus 1, fram til loopen er nådd 1 og avsluttes.
}

console.log("Our factorial of 5 decremented to 1 is: " + factorial(5));
