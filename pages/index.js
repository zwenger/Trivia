import Head from 'next/head'
import Trivia from "../Components/Trivia";
import {process} from "next/dist/server/web/sandbox/polyfills";

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
  const res = await fetch(`https://trivia-peach.vercel.app/api/questions`);
  const jsonRes = await res.json();
  return {
    props: {
      questions: jsonRes.data.questions,
    }
  }
}

export default Home;

