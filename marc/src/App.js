import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeDE from "./pages/homeDE/index"
import HomeEN from "./pages/home/index";
import "./assets/css/App.scss";
import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css"; // Specify weight
import "@fontsource/ubuntu/latin-400.css"; // Specify weight and style
import ScrollToTop from './components/ScrollToTop';
import Projects from './pages/projects';
import AGBDE from './pages/agbs';
import DatenschutzDE from './pages/datenschutzerklärung';
import ImpressumDE from './pages/impressum';
import TermsAndConditions from './pages/termsAndConditions';
import LegalNotice from './pages/legalNotice';
import PrivacyPolicy from './pages/privacyPolicy';

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Navigate to='de' replace />} />
                <Route path='de' element={<HomeDE />} />
                <Route path='en' element={<HomeEN />} />

                <Route path='*' element={<Navigate to='de' replace />} />

                <Route path='agb' element={<AGBDE />} />
                <Route path='datenschutz' element={<DatenschutzDE />} />
                <Route path='impressum' element={<ImpressumDE />} />

                <Route path='termsandconditions' element={<TermsAndConditions />} />
                <Route path='privacypolicy' element={<PrivacyPolicy />} />
                <Route path='legalnotice' element={<LegalNotice />} />



                <Route path='test' element={<Projects />} />
            </Routes>
        </>
    )
}

export default App;