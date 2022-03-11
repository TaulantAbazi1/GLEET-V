import{Makina} from '../../Makina/Makina';
import{Vendparkingjet} from '../../Vendparkingjet/Vendparkingjet';
import{Paisjet} from '../../Paisjet/Paisjet';
import{Profili} from '../../Profili/Profili';
import{Antaresimi} from '../../Antaresimi/Antaresimi';
import{Gjuha} from '../../Gjuha/Gjuha';
import{Users} from '../../Users/Users';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Navigation } from '../../Navigation';
import {AboutUs} from '../../AboutUs/AboutUs';
import {ToS} from '../../ToS/ToS';
import {ContactForm} from '../../ContactForm/ContactForm';
import './Crud.css' ;
import { Feedback } from '../../Feedback/Feedback';
import { Destinacionet } from '../../Destinacionet/Destinacionet'; 
import { Investitoret } from '../../Investitoret/Investitoret';
import { Mirmbajtja } from '../../Mirmbajtja/Mirmbajtja';
import { ReturnT } from '../../ReturnT/ReturnT';
import { CustomerSupport } from '../../CustumerSupport/CustumerSupport';
import { FuelUp } from '../../FuelUp/FuelUp';
import { Zyret } from '../../Zyret/Zyret';
import { Sponzori } from '../../Sponzori/Sponzori';
import { Sherbimet } from '../../Sherbimet/Sherbimet';
import Navigation2 from '../../Navigation2';
import { Ratings } from '../../Ratings/Ratings';

function Crudat() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="Title">
        Crud dashboard
      </h3>
     <Navigation/>

      <Switch>
       <Route path='/makina' component={Makina}/>
       <Route path='/vendparkingjet' component={Vendparkingjet}/>
       <Route path='/paisjet' component={Paisjet}/>
       <Route path='/profili' component={Profili}/>
       <Route path='/antaresimi' component={Antaresimi}/>
       <Route path='/gjuha' component={Gjuha}/>
       <Route path='/users' component={Users}/>
       <Route path='/aboutus' component={AboutUs}/>
       <Route path='/tos' component={ToS}/>
       <Route path='/contactform' component={ContactForm}/>
       <Route path='/feedback' component={Feedback}/>
       <Route path='/destinacionet' component={Destinacionet}/>
       <Route path='/investitoret' component={Investitoret}/>
       <Route path='/mirmbajtja' component={Mirmbajtja}/>
       <Route path='/returnt' component={ReturnT}/>
       <Route path='/custumersupport' component={CustomerSupport}/>
       <Route path='/fuelup' component={FuelUp}/>
       <Route path='/zyret' component={Zyret}/>
       <Route path='/sponzori' component={Sponzori}/>
       <Route path='/sherbimet' component={Sherbimet}/>
       <Route path='/ratings' component={Ratings}/>
       <Route path='/navigation2' component={Navigation2}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default Crudat;