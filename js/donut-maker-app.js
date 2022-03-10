import DonutMaker from "./DonutMaker";

renderPage();

function renderPage() {
  addDonuts();
}

function addDonuts() {
  const donuts = new DonutMaker(0, 100, 0, 10, 0);
  const donutButton = document.images["donutButton"];
  let currentTotal = document.querySelector(".current-total");
  const purchaseAutoClickerButton = document.querySelector(
    "#purchase-auto-clicker"
  );
  let autoClickerCostSpan = document.querySelector("#auto-clicker-cost");
  let autoClickerTotalSpan = document.querySelector("#auto-clicker-total");
  const purchaseClickMultiplierButton = document.querySelector(
    "#purchase-click-multiplier"
  );
  let clickMultiplierCostSpan = document.querySelector(
    "#click-multiplier-cost"
  );
  let clickMultiplierTotalSpan = document.querySelector(
    "#click-multiplier-total"
  );
  const resetButton = document.querySelector("#reset-game");

  donutButton.addEventListener("click", () => {
    donuts.addDonut();
    currentTotal.innerText = Math.round(donuts.donutCount);
  });

  purchaseAutoClickerButton.addEventListener("click", () => {
    donuts.purchaseAutoClicker();
    currentTotal.innerText = Math.round(donuts.donutCount);
    autoClickerCostSpan.innerText = donuts.autoClickerCost;
    autoClickerTotalSpan.innerText = donuts.autoClickerCount;
    if (donuts.autoClickerCount <= 1) {
      setInterval(function () {
        donuts.donutCount += donuts.autoClickerCount * Math.pow(1.2, donuts.clickMultiplierCount);
        currentTotal.innerText = Math.round(donuts.donutCount);
      }, 1000);
    }
  });

  purchaseClickMultiplierButton.addEventListener("click", () => {
    donuts.purchaseClickMultiplier();
    currentTotal.innerText = Math.round(donuts.donutCount);
    clickMultiplierCostSpan.innerText = donuts.clickMultiplierCost;
    clickMultiplierTotalSpan.innerText = donuts.clickMultiplierCount;
  });

  resetButton.addEventListener("click", () => {
    donuts.resetGame();
  });
}
