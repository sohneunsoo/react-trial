import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams, useMatch } from "react-router-dom";
import { getBoardList } from "../services/BoardServices";

export default function BoardList() {
	const location = useLocation(); // 경로 정보
	const navigate = useNavigate(); // 경로 이동 시키는
	// navigate('path', {replace:[false|true]})

	const [boardList, setBoardList] = React.useState([
		{ id: 1, title: "제목1" },
		{ id: 2, title: "제목2" },
	]);

	useEffect(() => {
		getBoardList().then(data => {
			console.log(data);
			setBoardList(data);
		});
	}, []);

	return (
		<div>
			<h3>BoardList</h3>

			<ul>
				{boardList.map(board => (
					<li
						onClick={() => {
							navigate(`/board/${board.id}`, { replace: true });
						}}
						key={board.id}>
						{board.title}
					</li>
				))}
			</ul>
		</div>
	);
}
