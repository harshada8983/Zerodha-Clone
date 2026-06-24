import React from 'react';
import { Link } from "react-router-dom";

function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row text-center'>
               <h1>The Zerodha Universe</h1>
               <p>
                  Extend your trading and investment experience even further with our partner platforms
               </p>
               
               <div className='col-4 mt-5'>
                 <img src= "media/images/zerodhaFundhouse.png" alt="universe icon" style={{width: '210px'}} />
                  <p className='text-small text-muted'
                    style={{width: "80%", margin: "0 auto", lineHeight: "1.6"}}>
                    Our asset management venture
                    that is creating simple and transparent index
                    funds to help you save for your goals.
                  </p>
               </div>
               <div className='col-4 mt-5'>
                 <img src= "media/images/sensibullLogo.svg" alt="universe icon" style={{width: '250px'}}/>
                 <p className='text-small text-muted'
                  style={{width: "80%", margin: "0 auto", lineHeight: "1.6"}}>
                   Options trading platform that lets you
                   create strategies, analyze positions, and examine
                   data points like open interest, FII/DII, and more.
                 </p>
               </div>
               <div className='col-4 p-3 mt-3 mb-3'>
                 <img src= "media/images/tijori.svg" alt="universe icon" style={{width: '150px'}} />
                 <p className='text-small text-muted'
                    style={{width: "80%", margin: "0 auto", lineHeight: "1.6"}}>
                    Investment research platform
                    that offers detailed insights on stocks,
                    sectors, supply chains, and more.
                 </p>
               </div>
               <div className='col-4 mt-5'>
                 <img src= "media/images/streakLogo.png" alt="universe icon" style={{width: '200px'}}/>
                 <p className='text-small text-muted'
                  style={{width: "80%", margin: "0 auto", lineHeight: "1.6"}}>
                  Systematic trading platform
                  that allows you to create and backtest
                  strategies without coding.
                 </p>
               </div>
               <div className='col-4 p-3 mt-5'>
                 <img src= "media/images/smallcaseLogo.png" alt="universe icon" style={{width: '210px'}}/>
                 <p className='text-small text-muted'
                  style={{width: "80%", margin: "0 auto", lineHeight: "1.6"}}>
                    Systematic trading platform
                    that allows you to create and backtest
                    strategies without coding.</p>
               </div>
               <div className='col-4 mt-5'>
                 <img src= "media/images/dittoLogo.png" alt="universe icon" style={{width: '150px'}}/>
                 <p className='text-small text-muted'
                  style={{width: "80%", margin: "0 auto", lineHeight: "1.6"}}>
                  Personalized advice on life
                  and health insurance. No spam
                  and no mis-selling.
                 </p>
               </div>
               <Link to="/signup">
                   <button 
                     className="p-2 btn btn-primary fs-5 mb-5 mt-5"
                     style={{ width: "20%", margin: "0 auto" }}
                   >
                     Signup Now
                   </button>
               </Link>
           </div>
        </div>
    );
}

export default Universe;