import { APP_NAME } from './config';

export default function Home() {
  return (
    <main className="flex h-[100dvh] w-[100dvw] items-center justify-center font-sans">
      <div className="flex h-[100dvh] w-full max-w-screen-sm flex-col space-y-5 p-10">
        <h1 className="text-3xl font-bold">{APP_NAME}</h1>
      </div>
    </main>
  );
}
