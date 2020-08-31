# Tiny Canvas

It's a very basic demo that draws into a canvas. The purpose is to experiment with exposing few new features coming to Universal Stylus Initiative hardware. Information about USI can be found [here](https://universalstylus.org/).

## Working on tiny canvas

This project makes use of ECMAScript Modules (ESM) and runs them directly in the browser using [Snowpack](snowpack.dev). If you install new dependencies using `npm` like `npm install --save @material/mwc-button`, then please run `npx snowpack` afterwards to generate the new modules in `web_modules` folder. Also, the `web_modules` folder should be committed. Make sure to update the package.json file accordingly.

To install app dependencies and but any further steps, run

```bash
$ npm install
```

ESM compatible modules can be found using [pika.dev](pika.de). Material design web components can be found by searching for `@material/mwc-`. You can try out the demo page here: [Material Web Components demo](https://mwc-demos.glitch.me/)

Then run

```bash
$ npm run build
```

To test in the browser, run

```bash
$ npm run start
```

This will update the `build` directory which is committed to the repository. This demo runs a service worker, for development purposes you may want to consider ticking the option "Bypass for Network" in the Application tab of the devtools.

To test in the browser with https (for testing USI features like read/write prefered color)

```bash
$ npm run start-https
```

This will launch application in secure https using your own credentials .   You can automatically generate them using either:

- devcert: npx devcert-cli generate localhost (see https://github.com/davewasmer/devcert-cli)

- mkcert: mkcert -install && mkcert -key-file snowpack.key -cert-file snowpack.crt localhost (see https://github.com/FiloSottile/mkcert)

Rename the credential snowpack.crt and snowpack.key and put them in the root directory before you start.

To build, run

```bash
$ npm run build
```

Then you can git push and you're ready to submit a PR.

This demo is being developed by :

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/200px-Intel-logo.svg.png" alt="Intel" style="width:35px;"/>
