import styled from "styled-components";

interface Props {
  title: string;
  description: string;
  backgroundImage: string;
  leftBtnText: string;
  rightBtnText?: string;
}

const Section = (props: Props) => {
  const {
    title,
    description,
    backgroundImage,
    leftBtnText,
    rightBtnText,
  } = props;

  return (
    <Wrap backgroundImage={backgroundImage}>
      <ItemText>
        <Heading>{title}</Heading>
        <SubHeading>{description}</SubHeading>
      </ItemText>

      <Buttons>
        <ButtonGroup>
          <Button color="primary">{leftBtnText}</Button>
          {rightBtnText && <Button color="secondary">{rightBtnText}</Button>}
        </ButtonGroup>

        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${({ backgroundImage }) => `url(/images/${backgroundImage});`}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Heading = styled.h1``;
const SubHeading = styled.p``;

const Buttons = styled.div``;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Button = styled.button<{ color: "primary" | "secondary" }>`
  background: ${({ color }) =>
    color === "primary" ? "rgba(23, 26, 32, 0.8)" : "white"};

  opacity: ${({ color }) => (color === "primary" ? "0.85" : "0.65")};

  color: ${({ color }) => (color === "primary" ? "white" : "black")};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  height: 40px;
  width: 256px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 8px;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
export default Section;
