import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import rosaCentral from '../public/rosaCentro.png'
import adornoVerdeArriba from "../public/adornoVerdeArriba.png"
// import musica from "../public/saborAmi.mp3";
import rosaL from "../public/rosaRosa.png"
import rosaR from "../public/rosaRosa2.png"
import dynamic from 'next/dynamic'
import emailjs from 'emailjs-com'


export default function Home(AOS) {
  const [sobreCerrado, setsobreCerrado] = useState(true)
  const [sobreP, setSobreP] = useState(false)
  const [playM, setPlay] = useState(true)
  const [permiso, setPermiso] = useState(false)
  // const pathname = '?012canbah'
  const [pathname, setPathname] = useState('')
  const [DateCountdown, setDateCountdown] = useState()
  const [invitado, setInvitado] = useState({
    familia: '',
    invitados: '',
    codigo: '',
    tipo: '',
    novio: ''
  })
  const [templateParams, setTemplateParams] = useState({ name: '', mensaje: 'si pueden ir 4' })

  function cambio() {
    setSobreP(true)
    setTimeout(function () {
      setsobreCerrado(false)
    }, 200);
  }
  (function () {
    emailjs.init("IQRXUPESvM0tL-ScM");
  })();

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send('default_service', 'template_alg4w0r', templateParams)
      .then((response) => {
        window.open('https://calendar.google.com/calendar/u/0/r/eventedit?text=Boda+Diana+y+Cano&dates=20221224T150000/20221224T190000&details=Hora+de+servicio+de+comida+3:30pm+a+6:00pm.&location=Priv.+de+Chabacano+LB,+Juan+N.+Alvarez,+40020+Iguala+de+la+Independencia,+Gro.', '_blank');
      }, (err) => {
        console.log(err);
      });
  }

  const invitados = [{
    familia: 'Cano Bahena',
    invitados: '2',
    codigo: '012canbah',
    tipo: 'familia',
    novio: true
  }, {
    familia: 'Cano Cano',
    invitados: '3',
    codigo: '023cancan',
    tipo: 'familia',
    novio: true
  }, {
    familia: 'Bahena Hernandez',
    invitados: '3',
    codigo: '033bahher',
    tipo: 'familia',
    novio: true
  }, {
    familia: 'Daniela',
    invitados: '2',
    codigo: '042danher',
    tipo: 'Prima',
    novio: true
  }, {
    familia: 'Tencha',
    invitados: '3',
    codigo: '053abuten',
    tipo: 'Abuelita ',
    novio: true
  }, {
    familia: 'Polo',
    invitados: '2',
    codigo: '062abupol',
    tipo: 'Abuelito',
    novio: true
  }, {
    familia: 'Cano',
    invitados: '2',
    codigo: '072abucan',
    tipo: 'Abuelitos',
    novio: true
  }, {
    familia: 'Cano Landa',
    invitados: '4',
    codigo: '084canlan',
    tipo: 'familia',
    novio: true
  }, {
    familia: 'Cano Ochoa',
    invitados: '5',
    codigo: '095canoch',
    tipo: 'familia',
    novio: true
  }, {
    familia: 'Cano Adame',
    invitados: '3',
    codigo: '103canada',
    tipo: 'familia',
    novio: true
  }, {
    familia: 'Pillo y Lupe',
    invitados: '4',
    codigo: '114canpil',
    tipo: 'tio',
    novio: true
  }, {
    familia: 'Cano Tamallo',
    invitados: '2',
    codigo: '122cantam',
    tipo: 'familia',
    novio: true
  }, {
    familia: 'Horacio y familia',
    invitados: '5',
    codigo: '135hor',
    tipo: '',
    novio: true
  }, {
    // tias de estados unidos
    familia: 'Cano',
    invitados: '',
    codigo: '143can',
    tipo: 'familia',
    novio: true
  }, {
    familia: 'Gongora Reyes',
    invitados: '5',
    codigo: '155gonrey',
    tipo: 'familia',
    novio: false
  }, {
    familia: 'Hernandez Reyes',
    invitados: '6',
    codigo: '166herrey',
    tipo: 'familia',
    novio: false
  }, {
    familia: 'Rosalba y Perla',
    invitados: '2',
    codigo: '172rosper',
    tipo: 'tia',
    novio: false
  }, {
    familia: 'Gongora Villalobos',
    invitados: '2',
    codigo: '182gonvil',
    tipo: 'familia',
    novio: false
  }, {
    familia: 'Alejandra Aguilera',
    invitados: '3',
    codigo: '193aleagu',
    tipo: '',
    novio: false
  }, {
    familia: 'Vicky',
    invitados: '2',
    codigo: '202vic',
    tipo: '',
    novio: false
  }, {
    familia: 'Rosa y Cruz',
    invitados: '4',
    codigo: '214roscru',
    tipo: '',
    novio: false
  }, {
    familia: 'Maria Elena y familia',
    invitados: '3',
    codigo: '223marele',
    tipo: '',
    novio: false
  }, {
    familia: 'Ing. Jesus David',
    invitados: '2',
    codigo: '232jespil',
    tipo: '',
    novio: false
  }, {
    familia: 'Ing. Oscar Bahena',
    invitados: '2',
    codigo: '242oscbah',
    tipo: '',
    novio: false
  }, {
    familia: 'Ing. Victor Velazquez',
    invitados: '2',
    codigo: '252vicvel',
    tipo: '',
    novio: false
  }, {
    familia: 'Ing. Carlos y Yesenia',
    invitados: '2',
    codigo: '262caryes',
    tipo: '',
    novio: false
  }, {
    familia: 'Ing. Daniel',
    invitados: '2',
    codigo: '272dan',
    tipo: '',
    novio: false
  }, {
    familia: 'Ing. Saul Aviles',
    invitados: '2',
    codigo: '282salavi',
    tipo: '',
    novio: false
  }, {
    familia: 'Ing. Jorge Ortega',
    invitados: '2',
    codigo: '292jorort',
    tipo: '',
    novio: false
  }, {
    familia: 'Juan Alvarado',
    invitados: '4',
    codigo: '304juaalv',
    tipo: '',
    novio: false
  }, {
    familia: 'Dulce Rodriguez',
    invitados: '2',
    codigo: '312dulrod',
    tipo: '',
    novio: false
  }, {
    familia: 'Lic. Dalia Rebolledo',
    invitados: '2',
    codigo: '322dalreb',
    tipo: '',
    novio: false
  },]

  useEffect(() => {

    setDateCountdown(dynamic(() => import('react-date-countdown-timer'), {}))
    // setPathname(dynamic(() => 
    invitado.codigo !== window.location.search.slice(1, window.location.search.length) ? (
      invitados.map((index) => (
        window.location.search.slice(1, window.location.search.length) === index.codigo ? (
          setInvitado(index),
          setPermiso(true),
          templateParams.name = index.familia
        ) : (null)
      ))
    ) : null;

    AOS.init({
      duration: 900
    });

  }, [])


  return (

    <div className="App">
      <Head>
        <title>¡Nos casamos!</title>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0" />
        <meta name="description" content="Invitacion Diana & Cano" />
        <link rel="icon" href="/cdPuentemini.ico" />
      </Head>
      {permiso ? (
        sobreCerrado ? (
          <div className='hero'>
            <div className={!sobreP ? ('sobre') : ('sobreP')}>
              <div className='informacion' onClick={() => { cambio() }}>
                <p><span> Para {invitado.tipo}:</span> <span className='familia'>{invitado.familia}</span> </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className='header'>
              {/* <header style={{ backgroundImage: ` linear-gradient(50deg, transparent,rgba(192, 158, 22, 0.5)), linear-gradient(-200deg, rgba(192, 158, 22, 0.5), transparent), url(${principal})` }}> */}
              {/* <header> */}
              <h2>¡Nuestra boda!</h2>
              <h1>Diana
                <span className='animationPink'>
                  {/* {rosaCentral} */}
                  <svg width="26" height="26" fill="currentColor" class="bi bi-hearts" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015Zm6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343ZM7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358Z" />
                  </svg>
                </span>{invitado.novio ? ('Ezequiel') : ('Cano')}</h1>
              {playM ? (
                <audio src="/saborAmiMini.mp3" autoPlay loop> </audio>
              ) : (
                null
              )}
              <button onClick={() => { setPlay(!playM) }}>
                {playM ? (
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" onClick={() => { setPlay(!playM) }}>
                    <path fill='#ffffff' d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" onClick={() => { setPlay(!playM) }}>
                    <path fill='#ffffff' d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                )
                }
              </button>
              <div className="dia">
                <p>24 - 12 - 2022</p>
                <div className='adorno'>
                  <Image src={rosaCentral}
                    layout="responsive" />
                </div>
                {/* <img src={rosaCentral} alt="" /> */}
              </div>
              {/* <DateCountdown className={''} dateTo='2022-12-24' locales={['año','mes','dia','hora','minuto','segundo']} locales_plural={['años','meses','dias','horas','minutos','segundos']}/> */}
            </div>
            <main>
              <section className='invitado'>
                <h2>¡Hola {invitado.tipo + ' ' + invitado.familia}!</h2>
                <br />
                <p>Hemos decidido casarnos y deseamos compartir con
                  ustedes este día tan especial, es por ello que
                  tenemos el gusto de invitarles a nuestra boda.</p>
                <br />
                <div className='adorno'>
                  <Image src={adornoVerdeArriba}
                    layout="responsive" />
                </div>
                <br />
                <p>En compañia de nuestros padres</p>
                <div className="padres">
                  <br />
                  <p className='mama'><span>J</span>ulia Reyes Morales</p>
                  <p className='papa'><span>A</span>lberto Gongora Garcia</p>
                  <br />
                  <p className='mama'><span>A</span>raceli Bahena Flores</p>
                  <p className='papa'><span>M</span>arco Antonio Cano Hernandez</p>
                  <br />
                </div>
              </section>
              <section data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='invitados'>
                {invitado.invitados !== '' ? (
                  <>
                    <p>Pase para <span>{invitado.invitados}</span> personas</p>
                    <div className='adorno'>
                      <Image src={adornoVerdeArriba}
                        layout="responsive" />
                    </div>
                    <br />
                    <p>¡Los esperamos!</p>
                    <p>Presentar invitación digital <br /> para acceso al evento</p>
                  </>
                ) : null}
              </section>
              <section className='faltan'>
                <p>Dias faltantes</p>
                <div className="fecha">
                  <DateCountdown numberOfFigures='6' dateTo='December 24, 2022 15:00:00 GMT -5' locales={['', '', '', '', '', '']} locales_plural={['', '', '', '', '', '']} />
                  <div className='fechaTxt'>
                    <span>Meses</span>
                    <span>Dias</span>
                    <span>Hrs</span>
                    <span>Min.</span>
                    <span>Seg.</span>
                  </div>
                </div>
              </section>
              <section data-aos="fade-right" className='lugar'>
                <p><Image src={rosaL} width={40} height={35} /> ¿Donde y Cuando?<Image src={rosaR} width={40} height={35} /></p>

                <div data-aos="fade-left" className="civil">
                  <h2>Celebración</h2>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.7813899803923!2d-99.53978710000003!3d18.3572551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cc380b816adcdb%3A0x5c35f6d11aee6e4e!2sQuinta%20El%20Eden%20De%20La%20Reyna!5e0!3m2!1ses-419!2smx!4v1663904594428!5m2!1ses-419!2smx" allowfullscreen=""></iframe>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#252834" className="bi bi-calendar2-heart" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm2 .5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3Zm5 4.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                    </svg>
                    <span>
                      24 de diciembre 2022
                    </span>
                  </p>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#252834" className="bi bi-alarm" viewBox="0 0 16 16">
                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                  </svg> <span>14:00 hrs</span>
                  </p>
                  <p><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 172 172" >
                    <path d="M0,172v-172h172v172z" fill="none"/>
                    <path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z" />
                  </svg>
                    <span>14:00 hrs</span>

                  </p>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#252834" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg> <span>
                      Priv. de Chabacano LB, Juan N. Alvarez, 40020 Iguala de la Independencia, Gro.
                    </span>
                  </p>
                  <a target={'_blank'} rel="noreferrer" href="https://goo.gl/maps/XgrxcnsebgsXVmAS9">Ver mapa</a>
                </div>

              </section>
              <section className='confirmacion'>
                <form action="">
                  <p>Favor de confirmar asistencia antes del 1 de Diciembre</p>
                  <button onClick={(e) => handleSubmit(e)}>Confirmar Asistencia</button>
                </form>
                {/* <a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Boda+Diana+y+Cano&dates=20221224T150000/20221224T190000&details=Hora+de+servicio+de+comida+3:30pm+a+6:00pm.&location=Priv.+de+Chabacano+LB,+Juan+N.+Alvarez,+40020+Iguala+de+la+Independencia,+Gro." target="_blank">
                  google
                </a> */}
              </section>
            </main>
          </>
        )
      ) : (
        <div className="hero">
          <div className="problema">
            <div className="mensaje">
              <div className="textColor">
                <p>enlace incompleto</p>
                <p>solicite ayuda al: </p>
                <a href="tel:+527331054723">7331054723</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div >
  )
}
