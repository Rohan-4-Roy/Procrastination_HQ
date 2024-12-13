const URL = "https://v2.jokeapi.dev/joke/pun";
// let promise = fetch(URL);
// console.log(promise);
const factPara = document.querySelector("#Fact")
const btn = document.querySelector("button")

const getFacts = async () => {
    console.log("getting data ...")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    let text;
    if (data.type === "single") {
        text = data.joke;
    } else {
        text = data.setup + "\n" + data.delivery

    }
    factPara.innerText = text;
    factPara.style.fontStyle = "italic";
    factPara.style.fontWeight = "bold";

}
btn.addEventListener("click", getFacts)