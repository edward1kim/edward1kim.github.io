---
layout: page
title: "Getting Out of Callback Hell When Using Knex"
date: 2019-11-06
share: false
permalink: /tech/getting-out-of-callback-hell-when-using-knex
categories:
    - Tech
---

It's been several months since I updated anything on that site. I got a bit occupied with my job and enjoying life. In that time, I got a pretty solid handle of Javascript, HTML, and CSS through the bootcamp at work. I recently worked on a project that utilized all of this and a SQL query builder library in Node called [knex.js](https://www.npmjs.com/package/knex). 

For my project, I wanted to make all these queries, have them done in a specific order, and then render data onto a template I built out. However, for some reason, the template would show on my browser with none or just some of the data, but never all until I refreshed the page again. This is because Javascript allows asynchronous processes, and Knex queries are asynchoronous. They have to be because you don't know how long it'll take to retrieve your specified data, and your code should keep continuing forward without waiting for it, if it doesn't have to. 

Asynchronous processes return a `Promise` type, which just signals to the browser that this is asynchronous, it's doing its own thing, and will resolve eventually. A solid use case for this is when you want to grab data from multiple independent tables. You can save time by querying them all at essentially the same point and then waiting for the Promises to all resolve (using `Promise.all()`). Your runtime will just be the longest query. 

However, what if you want to do queries in a certain order? You can use a `.then()` statement that executes once a Promise is finished and do another knex query within that `.then()` statement. And being honest here, I'm not sure if that really does it in order, because I've had mixed results on my queries. 

With a couple queries, it's not bad. But when you start doing three or more queries, it starts to look ugly and you get into this world called callback hell. Here's an example below:

```javascript
let queries = () => {
    knex(table1)
        .where({ id: 4 })
        .then(result1 => {
            knex(table2)
                .where({ id: result1.t2_id })
                .then(result2 => {
                    knex(table3)
                        .where({ id: result2.t3_id })
                        .then(result3 => {
                            . . .
                        });
                });
        });
}
```

Yeah, that got ugly really quickly. A quick and very reliable fix to clean up this code is using `async-await`. By putting `async` in front of a function, you're signaling that this function is going to be asynchronous. The `await` is put in front of other functions within that function to tell the compiler to wait and don't go any farther in the code until this is resolved. We can easily clean up the above code to this:

```javascript
let queries = async () => {
    let result1 = await knex(table1).where({ id: 4 });
    let result2 = await knex(table2.where({ id: result1.t2_id }));
    let result3 = await knex(table3.where({ id: result2.t3_id }));
    . . .
}
```

That's a lot better.

Okay, that's about it. I just wanted to tell whoever reads this that things can be better. Keep it up, whoever you are!