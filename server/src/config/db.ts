import mongoose, { Models, Schema } from "mongoose";
import dotenv from "dotenv";
import { Blogs, Users } from "./Users";

export class Database {
    
    private username:string;
    private password:string;
    private server:string;

    constructor() {

        dotenv.config();
 
        this.username = process.env.DB_USERNAME!;
        this.password = process.env.DB_PASSWORD!;
        this.server = process.env.DB_SERVER!;
        
        this.dbConnect();
    }

    private async dbConnect() {
        try{    
            await mongoose.connect(`mongodb+srv://${this.username}:${this.password}@${this.server}.c1r5kvh.mongodb.net`);
            console.log("Database Connected");  
        } catch(e) {
            console.error(e);
        }
    }

    public getData() {
        try {
            Blogs.find()
                .then(data => {
                    return data;
                })
                .catch(err => {
                    return err;
                })
        } catch(e) {
            console.error(e);
        }
    }
}
