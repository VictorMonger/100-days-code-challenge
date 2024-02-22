const Validator = require("../src/validator/index");

const validateCpf = new Validator();

describe("Validator", () => {
  describe("Validate cpf", () => {
    test("should give true to cpf with eleven digits", () => {
      const cpf = "536.544.460-43";

      const isCpfValid = validateCpf.cpfIsValid(cpf);

      expect(isCpfValid).toBeTruthy();
    });

    test("should give false if all digits equal", () => {
      const cpf = "111.111.111-11";

      const isCpfValid = validateCpf.cpfIsValid(cpf);

      expect(isCpfValid).toBeFalsy();
    });

    test("should return true if the 9 position is valid", () => {
      const cpf = "536.544.460-43";

      const isCpfValid = validateCpf.cpfIsValid(cpf);

      expect(isCpfValid).toBeTruthy();
    });

    test("should return true if the 10 position is valid", () => {
      const cpf = "536.544.460-43";

      const isCpfValid = validateCpf.cpfIsValid(cpf);

      expect(isCpfValid).toBeTruthy();
    });
  });

  describe("Is validate Digit", () => {
    test("should return true if character position is equal remainder", () => {
      const treatedCpf = "53654446043";
      const position = 10;

      const isValidDigit = validateCpf.isValidCpfDigit(treatedCpf, position);

      expect(isValidDigit).toBeTruthy();
    });
  });

  describe("get cpf Sum", () => {
    test("should sum be correctly", () => {
      const treatedCpf = "11144477705";
      const position = 9;
      const expectedSum = 162;

      const sum = validateCpf.getCpfSum(treatedCpf, position);

      expect(sum).toEqual(expectedSum);
    });
  });

  describe("get cpf remainder", () => {
    test("should return remainder correctly", () => {
      const sum = 162;
      const expectedRemainder = 3;

      const remainder = validateCpf.getCpfRemainder(sum);

      expect(remainder).toEqual(expectedRemainder);
    });

    test("should return zero if remainder is 10", () => {
      const sum = 11;
      const expectedRemainder = 0;

      const remainder = validateCpf.getCpfRemainder(sum);

      expect(remainder).toEqual(expectedRemainder);
    });
  });
});
