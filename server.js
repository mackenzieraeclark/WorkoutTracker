// Create dependencies
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3030
const app = express();

// Use Express to set app
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

// Connect mongoose
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Require routes
app.use(require("./routes/api-route.js"));
app.use(require("./routes/route.js"));

// Start server (listening)
app.listen(PORT, () => {
    console.log(`This application is running on PORT ${PORT}.`);
});