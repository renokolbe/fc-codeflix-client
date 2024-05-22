import { Inter } from 'next/font/google';
import Header from "./components/Header";
import { MovieRow } from "./components/MovieRow";
import { Banner } from "./components/Banner";

const inter = Inter({subsets : ['latin']});

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b from-transparent to-black  lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />
        <MovieRow sectionTitle="Novos" />
        <MovieRow sectionTitle="Top 10" />
      </main>
    </div>
  );

}
