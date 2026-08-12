//importar o Express
import express from "express";
//caregando express
const app = express();

//configurações do express
app.use(express.json());

app.get("/", (req,res) => {
    //json que sera retornado pela api
    const games = [
        {
            title: "fifa 2019",
            year: 2019,
            plataforma: "X-box 360",
            price: 100
            
        },
        {
            title: "fifa 2019",
            year: 2019,
            plataforma: "X-box 360",
            price: 100
            
        },
        {
            title: "fifa 2019",
            year: 2019,
            plataforma: "X-box 360",
            price: 100
            
        }
    ]
    //configurando o retorno da api
    res.json(games)
})

const port = 4000;
app.listen(port, (error) => {
    if (error) {
        console.log("Ocorreu um erro ao iniciar a API!" + error);
    } else {
        console.log("API iniciada com sucesso!" + port)
    }
})