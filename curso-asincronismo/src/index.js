console.log('hola');
console.log('chau');

//callbacks
function sum(num1, num2){
    return num1+num2;
}
function calc(num1,num2,callback){
    return callback(num1,num2);
}
console.log(calc(2,2,sum));

//setTimeout
setTimeout(function(){
    console.log('Hola JS');
}, 2000)

function greeting(name){
    console.log(`Hola ${name}`);
}
setTimeout(greeting,3000, 'Oscar')

