// 365 

let elem65 = document.querySelector('#elem65');
let value65 = elem65.getAttribute('value');
console.log(value65);

let elem651 = document.querySelector('#elem651');
let class651 = elem651.getAttribute('class');
console.log(class651);

// 366 
let elem66 = document.querySelector('#elem66');
elem66.setAttribute('value', 'text');

let elem661 = document.querySelector('#elem661');
elem661.setAttribute('class', 'valid');

// 367
let elem67 = document.querySelector('#elem67');
elem67.removeAttribute('value');

// 368
let elem68 = document.querySelector('#elem68');
console.log(elem68.hasAttribute('value'));

// 369 
let elem69 = document.querySelector('#elem69');
elem69.addEventListener('click', ()=>{
    console.log(elem69.textContent+elem69.dataset.text);
})

let elems691 = document.querySelectorAll('div');
elems691.forEach(div => {
    div.addEventListener('click', function() {
        let num69 = this.getAttribute('data-num');
        this.textContent += num69;
    });
});

// 370 
let elem70 = document.querySelector('#elem70');
elem70.addEventListener('click', ()=>{
    elem70.textContent += elem70.dataset.productPrice*elem70.dataset.productAmount;
})

// 372
let elem72 = document.querySelector('#elem72');
let length72 = elem72.classList.length;
console.log(length72);

let elem = document.querySelector('#elem721');
let classNames = elem.classList;
for (let className of classNames) {
	console.log(className);
}

// 373 
let elem73= document.querySelector('#elem73');
elem73.classList.add('kkk');
console.log(elem73.getAttribute('class'))

// 374 
let elem74= document.querySelector('#elem74');
elem74.classList.remove('kkk');
console.log(elem74.getAttribute('class'));

// 375 
let elem75 = document.querySelector('#elem75');
let contains75 = elem75.classList.contains('ggg');
console.log(contains75);

// 376 
let elem76 = document.querySelector('#elem76');
elem76.classList.toggle('zzz');
console.log(elem76.getAttribute('class'));

// 377
let elem77 = document.querySelector('#elem77');
let but77 = document.querySelector('#button77');
but77.addEventListener('click', ()=>{
    elem77.style.border = 'dotted 2px brown';
    elem77.style.width = '50px';
    elem77.style.height = '50px';
});

// 378 
let elem78 = document.querySelector('#elem78');
let but78 = document.querySelector('#button78');
but78.addEventListener('click', ()=>{
    elem78.style.fontSize = '20px';
    elem78.style.marginTop = '50px';
    elem78.style.backgroundColor = 'beige';
});

// 379 
let elem79 = document.querySelectorAll('#elem79');
let but79 = document.querySelector('#button79');
but79.addEventListener('click', ()=>{
    elem79.style.cssFloat = 'right';
});

// 383 
let elem83 = document.querySelector('#elem83');
let first = elem83.firstElementChild;
first.style.color = 'red';

let last = elem83.lastElementChild;
last.style.color = 'red';

// 385 

let elem85 = document.querySelector('#child');
let parent85 = elem85.closest('.www');
console.log(parent85.id);

// 386 
let elem86 = document.querySelector('#elem86');
let pre86 = elem86.previousElementSibling;
pre86.textContent += '!';

let next86 = elem86.nextElementSibling;
next86.textContent += '!';

// 387 
let elem87 = document.getElementById('elem87');
elem87.textContent = 'helloooooo';

// 388
// let elems88 = document.getElementsByTagName('li');
// for (let elem88 of elems88) {
// 	elem88.style.color = 'red';
// }

// 389
let elems89 = document.getElementsByClassName('sun');
for (let elem89 of elems89) {
	elem89.style.color = 'red';
}

// 390
let parent90 = document.querySelector('#parent90');
let elems1 = parent90.querySelectorAll('.www90');
let elems2 = parent90.querySelectorAll('.ggg90');

