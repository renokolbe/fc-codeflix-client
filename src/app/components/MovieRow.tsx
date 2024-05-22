import Image from "next/image";

type MovieRowProps = {
  sectionTitle : string;
}

type MovieCardProps = {
  index : number;
}

const MovieCard = ({index} : MovieCardProps ) => (
  <div key={index} className='group relative h-28 min-w-[200px] cursor-pointer rounded
  bg-gradient-to-t from-transparent to-black transition-transform duration-200 ease-out hover:opacity-100 hover:scale-110 hover:z-50
  md:h-36 md:min-w-[260px]'>
    <Image
      src={`/item_${index}.png`}
      fill={true}
      alt='ITEM'
      className='rounded' />
  </div>
);

export function MovieRow( { sectionTitle } : MovieRowProps ) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex '>
        <h2 className='-ml-2 inline-flex text-2xl items-center font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='-ml-8 flex space-x-4  overflow-x-scroll p-6 scrollbar-hide'>
        {[1, 2, 3, 4, 5, 1, 2, 3].map((index) => (
          <MovieCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
