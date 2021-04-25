module.exports = {
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
      "^.+\\.tsx?$": "ts-jest"
  },
  globals: {
      "ts-jest": {
          diagnostics: false
      }
  },
  testMatch: ["**/*.(test|spec).(ts|tsx|js|jsx)"],
  coveragePathIgnorePatterns: ["/node_modules/", "enzyme.js"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  testEnvironment: "jest-environment-jsdom-sixteen",
//   moduleDirectories: ['node_modules', 'src'],
  "modulePaths": [
    "<rootDir>"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  }
};