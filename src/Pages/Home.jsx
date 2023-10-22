import styled from "styled-components";
import GoodMorning from './../components/HomeComps/GoodMorning';
import Weather from './../components/HomeComps/Weather';
import Music from './../components/HomeComps/Music';
import Map from './../components/HomeComps/Map';

const Home = () => {
  return (
    <HomeGrid>
      <GoodMorning gridColumn="1 / 2" gridRow="1"/>
      <Weather gridColumn="1 / 2" gridRow="1 / 3"/>
      <Music gridColumn="1 / 2" gridRow="1 / 2"/>
      <Map gridColumn="1 / 2" gridRow="1 / 3"/>
    </HomeGrid>
  );
};

export default Home;

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 2fr;
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
`;
