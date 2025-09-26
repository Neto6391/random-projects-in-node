/** @type {import('jest').Config} */
const config = {
  testEnvironment: "node",

  clearMocks: true,

  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],

  testPathIgnorePatterns: ["/node_modules/"],

  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "/src/server.js"],
  moduleNameMapper: {
    "^@app$": "<rootDir>/src/app",
    "^@app/(.*)$": "<rootDir>/src/app/$1",
  },
};

module.exports = config;
