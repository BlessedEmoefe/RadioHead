import React from "react";
import { SecondIllustration } from "../../../../assets/svg/index.js";
import Blurb from "../../../../components/blurb/blurb.component.jsx";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component.jsx";
import { colors } from "../../../../infrastructure/theme/colors.js";
import postImage from "../../../../assets/images/postImage.png";
import { ImageBlurb } from "../../../../components/imageBlurb/imageBlurb.component.jsx";
import { useFetch } from "../../../../components/hooks/useFetch.jsx";

  
const Principles = () => {
  /*Integration code*/
  const { data, error, loading } = useFetch(
    "http://localhost:1337/principles-image-blurbs"
  );
  if (loading) return <p>Loading</p>;
  if (error) return <h1>error</h1>;

  const { title, description, image } = data;
  return (
    <FlexibleDiv boxedLayout background={colors.secondary}>
      <FlexibleDiv boxedLayout>
        {data.map(({ title, description,image, id }) => (
          <ImageBlurb
            title={title}
            text={description}
            id={id}
            image={image.url}
            paragraphColor="white"
            titleColor="white"
          />
        ))}
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default Principles;
