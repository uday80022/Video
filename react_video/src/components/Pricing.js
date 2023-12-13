import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PlanCard = styled(Card)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background:darkgray;
  padding: 0rem;
`;

const PlanTitle = styled(Card.Title)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const PlanPrice = styled(Card.Text)`
  font-size: 1.25rem;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1rem;
  line-height: 1.5;
`;

const PlanFeature = styled.li`
  margin-bottom: 0.5rem;
`;

const SelectButton = styled(Button)`
  margin-top: 1rem;
`;

const PricingPage = () => {
  const pricingPlans = [
    {
      title: "Free",
      price: "₹0/month",
      features: ["Free to Use", "limited Access"],
    },
    {
      title: "Basic Plan",
      price: "₹500/month",
      features: ["Unlimited Access", "Sequential Task Access"],
    },
    {
      title: "Premium Plan",
      price: "₹1000/month",
      features: ["Unlimited Access", "No sequential Task Access"],
    },
  ];

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Choose Your Plan</h2>
      <Row className="justify-content-center">
        {pricingPlans.map((plan, index) => (
          <Col key={index} md={4} className="mb-4">
            <PlanCard>
              <Card.Body>
                <PlanTitle>{plan.title}</PlanTitle>
                <PlanPrice>{plan.price}</PlanPrice>
                <PlanFeatures>
                  {plan.features.map((feature, i) => (
                    <PlanFeature key={i}>{feature}</PlanFeature>
                  ))}
                </PlanFeatures>
                <SelectButton variant="primary" block>
                  Select Plan
                </SelectButton>
              </Card.Body>
            </PlanCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PricingPage;
