import React from 'react';

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button style={{ background: 'purple', color: '#fff', padding: 10 }}>
      {children}
    </button>
  );
};
