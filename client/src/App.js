import {BrowserRouter,Routes,Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AdminDash from './pages/AdminDash';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
      <Navbar/>

      <main className=''>     
      <Routes>
        <Route path='/' element={<HomePage/>}  />
        <Route path='/post/:id' element={<PostPage/>} />
        <Route path='/admin/login' element={<LoginPage/>} />
        <Route path='/admin/dashboard' element={<AdminDash/>}/>
      </Routes>
      </main> 

    </div>
    
    
    
    
    </BrowserRouter>

  )
}

export default App