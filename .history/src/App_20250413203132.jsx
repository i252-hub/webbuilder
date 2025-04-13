
import './App.css'

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
  <div className='conimg'><img src= "./src/assets/logo.jpg" className='logo'></img></div>
  <li>Home</li>
  <li>Listings</li>
  <li>Let's Move</li>
  <li>About Us</li>
</ul>
<div className='bookmark'></div>
      </nav>

      <div className='hometext'>
        <p className='title'>MARCI METZGER - THE RIDGE REALTY GROUP</p>
        <p className='subtitle'>PAHRUMP REALTOR</p>
        <p className='desc'>Discover homes, land, and investment properties in the heart of Pahrump.
           Whether you're looking to buy, sell, or explore your options in real 
           estate.</p>
      </div>

<div className='brands'>
  <div className='brandcontainer'><img className="brand" src="./src/assets/firstbrand.jpg"/></div>
  <div className='brandcontainer'><img className="brand" src="./src/assets/secondbrand.jpg"/></div>
  <div className='brandcontainer'><img className="brand" src="./src/assets/thirdbrand.jpg"/></div>
  <div className='brandcontainer'><img className="brand" src="./src/assets/fourthbrand.jpg"/></div>
</div>
      <section className='sectiontwo'>
          <div><p className='sectiontwotitle'>GET IT SOLD</p></div>
<div className='box one'>
<div className='firstbox'>
  <img src="./src/assets/firstimage.jpg" className='firstimg'/>
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
<img src="./src/assets/secondimage.jpg" className='firstimg'/>

</div>
</div>
<div className='box three'>
<div className='firstbox'>
<img src="./src/assets/firstimage.jpg" className='firstimg'/>

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
      <img className='serv' src="./src/assets/oneservice.jpg"/>
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
  <img className='serv' src="./src/assets/twoservice.jpg"/>
  </div>
  <div className='serviceboxbottom'>
    <p  className='servicebottitle'>Commercial & Residential</p>
    <p className='servbotsubtitle' >Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community.
       Happy to help you find where to put you hard-earned dollars.</p>
    </div>
  </div>
  <div className='servicethree'>
  <div className='servicebox'>
  <img className='serv' src="./src/assets/threeservice.jpg"/>
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
  <div className='aboutctn'><img src="./src/assets/aboutmarci.jpg" className='abt'/></div>
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
  <form>
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
    <div></div>
    <div></div>
  </form>
  <div className='map'>
<iframe src="https://www.google.com/maps/embed?pb=!1m19!1m12!1m3!1d123901.93603215077!2d121.15640319999999!3d13.9624448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m4!3e6!4m0!4m1!2s3190%20HW-160%2C%20Suite%20F%2C%20Pahrump%2C%20Nevada%2089048%2C%20United%20States!5e0!3m2!1sen!2sph!4v1744547054441!5m2!1sen!2sph"
 width="600" height="450" 
 style={{border:0}} allowfullscreen="" 
 loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>

</section>
    </>
  )
}

export default Homepage;
