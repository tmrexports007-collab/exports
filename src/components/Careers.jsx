import React, { useState, useEffect } from "react";
import { FaLeaf, FaTimes, FaUpload, FaFilePdf, FaFileWord, FaFileAlt } from "react-icons/fa";
import axios from "axios";

export default function CareerSection() {
  const [open, setOpen] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [resumePreview, setResumePreview] = useState(null);
  const [resumeType, setResumeType] = useState("");
  const [submitState, setSubmitState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", message: "", resume: null,
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      const file = files[0];
      if (!file) return;
      setFormData({ ...formData, resume: file });
      setResumeName(file.name);
      setResumeType(file.type);
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (ev) => setResumePreview(ev.target.result);
        reader.readAsDataURL(file);
      } else {
        setResumePreview(null);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRemoveFile = () => {
    setFormData({ ...formData, resume: null });
    setResumeName(""); setResumePreview(null); setResumeType("");
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setSubmitState("submitting");
  setErrorMsg(""); // clear old error

  const data = new FormData();
  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("message", formData.message);
  data.append("resume", formData.resume);

  try {
    await axios.post("https://email-j44m.onrender.com/api/careers", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setSubmitState("submitted");

    setTimeout(() => {
      setOpen(false);
      setSubmitState("idle");
      setResumeName("");
      setResumePreview(null);
      setResumeType("");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        resume: null,
      });

    }, 1500);

  } catch (error) {
    setErrorMsg("Something went wrong. Please try again.");
    setSubmitState("idle");
  }
};

  const getFileIcon = () => {
    if (resumeType === "application/pdf")
      return <FaFilePdf style={{ color: "#f87171", fontSize: 26 }} />;
    if (resumeType.includes("word") || resumeType.includes("document"))
      return <FaFileWord style={{ color: "#60a5fa", fontSize: 26 }} />;
    return <FaFileAlt style={{ color: "rgba(134,239,172,0.6)", fontSize: 26 }} />;
  };

  const formatFileSize = (file) => {
    if (!file) return "";
    const kb = file.size / 1024;
    return kb < 1024 ? `${kb.toFixed(1)} KB` : `${(kb / 1024).toFixed(1)} MB`;
  };

 const perks = [
  { icon: "🌾", text: "Work with premium agricultural exports including rice, grains, and spices" },
  { icon: "🦐", text: "Be part of the fast-growing seafood export supply chain" },
  { icon: "🌍", text: "Connect with international buyers across global markets" },
  { icon: "📈", text: "Accelerated career growth in global trade and export operations" },
  { icon: "🤝", text: "Collaborative culture with a focus on quality and sustainability" },
];

  return (
    <>
      <style>{`

@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@300;600;800&family=DM+Sans:wght@300;400;500;600&display=swap');

.font-serif{
  font-family:'Fraunces',serif;
}

.font-sans{
  font-family:'DM Sans',sans-serif;
}

/* Animations */

@keyframes floatOrb{
  0%,100%{transform:translate(0,0) scale(1);}
  33%{transform:translate(20px,-30px) scale(1.05);}
  66%{transform:translate(-15px,20px) scale(.97);}
}

.animate-floatOrb{
  animation:floatOrb 8s ease-in-out infinite;
}

@keyframes fadeIn{
  from{opacity:0;}
  to{opacity:1;}
}

.animate-fadeIn{
  animation:fadeIn .2s ease;
}

@keyframes slideUp{
  from{
    opacity:0;
    transform:translateY(40px) scale(.97);
  }
  to{
    opacity:1;
    transform:translateY(0) scale(1);
  }
}

.animate-slideUp{
  animation:slideUp .3s cubic-bezier(.34,1.56,.64,1);
}

/* Scrollbar */

.scrollbar-thin::-webkit-scrollbar{
  width:6px;
}

.scrollbar-thin::-webkit-scrollbar-track{
  background:transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb{
  background:rgba(74,222,128,.3);
  border-radius:3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover{
  background:rgba(74,222,128,.5);
}

`}</style>

      <div className="font-sans ">
        <section id="careers" className="relative w-full  bg-gradient-to-br from-[#0a1628] scroll-mt-5  via-[#0d2137] via-[#0a2818] to-[#071a10] overflow-hidden py-10 lg:py-20 flex items-center">
          {/* Background orbs */}
          <div className="absolute w-[420px] h-[420px] bg-gradient-to-r from-green-500/18 to-transparent rounded-full blur-3xl top-[-120px] right-[-120px] animate-floatOrb" />
          <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-emerald-500/14 to-transparent rounded-full blur-3xl bottom-[-80px] left-[-80px] animate-floatOrb" style={{ animationDelay: '-3s' }} />
          <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-green-400/10 to-transparent rounded-full blur-3xl top-[40%] left-[38%] animate-floatOrb" style={{ animationDelay: '-5s' }} />

          {/* Background noise overlay */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(34,197,94,0.13),transparent_60%)]"></div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_80%_at_80%_80%,rgba(16,185,129,0.10),transparent_60%)]"></div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_40%_40%_at_60%_30%,rgba(74,222,128,0.07),transparent_50%)]"></div>

          <div className="relative z-10 max-w-7xl px-4 mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/28 text-green-300 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-6 backdrop-blur">
                <FaLeaf style={{ color: "#4ade80", fontSize: 11 }} />
                Careers at TMR Agro Marine Export
              </div>

              <h2 className="font-serif italic text-[clamp(2.4rem,5vw,3.6rem)] text-2xl lg:text-5xl  leading-[1.1] text-green-50 mb-5 ">
                Grow Your Career<br />
                <span className="bg-gradient-to-r from-green-400 to-cyan-300 bg-clip-text text-transparent">
                  With TMR Agro Marine
                </span>
              </h2>

              <p className="text-green-200/55 text-sm leading-relaxed mb-10 max-w-[400px] font-light">
               At TMR Agro Export, we specialize in delivering premium agricultural products 
