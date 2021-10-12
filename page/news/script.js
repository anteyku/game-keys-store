

// Раскрития новостных блоков
	
	// Переменная принимающая только блоки с айди который по умолчанию блоки скрывает
	let meselem = document.querySelectorAll(`#news-block-none`);

	// Переменная которая будет подсчитывать блок по щету для раскрывания по очереди
	let numMeselem = 0;
	
	// При клике на кнопку елемент будет становиться видимым а также оператор if проверяет 
	// не равно ли количество раскрытых блоков количеству имеющихся блоков и если это так 
	// то он скрывает кнопку
	document.querySelector(`#seeall`).addEventListener(`click`, ()=>{
			
		meselem[numMeselem].style.display = `flex`;
		numMeselem++;

		if(meselem.length === numMeselem){
				document.querySelector(`#seeall`).style.display = `none`;
				return;
		}
	})

// Конец раскрытия новостных блоков







// Слайдер игор
	
	// Переменная принимающая блок слайдера
	let slider = document.querySelector(`.window-s__slider`);

	// Переменная принимающая массив картинок
	let imgslide = document.querySelectorAll(`.window-s__slider__mini`);

	// Переменная подсчитывающая процент передвижения слайдера для каждой итерации
	let numslider = 0;

	// Переменная подсчитівающая количество перелистанніх картинок
	let numimg = 3;


	// Вызиваеться функцией timer() через 8 секунд и сперва оператором if проверяет не 
	// больше ли переменная содержащая перелистуваемих картинок, если нет то 
	// задаеться новое позиционирования слайдера а также додаеться число для будущего 
	// позиционирования слайдера, и после завершения всех действий вызиваеться опять 
	// функция таймера
	function slid(){

			if(numimg > imgslide.length){
				numslider = 0;
				numimg = 3;
			}
		
			slider.style.left = `-${numslider}%`;
			numslider += 34; 
			numimg++;
			timer();
		
	}

	


	function timer(){
		setTimeout(()=>{
			slid();

		}, 8000);
	}

	// Вызиваем функцию таймер которая через 8 секунд вызивает функцию slid()
	timer();

	


// Конец слайдера игор