import React from 'react';
import { SceneBase } from './SceneBase';

const Scene5: React.FC = () => {
  return (
    <SceneBase bg="#0c1e35">
      <div style={{ fontSize: 140, marginBottom: 50 }}>✨</div>
      <div
        style={{
          fontSize: 80,
          fontWeight: 'bold',
          color: '#FFD700',
          lineHeight: 1.4,
          marginBottom: 50,
        }}
      >
        搬家这件事
        <br />
        交给专业的人
      </div>
      <div
        style={{
          fontSize: 44,
          color: '#4ECDC4',
          backgroundColor: 'rgba(78,205,196,0.1)',
          border: '2px solid #4ECDC4',
          borderRadius: 16,
          padding: '24px 40px',
        }}
      >
        关注我 · 让搬家变成省心的事
      </div>
    </SceneBase>
  );
};

export default Scene5;
