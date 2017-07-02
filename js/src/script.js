//PAGINATION

// (function($){
//     $.fn.extend({
//         MyPagination: function(options) {
//             var defaults = {
//                 height: 900,
//                 fadeSpeed: 400
//             };
//             var options = $.extend(defaults, options);

//             // Создаем ссылку на объект
//             var objContent = $(this);

//             // Внутренние переменные
//             var fullPages = new Array();
//             var subPages = new Array();
//             var height = 0;
//             var lastPage = 1;
//             var paginatePages;

//             // Функция инициализации
//             init = function() {
//                 objContent.children().each(function(i){
//                     if (height + this.clientHeight > options.height) {
//                         fullPages.push(subPages);
//                         subPages = new Array();
//                         height = 0;
//                     }

//                     height += this.clientHeight;
//                     subPages.push(this);
//                 });

//                 if (height > 0) {
//                     fullPages.push(subPages);
//                 }

//                 // Оборачиваем каждую полную страницу
//                 $(fullPages).wrap("<div class='food-result__page'></div>");

//                 // Скрываем все обернутые страницы
//                 objContent.children().hide();

//                 // Создаем коллекцию для навигации
//                 paginatePages = objContent.children();

//                 // Показываем первую страницу
//                 showPage(lastPage);

//                 // Выводим элементы управления
//                 showPagination($(paginatePages).length);
//             };

//             // Функция обновления счетчика
//             updateCounter = function(i) {
//                 $('#page_number').html(i);
//             };

//             // Функция вывода страницы
//             showPage = function(page) {
//                 i = page - 1;
//                 if (paginatePages[i]) {

//                     // Скрываем старую страницу, показываем новую
//                     $(paginatePages[lastPage]).fadeOut(options.fadeSpeed);
//                     lastPage = i;
//                     $(paginatePages[lastPage]).fadeIn(options.fadeSpeed);

//                     // и обновлем счетчик
//                     updateCounter(page);
//                 }
//             };


//             // Функция вывода навигации (выводим номера страниц)
//             showPagination = function(numPages) {
//                 var pagins = '';
//                 for (var i = 1; i <= numPages; i++) {
//                     pagins += '<li class="pagination__list-item"><a href="#" class="pagination__link" onclick="showPage(' + i + '); return false;">' + i + '</a></li>';
//                 }
//                 $('.pagination li:first-child').after(pagins);
//             };



//             // Выполняем инициализацию
//             init();

//             // Привязываем два события - нажатие на кнопке "Предыдущая страница"
//             $('.pagination #prev').click(function(e) {
//                 e.preventDefault();
//                 showPage(lastPage);
//             });
//             // и "Следующая страница"
//             $('.pagination #next').click(function(e) {
//                 e.preventDefault();
//                 showPage(lastPage+2);
//             });

//         }
//     });
// })(jQuery);

// // Инициализация
// jQuery(window).load(function() {
//     $('#food-wrapper__result').MyPagination({height: 2000, width: 800, fadeSpeed: 0});
// });


//sORT

// var sortBlock = document.querySelector("#sort-block__sorting"),
// 	container = document.querySelector(".food-wrapper__result"),
// 	contents = document.querySelectorAll(".food-result__price"),
// 	food = document.querySelector(".food-result"),
// 	list = [];
//
// function sortByPriceAscending() {
//
// 	for(var i=0; i<contents.length; i++){
// 	    list.push(contents[i]);
// 	}
//
// 	list.sort(function(a, b){
// 		var aa = parseInt(a.innerHTML.substring(1));
// 		var bb = parseInt(b.innerHTML.substring(1));
// 		return aa < bb ? -1 : (aa > bb ? 1 : 0);
// 	});
//
// 	list.reverse();
//
// 	for(var k=0; k<list.length; k++){
// 	    // console.log(list[i].innerHTML);
// 		container.insertBefore(list[k].parentNode, container.firstChild);
// 	}
// }
//
//
// function sortByPriceDescending() {
//
// 	for(var i=0; i<contents.length; i++){
// 	    list.push(contents[i]);
// 	}
//
// 	list.sort(function(a, b){
// 		var aa = parseInt(a.innerHTML.substring(1));
// 		var bb = parseInt(b.innerHTML.substring(1));
// 		return aa < bb ? -1 : (aa > bb ? 1 : 0);
// 	});
//
// 	for(var k=0; k<list.length; k++){
// 	    // console.log(list[i].innerHTML);
// 		container.insertBefore(list[k].parentNode, container.firstChild);
// 	}
// }
//
// sortBlock.addEventListener("change", function(){
// 	if (sortBlock.value === "sort-descending"){
// 		sortByPriceDescending();
// 	} else if (sortBlock.value === "sort-ascending") {
// 		sortByPriceAscending();
//
// 	} else {
//
// 	}
// });




// function toLocalStorage(e){
//   e.preventDefault();
//   validateSignupForm();
//   addNewUser();
//   // for(var i = 0; i < 5; i++) {
//     allusers.push(addNewUser());
//
//     console.log(allusers);
//   // }
//   //write to localStorage
//   for (var i =0; i < allusers.length; i++){
//     var savedUser = localStorage.setItem("user"+[i], JSON.stringify(allusers[i]));
//   }
// }
//
//
// function addNewUser(){
//   //create new user
//   user = {
//     name: signupNameField.value,
//     email: signupEmailField.value,
//     password: signupPassField.value
//   };
//
//   return user;
//
// }
//
//
// function validateSignupForm(e){
//     // e.preventDefault();
//     if (!regexpUsername.test(signupNameField.value)) {
//       errors[errors.length] = "You must enter valid Name .";
//     }
//
//     if (!regexpEmail.test(signupEmailField.value)) {
//       errors[errors.length] = "You must enter a valid email address.";
//    }
//
//    if (!regexpPassword.test(signupPassField.value)) {
//       errors[errors.length] = "You must enter a valid Password ";
//    }
//
//    if (!regexpPassword.test(signupPassRepeatField.value)) {
//       errors[errors.length] = "You must enter similar Password ";
//    }
//     // checkPassRepeat();
//     addNewUser();
//
//   if (errors.length > 0) {
//     reportErrors(errors);
//     return false;
//   } else {
//     closeJoinUsModal();
//     clearSignupInputs();
//     alert("We sent you a link to prove email address. Check your email "+ signupEmailField.value);
//   }
//   errors = [];
//    return true;
// }
//
//
// function reportErrors(errors){
//   var msg = "Please Enter Valide Data...\n";
//   for (var i = 0; i<errors.length; i++) {
//    var numError = i + 1;
//     msg += "\n" + numError + ". " + errors[i];
//   }
//   alert(msg);
// }
//
// //clear signup inputs after registration
// function clearSignupInputs(){
//   for (var i = 0; i < allSignupInputs.length; i++){
//     allSignupInputs[i].value = "";
//   }
// }
//
// function showSentEmailModal(){
//
// }
