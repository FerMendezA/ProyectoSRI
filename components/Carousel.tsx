import AlbumCard from "./AlbumCard";

export default function Carousel({ title, items }: { title: string; items: any[] }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
        {items.map((alb) => (
          <AlbumCard key={alb.id} album={alb} />
        ))}
      </div>
    </div>
  );
}