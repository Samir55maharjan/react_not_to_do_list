
import './App.css';
import { Form } from './components/Form';
import { List } from './components/List';


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        {/* <!-- top title --> */}
        <div className="row">
          <div className="col text-center mt-5">
            <h1>Not To Do List</h1>
          </div>
        </div>

        {/* <!-- form area --> */}
        <Form/>
        

        {/* <!-- list area --> */}
        <List/>
        

        {/* <!-- total hr area --> */}
        <div className="row fw-bold">
          <div className="col">
            The total hours allocated = <span id="totalHrs">0</span> Hrs
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
