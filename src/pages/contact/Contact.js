import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [reserveName, setReserveName] = useState("");
  const [reserveEmail, setReserveEmail] = useState("");
  const [reserveDate, setReserveDate] = useState("");
  const [reserveTime, setReserveTime] = useState("");
  const [reservePeople, setReservePeople] = useState("");

  function handleContactSubmit(e) {
    e.preventDefault();
    // TODO: Handle contact form submission
    console.log("Contact form submitted");
  }

  function handleReservationSubmit(e) {
    e.preventDefault();
    // TODO: Handle reservation form submission
    console.log("Reservation form submitted");
  }

  return (
    <>
      <main class="contact-section container light-body">
        <div class="contact-reservation">
          <div class="contact-content">
            <h2 class="contact-title">Get in touch</h2>
            <p class="contact-sub">
              Fill up the form and our team will get back to you as soon as
              possible.
            </p>
            <div class="form-container">
              <form
                action="#"
                onSubmit={handleContactSubmit}
                class="contact-form"
              >
                <div class="contact-flex">
                  <div class="input-field">
                    <input
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      type="text"
                      required
                    />
                    <label>First Name</label>
                  </div>
                  <div class="input-field">
                    <input
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      type="text"
                      required
                    />
                    <label>Last Name</label>
                  </div>
                </div>
                <div class="contact-flex">
                  <div class="input-field">
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      required
                    />
                    <label>Email Address</label>
                  </div>
                  <div class="input-field">
                    <input
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      type="tel"
                      required
                    />
                    <label>Phone Number</label>
                  </div>
                </div>
                <div class="input-field">
                  <input
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    type="text"
                    required
                    id="contact-message"
                    name="text-area"
                    class="text-area"
                    autocomplete="off"
                  />
                  <label>Message</label>
                </div>
                <div class="contactBtn">
                  <button id="contactBtn" type="Submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="reservation-content">
            <h2 class="contact-title">Reserve a table</h2>
            <form
              action="#"
              class="reserve-inputs-container"
              onSubmit={handleReservationSubmit}
            >
              <div class="reserve-input-field">
                <input
                  value={reserveName}
                  onChange={(e) => {
                    setReserveName(e.target.value);
                  }}
                  type="text"
                  required
                  placeholder="Name"
                />
              </div>
              <div class="reserve-input-field">
                <input
                  value={reserveEmail}
                  onChange={(e) => {
                    setReserveEmail(e.target.value);
                  }}
                  type="email"
                  required
                  placeholder="Email"
                />
              </div>
              <div class="reserve-input-field">
                <input
                  value={reserveDate}
                  onChange={(e) => {
                    setReserveDate(e.target.value);
                  }}
                  type="date"
                  name="date"
                  required
                />
              </div>
              <div class="reserve-input-field">
                <select
                  name="time"
                  id="time"
                  value={reserveTime}
                  onChange={(e) => setReserveTime(e.target.value)}
                >
                  <option value="time">Time</option>
                  <option value="time">12:00 PM</option>
                  <option value="time">12:30 PM</option>
                  <option value="time">1:00 PM</option>
                  <option value="time">1:30 PM</option>
                  <option value="time">2:00 PM</option>
                  <option value="time">2:30 PM</option>
                  <option value="time">3:00 PM</option>
                  <option value="time">3:30 PM</option>
                  <option value="time">4:00 PM</option>
                  <option value="time">4:30 PM</option>
                  <option value="time">5:00 PM</option>
                  <option value="time">5:30 PM</option>
                  <option value="time">6:00 PM</option>
                  <option value="time">6:30 PM</option>
                  <option value="time">7:00 PM</option>
                  <option value="time">7:30 PM</option>
                  <option value="time">8:00 PM</option>
                  <option value="time">8:30 PM</option>
                  <option value="time">9:00 PM</option>
                  <option value="time">9:30 PM</option>
                  <option value="time">10:00 PM</option>
                  <option value="time">10:30 PM</option>
                  <option value="time">11:00 PM</option>
                  <option value="time">11:30 PM</option>
                </select>
              </div>
              <div class="reserve-input-field">
                <select
                  name="people"
                  id="people"
                  value={reservePeople}
                  onChange={(e) => setReservePeople(e.target.value)}
                >
                  <option value="people">People</option>
                  <option value="people">1</option>
                  <option value="people">2</option>
                  <option value="people">3</option>
                  <option value="people">4</option>
                  <option value="people">5</option>
                  <option value="people">6</option>
                  <option value="people">7</option>
                  <option value="people">8</option>
                  <option value="people">9</option>
                  <option value="people">10</option>
                </select>
              </div>

              <button class="reservationBtn">Book now</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
