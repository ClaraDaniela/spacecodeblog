import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>

      <h1>
        Los que recomiendo:
      </h1>
      <ul>Fundación-Isaac Asimov</ul>
      <ul>Yo, robot-Isaac Asimov</ul>
      <ul>Los robots del amanecer - Isaac Asimov</ul>
      <ul>El sol desnudo - Isaac Asimov</ul>
      <ul>Las cavernas de acero - Isaac Asimov</ul>
      <ul>El fin de la eternidad - Isaac Asimov</ul>
      <ul>Guía del autoestopista galáctico-Douglas Adams</ul>
      <ul>Un mundo feliz-Huxley</ul>
      <ul>1984 - George Orwell</ul>
      <ul>Rebelión en la granja - George Orwell</ul>
      <ul>La máquina del tiempo-H.G Wells</ul>
      <ul>Culquier cuento de Lovecraft porque lo amo</ul>
      <ul>Los libros de sangre - Clive Barker</ul>
      <ul>Nuestra parte de noche - Mariana Enriquez</ul>
      <ul>Dune-Frank Herbert</ul>

      <h1>
        Los que NO recomiendo:
      </h1>
      <ul>Rafaela-Mariana con toda la Furiasse</ul>
      <ul>El de las sombras del Gray (a menos que quieras leer porno)</ul>
      <ul>Seda-Alesandro Baricco</ul>


      <h1>
        Los que estoy leyendo:
      </h1>
      <ul>El cerebro - David Eagleman</ul>

      <h1>
        Los que ya me leí (2026):
      </h1>
      <ul>El misterrio de salem's lot-Stephen King</ul>
      <ul>Guía del autoestopista galáctico-Douglas Adams</ul>
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
