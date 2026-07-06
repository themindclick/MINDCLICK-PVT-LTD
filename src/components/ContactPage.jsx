import { useState } from "react";
import { User, Mail, MessageCircle, Facebook, Instagram, Linkedin, Send, Phone, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // WhatsApp Intent Trigger Engine
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "94707780749"; // Your official line
    const baseMessage = formData.message 
      ? `Hello MindClick, my name is ${formData.name || 'Visitor'}. ${formData.message}` 
      : "Hello MindClick, I would like to query about your growth frameworks and engineering solutions.";
    
    const encodedText = encodeURIComponent(baseMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setResult("❌ Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setResult("Sending...");
    
    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("message", formData.message);
    submitData.append("access_key", "084024ca-3131-47ba-bb06-99d940d71645");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.log("Error", data);
        setResult("❌ " + data.message);
      }
    } catch (error) {
      setResult("❌ Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden text-[#000047] pt-24 pb-16">
      
      {/* Premium subtle architectural grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000047_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#000047]/5 border border-[#000047]/10 rounded-full">
            <span className="text-[#000047] text-xs font-bold tracking-widest uppercase">Secure Allocation Interface</span>
          </div>
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-normal mb-6 leading-tight uppercase"
            style={{ fontFamily: "'Sugo Display', sans-serif" }}
          >
            INITIALIZE YOUR <br />
            <span className="bg-[#000047] text-[#ffd600] px-3 transform -rotate-1 inline-block rounded mt-1">GROWTH LOOP</span>
          </h1>
          <p className="text-[#000047]/70 text-base sm:text-lg font-medium max-w-xl">
            Have a structural bottleneck or seeking a custom deployment framework? Connect instantly through our terminal fields or secure immediate smartphone diagnostic routing.
          </p>
        </div>

        {/* Master Control Layout Splitter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT PANEL: The Formal Web3Forms Engine (7 Columns) */}
          <div className="lg:col-span-7 bg-white border-2 border-[#000047] rounded-3xl p-6 sm:p-8 relative shadow-sm">
            <div className="absolute top-0 left-8 right-8 h-[4px] bg-[#ffd600]" />
            <h2 className="text-xl font-bold uppercase tracking-tight mb-8" style={{ fontFamily: "'Sugo Display', sans-serif" }}>Transmission Terminal</h2>
            
            <div className="space-y-6">
              
              {/* Name Block */}
              <div className="group">
                <label className="block text-[#000047]/60 text-xs font-bold uppercase tracking-widest mb-2.5">Corporate / Founder Identity</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-white border-2 border-[#000047]/10 rounded-xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:border-[#000047] transition-colors placeholder-[#000047]/30"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#000047]/30 group-focus-within:text-[#000047] transition-colors">
                    <User className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Email Block */}
              <div className="group">
                <label className="block text-[#000047]/60 text-xs font-bold uppercase tracking-widest mb-2.5">Communication Gateway Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-white border-2 border-[#000047]/10 rounded-xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:border-[#000047] transition-colors placeholder-[#000047]/30"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#000047]/30 group-focus-within:text-[#000047] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Message Block */}
              <div className="group">
                <label className="block text-[#000047]/60 text-xs font-bold uppercase tracking-widest mb-2.5">System Architecture Objectives</label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your structural growth requirements, code stacks, or marketing objectives..."
                    rows="4"
                    required
                    className="w-full bg-white border-2 border-[#000047]/10 rounded-xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:border-[#000047] transition-colors resize-none placeholder-[#000047]/30 leading-relaxed"
                  ></textarea>
                  <div className="absolute right-4 top-4 text-[#000047]/30 group-focus-within:text-[#000047] transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Standard Form Submit CTA */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-[#000047] hover:bg-[#000047]/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-2 text-xs uppercase tracking-widest"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Submit System Query</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {result && (
              <div className={`mt-6 p-4 rounded-xl text-center text-xs font-bold uppercase tracking-wide border ${
                result.includes('✅') 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                  : 'bg-red-50 text-red-700 border-red-200'
              }`}>
                {result}
              </div>
            )}
          </div>

          {/* RIGHT PANEL: Hot-Line Metrics & Instant WhatsApp Action (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 🟢 THE WHATSAPP PIPELINE CALLOUT GRID */}
           {/* 🟢 THE WHATSAPP PIPELINE CALLOUT GRID (RE-ENGINEERED IN WHATSAPP BRAND GREEN) */}
<div className="bg-[#25D366] text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-sm flex flex-col justify-between min-h-[220px] group border border-[#25D366]">
  {/* Modern internal light blend effect */}
  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
  
  <div>
    <span className="text-[9px] font-black tracking-widest text-[#000047] bg-white px-3 py-1 rounded-full uppercase inline-block mb-4 shadow-sm">
      Instant Smartphone Access
    </span>
    <h3 className="text-xl font-normal tracking-tight uppercase mb-2 flex items-center gap-2" style={{ fontFamily: "'Sugo Display', sans-serif" }}>
      {/* Official WhatsApp Chat SVG icon element */}
      <svg className="w-6 h-6 fill-white shrink-0" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.66.986 3.288 1.486 5.355 1.487 5.383 0 9.768-4.381 9.771-9.758.002-2.604-1.012-5.051-2.857-6.897C17.022 2.14 14.582 1.126 12.005 1.126c-5.387 0-9.771 4.382-9.775 9.76-.001 2.083.54 4.116 1.566 5.882l-.999 3.647 3.75-.983z"/>
      </svg>
      <span>Instant WhatsApp Routing</span>
    </h3>
    <p className="text-white/90 text-xs font-medium leading-relaxed max-w-sm">
      Prefer fast messaging? Bypass the formal form terminal to connect directly with our project execution team right over WhatsApp.
    </p>
  </div>

  <div className="pt-6">
    <button 
      onClick={handleWhatsAppRedirect}
      className="inline-flex items-center gap-2 bg-[#000047] hover:bg-white text-white hover:text-[#000047] font-bold text-xs uppercase tracking-widest px-5 py-3.5 rounded-xl transition-all duration-300 w-full sm:w-auto justify-center shadow-md shadow-black/10"
    >
      <span>Open Direct Chat</span>
      <ArrowUpRight className="w-4 h-4" />
    </button>
  </div>
</div>

            {/* General Communication Directory */}
            <div className="bg-white border-2 border-[#000047]/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-sm font-black text-[#000047]/40 uppercase tracking-widest">Directory Access</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#000047]/5 flex items-center justify-center shrink-0 border border-[#000047]/5">
                    <Mail className="w-4 h-4 text-[#000047]" />
                  </div>
                  <div className="leading-tight">
                    <span className="text-[10px] uppercase font-bold text-[#000047]/40 tracking-wider block">Email Architecture</span>
                    <a href="mailto:contact@themindclick.com" className="text-sm font-bold hover:opacity-70 transition-opacity">contact@themindclick.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#000047]/5 flex items-center justify-center shrink-0 border border-[#000047]/5">
                    <Phone className="w-4 h-4 text-[#000047]" />
                  </div>
                  <div className="leading-tight">
                    <span className="text-[10px] uppercase font-bold text-[#000047]/40 tracking-wider block">Voice Interface</span>
                    <a href="tel:+94707780749" className="text-sm font-bold hover:opacity-70 transition-opacity">+94 70 77 80749</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect Matrix */}
            <div className="bg-white border-2 border-[#000047]/10 rounded-3xl p-6 sm:p-8">
              <h3 className="text-sm font-black text-[#000047]/40 uppercase tracking-widest mb-4">Social Matrix Nodes</h3>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/share/1DDoTxshhE/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-[#000047]/5 hover:bg-[#000047] text-[#000047] hover:text-white flex items-center justify-center border border-[#000047]/5 transition-all"><Facebook className="w-4 h-4" /></a>
                <a href="https://www.instagram.com/themindclick.com_?igsh=dGJpcXptbW9mdWFl" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-[#000047]/5 hover:bg-[#000047] text-[#000047] hover:text-white flex items-center justify-center border border-[#000047]/5 transition-all"><Instagram className="w-4 h-4" /></a>
                <a href="https://www.linkedin.com/company/themindclick/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-[#000047]/5 hover:bg-[#000047] text-[#000047] hover:text-white flex items-center justify-center border border-[#000047]/5 transition-all"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}