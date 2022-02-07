var rowUser = [];
var id = '';

var inputFirstName = document.querySelector('.firstName');
var inputLastName = document.querySelector('.lastName');
var inputPhone = document.querySelector('.phone');
var inputAbout = document.querySelector('.about');
var inputEyeColor = document.querySelector('.eyeColor');

const updateButtonDate = () => {
    const el = {
        id,
        name: {
            firstName: inputFirstName.value,
            lastName: inputLastName.value
        },
        phone: inputPhone.value,
        about: inputAbout.value,
        eyeColor: inputEyeColor.value
    };
    rowUser = rowUser.map(x => {
        if(x.id === id) {
            x = {...el}
        }
        return x
    });
    // update localStorage
    window.localStorage.setItem('data', JSON.stringify(rowUser));

    var i, elements = document.getElementsByClassName('rowTr');
    for (i = elements.length; i--;) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    getResponse();
}

const handlerChoose = (el) => {
    //get row
    id = el.id;
    inputFirstName.value = (`${el.name.firstName}`);
    inputLastName.value = (`${el.name.lastName}`);
    inputPhone.value = (`${el.phone}`);
    inputAbout.value = (`${el.about}`);
    inputEyeColor.value = (`${el.eyeColor}`);
}

// получение данных с сервера
async function getResponse() {
    if(window.localStorage.getItem('data')){
        rowUser = [...JSON.parse(window.localStorage.getItem('data'))];
    } else {
        let response = await fetch('https://raw.githubusercontent.com/Rch7Pch/infotecs/master/src/data.json');
        rowUser = await response.json();
        rowUser = rowUser.splice(0, 10);
        window.localStorage.setItem('data', JSON.stringify(rowUser));
    }

    let listRow = document.querySelector('.table');

    rowUser.forEach((x) => {
        listRow.innerHTML += `
            <tr class="rowTr" onclick='handlerChoose(` + JSON.stringify(x) + `)'>
              <td class="row rowFirstName">${x.name.firstName}</td>
              <td class="row rowLastName">${x.name.lastName}</td>
              <td class="row rowAbout">${x.about}</td>
              <td class="row rowEyeColor"><span class="square" style="background: ${x.eyeColor}"></span></td>
            </tr>
        `
    });

}



getResponse();