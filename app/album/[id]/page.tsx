import Link from 'next/link';
import StarRating from '@/components/StarRating'; // tu componente cliente

interface Album {
  id: string;
  title: string;
  coverUrl: string;
  year: number;
  artist: { id: string; name: string };
  averageRating: number;
}

const mockAlbum: Album = {
  id: '1',
  title: 'Mi Álbum Mock',
  coverUrl: 'https://placehold.co/300x300?text=Album+Cover',
  year: 2021,
  artist: { id: '42', name: 'Artista Ejemplo' },
  averageRating: 4.2,
};

export default function AlbumPage({ params }: { params: { id: string } }) {
  // Aquí podrías hacer fetch real con params.id
  const album = mockAlbum;

  return (
    <main className="p-8">
      <div className="flex items-start space-x-8">
        <img
          src={album.coverUrl}
          alt={`Portada de ${album.title}`}
          width={300}
          height={300}
          className="rounded"
        />
        <div>
          <h1 className="text-2xl font-bold">{album.title}</h1>
          <p className="mt-2 text-gray-600">{album.year}</p>
          <Link
            href={`/artist/${album.artist.id}`}
            className="mt-4 inline-block font-bold hover:underline"
          >
            {album.artist.name}
          </Link>

          {/* Calificación promedio */}
          <p className="mt-4">Calificación promedio: {album.averageRating.toFixed(1)} ⭐</p>

          {/* Componente de calificación del usuario */}
          <div className="mt-4">
            <StarRating
              initialRating={0}   
            />
          </div>
        </div>
      </div>
    </main>
  );
}
