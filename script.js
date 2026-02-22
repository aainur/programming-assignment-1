function calculate() {
    let name = document.getElementById("name").value.trim();
    let age = Number(document.getElementById("age").value);
    let size = document.getElementById("size").value;
    let dogImg = document.getElementById("dogImage");

    // Проверка
    if(name === ""){
        document.getElementById("result").innerHTML = "Please enter your name!";
        dogImg.src = "";
        document.getElementById("lifeLevelText").innerHTML = "";
        document.getElementById("quote").innerHTML = "";
        return;
    }
    if(isNaN(age) || age < 0){
        document.getElementById("result").innerHTML = "Please enter a valid age!";
        dogImg.src = "";
        document.getElementById("lifeLevelText").innerHTML = "";
        document.getElementById("quote").innerHTML = "";
        return;
    }
    if(age > 16){
        document.getElementById("result").innerHTML = "Too high age for a dog!";
        dogImg.src = "";
        document.getElementById("lifeLevelText").innerHTML = "";
        document.getElementById("quote").innerHTML = "";
        return;
    }

    // Расчет возраста
    let humanAge;
    if(age === 0){
        document.getElementById("result").innerHTML = "Hello " + name + ", your dog is a newborn puppy 🐶";
        dogImg.src = "https://placedog.net/300";
        document.getElementById("lifeLevelText").innerHTML = "";
        document.getElementById("quote").innerHTML = "A new life begins 🐾";
        return;
    }
    if(age === 1) humanAge = 15;
    else if(age === 2) humanAge = 24;
    else {
        humanAge = 24 + (age-2) * (size === "small" ? 4 : size === "medium" ? 5 : 6);
    }

    // Категория и картинка
    let category = humanAge < 30 ? "Young dog" : humanAge < 60 ? "Adult dog" : "Old dog";
    dogImg.src = humanAge < 30 ? "https://placedog.net/400" : humanAge < 60 ? "https://placedog.net/500" : "https://placedog.net/600";

    // Вывод
    document.getElementById("result").innerHTML = "Hello " + name + "! Dog age ≈ " + humanAge + " human years. " + category;

    // Уровень жизни
    let lifeText = humanAge < 30 ? "High life level 🐾" : humanAge < 60 ? "Medium life level 🐾" : "Low life level 🐾";
    document.getElementById("lifeLevelText").innerHTML = lifeText;

    // Цитаты на английском
    const quotes = [
        "Your dog is in the prime of life 🐾",
        "Today is a perfect day for a walk with your dog 🐶",
        "A dog is a man's best friend 🐕",
        "Caring for your dog ensures their happiness ❤️",
        "Every day is an adventure with your dog 🐾",
        "Happiness is a warm puppy 🐶"
    ];
    document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}
