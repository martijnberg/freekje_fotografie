/**
 * Rustig, decoratief tijdelijk beeldvlak dat een toekomstige fotografische
 * positie markeert.
 *
 * Bewust géén externe fotografie, gradients of drukke decoraties. Elke tint is
 * een vlakke, subtiele variant die uitsluitend thematokens gebruikt (geen losse
 * kleurcodes). Later te vervangen door `next/image`.
 */

export type PlaceholderTone = "neutral" | "warm" | "deep";

const toneClassName: Record<PlaceholderTone, string> = {
  neutral: "bg-foreground/[0.05]",
  warm: "bg-accent/[0.07]",
  deep: "bg-foreground/[0.09]",
};

export function PlaceholderImage({
  tone = "neutral",
  ratio = "aspect-[4/3]",
  className = "",
}: {
  /** Vlakke, subtiele tint zodat de drie vlakken onderling verschillen. */
  tone?: PlaceholderTone;
  /** Tailwind aspect-ratio klasse, per toepassing bewust te kiezen. */
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`${ratio} w-full rounded-sm ${toneClassName[tone]} ${className}`}
    />
  );
}
