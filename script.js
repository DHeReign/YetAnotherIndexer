const input = document.querySelector(".search__input");
const button = document.querySelector(".search__button");
const select = document.querySelector(".search__select");

button.addEventListener("click", submitRequest);

function submitRequest(event) {
    event.preventDefault();

    const value = input.value;
    const searchEngine = select.value;

    let params;

    if(searchEngine === "google" || searchEngine === "bing") {
        params = "search?q=";
    } else if(searchEngine === "yahoo") {
        params = "search?p=";
    } else if(searchEngine === "duckduckgo") {
        params = "?q=";
    }

    window.location.href = `https://www.${searchEngine}.com/${params}` + value;
}

document.addEventListener("DOMContentLoaded", function() {
    const select = document.querySelector(".search__select");
    const savedEngine = localStorage.getItem("searchEngine");
    
    if (savedEngine) {
        select.value = savedEngine;
    }
    

    select.addEventListener("change", function () {
        localStorage.setItem("searchEngine", select.value);
    });
});
