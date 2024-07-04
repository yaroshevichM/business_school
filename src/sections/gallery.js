import { jsx, Box, Container } from "theme-ui";
import gallery1 from "assets/images/gallery1.jpg";
import gallery2 from "assets/images/gallery2.jpg";
import gallery3 from "assets/images/gallery3.jpg";
import Carousel from "react-multi-carousel";
import Image from "components/image";

const Gallery = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Box as="section" id="reply" variant="section.usefulFeatures">
            <Container>
                <Box sx={styles.features}>
                    <Carousel responsive={responsive}>
                        <div>
                            <Image src={gallery1} className="video-banner" alt="video banner" styles={{ maxHeight: "20vh" }} />
                        </div>
                        <div>
                            <Image src={gallery2} className="video-banner" alt="video banner" styles={{ maxHeight: "20vh" }} />
                        </div>
                        <div>
                            <Image src={gallery3} className="video-banner" alt="video banner" styles={{ maxHeight: "20vh" }} />
                        </div>
                    </Carousel>
                </Box>
            </Container>
        </Box>
    );
};

export default Gallery;

const styles = {
    heading: {
        marginBottom: 80,
    },
    features: {
        gap: 60,
        display: ["flex"],
        justifyContent: ["center"],
        alignItems: ["center"],
    },
};