and high-quality seafood to global markets. Join our team and be part of a 
company committed to quality, sustainability, and international trade excellence.
              </p>

              <button
                className="inline-flex items-center gap-2.5 border-green-400 text-white px-8 py-3.5 rounded-xl text-sm font-semibold cursor-pointer
shadow-[0_8px_32px_rgba(22,163,74,0.45),0_0_0_1px_rgba(34,197,94,0.35)]

hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200
relative overflow-hidden tracking-wide group"
                onClick={() => setOpen(true)}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent opacity-0  transition-opacity"></span>
                Apply Now
                <span className="text-xl inline-block group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Right — Glass Card */}
            <div className="bg-white/4 border border-white/9 rounded-2xl p-4 md:p-9 backdrop-blur-xl shadow-[0_24px_64px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.09),inset_0_-1px_0_rgba(0,0,0,0.2)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400/60 via-cyan-300/40 to-transparent"></div>

              <h3 className="font-serif text-lg font-semibold text-green-50 mb-7 tracking-tight">
                Why Work With Us?
              </h3>

              <ul className="flex flex-col gap-2.5">
                {perks.map((perk, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-white/3 border border-white/6 hover:bg-green-400/7 hover:border-green-400/20 hover:translate-x-1 transition-all duration-200 cursor-default group"
                  >
                    <span className="w-[38px] h-[38px] bg-green-400/9 border border-green-400/18 rounded-xl flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-green-400/16 group-hover:scale-108 group-hover:-rotate-4 transition-all duration-200">
                      {perk.icon}
                    </span>
                    <span className="text-[13.5px] text-green-200/75 font-normal leading-relaxed">
                      {perk.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Modal */}
        {open && (
          <div
            className="fixed inset-0 z-60 flex items-center justify-center p-5 bg-black/72 backdrop-blur-md animate-fadeIn"
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <div className="bg-[#0a1628]/96 border border-white/11 rounded-2xl w-full max-w-[600px] max-h-[92vh] overflow-y-auto shadow-[0_32px_80px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.11)] backdrop-blur-2xl animate-slideUp scrollbar-thin">
              <div className="relative p-8 pb-7 border-b border-white/7 bg-gradient-to-r from-green-600/13 to-emerald-600/8">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 via-cyan-300 to-transparent"></div>

                <button
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/7 border border-white/11 text-white/55 flex items-center justify-center cursor-pointer hover:bg-red-500/18 hover:border-red-500/35 hover:text-red-300 hover:rotate-90 transition-all duration-200 text-xs"
                  onClick={() => setOpen(false)}
                >
                  <FaTimes />
                </button>

                <p className="text-[11px] font-semibold tracking-wider uppercase text-green-400 mb-2 flex items-center gap-1.5">
                  🌿 Join Our Team
                </p>

                <h3 className="font-serif text-2xl font-extrabold text-green-50 mb-1.5 tracking-tight">
                  Apply for a Position
                </h3>

                <p className="text-xs text-green-200/45 font-light">
                  Fill in your details and we'll get back to you shortly.
                </p>
              </div>

              <div className="p-8 pt-7">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10.5px] font-semibold tracking-wider uppercase text-green-300/65">Full Name</label>
                      <input
                        type="text" name="name" placeholder="Jane Doe"
                        required onChange={handleChange}
                        className="bg-white/4 border border-white/9 rounded-xl px-4 py-3 text-[13.5px] text-green-50 font-sans outline-none focus:bg-green-400/5 focus:border-green-400/38 focus:shadow-[0_0_0_3px_rgba(74,222,128,0.07)] transition-all duration-200 w-full placeholder:text-green-300/22"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10.5px] font-semibold tracking-wider uppercase text-green-300/65">Phone</label>
                      <input
                        type="tel" name="phone" placeholder="+91 98765 43210"
                        required onChange={handleChange}
                        className="bg-white/4 border border-white/9 rounded-xl px-4 py-3 text-[13.5px] text-green-50 font-sans outline-none focus:bg-green-400/5 focus:border-green-400/38 focus:shadow-[0_0_0_3px_rgba(74,222,128,0.07)] transition-all duration-200 w-full placeholder:text-green-300/22"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-4">
                    <label className="text-[10.5px] font-semibold tracking-wider uppercase text-green-300/65">Email Address</label>
                    <input
                      type="email" name="email" placeholder="jane@example.com"
                      required onChange={handleChange}
                      className="bg-white/4 border border-white/9 rounded-xl px-4 py-3 text-[13.5px] text-green-50 font-sans outline-none focus:bg-green-400/5 focus:border-green-400/38 focus:shadow-[0_0_0_3px_rgba(74,222,128,0.07)] transition-all duration-200 w-full placeholder:text-green-300/22"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 mt-4">
                    <label className="text-[10.5px] font-semibold tracking-wider uppercase text-green-300/65">Cover Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about yourself and why you'd like to join TMR Agro Export..."
                      rows="3" required onChange={handleChange}
                      className="bg-white/4 border border-white/9 rounded-xl px-4 py-3 text-[13.5px] text-green-50 font-sans outline-none focus:bg-green-400/5 focus:border-green-400/38 focus:shadow-[0_0_0_3px_rgba(74,222,128,0.07)] transition-all duration-200 w-full placeholder:text-green-300/22 resize-none leading-relaxed"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 mt-4">
                    <label className="text-[10.5px] font-semibold tracking-wider uppercase text-green-300/65">Resume / CV</label>

                    {!formData.resume ? (
                      <label className="border-2 border-dashed border-white/10 rounded-xl py-7 px-5 flex flex-col items-center gap-2.5 cursor-pointer hover:border-green-400/38 hover:bg-green-400/4 transition-all duration-250 group">
                        <div className="w-12 h-12 rounded-xl bg-green-400/9 border border-green-400/20 flex items-center justify-center group-hover:bg-green-400/16 group-hover:scale-108 transition-all duration-200">
                          <FaUpload style={{ color: "#4ade80", fontSize: 16 }} />
                        </div>
                        <p className="text-[13.5px] font-semibold text-green-50/80 text-center">Click to upload your resume</p>
                        <p className="text-[11.5px] text-green-300/32 text-center">PDF, DOC, DOCX, PNG, JPG — max 5MB</p>
                        <input
                          type="file" name="resume" required
                          onChange={handleChange} className="hidden"
                          accept=".pdf,.doc,.docx,image/*"
                        />
                      </label>
                    ) : (
                      <div className="border border-green-400/18 rounded-xl p-4 bg-green-400/4 flex items-center gap-3.5 relative">
                        <button type="button" className="absolute top-3 right-3 w-[26px] h-[26px] rounded-full bg-red-500/9 border border-red-500/20 text-red-300 flex items-center justify-center cursor-pointer hover:bg-red-500/22 hover:border-red-500/45 hover:scale-110 transition-all duration-200 text-[10px]" onClick={handleRemoveFile}>
                          <FaTimes />
                        </button>

                        {resumePreview ? (
                          <div className="w-[52px] h-[52px] rounded-xl overflow-hidden border border-green-400/22 flex-shrink-0">
                            <img src={resumePreview} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-[52px] h-[52px] rounded-xl bg-white/5 border border-white/9 flex items-center justify-center flex-shrink-0">
                            {getFileIcon()}
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          <p className="text-[13.5px] font-semibold text-green-50 truncate max-w-[260px]">{resumeName}</p>
                          <p className="text-[11.5px] text-green-300/45 mt-0.5">{formatFileSize(formData.resume)}</p>
                          <span className="inline-flex items-center gap-1 mt-1.5 text-[11px] font-semibold text-green-400 bg-green-400/10 border border-green-400/22 px-2.5 py-0.5 rounded-full">✓ Ready to upload</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitState === "submitting"}
                    className="w-full border-green-200 text-white border-none rounded-xl px-4 py-3.5 text-sm font-semibold font-sans cursor-pointer mt-2 flex items-center justify-center gap-2 shadow-[0_8px_32px_rgba(22,163,74,0.32),inset_0_1px_0_rgba(255,255,255,0.18)] hover:-translate-y-0.5 active:scale-98 transition-all duration-250 relative overflow-hidden tracking-wide group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitState === "idle" && (
                      <>
                        Submit Application <span className="text-lg">→</span>
                      </>
                    )}

                    {submitState === "submitting" && (
                      <>
                        Submitting...
                      </>
                    )}

                    {submitState === "submitted" && (
                      <>
                        Application Submitted ✓
                      </>
                    )}
                  </button>

                  {errorMsg && (
  <p className="text-red-400 text-sm mt-3 text-center">
    {errorMsg}
  </p>
)}
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}