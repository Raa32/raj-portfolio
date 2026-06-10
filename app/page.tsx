import PortfolioRoot from "@/components/PortfolioRoot";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}) {
  const params = await searchParams;
  const initialView = params.view === "classic" ? "classic" : "3d";
  return <PortfolioRoot initialView={initialView} />;
}
