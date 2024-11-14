export default function Intro({ title, subtitle, intro }) {
    return <div className="flex flex-col gap-4 items-center">
    <h1 className="text-5xl pb-4">{title}</h1>
    <h5 className="text-xl">{subtitle}</h5>
    <p className="text-base">{intro}</p>
    </div>
  }
  