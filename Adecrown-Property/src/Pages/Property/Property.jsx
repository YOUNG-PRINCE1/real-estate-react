import React from 'react'
import './Property.css'

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
    <div className="form">
      <div className="row">
        <div className="col-md-3">
          <label htmlFor>First Name</label>
          <input placeholder="Enter First Name" className="form-control mt-3 bg-black text-light" type="text" />
        </div>
        <div className="col-md-3">
          <label htmlFor>Last Name</label>
          <input placeholder="Enter last Name" className="form-control mt-3 bg-black text-light" type="text" />
        </div>
        <div className="col-md-3">
          <label htmlFor>Email</label>
          <input placeholder="Enter Your Email" className="form-control mt-3 bg-black text-light" type="text" />
        </div>
        <div className="col-md-3">
          <label htmlFor>Phone</label>
          <input placeholder="Enter Phone Number" className="form-control mt-3 bg-black text-light" type="text" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-3">
          <label htmlFor>Preferred Location</label>
          <select className="mt-3" id="myDropdown" style={{width: '100%', height: '60%'}}>
            <optgroup label="Local Government Areas">
              <option value="Agege">Agege</option>
              <option value="Ajeromi-Ifelodun">Ajeromi-Ifelodun</option>
              <option value="Alimosho">Alimosho</option>
              <option value="Amuwo-Odofin">Amuwo-Odofin</option>
              <option value="Apapa">Apapa</option>
              <option value="Badagry">Badagry</option>
              <option value="Epe">Epe</option>
              <option value="Eti-Osa">Eti-Osa</option>
              <option value="Ibeju-Lekki">Ibeju-Lekki</option>
              <option value="Ifako-Ijaiye">Ifako-Ijaiye</option>
              <option value="Ikeja">Ikeja</option>
              <option value="Ikorodu">Ikorodu</option>
              <option value="Kosofe">Kosofe</option>
              <option value="Lagos Island">Lagos Island</option>
              <option value="Lagos Mainland">Lagos Mainland</option>
              <option value="Mushin">Mushin</option>
              <option value="Ojo">Ojo</option>
              <option value="Oshodi-Isolo">Oshodi-Isolo</option>
              <option value="Shomolu">Shomolu</option>
              <option value="Surulere">Surulere</option>
            </optgroup>
            <optgroup label="Towns and Cities">
              <option value="Abule Egba">Abule Egba</option>
              <option value="Ajah">Ajah</option>
              <option value="Alagbado">Alagbado</option>
              <option value="Badagry">Badagry</option>
              <option value="Epe">Epe</option>
              <option value="Festac Town">Festac Town</option>
              <option value="Ikorodu">Ikorodu</option>
              <option value="Ikeja">Ikeja</option>
              <option value="Ikoyi">Ikoyi</option>
              <option value="Lekki">Lekki</option>
              <option value="Magboro">Magboro</option>
              <option value="Maryland">Maryland</option>
              <option value="Ojota">Ojota</option>
              <option value="Oshodi">Oshodi</option>
              <option value="Oworonshoki">Oworonshoki</option>
              <option value="Sangotedo">Sangotedo</option>
              <option value="Victoria Island">Victoria Island</option>
            </optgroup>
            <optgroup label="Neighborhoods and Districts">
              <option value="Allen Avenue">Allen Avenue</option>
              <option value="Banana Island">Banana Island</option>
              <option value="Computer Village">Computer Village</option>
              <option value="Idumota">Idumota</option>
              <option value="Ikota">Ikota</option>
              <option value="Marina">Marina</option>
              <option value="Ogudu">Ogudu</option>
              <option value="Ojuelegba">Ojuelegba</option>
              <option value="option1">Select Property type</option> 
              <option value="option2">Magodo</option>  
              <option value="option3">Olowoira</option> 
              <option value="option4">Isheri</option> 
              <option value="option5">Ojodu</option> 
              <option value="option6">Omole</option> 
              <option value="option7">Ikorodu</option> 
              <option value="Oniru">Oniru</option>
              <option value="Victoria Garden City">Victoria Garden City</option>
            </optgroup>
            <optgroup label="Islands">
              <option value="Ebute Metta Island">Ebute Metta Island</option>
              <option value="Iddo Island">Iddo Island</option>
              <option value="Ikoyi Island">Ikoyi Island</option>
              <option value="Lagos Island">Lagos Island</option>
              <option value="Victoria Island">Victoria Island</option>
            </optgroup>
            <optgroup label="Beaches">
              <option value="Bar Beach">Bar Beach</option>
              <option value="Eko Atlantic Beach">Eko Atlantic Beach</option>
              <option value="Eleko Beach">Eleko Beach</option>
              <option value="Lekki Beach">Lekki Beach</option>
              <option value="Oniru Beach">Oniru Beach</option>
            </optgroup>
            <optgroup label="Markets">
              <option value="Balogun Market">Balogun Market</option>
              <option value="Computer Village">Computer Village</option>
              <option value="Idumota Market">Idumota Market</option>
              <option value="Jankara Market">Jankara Market</option>
              <option value="Mile 12 Market">Mile 12 Market</option>
              <option value="Oniru Market">Oniru Market</option>
              <option value="Oshodi Market">Oshodi Market</option>
              <option value="Tejuosho Market">Tejuosho Market</option>
            </optgroup>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor>Property Type</label>
          <select className="mt-3" id="myDropdown" style={{width: '100%', height: '60%'}}>
            <option value="option1">Select Property type</option> 
            <option value="option2">Magodo</option> 
            <option value="option3">Olowoira</option> 
            <option value="option4">Isheri</option> 
            <option value="option5">Ojodu</option> 
            <option value="option6">Omole</option> 
            <option value="option7">Ikorodu</option> 
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor>No . of Bathroom</label>
          <select className="mt-3" id="myDropdown" style={{width: '100%', height: '60%'}}>
            <option value="option1">Select no . of bathroom</option> 
            <option value="option2">Magodo</option> 
            <option value="option3">Olowoira</option> 
            <option value="option4">Isheri</option> 
            <option value="option5">Ojodu</option> 
            <option value="option6">Omole</option> 
            <option value="option7">Ikorodu</option> 
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor>No . of Bedroom</label>
          <select className="mt-3" id="myDropdown" style={{width: '100%', height: '60%'}}>
            <option value="option1">Select no . of bedroom</option> 
            <option value="option2">Magodo</option> 
            <option value="option3">Olowoira</option> 
            <option value="option4">Isheri</option> 
            <option value="option5">Ojodu</option> 
            <option value="option6">Omole</option> 
            <option value="option7">Ikorodu</option> 
          </select>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <label htmlFor>Budget</label>
          <select className="mt-3" id="myDropdown" style={{width: '100%', height: '50%'}}>
            <option value="option1">Select Budget</option> 
            <option value="option2">Magodo</option> 
            <option value="option3">Olowoira</option> 
            <option value="option4">Isheri</option> 
            <option value="option5">Ojodu</option> 
            <option value="option6">Omole</option> 
            <option value="option7">Ikorodu</option> 
          </select>
        </div>
        <div className="col-md-3">
          <p>Preferred Contact Method</p>
          <div className="radio">
            <input className="form-control bg-black text-light" placeholder="Enter Your Phone Number" type="text" />
            <input className="circle" type="radio" name id />
          </div>
        </div>
        <div className="col-md-3">
          <p>Preferred Contact Method</p>
          <div className="radio">
            <input className="form-control bg-black text-light" placeholder="Enter Your Email" type="text" />
            <input className="circle" type="radio" name id />
          </div>
        </div>
      </div>
      <div className=" mt-4">
        <label htmlFor>Message</label>
        <input className="form-control mt-2 message bg-black text-light" placeholder="Enter Message Here" type="text" />
      </div>
      <div className="terms mt-4">
        <div className="row">
          <div className="col-md-9 condition">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id defaultValue="option1" />
              <label className="form-check-label" htmlFor><p className>I agree with 
                  <a href="#">Terms of Use </a>and Privacy Policy</p>
              </label>
            </div>            
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary">Submit Form</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Property