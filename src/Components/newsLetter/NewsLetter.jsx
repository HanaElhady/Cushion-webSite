import React from 'react';
import './NewsLetter.css'; // Ensure this file contains necessary styles
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome is included

export default function NewsLetter() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "706fe3d1-0546-4e0b-b8d4-91551fcada51");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
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
          title: 'Subscribed Successfully!',
          text: 'Thank you for subscribing to our promotions and updates. You will now receive the latest news and special offers directly to your inbox.',
          html: `
            <div style="display: flex; align-items: center; justify-content: center;">
              <i class="fa-regular fa-envelope-open" style="font-size: 50px; color: #white;"></i>
            </div>`,
          customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            confirmButton: 'custom-swal-confirm-button'
          },
          confirmButtonText: 'Okay'
        });
      } else {
        // Handle failure case
        Swal.fire({
          title: 'Subscription Failed',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Okay',
          customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            confirmButton: 'custom-swal-confirm-button'
          }
        });
      }
    } catch (error) {
      // Handle network error
      Swal.fire({
        title: 'Network Error',
        text: 'Please check your internet connection and try again.',
        icon: 'error',
        confirmButtonText: 'Okay',
        customClass: {
          popup: 'custom-swal-popup',
          title: 'custom-swal-title',
          confirmButton: 'custom-swal-confirm-button'
        }
      });
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-header">
        <h1>NEWSLETTER</h1>
      </div>
      <div className="newsletter-subheader">
        <h1>Get promotions & updates!</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="newsletter-form">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
