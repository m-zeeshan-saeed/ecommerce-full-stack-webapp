import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-white border-t border-gray-200 px-5">

            <div className="w-full mx-auto py-12  justify-around flex flex-col md:flex-row md:flex-wrap gap-4">


                <div className="flex-1 min-w-[220px] md:max-w-[320px] mr-10">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-1">
                            <Image
                                src="/logo-symbol.svg"
                                alt="Brand logo"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="text-[#0d6efd] font-bold text-[30px] tracking-tight cursor-pointer opacity-50">
                            Brand
                        </div>
                    </div>

                    <div className="text-sm text-gray-500 mb-6">
                        Connecting global buyers and sellers through a trusted platform that enables businesses of all sizes to trade, grow, and succeed worldwide.
                    </div>


                    <div className="flex gap-3">
                        <ul className="flex justify-center mt-5 space-x-5">
                            <li>
                                <a href="https://www.facebook.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-500 dark:text-gray-400">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-500 dark:text-gray-400">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-500 dark:text-gray-400">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.github.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-500 dark:text-gray-400">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.dribbble.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-500 dark:text-gray-400">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="flex  flex-wrap gap-20 text-black">
                    <FooterColumn
                        title="About"
                        links={["About Us", "Find store", "Categories", "Blogs"]}
                    />
                    <FooterColumn
                        title="Partnership"
                        links={["About Us", "Find store", "Categories", "Blogs"]}
                    />
                    <FooterColumn
                        title="Information"
                        links={[
                            "Help Center",
                            "Money Refund",
                            "Shipping",
                            "Contact us",
                        ]}
                    />
                    <FooterColumn
                        title="For users"
                        links={["Login", "Register", "Settings", "My Orders"]}
                    />
                </div>


                <div className="min-w-[180px]">
                    <div className="font-medium mb-3 text-black">Get app</div>
                    <div className="space-y-2 flex flex-col">
                        <button className="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50  px-3 py-1.5 sm:px-4 sm:py-3 hover:bg-gray-700 focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-7 w-5 sm:h-7 sm:w-9"
                                viewBox="0 0 512 512">
                                <path
                                    d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z">
                                </path>
                            </svg>
                            <div className="ml-2 flex flex-col items-start leading-none">
                                <div className="mb-0 sm:text-xs text-[10px]  ">GET IT ON</div>
                                <div className="title-font sm:text-sm text-xs font-medium ">Google Play</div>
                            </div>
                        </button>
                        <button className="inline-flex items-center rounded-lg border border-gray-200 dark:text-white bg-gray-50 px-3 py-1.5 sm:px-4 sm:py-3 hover:bg-gray-700 focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-7 w-5 sm:h-7 sm:w-9"
                                viewBox="0 0 305 305">
                                <path
                                    d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z">
                                </path>
                                <path
                                    d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z">
                                </path>
                            </svg>
                            <div className="ml-2 flex flex-col items-start leading-none">
                                <div className="mb-0 sm:text-xs text-[10px] text-gray-600 dark:text-gray-300">Download on the</div>
                                <div className="title-font sm:text-sm text-xs font-medium dark:text-gray-200">App Store</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>


            <div className="bg-gray-50 border-t border-gray-200">
                <div className="w-full mx-auto px-15 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
                    <p>© 2023 Ecommerce.</p>
                    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
                        🇺🇸 English <span>▾</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FooterColumn({
    title,
    links,
}: {
    title: string;
    links: string[];
}) {
    return (
        <div className="min-w-[140px]">
            <div className="font-medium mb-3">{title}</div>
            <ul className="space-y-2 text-sm text-gray-500">
                {links.map((link) => (
                    <li key={link}>
                        <Link
                            href="#"
                            className="hover:text-blue-600 transition-colors"
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
