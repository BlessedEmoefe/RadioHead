import React from "react";
import Blurb from "../../../../components/blurb/blurb.component";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { colors } from "../../../../infrastructure/theme/colors";
import postImage from "../../../../assets/images/new.jpg"
import { useFetch } from "../../../../components/hooks/useFetch";

const SoftwareDevelopment = () => {
  /*Integration code*/
  const { data, error, loading } = useFetch(
    "http://localhost:1337/software-dev-image-blurb"
  );
  if (loading) return <p>Loading</p>;
  if (error) return <h1>error</h1>;

  const { title, description, image } = data;
  return (
    <FlexibleDiv justifyContent="center" boxedLayout>
      <FlexibleDiv justifyContent="center" width="70%">
        <Blurb>
          <h3>{ title}</h3>
          <p>
            {description}
          </p>
        </Blurb>
      </FlexibleDiv>
      <FlexibleDiv height={image?"90vh":"auto"} justifyContent="center">
        <img src={image.url} width="auto" height="100%" alt="Software developement image" />
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default SoftwareDevelopment;
