const express = require("express");
const cors = require("cors");

const app = new express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Woof!🐶"
    });
});

function isValidInput(input) {
    return (
        input.name &&
        input.name.toString().trim() !== "" &&
        input.content &&
        input.content.toString().trim() !== ""
    );
}

app.post("/woofs", (req, res) => {
    if (isValidInput(req.body)) {
        console.log(req.body);
    } else {
        res.status(422);
        res.json({
            message: "Name and Content are required!"
        });
    }
});

app.listen(5000, () => {
    console.log("listening on localhost:5000");
});
