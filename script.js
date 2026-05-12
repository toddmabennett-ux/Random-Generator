// CHARACTER LIST
const characters = [
    "a nervous apprentice mage",
    "a grumpy goblin courier",
    "a barefoot wanderer with a secret",
    "a retired knight who hates violence",
    "a fox‑spirit with glowing eyes",
    "a young thief with a guilty conscience",
    "a bard who can't sing but won't admit it",
    "a witch who fears her own magic"
];

// SITUATION LIST
const situations = [
    "searching for something they lost",
    "hiding from someone dangerous",
    "discovering a strange message",
    "forced to work with an enemy",
    "trying to fix a mistake",
    "running from a crime they didn't commit",
    "receiving a warning from the future",
    "finding something they shouldn't have found"
];

// LOCATION LIST
const locations = [
    "in a fog‑soaked forest",
    "inside a crumbling library",
    "on a floating island",
    "in a neon‑lit alleyway",
    "at the edge of a frozen lake",
    "beneath an abandoned temple",
    "in a city where no one sleeps",
    "on a bridge between worlds"
];

// DOM ELEMENTS
const charOutput = document.getElementById("charOutput");
const sitOutput = document.getElementById("sitOutput");
const locOutput = document.getElementById("locOutput");
const finalOutput = document.getElementById("finalOutput");

// BUTTONS
document.getElementById("charBtn").addEventListener("click", () => {
    charOutput.textContent = randomItem(characters);
    updateFinalPrompt();
});

document.getElementById("sitBtn").addEventListener("click", () => {
    sitOutput.textContent = randomItem(situations);
    updateFinalPrompt();
});

document.getElementById("locBtn").addEventListener("click", () => {
    locOutput.textContent = randomItem(locations);
    updateFinalPrompt();
});

// RANDOM PICK FUNCTION
function randomItem(list){
    return list[Math.floor(Math.random() * list.length)];
}

// BUILD FINAL PROMPT
function updateFinalPrompt(){
    const c = charOutput.textContent;
    const s = sitOutput.textContent;
    const l = locOutput.textContent;

    if(c !== "Click generate" && s !== "Click generate" && l !== "Click generate"){
        finalOutput.textContent = `${c} ${s} ${l}.`;
    }
}

// COPY BUTTON
document.getElementById("copyBtn").addEventListener("click", () => {
    navigator.clipboard.writeText(finalOutput.textContent);
    alert("Prompt copied!");
});