// 392 
let elem92 = document.querySelector('#elem92');
for (let node92 of elem92.childNodes) {
	console.log(node92);
}

// 393 
let elem93 = document.querySelector('#elem93');
for (let node93 of elem93.childNodes) {
	console.log(node93.nodeName);
}

// 395 
let elem95 = document.querySelector('#elem95');
for (let node95 of elem95.childNodes) {
	console.log(node95.textContent);
}
for (let node95 of elem95.childNodes) {
	console.log(node95.data);
}

// 396 
let elem96 = document.querySelector('#elem96');
let p96 = document.querySelector('#p96');
elem96.addEventListener('blur', ()=>{
    p96.textContent += elem96.value;
});

// 397 
let elem97 = document.querySelector('#elem97');
let but97 = document.querySelector('#button97');
but97.addEventListener('click', ()=>{
    elem97.disabled = true;
});
let elem971 = document.querySelector('#elem971');
let but971 = document.querySelector('#button971');
let but972 = document.querySelector('#button972');
but971.addEventListener('click', ()=>{
    elem971.disabled = true;
});
but972.addEventListener('click', ()=>{
    elem971.disabled = false;
});

// 398
let elem98 = document.querySelector('#elem98');
let but98 = document.querySelector('#button98');
let but988 = document.querySelector('#button988');
but98.addEventListener('click', ()=>{
    elem98.checked = true;
});
but988.addEventListener('click', ()=>{
    elem98.checked = false;
});

// 399
let elem99   = document.querySelector('#elem99');
let but99 = document.querySelector('#button99');
but99.addEventListener('click', function() {
	elem99.checked = !elem99.checked;
});

// 400 
let radios00 = document.querySelectorAll('input[type="radio"]');
let but00 = document.querySelector('#button00');
let p00 = document.querySelector('#p00');
but00.addEventListener('click', function() {
	for (let radio00 of radios00) {
		if (radio00.checked) {
			p00.textContent = radio00.value;
		}
	}
});

// 401 Событие change в JavaScript
// Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
let elem1 = document.querySelector('#elem1');
let p1 = document.querySelector('#p1');
elem1.addEventListener('change', function() {
	p1.textContent = this.value;
});
// Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.
let elem01 = document.querySelector('#elem01');
let p01 = document.querySelector('#p01');
elem01.addEventListener('change', function() {
    if (this.checked) {
        p01.textContent= 'checked';
    } else {
        p01.textContent= 'unchecked';
    }
});

// 402 Событие input в JavaScript
// Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.
let elem2 = document.querySelector('#elem2');
elem2.addEventListener('input', function() {
    if (this.value.length === 5) {
        alert('Длина текста достигла 5 символов!');
    }
});

// 403 Методы focus и blur в JavaScript
// Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.
let elem3 = document.querySelector('#elem3');
let elem03 = document.querySelector('#elem03');
elem3.addEventListener('input', function() {
    if (this.value.length === 2) {
        elem03.focus();
    }
});
elem03.addEventListener('input', function() {
    if (this.value.length === 2) {
        elem03.blur();
    }
});

// 405 Работа с выпадающими списками в JavaScript
// Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.
let select5 = document.querySelector('#select4');
let p5 = document.querySelector('#p4');
let but5 = document.querySelector('#button4');
select5.addEventListener('change', function(){
	let a = this.value;
    but5.addEventListener('click', ()=>{
        p5.textContent = this.value;
    });
});

// 406 Атрибут value в выпадающих списках в JavaScript
// Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.
let select6= document.querySelector('#select6');
select6.addEventListener('change', function(){
	let a = this.value;
    if (a == 'понедельник'| a == 'вторник'| a == 'среда'| a == 'четверг'|a == 'пятница') {
        alert('рабочий день');
    } else if (a == 'суббота'| a == 'воскресенье') {
        alert('выходной день');
    }
});

