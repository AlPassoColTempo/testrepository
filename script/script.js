const people=[
    {
        nome: "Falli",
        eta:"17",
        hobby:"Atletica",
        nomefoto:"images/falli.jpg"
    },
    {
        nome: "Anatolie",
        eta:"19",
        hobby:"Surfing Tinder",
        nomefoto:"images/tolie.jpg"
    },
    {
        nome: "Rocco",
        eta:"58",
        hobby:"movie maker",
        nomefoto:"images/rocco.jpg"
    },
    {
        nome: "Les Gold",
        eta:"72",
        hobby:"Punching people",
        nomefoto:"images/lesgold.jpg"
    },
    {
        nome: "PewDiePie",
        eta:"33",
        hobby:"Video making",
        nomefoto:"images/pew.jpg"
    },
    {
        nome: "MrBeast",
        eta:"24",
        hobby:"Give money to people",
        nomefoto:"images/mrbeast.jpeg"
    },
    {
        nome: "Gordon Ramsay",
        eta:"56",
        hobby:"Throwing dishes away",
        nomefoto:"images/gordon.jpg"
    },
]



function Search() {
    var nrand;
    nrand=Math.floor(Math.random() * 7);


    document.getElementById("fotoprofilo").src=people[nrand].nomefoto;
    document.getElementById("nome").innerHTML=people[nrand].nome;
    document.getElementById("age").innerHTML=people[nrand].eta;
    document.getElementById("age").classList.add("text-primary");
    document.getElementById("hobby").innerHTML=people[nrand].hobby;
}


function Fire() {
    document.getElementById("heart").toggle("d-none");
}











