import styled from "styled-components";
import { GiSoundWaves } from 'react-icons/gi';

const Voice = () => {
  return (
    <>
      <VoiceWrapper>
        <Title>
          Voice Control
        </Title>

        <WavesWrapper>
          <GiSoundWaves />
        </WavesWrapper>
        <H2>Listening...</H2>

        <SuggestionWrapper>
        <h2>Here are some suggestions:</h2>

        <P>Increase the volume.</P>
        <P>Call John Doe.</P>
        <P>Navigate to the nearest Starbucks.</P>
        <P>Turn on the air conditioning.</P>
        </SuggestionWrapper>
      </VoiceWrapper>
    </>
  );
};

export default Voice;

const VoiceWrapper = styled.div`
  background-color: rgb(82, 113, 255);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;

  margin: 20px 90px 90px 20px;
  height: 450px;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WavesWrapper = styled.div`
  margin-top: 0px;
  display: inline-block;
  font-size: 175px;
  margin-bottom: 0;
  height: 175px;
`;

const SuggestionWrapper = styled.div`
  margin-top: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
`;

const P = styled.p`
  margin: 5px;
  padding: 0;
`;

const H2 = styled.h2`
  margin: 0;
`;

const Title = styled.h3`
  margin: 10px 650px 0 0;
  postion: absolute;
`;