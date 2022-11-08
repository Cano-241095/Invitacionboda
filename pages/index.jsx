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
import f01 from '../public/001.jpg';
import f02 from '../public/013.jpg';
import f03 from '../public/009.jpg';
import f04 from '../public/006.jpg';
import f05 from '../public/010.jpeg';
import f06 from '../public/004.jpeg';

export default function Home(AOS) {
  const [sobreCerrado, setsobreCerrado] = useState(true)
  const [sobreP, setSobreP] = useState(false)
  const [playM, setPlay] = useState(true)
  const [permiso, setPermiso] = useState(false)
  const [open, setOpen] = useState(false)
  const [fotoElegida, setFotoElegida] = useState('')
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
      {sobreCerrado ? (
        <div className='hero'>
          <div className={!sobreP ? ('sobre') : ('sobreP')}>
            <div className='informacion' onClick={() => { cambio() }}>
              <p><span> Para {invitado.tipo}:</span> <span className='familia'>{invitado.familia}</span> </p>
            </div>
          </div>
        </div>
      ) : (
        permiso ? (
          <>
            <div className='header'>
              {/* <header style={{ backgroundImage: ` linear-gradient(50deg, transparent,rgba(192, 158, 22, 0.5)), linear-gradient(-200deg, rgba(192, 158, 22, 0.5), transparent), url(${principal})` }}> */}
              {/* <header> */}
              <h2>¡Nuestra boda!</h2>
              <h1>Diana
                <span className='animationPink'>
                  {/* {rosaCentral} */}
                  &
                </span>
                {invitado.novio ? ('Ezequiel') : ('Cano')}</h1>
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
              <div className='transtision'>

              </div>
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
                    <span>Fecha 24 de diciembre 2022 </span>
                  </p>
                  <p>
                    {/* pajaritos */}
                    <svg viewBox="0 0 435.738 435.738">
                      <path d="M162.507,188.784c-1.579,0-3.129-0.64-4.25-1.75c-1.109-1.12-1.75-2.67-1.75-4.25c0-1.579,0.641-3.12,1.75-4.239
				c1.121-1.121,2.671-1.761,4.25-1.761c1.58,0,3.121,0.64,4.24,1.761c1.121,1.119,1.76,2.66,1.76,4.239
				c0,1.58-0.639,3.13-1.76,4.25C165.629,188.144,164.088,188.784,162.507,188.784z"/>
                      <path className='resaltar' d="M271.675,86.465c-2.182-14.298-12.582-25.683-25.877-28.33c-10.348-2.062-20.346,1.516-27.93,9.671
				c-7.585-8.156-17.583-11.733-27.928-9.671c-13.297,2.647-23.696,14.032-25.877,28.331c-1.734,11.365-0.243,40.814,50.932,68.731
				c0.912,0.498,1.897,0.734,2.868,0.734l0.005-0.021l0.006,0.021c0.971,0,1.955-0.236,2.867-0.734
				C271.918,127.281,273.41,97.831,271.675,86.465z M217.869,143.06c-29.041-16.566-44.671-36.903-41.943-54.785
				c1.424-9.322,7.997-16.705,16.359-18.371c7.84-1.557,15.295,2.428,20.452,10.942l0.003-0.002
				c0.485,0.804,1.163,1.507,2.021,2.026c2.835,1.717,6.523,0.811,8.24-2.024c5.158-8.516,12.619-12.499,20.453-10.942
				c8.361,1.665,14.936,9.049,16.358,18.371C262.54,106.157,246.91,126.493,217.869,143.06z"/>
                      <path d="M273.228,188.784c-1.58,0-3.131-0.64-4.24-1.75c-1.119-1.12-1.76-2.67-1.76-4.25c0-1.579,0.641-3.12,1.76-4.239
						c1.109-1.121,2.66-1.761,4.24-1.761c1.58,0,3.131,0.64,4.24,1.761c1.119,1.119,1.76,2.66,1.76,4.239
						c0,1.58-0.641,3.13-1.76,4.25C276.359,188.144,274.808,188.784,273.228,188.784z"/>
                      <path d="M434.998,250.783c-0.828-1.508-2.264-2.588-3.941-2.967l-78.504-17.68c4.799-21.016-0.633-37.34-6.377-47.664
					c-8.336-14.984-22.746-26.658-37.605-30.467c-8.34-2.138-15.559-3.177-22.065-3.177c-15.047,0-24.51,5.655-34.531,11.642
					c-0.932,0.557-1.879,1.123-2.848,1.695l-31.258,7.207l-31.256-7.207c-0.97-0.572-1.918-1.139-2.85-1.695
					c-10.021-5.987-19.485-11.642-34.53-11.642c-6.507,0-13.725,1.039-22.066,3.177c-14.859,3.809-29.27,15.482-37.606,30.467
					c-5.744,10.324-11.176,26.648-6.376,47.664l-78.504,17.68c-1.678,0.379-3.113,1.459-3.94,2.967
					c-0.828,1.508-0.969,3.299-0.388,4.918c0.203,0.561,5.089,13.928,17.014,27.48c14.6,16.592,33.447,26.254,54.795,28.17
					c-0.836,6.363-4.614,18.871-20.125,34.563c-1.686,1.705-2.191,4.25-1.29,6.473c0.901,2.223,3.042,3.693,5.438,3.744
					c0,0,0.369,0.008,1.074,0.008c5.824,0,40.8-0.597,75.638-14.009c1.889,3.354,3.788,11.39-5.468,26.983
					c-1.691,2.85-0.752,6.529,2.098,8.223c0.96,0.568,2.015,0.84,3.057,0.84c2.048,0,4.043-1.049,5.165-2.938
					c11.246-18.944,9.661-30.979,6.223-37.833c5.498-2.596,10.909-5.555,16.122-8.917c3.551,5.328,8.163,17.253-1.268,36.947
					c-1.431,2.99-0.169,6.572,2.82,8.004c0.836,0.4,1.718,0.59,2.587,0.59c2.238,0,4.385-1.258,5.416-3.41
					c12.004-25.068,5.59-41.259,0.186-49.112c6.427-5.118,12.383-10.983,17.591-17.724c21.23-27.479,26.455-64.135,15.549-108.995
					l14.896-11.643l14.895,11.643c-10.906,44.86-5.684,81.517,15.547,108.995c5.207,6.739,11.161,12.602,17.587,17.72
					c-5.4,7.855-11.81,24.053,0.19,49.116c1.031,2.152,3.178,3.41,5.416,3.41c0.869,0,1.75-0.19,2.586-0.59
					c2.99-1.432,4.252-5.014,2.822-8.004c-9.433-19.696-4.818-31.619-1.268-36.946c5.212,3.362,10.623,6.32,16.119,8.916
					c-3.439,6.852-5.022,18.889,6.225,37.833c1.121,1.889,3.117,2.938,5.164,2.938c1.041,0,2.098-0.271,3.057-0.842
					c2.85-1.691,3.789-5.371,2.098-8.221c-9.292-15.654-7.44-23.608-5.477-26.986c34.841,13.414,69.821,14.012,75.645,14.012
					c0.002,0,0.004,0,0.006,0c0.701,0,1.068-0.008,1.068-0.008c2.398-0.051,4.539-1.521,5.44-3.744
					c0.9-2.223,0.396-4.768-1.291-6.473c-15.508-15.691-19.287-28.199-20.123-34.563c21.348-1.916,40.195-11.578,54.795-28.17
					c11.926-13.553,16.811-26.92,17.014-27.48C435.966,254.081,435.824,252.29,434.998,250.783z M192.506,187.738
					c-1.886,1.475-2.715,3.927-2.11,6.242c11.17,42.828,6.976,77.303-12.467,102.465c-28.528,36.924-82.728,45.285-107.936,47.158
					c10.721-13.978,13.607-25.446,14.226-32.276c9.048-0.906,25.947-4.128,34.45-15.585c1.976-2.66,1.419-6.42-1.242-8.395
					c-2.661-1.975-6.419-1.418-8.394,1.242c-6.688,9.011-24.389,11.058-30.757,11.093c-20.453-0.48-37.82-8.591-51.619-24.11
					c-5.797-6.522-9.746-13.074-12.133-17.672l77.407-17.432c1.637-0.369,3.044-1.406,3.881-2.861
					c0.838-1.453,1.027-3.191,0.524-4.791c-6.28-19.986-1.448-35.236,3.711-44.51c6.79-12.203,18.323-21.658,30.1-24.677
					c7.354-1.885,13.597-2.801,19.086-2.801c11.733,0,18.714,4.171,28.376,9.942c1.211,0.725,2.447,1.463,3.723,2.21
					c0.524,0.308,1.093,0.534,1.686,0.671l21.245,4.898L192.506,187.738z M409.08,275.572c-13.798,15.518-31.163,23.63-51.617,24.11
					c-6.37-0.034-24.07-2.081-30.756-11.093c-1.977-2.66-5.732-3.217-8.395-1.242c-2.66,1.975-3.217,5.732-1.242,8.395
					c8.502,11.457,25.401,14.679,34.449,15.585c0.619,6.83,3.505,18.297,14.225,32.276c-25.207-1.873-79.406-10.234-107.936-47.158
					c-19.441-25.162-23.635-59.637-12.465-102.465c0.604-2.316-0.227-4.768-2.111-6.242l-11.756-9.188l21.246-4.898
					c0.592-0.137,1.16-0.363,1.686-0.671c1.273-0.747,2.51-1.485,3.721-2.21c9.662-5.771,16.642-9.942,28.377-9.942
					c5.488,0,11.732,0.916,19.086,2.801c11.775,3.018,23.309,12.474,30.098,24.677c5.16,9.273,9.992,24.523,3.713,44.51
					c-0.504,1.6-0.314,3.338,0.523,4.791c0.838,1.455,2.244,2.492,3.881,2.861l77.406,17.432
					C418.826,262.499,414.877,269.052,409.08,275.572z"/>
                    </svg>
                    <span>Ceremonia 14:00 hrs</span>
                  </p>
                  <p>
                    <svg
                      id="svg4619" x="0px" y="0px" width="25" height="25"
                      viewBox="0 0 15 15">
                      <path id="path11774" d="M3.5,0l-1,5.5c-0.1464,0.805,1.7815,1.181,1.75,2L4,14c-0.0384,0.9993,1,1,1,1s1.0384-0.0007,1-1L5.75,7.5 c-0.0314-0.8176,1.7334-1.1808,1.75-2L6.5,0H6l0.25,4L5.5,4.5L5.25,0h-0.5L4.5,4.5L3.75,4L4,0H3.5z M12,0 c-0.7364,0-1.9642,0.6549-2.4551,1.6367C9.1358,2.3731,9,4.0182,9,5v2.5c0,0.8182,1.0909,1,1.5,1L10,14c-0.0905,0.9959,1,1,1,1 s1,0,1-1V0z" />
                    </svg>
                    <span>Comida 15:30 - 18:00 hrs</span>

                  </p>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#252834" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                      <path className='resaltar' d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg> <span>
                      Priv. de Chabacano LB, Juan N. Alvarez, 40020 Iguala de la Independencia, Gro.
                    </span>
                  </p>
                  <a target={'_blank'} rel="noreferrer" href="https://goo.gl/maps/XgrxcnsebgsXVmAS9">Ver mapa</a>
                </div>

              </section>

              {/* <section className='confirmacion'>
                <form action="">
                  <p>Favor de confirmar asistencia antes del 1 de Diciembre</p>
                  <button onClick={(e) => handleSubmit(e)}>Confirmar Asistencia</button>
                </form>
              </section> */}
              <section className='momentos'>
                <h2>Momentos</h2>
                <div onClick={() => { setOpen(true); setFotoElegida(1)}} className='momentosF f01'>
                </div>
                <div onClick={() => { setOpen(true); setFotoElegida(2)}}  className='momentosF f02'>
                </div>
                <div onClick={() => { setOpen(true); setFotoElegida(3)}}  className='momentosF f03'>
                </div>
                <div onClick={() => { setOpen(true); setFotoElegida(4)}}  className='momentosF f04'>
                </div>
                <div onClick={() => { setOpen(true); setFotoElegida(5)}}  className='momentosF f05'>
                </div>
                <div onClick={() => { setOpen(true); setFotoElegida(6)}}  className='momentosF f06'>
                </div>
                {open ? (
                  <div className='bloqueo'>
                    <div className='closed' onClick={() => { setOpen(false)}}></div>
                    <div className='foto'>
                      <Image src={fotoElegida === 1 ? (f01) : fotoElegida === 2 ? (f02) : fotoElegida === 3 ? (f03) : fotoElegida === 4 ? (f04) : fotoElegida === 5 ? (f05) : (f06)} />
                    </div>
                    <div className='controles'>
                      <svg onClick={() => {setFotoElegida(fotoElegida === 1 ? 6 : fotoElegida - 1)}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                      </svg>
                      <svg onClick={() => {setFotoElegida(fotoElegida === 6 ? 1 : fotoElegida + 1)}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                      </svg>
                    </div>
                  </div>
                ) : null}
              </section>
            </main>
          </>) : (
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
        )
      )
      }
    </div >
  )
}
