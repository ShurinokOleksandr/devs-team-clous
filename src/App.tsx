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
        </Box>
    )
}

export default App
