import Buscador from "@/components/Buscador";
import InfoDev from "@/components/InfoDev";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="bg-primary">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <Buscador />
      </main>
      <InfoDev />
    </div>
  );
}