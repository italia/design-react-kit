import React from 'react'

import { select, text } from '@storybook/addon-knobs/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Chip,
  ChipLabel,
  Collapse,
  Container,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Icon,
  Input,
  Row,
  Col,
  Label,
  LinkListItem,
  LinkList,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
  Progress,
  UncontrolledDropdown,
  CardCategory,
  Scrollspy
} from '../../../src'

import CompleteHeader from '../shared/Header'
import Footer from '../shared/Footer'

const Evento = () => {
  const theme = select(
    'Tema',
    { default: '', light: 'light', dark: 'dark' },
    ''
  )

  const townName = text('Comune', 'Nome del Comune')
  const townTagLine = text('Motto Comune', 'Uno dei tanti Comuni d Italia')

  return (
    <>
      <CompleteHeader
        theme={theme}
        townName={townName}
        townTagLine={townTagLine}
        page="Novità"
      />
      <main style={{ paddingTop: 0 }}>
        <Container className="px-4 my-4">
          <Row>
            <Col className="px-lg-4">
              <Breadcrumb className="breadcrumb-container">
                <BreadcrumbItem>
                  <a href="#">Home</a>
                  <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <a href="#">Novità</a>
                  <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <a href="#">Eventi</a>
                  <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem aria-current="page" active>
                  363^ Festa di Sant&#39;Efisio
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="px-lg-4 py-lg-2">
              <h1>363^ Festa di Sant&#39;Efisio</h1>
              <h4 className="py-2">dal 01 maggio 2019 al 04 maggio 2019</h4>
              <p>
                Il 1° maggio 2019 Cagliari e tutta la Sardegna festeggiano la
                363ª Festa di Sant&#39;Efisio. Un intenso momento di devozione,
                fede, cultura e tradizioni centenarie che si fondono in una
                processione che non ha eguali.
              </p>
            </Col>
            <Col lg={{ size: 3, offset: 1 }}>
              <UncontrolledDropdown tag="div" className="d-inline">
                <DropdownToggle
                  tag={'button'}
                  className="btn dropdown-toggle btn-dropdown">
                  <Icon icon="it-share" />
                  <small>Condividi</small>
                </DropdownToggle>
                <DropdownMenu>
                  <LinkList>
                    {['Facebook', 'Twitter', 'Linkedin', 'Whatsapp'].map(
                      social => {
                        return (
                          <LinkListItem href="#" key={social}>
                            <Icon icon={`it-${social.toLowerCase()}`} />
                            <span>{social}</span>
                          </LinkListItem>
                        )
                      }
                    )}
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown tag="div" className="d-inline">
                <DropdownToggle
                  tag={'button'}
                  className="btn dropdown-toggle btn-dropdown">
                  <Icon icon="it-more-items" />
                  <small>Vedi azioni</small>
                </DropdownToggle>
                <DropdownMenu>
                  <LinkList>
                    {[
                      { label: 'Scarica', icon: 'download' },
                      { label: 'Stampa', icon: 'print' },
                      { label: 'Ascolta', icon: 'hearing' },
                      { label: 'Invia', icon: 'mail' }
                    ].map(({ label, icon }) => {
                      return (
                        <LinkListItem href="#" key={label}>
                          <Icon icon={`it-${icon}`} />
                          <span>{label}</span>
                        </LinkListItem>
                      )
                    })}
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown>
              <div className="mt-4 mb-4">
                <h6>
                  <small>Argomenti</small>
                </h6>
                <a href="#">
                  <Chip className="chip-primary">
                    <ChipLabel>Cultura</ChipLabel>
                  </Chip>
                </a>
                <a href="#">
                  <Chip className="chip-primary">
                    <ChipLabel>Vivere la città</ChipLabel>
                  </Chip>
                </a>
              </div>
              <div className="mt-5">
                <Button
                  outline
                  color="primary"
                  href="#"
                  className="btn-icon"
                  tag="a">
                  <Icon icon="it-calendar" />
                  <span>Vai al calendario eventi</span>
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="row-full-width my-3">
            <figure className="figure">
              <img
                src="https://picsum.photos/800/400"
                className="figure-img img-fluid"
                alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."
              />
              <figcaption className="figure-caption text-center pt-3">
                Una didascalia per l&#39;immagine sopra.
              </figcaption>
            </figure>
          </Row>
          <Row className="border-top row-column-border row-column-menu-left">
            <Col tag="aside" lg={4} style={{ position: 'relative' }}>
              {/* We need the sticky navbar here */}
              <div className="sticky-wrapper navbar-wrapper">
                <Navbar
                  expand="lg"
                  className="it-navscroll-wrapper it-top-navscroll">
                  <NavbarToggler
                    tag="button"
                    cssModule={{ 'navbar-toggler': 'custom-navbar-toggler' }}>
                    <span className="it-list"></span>Cos&#39;è
                  </NavbarToggler>
                  <Collapse
                    navbar
                    isOpen={false}
                    cssModule={{ 'navbar-collapse': 'navbar-collapsable' }}>
                    <div className="overlay" />
                    <div className="close-div sr-only">
                      <Button className="close-menu" type="button">
                        <span className="it-close"></span>Chiudi
                      </Button>
                    </div>
                    <a className="it-back-button" href="#">
                      <Icon
                        size="sm"
                        color="primary"
                        className="align-top"
                        icon="it-chevron-left"
                      />
                      <span>Torna indietro</span>
                    </a>
                    <div className="menu-wrapper">
                      <div className="link-list-wrapper menu-link-list">
                        <h3 className="no_toc">Indice della pagina</h3>
                        <Scrollspy
                          item={[
                            'cos-e',
                            'luogo',
                            'date-e-orari',
                            'costi',
                            'documenti',
                            'contatti',
                            'appuntamenti',
                            'ulteriori-informazioni'
                          ]}
                          currentClassName="active"
                          className="link-list"
                          onUpdate={() => 'Hello'}>
                          <NavItem>
                            <NavLink href="#cos-e">
                              <span>Cos&#39;è</span>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#luogo">
                              <span>Luogo</span>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#date-e-orari">
                              <span>Date e orari</span>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#costi">
                              <span>Costi</span>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#documenti">
                              <span>Documenti</span>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#contatti">
                              <span>Contatti</span>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#appuntamenti">
                              <span>Appuntamenti</span>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#ulteriori-informazioni">
                              <span>Ulteriori informazioni</span>
                            </NavLink>
                          </NavItem>
                        </Scrollspy>
                      </div>
                    </div>
                  </Collapse>
                </Navbar>
              </div>
            </Col>
            <Col lg={8} tag="section" className="it-page-sections-container">
              <article id="cos-e" className="it-page-section anchor-offset">
                <h4>Cos&#39;è?</h4>
                <p className="text-serif">
                  Sant&#39;Efisio, nato in una città dell&#39;Asia Minore, visse
                  all&#39;epoca dell&#39;Imperatore Diocleziano nel III sec.
                  d.C. Giovanissimo intraprese la carriera militare e, inviato
                  in Italia per contrastare la diffusione del cristianesimo, la
                  tradizione vuole che si convertì in seguito alla visione
                  straordinaria di una croce splendente nel cielo che
                  successivamente si impresse nel palmo della mano e sentendo la
                  voce di Cristo che lo rimproverava per la sua missione
                  sanguinaria.
                </p>
                <p className="text-serif">
                  Giunto in Sardegna, mentre i suoi soldati combattevano i
                  barbari, Sant&#39;Efisio si convertì al cristianesimo e ne
                  divenne difensore, disobbedendo agli ordini di Diocleziano il
                  quale ne comandò il martirio che avvenne il 15 gennaio del 303
                  d.C. nella prigione di Nora. Il rito ha origine da un Voto del
                  1652 della Municipalità di Cagliari, oggi custodito presso
                  l’Archivio storico, nel quale s’invoca l’intercessione di
                  Sant’Efisio per far terminare la peste e ci si impegna a
                  celebrare ogni anno e perpetuamente una Festa solenne.
                </p>
                <p className="text-serif">
                  Dal 1657 si ripete annualmente con una cerimonia solenne la
                  Festa di Sant’Efisio, il Pellegrinaggio da Cagliari al luogo
                  del martirio del Santo e i riti di scioglimento del Voto
                  voluto dalla Municipalità di Cagliari.
                </p>
                <div className="it-carousel-wrapper it-carousel-landscape-abstract-three-cols">
                  <div className="it-header-block">
                    <div className="it-header-block-title">
                      <h4 className="no_toc">Galleria immagini</h4>
                    </div>
                  </div>
                  <div className="it-carousel-all owl-carousel it-card-bg owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: 'translate3d(0px, 0px, 0px)',
                          transition: 'all 0s ease 0s',
                          width: 1556,
                          paddingLeft: 12,
                          paddingRight: 12
                        }}>
                        {Array.from({ length: 7 }).map((_, i) => (
                          <div
                            className={`owl-item ${i < 2 ? 'active' : ''}`}
                            style={{ width: 194.778, marginRight: 24 }}
                            key={i}>
                            <div className="it-single-slide-wrapper">
                              <figure>
                                <img
                                  src="https://via.placeholder.com/250x250/ebebeb/808080/?text=Thumb"
                                  alt="Festa di Sant'Efisio"
                                  className="img-fluid"
                                />
                                <figcaption className="figure-caption mt-2">
                                  Festa di Sant&#39;Efisio
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="owl-nav disabled">
                      <button className="owl-prev"></button>
                      <button className="owl-next"></button>
                    </div>
                    <div className="owl-dots">
                      <button
                        role="button"
                        className="owl-dot active"
                        aria-labelledby="owl-dot-0">
                        <span></span>
                      </button>
                      <button
                        role="button"
                        className="owl-dot"
                        aria-labelledby="owl-dot-1">
                        <span></span>
                      </button>
                      <button
                        role="button"
                        className="owl-dot"
                        aria-labelledby="owl-dot-2">
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="embed-responsive embed-responsive-16by9 my-4">
                  <iframe
                    className="embed-responsive-item"
                    title="Video YouTube"
                    src="https://www.youtube.com/embed/0rIBULTnWuQ"
                    allowFullScreen=""></iframe>
                </div>
                <p className="text-serif">
                  Ogni 1° di maggio, quindi, i fedeli accompagnano il Santo in
                  questa tradizionale processione, ripercorrendo il tragitto che
                  giunge dal carcere in cui venne imprigionato al luogo del
                  martirio a Nora, per poi tornare alla sua Chiesa di Stampace
                  il 4 maggio entro la mezzanotte.
                </p>
                <div className="pt-3 pb-5">
                  <h6 className="text-serif font-weight-bold">
                    Parteciperanno:
                  </h6>
                  <a href="#">
                    <Chip simple className="chip-primary">
                      <ChipLabel>Valerio Alfio Boi</ChipLabel>
                    </Chip>
                  </a>
                  <a href="#">
                    <Chip simple className="chip-primary">
                      <ChipLabel>Marco Murgia</ChipLabel>
                    </Chip>
                  </a>
                </div>
              </article>
              <article id="luogo" className="it-page-section anchor-offset">
                <h4>Luogo</h4>
                <Card teaser className="shadow mt-3 rounded">
                  <Icon icon="it-pin" />
                  <CardBody>
                    <CardTitle tag="h5">Cagliari</CardTitle>
                    <CardText tag="div">
                      <p>Via Sant&#39;Efisio, 14 - 09124</p>
                      <p className="mt-3">Ulteriori dettagli</p>
                    </CardText>
                  </CardBody>
                </Card>
                <div className="map-wrapper map-column mt-4 mb-5">
                  <img
                    src="https://via.placeholder.com/320x180/ebebeb/808080/?text=Map"
                    alt="Festa di Sant'Efisio"
                    className="img-fluid"
                    style={{ objectFit: 'cover', width: '100%' }}
                  />
                </div>
              </article>
              <article
                id="date-e-orari"
                className="it-page-section anchor-offset">
                <h4>Date e orari</h4>
                <div className="point-list-wrapper my-4">
                  <div className="point-list">
                    <div className="point-list-aside point-list-warning">
                      <div className="point-date text-monospace">01</div>
                      <div className="point-month text-monospace">mag</div>
                    </div>
                    <div className="point-list-content">
                      <Card teaser noWrapper className="shadow rounded">
                        <CardBody>
                          <CardTitle tag="h5">09:00 - Inizio evento</CardTitle>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                  <div className="point-list">
                    <div className="point-list-aside point-list-warning">
                      <div className="point-date text-monospace">04</div>
                      <div className="point-month text-monospace">mag</div>
                    </div>
                    <div className="point-list-content">
                      <Card teaser noWrapper className="shadow rounded">
                        <CardBody>
                          <CardTitle tag="h5">18:00 - Fine evento</CardTitle>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>
                <p className="text-serif">
                  Per informazioni sul programma dettagliato degli appuntamenti
                  religiosi e civili, consultare il programma nella sezione
                  documenti.
                </p>
                <div className="mt-3">
                  <Button outline color="primary" className="btn-icon" tag="a">
                    <Icon color="primary" icon="it-plus-circle" />
                    <span>Aggiungi al calendario</span>
                  </Button>
                </div>
              </article>
              <article
                id="costi"
                className="it-page-section anchor-offset mt-5">
                <h4>Costi</h4>
                <Card noWrapper className="no-after border-left mt-3">
                  <CardBody>
                    <CardCategory>Tribuna 1 e 4</CardCategory>
                    <CardTitle tag="h5" className="big-heading">
                      € 30
                    </CardTitle>
                    <p className="mt-4">
                      Tribune coperte site nella via Roma lato Palazzo Vivanet
                      (tribuna n. 1) e nella via Roma fronte palazzo Civico
                      (tribuna n. 4), per circa 770 posti a sedere.
                    </p>
                  </CardBody>
                </Card>
                <Card noWrapper className="no-after border-left mt-3">
                  <CardBody>
                    <CardCategory>Tribuna 3</CardCategory>
                    <CardTitle tag="h5" className="big-heading">
                      € 30
                    </CardTitle>
                    <p className="mt-4">
                      Tribuna coperta con la pedana riservata alle persone con
                      disabilità motorie sita nella via Roma fronte Palazzo
                      Vivanet, per circa 190 posti a sedere, di cui circa 30
                      posti nella pedana anzi detta. L’accesso sarà consentito
                      con unico biglietto alla persona con disabilità motoria e
                      al proprio accompagnatore. Saranno pertanto venduti circa
                      30 titoli di ingresso per i soggetti con disabilità
                      motorie, con i quali potranno accedere altrettanti
                      accompagnatori e circa 130 biglietti ordinari.
                    </p>
                  </CardBody>
                </Card>
                <Card noWrapper className="no-after border-left mt-3">
                  <CardBody>
                    <CardCategory>Tribuna 5</CardCategory>
                    <CardTitle tag="h5" className="big-heading">
                      € 25
                    </CardTitle>
                    <p className="mt-4">
                      Tribuna coperta fronte largo Carlo Felice, dislocata
                      nell&#39;incrocio, nello spazio compreso tra i due
                      semafori della via Roma, per circa 400 posti a sedere.
                    </p>
                  </CardBody>
                </Card>
                <Card noWrapper className="no-after border-left mt-3">
                  <CardBody>
                    <CardCategory>Tribuna 2</CardCategory>
                    <CardTitle tag="h5" className="big-heading">
                      € 15
                    </CardTitle>
                    <p className="mt-4">
                      Tribuna coperta dislocata nella piazza Matteotti,
                      antistante la Stazione Ferroviaria, per circa 370 posti a
                      sedere.
                    </p>
                  </CardBody>
                </Card>
              </article>
              <article
                id="documenti"
                className="it-page-section anchor-offset mt-5">
                <h4>Documenti</h4>
                <Card teaser noWrapper className="mt-3 shadow rounded">
                  <Icon icon="it-clip" />
                  <CardBody>
                    <CardTitle tag="h5">
                      <a href="#">Locandina Sant&#39;Efisio 2019</a>
                    </CardTitle>
                  </CardBody>
                </Card>
              </article>
              <article
                id="contatti"
                className="it-page-section anchor-offset mt-5">
                <h4>Contatti</h4>
                <Card teaser noWrapper className="mt-3 shadow rounded">
                  <Icon icon="it-telephone" />
                  <CardBody>
                    <CardTitle tag="h5">
                      Arciconfraternita del Gonfalone sotto l’invocazione di
                      Sant&#39;Efisio martire
                    </CardTitle>
                    <CardText tag="div">
                      <p>Via Sant&#39;Efisio, 14 - 09124</p>
                      <p className="mt-3">T +39 070 668632</p>
                      <p>
                        <a href="#">www.festadisantelfisio.com</a>
                      </p>
                      <p>
                        <a href="#">arcisantefisio@tiscali.it</a>
                      </p>
                    </CardText>
                  </CardBody>
                </Card>
                <h5 className="mt-4">Con il supporto di:</h5>
                <Card teaser noWrapper className="mt-3 shadow rounded">
                  <Icon icon="it-telephone" />
                  <CardBody>
                    <CardTitle tag="h5">
                      Ufficio delle Attività Produttive
                    </CardTitle>
                    <CardText tag="div">
                      <p>Via Sant&#39;Efisio, 14 - 09124</p>
                      <p>Piazza Alcide De Gasperi, 2</p>
                      <p className="mt-3">T +39 070 6776430</p>
                      <p>
                        <a href="#">produttive@comune.cagliari.it</a>
                      </p>
                    </CardText>
                  </CardBody>
                </Card>
              </article>
              <article
                id="appuntamenti"
                className="it-page-section anchor-offset mt-5">
                <h4>Appuntamenti</h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {[
                    'Canti di donne',
                    "Il ballo dell'isola in festa",
                    "La coralità sarda per Sant'Efisio"
                  ].map(event => {
                    return (
                      <Card
                        key={event}
                        teaser
                        noWrapper
                        className="card-flex shadow rounded">
                        <CardBody className="p-4">
                          <CardTitle tag="h5" className="card-title-icon">
                            <Icon icon="it-calendar" />
                            <span className="text-uppercase">Eventi</span>
                          </CardTitle>
                          <CardText tag="div">
                            <p className="text-uppercase">Cagliari</p>
                            <div className="pt-4 pb-3">
                              <a href="">
                                <h6 className="font-weight-semibold">
                                  {event}
                                </h6>
                              </a>
                            </div>
                          </CardText>
                        </CardBody>
                        <div className="card-image card-image-rounded">
                          <div className="card-date text-center rounded shadow">
                            <div className="font-weight-bold">30</div>
                            <div className="font-weight-semibold">Apr</div>
                          </div>
                          <img
                            src="https://picsum.photos/200/300"
                            alt="Immagine di esempio"
                          />
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </article>
              <article
                id="ulteriori-informazioni"
                className="it-page-section anchor-offset mt-5">
                <h4 className="mb-3">Ulteriori informazioni</h4>
                <strong>Patrocinato da:</strong>
                <LinkList>
                  <LinkListItem tag="a" className="px-0" href="#">
                    <span>Regione Autonome della Sardegna</span>
                  </LinkListItem>
                </LinkList>
                <strong>Sponsor:</strong>
                <LinkList>
                  {[
                    'Privincia di Cagliari',
                    'Sogaer - Aeroporto di Cagliari',
                    'Autorità Portuale di Cagliari',
                    'ARST',
                    'CTM Cagliari',
                    'Trenitalia',
                    'Camera di Commercio di Cagliari'
                  ].map(label => {
                    return (
                      <LinkListItem
                        tag="a"
                        className="px-0"
                        key={label}
                        href="#">
                        <span>{label}</span>
                      </LinkListItem>
                    )
                  })}
                </LinkList>
                <div className="mt-5">
                  <strong>Recensione:</strong>
                  <div className="rating-list-wrapper my-4">
                    <div className="rating-list">
                      <div className="rating-list-aside rating-list-warning">
                        <div className="rating-value font-weight-semibold">
                          4
                        </div>
                        <div className="rating-total font-weight-semibold">
                          su 5
                        </div>
                      </div>
                      <div className="rating-list-content">
                        <div className="rating-list-row">
                          <div className="rating-list-stars">
                            <div className="rating rating-read-only">
                              <Icon icon="it-star-full" color="warning" />
                              <Icon icon="it-star-full" color="warning" />
                              <Icon icon="it-star-full" color="warning" />
                              <Icon icon="it-star-full" color="warning" />
                              <Icon icon="it-star-full" color="warning" />
                            </div>
                            <div className="rating rating-read-only">
                              <Icon icon="it-star-full" color="warning" />
                              <Icon icon="it-star-full" color="warning" />
                              <Icon icon="it-star-full" color="warning" />
                              <Icon icon="it-star-full" color="warning" />
                            </div>
                            <div className="rating rating-read-only">
                              <Icon icon="it-star-full" color="warning" />
                              <Icon icon="it-star-full" color="warning" />
                              <Icon icon="it-star-full" color="warning" />
                            </div>
                            <div className="rating rating-read-only">
                              <Icon icon="it-star-full" color="warning" />
                              <Icon icon="it-star-full" color="warning" />
                            </div>
                            <div className="rating rating-read-only">
                              <Icon icon="it-star-full" color="warning" />
                            </div>
                          </div>
                          <div className="rating-list-progress">
                            {[60, 50, 40, 30, 20].map(value => (
                              <Progress
                                key={value}
                                value={value}
                                color="warning"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-5">
                    <FormGroup
                      cssModule={{ 'form-group': 'rating' }}
                      tag="fieldset">
                      <Input
                        type="radio"
                        id="star5a"
                        name="ratingA"
                        value="5"
                        cssModule={{ 'form-control': ' ' }}
                      />
                      <Label className="full" for="star5a">
                        <Icon icon="it-star-full" size="sm" />
                        <span className="sr-only">Valuta 5 stelle su 5</span>
                      </Label>
                      <Input
                        type="radio"
                        id="star4a"
                        name="ratingA"
                        value="4"
                        cssModule={{ 'form-control': ' ' }}
                      />
                      <Label className="full" for="star4a">
                        <Icon icon="it-star-full" size="sm" />
                        <span className="sr-only">Valuta 4 stelle su 5</span>
                      </Label>
                      <Input
                        type="radio"
                        id="star3a"
                        name="ratingA"
                        value="3"
                        cssModule={{ 'form-control': ' ' }}
                      />
                      <Label className="full" for="star3a">
                        <Icon icon="it-star-full" size="sm" />
                        <span className="sr-only">Valuta 3 stelle su 5</span>
                      </Label>
                      <Input
                        type="radio"
                        id="star2a"
                        name="ratingA"
                        value="2"
                        cssModule={{ 'form-control': ' ' }}
                      />
                      <Label className="full" for="star2a">
                        <Icon icon="it-star-full" size="sm" />
                        <span className="sr-only">Valuta 2 stelle su 5</span>
                      </Label>
                      <Input
                        type="radio"
                        id="star1a"
                        name="ratingA"
                        value="1"
                        cssModule={{ 'form-control': ' ' }}
                      />
                      <Label className="full" for="star1a">
                        <Icon icon="it-star-full" size="sm" />
                        <span className="sr-only">Valuta 1 stelle su 5</span>
                      </Label>
                    </FormGroup>
                    <div className="ml-3">
                      <a href="#" className="btn btn-outline-primary btn-sm">
                        <span>Invia valutazione</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="callout">
                    <div className="callout-title">
                      <Icon icon="it-info-circle" />
                    </div>
                    <p>
                      Per ulteriori informazioni contattare{' '}
                      <a href="">santefisio@comune.cagliari.it</a>
                    </p>
                    <h6>
                      <a href="#">Ufficio Sant&#39;Elfisio</a>
                    </h6>
                  </div>
                </div>
              </article>
              <article
                id="ultimo-aggiornamento"
                className="it-page-section anchor-offset mt-5">
                <p className="text-serif">Ultimo aggiornamento</p>
                <h6>
                  <strong>10/06/2019, 16:00</strong>
                </h6>
                <small>
                  <a href="#">Consulta versioni precedenti</a>
                </small>
              </article>
            </Col>
          </Row>
        </Container>
        <Container tag="section" id="contenuti-correlati">
          <div className="section section-muted section-inset-shadow">
            <div className="section-content">
              <Container>
                <Row>
                  <Col>
                    <h3 className="text-center">Contenuti correlati</h3>
                  </Col>
                </Row>
                <Row className="mt-lg-4">
                  <Col>
                    <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-4">
                      <Card
                        teaser
                        noWrapper
                        className="card-column shadow my-3 rounded">
                        <CardHeader>
                          <Icon icon="it-pa" />
                          <CardTitle tag="h5">Amministrazione</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <LinkList className="mt-3">
                            <LinkListItem tag="a">
                              <span>Area servizi civici</span>
                            </LinkListItem>
                          </LinkList>
                        </CardBody>
                      </Card>
                      <Card
                        teaser
                        noWrapper
                        className="card-column shadow my-3 rounded">
                        <CardHeader>
                          <Icon icon="it-settings" />
                          <CardTitle tag="h5">Servizi</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <LinkList className="mt-3">
                            <LinkListItem tag="a">
                              <span>Pagamento retta scolastica</span>
                            </LinkListItem>
                            <LinkListItem tag="a">
                              <span>Servizio di trasporto scolastico</span>
                            </LinkListItem>
                          </LinkList>
                        </CardBody>
                      </Card>
                      <Card
                        teaser
                        noWrapper
                        className="card-column shadow my-3 rounded">
                        <CardHeader>
                          <Icon icon="it-file" />
                          <CardTitle tag="h5">Documenti</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <LinkList className="mt-3">
                            <LinkListItem tag="a">
                              <span>Attestazione ISEE</span>
                            </LinkListItem>
                            <LinkListItem tag="a">
                              <span>
                                Carta dei servizi educativi all&#39;infanzia
                              </span>
                            </LinkListItem>
                          </LinkList>
                        </CardBody>
                      </Card>
                      <Card
                        teaser
                        noWrapper
                        className="card-column shadow my-3 rounded">
                        <CardHeader>
                          <Icon icon="it-calendar" />
                          <CardTitle tag="h5">Notizie</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <LinkList className="mt-3">
                            {Array.from({ length: 4 })
                              .fill('Lorem ipsum dolor sit amet')
                              .map((item, i) => {
                                return (
                                  <LinkListItem tag="a" key={`${item}-${i}`}>
                                    <span>{item}</span>
                                  </LinkListItem>
                                )
                              })}
                          </LinkList>
                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Container>
      </main>
      <Footer townName={townName} townTagLine={townTagLine} />
    </>
  )
}

export default Evento
