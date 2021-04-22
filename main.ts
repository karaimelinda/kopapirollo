let fegyver = 0
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
basic.forever(function () {
	
})
