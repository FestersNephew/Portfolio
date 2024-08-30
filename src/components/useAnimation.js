import { useContext } from 'react';
import { AnimationContext } from './AnimationProvider';

export const useAnimation = () => useContext(AnimationContext);
