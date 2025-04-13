
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

     
        </div>

        <section className='sectiontwo'>
          <div><p className='sectiontwotitle'>GET IT SOLD</p></div>
<div className='box one'>
<div className='firstbox'>
  <img src="./src/assets/firstimage.jpg" className='firstimg'/>
</div>
<div className='secondbox'>
  <p className=''>Top Residential Sales Last 5 Years</p>
  <p>We helped nearly 90 clients in 2021, and closed 28.5 million in sales! 
Our team works hard everyday to grow and learn, so that we may continue to 
excel in our market. Our clients deserve our best, & we want to make sure our
 best is better every year.
  </p>
</div>
</div>
<div className='box two'>
<div  className='secondbox'></div>
<div className='firstbox'>
<img src="./src/assets/firstimage.jpg" className='firstimg'/>

</div>
</div>
<div className='box three'>
<div className='firstbox'>
<img src="./src/assets/firstimage.jpg" className='firstimg'/>

</div>
<div  className='secondbox'></div>
</div>
</section>
     
    </>
  )
}

export default Homepage;
