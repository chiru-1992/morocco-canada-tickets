const SECRET_CODE = "MOCAN";

const ticketsContainer = document.getElementById("ticketsContainer");
const codeInput = document.getElementById("codeInput");
const unlockBtn = document.getElementById("unlockBtn");
const message = document.getElementById("message");

let unlocked = false;

function createTicket(ticket) {

    return `
    <div class="ticket">

        <div class="ticket-number">
            🎟 Ticket ${ticket.ticket}
        </div>

        ${
            unlocked
            ?
            `
            <div class="ticket-content">

                <div class="player">
                    <img src="${ticket.morocco.image}" alt="${ticket.morocco.name}">
                    <h3>${ticket.morocco.name}</h3>
                </div>

                <div class="vs">VS</div>

                <div class="player">
                    <img src="${ticket.canada.image}" alt="${ticket.canada.name}">
                    <h3>${ticket.canada.name}</h3>
                </div>

            </div>
            `
            :
            `
            <div class="locked-box">
                🔒 Enter code to reveal players
            </div>
            `
        }

    </div>
    `;
}

function loadTickets() {

    ticketsContainer.innerHTML = "";

    tickets.forEach(ticket => {

        ticketsContainer.innerHTML += createTicket(ticket);

    });

}

loadTickets();

unlockBtn.addEventListener("click", function () {

    const code = codeInput.value.trim().toUpperCase();

    if (code === SECRET_CODE) {

        unlocked = true;

        loadTickets();

        message.innerHTML = "✅ Tickets Unlocked!";
        message.style.color = "lime";

    } else {

        message.innerHTML = "❌ Wrong Code!";
        message.style.color = "red";

    }

});

codeInput.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        unlockBtn.click();

    }

});