// 407 Изменение выбранного пункта списка на JavaScript
// Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.
let select7= document.querySelector('#select7');
let a = new Date().getMonth() + 1;
select7.value = a;

// 410 Массив пунктов выпадающего списка на JavaScript
// Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.
// let select10 = document.getElementById("select10");
// let options10 = select10.getElementsByTagName("option");
// for (let i = 0; i < options10.length; i++) {
//     let option10 = options10[i];
//     let value10 = option10.getAttribute("value");
//     option10.textContent += " - " + value10;
// }

// 412 Выбор пункта списка в JavaScript
// Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.
let select12 = document.querySelector('#select12');
let but12 = document.querySelector('#button12');
but12.addEventListener('click', ()=>{
    let option12 = select12.length - 1;
    select12.selected = option12;
});

// 413 Получение выбранного оптиона в JavaScript
// Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.
let select13 = document.querySelector('#select13');
let but13 = document.querySelector('#button13');
but13.addEventListener('click', ()=>{
    console.log(select13[select13.selectedIndex]); 
});

// 415 Координаты события в JavaScript
// Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора
let elem15 = document.getElementById('elem15');
document.addEventListener('mousemove', function(event) {
	elem15.innerHTML = event.clientX + ' : ' + event.clientY;
});

// 417 Элемент события в объекте Event в JavaScript
// Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - выведите информацию об этом в консоль.
let elem17 = document.querySelector('#elem17');
let li17 = document.querySelectorAll('#c17');
function func17() {
    this.textContent += '!';
}
for (elems1 of li17) {
    elems1.addEventListener('click', func17);
}
elem17.addEventListener('click', ()=>{
    console.log(elem17.tagName);
});

// 418 Получение нажатых клавиш в JavaScript
// Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.
let elem18 = document.querySelector('#elem18');
elem18.addEventListener('keypress', (e)=>{
    console.log(e.key);
    console.log(e.code);
});
// Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
let elem181 = document.querySelector('#elem181');
p18 = document.querySelector('#p18');
elem181.addEventListener('keypress', (e18)=>{
    if (e18.key == 'Enter') {
        p18.textContent = elem181.value;
        elem181.value = '';
    }
});

// 419 Отслеживание клавиш-модификаторов в JavaScript
// Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.
let but19 = document.querySelector('#button19');
but19.addEventListener('click', (e19)=> {
    if (e19.altKey) {
		but19.style.backgroundColor = 'red';
	}
});

// 420 Отмена действия по умолчанию в JavaScript
// Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.
let elem20 = document.querySelector('#elem20');
elem20.addEventListener('click', function(e20) {
	e20.preventDefault();
	elem20.textContent += elem20.href;
});
// Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.
let elem201 = document.querySelector('#elem201');
let elem202 = document.querySelector('#elem202');
let p20 = document.querySelector('#p20');
let ss = document.querySelector('#elem20_1');
ss.addEventListener('click', (e20_1)=>{
    e20_1.preventDefault();
    p20.textContent = Number(elem201.value) + Number(elem202.value);
});

// 421 Всплытие событий в JavaScript
// Самостоятельно напишите код, который будет демонстрировать всплытие событий. Проверьте на нем всплытие различных типов событий.
let elem211 = document.querySelector('#elem211');
let elem212 = document.querySelector('#elem212');
let elem213 = document.querySelector('#elem213');
elem211.addEventListener('click', function(e211) {
	alert('красный');
});
elem212.addEventListener('click', function(e212) {
	alert('оранжевый');
});
elem213.addEventListener('click', function(e213) {
	alert('желтый');
});

// 438 Привязывание контекста через метод call в JavaScript
// С помощью метода call и функции func выведите на экран value каждого из инпутов.
let elem381 = document.querySelector('#elem381');
let elem382 = document.querySelector('#elem382');
let elem383 = document.querySelector('#elem383');
function func() {
	console.log(this.value);
}
func.call(elem381);
func.call(elem382);
func.call(elem383);

