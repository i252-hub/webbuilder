
import './App.css'
import logo from './assets/logo.jpg';
import firstbrand from './assets/firstbrand.jpg';
import secondbrand from './assets/secondbrand.jpg';
import thirdbrand from './assets/thirdbrand.jpg';
import fourthbrand from './assets/fourthbrand.jpg';
import firstimage from './assets/firstimage.jpg';
import secondimage from './assets/secondimage.jpg';
import thirdimage from './assets/thirdimage.jpg';
import oneservice from './assets/oneservice.jpg';
import twoservice from './assets/twoservice.jpg';
import threeservice from './assets/threeservice.jpg';
import marci from './assets/aboutmarci.jpg';
import carouone from './assets/carouone.jpg';
import caroutwo from './assets/caroutwo.jpg';
import carouthree from './assets/carouthree.jpg';
import caroufour from './assets/caroufour.jpg';
import caroufive from './assets/carouone.jpg';
import carousix from './assets/carouone.jpg';
import carouseven from './assets/carouone.jpg';

function Homepage() {
  const images = ["./src/assets/carouone.jpg","./src/assets/caroutwo.jpg",
    "./src/assets/carouthree.jpg","./src/assets/caroufour.jpg","./src/assets/caroufive.jpg",
    "./src/assets/carousix.jpg","./src/assets/carouseven.jpg"
   ]


 
  return (
    <>
    <div className='cover'></div>
      <div className='background'>
      <nav>
<ul>
  <div className='conimg'><img src= {logo} className='logo'></img></div>
  <li>Home</li>
  <li>Listings</li>
  <li>Let's Move</li>
  <li>About Us</li>
</ul>
<div className='bookmark'></div>
<div className='searchnavcon'>
</div>

      </nav>

      <div className='hometext'>
        <p className='title'>MARCI METZGER - THE RIDGE REALTY GROUP</p>
        <p className='subtitle'>PAHRUMP REALTOR</p>
        <p className='desc'>Discover homes, land, and investment properties in the heart of Pahrump.
           Whether you're looking to buy, sell, or explore your options in real 
           estate.</p>
      </div>

<div className='brands'>
  <div className='brandcontainer'><img className="brand" src={firstbrand}/></div>
  <div className='brandcontainer'><img className="brand" src={secondbrand}/></div>
  <div className='brandcontainer'><img className="brand" src={thirdbrand}/></div>
  <div className='brandcontainer'><img className="brand" src={fourthbrand}/></div>
</div>
      <section className='sectiontwo'>
        <div className='sectdiv'>
          <div className='sectiondiv'><p className='sectiontwotitle'>GET IT SOLD</p></div></div>
<div className='box one'>
<div className='firstbox'>
  <img src={firstimage} className='firstimg'/>
</div>
<div className='secondbox'>
  <p className='secondboxtitle'>Top Residential Sales Last 5 Years</p>
  <p className='secondboxsubtitle'>We helped nearly 90 clients in 2021, and closed 28.5 million in sales! 
Our team works hard everyday to grow and learn, so that we may continue to 
excel in our market. Our clients deserve our best, & we want to make sure our
 best is better every year.
  </p>
</div>
</div>
<div className='box two'>
<div  className='secondbox boxtwo'>
  <p className='secondboxtitle'>Don't Just List it...</p>
  <p className='secondboxsubtitle'>Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.</p>
</div>
<div className='firstbox boxone'>
<img src={secondimage} className='firstimg'/>

</div>
</div>
<div className='box three'>
<div className='firstbox'>
<img src={thirdimage} className='firstimg'/>

</div>
<div  className='secondbox'>
  <p className='secondboxtitle'>Guide to Buyers</p>
  <p className='secondboxsubtitle'>Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!</p>
</div>
</div>
</section>
        </div>

<section className='servicesection'>
  <div className='servtitle'><p>OUR SERVICES</p></div>
  <div className='service'>
  <div className='serviceone'>
    <div className='servicebox'>
      <img className='serv' src={oneservice}/>
    </div>
    <div className='serviceboxbottom'>
      <p className='servicebottitle'>Real Estate Done Right</p>
      <p className='servbotsubtitle'>Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, 
        looking at investment properties, or just curious about the markets, 
        our team ensures you get the best experience possible!</p>
      </div>
  </div>
  <div className='servicetwo'>
  <div className='servicebox'>
  <img className='serv' src={twoservice}/>
  </div>
  <div className='serviceboxbottom'>
    <p  className='servicebottitle'>Commercial & Residential</p>
    <p className='servbotsubtitle' >Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community.
       Happy to help you find where to put you hard-earned dollars.</p>
    </div>
  </div>
  <div className='servicethree'>
  <div className='servicebox'>
  <img className='serv' src={threeservice}/>
  </div>
  <div className='serviceboxbottom'>
    <p  className='servicebottitle'>Rely on Expertise</p>
    <p className='servbotsubtitle'>If you have questions about affordability, credit, and loan options, 
      trust us to connect you with the right people to get the answers you
       need in a timely fashion. We make sure you feel confident and educated
        every step of the way.</p>
    </div>
  </div>
  </div>
</section>

<section className='about'>
  <div className='aboutctn'><img src={marci} className='abt'/></div>
  <div className='abtdesc'>
    <p className='abttitle'>MARCI METZGER</p>
    <p className='abtsubtitle'>REALTOR FOR NEARLY 3 DECADES!</p>
    <p className='abttest'>"I love that small-town feeling that our community offers.
       Spectacular golf courses, parks, pool, and easy access to 
       Las Vegas make Pahrump a great place to call home. Working or retired,
        fast-paced or looking to relax... there's a place for you here!"</p>
  </div>
</section>

<section className='search'>
<div className='dreamhome'><p>FIND YOUR DREAM HOME</p></div>

  <div className='searchcon'>
    <div className='covershadow'></div>
  <form className='srch'>
  <p className='searchlist'>SEARCH LISTINGS</p>
  <div className='searchh'>
  <fieldset>
    <legend>Location</legend>
    <select>
      <option value="option1"></option>
    </select>
  </fieldset>
  <fieldset>
    <legend>Type</legend>
    <select>
      <option value="option1"></option>
    </select>
  </fieldset>
  <fieldset>
    <legend>Sort By</legend>
    <select>
      <option value="option1"></option>
    </select>
  </fieldset>
  </div>
  
  

  <div className='searchhtwo'>
    <fieldset>
      <legend>Bedrooms</legend>
      <select className='searchtwo'>
        <option value="option1"></option>
      </select>
    </fieldset>
    <fieldset>
      <legend>Baths</legend>
      <select className='searchtwo'>
        <option value="option1"></option>
      </select>
    </fieldset>
    <fieldset className='price'>
      <legend>Min Price</legend>
      <input/>
    </fieldset>
    <fieldset className='price'>
      <legend>Max Price</legend>
      <input/>
    </fieldset>
  </div>
  <div className='btncon'><button>SEARCH NOW</button></div>
  </form>
  </div>

</section>

<section className='carousel'>
  <div className='caroutitle'><p>PHOTO GALLERY</p></div>
<div className="slideshow-container">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className={`slide`}
          alt={`Slide ${i + 1}`}
        />
      ))}

     
    </div>
