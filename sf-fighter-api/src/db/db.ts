import mongoose from "mongoose";
import { seed } from "../seeder/seed";

function conn() {
  try {
    const url = `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.DB_NAME}:${process.env.PORT_NUM}`
    mongoose.connect(url)
      .then( async () => {
        await seed();
      })
    const db = mongoose.connection;
    db.on('error', () => { console.log( "connnection error : ")});
    db.once('open', () => console.log("connection OK") )
  } catch (error) {
    console.log(error.message, error);
  }
}

export default conn;