// 439 Метод call с параметрами в JavaScript
// Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'hello, John Smit'. Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.
let elem39 = document.querySelector('#elem39');
function func(surname, name) {
	console.log(this.value + ', ' + name + ' ' + surname);
}
func.call(elem39, 'Smit', 'John'); 

// 440 Привязывание контекста через метод apply в JavaScript
// Добавьте в последнюю строчку метод apply так, чтобы на экран вывелось 'hello, John Smit'. Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.
let elem40 = document.querySelector('#elem40');
function func(surname, name) {
	console.log(this.value + ', ' + name + ' ' + surname);
}
func.apply(elem40, ['Smit', 'John']); 

// 442 Основы работы с функцией setInterval в JavaScript
// Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.
setInterval(()=> {
	console.log('!');
}, 3000);

// 443 Счетчик через функцию setInterval в JavaScript
// Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
let i43 = 100;
setInterval(()=> {
	console.log(--i43);
}, 1000);

// 444 Остановка таймера JavaScript
// Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
let i44 = 10;
let timer44 = setInterval(function() {
	console.log(--i44);
	if (i44 == 0) {
		clearInterval(timer44);
	}
}, 1000);

// 445 Кнопка для запуска таймера на JavaScript
// Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.
let i45 = 100;
let but45 = document.querySelector('#button45');
but45.addEventListener('click', ()=>{
    setInterval(()=> {
	console.log(--i45);
}, 1000);
});

// 447 Кнопки для запуска и остановки таймера на JavaScript
// Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
// По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.
let i47 = 100;
let timer47;
let but471 = document.querySelector('#button471');
let but472 = document.querySelector('#button472');
but471.addEventListener('click', ()=>{
    timer47 = setInterval(function() {
        console.log(--i47);
        if (i47 == 0) {
            clearInterval(timer47);
        }
    }, 1000);
});
but472.addEventListener('click', ()=>{
    clearInterval(timer47);
});

// 448 Практика на таймеры и работу с DOM в JavaScript
// Пусть в инпуте в атрибуте value изначально записано число 10. Запустите таймер, который каждую секунду будет уменьшать это число на единицу.
// Модифицируйте предыдущую задачу так, чтобы, как только содержимое инпута станет равно нулю, таймер прекратил свою работу.
let elem48 = document.querySelector('#elem48');
let i48 = elem48.value;
let timer48 = setInterval(function() {
	elem48.value = --i48;
	if (i44 == 0) {
		clearInterval(timer48);
	}
}, 1000);

