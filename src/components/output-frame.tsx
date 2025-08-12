"use client";

import React, { useMemo } from 'react';

interface OutputFrameProps {
  code: string;
  theme: 'light' | 'dark';
}

const OutputFrame: React.FC<OutputFrameProps> = ({ code, theme }) => {
  const srcDoc = useMemo(() => {
    return `
      <html>
        <head>
          <style>
            :root {
              color-scheme: light dark;
            }
            html, body {
              height: 100%;
              margin: 0;
            }
            body { 
              padding: 1rem; 
              font-family: 'Inter', sans-serif; 
              background-color: transparent;
              color: var(--foreground-color, #342D4B);
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
              font-size: 14px;
            }
            #canvas {
              display: none;
              border-radius: 0.25rem;
              max-width: 100%;
              background-color: var(--canvas-bg-color, white); /* Canvas background color */
            }
            #visual-output {
                min-height: 50px;
            }
            #log-output {
              margin-top: 1rem;
              padding-top: 1rem;
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
              flex-grow: 1;
            }
            .log-entry {
              font-family: 'Space Mono', 'monospace';
              padding: 0.5rem 0.75rem;
              border-radius: 0.5rem;
              white-space: pre-wrap;
              word-break: break-all;
              font-size: 12px;
              line-height: 1.5;
              color: var(--log-text-color, inherit);
              box-shadow: inset 2px 2px 4px var(--log-shadow-dark, #0000001a), inset -2px -2px 4px var(--log-shadow-light, #ffffff4d);
              background-color: var(--log-bg-color, #f5f2fa);
              flex-grow: 1;
              display: flex;
              flex-direction: column;
            }
            .log-error {
              color: var(--log-error-color, #ef4444);
            }
            .log-warn {
              color: var(--log-warn-color, #f59e0b);
            }
          </style>
           <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet">
        </head>
        <body>
          <div id="visual-output"></div>
          <canvas id="canvas" width="400" height="250"></canvas>
          <div id="log-output"></div>
          <script>
            (function() {
              const isDark = "${theme}" === 'dark';
              const body = document.body;
              if (isDark) {
                body.style.setProperty('--foreground-color', '#d2c9e0');
                body.style.setProperty('--log-bg-color', '#221d29');
                body.style.setProperty('--log-text-color', '#d2c9e0');
                body.style.setProperty('--log-error-color', '#FF6F6F');
                body.style.setProperty('--log-warn-color', '#f5b041');
                body.style.setProperty('--log-shadow-light', 'rgba(255, 255, 255, 0.08)');
                body.style.setProperty('--log-shadow-dark', 'rgba(0, 0, 0, 0.4)');
                body.style.setProperty('--canvas-bg-color', '#313138');
              } else {
                 body.style.setProperty('--log-shadow-light', 'rgba(255, 255, 255, 0.6)');
                 body.style.setProperty('--log-shadow-dark', 'rgba(180, 160, 200, 0.3)');
                 body.style.setProperty('--canvas-bg-color', 'white');
              }


              const visualOutput = document.getElementById('visual-output');
              const logOutput = document.getElementById('log-output');
              const canvas = document.getElementById('canvas');
              
              const originalLog = console.log;
              const originalError = console.error;
              const originalWarn = console.warn;
              const originalInfo = console.info;

              const logQueue = [];

              function createLogEntry(args, type) {
                const message = args.map(arg => {
                  if (arg instanceof Element) {
                    if (arg.tagName === 'CANVAS' || arg.tagName === 'BODY') {
                       return '<' + arg.tagName.toLowerCase() + '>';
                    }
                    return arg.outerHTML;
                  }
                  try {
                    return typeof arg === 'object' && arg !== null ? JSON.stringify(arg, null, 2) : String(arg)
                  } catch(e) {
                    return '[Circular Object]';
                  }
                }).join(' ');

                logQueue.push({ message, type });
              }

              console.log = (...args) => { createLogEntry(args, 'log'); originalLog.apply(console, args); };
              console.error = (...args) => { createLogEntry(args, 'error'); originalError.apply(console, args); };
              console.warn = (...args) => { createLogEntry(args, 'warn'); originalWarn.apply(console, args); };
              console.info = (...args) => { createLogEntry(args, 'info'); originalInfo.apply(console, args); };

              window.addEventListener('error', (event) => {
                createLogEntry([event.message], 'error');
              });

              try {
                // This is a proxy to detect if the canvas is used
                const originalGetContext = HTMLCanvasElement.prototype.getContext;
                HTMLCanvasElement.prototype.getContext = function(type, ...args) {
                  if (type === '2d') {
                    canvas.style.display = 'block';
                  }
                  return originalGetContext.apply(this, [type, ...args]);
                };
                
                ${code}
                
                // Restore original function after code execution
                HTMLCanvasElement.prototype.getContext = originalGetContext;

              } catch (e) {
                console.error(e.message);
              } finally {
                if (logQueue.length > 0) {
                    const entry = document.createElement('div');
                    entry.className = 'log-entry log-log'; // Use a consistent class
                    
                    const content = logQueue.map(item => {
                        // We can still apply color classes to spans if needed, but for now, just text
                        return item.message;
                    }).join('\\n');
                    
                    entry.textContent = content;
                    logOutput.appendChild(entry);
                }
              }
            })();
          </script>
        </body>
      </html>
    `;
  }, [code, theme]);

  return (
    <iframe
      srcDoc={srcDoc}
      title="Output"
      sandbox="allow-scripts"
      width="100%"
      height="100%"
      className="border-0 rounded-xl"
    />
  );
};

export default OutputFrame;
