---
title: "From C++ to Rust"
date: 2019-05-30
category: "tech"
---
For a few months now, I've been going through the [The Rust Programming Language][rust-book]{} book (known as The Book). I heard about this language while peeking at someone's github, and since I just finished my Euchre project in EECS 280 of my last semester at Michigan, I said, "Why not?" It's very similar to C++, especially syntactically, but it's safer (i.e. more safeguards against memory leaks through its concept of "ownership", anything declared is immutable by default, functions must be explicitly declared public if you want to use it in other files—to name a few) and performs almost as efficiently. This post is going to expand on my musings on going from one object oriented language to another. 

Let's start with declaring a variable. In C++, it'd be something like this:

{% highlight cpp %}
int x = 0;
x = 1;
{% endhighlight %}

Pretty simple and straightforward. Here, you're declaring variable 'x' as an integer type and assigning it the value 0. Then, you're assigning the variable to 1. However, in Rust, you got to work a bit harder to accomplish the same thing. For example, I've translated the code above to Rust, but in this code snippet, it will not compile:

{% highlight rust %}
let x: i8 = 0;
x = 1;
{% endhighlight %}

You get an error like this:

{% highlight rust%}
error[E0384]: cannot assign twice to immutable variable `x`
 --> src/main.rs:x:x
  |
2 |     let x: i8 = 0;
  |         -
  |         |
  |         first assignment to `x`
  |         help: make this binding mutable: `mut x`
3 |     x = 1;
  |     ^^^^^ cannot assign twice to immutable variable
{% endhighlight %}

All declared variables are set as immutable unless explicitly told mutable. To have it compile, you'll have to set 'x' as mutable:

{% highlight rust %}
let mut x: i8 = 0;
x = 1;
{% endhighlight %}

This is a quick example of just how careful and annoying it is to code in Rust. The compiler is amazing in that it catches everything. Likewise, it makes it absolutely frustating to translate what's so easily understood in C++ into Rust. The stats project given in EECS 280 is to just dip your toes in the water of C++. You get a good handle of functions and arguments, basic syntax and declarations, and loops and conditionals. It seemed like a great starting point for me in learning the similar syntax of Rust while also living the glory days of Michigan EECS. 

Sidenote: I was only in an EECS course my first semester freshman year for ENGR 101 and my last semester of college in EECS 280 (and very briefly EECS 203). 

It's a project that I can crank out in a day, but one core principle of Rust really took my C++ mind on a roller coaster: Ownership. I can't explain it that well, so I will refer to whomever to [the section][rust-ownership]{} in The Book. 

Quoting from that page, "Ownership is Rust’s most unique feature, and it enables Rust to make memory safety guarantees without needing a garbage collector." It's an extra thing to keep in mind while coding, and that made translating my stats code project a bit challenging. Here are the three rules of ownership in Rust:

* Each value in Rust has a variable that’s called its owner.
* There can only be one owner at a time.
* When the owner goes out of scope, the value will be dropped.

This came up a lot when I was calling functions that utilized variables in the heap. Variables in the stack (like integers) aren't as huge of an issue because they're of known size, but ownership really comes into play if you have a object on the heap and you have several different functions trying to do tasks with that object. Ownership is a law that Rust put in so that you you don't mess around with objects if you don't intend to. I really wish I could go on this topic further, but I just don't have the knowledge at the moment to really do it service. Maybe in another blog post just dedicated to that. 

I'm going a bit long here, but overall, this translation from C++ to Rust has been a very good learning experience. I doubt I'll be using Rust at Capital One, but I'm mainly doing this to see if I can learn something by myself and challenge myself technically. You can see my short piece of work on my github and the repo is found [here][stats-proj]{}.

For now, thanks for reading through my first post! More to come in the Food and Life sections.

[rust-book]: https://doc.rust-lang.org/book/
[rust-ownership]: https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html
[stats-proj]: https://github.com/edward1kim/Stats-in-Rust