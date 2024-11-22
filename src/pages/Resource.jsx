import { NavLink } from 'react-router-dom';
import './css/Resource.css';

function Resource() {
  return (
    <div className="resource">
      {/* <h1>Resource Page</h1> */}
      <h1>Phasellus eu Lacus Leo</h1>
      {/* <p>This is my personal archive for all the tools I have developed. Please have a look at some of them below:</p> */}
      <p>Nunc vehicula orci metus, eget congue lorem tincidunt eleifend. Nulla quis odio eu nisi ullamcorper faucibus. Fusce faucibus vestibulum mauris, non venenatis enim semper mattis. Praesent tincidunt molestie hendrerit. Quisque feugiat semper semper. Maecenas sed ullamcorper nunc.</p>
        <nav> 
          <div className="tool-list">
            {/* <a href="wuwa.html" className="tool-item">WuWa Inventory Planner</a> */}
            {/* <NavLink to="/Wuwa" className="tool-item">WuWa Inventory Planner</NavLink> */}
            <NavLink to="/Wuwa" className="tool-item">Vivamus Tincidunt</NavLink>

          </div>
        </nav>
    </div>
  );
}

export default Resource;