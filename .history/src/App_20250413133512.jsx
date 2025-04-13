
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
<div className='box'>
<div className='firstbox'></div>
<div className='secondbox'></div>
</div>
<div className='box'>
<div></div>
<div></div>
</div>
<div className='box'>
<div></div>
<div></div>
</div>
</section>
     
    </>
  )
}

export default Homepage;
