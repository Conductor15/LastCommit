import { Routes, Route  } from 'react-router-dom';
import Admin from './admin/Admin.jsx';
import Client from './client/Client.jsx';
function App() {
  return (
    <>
    <Routes>
      <Route path="*" element={<Client />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
    </>
  );
}
export default App;