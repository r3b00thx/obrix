"use client";

import { CircleAlert, CircleCheck, CircleX, Info } from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;
const customIcons = {
    success: <CircleCheck className="text-success" />,
    warning: <CircleAlert className="text-warning" />,
    error: <CircleX className="text-error" />,
    info: <Info className="text-primary" />,
};

/**
 * 🔔 Notification System - Wrapper around Sonner Toast API
 *
 * Easy-to-use function for showing toast notification with multiple styles.
 * Keeps notifications consistent across the app
 *
 * @function info - Shows an info notification (default style)
 *
 * @function success - Show a success notification (after a from is submitted)
 *
 * @function error - Show an error notification (on request failure)
 *
 * @function warning - show a warning notification (for incomplete data )
 *
 */

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="toaster group"
            icons={customIcons}
            duration={999999}
            toastOptions={{
                classNames: {
                    error: "group toast group-[.toaster]:bg-toast group-[.toaster]:text-foreground group-[.toaster]:border-error group-[.toaster]:shadow-error/25 group-[.toaster]:hover:bg-error/10 group-[.toaster]:shadow-lg group-[.toaster]:transition-all",
                    warning:
                        "group toast group-[.toaster]:bg-toast group-[.toaster]:text-foreground group-[.toaster]:border-warning group-[.toaster]:shadow-warning/25 group-[.toaster]:hover:bg-warning/10 group-[.toaster]:shadow-lg group-[.toaster]:transition-all",
                    success:
                        "group toast group-[.toaster]:bg-toast group-[.toaster]:text-foreground group-[.toaster]:border-success group-[.toaster]:shadow-success/25 group-[.toaster]:hover:bg-success/10 group-[.toaster]:shadow-lg group-[.toaster]:transition-all",
                    info: "group toast group-[.toaster]:bg-toast group-[.toaster]:text-foreground group-[.toaster]:border-primary/65 group-[.toaster]:shadow-primary/25 group-[.toaster]:hover:bg-primary/10 group-[.toaster]:shadow-lg group-[.toaster]:transition-all",
                    toast: "group toast group-[.toaster]:bg-toast group-[.toaster]:text-foreground group-[.toaster]:gap-3 group-[.toaster]:flex group-[.toaster]:items-center group-[.toaster]:",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton:
                        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                },
            }}
            {...props}
        />
    );
};

export { Toaster };
