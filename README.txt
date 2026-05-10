INSTALLATION GUIDE

Follow the steps below to set up the Playwright automation framework on your local machine.

STEP 1: INSTALL PREREQUISITES
Before setting up the project, ensure the following tools are installed:

- Node.js (version 18 or higher recommended)
  Node.js is required to run JavaScript or TypeScript code and manage dependencies.

- npm (Node Package Manager)
  Comes with Node.js and is used to install project dependencies.

- Git
  Required to clone the repository.

Verify installation using:
node -v
npm -v
git --version

STEP 2: CLONE THE REPOSITORY
git clone <repository-url>
cd <project-folder>

STEP 3: INSTALL PROJECT DEPENDENCIES
npm install

STEP 4: INSTALL PLAYWRIGHT BROWSERS
npx playwright install

STEP 5: INSTALL SYSTEM DEPENDENCIES (LINUX ONLY)
npx playwright install-deps

STEP 6: CONFIGURE ENVIRONMENT VARIABLES
Create a .env file:
BASE_URL=https://example.com
USERNAME=your_username
PASSWORD=your_password

STEP 7: RUN TESTS
npx playwright test

STEP 8: VIEW REPORT
npx playwright show-report

