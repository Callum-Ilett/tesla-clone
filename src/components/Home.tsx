import styled from "styled-components";
import { Section } from "components";

const Home = () => {
  return (
    <Main>
      <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section
        title="Solar and Powerwall"
        description="Power Everything"
        backgroundImage="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Main>
  );
};

const Main = styled.main``;

export default Home;
