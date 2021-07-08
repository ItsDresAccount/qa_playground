function discountCalculator(senior: boolean, vetOrResponder: boolean, clubMember: boolean): number {
    // If any of the 'return' statements occur, none of the following code will be evaluated

    // Our first option will only occur if ALL 3 are TRUE
    if (senior && vetOrResponder && clubMember) return 0.25

    // This will happen if either combo is true
    if ((vetOrResponder && clubMember) || (senior && clubMember)) return 0.15

    // This will happen if the customer is a senior AND a vet/first responder
    if (senior && vetOrResponder) return 0.2

    // This will happen if ANY of the 3 are true
    if (senior || vetOrResponder || clubMember) return 0.1

    // This will only happen if ALL 3 are FALSE
    return 0
}


console.log(
    discountCalculator(true, false, false),
    discountCalculator(false, true, true)
)