// 450 Практика на таймеры и работу с DOM в JavaScript
/* 1) <p id="number">0</p>
   <button id="increaseBtn">Увеличить</button>

let number = document.getElementById('number');
let increaseBtn = document.getElementById('increaseBtn');
let timer;
increaseBtn.addEventListener('click', () => {
    timer = setInterval(() => {
        number.textContent = parseInt(number.textContent) + 1;
    }, 1000);
});

2) <p id="number">10</p>
<button id="decreaseBtn">Уменьшить</button>

let number = document.getElementById('number');
let decreaseBtn = document.getElementById('decreaseBtn');
let timer;
decreaseBtn.addEventListener('click', () => {
    timer = setInterval(() => {
        let currentNumber = parseInt(number.textContent);
        if (currentNumber > 0) {
            number.textContent = currentNumber - 1;
        } else {
            clearInterval(timer);
        }
    }, 1000);
});

3) <input type="number" id="inputNumber">
<p id="square"></p>

let inputNumber = document.getElementById('inputNumber');
let square = document.getElementById('square');
setInterval(() => {
    square.textContent = Math.pow(parseInt(inputNumber.value), 2);
}, 1000);

4) <input type="number" id="inputNumber">
<p id="countdown"></p>

let inputNumber = document.getElementById('inputNumber');
let countdown = document.getElementById('countdown');
inputNumber.addEventListener('blur', () => {
    let count = parseInt(inputNumber.value);
    let timer = setInterval(() => {
        countdown.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(timer);
        }
    }, 1000);
});

5) <input type="number" id="inputNumber">
<button id="startCountdown">Старт</button>
<p id="countdown"></p>

let inputNumber = document.getElementById('inputNumber');
let startCountdown = document.getElementById('startCountdown');
let countdown = document.getElementById('countdown');
startCountdown.addEventListener('click', () => {
    countdown.textContent = inputNumber.value;
    let count = parseInt(inputNumber.value);
    let timer = setInterval(() => {
        countdown.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(timer);
        }
    }, 1000);
});
</script>

6) <p id="timer">0</p>
<button id="startTimer">Старт</button>
<button id="stopTimer">Стоп</button>

let timerText = document.getElementById('timer');
let startTimerBtn = document.getElementById('startTimer');
let stopTimerBtn = document.getElementById('stopTimer');
let timer;
startTimerBtn.addEventListener('click', () => {
    let count = 1;
    timer = setInterval(() => {
        timerText.textContent = count;
        count++;
    }, 1000);
});
stopTimerBtn.addEventListener('click', () => {
    clearInterval(timer);
});

7) <p id="colorChange" style="color: red;">Цвет меняется</p>
let colorChange = document.getElementById('colorChange');
setInterval(() => {
    if (colorChange.style.color === 'red') {
        colorChange.style.color = 'green';
    } else {
        colorChange.style.color = 'red';
    }
}, 1000);
</script> */

// 451 Задержка перед выполнением в JavaScript
// Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.
let p51 = document.querySelector('#p51');
setTimeout(function() {
    p51.textContent = 'hellooooooooooooooooo';
}, 10000);

// 452 Запуск таймера в JavaScript
// Выведите в консоль число 0. Через секунду выведите число 1, через две секунды выведите число 2, через 3 секунды выведите число 3. И так далее до бесконечности.
let i52 = 0;
function timer52() {
	setTimeout(function() {
		console.log(++i52);
		timer52(); 
	}, 1000);
}
timer52();

// 453 Создание и вставка элементов на JavaScript
// Вставьте в конец li с текстом 'item'.
let elem53 = document.querySelector('#elem53');
let li53 = document.createElement('li');
li53.textContent = 'первый пункт';
elem53.appendChild(li53);
// Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.
let elem531 = document.querySelector('#elem531');
let but53 = document.querySelector('#button53');
let li531 = document.createElement('li');
li531.textContent = 'item';
but53.addEventListener('click', ()=>{
    elem531.appendChild(li531);
});

// 454 Привязывание событий при вставке элементов
// Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.
let elem54 = document.querySelector('#elem54');
let but54 = document.querySelector('#button54');
let li54 = document.createElement('li');
li54.textContent = 'text';
but54.addEventListener('click', ()=>{
    elem54.appendChild(li54);
});
elem54.addEventListener('click', ()=>{
    elem54.textContent += '!';
});

// 455 Создание элементов в цикле на JavaScript
// Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.
let ul55 = document.querySelector('#ul55');
for (let i55 = 1; i55 <= 9; i55++) {
	let li55 = document.createElement('li');
	li55.textContent += i55;
	ul55.appendChild(li55);
}

// 456 Навешивание обработчиков в цикле на JavaScript
// Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.
// let div56 = document.querySelector('#elem56');
// let p56 = document.querySelector('#p56');
// for (let i56 = 1; i56 <= 5; i56++) {
// 	let input56 = document.createElement('input');
// 	div56.appendChild(input56);
//     input56.addEventListener('blur',()=>{
//         p56.textContent += input56.value;
//     });
// }

// 457 Удаление элементов на JavaScript
// Сделайте так, чтобы любая li удалялась по клику на нее.
let elems57 = document.querySelectorAll('#li57');
for (let elem57 of elems57) {
	elem57.addEventListener('click', function() {
		elem57.remove();
	});
}

