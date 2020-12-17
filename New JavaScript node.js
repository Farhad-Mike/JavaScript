<noscript>no</noscript>
str.length;
str.length = 2;
str.localeCompare(str2);
str.charCodeAt(3);
str.codePointAt(3); // для суррогатной пары
String.fromCharCode(code);
String.fromCodePoint(code);
str.indexOf('str', point);
str.lastIndexOf('str', point);
str.search(str2);
'' + 4613;
str[i];
str.charAt(point);
str.toUpperCase();
str.toLowerCase();
str.substring(a, b);
str.substr(a, n);
str.slice(a, b);
str.split(', ', 3); // second arguments show how much length must be argument, other string will be deleted
str.trim();
str.replace('str', str2 / func);
str.includes(str2, pos);
str.repeat(n);
str.endsWith(str2); // true/false if ends with str2;
str.startsWith(str2);
'S\u0307\u0323'.normalize(); // unicode normalize. some time will replace with one unicode '\u1e68'
'\u2033';
'\u{20331}'; maximum 8 numbers but can be a lower;
JSON.parse('obj', func);
JSON.stringfy(obj, callback(key, value), space); // callback должна возвращать уже измененное значение или undefined чтобы пропустить. Первый вызов – особенный. Ему передаётся специальный «объект-обёртка»: {"": meetup}. Другими словами, первая (key, value) пара имеет пустой ключ, а значением является целевой объект в общем. Вместо функции можно передать массив свойств которые будут обработаны автоматически
num.toLocaleString();
num.toFixed(2);
+'481320';
!!'str';
0xff156;
num.toExponential(n); // 2.345e+3 а при n = 4 будет 2.3450e+3;
num.toPrecision(n); // В общем случае из 2345 будет 2345, при n = 2 будет 2.3e+3;
num.toString(8) // представляет число в 8ой системе исчисления
56e-6;
Math.pow(n, s);
Math.sqrt(n);
Math.PI;
Math.E;
Math.sin();
Math.cos();
Math.tan();
Math.atan();
Math.atan2();
Math.asin();
Math.acos();
Math.max(n, n, n, n, n);
Math.min(n, n, n);
Math.floor(n);
Math.ceil(n);
Math.round(n);
Math.random();
Math.log(5);
Math.exp(6);
Math.abs(num);
Math.trunc('2.2') // remove .2 and return number 2
arr.length;
arr.indexOf(elem, pos);
arr.lastIndexOf(elem, pos);
arr.includes(elem, pos);
arr.slice(a, b);
arr.splice(a, n, add, add2);
arr.concat(arr2, arr3, elem);
arr.flat(level); // На сколько уровней вложенности уменьшается мерность исходного массива. По-умолчанию 1. Значение Infinity полностью уберает вложенность
arr.sort(callBack(a, b)); // Сортирует элементы массива и возвращает отсортированный массив. Можно без callBack()
arr.forEach(callBack(item, i, arr){}, context); // Контекст в данном случае указывает, откуда всязть callBack функцию. То есть контекст не для самого массива, а для метода. То есть сам метод может ссылаться к каким либо данным внутри своего объекта
arr.filter(callBack(item, i, arr){}, context); // Тоже самое что и arr.find(), только возвращает все элементы для которых возвращается true
arr.map(callBack(item, i, arr){}, context);
arr.every(callBack(){}, context);
arr.some(callBack(){}, context);
arr.reduce(callBack(previousValue, currentItem, index, arr){}, initialValue);
arr.reduceRight(callBack(previousValue, currentItem, index, arr){}, initialValue);
arr.find(callBack(item, i, arr){}, context); // Если функция возвращает true, поиск прерывается и возвращается item. Если ничего не найдено, возвращается undefined. В отличие от arr.some() возвращает сам элемент а не булево значение
arr.findIndex(callBack(item, i, arr){}, context);  // по сути, то же самое что arr.find(), но возвращает индекс, на котором был найден элемент, а не сам элемент, и -1, если ничего не найдено
arr.join(':');
arr.pop();
arr.push(elem, elem2);
arr.shift();
arr.unshift(elem, elem2);
arr.reverse();
arr.fill(value); // fill all array with the value;
Array.isArray(value) // Он возвращает true, если value массив, и false, если нет
Array.from(value, callBack, thisArg) // который принимает итерируемый объект или псевдомассив и делает из него «настоящий» Array. Второй аргумент может быть функцией, которая будет применена к каждому элементу перед добавлением в массив
prompt('q', 'default value'); // return answer or null
alert('text');
confirm('text'); // return true or false
for (var key in obj); // work with array
parseInt(str, 16);
parseFloat(str, 2);
isNaN(str);
isFinite(num);
Error.captureStackTrace(this, ConstructorName); // or new Error().stack;
new Class().prototype.constructor.name; // has name of Class;
var obj = Object.create(proto, descriptor);
'prop' in obj;
Object.getOwnPropertyDescriptor(obj, 'prop');
Object.getOwnPropertyDescriptors(obj);
Object.defineProperty(obj, 'prop', descriptor);
Object.defineProperties(obj, descriptor);
Object.keys(obj); // return array from prop of obj;
Object.values(obj); // return array from values of obj;
Object.entries(obj); // Создает массив с подмассивами пары [key, value]
Object.getOwnPropertySymbols(obj); // return array for all symbols in the obj;
Object.preventExtensions(obj); // I can't add new prop to the obj;
Object.isExtensible(obj);
Object.seal(obj); // Object.preventExtensions() + configurable = false;
Object.isSealed(obj);
Object.freeze(obj); // enumerable, configurable and writable = false, can be only readen;
Object.isFrozen(obj);
Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, newProto); // Привязка к уже существующему объекту, прототип
Object.assign(target, src, src2, src3, . . . .); // Copy all prop from src$ to target, and rewrite latest prop from latest src;
Object.assigh({}, obj); // will clone obj;
Object.is(value1, value2); // will compare and return true/false; have some difference neither main compare(===);
Object.getOwnPropertyNames(obj);
Object.fromEntries(arr) // Делает противоположное Object.entries(). получив массив с подмассивами [key, value], превращает их в объект
obj.hasOwnProperty('prop'); // Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного метода
obj.isEnumerable('prop');
obj.isPrototypeOf(obj2); // is obj2 has been prototyped from obj? return true/false;
obj instanceof Class;
var user = { name: 'Name', sayHi() { } }; // new variant for declare method;
{
	let name = 'Farhad';
	let obj = { name }; // obj = {name: 'Farhad'};
	let obj = { [name]: 'Developer' }; // obj = {Farhad: 'Developer'};
	let obj = { [name]() { } } // obj = {Farhad: function(){}}

	let obj = {
		__proto__: animal,
		walk() { console.log(super.walk) } // keyword 'super'return prop from prototype and the keyword work only in method of obj
	} // and work only with [[HomeObject]]
}
typeof NaN //'number'
typeof undefined // "undefined"
typeof 0 // "number"
typeof true // "boolean"
typeof "foo" // "string"
typeof {} // "object"
typeof null // "object" (1)
typeof function () { } // "function" (2)
perfomance.now(); // how much milliseconds has been left from browser send request to erver for open page
console.time('name');
console.timeEnd('name');
var date = new Date();
let date = Date.parse('yyyy-mm-ddthh:mm:ss.sssZ'); // return milliseconds or NaN
Date.now(); // like +new Date() but the fastest because not create an obj
date.getFullYear();
date.getMonth();
date.getDate();
date.getDay();
date.getHours();
date.getMinutes();
date.getSeconds();
date.getMilliseconds();
date.getUTCFullYear();
date.getUTCMonth();
date.getUTCDate();
date.getUTCDay();
date.getUTCHours();
date.getUTCMinutes();
date.getUTCSeconds();
date.getUTCMilliseconds();
date.getTimezoneOffset(); // return comparison between UTC and your Timezone
date.getTime() // return milliseconds like +new Date();
date.setFullYear();
date.setMonth();
date.setDate();
date.setHours();
date.setMinutes();
date.setSeconds();
date.setMilliseconds();
date.toLocaleString('en-US', options); // about that must read in internet
date.toString(); // return full date; on every browser show diferent;
date.toDateString(); // return only date;
date.toTimeString(); // return only time;
date.toUTCString();
date.toISOString();
navigator.userAgent; //  информация о текущем браузере
navigator.platform; // информация о платформе (может помочь в понимании того, в какой ОС открыт браузер – Windows/Linux/Mac и так далее)
location; // нельзя читать если это другой порт, домен, протокол
location.href; // одно и тоже что и location
document.documentElement;
document.title;
document.head;
document.body;
document.getElementById('id');
document.getElementsByTagName('tag')[i];
document.getElementsByName('name')[i];
document.getElementsByClassName('class')[i];
document.querySelector('selector');
document.querySelectorAll('selector')[i];
table.rows; // коллекция строк TR таблицы.
table.caption / tHead / tFoot; // ссылки на элементы таблицы CAPTION, THEAD, TFOOT.
table.tBodies; // коллекция элементов таблицы TBODY, по спецификации их может быть несколько.
tbody.rows; // коллекция строк TR секции.
tr.cells; //  коллекция ячеек TD/TH
tr.sectionRowIndex; // номер строки в текущей секции THEAD/TBODY
tr.rowIndex; // номер строки в таблице
td.cellIndex; // номер ячейки в строке
elem.onclick = func();
elem.matches('selector'); // return true/false если элемент удовлетворяет данному селектору
elem.closest('selector'); // ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск. return elem/null
elem.parentNode;
elem.childNodes;
elem.firstChild;
elem.lastChild;
elem.previousSibling;
elem.nextSibling;
elem.hasChildNodes(); // Does element have childes or not? true/false
elem.parentElement;
elem.children;
elem.firstElementChild;
elem.lastElementChild;
elem.previousElementSibling;
elem.nextElementSibling;
elem.contains(elem2); // Возвращает true, если parent содержит child или parent == child
elem.compareDocumentPosition(elem2);
document.createElement('tag', { is: mainTag });
document.createTextNode('text');
let img = new Image(width, height);
elem.cloneNode(true / false);
var tmp = document.createDocumentFragment();	// два одинаковых результата
var tmp = new DocumentFragment(); 	// два одинаковых результата
var style = getComputedStyle(elem, psevdo - selector);
elem.style.MozBorderRadius;
elem.style.cssText = 'cssText'; // Для задания нескольких стилей в одной строке. Это свойство редко используется, потому что такое присваивание удаляет все существующие стили
elem.style.prop = 'value';
document.write('HTML');
document.writeIn('HTML');
node.append(...nodes or strings)		// добавляет узлы или строки в конец node, строки вставляются безопасным способом, как делает это elem.textContent. thats methods don't return node.
node.prepend(...nodes or strings)		// вставляет узлы или строки в начало node,
node.before(...nodes or strings) 		// вставляет узлы или строки до node,
node.after(...nodes or strings) 		// вставляет узлы или строки после node,
node.replaceWith(...nodes or strings) 	// заменяет node заданными узлами или строками.
elem.insertAdjacentText('where', 'text'); // beforebegin...
elem.insertAdjacentHTML('where', 'HTML');
elem.insertAdjacentElement('where', elem2);	// where:				
											"beforebegin" – вставить html непосредственно перед elem,
											"afterbegin" – вставить html в начало elem,
											"beforeend" – вставить html в конец elem,
											"afterend" – вставить html непосредственно после elem.
