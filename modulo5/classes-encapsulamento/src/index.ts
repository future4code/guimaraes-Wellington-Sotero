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

// 1 a) O construtor inicializa a classe, executa comandos
// que sejam necessários em possíveis operações futuras


// 1 b)
const chewbaccaAccount = new UserAccount("792.435.567-20", "chewbacca", 195);
console.log(chewbaccaAccount);
// imprimiu a mensagem uma vez.

// 1 c) Podemos conseguir acesso nas prpriedades privadas em uma classe
// através de métodos públicos.