const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 9999;

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#####', //off the record
  database: 'User'
});

// MySQL 연결
connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL is connected');
});

// body-parser 설정
app.use(express.urlencoded({ extended: false }));

// 정적 파일을 제공하는 디렉토리 설정
app.use(express.static(path.join(__dirname, '../public')));


// 루트 경로에 접속했을 때 실행되는 라우터
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/homepage.html'));
});

// 회원가입 페이지에 접속했을 때 실행되는 라우터
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});

// POST 요청을 처리하는 라우터
app.post('/register', (req, res) => {
  // 클라이언트가 보낸 데이터를 받음
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const address = req.body.address;

  // MySQL에 데이터를 저장
  const sql = `INSERT INTO User (username, email, password, address) VALUES ('${username}', '${email}', '${password}', '${address}')`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Data is inserted');
    res.send('회원가입이 완료되었습니다.'); // 회원가입 완료 후 complete.html로 이동
  });
});


// 서버 시작
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
