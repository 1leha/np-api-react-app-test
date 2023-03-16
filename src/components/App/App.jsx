import Layout from '../Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import SearchPage from 'Pages/SearchPage';
import PostOfficesPage from 'Pages/PostOfficesPage/PostOfficesPage';
import Status from '../Status';
import { StyledApp } from './App.styled';

export const App = () => {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>info</div>} />

          <Route path="/check" element={<SearchPage />}>
            <Route path=":ttnId" element={<Status />} />
          </Route>

          <Route path="/post-office" element={<PostOfficesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </StyledApp>
  );
};
