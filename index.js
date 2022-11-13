let cons = [
    { id: "CLIP_SIZE", text: "Has a [NUM]% smaller clip", not: ["MELEE", "MEDIGUN"], value: -0.65, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% less damage per bullet", only: ["GUN", "SNIPER"], value: -0.75, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% less damage per pellet", only: ["SHOTGUN"], value: -0.75, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% less damage", only: ["MELEE"], value: -0.75, multiplier: "[NUM]"},
    { id: "KNOCKBACK", text: "[NUM]% increase in push force taken from damage and airblast while deployed", value: -0.6, multiplier: "[NUM]"},
    { id: "SLOWED", text: "[NUM]% slower movement speed on wearer", value: -0.775, multiplier: "[NUM]"},
    { id: "SLOWED", text: "[NUM]% slower movement speed while deployed", value: -0.7, multiplier: "[NUM]"},
    { id: "RANDOM_CRITS", text: "No random critical hits", not: ["MEDIGUN"], value: -10},
    { id: "CRITS", text: "Critical hits do -[NUM]% damage", not: ["MEDIGUN"], value: -0.9, multiplier: "[NUM]"},
    { id: "CRITS", text: "Critical hits turn into minicrits", not: ["MEDIGUN"], value: -30},
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
    { id: "AFTERBURN_ON_MISS", text: "On miss, causes self-damage and afterburn to the player for 5 seconds",only: ["MELEE"], value: -25, multiplier: "[NUM]"},
    { id: "ROCKET_SPEED", text: "Has [NUM]% slower rocket speed", only: ["ROCKET"] , value: -0.65, multiplier: "[NUM]"},
    { id: "SPLASH_DAMAGE", text: "Has [NUM]% smaller splash damage radius.", only: ["ROCKET", "GRENADE", "STICKY"] , value: -0.7, multiplier: "[NUM]"},
    { id: "EXPLOSIVE_SELF_DAMAGE", text: "+[NUM]% blast damage to self", only: ["ROCKET", "GRENADE", "STICKY"] , value: -0.685, multiplier: "[NUM]"},
    { id: "HEALING", text: "-[NUM]% less healing from [HPSRC]", value: -0.7, multiplier: "[NUM]"},
    { id: "AIRBLAST_COST", text: "Airblasts cost [NUM]% more ammo to fire", value: -0.625, only: ["FLAMETHROWER"], multiplier: "[NUM]"},
    { id: "AFTERBURN_DAMAGE", text: "Deals [NUM]% less afterburn damage", value: -0.675, only: ["FLAMETHROWER"], multiplier: "[NUM]"},
    { id: "PROJECTILE_VARIATION", text: "+3 degrees random projectile deviation", only: ["ROCKET", "GRENADE"] , value: -0.625, multiplier: "[NUM]"},
    { id: "DISPENSER_AMMO", text: "Cannot collect ammo from dispensers while active", not: ["MELEE"] , value: -10},
    { id: "SCOPE", text: "Cannot scope", only: ["SNIPER"] , value: -40},
    { id: "DAMAGE_VULN", text: "Raises [VULN] vulnerability by [NUM]% when active", value: -0.7, multiplier: "[NUM]"},
    { id: "SNIPER_CHARGE", text: "+[NUM]% maximum charge time", only: ["SNIPER"], value: -0.6, multiplier: "[NUM]"},
    { id: "SNIPER_CHARGE_SPEED", text: "-[NUM]% charging movement speed", only: ["SNIPER"], value: -0.3, multiplier: "[NUM]"},
    { id: "CRITS", text: "Headshots do not crit", only: ["SNIPER"], value:50},
    { id: "BODYSHOT_DAMAGE", text: "-[NUM]% damage penalty on body shot", only: ["SNIPER"], value: -0.5, multiplier: "[NUM]"},
    { id: "SNIPER_ZOOMSHOT", text: "Only fires when zoomed", only: ["SNIPER"], value: -20},
    { id: "SNIPER_TRACER", text: "Shots leave a bright, easily traceable team-colored line behind them", only: ["SNIPER"], value: -20},
    { id: "SCOPE_INACCURACY", text: "Bullets lose their accuracy if the rifle is scoped for more than 5 seconds", only: ["SNIPER"], value: -20},
    { id: "REV_INACCURACY", text: "Bullets lose their accuracy if the mingun is revved for more than 5 seconds", only: ["MINIGUN"], value: -20},
    { id: "MAX_OVERHEAL", text: "-[NUM]% maximum overheal", value: -0.75, multiplier: "[NUM]"},
    { id: "OVERHEAL_DECAY", text: "[NUM]% faster overheal decay", value: -0.55, multiplier: "[NUM]"},
    { id: "CLOAK_DURATION", text: "-[NUM]% cloak duration", class: ["spy"], value: -0.75, multiplier: "[NUM]"},
    { id: "CLOAK_FROM_AMMO", text: "-[NUM]% cloak meter from ammo boxes", class: ["spy"], value: -0.55, multiplier: "[NUM]"},
    { id: "CLOAK_RECHARGE", text: "[NUM]% slower cloak recharge rate", class: ["spy"], value: -0.6, multiplier: "[NUM]"},
];

let pros = [
    { id: "CLIP_SIZE", text: "Has a [NUM]% bigger clip", not: ["MELEE", "MEDIGUN"], value: 0.65, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% more damage per bullet", only: ["GUN", "SNIPER", "MINIGUN"], value: 0.75, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% more damage per pellet", only: ["SHOTGUN"], value: 0.75, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% more damage", only: ["MELEE", "FLAMETHROWER"], value: 0.75, multiplier: "[NUM]"},
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
    { id: "MEDIC_MIRROR", text: "Medic mirrors blast jump and shield charge of their heal target", only: ["MEDIGUN"], value: 10},
    { id: "MAX_HEALTH", text: "Raises max health by [NUM]% on wearer", value: 0.85, multiplier: "[NUM]"},
    { id: "REGEN", text: "When active, +3 health regenerated per second on wearer", value: 40},
    { id: "SEE_ENEM_HEALTH", text: "Allows you to see an enemy's health", value: 40},
    { id: "FIRING_SPEED", text: "[NUM]% faster firing speed", not: ["MEDIGUN", "FLAMETHROWER"], value: 0.7, multiplier: "[NUM]"},
    { id: "JUMP_HEIGHT", text: "Jump height increased by [NUM]% when active", value: 0.65, multiplier: "[NUM]"},
    { id: "HEALTH_DROP", text: "A small health pack is dropped when the player kills an enemy", value: 40},
    { id: "HEALTH_DROP", text: "A small health pack is dropped when the player kills an enemy with this weapon", not: ["MEDIGUN"],  value: 35},
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
    { id: "NO_TUMBLE", text: "Grenades do not tumble when fired", value: 10, only: ["GRENADE"]},
    { id: "DAMAGE_VULN", text: "Raises [VULN] resistance by [NUM]% when active", value: 0.7, multiplier: "[NUM]"},
    { id: "SNIPER_CHARGE", text: "-[NUM]% maximum charge time", only: ["SNIPER"], value: 0.6, multiplier: "[NUM]"},
    { id: "SNIPER_CHARGE_SPEED", text: "+[NUM]% charging movement speed", only: ["SNIPER"], value: 0.3, multiplier: "[NUM]"},
    { id: "SNIPER_LASER", text: "No laser pointer indicator", only: ["SNIPER"], value: 40},
    { id: "SNIPER_PENETRATION", text: "Fully charged shots penetrate players and damage enemies behind them", only: ["SNIPER"], value: 30},
    { id: "MAX_OVERHEAL", text: "+[NUM]% maximum overheal", value: 0.75, multiplier: "[NUM]"},
    { id: "OVERHEAL_DECAY", text: "[NUM]% slower overheal decay", value: 0.55, multiplier: "[NUM]"},
    { id: "CLOAK_DURATION", text: "+[NUM]% cloak duration", class: ["spy"], value: 0.75, multiplier: "[NUM]"},
    { id: "CLOAK_FROM_AMMO", text: "+[NUM]% cloak meter from ammo boxes", class: ["spy"], value: 0.55, multiplier: "[NUM]"},
    { id: "CLOAK_RECHARGE", text: "[NUM]% faster cloak recharge rate", class: ["spy"], value: 0.6, multiplier: "[NUM]"},
    { id: "CLOAK_ON_KILL", text: "On kill: adds [NUM]% charge to cloak", class: ["spy"], value: 0.8, multiplier: "[NUM]"},
    // { id: "PYROLAND", text: "On Equip: Visit Pyroland", value: 0},
    // { id: "BROADCAST", text: "Broadcasts every successful hit on an enemy player over the death-notice area", only:["MELEE"], value: 0},
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
    var conditions = ["burning targets", "wet targets", "targets attacked from behind", "bleeding targets", "soaked targets", "targets in mid-air", "headshots"]
    return char
        .replace("[NUM]", randnum)
        .replace("[ECOND]", chooseInArr(conditions))
        .replace("[HPSRC]", chooseInArr(["medic sources", "health packs", "dispensers", "mediguns", "syringe guns", "all sources"]))
        .replace("[VULN]", chooseInArr(["bullet", "explosion", "damage", "fire", "headshot"]))
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

function setQString(name, value){
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set(name, value);
    window.location.search = searchParams.toString();
}

let params = (new URL(document.location)).searchParams;
let reqclass = params.get('class')

var role = (reqclass == "any" || !reqclass) ? chooseInArr(classes) : classes.find(x => x.name == reqclass)
var weapon = chooseInArr(role.weapons)
// removes every weapon where x.not includes it
pros = pros.filter(pro => pro.not ? !pro.not.includes(weapon) : pros)
cons = cons.filter(con => con.not ? !con.not.includes(weapon) : cons)
// removes every weapon where x.not doesnt include it
pros = pros.filter(pro => pro.only ? pro.only.includes(weapon) : pros)
cons = cons.filter(con => con.only ? con.only.includes(weapon) : cons)
// removes every weapon where x.not include it
pros = pros.filter(pro => pro.class ? pro.class.includes(role) : pros)
cons = cons.filter(con => con.class ? con.class.includes(role) : cons)
console.log(pros)
function getEnoughChars(threshold=100, limit=30, stats=12){
    var chars = []
    var quality = 0
    for(var i = 0; i < rng(2, 3); i++){
        var currentChar = pickCharacteristic("pros");
        chars.push(`<blue>${currentChar.text}</blue>`)
        quality += currentChar.value * currentChar.multiplier;
        pros = pros.filter(pro => pro.id != currentChar.id)
        cons = cons.filter(con => con.id != currentChar.id)
    }
    // at least one con
    var currentChar = pickCharacteristic("cons") || pickCharacteristic("cons");
    if(!currentChar) return [chars, quality];
    chars.push(`<red>${currentChar.text}</red>`)
    quality += currentChar.value * currentChar.multiplier;
    cons = cons.filter(con => con.id != currentChar.id)

    while(quality > limit && chars.length < stats){
        var currentChar = pickCharacteristic("cons") || pickCharacteristic("cons");
        if(!currentChar) return [chars, quality];
        chars.push(`<red>${currentChar.text}</red>`)
        quality += currentChar.value * currentChar.multiplier;
        cons = cons.filter(con => con.id != currentChar.id)
    }
    return [chars, quality]
}

var x = getEnoughChars()

var titles = {
    "SCOUT SHOTGUN": "SCOUT SCATTERGUN",
    "SCOUT GUN": "SCOUT PISTOL",
    "SOLDIER ROCKET": "SOLDIER ROCKET LAUNCHER",
    "DEMOMAN GRENADE": "DEMOMAN GRENADE LAUNCHER",
    "DEMOMAN STICKY": "DEMOMAN STICKY BOMB LAUNCHER",
    "ENGINEER GUN": "ENGINEER PISTOL",
    "SNIPER SNIPER": "SNIPER RIFLE",
    "SNIPER GUN": "SNIPER SMG",
    "MEDIC GUN": "MEDIC SYRINGE GUN",
    "SPY GUN": "SPY REVOLVER",
    "SPY MELEE": "SPY KNIFE",
}

var title = titles[role.name.toUpperCase() + " " + weapon] ? titles[role.name.toUpperCase() + " " + weapon] : (role.name.toUpperCase() + " " + weapon)

let quality = x[1]
var rank;
if(quality < 0){rank = "Not great"} else
if(quality < 10){rank = "Not bad"} else
if(quality < 20){rank = "Decent"} else
if(quality < 30){rank = "Good"} else
if(quality >= 30){rank = "Excellent"}

document.getElementById('main').innerHTML = `<h1> ${title}</h1> ${x[0].join('<p />')}`
let classchoice = '<option value="any">any</option>'
let classoptions = classes.forEach(classrole => {classchoice += `<option value="${classrole.name}">${classrole.name}</option>`})
document.getElementById('classes').innerHTML = classchoice
document.getElementById('footer').innerHTML = rank
