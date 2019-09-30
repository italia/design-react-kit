import React, { Component } from 'react'

import { boolean, select, text } from '@storybook/addon-knobs/react'
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardCategory,
  CardReadMore,
  Container,
  Collapse,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Icon,
  Row,
  Col,
  LinkListItem,
  LinkList,
  Header,
  Headers,
  HeaderContent,
  HeaderSearch,
  HeaderRightZone,
  HeaderSocialsZone,
  HeaderToggler,
  Nav,
  NavItem,
  NavLink,
  HeaderBrand,
  UncontrolledDropdown
} from '../../../src'

// eslint rule has to be disable for few lines here as Storybook addons will go in error
// if PropTypes are declared in these components
export class SlimHeader extends Component {
  render() {
    const regionName = text('Regione', 'Nome della Regione')
    return (
      // eslint-disable-next-line react/prop-types
      <Header type="slim" theme={this.props.theme}>
        <HeaderContent>
          <HeaderBrand>{regionName}</HeaderBrand>
          <HeaderRightZone>
            <UncontrolledDropdown nav tag="div">
              <DropdownToggle nav caret>
                ITA
                <Icon icon="it-expand" />
              </DropdownToggle>
              <DropdownMenu>
                <Row>
                  <Col size="12">
                    <LinkList>
                      <LinkListItem tag={DropdownItem} href="#">
                        <span>ITA</span>
                      </LinkListItem>
                      <LinkListItem tag={DropdownItem} href="#">
                        <span>ENG</span>
                      </LinkListItem>
                    </LinkList>
                  </Col>
                </Row>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button color="primary" size="full" className="btn-icon" href="#">
              <span className="rounded-icon">
                <Icon color="primary" icon="it-user" />
              </span>
              <span className="d-none d-lg-block">
                Accedi all&#39;area personale
              </span>
            </Button>
          </HeaderRightZone>
        </HeaderContent>
      </Header>
    )
  }
}

export class CenterHeader extends Component {
  render() {
    return (
      // eslint-disable-next-line react/prop-types
      <Header type="center" theme={this.props.theme}>
        <HeaderContent>
          <HeaderBrand iconName="it-code-circle">
            {/* eslint-disable-next-line react/prop-types */}
            <h2>{this.props.townName}</h2>
            {/* eslint-disable-next-line react/prop-types */}
            <h3>{this.props.townTagLine}</h3>
          </HeaderBrand>
          <HeaderRightZone>
            <HeaderSocialsZone label="Seguici su">
              <Nav inHeader>
                <NavItem>
                  <NavLink href="#" aria-label="Facebook" target="_blank">
                    <Icon icon="it-facebook" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" aria-label="Github" target="_blank">
                    <Icon icon="it-github" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" aria-label="Twitter" target="_blank">
                    <Icon icon="it-twitter" />
                  </NavLink>
                </NavItem>
              </Nav>
            </HeaderSocialsZone>
            <HeaderSearch label="Cerca" iconName="it-search" />
          </HeaderRightZone>
        </HeaderContent>
      </Header>
    )
  }
}

export class NavHeader extends Component {
  state = {
    collapsed: false
  }

  render() {
    return (
      // eslint-disable-next-line react/prop-types
      <Header type="navbar" theme={this.props.theme}>
        <HeaderContent expand="lg" megamenu>
          <HeaderToggler
            onClick={() => this.setState({ collapsed: !this.state.collapsed })}
            aria-controls="nav1"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <Icon icon="it-burger" />
          </HeaderToggler>
          <Collapse
            isOpen={this.state.collapsed}
            navbar
            header
            onOverlayClick={() =>
              this.setState({ collapsed: !this.state.collapsed })
            }>
            <div className="menu-wrapper">
              <Nav navbar>
                <NavItem>
                  <NavLink href="#">
                    <span>Amministrazione </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Novità</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Servizi</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Documenti e Dati</NavLink>
                </NavItem>
              </Nav>
              <Nav navbar class="navbar-secondary">
                <NavItem>
                  <NavLink href="#">
                    <span>Argomento 1</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <span>Argomento 2</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <span className="font-weight-bold">
                      Tutti gli argomenti...
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Collapse>
        </HeaderContent>
      </Header>
    )
  }
}

