click           // происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
contextmenu     // происходит, когда кликнули на элемент правой кнопкой мыши.
mouseover       // когда мышь наводится на
mouseout        // покидает элемент.
mousedown       // когда нажали
mouseup         // отжали кнопку мыши на элементе.
mousemove       // при движении мыши.
submit          // пользователь отправил форму <form>.
focus           // пользователь фокусируется на элементе, например нажимает на <input>.
keydown         // когда пользователь нажимает
keyup           // отпускает клавишу.
DOMContentLoaded    // когда HTML загружен и обработан, DOM документа полностью построен и доступен.
transitionend   // когда CSS-анимация завершена

/////    event Object    /////

event.isTrusted;        // return true/false. принимает значение true для событий, порождаемых реальными действиями пользователя, и false для генерируемых кодом.
event.clientY;          // Координаты курсора в момент клика относительно окна, для событий мыши.
event.clientX;          // Координаты курсора в момент клика относительно окна, для событий мыши.
event.pageX;            // относительно документа позиция мыши
event.pageY;
event.offsetX;          // относительно родительского элемента
event.offsetY;
event.screenX;          // like event.clientX;
event.screenY;          // like event.clientY;
event.touches[0].clientX; // the prop isn't exist for .ontouchend;
event.touches[0].clientY;
event.changedTouches[0].clientX;
event.changedTouches[0].clientY; // the prop exist in all touch events;
event.target.name;      // get name attr from input elem and matches elements;
event.type;             // Тип события, в данном случае "click".
event.currentTarget;    // Элемент, на котором сработал обработчик. Значение – обычно такое же, как и у this, но если обработчик является функцией-стрелкой или при помощи bind привязан другой объект в качестве this, то мы можем получить элемент из event.currentTarget
event.target;           // the most bottom element on whitch has called event; Самый глубокий элемент, который вызывает событие.  это «целевой» элемент, на котором произошло событие, в процессе всплытия он неизменен.
event.stopPropagation(); // останавливает всплытие события, но на самом элементе обработаются все соответствующиеся события.
event.stopImmediatePropagation(); // останавливает всплытие и так же предотвращает все соответствующие события на самом элементе.
event.preventDefault(); // Для отмены действия браузера по умолчанию при срабатывании события. event.preventDefault() передаст false для кастомного event в elem.dispatchEvent(event)
event.defaultPrevented; // установлено в true, если действие по умолчанию было предотвращено, и false, если нет.
event.eventPhase;       // 1 capture or 2 target or 3 bubble;
event.relatedTarget;
event.which;            // 1 == left, 2 == center, 3 == right mouse buttons; and for discover keyboard keydown, keyup, keypress events;
event.deltaY;           // how much has been scrroled with wheel;
event.deltaX;
event.deltaZ;
event.keyCode;          // work on all browser except on the IE. Works like event.which; keyCode work only for keydown and keyup;
event.charCode;         // work only for event 'keypress' and only for symbol;
{ keydown, keypress/*only for symbols and return symbol for lower or uppercase*/, keyup }
event.shiftKey;
event.ctrlKey;
event.metaKey;
event.altKey;
event.lengthComputable; // false/true неизвестный рамер либо нулевой размер тела. Только при получении ответа с сервера.
event.loaded;           // Кол-во загруженных байтов.
event.total;            // Общее кол-во байтов.
event.reason;           // причина закрытия соединения.
event.wasClean;         // true/false чистое закрытие или обрыв
event.code;
event.origin;           // При кросс-доменных запросах появится. Откуда пришли данные (домен);
event.reason;
event.data;
event.propertyName;     // Свойство, анимация которго завершилась.
event.elepsedTime;      // Время (в секундах), которое заняла анимация, без учета transition-delay.
var event = new Event('event type', { bubble: true / false, cancelable: true / false }); // По умолчанию оба свойства установлены в false: {bubbles: false, cancelable: false} У второго аргумента-объекта есть дополнительное свойство detail, в котором можно указывать информацию для передачи в событие.
var event = new CustomEvent('event type', { bubble: true / false, cancelable: true / false, detail: {} }); // У второго аргумента-объекта есть дополнительное свойство detail, в котором можно указывать информацию для передачи в объект событие.
new UIEvent()           // Для некоторых конкретных типов событий есть свои специфические конструкторы. Специфический конструктор позволяет указать стандартные свойства для данного типа события Например, clientX/clientY для события мыши
new FocusEvent()        // Для некоторых конкретных типов событий есть свои специфические конструкторы. Специфический конструктор позволяет указать стандартные свойства для данного типа события Например, clientX/clientY для события мыши
new MouseEvent()        // Для некоторых конкретных типов событий есть свои специфические конструкторы. Специфический конструктор позволяет указать стандартные свойства для данного типа события Например, clientX/clientY для события мыши
new WheelEvent()        // Для некоторых конкретных типов событий есть свои специфические конструкторы. Специфический конструктор позволяет указать стандартные свойства для данного типа события Например, clientX/clientY для события мыши
new KeyboardEvent()     // Для некоторых конкретных типов событий есть свои специфические конструкторы. Специфический конструктор позволяет указать стандартные свойства для данного типа события Например, clientX/clientY для события мыши
elem.dispatchEvent(event) // После того, как кастомный объект события создан, мы должны запустить его на элементе