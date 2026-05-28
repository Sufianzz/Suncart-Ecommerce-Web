'use client';   
import { motion } from "framer-motion";

function Loading() {
  return (
    // মেইন ব্যাকগ্রাউন্ড কন্টেইনার (overflow-hidden দেওয়া হয়েছে যাতে পুরো স্ক্রিনের বাইরের আলো দেখা না যায়)
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FAF9F6]/80 dark:bg-[#121212]/85 backdrop-blur-md overflow-hidden transition-colors duration-300">
      
      {/* ─── পুরো ব্যাকগ্রাউন্ডের ওপর গ্লসি শিমার ইফেক্ট (Right to Left) ─── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          // একটি বড় এবং চওড়া গ্লসি লাইট (হোয়াইট ও অরেঞ্জের মিক্সড গ্লো)
          background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
        }}
        // ডান থেকে বামে নেওয়ার জন্য initial এবং animate উল্টে দেওয়া হয়েছে
        initial={{ x: "100%", y: "-30%" }} 
        animate={{ x: "-100%", y: "30%" }} // একটু কোনাকুনি (135deg) যাবে যাতে রিয়ালিস্টিক কাঁচের রিফ্লেকশন মনে হয়
        transition={{
          repeat: Infinity,
          duration: 2.2, // পুরো স্ক্রিন পার হতে একটু বেশি সময় দিলে সুন্দর লাগবে
          ease: "easeInOut",
        }}
      />

      {/* ─── মাঝখানের কন্টেন্ট (স্পিনার ও টেক্সট) ─── */}
      <div className="relative z-10 flex flex-col items-center gap-5">
        
        {/* স্পিনার */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 border-2 border-[#1A1A1A]/10 dark:border-white/10 rounded-full" />
          <div className="absolute inset-0 border-2 border-[#FF8C00] border-t-transparent rounded-full animate-spin" />
        </div>
        
        {/* টেক্সট */}
        <p className="text-[#1A1A1A]/60 dark:text-white/50 text-sm font-semibold tracking-[0.2em] uppercase">
          Loading
        </p>

      </div>
    </div>
  );
}

export default Loading;