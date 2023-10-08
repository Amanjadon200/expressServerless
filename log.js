// import pino from "pino";
// import pretty from "pino-pretty";

const log = (type, obj) => {
    console.log(JSON.stringify(obj));
};

const infoLog = (obj) => {
  try {
    log("info", obj);
  } catch (err) {
    console.log("Error in Logging info function ", JSON.stringify(err));
  }
};

const errorLog = (obj) => {
  try {
    log("error", obj);
  } catch (err) {
    console.log("Error in Logging error function ", JSON.stringify(err));
  }
};

export { infoLog, errorLog };
