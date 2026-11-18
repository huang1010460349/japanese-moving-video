import React from 'react';
import { Composition } from 'remotion';
import { FullVideo } from './FullVideo';

export const Root: React.FC = () => {
  return (
    <Composition
      id="FullVideo"
      component={FullVideo}
      durationInFrames={1280}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
