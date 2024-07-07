/** @jsx jsx */
import { jsx, Box, Button, Container, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import Feature from "components/cards/feature";
import { Link } from 'components/link';
import Image from "components/image";

import checkFilledCircle from "assets/images/icons/check-circle-filled.png";
import { Fragment } from "react";

const data = [
    {
        id: 1,
        color: "#28D1DC",
        value: "90%",
        title: "Випускників, які використовують знання у бізнесі.",
    },
    {
        id: 2,
        color: "#FF753A",
        value: "20+",
        title: "Партнерських компаній, які надають можливості для стажування.",
    },
    {
        id: 3,
        color: "#FA578E",
        value: "5",
        title: "Конференцій для професійного розвитку",
    },
    {
        id: 4,
        color: "#28DCB2",
        value: "100%",
        title: "Гарантія підтримки кожного студента у досягненні його цілей.",
    },
];

const Features = () => {
    return (
        <Box as="section" id="feature" variant="section.features">
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.leftContent}>
                        {data?.map((item) => (
                            <Feature key={item?.id} feature={item} />
                        ))}
                    </Box>
                    <Box sx={styles.rightContent}>
                        <SectionHeading
                            sx={styles.heading}
                            title={<Fragment>Business Step</Fragment>}
                            description="Наша школа для підлітків є центром розвитку майбутніх лідерів у сфері бізнесу. Ми пропонуємо:"
                        />
                        <Text sx={styles.listItem} as="p">
                            <Image src={checkFilledCircle} alt="check icon" />
                            Унікальні навчальні програми
                        </Text>
                        <Text sx={styles.listItem} as="p">
                            <Image src={checkFilledCircle} alt="check icon" />
                            Акцентування застосування знаннь на практиці
                        </Text>
                        <Text sx={styles.listItem} as="p">
                            <Image src={checkFilledCircle} alt="check icon" />
                            Конференції від підприємців
                        </Text>

                        <Button variant="primary" sx={styles.button}>
                            <Link path="#book" label="Почати зараз" />
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Features;

const styles = {
    contentWrapper: {
        gap: [30, 30, 30, 30, 40, 60, 70, 120],
        display: ["flex", "flex", "grid"],
        flexDirection: ["column-reverse", "column-reverse", "unset"],
        gridTemplateColumns: ["1.2fr 0.8fr", "1.2fr 0.8fr", "1.2fr 0.8fr", "1.1fr 0.9fr", "1.1fr 0.9fr", "1.1fr 0.9fr", "1.2fr 0.8fr"],
        alignItems: "center",
    },
    button: {
      marginTop: ["30px"]
    },
    leftContent: {
        gap: [20, 20, 20, 20, 30, 45],
        display: ["grid", "grid"],
        gridTemplateColumns: "repeat(2, 1fr)",
        alignItems: "flex-start",
        "> div": {
            ":first-of-type": {
                mt: ["65px"],
            },
            ":last-of-type": {
                mt: ["-65px"],
            },
        },
    },
    rightContent: {
        // ml: ['120px'],
    },
    heading: {
        textAlign: "left",
        mb: ["20px"],
        mt: [0, 0, "-70px"],
        h2: {
            fontSize: ["28px", "28px", "28px", "28px", "36px", "40px"],
            lineHeight: [1.25, 1.5],
            letterSpacing: "-1.5px",
            br: {
                display: ["none", "none", "none", "block"],
            },
        },
        p: {
            mt: ["15px", "10px"],
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