// 458 Вставка элементов в начало или в конец на JavaScript
// Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.
let elem58 = document.querySelector('#elem58');
let li580 = document.createElement('li');
li580.textContent = 'start';
let li581 = document.createElement('li');
li581.textContent = 'finish';
elem58.prepend(li580);
elem58.append(li581);

// 459 Вставка элементов перед элементами на JavaScript
// Вставьте перед элементом элемент с текстом 'new'.
let elem59 = document.querySelector('#elem59');
let li59 = document.querySelector('#li59');
let new59 = document.createElement('li');
new59.textContent = 'new';
elem59.insertBefore(new59, li59);

// 460 Смежная вставка элементов на JavaScript
// Вставьте перед ним абзац с текстом '!!!'.
let p60 = document.createElement('p');
p60.textContent = '!!!';
let elem60 = document.querySelector('#elem60');
elem60.insertAdjacentElement('beforeBegin', p60);
// Вставьте после него абзац с текстом '!!!'.
let p601 = document.createElement('p');
p601.textContent = '!!!';
elem60.insertAdjacentElement('afterEnd', p601);
// Вставьте после него абзац с текстом '!!!'.
let p602 = document.createElement('p');
p602.textContent = '!!!';
elem60.insertAdjacentElement('afterBegin', p602);
// Вставьте после него абзац с текстом '!!!'.
let p603 = document.createElement('p');
p603.textContent = '!!!';
elem60.insertAdjacentElement('beforeEnd', p603);

// 461 Смежная вставка тегов на JavaScript
// Дан элемент. Вставьте перед ним следующий тег:
let elem61 = document.querySelector('#elem61');
elem61.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');

// 462 Клонирование элементов на JavaScript
// Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
let input = document.getElementById('input62');
let but62 = document.getElementById('but62');
let div62 = document.getElementById('div62');
but62.addEventListener('click', () => {
    let clone62 = input62.cloneNode(true);
    div62.appendChild(clone62);
});

// 463 Проверка элементов в JavaScript
// Проверьте, является ли элемент элементом с классом www.
let elem63 = document.querySelector('#elem63');
console.log(elem63.matches('.www'));
// Дан элемент. Проверьте, является ли этот элемент абзацем.
console.log(elem63.matches('p'));

// 465 Практика на создание списков ul на JavaScript
// Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
let elem4 = document.querySelector('#elem4');
let arr4 = [1, 2, 3, 4, 5];
for (let elems4 of arr4) {
	let li4 = document.createElement('li');
	li4.textContent = elems4;
	elem4.appendChild(li4);
    // Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.
    li4.addEventListener('click',()=>{
        let p4 = document.createElement('p');
        p4.textContent = li4.textContent;
    })
}

// 466 Создание HTML таблиц на JavaScript
// Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
let table66 = document.querySelector('#table66');
for (let i66 = 0; i66 < 5; i66++) {
	let tr66 = document.createElement('tr');
	for (let i66 = 0; i66 < 5; i66++) {
		let td66 = document.createElement('td');
		tr66.appendChild(td66);
	}
	// table66.appendChild(tr66); ошибка ???
}

// 467 Последовательное заполнение HTML таблиц
// Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.
let table67 = document.getElementById("table67");
let count67 = 1;
for (let i67 = 0; i67 < 5; i67++) {
    let row67 = table67.insertRow(i67);
    for (let j67 = 0; j67 < 5; j67++) {
        let cell67 = row67.insertCell(j67);
        cell67.textContent = count67;
        count67++;
    }
}

// 468 Создание HTML таблицы из массива на JavaScript
// Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.
let arr68 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let table68 = document.getElementById("table68");
for (let i68 = 0; i68 < arr68.length; i68++) {
    let row68 = table68.insertRow(i68);
    for (let j68 = 0; j68 < arr68[i68].length; j68++) {
        let cell68 = row68.insertCell(j68);
        cell68.textContent = arr68[i68][j68];
    }
}

