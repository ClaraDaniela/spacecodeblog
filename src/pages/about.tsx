import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>
        Como diría Isaac Asimov, en el principio todo fue curiosidad.
        Así como la serpiente —que tuvo, quizás, el trabajo más sencillo del mundo— tentó a Eva con sus palabras, intentaré hacer lo mismo con este blog (ojala que si y sino al menos me estoy divirtiendo).

        Aunque, en esencia, no es más que una colección de cosas que me apasionan y que decidí reunir en un mismo lugar. Porque, al fin y al cabo, sin la programación, el ser humano difícilmente habría llegado al espacio.

        Digo que la tarea de la serpiente fue sencilla porque, en realidad, podría haberse ahorrado sus palabras: la curiosidad de Eva, tarde o temprano, la habría llevado al mismo destino.
      </p>
      <p>
        Les dejo un pasaje de Walt Withman:
        "Mientras escuchaba al docto astrónomo,/
        mientras las demostraciones y los números eran alineados en columnas ante mí,/
        sin razón aparente me sentí fatigado y mareado,/
        hasta que me levanté, salí sigilosamente y comencé a vagar/
        por el místico y húmedo aire nocturno, y, de vez en cuando, en absoluto silencio, levantaba la vista hacia las estrellas"
      </p>
    </Content>
  </Main>
);

export default About;
