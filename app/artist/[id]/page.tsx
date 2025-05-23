import AlbumCard from "../../../components/AlbumCard";

const artist = {
  id: "1",
  name: "Artista Demo",
  albums: Array.from({ length: 4 }).map((_, i) => ({
    id: `${i + 1}`,
    title: `Demo Álbum ${i + 1}`,
    cover: `https://placehold.co/150x150?text=Album+Cover+${i + 1}`,
  })),
};

export default function ArtistPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{artist.name}</h1>
      <div className="grid grid-cols-4 gap-4">
        {artist.albums.map((alb) => (
          <AlbumCard key={alb.id} album={alb} />
        ))}
      </div>
    </div>
  );
}