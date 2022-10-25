import { Route, Routes } from 'react-router-dom';
import { Friends } from '../screens/Friends';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Profile } from '../screens/Profile';
import { ProfileMe } from '../screens/ProfileMe';
import { Register } from '../screens/Register';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/profile/me" element={<ProfileMe />} />
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
  );
}
