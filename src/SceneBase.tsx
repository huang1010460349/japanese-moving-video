import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

type Props = {
  bg: string;
  children: React.ReactNode;
};

export const SceneBase: React.FC<Props> = ({ bg, children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const translateY = interpolate(frame, [0, 18], [40, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: bg,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Microsoft YaHei", "PingFang SC", sans-serif',
        padding: 80,
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          width: '100%',
          textAlign: 'center',
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};
