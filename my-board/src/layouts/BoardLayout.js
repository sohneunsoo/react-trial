import React from "react";
import { Outlet, useLocation, useMatch } from "react-router-dom";

export default function BoardLayout() {
	const location = useLocation();
	const match = useMatch("/board/*");
	return (
		<div>
			BoardLayout
			<div style={{ height: 1, backgroundColor: "black" }}>
				<Outlet />
			</div>
		</div>
	);
}
