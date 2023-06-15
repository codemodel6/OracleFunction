const express = require("express");
const cors = require("cors");
const app = express();
const connectToOracle = require("./data/oracleData");

// CORS 설정
app.use(cors());

// /1 경로에 대한 처리
app.get("/1", async (req, res) => {
  try {
    const DATA = "DATA1";
    const data1 = await connectToOracle(DATA);
    res.send(data1);
  } catch (error) {
    console.error(error);
    res.status(500).send("데이터 조회 오류");
  }
});

// /qwe 경로에 대한 처리
app.get("/2", (req, res) => {
  // 다른 코드 실행
  res.send("Welcome to /qwe!");
});

// 서버 시작
app.listen(5000, () => {
  console.log("서버가 http://localhost:5000 에서 실행 중입니다.");
});