elem.appendChild(elem);
elem.removeChild(elem2);
elem.remove(); 		// remove elem
elem.replaceChild(oldElem, newElem); // remove oldElem and return it
elem.insertBefore(elem2, nextSibling);
elem.offsetParent; 	// Элемент родитель относительно которого по css идет позиционирование.
elem.offsetTop; 	// относительно offsetParent
elem.offsetLeft;	// относительно offsetParent 
elem.offsetHeight;  // внешняя высота блока, её можно получить сложением CSS-высоты, внутренних отступов и рамок.
elem.offsetWidth;	// внешняя ширина блока, её можно получить сложением CSS-ширины, внутренних отступов и рамок.
elem.scrollHeight; 	// полная внутренняя высота (сам контент), включая прокрученную область.
elem.scrollWidth; 	// полная внутренняя ширина (сам контент), включая прокрученную область.
elem.scrollTop;		// скрытый непрокрученный контент вверху
elem.scrollLeft;	// скрытый непрокрученный контент слево
elem.clientWidth; 	// используя document.documentElement выведет только видимую область окна браузера без прокрутки. Они включают в себя ширину области содержимого вместе с внутренними отступами padding, но без прокрутки
elem.clientHeight; 	// Они включают в себя ширину области содержимого вместе с внутренними отступами padding, но без прокрутки
elem.clientTop;  	// ширина верхней рамки
elem.clientLeft; 	// ширина левой рамки
elem.innerHTML;
elem.outerHTML;
window.innerWidth; 	// выведет только видемую  область окна браузера + прокрутка
window.innerHeight;
window.screenY; 	// верхний и левый угол браузера относительно всего экрана
window.screenX;
window.pageYOffset; // Сколько прокрутки осталось для окна браузера
window.pageXOffset; // Сколько прокрутки осталось для окна браузера
window.open();
scrollTo(x, y); // на конкретную позицию
scrollBy(x, y); // относительно текущих координат
screen.width;
screen.height;
screen.availHeight;
screen.availWidth;
document.elementFromPoint(x, y); // относительно окна браузера, для координат вне окна возвращает null
let clientRect = elem.getBoundingClientRect(); // относительно окна браузера
clientRect.top;
clientRect.left;
clientRect.bottom;
clientRect.right;
clientRect.width;
clientRect.height;
elem.getClientRects();
elem.scrollIntoView(true / false); // default == true. true - Верхний край элемента совмещён с верхней частью окна элемента. false - Нижний край элемента будет совмещён с нижним краем окна элемента.
elem.hasAttribute('att');
elem.getAttribute('att');
elem.setAttribute('name', 'value');
elem.removeAttribute('att');
elem.attributes; // Коллекция attributes содержит все атрибуты в виде объектов со свойствами name и value
elem.dataset.firstSecond; // <div data-first-second='value'></div>
elem.className;
elem.classList; // return iterable object looks like array, but it is not array
elem.classList.add('className');
elem.classList.remove('className');
elem.classList.toggle('className');
elem.classList.contains('className');
elem.nodeName; 	// return node's name; Теги всегда выводятся заглавными буквами
elem.nodeType; 	// return 1(element), 3(textNode);
elem.tagName; 	// return element's name; Теги всегда выводятся заглавными буквами
elem.nodeValue; // У других типов узлов, в частности, у текстовых, есть свои аналоги: свойства nodeValue и data.
elem.data; 		// У других типов узлов, в частности, у текстовых, есть свои аналоги: свойства nodeValue и data.
elem.textContent;
elem.isHidden; 	// вернёт true для элементов, которые в принципе показываются, но их размеры равны нулю (например, пустые <div>).
//elem == id from HTML
elem.addEventListener('event', handler[, obj]); // obj = {capture: true/false, once: true/false, passive: true/false, passive: true/false}.  Вместо obj можно использовать true/false как короткая запись {capture: true/false}
												// once: если true, тогда обработчик будет автоматически удалён после выполнения.
												// passive: если true, то указывает, что обработчик никогда не вызовет preventDefault()
												// capture: Если аргумент true, то событие будет перехвачено при погружении, Если аргумент false (по умолчанию), то событие будет поймано при всплытии.
												// passive: passive: true сигнализирует браузеру, что обработчик не собирается выполнять preventDefault(). Необязательная опция, но может немного увеличить плавность. Для некоторых браузеров (Firefox, Chrome) опция passive по умолчанию включена в true для таких событий, как touchstart и touchmove.
												// Можно вместо handler передать объект с методом handleEvent. То есть {handleEvent(){}}
