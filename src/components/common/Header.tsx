import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';

function Header(): JSX.Element {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full py-8 px-6 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Volume2 className="w-12 h-12 text-primary" strokeWidth={2.5} />
          </motion.div>
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent tracking-wider">
              CS 1.6 SOUNDBOARD
            </h1>
            <p className="text-muted-foreground text-sm mt-2 tracking-widest uppercase">
              Classic Counter-Strike Radio Commands
            </p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
