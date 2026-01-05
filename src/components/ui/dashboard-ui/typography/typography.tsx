import { cn } from "@/lib/utils";

export function TypographyH1({ children, className }: defaultTypographyType) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: defaultTypographyType) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: defaultTypographyType) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: defaultTypographyType) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }: defaultTypographyType) {
  return (
    <p className={cn("leading-5.5 [&:not(:first-child)]:mt-2 whitespace-pre-line", className)}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({
  children,
  className,
}: defaultTypographyType) {
  return (
    <blockquote className={cn("border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}

export function TypographyInlineCode({
  children,
  className,
}: defaultTypographyType) {
  return (
    <code
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
}

export function TypographyLead({ children, className }: defaultTypographyType) {
  return (
    <p className={cn("text-muted-foreground text-xl", className)}>{children}</p>
  );
}

export function TypographyLarge({
  children,
  className,
}: defaultTypographyType) {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
}

export function TypographySmall({
  children,
  className,
}: defaultTypographyType) {
  return (
    <small className={cn("text-sm leading-none font-medium", className)}>
      {children}
    </small>
  );
}

export function TypographyMuted({
  children,
  className,
}: defaultTypographyType) {
  return (
    <p className={cn("text-muted-foreground text-xs sm:text-sm", className)}>
      {children}
    </p>
  );
}
