import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PhotosGrid from "./components/PhotosGrid";
import AlbumList from "./components/AlbumList";


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
                    <AlbumList/>
                </GridItem>
            </Show>
            <GridItem area="main">
                <PhotosGrid/>
            </GridItem>
        </Grid>
    );
}

export default App;
