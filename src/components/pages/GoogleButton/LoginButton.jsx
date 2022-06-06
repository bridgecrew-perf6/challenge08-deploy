import { GoogleLogin } from 'react-google-login';

const clientID =
  '889880432328-lnhmpvvnj1auirkeqcogpgp4bfhiejn3.apps.googleusercontent.com';

export default function LoginButton() {
  const onSuccess = (res) => {
    console.log('LOGIN SUCCESS! Current user: ', res.profileObj);
  };
  const onFailure = (res) => {
    console.log('LOGIN FAILED! res: ', res);
  };

  return (
    <>
      <GoogleLogin
        className="w-100 mt-3"
        clientId={clientID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </>
  );
}
