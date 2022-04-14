// //cuadrado

// const ladoCuadrado = 5;
// const perimetroCuadrado = ladoCuadrado * 4;
// const areaCuadrado = ladoCuadrado * ladoCuadrado;

// console.group("cuadrado");


// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");
// console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm")
// console.log("el area del cuadrado es: " + areaCuadrado + "cm");


// console.groupEnd();



// //triangulo

// const lado1Triangulo = 6;
// const lado2Triangulo = 6;
// const lado3Triangulo = 3;
// const alturaTriangulo = 5.5;
// const perimetroTriangulo = lado1Triangulo + lado2Triangulo + lado3Triangulo;
// const areaTriangulo = (lado1Triangulo * alturaTriangulo) / 2;

// console.group("triangulo");


// console.log("la altura del triangulo es " + alturaTriangulo + "cm");
// console.log("los lados del Triangulo miden " + lado1Triangulo + "cm " + lado2Triangulo + "cm " + lado3Triangulo + "cm");
// console.log("el perimetro del Triangulo es: " + perimetroTriangulo + "cm");
// console.log("el area del Triangulo es " + areaTriangulo + " cm");


// console.groupEnd();



// //circulo

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const PI = Math.PI;
// const perimetroCirculo = diametroCirculo * PI;
// const areaCiruclo = (radioCirculo * radioCirculo) * PI;

// console.group("circulo");

// console.log("El radio del circulo es " + radioCirculo + "cm");
// console.log("El diametro del circulo es " + diametroCirculo + "cm");
// console.log("perimetro del circulo es " + perimetroCirculo + "cm");
// console.log("el area del circulo es " + areaCiruclo);
// console.log("pi es " + PI);

// console.groupEnd();

// function perimetroCuadrado(ladoC){

//     return ladoC * 4;
// }

// function areaCuadrado(ladoC){

//     return ladoC * ladoC;

// }


// function diametroCirculo(){
//     return  radio * radio;
// }

// function perimetroCirculo(perimetroC){
//     const diametro = diametroCirculo(radioC);
//     return diametro * PI;
// }

// function areaCiruclo(radio){
//     return (radio * radio) * Math.PI;
// }

// // const perimetroTriangulo = lado1Triangulo + lado2Triangulo + lado3Triangulo;
// // datosT
// // datosCu
// // datosCo

// function calcularCuP(){
//     const input = document.getElementById("CCu");
//     const valueP = input.value;
//     const perimetro = perimetroCuadrado(valueP);
//     return alert(perimetro);

// }

// function calcularCuA(){
//     const input = document.getElementById("CCu");
//     const valueA = input.value;
//     const area = areaCuadrado(valueA);
//     return alert(area);
// }


// function calculodiametro(){
//     const input = document.getElementById("circulo");
//     const value = input.value;
//     const diametro = value * 2;
//     return alert(diametro);
// }

// function calcradio(){
//     const input = document.getElementById("circulo");
//     const diametro = input.value;
//     const radio = diametro / 2;
//     return alert(radio);
// }

// // const productos = [magdalena, pan, tortuga];

// const magdalena = {
//     estdo: "venicda",
//     precio: 200,
    
// };

// const productos = [
//     {
//         name: 'magdalena',
//         precio: 200
//     },
//     {
//         name: 'aguacate',
//         precio: 10
//     },
//     {
//         name: 'pan',
//         precio: 999
//     },
//     {
//         name: 'pollo',
//         precio: 200
//     },
// ];

// const productos2 = {
//     magdalena: 200,
//     aguacate: 10,
//     pan: 999
// };

// const descuento = function(producto, id){
//     const p = document.getElementById("descuento");
//     let precioProducto = productos2[producto]
//     if(id>4){
//     precioProducto *= 0.50;
//     }
// p.innerText = `precio total ${precioProducto}`;
// }

// const descuento2 = function(producto, id){
//     const p = document.getElementById("descuento");
//     const index = productos.findIndex((element)=>
//         element.name == producto
//     );
//     if (index == -1) return p.innerText = "producto no encontrado";
//     let precioProducto = productos[index].precio;

//     if(id>4){
//     precioProducto *= 0.50;
//     }
// p.innerText = `precio total ${precioProducto}`;
// }

const lista = [
    120,
    200,
    400,
    10,
    20,
    5,
]
let sumarLista = 0;
function calc(){

    for ( let i = 0; i < lista.length; i++){
        sumarLista = sumarLista + lista[i];
        alert(`promedio ${sumarLista}`)
    }
}