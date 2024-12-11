import React from 'react'
import './Property.css'
import Form from '../../Components/Form/Form'

const Property = () => {
  return (
    <div>
        <div className="container text-light ">
  <div className="banner mt-5">
    <h3>
      Find Your Dream Property
    </h3>
    <p>
      Welcome to Adecrown Property, where your dream property awaits in every 
      corner of our beautiful world. Explore our curated selection of 
      properties, each offering a unique story and a chance to redefine 
      your life. With categories to suit every dreamer, your journey 
    </p>
  </div>
  <div className="input-section">
    <div className="input mt-5">
      <center>
        <input placeholder="Search For a Property" className="form-control search" type="text" />
        <button className="btn btn-primary">
          <i className="fas fa-search"> </i>
        </button>
      </center>
    </div>
    <div className="row selection">
      <div className="col-md-2">
        <select className=" mt-3" id="myDropdown" style={{height: '2.5rem'}}>
          <option value="option1">location</option> 
          <option value="option2">17GB unified memory</option> 
          <option value="option3">15GB unified memory</option> 
          <option value="option4">18GB unified memory</option> 
        </select>
      </div>
      <div className="col-md-2">
        <select className=" mt-3" id="myDropdown" style={{height: '2.5rem'}}>
          <option value="option1">Property Type</option> 
          <option value="option2">17GB unified memory</option> 
          <option value="option3">15GB unified memory</option> 
          <option value="option4">18GB unified memory</option> 
        </select>
      </div>
      <div className="col-md-2">
        <select className=" mt-3" id="myDropdown" style={{height: '2.5rem'}}>
          <option value="option1">Pricing Range</option> 
          <option value="option2">17GB unified memory</option> 
          <option value="option3">15GB unified memory</option> 
          <option value="option4">18GB unified memory</option> 
        </select>
      </div>
      <div className="col-md-2">
        <select className=" mt-3" id="myDropdown" style={{height: '2.5rem'}}>
          <option value="option1">Property Size</option> 
          <option value="option2">17GB unified memory</option> 
          <option value="option3">15GB unified memory</option> 
          <option value="option4">18GB unified memory</option> 
        </select>
      </div>
      <div className="col-md-2">
        <select className=" mt-3" id="myDropdown" style={{height: '2.5rem'}}>
          <option value="option1">Build Year</option> 
          <option value="option2">17GB unified memory</option> 
          <option value="option3">15GB unified memory</option> 
          <option value="option4">18GB unified memory</option> 
        </select>
      </div>
    </div>
  </div>
  <div className="property mt-5">
    <h3>
      Discover a World of Possibilities
    </h3>
    <p>
      Our portfolio of properties is as diverse as your dreams. 
      Explore the following categories to find the perfect property 
      that resonates with your vision of home
    </p>
  </div>
  <div className="row mt-5">
    <div className="col-md-4 dd">
      <img className="img-fluid" src="./img/Image (1).png" alt />
      <div className="descrip mt-3">
        <p>
          Coastal Escapes - Where Waves Beckon
        </p>
      </div>
      <h5 className="mt-3">Seaside Serenity Villa</h5>
      <p>A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More</p>
      <div className="row mt-5">
        <div className="col-md-4">
          <p className>Price</p>
          <p>$550,000</p>
        </div>
        <div className="col-md-8">
          <button className="btn btn-primary">View Property Details</button>
        </div>
      </div>
    </div>
    <div className="col-md-4 dd">
      <img className="img-fluid" src="./img/Image (2).png" alt />
      <div className="descrip mt-3">
        <p>
          Urban Oasis - Life in the Heart of the City
        </p>
      </div>
      <h5 className="mt-3">Metropolitan Haven</h5>
      <p>A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More</p>
      <div className="row mt-5">
        <div className="col-md-4">
          <p className>Price</p>
          <p>$550,000</p>
        </div>
        <div className="col-md-8">
          <button className="btn btn-primary">View Property Details</button>
        </div>
      </div>
    </div>
    <div className="col-md-4 dd">
      <img className="img-fluid" src="./img/Image (3).png" alt />
      <div className="descrip mt-3">
        <p>
          Countryside Charm - Escape to Nature's Embrace
        </p>
      </div>
      <h5 className="mt-3">
        Rustic Retreat Cottage
      </h5>
      <p>An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More</p>
      <div className="row mt-5">
        <div className="col-md-4">
          <p className>Price</p>
          <p>$550,000</p>
        </div>
        <div className="col-md-8">
          <button className="btn btn-primary">View Property Details</button>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-5">
    <h4>
      Let's Make it Happen
    </h4>
    <p>
      Ready to take the first step toward your dream property? 
      Fill out the form below, and our real estate wizards will 
      work their magic to find your perfect match. Don't wait; let's 
      embark on this exciting journey together.
    </p>
    <Form/>
  </div>
</div>

    </div>
  )
}

export default Property