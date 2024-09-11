import Button from "../../atoms/button/Button";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../../../firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Changed require to import
import { signUpWithEmail } from "../../../redux/containers/auth/actions";

export default function OAuth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            console.log(resultsFromGoogle);
            const res = axios.post('https://transport-hub-tawny.vercel.app/api/user/google', {
                name: resultsFromGoogle.user.displayName,
                email: resultsFromGoogle.user.email,
                googlePhotoUrl: resultsFromGoogle.user.photoURL,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            navigate('/')
            const data = await res.json()
            if (res.ok){
                dispatch(signUpWithEmail(data))
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Button
            btnClick={handleGoogleClick}
            bgColor={"rgb(247, 131, 18)"}
            radius={"0px"}
            btnText={"Google"}
        />
    )
}


