<pre>          _____________   __________   ___________   ___   ___   _______________  
         /xxxxxxxxxxxx/  /xxxxxxxxx/  /xxxxxxxxxx/  /xx/  /xx/  /xxxxxxxxxxxxxx/  
        /xxxxxxxxxxxx/  /xxxxxxxxx/  /xxxxxxxxxx/  /xx/  /xx/  /xxxxxxxxxxxxxx/  
       /xx/ \xxxxxxx/  /xx/ \xxxx/  /xx/ \xxxxx/  /xx/  /xx/  /xx/ \xxxxxxxxx/  
      /xx/   \xxxxx/  /xx/   \xx/  /xx/   \xxx/  /xx/  /xx/  /xx/   \xxxxxxx/  
     /xxx\____\xxx/   \xx\_____   |xx|     \x/  |xx|  |xx|  |xx|     \xxxxx/  
    /xxxxxxxxxxxxx\    \xxxxxxx\  |xx|      |   |xx|  |xx|  |xx|      \xxx/  
   /xxxxxxx/    \xx\         \xx\ |xx|      x   |xx|  |xx|  |xx|      /xx/  
  /xx/\xxx/      \xx\  ___   /xx/  \xx\   ___   |xx|  |xx|  |xx|     /xx/  
 /xx/  \x/        \xx\ \xx\_/xx/    \xx\_/xx/   |xx|  |xx|  |xx|    /xx/  
/xx/    |          \xx\ \xxxxx/      \xxxxx/    |xx|  |xx|  |xx|   /xx/  
\x/     |           \x/  \xxx/        \xxx/      \x/   \x/   \xx\ /xx/  
 |      |            |    \x/          \x/        |     |     \xxxxx/  
 |      |            |     |            |         x     |      \xxx/  
 |      x            |     x            |               |       \x/  
 |                   |                  |               x        |  
 x                   |                  x                        |  
                     |                                           |  
                     |                                           x  
                     |  
                     x  </pre>

## v0.0.3

Preview: https://jsfiddle.net/0y2tfmsv/2/

![Alt text](http://i.imgur.com/bYZkACQ.png "Preview")

------------------

Intended features to be developed (in priority order):  
- DeltaTime on update (DONE)
- Print text (DONE)
- Sprite loader, it will load a .txt file and add to the GameObject.sprite[0]
- Spritesheet loader, same as the sprite loader but will add each frame to an index of Gameobject.sprite[]
- Play/Stop animation from spritesheet with a framerate handler
- Keyboard/Mouse input manager
- Better overall structure of the engine
- Collision detection
- A more organized way to separate static objects (like background) from game objects (like a player or a monster)
- Independent camera, this will allow the field to be as big as you want, only rendering the parts you need.
- Ascii sprite and spritesheet editor made for this engine (the dream)
- Import spritesheets from pastebin (or another pastie site)

Current features:
- Good ol' init/update/draw loop
- DOM will not be updated if the HTML generated from "field" hasn't changed.
- Each cell from the gameobject sprite have independent colors.
- Basic x/y grid, you can assign non-integer values to gameobject X and Y, but the display will always floor the values (only for display, the gameobject values will be intact)

------------------

Changelog:

v0.0.1 - 19/01/2016 - https://jsfiddle.net/0y2tfmsv/  
-Git init

v0.0.2 - 20/01/2016 - https://jsfiddle.net/0y2tfmsv/1/  
-Cells now have independent colors, you can use the css standard you like (name, hexadecimal or RGB)

v0.0.3 - 22/01/2016 - https://jsfiddle.net/0y2tfmsv/2/  
-deltaTime is now sent to update(), print() function was added to print text.
