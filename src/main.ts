const button = document.querySelector("#but")!;

let count = 0;

button.addEventListener("click", () => {
    count++;
    document.querySelector("h1")!.innerText = `Counter: ${count}`;
});

export {};
