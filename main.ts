input.onButtonPressed(Button.A, function () {
    radio.sendNumber(7)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(9)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(5)
})
radio.setGroup(1)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 500) {
        basic.clearScreen()
        led.plot(4, 2)
        radio.sendNumber(4)
    } else if (input.acceleration(Dimension.X) < -500) {
        basic.clearScreen()
        led.plot(0, 2)
        radio.sendNumber(3)
    } else if (input.acceleration(Dimension.Y) > 500) {
        basic.clearScreen()
        led.plot(2, 4)
        radio.sendNumber(2)
    } else if (input.acceleration(Dimension.Y) < -500) {
        basic.clearScreen()
        led.plot(2, 0)
        radio.sendNumber(1)
    } else {
        basic.clearScreen()
        led.plot(2, 2)
        radio.sendNumber(0)
    }
})
