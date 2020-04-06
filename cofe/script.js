"use strict"

let balance = document.querySelector(".balance");
let displayText = document.querySelector(".display-text");/*недстаточно средств в окошке*/

let progressBar = document.querySelector(".progress-bar");//
let coffeeCup = document.querySelector(".coffee-cup img");//
let coffeeStatus = "waiting"; /*
"cooking", "reddy"*/
coffeeCup.onclick = takeCoffee;// повесить событие как свойсво, -забрать кофе первый вариант, ниже добавление

/*coffeeCup.addEventListener("click", takeCoffee, par1, par2)//-второй вариант
coffeeCup.addEventListener("click", takeCoffee, par1, par2)
coffeeCup.addEventListener("click", takeCoffee, par1, par2)
coffeeCup.addEventListener("click", takeCoffee, par1, par2)

coffeeCup.addEventListener("click", buyCoffee, "Американо", 21)*/


/*coffeeCup.onclick = function() {
  takeCoffee();
}*/ // 
/*coffeeCup.onclick = function() {
  takeCoffee(this);
}*/ // 2 вариант забрать кофе

function buyCoffee(name, cost, elem) {//
   if (coffeeStatus != "waiting") {//
    return;//
  } //
  
  let afterBuyValue = +balance.value - cost;//
  if ( (balance.value - cost) < 0 || Number.isNaN( afterBuyValue)) {/*недостаточно средств...*/
    balance.style.border = "2px solid red";/*красный рамку в красный при недостатке средств*/
    balance.style.backgroundColor = "pink";/*красит в розовый фон при недостатке средств*/
    changeDisplayText("Недостаточно средств");//
    return;//
  }//
  balance.style.border = "none";//
  balance.style.backgroundColor = "white";/* при достатке назад в белый*/
  balance.value = (+balance.value - cost).toFixed(2);/*обрезка 2 цифр после точки*/
  cookCoffee(name, elem);//
}
function cookCoffee(name, elem) {//
  coffeeStatus = "cooking";//
  changeDisplayText(" Ваш " + name + " готовится ");// 
  
  let cupImg = elem.querySelector("img");//
  let cupSrc = cupImg.getAttribute("src");//
  coffeeCup.setAttribute("src", cupSrc);
  coffeeCup.style.opacity = "0%";//
  coffeeCup.classList.remove("d-none");//
  //coffeeCup.classList.add ("")//добавить класс//
  //coffeeCup.classList.remove("d-none");//убрать класс//
  //coffeeCup.classList.toggle("")//вкл/выкл класс//
  //coffeeCup.classList.contains ("d-none")//содержит ли// 
  
  let readyPercent = 0;//
  let cookingInterval = setInterval(() => {//
    readyPercent++//
    progressBar.style.width = readyPercent + "%";//
    coffeeCup.style.opacity = readyPercent + "%";//
    if (readyPercent == 100) {//
      coffeeStatus = "ready";//
      changeDisplayText(" Ваш " + name + " готов ! ");//
      coffeeCup.style.cursor = "pointer";//
      clearInterval(cookingInterval);//
    }//
  }, 100);//
}//

function takeCoffee() {
  if (coffeeStatus != "ready") {
    return;
  }// что б не бралось кофе, когда готовится  
  coffeeStatus = "waiting";
  coffeeCup.classList.add("d-none");//забрать кофе--- добавление к верхнему
  coffeeCup.style.cursor = "auto";
  progressBar.style.width = "0%";
  changeDisplayText("Выберите кофе");// когда взял кофе появится выберите кофе
}

  
  
function changeDisplayText(text) {//
  displayText.innerHTML = "<span>"+text+"</span>";//
}//


//-------------------------Drag` n Drop тащи и клади----------//перемещение купюр
let bills = document.querySelectorAll(".wallet img");

for(let i = 0; i < bills.length; i++) {
  bills[i].onmousedown = takeMoney;
  
}
function takeMoney() {
  event.preventDefault();// убираем призраки перетаскивания, изначально заложенные в браузере
  let bill = this;
  
  
  bill.style.position = "absolute";
  bill.style.transform = "rotate(90deg)";// поворот купюр
  
  let billCoords = bill.getBoundingClientRect();
  let billWidth = billCoords.width;
  let billHeight = billCoords.height;//длинна и высота
  
  /*console.log(billWidth, billHeight);
  console.log(event.clientX, event.clientY);*///-----ДЛЯ ПРОСМОТРА В КОНСОЛИ------//X Y координаты
  
  bill.style.top = event.clientY - billWidth/2 + "px";// купюра встает по центру курсора 
  bill.style.left = event.clientX - billHeight/2 + "px";// купюра встает по центру курсора 
  
  window.onmousemove = (evtnt) => {
   bill.style.top = event.clientY - billWidth/2 + "px";
   bill.style.left = event.clientX - billHeight/2 + "px";
  };
  
  bill. onmouseup = dropMoney;
}

