# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- JavaScript

### What I learned

During this challenge I learned a few things.

1. How to use grid-template-areas:

```css
.content {
  display: grid;
  grid-template-areas:
    "a d"
    "b b"
    "c c";
  & h3 {
    grid-area: a;
  }
  & .time {
    grid-area: b;
  }
  & .previousTime {
    grid-area: c;
  }
  & img {
    grid-area: d;
  }
}
```

2. Switch statement which is used for matching the expression's value against a series of case clause:

```js
switch (timeframe) {
  case "daily":
    frequence = "day";
    break;
  case "weekly":
    frequence = "week";
    break;
  case "monthly":
    frequence = "month";
    break;
  default:
    frequence = "time";
}
```

### Continued development

In future projects I would love to focus on fetching data from a data.json files.

### Useful resources

- [Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) - MDN article about switch statement

## Author

- Github - [Artem Kotko](https://github.com/artemkotko14)
- Frontend Mentor - [@artemkotko14](https://www.frontendmentor.io/profile/artemkotko14)
