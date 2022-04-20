import {triviaScoreMock} from "../../mocks/triviaScore.js";

export default function handler(req, res) {
  setTimeout(() => {
    return res.status(200).json(triviaScoreMock);
  }, 3000)

}