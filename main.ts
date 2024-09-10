let contador = 0
let led_enecendidos = 0
basic.forever(function () {
    if (led_enecendidos >= 1) {
        led.plot(1, 4)
        led.unplot(2, 0)
    }
    if (led_enecendidos >= 2) {
        led.plot(3, 4)
        led.unplot(1, 0)
    }
    if (led_enecendidos >= 3) {
        led.plot(2, 4)
        led.unplot(3, 0)
    }
    if (led_enecendidos >= 4) {
        led.plot(2, 3)
        led.unplot(2, 1)
    }
})
basic.forever(function () {
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(2, 1)
    led.plot(4, 0)
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(2, 2)
    led.plot(1, 3)
    led.plot(3, 3)
    led.plot(0, 4)
    led.plot(4, 4)
    basic.pause(500)
    led.plot(2, 3)
    basic.pause(500)
    led.plot(2, 4)
    basic.pause(500)
    contador += 1
    if (contador >= 10) {
        contador = 0
        if (led_enecendidos < 5) {
            led_enecendidos += 1
        }
    }
})
