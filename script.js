const input = document.querySelector(".search__input");
const button = document.querySelector(".search__button");
const select = document.querySelector(".search__select");

addEventListener("click", submitRequest);

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