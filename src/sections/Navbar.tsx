import Image from "next/image";
import LogoImage from "@/assets/images/logo.svg";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <section className="py-4">
            {/* mx-auto p-4 flex justify-between items-center */}
            <div className="container">
                <div className="grid grid-cols-2 border border-white/15 rounded-full px-4 py-2 items-center">
                    <div>
                        <Image src={LogoImage} alt="Logo" />
                    </div>
                    <div>
                        {" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-menu"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>{" "}
                    </div>
                    <div className="flex gap-4">
                        {navLinks.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-semibold"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
