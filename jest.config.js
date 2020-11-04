// jest.config.js

module.exports = {
  setupFilesAfterEnv: ["./src/tests/jestSetup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
