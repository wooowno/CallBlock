import Page from '@cmp/page';
import Arrea from './arrea';

// Страница со справкой
const About = ({navigation}) => {
  return (
    <Page title="Справка" nav={navigation} about={false} back={true}>
      <Arrea />
    </Page>
  );
};

export default About;
