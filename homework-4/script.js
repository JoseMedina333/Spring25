const storyOutput = document.getElementById("story-output");
const startButton = document.getElementById("start-story");

startButton.addEventListener("click", startStory);

function startStory() {
  storyOutput.innerHTML = `
    <p>You wake up from a fat nap hungry. Do you order food on DoorDash or walk to the gas station?</p>
    <button onclick="orderDoordash()">Order DoorDash</button>
    <button onclick="walkGas()">Walk to the gas station</button>
  `;
}

function orderDoordash() {
  const decision1 = confirm("You open DoorDash. The first restaurant you see is Chick-fil-A. Do you order from there?");
  if (decision1) {
    storyOutput.innerHTML = `
      <p>You get your order together. Now do you get it delivered or pick it up yourself?</p>
      <button onclick="deliver()">Deliver</button>
      <button onclick="pickup()">Pick Up</button>
    `;
  } else {
    storyOutput.innerHTML = `<p>You decide not to order from Chick-fil-A and close the app. The munchie adventure ends here.</p>`;
  }
}

function walkGas() {
  storyOutput.innerHTML = `
    <p>You decide to walk to the gas station and see an electric scooter. Do you pay to use the scooter or continue walking?</p>
    <button onclick="takeScooter()">Take the Scooter</button>
    <button onclick="keepWalking()">Keep Walking</button>
  `;
}

function pickup() {
  storyOutput.innerHTML = `<p>You decide not to be lazy and pick up your order. The munchie adventure ends successfully. Enjoy your food!</p>`;
}

function deliver() {
  storyOutput.innerHTML = `<p>You chose to get your food delivered. Now you just chill and wait for your food to arrive. The munchie adventure ends peacefully.</p>`;
}

function takeScooter() {
  const decision2 = prompt("There are a lot of people on the sidewalk. Should you stay on the sidewalk or ride the scooter on the road? (sidewalk/road)");
  if (decision2 === "sidewalk") {
    storyOutput.innerHTML = `<p>You decide to be safe and stay on the sidewalk. You make it to the gas station safely, and the munchie adventure ends in peace.</p>`;
  } else if (decision2 === "road") {
    storyOutput.innerHTML = `<p>You decide that the sidewalk is too slow, so you jump onto the road. Unfortunately, you get hit by a car. The munchie adventure ends tragically.</p>`;
  } else {
    storyOutput.innerHTML = `<p>Invalid choice! You stand there confused and hungry. The adventure doesn't go anywhere.</p>`;
  }
}

function keepWalking() {
  storyOutput.innerHTML = `<p>You decide to keep walking and eventually make it to the gas station. You get your snacks and head back home. The munchie adventure ends successfully.</p>`;
}
