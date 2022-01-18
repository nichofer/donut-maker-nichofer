class DonutMaker {
  constructor(
    donutCount,
    autoClickerCost,
    autoClickerCount,
    clickMultiplierCost,
    clickMultiplierCount
  ) {
    this.donutCount = donutCount;
    this.autoClickerCost = autoClickerCost;
    this.autoClickerCount = autoClickerCount;
    this.clickMultiplierCost = clickMultiplierCost;
    this.clickMultiplierCount = clickMultiplierCount;
  }

  addDonut() {
    this.donutCount += Math.pow(1.2, this.clickMultiplierCount);
  }

  retrieveDonutCount() {
    return this.donutCount;
  }

  purchaseAutoClicker() {
    if (this.donutCount >= this.autoClickerCost) {
      this.donutCount -= this.autoClickerCost;
      this.autoClickerCount += 1;
      this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);
      // if (this.autoClickerCount <= 1) {
      //   activateAutoClicker();
      // }
    }
  }

  retrieveAutoClickerCount() {
    return this.autoClickerCount;
  }

  // activateAutoClicker() {
  //   setInterval(function () {
  //     this.donutCount += this.autoClickerCount * Math.pow(1.2, this.clickMultiplierCount);
  //     currentTotal.innerText = Math.round(this.donutCount);
  //   }, 1000);
  // }

  purchaseClickMultiplier() {
    if (this.donutCount >= this.clickMultiplierCost) {
      this.donutCount -= this.clickMultiplierCost;
      this.clickMultiplierCount += 1;
      this.clickMultiplierCost = Math.round(this.clickMultiplierCost * 1.1);
    }
  }

  resetGame() {
    location.reload();
  }
}

export default DonutMaker;
