const { stdout } = require('process');

require ('colors')

const mostrarMenu = () => {
    console.clear()
    console.log('============================'.green);
    console.log('   Seleccione una opción'.green);
    console.log('============================\n'.green);

    console.log(`${ '1.'.blue } Crear Tarea`);
    console.log(`${ '2.'.blue } Listar Tareas`);
    console.log(`${ '3.'.blue } Listar Tareas Completadas`);
    console.log(`${ '4.'.blue } Listar Tareas Pendientes`);
    console.log(`${ '5.'.blue } Completar Tarea(s)`);
    console.log(`${ '6.'.blue } Borrar Tarea`);
    console.log(`${ '0.'.blue } SALIR \n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: stdout
    })

    readline.question('Seleccione una opción: ', (opt) =>{
        readline.close();

    });
}
    
    
const pause = () => {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: stdout
    });
    
    readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n`, (opt) =>{
        readline.close();
    });
} 



module.exports = {mostrarMenu, pause}