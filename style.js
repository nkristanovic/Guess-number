let content = document.querySelector('.content');
let buttonGo =  document.querySelector('.btn-go');
let buttonAgain =  document.getElementById('play-again');
let outputMessage = document. querySelector('.message');

let number = Math.floor(Math.random() * 15) + 1;

buttonGo.addEventListener('click', function() {
    let inputNum = document.getElementById('number').value;

    if (inputNum > number) {
        outputMessage.innerHTML = 'Broj je previsok, probaj manji!';
    } else if (inputNum < number) {
        outputMessage.innerHTML = 'Broj je premali, probaj veći!';
    } 
    if (inputNum == number) {
        outputMessage.innerHTML = `Bravo!! Broj je točan ✔ Zamislio sam broj ${number}!`;
        buttonAgain.classList.remove('hidden');
        content.classList.add('hidden');
    }
});

buttonAgain.addEventListener('click', function(){
    window.location.reload();
});
