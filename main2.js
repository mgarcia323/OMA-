// Popup funcionalidad
document.querySelectorAll('.equipo-card').forEach(card => {
  card.addEventListener('click', function() {
    const person = card.getAttribute('data-person');
    fillPopup(person);
    const overlay = document.querySelector('.equipo-popup-overlay');
    overlay.classList.add('activo');
    overlay.classList.remove('saliendo');
    setTimeout(() => overlay.focus(), 1);
  });
});

document.querySelector('.equipo-popup-overlay').addEventListener('click', function(e) {
  if (e.target.classList.contains('equipo-popup-overlay')) {
    closePopup();
  }
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closePopup();
  }
});
function closePopup() {
  const overlay = document.querySelector('.equipo-popup-overlay');
  overlay.classList.add('saliendo');
  setTimeout(() => {
    overlay.classList.remove('activo');
    overlay.classList.remove('saliendo');
  }, 420);
}

// Cambia los datos del popup según la tarjeta/persona
function fillPopup(person) {
  const data = {
    martin: {
      img: 'img/martin.png',
      nombre: 'MARTÍN ELÍAS MENDOZA CERPA',
      rol: 'CO-INVESTIGADOR',
      desc: `Comunicador Social y Periodista, especialista en Pedagogía Ambiental y magíster en Pedagogía Ambiental para el Desarrollo Sostenible. Actualmente se desempeña como docente del programa de Comunicación Social de la Fundación Universitaria del Área Andina, sede Valledupar.<br><br>
      Su trayectoria integra la formación académica con la investigación aplicada, enfocándose en la promoción de prácticas sostenibles y en el fortalecimiento de los procesos comunicativos vinculados a los medios de comunicación, el periodismo y el desarrollo sostenible.`
    },
    alix: {
      img: 'img/alix -card.png',
      nombre: 'ALIX CASTRO',
      rol: 'CO-INVESTIGADORA',
      desc: 'Comunicadora Social y Periodista, especialista en Gerencia de la Comunicación para el Desarrollo Social de la Universidad Autónoma del Caribe y maestrante en Innovación de la Fundación Universitaria del Área Andina.<br><br>Consultora en comunicación corporativa y estratégica, así como en proyectos vinculados a las industrias creativas y culturales.Actualmente es directora del programa de Comunicación Social de Areandina, sede Valledupar, desde donde lidera procesos académicos, investigativos y de gestión, orientados al fortalecimiento de la formación en comunicación con impacto social, cultural y regional.'
    },
    ana: {
      img: 'img/ana-card.png',
      nombre: 'ANA BELTRÁN',
      rol: 'CO-INVESTIGADORA',
      desc: 'Comunicadora Social y Periodista. Magíster en Comunicación Estratégica por la Universidad Sergio Arboleda y Magíster en Neuromarketing Aplicado por la Universidad Politécnica de Valencia, España. Diplomada en Transformación Digital.<br><br>Cuenta con amplia experiencia en la articulación con el sector empresarial y en la gestión de convenios con entidades públicas y privadas. Se ha desempeñado como consultora en comunicación estratégica y responsabilidad social empresarial. Docente del programa de Comunicación Social Virtual de la Fundación Universitaria del Área Andina.'
    },
    diego: {
      img: 'img/diego-card.png',
      nombre: 'DIEGO VILLA',
      rol: 'DISEÑADOR GRÁFICO',
      desc: 'Texto Licenciado en Folklore y Artes Plásticas de la Universidad Popular del Cesar, y magíster en Educación y Procesos Cognitivos de la Universidad de Cuauhtémoc, México.<br><br> Posee amplia experiencia en diseño gráfico, diseño web, animación e ilustración digital.Actualmente se desempeña como docente del programa de Diseño Gráfico de la Fundación Universitaria del Área Andina, sede Valledupar, donde integra su experiencia creativa y académica para el fortalecimiento de procesos formativos en comunicación visual e innovación digital. de Diego Villa aquí.'
    }
  };
  const popup = document.querySelector('.equipo-popup-card');
  popup.querySelector('.popup-foto').src = data[person].img;
  popup.querySelector('.popup-foto').alt = data[person].nombre;
  popup.querySelector('.popup-nombre').textContent = data[person].nombre;
  popup.querySelector('.popup-rol').textContent = data[person].rol;
  popup.querySelector('.popup-desc').innerHTML = data[person].desc;
}