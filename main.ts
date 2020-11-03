input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . # .
        . . # # .
        . . . # #
        . . . # #
        . . . # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        # . # . #
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Surprised)
})
basic.showString("Hello!")
basic.forever(function () {
    basic.showLeds(`
        . # # # #
        . # # . #
        # # # . #
        . # # # #
        . # # . .
        `)
})
basic.forever(function () {
    basic.showString("3+5=")
    basic.showString("" + (3 + 5))
})
