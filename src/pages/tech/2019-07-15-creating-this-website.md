---
title: "Creating This Website "
date: 2019-07-15
category: "tech"
---

For the most part, everything is set up for this website! I've already made a few posts for each of my three categories, and nothing looks off so far. Creating this website was easier than I thought, mainly because I took several shortcuts to get to this point. 

The site is hosted on Github Pages using Jekyll as the site generator. Most of the work was done using this Jekyll [theme](https://github.com/mmistakes/so-simple-theme) with minor edits to fit my design preferences. It's very bare-bones with very little, if any, add-ons or features. I was looking for something simple, and this was the at the top of the search results. Since I used a theme with already written HTML and CSS, I didn't learn much. I thought I would learn *something* about web dev just by reading through the repo's README and skimming the code, but beyond the initial hump of "What the heck is Jekyll", everything was pretty straightforward! 

I did do a ton of trial and error on how to set up the different pages, like the Home page, About page, and everything else. It was necessarily hard—just unfamiliar. My main issue with this approach was that I had to build off of someone else's code. Since there's so much structure already implemented in the theme, I had no freedom to do what I wanted. Nine out of ten times I would have no issues on creating something for the website, but there would be few instances where my Google searching would land me in the "you can take the CSS/HTML approach". This wasn't an option for me a lot of the time.

I want to end this post on a small anecdote and some final thoughts about my website endeavor.

If you look at the [example](https://mmistakes.github.io/so-simple-theme/), the navigation bar at the top has an animation coming down. This really annoyed me. I wanted my site to be nearly static, with only the fade in since that was less intrusive to my eyes. I had no idea where to start because this animation was a CSS implementation. Where the heck was I supposed to find that? I didn't even know the language.

Finally, I found a promising file called `_animations.scss`. Skimming through I found this code block.

```
/*
   Drop animation .drop
   ========================================================================== */

@-webkit-keyframes drop {
  0% {
    -webkit-transform: translateY(-500px);
  }
  100% {
    -webkit-transform: translateY(0);
  }
}
@keyframes drop {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
.drop {
  -webkit-animation-name: drop;
  animation-name: drop;
}
```

I want to be very clear here: I have no idea what this means. I have no idea what place this snippet meant in relation to the website and whether it connected to some other file in the repository. I had no idea what would happen if I commented this section out. But I did it anyway, and it stopped the animation.

The lesson here is that taking the easy way let me get to my final product faster with the trade off of creative claustrophoobia. It felt like I had no room to do anything except write posts. If I wanted to grow this website to something more, I'd have to start over from the ground up, designing it the way I truly want it with the ability to add on features if I so choose to. I'm stumped on whether it was worth it to take these shortcuts if this solution is only going to satisfy for a short period of time. Would it have been worth the time to learn web development, even when I have no clue if my website will grow to something more? For all I know, this is the best it's going to get.

The decisions I make now are important. As I work on projects, both personal and professional, the prep that happens before any code is written is probably the most important step. Reminds me of the meetings Daniel and I would have in EECS 280 when we're just trying to make sense of the project spec.

That is my big takeaway on creating this website. Good lessons to know. Also, if anything on this site breaks, I'm blaming it on my deletion of the drop animation. Not my fault.