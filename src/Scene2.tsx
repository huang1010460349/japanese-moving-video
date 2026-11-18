import React from 'react';
import { SceneBase } from './SceneBase';

const items = [
  { icon: '🛠️', text: '家具拆装' },
  { icon: '🍽️', text: '易碎品打包' },
  { icon: '🛋️', text: '进场归位' },
];

const Scene2: React.FC = () => {
  return (
    <SceneBase bg="#1a2a3a">
      <div
        style={{
          fontSize: 58,
          color: '#fff',
          fontWeight: 'bold',
          marginBottom: 60,
          lineHeight: 1.4,
        }}
      >
        这些又累又怕搞砸的活儿
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
          alignItems: 'center',
        }}
      >
        {items.map((it) => (
          <div
            key={it.text}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              backgroundColor: 'rgba(255,255,255,0.07)',
              border: '2px solid rgba(255,107,107,0.5)',
              borderRadius: 20,
              padding: '24px 44px',
              width: '78%',
            }}
          >
            <span style={{ fontSize: 64 }}>{it.icon}</span>
            <span style={{ fontSize: 52, color: '#FF6B6B', fontWeight: 'bold' }}>
              {it.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 40, color: '#aaa', marginTop: 50 }}>
        本来就该交给专业的
      </div>
    </SceneBase>
  );
};

export default Scene2;
