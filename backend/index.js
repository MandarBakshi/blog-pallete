"use strict"

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { appConfig } from './src/config/app.config.js';
import { userRouter } from './src/routes/user.route.js';
import { postRouter } from './src/routes/post.route.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

const portNum = appConfig.node_port;

app.listen(portNum, function() {
    console.log(`\nserver listening on port ${portNum}\n`);
});