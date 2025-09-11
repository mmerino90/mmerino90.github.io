// fun.js

function showRandomFact() {
    const facts = [
        "Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs!",
        "Bananas are berries, but strawberries are not.",
        "A group of flamingos is called a 'flamboyance'.",
        "Octopuses have three hearts.",
        "The Eiffel Tower can be 15 cm taller during hot days."
    ];
    const jokes = [
        "Why did the computer go to the doctor? Because it had a virus!",
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the math book look sad? Because it had too many problems!"
    ];
    const fact = facts[Math.floor(Math.random() * facts.length)];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('fact').textContent = fact;
    document.getElementById('joke').textContent = joke;
}
