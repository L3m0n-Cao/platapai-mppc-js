<div align="center">
	<br />
<h1>platapai-mppc-js</h1>
<h3>A maintained nodeJS bot package for MPPClone/Multiplayer Piano. based on Anonydiamond's anony-mpp-bot-js.</h3>
</div>
## Installation

```bash
npm init
npm i platapai-mppc-js
node .
```

## Usage/Example/Instructions/Documentation
Create an .env file in the root directory (or use the secrets tab on Replit) of your project and add your token to it.
```env
token=PutY0urMppCl0neT0k3nHere.S0YouCan-Us3s-this-c0de-UwUeXaMpLe12
```

Example JS Code
```js
const Bot = require('platapai-mppc-js');

const bot = new Bot({
    token: process.env['token'], //MPPClone Token. Use Secrets (Replit) or an .env file (Local).
    name: "Cool Bot Name!",      //Bot Name.
    color: "#123456",            //HEX Colour Code.
    room: "CoolRoom20"           //Room Name.
})

bot.connect(); //Connects to the MPPClone Server.

var prefix = "!" //Prefix for commands.

bot.client.on('a', msg => {          //Message Event.
    let cmd =  msg.a.split(' ')[0]   //Defines what "cmd" is.

    if (cmd === `${prefix}ping`) {  //If the message starts with the prefix and the word "ping".
        bot.chat("Pong!");          //Send "Pong!" in chat.
    }
    //more Commands Here uwu
})
```

## Useful Documentation

```js
//     Connections     //

connect();                  //Connects to the MPPClone Server.

disconnect();               //Disconnects from the MPPClone Server.

//     Chat     //

chat(message, delay);       //Sends a message to the chat.

//     MIDI (WIP)     //

playSongFile(input);        //Plays a MIDI file. (File Path)

StopSong();                 //Stops the current song.

//     Moderation     //

kickban(id, ms);           //Kicks and bans a user for a specified amount of time, in milliseconds.

unkickban(id);             //Unbans a user.

giveCrown(id);             //Gives crown to a user.

dropCrown();               //Drops crown.

//     Misc     //

uwu()                      //Returns "uwu". There is no purpose for this function.

owo()                      //Returns "owo". There is no purpose for this function.
```
