import React from 'react';
import { LegalDocumentPage } from './LegalDocumentPage';

export const LegalPage: React.FC = () => {
  return (
    <LegalDocumentPage
      badge="Aviso legal"
      title="Aviso legal"
      intro="Este documento regula la titularidad del sitio, las condiciones de uso, la propiedad intelectual y el alcance de responsabilidad de Munilex Corporate."
      sections={[
        {
          title: 'Titularidad del sitio',
          paragraphs: [
            'El sitio web Munilex Corporate es titularidad de Munilex Academy, S.L., con CIF B88655980 y domicilio social en Madrid, España. El canal de contacto corporativo es administracion@munilex.es.',
            'La web se dirige a academias de oposiciones que buscan soluciones de inteligencia artificial aplicadas a la enseñanza y a la gestión educativa.',
          ],
        },
        {
          title: 'Uso de la web',
          paragraphs: [
            'El acceso a la web tiene finalidad informativa y comercial. El usuario se compromete a hacer un uso diligente y lícito de los contenidos, evitando actuaciones que puedan dañar la imagen, los sistemas o los derechos de Munilex o de terceros.',
            'Munilex podrá actualizar, modificar o eliminar contenidos de la web en cualquier momento sin necesidad de aviso previo cuando existan motivos operativos, comerciales o legales.',
          ],
        },
        {
          title: 'Propiedad intelectual e industrial',
          paragraphs: [
            'Los textos, diseños, logotipos, interfaces, imágenes y materiales gráficos de la web están protegidos por la normativa de propiedad intelectual e industrial. Su reproducción, distribución o transformación no autorizada queda prohibida.',
            'Las marcas y signos distintivos de terceros que pudieran mostrarse pertenecen a sus respectivos titulares y se usan únicamente a efectos identificativos o descriptivos.',
          ],
        },
        {
          title: 'Responsabilidad y enlaces',
          paragraphs: [
            'Munilex no responde de los daños derivados de un uso indebido del sitio ni de incidencias provocadas por factores técnicos ajenos al control razonable de la empresa.',
            'Si la web incluye enlaces a páginas externas, dichos contenidos serán responsabilidad de sus respectivos titulares. Munilex no asume control editorial sobre esos sitios ni sobre sus políticas.',
          ],
        },
        {
          title: 'Ley aplicable',
          paragraphs: [
            'Este aviso legal se interpreta conforme a la legislación española. Para cualquier controversia, las partes se someterán a los juzgados y tribunales competentes de acuerdo con la normativa aplicable.',
          ],
        },
      ]}
    />
  );
};

export default LegalPage;
