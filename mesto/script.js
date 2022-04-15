//Скрипт для открытия и закрытия pop-up
let main = document.querySelector('#main');
let popUp = main.querySelector('.pop-up');
let popCloseButton = main.querySelector('.pop-up__close-button');
let popEdit = main.querySelector('.profile-info__button');
function popClose(){
    popUp.classList.add('pop-up__visible_hiden');
}
function popOpen(){
    popUp.classList.remove('pop-up__visible_hiden');
}
popCloseButton.addEventListener('click', popClose);
popEdit.addEventListener('click', popOpen);


let formElement = main.querySelector('.form'); 
let nameInput = formElement.querySelector('.form__login'); 
let jobInput = formElement.querySelector('.form__password');
let saveButton = main.querySelector('.form__save-button'); 


function formSubmitHandler (evt) {
    evt.preventDefault();
    let name = main.querySelector('.profile-info__title');
    let job = main.querySelector('.profile-info__subtitle');
                              
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popUp.classList.add('pop-up__visible_hiden');
}

saveButton.addEventListener('click', formSubmitHandler); 









//на будущее

/**Скрипт для лайков, были проблемы с querySelector, обращался в интернет за помощью, а потом оказалось,что скрипт писать и не нужно,а я потратил на него кучу времени(((((
let likes = main.querySelector('.element__button');
main.querySelectorAll('.element__button')
  .forEach(el => el.addEventListener('click', () => el.classList.toggle('element__button_active')));

**/


/**
 * 
 * Я думал надо делать скрипт по созданию постов,так что как-то так)
 * 
 * let elements = main.querySelector('.elements');
let addButton = main.querySelector('.profile__add-button');

function addBlock(){
    elements.insertAdjacentHTML('beforeend', `
    <div class="element">
            <img src="images/Karachaevsk.jpg" alt="Особняк на холме" class="element__image">   
            <h2 class="element__text">Карачаевск</h2>  
            <img src="images/like button.svg" alt="Лайк" class="element__button">   
        </div>
`);
}
addButton.addEventListener('click', addBlock);
**/