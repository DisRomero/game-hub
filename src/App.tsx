import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import UsersGrid from "./components/UserGrid";
import BankList from "./components/BankList";


function App() {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`, //1024px //bg="gold"
            }}
        >
            <GridItem area="nav">
                <NavBar />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" > 
                    <BankList/>
                </GridItem>
            </Show>
            <GridItem area="main">
                <UsersGrid/>
            </GridItem>
        </Grid>
    );
}

export default App;
