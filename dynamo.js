import { axiosInstance } from "./axios.js";
import AWS from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_DEFAULT_REGION,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const Table_Name = "HarryPotterApi";
const getHarryPotter = async () => {
  const params = {
    TableName: Table_Name,
  };
  const characters = await dynamoClient.scan(params).promise();
  return characters;
};
const addCharacters = async (character) => {
  const params = {
    TableName: Table_Name,
    Item: character,
  };
  const promise = await dynamoClient.put(params).promise();
  return promise;
};
const setHarryPotter = async () => {
  const harryPotterData = await axiosInstance.get("/characters");
  console.log(harryPotterData.data.length);

  const allPromises = harryPotterData.data.map((character) =>
    addCharacters(character)
  );
  const data = await Promise.all(allPromises);
  return data;
};
export { setHarryPotter, getHarryPotter };
