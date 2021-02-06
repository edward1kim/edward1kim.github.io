---
title: "Pagination Problem"
date: 2021-02-05
category: ["tidbits"]
---

I have to say... I'm pretty happy with how this website looks! It was a lot of finnicky styling, copying and pasting and crossing my fingers that it'll work. I am especially proud of how the navbar items glow when your mouse hovers over it and same things when hovering over the posts on the page. I love my sideways napa cabbage icon, that it signifies "home". 

But one thing that I've been trying to do yet running into constant issues is pagination. You see, as I keep writing, especially in my tidbits section, the number of posts shown on a page will grow. This just won't scale. A quick and easy fix to this is pagination, where you split up the number of posts over several pages and you click "next" or "previous" to look for more. A quick example: If I have a 100 posts, instead of showing all 100 posts with excerpts on a single home page, I can split it evenly over 5 pages. 

My issue is just the way that I have my code set up. Gatsby works starting with a file called `gatsby-node`. In this file, I have a GraphQL query that grabs all my posts and landing pages and creates those paths for me (path is like eggwardkim.com/food/this-is-a-post). Since I really only have 2 types of pages (posts and lists of posts), I use separate templates to format them. Now, this isn't that hard of an issue to solve: All I need to do is find the total number of posts in each category, split it up, and create new paths per split. However, the issue that I have is in my actual template.

All `gatsby-node` does is assign a template to use for each page on the site. It does not pass in the posts that you'd want to see on the page, which is itself a unique query. I'm having a hard time differentiating between a file that's a post list and one that is just a post... I know I'm not explaining this well.

But while writing this out, I just had an epiphany so. Thanks for reading.