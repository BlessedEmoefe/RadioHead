import React from "react";
import { Spacer } from "../../components/spacer/spacer.component";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { ContactCard } from "./contact.styles";
import { Input, TextArea } from "../../components/input/input.component";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/button/button.component";

/*importing Home sections*/
import Footer from "../../components/footer/footer.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";
import { useFetch } from "../../components/hooks/useFetch";
import { SocialIcon } from "../../components/socialIcons/socialIcon.component";

const Contact = () => {
  /*Integration code*/
  const { data, error, loading } = useFetch(
    "http://localhost:1337/footer-blurbs"
  );
  const { data:socialData, error:socialError, loading:socialLoading } = useFetch(
    "http://localhost:1337/footer-social-section"
  );

  if (loading || socialLoading) return <p>Loading</p>;
  if (error || socialError) return <h1>error</h1>;

  const { facebook, twitter, linkedin, instagram } = socialData;
  const { firstText, secondText, thirdText } = data;
  return (
    <FlexibleDiv
      flexDirection="column"
      paddingVertical="0"
      background="#f5fff4"
    >
      <Spacer size="medium" />
      <ContactCard
        width="80%"
        paddingVertical="3rem"
        boxedLayout
        flexDirection="column"
        background="white"
      >
        <FlexibleDiv paddingVertical="0">
          <FlexibleDiv paddingVertical="0" justifyContent="center ">
            <Text
              fontSize="22px"
              fontWeight={fontWeights.bold}
              color={colors.secondary}
            >
              Contact Us
            </Text>
          </FlexibleDiv>
          <FlexibleDiv>
            <FlexibleDiv
              width="50%"
              paddingVertical="0"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Text fontWeight={fontWeights.normal}>Send Us a message</Text>
              <Spacer />
              <Input
                border="1.2px solid #B4BEC8"
                borderRadius="4px"
                placeholder="Your name"
                type="text"
              />
              <Spacer size="small" />
              <Input
                border="1.2px solid #B4BEC8"
                borderRadius="4px"
                placeholder="Email Address"
                type="text"
              />
              <Spacer />
              <TextArea
                border="1.2px solid #B4BEC8"
                borderRadius="4px"
                placeholder="Your message"
                type="textArea"
              />
              <Spacer />
              <Button
                btnText={"Send"}
                background={colors.primary}
                borderRadius="4px"
              />
            </FlexibleDiv>
            <FlexibleDiv width="40%" paddingVertical="0">
              {data.map(({ firstText, secondText, thirdText }) => (
                <FlexibleDiv
                  paddingVertical="0"
                  alignItems="flex-start"
                  flexDirection="column"
                  resFlexDirection="column-reverse"
                >
                  {firstText ? <Text>{firstText}</Text> : null}
                  {secondText ? <Text>{secondText}</Text> : null}
                  {thirdText ? <Text>{thirdText}</Text> : null}

                  <Spacer size="small" />
                </FlexibleDiv>
              ))}
              <SocialIcon
                color={colors.secondary}
                facebook={facebook}
                twitter={twitter}
                linkedin={linkedin}
                instagram={instagram}
              />
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </ContactCard>
      <Spacer size="medium" />
    </FlexibleDiv>
  );
};

export default Contact;
