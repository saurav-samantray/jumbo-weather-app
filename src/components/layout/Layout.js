import { Container } from "@mui/system";
import TopNav from "../topnav/TopNav";

export default function Layout({content}) {
    return(
        <>
        <TopNav />
        <Container sx={{'mt': 2}}>
            {content}
        </Container>
        </>
    )
}