elem.removeEventListener('event', handler[, obj]);
elem.dispatchEvent(event);


elem.ontouchstart;
elem.ontouchend;
elem.ontouchmove;
elem.ontouchcancel;


elem.dataset[aboutPosition]; // attribute [data-about-position];
//DOMContentLoaded can be added only with method addEventListener('DOMContentLoaded', func);
//window.onload;
//window.onunload;
//window.onbeforeunload;
//elem.onerror;
document.readyState 		// Есть три возможных значения: "loading" – документ загружается. "interactive" – документ был полностью прочитан. "complete" – документ был полностью прочитан и все ресурсы (такие как изображения) были тоже загружены.
document.readystatechange 	// генерируется при изменении состояния document.readyState
iframe.contentWindow 		// ссылка на объект window внутри <iframe>. Если это другой домен, протокол, порт то разрешено только получения ссылки на внутренний объект window из iframe.contentWindow, а оттуда можно получить location
iframe.contentDocument		// ссылка на объект document внутри <iframe>, короткая запись для iframe.contentWindow.document.
document.forms[name / index];
form.elements[name / index];	 // if form have a few elements with same name, the form.elements will return collection of elements;
fieldset.elements[name / index];
element.form; // will return parentElement 'form' of the element;
input.checked;
select.selectedIndex = n;	
select.selectedIndex = -1; 		// cleare selectedIndex;
select.value;
select.options;
option.selected; 				// Выбрана ли опция. true/false; the same like select.options[i].selected; if multiple attribute exist you can select a few options;
option.text;    				// Содержимое опции (то, что видит посетитель).		
option.index;					// Номер опции среди других в списке <select>.
var option = new Option(text, value[, defaultSelected, selected]) // if want to be selected by default the 3 and 4 arguments must be true;
input.focus(); // данным вариантом можно вызвать любое событие из скрипта.
input.bloor();
elem.tabIndex = 1; 				// Мы можем добавить tabindex из JavaScript, используя свойство elem.tabIndex.
document.activeElement; // at the moments focused element;
class User {
	constructor(arguments) {
		this.prop = arguments;
	}
	protoMethod() {
	};
};
let User = class {
	protoMethod() { };
}
let User = class Name {
	protoMethod() { };
}

class User {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	static createGuest() { // keyword 'static' give us a possible to use obj User's prop like User.createGuest();
		return new User("Гость", "Сайта");
	}
};

class Menu { // one of variant for use like const;
	static get elemClass() {
		return "menu"
	}
}

class Rabit extends Animal {
	constructor() {
		super(argumentsForParent)
	}; // Если нет конструктора то используется родительский;
	methods() { super.walk() };
}
let user = User.createGuest();

alert(user.firstName); // Гость

var anonimFunc = (a, b, c) => a + b + c; // function(a, b, c){return a + b + c};

form.submit(); // При этом событие submit не генерируется.
navigator.sendBeacon(url, data) // Он посылает данные в фоне. Переход к другой странице не задерживается: браузер покидает страницу, но всё равно выполняет sendBeacon. Размер данных ограничен 64 Кб.
input.defaultChecked;
input.defaultSelected;
elem.ownerDocument; // always return the higest node of the elem. For DOM elem will return document;
// if use enter for submit, automatic will used event click;
let sym = Symbol();
let sym = Symbol('name'); // Если создать таким образом символ то он в глобальный реестр не попадет
let sym = Symbol.for('name'); // add to Global Registry; 'name' is a name of the symbol; symbol is a sym or Symbol(); Добавление и чтение из реестра;
Symbol.keyFor(sym); // return name of sym ('name');
for (let value of obj) { }; // Как и цикл for..in.. только перебирает нумерованные объекты;
for (let value of 'str');
obj[Symbol.iterator] = function () { let a; let b; return { next() { if (___) { return { done: false, value: n++ } } else { return { done: true } } } } } // set iterator function. Если this.to == infinity то цикл будет бесконечно;
// Если у объекта уже есть или задать отдельно метод next(), то тело символа Symbol.iterator должно вернуть return this;
sym.toString() // Return 'Symbol("name")'
sym.descriptor // Return 'name'



let map = new Map();
map
	.set('1', 'value')
	.set(1, 'value')
	.set(true, 'value'); // Такой вариант записи называется чейнинг;

map.get('1');
let map = new Map([ // Аргументом new Map должен быть итерируемый объект (не обязательно именно массив).
	['1', 'value'],
	[1, 'value'],
	[true, 'value']
])
map.delete(key); // delete a key and return true if key has been.
map.clear(); // clear map from all keys.
map.has(key); // does the map has the key? return true or false;
map.size; // like arr.length;
for (let arr of map.keys()) { }; // iteration through key;
for (let arr of map.values()) { }; // iteration through values;
for (let arr of map) { }; // or map.entries(); iteration through both keys and values;
map.forEach(function (value, key, map) { }, context); // the map has .forEach method like in arr; По поводу context нужно уточнить;

let set = new Set(arr);
set.add(value) // add value. Will not add a same value twice;
set.size; // like arr length;
set.delete(value); // delete value and return true or false if it has be;
set.has(value); // return true or false if it has;
set.clear(); // full clear set;

for (let value of set) { };
set.forEach(function (value, valueAgain, set) { }});

let weakMap = new WeakMap(); // every element in collection weakMap will deleted if real link to obj-key will removed from parrent variable;
weakMap.set(obj - key, value); // only object can added;
weakMap.delete(obj - key);
weakMap.get(obj - key);
weakMap.has(obj - key);

let weakSet = new WeakSet(); // everything work like for WeakMap constructor; but do not have weakSet.has(obj);


// Book 3;

let customeTag = customElements.define('word-count', WordCount, { extends: 'p' });
customElements.whenDefined('app-drawer').then(() => {
	console.log('app-drawer defined');
});
customElement.get(customeTag); // return constructor WordCount which has been used for create element.

let proto = Object.create(proto[, descriptors]); // Создать объект используя прототим и дескриптор свойств.
proto.constructor = func;
proto.connectedCallback = func;
proto.disconnectedCallback = func;
proto.attributeChangedCallback(attrName, oldVal, newVal)
proto.adoptedCallback(func) // like document.adoptNode(el)

let shadow = element.attachShadow({ mode: 'open' / 'closed' }) // creare Shadow DOM in elem; Shadow DOM will hide all child nodes which has been before;
'<content select="selector">some text</content>'; // some text will showed if nothing has founded;
// attr select='h3' (selector) what content from normal DOM should be in there;

elem.shadowRoot; // get Shadow DOM object and can make work with him like normal DOM through JS;
// that property can't be used for change originary Browser's element, for example <input type='date'>

template.content; // contains of all templates childNodes; Содержимое находится вне DOM;

try { } catch (errObj) { } finally { };
new Error(message);
new ReferenceError(message);
new RangeError(message);
new SyntaxError(message);


let exportedDom = document.currentScript.ownerDocument; // возвражает DOM выполняемого скрипта;

link.import // доступен DOM экспортируемого документа;


let formData = new FormData([form]); // Если передать в конструктор элемент HTML-формы form, то создаваемый объект автоматически прочитает из неё поля. может быть бызван без аргументов. Поля объекта formData можно перебирать, используя цикл for..of
formData.append(name, value);			// добавляет к объекту поле с именем name и значением value,
formData.append(name, blob, fileName)	// добавляет поле, как будто в форме имеется элемент <input type="file">, третий аргумент fileName устанавливает имя файла (не имя поля формы), как будто это имя из файловой системы пользователя,
formData.set(name, value)				// его синтаксис такой же, как у append. Разница в том, что .set удаляет все уже имеющиеся поля с именем name и только затем добавляет новое.
formData.set(name, blob, fileName)		// его синтаксис такой же, как у append. Разница в том, что .set удаляет все уже имеющиеся поля с именем name и только затем добавляет новое.
formData.delete(name)					// удаляет поле с заданным именем name,
formData.get(name)						// получает значение поля с именем name,
formData.has(name)						// если существует поле с именем name, то возвращает true, иначе false



