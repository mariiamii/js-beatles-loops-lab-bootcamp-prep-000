// add solution here
function theBeatlesPlay(musicians, instruments) {
    var allMusicians = [];
    for (var i=0; i < musicians.length; i++) {
        allMusicians.push(musicians[i] + " plays " + instruments[i]);
    }
    return allMusicians;
}

var facts = [
	"He was the last Beatle to learn to drive",
	"He was never a vegetarian",
	"He was a choir boy and boy scout",
	"He hated the sound of his own voice"
];

var johnLennonFacts = function (factsArray) {
	var i = 0;
	var arrayCounter = factsArray.length
	var newFactsArray = [];

	while (arrayCounter > 0) {
		newFactsArray.push(factsArray[i] + "!!!");
		i++;
		arrayCounter--;
	}
	return(newFactsArray);
};

johnLennonFacts(facts);

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}