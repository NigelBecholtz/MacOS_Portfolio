import { useState } from 'react';
import { Mail, Search } from 'lucide-react';
import windowWrapper from '#hoc/windowWrapper.jsx';
import { WindowControls } from '#components';
import { photosLinks, gallery } from '#constants';

const Photos = () => {
  const [activeSection, setActiveSection] = useState('Library');

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <div className="flex-1" />
        <div className="flex items-center gap-3">
          <Mail className="icon cursor-pointer" size={18} />
          <Search className="icon cursor-pointer" size={18} />
        </div>
      </div>

      <div className="flex flex-1 min-h-0">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li
                key={id}
                onClick={() => setActiveSection(title)}
                className={activeSection === title ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}
              >
                <img src={icon} alt="" />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {gallery.map(({ id, img }) => (
              <li key={id}>
                <img src={img} alt={`Gallery ${id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = windowWrapper(Photos, 'photos');

export default PhotosWindow;
