const Car = require('./car');

function gimmeFive() {
    return 5;
}


const foo = 42; //  why is ESLINT not complaining!!!>???



// test.todo('TODO') // this is happy

test('it returns number 5', () => {
    const actual = true                  // assertion, we assert that a value if a function is something
    const expected = true                // we expect that the value is true
    expect(actual).toBe(expected)
})

test('it returns number 5', () => {      // The actual test
    const actual = gimmeFive()
    const expected = 5
    expect(actual).toBe(expected)        // assertions
    expect(actual).toBeGreaterThan(4)
    expect(actual).toBeLessThan(6)
})






describe('Car class', () => {
    test('car is defined', () => {
        // assertion
        expect(Car).toBeDefined()
    })
    test('Cars build with Car have a model { model: "Prius" }', () => {
        let actual = new Car('Prius')
        let expected = { model: "Prius" }
        expect(actual).toEqual(expected)

        actual = new Car('Galaxie')   // If changing a LET value, do not declare let again.
        expected = { model: "Galaxie" }
        expect(actual).toEqual(expected)

    })
})


//  NEW KEYWORD = BELOW
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   const car1 = new Car('Eagle', 'Talon TSi', 1993);

//   console.log(car1.make);
//   // expected output: "Eagle"
