import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100%;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  position: absolute;
  height: 80px;
  width: 100%;
  background: linear-gradient(var(--other), var(--background));
  top: 0;
`;

export const Score = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  color: var(--text-title);
`;

export const Timer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid var(--text-title);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  color: var(--text-title);
`;

export const Question = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(var(--other), var(--other-two));
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid white;
  font-size: 20px;
  margin-top: 10%;

  h1 {
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    color: var(--text-title);
  }
`;

export const Answers = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Answer = styled.div`
  width: 40%;
  padding: 10px;
  margin: 20px 10px 20px 10px;
  text-align: center;
  background: linear-gradient(var(--other), var(--other-two));
  border: 1px solid white;
  border-radius: 15px;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  color: var(--text-body);

  &:hover {
    background: var(--other-three);
  }

  &.correct {
    animation: correct 3s ease forwards;
  }

  &.wrong {
    animation: wrong 3s ease forwards;
  }

  @keyframes correct {
    0%,
    22%,
    42% {
      background: var(--background);
    }
    20%,
    40%,
    60% {
      background: linear-gradient(var(--other), var(--other-two));
    }
    62%,
    100% {
      background: green;
    }
  }

  @keyframes wrong {
    0%,
    22%,
    42% {
      background: var(--background);
    }
    20%,
    40%,
    60% {
      background: linear-gradient(var(--other), var(--other-two));
    }
    62%,
    100% {
      background: crimson;
    }
  }
`;
