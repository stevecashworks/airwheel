
import reactDom  from 'react-dom';
import Home from './Pages/HomePage/home';
import state from './redux/state'
import Login from './Pages/user/login/login';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import Register from './Pages/user/register/register';

const root=document.getElementById('root')
const App=()=>{;

    return(
 <Provider store={state}>
    <Router>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/login' exact element={<Login/>}/>
            <Route path='/register' exact element={<Register/>}/>

        </Routes>
    
    </Router>
 </Provider>       
         
    )
}

reactDom.render(
    <Provider store= {state}>
    <App/>
    </Provider>
, root
)
