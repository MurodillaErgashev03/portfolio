import './contacts.scss';

function Contacts() {
  return (
    <section id="contact__section" className="contact__section">
      <div className="container contact-container ">
        <h2 className="contact-title">Contact me</h2>
        <form className="contact-box">
          <input
            className="name__input"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="email__input"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="text__input"
            type="text"
            name="message"
            placeholder="Message"
          />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
