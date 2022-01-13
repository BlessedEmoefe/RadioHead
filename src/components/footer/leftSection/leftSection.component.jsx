import React from 'react'
import { FlexibleDiv } from '../../flexibleDiv/flexibleDiv.component';
import { Text } from '../../typography/text.component';
import { Spacer } from '../../spacer/spacer.component';
import { colors } from '../../../infrastructure/theme/colors';
import { LeftSectionWrapper } from "./leftSection.styles";


export const LeftSection = () => {


  const linkData = [
    {
      title: "Company",
      links: [
        { linkLabel: "About", linkUrl: "#" },
        { linkLabel: "Blogs", linkUrl: "#" },
        { linkLabel: "Portfolio", linkUrl: "#" },
        { linkLabel: "Services", linkUrl: "#" },
        { linkLabel: "Hire Us", linkUrl: "#" },
      ],
    },
    {
      title: "Our Products",
      links: [
        { linkLabel: "Mall Verse", linkUrl: "#" },
        { linkLabel: "Proxy", linkUrl: "#" },
        { linkLabel: "Social Laugh", linkUrl: "#" },
        { linkLabel: "MaxTerm", linkUrl: "#" },
        { linkLabel: "Virtual Lab", linkUrl: "#" },
        { linkLabel: "Social Laugh", linkUrl: "#" },
        { linkLabel: "MaxTerm", linkUrl: "#" },
        { linkLabel: "Virtual Lab", linkUrl: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { linkLabel: "About", linkUrl: "#" },
        { linkLabel: "Portfolio", linkUrl: "#" },
        { linkLabel: "Contact Us", linkUrl: "#" },
        { linkLabel: "Services", linkUrl: "#" },
        { linkLabel: "Hire Us", linkUrl: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { linkLabel: "About", linkUrl: "#" },
        { linkLabel: "Portfolio for men", linkUrl: "#" },
        { linkLabel: "Contact Us", linkUrl: "#" },
        { linkLabel: "Services", linkUrl: "#" },
        { linkLabel: "Hire Us", linkUrl: "#" },
      ],
    },
  ];

  return (
    <LeftSectionWrapper paddingVertical="0" alignItems="flex-start">
      {linkData.map(({ title, links }) => (
        <FlexibleDiv
          paddingVertical="0"
          alignItems="flex-start"
          flexDirection="column"
          width="auto"
        >
          <Text color="white" fontWeight="600" fontSize="1.1rem">
            {title}
          </Text>
          <Spacer />
          { links.map(({ linkLabel, linkUrl }) => (
            <Text color={colors.iconColor}>{linkLabel}</Text>
          ))}

          <Spacer size="small" />
        </FlexibleDiv>
      ))}
    </LeftSectionWrapper>
  );
}
