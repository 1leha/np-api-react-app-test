import { Outlet, useParams } from 'react-router';

export const TtnInfoRoute = () => {
  const { ttnId } = useParams();

  console.log('TtnInfoRoute ttnId :>> ', ttnId);

  return ttnId ? <Outlet /> : <div>wewefwefewf</div>;
};
