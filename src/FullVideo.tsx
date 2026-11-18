import React from 'react';
import { AbsoluteFill, Sequence, Audio, staticFile } from 'remotion';
import Scene1 from './Scene1';
import Scene2 from './Scene2';
import Scene3 from './Scene3';
import Scene4 from './Scene4';
import Scene5 from './Scene5';

export const FullVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={202}>
        <Scene1 />
        <Audio src={staticFile('scene1_audio.mp3')} />
      </Sequence>

      <Sequence from={202} durationInFrames={264}>
        <Scene2 />
        <Audio src={staticFile('scene2_audio.mp3')} />
      </Sequence>

      <Sequence from={466} durationInFrames={329}>
        <Scene3 />
        <Audio src={staticFile('scene3_audio.mp3')} />
      </Sequence>

      <Sequence from={795} durationInFrames={276}>
        <Scene4 />
        <Audio src={staticFile('scene4_audio.mp3')} />
      </Sequence>

      <Sequence from={1071} durationInFrames={209}>
        <Scene5 />
        <Audio src={staticFile('scene5_audio.mp3')} />
      </Sequence>
    </AbsoluteFill>
  );
};
