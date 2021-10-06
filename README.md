# vue-resume

A web-based solution to create and view your resume.

## Making changes

All resume content resides within [src/content.js](src/content.js).
Simply edit the text within it and rebuild to get an updated version.

Previewing edits in a Chromium-based browser is recommended as it will be most accurate to the exported PDF.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Export PDF
Export the PDF by building the project.
This will temporarily run the compiled build on an Express server for Puppeteer to export using a headless Chromium instance.

```
npm run build
```

The PDF will be in both the `dist` and `public` folder.
Make sure port 8000 is available or specify another one through an environment variable for `process.env.PORT`.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
