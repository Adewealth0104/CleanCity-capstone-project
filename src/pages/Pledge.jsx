import { Col, Container, Row } from "react-bootstrap";
import PledgeForm from "../components/PledgeForm";
import PledgeList from "../components/PledgeList";
import usePledges from "../hooks/usePledges";

function Pledge() {
  const { pledges, addPledge, pledgeCount } = usePledges();

  return (
    <div className="page-wrap">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-5">
          <div>
            <span className="eyebrow">A promise worth keeping</span>
            <h1 className="section-title mt-2">What will you change?</h1>
            <p className="muted mt-3 mb-0 col-lg-8">
              Start with something realistic. You do not have to be perfect. Choose one action you can keep doing.
            </p>
          </div>
          <div className="soft-card stat-card align-self-start">
            <div className="stat-value">{pledgeCount}</div>
            <div className="stat-label">pledges made</div>
          </div>
        </div>

        <Row className="g-4">
          <Col lg={5}>
            <PledgeForm onSubmit={addPledge} />
          </Col>
          <Col lg={7}>
            <PledgeList pledges={pledges} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Pledge;
