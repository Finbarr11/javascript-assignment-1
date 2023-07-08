//Qquestion 1
const language = 'chinese';

switch(language){
    case 'chinese':
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

