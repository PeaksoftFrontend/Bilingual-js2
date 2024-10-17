// import { styled } from "@mui/material";
// import { ContentWrapper } from "../../UI/content_wrapper/ContentWrapper";
// import { Input } from "../../UI/input/Input";
// import { Button } from "../../UI/button/Button";
// import { Icons } from "../../../assets/icons";
// import { useState } from "react";
// import {
//   initialSelect,
//   selectOptions,
// } from "../../../utils/constants/selectWords";
// import { SelectItem } from "./SelectItem";
// import { UiModal } from "../../UI/modal/UiModal";

// export const SelectWords = () => {
//   const [selectItems, setSelectItems] = useState([]);
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(selectOptions[0].value);

//   const addOptionHandler = () => {
//     const currentIndex = selectItems.length;

//     if (currentIndex < initialSelect.length) {
//       const newItem = { ...initialSelect[currentIndex] };

//       if (selectedOption === "Listen and select English word") {
//         newItem.hasSound = true;
//       } else {
//         newItem.hasSound = false;
//       }

//       setSelectItems([...selectItems, newItem]);
//     }
//   };

//   const addedButton = selectItems.length > 0;

//   const openModal = () => {
//     setIsOpenModal(true);
//   };

//   const closeModal = () => {
//     setIsOpenModal(false);
//   };

//   const deleteHandler = (itemId) => {
//     const newDeleteItem = selectItems.filter((item) => item.id !== itemId);
//     setSelectItems(newDeleteItem);
//   };

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <ContentWrapper>
//       <StyledButton>
//         <Button onClick={addOptionHandler}>
//           <Icons.Plus /> ADD OPTIONS
//         </Button>
//       </StyledButton>
//       <SelectBlock>
//         <ContainerSeleckItem>
//           {selectItems.map((item, index) => (
//             <SelectItem
//               key={item.id}
//               {...item}
//               index={index + 1}
//               deleteHandler={deleteHandler}
//             >
//               {item.hasSound && <Icons.Sound />}
//             </SelectItem>
//           ))}
//         </ContainerSeleckItem>
//         <StyledAddedButton>
//           {addedButton && (
//             <ContainerStyledButton>
//               <Button variant="outlined">GO BACK</Button>
//               <Button variant="sucsses" onClick={openModal}>
//                 save
//               </Button>
//             </ContainerStyledButton>
//           )}
//           {isOpenModal && (
//             <StyledModalBox open={openModal} onClose={closeModal} role="ADMIN">
//               <ContainerModal>
//                 <StyledText>
//                   <h6>Title</h6>
//                   <Input />
//                 </StyledText>
//                 <IconBlock>
//                   <p>Is true option?</p>
//                   <Icons.TickGreen />
//                 </IconBlock>
//                 <ButtonBlock>
//                   <Button variant="outlined" onClick={closeModal}>
//                     GO BACK
//                   </Button>
//                   <Button variant="sucsses">save</Button>
//                 </ButtonBlock>
//               </ContainerModal>
//             </StyledModalBox>
//           )}
//         </StyledAddedButton>
//       </SelectBlock>
//     </ContentWrapper>
//   );
// };

// const StyledButton = styled("div")(() => ({
//   display: "flex",
//   justifyContent: "end",
//   marginTop: "32px",
// }));

// const ContainerSeleckItem = styled("div")(() => ({
//   display: "flex",
//   flexWrap: "wrap",
//   gap: "18px",
//   marginTop: "22px",
// }));

// const ContainerStyledButton = styled("div")(() => ({
//   display: "flex",
//   gap: "16px",
//   textWrap: "nowrap",
// }));

// const StyledAddedButton = styled("div")(() => ({
//   display: "flex",
//   justifyContent: "end",
// }));

// const SelectBlock = styled("div")(() => ({
//   display: "flex",
//   flexDirection: "column",
//   gap: "32px",
// }));

// const StyledModalBox = styled(UiModal)(() => ({
//   "& .css-1lmjhxc": {
//     width: "39.813rem",
//     height: "23.5rem",
//     background: "linear-gradient(to bottom, #FEFEFE 70%, #F0F1F1 70%)",
//   },
//   "& h6": {
//     fontSize: "16px",
//     fontWeight: "500",
//     fontFamily: "DIN Next Rounded LT Pro Medium",
//     color: "#4B4759",
//   },
// }));

// const ContainerModal = styled("div")(() => ({
//   padding: "40px 30px 26px 30px",
// }));

// const StyledText = styled("div")(() => ({
//   display: "flex",
//   flexDirection: "column",
//   gap: "16px",
// }));

// const IconBlock = styled("div")(() => ({
//   display: "flex",
//   gap: "14px",
//   marginTop: "20px",

//   "& p": {
//     fontSize: "16px",
//     fontWeight: "400",
//     fontFamily: "DIN Next Rounded LT Pro Medium",
//     color: "#4C4859",
//   },
// }));

// const ButtonBlock = styled("div")(() => ({
//   display: "flex",
//   justifyContent: "end",
//   textWrap: "nowrap",
//   gap: "16px",
//   marginTop: "5.313rem",
// }));
