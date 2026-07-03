// ===============================
// Morocco vs Canada Lucky Pair
// Module 1
// ===============================

const SECRET_CODE = "MOCAN";

/*
For now we're using placeholder data.
In Module 2 and Module 3 we'll replace these
with the real Morocco and Canada players.
*/

const moroccoPlayers = [];
const canadaPlayers = [];

// Create placeholder players (23 tickets)
for (let i = 1; i <= 23; i++) {

    moroccoPlayers.push({
        name: "Morocco Player " + i,
        image: "images/morocco/player" + i + ".png"
    });

    canadaPlayers.push({
        name: "Canada Player " + i,
        image: "images/canada/player" + i + ".png"
    });

}

const container = document.getElementById("ticketsContainer");

function createTickets() {

    container.innerHTML = "";

    for (let i = 0; i < 23; i++) {

        container.innerHTML += `

<div class="ticket hidden">

<div class="ticket-header">
🎟 Ticket ${i + 1}
</div>

<div class="players">

<div class="player">

<img src="${moroccoPlayers[i].image}" alt="Morocco">

<h3>${moroccoPlayers[i].name}</h3>

</div>

<div class="vs">
VS
</div>

<div class="player">

<img src="${canadaPlayers[i].image}" alt="Canada">

<h3>${canadaPlayers[i].name}</h3>

</div>

</div>

</div>

`;

    }

}

createTickets();

function unlockTickets() {

    const code = document
        .getElementById("code")
        .value
        .trim()
        .toUpperCase();

    const message = document.getElementById("message");

    if (code === SECRET_CODE) {

        document.querySelectorAll(".ticket").forEach(ticket => {
            ticket.classList.remove("hidden");
        });

        message.style.color = "#00ff66";
        message.innerHTML = "✅ Tickets Revealed Successfully";

    }

    else {

        message.style.color = "red";
        message.innerHTML = "❌ Invalid Match Code";

    }

}
