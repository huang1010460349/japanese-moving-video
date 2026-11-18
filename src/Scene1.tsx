import React from 'react';
import { SceneBase } from './SceneBase';

const Scene1: React.FC = () => {
  return (
    <SceneBase bg="#0c1e35">
      <div style={{ fontSize: 150, marginBottom: 40 }}>📦</div>
      <div
        style={{
          fontSize: 88,
          fontWeight: 'bold',
          color: '#FFD700',
          lineHeight: 1.35,
          marginBottom: 40,
        }}
      >
        搬家还在自己
        <br />
        打包到凌晨？
      </div>
      <div
        style={{
          fontSize: 46,
          color: '#4ECDC4',
          lineHeight: 1.5,
          marginTop: 30,
        }}
      >
        一套日式搬家 · 全程不用动手
      </div>
    </SceneBase>
  );
};

export default Scene1;
