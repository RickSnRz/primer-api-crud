import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Home from './Home';
import ClientesView from './component/Clientes/ClientesView';
import NavBar from "./component/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddClientes from "./component/Clientes/AddClientes";
import EditCliente from "./component/Clientes/EditCliente";
import ClientePofile from "./component/Clientes/ClientePofile";
import Login from "./component/Usuarios/Login";

function App() {
  return (
    <main id="App">
      <Router>  
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<><NavBar /><Home /></>} />
          <Route exact path="/view-clients" element={<><NavBar /><ClientesView /></>} />
          <Route exact path="/add-cliente" element={<><NavBar /><AddClientes /></>} />
          <Route exact path="/edit-cliente/:id" element={<><NavBar /><EditCliente /></>} />
          <Route exact path="/cliente-perfil/:id" element={<><NavBar /><ClientePofile /></>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
