/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cyber: ['"Share Tech Mono"', 'monospace'],
        display: ['"Orbitron"', 'sans-serif']
      },
      colors: {
        void: '#0a0a0a',
        neon: {
          magenta: '#ff00ff',
          purple: '#b300ff',
          cyan: '#00ffff',
          red: '#ff0044',
          pink: '#ff1493',
          electric: '#cc00ff'
        }
      },
      animation: {
        'scanline': 'scan 6s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'glitch-text': 'glitch 1s infinite linear alternate-reverse',
        'float': 'float 4s ease-in-out infinite',
        'hex-scroll': 'hexScroll 20s linear infinite'
      },
      keyframes: {
        scan: {
          '0%': { top: '-5%' },
          '100%': { top: '105%' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px #ff00ff' },
          '50%': { boxShadow: '0 0 60px #ff00ff, 0 0 120px #ff0044' }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 3px)' },
          '40%': { transform: 'translate(3px, -3px)' },
          '60%': { transform: 'translate(-2px, -2px)' },
          '80%': { transform: 'translate(2px, 2px)' },
          '100%': { transform: 'translate(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        hexScroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }
        }
      }
    }
  },
  plugins: []
};
