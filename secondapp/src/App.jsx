import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Components/Create";

function App() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4">
          <Create />
        </div>
        <div className="col-8">
          Column
        </div>
      </div>
    </div>
  );
}

export default App;
