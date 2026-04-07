# Contributing / Debugging
The following information is pertinent if you are contributing to this extension in GitHub:

## Testing local extension
To test the extension within local VSCode, simply go to the "Run / Debug" tab in VSCode and select `Run Extension (Desktop)` to open a test window for debugging the extension.

## Testing web extension
VSCode offers a web-based dev environment at [vscode.dev](https://vscode.dev). This extension is designed to also work natively within the web-based VSCode version.

To test the extension in a test web environment, you can spin up a local test VSCode web server by running `npm install` and `npx -y @vscode/test-web --browser none --extensionDevelopmentPath=.` in the main project directory, then navigate to `localhost:3000` to debug in the browser-based version of VSCode.