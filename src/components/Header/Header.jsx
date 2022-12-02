import React from 'react';
import zooplaLogo from '../../assets/zoopla.svg';

const Header = () => {
  return (
    <div className="lg:flex justify-center py-7 px-2 w-screen h-72px">
      <div className="lg:flex gap-x-40 text-linkTextDefault underline-offset-2 decoration-2 font-semibold">
        <div className="">
          <a href="#">
            <img src={zooplaLogo} alt="Zoopla Logo" />
          </a>
        </div>
        <div className="lg:flex gap-5 decoration-linkUnderlineDefault">
          <a href="#" className="hover:underline">
            For sale
          </a>
          <a href="#" className="hover:underline">
            To rent
          </a>
          <a href="#" className="hover:underline">
            House prices
          </a>
          <a href="#" className="hover:underline">
            Agent valuation
          </a>
          <a href="#" className="hover:underline">
            Instant valuation
          </a>
        </div>
        <div className="lg:flex gap-5 decoration-linkUnderlineDefault">
          <a href="#" className="hover:underline">
            My Home
          </a>
          <a href="#" className="hover:underline">
            Saved
          </a>
          <a href="#" className="hover:underline">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
