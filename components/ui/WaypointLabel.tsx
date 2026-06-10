import { elevationLabel } from "@/lib/elevation";

export default function WaypointLabel({
  index,
  onPaper = false,
}: {
  index: number;
  onPaper?: boolean;
}) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.25em] ${
        onPaper ? "text-bg/60" : "text-fog"
      }`}
    >
      {elevationLabel(index)}
    </p>
  );
}
