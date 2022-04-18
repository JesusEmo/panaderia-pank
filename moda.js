// const lista1 = [
//     1,
//     3,
//     4,
//     5,
//     5,
//     2,
//     2,
//     5,
//     2,
//     5,
//     5,
//     5,
//     3,
//     1,
//     3,
//     3,
//     3
// ];
// const lista1Count = {};

// lista1.map(
//     function (elemento)
//     lista1Count[elemento] = 1;
// )


// const lista = [2, 412, 21];

// var sumalista = 0;
// console.log(lista.length);
// console.log(sumalista);
// for (let i = 0; i < lista.length; i++){
//     sumalista += lista[i];
//     total = sumalista / lista.length;
//     total = Math.round(total);

//     console.log(total);
//     let p = document.getElementById("RLista");
//     p.innerText = `${total}`;
// }




let sumalista= 0;
const lista = [1, 590, 2, 3, 1, 4, 5,];

for (i = 0; i < lista.length; i++){
    sumalista = sumalista + lista[i];
    console.log(sumalista);
    

}


const result = sumalista / lista.length;

let p = document.getElementById("answ");
p.innerText =  `valor de "i" = ${i} y valor de sumalista = ${sumalista} y prodmedio = ${result}`;

// const sumalista = lista.reduce(
//     function (valorAcumulado = 0, nuevoElemento){
//         return valorAcumulado + nuevoElemento;
//     }
// );


// const descuento = function(producto, id){
//     const p = document.getElementById("descuento");
//     let precioProducto = productos2[producto]
//     if(id>4){
//     precioProducto *= 0.50;
//     }
// p.innerText = `precio total ${precioProducto}`;
// }