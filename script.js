const btn = document.querySelector("#btn");
const audioeg = document.querySelector("#audioeg");
const h1 = document.querySelector("h1");
let timeoutId;
let canClick = true;

btn.addEventListener("click", function () {
    if (canClick) {
        if (audioeg.paused) {
            audioeg.play();
            h1.style.display = "flex";

            timeoutId = setTimeout(function () {
                h1.style.display = "none";
            }, 2000);

        } else {
            audioeg.pause();
            clearTimeout(timeoutId);
        }

        canClick = false;
        setTimeout(function () {
            canClick = true;
        }, 2000); // Permite clicar novamente após 2 segundos
    }
});
