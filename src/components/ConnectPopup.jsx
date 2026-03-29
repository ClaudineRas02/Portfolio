import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  Phone,
  X
} from "lucide-react";
import Contact from "./Contact";

export default function ConnectPopup({ onClose }) {
  return (
    <section className="w-full max-w-xl rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0f0f19] via-[#12121f] to-[#0f1019] p-6 text-white shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#e63946] text-lg font-semibold text-[#e63946]">
            R
          </div>
          <div>
            <h3 className="text-lg font-semibold">Claudine Rasamimanana</h3>
          </div>
        </div>
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-[#e63946]/40 hover:text-[#e63946]"
        >
          <X size={16} />
        </button>
      </header>

      <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-gray-500">
        <span className="h-2 w-2 rounded-full bg-[#e63946]" />
        Available for opportunities
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Contact
          icon={<Facebook size={18} />}
          label="Facebook"
          sublabel="Claudine R."
          href="https://www.facebook.com/claudine.rasamimanana"
        />
        <Contact
          icon={<Linkedin size={18} />}
          label="LinkedIn"
          sublabel="24 relations"
          href="https://www.linkedin.com/in/claudinerasamimanana/"
          className="border-[#1f6feb]/40 bg-[#0b1f36] hover:border-[#1f6feb]"
        />
        <Contact
          icon={<Github size={18} />}
          label="GitHub"
          sublabel="claudine-r"
          href="https://github.com/ClaudineRas02"
        />
        <Contact
          icon={<Phone size={18} />}
          label="WhatsApp"
          sublabel="+261 32 30 775 91"
        />
        <Contact
          icon={<Mail size={18} />}
          label="Mail"
          sublabel="hanitraclaudine"
          href="mailto:hanitraclaudine@gmail.com"
        />
      </div>
    </section>
  );
}
