// ===============================
// ✅ QUALIFIED ROLL NUMBERS
// ===============================
const qualifiedRollNumbers = [
"12425112268249","12425112269669","12425113224018","12425117197703","12425117268381",
"12425212267124","12425212271681","12425212274729","12425215271879","12425217221637",
"12425217257257","12425217259023","12425312251643","12425312325922","12425329265282",
"12425412198015","12425412260943","12425412263977","12425412265041","12425412265174",
"12425412265693","12425412269685","12425412271718","12425412325187","12425413272821",
"12425417197993","12425417200998","12425417256431","12425417258816","12425512325180",
"12425513264786","12425513265193"
];

// ===============================
const form = document.getElementById("result-checker-form");
const resultBox = document.getElementById("result-box");

// ===============================
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("input-name").value;
  const mobile = document.getElementById("input-mobile").value;
  const zone = document.getElementById("select-zone").value;
  const roll = document.getElementById("input-roll").value;

  if (mobile.length !== 10 || roll.length !== 16) {
    alert("Invalid details");
    return;
  }

  if (qualifiedRollNumbers.includes(roll)) {

    resultBox.innerHTML = `
      <h2 style="color:green;">✅ SHORTLISTED</h2>
      <p><b>${name}</b>, you are qualified for DV & Medical</p>
      <p>Roll: ${roll}</p>
      <p>Zone: ${zone}</p>
    `;

    fireConfetti();

  } else {

    resultBox.innerHTML = `
      <h2 style="color:red;">❌ NOT QUALIFIED</h2>
      <p>Better luck next time</p>
    `;
  }

  sendToGoogleSheet(name, mobile, zone, roll);
});

// ===============================
// CONFETTI
// ===============================
function fireConfetti() {
  confetti({
    particleCount: 100,
    spread: 70
  });
}

// ===============================
// GOOGLE SHEET
// ===============================
function sendToGoogleSheet(name, mobile, zone, roll) {

  fetch("https://script.google.com/macros/s/AKfycbxgzH4nE0NMtDTm8QHJTTVbUiO19EPj0e8Fj2GcotYpi5kqBDefAV5eCXY5WYbi5K4axQ/exec", {
    method: "POST",
    body: JSON.stringify({
      name, mobile, zone, roll
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(() => console.log("Saved"))
  .catch(err => console.log(err));
}