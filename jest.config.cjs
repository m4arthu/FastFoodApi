// jest.config.js
module.exports = {
  // other Jest configurations
  "testEnvironment": "node",
  "transformIgnorePatterns": ['node_modules/(?!(sucrase)/)'],
  "transform": {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  "testRunner": "jest-circus/runner",
  "testMatch": ["<rootDir>/tests/**/*.spec.js"],
  "transformIgnorePatterns": ["<rootDir>/node_modules/"],
  "testPathIgnorePatterns": ["<rootDir>/node_modules/"],
  "verbose": true,
  "globals": {
    "ts-jest": {
      "useESM": true
    },
  }
};
