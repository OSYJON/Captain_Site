const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const consultationRoutes = require("./routes/consultationRoutes");

app.use("/api", consultationRoutes);

app.listen(port, () => {
    console.log(`Captain server running at http://localhost:${port}`);
});