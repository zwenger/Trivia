import Head from 'next/head'
import Trivia from "../Components/Trivia";

function Home({questions}) {
  console.log(questions);
  return (
    <div>
      <Head>
        <title>Trivia</title>
      </Head>
      <Trivia
        questions={questions}
      />
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/questions`);
  const jsonRes = await res.json();
  return {
    props: {
      questions: jsonRes.data.questions,
    }
  }
}

export default Home;

