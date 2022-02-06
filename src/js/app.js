// получение данных с сервера
async function getResponse() {
    let response = await fetch('https://raw.githubusercontent.com/Rch7Pch/infotecs/master/src/data.json');
    let rowUser = await response.json();
    rowUser = rowUser.splice(0, 10)

    let key;
    let listRow = document.querySelector('.table');

    for (key in rowUser) {

        listRow.innerHTML += `
            <tr class="columnTr">
              <td class="rowFirstName">${rowUser[key].name.firstName}</td>
              <td class="rowLastName">${rowUser[key].name.lastName}</td>
              <td class="rowPhone"><a href='${rowUser[key].phone}'>${rowUser[key].phone}</a></td>
              <td class="rowAbout">${rowUser[key].about}</td>
              <td class="rowEyeColor">${rowUser[key].eyeColor}</td>
            </tr>
        `


        console.log(listRow)
    }

}



getResponse();