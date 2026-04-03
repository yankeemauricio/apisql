import { openDb } from "../configDB.js";

export async function createTable() {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS pessoa (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)",
    );
  });
}

export async function selectPessoas(req, res) {
  openDb().then((db) => {
    db.all("SELECT * FROM Pessoa").then((pessoas) =>
      res.status(200).json(pessoas),
    );
  });
}

export async function selectPessoa(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("SELECT * FROM Pessoa WHERE id = ?", [id]).then((pessoa) => {
      if (!pessoa) {
        res.status(404).json({ status: 404, message: "Pessoa not found" });
      } else {
        res.status(200).json(pessoa);
      }
    });
  });
}

export async function insertPessoa(req, res) {
  let pessoa = req.body;
  openDb().then((db) => {
    db.run("INSERT INTO Pessoa (nome, idade) VALUES (?, ?)", [
      pessoa.nome,
      pessoa.idade,
    ]);
    res.status(200).json({ status: 200 });
  });
}

export async function updatePessoa(req, res) {
  let pessoa = req.body;
  openDb().then((db) => {
    db.run("UPDATE Pessoa SET nome = ?, idade = ? WHERE id = ?", [
      pessoa.nome,
      pessoa.idade,
      pessoa.id,
    ]);
    res.status(200).json({ status: 200 });
  });
}

export async function deletePessoa(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.run("DELETE FROM Pessoa WHERE id = ?", [id]).then((res) => res);
  });
  res.status(200).json({ status: 200 });
}
