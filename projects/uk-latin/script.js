function latin() {
    const source = document.getElementById('send').value;
    const result = toLatin(source);
    document.getElementById('result').innerHTML = result;
}

function cyrillic() {
    const source = document.getElementById('send').value;
    const result = toCyrillic(source);
    document.getElementById('result').innerHTML = result;
}