import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Components/Create";
import { GlobalProvider } from "./Components/Global";
import List from "./Components/List";

function App() {
  return (
    <GlobalProvider>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            <List />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
