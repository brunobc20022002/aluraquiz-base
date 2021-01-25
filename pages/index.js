//Com styled-Components 
import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

//Com react
// function Title(props){ //propcidades/propriedades
//   return (
//     <h1>
//       {props.children}
//     </h1>
//   )
// }

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

// const BackgroundImage= styled.div`
//   background-image: url(${db.bg});
//   flex:1;
//   background-size:cover;
//   background-position:center;
// `;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>C#</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste os seus conhecimentos sobre C#</p>
            <p><input type="string" value="Qual é o seu nome?"></input><br/></p>
            <p><input type="button" value="JOGAR"></input></p>
            
          </Widget.Content>
        </Widget>

        <Widget>
        <Widget.Content>
          <h1>Quizes da galera</h1>
          <p>Conheça outros quizes que a comunidade desenvolveu durante a imersão-React:</p>
        </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl=""/>
    </QuizBackground>

    );
}
