/**
 * @flow
 */
export type Dispatch = Function;

export type Question = {
  answer: string,
  question: string
}

export type StatisticCycle = {
  answersCount: number,
  trueCount: number
}

export type QuestionsState = {
  currentIndex: number,
  questions: Array<Question>,
  statistic: Array<StatisticCycle>
}

export type Wordset = {
  link: string,
  label: string
}
