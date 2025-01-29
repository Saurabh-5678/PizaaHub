import { useMediaQuery } from 'react-responsive';

function Responsive() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1224px)'
  });

  return (
    <div>
      {isDesktopOrLaptop && <p>Desktop Mode On</p>}
      {isTabletOrMobile && <p>Tablet/Mobile Mode On</p>}
    </div>
  );
}

export default Responsive;