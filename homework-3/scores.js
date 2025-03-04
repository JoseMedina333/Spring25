// List of scores
const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];

// Reference to the ul element
const ul = document.getElementById("score-list");

// Reference to the paragraph element with the unique id
const averageScoreParagraph = document.getElementById("average-score");

// Calculate the total and average score
let totalScore = 0;
for (let i = 0; i < scores.length; i++) {
    // new list item
    const li = document.createElement("li");
    // Set the text content to the score
    li.textContent = scores[i];
    // Append the list item to the ul
    ul.appendChild(li);

    // Add the current score to the total score
    totalScore += scores[i];
}

// Calculate average score
const averageScore = totalScore / scores.length;

// Display the average score in the paragraph element
averageScoreParagraph.textContent = averageScore.toFixed(2);
