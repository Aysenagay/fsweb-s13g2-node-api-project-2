// posts için gerekli routerları buraya yazın
const router = require("express").Router();
const Posts = require("./posts-model");

//GET

router.get("/", (req, res) => {
  Posts.find()
    .then((post) => {
      res.status(201).json(post);
    })
    .catch((err) => {
      res.status(500).json({ message: "Gönderiler alınamadı" });
    });
});

router.get("/:id", (req, res) => {
  Posts.findById(req.params.id)
    .then((post) => {
      if (!post) {
        res
          .status(404)
          .json({ message: "Belirtilen ID'li gönderi bulunamadı" });
      } else {
        res.status(200).json(post);
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Gönderi bilgisi alınamadı.",
      });
    });
});

//POST

module.exports = router;
