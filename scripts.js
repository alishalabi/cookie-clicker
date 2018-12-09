let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;


  // DOM Variables
  let cookieCounter = document.getElementById("cookie-counter");
  let cookieClicker = document.getElementById("cookie-clicker");
  let buyClickPower = document.getElementById("buy-click-power");
  let clickPowerPrice = document.getElementById("click-power-price");
  let clickPowerLevel = document.getElementById("click-power-level");
  let clickPowerMultiple = document.getElementById("click-power-multiple");

  let buyGrandma = document.getElementById('buy-grandma');
  let grandmaPrice = document.getElementById('grandma-price');
  let grandmaLevel = document.getElementById('grandma-level');
  let grandmaMultiple = document.getElementById('grandma-multiple');

  let buyFacility = document.getElementById("buy-facility");
  let facilityPrice = document.getElementById('facility-price');
  let facilityLevel = document.getElementById('facility-level');
  let facilityMultiple = document.getElementById('facility-multiple');


  // Event Listener: Add Cookie Click
  cookieClicker.addEventListener("click", () => {
    cookieCount = cookieCount + clickPower
    cookieCounter.innerHTML = cookieCount
  })

  // Event Listener: Buy Power
  buyClickPower.addEventListener("click", () =>{
    if (cookieCount >= clickPowerPriceAmount) {
      cookieCount -= clickPowerPriceAmount;
      refreshCookieCount()

      clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05)

      clickPowerLevelNumber += 1;
      clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33)
      refreshPowerClick()
    } else {
      console.log("You don't have enough cookies :(")
    }
  })

  // Event Listener: Buy Grandma
  buyGrandma.addEventLister("click", () => {
    let grandmaAuto = false;
      if (cookieCount >= grandmaPriceAmount) {
        cookieCount -= grandmaPriceAmount;
        refreshCookieCount()

        grandmaLevelNumber += 1;
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 2);
        grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);
        autaGrandma = true;
        autoGrandmaStart();
        resfreshGrandma();
      }
  })

  // Event Listener: Buy Facility
  buyFacility.addEventListener("click", () => {
    facilityAuto = false;
    if (cookieCount >= facilityPriceAmount) {
      cookieCount -= facilityPriceAmount;
      refreshCookieCount()

      facilityLevelNUmber += 1;
      facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33)
      facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);
      facilityAuto = true;
      autoFacilityStart()
      refreshFacility()
    }
  })



  // Helper Function: Cookie Refresh
  let refreshCookieCount = () => {
    cookieCounter.innerHTML = cookieCount;
  }

  // Helper Function: Power Refresh
  let refreshPowerClick = () => {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
  }

  // Helper Function: Grandma Refresh
  let resfreshGrandma = () => {
    grandmaLevel.innerHTML = grandmaLevelNumber
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower - 10;
  }

  // Helper Function: Game Loop
  let autoGrandmaStart = () => {
    let grandmaInt = window.setInterval(function() {
      cookieCount += facilityPower;
      refreshCookieCount();
    }, 1000)
  }

  // Helper Function: Facility Refresh
  let refreshFacility = () => {
    facilityLevel.innerHTML = facilityLevelNumber
    facilityPrice.innerHTML = facilityPriceAmount
    facilityMultiple.innerHTML = facilityPower - 600
  }
