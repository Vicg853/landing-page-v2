<br/><br/>
<h2 align="center">Alpes Capital's Landing Page</h2>
<br/><br/>

## Intro
Hello we are Alpes Capital and this is our landing page's front-end. We always try to keep it to the edge with new technologies and more versatile for the team, so they are able to modify it, without the webpage having performance issues.

The contents of this page are mostly static and use static rendering. Some elements are updated by NextJS in a defined time span (normally every week or month). Does not contain the blog, which is in a different repository. 

React streaming is not on!

## Running the project
#### *Before all:* Requires NodeJS version >= 12.22.0

#### *Downloading:*
Download/clone this repo in whichever method you prefer. Access the folders root...

#### *Installing deps.:*
```bash
yarn 
```
> or you may use npm if you will by running ```npm i```

#### *Running:*
Well, there are two ways to run the project, in ```production ``` mode or ```development ``` mode

- Development
  
  ...just run
  ```bash
   yarn dev
  ```

- Production

  ...build time
  ```bash
   yarn build:prod
  ```

  ...runtime
   ```bash
   yarn start
  ```

>In both cases, in the end, a local server will be opened on port ```3000``` ... so access in your browser [```http:///localhost:3000/```](http://localhost:3000/) and you should be able to see the webpage :D

## Main stack and references

- React: javascript framework to create UI - version 18.0.0-alpha
- NextJS: React based web framework - version: 12.0.2-canary.14 
- styled-component: CSS-in-JS framework for react - version: 5.3.3
- typescript: strong typing javascript based language - version: 4.4.4

> other secondary dependencies and dev dependencies can be seen in the [```package.json```](https://github.com/Alpes-Capital/landingPage/blob/landing-page-v2/package.json) file



