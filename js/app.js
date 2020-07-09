console.log("app.js is linked")

function writeStory(){
    console.log("write story has been called");
    var sillyWord = document.getElementById("sillyWord").value;
    console.log(sillyWord);
    var lastName = document.getElementById("lastName").value;
    console.log(lastName);
    var illness = document.getElementById("illness").value;
    console.log(illness);
    var noun = document.getElementById("noun").value;
    console.log(noun);
    var adjective = document.getElementById("adjective").value;
    console.log(adjective);
    var adjectiveTwo = document.getElementById("adjectiveTwo").value;
    console.log(adjectiveTwo);
    var place = document.getElementById("place").value;
    console.log(place);
    var number = document.getElementById("number").value;
    console.log(number);
    var adjectiveThree = document.getElementById("adjectiveThree").value;
    console.log(adjectiveThree);

var sentence = "<p> Dear School Nurse: </p> <p>" + sillyWord + " " + lastName + " will not be attending school today. He/she has come down with a case of " + illness + " and has horrible " + noun + " and a/an " + adjective + " fever. We have made an appointment with the " + adjectiveTwo + " Dr. " + sillyWord + " who studied for many years at " + place + " and has " + number + " degrees in pediatrics. He will send you all the information you need. Thank you! </p> <p> Sincerely Mr. "  + adjective + ". </p>"

console.log(sentence);
document.getElementById("answer").innerHTML = sentence;
}