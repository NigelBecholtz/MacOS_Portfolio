import windowWrapper from '#hoc/windowWrapper.jsx';
import { WindowControls } from '#components';
import { socials } from '#constants';

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-8 flex flex-col items-center">
        <img
          src="/images/nigel.png"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Let&apos;s Connect</h3>
        <p className="text-gray-600 text-sm text-center mb-8 max-w-md">
          Got an idea? A bug to squash? Or just wanna talk tech? I&apos;m in.
        </p>
        <ul>
          {socials.map(({ id, text, icon, bg, link }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon} alt="" className="w-8 h-8 brightness-0 invert mx-auto" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = windowWrapper(Contact, 'contact');

export default ContactWindow;
