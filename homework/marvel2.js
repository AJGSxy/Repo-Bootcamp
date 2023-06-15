const avengers = [
    { hero: "Spider-Man" },
    { hero: "Iron-Man" },
    { hero: "Hulk" },
    { hero: "Scarlet Witch" },
    { hero: "Firestar" },
    { hero: "Sunspot" },
  ];
  
const x_men = [
    { hero: "Scarlet Witch" },
    { hero: "Wolverine" },
    { hero: "Professor X" },
    { hero: "Cable" },
    { hero: "Sunspot" },
  ];



const heroes = avengers.filter(revisar1ro)
function revisar1ro(heroe){
    const findHeroe = x_men.find(revisar2do)
    function revisar2do(heroe2) {
        return heroe.hero === heroe2.hero
    }
    return findHeroe
}
console.log(heroes)
