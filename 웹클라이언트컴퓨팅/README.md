# 2023-1 웹클라이언트컴퓨팅
<img width="150" alt="가치배달 로고" src="https://github.com/ijnim/Projects/assets/86222332/67efc900-5fd8-42be-90db-2f8459bcaca7">

## 배달음식 공동구매 플랫폼 '가치배달' 웹서비스 프로젝트
- 개발인원 : 1명
- 개발기간 : 2023.04 ~ 2023.05  

'웹클라이언트컴퓨팅' 수업에서 진행한 개인 프로젝트로, 배달음식 공동구매 플랫폼인 '가치배달'을 기획 및 구현하였다.  
학사생활 중 배달팁, 최소주문금액 등으로 겪은 배달음식 주문의 불편함에서 착안하여, 학사생 간 배달음식 공동구매가 가능하고 커뮤니티 기능이 있는 웹서비스를 구현하고자 하였다.

### 개발 환경
- VSCode
- Node.js
- Express
- MySQL

### 실행 방법
1. MySQL 설치
2. MySQL 에 **'User'** DB 생성 후, **'user'** 테이블 생성
3. app.js 파일에서 MySQL 연동
4. 프로젝트 디렉토리로 이동 후  
  `npm install`  
  `npm start`  
  `node app.js`  
5. 웹브라우저에서 'http://localhost:9999' 로 접속  

![image](https://github.com/ijnim/Projects/assets/86222332/3ce212a7-970c-46bf-ba3d-ec08a8418fba)

### 주요 기능
- 회원가입
- 가치배달 게시판 & 이모저모 게시판
  - 글쓰기로 게시글 업로드(제목, 내용, 사진업로드)
  - 게시글에 댓글 작성
![image](https://github.com/ijnim/Projects/assets/86222332/ae81ee75-fb3f-4db4-b69b-72023d000a40)
![image](https://github.com/ijnim/Projects/assets/86222332/73719a09-d912-448c-b520-b02f6546dd5b)

