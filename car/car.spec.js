const Car = require("./car")

// Test away!
describe("intro to unit testing with jest",() => {
    test("it should work", () => {
        expect(2 + 2).toBe(4);
    });

    test("toBe vs toEqual", () => {
        expect({}).not.toBe({});
        expect({ a: 1 }).toEqual({ a: 1 });
  });
});

describe("car class", () => {

    let prius;

    beforeEach(() => {
        prius = new Car("toyota", "prius");
    })

    test("car class exsisits", () => {
        expect(Car).toBeDefined();
    });

    test("creates an instance of Car", () => {
        expect(prius).toBeInstanceOf(Car);
    });

    // AAA = Arrange -> Act -> Assess
    test("cars should have a make property", () => {
        // arrange 
        const expected = "toyota";

        // act
        const actual = prius.make;

        // assess
        expect(actual).toBe(expected)
    });

    test("cars should have a model property", () => {
        expect(prius.model).toBe('prius')
    });


    test("cars should have an odometer property", () => {
        expect(prius).toHaveProperty("odometer", 0)
    });

    test("has a drive method", () => {
        expect(prius.drive).toBeDefined();
        expect(prius.drive).toBeTruthy();
        expect(prius.drive).toBeInstanceOf(Function);
        expect(prius.drive).toBe(Car.prototype.drive)
    });

    test("returns the driven distance", () => {
        expect(prius.drive(5)).toBe(5);
        expect(prius.drive(100)).toBe(100);
        expect(prius.drive(NaN)).toBe(NaN);
    });

    test("drive increases the odometer distance", () => {
        prius.drive(5);
        expect(prius.odometer).toBe(5);
        prius.drive(6);
        expect(prius.odometer).toBe(11);
        prius.drive(9);
        expect(prius.odometer).toBe(20);
    })


    // test("drive supports comma-seperated leg distance", () => {
    //  expect(prius.drive(1,2,3)).toBe(6);
    //  expect(prius.drive(4,5,6)).toBe(15);
    //  expect(prius.odometer).toBe(21);
    // });

    // test("async drive works as well", async () => {
    //     let distance = await prius.asyncDrive(1,2,3);

    //     expect(prius.odometer).toBe(6);
    //     expect(distance).toBe(6)
    // })

})


