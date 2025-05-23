import SectionCarousel from '@/components/SectionCarousel';

const DUMMY = Array.from({ length: 10}).map((_, i) => ({
  id: `${i}`,
  title: `Álbum ${i + 1}`,
  artist: `Artista ${i + 1}`,
  cover: `https://placehold.co/150x150?text=Album+Cover+${i + 1}`,
}));

export default function Home() {
  return (
    <main className="space-y-8 py-8">
      <SectionCarousel title="Nuevos lanzamientos" albums={DUMMY} />
      <SectionCarousel title="Populares" albums={DUMMY} />
      <SectionCarousel title="Recomendados para ti" albums={DUMMY} />
      <SectionCarousel title="Hot" albums={DUMMY} />
      <SectionCarousel title="Similar a tus gustos" albums={DUMMY} />
    </main>
  );
}