const Homepage = () => {
  const notification = boolean('Mostra notifica', true)
  const theme = select(
    'Tema',
    { default: '', light: 'light', dark: 'dark' },
    ''
  )

  const townName = text('Comune', 'Nome del Comune')
  const townTagLine = text('Motto Comune', 'Uno dei tanti Comuni d Italia')
  return (
    <>
      <Headers>
        <SlimHeader theme={theme} />
        <div className="it-nav-wrapper">
          <CenterHeader
            theme={theme}
            townName={townName}
            townTagLine={townTagLine}
          />
          <NavHeader theme={theme} />
        </div>
      </Headers>
      <section id="head-section">
        <Container>
          <Row>
            <Col lg={{ size: 6, offset: 1, order: 2 }}>
              <img
                src="https://picsum.photos/800/600"
                title="img title"
                alt="imagealt"
                className="img-fluid"
              />
            </Col>
            <Col lg={{ size: 5, order: 1 }}>
              <Card>
                <CardBody className="pb-5">
                  <CardCategory date="18 mag 2018" iconName="it-calendar">
                    Notizie
                  </CardCategory>
                  <CardTitle tag="h4">
                    Parte l&#39;estate con oltre 300 eventi in centro e nei
                    quartieri, tutti gli eventi previsti
                  </CardTitle>
                  <CardText>
                    Inaugurazione lunedì 2 luglio con il concerto gratuito in
                    piazza XX Settembre degli Sweet Soul Revue. Sul palco 20
                    musicisti da tutto il mondo.
                  </CardText>
                  <div className="chip chip-simple chip-primary">
                    <a href="#" className="chip-label">
                      Estate in città
                    </a>
                  </div>
                  <CardReadMore
                    text="Tutte le novità"
                    className="pb-3"
                    href="#"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="calendario">
        <div className="section section-muted pb-5 pt-0">
          <Container>
            <Row>
              <div className="card-wrapper card-teaser-wrapper card-overlapping card-teaser-wrapper-equal card-teaser-block-3">
                <Card
                  teaser
                  noWrapper
                  className="card-teaser-image card-flex no-after rounded shadow">
                  <div className="card-image-wrapper with-read-more pb-5">
                    <CardBody className="p-4">
                      <CardCategory>
                        <Icon icon="it-pa" />
                        <a className="category" href="#">
                          Giunta e consiglio
                        </a>
                      </CardCategory>
                      <CardTitle className="font-weight-semibold">
                        Mario Rossi
                      </CardTitle>
                      <CardText className="card-text">
                        Sindaco della città
                      </CardText>
                    </CardBody>
                    <div className="card-image card-image-rounded pb-5">
                      <CardImg
                        src="https://picsum.photos/150/200"
                        alt="Immagine di esempio"
                      />
                    </div>
                  </div>
                  <CardReadMore
                    className="pl-4"
                    iconName="it-arrow-right"
                    text="Tutta l'amministrazione"
                    href="/design-comuni-prototipi/esempi/bootstrap-italia/template-amministrazione.html"
                  />
                </Card>
                <Card teaser noWrapper class="no-after rounded shadow">
                  <CardBody class="pb-5">
                    <CardCategory>
                      <Icon icon="it-pa" />
                      <a className="category" href="#">
                        Pagamenti
                      </a>
                    </CardCategory>
                    <CardTitle class="font-weight-semibold">
                      TARI - Tassa dei rifiuti
                    </CardTitle>
                    <CardText>
                      La TARI è in scadenza, controlla il tuo pagamento nella
                      tua area personale.
                    </CardText>
                  </CardBody>

                  <CardReadMore
                    iconName="it-arrow-right"
                    text="Tutti i servizi"
                    href="#"
                  />
                </Card>
                <Card noWrapper teaser class="no-after rounded shadow">
                  <CardBody class="pb-5">
                    <CardCategory>
                      <Icon icon="it-pa" />
                      <a className="category" href="#">
                        Bandi
                      </a>
                    </CardCategory>
                    <CardTitle class="font-weight-semibold">
                      Come partecipare ad un bando
                    </CardTitle>
                    <CardText>
                      Tutte le informazioni e i documenti necessari per
                      partecipare.
                    </CardText>
                  </CardBody>

                  <CardReadMore
                    iconName="it-arrow-right"
                    text="Tutti i documenti"
                    href="/design-comuni-prototipi/esempi/bootstrap-italia/template-documenti.html"
                  />
                </Card>
              </div>
            </Row>
            <Row className="row-title pt-5 pb-3">
              <h2>Calendario</h2>
              <div>
                <Button
                  color="secondary"
                  size="sm"
                  className="mt-1"
                  type="button">
                  Tutto
                </Button>
                <Button
                  color="secondary"
                  size="sm"
                  className="mt-1 btn-icon"
                  outline
                  type="button">
                  <Icon icon="it-pa" />
                  <span>Consigli comunali</span>
                </Button>
                <Button
                  color="secondary"
                  size="sm"
                  className="mt-1 btn-icon"
                  outline
                  type="button">
                  <Icon icon="it-calendar" />
                  <span>Eventi</span>
                </Button>
                <Button
                  color="secondary"
                  size="sm"
                  className="mt-1 btn-icon"
                  outline
                  type="button">
                  <Icon icon="it-settings" />
                  <span>Scadenze</span>
                </Button>
              </div>
            </Row>
            <Row className="row-calendar">
              <div className="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-calendar-wrapper">
                <div className="it-header-block">
                  <div className="it-header-block-title">
                    <h4 className="mb-0 text-center">Settembre 2019</h4>
                  </div>
                </div>
                <div className="it-carousel-all owl-carousel it-card-bg owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: 'translate3d(0px, 0px, 0px)',
                        transition: 'all 0s ease 0s',
                        width: '2664px'
                      }}>
                      <div
                        className="owl-item active"
                        style={{ width: '296px' }}>
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg">
                            <CardBody>
                              <CardTitle tag="h5">
                                15<span>lun</span>
                              </CardTitle>
                              <CardText>
                                <a href="#">Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: '296px' }}>
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg">
                            <CardBody>
                              <CardTitle tag="h5">
                                16<span>mar</span>
                              </CardTitle>
                              <CardText>
                                <a href="#">Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: '296px' }}>
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg">
                            <CardBody>
                              <CardTitle tag="h5">
                                17<span>mer</span>
                              </CardTitle>
                              <CardText>
                                <a href="#">Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: '296px' }}>
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg">
                            <CardBody>
                              <CardTitle tag="h5">
                                18<span>giov</span>
                              </CardTitle>
                              <CardText>
                                <a href="#">Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: '296px' }}>
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg">
                            <CardBody>
                              <h3 className="card-title mb-0">
                                19<span>ven</span>
                              </h3>
                              <CardText>
                                <a href="#">Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: '296px' }}>
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg">
                            <CardBody>
                              <CardTitle tag="h5">
                                20<span>sab</span>
                              </CardTitle>
                              <CardText>
                                <a href="#">Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: '296px' }}>
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg">
                            <CardBody>
                              <CardTitle tag="h5">
                                21<span>dom</span>
                              </CardTitle>
                              <CardText>
                                <a href="#">Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: '296px' }}>
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg">
                            <CardBody>
                              <CardTitle tag="h5">
                                22<span>lun</span>
                              </CardTitle>
                              <CardText>
                                <a href="#">Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: '296px' }}>
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg">
                            <CardBody>
                              <CardTitle tag="h5">
                                23<span>mar</span>
                              </CardTitle>
                              <CardText>
                                <a href="#">Saldo TASI</a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </CardText>
                              <CardText>
                                <a href="#">Seconda rata TARI</a>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
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
            </Row>
          </Container>
        </div>
      </section>
      <section id="evidenza">
        <div className="section section-background-header py-5">
          <Container>
            <Row>
              <h2 className="text-white">Argomenti in evidenza</h2>
            </Row>
            <div className="py-4">
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
                <Card teaser noWrapper className="no-after rounded shadow">
                  <CardBody className="pb-5">
                    <CardCategory>
                      <Icon icon="it-info-circle" />
                    </CardCategory>
                    <CardTitle tag="h3">Cantieri in città</CardTitle>
                    <CardText>
                      Informazioni sui principali cantieri stradali aperti o in
                      programmazione un città che comportano modifiche alla
                      circolazione stradale.
                    </CardText>
                    <CardText>Visita il sito:</CardText>
                    <a href="#">
                      <Card
                        teaser
                        noWrapper
                        className="card-bg-primary no-after mt-0">
                        <div className="avatar size-lg mr-3">
                          <img
                            src="https://picsum.photos/200/200"
                            alt="Immagine"
                          />
                        </div>
                        <CardBody>
                          <CardTitle tag="h5">Mobilità in Comune</CardTitle>
                          <CardText className="text-sans-serif">
                            Il sito del turismo del Comune e della Città
                            Metropolitana.
                          </CardText>
                        </CardBody>
                      </Card>
                    </a>
                  </CardBody>
                  <CardReadMore
                    iconName="it-arrow-right"
                    text="Esplora argomento"
                    href="#"
                  />
                </Card>
                <Card teaser noWrapper className="no-after rounded shadow">
                  <CardBody className="pb-5">
                    <CardCategory>
                      <Icon icon="it-clock" />
                    </CardCategory>
                    <CardTitle tag="h3">Estate in città</CardTitle>
                    <CardText>
                      Un ricco programma di appuntamenti: eventi culturali,
                      ricreativi, concerti, mostre, cinema, ed altro ancora in
                      diversi luoghi della città.
                    </CardText>

                    <LinkList className="mt-4">
                      <LinkListItem active className="icon-left">
                        <Icon color="primary" icon="it-calendar" />
                        <span>Eventi questo weekend</span>
                      </LinkListItem>
                      <LinkListItem className="icon-left">
                        <Icon color="primary" icon="it-calendar" />
                        <span>Cosa fare questa settimana</span>
                      </LinkListItem>
                      <LinkListItem className="icon-left">
                        <Icon color="primary" icon="it-calendar" />
                        <span>Agosto metropolitano</span>
                      </LinkListItem>
                      <LinkListItem className="icon-left">
                        <Icon color="primary" icon="it-calendar" />
                        <span>
                          Orari estivi metro e bus in vigore dal 9 giugno
                        </span>
                      </LinkListItem>
                    </LinkList>
                  </CardBody>
                  <CardReadMore
                    iconName="it-arrow-right"
                    text="Esplora l'argomento"
                    href="#"
                  />
                </Card>
                <Card teaser noWrapper className="no-after rounded shadow">
                  <CardBody className="pb-5">
                    <CardCategory>
                      <Icon icon="it-camera" />
                    </CardCategory>
                    <CardTitle>Sport</CardTitle>
                    <CardText>
                      Tutto quello che c&#39;è da sapere sulle strutture
                      sportive comunali a disposizione del pubblico e delle
                      Associazioni, le iniziative a sostegno dello sport e gli
                      eventi che coinvolgono la città.
                    </CardText>
                    <LinkList className="mt-4">
                      <LinkListItem active className="icon-left">
                        <Icon color="primary" icon="it-pa" />
                        <span>Tutte le strutture turistiche della città</span>
                      </LinkListItem>
                      <LinkListItem className="icon-left">
                        <Icon color="primary" icon="it-calendar" />
                        <span>
                          Da lunedì 3 settembre chiudono le vasche della piscina
                          comunale
                        </span>
                      </LinkListItem>
                      <LinkListItem className="icon-left">
                        <Icon color="primary" icon="it-calendar" />
                        <span>
                          Concessione contributi ad enti, associazioni, società
                          sportive
                        </span>
                      </LinkListItem>
                    </LinkList>
                  </CardBody>
                  <CardReadMore
                    iconName="it-arrow-right"
                    text="Esplora l'argomento"
                    href="#"
                  />
                </Card>
              </div>
            </div>
            <Row className="pt-5">
              <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
                <Row className="d-lg-inline-flex">
                  <Col lg={3}>
                    <h6 className="text-uppercase text-center">
                      Altri argomenti
                    </h6>
                  </Col>
                  <Col lg={9}>
                    <div className="chip chip-simple chip-primary">
                      <a href="#" className="chip-label">
                        Agevolazioni per la casa
                      </a>
                    </div>
                    <div className="chip chip-simple chip-primary">
                      <a href="#" className="chip-label">
                        Ambiente
                      </a>
                    </div>
                    <div className="chip chip-simple chip-primary">
                      <a href="#" className="chip-label">
                        Assistenza sociale
                      </a>
                    </div>
                    <div className="chip chip-simple chip-primary">
                      <a href="#" className="chip-label">
                        Costruire e ristrutturare
                      </a>
                    </div>
                    <div className="chip chip-simple chip-primary">
                      <a href="#" className="chip-label">
                        Famiglia
                      </a>
                    </div>
                    <div className="chip chip-simple chip-primary">
                      <a href="#" className="chip-label">
                        Immigrazione
                      </a>
                    </div>
                    <div className="chip chip-simple chip-primary">
                      <a href="#" className="chip-label">
                        Investire
                      </a>
                    </div>
                    <div className="chip chip-simple chip-primary">
                      <a href="#" className="chip-label">
                        Lavori pubblici
                      </a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <Button color="primary" className="mt-5">
                      Vedi tutti
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="pt-5">
              <h3>Siti tematici</h3>
            </Row>
            <div className="py-4">
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
                <Card teaser noWrapper className="card-bg-primary rounded">
                  <div className="avatar size-lg mr-3">
                    <img src="https://picsum.photos/200/200" alt="Immagine" />
                  </div>
                  <CardBody>
                    <CardTitle tag="h5">Mobilità in Comune</CardTitle>
                    <CardText className="text-sans-serif">
                      Il sito del turismo del Comune e della Città Metropolitana
                    </CardText>
                  </CardBody>
                </Card>
                <Card teaser noWrapper className="card-bg-warning rounded">
                  <div className="avatar size-lg mr-3">
                    <img src="https://picsum.photos/200/200" alt="Immagine" />
                  </div>
                  <CardBody>
                    <CardTitle tag="h5">Turismo</CardTitle>
                    <CardText className="text-sans-serif">
                      Il sito che offre informazioni sulle attività turistiche
                      attive in città
                    </CardText>
                  </CardBody>
                </Card>
                <Card teaser noWrapper className="card-bg-dark rounded">
                  <div className="avatar size-lg mr-3">
                    <img src="https://picsum.photos/200/200" alt="Immagine" />
                  </div>
                  <CardBody tag="h5">
                    <CardTitle>Musei Civici</CardTitle>
                    <CardText className="text-sans-serif">
                      Tutte le informazioni sui musei e gli eventi culturali
                      della città
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section id="novita">
        <div
          className="section section-background-header"
          style={{ backgroundImage: "url('https://picsum.photos/1200/400')" }}>
          <Container>
            <Row>
              <Col sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
                <form>
                  <div className="form-group mb-1">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <button type="submit" className="border-0 px-0">
                            <Icon icon="it-search" size="icon-sm" />
                          </button>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputText"
                      />
                      <label
                        htmlFor="exampleInputText"
                        style={{ width: 'auto' }}>
                        Cerca servizi, informazioni, persone
                      </label>
                    </div>
                  </div>
                </form>
                <Button color="primary" size="sm" href="#" className="mt-3">
                  Uffici comunali
                </Button>
                <Button color="primary" size="sm" href="#" className="mt-3">
                  Servizi demografici
                </Button>
                <Button color="primary" size="sm" href="#" className="mt-3">
                  SUAP
                </Button>
                <Button color="primary" size="sm" href="#" className="mt-3">
                  Sostegno alle famiglie
                </Button>
                <Button color="primary" size="sm" href="#" className="mt-3">
                  Segnalazioni
                </Button>
                <Button color="primary" size="sm" href="#" className="mt-3">
                  Dove lo butto?
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <footer className="it-footer">
        <div className="it-footer-main">
          <Container>
            <section>
              <Row className="clearfix">
                <Col sm={12}>
                  <div className="it-brand-wrapper">
                    <a href="#" className="">
                      <Icon icon="it-pa" />
                      <div className="it-brand-text">
                        <h2 className="no_toc">{townName}</h2>
                        <h3 className="no_toc d-none d-md-block">
                          {townTagLine}
                        </h3>
                      </div>
                    </a>
                  </div>
                </Col>
              </Row>
            </section>
            <section>
              <Row>
                <Col lg={3} md={3} sm={6} className="pb-2">
                  <h4>
                    <a href="#" title="Vai alla pagina: Amministrazione">
                      Amministrazione
                    </a>
                  </h4>
                  <div className="link-list-wrapper">
                    <ul className="footer-list link-list clearfix">
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Giunta e consiglio">
                          Giunta e consiglio
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Aree di competenza">
                          Aree di competenza
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Dipendenti">
                          Dipendenti
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Luoghi">
                          Luoghi
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Associazioni e società partecipate">
                          Associazioni e società partecipate
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={6} className="pb-2">
                  <h4>
                    <a href="#" title="Vai alla pagina: Servizi">
                      Servizi
                    </a>
                  </h4>
                  <div className="link-list-wrapper">
                    <ul className="footer-list link-list clearfix">
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Pagamenti">
                          Pagamenti
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Sostegno">
                          Sostegno
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Domande e iscrizioni">
                          Domande e iscrizioni
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Segnalazioni">
                          Segnalazioni
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Autorizzazioni e concessioni">
                          Autorizzazioni e concessioni
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Certificati e dichiarazioni">
                          Certificati e dichiarazioni
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={6} className="pb-2">
                  <h4>
                    <a href="#" title="Vai alla pagina: Novità">
                      Novità
                    </a>
                  </h4>
                  <div className="link-list-wrapper">
                    <ul className="footer-list link-list clearfix">
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Notizie">
                          Notizie
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Eventi">
                          Eventi
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Comunicati stampa">
                          Comunicati stampa
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={6}>
                  <h4>
                    <a href="#" title="Vai alla pagina: Documenti">
                      Documenti
                    </a>
                  </h4>
                  <div className="link-list-wrapper">
                    <ul className="footer-list link-list clearfix">
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Progetti e attività">
                          Progetti e attività
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Delibere, determine e ordinanze">
                          Delibere, determine e ordinanze
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Bandi">
                          Bandi
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Concorsi">
                          Concorsi
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Albo pretorio">
                          Albo pretorio
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </section>
            <section className="py-4 border-white border-top">
              <Row>
                <Col lg={3} md={3} className="pb-2">
                  <h4>
                    <a href="#" title="Vai alla pagina: Amministrazione">
                      Amministrazione trasparente
                    </a>
                  </h4>
                  <p>
                    I dati personali pubblicati sono riutilizzabili solo alle
                    condizioni previste dalla direttiva comunitaria 2003/98/CE e
                    dal d.lgs. 36/2006
                  </p>
                </Col>
                <Col lg={3} md={3} className="pb-2">
                  <h4>
                    <a href="#" title="Vai alla pagina: Contatti">
                      Contatti
                    </a>
                  </h4>
                  <p>
                    <strong>Nome del Comune</strong>
                    <br />
                    Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA:
                    000000000
                  </p>
                  <div className="link-list-wrapper">
                    <ul className="footer-list link-list clearfix">
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: Posta Elettronica Certificata">
                          Posta Elettronica Certificata
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="#"
                          title="Vai alla pagina: URP - Ufficio Relazioni con il Pubblico">
                          URP - Ufficio Relazioni con il Pubblico
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={3} className="pb-2">
                  <h4>
                    <a href="#" title="Vai alla pagina: Newsletter">
                      Newsletter
                    </a>
                  </h4>
                  <form action="#" className="form-newsletter" method="post">
                    <label
                      className="text-white font-weight-semibold active"
                      htmlFor="input-newsletter"
                      style={{ transition: 'none 0s ease 0s' }}>
                      Iscriviti per riceverla
                    </label>
                    <input
                      className="form-control"
                      id="input-newsletter"
                      name="input-newsletter"
                      placeholder="mail@example.com"
                      type="email"
                    />
                    <button className="btn btn-primary btn-icon" type="submit">
                      <Icon icon="it-mail" color="white" />
                      <span>Iscriviti</span>
                    </button>
                  </form>
                </Col>
                <Col lg={3} md={3} className="pb-2">
                  <h4>
                    <a href="#" title="Vai alla pagina: Seguici su">
                      Seguici su
                    </a>
                  </h4>
                  <ul className="list-inline text-left social">
                    <li className="list-inline-item">
                      <a className="p-2 text-white" href="#" target="_blank">
                        <Icon
                          icon="it-designers-italia"
                          color="white"
                          size="sm"
                          className="align-top"
                        />
                        <span className="sr-only">Designers Italia</span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="p-2 text-white" href="#" target="_blank">
                        <Icon
                          icon="it-twitter"
                          color="white"
                          size="sm"
                          className="align-top"
                        />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="p-2 text-white" href="#" target="_blank">
                        <Icon
                          icon="it-medium"
                          color="white"
                          size="sm"
                          className="align-top"
                        />
                        <span className="sr-only">Medium</span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="p-2 text-white" href="#" target="_blank">
                        <Icon
                          icon="it-behance"
                          color="white"
                          size="sm"
                          className="align-top"
                        />
                        <span className="sr-only">Behance</span>
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
        <div className="it-footer-small-prints clearfix">
          <Container>
            <h3 className="sr-only">Sezione Link Utili</h3>
            <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
              <li className="list-inline-item">
                <a href="#" title="Note Legali">
                  Media policy
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" title="Note Legali">
                  Note legali
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" title="Privacy-Cookies">
                  Privacy policy
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" title="Mappa del sito">
                  Mappa del sito
                </a>
              </li>
            </ul>
          </Container>
        </div>
      </footer>
      {notification && (
        <div
          className="notification dismissable with-icon"
          role="alert"
          id="notification-esempi"
          aria-labelledby="notification-esempi-title"
          style={{ display: 'block' }}>
          <h5 id="notification-esempi-title">
            <Icon icon="it-info-circle" /> Esempio di utilizzo
          </h5>
          <p>
            <a href="/design-comuni-prototipi/it/kit.html#template-html">
              Torna alla lista dei template
            </a>
          </p>
          <button type="button" className="btn notification-close">
            <Icon icon="it-close" />
            <span className="sr-only">
              Chiudi notifica: Titolo notification
            </span>
          </button>
        </div>
      )}
    </>
  )
}

export default Homepage
