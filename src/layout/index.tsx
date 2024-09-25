// import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// import { changeCollapsed, changeTotal } from 'src/app/slices/layoutSlice';
// import { useAppDispatch, useTypedSelector } from 'src/app/store';
// import FilterPagination from 'src/components/filter/FilterPagination';
import LayoutHeader from './header';
import './layout.scss';
import Footer from './footer';

function DashboardLayout() {
  // const { menuMode, total } = useTypedSelector((state) => state.layout);
  // const dispatch = useAppDispatch();
  // const toggleCollapsed = () => {
  //   if (menuMode === 'close') {
  //     dispatch(changeCollapsed(true));
  //   }
  // };

  // //Content scrool helper
  // const contentRef = useRef<HTMLDivElement>(null);

  // // Reset total when change route
  // const location = useLocation();
  // useEffect(() => {
  //   contentRef.current.scrollTop = 0;
  //   dispatch(changeTotal(0));
  // }, [location.pathname]);

  return (
    <div>
      <div>
        <LayoutHeader />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
