import { styled } from "@mui/material";
import { userData } from "../../utils/constants/general";

export const OurTeam = () => {
  return (
    <StyledAllContainer>
      <StyledName>Our team</StyledName>
      <StyledContainer>
        {userData.map((item) => (
          <StyledWrapper key={item.id}>
            <StyledImage src={item.img} alt="" />
            <StyledWrapperDescription>
              <h5>{item.name}</h5>
              <p>{item.description}</p>
            </StyledWrapperDescription>
          </StyledWrapper>
        ))}
      </StyledContainer>
    </StyledAllContainer>
  );
};
const StyledImage = styled("img")`
  width: 11.25rem;
  height: 11.25rem;
`;
const StyledName = styled("h1")`
  width: 11.25rem;
  height: 3.25rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #3752b4;
`;
const StyledContainer = styled("div")`
  display: flex;
  gap: 3.5rem;
`;
const StyledAllContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  background-color: #fef5e8;
  width: 100%;
  height: 100vh;
`;
const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.9375rem;
`;
const StyledWrapperDescription = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h5 {
    font-size: 1rem;
    font-weight: 800;
    line-height: 1.3rem;
    text-align: left;
    color: #3a10e5;
  }
`;
