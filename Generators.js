function *getStrings(){
    yield 'pawan'
    yield 'kumar'
    yield 'vishwakarma'
}

let it = getStrings();
let iter = it[Symbol.iterator]();

for(let element of iter)
    console.log(element);
    
