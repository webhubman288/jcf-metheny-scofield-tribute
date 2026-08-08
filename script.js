// Set this to your Formspree endpoint (see README.md) to make the signup form live.
const FORM_ENDPOINT = "";

// Add gigs here as they're booked, e.g.:
// { date: "Sep 12, 2026", venue: "Kuumbwa Jazz Center", city: "Santa Cruz, CA" }
const GIGS = [];

document.getElementById("year").textContent = new Date().getFullYear();

function renderGigs() {
  if (GIGS.length === 0) return;
  const list = document.getElementById("gigs-list");
  list.innerHTML = GIGS.map(g => `
    <div class="gig-item">
      <span class="gig-date">${g.date}</span>
      <span class="gig-venue">${g.venue}</span>
      <span class="gig-city">${g.city}</span>
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
