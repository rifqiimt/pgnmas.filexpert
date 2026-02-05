import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  ShieldCheck,
  Database,
  Search,
  Users,
  Award,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Zap,
  Cpu,
  Building2,
  FileCheck,
  TrendingUp,
  PieChart,
  Boxes
} from 'lucide-react';

/** * KONFIGURASI LOGO UTAMA
 * Masukkan URL gambar logo Anda di sini (contoh: "https://domain.com/logo.png")
 * Jika dibiarkan null atau "", maka akan menggunakan logo ikon "X" default.
 */
const BRAND_LOGO = "file.webp"; 

// Komponen Logo Terpusat yang mendukung gambar atau desain default
const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-2.5 cursor-pointer group ${className}`}>
    {BRAND_LOGO ? (
      <img 
        src={BRAND_LOGO} 
        alt="Logo FileExpert" 
        className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
      />
    ) : (
      <>
        <div className="w-9 h-9 bg-green-700 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform shadow-sm border border-green-600/20">
          <span className="text-yellow-400 font-black italic text-xl leading-none select-none">X</span>
        </div>
        <div className="flex flex-col leading-none text-left">
          <span className="font-black text-green-900 tracking-tighter text-lg uppercase leading-none">FileExpert</span>
          <span className="text-[7px] font-bold text-yellow-600 tracking-[0.3em] uppercase leading-tight mt-0.5">Archive Solution</span>
        </div>
      </>
    )}
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Data Klien dengan URL Logo Terpercaya
  const clients = [
    { name: "Pertamina Group", logo: "pertamina.png" },
    { name: "PGN Tbk", logo: "pgn.png" },
    { name: "MIND ID", logo: "mind.png" },
    { name: "Bank BTN", logo: "btn.png" },
    { name: "ASDP", logo: "asdp.svg" },
    { name: "JAKPRO", logo: "jakpro.png" },
    { name: "KemenBUMN", logo: "kemenbumn.png" },
    ];

  // Data Media Sosial Spesifik
  const socialLinks = [
    { Icon: Instagram, url: "https://www.instagram.com/filexpert_id/?hl=id", label: "Instagram" },
    { Icon: Facebook, url: "https://www.facebook.com/filexpert.id", label: "Facebook" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 scroll-smooth selection:bg-yellow-200">
      {/* Navbar Glassmorphism */}
      <nav className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'top-1' : 'top-0'}`}>
        <div className={`max-w-5xl mx-auto flex justify-between items-center px-5 py-2.5 rounded-xl transition-all ${scrolled ? 'bg-white/75 backdrop-blur-xl shadow-md border border-white/20' : 'bg-transparent'}`}>
          <div onClick={() => scrollToSection('home')}>
            <Logo />
          </div>

          <div className="hidden md:flex items-center gap-6">
            {['Home', 'Stats', 'Service', 'About'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[9px] font-black uppercase tracking-widest text-green-900/60 hover:text-green-700 transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('footer')}
              className="bg-green-900 text-yellow-400 px-4 py-1.5 rounded-lg font-black text-[9px] uppercase tracking-wider hover:scale-105 transition-all active:scale-95 shadow-md shadow-green-900/10"
            >
              Kontak
            </button>
          </div>

          <button className="md:hidden text-green-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
              <Award className="w-3.5 h-3.5 text-green-700" />
              <span className="text-[9px] font-black text-green-700 uppercase tracking-widest leading-none">Akreditasi ANRI - Lembaga PERMATA</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-green-950 leading-[0.95] tracking-tighter">
              Aset Digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-yellow-500">Masa Depan.</span>
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-sm">
              FileXpert mengelola lebih dari <span className="font-bold text-green-700">153.000 box arsip</span> dengan standar kearsipan nasional untuk efisiensi bisnis Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('service')} className="bg-green-700 text-white px-7 py-3.5 rounded-xl font-black flex items-center gap-2.5 hover:bg-green-800 transition-all shadow-lg shadow-green-100 group text-xs uppercase tracking-wider">
                Layanan Kami
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-yellow-400 rounded-[2.5rem] p-3 rotate-1 shadow-xl relative overflow-hidden group max-w-md mx-auto">
               <img 
                 src="file1.jpg" 
                 alt="Pusat Arsip" 
                 className="w-full h-[380px] object-cover rounded-[2rem] -rotate-1 group-hover:rotate-0 transition-transform duration-700"
               />
               <div className="absolute bottom-6 left-6 bg-green-900 text-white p-5 rounded-[1.5rem] shadow-xl border border-white/10 max-w-[180px]">
                 <div className="space-y-0.5 text-left">
                    <p className="text-[8px] font-black uppercase text-yellow-400 tracking-widest">Pendapatan 2024</p>
                    <p className="text-xl font-black leading-none">Rp25,96 M</p>
                    <p className="text-[9px] font-bold opacity-70 mt-1">Growth 12,72% YoY</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Marquee */}
      <section className="py-8 bg-green-50/50 border-y border-green-100 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap items-center">
          {[1, 2].map((loop) => (
            <div key={loop} className="flex gap-16 items-center">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group"
                >
                  <img src={client.logo} alt={client.name} className="h-8 w-auto object-contain max-w-[90px]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-900/40 group-hover:text-green-900 transition-colors">
                    {client.name}
                  </span>
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-30 group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Performance Highlights Section */}
      <section id="stats" className="scroll-mt-4 py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6 text-left">
              <h2 className="text-[10px] font-black text-green-600 uppercase tracking-[0.4em]">Laporan Kinerja</h2>
              <h3 className="text-3xl md:text-5xl font-black text-green-950 tracking-tight leading-none">Kepercayaan Melalui Data.</h3>
              <p className="text-slate-500 leading-relaxed text-sm">PERMATA melalui FileXpert telah mengelola volume arsip yang signifikan baik untuk Pertamina Group maupun sektor publik.</p>
              
              <div className="space-y-3">
                 <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100 shadow-sm">
                    <span className="font-black text-green-900 text-[10px] uppercase tracking-wider">Total Box 2024</span>
                    <span className="font-black text-xl text-green-950">153.446</span>
                 </div>
                 <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl border border-yellow-100 shadow-sm">
                    <span className="font-black text-yellow-700 text-[10px] uppercase tracking-wider">Arsip Ditata (ML)</span>
                    <span className="font-black text-xl text-yellow-900">15.010</span>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "Pertamina Tbk", val: "62.032 Box", sub: "Archive Management" },
                { label: "Kementerian BUMN", val: "19.087 Box", sub: "Ministry Partner" },
                { label: "Jiwasraya", val: "15.615 Box", sub: "Insurance Archive" },
                { label: "ASDP", val: "2.845 Box", sub: "+264% Growth" },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-slate-50 rounded-2xl hover:shadow-md transition-all group bg-white shadow-sm text-left">
                   <p className="text-[9px] font-black text-green-600 uppercase tracking-widest mb-1.5">{item.sub}</p>
                   <h4 className="text-lg font-black text-green-950 group-hover:text-green-700 leading-tight">{item.label}</h4>
                   <p className="text-2xl font-black mt-3 text-slate-800">{item.val}</p>
                </div>
              ))}
              <div className="md:col-span-2 p-6 bg-green-900 rounded-[1.5rem] text-white flex justify-between items-center gap-4 shadow-lg">
                 <div className="text-left">
                    <h5 className="font-black text-xl mb-0.5 italic text-yellow-400 leading-none">Detail Box 2024</h5>
                    <p className="text-[9px] text-green-100 font-bold uppercase tracking-[0.2em] opacity-70">2.500 Box Besar | 150.946 Standar ANRI</p>
                 </div>
                 <TrendingUp className="w-8 h-8 text-yellow-400 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="service" className="scroll-mt-4 py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-5 text-left">
            <div className="space-y-3">
              <h2 className="text-[10px] font-black text-green-600 uppercase tracking-[0.4em]">AFSS Division</h2>
              <h3 className="text-3xl md:text-5xl font-black text-green-950 tracking-tight leading-none">Layanan <br/>Terakreditasi.</h3>
            </div>
            <p className="text-slate-500 max-w-xs text-xs font-medium">Mendukung efisiensi dan keamanan melalui standar kearsipan nasional yang holistik.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="md:col-span-2 bg-white rounded-[2rem] p-8 border border-slate-100 hover:border-green-200 shadow-sm transition-all group cursor-pointer relative overflow-hidden text-left">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-700 group-hover:text-white transition-all shadow-inner">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-black mb-3">Penataan Arsip</h4>
                <p className="text-slate-500 text-xs leading-relaxed mb-5">Menata arsip secara sistematis sesuai standar nasional ANRI. Meliputi pemilahan, entri data, hingga uji petik.</p>
                <div className="flex items-center gap-2 text-green-900 font-black text-[9px] uppercase tracking-widest leading-none">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Prinsip Kearsipan Nasional
                </div>
              </div>
            </div>

            <div className="bg-green-900 rounded-[2rem] p-8 text-white shadow-xl shadow-green-900/10 group cursor-pointer text-left">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <ShieldCheck className="w-8 h-8 text-yellow-400 mb-6" />
                  <h4 className="text-lg font-black mb-3 leading-tight leading-none">Penyimpanan Terkelola</h4>
                </div>
                <div className="space-y-3">
                  <p className="text-[11px] text-green-100/60 leading-relaxed">Fasilitas aman dengan monitor 24 jam dan sistem pelacakan barcode.</p>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                </div>
              </div>
            </div>

            <div className="bg-yellow-400 rounded-[2rem] p-8 shadow-md group cursor-pointer text-left">
              <div className="h-full flex flex-col justify-between">
                <Users className="w-8 h-8 text-green-950 mb-6" />
                <h4 className="text-lg font-black text-green-950 leading-tight mb-2">Manage Service</h4>
                <p className="text-[10px] font-bold text-green-900 leading-relaxed opacity-70">Outsourcing kearsipan dengan tenaga ahli arsiparis tersertifikasi.</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-white rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center gap-10 border border-slate-100 text-left">
               <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                     <div className="p-2.5 bg-green-50 rounded-xl shadow-sm"><Cpu className="w-7 h-7 text-green-700" /></div>
                     <h4 className="text-2xl md:text-3xl font-black text-green-950 tracking-tight uppercase leading-none">Teknologi DOX</h4>
                  </div>
                  <p className="text-slate-500 leading-relaxed text-sm">Alih media menggunakan teknologi <span className="font-bold">OCR (Optical Character Recognition)</span> memudahkan pencarian dokumen melalui ponsel pintar secara instan.</p>
                  <div className="flex flex-wrap gap-3">
                     {['Metadata Search', 'Mobile Apps', 'OCR Tech'].map((feat) => (
                       <div key={feat} className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 rounded-lg text-[9px] font-black text-green-900 border border-slate-100">
                          <Zap className="w-3 h-3 text-yellow-500 fill-yellow-500" /> {feat}
                       </div>
                     ))}
                  </div>
               </div>
               <div className="w-full md:w-[320px] h-[220px] rounded-[1.5rem] overflow-hidden shadow-lg relative">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Analisis Data Dashboard" />
                  <div className="absolute inset-0 bg-green-900/10 backdrop-blur-[1px]"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Section */}
      <section id="about" className="scroll-mt-4 py-20 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1 text-left">
            <h2 className="text-[10px] font-black text-green-600 uppercase tracking-[0.4em]">Ekspansi Bisnis</h2>
            <h3 className="text-3xl md:text-5xl font-black text-green-950 tracking-tight leading-none">Pertumbuhan <br/>& Sinergi.</h3>
            <p className="text-slate-500 leading-relaxed text-sm">Pasar kami mencakup berbagai Kementerian, BaKamLa, BMKG, hingga sinergi BUMN seperti MIND ID, IFG Life, dan Bank BTN.</p>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <p className="text-2xl font-black text-green-900 leading-none mb-1">15</p>
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Tender Menang</p>
               </div>
               <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <p className="text-2xl font-black text-green-900 leading-none mb-1">14%</p>
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Growth YoY</p>
               </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
             <div className="bg-green-950 rounded-[3rem] p-8 text-white space-y-6 relative overflow-hidden text-left shadow-xl">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-green-700/20 blur-[80px] rounded-full"></div>
                <PieChart className="w-10 h-10 text-yellow-400 mb-2" />
                <h4 className="text-2xl font-black tracking-tight leading-tight uppercase italic text-yellow-50">Facility Management 2024</h4>
                <p className="text-xs font-medium opacity-60 leading-relaxed italic">
                  "Menyediakan jasa pengelolaan kearsipan secara holistik meliputi sistem, prosedur, dan manajemen fasilitas."
                </p>
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                   <div className="text-left">
                      <p className="text-[9px] font-black uppercase tracking-widest opacity-50">Revenue</p>
                      <p className="text-xl font-black text-yellow-400 leading-none">Rp25,96 M</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[9px] font-black uppercase tracking-widest opacity-50">Status</p>
                      <p className="text-[10px] font-black text-green-400 uppercase leading-none">Audit Selesai</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="px-6 pb-20 text-center">
        <div className="max-w-5xl mx-auto bg-yellow-400 rounded-[3rem] p-10 md:p-24 space-y-8 relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black text-green-950 tracking-tighter leading-[0.9] mb-6">Optimalkan <br/>Ruang Kantor Anda.</h3>
            <p className="text-green-900 font-bold max-w-md mx-auto opacity-70 mb-10 italic text-base leading-relaxed">Ubah tumpukan arsip menjadi efisiensi informasi dengan solusi profesional FileXpert.</p>
            <button onClick={() => scrollToSection('footer')} className="bg-green-950 text-yellow-400 px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm">
              Konsultasi Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Footer Modern */}
      <footer id="footer" className="bg-white pt-20 pb-10 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5 space-y-6 flex flex-col items-start">
              <Logo />
              <p className="text-slate-500 text-sm max-w-xs font-medium leading-relaxed">
                Mitra Strategis Pengelolaan Arsip Terakreditasi ANRI. Solusi digital yang aman dan efisien.
              </p>
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, url, label }, i) => (
                  <a 
                    key={i} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={label}
                    className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center hover:bg-green-700 hover:text-white transition-all shadow-sm"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <h5 className="font-black text-[9px] uppercase tracking-[0.4em] text-green-700">Lokasi Kantor</h5>
              <div className="space-y-4 text-slate-500 font-bold text-xs leading-relaxed">
                <p>Jalan Ahmad Yani, Jakarta Timur, Indonesia</p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <h5 className="font-black text-[9px] uppercase tracking-[0.4em] text-green-700">Digital Support</h5>
              <ul className="space-y-4 font-bold text-xs text-slate-500">
                <li><a href="mailto:filexpertpermata@gmail.com" className="group flex items-center gap-3 hover:text-green-700 transition-colors"><Mail size={14} /> filexpertpermata@gmail.com</a></li>
                <li><a href="https://api.whatsapp.com/send/?phone=628119272020&text&type=phone_number&app_absent=0" className="group flex items-center gap-3 hover:text-green-700 transition-colors"><Phone size={14} /> +62 811-9272-020</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
            <p>© 2024 FILE EXPERT BY PERMATA GROUP. AKREDITASI ANRI. SELURUH HAK CIPTA DILINDUNGI.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-green-700 transition-colors">Privasi</a>
              <a href="#" className="hover:text-green-700 transition-colors">Syarat</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Style untuk animasi custom */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}} />
    </div>
  );
};

export default App;