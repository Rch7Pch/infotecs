// получение данных с сервера
async function getResponse() {
    let response = await fetch('https://raw.githubusercontent.com/Rch7Pch/infotecs/master/src/data.json');
    let rowUser = await response.json();
    rowUser = rowUser.splice(0, 10)

    let listRow = document.querySelector('.table');

    for (let key in rowUser) {

        listRow.innerHTML += `
            <tr class="rowTr">
              <td class="row rowFirstName">${rowUser[key].name.firstName}</td>
              <td class="row rowLastName">${rowUser[key].name.lastName}</td>
              <td class="row rowAbout">${rowUser[key].about}</td>
              <td class="row rowEyeColor">${rowUser[key].eyeColor}</td>
            </tr>
        `
    }

    //таблица
    let blockRow = document.querySelectorAll('.rowTr');
    let inputFirstName = document.querySelector('.firstName');
    let inputLastName = document.querySelector('.lastName');

    blockRow.forEach(block => {
        block.addEventListener('click', () => {
            inputFirstName.placeholder(`${rowUser[0].name.firstName}`)
            inputLastName.placeholder(`${rowUser[0].name.lastName}`)
        });
    });

}



getResponse();