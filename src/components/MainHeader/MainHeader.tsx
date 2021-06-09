import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";

interface Props {
    
}
const MainHeader = (props: Props) => {
    return (
        <header className={classes.mainHeader}>
            <h1>Expensis App</h1>
            <Navigation />
        </header>
    )
}

export default MainHeader
