"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

export interface BentoGridProps {
    items?: BentoItem[];
}

function BentoGrid({ items = [] }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
                        "border border-blue-900/40 bg-blue-950/20",
                        "hover:shadow-[0_2px_16px_rgba(59,130,246,0.15)]",
                        "hover:-translate-y-0.5 will-change-transform",
                        "col-span-1",
                        item.colSpan === 2 ? "md:col-span-2" : "",
                        item.colSpan === 3 ? "md:col-span-3" : "",
                        {
                            "shadow-[0_2px_16px_rgba(59,130,246,0.1)] -translate-y-0.5":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>

                    <div className="relative flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300">
                                {item.icon}
                            </div>
                            {item.status && (
                                <span
                                    className={cn(
                                        "text-xs font-medium px-2 py-1 rounded-lg",
                                        "bg-blue-500/10 text-blue-300",
                                        "transition-colors duration-300 group-hover:bg-blue-500/20"
                                    )}
                                >
                                    {item.status}
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-blue-50 tracking-tight text-[15px]">
                                {item.title}
                                <span className="ml-2 text-xs text-blue-400 font-normal">
                                    {item.meta}
                                </span>
                            </h3>
                            <p className="text-sm text-blue-300/80 leading-snug font-[425]">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex flex-wrap items-center gap-2 text-xs text-blue-400">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm transition-all duration-200 hover:bg-blue-500/20"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs text-blue-400/60 opacity-0 group-hover:opacity-100 transition-opacity">
                                {item.cta || "Explore →"}
                            </span>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-blue-500/20 to-transparent ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}

export { BentoGrid }
