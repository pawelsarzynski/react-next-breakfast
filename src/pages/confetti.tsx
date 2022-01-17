import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import { useEffect } from 'react';

export default () => {
  useEffect(() => {
    confetti();
  });
  return <p>Hello</p>;
};
