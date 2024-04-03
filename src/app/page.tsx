'use client';

import OverusedGrotesk from '@/components/fonts';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [time, setTime] = useState(0.0);
  const [difference, setDifference] = useState(0.0);
  const [isEnded, setIsEnded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    setIsStarted(true);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => Math.round((prevTime + 0.01) * 100) / 100);
    }, 10);
  };

  const restart = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsStarted(false);
    setIsStopped(false);
    setTime(0.0);
    setDifference(0.0);
    setIsEnded(false);
  };

  useEffect(() => {
    if (isStopped && timerRef.current) {
      setIsEnded(true);
      clearInterval(timerRef.current);
      setDifference(Math.round((time - 10) * 100) / 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStopped]);

  return (
    <main
      className={`flex h-[100dvh] w-[100dvw] items-center justify-center font-sans ${OverusedGrotesk.className}`}
    >
      <div className="flex h-[100dvh] w-full max-w-screen-sm flex-col items-center justify-center space-y-5 p-10">
        {!isStarted && (
          <div className="flex flex-col items-center justify-center space-y-3">
            <h1 className="text-center text-3xl font-semibold">Stop at exactly 10 seconds!</h1>
            <Button onClick={start}>Start</Button>
          </div>
        )}
        {isStarted && (
          <div className="flex flex-col items-center justify-center space-y-3">
            {/* Now Time */}
            <h1 className="p-5 text-center text-6xl font-semibold">{time}</h1>

            {/* Time */}
            {isEnded && (
              <div>
                {difference === 0 ? (
                  <h1 className="text-center text-xl font-semibold">You stopped at exactly 10 seconds!</h1>
                ) : difference > 0.1 ? (
                  <h1 className="text-center text-xl font-semibold">
                    You stopped {difference} seconds too late!
                  </h1>
                ) : (
                  <h1 className="text-center text-xl font-semibold">
                    You stopped {difference} seconds too early!
                  </h1>
                )}
              </div>
            )}

            {isEnded ? (
              <div className="flex flex-row space-x-3">
                <Button onClick={restart}>Restart</Button>
                <ShareButton time={time} difference={difference} />
              </div>
            ) : (
              <Button onClick={() => setIsStopped(true)}>Stop</Button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

function Button({ onClick, children }: { onClick: () => void; children: string }) {
  return (
    <button className="rounded-full bg-black px-7 py-3 text-xl font-medium text-white" onClick={onClick}>
      {children}
    </button>
  );
}

function ShareButton({ time, difference }: { time: number; difference: number }) {
  function shareTwitter() {
    const message =
      difference === 0
        ? `I stopped at exactly 10 seconds!`
        : difference > 0.1
          ? `I stopped ${difference} seconds too late!`
          : `I stopped ${difference} seconds too early!`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent('Time: ' + time + '\n' + message + '\n')}&url=${window.location.href}`,
      '_blank'
    );
  }

  return (
    <button
      className="rounded-full border border-gray-500 bg-white px-3.5 py-3 text-xl font-medium"
      onClick={shareTwitter}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h120v80H240v440h480v-440H600v-80h120q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z" />
      </svg>
    </button>
  );
}
