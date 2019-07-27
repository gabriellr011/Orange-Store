$(document).ready(function () {
    M.AutoInit();
    $('.modal').modal();

    var shoppingCart = [];

    function generateCards(data){
        var output = "";
        data.forEach(function (element) {
            output += 
            '<div class="col s12 m6 l4 xl3" >'+
                '<div class="card grey darken-3">'+
                    '<div class="card-content white-text">'+
                        '<div class="card-image" style="height:200px;">' +
                            '<img src="'+element.img+'">'+
                        '</div>'+
                        '<span class="card-title flow-text" style="padding-top: 10px;">'+element.title+'</span>'+
                        '<p  class="center-align">10x de R$' + element.priceSlice + ' <br> sem juros no cartão</p>' +
                        '<h4 class="blue-text text-darken-1">à vista R$'+element.priceWhole+'</h4>'+
                    '</div>'+
                    '<div class="card-action center-align">' +
                        '<btn class="waves-effect waves-light btn-flat orange-text"><b>Detalhes&ensp;<i class="material-icons">calendar_view_day</i></b></btn>' +
                        '<btn class="green-text waves-effect waves-light btn-flat" id="btn_card' + element.id + '"><b>Comprar&ensp;<i class="material-icons">add_shopping_cart</i></b></btn>' +
                    '</div>'+
                '</div>'+
            '</div>';
        });
        $('#cards').html(output);
        data.forEach(function (element) {
            $('#btn_card' + element.id).click(function () {
                var boo = true;
                shoppingCart.forEach(function (e) {
                    if (e === element) boo = false;
                });
                if (boo) shoppingCart.push(element);
                console.log(shoppingCart);
            });
        });
   }

   var cards = [
       {
           id: 0,
           img: 'assets/g933-hero.png',
           title: 'HEADSET LOGITECH G933 ARTEMIS SPECTRUM 7.1',
           priceSlice: '71,99',
           priceWhole: '633,51'
       },
       {
           id: 1,
           img: 'assets/g502-hero.png',
           title: 'MOUSE PARA JOGOS DE ALTO DESEMPENHO G502 HERO',
           priceSlice: '71,99',
           priceWhole: '633,51'
       },
       {
           id: 2,
           img: 'assets/g513-hero.png',
           title: 'TECLADO MECÂNICO LIGHTSYNC RGB PARA JOGOS COM G513',
           priceSlice: '71,99',
           priceWhole: '633,51'
       },
       {
           id: 3,
           img: 'assets/powerplay.jpeg',
           title: 'HEADSET LOGITECH G933 ARTEMIS SPECTRUM 7.1',
           priceSlice: '71,99',
           priceWhole: '633,51'
       }
   ];

   $('#cards').ready(function (){
       generateCards(cards);
       
   });

   function generateShoppingCart() {
       var output = "";
        shoppingCart.forEach(function (element) {
            output += 
            '<li class="collection-item scale-transition" id="list' + element.id + '">' +
                '<div>' + element.title + '<a class="secondary-content red-text waves-effect waves-light" id="btn_delete' + element.id + '"><i class="material-icons">close</i></a></div>' +
            '</li>';
        });
        $('#shopping_cart').html(output);
        shoppingCart.forEach(function (element) {
            $('#btn_delete' + element.id).click(function () {
                var i = shoppingCart.indexOf(element);
                if (i > -1) {
                    shoppingCart.splice(i, 1);
                    $('#list'+element.id).hide();
                }
            });
        });
   }

    $('#btn_cart').click(function(){
        generateShoppingCart();
    })
});

