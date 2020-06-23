var letters = {
    // long sounds
    'чч': 'tcc',
    'цц': 'tss',
    'ѕѕ': 'dzz',
    'џџ': 'dgg',
    // with dead accents to cyrillic soft accents
    'я́': 'já',
    'ю́': 'jú',
    'є́': 'jé',
    'ї́': 'jí',
    'а́': 'á',
    'е́': 'é',
    'и́': 'ý',
    'у́': 'ú',
    'і́': 'í',
    'о́': 'ó',
    // polisounds
    'щ': 'ctc',
    'ц': 'ts',
    'ч': 'tc',
    'я': 'ja',
    'ю': 'ju',
    'є': 'je',
    'ї': 'ji',
    // vuk & other
    'џ': 'dg',
    'ѕ': 'dz',
    'ј': 'j',
    'ў': 'v̆',
    // clear
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'h',
    'ґ': 'q',
    'д': 'd',
    'е': 'e',
    'ж': 'g',
    'з': 'z',
    'и': 'y',
    'і': 'i',
    'й': 'j',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'x',
    'ш': 'c',
}

var soft = 'ндтѕцџчзсжшлр'
soft += soft.toUpperCase()

function swap(object) {
    var re_object = {}
    for (key in object) {
        re_object[object[key]] = key
    }
    return re_object
}

function latin() {
    var result = document.getElementById('send').value

    /* Lines and palatalization */
    result = result
        .replace(new RegExp('([' + soft + '])й', 'g'), '$1-j')
        .replace(new RegExp('([' + soft + '])Й', 'g'), '$1-J')
        .replace(/ь/g, 'j')
        .replace(/Ь/g, 'J')
        .replace(/\n\r?/g, '<br />')

    /* Main transliteration */
    for (letter in letters) {
        var klad = letters[letter]
        result = result
            .replace(new RegExp(letter, 'g'), klad)
            /* Big letters */
            .replace(new RegExp(letter.toUpperCase(), 'g'), klad[0].toUpperCase() + klad.slice(1))
    }

    document.getElementById('result').innerHTML = result
}

function cyrillic() {
    var result = document.getElementById('send').value

    var bukvy = swap(letters)
    /* Main transliteration */
    for (bukva in bukvy) {
        var klad = bukvy[bukva]
        result = result
            .replace(new RegExp(bukva, 'g'), klad)
            /* Big letters */
            .replace(new RegExp(bukva[0].toUpperCase() + bukva.slice(1), 'g'), klad.toUpperCase())
    }

    /* Lines and palatalization */
    result = result
        .replace(new RegExp('([' + soft + '])й', 'g'), '$1ь')
        .replace(new RegExp('([' + soft + '])Й', 'g'), '$1Ь')
        .replace(/\n\r?/g, '<br>')

    document.getElementById('result').innerHTML = result
}

function nothing() {
    document.getElementById('send').value = ""
    document.getElementById('result').innerHTML = ""
}

function clipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById('result'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}