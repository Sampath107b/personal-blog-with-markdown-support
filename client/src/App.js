import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>}  />
        <Route path='/post/:id' element={<h1>single post page</h1>} />
        <Route path='/admin/login' element={<h1>Admin login page</h1>} />
      </Routes>

    </div>
    
    
    
    
    </BrowserRouter>

  )
}

export default App