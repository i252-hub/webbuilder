
import './App.css'

function Homepage() {
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
  <p className='secondboxsubtitle'>Our team is comprised of experienced and dedicated professionals who are</p>
</div>
</div>
</section>
        </div>

      
     
    </>
  )
}

export default Homepage;
