import { elevationLabel } from "@/lib/elevation";

export default function WaypointLabel({ index }: { index: number }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.25em] text-fog">
      {elevationLabel(index)}
    </p>
  );
}
