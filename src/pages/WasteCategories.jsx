import { Accordion, Col, Container, Row } from "react-bootstrap";
import wasteCategories from "../data/wasteCategories";

function WasteCategories() {
  return (
    <div className="page-wrap">
      <Container>
        <div className="mb-5">
          <span className="eyebrow">Know your waste</span>
          <h1 className="section-title mt-2">Five materials. Better decisions.</h1>
          <p className="muted mt-3 col-lg-7">
            Waste is easier to manage when we know what we are holding.
            Explore the categories below for practical, everyday guidance.
          </p>
        </div>

        <Row className="g-4">
          <Col lg={8}>
            <Accordion>
              {wasteCategories.map((category) => (
                <Accordion.Item eventKey={String(category.id)} key={category.id}>
                  <Accordion.Header>{category.name}</Accordion.Header>
                  <Accordion.Body>
                    <p className="fw-semibold">{category.short}</p>
                    <p className="muted">{category.description}</p>
                    <h3 className="h6 fw-bold mt-4">Practical tips</h3>
                    <ul className="mb-0">
                      {category.tips.map((tip) => <li key={tip} className="mb-2">{tip}</li>)}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col lg={4}>
            <div className="soft-card p-4 h-100">
              <span className="eyebrow">A useful rule</span>
              <h2 className="h4 fw-bold mt-2">Pause before you bin it.</h2>
              <p className="muted">
                Ask three questions: Can I reduce it? Can I reuse it?
                If not, can I separate it for responsible recovery?
              </p>
              <div className="p-3 rounded-4 mt-4" style={{background: "var(--sand)"}}>
                <strong>Remember:</strong>
                <p className="mb-0 mt-1 small">Local collection rules can differ, so use these tips as a guide and check your area's instructions where necessary.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WasteCategories;
