export default function onLeave(origin, destination, direction) {
  // console.log(origin, destination, direction);

  // capas seccion animada
  [...document.querySelectorAll('.capa_uno')].map(
    (x) =>
      x.classList.add('hidden') +
      x.classList.remove('animate__animated', 'animate__fadeIn')
  );
  [...document.querySelectorAll('.capa_dos')].map(
    (x) =>
      x.classList.add('hidden') +
      x.classList.remove(
        'animate__animated',
        'animate__slideInUp'
      )
  );
  [...document.querySelectorAll('.capa_tres')].map(
    (x) =>
      x.classList.add('hidden') +
      x.classList.remove(
        'animate__animated',
        'animate__slideInLeft',
        'animate__delay-1s'
      )
  );
  [...document.querySelectorAll('.capa_cuatro')].map(
    (x) =>
      x.classList.add('hidden') +
      x.classList.remove(
        'animate__animated',
        'animate__slideInRight',
        'animate__delay-2s'
      )
  );
  [...document.querySelectorAll('.capa_cinco')].map(
    (x) =>
      x.classList.add('hidden') +
      x.classList.remove(
        'animate__animated',
        'animate__slideInRight',
        'animate__delay-3s'
      )
  );
  // textos
  [...document.querySelectorAll('.textos')].map((x) =>
    x.classList.remove('animate__animated', 'animate__fadeIn')
  );
  [...document.querySelectorAll('.titulo')].map(
    (x) =>
      x.classList.add('hidden') +
      x.classList.remove('animate__animated', 'animate__fadeInDown')
  );
  [...document.querySelectorAll('.subtitulo')].map(
    (x) =>
      x.classList.add('hidden') +
      x.classList.remove('animate__animated', 'animate__fadeInDown')
  );
  [...document.querySelectorAll('.section.animada .textos > .txt')].map(
    (x) =>
      x.classList.add('hidden') +
      x.classList.remove(
        'animate__animated',
        'animate__fadeInUp',
        'animate__delay-3s'
      )
  );
  [...document.querySelectorAll('.section.normal .parrafo')].map(
    (x) =>
      x.classList.add('hidden') +
      x.classList.remove(
        'animate__animated',
        'animate__fadeIn'
      )
  );
  [...document.querySelectorAll('.icon-scroll')].map(
    (x) =>
      x.classList.add('hidden') +
      x.classList.remove(
        'animate__animated',
        'animate__fadeIn',
        'animate__delay-2s'
      )
  );
}
