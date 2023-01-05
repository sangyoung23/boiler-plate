const mongoose = require("mongoose");

// user의 db 작성
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    // trim은 공백을 없애주는 역할을 함 ex) sang yong@gmail.com
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  // role은 관리자 권한 설정
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  // token은 로그인 된 유저를 확인할 때
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
