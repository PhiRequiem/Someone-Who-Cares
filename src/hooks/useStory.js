import { useState, useCallback } from 'react';
import { storyData } from '../story/storyDataV2';

export function useStory() {
  const [currentId, setCurrentId] = useState('start');

  const currentNode = storyData[currentId];

  const makeChoice = useCallback((nextId) => {
    if (storyData[nextId]) setCurrentId(nextId);
  }, []);

  const resetStory = useCallback(() => {
    setCurrentId('start');
  }, []);

  return {
    text: currentNode.text,
    choices: currentNode.choices ?? [],
    action: currentNode.action,
    terminalContext: currentNode.terminalContext,
    signalNotif: currentNode.signalNotif,
    quiz: currentNode.quiz,
    evidenceDrop: currentNode.evidenceDrop,
    bg: currentNode.bg,
    type: currentNode.type,
    autoAdvance: currentNode.autoAdvance ?? null,
    visibilityDelta: currentNode.visibilityDelta ?? null,
    makeChoice,
    resetStory,
  };
}
