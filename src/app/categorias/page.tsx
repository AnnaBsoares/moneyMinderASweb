import NavBar from "@/components/NavBar";
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import { getCategorias } from "../actions/categorias/getCategorias";
import Link from "next/link";

interface Categoria {
  id: number,
  nome: string,
  icone: string
}

export default async function Categorias() {

  const categorias: Categoria[] = await getCategorias()

  return ( 
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias" />

      <section className="flex flex-col gap-2 border-2 p-10 border-red-900 min-w-[600px] mt-4  rounded">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Categorias Cadastradas</h2>
         
        </div>
        
        {categorias.map(categoria =>
          <CategoriaItem categoria={categoria} />
        )}
         <Link href="/categorias/new">
            <Button color="primary" startContent={<Plus />} className="bg-red-800 w-full  mt-10">adicionar categoria</Button>
          </Link>
      </section>



    </main>

    
  );
}
