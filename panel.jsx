import Newuser from './newuser';
import Login from './login';
import Forgot from './forgot';
import { useNavigate } from 'react-router-dom';
import {Route,Navigate,Routes as Switch} from 'react-router-dom';
import Logout from './logout';
import Timer from './stopwatch'
import Form from './form'
import { Layout } from '@shopify/polaris';
import State from './sta';
import Captacha from './captacha'
import Typing from './typing';
import Movies from './cmo';
import Button1 from './component2/button';
function Panel() {
        let history=useNavigate();
        return(
<Switch>
        <Route path="/"  element={<Login history={history} />}/>
        <Route path="/newuser"  element={<Newuser history={history}/>}/>
        <Route path="/forget"  element={<Forgot history={history}/>}/>
        <Route path="/logout"  element={<Logout history={history}/>}/>
        <Route path="/form"  element={<Form history={history}/>}/>
        <Route path="/timer"   element={<Timer/>}/>
        <Route path="/state"   element={<State/>}/>
        <Route path="/layout"   element={<Layout/>}/>
        <Route path="/cap"   element={<Captacha/>}/>
        <Route path="/typing"   element={<Typing/>}/>
        <Route path="/button"   element={< Button1/>}/>
        <Route path="/table"   element={< Movies/>}/>
        <Route path='*' element={<Navigate to ="/" />}/>

      
        
     </Switch>
        );
}
export default Panel;