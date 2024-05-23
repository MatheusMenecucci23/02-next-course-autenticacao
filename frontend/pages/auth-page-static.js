import React from 'react';
import { authService } from '../auth/authService';

function useSession(){
  const [session, setSession] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  authService.getSession()

  return{
    data:session,
    error,
    loading
  }
}


function AuthPageStatic(props){
  const { loading, error, data } = useSession();
  console.log(session);
  return(
    <div>
      <h1>
        Auth Page Static
      </h1>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  )
}

export default AuthPageStatic;

