import { HabitatProvider } from "@/domain/habitatcontext";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <HabitatProvider>
      <main className="min-h-screen flex flex-col">
        <Header /> 
        <div className="flex-1 flex flex-col w-full">
          {children}
        </div>
        <Footer />
      </main>
    </HabitatProvider>
  );
}
