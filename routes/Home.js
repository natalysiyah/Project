const express = require("express");
const router = express();
const path = require("path");


router.get("/", (req,res) => {
     res.render("index", {
        title: "Node Pug",
        h1: ["best online", "Learning system"],
        h4: "Get started with online courses",
        p: ["Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium","Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."],
        h2: ["Learn From The Experts","Book Library \&amp\; Store","Best Course Online","Best Industry Leaders"]
    });
})

module.exports = router;