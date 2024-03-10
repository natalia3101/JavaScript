"use strict";

/*
Необходимо из объекта post, вывести значения, к которым приписан комментарий, 
в консоль.
*/

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};



console.log(`Author: ${post.author}`);
const firstComment = post.comments[0];
const secondComment = post.comments[1];
console.log(`Comment 1 dislikes: ${firstComment.rating.dislikes}`);
console.log(`Comment 2 user ID: ${secondComment.userId}`);
console.log(`Comment 2 text: ${secondComment.text}`);