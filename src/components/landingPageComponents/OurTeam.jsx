import { styled } from "@mui/material";
import { userData } from "../../utils/constants/general";
import { motion } from "framer-motion";
export const OurTeam = () => {
  return (
    <StyledAllContainer>
      <StyledName
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Our team
      </StyledName>
      <StyledContainer>
        {userData.map((item) => (
          <StyledWrapper key={item.id}>
            <StyledImage
              src={item.img}
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <StyledWrapperDescription
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              <h5>{item.name}</h5> <p>{item.description}</p>{" "}
            </StyledWrapperDescription>
          </StyledWrapper>
        ))}
      </StyledContainer>
    </StyledAllContainer>
  );
};
const StyledImage = styled(motion.img)`
  width: 10.25rem;
  height: 10.25rem;
`;
const StyledName = styled(motion.h1)`
  width: 11.25rem;
  font-family: Gilroy;
  height: 3.25rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #3752b4;
`;
const StyledContainer = styled("div")`
  display: flex;
  gap: 3.3rem;
`;
const StyledAllContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem;
  background-color: #fef5e8;
  width: 100%;
  height: 45vh;
`;
const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.9375rem;
`;
const StyledWrapperDescription = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h5 {
    font-family: Gilroy;
    font-size: 1rem;
    font-weight: 800;
    line-height: 1.3rem;
    text-align: left;
    color: #3a10e5;
  }
`;
