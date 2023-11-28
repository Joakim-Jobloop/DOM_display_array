const peopleOutput = document.getElementById("people-output")

const peoples = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];

peoples.forEach((people) => {
  const personWrapper = document.createElement("div")
  personWrapper.classList.add("person_wrapper")
  const name = document.createElement("h3");
  const age = document.createElement("p");
  const description = document.createElement("p")
  const text = `${people.name} is a ${people.age} years old ${people.male ? "man, and " : "woman, and s"}he likes ${people.hobbies[Math.floor(Math.random() * people.hobbies.length)]} among other things`
  description.textContent = text
  name.textContent = `${people.name}`
  age.textContent = `${people.age}`
  personWrapper.appendChild(name)
  personWrapper.appendChild(age)
  personWrapper.appendChild(description)
  peopleOutput.append(personWrapper)
});
