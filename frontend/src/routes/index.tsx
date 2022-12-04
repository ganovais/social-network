import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";
import { GuestRoutes } from "./guest.routes";

export function Routes() {
   const { user } = useAuth();
   return user.token ? <AppRoutes /> : <GuestRoutes />;
}
