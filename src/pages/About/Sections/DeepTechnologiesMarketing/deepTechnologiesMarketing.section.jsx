import React from "react";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component";
import  Blurb  from "../../../../components/blurb/blurb.component";
import { ImageBlurb } from "../../../../components/imageBlurb/imageBlurb.component";
import { colors } from "../../../../infrastructure/theme/colors";
import postImage from "../../../../assets/images/postImage.png";
import { useFetch } from "../../../../components/hooks/useFetch";

const DeepTechnologiesMarketing = () => {
  /*Integration code*/
  const { data, error, loading } = useFetch(
    "http://localhost:1337/deep-tech-marketing-blurb"
  );
   const {
     data: imageBlurbData,
     error: imageBlurbError,
     loading: imageBlurbLoading,
   } = useFetch("http://localhost:1337/deep-tech-marketing-image-blurbs");
  if (loading || imageBlurbLoading) return <p>Loading</p>;
  if (error || imageBlurbError) return <h1>error</h1>;

  const { title, description } = data

  return (
    <FlexibleDiv justifyContent="center" boxedLayout background="#F5FFF4">
      <FlexibleDiv justifyContent="center">
        <Blurb>
          <h3>{title}</h3>
          <p>{description}</p>
        </Blurb>
      </FlexibleDiv>
      <FlexibleDiv boxedLayout>
        {imageBlurbData.map(({ title, description, image, id }) => (
          <ImageBlurb title={title} text={description} id={id} image={image} />
        ))}
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default DeepTechnologiesMarketing;
