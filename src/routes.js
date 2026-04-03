import { Router } from "express";
import {
  createTable,
  insertPessoa,
  updatePessoa,
  selectPessoa,
  selectPessoas,
  deletePessoa,
} from "./Controler/Pessoa.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("API SIMPLES CRUD COM SQL E EXPRESS!");
});

router.get("/pessoas", selectPessoas);
router.get("/pessoa", selectPessoa);
router.post("/pessoa", insertPessoa);
router.put("/pessoa", updatePessoa);
router.delete("/pessoa", deletePessoa);

export default router;
