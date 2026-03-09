import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="snap-start border-t border-gray-800 bg-[#0d1117] px-6 py-10 text-center text-white">
      <p className=" text-sm text-gray-700 md:text-lg">© 2026 Claudine Rasamimanana. All rights reserved.</p>
      <p className="mt-2 flex items-center justify-center gap-2 text-sm text-gray-700 md:text-lg">
        <Phone size={16} className="text-grey-700" />
        <span>hanitraclaudine@gmail.com | +261 38 14 577 74</span>
      </p>
    </footer>
  );
}
