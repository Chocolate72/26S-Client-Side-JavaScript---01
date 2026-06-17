// Declare arrays for the five parts of the sentence.
var partOneWords = [
  "The turkey",
  "Mom",
  "Dad",
  "The dog",
  "My teacher",
  "The elephant",
  "The cat"
];

var partTwoWords = [
  "sat on",
  "ate",
  "danced with",
  "saw",
  "doesn't like",
  "kissed"
];

var partThreeWords = [
  "a funny",
  "a scary",
  "a goofy",
  "a slimy",
  "a barking",
  "a fat"
];

var partFourWords = [
  "goat",
  "monkey",
  "fish",
  "cow",
  "frog",
  "bug",
  "worm"
];

var partFiveWords = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "on the grass",
  "in my shoes"
];

// Declare index variables to track the selected item in each array.
var partOneIndex = 0;
var partTwoIndex = 0;
var partThreeIndex = 0;
var partFourIndex = 0;
var partFiveIndex = 0;

// Connect JavaScript variables to HTML elements.
var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var buttonThree = document.getElementById("buttonThree");
var buttonFour = document.getElementById("buttonFour");
var buttonFive = document.getElementById("buttonFive");

var listenButton = document.getElementById("listenButton");
var randomButton = document.getElementById("randomButton");
var resetButton = document.getElementById("resetButton");
var storyOutput = document.getElementById("storyOutput");

// This function displays the current choices on the five buttons.
function updateButtons() {
  buttonOne.textContent = "1. " + partOneWords[partOneIndex];
  buttonTwo.textContent = "2. " + partTwoWords[partTwoIndex];
  buttonThree.textContent = "3. " + partThreeWords[partThreeIndex];
  buttonFour.textContent = "4. " + partFourWords[partFourIndex];
  buttonFive.textContent = "5. " + partFiveWords[partFiveIndex];
}

// This function moves to the next array item and loops back to zero.
function getNextIndex(currentIndex, arrayLength) {
  currentIndex = currentIndex + 1;

  if (currentIndex >= arrayLength) {
    currentIndex = 0;
  }

  return currentIndex;
}

// This function joins the five selected words into one story sentence.
function buildStory() {
  var story = partOneWords[partOneIndex] + " " +
    partTwoWords[partTwoIndex] + " " +
    partThreeWords[partThreeIndex] + " " +
    partFourWords[partFourIndex] + " " +
    partFiveWords[partFiveIndex] + ".";

  storyOutput.textContent = story;
}

// This function returns a random number that can be used as an array index.
function getRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

// This function creates a random story by choosing random indexes.
function buildRandomStory() {
  partOneIndex = getRandomIndex(partOneWords.length);
  partTwoIndex = getRandomIndex(partTwoWords.length);
  partThreeIndex = getRandomIndex(partThreeWords.length);
  partFourIndex = getRandomIndex(partFourWords.length);
  partFiveIndex = getRandomIndex(partFiveWords.length);

  updateButtons();
  buildStory();
}

// This function resets the story maker to its starting choices.
function resetStory() {
  partOneIndex = 0;
  partTwoIndex = 0;
  partThreeIndex = 0;
  partFourIndex = 0;
  partFiveIndex = 0;

  updateButtons();
  storyOutput.textContent = "Your finished story will appear here.";
}

// Add event listeners to cycle through each story part.
buttonOne.addEventListener("click", function () {
  partOneIndex = getNextIndex(partOneIndex, partOneWords.length);
  updateButtons();
});

buttonTwo.addEventListener("click", function () {
  partTwoIndex = getNextIndex(partTwoIndex, partTwoWords.length);
  updateButtons();
});

buttonThree.addEventListener("click", function () {
  partThreeIndex = getNextIndex(partThreeIndex, partThreeWords.length);
  updateButtons();
});

buttonFour.addEventListener("click", function () {
  partFourIndex = getNextIndex(partFourIndex, partFourWords.length);
  updateButtons();
});

buttonFive.addEventListener("click", function () {
  partFiveIndex = getNextIndex(partFiveIndex, partFiveWords.length);
  updateButtons();
});

// Add event listeners to the control buttons.
listenButton.addEventListener("click", buildStory);
randomButton.addEventListener("click", buildRandomStory);
resetButton.addEventListener("click", resetStory);

// Show the default word choices when the page loads.
updateButtons();
