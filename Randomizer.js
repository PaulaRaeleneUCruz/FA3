let num1 = Math.ceil(Math.random() * 20);
let num2 = Math.ceil(Math.random() * 20);
let num3 = Math.ceil(Math.random() * 20);

let biggest = Math.max(num1, num2, num3);

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nthLetter = alphabet[num1 - 1] || "Z";

let totalMinutes = num2 * num3;
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;

document.getElementById("story").innerHTML = "An adventurer named " + nthLetter + " searched for treasure. After " + totalMinutes + " minutes (" + hours + " hours and " + minutes + " minutes), they found an old chest. Inside, they discovered a Level " + biggest + " Enchanted Sword!";