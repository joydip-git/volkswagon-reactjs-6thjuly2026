import NavBar from '../common/nav-bar/NavBar'
import AppRoutes from '../../routes/AppRoutes'

function App() {
  return <div>
    <NavBar />
    <br />
    <div className='container conatiner-fluid'>
      <AppRoutes />
    </div>
  </div>
}

export default App
