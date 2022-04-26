import {useRouter} from "next/router";
import style from "../../../styles/Trivia.module.css"

function Result() {
  const router = useRouter();
  console.log('router', router.query);

  return (
    <div className={style.container}>
      <h1>Felicidades, terminaste la trivia </h1>
      <h1>Tu puntaje es {router.query.score} </h1>

      <button className={style.button} type="button" onClick={() => router.push('/')}>
        Volver a jugar
      </button>

      <button className={style.button} type="button" onClick={() => router.push('/')}>
        Continuar al siguiente mundo
      </button>

    </div>
  )
}


export default Result;