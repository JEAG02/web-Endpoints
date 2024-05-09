const express = require('express');
const app = express();
const port = 3000;

// Array de utiles:

let utiles = [
    {
        id: 1,
        nombre_producto: "Cuaderno",
        valor_producto: 5000,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Cuaderno de hojas rayadas"
    },
    {
        id: 2,
        nombre_producto: "Lapiz",
        valor_producto: 1000,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Lápiz de grafito"
    },
    {
        id: 3,
        nombre_producto: "Borrador",
        valor_producto: 500,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Borrador de goma"
    },
    {
        id: 4,
        nombre_producto: "Regla",
        valor_producto: 2000,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Regla de plástico transparente"
    },
    {
        id: 5,
        nombre_producto: "Tijeras",
        valor_producto: 3000,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Tijeras de punta redonda"
    },
    {
        id: 6,
        nombre_producto: "Calculadora",
        valor_producto: 15000,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Electronica",
        descripcion_producto: "Calculadora básica de bolsillo"
    },
    {
        id: 7,
        nombre_producto: "Pegamento",
        valor_producto: 2000,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Pegamento escolar"
    },
    {
        id: 8,
        nombre_producto: "Resaltador",
        valor_producto: 1500,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Resaltador de colores"
    },
    {
        id: 9,
        nombre_producto: "Cinta adhesiva",
        valor_producto: 2500,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Rollo de cinta adhesiva"
    },
    {
        id: 10,
        nombre_producto: "Mochila",
        valor_producto: 30000,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Mochila escolar con varios compartimentos"
    },
    {
        id: 11,
        nombre_producto: "Agenda",
        valor_producto: 8000,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Agenda para organizar tus actividades diarias"
    },
    {
        id: 12,
        nombre_producto: "Corrector líquido",
        valor_producto: 3000,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Corrector líquido para papel"
    },
    {
        id: 13,
        nombre_producto: "Estuche",
        valor_producto: 5000,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Estuche para guardar lápices y bolígrafos"
    },
    {
        id: 14,
        nombre_producto: "Goma de borrar",
        valor_producto: 1000,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Goma de borrar rectangular"
    },
    {
        id: 15,
        nombre_producto: "Papel de carta",
        valor_producto: 2000,
        fecha_vencimiento: "2024-12-31",
        categoria_producto: "Papeleria",
        descripcion_producto: "Papel de carta decorado"
    }
];



// Array de automoviles:

let automovil = [
    {
        id: 1,
        marca: "Toyota",
        cilindraje: 2000,
        tipo: "Híbrido",
        linea: "Corolla",
        color: "Gris",
        placa: "ABC123",
        valor: 50000000
    },
    {
        id: 2,
        marca: "Chevrolet",
        cilindraje: 1800,
        tipo: "Gasolina",
        linea: "Spark",
        color: "Rojo",
        placa: "DEF456",
        valor: 30000000
    },
    {
        id: 3,
        marca: "Ford",
        cilindraje: 2500,
        tipo: "Híbrido",
        linea: "Fusion",
        color: "Negro",
        placa: "GHI789",
        valor: 70000000
    },
    {
        id: 4,
        marca: "Nissan",
        cilindraje: 2200,
        tipo: "Gasolina",
        linea: "Sentra",
        color: "Azul",
        placa: "JKL012",
        valor: 40000000
    },
    {
        id: 5,
        marca: "Honda",
        cilindraje: 1900,
        tipo: "Híbrido",
        linea: "Civic",
        color: "Blanco",
        placa: "MNO345",
        valor: 60000000
    },
    {
        id: 6,
        marca: "Toyota",
        cilindraje: 2500,
        tipo: "Gasolina",
        linea: "RAV4",
        color: "Plateado",
        placa: "PQR678",
        valor: 80000000
    },
    {
        id: 7,
        marca: "Volkswagen",
        cilindraje: 1600,
        tipo: "Eléctrico",
        linea: "ID.4",
        color: "Verde",
        placa: "STU901",
        valor: 90000000
    },
    {
        id: 8,
        marca: "Hyundai",
        cilindraje: 2000,
        tipo: "Gasolina",
        linea: "Elantra",
        color: "Plata",
        placa: "VWX234",
        valor: 55000000
    },
    {
        id: 9,
        marca: "Kia",
        cilindraje: 1800,
        tipo: "Gasolina",
        linea: "Rio",
        color: "Naranja",
        placa: "YZA567",
        valor: 35000000
    },
    {
        id: 10,
        marca: "Renault",
        cilindraje: 1600,
        tipo: "Eléctrico",
        linea: "Zoe",
        color: "Negro",
        placa: "BCD890",
        valor: 75000000
    },
    {
        id: 11,
        marca: "Mazda",
        cilindraje: 2300,
        tipo: "Híbrido",
        linea: "CX-5",
        color: "Gris",
        placa: "EFG123",
        valor: 85000000
    },
    {
        id: 12,
        marca: "Subaru",
        cilindraje: 2000,
        tipo: "Gasolina",
        linea: "Forester",
        color: "Azul",
        placa: "HIJ456",
        valor: 65000000
    },
    {
        id: 13,
        marca: "Audi",
        cilindraje: 2500,
        tipo: "Híbrido",
        linea: "A4",
        color: "Blanco",
        placa: "KLM789",
        valor: 95000000
    },
    {
        id: 14,
        marca: "BMW",
        cilindraje: 3000,
        tipo: "Híbrido",
        linea: "X3",
        color: "Negro",
        placa: "NOP012",
        valor: 110000000
    },
    {
        id: 15,
        marca: "BMW",
        cilindraje: 2800,
        tipo: "Gasolina",
        linea: "Clase C",
        color: "Plateado",
        placa: "QRS345",
        valor: 120000000
    }
];

