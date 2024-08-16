- Open terminal;
- To create the package.json file, type 'npm init' or 'npm init -y';
- To install cypress, type 'npm install cypress --save-dev';
- After cypress is installed on your project, you'll have to open it, by typing 'npx cypress open';
- When the cypress app initiates, configure E2E Testing;
- Choose the browser you will test, it will open it;
- Create a new spec (spec is the test), it will create a template;
- Create your test;

- If you wish to use xpath, type 'npm install -D cypress-xpath', then add '/// < reference types="cypress-xpath" />' to your support/commands.js file; then add 'require('cypress-xpath');' to your support/e2e.js file;

- To run tests on cypress app, type 'npx cypress open', and to run headless, type 'cypress run'.