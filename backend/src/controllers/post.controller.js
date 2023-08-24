"use strict"

import {queryPool} from '../config/db.mysql.config.js';

export async function getAllPosts(req, res) {
    let q = `SELECT
    posts.postid,
    users.userid,
    users.firstname,
    users.lastname,
    users.username,
    posts.post_title,
    posts.post_content,
    posts.date_posted,
    posts.date_modified

    FROM posts
    LEFT JOIN users ON posts.userid = users.userid

    LIMIT 50;
    `;

    try {
        let [resultData] = await queryPool.query(q);
        // console.log(resultData);
        return res.status(200).json({
            success: true,
            result: resultData
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}


export async function getSpecificPost(req, res) {
    let q1 = `SELECT
    posts.postid,
    users.userid,
    users.firstname,
    users.lastname,
    users.username,
    posts.post_title,
    posts.post_content,
    posts.date_posted,
    posts.date_modified

    FROM posts
    LEFT JOIN users ON posts.userid = users.userid

    WHERE posts.postid = ?;
    `;

    let q2 = `SELECT
    posts.postid,
    users.userid,
    users.firstname,
    users.lastname,
    users.username,
    posts.post_title,
    posts.post_content,
    posts.date_posted,
    posts.date_modified

    FROM posts
    LEFT JOIN users ON posts.userid = users.userid

    LIMIT 15;
    `;

    let postid = req.params["postid"];
    // console.log(`\nparam = ${postid}\n`);

    try {
        let [resultData] = await queryPool.query(q1, [postid]);
        let [recommendedData] = await queryPool.query(q2);
        // console.log(resultData);
        return res.status(200).json({
            success: true,
            result: resultData,
            recommended: recommendedData
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}
