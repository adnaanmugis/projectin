document.getElementById("search").addEventListener("keyup", (e) => {

    const value = e.target.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {

        card.style.display =

            card.innerText.toLowerCase().includes(value)

                ? "block"

                : "none";

    });

});