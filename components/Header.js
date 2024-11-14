export default function Header() {

  const links =  [
    { url: "/", label: "Home" },
    { url: "/about", label: "About" },
    { url: "/contact", label: "Contact" },
  ];

  return <nav>
    {links.map(({ url, label }) => <a key={url} href={url}>{label}</a>)}
  </nav>
}
