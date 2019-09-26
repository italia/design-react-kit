import React from 'react';
import { Button, Container, Row, Card, CardBody, CardText, CardTitle, CardCategory, CardImg, CardReadMore, Icon } from '../../../src'

const Calendar = () => <Container>
    <Row>
        <div className="card-wrapper card-teaser-wrapper card-overlapping card-teaser-wrapper-equal card-teaser-block-3">
            <Card teaser noWrapper className="card-teaser-image card-flex no-after rounded shadow">
                <div className="card-image-wrapper with-read-more pb-5">
                    <CardBody className="p-4">
                        <CardCategory>
                            <Icon icon="it-pa" />
                            <a className="category" href="#">Giunta e consiglio</a>
                        </CardCategory>
                        <CardTitle className="font-weight-semibold">Mario Rossi</CardTitle>
                        <CardText className="card-text">Sindaco della città</CardText>
                    </CardBody>
                    <div className="card-image card-image-rounded pb-5">
                        <CardImg src="https://picsum.photos/150/200" alt="Immagine di esempio" />
                    </div>
                </div>
                <CardReadMore className="pl-4" iconName="it-arrow-right" text="Tutta l'amministrazione" href="/design-comuni-prototipi/esempi/bootstrap-italia/template-amministrazione.html" />
            </Card>
            <Card teaser noWrapper class="no-after rounded shadow">
                <CardBody class="pb-5">
                    <CardCategory>
                        <Icon icon="it-pa" />
                        <a className="category" href="#">Pagamenti</a>
                    </CardCategory>
                    <CardTitle class="font-weight-semibold">TARI - Tassa dei rifiuti</CardTitle>
                    <CardText>La TARI è in scadenza, controlla il tuo pagamento nella tua area personale.</CardText>
                </CardBody>

                <CardReadMore iconName="it-arrow-right" text="Tutti i servizi" href="#" />
            </Card>
            <Card noWrapper teaser class="no-after rounded shadow">
                <CardBody class="pb-5">
                    <CardCategory>
                        <Icon icon="it-pa" />
                        <a className="category" href="#">Bandi</a>
                    </CardCategory>
                    <CardTitle class="font-weight-semibold">Come partecipare ad un bando</CardTitle>
                    <CardText>Tutte le informazioni e i documenti necessari per partecipare.</CardText>
                </CardBody>

                <CardReadMore iconName="it-arrow-right" text="Tutti i documenti" href="/design-comuni-prototipi/esempi/bootstrap-italia/template-documenti.html" />
            </Card>
        </div>
    </Row>
    <Row className="row-title pt-5 pb-3">
        <h2>Calendario</h2>
        <div>
            <Button color="secondary" size="sm" className="mt-1" type="button">Tutto</Button>
            <Button color="secondary" size="sm" className="mt-1 btn-icon" outline type="button">
                <Icon icon="it-pa" /><span>Consigli comunali</span></Button>
            <Button color="secondary" size="sm" className="mt-1 btn-icon" outline type="button">
                <Icon icon="it-calendar" /><span>Eventi</span></Button>
            <Button color="secondary" size="sm" className="mt-1 btn-icon" outline type="button">
                <Icon icon="it-settings" /><span>Scadenze</span></Button>
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
                    <div className="owl-stage" style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s", width: "2664px" }}>
                        <div className="owl-item active" style={{ width: "296px" }}>
                            <div className="it-single-slide-wrapper">
                                <Card className="card-bg">
                                    <CardBody>
                                        <CardTitle tag="h5">15<span>lun</span></CardTitle>
                                        <CardText><a href="#">Saldo TASI</a></CardText>
                                        <CardText><a href="#">Concerto gratuito piazza XX Settembre</a></CardText>
                                        <CardText><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></CardText>
                                        <CardText><a href="#">Seconda rata TARI</a></CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: "296px" }}><div className="it-single-slide-wrapper">
                            <Card className="card-bg">
                                <CardBody>
                                    <CardTitle tag="h5">16<span>mar</span></CardTitle>
                                    <CardText><a href="#">Saldo TASI</a></CardText>
                                    <CardText><a href="#">Concerto gratuito piazza XX Settembre</a></CardText>
                                    <CardText><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></CardText>
                                    <CardText><a href="#">Seconda rata TARI</a></CardText>
                                </CardBody>
                            </Card>
                        </div>
                        </div><div className="owl-item active" style={{ width: "296px" }}>
                            <div className="it-single-slide-wrapper">
                                <Card className="card-bg">
                                    <CardBody>
                                        <CardTitle tag="h5">17<span>mer</span></CardTitle>
                                        <CardText><a href="#">Saldo TASI</a></CardText>
                                        <CardText><a href="#">Concerto gratuito piazza XX Settembre</a></CardText>
                                        <CardText><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></CardText>
                                        <CardText><a href="#">Seconda rata TARI</a></CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: "296px" }}>
                            <div className="it-single-slide-wrapper">
                                <Card className="card-bg">
                                    <CardBody>
                                        <CardTitle tag="h5">18<span>giov</span></CardTitle>
                                        <CardText><a href="#">Saldo TASI</a></CardText>
                                        <CardText><a href="#">Concerto gratuito piazza XX Settembre</a></CardText>
                                        <CardText><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></CardText>
                                        <CardText><a href="#">Seconda rata TARI</a></CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="owl-item" style={{ width: "296px" }}>
                            <div className="it-single-slide-wrapper">
                                <Card className="card-bg">
                                    <CardBody>
                                        <h3 className="card-title mb-0">19<span>ven</span></h3>
                                        <CardText><a href="#">Saldo TASI</a></CardText>
                                        <CardText><a href="#">Concerto gratuito piazza XX Settembre</a></CardText>
                                        <CardText><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></CardText>
                                        <CardText><a href="#">Seconda rata TARI</a></CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="owl-item" style={{ width: "296px" }}>
                            <div className="it-single-slide-wrapper">
                                <Card className="card-bg">
                                    <CardBody>
                                        <CardTitle tag="h5">20<span>sab</span></CardTitle>
                                        <CardText><a href="#">Saldo TASI</a></CardText>
                                        <CardText><a href="#">Concerto gratuito piazza XX Settembre</a></CardText>
                                        <CardText><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></CardText>
                                        <CardText><a href="#">Seconda rata TARI</a></CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="owl-item" style={{ width: "296px" }}>
                            <div className="it-single-slide-wrapper">
                                <Card className="card-bg">
                                    <CardBody>
                                        <CardTitle tag="h5">21<span>dom</span></CardTitle>
                                        <CardText><a href="#">Saldo TASI</a></CardText>
                                        <CardText><a href="#">Concerto gratuito piazza XX Settembre</a></CardText>
                                        <CardText><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></CardText>
                                        <CardText><a href="#">Seconda rata TARI</a></CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="owl-item" style={{ width: "296px" }}>
                            <div className="it-single-slide-wrapper">
                                <Card className="card-bg">
                                    <CardBody>
                                        <CardTitle tag="h5">22<span>lun</span></CardTitle>
                                        <CardText><a href="#">Saldo TASI</a></CardText>
                                        <CardText><a href="#">Concerto gratuito piazza XX Settembre</a></CardText>
                                        <CardText><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></CardText>
                                        <CardText><a href="#">Seconda rata TARI</a></CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="owl-item" style={{ width: "296px" }}>
                            <div className="it-single-slide-wrapper">
                                <Card className="card-bg">
                                    <CardBody>
                                        <CardTitle tag="h5">23<span>mar</span></CardTitle>
                                        <CardText><a href="#">Saldo TASI</a></CardText>
                                        <CardText><a href="#">Concerto gratuito piazza XX Settembre</a></CardText>
                                        <CardText><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></CardText>
                                        <CardText><a href="#">Seconda rata TARI</a></CardText>
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
                    <button role="button" className="owl-dot active" aria-labelledby="owl-dot-0"><span></span></button>
                    <button role="button" className="owl-dot" aria-labelledby="owl-dot-1"><span></span></button>
                    <button role="button" className="owl-dot" aria-labelledby="owl-dot-2"><span></span></button>
                </div>
            </div>
        </div>
    </Row>
</Container>

export default Calendar;