import React from 'react';
import { LegalDocumentPage } from './LegalDocumentPage';

export const CookiesPage: React.FC = () => {
  return (
    <LegalDocumentPage
      badge="Política de cookies"
      title="Política de cookies"
      intro="Usamos cookies técnicas para que la web funcione correctamente. Si en el futuro activamos cookies analíticas o de terceros, las presentaremos con un panel claro y con las mismas opciones de aceptación y rechazo."
      backLabel="Volver a la web"
      sections={[
        {
          title: 'Qué son las cookies',
          paragraphs: [
            'Las cookies son pequeños archivos que permiten recordar información sobre la navegación. En algunos casos pueden implicar tratamiento de datos personales, por lo que su uso debe explicarse de forma clara y transparente.',
          ],
        },
        {
          title: 'Cookies que usamos',
          paragraphs: [
            'En esta versión del sitio se utilizan cookies técnicas estrictamente necesarias para la navegación, la seguridad y el correcto funcionamiento de formularios, rutas y preferencias básicas.',
            'No utilizamos cookies de publicidad ni de perfilado salvo que se informen y se activen de forma expresa en el futuro.',
          ],
        },
        {
          title: 'Consentimiento y configuración',
          paragraphs: [
            'Si incorporamos cookies no esenciales, el usuario verá opciones de aceptar, rechazar y configurar con la misma visibilidad. El consentimiento deberá prestarse mediante una acción clara y afirmativa, no por inacción.',
            'El usuario podrá retirar o modificar su consentimiento en cualquier momento desde el panel de configuración de cookies.',
          ],
        },
        {
          title: 'Plazo y actualización',
          paragraphs: [
            'Como buena práctica, la selección de cookies no esenciales no debería mantenerse indefinidamente sin revisión. Revisaremos esta política cuando se incorporen nuevas tecnologías, nuevos proveedores o cambios normativos.',
            'Mantendremos este documento actualizado para que refleje siempre el uso real de cookies en la web.',
          ],
        },
        {
          title: 'Más información',
          paragraphs: [
            'Si quieres más detalles sobre el tratamiento de datos asociados a cookies, consulta también la Política de Privacidad y el Aviso Legal del sitio.',
          ],
        },
      ]}
    />
  );
};

export default CookiesPage;

