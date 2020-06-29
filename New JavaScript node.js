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
	''+4613;
	str[i];
	str.charAt(point);
	str.toUpperCase();
	str.toLowerCase();
	str.substring(a, b);
	str.substr(a, n);
	str.slice(a, b);
	str.split(', ', 3); // second arguments show how much length must be argument, other string will be deleted
	str.trim();
	str.replace('str', str2/func);
	str.includes(str2, pos);
	str.repeat(n);
	str.endsWith(str2); // true/false if ends with str2;
	str.startsWith(str2);
	'S\u0307\u0323'.normalize(); // unicode normalize. some time will replace with one unicode '\u1e68'
	'\u2033';
	'\u{20331}'; maximum 8 numbers but can be a lower;
	JSON.parse('obj', func);
	JSON.stringfy(obj, func, space);
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
	arr.flat(level); // argument level set how much multidimentional is;
	arr.sort(func);
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
	for(var key in obj);
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
	Object.getOwnPropertySymbols(obj); // return all symbols in the obj;
	Object.getOwnPropertyNames(obj);
	obj.hasOwnProperty('prop');
	obj.isEnumerable('prop');
	obj.isPrototypeOf(obj2); // is obj2 has been prototyped from obj? return true/false;
	obj instanceof Class;
	var user = {name: 'Name', sayHi(){}}; // new variant for declare method;
	{
		let name = 'Farhad';
		let obj = {name}; // obj = {name: 'Farhad'};
		let obj = {[name]: 'Developer'}; // obj = {Farhad: 'Developer'};
		let obj = {[name](){}} // obj = {Farhad: function(){}}

		let obj = {
			__proto__: animal,
			walk(){console.log(super.walk)} // keyword 'super'return prop from prototype and the keyword work only in method of obj
		} // and work only with [[HomeObject]]
	}
	typeof NaN //'number'
	typeof undefined // "undefined"
	typeof 0 // "number"
	typeof true // "boolean"
	typeof "foo" // "string"
	typeof {} // "object"
	typeof null // "object" (1)
	typeof function(){} // "function" (2)
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
	navigator.userAgent;
	navigator.platform;
	location;
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
	table.caption/tHead/tFoot; // ссылки на элементы таблицы CAPTION, THEAD, TFOOT.
	table.tBodies; // коллекция элементов таблицы TBODY, по спецификации их может быть несколько.
	tbody.rows; // коллекция строк TR секции.
	tr.cells; //  коллекция ячеек TD/TH
	tr.sectionRowIndex; // номер строки в текущей секции THEAD/TBODY
	tr.rowIndex; // номер строки в таблице
	td.cellIndex; // номер ячейки в строке
	elem.onclick = func();
	elem.matches('selector');
	elem.closest('selector');
	elem.parentNode;
	elem.childNodes;
	elem.firstChild;
	elem.lastChild;
	elem.previousSibling;
	elem.nextSibling;
	elem.parentElement;
	elem.children;
	elem.firstElementChild;
	elem.lastElementChild;
	elem.previousElementSibling;
	elem.nextElementSibling;
	elem.contains(elem2); // Возвращает true, если parent содержит child или parent == child
	elem.compareDocumentPosition(elem2);
	document.createElement('tag', {is: mainTag});
	document.createTextNode('text');
	let img = new Image(width, height);
	elem.cloneNode(true/false);
	var tmp = document.createDocumentFragment();
	var style = getComputedStyle(elem, psevdo-selector);
	elem.style.MozBorderRadius;
	elem.style.cssText = 'cssText';
	document.write('HTML');
	document.writeIn('HTML');
	node.append(node2); // thats methods isn't return node. Can be added a few nodes at one moment
	node.prepend(node2);
	node.after(node2);
	node.before(node2);
	node.replaceWith(node2);
	elem.insertAdjacentText('where', 'text'); // beforebegin...
	elem.insertAdjacentHTML('where', 'HTML');
	elem.insertAdjacentElement('where', elem2);
	elem.appendChild(elem);
	elem.removeChild(elem2);
	elem.remove(); // remove elem
	elem.replaceChild(oldElem, newElem); // remove oldElem and return it
	elem.insertBefore(elem2, nextSibling);
	elem.offsetParent; // Элемент родитель относительно которого по css идет позиционирование.
	elem.offsetTop; // относительно offsetParent
	elem.offsetLeft;
	elem.offsetHeight;
	elem.offsetWidth;
	elem.scrollHeight;
	elem.scrollWidth;
	elem.scrollTop;
	elem.scrollLeft;
	elem.clientWidth; // используя document.documentElement выведет только видимую область окна браузера без прокрутки
	elem.clientHeight;
	elem.clientTop;
	elem.clientLeft;
	elem.innerHTML;
	elem.outerHTML;
	window.innerWidth; // выведет только видемую  область окна браузера + прокрутка
	window.innerHeight;
	window.screenY; // верхний и левый угол браузера относительно всего экрана
	window.screenX;
	window.pageYOffset;
	window.pageXOffset;
	window.open();
	scrollTo(x, y); // на конкретную позицию
	scrollBy(x, y); // относительно текущих координат
	screen.width;
	screen.height;
	screen.availHeight;
	screen.availWidth;
	document.elementFromPoint(x, y); // относительно окна браузера, для координат вне окна возвращает null
	let clientRect = elem.getBoundingClientRect(); // относительно документа
	clientRect.top;
	clientRect.left;
	clientRect.bottom;
	clientRect.right;
	clientRect.width;
	clientRect.height;
	elem.getClientRects();
	elem.scrollIntoView(true/false);
	elem.hasAttribute('att');
	elem.getAttribute('att');
	elem.setAttribute('name', 'value');
	elem.removeAttribute('att');
	elem.attributes; // Коллекция attributes содержит все атрибуты в виде объектов со свойствами name и value
	elem.className;
	elem.classList.add('className');
	elem.classList.remove('className');
	elem.classList.toggle('className');
	elem.classList.contains('className');
	elem.nodeName; // return node's name; Теги всегда выводятся заглавными буквами
	elem.nodeType; // return 1(element), 3(textNode);
	elem.tagName; // return element's name; Теги всегда выводятся заглавными буквами
	elem.nodeValue;
	elem.data;
	elem.textContent;
	//elem == id from HTML
	elem.addEventListener('event', handler[, true/false]); // true = capture, false == bubble;
	elem.removeEventListener('event', handler[, phase]);
	elem.dispatchEvent(event);
	event.isTrusted; // return true/false.
	event.clientY; // относительно окна браузера
	event.clientX;
	event.pageX; // относительно документа позиция мыши
	event.pageY;
	event.offsetX; // относительно родительского элемента
	event.offsetY;
	event.screenX; // like event.clientX;
	event.screenY; // like event.clientY;
	
	elem.ontouchstart;
	elem.ontouchend;
	elem.ontouchmove;
	elem.ontouchcancel;
	
	event.touches[0].clientX; // the prop isn't exist for .ontouchend;
	event.touches[0].clientY;
	event.changedTouches[0].clientX;
	event.changedTouches[0].clientY; // the prop exist in all touch events;
	event.target.name; // get name attr from input elem and matches elements;
	event.type;
	event.currentTarget; // == this;
	event.target; // the most bottom element on whitch has called event;
	event.stopPropagation(); // останавливает всплытие события, но на самом элементе обработаются все соответствующиеся события.
	event.stopImmediatePropagation(); // останавливает всплытие и так же предотвращает все соответствующие события на самом элементе.
	event.preventDefault();
	event.eventPhase; // 1 or 2 or 3;
	elem.dataset[aboutPosition]; // attribute [data-about-position];
	var event = new Event('event type', {bubble: true/false, cancelable: true/false});
	var event = new CustomEvent('event type', {bubble: true/false, cancelable: true/false, detail: {}});
	new MouseEvent();
	new KeyboardEvent(); // и т.д
	event.relatedTarget;
	event.which; // 1 == left, 2 == center, 3 == right mouse buttons; and for discover keyboard keydown, keyup, keypress events;
	event.deltaY; // how much has been scrroled with wheel;
	event.deltaX;
	event.deltaZ;
	event.keyCode; // work on all browser except on the IE. Works like event.which; keyCode work only for keydown and keyup;
	event.charCode; // work only for event 'keypress' and only for symbol;
	{keydown, keypress/*only for symbols and return symbol for lower or uppercase*/, keyup}
	event.shiftKey;
	event.ctrlKey;
	event.metaKey;
	event.altKey;
	//DOMContentLoaded can be added only with method addEventListener('DOMContentLoaded', func);
	//window.onload;
	//window.onunload;
	//window.onbeforeunload;
	//elem.onerror;
	iframe.contentWindow.document; // get link of document from domain;
	document.forms[name/index];
	form.elements[name/index]; // if form have a few elements with same name, the form.elements will return collection of elements;
	fieldset.elements[name/index];
	element.form; // will return parentElement 'form' of the elements;
	input.checked;
	select.selectedIndex = n;
	select.selectedIndex = -1; // cleare selectedIndex;
	select.value;
	select.options;
	option.selected; // true/false; the same like select.options[i].selected; if multiple attribute exist you can select a few options;
	option.text;
	option.index;
	var option = new Option(text, value[, defaultSelected, selected]) // if want to be selected by default the 3 and 4 arguments must be true;
	input.focus(); // данным вариантом можно вызвать любое событие из скрипта.
	input.bloor();
	document.activeElement; // at the moments focused element;
	class User{
		constructor(arguments){
			this.prop = arguments;
		}
		protoMethod(){
		};
	};
	let User = class{
		protoMethod(){};
	}
	let User = class Name{
		protoMethod(){};
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

	class Rabit extends Animal{
		constructor(){
			super(argumentsForParent)
		}; // Если нет конструктора то используется родительский;
		methods(){super.walk()};
	}
let user = User.createGuest();

alert( user.firstName ); // Гость

	var anonimFunc = (a, b, c) => a + b + c; // function(a, b, c){return a + b + c};
	elem.onchange;
	elem.oninput;
	elem.oncopy;
	elem.onpaste;
	elem.oncut;
	elem.onsubmit;
	form.submit(); // will not call event submit
	input.defaultChecked;
	input.defaultSelected;
	elem.ownerDocument; // always return the higest node of the elem. For DOM elem will return document;
	// if use enter for submit, automatic will used event click;
	let sym = Symbol();
	let sym = Symbol('name'); // Если создать таким образом символ то он в глобальный реестр не попадет
	let sym = Symbol.for('name'); // add to Global Registry; 'name' is a name of the symbol; symbol is a sym or Symbol(); Добавление и чтение из реестра;
	Symbol.keyFor(sym); // return name of sym ('name');
	for(let value of obj){}; // Как и цикл for..in.. только перебирает нумерованные объекты;
	for(let value of 'str');
	obj[Symbol.iterator] = function(){let a; let b; return{next(){if(___){return {done:false, value: n++}}else{return{done:true}}}}} // set iterator function. Если this.to == infinity то цикл будет бесконечно;
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
	for(let arr of map.keys()){}; // iteration through key;
	for(let arr of map.values()){}; // iteration through values;
	for(let arr of map){}; // or map.entries(); iteration through both keys and values;
	map.forEach(function(value, key, map){}, context); // the map has .forEach method like in arr; По поводу context нужно уточнить;

	let set = new Set(arr);
	set.add(value) // add value. Will not add a same value twice;
	set.size; // like arr length;
	set.delete(value); // delete value and return true or false if it has be;
	set.has(value); // return true or false if it has;
	set.clear(); // full clear set;

	for(let value of set){};
	set.forEach(function(value, valueAgain, set){}});

	let weakMap = new WeakMap(); // every element in collection weakMap will deleted if real link to obj-key will removed from parrent variable;
	weakMap.set(obj-key, value); // only object can added;
	weakMap.delete(obj-key);
	weakMap.get(obj-key);
	weakMap.has(obj-key);

	let weakSet = new WeakSet(); // everything work like for WeakMap constructor;


	// Book 3;


	let customeTag = customElements.define('word-count', WordCount, { extends: 'p' });
	customElements.whenDefined('app-drawer').then(() => {
	  console.log('app-drawer defined');
	});
	customElement.get(customeTag); // return constructor WordCount which has been used for create element.

	let proto = Object.create(proto);
	proto.constructor = func;
	proto.connectedCallback = func;
	proto.disconnectedCallback = func;
	proto.attributeChangedCallback(attrName, oldVal, newVal)
	proto.adoptedCallback(func) // like document.adoptNode(el)

	let shadow = element.attachShadow({mode: 'open'/'closed'}) // creare Shadow DOM in elem; Shadow DOM will hide all child nodes which has been before;
	'<content select="selector">some text</content>'; // some text will showed if nothing has founded;
													  // attr select='h3' (selector) what content from normal DOM should be in there;

	elem.shadowRoot; // get Shadow DOM object and can make work with him like normal DOM through JS;
					 // that property can't be used for change originary Browser's element, for example <input type='date'>

	template.content; // contains of all templates childNodes; Содержимое находится вне DOM;

	try{}catch(errObj){}finally{};
	new Error(message);
	new ReferenceError(message);
	new RangeError(message);
	new SyntaxError(message);


	let exportedDom = document.currentScript.ownerDocument; // возвражает DOM выполняемого скрипта;

	link.import // доступен DOM экспортируемого документа;

	let xhr = new XMLHttpRequest();
	xhr.open('GET/POST/...', 'URL', true/false, 'username', 'password');
	xhr.send([body]);
	xhr.status; // return cause from server, 0 if server do not respond;
	xhr.statusText;
	xhr.responseText; // return answer from server;
	xhr.responseXML; // return answer from server in XML format;
	xhr.abort(); // abort request;

	xhr.onreadystatechange; // обытие readystatechange происходит несколько раз в процессе отсылки и получения ответа.
	xhr.readyState; // имеет несколько состояний например 4 это запрос завершён;

