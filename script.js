let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode")
let rgb1 = "rgb(92,145,229)";
let rgb2 = "rgb(152,63,198)";

const hexValues = () => {
    let hexcolor = "0123456789abcdef";
    let color = "#"

    for (i = 0; i < 6; i++) {
        color += hexcolor[Math.floor(Math.random() * 16)]   // It will generate random value from hex color.
    }
    return color
}

const handleButton1 = () => {
    rgb1 = hexValues();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    btn1.innerText = `${rgb1}`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
    // console.log("Color one is :", rgb1);
}

const handleButton2 = () => {
    rgb2 = hexValues();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    btn2.innerText = `${rgb2}`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
    // console.log("Color one is :", rgb2);

}

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
    alert("Copied to clipboard");
})