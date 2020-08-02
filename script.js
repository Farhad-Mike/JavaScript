'use strict';

(async function getRequest() {
    let responce = fetch('https://next.json-generator.com/api/json/get/V1enUzl-Y', {
        method: 'GET'
    }).then(resolve => {
        console.log(resolve.headers.get('cache-control'))
        return resolve.json();
    }).then(resolve => console.log(resolve))
}())