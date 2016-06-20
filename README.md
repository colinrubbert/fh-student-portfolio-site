# No Framework Portfolio Outline

### Introduction

* Why it's important to go beyond the frameworks and go to the core of your technology.
* Getting the most out of your framework by understanding the core principles.

### Mockups
##### Desktop Mockup
![Image of original mockup](https://raw.githubusercontent.com/colinrubbert/fh-student-portfolio-site/gh-pages/mockups/FH-Portfolio_Mockup-Desktop.jpg)

##### Mobile Mockup
Coming Soon...

### Software that will be needed
* [Prepros](https://prepros.io/) - HTML/CSS compiler & preocessing software to run code native in local environment.
    * Alternatives to Prepros
        * [Codekit](http://incident57.com/codekit/index.html)
        * [LiveReload](http://livereload.com/)

### Design decisions
* Typography - Choosing a font and/or font pairing
    *  [Google Fonts](https://fonts.google.com) - Fonts
    *  [Typekit](https://typekit.com) - Fonts
    *  [Font Pair](https://fontpair.co) - Font Pairing
    *  [Typegenius](http://www.typegenius.com/) - Font Pairing
* Color Palette - Choosing a color palette
    *  [Flat UI Colors](http://www.flatuicolorpicker.com/)
    *  [Google Material Design Colors](https://material.google.com/style/color.html)
    *  [Color Palette Ideas](http://colorpalettes.net/) - Palettes based on nature, objects, and structures
    *  [Coolors](https://coolors.co/) - Color palette generator


### Setting up the file structure
```
FEWD(folder)
    css(folder)
        1-base(folder)
	        _fonts.sass
	        _typography.sass
	        _variables.sass
        2-components(folder)
	        _navigation.sass
	        _hero.sass
            _work.sass
            _about.sass
            _testimonials.sass
            _contact.sass
        main.css
        main.sass
    js(folder)
    images(folder)
        social-icons(folder)
            behance.svg
            dribbble.svg
            email.svg
            facebook.svg
            github.svg
            google-plus.svg
            instagram.svg
            linkedin.svg
            phone.svg
            twitter.svg
            youtube.svg
        books.jpg
        close.svg
        coffee.jpg
        community.jpg
        hero.jpg
        lightning.jpg
        me.jpg
        woman_contemplation.jpg
    index.html
```
### Setting up "main.sass"
This file will be necessary to import all of our sass files while also be the reference point for our css compiling.

```sass
// Sass Imports

// 1 - Base Sass
@import '1-base/fonts'
@import '1-base/variables'
@import '1-base/typography'
@import '1-base/global'


// 2 - Components Sass
@import '2-components/navigation'
@import '2-components/hero'
@import '2-components/work'
@import '2-components/about'
@import '2-components/testimonial'
@import '2-components/contact'

```

### Setting up the base sass
* Fonts - Adding custom fonts and font files
```sass
// Font Styling
@import 'https://fonts.googleapis.com/css?family=Lobster|Raleway'
```
* Typography - Creating a custom typography structure and styling
```sass
// Typography and Global document styling

*, html
  -moz-box-sizing: border-box
  box-sizing: border-box
body
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-rendering: optimizeLegibility

body, html, h1, h2, h3, h4, h5, h6, p
  margin: 0
  padding: 0

h1
  font-size: 64px
  line-height: 64px
  font-weight: 700

h2
  font-size: 48px
  line-height: 48px
  font-weight: 700

h3
  font-size: 36px
  line-height: 36px
  font-weight: 700

h4
  font-size: 24px
  line-height: 24px
  font-weight: 700

h5
  font-size: 18px
  line-height: 18px
  font-weight: 700

h6
  font-size: 12px
  line-height: 12px
  font-weight: 700


em, .text-italic
  font-style: italic

.text-center
  text-align: center

```
* Variables - Creating variables that will be used throughout the site
```sass
// Variables

// Fonts
$font-primary: Raleway, sans-serif
$font-alt: Lobster, sans-serif

// Text
$primary-text-color: #1f2024
$secondary-text-color: #f5f5f5


// Colors

$primary-color: #f5f5f5
$secondary-color: #ebebeb
$highlight-color: #3a84ff


// Button Colors
$primary-button: #1893E4
$primary-button-hover: #2284c1
$secondary-button: #1fc157
$secondary-button-hover: #19a84b
$alert-button: #EC5840
$warning-buton: #FFAE00


// Media Queries

$tablet-breakpoint: 768px
$mobile-breakpoint: 500px

```
* Global - Global styling for specific structures like containers and buttons
```sass
// Global Settings for structures

.container
  width: 80%
  margin: 0 auto

.section-title
  margin-bottom: 50px

.button
  border-radius: 3px
  width: 80px
  padding: 10px
  margin: 0
  text-align: center
  border: 1px solid #ccc

.primary-button
  background-color: $primary-button
  color: #fff
  border-color: $primary-button
  transition: 0.25s ease-in-out
  &:hover
    background-color: $primary-button-hover
    border-color: $primary-button-hover

.secondary-button
  background-color: $secondary-button
  color: #fff
  border-color: $secondary-button
  transition: 0.25s ease-in-out
  &:hover
    background-color: $secondary-button-hover
    border-color: $secondary-button-hover

.icon
  height: 80px
  width: 80px

```

### Building The HTML Document
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta <http-equiv="X-UA-compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Portfolio</title>
    <link rel="stylesheet" type="text/css" href="css/main.css">
  </head>

  <body>
  </body>

 </html>
```

### Flexbox primary
* In depth look on flexbox and why it's the future of web design
* Based off of a compilation of these resources
    * [Using Flexbox Today](https://chriswrightdesign.com/experiments/using-flexbox-today/)
    * [Almost Complete Guide To Flexbox](https://kyusuf.com/post/almost-complete-guide-to-flexbox-without-flexbox)
    * [Scotch.io Guide to Flexbox](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)

### Building the Navigation
#### HTML
```html
<nav id="navigation-wrapper">
      <div class="container">
        <div class="navigation-container">
          <div class="navigation-branding-wrapper">
            <div>
              <h2 class="navigation-title">Colin Rubbert</h2>
            </div>
          </div>
          <div class="navigation-links-wrapper">
            <div class="navigation-links">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#testimonial">Testimonials</a>
              <a href="#contact">Contact</a>
              <a href="#">Resume</a>
            </div>
          </div>
          <div class="mobile-navigation-toggle">
            <div class="mobile-menu">Menu</div>
            <div class="mobile-close"><img src="images/close.svg" alt="close"></div>
          </div>
        </div>
      </div>
    </nav>
```
#### SASS

```sass
// Navigation Styling
#navigation-wrapper
  background-color: transparent

.navigation-container
  display: flex
  flex-direction: row
  justify-content: space-between

.navigation-branding-wrapper
  .navigation-title
    font-family: $font-alt
    margin: 16px 0

.navigation-links-wrapper
  .navigation-links
    margin: 26px 0
    a
      text-decoration: none
      color: $primary-text-color
      font-size: 28px
      line-height: 28px
      padding-left: 20px
      transition: 0.25s ease-in-out
      &:hover
        color: $highlight-color

```

### Build The Hero Section
#### HTML
```html
<section id="hero">
      <div class="hero-snippet-container">
        <div>
          <h3 class="hero-snippet">Developer // Designer // Freelancer</h3>
        </div>
      </div>
    </section>
```

#### SASS
```css
// Hero Styling

#hero
  height: 680px
  width: 100%
  background: url("../images/hero.jpg") 50% 30% no-repeat
  background-size: cover
  margin-top: -80px

.hero-snippet-container
  display: flex
  flex-wrap: wrap
  justify-content: center
  padding-top: 130px

  .hero-snippet
    font-weight: 300
```

### Build The Work Section
Brief introduction to "object-fit" css attribute for having images act like cover images
* [Mozilla MDN Object-Fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
* [CSS-Tricks Object-Fit](https://css-tricks.com/almanac/properties/o/object-fit/)
* [Can I Use It - CSS Support Object-Fit](http://caniuse.com/#feat=object-fit)

#### HTML
```html
<section id="work">
      <div class="container">
        <div class="section-title">
          <h3 class="text-center">Work</h3>
        </div>
        <div class="work-sample-container">
          <div class="work-card-container">
            <div class="work-card-hero">
              <img src="images/woman_contemplation.jpg" alt="">
            </div>
            <div class="work-card-content-container">
              <h4 class="work-title">
                Splurty
              </h4>
              <h5 class="work-description">
                Random Quote Generator
              </h5>
              <p class="work-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
            <div class="work-button-container">
              <a href="https://github.com/colinrubbert" target="_blank" class="button primary-button">Code</a>
              <a href="#" target="_blank" class="button secondary-button">Site</a>
            </div>
          </div>

          <div class="work-card-container">
            <div class="work-card-hero">
              <img src="images/coffee.jpg" alt="">
            </div>
            <div class="work-card-content-container">
              <h4 class="work-title">
                Nomster
              </h4>
              <h5 class="work-description">
                Local Food Review
              </h5>
              <p class="work-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
            <div class="work-button-container">
              <a href="https://github.com/colinrubbert" target="_blank" class="button primary-button">Code</a>
              <a href="#" target="_blank" class="button secondary-button">Site</a>
            </div>
          </div>

          <div class="work-card-container">
            <div class="work-card-hero">
              <img src="images/books.jpg" alt="">
            </div>
            <div class="work-card-content-container">
              <h4 class="work-title">
                Flixter
              </h4>
              <h5 class="work-description">
                Online Education Platform
              </h5>
              <p class="work-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>

              <p class="work-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
            <div class="work-button-container">
              <a href="https://github.com/colinrubbert" target="_blank" class="button primary-button">Code</a>
              <a href="#" target="_blank" class="button secondary-button">Site</a>
            </div>
          </div>

          <div class="work-card-container">
            <div class="work-card-hero">
              <img src="images/lightning.jpg" alt="">
            </div>
            <div class="work-card-content-container">
              <h4 class="work-title">
                Lightning Talks
              </h4>
              <h5 class="work-description">
                Lightning Talk Topic Suggestion &amps; Scheduling
              </h5>
              <p class="work-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
            <div class="work-button-container">
              <a href="https://github.com/colinrubbert" target="_blank" class="button primary-button">Code</a>
              <a href="#" target="_blank" class="button secondary-button">Site</a>
            </div>
          </div>

          <div class="work-card-container">
            <div class="work-card-hero">
              <img src="images/community.jpg" alt="">
            </div>
            <div class="work-card-content-container">
              <h4 class="work-title">
                Firehose Community Blog
              </h4>
              <h5 class="work-description">
                Blog for the students of the Firehose Project
              </h5>
              <p class="work-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
            <div class="work-button-container">
              <a href="https://github.com/colinrubbert" target="_blank" class="button primary-button">Code</a>
              <a href="#" target="_blank" class="button secondary-button">Site</a>
            </div>
          </div>

          <div class="work-cta">
            <a href="#contact">Be the next...</a>
          </div>

        </div>
      </div>
    </section>
```
#### SASS
```sass
// Work Styling

#work
  padding: 50px 0

.work-section-title
  margin-bottom: 50px

.work-sample-container
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: stretch
  flex-wrap: wrap

  .work-card-container
    margin-bottom: 30px
    width: 30%
    border-radius: 3px
    -mox-box-shadow: 5px 5px 5px #ccc, -5px 5px 5px #ccc
    box-shadow: 5px 5px 5px #ccc, -5px 5px 5px #ccc
    display: flex
    flex-direction: column
    justify-content: space-between

    .work-card-hero
      height: 200px
      img
        height: 100%
        width: 100%
        object-fit: cover
        border-radius: 3px 3px 0 0

    .work-card-content-container
      padding: 20px
      .work-title
        font-family: $font-alt
        margin-bottom: 10px
      .work-description
        margin-bottom: 10px
      .work-content
        margin-bottom: 10px

    .work-button-container
      padding: 20px
      display: flex
      flex-direction: row
      justify-content: space-between
      transition: 0.25s ease-in-out
      a
        text-decoration: none
        font-size: 18px
        line-height: 18px

  .work-cta
    width: 30%
    padding: 20px
    display: flex
    flex-direction: column
    justify-content: flex-end
    text-align: center
    a
      font-size: 36px
      line-height: 36px
      text-decoration: none
      color: $primary-button
      transition: 0.25s ease-in-out
      &:hover
        color: $secondary-button

```

### Build Out The About Section

#### HTML
```html
<section id="about">
      <div class="container">
        <div class="section-title">
          <h3 class="text-center">About</h3>
        </div>
        <div class="about-section-wrapper">
          <div class="about-face-container">
            <div class="about-face">
            </div>
          </div>
          <div class="about-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            </p>
            <p>
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p>
              Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.
            </p>
          </div>
        </div>
      </div>
    </section>
```
#### SASS
```sass
// About Styling

#about
  padding: 50px 0
  background-color: $secondary-color

.about-section-title
  margin-bottom: 50px

.about-section-wrapper
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center

  .about-face-container
    width: 50%
    .about-face
      width: 300px
      height: 300px
      margin-left: 50px
      border-radius: 50%
      background-size: cover
      background-repeat: no-repeat
      background-image: url("../images/me.jpg")

  .about-content
    width: 50%
    padding: 20px
    p
      padding: 10px
```

### Build The Testimonials Section

#### HTML
```html
<section id="testimonial">
      <div class="container">
        <div class="section-title">
          <h3 class="text-center">Testimonials</h3>
        </div>
        <div class="testimonial-wrapper">
          <div class="testimonial-content-container">
            <div class="testimonial-quote">
              <h5>
                &quot;What a lord, such a hard working badass developer. I will never use another again.&quot;
              </h5>
            </div>
            <div class="testimonial-name">
              &#126; <em>Seth Sentry</em>
            </div>
          </div>

          <div class="testimonial-content-container">
            <div class="testimonial-quote">
              <h5>
                &quot;What a lord, such a hard working badass developer. I will never use another again.&quot;
              </h5>
            </div>
            <div class="testimonial-name">
              &#126; <em>Seth Sentry</em>
            </div>
          </div>

          <div class="testimonial-content-container">
            <div class="testimonial-quote">
              <h5>
                &quot;What a lord, such a hard working badass developer. I will never use another again. What a lord, such a hard working badass developer. I will never use another again. What a lord, such a hard working badass developer. I will never use another again.&quot;
              </h5>
            </div>
            <div class="testimonial-name">
              &#126; <em>Seth Sentry</em>
            </div>
          </div>

          <div class="testimonial-content-container">
            <div class="testimonial-quote">
              <h5>
                &quot;What a lord, such a hard working badass developer. I will never use another again.&quot;
              </h5>
            </div>
            <div class="testimonial-name">
              &#126; <em>Seth Sentry</em>
            </div>
          </div>

          <div class="testimonial-content-container">
            <div class="testimonial-quote">
              <h5>
                &quot;What a lord, such a hard working badass developer. I will never use another again. What a lord, such a hard working badass developer. I will never use another again. What a lord, such a hard working badass developer. I will never use another again.&quot;
              </h5>
            </div>
            <div class="testimonial-name">
              &#126; <em>Seth Sentry</em>
            </div>
          </div>

          <div class="testimonial-cta">
            <a href="#contact">Be the next...</a>
          </div>
        </div>
      </div>
    </section>
```
#### SASS
```sass
// Testimonial Styling

#testimonial
  padding: 50px 0

.testimonial-section-title
  margin-bottom: 50px

.testimonial-wrapper
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-between

  .testimonial-content-container
    width: 30%
    padding: 20px
    .testimonial-name
      padding: 20px 20px 0 20px
      font-size: 24px
      line-height: 24px
      color: $highlight-color

  .testimonial-cta
    width: 30%
    padding: 20px
    display: flex
    flex-direction: column
    justify-content: flex-end
    a
      text-decoration: none
      color: $primary-button
      font-size: 36px
      line-height: 36px
      transition: 0.25s ease-in-out
      &:hover
        color: $secondary-button
```

### Build Out The Contact Section
#### HTML
```html
<section id="contact">
      <div class="container">
        <div class="section-title">
          <h3 class="text-center">Contact</h3>
        </div>
        <div class="contact-wrapper">
          <a href="mailto:colinrubbert@gmail.com">
            <img src="images/social-icons/email.svg" alt="email" class="icon">
          </a>
          <a href="#">
            <img src="images/social-icons/facebook.svg" alt="facebook" class="icon">
          </a>
          <a href="#">
            <img src="images/social-icons/github.svg" alt="github" class="icon">
          </a>
          <a href="#">
            <img src="images/social-icons/behance.svg" alt="behance" class="icon">
          </a>
          <a href="#">
            <img src="images/social-icons/phone.svg" alt="phone" class="icon">
          </a>
          <a href="#">
            <img src="images/social-icons/twitter.svg" alt="twitter" class="icon">
          </a>
          <a href="#">
            <img src="images/social-icons/linkedin.svg" alt="linkedin" class="icon">
          </a>
          <a href="#">
            <img src="images/social-icons/instagram.svg" alt="instagram" class="icon">
          </a>
        </div>
        <div class="copyright text-center">
          <em>&copy; Colin Rubbert 2016</em>
        </div>
      </div>
    </section>
```
#### SASS
```sass
// Contact Styling

#contact
  padding: 50px 0
  background-color: $secondary-color

.contact-wrapper
  display: flex
  flex-direction: row
  justify-content: space-around
  a
    display: flex
    justify-content: center
    text-decoration: none
  img
    border-radius: 50%
    transition: 0.25s ease-in-out
    &:hover
      border-radius: 50%
      -moz-box-shadow: 3px 8px 20px #bbb, -3px 8px 20px #bbb
      box-shadow: 3px 8px 20px #bbb, -3px 8px 20px #bbb

.copyright
  margin-top: 50px
```

### Making It Mobile Responsive

### Global Settings
#### SASS
Append mobile & responsive media queries to "_global.sass" file
```sass
// Media Queries

@media screen and (max-width: $tablet-breakpoint)
  .container
    width: 90%
    margin: auto

```

### Mobile Navigation Section
#### HTML
Adding a mobile navigation section about the navigation wrapper
```html
<div class="mobile-navigation-links-wrapper">
      <div class="navigation-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#testimonial">Testimonials</a>
        <a href="#contact">Contact</a>
        <a href="#">Resume</a>
      </div>
    </div>
```
Code snippet to be appended to section
```html
<div class="mobile-navigation-toggle">
     <div class="mobile-menu">Menu</div>
    <div class="mobile-close"><img src="images/close.svg" alt="close"></div>
</div>
```
Section with the appended code
```html
    <nav id="navigation-wrapper">
      <div class="container">
        <div class="navigation-container">
          <div class="navigation-branding-wrapper">
            <div>
              <h2 class="navigation-title">Colin Rubbert</h2>
            </div>
          </div>
          <div class="navigation-links-wrapper">
            <div class="navigation-links">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#testimonial">Testimonials</a>
              <a href="#contact">Contact</a>
              <a href="#">Resume</a>
            </div>
          </div>
          <div class="mobile-navigation-toggle">
            <div class="mobile-menu">Menu</div>
            <div class="mobile-close"><img src="images/close.svg" alt="close"></div>
          </div>
        </div>
      </div>
    </nav>
```
Entire navigation section
```html
<div class="mobile-navigation-links-wrapper">
      <div class="navigation-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#testimonial">Testimonials</a>
        <a href="#contact">Contact</a>
        <a href="#">Resume</a>
      </div>
    </div>

    <nav id="navigation-wrapper">
      <div class="container">
        <div class="navigation-container">
          <div class="navigation-branding-wrapper">
            <div>
              <h2 class="navigation-title">Colin Rubbert</h2>
            </div>
          </div>
          <div class="navigation-links-wrapper">
            <div class="navigation-links">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#testimonial">Testimonials</a>
              <a href="#contact">Contact</a>
              <a href="#">Resume</a>
            </div>
          </div>
          <div class="mobile-navigation-toggle">
            <div class="mobile-menu">Menu</div>
            <div class="mobile-close"><img src="images/close.svg" alt="close"></div>
          </div>
        </div>
      </div>
    </nav>
```
#### jQuery
In order to make the menus open and close properly we will incorporate jQuery to handle those calls
* Download and place the minified jQuery file in the "js" folder
    * [jQuery](https://code.jquery.com/jquery-2.2.4.min.js) - Version 2.2.4

```javascript
$(function() {
  mobileNav();
});

//Function to open and close navigation on mobile devices
function mobileNav() {
  $('.mobile-navigation-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){
      $('.mobile-navigation-toggle, .mobile-navigation-links-wrapper, .mobile-menu, .mobile-close').removeClass('is-open');
    } else {
      $('.mobile-navigation-toggle, .mobile-navigation-links-wrapper, .mobile-close, .mobile-menu').addClass('is-open');
      $('.navigation-links a').click( function(){
        $('.mobile-navigation-toggle, .mobile-navigation-links-wrapper, .mobile-menu, .mobile-close').removeClass('is-open');
      });
    }
  });
}

```

#### HTML
Append the jQuery snippets to the bottom of the body of the document
```html
    ... bottom of index.html

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="js/jquery-2.2.4.min.js" type="text/javascript"></script>
    <script src="js/main.js" type="text/javascript"></script>
  </body>

</html>
```
#### SASS
Append mobile & responsive settings to SASS file
```sass
.mobile-navigation-links-wrapper
  position: absolute
  display: flex
  width: 100%
  background-color: $primary-color
  transform: translateY(-100%)
  transition: 0.25s ease-in-out
  .navigation-links
    margin: 60px auto 25px auto
    display: flex
    flex-direction: column
    justify-content: center
    width: 100%
    a
      text-align: center
      text-decoration: none
      color: $primary-text-color
      font-size: 28px
      line-height: 28px
      padding: 20px
      transition: 0.25s ease-in-out
      &:hover
        color: $highlight-color

.mobile-navigation-toggle
  display: none
  position: relative
  .mobile-menu
    display: flex
    font-size: 24px
    line-height: 24px
    margin: 28px 0
  .mobile-menu.is-open
    display: none
  .mobile-close
    display: none
    margin: 28px 0
    img
      width: 24px
      height: 24px
  .mobile-close.is-open
    display: flex


// Media Queries

@media screen and (max-width: $tablet-breakpoint)
  .navigation-branding-wrapper
    .navigation-title
      font-size: 36px
      line-height: 36px
      margin: 22px 0

  .navigation-links-wrapper
    display: none

  .mobile-navigation-links-wrapper.is-open
    transform: translateY(0%)

  .mobile-navigation-toggle
    display: flex

@media screen and (max-width: $mobile-breakpoint)
  .navigation-branding-wrapper
    .navigation-title
      font-size: 30px
      line-height: 30px
      margin: 25px 0
```

### Mobile Hero Section
#### SASS
Append mobile & responsive media queries

```sass
// Media Queries

@media screen and (max-width: $tablet-breakpoint)
  #hero
    height: 380px

  .hero-snippet-container
    padding-top: 80px

    .hero-snippet
      font-size: 24px
      line-height: 24px

@media screen and (max-width: $mobile-breakpoint)
  .hero-snippet-container
    .hero-snippet
      font-size: 18px
      line-height: 18px
```

### Mobile Work Section
#### SASS
Append mobile & responsive media queries

```sass
// Media Queries

@media screen and (max-width: $tablet-breakpoint)
  .work-sample-container
    .work-card-container
      width: 100%

      .work-button-container
        justify-content: space-around

    .work-cta
      width: 100%
```

### Mobile About Section
#### SASS
Append mobile & responsive media queries

```sass
// Media Queries

@media screen and (max-width: $tablet-breakpoint)
  .about-section-wrapper
    flex-direction: column

    .about-face-container
      width: 100%
      margin-bottom: 20px

      .about-face
        margin-left: 0
        margin-left: auto
        margin-right: auto

    .about-content
      width: 100%

@media screen and (max-width: $mobile-breakpoint)
  .about-section-wrapper
    .about-face-container
      .about-face
        height: 200px
        width: 200px
```

### Mobile Testimonials Section
#### SASS
Append mobile & responsive media queries

```sass
// Media Queries

@media screen and (max-width: $tablet-breakpoint)
  .testimonial-wrapper
    flex-direction: column

    .testimonial-content-container
      width: 100%

    .testimonial-cta
      width: 100%
```

### Mobile Contact Section
#### SASS
Append mobile & responsive media queries

```sass
// Media Queries

@media screen and (max-width: $tablet-breakpoint)
  .contact-wrapper
    flex-wrap: wrap
    justify-content: flex-start
    a
      margin-bottom: 10px
      width: 20%

@media screen and (max-width: $mobile-breakpoint)
  .contact-wrapper
    justify-content: space-around
    a
      width: 50%
```


# Final Thoughts
We won't always have the great fortune to use Rails and Bootstrap in our future career paths but understanding the foundations of how websites are built, how they're styled, and how they implement interactivity will give us the ability to got to any programming stack or framework and apply these principles to give us infinite mobility. This was just a small taste of advanced foundational features but with these principles and foundational structures you will be able to build any website you can think of and you've got a snazzy little portfolio site for your future endeavors.

### Final Project Prototype
[Colin Rubbert Firehose Student Portfolio](https://colinrubbert.github.io/fh-student-portfolio-site)

#### Additional thoughts and resources
* Website speed testing - Great sites are fast and lite sites.
    * [Google Page Insights](https://developers.google.com/speed/pagespeed/insights/)
    * [GTmetrix Page Speed Test](https://gtmetrix.com/)
* Image compression - An essential step to creating sites that load quickly. Most compression can be done without perceptible differences but have massive speed gains.
    * [Compressor.io](https://compressor.io/)
    * [Free Image Optimization](http://www.imageoptimizer.net/Pages/Home.aspx)
    * [Kraken Image Optimization](https://kraken.io/)
