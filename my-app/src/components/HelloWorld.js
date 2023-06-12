import React from "react";

export default function HelloWorld({ title, desc, color, fontWeight, textAlign }) {
	return (
		<div style={{ textAlign: textAlign, color: color, fontWeight: fontWeight }}>
			<h1> Hello, World!</h1>
			<h1>
				{title} {desc}
			</h1>
			{/* <div style={props.title}{props.desc} {props.color} {props.fontWeight}{props.textAlign} */}
			<p> now its starting dunno y</p>
		</div>
	);
}
