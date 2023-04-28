const express = require('express')
const app = express()
const port = 5000

const config = require('./config/key');

// express에 기본 내장 되도록 패치가 되어서 아래 주석문 필요없음
// const bodyParser = require('body-parser');
const { User } =require("./models/User"); 


// //application/x-www-form-urlencoded 로 가져온걸 분석함
// app.use(bodyParser.urlencoded({extended: true}));
// express에 기본 내장 되도록 패치가 되어서 아래 주석푼 문장처럼 쓰면됨
app.use(express.urlencoded({extended:true}));

// //application/json 으로 가져온걸 분석함
// app.use(bodyParser.json());
// express에 기본 내장 되도록 패치가 되어서 아래 주석푼 문장처럼 쓰면됨
app.use(express.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
}).then(() => console.log('MongoDB Conneted...'))
  .catch(err => console.log(err))

  

app.get('/', (req, res) => {
  res.send('Hello World! ㅎㅇ3')
})

app.post('/register', async (req, res) => {
  // 회원가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.


  
  const user = new User(req.body);

  // let output;
  // (async () => {
  //   output = await user.save();
  // })
  // console.log(output)

  await user.save().then(() => {
    res.status(200).json({
      success:true,
    });
  })
  .catch((err) => {
    console.error(err);
    res.json({
      success: false,
      err: err,
    })
  })

  // user.save((err, userInfo) => {
  //   if(err) return res.json({success: false, err})
  //   return res.status(200).json({
  //     success: true
  //   })
  // })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//    mongodb+srv://khm9963:<password>@boilerplate.wlr20xq.mongodb.net/test