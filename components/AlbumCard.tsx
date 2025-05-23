import Link from "next/link";

export default function AlbumCard({ album }: { album: any }) {
  return (
    <Link href={`/album/${album.id}`} className="w-40 flex-shrink-0 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200">
      <img src={album.cover} alt={album.title} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-white text-sm font-medium py-1 truncate">{album.title}</h3>
      <p className="text-gray-400 text-xs truncate">{album.artist}</p>
    </Link>
  );
}