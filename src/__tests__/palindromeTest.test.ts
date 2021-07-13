let pallyChecker = (word: string): string => {
    return word.split("").reverse().join("")
}

const myPals: Array<string> = [
    'racecar',
    'tacocat',
    'hannah',
    'level',
    'lol',
    'sus',
]

test('Palidrome Data Driven Test', () => {
    myPals.forEach((pals)=>{
        expect(pallyChecker(pals)).toBe(pals)
    })


    for (let i = 0 ; i < myPals.length; i++) {
        expect(pallyChecker(myPals[i])).toBe(myPals[i])
    }
}) 












var anArray = ['Dre', 'Trev', 'Tristan', 'Zack', 'Yvonne']

var myEmployees = [
    {
        name: 'Bernice Ortiz',
        title: 'CEO'
    },
    {
        name: 'Dre Smith',
        title: 'CFO'
    }
]

console.log(myEmployees[0].name)
console.log(myEmployees[1].title)

console.log(anArray[1])

var anObject = {
    name: 'Dre',
    title: 'Instructor',
    email: 'andrew.smith@devmounta.in'
}

console.log(anObject.title)