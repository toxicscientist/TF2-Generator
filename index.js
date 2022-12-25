//TODO: Move pros and cons to a separate file
let cons = [
    { id: "CLIP_SIZE", text: "Has a [NUM]% smaller clip", not: ["MELEE", "MEDIGUN", "LUNCHBOX"], value: -0.65, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% less damage per bullet", only: ["GUN", "SNIPER"], value: -0.75, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% less damage per pellet", only: ["SHOTGUN"], value: -0.75, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% less damage", only: ["MELEE"], value: -0.75, multiplier: "[NUM]"},
    { id: "KNOCKBACK", text: "[NUM]% increase in push force taken from damage and airblast while active", value: -0.6, multiplier: "[NUM]"},
    { id: "SLOWED", text: "[NUM]% slower movement speed while active", value: -0.7, multiplier: "[NUM]"},
    { id: "RANDOM_CRITS", text: "No random critical hits", not: ["MEDIGUN", "LUNCHBOX"], value: -10},
    { id: "CRITS", text: "Critical hits do -[NUM]% damage", not: ["MEDIGUN", "LUNCHBOX"], value: -0.9, multiplier: "[NUM]"},
    { id: "CRITS", text: "Critical hits turn into minicrits", not: ["MEDIGUN", "LUNCHBOX"], value: -30},
    { id: "MAX_AMMO", text: "-[NUM]% max primary ammo on wearer", value: -0.65, multiplier: "[NUM]"},
    { id: "MAX_AMMO", text: "-[NUM]% max ammo on all weapons", value: -0.95, multiplier: "[NUM]"},
    { id: "DAMAGE_TO_BUILDINGS", text: "-[NUM]% damage to enemy buildings", not: ["MEDIGUN", "LUNCHBOX"], value: -0.35, multiplier: "[NUM]"},
    { id: "DAMAGE_TO_PLAYERS", text: "-[NUM]% damage to enemy players", not: ["MEDIGUN", "LUNCHBOX"], value: -0.675, multiplier: "[NUM]"},
    { id: "UBERCHARGE_RATE", text: "Has [NUM]% slower charge rate", only: ["MEDIGUN"], value: -0.7, multiplier: "[NUM]"},
    { id: "HEAL_RATE", text: "Heal rate decreased by [NUM]%", only: ["MEDIGUN"], value: -0.625, multiplier: "[NUM]"},
    { id: "OVERHEAL_RATE", text: "Overheal rate decreased by [NUM]%", only: ["MEDIGUN"], value: -0.625, multiplier: "[NUM]"},
    { id: "UBERCHARGE_RATE", text: "-[NUM]% ÜberCharge rate on Overhealed patients", only: ["MEDIGUN"], value: -0.75, multiplier: "[NUM]"},
    { id: "MAX_HEALTH", text: "Lowers max health by [NUM]% on wearer", value: -1, multiplier: "[NUM]"},
    { id: "REGEN", text: "When active for too long, -3 health lost per second on wearer", value: -40},
    { id: "SEE_YOUR_HEALTH", text: "Allows enemies to see your health", value: -40},
    { id: "FIRING_SPEED", text: "[NUM]% slower firing speed", not: ["MEDIGUN", "FLAMETHROWER", "LUNCHBOX"], value: -0.7, multiplier: "[NUM]"},
    { id: "JUMP_HEIGHT", text: "Jump height decreased by [NUM]% when active", value: -0.65, multiplier: "[NUM]"},
    { id: "BLEED_ON_MISS", text: "On miss, causes self-damage and bleed to the player for 5 seconds",only: ["MELEE"], value: -25, multiplier: "[NUM]"},
    { id: "AFTERBURN_ON_MISS", text: "On miss, causes self-damage and afterburn to the player for 5 seconds",only: ["MELEE"], value: -25, multiplier: "[NUM]"},
    { id: "ROCKET_SPEED", text: "Has [NUM]% slower rocket speed", only: ["ROCKET"] , value: -0.65, multiplier: "[NUM]"},
    { id: "SPLASH_DAMAGE", text: "Has [NUM]% smaller splash damage radius.", only: ["ROCKET", "GRENADE", "STICKY"] , value: -0.7, multiplier: "[NUM]"},
    { id: "EXPLOSIVE_SELF_DAMAGE", text: "+[NUM]% blast damage to self", only: ["ROCKET", "GRENADE", "STICKY"] , value: -0.685, multiplier: "[NUM]"},
    { id: "HEALING", text: "-[NUM]% less healing from [HPSRC]", value: -0.7, multiplier: "[NUM]"},
    { id: "AIRBLAST", text: "Airblasts cost [NUM]% more ammo to fire", value: -0.625, only: ["FLAMETHROWER"], multiplier: "[NUM]"},
    { id: "AIRBLAST", text: "[NUM]% airblast force", value: -0.75, only: ["FLAMETHROWER"], multiplier: "[NUM]"},
    { id: "AIRBLAST", text: "No airblast", value: 45, only: ["FLAMETHROWER"]},
    { id: "AFTERBURN_DAMAGE", text: "Deals [NUM]% less afterburn damage", value: -0.675, only: ["FLAMETHROWER"], multiplier: "[NUM]"},
    { id: "PROJECTILE_VARIATION", text: "+3 degrees random projectile deviation", only: ["ROCKET", "GRENADE"] , value: -0.625, multiplier: "[NUM]"},
    { id: "DISPENSER_AMMO", text: "Cannot collect ammo from dispensers while active", not: ["MELEE", "LUNCHBOX"] , value: -10},
    { id: "SCOPE", text: "Cannot scope", only: ["SNIPER"] , value: -40},
    { id: "AIR_STRAFE", text: "Decreased air-strafing control", value: -10},
    { id: "DAMAGE_VULN", text: "Raises [VULN] vulnerability by [NUM]% when active", value: -0.7, multiplier: "[NUM]"},
    { id: "SNIPER_CHARGE", text: "+[NUM]% maximum charge time", only: ["SNIPER"], value: -0.6, multiplier: "[NUM]"},
    { id: "SNIPER_CHARGE_SPEED", text: "-[NUM]% charging movement speed", only: ["SNIPER"], value: -0.3, multiplier: "[NUM]"},
    { id: "CRITS", text: "Headshots do not crit", only: ["SNIPER"], value:50},
    { id: "BODYSHOT_DAMAGE", text: "-[NUM]% damage penalty on body shot", only: ["SNIPER"], value: -0.5, multiplier: "[NUM]"},
    { id: "SNIPER_ZOOMSHOT", text: "Only fires when zoomed", only: ["SNIPER"], value: -20},
    { id: "SNIPER_TRACER", text: "Shots leave a bright, easily traceable team-colored line behind them", only: ["SNIPER"], value: -20},
    { id: "SCOPE_INACCURACY", text: "Bullets lose their accuracy if the rifle is scoped for more than 5 seconds", only: ["SNIPER"], value: -20},
    { id: "REV_INACCURACY", text: "Bullets lose their accuracy if the mingun is revved for more than 5 seconds", only: ["MINIGUN"], value: -20},
    { id: "MAX_OVERHEAL", text: "-[NUM]% maximum overheal on wielder", value: -0.75, multiplier: "[NUM]"},
    { id: "OVERHEAL_DECAY", text: "[NUM]% faster overheal decay on wielder", value: -0.55, multiplier: "[NUM]"},
    { id: "CLOAK_DURATION", text: "-[NUM]% cloak duration", class: ["spy"], value: -0.75, multiplier: "[NUM]"},
    { id: "CLOAK_FROM_AMMO", text: "-[NUM]% cloak meter from ammo boxes", class: ["spy"], value: -0.55, multiplier: "[NUM]"},
    { id: "CLOAK_RECHARGE", text: "[NUM]% slower cloak recharge rate", class: ["spy"], value: -0.6, multiplier: "[NUM]"},
    { id: "TANGIBLE_BULLETS", text: "Bullets cannot pass through allies", only: ["GUN", "SNIPER"], value: -25},
    { id: "TANGIBLE_BULLETS", text: "Pellets cannot pass through allies", only: ["SHOTGUN"], value: -25},
    { id: "RELOAD", text: "On Miss: Makes you unable to reload weapons for 3 seconds", not: ["MEDIGUN", "LUNCHBOX"], value: -20},
    { id: "SLOWED", text: "On Miss: Decreases movement speed by [NUM]% for 3 seconds", not: ["MEDIGUN", "LUNCHBOX"], value: -0.6, multiplier: "[NUM]"},
    { id: "OUCH", text: "On Miss: -[NUM] HP", not: ["MEDIGUN", "LUNCHBOX"], value: -1.3, multiplier: "[NUM"},
    { id: "LUNCHBOX_RECHARGE", text: "-[NUM]% decrease in charge recharge rate", only:["LUNCHBOX"], value: -0.6, multiplier:"[NUM]"},
];

let pros = [
    { id: "CLIP_SIZE", text: "Has a [NUM]% bigger clip", not: ["MELEE", "MEDIGUN", "LUNCHBOX"], value: 0.65, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% more damage per bullet", only: ["GUN", "SNIPER", "MINIGUN"], value: 0.75, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% more damage per pellet", only: ["SHOTGUN"], value: 0.75, multiplier: "[NUM]"},
    { id: "DAMAGE", text: "Deals [NUM]% more damage", only: ["MELEE", "FLAMETHROWER"], value: 0.75, multiplier: "[NUM]"},
    { id: "EXTRA_JUMP", text: "Grants an additional jump while active", value: 30},
    { id: "CRITS", text: "Guarantees Critical damage on [ECOND]", not: ["MEDIGUN", "LUNCHBOX", "SNIPER"],value: 10},
    { id: "SLOW_ON_HIT", text: "On hit: slows down enemy players",not: ["MEDIGUN", "LUNCHBOX"], value: 30},
    { id: "ATTACK_SPEED", text: "+[NUM]% increased attack speed", not: ["MEDIGUN", "LUNCHBOX"], value: 0.75, multiplier: "[NUM]"},
    { id: "DEPLOY_SPEED", text: "+[NUM]% faster weapon deploy time", value: 2, multiplier: "[NUM]"},
    { id: "AIR_CRITS", text: "Deals crits while the wielder is in mid-air", not: ["MEDIGUN", "LUNCHBOX"], value: 10},
    { id: "MINI_CRITS", text: "Deals minicrit damage on non-critical hits", not: ["MEDIGUN", "LUNCHBOX"], value: 80},
    { id: "AFTERBURN", text: "Causes hit enemies to suffer afterburn for 6 seconds", not: ["MEDIGUN", "LUNCHBOX"], value: 25},
    { id: "DISABLE_BUILDING", text: "Disables buildings for 4 seconds on hit", not: ["MEDIGUN", "LUNCHBOX"], value: 25},
    { id: "SPEED_ON_KILL", text: "Gain a 3 second speed boost on kill", not: ["MEDIGUN", "LUNCHBOX"], value: 25},
    { id: "HEAL_ON_KILL", text: "On kill: heals you [NUM]% base health", not: ["MEDIGUN", "LUNCHBOX"], value: 0.75, multiplier: "[NUM]"},
    { id: "IGNITE_ON_HIT", text: "On hit: ignites enemy players", not: ["MEDIGUN", "FLAMETHROWER", "LUNCHBOX"], value: 20},
    { id: "UBERCHARGE_RATE", text: "Has [NUM]% faster charge rate", only: ["MEDIGUN"], value: 2, multiplier: "[NUM]"},
    { id: "HEAL_RATE", text: "Heal rate increased [NUM]%", only: ["MEDIGUN"], value: 0.625, multiplier: "[NUM]"},
    { id: "OVERHEAL_RATE", text: "Overheal rate increased [NUM]%", only: ["MEDIGUN"], value: 0.625, multiplier: "[NUM]"},
    { id: "MEDIC_MIRROR", text: "Medic mirrors blast jump and shield charge of their heal target", only: ["MEDIGUN"], value: 10},
    { id: "MAX_HEALTH", text: "Raises max health by [NUM]% on wearer", value: 0.85, multiplier: "[NUM]"},
    { id: "REGEN", text: "When active, +3 health regenerated per second on wearer", value: 40},
    { id: "SEE_ENEM_HEALTH", text: "Allows you to see an enemy's health", value: 40},
    { id: "FIRING_SPEED", text: "[NUM]% faster firing speed", not: ["MEDIGUN", "FLAMETHROWER", "LUNCHBOX"], value: 0.7, multiplier: "[NUM]"},
    { id: "JUMP_HEIGHT", text: "Jump height increased by [NUM]% when active", value: 0.65, multiplier: "[NUM]"},
    { id: "HEALTH_DROP", text: "A small health pack is dropped when the player kills an enemy", value: 40},
    { id: "HEALTH_DROP", text: "A small health pack is dropped when the player kills an enemy with this weapon", not: ["MEDIGUN", "LUNCHBOX"],  value: 35},
    { id: "MAX_AMMO", text: "Does not require ammo", not: ["MEDIGUN", "LUNCHBOX", "MELEE"],  value: 35},
    { id: "BLEED_ON_HIT", text: "On hit: causes bleed to enemy for 5 seconds", not: ["ROCKET", "GRENADE", "STICKY", "MEDIGUN", "LUNCHBOX"], value: 25},
    { id: "MAX_AMMO", text: "+[NUM]% max primary ammo on wearer", value: 0.65, multiplier: "[NUM]"},
    { id: "ROCKET_SPEED", text: "Has [NUM]% faster rocket speed", only: ["ROCKET"] , value: 0.65, multiplier: "[NUM]"},
    { id: "SPLASH_DAMAGE", text: "Has [NUM]% larger splash damage radius.", only: ["ROCKET", "GRENADE", "STICKY"] , value: 2, multiplier: "[NUM]"},
    { id: "EXPLOSIVE_SELF_DAMAGE", text: "-[NUM]% blast damage to self", only: ["ROCKET", "GRENADE", "STICKY"] , value: 0.685, multiplier: "[NUM]"},
    { id: "PROJECTILE_REFLECT", text: "Projectiles cannot be deflected", only: ["ROCKET", "GRENADE", "STICKY"] , value: 25},
    { id: "KNOCKBACK", text: "[NUM]% decrease in push force taken from damage and airblast while active", value: 0.6, multiplier: "[NUM]"},
    { id: "CAPTURE_RATE", text: "Increases user's capture rate by 1 for points and carts", value: 30},
    { id: "HEALING", text: "+[NUM]% more healing from [HPSRC]", value: 0.7, multiplier: "[NUM]"},
    { id: "AIRBLAST", text: "Airblasts cost [NUM]% less ammo to fire", value: 0.625, only: ["FLAMETHROWER"], multiplier: "[NUM]"},
    { id: "AIRBLAST", text: "+[NUM]% airblast force", value: 0.75, only: ["FLAMETHROWER"], multiplier: "[NUM]"},
    { id: "AFTERBURN_DAMAGE", text: "Deals [NUM]% more afterburn damage", value: 0.675, only: ["FLAMETHROWER"], multiplier: "[NUM]"},
    { id: "MEDIBEAM_TRANSFER", text: "Damage transfers to all players connected by Medic beams", value: 15, only: ["MELEE"]},
    { id: "NO_TUMBLE", text: "Grenades do not tumble when fired", value: 10, only: ["GRENADE"]},
    { id: "DAMAGE_VULN", text: "Raises [VULN] resistance by [NUM]% when active", value: 0.7, multiplier: "[NUM]"},
    { id: "SNIPER_CHARGE", text: "-[NUM]% maximum charge time", only: ["SNIPER"], value: 0.6, multiplier: "[NUM]"},
    { id: "SNIPER_CHARGE_SPEED", text: "+[NUM]% charging movement speed", only: ["SNIPER"], value: 0.3, multiplier: "[NUM]"},
    { id: "SNIPER_LASER", text: "No laser pointer indicator", only: ["SNIPER"], value: 40},
    { id: "SNIPER_PENETRATION", text: "Fully charged shots penetrate players and damage enemies behind them", only: ["SNIPER"], value: 30},
    { id: "AIR_STRAFE", text: "Increased air-strafing control", value: 10},
    { id: "MAX_OVERHEAL", text: "+[NUM]% maximum overheal on wielder", value: 0.75, multiplier: "[NUM]"},
    { id: "OVERHEAL_DECAY", text: "[NUM]% slower overheal decay on wielder", value: 0.55, multiplier: "[NUM]"},
    { id: "CLOAK_DURATION", text: "+[NUM]% cloak duration", class: ["spy"], value: 0.75, multiplier: "[NUM]"},
    { id: "CLOAK_FROM_AMMO", text: "+[NUM]% cloak meter from ammo boxes", class: ["spy"], value: 0.55, multiplier: "[NUM]"},
    { id: "CLOAK_RECHARGE", text: "[NUM]% faster cloak recharge rate", class: ["spy"], value: 0.6, multiplier: "[NUM]"},
    { id: "CLOAK_ON_KILL", text: "On kill: adds [NUM]% charge to cloak", class: ["spy"], value: 0.8, multiplier: "[NUM]"},
    { id: "METAL_SOURCES", text: "+[NUM]% metal from sources", class: ["engineer"], value: 0.55, multiplier: "[NUM]"},
    { id: "AOE_MEDIGUN", text: "Heals teammates near to the patient for [NUM]% of the target healing", only: ["MEDIGUN"], value: 0.75, multiplier: "[NUM]"},
    { id: "FT_SNOWBALL", text: "Weapon [FTSTAT] increases as it gets fired for longer", only: ["FLAMETHROWER"], value: 30},
    { id: "FT_SNOWBALL", text: "Weapon [FTSTAT] increases as it gets fired for longer", only: ["FLAMETHROWER"], value: 30},
    { id: "LINGER_LONGER", text: "Flames linger in the air for [NUM]% longer", only: ["FLAMETHROWER"], value: 0.55, multiplier: "[NUM]"},
    { id: "OVERHEAL_DECAY", text: "Overheal on wielder does not decay", value: 55},
    { id: "STAT_SNOWBALL", text: "Increases [STAT] by [NUM]% on every kill", not: ["MEDIGUN", "LUNCHBOX"], value: 0.7, multiplier:"[NUM]"},
    { id: "LUNCHBOX_RECHARGE", text: "+[NUM]% increase in charge recharge rate", only:["LUNCHBOX"], value: 0.6, multiplier:"[NUM]"},
    { id: "UBERCHARGE_SPEED", text: "When active, ÜberCharge percentage increases movement speed by up to [NUM]%.", class:["medic"], value: 0.6, multiplier:"[NUM]"},
];

let extras = [
    { id: "SENTRY_SUCK", text: "Alt-Fire: Takes away metal from the ammo pool of your own sentry", class: ["engineer"]},
    { id: "DOWNGRADE", text: "Hitting an enemy building a single time instantly reverts it to a lower level version of itself", class: ["engineer"], only: ["MELEE"]},
    { id: "DOWNGRADE", text: "Hitting an enemy building a single time instantly reverts it to a lower level version of itself", only: ["MELEE"]},
    { id: "PROJECTILE", text: "Alt-Fire: Launches a projectile [PROJEFFECT]", only: ["MELEE"]},
    { id: "PROJECTILE", text: "Projectile explodes on direct hit, but also bounces off from the enemy to explode again when hitting any surface, dealing [NUM]% of original damage", only: ["ROCKET", "GRENADE"]},
    { id: "PEACEKEEPER", text: "This weapon unloads its entire clip at once as it's primary fire", not: ["MEDIGUN", "MELEE", "FLAMETHROWER", "SNIPER", "MINIGUN", "LUNCHBOX"]},
    { id: "PEACEKEEPER", text: "Alt-Fire: Unload the remaining ammo in the clip all at once", not: ["MEDIGUN", "MELEE", "FLAMETHROWER", "SNIPER", "MINIGUN", "LUNCHBOX"]},
    { id: "EXTINGUISH", text: "Alt-Fire: Extinguish teammates to gain guaranteed critical hits", not: ["MEDIGUN", "FLAMETHROWER", "MINIGUN", "LUNCHBOX"]},
    { id: "PYROLAND", text: "On Equip: Visit Pyroland"},
    { id: "BROADCAST", text: "Broadcasts every successful hit on an enemy player over the death-notice area", only:["MELEE"]},
    { id: "CROSSBOW", text: "Fires special bolts that heal teammates and deal damage based on distance traveled. <p /> <blue>+280% damage (point blank) to +650% damage (long range) per bolt.</blue> <p /> <blue>Heals allies 75 health (point blank) to 150 health (long range) per bolt.</blue>", only:["GUN"], class:["medic"]},
    { id: "RELOAD", text: "This weapon will reload automatically when not active.", not:["MELEE", "MEDIGUN", "LUNCHBOX", "FLAMETHROWER", "SNIPER"]},
]

//TODO: Give classes stuff like projectiles(eg. sandman), drinks(eg. crit-a-colo), boots(ali baba's wee boties), backpacks(cozy campers), lunchboxes(sandvich), etc
let classes = [
    //TODO: Give projectiles
    { name: "scout", weapons: ["SHOTGUN", "GUN", "MELEE", "LUNCHBOX"]},
    //TODO: Give boots and banners
    { name: "soldier", weapons: ["ROCKET", "SHOTGUN", "MELEE"]},
    //TODO: Give "GUN" for flare guns
    { name: "pyro", weapons: ["FLAMETHROWER", "SHOTGUN", "MELEE"]},
    //TODO: Give boots and shields
    { name: "demoman", weapons: ["GRENADE", "STICKY", "MELEE"]},
    { name: "heavy", weapons: ["MINIGUN", "SHOTGUN", "MELEE", "LUNCHBOX"]},
    { name: "engineer", weapons: ["SHOTGUN", "GUN", "MELEE"]},
    { name: "medic", weapons: ["MEDIGUN", "GUN", "MELEE"]},
    //TODO: Give backpack
    { name: "sniper", weapons: ["SNIPER", "GUN", "MELEE"]},
    //TODO: Give Cloak watch and sappers
    { name: "spy", weapons: ["GUN", "MELEE"]},
]

let guarantees = {
    "LUNCHBOX": ["On Consume: [CONSUME]"],
    "MEDIGUN": ["ÜberCharge: [UBER]"]
}

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
    return char
        .replace("[NUM]", randnum)
        .replace("[ECOND]", chooseInArr(["burning targets", "wet targets", "targets attacked from behind", "bleeding targets", "soaked targets", "targets in mid-air", "headshots"]))
        .replace("[HPSRC]", chooseInArr(["medic sources", "health packs", "dispensers", "mediguns", "syringe guns", "all sources"]))
        .replace("[VULN]", chooseInArr(["bullet", "explosion", "damage", "fire", "critical hit"]))
        .replace("[STAT]", chooseInArr(["max health", "speed", "damage", "reload speed", "attack speed"]))
        .replace("[PROJEFFECT]", chooseInArr(["that speeds up teammates", "that inflicts bleed", "that inflicts afterburn", "that damages enemies", "that explodes on contact", "that bounces off players and obstacles to damage multiple enemies", "that prevents enemy from reloading", "that extinguishes teammates"]))
        .replace("[FTSTAT]", chooseInArr(["firing rate", "fire damage", "afterburn damage", "crit chance"]))
        .replace("[CONSUME]", chooseInArr(["regain up to 100% of your max health", "adds 15% max health for 30 seconds <p /> <blue>Eat to gain up to 33% health</blue>", "drastically increases movement speed", "all attacks mini-crit", "become invulnerable temporarily. Cannot attack during this time. <p /> Damage absorbed will slow you when the effect ends", "become invulnerable temporarily. Cannot attack during this time. <p /> Damage absorbed will be inflicted overtime when the effect ends", "temporarily causes each attack to mini-crit and set Mark-For-Death", "regain up to 66% of your max health"]))
        .replace("[UBER]", chooseInArr(["Temporarily grants the medic and his patient the ability to fly", "Temporarily grants the patient +300% movement speed", "Temporarily grants the patient the ability to instantly reload their weapons", "Temporarily grants the patient infinte ammo", "Temporarily grants the patient infinite ammo and the ability to instantly reload their weapons", "Temporarily increases healing to 300% and grants immunity to movement-impairing effects", "Temporarily grants 100% critical chance", "Temporarily grants cloak and increased speed to the medic and his patient"]))
}

