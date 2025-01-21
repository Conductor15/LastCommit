import { Routes, Route, Navigate  } from 'react-router-dom';
import Admin from './admin/Admin.jsx';
import Client from './client/Client.jsx';
import HomePage from './client/body/HomePage/HomePage.jsx';
import ReadPage from './client/body/ReadPage/ReadPage.jsx';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/client" />} />
      <Route path="/client" element={<Client />} >
        <Route path="" element={<HomePage />} />
        <Route path="detail/:id" element={<ReadPage />} />
      </Route>
      <Route path="/admin" element={<Admin />} />
    </Routes>
    </>
  );
}
export default App;