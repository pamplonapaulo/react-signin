# Sign In component

Front End code exercise by Paulo da Silva Pamplona.

## URL
https://paulo-pamplona-job-application.netlify.app/

## Comments

- Gotham Font
<p>Font not available for free on the web, so our project uses some familiar options recomended in this article: https://www.downloadfonts.io/gotham-font-family-free/, plus some styling tricks to get closer to the design.</p>

- The input Checkbox
<p>The user agent stylesheet for inputs type checkbox is not 100% identical to the provided layout. We can get this done by styling a selector like [type=checkbox]:checked + label:before - and by the way I never use the default style on my own projects - but doesn't look like the designer wanted the developers to code something so close to the user agent stylesheet but not really the user agent stylesheet itself. I'm assuming the idea was to stick with the user agent in this case.</p>

- SASS
<p>The project follows the requirement of using SASS but doesn't really take any advantage from it. I have been diving into styled-components, despite having some use of SASS since my certification in San Diego (2017). In a very few months coding with React and styled-components I saw amazing things that I never got done with SASS. Also my favorite professors recommend styled-components. That doesn't mean this developer doesn't want to use SASS - it would be great to learn with Green's team how to get all the power from SASS.</p>

## Browsers in validation
<p>Chrome, Safari, Firefox</p>

## Possible next steps
- Save cookies in order to get 'remember email' checkbox totally functional.
- Set database, possibly Firebase would get this done easily, to record the emails and build the mailing.
