export const questionsMock = {
  status: 'success',
  data: {
    questions: [
      {
        id: 1,
        question: `Cuanto es 1 + '1'?`,
        answers: [{
          id: 1,
          text: `'2'`,
        }, {
          id: 2,
          text: '2',
        }, {
          id: 3,
          text: 'ndeah',
        }]
      },
      {
        id: 2,
        question: 'Una funcion es...',
        answers: [{
          id: 1,
          text: 'Un tipo de dato',
        }, {
          id: 2,
          text: 'un numero',
        }, {
          id: 3,
          text: 'ndeah',
        }]
      },
      {
        id: 3,
        question: 'Que es una variable?',
        answers: [{
          id: 1,
          text: 'Un tipo de dato',
        }, {
          id: 2,
          text: 'un numero',
        }, {
          id: 3,
          text: 'un contenedor para guardar datos',
        }]
      }
    ]
  }
}