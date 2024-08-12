const prompt = require('prompt-sync')()

//2
let age = prompt("What's your age?")
age = parseInt(age)
if(age >= 18){
  console.log("You can vote!")
} else {
  console.log("You can't vote!")
}

//3
let guess = prompt("Password: ")

while (guess !== "SE11"){
  guess = prompt("Try again: ")
}

//5
let competencies = ["if/else","while","for","functions","objects"]

for(let i =0;i <= 4;i++){
  console.log(competencies[i])
}