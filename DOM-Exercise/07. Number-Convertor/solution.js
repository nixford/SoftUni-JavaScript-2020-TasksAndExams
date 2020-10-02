function solve() {
    let button = document.querySelector("button");
    let selectMenuTo = document.getElementById("selectMenuTo");
    let numberForm = document.getElementById("input");
    let outputForm = document.getElementById("result");

    let binary = document.createElement("option");
    binary.innerText = "Binary";
    binary.value = "binary";
    selectMenuTo.add(binary);

    let hexadecimal = document.createElement("option");
    hexadecimal.innerText = "Hexadecimal";
    hexadecimal.value = "hexadecimal";
    selectMenuTo.add(hexadecimal);

    button.addEventListener("click", function (e) {
        e.preventDefault();

        let convertTo = selectMenuTo.value;
        let number = numberForm.value;

        if (convertTo === "binary") {
            outputForm.value = Number(number).toString(2);
        } else if (convertTo === "hexadecimal") {
            outputForm.value = Number(number).toString(16).toUpperCase();
        }
    })
}