/** @jsx jsx */
import { jsx, Box, Container, Button } from "theme-ui";
import SectionHeading from "components/section-heading";
import { LearnMore } from "components/link";
import Image from "components/image";

import banner from "assets/images/book.svg";
import { useState } from 'react';
import Modal, { CloseButton } from 'components/modal/modal';
import ResponsiveIframe from 'components/responsive-iframe';

const Widgets = () => {

  const [isOpen, setIsOpen] = useState(false);

    return (
        <Box as="section" id="widgets" variant="section.widgets">
            <Modal isOpen={isOpen}>
            <CloseButton
              onClick={() => setIsOpen(false)}
              size="24px"
              color="#fff"
            />
            <ResponsiveIframe
              src="https://calendly.com/smilegod2000/30min?primary_color=0c8e81"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </Modal>
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.leftContent}>
                        <Image src={banner} alt="widgets" />
                    </Box>
                    <Box sx={styles.rightContent}>
                        <SectionHeading
                            sx={styles.heading}
                            title="Безкоштовний перший урок!"
                            description="Приєднуйтесь до нас на безкоштовному першому уроці, щоб відчути справжній досвід навчання в нашій школі. Дізнайтеся більше про наші програми, зустріньтеся з нашими викладачами та отримайте відповіді на всі свої питання."
                        />
                        <Box sx={styles.explore}>
                            <Button onClick={() => window.open("https://calendly.com/smilegod2000/30min", "_blank")} variant="primary" sx={styles.button}>
                                Записатись
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Widgets;

const styles = {
    contentWrapper: {
        gap: [40, 40, 40, 40, 40, 100],
        display: ["block", "block", "grid"],
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
    },
    heading: {
        textAlign: "left",
        mb: ["20px"],
        mt: ["30px", "30px", "30px", 0, "-70px"],
        h2: {
            fontSize: ["24px", "24px", "24px", "28px", "32px", "40px"],
            lineHeight: [1.45, 1.5],
            letterSpacing: "-1.5px",
        },
    },
    listItem: {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 2.81,
        display: "flex",
        alignItems: "center",
        img: {
            mr: "10px",
        },
    },
    explore: {
        mt: ["20px", "20px", "20px", "20px", "40px"],
    },
};
