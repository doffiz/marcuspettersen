import React from 'react'
import './header.css'


import marcus from '../../images/marcus.jpg'


const Header = () => {
    return (
        <div className="pf__header" id="home">
            <div className="pf__header-content">
                <div className="pf__header-content-text">
                    <h4>Mitt navn er</h4>
                    <h1 className="gradient__text">Marcus Pettersen</h1>
                    <p>Utvikler på dagtid. Superhelt på kvelden.</p>
                    {/* <div className="pf__header_cta-box">
                      <h3>Hei</h3>
                     <div className="pf__header_cta-btn">
                          <button type="button">Les mer</button>
                          </div>
                    </div> */}
                </div>
                <div className="pf__header-content-image">
                    <img src={marcus} alt="marcus" />
                </div>
            </div>

        </div>
    )
}

export default Header
