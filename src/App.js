import './App.css';
import Signup from "./components/signup"
import Signin from "./components/signin"
import ForgotPassword from './components/forgotpassword';
import Dashboard from './components/dashboard';
import ProtectedRoute from './components/protectedRoute'
import {Route , Routes} from "react-router-dom"
import { AuthProvider} from "./services/AuthContext"

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path='/' element={
          <ProtectedRoute> 
            <Dashboard />
          </ProtectedRoute>   
          } 
          />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} /> 
          <Route path='/forgotpassword' element={<ForgotPassword />} />  
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
