
import { useAuth } from "../../context/AuthContext";

export const UserDisplayName = () => {
    const { user } = useAuth()
    return (
        <div className={"userDisplayName-container"}>
            <p>{user ? user.displayName : ""}</p>
        </div>
    )

}