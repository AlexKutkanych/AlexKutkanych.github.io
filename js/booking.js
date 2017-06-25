console.log("asd");

var bookingBtn = document.querySelector("#booking__btn"),
    closeBookingModalBtn = document.querySelector(".booking-section__close-btn");

var option = document.querySelectorAll("option");

function showBookingModal(){
    joinUsModal.classList.toggle("header-wrapper__registration_show");
    bookingBtn.classList.toggle("booking__btn_active");
}

bookingBtn.addEventListener("click", showBookingModal);
