import React from "react";

export default function LegalNotice() {
    return (
        <section className="impressum" style={{ wordBreak: "break-word", hyphens: "auto" }}>
            <div className="impressum__content">
                <h1 className="impressum__header">
                    Impressum
                </h1>
                <p className="impressum__text">
                    Marc Griese  <br />
                    mg-webdev <br />
                    Kirchweg 27 <br />
                    77743 Neuried <br />
                </p>

                <div className="impressum_section">
                    <h2 className="impressum__header-sub">
                        Kontakt
                    </h2>
                    <p className="impressum__text">
                        Telefon: +49 176 57903216 <br />
                        E-Mail: contact@mg-webdev.com <br />
                        Web: <a href="https://www.mg-webdev.com" style={{ color: 'white', textDecoration: 'underline' }}>www.mg-webdev.com</a><br /> <br />
                    </p>
                </div>

                <div className="impressum_section">
                    <h2 className="impressum__header-sub">
                        Umsatzsteuer-ID
                    </h2>
                    <p className="impressum__text">
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: <br />
                        k.A.<br /> <br />
                    </p>
                </div>

                <div className="impressum_section">
                    <h2 className="impressum__header-sub">
                        Gewerbeanmeldung
                    </h2>
                    <p className="impressum__text">
                        Die Gewerbeerlaubnis nach § 34c GewO wurde am 01.07.2025 von folgender Stelle erteilt: Gemeinde
                        Neuried.<br /> <br />
                    </p>
                </div>

                <div className="impressum_section">
                    <h2 className="impressum__header-sub">
                        Angaben zur Berufshaftpflichtversicherung
                    </h2>
                    <p className="impressum__text">
                        Name und Sitz der Versicherung: <br />
                        AXA, Offenburg <br /> <br />
                        Geltungsraum der Versicherung: <br />
                        Deutschland<br /> <br />
                    </p>
                </div>

                <div className="impressum_section">
                    <h2 className="impressum__header-sub">
                        Redaktionell verantwortlich
                    </h2>
                    <p className="impressum__text">
                        Marc Griese<br /> <br />
                    </p>
                </div>

                <div className="impressum_section">
                    <h2 className="impressum__header-sub">
                        EU-Streitschlichtung
                    </h2>
                    <p className="impressum__text">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <br />
                        https://ec.europa.eu/consumers/odr/.<br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.<br /> <br />
                    </p>
                </div>

                <div className="impressum_section">
                    <h2 className="impressum__header-sub">
                        Verbraucherstreitbeilegung/Universalschlichtungsstelle
                    </h2>
                    <p className="impressum__text">
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.<br /> <br />
                    </p>
                </div>

                <div className="impressum_section">
                    <h2 className="impressum__header-sub">
                        Zentrale Kontaktstelle nach dem Digital Services Act - DSA
                        (Verordnung (EU) 2022/265)
                    </h2>
                    <p className="impressum__text">
                        Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen Sie wie folgt: <br /> <br />
                        E-Mail: contact@mg-webdev.com <br />
                        Telefon: +49 176 57903216 <br /> <br />
                        Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch.<br /> <br />
                    </p>
                </div>
            </div>
        </section>
    )
}