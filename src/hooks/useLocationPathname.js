// import React, { useState, useEffect } from 'react';

// const useLocationPathname = () => {
//   const [categorie, setCategorie] = useState(null);
//   const [locationPathname, setLocationPathname] = useState(null);
//   const [getRequest, setGetRequest] = useState(null);
//   useEffect(() => {
//     setLocationPathname(location.pathname.split('/')[2]);
//     if (locationPathname) {
//       setCategorie(locationPathname);
//       setGetRequest(`?categories=${categorie}`);
//     } else {
//       setCategorie(['laptop', 'monitor', 'phones', 'headphones']);
//       setGetRequest(`?categories=${categorie.join()}`);
//     }
//   }, []);
//   return getRequest;
// };

// export default useLocationPathname;
