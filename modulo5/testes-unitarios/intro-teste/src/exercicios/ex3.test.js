import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("[5, 5, 6, 7]", () => {
        const retorno = checaItensDuplicados ([5, 5, 6, 7]);
        expect(retorno).toBe(true)


    });
    test("[5, 2, 6, 7]", () => {
        const retorno = checaItensDuplicados ([5, 2, 6, 7]);
        expect(retorno).toBe(false)


    });
    test("[5, 3, 6, 7, 6]", () => {
        const retorno = checaItensDuplicados ([5, 3, 6, 7, 6]);
        expect(retorno).toBe(true)


    });
    test("[1, 3, 4, 9, 5, 6, 7]", () => {
        const retorno = checaItensDuplicados ([1, 3, 4, 9, 5, 6, 7]);
        expect(retorno).toBe(false)


    });
    test("[1, 1, 10, 295, 295]", () => {
        const retorno = checaItensDuplicados ([1, 1, 10, 295, 295]);
        expect(retorno).toBe(true)


    });
});

