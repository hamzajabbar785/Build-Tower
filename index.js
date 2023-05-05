// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
// A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:
// [
//   "     *     ",  //total 11 characters
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

const towerBuilder = (n) => {
    let space,star,arr = []

    for(let i = 1; i <= n; i++){
        space = " ".repeat(n - i)
        star = "*".repeat(2 * i - 1)
        arr.push(`${space}${star}${space}`)
    }

    return arr
}

towerBuilders(6)

//Solution 2

const towerBuilder = (n) => {
    return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}