module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  testMatch: ['**/src/**/*.test.tsx'],
  collectCoverageFrom: ['src/App.tsx'],
  coverageReporters: ['text', 'lcov']
};
