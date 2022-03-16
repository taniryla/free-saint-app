import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogoSmall from '../../components/LogoSmall/LogoSmall';
import { PageLayoutNoHeader } from '../../common/index';


export default function AuthPage({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <PageLayoutNoHeader>
    <main className="AuthPage">
      <div>
        <aside>
          <LogoSmall />
        </aside>
          <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</h3>
      </div>
      {showLogin ? <LoginForm user={user} setUser={setUser} /> : <SignUpForm user={user} setUser={setUser} />}
    </main>
    </PageLayoutNoHeader>
  );
}