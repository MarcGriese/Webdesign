import React, { useState, forwardRef } from "react";

const Contact = forwardRef((props, ref) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [statusMessage, setStatusMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};
        if (formData.name.trim() === '') {
            validationErrors.name = 'Please enter your name.';
        }
        if (!validateEmail(formData.email)) {
            validationErrors.email = 'Please enter a valid email address.';
        }
        if (formData.message.trim() === '') {
            validationErrors.message = 'Please enter a message.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Senden der Daten an den API-Endpunkt
            fetch('https://api.mg-webdev.com/api/v1/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Erfolg:', data);
                    // Weitere Aktionen nach erfolgreicher Übermittlung
                    setFormData({ name: '', email: '', message: '' });  // Felder leeren
                    setStatusMessage({ type: 'success', text: 'Thank you for your message!' });
                })
                .catch((error) => {
                    console.error('Fehler:', error);
                    setStatusMessage({ type: 'error', text: 'Error while trying to send the message.' });
                });
        }
    };

    return (
        <section className="contact" ref={ref}>
            <p className="contact__header">
                WHAT'S NEXT?
            </p>
            <div className="contact__content row">
                <div className="contact__left col-6">
                    <h2 className="contact__subheader">
                        Let's work together.
                    </h2>
                    <p className="contact__text">
                        If you’d like to talk about a project you want help with, just drop me a message at <span className="text-contact-bold">contact@mg-webdev.com</span>. <br /><br /> I’m currently available for any design projects, dashboard designs or landing pages gigs.
                    </p>
                    {statusMessage && (
                        <div style={{ color: statusMessage.type === 'success' ? 'green' : 'red', marginTop: '5%', fontSize: '16px', lineHeight: '1.6' }}>
                            {statusMessage.text}
                            {Object.values(errors).map((error, index) => (
                                <div key={index} style={{ color: 'red' }}>
                                    {error}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <form onSubmit={handleSubmit} className="contact__form col-5">
                    <label htmlFor="name">
                        Name <span className="required">(required)</span>
                    </label>
                    <input
                        type="name"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                        required
                    />

                    <label htmlFor="email">
                        Email <span className="required">(required)</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        required
                    />

                    <label htmlFor="message">
                        Nachricht <span className="required">(required)</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'error' : ''}
                        required
                    />

                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
});

export default Contact;

