function solve() { 
    let hiddenUl = document.getElementById("dropdown-ul");
    let dropDownButton = document.getElementById('dropdown');
    let elements = document.querySelectorAll("#dropdown-ul > li");
    let box = document.getElementById("box");

    dropDownButton.addEventListener("click", function (e) {
        e.preventDefault();

        if (hiddenUl.style.display === "none" || hiddenUl.style.display === "") {
            hiddenUl.style.display = "block";

            for (const element of elements) {
                element.addEventListener("click", function (e) {
                    e.preventDefault();
                    const text = element.innerHTML;
                    box.style.backgroundColor = text;
                    box.style.color = "black";
                });
            }
        } else {
            hiddenUl.style.display = "none";
            box.style.backgroundColor = "black";
            box.style.color = "white";
        }
    });    
}