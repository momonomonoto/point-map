

module.exports = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.test.js'],
  testPathIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss|svg)$': 'babel-jest'
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  setupTestFrameworkScriptFile: '<rootDir>setupTests.js'
};
