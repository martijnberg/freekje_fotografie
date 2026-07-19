/**
 * Rustig, decoratief tijdelijk beeldvlak.
 *
 * Bewust géén externe of definitieve fotografie. Dit vlak markeert waar later
 * een foto komt en gebruikt uitsluitend thematokens (geen losse kleurcodes).
 * Het is decoratief en daarom afgeschermd voor hulptechnologie.
 */
export function PlaceholderImage({
  ratio = "aspect-[4/3]",
  className = "",
}: {
  /** Tailwind aspect-ratio klasse, per toepassing bewust te kiezen. */
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`${ratio} w-full rounded-sm border border-foreground/10 bg-foreground/[0.06] ${className}`}
    />
  );
}
