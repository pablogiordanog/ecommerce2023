import "./infouser.css"
import useAuth from "../../hook/useAuth";

const InfoUser = () => {
    const { user } = useAuth();
    return (
    <div>
        <h4>{user.name}</h4>
        <button>Cerrar Session</button>
    </div>
  )
}

export default InfoUser
