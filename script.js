//your code here
let evaluatedText = document.getElementById('evaluatedText')
let letterCount = document.getElementById('letterCount')

evaluatedText.onkeyup = function(){
    letterCount.innerHTML = evaluatedText.value.length
}



