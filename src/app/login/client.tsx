"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { LoginSchema } from "@/lib/zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import Logo from "@/components/ui/logo";

export default function LoginForm() {
    const loginForm = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
    });

    return (
        <div className="flex w-full flex-col-reverse items-center justify-center rounded-xl bg-card p-6 sm:mx-4 sm:w-full md:min-h-[50%] md:w-4/5 md:flex-row lg:w-1/2">
            <Form {...loginForm}>
                <form className="flex w-full max-w-md flex-col gap-6 md:w-1/2">
                    <h1 className="text-4xl sm:text-center">Login</h1>
                    <hr />
                    <FormField
                        control={loginForm.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Type your username" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the username associated with your account.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={loginForm.control}
                        name="otp"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>OTP</FormLabel>
                                <FormControl>
                                    <InputOTP maxLength={6} {...field}>
                                        <InputOTPGroup>
                                            {[...Array(6)].map((_, i) => (
                                                <InputOTPSlot key={i} index={i} />
                                            ))}
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormDescription>
                                    Check your authentication app and enter the 6-digit code.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Login</Button>
                </form>
            </Form>
            <div className="w-full py-6 sm:hidden md:flex md:w-1/2 md:justify-center">
                <Logo className="size-36 dark:fill-primary" />
            </div>
        </div>
    );
}
