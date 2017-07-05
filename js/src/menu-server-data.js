//menu-filter via Resig

$(function(){
  var myPage = $('#mypage').html();

  var onlineMenu = [
    {name: 'Italian Ice-cream', desc: 'Vanilla, Coffee, Chocolate flavours available', price: '35', classCategory: 'food-result__dessert'},
    {name: 'Crostata di Marmellata', desc: 'Home made jam orange tarte', price: '110', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_crostata'},
    {name: 'Semifreddo al Caramello', desc: 'Vanilla, Coffee, Chocolate flavours available', price: '130', classCategory: 'food-result__dessert', classPicture: 'ood-result__pic_semifreddo'},
    {name: 'Red Wine (by glass)', desc: 'Some description of this tasty red wine', price: '55', classCategory: 'food-result__drinks food-result__drinks-alco', classPicture: 'food-result__pic_red-wine'},
    {name: 'Americano', desc: 'Natural black Italian coffee', price: '50', classCategory: 'food-result__drinks food-result__drinks-non-alco', classPicture: 'food-result__pic_americano'},
    {name: 'Spritz Royal', desc: 'Signature refreshing aperitif cocktail of Gin, White Vermouth, Aperol with a dash of Prosecco', price: '55', classCategory: 'food-result__drinks food-result__drinks-alco', classPicture: 'food-result__pic_spritz-royal'},
    {name: 'Negroni', desc: 'A classic aperitif cocktail found in Treviso, Italy consists of Gin, Red Vermouth and Campari', price: '55', classCategory: 'food-result__drinks food-result__drinks-alco', classPicture: 'food-result__pic_negroni'},
    {name: 'Margherita', desc: 'Tomato sauce, Mozzarella Cheese and Basil leaves', price: '120', classCategory: 'food-result__pizza', classPicture: 'food-result__pic_margherita'},
    {name: 'Napoletana', desc: 'Tomato sauce, Mozzarella Cheese, Anchovies and Capers', price: '130', classCategory: 'food-result__pizza', classPicture: 'food-result__pic_napoletana'},
    {name: 'Diavola', desc: 'Tomato sauce, Mozzarella Cheese and Spicy Salami', price: '160', classCategory: 'food-result__pizza', classPicture: 'food-result__pic_diavola'},
    {name: 'Frittura mista di Pesce', desc: 'Deep fried Prawns, Anchovies, Squid and Zucchini', price: '75', classCategory: 'food-result__soup', classPicture: 'food-result__pic_frittura'},
    {name: 'Verdure', desc: 'Rich custard base topped with a contrasting layer of hard caramel', price: '150', classCategory: 'food-result__pizza', classPicture: 'food-result__pic_verdure'},
    {name: 'Lasagna', desc: 'Pasta Layers, Bolognese sauce, Ham, Parmesan and Mozzarella Cheese', price: '70', classCategory: 'food-result__pasta', classPicture: 'food-result__pic_lasagna'},
    {name: 'Tortelli di Salsiccia', desc: 'Tuscan Hand-made Ravioli filled with Home-made Sausage in Meat sauce', price: '80', classCategory: 'food-result__pasta', classPicture: 'food-result__pic_tortelli'},
    {name: 'Spaghetti ai Frutti di Mare', desc: 'Spaghetti with Prawns, Clams, Mussels &amp; Squid in Tomato sauce', price: '130', classCategory: 'food-result__pasta', classPicture: 'food-result__pic_spaghetti'},
    {name: 'Farro di Mare', desc: 'Steamed Spelt with Squid,Prawns, Mussels &amp; Tomatoes, with Olive Oil, Lemon &amp; Parsley dressing served in a Parmesan Cheese Basket', price: '75', classCategory: 'food-result__soup', classPicture: 'food-result__pic_farro'},
    {name: 'Minestrone di verdure', desc: 'Hearty Vegetable soup', price: '75', classCategory: 'food-result__soup', classPicture: 'food-result__pic_minestrone'},
    {name: 'Zuppa di pesce', desc: 'Seafood soup with Prawns, Squids, Clams &amp; Mussels, served with toasted bread', price: '75', classCategory: 'food-result_soup', classPicture: 'food-result__pic_zuppa-di-pesce'},
    {name: 'Italian Ice-cream', desc: 'Vanilla, Coffee, Chocolate flavours available', price: '55', classCategory: 'food-result__dessert', classPicture: ''},
    {name: 'Italian Sorbet', desc: 'Orange, Coconut, Strawberry flavours available', price: '55', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_sorbet'},
    {name: 'Panna Cotta', desc: 'Italian Custard Cream with Caramel', price: '70', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_panna-cotta'},
    {name: 'Crème Brulee', desc: 'Rich custard base topped with a contrasting layer of hard caramel', price: '75', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_creme-brulee'},
    {name: 'Tiramisu', desc: 'All-time favourite', price: '80', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_tiramisu'},
    {name: 'Tortino caldo di cioccolato', desc: 'Melting chocolate cake', price: '95', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_tortino'},
    {name: 'Il Castagnaccio', desc: 'Classic Chestnut Tuscan Dessert. A real classic back home', price: '100', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_castagnaccio'}
  ];

    // console.log(str[0].price);

  localStorage.setItem("fullOnlineMenu", JSON.stringify(onlineMenu));
  var content = tmpl(myPage, {data: onlineMenu});

  $('main').append(content);

});
