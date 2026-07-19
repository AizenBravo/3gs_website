import Image from 'next/image';
import DarkPipe from '@/public/assets/stock/dark_pipe.png';

const PipeV3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`relative bg-red-500`}>
      <Image
        src={DarkPipe}
        alt="Dark Pipe"
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '400px',
        }}
        className={`absolute inset-0 pointer-events-none`}
      />
      <div className="relative h-full w-full flex items-center px-6 py-2 text-foreground font-medium z-10">
        {children}
      </div>
    </div>
  );
};

export default PipeV3;
