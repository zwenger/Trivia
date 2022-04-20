import {questionsMock} from "../../mocks/questions";

export default function handler(req, res) {
  setTimeout(() => {
    return res.status(200).json(questionsMock);
  }, 500)

}
