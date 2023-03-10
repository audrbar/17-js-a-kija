import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Components/Create';
import { GlobalProvider } from './Components/Global';
import List from './Components/List';
import ModalDelete from './Components/ModalDelete';
import ModalAdd from './Components/ModalAdd';
import ModalRem from './Components/ModalRem';
import Messages from './Components/Messages';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <Create />
            <Messages />
          </div>
          <div className="col-7">
            <List />
          </div>
        </div>
      </div>
      <ModalDelete />
      <ModalAdd />
      <ModalRem />

    </GlobalProvider>
  );
}

export default App;