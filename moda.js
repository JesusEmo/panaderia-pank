const lista1 = [
    1,
    3,
    4,
    5,
    5,
    2,
    2,
    5,
    2,
    5,
    5,
    5,
    3,
    1,
    3,
    3,
    3
];
const lista1Count = {};

// lista1.map(
//     function (elemento)
//     lista1Count[elemento] = 1;
// )


const lista = [
    2,
    2,
    2,
    3,
    1,
    3213,
    42,
    412,
    21,
];

let listaSuma = 0;

function calcularPromedio(lista){
for( let i = 0; i < lista.length; i++) {
    listaSuma = listaSuma + lista[i];
    return listaSuma;
}
}

const p = document.getElementById("RLista");
p.innerText() = `${listaSuma}`



