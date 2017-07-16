//booking block

var bookingBtn = document.querySelector("#booking__btn"),
    bookingModalBlock = document.querySelector(".header-wrapper__booking-section"),
    bookingModal = document.querySelector("#booking-section__modal"),
    closeBookingModalBtn = document.querySelector(".booking-section__close-btn"),
    submitBookingBtn = document.querySelector("#submit-booking"),
    continueBookingBtn = document.querySelector("#continue-booking"),
    bookingResult = document.querySelector(".info-block__result"),
    selectPeopleAmount = document.querySelector("#info-block__people-amount"),
    selectTime = document.querySelector("#info-block__select-time");
    tables = document.querySelector(".table-block__table-scheme"),
    alertMessagePeople = document.querySelector(".booking__alert-message_people"),
    alertMessageDate = document.querySelector(".booking__alert-message_date"),
    alertMessageTime = document.querySelector(".booking__alert-message_time"),
    alertMessageTable = document.querySelector(".booking__alert-message_table"),
    days = document.querySelector(".calendar__days"),
    keys = {37: 1, 38: 1, 39: 1, 40: 1};

function showBookingModal(){
    bookingModalBlock.classList.toggle("header-wrapper__booking-section_show");
    bookingBtn.classList.toggle("booking__btn_active");
    bookingModal.style.display = "block";
    disableScroll();
}

function closeBookingModal(){
    bookingModalBlock.classList.remove("header-wrapper__booking-section_show");
    bookingBtn.classList.remove("booking__btn_active");
    bookingModal.style.display = "none";
    enableScroll();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == bookingModal) {
      closeBookingModal();
      closeProceedBookingModal();
    }
};

//obj for booking information

var orderInfo = {people: '', time: '', date: '',table:''};

function chooseTable(e) {
  var tablesChosen = [];
  var target = e.target;
  if (target.className == 'table-scheme__table-number') {
    var clickedItem = target.innerHTML;
    target.classList.add("table-chosen");
  } else {
    target.classList.remove("table-chosen");
  }

  //push number of table to array if it was selected

  if(!target.classList.contains("table-chosen")){
    orderInfo.table = '';
    continueBookingBtn.style.display = "none";
  } else {
    orderInfo.table = clickedItem;
  }
}


function chooseDate(e) {
  if (e.target !== e.currentTarget) {
    var chosenDate = e.target.innerHTML;
    var getMonth = document.querySelector("#calendar__month");
    orderInfo.date = getMonth.innerHTML +" "+ chosenDate;
    calendarBtn.innerHTML = orderInfo.date;
  }
}

function orderSubmition(){
  orderInfo.people = selectPeopleAmount.value;
  orderInfo.time = selectTime.value;
  var orderInfoSave = localStorage.setItem("orderInfo", JSON.stringify(orderInfo));

  if(orderInfo.people === ''){
    alertMessagePeople.style.display = "block";
  } else {
    alertMessagePeople.style.display = "none";
  }

  if(orderInfo.time === ''){
    alertMessageTime.style.display = "block";
  } else {
    alertMessageTime.style.display = "none";
  }

  if(orderInfo.table === ''){
    alertMessageTable.style.display = "block";
  } else {
    alertMessageTable.style.display = "none";
  }


  if(calendarBtn.innerHTML === "Select date") {
    alertMessageDate.style.display = "block";
  } else {
    alertMessageDate.style.display = "none";
  }



  if (orderInfo.people !== '' && orderInfo.time !== '' && orderInfo.date !== '' && orderInfo.table !== ''){
    continueBookingBtn.style.display = "block";
    var test = localStorage.setItem("order1", JSON.stringify(orderInfo));

  }
  calendarBlock.classList.remove("info-block__calendar_show");
}

bookingBtn.addEventListener("click", showBookingModal);
submitBookingBtn.addEventListener("click", orderSubmition);
tables.addEventListener("click", chooseTable);
closeBookingModalBtn.addEventListener("click", closeBookingModal);
days.addEventListener("click", chooseDate);



//booking calendar

var calendarBtn = document.querySelector("#info-block__date-btn"),
    calendarBlock = document.querySelector(".info-block__calendar");
console.log(days);

function showCalendar(){
  calendarBlock.classList.toggle("info-block__calendar_show");
}

calendarBtn.addEventListener("click", showCalendar);
