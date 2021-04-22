import React, { useState } from 'react';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import AboutPage from '../../components/about';
import Loading from '../../components/loading';

export default function About() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
        <div className="mx-auto w-5/6 md:w-full 2xl:w-full xl:w-full">
          <NavBar />
          <AboutPage />
          <Footer />
        </div>
      )}
    </div>
  );
}
