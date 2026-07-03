const SECRET_CODE = "MOCAN";

const moroccoPlayers = [
    { name: "Achraf Hakimi", image: "images/morocco/hakimi.png" },
    { name: "Brahim Diaz", image: "images/morocco/brahim.png" }
    // Add the remaining 21 Morocco players
];

const canadaPlayers = [
    { name: "Jonathan David", image: "images/canada/jonathan_david.png" },
    { name: "Alphonso Davies", image: "images/canada/alphonso_davies.png" }
    // Add the remaining 21 Canada players
];

const container = document.getElementById("ticketsContainer");

for (let i = 0; i < Math.min(moroccoPlayers.length, canadaPlayers.length); i++) {

    container.innerHTML += `
    <div class="ticket hidden">
        <h3>🎟 Ticket ${i + 1}</h3>

        <div class="players">

            <div class="player">
                <img src="${moroccoPlayers[i].image}">
                <h4>${moroccoPlayers[i].name}</h4>
            </div>

            <div class="vs">VS</div>

            <div class="player">
                <img src="${canadaPlayers[i].image}">
                <h4>${canadaPlayers[i].name}</h4>
            </div>

        </div>
    </div>
    `;
}

function unlockTickets() {

    const code = document
        .getElementById("code")
        .value
        .trim()
        .toUpperCase();

    const tickets = document.querySelectorAll(".ticket");
    const message = document.getElementById("message");

    if (code === SECRET_CODE) {

        tickets.forEach(ticket => ticket.classList.remove("hidden"));

        message.style.color = "#00ff66";
        message.textContent = "✅ All tickets revealed!";

    } else {

        message.style.color = "red";
        message.textContent = "❌ Invalid Match Code";

    }
}
