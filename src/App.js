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

function App() {
  return (
    <main>
      <Router>
      <NavBar />
        <Routes>
          <Route 
          exact
          path="/" 
          element={<Home />} />
          <Route 
          exact
          path="/view-clients" 
          element={<ClientesView />} />
          <Route 
          exact
          path="/add-cliente" 
          element={<AddClientes />} />
          <Route 
          exact
          path="/edit-cliente/:id" 
          element={<EditCliente />} />
          <Route 
          exact
          path="/cliente-perfil/:id" 
          element={<ClientePofile />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
