function calculateAge() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value - 1; // Adjust for 0-based month index
    const year = document.getElementById("year").value;
    const dob = new Date(year, month, day);
    const today = new Date();
  
    if (dob > today) {
      document.getElementById("result").textContent = "Invalid date!";
      return;
    }
  
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const age = Math.floor((today - dob) / millisecondsPerDay / 365);
  
    const resultContainer = document.getElementById("result");
    resultContainer.textContent = `Your age is: ${age}`;
  }
  