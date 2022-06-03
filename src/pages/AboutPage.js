import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card className="about">
      <h1>About This Project</h1>
      <p>This is a React app to leave feedback for a product or service</p>
      <p>
        <Link to={{ pathname: "/" }}>Back To Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
