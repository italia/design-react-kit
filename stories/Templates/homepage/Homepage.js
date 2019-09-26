import React from 'react';

import { boolean } from '@storybook/addon-knobs/react'

import CompleteHeader from './Header';
import Footer from './Footer';
import Notification from './Notification'
import Calendar from './Calendar'
import { Button, Card, CardBody, CardTitle, CardText, CardCategory, CardReadMore, Container, Icon, Row, Col, LinkListItem, LinkList } from '../../../src'


const Homepage = () => {
    const notification = boolean('Mostra notifica', true);
    return (<>
        <CompleteHeader />
        <section id="head-section">
            <Container>
                <Row>
                    <Col lg={{ size: 6, offset: 1, order: 2 }} >
                        <img src="https://picsum.photos/800/600" title="img title" alt="imagealt" className="img-fluid" />
                    </Col>
                    <Col lg={{ size: 5, order: 1 }} >
                        <Card>
                            <CardBody className="pb-5">
                                <CardCategory date="18 mag 2018" iconName="it-calendar">
                                    Notizie
                                </CardCategory>
                                <CardTitle tag="h4">
                                Parte l&#39;estate con oltre 300 eventi in centro e nei quartieri, tutti gli eventi previsti
                                </CardTitle>
                                <CardText>
                                Inaugurazione lunedì 2 luglio con il concerto gratuito in piazza XX Settembre degli Sweet Soul Revue. Sul palco 20 musicisti da tutto il mondo.
                                </CardText>
                                <div className="chip chip-simple chip-primary">
                                    <a href="#" className="chip-label">Estate in città</a>
                                </div>
                                <CardReadMore text="Tutte le novità" className="pb-3" href="#"/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
        <section id="calendario">
            <div className="section section-muted pb-5 pt-0">
                <Calendar />
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
                                    <CardText>Informazioni sui principali cantieri stradali aperti o in programmazione un città che comportano modifiche alla circolazione stradale.</CardText>
                                    <CardText>Visita il sito:</CardText>
                                    <a href="#">
                                        <Card teaser noWrapper className="card-bg-primary no-after mt-0">
                                            <div className="avatar size-lg mr-3">
                                                <img src="https://picsum.photos/200/200" alt="Immagine" />
                                            </div>
                                            <CardBody>
                                                <CardTitle tag="h5">Mobilità in Comune</CardTitle>
                                                <CardText className="text-sans-serif">Il sito del turismo del Comune e della Città Metropolitana.</CardText>
                                            </CardBody>
                                        </Card>
                                    </a>
                                </CardBody>
                                <CardReadMore iconName="it-arrow-right" text="Esplora argomento" href="#" />
                            </Card>
                            <Card teaser noWrapper className="no-after rounded shadow">
                                <CardBody className="pb-5">
                                    <CardCategory>

                                        <Icon icon="it-clock" />
                                    </CardCategory>
                                    <CardTitle tag="h3">Estate in città</CardTitle>
                                    <CardText>Un ricco programma di appuntamenti: eventi culturali, ricreativi, concerti, mostre, cinema, ed altro ancora in diversi luoghi della città.</CardText>
                                    
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
                                                    <span>Orari estivi metro e bus in vigore dal 9 giugno</span>
                                                </LinkListItem>
                                        </LinkList>
                                </CardBody>
                                <CardReadMore iconName="it-arrow-right" text="Esplora l'argomento" href="#" />
                            </Card>
                            <Card teaser noWrapper className="no-after rounded shadow">
                                <CardBody className="pb-5">
                                    <CardCategory>
                                        <Icon icon="it-camera" />
                                    </CardCategory>
                                    <CardTitle>Sport</CardTitle>
                                    <CardText>Tutto quello che c&#39;è da sapere sulle strutture sportive comunali a disposizione del pubblico e delle Associazioni, le iniziative a sostegno dello sport e gli eventi che coinvolgono la città.</CardText>
                                    <LinkList className="mt-4">
                                            <LinkListItem active className="icon-left">
                                                    <Icon color="primary" icon="it-pa" />
                                                    <span>Tutte le strutture turistiche della città</span>
                                                </LinkListItem>
                                            <LinkListItem className="icon-left">
                                                    <Icon color="primary" icon="it-calendar" />
                                                    <span>Da lunedì 3 settembre chiudono le vasche della piscina comunale</span>
                                                </LinkListItem>
                                            <LinkListItem className="icon-left">
                                                    <Icon color="primary" icon="it-calendar" />
                                                    <span>Concessione contributi ad enti, associazioni, società sportive</span>
                                                </LinkListItem>
                                        </LinkList>
                                </CardBody>
                                <CardReadMore iconName="it-arrow-right" text="Esplora l'argomento" href="#" />
                            </Card>
                        </div>
                    </div>
                    <Row className="pt-5">
                        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
                            <Row className="d-lg-inline-flex">
                                <Col lg={3}>
                                    <h6 className="text-uppercase text-center">Altri argomenti</h6>
                                </Col>
                                <Col lg={9}>
                                    <div className="chip chip-simple chip-primary">
                                        <a href="#" className="chip-label">Agevolazioni per la casa</a>
                                    </div>
                                    <div className="chip chip-simple chip-primary">
                                        <a href="#" className="chip-label">Ambiente</a>
                                    </div>
                                    <div className="chip chip-simple chip-primary">
                                        <a href="#" className="chip-label">Assistenza sociale</a>
                                    </div>
                                    <div className="chip chip-simple chip-primary">
                                        <a href="#" className="chip-label">Costruire e ristrutturare</a>
                                    </div>
                                    <div className="chip chip-simple chip-primary">
                                        <a href="#" className="chip-label">Famiglia</a>
                                    </div>
                                    <div className="chip chip-simple chip-primary">
                                        <a href="#" className="chip-label">Immigrazione</a>
                                    </div>
                                    <div className="chip chip-simple chip-primary">
                                        <a href="#" className="chip-label">Investire</a>
                                    </div>
                                    <div className="chip chip-simple chip-primary">
                                        <a href="#" className="chip-label">Lavori pubblici</a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center">
                                    <Button color="primary" className="mt-5">Vedi tutti</Button>
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
                                    <CardTitle tag="h5">
                                        Mobilità in Comune
                                    </CardTitle>
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
                                    <CardTitle tag="h5">
                                        Turismo
                                    </CardTitle>
                                    <CardText className="text-sans-serif">
                                        Il sito che offre informazioni sulle attività turistiche attive in città
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card teaser noWrapper className="card-bg-dark rounded">
                                <div className="avatar size-lg mr-3">
                                    <img src="https://picsum.photos/200/200" alt="Immagine" />
                                </div>
                                <CardBody tag="h5">
                                    <CardTitle>
                                        Musei Civici
                                    </CardTitle>
                                    <CardText className="text-sans-serif">
                                        Tutte le informazioni sui musei e gli eventi culturali della città
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        <section id="novita">
            <div className="section section-background-header" style={{ backgroundImage: "url('https://picsum.photos/1200/400')" }}>
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
                                        <input type="text" className="form-control" id="exampleInputText" />
                                        <label htmlFor="exampleInputText" style={{ width: 'auto' }}>Cerca servizi, informazioni, persone</label>
                                    </div>
                                </div>
                            </form>
                            <Button color="primary" size="sm" href="#" className="mt-3">Uffici comunali</Button>
                            <Button color="primary" size="sm" href="#" className="mt-3">Servizi demografici</Button>
                            <Button color="primary" size="sm" href="#" className="mt-3">SUAP</Button>
                            <Button color="primary" size="sm" href="#" className="mt-3">Sostegno alle famiglie</Button>
                            <Button color="primary" size="sm" href="#" className="mt-3">Segnalazioni</Button>
                            <Button color="primary" size="sm" href="#" className="mt-3">Dove lo butto?</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
        <Footer />
        {notification && <Notification />}
    </>
    )
}

export default Homepage