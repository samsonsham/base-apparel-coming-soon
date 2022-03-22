# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](https://ik.imagekit.io/c5xc1x6srka/screenshot/screen-base-apparel-coming-soon-page_QFkyWtsaf.png)

### Links

- Solution URL: [https://github.com/samsonsham/base-apparel-coming-soon.git](https://github.com/samsonsham/base-apparel-coming-soon.git)
- Live Site URL: [https://samsonsham.github.io/base-apparel-coming-soon/](https://samsonsham.github.io/base-apparel-coming-soon/)

## My process

- Set up SCSS file structure. Define all the styles given by style guide, including colours and font into SCSS files.
- Define components and setup corresponding DOM elements in HTML file.
- Mobile first, build each elements by with colours, alignment, and adjusting size.
- Create js to validate email address.

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Javascript

### What I learned

I learnt to do validation in HTML5 way.

```js
const formSubmitHandler = (e) => {
  e.preventDefault();

  const elemInput = document.querySelector('.email__input');
  // Validate email by HTML5 input type email
  if (elemInput.matches(':valid')) {
    submitForm();
  } else {
    showErrMsg();
  }
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Useful resources

- [Using built-in form validation - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation) - I learnt HTML5 form validation from this.
- [Querying pseudo classes of an element in pure Javascript - Stackoverflow](https://stackoverflow.com/questions/38195742/querying-pseudo-classes-of-an-element-in-pure-javascript) - I learn checking pseudo class by js from this.
- [button onclick="e.preventDefault();" issue - Stackoverflow](https://stackoverflow.com/questions/64536845/button-onclick-e-preventdefault-return-true-gives-e-is-not-defined-in-brow) - I learnt that onclick="function(event)" should be use instead of onclick="function(e)".

## Author

- Website - [Samson Sham](https://samson-sham-portfolio.vercel.app)
- Frontend Mentor - [@samsonsham](https://www.frontendmentor.io/profile/samsonsham)
- Twitter - [@samson_sham](https://www.twitter.com/samson_sham)
