import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";

import LoginForm from "./client";

export default function LoginPage() {
    return (
        <div className="relative flex items-center justify-center ">
            <div className="relative flex w-screen justify-end">
                <svg
                    width="1012"
                    height="1080"
                    viewBox="0 0 1012 1080"
                    fill="none"
                    className="pointer-events-none max-h-[calc(100vh)] "
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
            <Card className="absolute z-10 max-w-5xl shadow-2xl shadow-card md:w-full">
                <CardContent className="p-8">
                    <div className="flex gap-4">
                        <div className="w-full">
                            <LoginForm />
                        </div>
                        <Separator orientation="vertical" className="mx-6 hidden h-96 md:block " />
                        <div className="hidden w-full flex-col items-center justify-center gap-4 py-6 md:flex">
                            <Logo
                                width={137.75}
                                height={153}
                                className="size-36 fill-primary shadow-2xl shadow-primary"
                            />
                            <p className="text-center text-sm text-muted-foreground ">
                                A private, real-time communication app built with Next.js 14, React,
                                and Prisma. Designed for maximum privacy, control, and
                                performance.{" "}
                            </p>
                            <div className="flex">
                                <Link
                                    href={"https://github.com/r3b00thx/obrix"}
                                    target="_blank"
                                    className="flex items-center gap-2 transition-all hover:text-primary ">
                                    <FaGithub /> Repository
                                </Link>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
