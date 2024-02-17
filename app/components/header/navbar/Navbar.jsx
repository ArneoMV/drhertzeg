import { menuItemsData } from "../menuItemsData.js";
import MenuItems from "./MenuItems.jsx";

const Navbar = () => {
  const depthLevel = 0;

  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

// MAIN CODE

// <div className='language'>
//         <Image 
//           src={HR}
//           alt='Hrvatski'
//           quality={100}
//           width={30}
//           // placeholder='blur'
//         />
//         <p>HR</p>
//       </div>