const SECRET_CODE = "MOCAN";

const ticketsContainer = document.getElementById("ticketsContainer");
const codeInput = document.getElementById("codeInput");
const unlockBtn = document.getElementById("unlockBtn");
const message = document.getElementById("message");

function createTicket(ticket) {
  return `
    <div class="ticket">
      <div class="ticket-number">🎟 Ticket ${ticket.ticket}</div>

      <div class="ticket-content hidden-content">

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
    </div>
  `;
}

return `
<div class="ticket locked">

<div class="ticket-number">
🎟 Ticket ${ticket.ticket}
</div>

<div class="ticket-content">

<div class="player">

<img src="${ticket.morocco.image}" alt="${ticket.morocco.name}">

<h3>${ticket.morocco.name}</h3>

</div>

<div class="vs">
VS
</div>

<div class="player">

<img src="${ticket.canada.image}" alt="${ticket.canada.name}">

<h3>${ticket.canada.name}</h3>

</div>

</div>

</div>
`;

}

function loadTickets(){

ticketsContainer.innerHTML="";

tickets.forEach(ticket=>{

ticketsContainer.innerHTML+=createTicket(ticket);

});

}

loadTickets();unlockBtn.addEventListener("click", function () {

    const enteredCode = codeInput.value.trim().toUpperCase();

    if (enteredCode === SECRET_CODE) {

        document.querySelectorAll(".ticket").forEach(ticket => {
            ticket.classList.remove("locked");
            ticket.classList.add("unlocked");
        });

        message.innerHTML = "✅ Tickets unlocked successfully!";
        message.style.color = "#00cc66";

    } else {

        message.innerHTML = "❌ Invalid code. Please try again.";
        message.style.color = "#ff3333";

    }

});

codeInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        unlockBtn.click();
    }

});
