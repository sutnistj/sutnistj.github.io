function valueOfSelection(id) { // string
    let selObj = document.getElementById(id)
    return selObj.options[selObj.selectedIndex].text
} // string

function printResult(string) { // string
    document.getElementById('result').innerHTML = string.replace(/\n\r?/g, '<br />')
}

function transliteration(from, to, value) { // string, string, string

    var upCaseLetters = upCase(from, getLetters(from)) + upCase(to, getLetters(to))
    var softLetters = getLetters(to, 'Soft');
    var iotaSign = getLetters(to, 'Iota sign')
    var softSign = getLetters(to, 'Soft sign')

    for (letter of scripts) {
        if (isUnderfined([letter[from], letter[to]])) { continue }

        // Party uppercase
        let partlyIn = upCase(from, letter[from], false)
        let partlyOut = upCase(to, letter[to], false)

        // Full uppercase
        let exception = '([' + '0-9\-' + upCaseLetters + ']{0,})'
        let fullIn = '(?<=[\\s,.:;"\']|^)'
            + exception + upCase(from) + exception
            + '(?=[\\s,.:;"\']|$)'

        // Iotation
        let lowerSoft = '([' + softLetters + upCase(to, softLetters) + '])' + iotaSign
        let upperSoft = '([' + upCase(to, softLetters) + '])' + upCase(to, iotaSign)
        // console.log(lowerSoft);

        value = value
            .normalize('NFD')
            .replace(new RegExp(fullIn, 'g'), '$1' + upCase(to) + '$2')
            .replace(new RegExp(partlyIn, 'g'), partlyOut)
            .replace(new RegExp(letter[from], 'g'), letter[to])
            .replace(new RegExp(lowerSoft, 'g'), '$1' + softSign)
            .replace(new RegExp(upperSoft, 'g'), '$1' + upCase(to, softSign))
    }
    return value
} // string

function upCase(script, symbol = letter[script], all = true) { // string, string, boolean
    if (isUnderfined(symbol)) {
        console.log('Err @ upCase(): `symbol` = ', symbol)
        return ''
    }
    switch (script) {
        case 'Shavian': {
            symbol = all ? '·' + [...symbol].join('·') : '·' + symbol
            break
        }
        default: {
            symbol = all ? symbol.toUpperCase() : symbol[0].toUpperCase() + symbol.slice(1)
            break
        }
    }
    return symbol
} // string (can be empty)

function isUnderfined(value) { // any
    switch (typeof value) {
        case 'object': {
            if (value === undefined) { return true }
            for (i of value) if (i === undefined) { return true }
            return false
        }
        default: {
            return value === undefined ? true : false
        }
    }
} // boolean

function getLetters(script, param = 'all') { // array, string
    var string = ''
    switch (param) {
        case 'all': {
            for (letter of scripts) {
                if (isUnderfined(letter[script])) { continue }
                string += letter[script]
            }
            break
        }
        default: {
            for (letter of scripts) {
                if (isUnderfined(letter[script])
                    || isUnderfined(letter['Param'])
                    || letter['Param'].indexOf(param) < 0) { continue }
                string += letter[script]
            }
            break
        }
    }
    return string
} // string