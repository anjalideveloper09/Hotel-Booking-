document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    showPopup();
  
  
    // Get form values
    var customerName = document.getElementById("customerName").value;
    var checkInDate = document.getElementById("checkInDate").value;
    var totalDays = parseInt(document.getElementById("totalDays").value);
    var totalPersons = parseInt(document.getElementById("totalPersons").value);
    var roomType = document.getElementById("roomType").value;
    var ac = document.getElementById("ac").checked;
    var locker = document.getElementById("locker").checked;
    var advanceAmount = parseInt(document.getElementById("advanceAmount").value);
  
    // Calculate costs
    var roomRate = roomType === "Delux Room" ? 2500 : 4000;
    var acCost = ac ? 1000 : 0;
    var lockerCost = locker ? 300 : 0;
  
    var totalRoomCost = roomRate * totalDays;
    var totalAmenitiesCost = (acCost + lockerCost) * totalDays;
    var totalCost = totalRoomCost + totalAmenitiesCost;
  
    // Additional charges for extra persons
    var extraPersons = Math.max(totalPersons - 2, 0);
    var extraPersonCost = 1000 * extraPersons * totalDays;
    totalCost += extraPersonCost;
  
    var balance = totalCost - advanceAmount;
  
    // Update calculated fields
    document.getElementById("totalRoomCost").textContent = "Total Room Cost: " + totalRoomCost + "/-";
    document.getElementById("totalAmenitiesCost").textContent = "Total Amenities Cost: " + totalAmenitiesCost + "/-";
    document.getElementById("totalCost").textContent = "Total Cost: " + totalCost + "/-";
    document.getElementById("balance").textContent = "Balance: " + balance + "/-";
  
     // Display customer information
     var customerInfo = "Customer Name: " + customerName + "<br>" +
     "Check-in Date: " + checkInDate + "<br>" +
     "Total No of Days: " + totalDays + "<br>" +
     "Total No of Persons: " + totalPersons;
     document.getElementById("customerInfo").innerHTML = customerInfo;
 
     // Show the results section
   document.getElementById("resultsSection").style.display = "block";
 
   function showPopup() {
    var modal = document.getElementById("popupModal");
    var closeButton = document.getElementsByClassName("close")[0];
  
    modal.style.display = "block";
  
    closeButton.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
});
  