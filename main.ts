namespace SpriteKind {
    export const Display = SpriteKind.create()
}
function display_groups () {
    inDisplay = true
    camera = sprites.create(img`
        . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(camera)
    for (let value of sprites.allOfKind(SpriteKind.Text)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Display)) {
        value.destroy()
    }
    temp_text = textsprite.create("Use \"Show console\" to copy", 0, 15)
    temp_text.setPosition(80, 8)
    lowest_y = 22
    for (let index = 0; index <= groups.length - 1; index++) {
        whole_group = "Group " + (index + 1) + ": "
        group_label = new_text_sprite("Group " + (index + 1), 8)
        group_label.left = 4
        group_label.y = lowest_y
        background_bar = sprites.create(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `, SpriteKind.Display)
        background_bar.y = lowest_y
        background_bar.z = -5
        thisGroup = groups[index]
        lowest_y += 12
        for (let value of thisGroup) {
            name = textsprite.create(value, 0, 15)
            name.left = 8
            name.y = lowest_y
            lowest_y += 12
            whole_group = "" + whole_group + " " + value
        }
        console.log(whole_group)
        lowest_y += 12
    }
}
function new_text_sprite (text: string, textSize: number) {
    textSprite = textsprite.create(text)
    textSprite.setMaxFontHeight(textSize)
    textSprite.setOutline(1, 12)
    return textSprite
}
function create_labels () {
    mySprite = sprites.create(img`
        ccccccccccccccccccccccccccccccccccc
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        c111111111111111111111111111111111c
        ccccccccccccccccccccccccccccccccccc
        `, SpriteKind.Display)
    new_text_sprite("# students in group:", 8).setPosition(80, 30)
    size = Math.min(Math.ceil(names.length / 2), 4)
    groupSizeValueText = new_text_sprite("" + size, 12)
    groupSizeValueText.setPosition(80, 60)
    temp_text = textsprite.create("Total Students: " + names.length, 0, 15)
    temp_text.setMaxFontHeight(8)
    temp_text.setPosition(80, 100)
    no_of_groups_title_label = textsprite.create("# of groups:", 0, 15)
    no_of_groups_title_label.setPosition(80, 85)
    number_of_groups = Math.ceil(names.length / size)
    num_of_groups_label = textsprite.create("" + number_of_groups, 0, 15)
    num_of_groups_label.y = 85
    num_of_groups_label.left = no_of_groups_title_label.right + 6
    background_bar = sprites.create(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `, SpriteKind.Display)
    background_bar.setPosition(80, 116)
    temp_text = textsprite.create("Make Groups", 0, 1)
    temp_text.setPosition(105, 115)
    a_button_icon = sprites.create(img`
        . . . c c c c . . . 
        . . c 1 1 1 1 c . . 
        . c 1 b f b b b c . 
        c 1 b f b f b b a c 
        c 1 f b b b f b a c 
        c 1 f f f f f b a c 
        c 1 f b b b f b a c 
        c c b b b b b a c c 
        . . c a a a a c . . 
        . . . c c c c . . . 
        `, SpriteKind.Display)
    a_button_icon.setPosition(149, 115)
    animation.runMovementAnimation(
    a_button_icon,
    "m -2 0 m 2 0",
    1000,
    true
    )
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    down_arrow.setImage(downButtomImage)
})
function update_Group_size (new_size: number) {
    size = new_size
    groupSizeValueText.setText("" + size)
    groupSizeValueText.setPosition(80, 60)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    groups = []
    names_without_groups = []
    number_of_groups = Math.ceil(names.length / size)
    for (let value of names) {
        names_without_groups.push(value)
    }
    current_group_number = 0
    while (0 < names_without_groups.length) {
        new_group = groups[current_group_number]
        if (!(new_group)) {
            new_group = []
        }
        new_group.push(names_without_groups.removeAt(randint(0, names_without_groups.length - 1)))
        groups[current_group_number] = new_group
        current_group_number = (current_group_number + 1) % number_of_groups
    }
    display_groups()
})
function update_number_of_groups_label () {
    number_of_groups = Math.ceil(names.length / size)
    num_of_groups_label.setText("" + number_of_groups)
    num_of_groups_label.left = no_of_groups_title_label.right + 6
    num_of_groups_label.y = 85
}
function create_Buttons () {
    controller.configureRepeatEventDefaults(0, 300)
    upButtonImage = img`
        . . . c c c c c c c . . . 
        . . c 1 1 1 1 1 1 1 c . . 
        . c 1 b b b f b b b b c . 
        c 1 b b b f 1 f b b b a c 
        c 1 b b f 1 1 1 f b b a c 
        c 1 b f 1 1 1 1 1 f b a c 
        c 1 b f f f 1 f f f b a c 
        c 1 b b b f 1 f b b b a c 
        c 1 b b b f f f b b b a c 
        c 1 b b b b b b b b b a c 
        . c b b b b b b b b a c . 
        . . c a a a a a a a c . . 
        . . . c c c c c c c . . . 
        `
    upButtonPressedImage = img`
        . . . c c c c c c c . . . 
        . . c f f f f f f f c . . 
        . c f b b b b b b b b c . 
        c f b b b b f b b b b c c 
        c f b b b f 1 f b b b c c 
        c f b b f 1 1 1 f b b c c 
        c f b f 1 1 1 1 1 f b c c 
        c f b f f f 1 f f f b c c 
        c f b b b f 1 f b b b c c 
        c f b b b f f f b b b c c 
        . c b b b b b b b b c c . 
        . . c c c c c c c c c . . 
        . . . c c c c c c c . . . 
        `
    downButtomImage = img`
        . . . c c c c c c c . . . 
        . . c 1 1 1 1 1 1 1 c . . 
        . c 1 b b b b b b b b c . 
        c 1 b b b f f f b b b a c 
        c 1 b b b f 1 f b b b a c 
        c 1 b f f f 1 f f f b a c 
        c 1 b f 1 1 1 1 1 f b a c 
        c 1 b b f 1 1 1 f b b a c 
        c 1 b b b f 1 f b b b a c 
        c 1 b b b b f b b b b a c 
        . c b b b b b b b b a c . 
        . . c a a a a a a a c . . 
        . . . c c c c c c c . . . 
        `
    downButtonPressedImage = img`
        . . . c c c c c c c . . . 
        . . c f f f f f f f c . . 
        . c f b b b b b b b b c . 
        c f b b b b b b b b b a c 
        c f b b b f f f b b b a c 
        c f b b b f 1 f b b b a c 
        c f b f f f 1 f f f b a c 
        c f b f 1 1 1 1 1 f b a c 
        c f b b f 1 1 1 f b b a c 
        c f b b b f 1 f b b b a c 
        . c b b b b f b b b a c . 
        . . c a a a a a a a c . . 
        . . . c c c c c c c . . . 
        `
    up_arrow = sprites.create(upButtonImage, SpriteKind.Display)
    up_arrow.setPosition(110, 60)
    down_arrow = sprites.create(downButtomImage, SpriteKind.Display)
    down_arrow.setPosition(50, 60)
}
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    if (!(inDisplay)) {
        down_arrow.setImage(downButtonPressedImage)
        update_Group_size(Math.max(1, size - 1))
        update_number_of_groups_label()
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (!(inDisplay)) {
        up_arrow.setImage(upButtonPressedImage)
        update_Group_size(Math.min(names.length, size + 1))
        number_of_groups = Math.ceil(names.length / size)
        update_number_of_groups_label()
    }
})
function parse_names () {
    new_names = []
    for (let index = 0; index <= names.length; index++) {
        if (!(names[index].isEmpty())) {
            new_names.push(names[index])
        }
    }
    names = new_names
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    up_arrow.setImage(upButtonImage)
})
let new_names: string[] = []
let up_arrow: Sprite = null
let downButtonPressedImage: Image = null
let upButtonPressedImage: Image = null
let upButtonImage: Image = null
let new_group: string[] = []
let current_group_number = 0
let names_without_groups: string[] = []
let downButtomImage: Image = null
let down_arrow: Sprite = null
let a_button_icon: Sprite = null
let num_of_groups_label: TextSprite = null
let number_of_groups = 0
let no_of_groups_title_label: TextSprite = null
let groupSizeValueText: TextSprite = null
let size = 0
let mySprite: Sprite = null
let textSprite: TextSprite = null
let name: TextSprite = null
let thisGroup: string[] = []
let background_bar: Sprite = null
let group_label: TextSprite = null
let whole_group = ""
let groups: string[][] = []
let lowest_y = 0
let temp_text: TextSprite = null
let camera: Sprite = null
let inDisplay = false
let names: string[] = []
scene.setBackgroundColor(13)
// Fill in names here! It's okay to leave empty entries in, they will get deleted automatically
names = [
"Student A",
"Student B",
"Student C",
"Student D",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
""
]
parse_names()
create_labels()
create_Buttons()
game.onUpdate(function () {
    if (inDisplay) {
        if (controller.up.isPressed()) {
            if (0 < camera.y - 60) {
                camera.y = camera.y - 2
            }
        }
        if (controller.down.isPressed()) {
            if (camera.y + 60 < lowest_y) {
                camera.y = camera.y + 2
            }
        }
    }
})
