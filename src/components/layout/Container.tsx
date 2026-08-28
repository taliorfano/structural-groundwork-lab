import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** "wide" = full 1280px editorial grid, "narrow" = reading column */
  width?: "wide" | "narrow";
};

/**
 * Responsive container. Max content width 1280px with generous horizontal
 * margins (20–24px on mobile), per 06_Site_Design_System.md §10.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
  width = "wide",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        width === "wide" ? "max-w-[1280px]" : "max-w-[46rem]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
