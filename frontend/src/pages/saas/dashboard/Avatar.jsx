export default function Avatar({ name }) {
    const letter = name ? name[0].toUpperCase() : "U";

    return (
        <div className="h-10 w-10 bg-indigo-600 text-white flex items-center justify-center rounded-full">
            {letter}
        </div>
    );
}