// 469 Создание HTML таблицы из массива объектов
// Выведите элементы этого массива в виде HTML таблицы.
let employees69 = [ 
    {name: 'employee1', age: 30, salary: 400}, 
    {name: 'employee2', age: 31, salary: 500}, 
    {name: 'employee3', age: 32, salary: 600}, 
];
let table69 = document.getElementById("table69");
// for (let i69 = 0; i69 < employees69.length; i69++) {
//     // let row69 = table69.insertRow(i69 + 1); ошибка 
//     for (let key69 in employees69[i69]) {
//         let cell69 = row69.insertCell();
//         cell69.textContent = employees69[i69][key69];
//     }
// }

// 471 Изменение ячеек HTML таблицы на JavaScript
// Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
function addRow71() {
    let table71 = document.getElementById("table71");
    let row71 = table71.insertRow(-1);
    let cell71 = row71.insertCell(0);
    cell71.innerHTML = "новый ряд";
}

// 472 Самоудаление новых элементов на JavaScript
// Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
let list72 = document.getElementById("elem72_1");
let button72 = document.getElementById("button72");
button72.addEventListener("click", function() {
    let new72 = document.createElement("li");
    new72.textContent = "урааа";
    list72.appendChild(new72);
});
list72.addEventListener("click", function(e72) {
    if (e72.target.tagName === "LI") {
        e72.target.remove();
    }
});

// 474 Создание ссылок для удаление элементов на JavaScript
// Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
let elems74 = document.querySelectorAll('#ul74 li');
for (let el74 of elems74) {
	let remove74 = document.createElement('a');
	remove74.href = '';
	remove74.textContent = 'удалить';
	
	el74.appendChild(remove74);
    remove74.addEventListener('click', function(e74) {
		el74.remove();
		e74.preventDefault();
	});
}

// 477 Редактирование в группе элементов на JavaScript
// Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредактировать текст этой li.
let elems77 = document.querySelectorAll('#ul77 li');
for (let el77 of elems77) {
	el77.addEventListener('click', function func77() {
		let input77 = document.createElement('input');
		input77.value = el77.textContent;
		el77.textContent = '';
		el77.appendChild(input);
		input77.addEventListener('blur', function() {
			el77.textContent = this.value;
			el77.addEventListener('click', func77);
		});
		el77.removeEventListener('click', func77);
	});
}

// 478 Одновременное редактирование и удаление элементов
// Добавьте ссылку на удаление в конец каждого абзаца. Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.
let elems78 = document.querySelectorAll('#parent78 span');
for (let el78 of elems78) {
	el78.addEventListener('click', function func78() {
		let input78 = document.createElement('input');
		input78.value = el78.textContent;
		el78.textContent = '';
		el78.appendChild(input78);
		input78.addEventListener('blur', function() {
			el78.textContent = this.value;
			el78.addEventListener('click', func78);
		});
		el78.removeEventListener('click', func78);
	});
	let remove78 = document.createElement('a');
	remove78.href = '';
	remove78.textContent = 'удалить';
	el78.appendChild(remove78);
    remove78.addEventListener('click', function(e78) {
		el78.remove();
		e78.preventDefault();
	});
}

// 479 Стилизация элементов на JavaScript
// Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).
let ps79 = document.querySelectorAll("#id79 p");
ps79.forEach(function(p79) {
    let link79 = document.createElement("a");
    link79.textContent = "перечеркнуть";
    link79.href = "#";
    p79.appendChild(link79);
    link79.addEventListener("click", function(e79) {
        e79.preventDefault();
        if (p79.style.textDecoration === "line-through") {
            p79.style.textDecoration = "none";
        } else {
            p79.style.textDecoration = "line-through";
        }
    });
});

