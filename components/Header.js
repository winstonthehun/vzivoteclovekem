export default function Header() {

  const links =  [
    { url: "/", label: "Home" },
    { url: "/about", label: "About" },
    { url: "/contact", label: "Contact" },
  ];

  return <nav className="flex bg-red-200 p-4 w-full justify-center opacity-90 drop-shadow">
    {links.map(({ url, label }) => <a key={url} href={url}>{label}</a>)}
  </nav>
}
