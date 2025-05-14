// src/data/temasContabilidad.js
const temasContabilidad = [
    {
      id: 1,
      titulo: 'Cuentas Contables',
      descripcion: 'Fundamentos de las cuentas y su clasificación',
      icono: '📊',
      destacado: true,
      contenido: `<h2>Cuentas Contables</h2>
        <h3>Definición</h3>
        <p>Las cuentas contables son registros donde se anotan, de forma clara, ordenada y comprensible, los aumentos y disminuciones que sufre un valor o concepto del activo, pasivo o capital, como consecuencia de las operaciones realizadas por la entidad.</p>
        <blockquote>"La cuenta es el instrumento que permite llevar a cabo la clasificación de los elementos que intervienen en una transacción financiera en atención a su naturaleza." — Elías Lara Flores</blockquote>
        
        <h3>Estructura de una cuenta</h3>
        <p>La representación gráfica conocida como "cuenta T" tiene dos lados: el lado izquierdo (debe) registra los cargos y el lado derecho (haber) registra los abonos.</p>
        
        <h3>Clasificación de las cuentas</h3>
        <ul>
          <li><strong>Activo:</strong> Naturaleza deudora (aumenta con cargos, disminuye con abonos)</li>
          <li><strong>Pasivo:</strong> Naturaleza acreedora (aumenta con abonos, disminuye con cargos)</li>
          <li><strong>Capital:</strong> Naturaleza acreedora (aumenta con abonos, disminuye con cargos)</li>
          <li><strong>Ingresos:</strong> Naturaleza acreedora (aumenta con abonos, disminuye con cargos)</li>
          <li><strong>Gastos:</strong> Naturaleza deudora (aumenta con cargos, disminuye con abonos)</li>
        </ul>
        
        <h3>Reglas de cargo y abono</h3>
        <p><strong>Para Activos:</strong> Aumentan con un cargo (debe), disminuyen con un abono (haber)</p>
        <p><strong>Para Pasivos y Capital:</strong> Aumentan con un abono (haber), disminuyen con un cargo (debe)</p>
        
        <h3>Ejemplo práctico en la vida real</h3>
        <p>Transacción: Un negocio compra mercancía por $10,000 pagando el 50% en efectivo y el resto a crédito.</p>
        <p>Registro contable:</p>
        <ul>
          <li>Mercancías (Inventario): Cargo $10,000</li>
          <li>Caja/Bancos: Abono $5,000</li>
          <li>Proveedores: Abono $5,000</li>
        </ul>
        <p>Explicación: Se incrementa el inventario (activo) con un cargo, se disminuye el efectivo (activo) con un abono, y se incrementa la cuenta de proveedores (pasivo) con un abono.</p>`,
      subtemas: [
        { id: 1, titulo: 'Definición y estructura' },
        { id: 2, titulo: 'Clasificación' },
        { id: 3, titulo: 'Reglas de cargo y abono' },
        { id: 4, titulo: 'Catálogo de cuentas' }
      ]
    },
    {
      id: 2,
      titulo: 'Libro Diario',
      descripcion: 'Registro cronológico de transacciones',
      icono: '📓',
      destacado: false,
      contenido: `<h2>Libro Diario</h2>
        <h3>Definición</h3>
        <p>El libro diario es un documento contable donde se registran, día a día y en orden cronológico, todas las operaciones resultantes de los hechos económicos ocurridos en un período determinado. La anotación de un hecho económico en el libro diario se denomina "asiento".</p>
        <blockquote>"El diario general es un libro o registro que contiene todas las operaciones que realiza una empresa, en orden cronológico." — Elías Lara Flores</blockquote>
        
        <h3>Estructura del Libro Diario</h3>
        <p>Un libro diario típicamente contiene las siguientes columnas:</p>
        <ul>
          <li><strong>Fecha:</strong> La fecha en que ocurrió la transacción</li>
          <li><strong>Descripción:</strong> Una breve explicación de la transacción</li>
          <li><strong>Referencia:</strong> Número de referencia o folio</li>
          <li><strong>Debe:</strong> Cargos a las cuentas</li>
          <li><strong>Haber:</strong> Abonos a las cuentas</li>
        </ul>
        
        <h3>Tipos de Asientos</h3>
        <p><strong>Asientos simples:</strong> Involucran solo dos cuentas (una que se carga y otra que se abona)</p>
        <p><strong>Asientos compuestos:</strong> Involucran más de dos cuentas</p>
        
        <h3>Ejemplo práctico</h3>
        <p>Registro de la compra de una computadora por $15,000, pagando $5,000 en efectivo y el resto a crédito:</p>
        <p>Fecha: 12/05/2025</p>
        <p>Descripción: Compra de equipo de cómputo</p>
        <ul>
          <li>Equipo de cómputo (Debe): $15,000</li>
          <li>Caja (Haber): $5,000</li>
          <li>Proveedores (Haber): $10,000</li>
        </ul>`,
      subtemas: [
        { id: 1, titulo: 'Registro de operaciones' },
        { id: 2, titulo: 'Asientos contables' }
      ]
    },
    {
      id: 3,
      titulo: 'Estados Financieros',
      descripcion: 'Informes que reflejan la situación financiera',
      icono: '📝',
      destacado: false,
      contenido: `<h2>Estados Financieros</h2>
        <h3>Definición</h3>
        <p>Los estados financieros son informes que utilizan las instituciones para dar a conocer la situación económica y financiera y los cambios que experimenta la misma a una fecha o periodo determinado. Esta información resulta útil para la administración, gestores, reguladores y otros tipos de interesados como los accionistas, acreedores o propietarios.</p>
        
        <h3>Principales Estados Financieros</h3>
        <ul>
          <li><strong>Balance General:</strong> Muestra la situación financiera de una entidad en un momento determinado</li>
          <li><strong>Estado de Resultados:</strong> Muestra los ingresos, costos y gastos, así como la utilidad o pérdida resultante en un periodo determinado</li>
          <li><strong>Estado de Cambios en el Capital Contable:</strong> Muestra los cambios en la inversión de los propietarios durante un periodo</li>
          <li><strong>Estado de Flujos de Efectivo:</strong> Muestra las entradas y salidas de efectivo en un periodo determinado</li>
        </ul>
        
        <h3>Balance General</h3>
        <p>El balance general se estructura en tres categorías principales:</p>
        <ul>
          <li><strong>Activos:</strong> Recursos controlados por la entidad</li>
          <li><strong>Pasivos:</strong> Obligaciones presentes de la entidad</li>
          <li><strong>Capital Contable:</strong> Aportaciones de los dueños y resultados acumulados</li>
        </ul>
        
        <h3>Ejemplo de Balance General</h3>
        <p>Comercial XYZ, S.A. de C.V.<br>Balance General al 31 de diciembre de 2025</p>
        <p><strong>ACTIVO</strong></p>
        <ul>
          <li>Activo Circulante: $120,000</li>
          <li>Activo Fijo: $250,000</li>
          <li>Activo Diferido: $30,000</li>
          <li>TOTAL ACTIVO: $400,000</li>
        </ul>
        <p><strong>PASIVO</strong></p>
        <ul>
          <li>Pasivo Circulante: $80,000</li>
          <li>Pasivo a Largo Plazo: $120,000</li>
          <li>TOTAL PASIVO: $200,000</li>
        </ul>
        <p><strong>CAPITAL CONTABLE</strong></p>
        <ul>
          <li>Capital Social: $150,000</li>
          <li>Utilidades Retenidas: $50,000</li>
          <li>TOTAL CAPITAL: $200,000</li>
        </ul>
        <p>TOTAL PASIVO + CAPITAL: $400,000</p>`,
      subtemas: [
        { id: 1, titulo: 'Balance general' },
        { id: 2, titulo: 'Estado de resultados' }
      ]
    },
    {
      id: 4,
      titulo: 'Ciclo Contable',
      descripcion: 'Proceso completo de la contabilidad',
      icono: '🔄',
      destacado: false,
      contenido: `<h2>Ciclo Contable</h2>
        <h3>Definición</h3>
        <p>El ciclo contable es el conjunto de fases o etapas de la contabilidad que se repiten en cada período contable, durante la vida de un negocio. Se refiere al proceso completo de registro contable, desde el registro de las transacciones hasta la preparación de los estados financieros.</p>
        
        <h3>Fases del Ciclo Contable</h3>
        <ol>
          <li><strong>Recopilación de información:</strong> Recoger toda la documentación de las transacciones del período</li>
          <li><strong>Registro en el libro diario:</strong> Registrar las transacciones en asientos de diario</li>
          <li><strong>Mayorización:</strong> Trasladar los asientos al libro mayor</li>
          <li><strong>Balanza de comprobación:</strong> Verificar la igualdad entre débitos y créditos</li>
          <li><strong>Ajustes:</strong> Realizar los asientos de ajuste necesarios</li>
          <li><strong>Balanza de comprobación ajustada:</strong> Verificar nuevamente la igualdad después de los ajustes</li>
          <li><strong>Estados financieros:</strong> Preparar los estados financieros finales</li>
          <li><strong>Cierre:</strong> Realizar los asientos de cierre para preparar las cuentas para el siguiente período</li>
        </ol>
        
        <h3>Ejemplo práctico del Ciclo Contable</h3>
        <p>La empresa XYZ inicia sus operaciones el 1 de enero:</p>
        <ol>
          <li>Recopila facturas, recibos y documentación de todas sus transacciones durante enero</li>
          <li>Registra cada transacción en el libro diario con su fecha, descripción y montos</li>
          <li>Traslada cada asiento a las cuentas correspondientes en el libro mayor</li>
          <li>Al final del mes, elabora una balanza de comprobación para verificar que los débitos y créditos están balanceados</li>
          <li>Realiza ajustes como depreciación, amortización y provisiones</li>
          <li>Elabora una balanza de comprobación ajustada</li>
          <li>Prepara el estado de resultados, balance general y otros estados financieros</li>
          <li>Cierra las cuentas de ingresos y gastos, trasladando el resultado a la cuenta de utilidad o pérdida del ejercicio</li>
        </ol>`,
      subtemas: [
        { id: 1, titulo: 'Fases del ciclo contable' },
        { id: 2, titulo: 'Ejercicio práctico completo' }
      ]
    }
  ];
  
  export default temasContabilidad;