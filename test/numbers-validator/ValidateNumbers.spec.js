import { expect } from "chai";
import NumbersValidator from "../../app/numbers-validator.js";

describe("NumbersValidator", function () {
  describe("#isNumberEven()", function () {
    it("should return true if number is even", function () {
      const validator = new NumbersValidator();
      expect(validator.isNumberEven(2)).to.be.true;
    });
    it("should return false if number is odd", function () {
      const validator = new NumbersValidator();
      expect(validator.isNumberEven(3)).to.be.false;
    });
    it("should throw an error if input is not a number", function () {
      const validator = new NumbersValidator();
      expect(() => validator.isNumberEven("not a number")).to.throw(Error);
    });
  });

  describe("#getEvenNumbersFromArray()", function () {
    it("should return an array of even numbers", function () {
      const validator = new NumbersValidator();
      const evenNumbers = validator.getEvenNumbersFromArray([1, 2, 3, 4, 5]);
      expect(evenNumbers).to.deep.equal([2, 4]);
    });
    it("should throw an error if input is not an array of numbers", function () {
      const validator = new NumbersValidator();
      expect(() =>
        validator.getEvenNumbersFromArray([1, "not a number", 3])
      ).to.throw(Error);
    });
  });

  describe("#isAllNumbers()", function () {
    it("should return true if all elements are numbers", function () {
      const validator = new NumbersValidator();
      const result = validator.isAllNumbers([1, 2, 3]);
      expect(result).to.be.true;
    });
    it("should return false if any element is not a number", function () {
      const validator = new NumbersValidator();
      const result = validator.isAllNumbers([1, "not a number", 3]);
      expect(result).to.be.false;
    });
    it("should throw an error if input is not an array", function () {
      const validator = new NumbersValidator();
      expect(() => validator.isAllNumbers("not an array")).to.throw(Error);
    });
  });

  describe("#isInteger()", function () {
    it("should return true if value is an integer", function () {
      const validator = new NumbersValidator();
      expect(validator.isInteger(5)).to.be.true;
    });
    it("should return false if value is not an integer", function () {
      const validator = new NumbersValidator();
      expect(validator.isInteger(5.5)).to.be.false;
    });
    it("should throw an error if input is not a number", function () {
      const validator = new NumbersValidator();
      expect(() => validator.isInteger("not a number")).to.throw(Error);
    });
  });
});
