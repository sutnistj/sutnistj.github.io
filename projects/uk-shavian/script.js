// Обмін кльучів на змінну в објектах
function swap(object)
{
    var re_object = {};
    for(key in object){
        re_object[object[key]] = key;
    }
    return re_object;
}

// З кирилицьи на шовицьу
function shavian()
{
    var result = document.getElementById('send').value;

    // Розкласти јотовані на мјакиј знак і голосну
    for (soft in u_softs)
    {
        result = result.replace(new RegExp('([' + small_c + big_c + '])' + soft, 'g'), "$1" + u_softs[soft]);
    }
    
    result = result
        // Прибирати апострофи
        .replace(new RegExp('[' + apostrophes + ']', 'g'), '')
        // Позначити великі букви
        .replace(new RegExp('([' + bigs + '])', 'g'), '·' + '$1')
        .toLowerCase()
        ;

    // Основна перебуква
    for (letter in u_letters)
    {
        result = result.replace(new RegExp(letter, 'g'), u_letters[letter]);
    }

    // Рьадки
    document.getElementById('result').innerHTML = result.replace(/\n\r?/g, '<br />');
}

// З шовицьи на кирилицьу
function ukrainian()
{
    var result = document.getElementById('send').value;

    // Основна заміна
    for (letter in s_letters)
    {
        result = result.replace(new RegExp(letter, 'g'), s_letters[letter]);
    }

    // Апострофнути
    for (iot in u_softs)
    {
        result = result.replace(new RegExp('([' + small_c + '])' + iot, 'g'), "$1" + apostrophe + iot);
    }

    // Јотација
    for (soft in u_iotation) 
    {
        result = result.replace(new RegExp(soft, 'g'), u_iotation[soft]);
    }

    document.getElementById('result').innerHTML = result
        // Великі букви
        .replace(new RegExp('·([' + smalls + '])', 'g'), function(match) { return match[1].toUpperCase() })
        // Рьадки
        .replace(/\n\r?/g, '<br />');
}

var
    small_c = 'бвгґджзклмнпрстфхцчшщџѕ',
    small_v = 'аяеєіїийјоую',
    smalls = small_c + small_v,

    big_c = small_c.toUpperCase(),
    bigs = smalls.toUpperCase(),

    apostrophe = 'ʼ',
    apostrophes = '\'ʼ`’',

    u_softs = {
        'я' : 'ьа',
        'ю' : 'ьу',
        'є' : 'ье',
        'ї' : 'ьі',
    },
    u_iotation = swap(u_softs),
    
    u_letters = {
        // disounds
        'щ' : '𐑖𐑗',
        'я' : '𐑘𐑨',
        'ю' : '𐑘𐑵',
        'є' : '𐑘𐑧',
        'ї' : '𐑘𐑰',
        // vuk
        'џ' : '𐑡',
        'ѕ' : '𐑞',
        'ј' : '𐑘',
        // clear
        'а' : '𐑨',
        'б' : '𐑚',
        'в' : '𐑫',
        'г' : '𐑣',
        'ґ' : '𐑜',
        'д' : '𐑛',
        'е' : '𐑧',
        'ж' : '𐑠',
        'з' : '𐑟',
        'и' : '𐑦',
        'і' : '𐑰',
        'й' : '𐑘',
        'к' : '𐑒',
        'л' : '𐑤',
        'м' : '𐑥',
        'н' : '𐑯',
        'о' : '𐑴',
        'п' : '𐑐',
        'р' : '𐑮',
        'с' : '𐑕',
        'т' : '𐑑',
        'у' : '𐑵',
        'ф' : '𐑓',
        'х' : '𐑙',
        'ц' : '𐑔',
        'ч' : '𐑗',
        'ш' : '𐑖',
        'ь' : '𐑢',
    },
    s_letters = swap(u_letters)
    ;

    // console.log(s_letters);