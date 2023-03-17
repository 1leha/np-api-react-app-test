import Layout from '../Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { StyledApp } from './App.styled';
import { lazy } from 'react';
import { FullscreenSpiner } from 'components/common/Spiners/Spiner';

const SearchPage = lazy(() => import('Pages/SearchPage'));
const PostOfficesPage = lazy(() =>
  import('Pages/PostOfficesPage/PostOfficesPage')
);
const PostOfficeDetales = lazy(() => import('components/PostOfficeDetales'));
const Status = lazy(() => import('../Status'));

export const App = () => {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FullscreenSpiner />} />

          <Route path="/check" element={<SearchPage />}>
            <Route path=":ttnId" element={<Status />} />
          </Route>

          <Route path="/post-office" element={<PostOfficesPage />}>
            <Route path=":officeId" element={<PostOfficeDetales />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </StyledApp>
  );
};
