o = require('./objects')

/**
 * @param {string} id
 * @returns {string}
 */
function valueOfSelection(id) {
    let selObj = document.getElementById(id)
    return selObj.options[selObj.selectedIndex].text
}

/**
 * @param {string} string
 */
function printResult(string) {
    document.getElementById('result').innerHTML = string.replace(/\n\r?/g, '<br />')
}

/**
 * @param {string} fromScript script name
 * @param {string} toScript script name
 * @param {string} value material for transliteration
 * @returns {string} result of transliteration
 */
function transliteration(fromScript, toScript, value) {
    let params = getConstParams(fromScript, toScript)
    for (letter of o.scripts) {
        if (typeof letter[fromScript] == 'object') {}

        
    }
}

const rmDup = e => [...new Set(e)].sort().join("");

function simpleChange(from, to) {
}

// function getConstParams(from, to) {
//     let softLetters = rmDup(letters([from, to], 'Soft'))

//     /**
//      * Big Letters
//      * Lower Soft Letters
//      * Upper Softt Letter
//      */
//     let params = {
//         'bl': '[-0-9' + rmDup(letters([from, to]).toUpperCase()) + ']',
//         'ls': new RegExp('([' + softLetters + softLetters.toUpperCase() + '])', 'g'),
//         'us': new RegExp('([' + softLetters.toUpperCase() + '])', 'g'),
//     }
//     return params
// }

// function getVarParams(from, to) {
//     /**
//      * Full In Before
//      * Full In After
//      */
//     return {
//         'fib': new RegExp('(' + p['bl'] + '{0,})' + from.toUpperCase() + '(' + p['bl'] + '{1,})', g),
//         'fia': new RegExp('(' + p['bl'] + '{1,})' + from.toUpperCase() + '(' + p['bl'] + '{0,})', g)
//     }

//     // value = value
//     //     .replace(new RegExp(upCase(from, letter[from], false), 'g'), upCase(to, letter[to], false))
//     //     .replace(new RegExp(letter[from], 'g'), letter[to])
// }

function letters(calls, param = true) {
    let string = ''
    if (typeof calls == "string") {
        calls = [calls]
    }
    for (call of calls) {
        for (letter of o.scripts) {
            let params = {
                "boolean": true,
                "string": letter['Param'] && letter['Param'].includes(param)
            }
            if (!params[typeof param]) { continue }
            switch (typeof letter[call]) {
                case 'string': {
                    string += letter[call]
                    break
                }
                case 'object': {
                    string += Object.values(letter[call]).join('')
                }
            }
        }
    }
    return string
}

// console.log(letters(['Cyrillic', 'Latin'],'Soft'))
// console.log(o.scripts)

transliteration('Latin', 'Cyrillic', 'Hello')