import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

app.get('/user', (req: Request, res: Response) => {

})

//          Exercício 1

// a) Devo usar o método PUT e POST
// b) Ela está sendo manipulada via Query


//          Exercício 2

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

const type = req.query.type

const usersFiltered = user.filter((u) => {
    if(type.toUpperCase() === USER_TYPE.NORMAL) {
        return u
    }
})


//Exercício 3
