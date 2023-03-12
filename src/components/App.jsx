import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import Search from 'Pages/Search';
import PostOffices from 'Pages/PostOffices';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Search />} />
        <Route path="/post-office" element={<PostOffices />} />
      </Route>
    </Routes>
  );
};
