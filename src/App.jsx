import gsap from 'gsap';
import { Draggable } from "gsap/Draggable"


import { Navbar, Welcome, Dock } from '#components';
import { Windows} from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Windows />
    </main>
  );
};


export default App;