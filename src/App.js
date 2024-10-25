/*eslint-disable */ //터미널 워닝 표시 제거

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

//부모
function App() {
  let post = "강남 우동 맛집"; //자료 잠깐 저장하고 싶을때는 일반변수
  let [title1, setTitle1] = useState("남자 코트 추천"); //state변수는 자동 재렌더링 필요할때(바로 변경적용이 필요할때)
  let [title2, setTitle2] = useState("여자 코트 추천");
  let [title3, setTitle3] = useState("맛집 추천");

  //let [title,setTitle] = useState('1','2','3'); //이건 틀린문법 => useState는 초기값 하나만 저장해서 이렇게 한번에 여러개는 안됨
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "맛집 추천",
  ]); //배열로 담아서 저장해야 여러개 전달 가능.

  //useState의 변수를 바꾸고싶을땐 set~의 변수함수를 사용하자.
  //state가 array나 object이면 수정하고싶다면 독립적 카피본을 만들어서 수정해야함!!!!(복사부터해라!)
  let [like, setLike] = useState([0, 0, 0]);
  let [num, setNum] = useState(0);
  let [modal, setModal] = useState(false);
  let [detail, setDetail] = useState(0);

  //function을 arrow function으로 바꾸자
  //function like(){} 를 바꾸면 like=()=>{}

  // 개별로 좋아요
  // const increaseLike = (i) =>{
  //   let newLike = [...like]; //기존 배열 복사(깊은복사)
  //   newLike[i] += 1;
  //   setLike(newLike);
  // }

  const openModal = () => {
    modal == false ? setModal(true) : setModal(false);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그</h4>
      </div>

      {/* <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>가나다순정렬</button>  가나다순 정렬하기 */}

      {/* <button
        onClick={() => {
          // title이 array변수니까 독립적 카피본을 만들어서 수정해야함(깊은복사)
          // 그냥 copy=title하면 아무리 수정을해도 내용이 바뀌지않음
          // 저렇게 갖고오면 위치만 가져오는거라서 수정을 해도 배열이 있던 위치가 바뀌는게 아니니까
          // [...~]이게 깊은복사하는법
          // ...이 괄호를 벗겨주세요, []이 다시 배열로 씌워주세요
          // 그러니까 복사는해오지만 새로운배열로 만들어달라는뜻
          let copy = [...title];
          copy[0] = "여자코트 추천";
          setTitle(copy);
        }}
      >
        버튼이용
      </button> 글자바뀌는버튼 */}

      {/* <h4>{post}</h4> 변수 호출할 땐 {} 안에 쓰기 */}

      <div className="list">
        <h4 onClick={() => openModal()}>
          {title[0]}
          <span
            onClick={() => {
              setNum(num + 1);
            }}
          >
            💛
          </span>
          {num}
        </h4>
        <p>10월 23일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>10월 23일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>10월 23일 발행</p>
      </div>

      {title.map((a, i) => {
        return (
          <div className="list">
            <h4
              onClick={() => {
                openModal();
                setDetail(i);
              }}
            >
              {a}
            </h4>
            <span
              onClick={() => {
                const newLike = [...like];
                newLike[i] += 1;
                setLike(newLike);
              }}
            >
              ❤
            </span>{" "}
            {like[i]}
            <p>10월 23일 발행</p>
          </div>
        );
      })}
      {/* map으로 title 배열 불러오기
        title.map((a, i) => (
        <div className="list">
          <h4>
        {a} <span onClick={() => increaseLike(i)}>❤</span> {like[i]}
        </h4>
        <p>10월 23일 발행</p>
        </div>
        ))
      */}
      {modal == true ? <Modal title={title} detail={detail} /> : null}
    </div>
  );
}

//props!
//부모->자식 state 전송하려면 props 사용하기
//<자식컴포넌트 작명={state이름}/>
//보통 작명은 state이름이랑 똑같이함
//props 파라미터를 자식 컴포넌트에 등록후 props.작명 으로 사용
//부모->자식만 가능, 자식->부모 X, 자식->자식 X

//자식
const Modal = (props) => {
  return (
    <>
      <div className="modal">
        <h4>{props.title[props.detail]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    </>
  );
};

export default App;
