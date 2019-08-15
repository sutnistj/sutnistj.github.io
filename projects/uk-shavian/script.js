var 
    small = 'бвгґджзклмнпрстфхцчшщ',
    // big = small.toUpperCase(),
    apostrophes = '\'ʼ`’',
    soft = {
        'я' : 'ьа',
        'ю' : 'ьу',
        'є' : 'ье',
        'ї' : 'ьі',
    },
    ltr = {
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
    }
    ;

function shavian()
{
    var res = document.getElementById('send').value.toLowerCase();

    for (i in soft) {
        res = res.replace(new RegExp('([' + small /*+ big*/ + '])' + i, 'g'), "$1" + soft[i]);
    }

    res = res.replace(new RegExp('[' + apostrophes + ']', 'g'), '');

    for (l in ltr)
    {
        res = res.replace(new RegExp(l, 'g'), ltr[l]);
    }
    document.getElementById('result').innerHTML = res.replace(/\n\r?/g, '<br />');
}