const app = require("./src/app");
let door = 8080;

app.listen(door, () => {
    console.log(`Servidor rodando corretamente na porta ${door}`);
});