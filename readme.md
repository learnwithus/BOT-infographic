# BOT Infographic   
This repo contains the code for the infographic used in BOT.

## Development
The infographic uses HTML, jQuery (from a CDN in `<head>`), Sass, and [FitText](https://github.com/davatron5000/FitText.js). [Gulp](https://github.com/gulpjs/gulp) is used to make development a breeze. [RequireJS](https://requirejs.org/) is used for JavaScript file loading.

To develop locally:
1. Run `npm i` to install local dependencies, including `gulp`
2. Run `npm i -g gulp-cli` to install the `gulp` CLI
3. Run `gulp` to start the default gulp function. This will start a `browser-sync` server and hot-reload any changes to `index.html`, as well as any files in the `scss` and `js` directories.

## Deployment
This repo is [automatically deployed](http://vchdesign.ca/BOT-infographic/) to VCH Design by Jenkins, and an `<iframe>` is used to display it on BOT. Ensure that if it is removed from VCH Design, it is deployed somewhere else and the corresponding WordPress template in BOT is updated.

To deploy manually:
1. Clone the repository to the server
2. Run `npm i` and `npm i -g gulp-cli` to ensure `gulp` is installed on the server
3. Run `gulp build` to compile Sass and build the static site
4. Navigate to the site to ensure everything is working and displaying correctly
