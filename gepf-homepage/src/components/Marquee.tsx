const items = [
  { text: 'Software Solutions', hl: false },
  { text: '✦', hl: true },
  { text: 'Vorarlberg, Austria', hl: false },
  { text: '✦', hl: true },
  { text: 'GEPF.at', hl: false },
  { text: '✦', hl: true },
  { text: 'Open for Projects', hl: false },
  { text: '✦', hl: true },
]

const doubled = [...items, ...items]

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <div className="divider-track" aria-hidden={hidden}>
      {doubled.map((item, i) => (
        <span key={i} className={item.hl ? 'divider-item hl' : 'divider-item'}>
          {item.text}
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="divider" aria-hidden="true">
      <Track />
      <Track hidden />
    </div>
  )
}
