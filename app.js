const validRollNumbers = [
"12425112268249","12425112269669","12425113224018","12425117197703","12425117268381",
"12425212267124","12425212271681","12425212274729","12425215271879","12425217221637",
"12425217257257","12425217259023","12425312251643","12425312325922","12425329265282",
"12425412198015","12425412260943","12425412263977","12425412265041","12425412265174",
"12425412265693","12425412269685","12425412271718","12425412325187","12425413272821",
"12425417197993","12425417200998","12425417256431","12425417258816","12425512325180",
"12425513264786","12425513265193"
];

function checkResult() {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const zone = document.getElementById("zone").value;
  const roll = document.getElementById("roll").value;

  const resultBox = document.getElementById("result");

  if(validRollNumbers.includes(roll)) {
    resultBox.innerHTML = "🎉 Congratulations! You are SHORTLISTED";
    resultBox.style.color = "green";
  } else {
    resultBox.innerHTML = "❌ Sorry! You are NOT QUALIFIED";
    resultBox.style.color = "red";
  }

  // 🔥 Google Sheet Save
  fetch("https://script.google.com/macros/s/AKfycbxgzH4nE0NMtDTm8QHJTTVbUiO19EPj0e8Fj2GcotYpi5kqBDefAV5eCXY5WYbi5K4axQ/exec", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      mobile: mobile,
      zone: zone,
      roll: roll
    })
  });
}
