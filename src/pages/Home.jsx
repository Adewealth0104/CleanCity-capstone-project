import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import FactGenerator from "../components/FactGenerator";
import wasteBag from "../assets/images/waste-bag.png";

function Home() {
  return (
    <>
    <section className="hero">
  <Container>
    <div className="hero-copy">
      <span className="eyebrow text-white-50">
        A cleaner habit, made visible
      </span>

      <h1 className="display-title mt-3">
        Waste less.<br />
        Notice more.
      </h1>

      <p className="lead mt-4">
        CleanCity+ makes everyday recycling easier to track and understand,
        helping users see their progress and build better habits over time.
      </p>

      <div className="d-flex flex-wrap gap-2 mt-4">
        <Button as={Link} to="/tracker" className="btn-brand">
          Start tracking
        </Button>

        <Button
          as={Link}
          to="/waste-categories"
          variant="outline-light"
          className="rounded-pill px-4"
        >
          Learn about waste
        </Button>
      </div>
    </div>

    <div className="hero-image-wrap">
      <img
        src={wasteBag}
        alt="Reusable bag with recyclable waste"
        className="hero-waste-image"
      />
    </div>
  </Container>
</section>

      <section className="page-wrap">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <div className="soft-card p-4 p-lg-5 h-100">
                <span className="eyebrow">The idea</span>

                <h2 className="section-title mt-2">
                  Make recycling easier to understand and track.
                </h2>

                <p className="muted mt-3 mb-0">
                  CleanCity+ lets users explore different waste categories,
                  record their recycling activities, view their progress
                  through charts, and make personal recycling pledges.
                </p>
              </div>
            </Col>

            <Col lg={5}>
              <FactGenerator />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pb-5">
        <Container>
          <Row className="g-4">
            {[
              [
                "01",
                "Learn",
                "Understand five everyday waste streams and the choices behind responsible disposal.",
              ],
              [
                "02",
                "Track",
                "Log recycled quantities and use search, sorting and charts to make progress visible.",
              ],
              [
                "03",
                "Pledge",
                "Write a practical promise that turns good intention into a habit you can remember.",
              ],
            ].map(([number, title, text]) => (
              <Col md={4} key={number}>
                <Card className="soft-card border-0 h-100">
                  <Card.Body className="p-4">
                    <span className="eyebrow">{number}</span>

                    <h3 className="h4 fw-bold mt-2">
                      {title}
                    </h3>

                    <p className="muted mb-0">
                      {text}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;