module.exports = {
    collectCoverage: true,
    testEnvironment: "jsdom",
    coverageDirectory: "coverage",
    collectCoverageFrom: ["src/**/*.{ts,tsx}"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
}
