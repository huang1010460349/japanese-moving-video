import React from 'react';
import { SceneBase } from './SceneBase';

const points = [
  { icon: '📦', title: '全套打包材料', desc: '上门带到家' },
  { icon: '👕', title: '衣物挂进衣柜箱', desc: '到新家直接挂' },
  { icon: '🍽️', title: '餐具逐件包好', desc: '易碎不磕碰' },
  { icon: '🎯', title: '打包到归位', desc: '一条龙搞定' },
];

const Scene3: React.FC = () => {
  return (
    <SceneBase bg="#0f0f23">
      <div
        style={{
          fontSize: 60,
          fontWeight: 'bold',
          color: '#1890ff',
          marginBottom: 50,
        }}
      >
        专业服务 · 一步到位
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
        }}
      >
        {points.map((p) => (
          <div
            key={p.title}
            style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: 18,
              padding: '28px 16px',
              border: '2px solid rgba(24,144,255,0.4)',
            }}
          >
            <div style={{ fontSize: 60, marginBottom: 12 }}>{p.icon}</div>
            <div style={{ fontSize: 38, color: '#00d9ff', fontWeight: 'bold' }}>
              {p.title}
            </div>
            <div style={{ fontSize: 30, color: '#ccc', marginTop: 8 }}>
              {p.desc}
            </div>
          </div>
        ))}
      </div>
    </SceneBase>
  );
};

export default Scene3;
