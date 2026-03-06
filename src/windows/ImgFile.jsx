import windowWrapper from '#hoc/windowWrapper.jsx';
import { WindowControls } from '#components';
import useWindowStore from '#store/window.js';

const ImgFile = () => {
  const data = useWindowStore((s) => s.windows?.imgfile?.data);
  const imageUrl = data?.imageUrl;
  const name = data?.name ?? 'Image';

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{name}</p>
      </div>
      <div className="preview">
        {imageUrl && <img src={imageUrl} alt={name} />}
      </div>
    </>
  );
};

const ImgFileWindow = windowWrapper(ImgFile, 'imgfile');

export default ImgFileWindow;
