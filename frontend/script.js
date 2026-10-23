const form = document.getElementById("url-form");
const input = document.getElementById("long-url");
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
    console.log(longUrl);
});