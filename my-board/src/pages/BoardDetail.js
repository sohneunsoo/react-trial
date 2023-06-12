import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BoardDetail() {
	const navigate = useNavigate();
	const { boardId } = useParams();
	console.log(boardId);
	return (
		<div>
			<h3>BoardDetail</h3>
			<button
				type="button"
				onClick={() => {
					navigate(-1);
				}}>
				뒤로
			</button>
			<div>...</div>
		</div>
	);
}
