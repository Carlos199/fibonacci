
const fs = require('fs');
const { resolve } = require('path');

let crearSerie = (cantidad) =>{
    return new Promise((resolve, reject) => {
        let fibo1 = 1;
        let fib02 = 1;
        let serie = ''
        
        serie += `${fibo1}\t`;
        
        for (let i = 2; i <= cantidad -1 ; i++){
           serie += `${fib02}\t`;
            fib02 = fibo1 + fib02
            fibo1 = fib02 - fibo1
        }
        
        fs.writeFile('fibonacci.txt', serie, (err) =>{
            if (err) 
            reject ('Error al crear el archivo')
            else
            resolve ('El archivo fue creado con éxito')
           
        })
    })
    
}

module.exports = {crearSerie}