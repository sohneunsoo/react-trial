import React from "react";

export default function Clink(props) {
	const [count, setCount] = React.useState(0);
	const increaseCount = () => {
		setCount(count + 1);
	};
	const decreaseCount = React.useCallback(
		e => {
			setCount(count - 1);
		},
		[count],
	);
	React.useEffect(() => {
		alert("클릭됨");
	}, [count]);
	// const value = React.useMemo(()=>)

	return (
		<div>
			<h3>{count}</h3>
			<button
				type="button"
				onClick={e => {
					increaseCount();
				}}>
				증가클릭
			</button>
			<button
				type="button"
				onClick={e => {
					decreaseCount();
				}}>
				감소클릭
			</button>
			<h1>{props.text}</h1>
		</div>
	);
}
