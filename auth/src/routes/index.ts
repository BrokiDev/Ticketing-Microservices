import userRoutes from "./users";
import authRoutes  from "./auth";


const Router = {
    users: userRoutes,
    auth: authRoutes
}

export default Router