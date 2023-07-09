//Question 1

const language = prompt('What do you want to know about languages');
switch (language) {
  case "chinese":
    console.log(language, ": Most Number of Native Speakers");
    break;
  case "mandarin":
    console.log(language, ": Most Number of Native Speakers");
    break;
  case "spanish":
    console.log(language, ": 2nd place in number of native speakers");
    break;
  case "english":
    console.log(language, ": 3rd");
    break;
  case "hindi":
    console.log(language, ": Number 4");
    break;
  case "arabic":
    console.log(language, ": 5th most spoken language");
    break;
  default:
    console.log(language, ": Great Language too");
}






//Question2.1
//Calculate the average score for Team Dolphin using Data 1
const totalDolphinData1 = 96 + 108 + 89;
const averageDolphinData1 = totalDolphinData1 / 3;
console.log(averageDolphinData1, "Average score for Team Dolphin Data 1");
//Calculate the average score for Team Koala using Data 1
const totalKoalaData1 = 88 + 91 + 110;
const averageKoalaData1 = totalKoalaData1 / 3;
console.log(averageKoalaData1, "Average score for Team Koala Data 1");
//Calculate the average score for Team Dolphin using Data Bonus 1
const totalDolphinDataBonus1 = 97 + 112 + 101;
const averageDolphinDataBonus1 = totalDolphinDataBonus1 / 3;
console.log(
  averageDolphinDataBonus1,
  "Average score for Team Dolphin Data Bonus 1"
);
//Calculate the average score for Team Koala using Data Bonus 1
const totalKoalaDataBonus1 = 109 + 95 + 123;
const averageKoalaDataBonus1 = totalKoalaDataBonus1 / 3;
console.log(
  averageKoalaDataBonus1,
  "Average score for Team Koala Data Bonus 1"
);
//Calculate the average score for Team Dolphin using Data Bonus 2
const totalDolphinDataBonus2 = 97 + 112 + 101;
const averageDolphinDataBonus2 = totalDolphinDataBonus2 / 3;
console.log(
  averageDolphinDataBonus2,
  "Average score for Team Dolphin Data Bonus 2"
);
//Calculate the average score for Team Koala using Data Bonus 2
const totalKoalaDataBonus2 = 109 + 95 + 106;
const averageKoalaDataBonus2 = totalKoalaDataBonus2 / 3;
console.log(
  averageKoalaDataBonus2,
  "Average score for Team Koala Data Bonus 2"
);

//Question 2.2, 2.3, 2.4
//Compare the teams average scores to determine the winner of the competition
//Compare result for Team Dolphin Data 1 and Team Koala Data 1
if (averageDolphinData1 > averageKoalaData1) {
  console.log("Team Dolphin wins for Data 1 with", averageDolphinData1);
} else if (averageDolphinData1 === averageKoalaData1) {
  console.log("The result of Data 1 is a draw");
} else {
  console.log("Team Koala wins for Data 1 with", averageKoalaData1);
}

//Compare result for Team Dolphin Data Bonus 1 and Team Koala Data Bonus 1
if (
  averageDolphinDataBonus1 > averageKoalaDataBonus1 &&
  averageDolphinDataBonus1 >= 100
) {
  console.log(
    "Team Dolphin wins for Data Bonus 1 with",
    averageDolphinDataBonus1
  );
} else if (
  averageKoalaDataBonus1 > averageDolphinDataBonus1 &&
  averageKoalaDataBonus1 >= 100
) {
  console.log("Team Koala wins for Data Bonus 1 with", averageKoalaDataBonus1);
} else if (averageDolphinDataBonus1 === averageKoalaDataBonus1) {
  console.log("The result of Data Bonus 1 is a draw");
} else {
  console.log("Result condition not met");
}

//Compare result for Team Dolphin Data Bonus 2 and Team Koala Data Bonus 2
if (averageDolphinDataBonus2 > averageKoalaDataBonus2) {
  console.log(
    "Team Dolphin wins for Data Bonus 2 with",
    averageDolphinDataBonus2
  );
} else if (averageKoalaDataBonus2 > averageDolphinDataBonus2) {
  console.log("Team Koala wins for Data Bonus 2 with", averageKoalaDataBonus2);
} else if (
  averageDolphinDataBonus2 === averageKoalaDataBonus2 &&
  averageDolphinDataBonus1 >= 100 &&
  averageKoalaDataBonus2 >= 100
) {
  console.log("The result of Data Bonus 2 is a draw");
} else {
  console.log("Result condition not met");
}






