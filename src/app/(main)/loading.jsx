'use client';   
import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FAF9F6]/90 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-5">
        
        
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 border-2 border-[#1A1A1A]/10 rounded-full" />
          <div className="absolute inset-0 border-2 border-[#FF8C00] border-t-transparent rounded-full animate-spin" />
        </div>
        
        
        <div className="relative overflow-hidden px-4 py-1">
          <p className="text-[#1A1A1A]/45 text-sm font-medium tracking-[0.15em] uppercase">
            Loading
          </p>
          {/* এই লেয়ারটি লেখার ওপর দিয়ে চকচকে আলো পাস করবে */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,140,0,0.4) 50%, transparent 100%)",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default Loading;