/* Коды закрытия вебсокета (event.code) */
1000 // Нормальное закрытие.
1001 // Удалённая сторона «исчезла».
1002 // Удалённая сторона завершила соединение в связи с ошибкой протокола.
1003 // Удалённая сторона завершила соединение в связи с тем, что она получила данные, которые не может принять(обработать).
/*  */

let eventSource = new EventSource("/events/subscribe", { withCredentials: true / false }); // Событий всего 3: onmessage, onopen, onerror; Второй не обязательный аргумент. Обычный протокол HTTP;
eventSource.close();
eventSource.lastEventId;
/* Для запуска ссвоих событий с сервера их можно задать только через elem.addEventListener(); */
const unsigned short CONNECTING = 0; // в процессе (пере‐)соединения
const unsigned short OPEN = 1; // соединение установлено
const unsigned short CLOSED = 2; // соединение закрыто

let elemIframe = frames["iframe's name"]; // Ссылка на окно iframe;
(iframeTag.contentWindow == elemIframe) // true; iframeTag.contentWindow содержит ссылку на окно;
let iframeDoc = iframe.contentWindow.document; // Документ не будет доступен, если iframe с другого домена;
iframeDoc.location.replace('newSrc');
iframe.contentWindow.location.href = 'url';
iframe.contentWindow.location.href; // read url; Only if the same domain;

form.action = url; // На какой url отправлять запрос;
form.target = frame; // Куда возвращать ответ;
form.method = 'POST'; // Какой метод использовать;

elem.ontransitionend; // Событие по окончанию анимации;


let id = requestAnimationFrame(callback); // callback получает один аргумент – время, прошедшее с начала загрузки страницы, результат вызова performance.now().
cancelAnimationFrame(id);

timingEaseOut(timeFraction) = 1 - timing(1 - timeFraction) // easeOut formula
// easeInOut совмещение и первой и второй половины

open(url, name, param); // Возвращает ссылку на window нового окна, а оттуда можно с ним работать.   url == about:blank то откроется пустое новое окно
// param === 'left=100,top=100,width=200,height=200,manubar=yes/no,toolbar=yes/no,location=yes/no,status=yes/no,resizable=yes/no,scrollbars=yes/no' без пробелов; По умолчанию no
//param:
// menubar (yes/no)	 	позволяет отобразить или скрыть меню браузера в новом окне.
// toolbar (yes/no)	 	позволяет отобразить или скрыть панель навигации браузера (кнопки вперёд, назад, перезагрузки страницы) нового окна.
// location (yes/no)	позволяет отобразить или скрыть адресную строку нового окна. Firefox и IE не позволяют скрывать эту панель по умолчанию.
// status (yes/no)		позволяет отобразить или скрыть строку состояния. Как и с адресной строкой, большинство браузеров будут принудительно показывать её.
// resizable (yes/no)	позволяет отключить возможность изменения размера нового окна. Не рекомендуется.
// scrollbars (yes/no)	позволяет отключить полосы прокрутки для нового окна. Не рекомендуется.

opener; // Ссылка на родительское окно; Popout может менять родительское окно
window.onresize;
let win = open('/');
win.closed; // true/false; можно легко проверить, закрыт ли попап (или главное окно) или все ещё открыт.
window.close(); // close if the window has opened by window.open();
window.moveBy(x, y); // move to right, down from start point;
window.moveTo(x, y); // move to x, y position относительно экрана;
window.resizeBy(width, height); // resize window from start point;
window.resizeTo(width, height); // resize window to that width and height;
window.frames[0]; // like iframe.contentWindow;
window.frames.iframeName; 
window.parent; // iframe.contentWindow.parent == window;
window.top; // the higest window;
document.domain = 'secondDomain.com'; // Снимает ограничение между доменами. Нужно прописывать на всех сайтах. Домен второго уровня (peter.site.com, john.site.com) у всех должен быть одинаков
window.postMessage(data, 'https://domain.com'); // window == another iframe or tab, domain "*" is mean разницы нету какой открыт iframe все равно послать туда инфо (небезопасно)
window.addEventListener('message'); // event.data/Присланные данные event.origin/Источник, из которого пришло сообщение, например http://javascript.ru. event.source/Ссылка на окно, с которого пришло сообщение. Можно тут же ответить.
window.focus(); // По разному в бразерах. но в основном ничего не делает

<iframe sandbox='prop prop2 prop3 ...'></iframe>	// sandbox:  По умолчанию атрибут <iframe sandbox></iframe> Устанавливает полное ограничение, если не указать нужные параметры как ниже.
													 //	allow-same-origin - "sandbox" принудительно устанавливает «другой источник» для ифрейма. Другими словами, он заставляет браузер воспринимать iframe, как пришедший из другого источника, даже если src содержит тот же сайт. Со всеми сопутствующими ограничениями для скриптов. Эта опция отключает это ограничение.
													 // allow-top-navigation - Позволяет ифрейму менять parent.location.
													 // allow-forms - Позволяет отправлять формы из ифрейма.
													 // allow-scripts - Позволяет запускать скрипты из ифрейма.
													 // allow-popups - Позволяет открывать всплывающие окна из ифрейма с помощью window.open.




let regexp = new RegExp('str', 'flag'); // flag == i/g/m;
let regexp = /str/flag;

str.search(regexp);
let expMatch = str.match(/regexp(second)/); // возвращает массив; // с флагом g возвращает массив со всеми совпаддениями по строке, в этом случае свойства input и index не создаются;
/* в случае если метод match не нашел совпадения то он возвращает null */
expMatch[0] = 'regexpsecond';
expMatch[1] = 'second';
expMatch.index; // позиция в массиве в данном случае 0;
expMatch.input; // изначальная строка в которой произошел поиск;

str.split(regExp, limit);
str.replace(str / regExpWithG, str / func); // func has arguments str, p1...pn, offset, s; if regexp does not have brakets then func will have 3 arguments;

regexp.test(str); // does the str has the regexp;
regexp.exec(str);
regexp.lastIndex; // from where begin search regexp.exec(str);

/\d-digit\s-space\w-wordOrAnyNumberAnd<_>\D-noDigit\W-noWordAnd_\S-noSpace .-anySymbol\b-border\B-noBorder +-like{1,} u?-like{0,1} i*-like{0,}/; // if I need protect Symbol I will just use double slash // .-noEntire;
/* regexp have a special symbols like \n or \t like a string */

/regexp[aeoiu]/; // any symbol from brackets [];
/regexp[a-fA-f]/; // any symbol from that range;
/regexp[0-8]/;
/regexp[^eio\d]/; // any symbol what not showed in brackets;
/regexp\d{6}/; // repeat \d summary 6 times;
/regexp\d{3,6}/; // repeat \d 3 or 6 times;
/regexp\d{2,}/; // find from 2 and more simbols;
/[a-z]+/;
/(regexp)/;
/(?:regexp)/; // do not add like separete element to array;
	/* В $n запоминается скобка. Вспомни пример с replace */;
	/* Используя \n можно возьзоваться скобками прям в regexp, но нельзя использовать (?:) */;
/regexp|regexp2|regexp3/;
/^regexp regexp$/; // так же такая запись шаблона охватывает весь текст;


let promise = new Promise(function (resolve, reject) {
		// Эта функция будет вызвана автоматически
		// В ней можно делать любые асинхронные операции,
		// А когда они завершатся — нужно вызвать одно из:
		// resolve(результат) при успешном выполнении
		// reject(ошибка) при ошибке
	)}

