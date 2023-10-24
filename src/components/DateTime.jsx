import styled from 'styled-components';

export default function DateTime(props){
    const { date = 'Saturday, September 9', time = ' 20:21' } = props;
    return (
      <div>
        <TitleWrapper>
            <P>{date}{time}</P>
        </TitleWrapper>
      </div>
    );
}

const TitleWrapper = styled.div`
  color: white;
  z-index: 1000;
`;

const P = styled.div`
    margin: 5px 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
`;