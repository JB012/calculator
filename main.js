const input = document.querySelector("#input");
const buttons = document.querySelectorAll('#buttons');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        //if the last child is a number, then create a new div
        if (input.children.length === 0 || input.children[input.children.length-1] !== "number") {
            const num = document.createElement("div");
            num.className = "nonnumber";
            num.textContent = event.target.textContent;
            input.appendChild(num);
        }
        else {
            input.children[input.children.length-1].textContent += event.target.textContent;
        }
    });
}