import './Logo.css';
import freesaint from '../Layout/assets/freesaint.svg';

export default function Logo() {
  return (
    <div className="Logo">
     <object className="logo" type="image/svg+xml" data={freesaint}></object>
    </div>
  );
}




