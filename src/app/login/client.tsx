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

export default function LoginForm() {
    const loginForm = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
    });

    return (
        <>
            <Form {...loginForm}>
                <form className="flex w-full max-w-md flex-col gap-6">
                    <h1 className="text-4xl font-semibold text-center">Login</h1>
                    <FormField
                        control={loginForm.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Type your username"
                                        className="w-full"
                                        {...field}
                                    />
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
                                <div className="flex w-full justify-center">
                                    <FormLabel>One-Time Passcode</FormLabel>
                                </div>
                                <FormControl>
                                    <div className="flex justify-center">
                                        <InputOTP maxLength={6} {...field}>
                                            <InputOTPGroup>
                                                {[...Array(6)].map((_, i) => (
                                                    <InputOTPSlot
                                                        key={i}
                                                        index={i}
                                                        className="text-4xl size-14"
                                                    />
                                                ))}
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </div>
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
        </>
    );
}
