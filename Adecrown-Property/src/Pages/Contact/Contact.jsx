import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="container mt-5">
            <h4>
                Get in Touch with Adecrown Property 
            </h4>
            <p>
                Welcome to Adecrown's Contact Us page. We're here to 
                assist you with any inquiries, requests, or feedback 
                you may have. Whether you're looking to buy or sell a 
                property, explore investment opportunities, or simply 
                want to connect, we're just a message away. Reach out 
                to us, and let's start a conversation.
            </p>
        </div>
        <div className="row pp gap-2 m-5">
    <div className="col-md-3">
      <center>
        <img className src="./img/Icon Container.png" alt /><br />
        <p>Find Your Dream Home</p></center>
    </div>
    <div className="col-md-3">       
      <center>
        <img src="./img/Icon Container (1).png" alt /><br />
        <p>Unlock Property Value</p> </center>         
    </div>
    <div className="col-md-3">   
      <center>
        <img src="./img/Icon Container (2).png" alt /><br />
        <p>Effortless Property Management</p>   
      </center>    
    </div>
    <div className="col-md-3">
      <center>
        <img src="./img/Icon Container (3).png" alt /><br />
        <p>Smart Investments, Informed Decisions</p> 
      </center>
    </div>
  </div>
    </div>
  )
}

export default Contact