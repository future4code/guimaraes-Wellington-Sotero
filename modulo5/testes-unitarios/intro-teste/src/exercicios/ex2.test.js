import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });
});

describe("Checa Palíndromo", () => {
  it("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });
});

describe("Checa Palíndromo", () => {
  it("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  });
});

  describe("Checa Palíndromo", () => {
    it("retorna false para 'baba'", () => {
      const ehPalindromo = checaPalindromo("baba");
      expect(ehPalindromo).toEqual(true);
    });
});

//comprovação abaixo

describe("Checa Palíndromo", () => {
  it("retorna false para 'ovo'", () => {
    const ehPalindromo = checaPalindromo("ovo");
    expect(ehPalindromo).toEqual(false);
  });
});