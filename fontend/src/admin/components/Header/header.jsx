import "./style.scss";
import whiteLogo from "../../../shared/assets/logo/whiteLogo.svg"


function Header() {
    return (
      <>
        <div className="header">
          <a href="/">
            <img className="header__logo" src={whiteLogo}/>
          </a>
          <a href="/">
            <img className="header__info" src="https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg"/>
          </a>
        </div>
      </>
    );
  }
export default Header;