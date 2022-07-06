const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: '.' })

const customJestConfig = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '^.+\\.(ts|tsx)$': ['ts-jest', { presets: ['next/babel'] }],
  },
  transfromIgnorePatterns: ['<rootDir>/src/utils/test.tsx'],
}

module.exports = createJestConfig(customJestConfig)
