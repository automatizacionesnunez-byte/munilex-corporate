import React from 'react';
import { LegalDocumentPage } from './LegalDocumentPage';

export const PrivacyPage: React.FC = () => {
  return (
    <LegalDocumentPage
      badge="Política de privacidad"
      title="Política de privacidad"
      intro="Aquí explicamos qué datos tratamos, con qué finalidad, durante cuánto tiempo y qué derechos puedes ejercer como interesado."
      backLabel="Volver a la web"
      sections={[
        {
          title: 'Responsable del tratamiento',
          paragraphs: [
            'El responsable del tratamiento es Munilex Academy, S.L., con CIF B88655980 y correo de contacto administracion@munilex.es.',
            'Cuando nos escribes o solicitas una demo, tratamos tus datos para gestionar la relación precontractual, responder a tu solicitud y, cuando corresponda, mantener la comunicación comercial asociada.',
          ],
        },
        {
          title: 'Datos que tratamos',
          paragraphs: [
            'Podemos tratar datos identificativos y de contacto, datos profesionales, información de la organización que representas, mensajes que nos envíes y metadatos técnicos básicos necesarios para el funcionamiento y la seguridad del sitio.',
            'No pedimos más datos de los necesarios para atender la solicitud y, en la medida de lo posible, evitamos formularios excesivos o solicitudes innecesarias.',
          ],
        },
        {
          title: 'Finalidades y bases de legitimación',
          paragraphs: [
            'Tratamos los datos para atender consultas, preparar demostraciones, gestionar presupuestos, mantener comunicaciones relacionadas con el interés expresado y, si lo autorizas, enviarte información comercial posterior.',
            'La base de legitimación puede ser la ejecución de medidas precontractuales cuando nos solicitas información, el consentimiento cuando te suscribes a comunicaciones y el interés legítimo o la obligación legal cuando resulte aplicable en materias de seguridad o prevención de abusos.',
          ],
        },
        {
          title: 'Conservación y cesiones',
          paragraphs: [
            'Conservamos los datos durante el tiempo necesario para atender la solicitud, mantener la relación derivada y cumplir las obligaciones legales que correspondan. Posteriormente se conservarán bloqueados cuando sea exigible.',
            'No cedemos tus datos a terceros salvo obligación legal, necesidad técnica de prestación del servicio o intervención de proveedores que actúen como encargados del tratamiento bajo contrato y con garantías adecuadas.',
          ],
        },
        {
          title: 'Derechos de las personas',
          paragraphs: [
            'Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, escribiendo a administracion@munilex.es.',
            'Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos.',
          ],
        },
      ]}
    />
  );
};

export default PrivacyPage;

