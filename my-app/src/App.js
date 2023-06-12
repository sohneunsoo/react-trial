import logo from "./logo.svg";
import "./App.css";
import CaptionImage from "./components/CaptionImage";
import HelloWorld from "./components/HelloWorld";
import Blink from "./components/Blink";
import Clink from "./components/Clinks";
import AddressBook from "./components/AddressBook";

function App() {
	const objHello = {
		title: "환영합니다",
		desc: "저의 첫번째 React App이에요.",
		color: "red",
		fontWeight: 800,
		textAlign: "left",
	};
	const { title, desc, ...style } = objHello;
	// title, desc, color, fontWeight, textAlign
	return (
		<div className="App">
			{/* <Clink /> */}
			<AddressBook />
			{/* <Blink text="이건뭐임니까" /> */}
			{/* <HelloWorld title={title} desc={desc} {...style} />
			<CaptionImage
				imgUrl={
					"https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg?w=2000"
				}
				caption="고영이사진1"
			/>
			<CaptionImage
				imgUrl={"https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg"}
				caption="고영이사진2"
			/> */}
		</div>
	);
}

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">

// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 					<p>Hello everyone</p>
// 				</p>
// 				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

export default App;
