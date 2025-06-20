import Header from "./Header.jsx";
import "./Test.css"
//컴포넌트 생성 Test(부모 컴퍼넌트)
function Test (){
    return (
        <>
        <Header />
        <h1>Test 컴포넌트</h1>
        <Aside />
        </>
    )
}
//다른컴포넌트에서 Test 컴포넌트 사용하도록 내보내기 설정
export default Test;
//자식컴포넌트
function Aside(){
    return(
        <aside>
            <h2 style={{color:'lime'}}>메뉴</h2>
            <ul style={{color:'red'}}>
                <li>메뉴1</li>
                <li>메뉴2</li>
                <li>메뉴3</li>
                <li>메뉴4</li>
                <li>메뉴5</li>
                <li>메뉴6</li>
            </ul>
            <img src="https://i.pinimg.com/736x/e5/bb/77/e5bb771d9e2c38714700aad441663275.jpg" alt="이미지" />
        </aside>
    )
}