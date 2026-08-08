// Set this to your Formspree endpoint (see README.md) to make the signup form live.
const FORM_ENDPOINT = "https://formspree.io/f/xbgrdzgj";

// Add gigs here as they're booked, e.g.:
// { date: "Sep 12, 2026", time: "8:00pm", venue: "Kuumbwa Jazz Center", address: "320 Cedar St, Santa Cruz, CA", note: "Tickets at the door.", phone: "(831) 555-0100" }
const GIGS = [
  {
    date: "Thursday, Sept. 3, 2026",
    time: "5:30–7:30pm",
    venue: "The Crepe Place",
    address: "1134 Soquel Ave., Santa Cruz, CA",
    note: "No cover charge. Dinner reservations recommended.",
    phone: "(831) 429-6994",
  },
];

document.getElementById("year").textContent = new Date().getFullYear();

function renderGigs() {
  if (GIGS.length === 0) return;
  const list = document.getElementById("gigs-list");
  list.innerHTML = GIGS.map(g => `
    <div class="gig-item">
      <div class="gig-when">
        <span class="gig-date">${g.date}</span>
        <span class="gig-time">${g.time}</span>
      </div>
      <div class="gig-where">
        <span class="gig-venue">${g.venue}</span>
        <span class="gig-address">${g.address}</span>
      </div>
      <div class="gig-note">
        ${g.note}${g.phone ? ` Call: <a href="tel:${g.phone.replace(/[^\d+]/g, "")}">${g.phone}</a>` : ""}
      </div>
    </div>
  `).join("");
}
renderGigs();

const form = document.getElementById("signup-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();

  if (!FORM_ENDPOINT) {
    status.textContent = "Signup isn't connected yet — see README.md to enable it.";
    status.classList.add("error");
    return;
  }

  status.classList.remove("error");
  status.textContent = "Submitting...";

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(form),
    });

    if (res.ok) {
      status.textContent = "Thanks — you're on the list!";
      form.reset();
    } else {
      status.textContent = "Something went wrong. Please try again.";
      status.classList.add("error");
    }
  } catch (err) {
    status.textContent = "Something went wrong. Please try again.";
    status.classList.add("error");
  }
});
