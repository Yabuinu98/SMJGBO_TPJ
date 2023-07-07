const request = require("request");
require("dotenv").config();
const key = process.env.okey;
const url = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${key}&sidoName=%EB%B6%80%EC%82%B0&returnType=JSON`;

request(url, (e, res, body) => {
  const rst = JSON.parse(body);
  const junpo = rst.response.body.items;
  junpo.forEach((v) => {
    console.log(`${v.stationName}의 날씨`);
    console.log("오존단계 :", v.o3Grade);
    console.log("오존농도 :", v.o3Value);
    console.log("미세먼지농도단계(PM10) :", v.pm10Grade);
    console.log("미세먼지농도(PM10) :", v.pm10Value);
    console.log("일산화탄소농도 : ", v.coValue);
    console.log(
      "=============================================================="
    );
  });
});
