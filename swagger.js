/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./src/swagger.json";

const createUser =
    "src/modules/users/useCases/createUser/CreateUserController.ts";
const listAllUsers =
    "src/modules/users/useCases/listAllUsers/ListAllUsersController.ts";
const showUserProfile =
    "src/modules/users/useCases/showUserProfile/ShowUserProfileController.ts";
const turnUserAdmin =
    "src/modules/users/useCases/turnUserAdmin/TurnUserAdminController.ts";
const index = "src/index.ts";

const usersFiles = [
    index,
    createUser,
    listAllUsers,
    showUserProfile,
    turnUserAdmin,
];

console.log(usersFiles);

swaggerAutogen(outputFile, usersFiles);
