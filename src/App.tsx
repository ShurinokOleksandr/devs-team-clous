import { FormSection } from 'src/widgets/FormSection';
import { Footer } from 'src/widgets/Footer';
import { Header } from "src/widgets/Header";
import {Case} from "src/widgets/Case";
import {Main} from "src/widgets/Main";
import {Box} from "@chakra-ui/react";


function App() {
     return (
        <Box>
            <Header />
            <Main />
            <Case />
            <FormSection />
            <Footer />
        </Box>
    )
}

export default App
