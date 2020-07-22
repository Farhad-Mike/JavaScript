click           // происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
dbclick         // Вызывается двойным кликом на элементе.
contextmenu     // происходит, когда кликнули на элемент правой кнопкой мыши.
mouseover       // когда мышь наводится на
mouseout        // покидает элемент.
mousedown       // когда нажали
mouseup         // отжали кнопку мыши на элементе.
mousemove       // при движении мыши.
mouseenter      // Переходы внутри элемента, на его потомки и с них, не считаются. События mouseenter/mouseleave не всплывают.
mouserleave     // Переходы внутри элемента, на его потомки и с них, не считаются. События mouseenter/mouseleave не всплывают.
submit          // пользователь отправил форму <form>.
focus           // пользователь фокусируется на элементе, например нажимает на <input>. не всплывают
blur            // пользователь теряет фокус. не всплывают
focusin         // такие же, как и focus/blur, но они всплывают
focusout        // такие же, как и focus/blur, но они всплывают
change          // Событие change срабатывает по окончании изменения! элемента. Для текстовых <input> это означает, что событие происходит при потере фокуса. Для других элементов: select, input type=checkbox/radio событие запускается сразу после изменения значения
input           // срабатывает каждый раз при изменении значения. В отличие от событий клавиатуры, оно работает при любых изменениях значений, даже если они не связаны с клавиатурными действиями: вставка с помощью мыши или распознавание речи при диктовке текста.
cut             // Эти события происходят при вырезании/копировании/вставке данных. Мы также можем использовать event.preventDefault() для предотвращения действия по умолчанию, и в итоге ничего не скопируется/не вставится.
copy            // Эти события происходят при вырезании/копировании/вставке данных. Мы также можем использовать event.preventDefault() для предотвращения действия по умолчанию, и в итоге ничего не скопируется/не вставится.
paste           // Эти события происходят при вырезании/копировании/вставке данных. Мы также можем использовать event.preventDefault() для предотвращения действия по умолчанию, и в итоге ничего не скопируется/не вставится.
keydown         // когда пользователь нажимает
keyup           // отпускает клавишу.
dragstart       // начать Drag’n’Drop
dragend         // закончить Drag’n’Drop
submit          // используется для проверки (валидации) формы перед её отправкой на сервер или для предотвращения отправки и обработки её с помощью JavaScript.
scroll          // позволяет реагировать на прокрутку страницы или элемента
load            // браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.). load на объекте window
beforeunload    // пользователь покидает страницу. Мы можем проверить, сохранил ли он изменения и спросить, на самом ли деле он хочет уйти.
unload          // пользователь почти ушёл, но мы всё ещё можем запустить некоторые операции, например, отправить статистику.
DOMContentLoaded    // браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть ещё не загружены. срабатывает на объекте document.
transitionend   // когда CSS-анимация завершена
selectstart     // когда с elem начинается выделение, например пользовать начинает двигать мышкой с зажатой кнопкой.
selectionchange // когда выделение изменено. этот обработчик можно поставить только на document

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
event.type;             // Тип события, в данном случае "click".
event.currentTarget;    // Элемент, на котором сработал обработчик. Значение – обычно такое же, как и у this, но если обработчик является функцией-стрелкой или при помощи bind привязан другой объект в качестве this, то мы можем получить элемент из event.currentTarget
event.target;           // the most bottom element on whitch has called event; Самый глубокий элемент, который вызывает событие.  это «целевой» элемент, на котором произошло событие, в процессе всплытия он неизменен.
event.relatedTarget;    //  это элемент, с которого курсор ушёл (relatedTarget → target) или это элемент, на который курсор перешёл (target → relatedTarget). Свойство relatedTarget может быть null Это нормально и означает, что указатель мыши перешёл не с другого элемента, а из-за пределов окна браузера. Или же, наоборот, ушёл за пределы окна..
event.stopPropagation(); // останавливает всплытие события, но на самом элементе обработаются все соответствующиеся события.
event.stopImmediatePropagation(); // останавливает всплытие и так же предотвращает все соответствующие события на самом элементе.
event.preventDefault(); // Для отмены действия браузера по умолчанию при срабатывании события. event.preventDefault() передаст false для кастомного event в elem.dispatchEvent(event)
event.defaultPrevented; // установлено в true, если действие по умолчанию было предотвращено, и false, если нет.
event.eventPhase;       // 1 capture or 2 target or 3 bubble;
event.which;            // 1 == left, 2 == center, 3 == right mouse buttons; and for discover keyboard keydown, keyup, keypress events;
event.deltaY;           // how much has been scrroled with wheel;
event.deltaX;
event.deltaZ;
event.code;             // физический код клавиши
event.key;              // позволяет получить символ
event.repeat;           // Для событий, вызванных автоповтором, у объекта события свойство event.repeat равно true
event.shiftKey;         // равно true, если во время события была нажата соответствующая клавиша.
event.ctrlKey;          // равно true, если во время события была нажата соответствующая клавиша.
event.metaKey;          // равно true, если во время события была нажата соответствующая клавиша.
event.altKey;           // равно true, если во время события была нажата соответствующая клавиша.
event.lengthComputable; // false/true неизвестный рамер либо нулевой размер тела. Только при получении ответа с сервера.
event.loaded;           // Кол-во загруженных байтов.
event.total;            // Общее кол-во байтов.
event.reason;           // причина закрытия соединения.
event.wasClean;         // true/false чистое закрытие или обрыв
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