export function DuneSweep({ active }) {
  return (
    <div id="dune-sweep" className={active ? 'active' : ''} aria-hidden="true">
      <svg id="ds-svg" viewBox="0 0 3000 260" overflow="visible">
        <path className="dt1" d="M-480 60 C-240 24, 0 24, 240 60 C480 96, 720 96, 960 60 C1200 24, 1440 24, 1680 60 C1920 96, 2160 96, 2400 60 C2640 24, 2880 24, 3120 60" />
        <path className="dt2" d="M-320 130 C-80 94, 160 94, 400 130 C640 166, 880 166, 1120 130 C1360 94, 1600 94, 1840 130 C2080 166, 2320 166, 2560 130 C2800 94, 3040 94, 3280 130" />
        <path className="dt3" d="M-160 200 C80 164, 320 164, 560 200 C800 236, 1040 236, 1280 200 C1520 164, 1760 164, 2000 200 C2240 236, 2480 236, 2720 200 C2960 164, 3200 164, 3440 200" />
      </svg>
    </div>
  )
}
