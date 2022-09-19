//객체에 내용 넣고 배열이 무작위로 바뀌게 하기
//배열 내용과 이미지 함께 나오게 하기
//초이스를 누르면 배열이 멈추고 결과가 나옴

//1.객체내용과 random-section 연결
let lucky = {
  smile: {
    name: "smile",
    img:""
  },
  clover: {
    name: "clover",
    img:""
  },
  swan: {
    name: "swan",
    img:""
  },
  7: {
    name: "seven",
    img:""
  },
};

let luckyKey = Object.keys(lucky); //럭키 키값을 배열로 반환
// console.log(luckyKey);

let final ;


//랜덤하게 lucky의 키값 뽑아오기
//luckyKey 값을 랜덤키에 넣어서 반환하고 싶어
let random = () => {
  let randomNum = Math.floor(Math.random() * luckyKey.length);
  // console.log(randomNum)

  final = luckyKey[randomNum];
  console.log("final",final)
}

// setInterval을 랜덤 섹션에 보여주기
//setInterval에 show값을 순서대로 집어넣기
let show = () => {
  let showSection = "";  
  //ui업데이트 자동으로 하려면 리액트를 써야하는건가..??
  for(i=0;i<luckyKey.length;i++){
    showSection = `<div>${i}</div>`;
  }
  document.getElementById("random-section").innerHTML = showSection;

};

setInterval(show, 2000,luckyKey);


//순서대로 보여주고싶은데ㅠㅠㅠㅠㅠ 모르겠엉..