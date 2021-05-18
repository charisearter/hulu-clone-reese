import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Results from "./components/results/Results";

function App() {
	return (
		<div className="app">
			<Header />
			<Nav />
			<Results />
		</div>
	);
}

export default App;
