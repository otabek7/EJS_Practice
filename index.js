import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import bodyParser from "body-parser";

// const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const day = new Date();
  const userDate = day.getDay();

  let type = "weekday";
  let adv = "work hard";

  if (userDate == 0 || userDate == 6) {
    // res.send("its the wknd");
    type = "weekend";
    adv = "have fun";
  }
  res.render("index.ejs", { name: type, toDo: adv });

  //    else if (userDate != 0 || userDate != 6) {
  //     // res.send("its the wkday");
  //     res.render("index.ejs", { name: "weekday", toDo: "work hard" });
  //   }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
