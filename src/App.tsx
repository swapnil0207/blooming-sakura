import React from "react";
import logo from "./logo.svg";
import Header from "./Common/Header/Header";
import "./App.scss";

function App() {
	return (
		<div className="AppMain">
			<Header />
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						<b>Blooming Sakura</b>
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		</div>
	);
}

export default App;
