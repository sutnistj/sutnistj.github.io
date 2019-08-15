"use strict";

var hidden = Math.round(Math.random()*200+0.5);
console.log(hidden);

var tr = {
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
    // vuk
    'џ' : '𐑡',
    'ѕ' : '𐑞',
    'ј' : '𐑘',
    // symbols
    ' ' : ' ',
    ',' : ',',
    '.' : '.'
};


function transliterate() {
    var latin = document.getElementById('send').value;
    var result = '';
    var i;
    for (i = 0; i < latin.length; i++) {
        console.log(latin[i]);
        if (tr[ latin[i]] ) {
            result += tr[ latin[i]];
        }
    }
    document.getElementById('result').innerHTML = result;
    return false;
}

document.getElementById('send').addEventListener('keyup', transliterate);