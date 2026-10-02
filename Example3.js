// The Scenario: Game Profile Tracker 🎮
// Imagine you are building the profile logic for a video game. As players earn Experience Points (XP), they level up. However, if they haven't verified their email account, their profile features are locked.
// The Rules:
// 1. Rule 1 (The Account Lock): If the player is not verified, they cannot level up at all. Show an error message.
// 2. Rule 2 (The Level Up): If they are verified and their XP is 100 or more, they level up! Print a congratulatory message and reset their XP to 0.
// 3. Rule 3 (The Grind): If they are verified but have less than 100 XP, tell them exactly how much more XP they need to reach 100.

let isVerified = true;
let xp = 130;

if (!isVerified) {
    console.log("Error: Your account is locked. Please verify your email to level up.");
}
else if (xp >= 100) {
    console.log("Congratulations! You've leveled up!");
    xp = 0;
}
else {
    console.log("You need " + (100 - xp) + " more XP to level up.");
}
