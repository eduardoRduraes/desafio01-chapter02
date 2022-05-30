/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./src/swagger.json";

const index = "src/index.ts";

const usersFiles = [index];

console.log(usersFiles);

swaggerAutogen(outputFile, usersFiles);
