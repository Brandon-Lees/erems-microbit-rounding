let var1 = 0
basic.forever(function () {
    var1 = randint(11, 19)
    basic.showNumber(var1)
    if (var1 <= 14) {
        basic.pause(2000)
        while (true) {
            while (input.buttonIsPressed(Button.A)) {
                var1 = Math.floor(10)
                basic.showNumber(var1)
                basic.showIcon(IconNames.Happy)
                while (false) {
                    basic.showIcon(IconNames.Sad)
                }
            }
            break;
        }
    } else {
        basic.pause(2000)
        while (true) {
            while (input.buttonIsPressed(Button.B)) {
                var1 = Math.floor(20)
                basic.showNumber(var1)
                basic.showIcon(IconNames.Happy)
                while (false) {
                    basic.showIcon(IconNames.Sad)
                }
            }
            break;
        }
    }
})
