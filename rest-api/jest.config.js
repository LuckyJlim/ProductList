module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  collectCoverage: true,
  maxWorkers: 1,
};