function pickCharacteristic(type){

    switch (type) {
        case "cons":
            type = cons
            break;
        case "pros":
            type = pros
            break;
        case "extras":
            type = extras
            break;
    }
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
pros = pros.filter(pro => pro.class ? pro.class.includes(role.name) : pros)
cons = cons.filter(con => con.class ? con.class.includes(role.name) : cons)

extras = extras.filter(x => x.not ? !x.not.includes(weapon) : extras)
extras = extras.filter(x => x.only ? x.only.includes(weapon) : extras)
extras = extras.filter(x => x.class ? x.class.includes(role.name) : extras)

function getEnoughChars(threshold=120, limit=35, stats=(12 - (+!!guarantees[weapon]) * 2)){
    var chars = []
    var quality = 0
    var isThereAnExtra = (rng(0, 3) === 2 && extras.length != 0)
    var currentChar;
    var removed;

    if (isThereAnExtra) {
        currentChar = pickCharacteristic('extras')
        chars.push(`<grey>${currentChar.text}</grey>`)
        quality += currentChar.value * currentChar.multiplier;
    }

    if(guarantees[weapon]){
        chars.push(`<grey>${format(chooseInArr(guarantees[weapon]))}</grey>`)
    }

    for(var i = 0; i < (rng(2, 3) - +isThereAnExtra - +!!guarantees[weapon]); i++){
        var currentChar = pickCharacteristic("pros");
        chars.push(`<blue>${currentChar.text}</blue>`)
        quality += currentChar.value * currentChar.multiplier;
        pros = pros.filter(pro => pro.id != currentChar.id)
        cons = cons.filter(con => con.id != currentChar.id)
    }
    // at least one con
    currentChar = pickCharacteristic("cons") || pickCharacteristic("cons");
    if(!currentChar) return [chars, quality];
    chars.push(`<red>${currentChar.text}</red>`)
    quality += currentChar.value * currentChar.multiplier;
    cons = cons.filter(con => con.id != currentChar.id)

    while(quality > (limit + (isThereAnExtra * 40)) && chars.length < stats){
        var currentChar = pickCharacteristic("cons") || pickCharacteristic("cons");
        if(!currentChar) return [chars, quality];
        chars.push(`<red>${currentChar.text}</red>`)
        quality += currentChar.value * currentChar.multiplier;
        cons = cons.filter(con => con.id != currentChar.id)
    }

    if (quality < 1) {
        removed = chars.pop()
    }
    return [chars, quality, removed]
}

var x = getEnoughChars()

var titles = {
    "SCOUT SHOTGUN": "SCOUT SCATTERGUN",
    "SCOUT GUN": "SCOUT PISTOL",
    "SCOUT LUNCHBOX": "SCOUT DRINK",
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

document.getElementById('main').innerHTML = `<h1> ${title}</h1> ${x[0].join('<p />')} <br /> <footer>${x[2] || " "}</footer>`
let classchoice = '<option value="any">any</option>'
let classoptions = classes.forEach(classrole => {classchoice += `<option value="${classrole.name}">${classrole.name}</option>`})
document.getElementById('classes').innerHTML = classchoice
