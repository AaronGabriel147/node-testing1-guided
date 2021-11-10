// Build a Car class!
class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
    this.odometer = 0
  }
  drive(miles) {
    this.odometer += miles
    return {
      distance: miles,
      odometer: this.odometer,
    }
  }
  async driveAsyn(...legs) {
    // return the sum of all legs...
    let total = 0
    for (let leg of legs) {
      total += leg
    }

    return total

  }
}

module.exports = Car
