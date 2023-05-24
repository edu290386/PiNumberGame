const prueba = [{
    nombre: "Dustin",
    pais:"Peru",
    edad:36   
},
{
    nombre:"Sasha",
    pais:"Peru",
    edad:25
},
{
    nombre:"Edu",
    pais:"Peru",
    edad:14
}]

const primera = document.getElementById("primeraid");
const tableContainer = document.getElementById("tableContainer");

prueba.forEach( (test) => {
    tableContainer.innerHTML += 
    `<div id="tableContent">
    <div id="column1">${test.nombre}</div>
    <div id="column2">${test.pais}</div>
    <div id="column3">${test.edad}</div>
    </div>`
});
