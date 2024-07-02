/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import bulb from 'assets/images/icons/bulb.png';
import dart from 'assets/images/icons/dart.png';
import rocket from 'assets/images/icons/rocket.png';
import trophy from 'assets/images/icons/trophy.png';

const data = [
  {
    id: 1,
    icon: bulb,
    title: 'Бізнес-знання',
    description: 'Отримай знання з основ підприємництва і працюй над реальними проектами.',
  },
  {
    id: 2,
    icon: dart,
    title: 'Лідерські Навички',
    description: 'Розвивай лідерські якості та вміння працювати в команді.',
  },
  {
    id: 3,
    icon: rocket,
    title: 'Особистий Розвиток',
    description: 'Розвивай підприємницьке мислення та впевненість у собі.',
  },
  {
    id: 4,
    icon: trophy,
    title: 'Менторство',
    description: `Отримуй підтримку від досвідчених наставників і кар'єрні поради.`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="ultimate-feature" variant="section.ultimateFeature">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Від навчання до успіху за один крок!"
          description="Наша бізнес-школа пропонує унікальне поєднання теоретичних знань та практичного досвіду."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
    ],
  },
};
