// List of instruments
const instruments = ["Piano", "Guitar", "Violin", "Drums", "Saxophone", "Flute"];

// Reference to the ul element
const ul = document.getElementById("instrument-list");

// Loop through the list of instruments
for (let i = 0; i < instruments.length; i++) {
    // Create a new list item
    const li = document.createElement("li");
    // Set the text content to the instrument name
    li.textContent = instruments[i];
    // Append the list item to the ul
    ul.appendChild(li);
}
