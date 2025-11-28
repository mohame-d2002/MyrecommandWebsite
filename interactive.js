 document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            alert("تم الضغط على: " + card.innerText);
        });
    });