"use strict"

import {Router} from 'express';
import {
    getAllPosts,
    getSpecificPost
} from '../controllers/post.controller.js';


const postRouter = Router();

postRouter.get('/get-posts/', getAllPosts);
postRouter.get('/get-post/:postid/', getSpecificPost);

export {postRouter}
