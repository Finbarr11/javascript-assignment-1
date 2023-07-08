//Question 1
const language = prompt('What do you want to know about languiages');


switch(language){
    case 'chinese':
        console.log(language,': Most Number of Native Speakers');
        break;
    case 'mandarin':
        console.log(language,': Most Number of Native Speakers');
        break;
    case 'spanish':
        console.log(language,': 2nd place in number of native speakers');
        break;
    case 'english':
        console.log(language, ': 3rd');
        break;
    case 'hindi':
        console.log(language, ': Number 4');
        break;
    case 'arabic':
        console.log(language,': 5th most spoken language');
        break;
    default:
        console.log(language,': Great Language too'); 
}



//Question2
//Calculate the average score for Team Dolphin using Data 1
const totalDolphinData1 = 96 + 108 + 89;
const averageDolphinData1 = totalDolphinData1/3;
console.log(averageDolphinData1,"Average score for Team Dolphin Data 1");

//Calculate the average score for Team Koala using Data 1
const totalKoalaData1 = 88 + 91 + 110;
const averageKoalaData1 = totalKoalaData1/3;
console.log(averageKoalaData1,"Average score for Team Koala Data 1");

//Calculate the average score for Team Dolphin using Data Bonus 1
const totalDolphinDataBonus1 = 97 + 112 + 101;
const averageDolphinDataBonus1 = totalDolphinDataBonus1/3;
console.log(averageDolphinDataBonus1,"Average score for Team Dolphin Data Bonus 1");

//Calculate the average score for Team Koala using Data Bonus 1
const totalKoalaDataBonus1 = 109 + 95 + 123;
const averageKoalaDataBonus1 = totalKoalaDataBonus1/3;
console.log(averageKoalaDataBonus1,"Average score for Team Koala Data Bonus 1");

//Calculate the average score for Team Dolphin using Data Bonus 2
const totalDolphinDataBonus2 = 97 + 112 + 101;
const averageDolphinDataBonus2 = totalDolphinDataBonus2/3;
console.log(averageDolphinDataBonus2,"Average score for Team Dolphin Data Bonus 2");

//Calculate the average score for Team Koala using Data Bonus 2
const totalKoalaDataBonus2 = 109 + 95 + 106;
const averageKoalaDataBonus2 = totalKoalaDataBonus2/3;
console.log(averageKoalaDataBonus2,"Average score for Team Koala Data Bonus 2");

//Compare the teams average scores to determine the winner of the competition
//Compare result for Team Dolphin Data 1 and Team Koala Data 1
if(averageDolphinData1 > averageKoalaData1){
    console.log('Team Dolphin wins for Data 1 with', averageDolphinData1);
} else if(averageDolphinData1 === averageKoalaData1){
    console.log('The result of Data 1 is a draw');
} else{
    console.log('Team Koala wins for Data 1 with', averageKoalaData1); 
}

//Compare result for Team Dolphin Data Bonus 1 and Team Koala Data Bonus 1
if(averageDolphinDataBonus1 > averageKoalaDataBonus1 && averageDolphinDataBonus1 >= 100){
    console.log('Team Dolphin wins for Data Bonus 1 with', averageDolphinDataBonus1);
} else if(averageKoalaDataBonus1 > averageDolphinDataBonus1 && averageKoalaDataBonus1 >= 100){
    console.log('Team Koala wins for Data Bonus 1 with', averageKoalaDataBonus1);
} else if(averageDolphinDataBonus1 === averageKoalaDataBonus1){
    console.log('The result of Data Bonus 1 is a draw');
} else{
    console.log('Result condition not met'); 
}

//Compare result for Team Dolphin Data Bonus 2 and Team Koala Data Bonus 2
if(averageDolphinDataBonus2 > averageKoalaDataBonus2){
    console.log('Team Dolphin wins for Data Bonus 2 with', averageDolphinDataBonus2);
} else if(averageKoalaDataBonus2 > averageDolphinDataBonus2){
    console.log('Team Koala wins for Data Bonus 2 with', averageKoalaDataBonus2);
} else if(averageDolphinDataBonus2 === averageKoalaDataBonus2 && averageDolphinDataBonus1 >= 100 && averageKoalaDataBonus2 >= 100){
    console.log('The result of Data Bonus 2 is a draw');
} else{
    console.log('Result condition not met'); 
}


//Question 3