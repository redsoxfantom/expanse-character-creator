import BackgroundData from './steps/BackgroundData.js'
import DefaultAbilityData from './steps/DefaultAbilityData.js'

function arrayEquals(a,b) {
    if(a.length != b.length){
        return false
    }

    for(var i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) {
            return false
        }
    }

    return true
}

function checkPickOne(opt) {
    if(!opt.hasOwnProperty("options")) {
        console.log("PICK_ONE has no options field")
        return false
    }
    var optionsValid = true
    opt.options.forEach(element => {
        if(!element.hasOwnProperty("ability")) {
            console.log("PICK_ONE option has no ability field")
            optionsValid = false
        }
        if(!element.hasOwnProperty("focus")) {
            console.log("PICK_ONE option has no focus field")
            optionsValid = false
        }
        if(!DefaultAbilityData.hasOwnProperty(element.ability)) {
            console.log("PICK_ONE option ability",element.ability,"not defined in ability data")
            optionsValid = false
        }
        const abilityFocuses = DefaultAbilityData[element.ability].focuses
        if(!abilityFocuses.hasOwnProperty(element.focus)) {
            console.log("PICK_ONE option ability.focus",element.ability,element.focus,"not defined in ability data")
            optionsValid = false
        }
    });
    return optionsValid
}

function checkAnyFocus(opt) {
    if(!opt.hasOwnProperty("ability")) {
        console.log("ANY_FOCUS option has no ability field")
        return false
    }
    if(!DefaultAbilityData.hasOwnProperty(opt.ability)) {
        console.log("ANY_FOCUS option ability",opt.ability,"not defined in ability data")
        return false
    }
    return true
}

function checkOptions(opt) {
    if(!["PICK_ONE","ANY_FOCUS"].includes(opt.type)) {
        console.log("Options type",opt.type,"not valid")
        return false
    }
    switch(opt.type) {
        case "PICK_ONE":
            return checkPickOne(opt)
        case "ANY_FOCUS":
            return checkAnyFocus(opt)
    }
}

function run(){
    var alltestpassed = true;

    for(var backgroundname in BackgroundData) {
        var background = BackgroundData[backgroundname]
        console.log("Checking",backgroundname)
        if(!background.hasOwnProperty("description")) {
            console.log("No description found")
            alltestpassed = false
        }
        if(!background.hasOwnProperty("social_class")) {
            console.log("No social_class found")
            alltestpassed = false
            continue
        }
        if(!background.hasOwnProperty("rolls")) {
            console.log("No rolls found")
            alltestpassed = false
            continue
        }
        if(!background.hasOwnProperty("ability")) {
            console.log("No ability found")
            alltestpassed = false
            continue
        }
        if(!background.hasOwnProperty("focus")) {
            console.log("No focus found")
            alltestpassed = false
            continue
        }
        if(!background.hasOwnProperty("talent")) {
            console.log("No talent found")
            alltestpassed = false
            continue
        }
        if(!background.hasOwnProperty("benefits")) {
            console.log("No benefits found")
            alltestpassed = false
            continue
        }
        if(!["UPPER CLASS","MIDDLE CLASS","LOWER CLASS","OUTSIDER"].includes(background.social_class)) {
            console.log("Social class",background.social_class,"not valid")
            alltestpassed = false
        }
        if(!arrayEquals(background.rolls,[1,2]) && !arrayEquals(background.rolls,[3,4]) && !arrayEquals(background.rolls,[5,6])) {
            console.log("Rolls",background.rolls,"does not equal [1,2] or [3,4] or [5,6]")
            alltestpassed = false
        }
        var bkndAbility = background.ability
        if(!DefaultAbilityData.hasOwnProperty(bkndAbility)) {
            console.log("Ability",bkndAbility,"not in list of abilities")
            alltestpassed = false
        }
        var bkndFocus = background.focus
        if(!checkOptions(bkndFocus)) {
            console.log("Background focus not valid")
            alltestpassed = false
        }
    }

    return alltestpassed;
}

export default run