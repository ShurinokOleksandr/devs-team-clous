import { MainSection } from 'src/widgets/Header/ui/Header';
import { FormSection } from 'src/widgets/FormSection';
import Navbar from 'src/widgets/Navbar/Navbar';
import { Footer } from 'src/widgets/Footer';
import { Case } from 'src/widgets/Case';
import { Main } from 'src/widgets/Main';
import { Box } from '@chakra-ui/react';
import React from 'react';


function App() {
    return (
        <>
            <Navbar />
            <main>
                <MainSection />
                <Main />
                <Case />
                <FormSection />
            </main>
            <Footer />
        </>
    
    )
}

export default App
