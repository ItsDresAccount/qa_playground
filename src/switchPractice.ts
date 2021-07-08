const myValue = 'Tuesday'
function switchDay(day) {
    switch (day) {
        case "Monday":
            return "You already know it's gonna be a long Monday"
            break
        case "Tuesday":
            return "You already know, Taco Tuesdays!"
            break
        case "Wednesday":
            return "H U M P   D A Y ! ! ! ! ! ! !"
            break
        case "Thursday":
            return "Thursty Thursdays, 1/2 off drinks"
            break
        case "Friday":
            return "Fish Fry-day, 15% off all fish dishes"
            break
        default:
            return "Whatever we want the default to print in the console"
    }
}

console.log(
    switchDay(myValue),
    switchDay('Friday'),
    switchDay('Monday'),
    switchDay('Saturday')
)