import React from 'react';
import { SceneBase } from './SceneBase';

const promises = [
  { icon: '🚫', text: '不外包' },
  { icon: '👷', text: '不临时工' },
  { icon: '✅', text: '自家师傅全程负责' },
];

const Scene4: React.FC = () => {
  return (
    <SceneBase bg="#1a1a2e">
      <div
        style={{
          fontSize: 60,
          fontWeight: 'bold',
          color: '#52c41a',
          marginBottom: 60,
        }}
      >
        放心，是我们的底线
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
          alignItems: 'center',
        }}
      >
        {promises.map((p) => (
          <div
            key={p.text}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 22,
              backgroundColor: 'rgba(82,196,26,0.1)',
              border: '2px solid #52c41a',
              borderRadius: 20,
              padding: '24px 48px',
              width: '80%',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: 56 }}>{p.icon}</span>
            <span style={{ fontSize: 46, color: '#95de64', fontWeight: 'bold' }}>
              {p.text}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          fontSize: 40,
          color: '#ffd700',
          marginTop: 55,
          textAlign: 'center',
          lineHeight: 1.5,
        }}
      >
        精细 · 干净 · 守时
        <br />
        搬迁当天你只管验收
      </div>
    </SceneBase>
  );
};

export default Scene4;
