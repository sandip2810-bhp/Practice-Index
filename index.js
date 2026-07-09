const express = require("express")
const news = require("./Data/news")
const app = express();
const PORT = 3000
app.use(express.json())
require("dotenv").config();
const cors = require("cors");
const api = require("./src/config/prisma");
app.use(cors());


// app.get("/", (req, res) => {
//     res.send(100 + 200)
// })
// app.get("/name", (req, res) => {
//     res.send("My name is Sandip")
// })
// app.get("/home", (req, res) => {
//     res.send("Welcome to the home page")
// })
// app.get("/about", (req, res) => {
//     res.send("This is the about page")
// })
// app.get("/services", (req, res) => {
//     res.send("This is the services page")
// })
// app.get("/faq", (req, res) => {
//     res.send("This is the FAQ page")
// })

app.get("/Main_Page", (req, res) => {
    res.send("Welcome to the news Page")
})

// app.get("/news", (req, res) => {
//     res.json(news)
// })

app.get("/news/top/:n", (req, res) => {
    const n = parseInt(req.params.n)
    if (isNaN(n) || n <= 0) return res.status(400).send("Please provide a valid number")
    const topNews = news.slice(0, n)
    res.json(topNews)
})

app.get("/news/:id", (req, res) => {
    const item = news.find(n => n.id === parseInt(req.params.id))
    if (!item) return res.status(404).send("News not found")
    res.json(item)
})  

app.listen(PORT, () => {
    console.log("Server running on port",3000)
})

app.get("/news", (req, res) => {
    const category = req.query.category;
    const limit = parseInt(req.query.limit);

    let result = news;

    if (category) {
        result = news.filter(
            item => item.category.toLowerCase() === category.toLowerCase()
        );

        if (result.length === 0) {
            return res.status(404).json({
                message: `No news found for category '${category}'`
            });
        }
    }

    if (!isNaN(limit) && limit > 0) {
        result = result.slice(0, limit);
    }

    return res.json(result);
})

app.get("/news/:id", (req, res) => {
    const item = news.find(n => n.id === parseInt(req.params.id))
    if (!item) return res.status(404).json({ message: "News not found" })
    res.json(item)
})

app.post("/signup",(req,res)=>{
    const body = req.body
    console.log(body)
    res.send(body)
})

app.get("/users", async (req, res) => {
  const users = await api.user.findMany();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { email, name } = req.body;
  const user = await api.user.create({ data: { email, name } });
  res.status(201).json(user);
});

app.listen(PORT, () => console.log(`server on http://localhost:${PORT}`));