const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
    {
        name: "John",
        yearOfBirth: 1999,
        yearOfDeath: 2022,
    },
    {
        name: "Alice",
        yearOfBirth: 1990,
        yearOfDeath: 2021,
    },
    {
        name: "Bob",
        yearOfBirth: 1995,
        yearOfDeath: 2020,
    },
    {
        name: "Eve",
        yearOfBirth: 1998,
        yearOfDeath: 2023,
    },
];

window.onload = () => {
    const peopleList = document.getElementById('peopleList');
    const searchInput = document.getElementById('searchInput');
    loadPeopleOnList(people, peopleList);
    searchInput.addEventListener('input', () => {
        const search = searchInput.value;
        const filteredPeople = filterBySearch(people, search);
        loadPeopleOnList(filteredPeople, peopleList);
    });
}

/**
 * Carga la lista de personas en un elemento HTML de lista
 * @param {Array} people - Lista de personas
 * @param {Element} list - Elemento HTML de lista
 */
function loadPeopleOnList(people, list) {
    let peopleHtML = people.map(person => `<li>${person.name}</li>`).join('')
    list.innerHTML = peopleHtML;
}

/**
 * Filtra la lista de personas por el texto de búsqueda
 * @param {*} people - Lista de personas
 * @param {*} search - Texto de búsqueda
 * @returns 
 */
function filterBySearch(people, search) {
    return people.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
}