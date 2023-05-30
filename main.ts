input.onButtonPressed(Button.A, function () {
    cuteBot.forward()
    cuteBot.closeheadlights()
})
input.onButtonPressed(Button.AB, function () {
    cuteBot.turnleft()
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff8000)
})
input.onButtonPressed(Button.B, function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    cuteBot.stopcar()
})
