let xhr = new XMLHttpRequest();
xhr.open('GET/POST/...', 'URL', true / false, 'username', 'password');
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
xhr.open("POST", '/url');
xhr.send(formData);

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