promise.then(onFulfilled, onRejected); // Можно назначить как оба обработчика сразу, так и только один promise.then(onFulfilled), promise.then(null, onRejected);
promise.catch(onRejected); // Поставить обработчик только на ошибку; Он может стоять в любом месте асинхронного promise.
new Promise(function (resolve, reject) {
	// то же что reject(new Error("o_O"))
	throw new Error("o_O");
})
Promise.all(iterable);// Получает массив (или другой итерируемый объект) промисов и возвращает промис, который ждёт, пока все переданные промисы завершатся.
return к then, catch к catch;
/* Если записать promise.then(func) то выполнится два promis-a;
				 promise.then(func)
*/

Promise.allSettled(iterable) 	// всегда ждёт завершения всех промисов. Для каждого промиса вернет {status:"fulfilled", value:результат} для успешных завершений,  {status:"rejected", reason:ошибка} для ошибок.
Promise.all(iterable) 			// но ждёт только первый промис, из которого берёт результат (или ошибку).
Promise.resolve(value) 			// создаёт успешно выполненный промис с результатом value
Promise.reject(error) 			// создаёт промис, завершённый с ошибкой error

function* name() {
	yield value;
	let result = yield value;
	yield* anotherGenerator();
	return value;
};
let variable = name();
variable.next();
variable.next();
variable.next(50);

variable.throw(new Error('message'));

async func(); // выполнить функцию асинхронно;
await func(); // подожди пока функция выполнится а потом иди дальше по коду;

let proxy = new Proxy(target, handlers);
/* handlers = {
	get(target, property, receiver),
	set(target, property, value, receiver),
	has(target, phrase),
	deleteProperty(target, phrase),
	apply(target, thisArgument, argumentsList),
	construct(target, argumentsList)
}

Внутренний метод 			Ловушка 					Что вызывает
[[Get]] 					get 						чтение свойства
[[Set]] 					set 						запись свойства
[[HasProperty]] 			has 						оператор in
[[Delete]] 					deleteProperty 				оператор delete
[[Call]] 					apply 						вызов функции
[[Construct]] 				construct 					оператор new
[[GetPrototypeOf]] 			getPrototypeOf 				Object.getPrototypeOf
[[SetPrototypeOf]] 			setPrototypeOf 				Object.setPrototypeOf
[[IsExtensible]] 			isExtensible 				Object.isExtensible
[[PreventExtensions]] 		preventExtensions 			Object.preventExtensions
[[DefineOwnProperty]] 		defineProperty 				Object.defineProperty, Object.defineProperties
[[GetOwnProperty]] 			getOwnPropertyDescriptor 	Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries
[[OwnPropertyKeys]] 		ownKeys 					Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object.keys/values/entries

*/

let range = new Range();
setStart(node, offset) 		// установить начальную границу в позицию offset в node
setStartBefore(node) 		// установить начальную границу прямо перед node
setStartAfter(node) 		// установить начальную границу прямо после node
setEnd(node, offset) 		// установить конечную границу в позицию offset в node
setEndBefore(node) 			// установить конечную границу прямо перед node
setEndAfter(node) 			// установить конечную границу прямо после node
selectNode(node) 			// выделить node целиком
selectNodeContents(node) 	// выделить всё содержимое node
collapse(toStart) 			// если указано toStart=true, установить конечную границу в начало, иначе установить начальную границу в конец, схлопывая таким образом диапазон
cloneRange() 				// создать новый диапазон с идентичными границами
deleteContents()  			// удалить содержимое диапазона из документа
extractContents()   		// удалить содержимое диапазона из документа и вернуть как DocumentFragment
cloneContents()  			// склонировать содержимое диапазона и вернуть как DocumentFragment
insertNode(node)  			// вставить node в документ в начале диапазона
surroundContents(node)   	// обернуть node вокруг содержимого диапазона. Чтобы этот метод сработал, диапазон должен содержать как открывающие, так и закрывающие теги для всех элементов внутри себя: не допускаются частичные диапазоны по типу <i>abc.

// SELECTION
document.getSelection()		// взять выделение
							anchorNode		// узел, с которого начинается выделение,
							anchorOffset	// смещение в anchorNode, где начинается выделение,
							focusNode		// узел, на котором выделение заканчивается,
							focusOffset		// смещение в focusNode, где выделение заканчивается,
							isCollapsed		// true, если диапазон выделения пуст или не существует.
							rangeCount		// количество диапазонов в выделении, максимум 1 во всех браузерах, кроме Firefox.						
							getRangeAt(i)   // взять i-ый диапазон, начиная с 0. Во всех браузерах, кроме Firefox, используется только 0.
							addRange(range) // добавить range в выделение. Все браузеры, кроме Firefox, проигнорируют этот вызов, если в выделении уже есть диапазон.
							removeRange(range)			// удалить range из выделения.
							removeAllRanges()			// удалить все диапазоны.
							empty()			// сокращение для removeAllRanges.
							collapse(node, offset)		// заменить выделенный диапазон новым, который начинается и заканчивается на node, на позиции offset.
							setPosition(node, offset)	// то же самое, что collapse (дублирующий метод-псевдоним).
							collapseToStart()			// схлопнуть (заменить на пустой диапазон) к началу выделения,
							collapseToEnd()	// схлопнуть диапазон к концу выделения,
							extend(node, offset)		// переместить фокус выделения к данному node, с позиции offset,
							setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset)	// заменить диапазон выделения на заданные начало anchorNode/anchorOffset и конец focusNode/focusOffset. Будет выделено всё содержимое между этими границами
							selectAllChildren(node)		// выделить все дочерние узлы данного узла node.
							deleteFromDocument()		// удалить содержимое выделения из документа.
							containsNode(node, allowPartialContainment = false)	// проверяет, содержит ли выделение node (частично, если второй аргумент равен true)







getSelection(); // return object from mouse selected txt;
getSelection().removeAll(); // remove all selection;




/**/

window.clientWidth / window.clientHeight // return all empty width / height without scroll bar
window.innerWidth / window.innerHeight // return all empty width / height with scroll bar

/**/


let bigInt = 1535435n // Создать числовой тип данных 
let bigInt = BigInt(124342) // принимает строки и числа
2 ** 3 // return 8

obj[Symbol.toPrimitive]('string') // obj.toString() then obj.valueOf()
obj[Symbol.toPrimitive]('number' / 'default') // obj.valueOf() then obj.toString()

func.name // Return name of the function
func.length // содержит количество параметров функции в её объявлении. троеточие, обозначающее остаточные параметры не считается
func.bind(context, ...args) // Привязка контекста

import(moduleName); // загружает модуль и возвращает промис, результатом которого становится объект модуля, содержащий все его экспорты. Использовать его мы можем динамически в любом месте кода. мы не можем скопировать import в другую переменную или вызвать при помощи .call/apply. Это не функция


let observer = new MutationObserver(callback);  // наблюдатель за изменениями с помощью колбэк-функции
observer.observe(node, config); 	// Потом прикрепляем его к DOM-узлу. config – это объект с булевыми параметрами «на какие изменения реагировать»:
									childList 				// изменения в непосредственных детях node,
									subtree 				// во всех потомках node,
									attributes 				// в атрибутах node,
									attributeFilter 		// массив имён атрибутов, чтобы наблюдать только за выбранными.
									characterData 			// наблюдать ли за node.data (текстовое содержимое),						
									characterDataOldValue 	// если true, будет передавать и старое и новое значение node.data в колбэк (см далее), иначе только новое (также требуется опция characterData),
									attributeOldValue 		// если true, будет передавать и старое и новое значение атрибута в колбэк (см далее), иначе только новое (также требуется опция attributes).
observer.disconnect()	// останавливает наблюдение
let mutationRecords = observer.takeRecords()	// получает список необработанных записей изменений, которые произошли, но колбэк для них ещё не выполнился


