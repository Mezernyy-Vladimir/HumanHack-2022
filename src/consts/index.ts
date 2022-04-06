export const array = [
  {
    questionName: '/Задание 1',
    questionQuest: 'Что есть музыка жизни?',
    answers: [
      {
        isTrue: true,
        name: '$(Тишина, брат мой.)',
      },
      {
        isTrue: false,
        name: '$(Хор)',
      },
      {
        isTrue: false,
        name: '$(Барабаны)',
      },
      {
        isTrue: false,
        name: '$(Клубнячок)',
      },
    ],
  },
  {
    questionName: '/Задание 2',
    questionQuest: 'Что есть величайшая иллюзия жизни?',
    answers: [
      {
        isTrue: false,
        name: '$(Фокус с распиливанием девушки)',
      },
      {
        isTrue: false,
        name: '$(Магия иллюзии)',
      },
      {
        isTrue: true,
        name: '$(Невинность, брат мой.)',
      },
      {
        isTrue: false,
        name: '$(Есть один ньюанс...)',
      },
    ],
  },
  {
    questionName: '/Задание 3',
    questionQuest: 'Vopros',
    answers: [
      {
        isTrue: true,
        name: 'answer 9',
      },
      {
        isTrue: false,
        name: 'answer 10',
      },
      {
        isTrue: false,
        name: 'answer 11',
      },
      {
        isTrue: false,
        name: 'answer 12',
      },
    ],
  },
  {
    questionName: '/Задание 4',
    questionQuest: 'Vopros',
    answers: [
      {
        isTrue: true,
        name: 'answer 13',
      },
      {
        isTrue: false,
        name: 'answer 14',
      },
      {
        isTrue: false,
        name: 'answer 15',
      },
      {
        isTrue: false,
        name: 'answer 16',
      },
    ],
  },
  {
    questionName: '/Задание 5',
    questionQuest: 'Vopros',
    answers: [
      {
        isTrue: true,
        name: 'answer 13',
      },
      {
        isTrue: false,
        name: 'answer 14',
      },
      {
        isTrue: false,
        name: 'answer 15',
      },
      {
        isTrue: false,
        name: 'answer 16',
      },
    ],
  },
  {
    questionName: '/Задание 6',
    questionQuest: 'Vopros',
    answers: [
      {
        isTrue: true,
        name: 'answer 13',
      },
      {
        isTrue: false,
        name: 'answer 14',
      },
      {
        isTrue: false,
        name: 'answer 15',
      },
      {
        isTrue: false,
        name: 'answer 16',
      },
    ],
  },
  {
    questionName: '/Задание 7',
    questionQuest: 'Vopros',
    answers: [
      {
        isTrue: true,
        name: 'answer 13',
      },
      {
        isTrue: false,
        name: 'answer 14',
      },
      {
        isTrue: false,
        name: 'answer 15',
      },
      {
        isTrue: false,
        name: 'answer 16',
      },
    ],
  },
  {
    questionName: '/Задание 8',
    questionQuest: 'Vopros',
    answers: [
      {
        isTrue: true,
        name: 'answer 13',
      },
      {
        isTrue: false,
        name: 'answer 14',
      },
      {
        isTrue: false,
        name: 'answer 15',
      },
      {
        isTrue: false,
        name: 'answer 16',
      },
    ],
  },
  {
    questionName: '/Задание 9',
    questionQuest: 'Vopros',
    answers: [
      {
        isTrue: true,
        name: 'answer 13',
      },
      {
        isTrue: false,
        name: 'answer 14',
      },
      {
        isTrue: false,
        name: 'answer 15',
      },
      {
        isTrue: false,
        name: 'answer 16',
      },
    ],
  },
  {
    questionName: '/Задание 10',
    questionQuest: 'Vopros',
    answers: [
      {
        isTrue: true,
        name: 'answer 17',
      },
      {
        isTrue: false,
        name: 'answer 18',
      },
      {
        isTrue: false,
        name: 'answer 19',
      },
      {
        isTrue: false,
        name: 'answer 20',
      },
    ],
  },
];

export interface IAnswer {
  isTrue: boolean;
  name: string;
}

export interface IQuestion {
  questionName: string;
  questionQuest: string;
  answers: IAnswer[];
}
