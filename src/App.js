import './App.css';
import './style.css';
import logo from './images/ice-cream-1.jpg';

function App() {
  return (
    <div>

      <div className="announcement">
        <p>Save 10%! With Promo Code Pink</p>
      </div>

      <div className="header">
        <h1>FLAMINGO ICE-CREAM</h1>
      </div>

      <div className="row">
        <div className="column">
          <img src= {logo} alt = "icecream" width={500} height={400} />
        </div>
        <div className="column">
          <div className="cta">
            <p1>DON'T COMPROMISE ON TASTE! TRY OUR CLASSIC FLAVORS TODAY.</p1>
          </div>
          <div className="menu">
            <ul className="ul1">In store today:</ul>
            <ul>Vanilla</ul>
            <ul>Chocolate</ul>
            <ul>Strawberry</ul>
            <ul>Blueberry</ul>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-container1">
          <p2>Contact Us.</p2><br />
          <p2>(44) 0236-1212</p2><br />
          <p2>23 Kensington street</p2><br />
          <p2>London, UK, SW1</p2>
        </div>
        <div className="footer-container2">
          {/* <a href="#" class="fa fa-facebook" />
          <a href="#" class="fa fa-twitter" />
          <a href="#" class="fa fa-instagram" />
          <a href="#" class="fa fa-pinterest" /> */}
        </div>
      </div>

    </div>
  );
}

export default App;
