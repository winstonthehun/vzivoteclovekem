export default function Intro({ title, subtitle, intro }) {
    return <>
    <h1 className="intro-title">{title}</h1>
    <h5 className="intro-subtitle">{subtitle}</h5>
    <p className="intro-intro">{intro}</p>
    </>
  }
  