import './hamburger.css'
export function Hamburger({toogleMenuOpen, openMenu}) {
  return (
    <div className={"hamburger" + (openMenu ? ' show' : '')} onClick={toogleMenuOpen}>
      <div className="icon">
        <div className="first-bar"></div>
        <div className="second-bar"></div>
        <div className="third-bar"></div>
      </div>
    </div>
  )
}