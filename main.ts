input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    saját += 1
    basic.showString("S:")
    basic.showString("" + (saját))
})
input.onGesture(Gesture.Shake, function () {
    fegyver = randint(0, 2)
    if (fegyver == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (fegyver == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    barát += 1
    basic.showString("B:")
    basic.showString("" + (barát))
})
let fegyver = 0
let barát = 0
let saját = 0
saját = 0
barát = 0
basic.forever(function () {
	
})
