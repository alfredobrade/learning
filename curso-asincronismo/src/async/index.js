const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout( () => resolve('Async!!', 5000)) : reject( new Error('Error!'));
    });
}

const anotherFn = async () => {
    const somthing = await fnAsync();
    console.log(somthing);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');

/* -- no me quedó claro
Before
After
Async!!
Hello!
*/