const unsigned short UNSENT = 0; // начальное состояние
const unsigned short OPENED = 1; // вызван open
const unsigned short HEADERS_RECEIVED = 2; // получены заголовки
const unsigned short LOADING = 3; // загружается тело (получен очередной пакет данных)
const unsigned short DONE = 4; // запрос завершён

	xhr.setRequestHeader('Content‐Type', 'application/json; charset=utf-8'); // поставленный заголовок нельзя снять;
	xhr.getResponseHeader('Content‐Type'); // возвращает значение заголовка ответа, кроме Set‐Cookie и Set‐Cookie2.
	xhr.getAllResponseHeaders(); // возвращает все заголовки ответа, кроме Set‐Cookie и Set‐Cookie2
	xhr.withCredentials = true; // кроссдоменный запрос, разрешить отсылку куки и HTTP авторизацию

	xhr.timeout = 30000; // продолжительность асинхронного запроса превышении времени запрос будет оборван и сгенерировано событие ontimeout
	xhr.ontimeout;
	xhr.onload;
	xhr.onloadend;
	xhr.onerror;
	xhr.onprogress; // не чаще чем раз в 50мс.
	xhr.onloadstart;
	xhr.onabort;

	encodeURIComponent(str);

	--boundary // промежуточная граница
	--boundary-- // закрывающая


	/* Urlencoded GET*/
	let params = 'name=' + encodeURIComponent(myName) + '&surname=' + encodeURIComponent(mySurname);

	xhr.open('GET', '/submit?' + params, true);
	xhr.send();
	/* Urlencoded end */



	/* Urlencoded POST*/
	let bidy = 'name=' + encodeURIComponent(myName) + '&surname=' + encodeURIComponent(mySurname);

	xhr.open('POST', '/submit?', true);
	xhr.setRequestHeder('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send(body);
	/* Urlencoded end */



	/* multiplatform/form-data POST*/
	let body = 'Content-Disposition: form-data; name="key" \r\n\r\n data[key] \r\n' + boundary + 'Content-Disposition: form-data; name="key" \r\n\r\n data[key] \r\n';
	let boundary = '--boundary';
	let closeRequest = '--boundary--';

	xhr.open('POST', '/submit?', true);
	xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
	xnr.send(body + closeRequest);
	/* multiplatform/form-data end*/
	/* multiplatform/form-data POST*/
	let formData = new FormData(document.forms.name); // может быть бызван без аргументов
	formaData.append(key, value); // добавить доболнительно ключ: значение
	xhr.open("POST", '/url');
	xhr.send(formData);
	/* multiplatform/form-data end*/


	/* JSON */
	xhr.open('POST', '/submit?');
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	xhr.send(JSON.stringfy(obj));
	/* JSON end */

	xhr.open('GET', 'http://anywhere.com/request', true); // запрос на другой домен

	xhr.upload.onprogress;
	xhr.upload.onload; // Событие при полной загрузки на сервер.
	xhr.upload.onerror;
	// xhr.upload имеет все те же самые события как и xhr.
	event.lengthComputable; // false/true неизвестный рамер либо нулевой размер тела. Только при получении ответа с сервера.
	event.loaded; // Кол-во загруженных байтов.
	event.total; // Общее кол-во байтов.
	event.reason; // причина закрытия соединения.
	event.wasClean; // true/false чистое закрытие или обрыв
	event.code;
	event.origin; // При кросс-доменных запросах появится. Откуда пришли данные (домен);
	event.reason;
	event.data;

	/* Коды закрытия вебсокета (event.code) */
		1000 // Нормальное закрытие.
		1001 // Удалённая сторона «исчезла».
		1002 // Удалённая сторона завершила соединение в связи с ошибкой протокола.
		1003 // Удалённая сторона завершила соединение в связи с тем, что она получила данные, которые не может принять(обработать).
	/*  */

	let socket = new webSocket( "ws://javascript.ru/ws", ["soap","wamp"]); // ws может быть и wss. wss работает над HTTPS;
	socket.onopen;
	socket.onclose;
	socket.onerror;
	socket.onmessage;
	socket.send(body); //Пересылать можно любые данные.

	let eventSource = new EventSource("/events/subscribe", {withCredentials: true/false}); // Событий всего 3: onmessage, onopen, onerror; Второй не обязательный аргумент. Обычный протокол HTTP;
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
	event.propertyName; // Свойство, анимация которго завершилась.
	event.elepsedTime; // Время (в секундах), которое заняла анимация, без учета transition-delay.

	let id = requestAnimationFrame(callback); // callback получает один аргумент – время, прошедшее с начала загрузки страницы, результат вызова performance.now().
	cancelAnimationFrame(id);

	timingEaseOut(timeFraction) = 1 - timing(1 - timeFraction) // easeOut formula
	// easeInOut совмещение и первой и второй половины

	open(url, name, param); // Возвращает ссылку на window нового окна, а оттуда можно с ним работать
	// param === 'left=100,top=100,width=200,height=200,manubar=yes/no,toolbar=yes/no,location=yes/no,status=yes/no,resizable=yes/no,scrollbars=yes/no' без пробелов; По умолчанию no
	opener; // Ссылка на родительское окно; Оно тоже может менять родительское окно
	window.onresize;
	window.close; // true/false;
	window.close(); // close if the window has opened by window.open();
	window.moveBy(x, y); // move to right, down from start point;
	window.moveTo(x, y); // move to x, y position относительно экрана;
	window.resizeBy(width, height); // resize window from start point;
	window.resizeTo(width, height); // resize window to that width and height;
	window.frames[0]; // like iframe.contentWindow;
	window.frames.iframeName;
	window.parent; // iframe.contentWindow.parent == window;
	window.top; // the higest window;
	document.domain = 'third lvl domain/first lvl'; // Снимает ограничение между доменами. Нужно прописывать на всех сайтах. Домен у всех должен быть одинаков
	window.postMessage(data, 'domain'); // window == another iframe or tab, domain "*" is mean to all;
	window.addEventListener('message'); // event.data/Присланные данные event.origin/Источник, из которого пришло сообщение, например http://javascript.ru. event.source/Ссылка на окно, с которого пришло сообщение. Можно тут же ответить.
	window.focus(); // По разному в бразерах. но в основном ничего не делает

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
	str.replace(str/regExpWithG, str/func); // func has arguments str, p1...pn, offset, s; if regexp does not have brakets then func will have 3 arguments;

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


	let promise = new Promise(function(resolve, reject){
		// Эта функция будет вызвана автоматически
		// В ней можно делать любые асинхронные операции,
		// А когда они завершатся — нужно вызвать одно из:
		// resolve(результат) при успешном выполнении
		// reject(ошибка) при ошибке
	)}

	promise.then(onFulfilled, onRejected); // Можно назначить как оба обработчика сразу, так и только один promise.then(onFulfilled), promise.then(null, onRejected);
	promise.catch(onRejected); // Поставить обработчик только на ошибку; Он может стоять в любом месте асинхронного promise.
	new Promise(function(resolve, reject){
	  // то же что reject(new Error("o_O"))
	  throw new Error("o_O");
	})
	Promise.all(iterable);// Получает массив (или другой итерируемый объект) промисов и возвращает промис, который ждёт, пока все переданные промисы завершатся.
	return к then, catch к catch;
	/* Если записать promise.then(func) то выполнится два promis-a;
					 promise.then(func)
	*/

	function* name(){
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

	*/

	let range = document.createRange();
	range.setStart(textNode, offsetPoint);
	range.setEnd(textNode, offsetPoint); // use toString() method for convert to a string;

	getSelection(); // return object from mouse selected txt;
	getSelection().removeAll(); // remove all selection;




/**/

window.clientWidth / window.clientHeight // return all empty width / height without scroll bar
window.innerWidth / window.innerHeight // return all empty width / height with scroll bar

/**/


let bigİnt = 1535435n // Создать числовой тип данных BigInt
2 ** 3 // return 8

obj[Symbol.toPrimitive]('string') // obj.toString() then obj.valueOf()
obj[Symbol.toPrimitive]('number'/'default') // obj.valueOf() then obj.toString()

func.name // Return name of the function
func.length // содержит количество параметров функции в её объявлении. троеточие, обозначающее остаточные параметры не считается
func.bind(context, ...args) // Привязка контекста