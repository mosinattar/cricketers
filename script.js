let indianCricketers = [
    "Rohit Sharma",
    "Virat Kohli",
    "Shubman Gill",
    "Jasprit Bumrah",
    "Rishabh Pant",
    "Hardik Pandya",
    "Ravindra Jadeja",
    "KL Rahul",
    "Mohammed Siraj",
    "Kuldeep Yadav"
];

console.log(indianCricketers);

// Add player
indianCricketers.push("Yashasvi Jaiswal");

// Remove player
indianCricketers.pop();

// Display list
indianCricketers.forEach((player, index) => {
    console.log(`${index + 1}. ${player}`);
});