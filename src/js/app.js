let userList = '../data.json';

let data = JSON.parse(userList);
console.log(data);



// Row generator
// generateRow(){
//     // проверка на параметры (id, name, phone, about ) пришли ли они или нет
//     let template = '';
//     let tr = document.createElement('tr');
//     tr.className = 'columnTr';
//
//     for(let i; i < data.length; i++) {
//
//     }
//
//     tr.innerHTML = template;
//     console.log(tr);
//     return tr;
// }