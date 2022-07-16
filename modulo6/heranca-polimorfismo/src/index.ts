import express from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { Request, Response} from "express"
const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
    } else {
    console.error(`Failure upon starting server.`);
    }
});

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world")
})


// ----Exercício 1 ----
//a) Seria possível imprimir a senha (password) atrelada a essa instância?
//R: Não, pois não existe nenhum método (GETTERS) para retornar o password.

//b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
//R: 1 vez.

// ----Exercício 2 ----