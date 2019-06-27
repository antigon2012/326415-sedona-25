var searchHotels = document.querySelector(".form-search");
var modalSearch = document.querySelector(".form-container");

searchHotels.addEventListener("click", function() {
  modalSearch.classList.toggle("form-hide");
  modalSearch.classList.add("form-animation");
});
