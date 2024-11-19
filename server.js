import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placedog.net/500?r"
  },
  {
    id: 2,
    descricao: "Um doguinho fofo",
    imagem: "https://placedog.net/500?r"
  },
  {
    id: 3,
    descricao: "Não sabei o que colocar, então toma um cachorrinho",
    imagem: "https://placedog.net/500?r"
  },
  {
    id: 4,
    descricao: "O melhor amigo do homem",
    imagem: "https://placedog.net/500?r"
  },
  {
    id: 5,
    descricao: "Au Au Au",
    imagem: "https://placedog.net/500?r"
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorId(id){
  return posts.findIndex((post) => {
    return post.id === Number(id)
  })
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorId(req.params.id)
  console.log(index)
  res.status(200).json(posts[index]);
});
