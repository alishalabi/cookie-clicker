let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

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

      clickPowerLevelNumber += 1;
      clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33)
      refreshPowerClick()
    } else {
      console.log("You don't have enough cookies :(")
    }
  })

  // Event Listener: Buy Grandma
  buyGrandma.addEventLister("click", () => {
    if (cookieCount >= grandmaPriceAmount) {
      cookieCount -= grandmaPriceAmount;
      refreshCookieCount()
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
