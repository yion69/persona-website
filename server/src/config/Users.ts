import { Schema, model } from "mongoose";

const blogScheme = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})
export const Users = model('User', userSchema);
export const Blogs = model('Blog', blogScheme);