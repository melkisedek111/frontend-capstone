/**
 * Get the ENV values from react using "REACT_APP_" keyword
 * Note: File system such as FS package is not working in the browser because FS package is used for server like node.js which has file system
 * YAML file is not be able to read without using file system package which will parsed the yaml file
 * 
 * the format for env variable in react is "REACT_APP_", this kind of format of variable is needed to be able to read all the value inside the env file
 */
// let ENV = {};
// console.log(process.env)

// /* loop through all variable in env */
// for(let values in process.env) {
//     /* get only the variable that includes react_app_ */
//     if(values.includes("REACT_APP_")) {
//         let key = values.split("REACT_APP_").pop();
//         ENV[key] = process.env[values];
//     }
// }

// let { BACKEND_URL, FRONTEND_URL, JWT_ACCESS_TOKEN_SECRET, JWT_REFRESH_TOKEN_SECRET } = ENV;

export const URLConstants = {
   BACKEND_URL: process.env.REACT_APP_BACKEND_URL, FRONTEND_URL: process.env.REACT_APP_FRONTEND_URL
};

export const JWT_TOKEN_SECRETS = {
   JWT_ACCESS_TOKEN_SECRET: process.env.REACT_APP_JWT_ACCESS_TOKEN_SECRET, JWT_REFRESH_TOKEN_SECRET: process.env.REACT_APP_JWT_REFRESH_TOKEN_SECRET 
};

