import { FormSection } from 'src/widgets/FormSection';
import { Footer } from 'src/widgets/Footer';
import { Header } from 'src/widgets/Header';
import { Case } from 'src/widgets/Case';
 import { Main } from 'src/widgets/Main';
import React from 'react';

import './global.css'

function App() {
    return (
        <>
            <Header />
            <main>
                <Main />
                <Case />
                <FormSection />
            </main>
            <Footer />
        </>
    
    )
}

export default App