//Question 3.1
//Tip Calculator. Set a prompt to enable user input bill amount
const input = prompt('Enter bill amount');
const bill = parseFloat(input);   //Convert inputted string to number

const tip = (bill >= 50 && bill <=300) ? 0.15 * bill : 0.2 * bill;
const totalBill = (bill + tip);
//Question 3.2
console.log(`Your bill is $${bill}, the tip is $${tip}. Your total bill is $${totalBill} `);





//Question 4.1
function describeCountry(country, population, capitalCity) {
  const countryDetail = `${country} has ${population} people and its capital city is ${capitalCity}`;
  return countryDetail;
}
const countryDetail2 = describeCountry("Finland", "6 million", "Helsinki");
console.log(countryDetail2);

//Question 4.2
const countryDetail3 = describeCountry("Nigeria", "200 million", "Abuja");
console.log(countryDetail3);
const countryDetail4 = describeCountry("USA", "320 million", "Washington DC");
console.log(countryDetail4);
const countryDetail5 = describeCountry("Ghana", "40 million", "Accra");
console.log(countryDetail5);





//Question 5.1
function percentageOfWorld1(countryName, population) {
  //create variable "formular" and assign parameter value population to it.
  const formular = (population / 7900) * 100;
  const sentence = `${countryName} is about ${formular} percent of the world population`;
  return sentence;
}
const percentageCountry1 = percentageOfWorld1("China", 1441);
console.log(percentageCountry1);

// Question 5.3
const percentageCountry2 = percentageOfWorld1("Nigeria", 200);
console.log(percentageCountry2);
const percentageCountry3 = percentageOfWorld1("USA", 320);
console.log(percentageCountry3);
const percentageCountry4 = percentageOfWorld1("Ghana", 40);
console.log(percentageCountry4);

//Question 5.4
function percentageOfWorld2(countryName, population) {
  //create variable "formular" and assign parameter value population to it.
  const formular = (population / 7900) * 100;
  const sentence = `${countryName} is about ${formular} percent of the world population`;
  return sentence;
}
const percentageCountry5 = percentageOfWorld2("China", 1441);
console.log(percentageCountry5);

const percentageCountry6 = percentageOfWorld2("Nigeria", 200);
console.log(percentageCountry6);
const percentageCountry7 = percentageOfWorld2("USA", 320);
console.log(percentageCountry7);
const percentageCountry8 = percentageOfWorld2("Ghana", 40);
console.log(percentageCountry8);

//Question 5.5 Bonus. Put this in arrow function
const percentageOfWorld3 = (countryName, population) => {
  const formular = (population / 7900) * 100;
  const sentence = `${countryName} is about ${formular} percent of the world population`;
  return sentence;
}

const percentageCountry9 = percentageOfWorld3("Nigeria", 200);
console.log(percentageCountry9);
const percentageCountry10 = percentageOfWorld3("USA", 320);
console.log(percentageCountry10);
const percentageCountry11 = percentageOfWorld3("Ghana", 40);
console.log(percentageCountry11);





//Arrays
//Question 6.1
const china = 1441;
const usa = 320;
const nigeria = 200;
const ghana = 40;

const population = [china, usa, nigeria, ghana];
console.log(population);

//Question 6.2
if (population.length === 4) {
console.log('True');
} else {
  console.log('False');
}

//Question 6.3
const percentages = [18.2, 2.5, 4.0, 0.5];

function percentageOfWorld1_1(population) {
  const worldPopulation = 7900;
  const percentage = (population/worldPopulation) * 100;
  return percentage;
}
const chinaPopulation = 1441;
const chinaPercentage = percentageOfWorld1_1(chinaPopulation);
console.log(chinaPercentage);

const usaPopulation = 320;
const usaPercentage = percentageOfWorld1_1(usaPopulation);
console.log(usaPercentage);

const nigeriaPopulation = 200;
const nigeriaPercentage = percentageOfWorld1_1(nigeriaPopulation);
console.log(nigeriaPercentage);

const ghanaPopulation = 40;
const ghanaPercentage = percentageOfWorld1_1(ghanaPopulation);
console.log(ghanaPercentage);