//1. Crear un endpoint que liste todos los productos

app.get('/utiles/', (req, res) => {
    const ListaUtiles = {utiles: utiles};
    res.json(ListaUtiles);
});


//2. Crear un endpoint que liste todos los productos de una categoría (solicita la
//   categoría por el endpoint)

app.get('/utiles_categoria/:categoria', (req, res) => {
    const categoria = req.params.categoria.toLowerCase();
    const listCategoria = utiles.filter(Utiles => Utiles.categoria_producto.toLowerCase() === categoria);
    if(listCategoria.length > 0){
        res.json(listCategoria);
    }
});


//3. Crear un endpoint que liste todos los automóviles

app.get('/automoviles/', (req, res) =>{
    const automoviles = {automovil: automovil}
    res.json(automoviles);
});


//4. Crear un endpoint que liste los productos que sean mayor 10.000

app.get('/utiles_caros/', (req, res) =>{
    const utiles_mayores = utiles.filter(Utiles => Utiles.valor_producto > 10000)
    res.json(utiles_mayores);
});


//5. Crear un endpoint que liste todos los utiles y calcule el iva para cada producto el iva es del 19%

function calcularIva(valor){
    valor = valor * 0.19
    return valor;
}

app.get('/productoIVA/', (req, res) => {
    const IVA = utiles.map(utiles =>{
        const ivita = calcularIva(utiles.valor_producto);{
            return {
                ...utiles,
                IVA: ivita
            }
        }
        
    }
    
    )
    res.json(IVA);
});


//6. Crear un endpoint que liste todos los vehículos de una marca (solicita la marca por el endpoint) 

app.get('/autoMARCA/:marca', (req, res) => {
    const marca = req.params.marca.toLowerCase();
    const automarca = automovil.filter(automoviles => automoviles.marca.toLowerCase() === marca);
    if(automarca.length > 0){
        res.json(automarca);
    }
}
);


//7. Crear un endpoint que liste todos los vehículos calcula el impuesto vehicular para
//   cada vehículo teniendo en cuenta las siguientes condiciones
//   a. Vehículos a gasolina
//   i. Entre 1 y 50.000.000 el impuesto es del 1%
//   ii. Entre 50.000.001 y 100.000.000 el impuesto es de 1,5%
//   iii. Entre 100.000.001 y 150.000.000 el impuesto es de 2,5
//   iv. Los vehículos con costo superior son de 3,5%
//   b. Vehículos eléctricos todos tienen un impuesto de 1%

function impuesto(valor, tipo){
    let impuesto;
    if(valor > 1 && valor <= 50000000){
        impuesto = valor * 0.01
    }
    else if(valor > 50000001 && valor <= 100000000  && tipo != "Eléctrico"){
        impuesto = valor * 0.015
    }
    else if(valor > 100000001 && valor <= 150000000 && tipo != "Eléctrico"){
        impuesto = valor * 0.025
    }else if(valor > 150000001){
        impuesto = valor * 0.035
    }else if(tipo == "Eléctrico"){
        impuesto = valor * 0.01
    }
    return impuesto
};