queueMicrotask(func);	// Запланировать микрозадачу

let byts = new ArrayBuffer(byts);		// создаётся буфер длиной byts байт заполненный нулями
let eight = new Uint8Array(byts);		// представляет каждый байт в ArrayBuffer как отдельное число; возможные значения находятся в промежутке от 0 до 255 (в байте 8 бит, отсюда такой набор). Такое значение называется «8-битное целое без знака».
let sixteen = new Uint16Array(byts);	// представляет каждые 2 байта в ArrayBuffer как целое число; возможные значения находятся в промежутке от 0 до 65535. Такое значение называется «16-битное целое без знака».
let thtwo = new Uint32Array(byts);		// представляет каждые 4 байта в ArrayBuffer как целое число; возможные значения находятся в промежутке от 0 до 4294967295. Такое значение называется «32-битное целое без знака».
let flthtwo = new Float32Array(byts);   // 32-битные числа со знаком и плавающей точкой
let sixfour = new Float64Array(byts);	// 64-битные числа со знаком и плавающей точкой представляет каждые 8 байт в ArrayBuffer как число с плавающей точкой; возможные значения находятся в промежутке между 5.0x10-324 и 1.8x10308.
byts.byteLength; 			// Сколько БАЙТОВ в сумме в даном типизированном массиве
eight.set(fromArr, [offset])	// копирует все элементы из fromArr в arr, начиная с позиции offset (0 по умолчанию)
eight.subarray([begin, end])	// создаёт новое представление того же типа для данных, начиная с позиции begin до end (не включая). Это похоже на метод slice (который также поддерживается), но при этом ничего не копируется – просто создаётся новое представление, чтобы совершать какие-то операции над указанными данными.
eight[index] = number;		// 
eight[index]; 				// get number
eight.buffer; 				// ссылка на объект ArrayBuffer
eight.length; 				// длина типизированного массива (не сумма)
eight.byteLength; 			// размер содержимого в байтах, работает точно так же как и byts.byteLength;
eight.BYTES_PER_ELEMENT; // Сколько БАЙТОВ выделено на каждое целое число
Есть 5 вариантов создания типизированных массивов:	// TypedArray это один из Uint8Array, Uint16Array, Uint32Array, Float64Array
	new TypedArray(buffer, [byteOffset], [length]);	// Дополнительно можно указать аргументы byteOffset (0 по умолчанию) и length (до конца буфера по умолчанию), тогда представление будет покрывать только часть данных в buffer.
	new TypedArray(object);							// Если в качестве аргумента передан Array или какой-нибудь псевдомассив, то будет создан типизированный массив такой же длины и с тем же содержимым
	new TypedArray(typedArray);						// Если в конструктор передан другой объект типа TypedArray, то делается то же самое: создаётся типизированный массив с такой же длиной и в него копируется содержимое. При необходимости значения будут приведены к новому типу.
	new TypedArray(length);
	new TypedArray();
new Int8Array(value);	//  целые числа со знаком (могут быть отрицательными)
new Int16Array(value);	//  целые числа со знаком (могут быть отрицательными)
new Int32Array(value);	//  целые числа со знаком (могут быть отрицательными)
new Uint8ClampedArray(value);	// В него записываются значения 255 для чисел, которые больше 255, и 0 для отрицательных чисел.
new DataView(buffer, [byteOffset], [byteLength])	// buffer – ссылка на бинарные данные ArrayBuffer. В отличие от типизированных массивов, DataView не создаёт буфер автоматически. Нам нужно заранее подготовить его самим. byteOffset – начальная позиция данных для представления (по умолчанию 0). byteLength – длина данных (в байтах), используемых в представлении (по умолчанию – до конца buffer).
let dataView = new DataView(new ArrayBuffer(value)); // В случае DataView доступ к данным осуществляется посредством методов типа .getUint8(i) или .getUint16(i). Мы выбираем формат данных в момент обращения к ним, а не в момент их создания.
dataView.getUint8(index);
dataView.getUint16(index);
dataView.getUint32(index);
dataView.getFloat32(index);
dataView.getFloat64(index);
dataView.getInt8(index);
dataView.getInt16(index);
dataView.getInt32(index);
dataView.setUint8(index, value);
dataView.setUint16(index, value);
dataView.setUint32(index, value);
dataView.setFloat32(index, value);
dataView.setFloat64(index, value);
dataView.setInt8(index, value);
dataView.setInt16(index, value);
dataView.setInt32(index, value);

let decoder = new TextDecoder([label], [options]); 	// Создать сам декодер текста. label – тип кодировки, utf-8 используется по умолчанию. options – объект с дополнительными настройками: fatal – boolean, если значение true, тогда генерируется ошибка для невалидных (не декодируемых) символов, в ином случае (по умолчанию) они заменяются символом \uFFFD. ignoreBOM – boolean, если значение true, тогда игнорируется BOM (дополнительный признак, определяющий порядок следования байтов), что необходимо крайне редко.
let str = decoder.decode(bufferSource, [options]); 	// Декодировать текст из типизированного массива. options – объект с дополнительными настройками: stream – true для декодирования потока данных, при этом decoder вызывается вновь и вновь для каждого следующего фрагмента данных. В этом случае многобайтовый символ может иногда быть разделён и попасть в разные фрагменты данных. Это опция указывает TextDecoder запомнить символ, на котором остановился процесс, и декодировать его со следующим фрагментом.
let encoder = new TextEncoder(); 					// Создать сам кодер текста. Поддерживается только кодировка «utf-8».
let binary = encoder.encode(str); 					// возвращает бинарный массив Uint8Array, содержащий закодированную строку.
let binary = encoder.encodeInto(str, destination);	// кодирует строку (str) и помещает её в destination, который должен быть экземпляром Uint8Array.

let blob = new Blob(blobParts, options);			// blobParts – массив значений Blob/BufferSource/String. options – необязательный объект с дополнительными настройками: type – тип объекта, обычно MIME-тип, например. image/png, endings – если указан, то окончания строк создаваемого Blob будут изменены в соответствии с текущей операционной системой (\r\n или \n). По умолчанию "transparent" (ничего не делать), но также может быть "native" (изменять).
blob.slice([byteStart], [byteEnd], [contentType]);	// получить срез Blob. byteStart – стартовая позиция байта, по умолчанию 0. byteEnd – последний байт, по умолчанию до конца. contentType – тип type создаваемого Blob-объекта, по умолчанию такой же, как и исходный.  отрицательные числа также разрешены.
URL.createObjectURL(blob);	// берёт Blob и создаёт уникальный URL для него в формате blob:<origin>/<uuid>.
URL.revokeObjectURL(url);	//  удаляет внутреннюю ссылку на объект, что позволяет удалить его (если нет другой ссылки) сборщику мусора, и память будет освобождена.

let file = new File(fileParts, fileName, [options]);	// fileParts – массив значений Blob/BufferSource/строки. fileName – имя файла, строка. options – необязательный объект со свойством: lastModified – дата последнего изменения в формате таймстамп (целое число).
file.name;			// имя файла
file.lastModified;	// таймстамп для даты последнего изменения.
let reader = new FileReader();		// объект, цель которого читать данные из Blob (и, следовательно, из File тоже).
reader.readAsArrayBuffer(blob) 		// считать данные как ArrayBuffer
reader.readAsText(blob, [encoding])	// считать данные как строку (кодировка по умолчанию: utf-8)
reader.readAsDataURL(blob)			// считать данные как base64-кодированный URL.
reader.abort()						// отменить операцию.
reader.result; 						// результат чтения (если оно успешно)
reader.error; 						// объект ошибки (при неудаче).
	В процессе чтения происходят следующие события:
		loadstart – чтение начато.
		progress – срабатывает во время чтения данных.
		load – нет ошибок, чтение окончено.
		abort – вызван abort().
		error – произошла ошибка.
		loadend – чтение завершено (успешно или нет).


