import { useState, useCallback } from 'react';
import { storyData } from '../story/storyData';

export function useStory() {
  const [currentId, setCurrentId] = useState('start');
  
  const currentNode = storyData[currentId];

  const makeChoice = useCallback((nextId) => {
    if (storyData[nextId]) {
      setCurrentId(nextId);
    }
  }, []);

  return {
    text: currentNode.text,
    choices: currentNode.choices,
    action: currentNode.action,
    terminalContext: currentNode.terminalContext,
    bg: currentNode.bg,
    type: currentNode.type,
    makeChoice
  };
}
