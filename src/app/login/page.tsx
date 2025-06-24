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
                            <stop offset="1" stop-color="#93440D" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="z-10 flex w-full items-center justify-center">
                <LoginForm />
            </div>
        </main>
    );
}
