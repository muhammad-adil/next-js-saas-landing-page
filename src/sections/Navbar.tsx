import Image from "next/image";
import LogoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <section className="py-4 lg:py-8">
            {/* mx-auto p-4 flex justify-between items-center */}
            <div className="container max-w-5xl">
                <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full px-4 p-2 md:pr-2 items-center">
                    <div>
                        <Image
                            src={LogoImage}
                            alt="Logo"
                            className="h-9 md:h-auto w-auto"
                        />
                    </div>
                    {/* hidden  */}
                    <div className="lg:flex justify-center items-center">
                        <nav className="flex gap-4 font-medium items-center hidden md:inline-flex">
                            {navLinks.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-semibold"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu md:hidden"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                        <Button variant="primary" className="hidden lg:inline-flex items-center md:inline-flex">
                            Log In
                        </Button>
                        <Button variant="secondary" className="hidden lg:inline-flex items-center md:inline-flex">Sign Up</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