let response = fetch(url[, options]); 	// url – URL для отправки запроса. options – дополнительные параметры: метод, заголовки и так далее. Без options это простой GET-запрос, скачивающий содержимое по адресу url. Options:
										headers: {} // содержит объект с исходящими заголовками:
													// Content-Type:
														// text/plain;charset=UTF-8 		// тело запроса строка
														// application/json;charset=UTF-8	// тело запроса JSON
														// form/multipart					// тело запроса <form>
													// 'X-File-Idэ': FileId // ID файла который мы посылаем или если хотим узнать сколько уже загрузилось с сервера
													// 'X-Start-Byte': StartByte // С какого байта продолжать загружать
														// объект Blob имеет встроенный тип (image/png, заданный в toBlob). При отправке объектов Blob он автоматически становится значением Content-Type
										method: 	// HTTP метод, например POST,
										body		// тело запроса, одно из списка: 
														// строка (например, в формате JSON),
														// объект FormData для отправки данных как form/multipart,
														// Blob/BufferSource для отправки бинарных данных,
														// URLSearchParams для отправки данных в кодировке x-www-form-urlencoded, используется редко.
										credentials: 	// ключить отправку авторизационных данных (username and password)
														// "same-origin" – стоит по умолчанию, не отправлять для запросов на другой источник
														// "include" – отправлять всегда, но при этом необходим заголовок Access-Control-Allow-Credentials в ответе от сервера, чтобы JavaScript получил доступ к ответу сервера
										signal: controller.signal // Задаем это свойство если хотим через controller.abort() прервать fetch запрос.
										referrer:		// Обычно этот заголовок ставится автоматически и содержит URL-адрес страницы, с которой пришёл запрос. В большинстве случаев он совсем неважен, в некоторых случаях, с целью большей безопасности, имеет смысл убрать или укоротить его.
										referrerPolicy: // устанавливает общие правила для Referer
														// "no-referrer-when-downgrade" – это значение по умолчанию: Referer отправляется всегда, если только мы не отправим запрос из HTTPS в HTTP (из более безопасного протокола в менее безопасный).
														// "no-referrer" – никогда не отправлять Referer.
														// "origin" – отправлять в Referer только текущий источник, а не полный URL-адрес страницы, например, посылать только http://site.com вместо http://site.com/path.
														// "origin-when-cross-origin" – отправлять полный Referer для запросов в пределах текущего источника, но для запросов на другой источник отправлять только сам источник (как выше).
														// "same-origin" – отправлять полный Referer для запросов в пределах текущего источника, а для запросов на другой источник не отправлять его вообще.
														// "strict-origin" – отправлять только значение источника, не отправлять Referer для HTTPS→HTTP запросов.
														// "strict-origin-when-cross-origin" – для запросов в пределах текущего источника отправлять полный Referer, для запросов на другой источник отправлять только значение источника, в случае HTTPS→HTTP запросов не отправлять ничего.
														// "unsafe-url" – всегда отправлять полный URL-адрес в Referer, даже при запросах HTTPS→HTTP.
										mode:			// это защита от нечаянной отправки запроса на другой источник
														// "cors" – стоит по умолчанию, позволяет делать такие запросы так, как описано в Fetch: запросы на другие сайты,
														// "same-origin" – запросы на другой источник запрещены,
														// "no-cors" – разрешены только простые запросы на другой источник.
										cache:			// позволяет игнорировать HTTP-кеш или же настроить его использование
														// "default" – fetch будет использовать стандартные правила и заголовки HTTP кеширования
														// "no-store" – полностью игнорировать HTTP-кеш, этот режим становится режимом по умолчанию, если присутствуют такие заголовки как If-Modified-Since, If-None-Match, If-Unmodified-Since, If-Match, или If-Range,
														// "reload" – не брать результат из HTTP-кеша (даже при его присутствии), но сохранить ответ в кеше (если это дозволено заголовками ответа);
														// "no-cache" – в случае, если существует кешированный ответ – создать условный запрос, в противном же случае – обычный запрос. Сохранить ответ в HTTP-кеше,
														// "force-cache" – использовать ответ из HTTP-кеша, даже если он устаревший. Если же ответ в HTTP-кеше отсутствует, сделать обычный HTTP-запрос, действовать как обычно,
														// "only-if-cached" – использовать ответ из HTTP-кеша, даже если он устаревший. Если же ответ в HTTP-кеше отсутствует, то выдаётся ошибка. Это работает, только когда mode установлен в "same-origin".
										redirect:		// Обычно fetch прозрачно следует HTTP-редиректам, таким как 301, 302 и так далее
														// "follow" – стоит по умолчанию, следовать HTTP-редиректам,
														// "error" – ошибка в случае HTTP-редиректа,
														// "manual" – не следовать HTTP-редиректу, но установить адрес редиректа в response.url, а response.redirected будет иметь значение true, чтобы мы могли сделать перенаправление на новый адрес вручную.
										integrity:		// позволяет проверить, соответствует ли ответ известной заранее контрольной сумме. Как описано в спецификации, поддерживаемыми хеш-функциями являются SHA-256, SHA-384 и SHA-512. В зависимости от браузера, могут быть и другие. Например, мы скачиваем файл, и мы точно знаем, что его контрольная сумма по алгоритму SHA-256 равна «abcdef» (разумеется, настоящая контрольная сумма будет длиннее). Мы можем добавить это в настройку integrity вот так:
														// 'sha256-abcdef'
										keepalive:		// указывает на то, что запрос может «пережить» страницу, которая его отправила. Мы не можем посылать мегабайты: лимит тела для запроса с keepalive – 64кб






response.status			// код статуса HTTP-запроса, например 200.
response.ok 			// логическое значение: будет true, если код HTTP-статуса в диапазоне 200-299.
response.text()			// читает ответ и возвращает как обычный текст,
response.json()			// декодирует ответ в формате JSON,
response.formData() 	// возвращает ответ как объект FormData (разберём его в следующей главе),
response.blob()			// возвращает объект как Blob (бинарные данные с типом),
response.arrayBuffer()	// возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных),
response.body 			// это объект ReadableStream, с помощью которого можно считывать тело запроса по частям. 
						response.body.getReader()	// Вернет объект с которого методом .read() можно будет каждый раз получать объект {done: true/false, value: Uint8Array}
response.headers.get('key'); // получить заголовок по его имени. МОЖНО ПЕРЕБЕРАТЬ ПО ЦИКЛУ for of
							 //	Content-Length длина всего содержимого ответа который мы получим


let controller = new AbortController();	// использовать для отмены не только fetch, но и других асинхронных задач.
controller.abort();						// генерируется событие с именем abort на объекте controller.signal
controller.signal;						// controller.signal.addEventListener('abort', callback)
controller.signal.aborted;				// становится равным true если прервано


//		ЗАГОЛОВКИ ЗАПРОСОВ 
Origin
Access-Control-Request-Method	// содержит HTTP-метод «непростого» запроса. (GET, POST, PATCH, DELETE)
Access-Control-Request-Headers 	// предоставляет разделённый запятыми список его «непростых» HTTP-заголовков.

// 		ЗАГОЛОВКИ ОТВЕТОВ
Access-Control-Allow-Origin		// * или сайт на которому разрешен доступ на запрос
Access-Control-Expose-Headers	// содержит список, через запятую, заголовков, которые не являются простыми, но доступ к которым разрешён
Access-Control-Allow-Methods 	// должен содержать разрешённые методы.
Access-Control-Allow-Headers 	// должен содержать список разрешённых заголовков.
Access-Control-Max-Age			// может указывать количество секунд, на которое нужно кешировать разрешения. Так что браузеру не придётся посылать предзапрос для последующих запросов, удовлетворяющих данным разрешениям.
Access-Control-Allow-Credentials // разрешить отправлять куки и авторизационные заголовки


