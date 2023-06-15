const super_heros = [
    { hero: "Spider-Man", group: "Avengers" },
    { hero: "Iron-Man", group: "Avengers" },
    { hero: "Hulk", group: "Avengers" },
    { hero: "DeadPool", group: "None" },
    { hero: "Black Cat", group: "None" },
    { hero: "Wolverine", group: "X-Men" },
    { hero: "Professor X", group: "X-Men" },
    { hero: "Cable", group: "X-Men" },
  ];
    
const result = super_heros.filter(x_men)
function x_men(currentValue) {
    return currentValue.group === "X-Men"
}

console.log(result)

