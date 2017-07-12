//menu-filter via Resig

// example

  // var test = {
  //   members:[
  //   {id:1, name:"hoge", text:"aaaaaaaaaaaaaa"},
  //   {id:9, name:"fuga", text:"bbbbbbbbbbbbbb"},
  //   {id:15, name:"hoge", text:"cccccccccccccc"},
  //   {id:22, name:"fuga", text:"dddddddddddddd"},
  //   {id:78, name:"hoge", text:"eeeeeeeeeeeeee"},
  //   {id:876, name:"fuga", text:"ffffffffffffff"},
  //   {id:1033, name:"hoge", text:"gggggggggggggg"},
  //   {id:7899, name:"fuga", text:"hhhhhhhhhhhhhh"}
  //   ]
  // }; // -> End of dataObject

  // var results = document.getElementById("food-wrapper__result");
  // results.innerHTML = tmpl("item_tmpl", test);



  var fullOnlineMenu = [
    {name: 'Italian Ice-cream', desc: 'Vanilla, Coffee, Chocolate flavours available', price: '35', classCategory: 'food-result__dessert', rating: 5},
    {name: 'Crostata di Marmellata', desc: 'Home made jam orange tarte', price: '110', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_crostata', rating: 4},
    {name: 'Semifreddo al Caramello', desc: 'Vanilla, Coffee, Chocolate flavours available', price: '130', classCategory: 'food-result__dessert', classPicture: 'ood-result__pic_semifreddo', rating: 4},
    {name: 'Red Wine (by glass)', desc: 'Some description of this tasty red wine', price: '55', classCategory: 'food-result__beverages food-result__beverages-alco', classPicture: 'food-result__pic_red-wine', rating: 5},
    {name: 'Americano', desc: 'Natural black Italian coffee', price: '50', classCategory: 'food-result__beverages food-result__beverages-non-alco', classPicture: 'food-result__pic_americano', rating: 5},
    {name: 'Spritz Royal', desc: 'Signature refreshing aperitif cocktail of Gin, White Vermouth, Aperol with a dash of Prosecco', price: '55', classCategory: 'food-result__beverages food-result__beverages-alco', classPicture: 'food-result__pic_spritz-royal', rating: 5},
    {name: 'Negroni', desc: 'A classic aperitif cocktail found in Treviso, Italy consists of Gin, Red Vermouth and Campari', price: '55', classCategory: 'food-result__beverages food-result__beverages-alco', classPicture: 'food-result__pic_negroni', rating: 5},
    {name: 'Margherita', desc: 'Tomato sauce, Mozzarella Cheese and Basil leaves', price: '120', classCategory: 'food-result__pizza', classPicture: 'food-result__pic_margherita', rating: 3},
    {name: 'Napoletana', desc: 'Tomato sauce, Mozzarella Cheese, Anchovies and Capers', price: '130', classCategory: 'food-result__pizza', classPicture: 'food-result__pic_napoletana', rating: 5},
    {name: 'Diavola', desc: 'Tomato sauce, Mozzarella Cheese and Spicy Salami', price: '160', classCategory: 'food-result__pizza', classPicture: 'food-result__pic_diavola', rating: 4},
    {name: 'Frittura mista di Pesce', desc: 'Deep fried Prawns, Anchovies, Squid and Zucchini', price: '75', classCategory: 'food-result__soup', classPicture: 'food-result__pic_frittura', rating: 5},
    {name: 'Verdure', desc: 'Rich custard base topped with a contrasting layer of hard caramel', price: '150', classCategory: 'food-result__pizza', classPicture: 'food-result__pic_verdure', rating: 5},
    {name: 'Lasagna', desc: 'Pasta Layers, Bolognese sauce, Ham, Parmesan and Mozzarella Cheese', price: '70', classCategory: 'food-result__pasta', classPicture: 'food-result__pic_lasagna', rating: 5},
    {name: 'Tortelli di Salsiccia', desc: 'Tuscan Hand-made Ravioli filled with Home-made Sausage in Meat sauce', price: '80', classCategory: 'food-result__pasta', classPicture: 'food-result__pic_tortelli', rating: 5},
    {name: 'Spaghetti ai Frutti di Mare', desc: 'Spaghetti with Prawns, Clams, Mussels &amp; Squid in Tomato sauce', price: '130', classCategory: 'food-result__pasta', classPicture: 'food-result__pic_spaghetti', rating: 5},
    {name: 'Farro di Mare', desc: 'Steamed Spelt with Squid,Prawns, Mussels &amp; Tomatoes, with Olive Oil, Lemon &amp; Parsley dressing served in a Parmesan Cheese Basket', price: '75', classCategory: 'food-result__soup', classPicture: 'food-result__pic_farro', rating: 5},
    {name: 'Minestrone di verdure', desc: 'Hearty Vegetable soup', price: '75', classCategory: 'food-result__soup', classPicture: 'food-result__pic_minestrone', rating: 5},
    {name: 'Zuppa di pesce', desc: 'Seafood soup with Prawns, Squids, Clams &amp; Mussels, served with toasted bread', price: '75', classCategory: 'food-result_soup', classPicture: 'food-result__pic_zuppa-di-pesce', rating: 5},
    {name: 'Italian Ice-cream Big', desc: 'Vanilla, Coffee, Chocolate flavours available', price: '55', classCategory: 'food-result__dessert', classPicture: '', rating: 4},
    {name: 'Italian Sorbet', desc: 'Orange, Coconut, Strawberry flavours available', price: '55', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_sorbet', rating: 2},
    {name: 'Panna Cotta', desc: 'Italian Custard Cream with Caramel', price: '70', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_panna-cotta', rating: 5},
    {name: 'Crème Brulee', desc: 'Rich custard base topped with a contrasting layer of hard caramel', price: '75', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_creme-brulee', rating: 5},
    {name: 'Tiramisu', desc: 'All-time favourite', price: '80', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_tiramisu', rating: 5},
    {name: 'Tortino caldo di cioccolato', desc: 'Melting chocolate cake', price: '95', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_tortino', rating: 3},
    {name: 'Il Castagnaccio', desc: 'Classic Chestnut Tuscan Dessert. A real classic back home', price: '100', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_castagnaccio', rating: 5}
  ];

  localStorage.setItem("fullOnlineMenu", JSON.stringify(fullOnlineMenu));
  var onlineMenuData = localStorage.getItem("fullOnlineMenu");
  var onlineMenu = JSON.parse(onlineMenuData);

  //get to html via resig template
  
  var results = document.getElementById("food-wrapper__result");
  results.innerHTML = tmpl("mypage", {data: onlineMenu});
    
