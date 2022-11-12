
let cons = [
    {id: "CLIP_SIZE", text: "Has a [NUM]% smaller clip", value: -5, multiplier: "[NUM]"},
    {id: "DAMAGE", text: "Deals [NUM]% less damage per bullet", not: ["SHOTGUN"], value: -5, multiplier: "[NUM]"},
    {id: "DAMAGE", text: "Deals [NUM]% less damage per bullet", only: ["SHOTGUN"], value: -5, multiplier: "[NUM]"},
    {id: "KNOCKBACK", text: "[NUM]% increase in push force taken from damage and airblast while deployed", value: -1, multiplier: "[NUM]"},
    {id: "SLOWED", text: "[NUM]% slower movement speed on wearer", value: -3, multiplier: "[NUM]"},
    {id: "SLOWED", text: "[NUM]% slower movement speed while deployed", value: -2, multiplier: "[NUM]"},
    {id: "RANDOM_CRITS", text: "No random critical hits", value: -10},
    {id: "CRITS", text: "Critical hits do no damage", value: -60},
    {id: "CRITS", text: "Critical hits turn into minicrits", value: -30},
    {id: "MAX_PRIM_AMMO", text: "-[NUM]% max primary ammo on wearer", value: -1.5, multiplier: "[NUM]"},
    {id: "DAMAGE_TO_BUILDINGS", text: "-[NUM]% damage to enemy buildings", value: -0.85, multiplier: "[NUM]"},
    {id: "DAMAGE_TO_PLAYERS", text: "-[NUM]% damage to enemy players", value: -1.75, multiplier: "[NUM]"},
];

let pros = [
    { id: "EXTRA_JUMP", text: "Grants an additional jump when deployed", value: 30},
    { id: "CRITS", text: "Guarantees Critical damage on [ECOND]", value: 10},
    { id: "SLOW_ON_HIT", text: "On hit: slows down enemy players", value: 30},
    { id: "ATTACK_SPEED", text: "+[NUM]% increased attack speed", value: 2.5, multiplier: "[NUM]"},
    { id: "DEPLOY_SPEED", text: "+[NUM]% faster weapon deploy time", value: 2, multiplier: "[NUM]"},
    { id: "AIR_CRITS", text: "Deals crits while the wielder is in mid-air", value: 10},
    { id: "MINI_CRITS", text: "Deals minicrit damage on non-critical hits", value: 50},
    { id: "AFTERBURN", text: "Causes enemies to suffer afterburn for 6 seconds", value: 25},
    { id: "DISABLE_BUILDING", text: "Disables buildings for 4 seconds on hit", value: 25},
    { id: "SPEED_ON_KILL", text: "Gain a 3 second speed boost on kill", value: 25},
    { id: "HEAL_ON_KILL", text: "On kill: heals you [NUM]% base health", value: 2.5, multiplier: "[NUM]"},
    { id: "IGNITE_ON_HIT", text: "On hit: ignites enemy players", value: 20},
    { id: "PYROLAND", text: "On Equip: Visit Pyroland", value: 0},
];

function rng(min=0, max=1) {
    // max exclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function round(nearest, int) {
    return Math.ceil(int / nearest) * nearest;
}

function chooseInArr(arr){
    return arr[Math.ceil(Math.random() * arr.length - 1)]
}

function format(char, randnum){
    var conditions = ["burning targets", "wet targets", "targets attacked from behind", "bleeding targets", "soaked targets"]
    return char
        .replace("[NUM]", randnum)
        .replace("[ECOND]", chooseInArr(conditions))
}

function pickCharacteristic(type){
    randnum = round(5, rng(1, 95));
    type === "cons" ? type = cons : type = pros
    let char = chooseInArr(type)
    if(!char) return;
    char.text = format(char.text, randnum)
    char.multiplier = randnum
    return char
}

function getEnoughChars(threshold=100, limit=400, stats=12){
    var chars = []
    var quality = 0
    for(var i = 0; i < rng(2, 5); i++){
        var currentChar = pickCharacteristic("pros");
        chars.push(currentChar.text)
        quality += currentChar.value * currentChar.multiplier;
        pros = pros.filter(pro => pro.id != currentChar.id)
        cons = cons.filter(con => con.id != currentChar.id)
    }
    while(quality > limit && chars.length < stats){
        try{
            var currentChar = pickCharacteristic("cons");
        } catch(e) {console.log(currentChar)}
        chars.push(currentChar.text)
        quality += currentChar.value * currentChar.multiplier;
        cons = cons.filter(con => con.id != currentChar.id)
    }
    return [chars, quality]
}

var x = getEnoughChars()

document.write(x[0].join('<p />') + '<br />' + x[1]);