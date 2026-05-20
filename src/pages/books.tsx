import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <h1>
        Los que estoy leyendo:
      </h1>
      <ul>Dune-Frank Herbert</ul>

      <h1>
        Libros que quiero leer proximamente:
      </h1>

      <ul>        Los cantos de Hyperion-Dan Simmons
      </ul>
      <ul>        Artemisa-Andy Weir
      </ul>
      <ul>
        Trilogia de los tres cuerpos- Liu Cix
      </ul>
      <ul>
        ¿Sueñan los androides con ovejas eléctricas? de Philip K. Dick
      </ul>
      <ul>
        Carl Sagan-Contacto
      </ul>
      <ul>
        Proyecto Hail Mary-Andy Weir
      </ul>
      <ul>
        Herederos del tiempo-Adrian Tchaikovsky
      </ul>
      <ul>
        Solaris de -Stanisław Lem
      </ul>
      <ul>
        La izquierda de la oscuridad de Ursula K. Le Guin
      </ul>
      <ul>
        El torno de la noche de Ursula K. Le Guin
      </ul>
      <ul>
        Los desposeídos de Ursula K. Le Guin
      </ul>

    </Content>
  </Main>
);

export default About;
