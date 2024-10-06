var1 = 0

def on_gesture_shake():
    global var1
    var1 = randint(11, 19)
    basic.show_number(var1)
    if var1 >= 15:
        var1 = Math.ceil(20)
        if input.button_is_pressed(Button.A):
            while True:
                basic.show_leds("""
                    # . . . #
                    . # . . #
                    . . # . #
                    . . . # #
                    . . . . #
                    """)
            while False:
                basic.show_leds("""
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    """)
            while True:
                pass
            basic.show_number(var1)
    else:
        var1 = Math.floor(10)
        basic.show_number(var1)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
