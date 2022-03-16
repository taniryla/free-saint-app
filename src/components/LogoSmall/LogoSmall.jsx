import './LogoSmall.css';
import freesaintsmall from '../Layout/assets/freesaintsmall.svg';

export default function LogoSmall() {
  return (
    <div className="LogoSmall">
     <object className="logosmall" type="image/svg+xml" data={freesaintsmall}></object>
    </div>
  );
}