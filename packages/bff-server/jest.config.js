module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [],
  coverageDirectory: '<rootDir>/coverage',
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
  },
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  preset: 'ts-jest',
  setupFiles: [],
  setupFilesAfterEnv: [],
  testEnvironment: 'node',
};
