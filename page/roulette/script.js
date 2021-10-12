



// Рулетка игор

	let img_all = document.querySelectorAll(`.img-rouler`);
	let new_array = [];




	for(let elem of img_all){
		new_array.push(elem);
		elem.remove();
	}



	// Счетчик текущей картинки
	let img_counter = 0;

	// Счетчик номера текущего елемента умноженного на число
	// для установки позиционирования
	let img_position = 0;




	// Создания елемента в конце слайдера
			// Аргумент arg - рандомно сгенерированное значения
			// Аргумент col - счетчик подсчитывающий нужный повторения для равенства с arg
			// Аргумент del_timer - местит в себе время задержки для вызова функции удаления
			// Аргумент create_timer - местит в себе время задержки для повторного
			// вызова функции создания картинки
			function create(arg = undefined, col=0, del_timer = 130, create_timer = 230){

				// Вызов функции "удаления первой картинки"" и смещения всех картинок влево.
				// Время вызова зависит от значения аргумента указанного в функции
				// создающею елемент, с каждой итерацией скорость задержки увеличиваеться
				// также и с передаваемым аргументом в "функцию очистки и смещения елементов"
				setTimeout(()=>{
					clear(del_timer);
				}, del_timer)
			 

				// Зброс номера текущей картинки если количество перебранных 
				// и имеющихся картинок равно между собой
				if(img_counter == new_array.length){
					img_counter = 0;
				}

				//---------------------------------------------------

				// Добавления текущего елемента в новом массиве в дочерние елементы
				// родительского класса .window__images
				document.querySelector(`.roullet__line-img`).appendChild(new_array[img_counter]);

				// Установка позиционирования слева текущего перебыраемого елемента
				// из нового массива
				new_array[img_counter].style.left = img_position * 34 + `%`;

				// Регистрируем перебранный елемент для позиционирования
				img_position++;

				// Регистрируем перебранный текущий елемент в новом массиве
				img_counter++;

				// Установка позиционированного елемента третим по щету
				// если перебранных елементов четыре
				if(img_position == 6){
					img_position = 5;
				}

				//--------------------------------------------------


			


			// Если рандомное число в arg аргументе больше 
			// нуля в счетчике то запускаеться итерация с добавлениям
			// каждый раз единицы при проходе функции
			if(arg > col){
				console.log(del_timer, create_timer);

				// Добавления единицы к счетчику отвечающим за количество повторения итерации
				col++;

				// Добавления время задержки в аргумент отвечающий за запуск функции удаления
				del_timer += 10;

				// Добавления время задержки в аргумент отвечающий за запуск функции создания
				create_timer += 10;

				// Если количество сделанных итераций будет равно рандомно сгенерированному числу
				// то в дело вступает диалоговое окно
				if(arg <= col){

					setTimeout(()=>{
						modul.style.display = `flex`;
						modul_img.src = document.querySelectorAll(`.img-rouler`)[2].src;
						modul_title.innerHTML = document.querySelectorAll(`.img-rouler`)[2].alt;
					}, 1700);

				}	

				// Если разрешенное количество в аргументах создания и удаления картинки
				// привысит допустимое то установляться значения равны допустимым 
				if(del_timer > 700 && create_timer > 800){
					del_timer = 700;
					create_timer = 800;
				}

				// Запуск функции создания с обновленными аргументами, тем самым 
				// мы обявляем итерацию функции через количество времени указанное
				// аргументом create_timer
				//-----------------------------------
				setTimeout(()=>{
					create(arg, col, del_timer, create_timer);
				}, create_timer);
				//------------------------------------
					
			} 

		}









		// Очистка елементов в начале слайдера
			function clear(arg){

				//--------------------------------------------

				let new_mes = document.querySelectorAll(`.img-rouler`);
				let img_count = 0;

				for(i=0; i < new_mes.length; i++){
					new_mes[i].style.left = img_count * 20 - 20 + `%`;
					console.log();
					img_count++;
				}

				new_mes[2].style.transform = `scale(1)`;
				new_mes[3].style.transform = `scale(0.8)`;

				//--------------------------------------------
	


			
				setTimeout(()=>{
					new_mes[0].style.transform = `scale(1)`;
					new_mes[0].remove();
				}, arg)

			}







			// Вызов функции для создания 4 картинок 
			create();create();create();create(); create(); create();






			
			document.querySelector(`button`).addEventListener(`click`,()=>{
				 let rand = Math.floor(Math.random() * 50);
				 
				 create(rand);
				 

				 
			})








// Конец рулетки игор







// Модульное окно выиграша в рулетке

	let modul = document.querySelector(`.modul-rouler`);

	let modul_img = document.querySelector(`#modul-img`);

	let modul_title = document.querySelector(`.window-game-description`);

	

	document.querySelector(`.modul-rouler__center-window__close`).addEventListener(`click`, ()=>{
		modul.style.display = `none`;
	});


	window.addEventListener(`click`, (element)=>{
		if(element.target == modul){
			modul.style.display = `none`;
		}
	})


// Конец модульного окна выиграша в рулетке