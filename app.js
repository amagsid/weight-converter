lbsInput = document.getElementById('lbs-input')
gramsOutput = document.getElementById('gramsOutput')
kiloGramOutput = document.getElementById('kgOutput')
ounceOutput = document.getElementById('ozOutput')


function roundNum(num) {
    return Math.round(num*100)/100;
}

lbsInput.addEventListener('input' , function() {
    let lbs = lbsInput.value;
    gramsOutput.innerHTML = roundNum(lbs/0.0022046);
    kiloGramOutput.innerHTML = roundNum(lbs/2.2046);
    ounceOutput.innerHTML = roundNum(lbs*16);
})