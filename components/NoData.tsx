export default function NoData({ message = "No hay datos" }: { message?: string }) {
  return <p className="text-center text-gray-500 mt-4">{message}</p>;
}