let cons = [
    { id: "CLIP_SIZE", text: "Has a [NUM]% smaller clip", not: ["MELEE", " MEDIGUN"], value: -0.65, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% less damage per bullet", only: ["GUN", "SNIPER"], value: -0.75, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% less damage per pellet", only: ["SHOTGUN"], value: -0.75, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% less damage", only: ["MELEE"], value: -0.75, multiplier: "[NUM]"},
    { id: "KNOCKBACK", text: "[NUM]% increase in push force taken from damage and airblast while deployed", value: -0.6, multiplier: "[NUM]"},
    { id: "SLOWED", text: "[NUM]% slower movement speed on wearer", value: -0.775, multiplier: "[NUM]"},
    { id: "SLOWED", text: "[NUM]% slower movement speed while deployed", value: -0.7, multiplier: "[NUM]"},
    { id: "RANDOM_CRITS", text: "No random critical hits", value: -10},
    { id: "CRITS", text: "Critical hits do -[NUM]% damage", value: -0.9, multiplier: "[NUM]"},
    { id: "CRITS", text: "Critical hits turn into minicrits", value: -30},
    { id: "MAX_PRIM_AMMO", text: "-[NUM]% max primary ammo on wearer", value: -0.65, multiplier: "[NUM]"},
    { id: "DAMAGE_TO_BUILDINGS", text: "-[NUM]% damage to enemy buildings", not: ["MEDIGUN"], value: -0.35, multiplier: "[NUM]"},
    { id: "DAMAGE_TO_PLAYERS", text: "-[NUM]% damage to enemy players", not: ["MEDIGUN"], value: -0.675, multiplier: "[NUM]"},
    { id: "UBERCHARGE_RATE", text: "Has [NUM]% slower charge rate", only: ["MEDIGUN"], value: -0.7, multiplier: "[NUM]"},
    { id: "HEAL_RATE", text: "Heal rate decreased by [NUM]%", only: ["MEDIGUN"], value: -0.625, multiplier: "[NUM]"},
    { id: "OVERHEAL_RATE", text: "Overheal rate decreased by [NUM]%", only: ["MEDIGUN"], value: -0.625, multiplier: "[NUM]"},
    { id: "UBERCHARGE_RATE", text: "-[NUM]% ÜberCharge rate on Overhealed patients", only: ["MEDIGUN"], value: -0.75, multiplier: "[NUM]"},
    { id: "MAX_HEALTH", text: "Lowers max health by [NUM]% on wearer", value: -1, multiplier: "[NUM]"},
    { id: "REGEN", text: "When active for too long, -3 health lost per second on wearer", value: -40},
    { id: "SEE_YOUR_HEALTH", text: "Allows enemies to see your health", value: -40},
    { id: "FIRING_SPEED", text: "[NUM]% slower firing speed", not: ["MEDIGUN", "FLAMETHROWER"], value: -0.7, multiplier: "[NUM]"},
    { id: "JUMP_HEIGHT", text: "Jump height decreased by [NUM]% when active", value: -0.65, multiplier: "[NUM]"},
    { id: "BLEED_ON_MISS", text: "On miss, causes self-damage and bleed to the player for 5 seconds",only: ["MELEE"], value: -25, multiplier: "[NUM]"},
    { id: "ROCKET_SPEED", text: "Has [NUM]% slower rocket speed", only: ["ROCKET"] , value: -0.65, multiplier: "[NUM]"},
    { id: "SPLASH_DAMAGE", text: "Has [NUM]% smaller splash damage radius.", only: ["ROCKET", "GRENADE", "STICKY"] , value: -0.7, multiplier: "[NUM]"},
    { id: "EXPLOSIVE_SELF_DAMAGE", text: "+[NUM]% blast damage to self", only: ["ROCKET", "GRENADE", "STICKY"] , value: -0.685, multiplier: "[NUM]"},
    { id: "HEALING", text: "-[NUM]% less healing from [HPSRC]", value: -0.7, multiplier: "[NUM]"},
    { id: "AIRBLAST_COST", text: "Airblasts cost [NUM]% more ammo to fire", value: -0.625, only: ["FLAMETHROWER"], multiplier: "[NUM]"},
    { id: "AFTERBURN_DAMAGE", text: "Deals [NUM]% less afterburn damage", value: -0.675, only: ["FLAMETHROWER"], multiplier: "[NUM]"},
    { id: "PROJECTILE_VARIATION", text: "+3 degrees random projectile deviation", only: ["ROCKET", "GRENADE"] , value: -0.625, multiplier: "[NUM]"},
    { id: "DISPENSER_AMMO", text: "Cannot collect ammo from dispensers while active", not: ["MELEE"] , value: -20},
    { id: "SCOPE", text: "Cannot scope", only: ["SNIPER"] , value: -40},
    { id: "DAMAGE_VULN", text: "Raises [VULN] vulnerability by [NUM]% when active", value: -0.7, multiplier: "[NUM]"},
];

let pros = [
    { id: "CLIP_SIZE", text: "Has a [NUM]% bigger clip", not: ["MELEE", " MEDIGUN"], value: 0.65, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% more damage per bullet", only: ["GUN", "SNIPER"], value: 0.75, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% more damage per pellet", only: ["SHOTGUN"], value: 0.75, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% more damage", only: ["MELEE"], value: 0.75, multiplier: "[NUM]"},
    { id: "EXTRA_JUMP", text: "Grants an additional jump while deployed", value: 30},
    { id: "CRITS", text: "Guarantees Critical damage on [ECOND]", not: ["MEDIGUN", "SNIPER"],value: 10},
    { id: "SLOW_ON_HIT", text: "On hit: slows down enemy players",not: ["MEDIGUN"], value: 30},
    { id: "ATTACK_SPEED", text: "+[NUM]% increased attack speed", not: ["MEDIGUN"], value: 0.75, multiplier: "[NUM]"},
    { id: "DEPLOY_SPEED", text: "+[NUM]% faster weapon deploy time", value: 2, multiplier: "[NUM]"},
    { id: "AIR_CRITS", text: "Deals crits while the wielder is in mid-air", not: ["MEDIGUN"], value: 10},
    { id: "MINI_CRITS", text: "Deals minicrit damage on non-critical hits", not: ["MEDIGUN"], value: 80},
    { id: "AFTERBURN", text: "Causes hit enemies to suffer afterburn for 6 seconds", not: ["MEDIGUN"], value: 25},
    { id: "DISABLE_BUILDING", text: "Disables buildings for 4 seconds on hit", not: ["MEDIGUN"], value: 25},
    { id: "SPEED_ON_KILL", text: "Gain a 3 second speed boost on kill", not: ["MEDIGUN"], value: 25},
    { id: "HEAL_ON_KILL", text: "On kill: heals you [NUM]% base health", not: ["MEDIGUN"], value: 0.75, multiplier: "[NUM]"},
    { id: "IGNITE_ON_HIT", text: "On hit: ignites enemy players", not: ["MEDIGUN", "FLAMETHROWER"], value: 20},
    { id: "UBERCHARGE_RATE", text: "Has [NUM]% faster charge rate", only: ["MEDIGUN"], value: 2, multiplier: "[NUM]"},
    { id: "HEAL_RATE", text: "Heal rate increased [NUM]%", only: ["MEDIGUN"], value: 0.625, multiplier: "[NUM]"},
    { id: "OVERHEAL_RATE", text: "Overheal rate increased [NUM]%", only: ["MEDIGUN"], value: 0.625, multiplier: "[NUM]"},
    { id: "MEDIC_MIRROR", text: "Medic mirrors blast jump and shield charge of their heal targe", only: ["MEDIGUN"], value: 10},
    { id: "MAX_HEALTH", text: "Raises max health by [NUM]% on wearer", only: ["MEDIGUN"], value: 0.85, multiplier: "[NUM]"},
    { id: "REGEN", text: "When active, +3 health regenerated per second on wearer", value: 40},
    { id: "SEE_ENEM_HEALTH", text: "Allows you to see an enemy's health", value: 40},
    { id: "FIRING_SPEED", text: "[NUM]% faster firing speed", not: ["MEDIGUN", "FLAMETHROWER"], value: 0.7, multiplier: "[NUM]"},
    { id: "JUMP_HEIGHT", text: "Jump height increased by [NUM]% when active", value: 0.65, multiplier: "[NUM]"},
    { id: "HEALTH_DROP", text: "A small health pack is dropped when the player kills an enemy", value: 40},
    { id: "BLEED_ON_HIT", text: "On hit: causes bleed to enemy for 5 seconds", not: ["ROCKET", "GRENADE", "STICKY", "MEDIGUN"], value: 25},
    { id: "MAX_PRIM_AMMO", text: "+[NUM]% max primary ammo on wearer", value: 0.65, multiplier: "[NUM]"},
    { id: "ROCKET_SPEED", text: "Has [NUM]% faster rocket speed", only: ["ROCKET"] , value: 0.65, multiplier: "[NUM]"},
    { id: "SPLASH_DAMAGE", text: "Has [NUM]% larger splash damage radius.", only: ["ROCKET", "GRENADE", "STICKY"] , value: 2, multiplier: "[NUM]"},
    { id: "EXPLOSIVE_SELF_DAMAGE", text: "-[NUM]% blast damage to self", only: ["ROCKET", "GRENADE", "STICKY"] , value: 0.685, multiplier: "[NUM]"},
    { id: "PROJECTILE_REFLECT", text: "Projectiles cannot be deflected", only: ["ROCKET", "GRENADE", "STICKY"] , value: 25},
    { id: "KNOCKBACK", text: "[NUM]% decrease in push force taken from damage and airblast while deployed", value: 0.6, multiplier: "[NUM]"},
    { id: "CAPTURE_RATE", text: "Increases user's capture rate by 1 for points and carts", value: 30},
    { id: "HEALING", text: "+[NUM]% more healing from [HPSRC]", value: 0.7, multiplier: "[NUM]"},
    { id: "AIRBLAST_COST", text: "Airblasts cost [NUM]% less ammo to fire", value: 0.625, only: ["FLAMETHROWER"], multiplier: "[NUM]"},
    { id: "AFTERBURN_DAMAGE", text: "Deals [NUM]% more afterburn damage", value: 0.675, only: ["FLAMETHROWER"], multiplier: "[NUM]"},
    { id: "MEDIBEAM_TRANSFER", text: "Damage transfers to all players connected by Medic beams", value: 15, only: ["MELEE"]},
    { id: "PYROLAND", text: "On Equip: Visit Pyroland", value: 0},
    { id: "BROADCAST", text: "Broadcasts every successful hit on an enemy player over the death-notice area", only:["MELEE"], value: 0},
];

let classes = [
    { name: "scout", weapons: ["SHOTGUN", "GUN", "MELEE"]},
    { name: "soldier", weapons: ["ROCKET", "SHOTGUN", "MELEE"]},
    { name: "pyro", weapons: ["FLAMETHROWER", "SHOTGUN", "MELEE"]},
    { name: "demoman", weapons: ["GRENADE", "STICKY", "MELEE"]},
    { name: "heavy", weapons: ["MINIGUN", "SHOTGUN", "MELEE"]},
    { name: "engineer", weapons: ["SHOTGUN", "GUN", "MELEE"]},
    { name: "medic", weapons: ["MEDIGUN", "GUN", "MELEE"]},
    { name: "sniper", weapons: ["SNIPER", "GUN", "MELEE"]},
    { name: "spy", weapons: ["GUN", "MELEE"]},
]

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
    var conditions = ["burning targets", "wet targets", "targets attacked from behind", "bleeding targets", "soaked targets", "targets in mid-air"]
    return char
        .replace("[NUM]", randnum)
        .replace("[ECOND]", chooseInArr(conditions))
        .replace("[HPSRC]", chooseInArr(["medic sources", "health packs", "dispensers"]))
        .replace("[VULN]", chooseInArr(["bullet", "explosion", "damage"]))
}

function pickCharacteristic(type){
    type === "cons" ? type = cons : type = pros
    let char = chooseInArr(type) || chooseInArr(type)
    if(!char) return;
    randnum = (char.text.includes("[NUM]") || char.text.includes("[NUM]%")) ? round(5, rng(1, 95)) : 1;
    char.text = format(char.text, randnum)
    char.multiplier = randnum
    return char
}

var role = chooseInArr(classes)
var weapon = chooseInArr(role.weapons)
pros = pros.filter(pro => pro.not ? !pro.not.includes(weapon) : pros)
cons = cons.filter(con => con.not ? !con.not.includes(weapon) : cons)
pros = pros.filter(pro => pro.only ? pro.only.includes(weapon) : pros)
cons = cons.filter(con => con.only ? con.only.includes(weapon) : cons)

function getEnoughChars(threshold=100, limit=50, stats=12){
    var chars = []
    var quality = 0
    for(var i = 0; i < rng(2, 3); i++){
        var currentChar = pickCharacteristic("pros");
        chars.push(currentChar.text)
        quality += currentChar.value * currentChar.multiplier;
        pros = pros.filter(pro => pro.id != currentChar.id)
        cons = cons.filter(con => con.id != currentChar.id)
    }
    var currentChar = pickCharacteristic("cons") || pickCharacteristic("cons");

    while(quality > limit && chars.length < stats){
        var currentChar = pickCharacteristic("cons") || pickCharacteristic("cons");
        if(!currentChar) return [chars, quality];
        chars.push(currentChar.text)
        quality += currentChar.value * currentChar.multiplier;
        cons = cons.filter(con => con.id != currentChar.id)
    }
    return [chars, quality]
}

var x = getEnoughChars()

document.write(`<h1> ${role.name.toUpperCase()} ${weapon}</h1> ${x[0].join('<p />')} <br /> ${x[1]}`);