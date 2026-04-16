import { motion } from "motion/react";
import { Menu, ArrowRight, Instagram, Twitter, Facebook } from "lucide-react";

const GridOverlay = () => (
  <div className="grid-overlay">
    {[...Array(12)].map((_, i) => (
      <div key={i} className="grid-line" />
    ))}
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full h-[100px] z-[100] flex items-center justify-between px-[60px] bg-gb-bg border-b border-gb-border">
    <div className="text-xl font-black tracking-[4px] uppercase select-none">GREENSWARD.</div>
    <div className="flex gap-[40px] items-center">
      <div className="hidden lg:flex gap-[40px]">
        <a href="#" className="text-[12px] uppercase tracking-[2px] font-semibold text-white">About</a>
        <a href="#" className="text-[12px] uppercase tracking-[2px] font-semibold text-white/60 hover:text-white">Courses</a>
        <a href="#" className="text-[12px] uppercase tracking-[2px] font-semibold text-white/60 hover:text-white">Membership</a>
        <a href="#" className="text-[12px] uppercase tracking-[2px] font-semibold text-white/60 hover:text-white">Journal</a>
      </div>
      <button className="p-1 hover:opacity-50 transition-opacity">
        <Menu size={20} />
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen pt-[100px] flex items-center px-[60px] overflow-hidden">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-20">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <span className="text-[12px] uppercase tracking-[4px] text-gb-muted block mb-5">Professional Golf Society</span>
        <h1 className="text-5xl md:text-7xl lg:text-[72px] leading-[1.1] font-bold mb-8 tracking-[-2px]">
          Tradition <br /> & Precision.
        </h1>
        <p className="text-[16px] leading-[1.6] text-white/80 max-w-[400px] mb-10">
          Those who come here do so regularly. Not for attention, but for the round itself and the absolute functionality of the sport.
        </p>
        <a href="#" className="inline-block px-[40px] py-[18px] bg-white text-black font-bold text-[13px] uppercase tracking-[2px] hover:bg-white/90 transition-all">
          Apply Now
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="visual-composition grid grid-cols-2 grid-rows-2 gap-[15px] h-[500px]"
      >
        <div className="col-span-1 row-span-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 relative flex items-center justify-center p-12 overflow-hidden">
             <div className="absolute inset-0 opacity-40">
                <img src="https://images.unsplash.com/photo-1591491719082-70df5add6d6f?q=80&w=1974&auto=format&fit=crop" alt="Golf" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             </div>
             <div className="relative z-10 w-[60%] h-[60%] border border-white/30" />
        </div>
        <div className="bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <div className="bg-white text-black flex items-center justify-center text-4xl font-extrabold">
            97
        </div>
      </motion.div>
    </div>
  </section>
);

const Vision = () => (
  <section className="py-32 px-[60px] border-y border-gb-border">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-5">
        <span className="text-[12px] uppercase tracking-[4px] text-gb-muted block mb-5">Vision</span>
        <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Continuity <br /> in Practice.
        </h3>
        <p className="text-white/60 leading-relaxed mb-6 italic border-l-2 border-white/20 pl-6 py-2">
            "The purpose here is continuity. Play is approached as something sustained over time, not refreshed for effect."
        </p>
        <p className="text-[13px] tracking-widest text-gb-muted uppercase"> — Gary Player</p>
      </div>
      <div className="md:col-span-7 flex justify-end">
        <div className="grid grid-cols-3 gap-4 w-full max-w-[500px]">
            <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-white/5 border border-white/10 col-span-2 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1592919016381-801eba41c9bd?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-white text-black flex items-center justify-center text-xl font-bold">EST.</div>
            <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1605342431649-06443c52e64c?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
        </div>
      </div>
    </div>
  </section>
);

const Courses = () => (
    <section className="px-[60px] py-32 bg-gb-bg">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-0 border border-gb-border">
            <div className="flex-1 p-12 lg:p-20 bg-white/5">
                <span className="text-[12px] uppercase tracking-[4px] text-gb-muted block mb-5">Courses</span>
                <h4 className="text-4xl lg:text-5xl font-bold mb-10">North Ground</h4>
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-auto">
                    <div>
                        <div className="text-[11px] uppercase tracking-[2px] text-gb-muted mb-2">Par</div>
                        <div className="text-3xl font-bold underline underline-offset-8 decoration-1 decoration-white/30">71</div>
                    </div>
                    <div>
                        <div className="text-[11px] uppercase tracking-[2px] text-gb-muted mb-2">Distance</div>
                        <div className="text-3xl font-bold">6,420<span className="text-sm ml-2 font-normal text-gb-muted">yds</span></div>
                    </div>
                </div>
                <button className="mt-12 flex items-center gap-4 text-[13px] uppercase tracking-[2px] font-bold py-4 px-8 border border-white/20 hover:bg-white hover:text-black transition-all">
                    View Details <ArrowRight size={16} />
                </button>
            </div>
            <div className="flex-1 h-[400px] lg:h-auto overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1594911772125-07dad7d2cd8f?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                    referrerPolicy="no-referrer" 
                />
            </div>
        </div>
    </section>
);

