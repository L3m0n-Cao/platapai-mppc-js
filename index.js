const Client = require("./client"); //hello code review person cool
const MidiPlayer = require("midi-player-js");
const fs = require("fs");

function Bot(login) {
    this.name = login.name;
    this.color = login.color;
    this.room = login.room;
    this.client = new Client({
        token: login.token
    })
    this.bot = this.client;
    const keys = ["a-1", "as-1", "b-1", "c0", "cs0", "d0", "ds0", "e0", "f0", "fs0", "g0", "gs0", "a0", "as0", "b0", "c1", "cs1", "d1", "ds1", "e1", "f1", "fs1", "g1", "gs1", "a1", "as1", "b1", "c2", "cs2", "d2", "ds2", "e2", "f2", "fs2", "g2", "gs2", "a2", "as2", "b2", "c3", "cs3", "d3", "ds3", "e3", "f3", "fs3", "g3", "gs3", "a3", "as3", "b3", "c4", "cs4", "d4", "ds4", "e4", "f4", "fs4", "g4", "gs4", "a4", "as4", "b4", "c5", "cs5", "d5", "ds5", "e5", "f5", "fs5", "g5", "gs5", "a5", "as5", "b5", "c6", "cs6", "d6", "ds6", "e6", "f6", "fs6", "g6", "gs6", "a6", "as6", "b6", "c7"];
    const Player = new MidiPlayer.Player(function (event) {
        setTimeout(Player.playLoop.bind(Player), 0);
        let key = keys[event.noteNumber - 21];
        let vel = event.velocity / 120;
        if (!!!event.name.startsWith("Note")) return;

        if (event.name == "Note on") {
            bot.startNote(key, vel);
        } else bot.stopNote(key);
    })
    this.player = Player;
}

Bot.prototype.connect = function () {
    this.bot.setChannel(this.room);
    this.bot.start();

    this.bot.once("hi", () => {
        console.log(this.name + "is Connected!");
        this.bot.say("Connected! ✅");
        this.bot.setName(this.name);
        this.bot.userset({
            color: this.color
        })
    })
}

Bot.prototype.disconnect = function () {
    this.bot.stop();
    console.log(this.name + "has Disconnected!");
}

Bot.prototype.chat = function (message, delay) {
    if ((!!!delay || isNaN(delay)) && message) return this.bot.say(message);
    setTimeout(() => {
        message && this.bot.say(message);
    }, typeof delay === 'number' && delay >= 1000 ? delay : 1000);
}

/**
 * @param {string} input 
 */

Bot.prototype.playSongFile = function (input) {
    if (!input) return "Please Enter a File Name.";
    this.player.loadFile(input);
}

Bot.prototype.kickban = function (id, ms) {
    this.client.sendArray([{m: "kickban", _id: id, ms: ms && typeof ms === 'number' ? ms : 120000}])
}

Bot.prototype.unkickban = function (id) {
    this.client.sendArray([{m: "unban", _id: id}])
}

Bot.prototype.giveCrown = function (id) {
    this.client.sendArray([{m: "chown", id: id}])
}

Bot.prototype.dropCrown = function () {
    this.client.sendArray([{m: "chown"}])
}

Bot.prototype.StopSong = function () {
    if (this.player.isPlaying()) {
        this.player.stop()
        this.chat("The Current Midi has Stopped Playing.");
    } 
    else this.chat("There seems to be No Midi Playing!");
}

Bot.prototype.uwu = function () {
    return "uwu"; //uwu
}

Bot.prototype.owo = () => {
    return "owo"; //owo
}

if (typeof module === 'undefined') {
    this.Bot = Bot;
} else {
    module.exports = Bot;
}