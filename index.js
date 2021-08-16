// Write your solution here!//
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push('Ralph');
}

function destructivelyPrependCat() {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
   const cats = ["Milo", "Otis", "Garfield"];
   const copyCat = [...cats, "Broom"];
   return copyCat;
}

function prependCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    const copyCat1 = ["Arnold", ...cats];
    return copyCat1;
}

function removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    const catsCopy = cats.slice(0, cats.length -1 );
    return catsCopy;
}

function removeFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    const catsCopy = cats.slice(1);
    return catsCopy;
}