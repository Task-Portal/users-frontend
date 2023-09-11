import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Layout from "./components/shared/Layout";
import NoPage from "./components/NoPage"
import UserDetails from "./components/UserDetails"

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/user/:id" element={<UserDetails/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