function dropMoney() {
  window.onmousemove = null;
  let bill = this;
  let billCost = bill.getAttribute("cost");
  
  if (inAtm(bill)) {
    balance.value = +balance.value + +billCost
    bill.remove();//исчезновение купюр в атм появлениезначения суммы на дисплее//
  }
}

function inAtm(bill) {
  
  let billCoord = bill.getBoundingClientRect();
  let atm = document.querySelector(".atm");
  let atmCoord = atm.getBoundingClientRect();
  
  let billLeftTopCornerX = billCoord.x;
  let billLeftTopCornerY = billCoord.y;
  
  let billRightTopCornerX = billCoord.x + billCoord.width;
  let billRightTopCornerY = billCoord.y;// Координаты купюр//
  
  
  
  let atmLeftTopCornerX = atmCoord.x;
  let atmLeftTopCornerY = atmCoord.y;
  
  let atmRightTopCornerX = atmCoord.x + atmCoord.width;
  let atmRightTopCornerY = atmCoord.y;
  
  let atmLeftBottomCornerX = atmCoord.x;
  let atmLeftBottomCornerY = atmCoord.y + atmCoord.height/3;
  
  let atmRightBottomCornerX = atmCoord.x + atmCoord.width;
  let atmRightBottomCornerY = atmCoord.y + atmCoord.height/3;//Координаты АТМ приемника//
  
  
  if (
    billLeftTopCornerX >= atmLeftTopCornerX
    && billLeftTopCornerY >= atmLeftTopCornerY// Границы у атм для вставления купюр//
    && billRightTopCornerX <= atmRightTopCornerX
    && billRightTopCornerY >= atmRightTopCornerY//верх, лево и право// 
    
    && billLeftTopCornerX >= atmLeftBottomCornerX
    && billLeftTopCornerY <= atmLeftBottomCornerY//низ//
   ) {
     return true;
     
   } else {
     console.log(false);
   }
  
}  
//---------------------------------------------- СДАЧА-----------------------------------//  
  
 let changeBtn = document.querySelector(".change");//btn - сокращенно Bottom//
 changeBtn.onclick = takeChange;

 
 function takeChange() {
   
   if (balance.value <= 0) {
    changeBtn.onclick = takeChange; 
   return;
  }
  changeBtn.onclick = null;
  if (balance.value -10 >= 0) {
    setTimeout(() => {//звук
      tossCoin("10");
      balance.value -= 10; 
      return takeChange();//звук
    }, 300);// Выдача сдачи по 10//
  } else if (balance.value -5 >= 0) {
    setTimeout(() => {
      tossCoin("5");
      balance.value -= 5; 
      return takeChange();
    }, 300);// Выдача сдачи по 5//
  } else if (balance.value -2 >= 0) {
    setTimeout(() => {
      tossCoin("2");
      balance.value -= 2; 
      return takeChange();
    }, 300);// Выдача сдачи по 2//
  } else if (balance.value -1 >= 0) {
    setTimeout(() => {
      tossCoin("1");
      balance.value -= 1; 
      return takeChange();
    }, 300);// Выдача сдачи по 1//
  }
}
  function tossCoin(cost) { 
    let changeContainer = document.querySelector(".change-box")
    let changeContainerCoords =  changeContainer.getBoundingClientRect();
    let coinSrc = "";
    
    switch (cost) {
      case "10":
        coinSrc = "img/10rub.png";
        break;
      case "5":
        coinSrc = "img/5rub.png";
        break;
      case "2":
        coinSrc = "img/2rub.png";
        break;
      case "1":
        coinSrc = "img/1rub.png";
        break;
      
  }  
  
  /*changeContainer.innerHTML +=
  `<img src="${coinSrc}" stule="height: 50px">`*/
  
  let coin = document.createElement("img");
  coin.setAttribute("src", coinSrc);
  coin.style.height = "50px";
  coin.style.width = "50px";
  coin.style.cursor = "pointer";
  coin.style.display = "inline-block";
  coin.style.position = "absolute";
  
  
  changeContainer.append(coin); //прикрепить после внутри элемента
  /*changeContainer.prepend(coin);//прикрепить до внутри элемента
  changeContainer.after(coin); //после контейнера
  changeContainer.before(coin);//перед контейнером 
  changeContainer.replase(coin);//заменяет элементы */
  
  coin.style.top = Math.round(Math.random() * (changeContainerCoords.height - 53))+ "px";
  coin.style.left = Math.round(Math.random() * (changeContainerCoords.width - 53))+ "px";
  
  coin.onclick = () => coin.remove();
  
  let coinSound = new Audio("sound/coindrop.mp3");
  //coinSound.src = "sound/coindrop.mp3"// ---второй вариант добавления звука---
   coinSound.play();// ----------ЗВУК МОНЕТ-----------//
  
  
}


 
  
  



 