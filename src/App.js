import './App.css';
import Sidebar from "./components/Sidebar";
import IndexLeftPart from "./components/Index/IndexLeftPart";
import IndexRightPart from "./components/Index/IndexRightPart";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <main>
                <IndexLeftPart/>
                <IndexRightPart/>
            </main>

        </div>
    );
}

export default App;