const LeadingNames = () => {
    const brands = ["PING", "Callaway", "PETER MILLAR", "NGF", "TaylorMade", "USGA", "Titleist"];
    return (
        <section className="py-32 px-[60px] border-t border-gb-border overflow-hidden">
             <div className="max-w-7xl mx-auto">
                <h3 className="text-center text-4xl md:text-5xl font-bold mb-20 tracking-tight">Lead Partners.</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px bg-gb-border">
                    {brands.map(brand => (
                        <div key={brand} className="bg-gb-bg py-10 flex items-center justify-center p-4">
                            <span className="text-[11px] font-black tracking-[4px] uppercase text-white/40 hover:text-white transition-colors cursor-default">{brand}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FooterStats = () => (
    <section className="h-auto md:h-[150px] border-t border-gb-border grid grid-cols-1 md:grid-cols-3 px-[60px]">
        <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r border-gb-border py-8 md:py-0">
            <div className="text-3xl font-bold mb-1">120+</div>
            <div className="text-[11px] uppercase tracking-[2px] text-gb-muted">Completed Projects</div>
        </div>
        <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r border-gb-border py-8 md:py-0 md:px-12">
            <div className="text-3xl font-bold mb-1">15</div>
            <div className="text-[11px] uppercase tracking-[2px] text-gb-muted">International Awards</div>
        </div>
        <div className="flex flex-col justify-center py-8 md:py-0 md:px-12">
            <div className="text-3xl font-bold mb-1">08</div>
            <div className="text-[11px] uppercase tracking-[2px] text-gb-muted">Global Regions</div>
        </div>
    </section>
);

const Footer = () => (
     <footer className="bg-gb-bg text-white px-[60px] pt-32 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
            <div>
                <h2 className="text-6xl font-black tracking-[-3px] uppercase mb-12">GREENSWARD.</h2>
                <p className="text-white/40 max-w-sm mb-12 uppercase tracking-[2px] text-[12px] leading-6 font-semibold">
                    We share updates when there is something worth sharing. Precision is not an option, but a standard.
                </p>
                <div className="relative border-b border-white/20 focus-within:border-white transition-colors pb-4 flex items-center max-w-md">
                    <input 
                        type="email" 
                        placeholder="SUBSCRIPTION@EMAIL.COM" 
                        className="w-full bg-transparent outline-none text-[12px] tracking-[4px] placeholder:text-white/20 p-0 font-bold"
                    />
                    <button className="p-2 hover:opacity-100 opacity-50 transition-all">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-end">
                <div className="flex gap-12 mb-12 lg:justify-end">
                    <Instagram size={22} className="cursor-pointer hover:text-white text-white/30 transition-colors" />
                    <Facebook size={22} className="cursor-pointer hover:text-white text-white/30 transition-colors" />
                    <Twitter size={22} className="cursor-pointer hover:text-white text-white/30 transition-colors" />
                </div>
                <div className="flex flex-wrap gap-8 lg:justify-end text-[11px] font-bold uppercase tracking-[2px] text-white/30">
                    <a href="#" className="hover:text-white">Cookie Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                    <a href="#" className="hover:text-white">Privacy</a>
                </div>
            </div>
        </div>
        <div className="text-[11px] uppercase tracking-[2px] text-white/20 font-semibold flex flex-col md:flex-row justify-between border-t border-white/5 pt-12">
            <span>2026 © GREENSWARD GOLF. ALL RIGHTS RESERVED.</span>
            <span className="mt-4 md:mt-0">ESTABLISHED IN LONDON, UK</span>
        </div>
     </footer>
);

export default function App() {
  return (
    <main className="selection:bg-white selection:text-black">
      <GridOverlay />
      <Navbar />
      <Hero />
      <Vision />
      <Courses />
      <LeadingNames />
      <FooterStats />
      <Footer />
    </main>
  );
}
