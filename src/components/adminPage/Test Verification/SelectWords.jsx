import { Select, styled } from "@mui/material";
import { ContentWrapper } from "../../UI/content_wrapper/ContentWrapper";
import { AdminHeader } from "../adminHeader/AdminHeader";
import { Input } from "../../UI/input/Input";
import { Button } from "../../UI/button/Button";
import { Icons } from "../../../assets/icons";
import { useState } from "react";
import { initialSelect } from "../../../utils/constants/selectWords";
import { SelectItem } from "./SelectItem";
import { UiModal } from "../../UI/modal/UiModal";

export const SelectWords = () => {
  const [selectItems, setSelectItems] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const addOptionHandler = () => {
    const currentIndex = selectItems.length;
    if (currentIndex < initialSelect.length) {
      setSelectItems([...selectItems, initialSelect[currentIndex]]);
    }
  };

  const addedButton = selectItems.length > 0;

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const deleteHandler = (itemId) => {
    const newDeleteItem = selectItems.filter((item) => item.id !== itemId);
    setSelectItems(newDeleteItem);
  };

  return (
    <StyledAdminConteiner>
      <AdminHeader />
      <ContentWrapper>
        <TitleBlock>
          <div>
            <p>Title</p>
            <StyledInput placeholder="Select real English words" />
          </div>
          <div>
            <TextBlock>
              <p>Duration</p>
              <p>(in minutes)</p>
            </TextBlock>
            <StyledSection>18:00</StyledSection>
          </div>
        </TitleBlock>
        <TypeStyled>
          <p>Type</p>
          <Select />
        </TypeStyled>
        <StyledButton>
          <Button onClick={addOptionHandler}>
            <Icons.Plus /> ADD OPTIONS
          </Button>
        </StyledButton>
        <SelectBlock>
          <ContainerSeleckItem>
            {selectItems.map((item, index) => (
              <SelectItem
                key={item.id}
                {...item}
                index={index + 1}
                deleteHandler={deleteHandler}
              />
            ))}
          </ContainerSeleckItem>
          <StyledAddedButton>
            {addedButton && (
              <ContainerStyledButton>
                <Button variant="outlined">GO BACK</Button>
                <Button variant="sucsses" onClick={openModal}>
                  save
                </Button>
              </ContainerStyledButton>
            )}
            {isOpenModal && (
              <StyledModalBox
                open={openModal}
                onClose={closeModal}
                role="ADMIN"
              >
                <ContainerModal>
                  <StyledText>
                    <h6>Title</h6>
                    <Input />
                  </StyledText>
                  <IconBlock>
                    <p>Is true option?</p>
                    <Icons.TickGreen />
                  </IconBlock>
                  <ButtonBlock>
                    <Button variant="outlined" onClick={closeModal}>
                      GO BACK
                    </Button>
                    <Button variant="sucsses">save</Button>
                  </ButtonBlock>
                </ContainerModal>
              </StyledModalBox>
            )}
          </StyledAddedButton>
        </SelectBlock>
      </ContentWrapper>
    </StyledAdminConteiner>
  );
};

const StyledAdminConteiner = styled("div")(() => ({
  width: "100%",
  height: "110vh",
  backgroundColor: "#D7E1F8",
  display: "flex",
  flexDirection: "column",
  gap: "68px",
}));

const TitleBlock = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",

  "& p": {
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "DIN Next Rounded LT Pro Medium",
    color: "#4B4759",
    width: "83px",
  },

  "& div": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
}));

const StyledInput = styled(Input)(() => ({
  width: "43.563rem",
}));

const StyledSection = styled("section")(() => ({
  width: "6.188rem",
  height: "3.25rem",
  border: "1px solid #D4D0D0",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const TypeStyled = styled("div")(() => ({
  marginTop: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",

  "& p": {
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "DIN Next Rounded LT Pro Medium",
    color: "#4B4759",
  },
}));

const StyledButton = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  marginTop: "32px",
}));

const ContainerSeleckItem = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "18px",
  marginTop: "22px",
}));

const ContainerStyledButton = styled("div")(() => ({
  display: "flex",
  gap: "16px",
  textWrap: "nowrap",
}));

const StyledAddedButton = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
}));

const SelectBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
}));

const StyledModalBox = styled(UiModal)(() => ({
  "& .css-1lmjhxc": {
    width: "39.813rem",
    height: "23.5rem",
    background: "linear-gradient(to bottom, #FEFEFE 70%, #F0F1F1 70%)",
  },
  "& h6": {
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "DIN Next Rounded LT Pro Medium",
    color: "#4B4759",
  },
}));

const ContainerModal = styled("div")(() => ({
  padding: "40px 30px 26px 30px",
}));

const StyledText = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const IconBlock = styled("div")(() => ({
  display: "flex",
  gap: "14px",
  marginTop: "20px",

  "& p": {
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "DIN Next Rounded LT Pro Medium",
    color: "#4C4859",
  },
}));

const ButtonBlock = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  textWrap: "nowrap",
  gap: "16px",
  marginTop: "5.313rem",
}));

const TextBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "none",
}));
