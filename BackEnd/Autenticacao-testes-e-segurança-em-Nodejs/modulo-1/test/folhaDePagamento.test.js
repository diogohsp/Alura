import { somaHorasExtras, calculaDescontos } from "../index.js";

describe("Testes dos calculos de folha", () => {
  test("Deve retornar as somas das horas extras", () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it("Deve retornar os descontos calculados", () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200);

    expect(retornado).toBe(esperado);
  });
});
