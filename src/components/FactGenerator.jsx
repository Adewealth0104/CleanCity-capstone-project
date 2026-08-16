import { useState } from "react";
import { Button } from "react-bootstrap";
import facts from "../data/facts";

function FactGenerator() {
  const [currentFact, setCurrentFact] = useState(facts[0]);

  const generateFact = () => {
    if (facts.length < 2) return;
    let index;
    do {
      index = Math.floor(Math.random() * facts.length);
    } while (facts[index] === currentFact);
    setCurrentFact(facts[index]);
  };

  return (
    <div className="soft-card fact-card">
      <div>
        <span className="pill">Did you know?</span>
        <p className="fs-4 fw-semibold mt-4 mb-0">{currentFact}</p>
      </div>
      <div className="mt-4">
        <Button className="btn-brand-dark" onClick={generateFact}>
          Show another fact
        </Button>
      </div>
    </div>
  );
}

export default FactGenerator;
