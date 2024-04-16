---
title: "Web Development"
layout: doc
publish: 2024-04-16
lastUpdated: 2024-04-16
description: "Overview of my web development journey"
tags:
  - blog
  - template
  - markdown
  - frontmatter
  - jekyll
  - liquid
  - yaml
  - html
  - css
  - javascript
  - web
  - development
author: Adam Allmer
readTime: 15
excerpt: "This is the template page for the blog."
aside: false
outline: false
category: default
coverImage: "/assets/images/cover.jpg"
next: true
---

[//]: # "This is the template page for the blogs. It is intended to be duplicated for publishing a new blog post with the correct frontmatter."

# Web Development

Web development started at a very young age for me. My dad being IT had been the one to get me hooked on computers and showed me there is more than meets the regular eye.

I fondly remember joining my dad at his work and being in the server room, mesmerized at the blinking lights and the hum of the machines. I was always curious about what was going on in there, my dad probably explained it to me but at the time it didn't mean much. There was a sweet printer with perferated reel holes that I was busy having fun tearing off. He was good at instructing me, as he had ran me through the steps to install the OS on some machines that were needed in the office. I was confused why there wasn't a mouse cursor and had to use a keyboard to navigate the whole process.

My dad was very involved in groups and clubs around the community. He had offered to a few of them to be the webmaster for their sites. This is where he showed me dreamweaver and taught me how HTML worked. I wouldn't say I was fascinated at the coding aspect, but I was definitely drawn into trying to be creative and make something cool. Trying to make a nav bar was probably the thing that killed my motivation, as it just wasn't working out to be the way I wanted it to be. Eventually, these sites found proper webmasters to take over and my dad had moved on to other projects and my life became busier with school, sports, and friends.

I didn't get back into web development until late in high school. I had regained an interest in computers, and was playing with some old laptops that I had installed linux on. This lead to learning bash scripting and some python. I started to get into hacking things to get features that weren't native to them. I was able to jailbreak alot of iPhones and had helped friends get some sweet features then. I had a friend, Tyler, who was into hacking and eventually was getting into web development. Him and I remained friends into college and were in the same dorm together. His pasion for it made me want to start learning more, especially as I was showing him things from the python scripting I was leanrning, he would show me the applications he was building.

I started looking into buying domains, just taking the approach of an easy to start registrar and then a hosting service. I started learning how these things interact with each other and went on to use a new tool to me, frameworks. I started my website with bootstrap and was using dreamweaver to edit the HTML and CSS. I was able to get a site up and running, but it was very basic. I had started playing with how the bootstrap framework allowed for responsive design and was able to make a site that looked good on desktop and mobile. I had a couple things about myself on there and then links to connect with me on platforms and view my Lightroom galleries. I'd occasionally use the hosting service to host a file or two for sharing with friends, but I never really got into much more than serving HTML/CSS.

After I had gotten [Kaiser](/kaiser/) I had started to look into how I could make a page for him. I had been dealing with some JavaScript stuff at work and was starting to understand how to translate my Python knowledge over to JS. With this I wanted to incorporate a script that kept his age up to date at the time of the page load. That script looked like this:

```javascript
if (document.getElementById("age") != null) {
  fetch('js/info.json')
    .then(response => response.json())
      .then(response => {
        var bday = response.Kaiser.birthday;
        var today = new Date();
        var bday = new Date(bday);
        var age = today.getFullYear() - bday.getFullYear();
        var m = today.getMonth() - bday.getMonth();
        var daysThisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        var daysLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        var m = today.getMonth() - bday.getMonth();
        var d = today.getDate() - bday.getDate();
        if (d < 0) {
          m = m - 1;
        }
        d = daysThisMonth + d + (daysLastMonth - bday.getDate() + 1);
        if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) {
          age--;
          m += 12;
        }
        document.getElementById("age").innerHTML = "Age: " + age + " years " + m + " months";
      })
  .catch(err => console.log(err))
}
```

A couple iterations later for some improvements (and the use of Vue) it now looks like this:

```javascript
export default {
  data() {
    return {
      kaiserAge: ''
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch('/js/info.json')
        .then(response => response.json())
        .then(data => {
          this.calculateAge(data.Kaiser.birthday);
        })
        .catch(err => console.error(err));
    },
    calculateAge(birthdayStr) {
      const birthday = new Date(birthdayStr);
      const today = new Date();
      let ageYears = today.getFullYear() - birthday.getFullYear();
      let ageMonths = today.getMonth() - birthday.getMonth();
      if (today.getDate() < birthday.getDate()) {
        ageMonths--;
      }
      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }
      const yearWord = ageYears === 1 ? 'year' : 'years';
      const monthWord = ageMonths === 1 ? 'month' : 'months';
      this.kaiserAge = `${ageYears} ${yearWord} and ${ageMonths} ${monthWord}`;
    }
  }
};
```
I was pretty happy with the old site being useful as a landing page for me when people searched my name in a search engine. But eventually, I wanted more. I wanted to be able to post stuff like what you're reading now! Heck, most of what I've ever learned came from personal blogs sharing their process, and I hope I can do the same now for others.

It really took a whole new turn when I was trying to be able to access my Home Assistant server while on my work network. I had a VPN setup but this was blocked at work, even on their guest network. I had looked into just forwading the port from my internal network, but I wasn't ready to assume all the security risks that could have had. I had started proding AI LLMs for information that might help me make a decision on the many options out there. I eventually found that Cloudflare was a gold mine that I was not yet sitting on. There were so many opportunities for me available here: Zero Trust tunnels, savings on as a domain registrar, ability to setup a script for DDNS, and a CDN for my site so that I no longer require hosting.

So now I had started to take a harder look at the frameworks that were available now and compatible with Cloudflare pages. I went down the route of vue, vite, vuepress, and decided on vitepress. I leaned towrd a "documentation" style since I've always thought the functionality of sites with the sidebar, the outline and markdown genrators would be ideal at work. So really this is all just a proof of concept before I change my teams mind on how we should be documenting our process and procedures. 

I've had a high level view of Git before this latest project, so my practices are currently abyssmal and I should probably commit this page now with the 100 other changes that are mid stride and start actually branching things for the specific feature I am working on.

But for now, what you see is what you get. I'll be updating this overview with bits here and there, especially as I improve the features and overall design of this site. Plenty of enhancements on my mind that we'll see if time allows me to develop and implement. I hope you enjoy and can explore the content I am sharing and be inspired to get going on your projects that might relate to mine. Maybe I have just the thing you needed to get past a hurdle I've encountered.