// 480 Кнопки для скрытия и показа элемента на JavaScript
// Пусть по клику на одну кнопку наш абзац скрывается, а на другую - показывается.
let elemm80 = document.querySelector('#elem80');
let show80 = document.querySelector('#show80');
let hide80 = document.querySelector('#hide80');
hide80.addEventListener('click', function() {
	elemm80.classList.add('hidden');
});
show80.addEventListener('click', function() {
	elemm80.classList.remove('hidden');
});

// 482 Активация элементов на JavaScript
// Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.
let elems82 = document.querySelectorAll('#ul82 li');
for (let el82 of elems82) {
	el82.addEventListener('click', function() {
		this.classList.add('active');
	});
}

// 484 Практика на изменение элементов на JavaScript
// Дан массив. Выведите его элементы в виде списка ul.
let arr = [1, 2, 3, 4, 5];
let list = document.getElementById("list");
// Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.
arr.forEach(item => {
  let li = document.createElement("li");
  li.textContent = item;
  // Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.
  let deleteLink = document.createElement("a");
  deleteLink.href = "#";
  deleteLink.textContent = "  удалить ";
deleteLink.addEventListener("click", (e) => {
    e.preventDefault();
    list.removeChild(li);
  });
  // Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li.
  let strikeLink = document.createElement("a");
  strikeLink.href = "#";
  strikeLink.textContent = " перечеркнуть";
  strikeLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
    } else {
      li.style.textDecoration = "line-through";
    }
  });
  
  li.appendChild(deleteLink);
  li.appendChild(strikeLink);
  
  li.addEventListener("click", () => {
    let input = document.createElement("input");
    input.value = li.textContent;
    li.textContent = "";
    li.appendChild(input);
  });
  
  list.appendChild(li);
});

function add84() {
  let id484 = document.getElementById("id484");
  let newItemValue = id484.value;
  
  if (newItemValue) {
    let li = document.createElement("li");
    li.textContent = newItemValue;
    
    let deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.textContent = "удалить";
    deleteLink.addEventListener("click", (e) => {
      e.preventDefault();
      list.removeChild(li);
    });
    
    let strikeLink = document.createElement("a");
    strikeLink.href = "#";
    strikeLink.textContent = "перечеркнуть";
    strikeLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    });
    
    li.appendChild(deleteLink);
    li.appendChild(strikeLink);
    
    li.addEventListener("click", () => {
      let input = document.createElement("input");
      input.value = li.textContent;
      li.textContent = "";
      li.appendChild(input);
    });
    
    list.appendChild(li);
    id484.value = "";
  }
}
// Выведите элементы этого массива в виде HTML таблицы.
let employees84 = [ 
    {name: 'employee1', age: 30, salary: 400}, 
    {name: 'employee2', age: 31, salary: 500}, 
    {name: 'employee3', age: 32, salary: 600}, 
];
let table84 = document.getElementById("table84");
// for (let i84 = 0; i84 < employees84.length; i84++) {
//     // let row84 = table84.insertRow(i84 + 1);
//     for (let key84 in employees84[i84]) {
//         let cell84 = row84.insertCell();
//         cell84.textContent = employees84[i84][key84];
//     }
// }

// Выведите на экран каждого работника в своем теге li тега ul.
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let list84 = document.querySelector('#employeesList');
employees.forEach((employee, index) => {
    let listItem = document.createElement('li');
    listItem.textContent = 'Name: '+ employee.name+ '  Age: '+ employee.age + '  Salary: ' +employee.salary;
    let deleteLink = document.createElement('a');
    deleteLink.textContent = ' удалить';
    deleteLink.href = '#';
    deleteLink.addEventListener('click', (event) => {
        event.preventDefault();
        employees.splice(index, 1);
        list84.removeChild(listItem);
    });

    listItem.appendChild(deleteLink);
    list84.appendChild(listItem);
});


        

























