</section>
      
<section className='contact'>
<div className='contacttitle'><p>CALL OR VISIT</p></div>
<div className='contactbox'>
  <form className='contactform'>
    <div className='msg'><p>Send Message</p></div>
    <div>
      <fieldset className='fieldcon'>
        <legend className='name'>Name</legend>
        <input className="inputcon" type="text" name="name" />
      </fieldset>
    </div>
    <div>
    <fieldset className='fieldcon'>
        <legend className='email'>Email</legend>
        <input className="inputcon" type="text" name="name" />
      </fieldset>
    </div>
    <div>
    <fieldset className='fieldcon'>
        <legend className='message'>Message</legend>
        <textarea className="inputcon" type="text" name="name"></textarea>
      </fieldset>
    </div>
    <div className='senctn'><button className='sendbtn'>Send</button></div>
    <div></div>
  </form>
  <div className='map'>
<iframe src="https://www.google.com/maps/embed?pb=!1m19!1m12!1m3!1d123901.93603215077!2d121.15640319999999!3d13.9624448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m4!3e6!4m0!4m1!2s3190%20HW-160%2C%20Suite%20F%2C%20Pahrump%2C%20Nevada%2089048%2C%20United%20States!5e0!3m2!1sen!2sph!4v1744547054441!5m2!1sen!2sph"
 width="600" height="450" 
 style={{border:0}} allowFullScreen="" 
 loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>

