export type InputFieldProps = {
    id: string;
    type: string;
    label: string;
    placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = (
    { id, type, label, placeholder }
) => {
    return (
        <div className='flex flex-col space-y-1'>
            <label
                htmlFor='email'
                className='text-sm font-semibold text-gray-500'
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                name={id}
                className='rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent' />
        </div>
    );
};
