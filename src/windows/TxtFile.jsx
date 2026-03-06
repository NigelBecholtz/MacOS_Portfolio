import windowWrapper from '#hoc/windowWrapper.jsx';
import { WindowControls } from '#components';
import useWindowStore from '#store/window.js';

const TxtFile = () => {
  const data = useWindowStore((s) => s.windows?.txtfile?.data);
  const name = data?.name ?? 'Untitled';
  const subtitle = data?.subtitle;
  const image = data?.image;
  const description = data?.description ?? [];

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-4 overflow-auto max-h-[70vh]">
        {subtitle && <p className="text-sm text-gray-600 mb-2">{subtitle}</p>}
        {image && (
          <img src={image} alt="" className="w-full max-w-xs rounded-lg mb-4 object-cover" />
        )}
        <div className="space-y-2 text-sm">
          {description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </>
  );
};

const TxtFileWindow = windowWrapper(TxtFile, 'txtfile');

export default TxtFileWindow;
