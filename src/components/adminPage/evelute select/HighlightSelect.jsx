import { styled } from "@mui/material";
import { ContentWrapper } from "../../UI/content_wrapper/ContentWrapper";
import { Input } from "../../UI/input/Input";
import { Button } from "../../UI/button/Button";

export const HighlightSelect = () => {
  return (
    <>
      <StyledAll>
        <ContentWrapper>
          <StyledWrapperAllContent>
            <StyledWrapperTitle>
              <StyledContentTitle>
                <Styled>
                  <h3>User:sdfghu</h3>
                  <h3>Test:sdfghj</h3>
                </Styled>
                <StyledContentTitleSecond>
                  <h3>Test Question </h3>
                  <StyledContent>
                    <h4>
                      Question Title: Highlight the answer to the questoin below
                    </h4>
                    <h4>Duration (in minutes): 0:30</h4>
                    <h4>Question Type: Highlight the answer</h4>
                  </StyledContent>
                </StyledContentTitleSecond>
              </StyledContentTitle>
              <div>
                <h3>Evaluation</h3>
                <h4>Score: (1-10)</h4>
                <Input type="number" />
              </div>
            </StyledWrapperTitle>
            <StyledWrapperAll>
              <StyledWrapperDescription>
                <StyledPassage>
                  <h4>Passage: </h4>
                  <div>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </div>
                </StyledPassage>

                <StyledWrapperDescriptionSecond>
                  <h4>
                    Question Statement: “Describe a time you were surprised?
                    what happened?”
                  </h4>
                  <StyledPassage>
                    <h4>Correct_answer:</h4>
                    <div>
                      No one rejects, dislikes, or avoids pleasure itself,
                      because it is pleasure, but because those who do not know
                      how to pursue pleasure rationally encounter consequences
                      that are extremely painful.
                    </div>
                  </StyledPassage>
                </StyledWrapperDescriptionSecond>

                <StyledDescriptionSecond>
                  <h3>User’s Answer </h3>
                  <StyledPassage>
                    <h4>Respond: </h4>
                    <div>
                      "But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam
                    </div>
                  </StyledPassage>
                </StyledDescriptionSecond>
              </StyledWrapperDescription>
              <div>
                <Button variant="outlined">GO BACK</Button>
                <Button variant="sucsses">SAVE</Button>
              </div>
            </StyledWrapperAll>
          </StyledWrapperAllContent>
        </ContentWrapper>
      </StyledAll>
    </>
  );
};
const StyledAll = styled("div")({
  padding: "40px",
});
const StyledWrapperAll = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  alignItems: "self-end",
});
const StyledWrapperAllContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
});
const StyledWrapperDescriptionSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});
const StyledDescriptionSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const StyledWrapperDescription = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "37px",
});
const StyledPassage = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "3px",
});
const StyledWrapperTitle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const StyledContentTitle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  gap: "40px",
});
const StyledContentTitleSecond = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  gap: "20px",
});
const StyledContent = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  gap: "7px",
});
const Styled = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  gap: "7px",
});
