export default function layout( { children } : { children: React.ReactNode } ) {
    return (
        <div
            style={{ backgroundImage: "url('/background.jpg')" }} 
            className='bg-cover bg-center bg-no-repeat text-white flex justify-center opacity-80'>
            <div className='flex min-h-screen flex-col items-center justify-center py-2'>
                {children}
            </div>
        </div>
    )
}