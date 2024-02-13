class Validator {
  cpfIsValid(cpf) {
    const treatedCpf = cpf
      .split("")
      .filter((char) => !isNaN(parseInt(char)))
      .join("");

    if (treatedCpf.length !== 11) return false;
    if (treatedCpf.split("").every((char) => char === treatedCpf[0]))
      return false;

    return (
      this.isValidCpfDigit(treatedCpf, 9) &&
      this.isValidCpfDigit(treatedCpf, 10)
    );
  }

  isValidCpfDigit(treatedCpf, position) {
    const sum = this.getCpfSum(treatedCpf, position);

    return (
      parseInt(treatedCpf.charAt(position), 10) === this.getCpfRemainder(sum)
    );
  }

  getCpfSum(treatedCpf, position) {
    let sum = 0;

    for (let i = 0; i < position; i++) {
      sum += parseInt(treatedCpf.charAt(i), 10) * (position + 1 - i);
    }

    return sum;
  }

  getCpfRemainder(sum) {
    let remainder = (sum * 10) % 11;

    if (remainder === 10) {
      remainder = 0;
    }

    return remainder;
  }
}

module.exports = Validator;
