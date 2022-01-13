import React from 'react';
import { Text } from '../../../../components/typography/text.component';
import Blurb from "../../../../components/blurb/blurb.component";
import { FlexibleDiv } from '../../../../components/flexibleDiv/flexibleDiv.component';
import { useFetch } from '../../../../components/hooks/useFetch';

const CallToActionText = () => {
  /*Integration code*/
  const { data, error, loading } = useFetch(
    "http://localhost:1337/call-to-action-text"
  );
  if (loading ) return <p>Loading</p>;
  if (error) return <h1>error</h1>;

  const { text } = data;
  return (
    <FlexibleDiv justifyContent="center" paddingVertical="0">
      <Blurb>
        <p> {text}</p>
      </Blurb>
    </FlexibleDiv>
  );
}

export default CallToActionText;
