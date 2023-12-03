import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/HomePage';
import Authentication from './components/authentication/Authentication';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from './store/auth/Action';

function App() {

  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    
    if(jwt){
      dispatch(getUserProfile(jwt))
      navigate("/")
    }

  },[auth.jwt])

  return (
    <div className="">
        <Routes>
          <Route path="/*" element={auth.user?<HomePage/>:<Authentication/>}>
          </Route>

        </Routes>

    </div>
  );
}

export default App;
