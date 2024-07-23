import "./App.css";
// import Notification from "./components/Notification";
import ToastContainer from "./components/ToastContainer";

function App() {
	return (
		<div className="App">
			<ToastContainer />
			{/* <Notification type="success" message="testing" onClose={() => {}} /> */}
		</div>
	);
}

export default App;
