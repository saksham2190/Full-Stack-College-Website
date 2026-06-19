import React from 'react'
import './Contact.css'
import query from '../../assets/query.png'
import location from '../../assets/location.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import dark_arrow from '../../assets/dark-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "21eee219-a3e7-4989-a6fb-2ba3d336b4c4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Have a query? Contact us <img src={query} alt="" /></h3>
        <p>For any inquiries or feedback, please reach out to us via the contact form or through the contact information listed. Your thoughts, questions, and ideas are greatly appreciated as we continue to enhance our services for the university community.</p>
        <ul>
            <li className='contact-col0'>
              <img src={mail} alt="" />
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=admissions@niu.edu.in"
                target="_blank"
                rel="noopener noreferrer"f
              >
                admissions@niu.edu.in</a>
            </li>
            <li><img src={phone} alt="" />(+91) 8745862200</li>
            <li className='contact-col1'>
              <img src={location} alt="" />
              <a 
                href="https://www.google.com/maps?q=Plot+No.+1%2CSector-17+A%2CYamuna+Expressway%2CGautam+Budh+Nagar%2CUttar+Pradesh+201312"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plot No. 1, Sector-17 A, Yamuna Expressway, Gautam Budh Nagar, Uttar Pradesh 201312
              </a>
            </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name'required/>
            <label>Phone Number</label>
            <input type="number" name='phone' placeholder='Enter Your Number'required/> 
            <label>Write Your Query Here</label> 
            <textarea name="message" rows="6" placeholder='Enter Message Here'></textarea>      
            <button type='submit' className='btn dark-btn'>Submit Now <img src={dark_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
