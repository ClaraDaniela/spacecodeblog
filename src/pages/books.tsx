import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

type Book = {
  title: string;
  author: string;
};

type Section = {
  id: string;
  label: string;
  icon: string;
  color: string;
  dot: string;
  books: Book[];
};

const sections: Section[] = [
  {
    id: 'recommended',
    label: 'Los que recomiendo',
    icon: '👍',
    color: '#1D9E75',
    dot: '#1D9E75',
    books: [
      { title: 'Fundación', author: 'Isaac Asimov' },
      { title: 'Yo, robot', author: 'Isaac Asimov' },
      { title: 'Los robots del amanecer', author: 'Isaac Asimov' },
      { title: 'El sol desnudo', author: 'Isaac Asimov' },
      { title: 'Las cavernas de acero', author: 'Isaac Asimov' },
      { title: 'El fin de la eternidad', author: 'Isaac Asimov' },
      { title: 'Guía del autoestopista galáctico', author: 'Douglas Adams' },
      { title: 'Un mundo feliz', author: 'Aldous Huxley' },
      { title: '1984', author: 'George Orwell' },
      { title: 'Rebelión en la granja', author: 'George Orwell' },
      { title: 'La máquina del tiempo', author: 'H.G. Wells' },
      { title: 'Cualquier cuento de ', author: 'Lovecraft ♥' },
      { title: 'Los libros de sangre', author: 'Clive Barker' },
      { title: 'Nuestra parte de noche', author: 'Mariana Enriquez' },
      { title: 'Dune', author: 'Frank Herbert' },
    ],
  },
  {
    id: 'not-recommended',
    label: 'Los que NO recomiendo',
    icon: '👎',
    color: '#E24B4A',
    dot: '#E24B4A',
    books: [
      { title: 'Rafaela', author: 'Mariana Furiasse' },
      { title: 'Cincuenta sombras de Grey', author: 'E.L. James (a menos que quieras leer porno)' },
      { title: 'Seda', author: 'Alessandro Baricco' },
    ],
  },
  {
    id: 'reading',
    label: 'Leyendo ahora',
    icon: '📖',
    color: '#BA7517',
    dot: '#BA7517',
    books: [
      { title: 'El cerebro', author: 'David Eagleman' },
    ],
  },
  {
    id: 'read-2026',
    label: 'Ya leídos (2026)',
    icon: '✅',
    color: '#378ADD',
    dot: '#378ADD',
    books: [
      { title: "El misterio de Salem's Lot", author: 'Stephen King' },
      { title: 'Guía del autoestopista galáctico', author: 'Douglas Adams' },
      { title: 'Dune', author: 'Frank Herbert' },
    ],
  },
  {
    id: 'want-to-read',
    label: 'Próximamente',
    icon: '🔖',
    color: '#7F77DD',
    dot: '#7F77DD',
    books: [
      { title: 'Los cantos de Hyperion', author: 'Dan Simmons' },
      { title: 'Artemisa', author: 'Andy Weir' },
      { title: 'Trilogía de los tres cuerpos', author: 'Liu Cixin' },
      { title: '¿Sueñan los androides con ovejas eléctricas?', author: 'Philip K. Dick' },
      { title: 'Contacto', author: 'Carl Sagan' },
      { title: 'Proyecto Hail Mary', author: 'Andy Weir' },
      { title: 'Herederos del tiempo', author: 'Adrian Tchaikovsky' },
      { title: 'Solaris', author: 'Stanisław Lem' },
      { title: 'La mano izquierda de la oscuridad', author: 'Ursula K. Le Guin' },
      { title: 'El torno de la noche', author: 'Ursula K. Le Guin' },
      { title: 'Los desposeídos', author: 'Ursula K. Le Guin' },
    ],
  },
];

const BookSection = ({ section }: { section: Section }) => (
  <div className="mb-10">
    <div
      className="flex items-center gap-2 mb-3 pb-2"
      style={{ borderBottom: '0.5px solid #e5e5e5' }}
    >
      <span>{section.icon}</span>
      <h2
        className="text-xs font-medium uppercase tracking-widest m-0"
        style={{ color: section.color }}
      >
        {section.label}
      </h2>
    </div>
    <ul className="list-none p-0 m-0 flex flex-col gap-1">
      {section.books.map((book) => (
        <li
          key={`${book.title}-${book.author}`}
          className="flex items-baseline gap-3 px-2 py-1.5 rounded-md hover:bg-gray-50 transition-colors"
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
            style={{ backgroundColor: section.dot }}
          />
          <span className="text-sm text-gray-800 dark:text-gray-100">{book.title}</span>
          <span className="text-xs text-gray-400 whitespace-nowrap">{book.author}</span>
        </li>
      ))}
    </ul>
  </div>
);

const About = () => (
  <Main meta={<Meta title="Libros" description="Mis recomendaciones de lectura" />}>
    <Content>
      <h1 className="text-2xl font-medium mb-1">Libros</h1>
      <p className="text-sm text-gray-500 mb-10">
        Lecturas de ciencia ficción, horror y más
      </p>

      {sections.map((section) => (
        <BookSection key={section.id} section={section} />
      ))}
    </Content>
  </Main>
);

export default About;