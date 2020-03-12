//Argumentos de linha de comando 
process.argv.forEach((val, index, array) => {
    console.log(index+ ': '+ val);
});