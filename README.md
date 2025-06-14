# Wolt E2E Test Automation Framework

A robust Playwright + TypeScript end-to-end (E2E) automation framework for testing Wolt's web application, supporting UI and API tests, Allure reporting, and modular architecture.

---

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Troubleshooting](#troubleshooting)
- [Adding New Tests](#adding-new-tests)

---

## Features
- Playwright-based E2E testing (UI & API)
- TypeScript for type safety and maintainability
- Modular page object and service structure
- Allure reporting integration
- Parallel and cross-browser execution
- Environment-based configuration

---

## Project Structure
```
.
├── src/
│   ├── fixtures/           # Playwright and API fixtures
│   ├── pages/              # Page objects
│   │   └── components/     # UI components (cart, search, etc.)
│   ├── services/           # API and business logic services
│   └── utils/              # Helpers and constants
│       └── constants/      # Project-wide constants
├── tests/
│   ├── api/                # API test specs
│   └── ui/                 # UI test specs
├── config.ts               # Centralized config and env loader
├── playwright.config.ts    # Playwright configuration
├── package.json            # NPM scripts and dependencies
├── tsconfig.json           # TypeScript configuration
├── .gitignore
└── README.md
```
## Scripts
| Script              | Description                                 |
|---------------------|---------------------------------------------|
| `npm test`          | Run all tests                               |
| `npm run test:all`  | Run all UI and API tests                    |
| `npm run test:ui`   | Run only UI tests                           |
| `npm run test:api`  | Run only API tests                          |
| `npm run test:debug`| Run tests in debug mode                     |
| `npm run test:headed`| Run UI tests in headed mode                |
| `npm run test:report`| Show Playwright HTML report                |
| `npm run install:browsers`| Install Playwright browsers           |
| `npm run allure:report`| Generate and open Allure report           |

---

## Prerequisites
- **Node.js** v16 or higher ([Download](https://nodejs.org/))
- **npm** v8 or higher (comes with Node.js)
- **Java** 8 or higher (required for Allure CLI)
- **Allure CLI** (for report generation)

### Java Installation (Windows) (for Allure reporting)
1. Download and install Java JDK 8+ from [Adoptium](https://adoptium.net/) or [Oracle](https://www.oracle.com/java/technologies/downloads/).
2. Set the `JAVA_HOME` environment variable:
   - Open **System Properties** (`Win+R` → `sysdm.cpl` → Advanced → Environment Variables).
   - Add a new `JAVA_HOME` variable pointing to your JDK install path (e.g., `C:\Program Files\Eclipse Adoptium\jdk-17.0.10.7-hotspot`).
   - Add `%JAVA_HOME%\bin` to your `Path` variable.
3. Verify installation:
   ```sh
   java -version
   ```

## Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd wolting
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npm run install:browsers
   ```

---

## Allure Report Setup
1. **Run tests to generate Allure results:**
   ```sh
   npm test
   # or any test script
   ```
2. **Generate and open the Allure report:**
   ```sh
   npm run allure:report
   ```
   This will generate the report in the `allure-report/` directory and open it in your browser.

---

## Environment Variables
- Environment variables are loaded from `.env.<env>` files (e.g., `.env.dev`, `.env.staging`).
- Required variables (see `config.ts`):
  - `USER` - test user login
  - `PASSWORD` - test user password
  - `ACTION_TIMEOUT`, `NAVIGATION_TIMEOUT`, `TEST_TIMEOUT`, `EXPECT_TIMEOUT` (optional, ms)
  - `HEADLESS` - `true` or `false` (optional)
- Example `.env.dev`:
  ```env
  USER=your_user
  PASSWORD=your_password
  ACTION_TIMEOUT=30000
  NAVIGATION_TIMEOUT=60000
  TEST_TIMEOUT=90000
  EXPECT_TIMEOUT=20000
  HEADLESS=true
  ```

---

## Troubleshooting
- **Allure not recognized:** Ensure Allure is installed and its `bin` directory is in your `Path`.
- **Java not found:** Ensure Java 8+ is installed and `JAVA_HOME` is set.
- **Missing environment variables:** Check your `.env.<env>` file and variable names.
- **Playwright browser errors:** Run `npm run install:browsers` to install required browsers.

## Adding New Tests
- Place **UI tests** in `tests/ui/` and **API tests** in `tests/api/`.
- Use the [Page Object Model](https://playwright.dev/docs/pom) for UI tests: create or extend page objects in `src/pages/` and use them in your specs.
- Keep tests modular: reuse fixtures from `src/fixtures/` and helpers from `src/utils/`.
- Name test files and cases descriptively for clarity and maintainability.
- Prefer async/await and avoid hardcoded waits; use Playwright's built-in assertions and timeouts.
