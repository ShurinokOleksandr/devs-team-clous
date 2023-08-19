import { FormSection } from 'src/widgets/FormSection';
import { Header } from 'src/widgets/Header';
import { Footer } from 'src/widgets/Footer';
import { Main } from 'src/widgets/Main';
import { Case } from 'src/widgets/Case';
import React from 'react';


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
