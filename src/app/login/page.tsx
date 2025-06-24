import Logo from "@/components/ui/logo";

import LoginForm from "./client";

export default function LoginPage() {
    return (
        <main className="flex h-screen">
            <div className="absolute z-0 flex h-screen w-full justify-end overflow-hidden">
                <svg
                    width="1012"
                    height="1080"
                    viewBox="0 0 1012 1080"
                    fill="none"
                    className="pointer-events-none"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M519.372 242.036C785.079 -184.174 1150 -349.27 1334.45 -126.716C1668.42 276.255 1425 960.806 1187.32 1047.98C732.127 1214.92 200.019 2287.69 24.4072 1291.31C-94.2535 618.064 253.666 668.247 519.372 242.036Z"
                        fill="url(#paint0_linear_37_164)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_37_164"
                            x1="178.447"
                            y1="1678.27"
                            x2="1750.55"
                            y2="375.351"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F97316" />
                            <stop offset="1" stopColor="#93440D" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="z-10 flex w-full items-center justify-center">
                <div className="flex w-full flex-col-reverse items-center justify-center rounded-xl bg-card p-6 sm:mx-4 sm:w-full md:min-h-[50%] md:w-4/5 md:flex-row lg:w-1/2">
                    <LoginForm />
                    <div className="w-full py-6 sm:hidden md:flex md:w-1/2 md:justify-center">
                        <Logo width={512} height={512} className="size-36 dark:fill-primary" />
                    </div>
                </div>
            </div>
        </main>
    );
}
