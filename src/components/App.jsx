import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import SearchPage from 'Pages/SearchPage';
import PostOffices from 'Pages/PostOfficesPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SearchPage />} />
        <Route path="/post-office" element={<PostOffices />} />
      </Route>
    </Routes>
  );
};
