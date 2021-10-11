const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Paul:aze@cluster0.mno50.mongodb.net/Twitter?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .catch((err) => console.log(err));
