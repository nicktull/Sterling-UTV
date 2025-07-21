export default function Contact() {
  return (
    <section>
      <h2>Schedule your repair</h2>
      <p>
        Schedule an appointment to upgrade or repair your SXS at our shop located at:
        <br />
        7826 Rendon Bloodworth Rd. Mansfield TX 76063
      </p>
      <p>
        Call or text <a href="tel:8178197598">817-819-7598</a>
      </p>
      <p>(Repair services are by appointment only)</p>
      <button type="button" onClick={() => (window.location.href = 'tel:8178197598')}>
        Schedule Now
      </button>
    </section>
  );
}
