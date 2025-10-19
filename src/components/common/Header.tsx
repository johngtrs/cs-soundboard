import { Volume2 } from 'lucide-react';
import { SlideInFromTop, PulsingIcon } from '@/components/animated';

function Header(): JSX.Element {
  return (
    <SlideInFromTop
      as="header"
      className="w-full py-8 px-6 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-4">
            <PulsingIcon>
              <Volume2 className="w-12 h-12 text-primary" strokeWidth={2.5} />
            </PulsingIcon>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent tracking-wider">
              CS 1.6 SOUNDBOARD
            </h1>
          </div>
          <p className="text-muted-foreground text-sm mt-2 tracking-widest uppercase">
            ÇA VA PÉTER 💥
          </p>
        </div>
      </div>
    </SlideInFromTop>
  );
}

export default Header;
