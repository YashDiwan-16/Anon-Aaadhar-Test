import React from 'react';
import { Link } from 'react-router-dom';
import NavBar2 from './NavBar2';
import img from '../MainPage/anonAadhar.png';
import img2 from '../MainPage/Magnetic Card.png';
import './mainpg.css';


const mainpg = () => {
  return (
    <>
      <NavBar2 />

  

      <div className="c">
        <input type="radio" name="a" id="cr-1" defaultChecked />
        <label htmlFor="cr-1" style={{ '--hue': 32 }}></label>
        <div className="ci" style={{ '--z': 2 }}>
          <h2 className="ch" style={{ '--h': 32, '--s': '80%', '--l': '90%' }}>What do you know?</h2>
          <img src="https://images.unsplash.com/photo-1516655802732-dc776050098b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700" alt="Snow on leaves" />
        </div>

        <input type="radio" name="a" id="cr-2" />
        <label htmlFor="cr-2" style={{ '--hue': 82 }}></label>
        <div className="ci" style={{ '--z': 3 }}>
          <h2 className="ch" style={{ '--h': 82, '--s': '80%', '--l': '90%' }}>Look from inside?</h2>
          <img src="https://images.unsplash.com/photo-1529761430595-036b79cb9d5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700" alt="Trees" />
        </div>

        <input type="radio" name="a" id="cr-3" />
        <label htmlFor="cr-3" style={{ '--hue': 40 }}></label>
        <div className="ci" style={{ '--z': 2 }}>
          <h2 className="ch" style={{ '--h': 40, '--s': '100%', '--l': '89%' }}>In the mountains?</h2>
          <img src="https://images.unsplash.com/photo-1518805629729-3e55b81b2393?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700" alt="Mountains and houses" />
        </div>

        <input type="radio" name="a" id="cr-4" />
        <label htmlFor="cr-4" style={{ '--hue': 210 }}></label>
        <div className="ci" style={{ '--z': 1 }}>
          <h2 className="ch" style={{ '--h': 210, '--s': '70%', '--l': '90%' }}>Above looks beautiful?</h2>
          <img src="https://images.unsplash.com/photo-1488831948116-38bc1351c6d6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700" alt="Sky and mountains" />
        </div>
      </div>




     <div className="anonimg">
        <img className="anon" src={img} alt="" />
        <div className="login">
          <div className="button-login">
            <Link to='/Home'>
              <button className='largeFont'>
                <img id="log" src={img2} alt="" />
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default mainpg;
