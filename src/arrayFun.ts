// The value of a list array is based on what is inside the brackets "[]"
// Each item needsd to be seaparated by a comma

let firstArray = []

let secondArray = ['thing1', 'thing2', 'The Cat in the Hat']

firstArray.push(0)
firstArray.push(true)
firstArray.push('The Grinch')
firstArray.push(27)
firstArray.push(-15)
firstArray.push('This should be the final item in the array')

console.log(firstArray)
console.log(firstArray[3])


for (let i = 0;i < firstArray.length;i++) {
    console.log(firstArray[i])
}

let favMovies: Array<string> = [
    'Die Hard',
    'Pulp Fiction',
    'Lost in Translation',
    'Avengers',
    'Tokyo Drift',
    'Tenet',
    'LOTR Trilogy',
    'Scary Movie',
    'Heartbreak Kid',
    'Benchwarmers',
    'Episode IV: A New Hope'
]

let stringify = (movie: string) => {
    console.log(`Oh my goodness ${movie} is my favorite movie!`)
}

favMovies.forEach((flix) => {
    stringify(flix)
})