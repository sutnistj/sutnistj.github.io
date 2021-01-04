function eraseTextareaAndResult() {
    document.getElementById('send').value = ""
    document.getElementById('result').innerHTML = ""
}

function copyResultToClipboard() {
    var range = document.createRange()
    range.selectNode(document.getElementById('result'))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
}

function swapValueOfSelections() {
    var temp = valueOfSelection('from')
    document.getElementById('from').value = valueOfSelection('to')
    document.getElementById('to').value = temp
}

function sendValueOfTextarea() {
    var to = valueOfSelection('to')
    var from = valueOfSelection('from')
    var value = document.getElementById('send').value
    printResult(to === from ? value : transliteration(from, to, value.normalize('NFD')))
}

/* Hotkeys */
var keys

document.getElementById('send').addEventListener("keydown", function (e) {
    keys = (keys || [])
    keys[e.key] = true

    // Ctrl + Enter in textarea: send values of textarea
    if (keys['Control'] && keys['Enter'] && Object.keys(keys).length == 2) {
        sendValueOfTextarea()
    }
}, false)

document.addEventListener("keyup", function (e) {
    keys = []
    stop()
}, false)