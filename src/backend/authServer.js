import bcrypt from "bcrypt";
import express from "express";
import fs from "fs";
import { promisify } from "util";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const filePath = "../data/hashedUserData.json";
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const readUserData = async () => {
  try {
    const data = await readFileAsync(filePath, { encoding: "utf8" });
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    } else {
      throw error;
    }
  }
};

const writeUserData = async (data) => {
  const jsonData = JSON.stringify(data, null, 2);
  await writeFileAsync(filePath, jsonData, { encoding: "utf8" });
};

app.post("/checkusername", async (req, res) => {
  const { username } = req.body;
  const userDB = await readUserData();

  const user = userDB.find((user) => user.username === username);
  if (user) {
    res.send({ exists: true });
  } else {
    res.send({ exists: false });
  }
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const userDB = await readUserData();

  if (userDB.find((user) => user.username === username)) {
    return res.status(400).send("Username already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 14);
  userDB.push({ username, password: hashedPassword });
  await writeUserData(userDB);

  res.send("User created successfully");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDB = await readUserData();

  const user = userDB.find((user) => user.username === username);
  if (!user) {
    return res.status(404).send("Username not found");
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).send("Invalid password");
  } else {
    // Send success response on valid login
    res.send("Login successful");
  }
});

app.listen(8080, () => console.log("Auth Server Is Running"));
