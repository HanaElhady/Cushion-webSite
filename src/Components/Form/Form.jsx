import React from "react";
import "./Form.css";
import Swal from 'sweetalert2';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Form() {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "706fe3d1-0546-4e0b-b8d4-91551fcada51");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Message sent succesfully",
        html: `
        <div style="display: flex;
        align-items: center;
        justify-content : center;
        ">
        <div>
          <i class="fa-regular fa-message" style="font-size: 50px; color: white;"></i>
          </div>
        </div>`,
        customClass: {
          popup: 'custom-swal-popup',
          title: 'custom-swal-title',
          confirmButton: 'custom-swal-confirm-button'
        },
        confirmButtonText: 'Okay'
      });
    }
  }


  return (
    <div className="formBody">
      <div className="form">
        <div className="info">
          <div>
            <h1>EMAIL</h1>
            <h1>support@website.com</h1>
          </div>
          <div>
            <h1>PHONE</h1>
            <h1>800-123-456</h1>
          </div>
          <div>
            <h1>ADDRESS</h1>
            <h1>23 Evergreen Street,San Francisco, California USA</h1>
          </div>
        </div>
        <div className="FormSection">

          <div>
          <h1>Address</h1>
          <h1> Drop us your message and I'll get back to you as soon as possible. </h1>
          </div>
          <br />
          <br />
          <br />
          <div>
            <form onSubmit={onSubmit} >
          <div className="gridContainer textArea">
            <input type="text" placeholder="Your name" required name = 'name'/>
            <input type="text" placeholder="Your Company" name = 'name' />
            <input type="tel" placeholder="Your Phone" name = 'phone' />
            <input type="email" placeholder="Your email" required name = 'email'/>
          </div>
          <br /> <br /> <br />
          <div>
          <textarea name="message" id = "" placeholder="Your message" required rows="8" cols={"59"} className="textArea" style = {{
          resize:"none",
          backgroundColor: "transparent" ,
          borderColor: "white" ,
          padding: "20px" ,
          color :"white" ,
          fontSize: "15px" ,
          borderStyle : "solid"
          
          }}/>
          </div>
          <br /> <br /> <br />
          <div>
            <button type = "submit" className="talkBtn">Let's Talk</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
