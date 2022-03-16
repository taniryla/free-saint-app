import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';
import { PageLayout } from '../../common/index';


export default function AuthPage({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <PageLayout>
    <main className="AuthPage">
      <div>
        <aside>
          <Logo />
        </aside>
          <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</h3>
      </div>
      {showLogin ? <LoginForm user={user} setUser={setUser} /> : <SignUpForm user={user} setUser={setUser} />}
    </main>
    </PageLayout>
  );
}