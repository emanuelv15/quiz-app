import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scrollbar-width: none; // firefox
  &::-webkit-scrollbar {
    display: none; // others
  }
`;
