class CpfValidator {
  constructor(cpf) {
    this.cpf = cpf
      .split("")
      .filter((char) => !isNaN(parseInt(char)))
      .join("");
  }

  isValid() {
    if (this.cpf.length !== 11) return false;
    if (this.cpf.split("").every((char) => char === this.cpf[0])) return false;

    const isValidDigit = (position) => {
      let sum = 0;

      for (let i = 0; i < position; i++) {
        sum += parseInt(this.cpf.charAt(i), 10) * (position + 1 - i);
      }
      let remainder = (sum * 10) % 11;

      if (remainder === 10 || remainder === 11) {
        remainder = 0;
      }
      return parseInt(this.cpf.charAt(position), 10) === remainder;
    };

    if (!isValidDigit(9) || !isValidDigit(10)) return false;

    return true;
  }
}

module.exports = CpfValidator
