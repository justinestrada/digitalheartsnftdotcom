
import styles from '../styles/Login.module.css'
// import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Login() {
  const {authenticate, authError} = useMoralis();
  return (
    <>
      <button onClick={authenticate} className="btn btn-primary">Connect Wallet</button>
      {
        authError && (
          <small className={styles.error}>Error: {authError.name}<br/>{authError.message}</small>
        )
      }
    </>
  )
}

export default Login