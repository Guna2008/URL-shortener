const form = document.getElementById("url-form");
const input = document.getElementById("long-url");
const result = document.getElementById("result");

form.addEventListener("submit",async(event)=>{
    event.preventDefault();
    const longUrl = input.value;
    const response = await fetch("http://localhost:3000/shorten", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        url: longUrl
        })   
    });
    const data = await response.json();
    result.innerHTML = `<a href="${data.shortUrl}">${data.shortUrl}</a>`
});