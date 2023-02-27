import { usuarios } from "../index.js";

class Usuario {
   constructor(username, avatar) {
      this.username = username;
      this.avatar = avatar;
   }
   addToDatabase() {
      usuarios.push(this);
   }
}

export default function authController(req, res) {
   const { username, avatar } = req.body;

   if (!username || !avatar) {
      res.status(400).send("Todos os campos são obrigatórios!");
      return;
   }

   const user = new Usuario(username, avatar);

   user.addToDatabase();

   res.status(200).send(usuarios);
}
