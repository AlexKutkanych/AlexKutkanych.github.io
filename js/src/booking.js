
var bookingBtn = document.querySelector("#booking__btn"),
    bookingModal = document.querySelector(".header-wrapper__booking-section"),
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
    days = document.querySelector(".calendar__days");

function showBookingModal(){
    bookingModal.classList.toggle("header-wrapper__booking-section_show");
    bookingBtn.classList.toggle("booking__btn_active");
}

function closeBookingModal(){
    bookingModal.classList.remove("header-wrapper__booking-section_show");
    bookingBtn.classList.remove("booking__btn_active");
}

  var orderInfo = {};

  function chooseTable(e) {
    if (e.target !== e.currentTarget) {
      var clickedItem = e.target.innerHTML;
      e.target.classList.toggle("table-chosen");
      console.log("Hello " + clickedItem);
      orderInfo.table = clickedItem;
    }
    e.stopPropagation();
  }

  function chooseDate(e) {
    if (e.target !== e.currentTarget) {
      var chosenDate = e.target.innerHTML;
      e.target.classList.toggle("red");
      console.log("Hello " + chosenDate);
      var getMonth = document.querySelector("#calendar__month");
      orderInfo.date = getMonth.innerHTML +" "+ chosenDate;
      calendarBtn.innerHTML = orderInfo.date;
    }
    e.stopPropagation();
  }



  function choosePeopleAmount(){
    orderInfo.people = selectPeopleAmount.value;
    orderInfo.time = selectTime.value;

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

    }
    calendarBlock.classList.remove("info-block__calendar_show");
  }


console.log(orderInfo);

bookingBtn.addEventListener("click", showBookingModal);
submitBookingBtn.addEventListener("click", choosePeopleAmount);
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



