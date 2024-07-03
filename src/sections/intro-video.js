/** @jsx jsx */
import { useState } from 'react';
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import { LearnMore } from 'components/link';
import videoBanner from 'assets/images/lesson.png';
import Play from 'assets/images/icons/play.png';
import Modal, { CloseButton } from 'components/modal/modal';
import ResponsiveIframe from 'components/responsive-iframe';

const IntroVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box as="section" id="video" sx={styles.section} variant="section.introVideo">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Погляньте на нашу школу у дії"
          description="Дивіться відео, щоб дізнатися більше про наші унікальні програми та переваги навчання в нашій школі. Переконайтеся, чому наші студенти обирають нас для свого професійного розвитку у сфері бізнесу."
        />
        {/* <Box sx={styles.explore}>
          <LearnMore path="#!" label="Explore More" />
        </Box> */}
        <Box sx={styles.videoWrapper}>
          <Modal isOpen={isOpen}>
            <CloseButton
              onClick={() => setIsOpen(false)}
              size="24px"
              color="#fff"
            />
            <ResponsiveIframe
              src="https://www.youtube.com/embed/Y1ZnNY3I-2E?si=3aKREfJOdOiYzkuq"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </Modal>

          <Image
            src={videoBanner}
            className="video-banner"
            alt="video banner"
            styles={{maxHeight: "20vh"}}
          />
          <Button
            variant="text"
            sx={styles.playPause}
            onClick={() => setIsOpen(true)}
          >
            <Image src={Play} alt="play" /> Дивитись відео
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default IntroVideo;

const styles = {
  heading: {
    maxWidth: '620px',
    mb: [5],
    h2: {
      letterSpacing: 'heading',
    },
  },
  explore: {
    textAlign: ['center'],
    mb: [6],
  },
  videoWrapper: {
    textAlign: 'center',
    position: 'relative',
    '.video-banner': {
      maxWidth: ['100%', '100%', '100%', '100%', '100%', '80%', '100%'],
    },
  },
  playPause: {
    color: 'white',
    fontWeight: 700,
    position: 'absolute',
    padding: '0px',
    bottom: [40, 20, 20, 20, 20],
    left: '50%',
    transform: 'translateX(-50%)',
    ':focus': {
      outline: 0,
    },
    img: {
      mr: '16px',
    },
  },
};
