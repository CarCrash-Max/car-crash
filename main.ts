controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
    pause(500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`empty cave`, function (sprite, location) {
    if (true) {
        game.over(true, effects.confetti)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
    pause(500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles5, function (sprite, location) {
    if (true) {
        game.over(true, effects.confetti)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = -100
    pause(100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles7, function (sprite, location) {
    if (true) {
        game.over(true, effects.confetti)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    if (true) {
        game.over(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles9, function (sprite, location) {
    if (true) {
        game.over(true, effects.confetti)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles15, function (sprite, location) {
    if (true) {
        game.over(true, effects.confetti)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = 50
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles11, function (sprite, location) {
    if (true) {
        game.over(true, effects.confetti)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes-up`, function (sprite, location) {
    if (true) {
        game.over(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    if (true) {
        game.over(false)
    }
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level10`)
scene.setBackgroundImage(assets.image`background`)
mySprite = sprites.create(assets.image`truck3`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 850
forever(function () {
    music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
})
