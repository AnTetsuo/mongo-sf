import conn from "./db/db";
import app from "./app";

conn();

app.listen(3000, () => {
  console.log("listening on port 3000");
})