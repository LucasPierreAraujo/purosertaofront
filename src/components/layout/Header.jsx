export default function Header() {
    return (
        <header className="flex justify-between items-center w-full bg-white sticky top-0 z-50 ">
            <div>
                <h1 className="text-2xl font-bold">
                    LOGO
                </h1>
            </div>
            <div>
                <ul className="flex gap-4 items-center">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
