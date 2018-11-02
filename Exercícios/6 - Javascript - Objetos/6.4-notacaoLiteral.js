const a = 1
const b = 2
const c = 3

//Antes do ES6
const obj1 = {a: a, b: b, c: c}

//ES6
const obj2 = {a, b, c}



const nomeAttr = 'nota'
const valorAttr = 7.87

//Antes do ES6
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

//ES6
const obj4 = {
    [nomeAttr]: valorAttr
}
console.log(obj4)


//Antes do ES6
const obj5 = {
    funcao1: function() {

    }
}

//ES6
const obj6 = {
    funcao1() {
        //forma reduzida
    }
}