</section>

<footer>
 
  <div className='footerone'>
    <p className='logofooter'>Marci Metzger - THE RIDGE REALTY GROUP</p>
    <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
    <p>(206) 919-6886</p>
  </div>
  <div className='footertwo'>
    <p>Office Hours</p>
    <p>Open daily 8:00 am - 7:00 pm</p>
    <p>Appointments outside office hours available upon request. Just call!</p>
  </div>
  <div className='footerthree'>
    <div className='icons'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="30" height="100" viewBox="0 0 50 50">
    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="30" height="100" viewBox="0 0 50 50">
    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="30" height="100" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="30" height="100" viewBox="0 0 50 50">
<path d="M 21.609375 2 C 18.933594 2 12.800781 3.8125 11.5 5.15625 C 11.019531 5.613281 10.898438 6.300781 11.019531 6.757813 C 11.257813 7.214844 20.988281 21.980469 20.988281 21.980469 C 22.046875 23.660156 22.734375 23.96875 23.167969 23.96875 C 23.324219 23.96875 23.445313 23.929688 23.542969 23.902344 C 23.902344 23.785156 25.105469 23.355469 24.863281 20.609375 C 24.746094 17.515625 23.785156 3.898438 23.664063 3.210938 C 23.425781 2.640625 23.0625 2.179688 22.34375 2.0625 C 22.144531 2.019531 21.898438 2 21.609375 2 Z M 21.609375 4 C 21.660156 4 21.699219 4 21.734375 4 C 21.960938 6.582031 22.753906 17.839844 22.863281 20.6875 L 22.871094 20.78125 C 22.886719 20.953125 22.890625 21.105469 22.894531 21.242188 C 22.820313 21.136719 22.742188 21.015625 22.65625 20.878906 C 19.363281 15.882813 14.570313 8.585938 13.152344 6.386719 C 14.445313 5.546875 19.269531 4 21.609375 4 Z M 36.738281 15.996094 C 36.421875 15.996094 36.125 16.082031 35.859375 16.269531 C 35.109375 17.007813 35.375 16.484375 31.058594 22.203125 L 29.015625 24.832031 C 28.535156 25.40625 28.648438 26.359375 29.128906 27.046875 C 29.527344 27.617188 30.046875 27.964844 30.734375 27.964844 C 30.875 27.964844 31.019531 27.953125 31.175781 27.921875 C 31.535156 27.808594 32.257813 27.691406 33.578125 27.347656 C 41.855469 25.519531 41.929688 25.535156 42.292969 25.308594 C 42.769531 24.964844 43.011719 24.503906 43.011719 23.816406 L 43.011719 23.703125 C 42.773438 21.875 39.21875 16.957031 37.539063 16.15625 C 37.269531 16.054688 37 15.996094 36.738281 15.996094 Z M 36.859375 18.074219 C 37.996094 18.882813 40.4375 22.242188 40.945313 23.660156 C 40.316406 23.816406 39 24.105469 36.777344 24.59375 L 33.144531 25.394531 L 33.109375 25.40625 L 33.074219 25.414063 C 32.375 25.59375 31.855469 25.707031 31.46875 25.792969 C 31.207031 25.851563 30.992188 25.898438 30.800781 25.949219 C 30.792969 25.933594 30.78125 25.917969 30.765625 25.902344 C 30.757813 25.890625 30.753906 25.878906 30.746094 25.863281 L 32.652344 23.40625 C 35.988281 18.996094 36.503906 18.414063 36.859375 18.074219 Z M 9.402344 23.96875 C 8.921875 23.96875 8.320313 24.199219 7.960938 24.769531 C 7.121094 25.917969 6.859375 29.570313 7.101563 32.089844 C 7.21875 32.890625 7.339844 33.542969 7.578125 34 C 7.9375 34.574219 8.417969 34.917969 9.019531 34.917969 C 9.378906 34.917969 9.109375 34.8125 16.3125 32.753906 L 19.558594 31.722656 C 20.398438 31.492188 20.984375 30.921875 20.984375 30.003906 C 20.984375 29.089844 20.539063 28.332031 19.699219 27.988281 L 17.417969 27.074219 C 9.609375 23.980469 9.761719 23.96875 9.402344 23.96875 Z M 9.511719 26.078125 C 9.871094 26.214844 10.449219 26.449219 11.222656 26.757813 C 12.371094 27.21875 14.085938 27.902344 16.671875 28.925781 L 18.921875 29.828125 L 15.734375 30.839844 C 11.773438 31.972656 10.070313 32.511719 9.257813 32.78125 C 9.183594 32.476563 9.117188 32.0625 9.085938 31.84375 C 8.867188 29.457031 9.183594 26.84375 9.511719 26.078125 Z M 30.894531 32.015625 C 30.351563 32.015625 29.84375 32.1875 29.453125 32.609375 C 29.0625 33.035156 28.769531 34.230469 29.25 34.917969 L 30.570313 36.863281 C 34.894531 43.503906 34.917969 43.84375 35.277344 44.074219 C 35.558594 44.339844 35.878906 44.453125 36.21875 44.453125 C 36.460938 44.453125 36.710938 44.394531 36.957031 44.300781 C 38.882813 43.613281 42.640625 39.0625 42.878906 37.234375 C 43 36.660156 42.761719 36.085938 42.28125 35.515625 C 42.039063 35.285156 41.539063 35.203125 34.8125 33.113281 L 31.734375 32.136719 C 31.449219 32.058594 31.167969 32.015625 30.894531 32.015625 Z M 22.765625 34.015625 C 22.238281 34.015625 21.75 34.171875 21.449219 34.605469 L 19.886719 36.433594 C 14.480469 42.5 14.242188 42.84375 14.121094 43.1875 C 14 43.417969 14 43.644531 14 43.875 C 14.121094 44.214844 14.242188 44.445313 14.484375 44.789063 C 15.707031 46.0625 20.8125 48 23.082031 48 C 23.257813 48 23.417969 47.988281 23.558594 47.964844 C 24.160156 47.847656 24.640625 47.503906 24.878906 46.933594 C 25 46.589844 25 46.363281 25 39.152344 L 25 35.828125 C 25 34.828125 24.558594 34.496094 23.71875 34.152344 C 23.40625 34.066406 23.078125 34.015625 22.765625 34.015625 Z M 31.066406 34.03125 C 31.097656 34.039063 31.136719 34.046875 31.175781 34.058594 L 34.21875 35.023438 C 36.332031 35.679688 37.832031 36.140625 38.902344 36.46875 C 39.785156 36.738281 40.46875 36.945313 40.871094 37.078125 C 40.5 38.367188 37.738281 41.648438 36.441406 42.34375 C 36.324219 42.160156 36.167969 41.910156 35.988281 41.625 C 35.394531 40.675781 34.285156 38.902344 32.226563 35.738281 Z M 22.867188 36.019531 C 22.902344 36.023438 22.949219 36.027344 23 36.035156 L 23 39.152344 C 23 43.152344 23 45.167969 22.980469 46 C 21.203125 45.941406 17.453125 44.480469 16.21875 43.640625 C 16.925781 42.78125 18.761719 40.699219 21.40625 37.730469 Z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="30" height="100" viewBox="0 0 50 50">
    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
</svg>

    </div>
    <div><p className='copyright'>Copyright © 2023 Marci METZGER Homes - All Rights Reserved</p></div>
  </div>
</footer>
    </>
  )
}

export default Homepage;
