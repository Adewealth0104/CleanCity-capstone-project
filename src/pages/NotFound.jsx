import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

function NotFound() {
  return (
    <div className="page-wrap">
      <Container className="text-center">
        <span className="eyebrow">404</span>
        <h1 className="section-title mt-2">This path has been recycled.</h1>
        <p className="muted">The page you were looking for does not exist.</p>
        <Button as={Link} to="/" className="btn-brand-dark mt-2">Back home</Button>
      </Container>
    </div>
  );
}

export default NotFound;
