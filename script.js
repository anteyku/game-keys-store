// Слайдер на главной странице сайта сверху.


	// Переменная для  блока слайдера
	let slider = document.querySelector(`.slider-width`);


	// Первая кнопка слайдера которая выполняет действия при клике
	document.querySelector(`#tone`).addEventListener(`click`, () => {
		slider.style.left = `0%`;
	})

	// Вторая кнопка слайдера которая выполняет действия при клике
	document.querySelector(`#ttwo`).addEventListener(`click`, () => {
		slider.style.left = `-28%`;
	})

	// Третья кнопка слайдера которая выполняет действия при клике
	document.querySelector(`#tthree`).addEventListener(`click`, () => {
		slider.style.left = `-56%`;
	})



// Окончания слайдера на главной странице










// Блок игор
	
	// Переменная принимающая массив всех линий с блоками
	let mesline = document.querySelectorAll(`.game-block__games__line`);

	// Переменная принимающая все елементы массива mesline
	let mes = [...mesline];

	// Переменная для подсчета открытых блоков
	let mesnum = 2;


	// При нажатии на кнопку проверяеться меньше ли количество открытых блоков 
	// имеющихся блоков, если да то открываеться блок идущиий следующих по списку 
	// в массиве. 
	document.querySelector(`#seeall`).addEventListener(`click`, () =>{
		if(mesnum < mes.length){
			mes[mesnum].style.display = `flex`;
			mesnum++;


			// Если число открытых блоков равно числу имеющихся блоков то кнопка пропадет
			if(mesnum == mes.length){
				document.querySelector(`.block-button`).style.display = `none`;
			}
		} 
	})

// Окончания блока игор













// Модульное окно товаров



	// Переменная модульного окна
	let modul = document.querySelector(`.modul-window`);

	// Переменная с массивом всех елементов при клике на которые будет модульное окно
	let elem = document.querySelectorAll(`.game-block__games__line__mini`);

	// Цикл перебирающий все елементы массива елементов и если мы кликнем хотябе на 
	// адин елемент из массива то появляеться модульное окно
	for(i=0; i< elem.length; i++){
		elem[i].addEventListener(`click`, () =>{
			modul.style.display = `block`;
		})
	}

	// При клике на крестик с етим классом модульное окно закроеться
	document.querySelector(`.modul-window__close`).addEventListener(`click`, ()=>{
		modul.style.display = `none`;
	})

	// При клике на фон модульного окна модульное окно закроеться
	window.addEventListener(`click`, (fon)=>{
		if(fon.target == modul){
			modul.style.display = `none`;
		}
	})



// Конец модульного окна товаров






// Модульное окно при клике на блоки позиционирования
	
	// Переменная принимающая массив всех трех кнопок в блоках позиционирования
	let positems = document.querySelectorAll(`.position-game__mini-block__button-buy`);
	

	// Цикл перебырающий массив позиционированный елементов, если на елемент будет произведенно
	// события click то появиться модульное окно инициализированное ранее
	for(i=0; i< positems.length; i++){
		positems[i].addEventListener(`click`, ()=>{
			modul.style.display = `block`;
		})
	}

// Конец модульного окна при клике на блок позиционирования











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