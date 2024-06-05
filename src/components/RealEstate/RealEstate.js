import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import buttonfalls from "../../Assets/Projects/buttonfalls.png";
import mountainhome from "../../Assets/Projects/mountainhome.jpg";
import townhome from "../../Assets/Projects/townhome.jpg";

function RealEstate() {
  const properties = [
    {
      id: 1,
      image: buttonfalls,
      title: "100+ Acre Berry Farm",
      description: "An 1880's farm house located in Pawlet Vermont, with acres of established berry bushes along the Metttowee River.",
      date: "June 30, 2023",
    },
    {
      id: 2,
      image: mountainhome,
      title: "Ski Mountain Retreat",
      description: "Prestigious 4 bedroom mountain home in the High Meadow community on Stratton Mountain",
      date: "May 1, 2023",
    },
    {
      id: 3,
      image: townhome,
      title: "Home in Manchester",
      description: "This quaint house is located in the town of Manchester, and offered convenient town living in a beautiful setting.",
      date: "March 29, 2022",
    },
  ];

  const reviews = [
    {
      id: 1,
      client: "Seller, Roxanne Greene",
      review: "I would recommend Trent Stephens from Wohler Realty Group to anyone. He went above and beyond before and after the sale. Trent was professional, efficient, and exceeded my expectations.",
    },
    {
      id: 2,
      client: "Seller, Richard Barlow",
      review: "Trent was great to work with keeping us informed and going the extra mile to get the job done.",
    },
    {
      id: 3,
      client: "Buyers, Lane and Jess Morrow",
      review: "We moved over a thousand miles away and Trent helped find us a home soon after we arrived. We couldn’t have done it as smoothly or as easily without Trent by our side and the work he did keeping everything on track. He was so integral to us to finding our first home!",
    },
  ];

  return (
    <Container style={{ marginTop: "120px" }}>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 style={{ color: "#fff" }}>Recent Real Estate Activity</h1>
          <p style={{ color: "#fff" }}>
            Check out some of the recent properties I've been involved with. For the latest updates, visit my{" "}
            <a href="https://www.wohlerrealtygroup.com/realestate/agent/trent-stephens/" target="_blank" rel="noopener noreferrer" className="link-custom">
              Trent Kent Stephens, Wohler Realty Group
            </a>.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {properties.map((property) => (
          <Col md={4} key={property.id}>
            <Card className="mb-4 text-white bg-dark">
              <Card.Img variant="top" src={property.image} alt={property.title} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
                <Card.Footer>
                  <small className="text-muted">Sold on {property.date}</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <h2 style={{ color: "#fff" }}>Client Testimonials</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {reviews.map((review) => (
          <Col md={4} key={review.id}>
            <Card className="mb-4 text-white bg-dark">
              <Card.Body>
                <Card.Text>"{review.review}"</Card.Text>
                <Card.Footer>
                  <small className="text-muted">- {review.client}</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Office Location</strong><br />
            Wohler Realty Group<br />
            Mail: PO Box 355, Stratton, VT 05155<br />
            Office: 42 Route 30, Bondville, VT 05340<br />
          </p>
          <p>
            <strong>Contact Info</strong><br />
            Office: <a href="tel:802-297-7990" className="contact-link">802-297-7990</a><br />
            Cell: <a href="tel:802-345-8869" className="contact-link">802-345-8869</a><br />
            <a href="mailto:trentstephens@wohlerrealtygroup.com" className="contact-link">trentstephens@wohlerrealtygroup.com</a>
          </p>
        </Col>
      </Row>
      <style jsx>{`
        .link-custom {
          display: inline-block;
          margin-top: 1rem;
          font-weight: bold;
          color: #fff;
        }
        .contact-info {
          color: #fff;
          background-color: rgba(0, 0, 0, 0.7);
          padding: 20px;
          border-radius: 10px;
        }
        .contact-link {
          color: #ffcc00;
          text-decoration: none;
        }
        .contact-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </Container>
  );
}

export default RealEstate;
