const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");
const submitButton = document.querySelector(".submit");
const API_URL = "http://localhost:5000/woofs";

form.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const content = formData.get("content");
    const woof = { name, content };

    form.style.display = "none";
    loadingElement.className += "active";

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(woof),
        headers: {
            "content-type": "application/json"
        }
    });
});
