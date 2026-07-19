import { WorkImageView } from "@/components/work-image-view";
import type { ImageSpan, WorkImage } from "@/content/work-areas";

/**
 * Fotoselectie met een rustig, afwisselend ritme. Op mobiel altijd één kolom;
 * vanaf 1024 px een tweekoloms-grid waarin brede beelden de volle breedte
 * innemen en smalle beelden per twee naast elkaar staan. Geen masonry.
 */

const spanClass: Record<ImageSpan, string> = {
  full: "lg:col-span-2",
  half: "lg:col-span-1",
};

const spanSizes: Record<ImageSpan, string> = {
  full: "(min-width: 1024px) 1120px, 100vw",
  half: "(min-width: 1024px) 544px, 100vw",
};

const placeholderTones = ["neutral", "warm", "deep"] as const;

export function Gallery({ images }: { images: WorkImage[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
      {images.map((image, index) => {
        const span = image.span ?? "full";
        return (
          <figure key={image.src} className={spanClass[span]}>
            <WorkImageView
              image={image}
              sizes={spanSizes[span]}
              tone={placeholderTones[index % placeholderTones.length]}
            />
          </figure>
        );
      })}
    </div>
  );
}
