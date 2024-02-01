"use client"
import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const SplineComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Verifica che il canvas sia montato
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/Co6AxLBT5EUFsVSy/scene.splinecode');
    }
  }, []);

  return <canvas ref={canvasRef} />;
};

export default SplineComponent;

