import "./App.css";
import Exam from "./Exam";
import ExamTwo from "./ExamTwo";
import Home from "./pages/home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      {/* <Exam />
        <ExamTwo /> */}
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