app.get('/impuestos/', (req, res) => {
    const impuestos = automovil.map(automovil => {
        const impuestito = impuesto(automovil.valor, automovil.tipo);
        return {
            ...automovil,
            impuesto: impuestito
        };
    })
    res.json(impuestos)
});


//8. Adicional complementa el ejercicio creando 5 endpoint para productos y 5 para
//vehículos. Todos de tipo Get 

//Endpoint para utiles:

// 1. cree un Endpoint que me liste los utiles que tienen su ID entre 2 y 9 y su precio sea mayor a 5000

app.get('/utiles_ID_precio', (req, res) => {
    const identificador = utiles.filter(utiles => utiles.id >= 2 && utiles.id <= 9 && utiles.valor_producto >= 5000)
        
    
    res.json(identificador)
});

// 2. cree un Endpoint que muestre el precio promedio de todos los utiles

function promedio(valor){
    let suma = 0;
    for(let i = 0; i < utiles.length; i++){
        suma = suma + utiles[i].valor_producto;
    }
    return suma / utiles.length;
}

app.get('/utiles_promedio/', (req, res) => {
    const Promedio = promedio(utiles.valor_producto);
    res.json({
        mensaje: "El promedio de los valores de los utiles es: ",
        promedio: Promedio
    })
});

// 3. cree en Endpoint que solicite el nombre de algun util escolar y muestre toda la información del util

app.get('/utiles_nombre/:nombre', (req, res) => {
    const nombre = req.params.nombre.toLowerCase();
    const utiles_nombre = utiles.filter(utiles => utiles.nombre_producto.toLowerCase() === nombre);
    if(utiles_nombre.length > 0){
        res.json(utiles_nombre);
    }
});

// 4. cree un Endpoint que muestre todos los utiles que tienen categoria diferente a papeleria

app.get('/utiles_categoria_diferente/', (req, res) => {
    const categoria = utiles.filter(utiles => utiles.categoria_producto.toLowerCase()!== "papeleria");
    res.json(categoria);
});

// 5. crear un Endpoint que cuenta la cantidad de utiles por categoría

app.get('/utiles/cantidad_por_categoria', (req, res) => {
    const cantidadPorCategoria = {};

    utiles.forEach(producto => {
        const categoria = producto.categoria_producto;

        if (cantidadPorCategoria[categoria]) {
            cantidadPorCategoria[categoria]++;
        } else {
            cantidadPorCategoria[categoria] = 1;
        }
    });
    res.json(cantidadPorCategoria);
});



// Endpoint para automoviles:

// 1. cree un Endpoint que solicite el id y busque el automovil al que le corresponde dicho ID

app.get('/automoviles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const automovilEncontrado = automovil.filter(automoviles => automoviles.id === id);
    if (automovilEncontrado) {
        res.json(automovilEncontrado);}
});

// 2. crear Endpoint que enliste todos los automoviles que son tipo "Hibrido"

app.get('/automovil_hibrido/', (req, res) => {
    const automovilHibrido = automovil.filter(automoviles => automoviles.tipo === "Híbrido");
    res.json(automovilHibrido);
});

// 3. cree un Endpoint que solicite un cilindraje y muestre todos los automoviles con el mismo o mayor cilindraje que el ingresado

app.get('/automovil_cilindraje/:cilindraje', (req, res) => {
    const cilindraje = parseInt(req.params.cilindraje);
    const automovilCilindraje = automovil.filter(automoviles => automoviles.cilindraje >= cilindraje);
    res.json(automovilCilindraje);
});

// 4. cree un Endpoint que solicite un cilindraje y muestre todos los automoviles con el mismo o menor cilindraje que el ingresado

app.get('/automovil_cilindraje_menor/:cilindraje', (req, res) => {
    const cilindraje = parseInt(req.params.cilindraje);
    const automovilCilindraje = automovil.filter(automoviles => automoviles.cilindraje <= cilindraje);
    res.json(automovilCilindraje);
});

// 5. cree un Endpoint que enliste todos los automoviles que su valor sea mayor a 50000000

app.get('/automovil_valor/', (req, res) => {
    const automovilValor = automovil.filter(automoviles => automoviles.valor >= 50000000);
    res.json(automovilValor);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});