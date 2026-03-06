import { Search } from 'lucide-react';
import windowWrapper from '#hoc/windowWrapper.jsx';
import { WindowControls } from '#components';
import { locations } from '#constants';
import { useLocationStore } from '#store/location.js';
import useWindowStore from '#store/window.js';

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const openWindow = useWindowStore((s) => s.openWindow);
  const favorites = [locations.work, locations.about, locations.resume, locations.trash];
  const workProjects = locations.work?.children ?? [];

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <h3>Favorites</h3>
          <ul>
            {favorites.map((loc) => (
              <li
                key={loc.id}
                onClick={() => setActiveLocation(loc)}
                className={`flex items-center gap-2 min-w-0 ${activeLocation?.id === loc.id ? 'active' : ''}`}
              >
                <img src={loc.icon} alt="" className="w-4 h-4 flex-shrink-0" />
                <span className="truncate min-w-0">{loc.name}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-4">Work</h3>
          <ul>
            {workProjects.map((project) => (
              <li
                key={project.id}
                onClick={() => setActiveLocation(project)}
                className={`flex items-center gap-2 min-w-0 ${activeLocation?.id === project.id ? 'active' : ''}`}
              >
                <img src={project.icon} alt="" className="w-4 h-4 flex-shrink-0" />
                <span className="truncate min-w-0">{project.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 p-8 overflow-auto">
          {activeLocation && (
            <>
              <h3 className="font-semibold mb-4 text-gray-700">{activeLocation.name}</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {activeLocation.children?.map((item) => {
                  const handleClick = () => {
                    if (item.kind === 'folder') setActiveLocation(item);
                    if (item.fileType === 'img' && item.imageUrl) {
                      openWindow('imgfile', { imageUrl: item.imageUrl, name: item.name });
                    }
                    if (item.fileType === 'pdf') {
                      openWindow('resume');
                    }
                    if (item.fileType === 'txt') {
                      openWindow('txtfile', {
                        name: item.name,
                        subtitle: item.subtitle,
                        image: item.image,
                        description: item.description,
                      });
                    }
                    if ((item.fileType === 'url' || item.fileType === 'fig') && item.href) {
                      window.open(item.href, '_blank', 'noopener,noreferrer');
                    }
                  };
                  const isClickable =
                    item.kind === 'folder' ||
                    (item.fileType === 'img' && item.imageUrl) ||
                    item.fileType === 'pdf' ||
                    item.fileType === 'txt' ||
                    ((item.fileType === 'url' || item.fileType === 'fig') && item.href);
                  return (
                  <li
                    key={item.id}
                    onClick={handleClick}
                    className={`flex flex-col items-center gap-3 group ${
                      isClickable ? 'cursor-pointer' : ''
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="size-16 object-contain group-hover:scale-105 transition-transform"
                    />
                    <span className="text-sm text-center font-medium w-36 break-words">
                      {item.name}
                    </span>
                  </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const FinderWindow = windowWrapper(Finder, 'finder');

export default FinderWindow;
