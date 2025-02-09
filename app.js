fetch(
  "https://raw.githubusercontent.com/artemkotko14/time-tracking-dashboard/main/data.json"
)
  .then((response) => {
    if (!response.ok) {
      console.log("Oops! Something went wrong.");
      return; // Stop execution if there's an error
    }

    return response.json();
  })
  .then((data) => {
    // Function to update data
    function updateData(timeframe) {
      data.forEach((activity) => {
        const category = document.querySelector(
          `.${activity.title.toLowerCase().replace(" ", "")}`
        ); //  Removes the first space in the string.
        if (category) {
          // Determine frequency label
          let frequence;
          switch (timeframe) {
            case "daily":
              frequence = "day";
              break;
            case "weekly":
              frequence = "week";
              break;
            case "monthly":
              frequence = "month";
              break;
            default:
              frequence = "time"; // Fallback case
          }
          category.querySelector(
            ".time"
          ).textContent = `${activity.timeframes[timeframe].current}hrs`;
          category.querySelector(
            ".previousTime"
          ).textContent = `Last ${frequence} - ${activity.timeframes[timeframe].previous}hrs`;
        }
      });
    }

    const buttons = document.querySelectorAll(".frequencyBtn");
    // Add event listeners to buttons
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        buttons.forEach((btn) => btn.classList.remove("active")); // Remove active class
        this.classList.add("active"); // Add active class
        updateData(this.textContent.toLowerCase()); // Update data based on selected timeframe
      });
    });

    updateData("daily");
  })
  .catch((error) => console.error("Error fetching data:", error)); // Catch any errors
