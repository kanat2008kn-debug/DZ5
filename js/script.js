let buttonText;
let buttonText2 = "Скрыть текст";

document.querySelector('.info__button').addEventListener('click', function () {
    document.querySelector('.info__text').classList.toggle('info__text--active');
    buttonText = this.textContent;
    this.textContent = buttonText2;
    buttonText2 =  buttonText;
}) 