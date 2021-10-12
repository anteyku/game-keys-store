
// Скрипт раскрывающий скритые блоки игор

	// Переменная принимающая массив скритых елементов
	let mesElem = document.querySelectorAll(`#none`);

	// Переменная подсчитывающая количество загружаемых елементов
	let quantity = 0;


	// При клике на кнопку переменной quantity додаеться 4 и после чего 
	// цикл перебирает все елементы и делаит их видимымы пока переменная
	// quantity больше переменной i в цикле, тем самым мы откриваем ровно 
	// 4 блока. После цикла оператором if проверяет не равно ли количество открытых
	// блоков количеству елементов в массиве, если равно то кнопка скрываеться
	document.querySelector(`#seeall`).addEventListener(`click`, ()=>{

		

		quantity += 4;

		for(let i=0; i < quantity; i++){
			mesElem[i].style.display = `block`;

		}

		if(quantity === mesElem.length){
			document.querySelector(`#seeall`).style.display = `none`;
		}
		


	})

// Конец скрипта раскрывающего блоки игор








// Модульное окно при клике на игру

	let mesModal = document.querySelectorAll(`.games__mini`);

	let modul = document.querySelector(`.modul-window`);
	let srcModul = document.querySelector(`#modul-img`);
	let textModul = document.querySelector(`#modul-game`);


	let close = document.querySelector(`.modul-window__center__close`);


	for(let elem of mesModal){
		elem.addEventListener(`click`, ()=>{
			modul.style.display = `flex`;
			srcModul.src = elem.childNodes[1].childNodes[1].src;
			textModul.innerHTML = elem.childNodes[3].childNodes[1].innerHTML;
		})
	}

	close.addEventListener(`click`, ()=>{
		modul.style.display = `none`;
	})


	window.addEventListener(`click`, (event)=>{
		if(event.target == modul){
			modul.style.display = `none`;
		}
	})




// Конец модульного окна при клике на игру







// Проверка валидности email регулярным выражениям
	
	// Переменная принимающая поле с логином
	let name = document.querySelector(`#name-log`);

	// Переменная принимающая поле с емейл пользователя
	let email = document.querySelector(`#indent`);

	// Переменная принимающая видвижный блок успешного отправления рассылки
	let block_succesful = document.querySelector(`.wind-dispatch`);

	// Переменная принимает текст который измениться в случае неудачного отправления
	let block_failed = document.querySelector(`.mailing-title`);




	// При клике на кнопку проверяеться текст в поле логина и email и если
	// обе поля равняються логическому значению true то выход слева блок
	// Еслиже нет то измениться текст над полями.
	document.querySelector(`.mailing_button`).addEventListener(`click`, ()=>{

		let reg_name = /^[a-z][a-z0-9]{3,20}$/i;
		let reg_email = /^[a-z][a-z0-9]{3,20}@(gmail|yandex|mail)\.ru$/i;
		let check_name = reg_name.test(name.value);
		let check_email = reg_email.test(email.value);
		
		if(check_name && check_email){

			block_succesful.style.left = `1%`;

			setTimeout(()=>{
				block_succesful.style.left = `-100%`;
			},3000)

			block_failed.innerHTML = `<span style="color: green;">Успешно</span>`;

		}else{
			
			block_failed.innerHTML = `<span style="color: red;">Ошыбка!</span>`;

		}

	})


// Конец проверки валидности email регулярным выражениям