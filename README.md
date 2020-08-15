# vue-resume

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

### Run your tests
```
npm run test
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
Make sure port 8000 is available or specify another one with `process.env.PORT`.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
