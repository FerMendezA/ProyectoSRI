import AlbumCard from "@/components/AlbumCard";

const ratedAlbums = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  title: `Álbum Calificado ${i + 1}`,
  artist: `Artista ${i + 1}`,
  cover: `https://placehold.co/150x150?text=Album+Cover+${i + 1}`,
}));

export default function ProfilePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Mi Perfil</h1>
      <div className="grid grid-cols-4 gap-4">
        {ratedAlbums.map((alb) => (
          <AlbumCard key={alb.id} album={alb} />
        ))}
      </div>
    </div>
  );
}