import React, { useState, forwardRef } from "react";

const ContactDE = forwardRef((props, ref) => {

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
    const [isChecked, setIsChecked] = useState(false);

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
        if (!isChecked) {
            validationErrors.check = 'Bitte bestätigen Sie die Zustimmung zur Datenverarbeitung.';
        }
        if (formData.name.trim() === '') {
            validationErrors.name = 'Bitte geben Sie Ihren Namen ein.';
        }
        if (!validateEmail(formData.email)) {
            validationErrors.email = 'Bitte geben Sie eine gültige Emailadresse ein.';
        }
        if (formData.message.trim() === '') {
            validationErrors.message = 'Bitte geben Sie eine Nachricht ein.';
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
                    setIsChecked(false);
                    setStatusMessage({ type: 'success', text: 'Vielen Dank für Ihre Nachricht!' });
                })
                .catch((error) => {
                    console.error('Fehler:', error);
                    setStatusMessage({ type: 'error', text: 'Fehler beim Versenden der Nachricht.' });
                });
        }
    };

    return (
        <section className="contact" ref={ref}>
            <p className="contact__header">
                WAS JETZT?
            </p>
            <div className="contact__content row">
                <div className="contact__left col-6">
                    <h2 className="contact__subheader">
                        Lassen Sie uns zusammen arbeiten.
                    </h2>
                    <p className="contact__text">
                        Wenn Sie über ein Projekt sprechen möchten, bei dem Sie Hilfe benötigen, schreiben Sie einfach eine Mail an <span className="text-contact-bold">contact@mg-webdev.com</span>. <br /><br /> Aktuell stehe ich für sämtliche Designprojekte, Dashboard-Entwicklungen und Gestaltungen von Landingpages zur Verfügung.
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
                        Name <span className="required">(erforderlich)</span>
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
                        E-Mail <span className="required">(erforderlich)</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-Mail"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        required
                    />

                    <label htmlFor="message">
                        Nachricht <span className="required">(erforderlich)</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Nachricht"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'error' : ''}
                        required
                    />

                    <label style={{marginBottom: "1rem"}} className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            required
                        />
                        <span>Ich stimme der Verarbeitung meiner Daten zu</span>
                    </label>

                    <button type="submit">Senden</button>
                </form>
            </div>
        </section>
    )
});

export default ContactDE;
