const path = require('path');

module.exports = {
  globals: {
		'ts-jest': {
			tsConfigFile: 'tsconfig.json'
		}
	},
	rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'ts',
		'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup.ts'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/test/.*\\.(ts|js)$",
    "/src/.*\\.(d\.ts)$",
  ],
	testMatch: [
		'**/test/**/*.spec.(ts|js)'
	]
};
