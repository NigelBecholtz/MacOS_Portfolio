import Terminal from './Terminal.jsx';
import Safari from './Safari.jsx';
import Resume from './Resume.jsx';
import Finder from './Finder.jsx';
import ImgFile from './ImgFile.jsx';
import TxtFile from './TxtFile.jsx';
import Contact from './Contact.jsx';
import Photos from './Photos.jsx';

/**
 * Renders all app windows. Each window is wrapped with windowWrapper (in its own file)
 * so they share open/close state, z-index, and drag behavior from the store.
 */
const Windows = () => {
  return (
    <>
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <ImgFile />
      <TxtFile />
      <Contact />
      <Photos />
    </>
  );
};

export default Windows;
