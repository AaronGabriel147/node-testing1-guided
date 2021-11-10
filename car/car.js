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
  async driveAsync(...legs) {
    return legs.reduce((acc, leg) => {
      return acc + leg
    })
  }
}

module.exports = Car
