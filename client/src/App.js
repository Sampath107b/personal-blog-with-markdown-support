import {BrowserRouter,Routes,Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AdminDash from './pages/AdminDash';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import CategoryPage from './pages/CategoryPage';


const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
      <Navbar/>

      <main className=''>     
      <Routes>
        <Route path='/' element={<HomePage/>}  />
        <Route path='/posts/:slug' element={<PostPage/>} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />

        <Route path='/admin/login' element={<LoginPage/>} />
        <Route path='/admin/dashboard'
         element={
          <ProtectedRoute><AdminDash/></ProtectedRoute>
         }/>
            <Route
              path="/admin/create-post"
              element={
                <ProtectedRoute>
                  <CreatePost />
                </ProtectedRoute>
              }
            />
            <Route path="/admin/edit-post/id/:id"
              element={
                <ProtectedRoute>
                  <EditPost />
                </ProtectedRoute>
              }  />
      </Routes>
      </main> 

    </div>
    
    
    
    
    </BrowserRouter>

  )
}

export default App