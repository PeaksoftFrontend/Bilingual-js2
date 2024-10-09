import { styled } from "@mui/material";
import learnImage from "../../assets/images/learn-image.png";
import { data } from "../../utils/constants/general";

export const Experiense = () => {
  return (
    <StyledFon>
      <StyledAllWrapper>
        <StyledWrapper>
          <StyledName>Unparalleled user experience</StyledName>
          <StyledPharagraph>
            The most effective way to perfect a language is by immersing
            yourself in it. Rosetta Stone for Enterprise delivers an effective
            end-to-end experience, founded on a wealth of carefully structured
            content. Each learner has the opportunity to balance independent
            study with optional online tutoring in a way that fits their
            schedule and language learning goals.
          </StyledPharagraph>
        </StyledWrapper>
        <StyledContainer>
          {data.map((item) => (
            <StyleDiv key={item.id}>
              <StyleImg src={item.img} alt="" />
              <p>{item.des}</p>
            </StyleDiv>
          ))}
        </StyledContainer>
      </StyledAllWrapper>
      <StyledImages src={learnImage} alt="" />
    </StyledFon>
  );
};
const StyledImages = styled("img")`
  width: 28.75rem;
  height: 26.25rem;
`;
const StyledPharagraph = styled("p")`
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  width: 40rem;
  height: 7.5rem;
`;
const StyledName = styled("h2")`
  width: 20.5rem;
  height: 6rem;
  color: #3752b4;
  font-size: 2.5rem;
  font-family: Gilroy;
`;
const StyledFon = styled("div")`
  width: 100%;
  height: 80vh;
  background-color: #fef5e8;
  display: flex;
  gap: 9rem;
  justify-content: center;
  align-items: center;
`;
const StyleImg = styled("img")`
  width: 2.7575rem;
  object-fit: cover;
`;
const StyleDiv = styled("div")`
  width: 14.3825rem;
  height: 3.125rem;
  gap: 1.625rem;
  display: flex;
  align-items: center;
  & > p {
    width: 10rem;
    height: 2.75rem;
  }
`;
const StyledContainer = styled("div")`
  width: 31.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem;
`;
const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
const StyledAllWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
