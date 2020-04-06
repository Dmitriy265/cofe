<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

    <title>Кофе-машина</title>
  </head>
  <body style="background-color:indigo">>
   
    <div class="container">
      <div class="row coffee-machine">
        <div class="col-6 coffee-list">
          <div class="row flex-column p-3 h-100 justify-content-around">
            <div class="coffee-item col" onclick="buyCoffee('Американо', 50, this)">
              <img src="img/americano.png" alt="">
              <span>Американо - 50 руб.</span>
            </div>
            <div class="coffee-item col" onclick="buyCoffee('Капучино', 78, this)">
              <img src="img/cappuccino.png" alt="">
              <span>Капучино - 78 руб.</span>
            </div>
            <div class="coffee-item col" onclick="buyCoffee('Еспрессо', 21, this)">
              <img src="img/espresso.png" alt="">
              <span>Эспрессо - 21 руб.</span>
            </div>
            <div class="coffee-item col" onclick="buyCoffee('Латте',115, this)">
              <img src="img/latte.jpg" alt="">
              <span>Латтэ - 115 руб.</span>
            </div>
          </div>
        </div>
        <div class="col-6 coffee-oper">
          <div class="row p-3">
            <div class="col-6">
              <div class="display">
                <p class="display-text">Выберите себе кофе </p>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
                </div>
              </div> 
              <div class="coffee-cup">
                <img class="d-none" src="img/americano.png" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="input-group mb-3">
                <input type="text" class="form-control balance" placeholder="Баланс">
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">&#8381</span>
                </div>
              </div>
              <div class="atm">
                <img src="img/bill_acc.png" alt="">
            </div>
            <button class="btn btn-primary btn-block mt-2 change">Сдача</button>
            <div class="change-box"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="wallet">
      <img src="img/50rub.jpg" alt"" cost="50">
      <img src="img/100rub.jpg" alt"" cost="100">
      <img src="img/500rub.jpg" alt"" cost="500">
    </div>
    
  <script src="script.js"></script>
</body>