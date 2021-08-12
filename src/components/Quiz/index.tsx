import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { Container, Top, Score, Timer, Question, Answers, Answer } from './styles';

interface Questions {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export function Quiz() {
  const [data, setData] = useState<Questions[]>([] as Questions[]);
  const [answers, setAnswers] = useState<string[]>([] as string[]);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [className, setClassName] = useState('');
  const [timer, setTimer] = useState(30);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    api.get('').then((response) => setData(response.data.results));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setAnswers(
        shuffleAnswers([...data[questionNumber].incorrect_answers, data[questionNumber].correct_answer])
      );
      setCorrectAnswer(data[questionNumber].correct_answer);
    }
  }, [data, questionNumber]);

  useEffect(() => {
    if (timer === 0) {
      setScore(score - 100);
      return setQuestionNumber(questionNumber + 1);
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  function shuffleAnswers(array: string[]) {
    var m = array.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  function handleClickAnswer(choice: string) {
    delay(500, () => {
      setClassName(correctAnswer === choice ? 'correct' : 'wrong');
      setSelectedAnswer(choice);
    });

    delay(5000, () => {
      if (correctAnswer === choice) {
        // correctAnswer();
        delay(1000, () => {
          setScore(score + 100);
          setQuestionNumber(questionNumber + 1);
          setSelectedAnswer('');
          setClassName('');
        });
      } else {
        // wrongAnswer();
        delay(1000, () => {
          // setTimeOut(true);
          setQuestionNumber(questionNumber + 1);
          setScore(score - 100);
          setSelectedAnswer('');
          setClassName('');
        });
      }
    });
  }

  const delay = (duration: number, callback: any) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  return (
    <Container>
      <Top>
        <Score>Score: {score}</Score>
        <Timer>{timer}</Timer>
      </Top>
      <Question>
        <h1>{data[questionNumber]?.question}</h1>
      </Question>
      <Answers>
        {answers.map((answer, index) => (
          <Answer
            key={index}
            className={selectedAnswer === answer ? className : ''}
            onClick={() => handleClickAnswer(answer)}
          >
            {answer}
          </Answer>
        ))}
      </Answers>
    </Container>
  );
}
