Array.prototype.forEach2 = function(callback) {
    for(let index = 0; index < this.length; index++) {
        callback(this[index], index, this)
    }
}

const arr = [1, 2, 3]

arr.forEach2((value, index, arr) => {
    console.log(index, value, arr)
})
