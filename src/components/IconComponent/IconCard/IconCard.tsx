import React from 'react';

interface IconCard {
  pathName: string
  alt?: string
}

export function IconCard({pathName, alt}: IconCard) {
  return (
    <div>
      <img src={pathName} alt={alt}/>
    </div>
  );
};
