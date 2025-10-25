import { Route,Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Header from './pages/header/header';
import NoMatch from './pages/noMatch/noMatch';
import PostUser from './employee/postUser';
import UpdateUser from './employee/updateUser';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/employee' element={<PostUser/>}/>
        <Route path='/employee/:id' element={<UpdateUser/>}/>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
     
    </>
  );
}
export default App;