let url = new URL(url, [base]); 		// url – полный URL-адрес или только путь, если указан второй параметр, base – необязательный «базовый» URL: если указан и аргумент url содержит только путь, то адрес будет создан относительно него:
										let url2 = new URL('/profile/admin', 'https://javascript.info');
url.protocol; 	// https:
url.hostname; 	// domain.com
url.port;		// 8080
url.host;     	// javascript.info:8080
url.pathname; 	// /url
url.search;		// ?p1=v1&p2=v2... (это называется параметры)
url.hash;		// #hash
url.user;		// если используется HTTP-аутентификация. редко используются
url.password;	// если используется HTTP-аутентификация. редко используются
url.searchParams	// объект типа URLSearchParams. Он предоставляет удобные методы для работы с параметрами. и является перебираемым, аналогично Map.
					// append(name, value) – добавить параметр по имени,
					// delete(name) – удалить параметр по имени,
					// get(name) – получить параметр по имени,
					// getAll(name) – получить все параметры с одинаковым именем name (такое возможно, например: ?user=John&user=Pete),
					// has(name) – проверить наличие параметра по имени,
					// set(name, value) – задать/заменить параметр,
					// sort() – отсортировать параметры по имени, используется редко,

// НИЖЕ УКАЗАНЫ СТАРЫЕ МЕТОДЫ КОТОРЫЕ РЕДКО ИСПОЛЬЗУЮТСЯ:
encodeURI('string');			// кодирует URL-адрес целиком. кодирует только символы, полностью запрещённые в URL
decodeURI('string');			// декодирует URL-адрес целиком. кодирует эти же символы плюс, в дополнение к ним, символы #, $, &, +, ,, /, :, ;, =, ? и @.
encodeURIComponent('string');	// кодирует компонент URL, например, параметр, хеш, имя пути и т.п.
decodeURIComponent('string');	// декодирует компонент URL.

let socket = new WebSocket("ws://domain.ru/path", ["soap", "wamp"]); // открыть веб-сокет-соединение (срабатывает событие onopen). ws может быть и wss. wss:// – это WebSocket поверх TLS (так же, как HTTPS – это HTTP поверх TLS), 
socket.onopen;
socket.onclose;
socket.onerror;
socket.onmessage;
socket.send(body); 		// Пересылать можно любые данные.
socket.bufferType; 		// для бинарных данных мы можем выбрать один из двух форматов: Blob или ArrayBuffer. по умолчанию оно равно "blob"
socket.bufferedAmount; 	// хранит количество байт буферизованных данных на текущий момент, ожидающих отправки по сети
socket.close([code], [reason]);	// Метод дл закрытия соединения с кодом закрытия и причины в виде текста
								// 1000 – по умолчанию, нормальное закрытие,
								// 1006 – невозможно установить такой код вручную, указывает, что соединение было потеряно (нет фрейма закрытия).
								// 1001 – сторона отключилась, например сервер выключен или пользователь покинул страницу,
								// 1009 – сообщение слишком большое для обработки,
								// 1011 – непредвиденная ошибка на сервере,
socket.readyState;	// получить состояние соединения
					// 0 – «CONNECTING»: соединение ещё не установлено,
					// 1 – «OPEN»: обмен данными,
					// 2 – «CLOSING»: соединение закрывается,
					// 3 – «CLOSED»: соединение закрыто.
// Поток данных в WebSocket состоит из «фреймов», фрагментов данных, которые могут быть отправлены любой стороной, и которые могут быть следующих видов:
	// «текстовые фреймы» – содержат текстовые данные, которые стороны отправляют друг другу.
	// «бинарные фреймы» – содержат бинарные данные, которые стороны отправляют друг другу.
	// «пинг-понг фреймы» используется для проверки соединения; отправляется с сервера, браузер реагирует на них автоматически.
	// также есть «фрейм закрытия соединения» и некоторые другие служебные фреймы.
// В браузере мы напрямую работаем только с текстовыми и бинарными фреймами

let eventSource = new EventSource('url', {widthCredentials: true/false}); // Чтобы послать авторизационные данные, следует установить дополнительную опцию withCredentials
eventSource.close(); 	   	// Если браузер хочет прекратить соединение, он может вызвать eventSource.close()
						   	// Если сервер хочет остановить попытки переподключения, он должен ответить со статусом 204
eventSource.CONNECTING = 0; // подключение или переподключение
eventSource.OPEN = 1;       // подключено
eventSource.CLOSED = 2;     // подключение закрыто

localStorage.setItem('key', 'value'); 	// Использовать локальный storage. Всегда используется формат строк. Мы можем использовать JSON для хранения объектов
										// К сожалению, объекты веб-хранилища (localeStorage, sessionStorage) нельзя перебрать в цикле, они не итерируемы. Но можно пройти по ним, как по обычным массивам
localStorage.getItem('key');
localStorage.removeItem('key'); 		// Удалить key=value
localStorage.clear();					// Очистить весь локальный storage.
localStorage.key(index);				// получить ключ на заданной позиции
localStorage.length;					// количество элементов в хранилище
sessionStorage.setItem('key', 'value'); // Использовать storage на одну сессию. Всегда используется формат строк.
sessionStorage.getItem('key');
sessionStorage.removeItem('key'); 		// Удалить key=value
sessionStorage.clear();					// Очистить весь storage на одну сессию.
sessionStorage.key(index);				// получить ключ на заданной позиции
sessionStorage.length;					// количество элементов в хранилище

document.cookie;	// показать все куки. Желательно записывать значения в куки через encodeURIComponent('str')
					// path=/mypath - URL-префикс пути, куки будут доступны для страниц под этим путём. Должен быть абсолютным. По умолчанию используется текущий путь. Если куки установлено с path=/admin, то оно будет доступно на страницах /admin и /admin/something, но не на страницах /home или /adminpage.
					// domain=site.com - Домен, на котором доступны наши куки. На практике, однако, есть ограничения – мы не можем указать здесь какой угодно домен.
					// expires=Tue, 19 Jan 2038 03:14:07 GMT - Хранить куки до этой даты. Если не задать этот параметр то куки удалится как тольк закроется браузер
					// max-age=3600	- Хранить куки столько секунд.
					// secure - С этой настройкой, если куки будет установлено на сайте https://site.com, то оно не будет доступно на том же сайте с протоколом HTTP, как http://site.com.
					// samesite=strict - применяется для защиты от так называемой XSRF-атаки (межсайтовая подделка запроса). Куки с samesite=strict никогда не отправятся, если пользователь пришёл не с этого же сайта. samesite игнорируется (не поддерживается) старыми браузерами, выпущенными до 2017 года и ранее.
					// samesite=lax - Это более мягкий вариант, который также защищает от XSRF и при этом не портит впечатление от использования сайта.
					// httpOnly - Настраивается на сервере. Эта настройка запрещает любой доступ к куки из JavaScript. Мы не можем видеть такое куки или манипулировать им с помощью document.cookie

let openDB = indexedDB.open(name, version);		// Создать/открыть/обновить версию базы данных. name – название базы данных, строка. version – версия базы данных, положительное целое число, по умолчанию 1
let deleteDB = indexedDB.deleteDatabase(name); 	// Удалить DataBase
openDB.result;	// объект базы данных
				openDB.result.version; // Версия базы данных. 0 означает что базы данных небыло вообще
openDB.error;	// информация об ошибке базы данных
openDB.createObjectStore(name, [, keyOptions]);	// Create хранилище объектов в DataBase. name – это название хранилища, например "books" для книг, keyOptions – это необязательный объект с одним или двумя свойствами: keyPath – путь к свойству объекта, которое IndexedDB будет использовать в качестве ключа, например id. autoIncrement – если true, то ключ будет формироваться автоматически для новых объектов, как постоянно увеличивающееся число. Если при создании хранилища не указать keyOptions, то нам потребуется явно указать ключ позже, при сохранении объекта.
							