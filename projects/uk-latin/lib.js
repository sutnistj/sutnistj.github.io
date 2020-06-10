/** keys */

const small_c = 'бвгґджзклмнпрстфхцчшщџѕ';
const small_v = 'аяеєіїийьјоую';
const smalls = small_c + small_v;

const big_c = small_c.toUpperCase();
const bigs = smalls.toUpperCase();

const apostrophe = 'ʼ';
const apostrophes = '\'ʼ`’';

var u_letters = {
    // long sounds
    'чч': 'tcc',
    'цц': 'tss',
    'ѕѕ': 'dzz',
    'џџ': 'dgg',
    // disounds
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
    // 'ў': 'v',
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
    'ь': 'j',
};
Object.freeze(u_letters);

const s_letters = swap(u_letters);
Object.freeze(s_letters);

function swap(object) {
    var re_object = {};
    for (key in object) {
        re_object[object[key]] = key;
    }
    return re_object;
}

function toLatin(str) {
    var result = str;

    /** Основна перебуква */
    for (letter in u_letters) {
        var trans = u_letters[letter]
        result = result
            .replace(new RegExp(letter, 'g'), trans)
            /** Великі */
            .replace(new RegExp(letter.toUpperCase(), 'g'), trans[0].toUpperCase() + trans.slice(1));
    }

    /** Переноси і відʼапострофуванє */
    return result
        .replace(/\n\r?/g, '<br />')
        .replace(new RegExp('[' + apostrophes + ']', 'g'), '');
}

function toCyrillic(str) {
    var result = str;

    /** Основна перебуква */
    for (letter in s_letters) {
        var trans = s_letters[letter];
        result = result
            .replace(new RegExp(letter, 'g'), trans)
            /** Великі */
            .replace(new RegExp(letter[0].toUpperCase() + letter.slice(1), 'g'), trans.toUpperCase());
    }


    /** Переноси, апострофуванье і відјотуванье*/
    return result
        .replace(new RegExp('([ .' + small_v + 'пбвфкґхгм' + '])ь', 'g'), '$1й')
        .replace(new RegExp('([ .' + (small_v + 'пбвфкґхгм').toUpperCase() + '])Ь', 'g'), '$1Й')
        .replace(/\n\r?/g, '<br />');
}

if (module) {
    module.exports = { toLatin, toCyrillic };
}