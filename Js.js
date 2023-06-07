let counterAdultos = 0;           //считаем взрослых

function onClickcard1(el) {
  if (counterAdultos <= 5) {
    counterAdultos++;
    el.innerHTML = "asientos de adulto: " + counterAdultos;
    el.style.background = "red";
  }
  else counterAdultos = 0;
}
let counterNiños = 0;             //считаем детей
function onClickcard2(el) {
  if ((counterNiños <= 3) && (counterAdultos > 0)) {        //проверка на наличие взрослых
    counterNiños++;
    el.innerHTML = "asientos de niños: " + counterNiños;
    el.style.background = "red";
  }
  else counterNiños = 0;
}
let artaccion = document.getElementsByName("cell-1");  
// let artaccion = document.getElementById("cell-1");       //ищем азвание атракциона
artaccion.title = "MONTAÑA RUSA"


function onClickconfirmar(el) {            //функция кнопки заказ
if ((counterNiños != 0)  || (counterAdultos != 0) || (fecha === NaN) || (fecha === null) || (fecha ===  "")) {
  el.innerHTML = "accepto";
  el.style.background = "red";
  fecha = document.getElementById("fecha").value;
  hora = document.getElementById("hora").value;

  console.log(artaccion.title);
  console.log(counterAdultos);
  console.log(counterNiños);
  console.log(fecha);
  console.log(hora);
  console.log(artaccion);
  
}
}

// let arroy = document.getElementsByName("button").value;
// for (let i = 0; i < arroy.length; i++) {
//   console.log(arroy[i].innerHTML);
// }


// Получаем таблицу
var table = document.getElementById('myTable');
    
// Получаем заголовок таблицы
var thead = table.tHead;

// Получаем тело таблицы
var tbody = table.tBodies[0];

// Создаем строки и ячейки таблицы
for (var i = 0; i < 10; i++) {
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  td1.textContent = 'Ячейка 1, строка ' + (i+1);
  td2.textContent = 'Ячейка 2, строка ' + (i+1);
  td3.textContent = 'Ячейка 3, строка ' + (i+1);
  td4.textContent = 'Ячейка 4, строка ' + (i+1);
  td5.textContent = 'Ячейка 5, строка ' + (i+1);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tbody.appendChild(tr);
}
