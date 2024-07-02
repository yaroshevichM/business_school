/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import avatar from 'assets/images/avatar.png';


const data = [
  {
    id: 1,
    icon: avatar,
    title: 'Марія К.',
    description: `Школа надала мені неоціненний досвід у сфері бізнесу. Програма була насиченою практикою і корисними знаннями. Я з легкістю знайшла стажування у місцевій компанії, завдяки якому змогла поглибити свої знання та вміння.`,
  },
  {
    id: 2,
    icon: avatar,
    title: 'Олександр Г.',
    description: `Я завжди мріяв про кар'єру в бізнесі, і наша школа стала тим місцем, де мої мрії стали реальністю. Завдяки викладачам і практичним проектам я зрозумів, як працює справжній бізнес і як досягати успіху в цій галузі.`,
  },
  {
    id: 3,
    icon: avatar,
    title: 'Ірина П.',
    description: `Школа не лише дала мені потужний академічний фундамент, але й надихнула на моє особисте зростання. Вона підтримала мою участь у міжнародних конференціях та змогла побудувати мережу корисних контактів, що стала моєю великою перевагою у кар'єрному розвитку.`,
  },
  {
    id: 4,
    icon: avatar,
    title: 'Василь Л.',
    description: `Проходження програми в бізнес-школі стало для мене відкриттям. Я отримав не лише академічні знання, але й практичний досвід, який дозволив зрозуміти суть справжнього бізнесу. Школа підготувала мене до майбутньої кар'єри і відкрила двері до нових можливостей.`,
  },
];

const UsefulFeatures = () => {
  return (
    <Box as="section" id="reply" variant="section.usefulFeatures">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Враження наших випускників"
          description="Дивіться, як наші випускники оцінюють нашу програму навчання і підготовку."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature
              key={item.id}
              data={item}
              className="feature-item"
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UsefulFeatures;

const styles = {
  heading: {
    marginBottom: 80,
  },
  features: {
    gap: 60,
    display: ['grid'],
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)'],
    '.feature-item': {
      display: ['block', 'block', 'block', 'block', 'flex'],
      px: ['15px', 0],
      maxWidth: ['none'],
      figure: {
        minWidth: '90px',
        m: [
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 26px 0 0',
        ],
      },
    },
  },
};
