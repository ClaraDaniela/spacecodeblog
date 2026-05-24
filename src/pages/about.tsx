import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>
        Un blog sobre cosas que me van interesando, nada más que eso.
      </p>
    </Content>
  </Main>
);

export default About;
