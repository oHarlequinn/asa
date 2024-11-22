import './css/Home.css';
import { NavLink } from 'react-router-dom';


const HomePage = () => {
  return (
    <body>
      <div className="image-1">
        {/* <img src="/asa-mitaka.jpg" width="500" height="500" /> */}
        <img src="/davinci.png" width="500" height="500" />
      </div>

      <section className="welcome">
        {/* <h1>Welcome to my Website: the oHarlequinn's Notebook!</h1>
        <p>This is my personal &#40;blue&#41; archive for various tools I had &#40;and about to&#41; created. This site mainly focuses on tools that enhance the experience of several chosen game titles. However, in the near future, I may also upload study tools that I developed during my freshman and sophomore years of mechanical engineering.</p> */}
        <h1>Sed Pretium Arcu et Massa Mattis Elementum</h1>
        <p>Aliquam posuere nulla ut ex dignissim pharetra id sed metus. Integer non quam massa. Suspendisse potenti. Vivamus vel dolor et tortor malesuada dignissim non eu lorem. In in lacus pellentesque, bibendum lectus nec, pharetra elit. Sed rhoncus urna vitae nibh sodales, vitae fermentum eros lacinia. Cras ac justo eu justo posuere auctor id sed tortor. Vestibulum sit amet ex cursus, convallis diam et, imperdiet metus. Aliquam dui purus, tempus eget condimentum sit amet, pretium non ante. Pellentesque semper sapien at est lobortis, vel iaculis purus molestie. Duis dolor sapien, vulputate eget rhoncus quis, ultrices sed lacus. Etiam egestas pulvinar porta.</p>
      </section>

      <section className="tools">
        {/* <h2>Check out some of my resources</h2>
        <p>I used to keep my tools in Excel sheets but things get messy especially when you keep swapping devices. Moreover, I think this is much more accessible and user-friendly than having to share and edit Excel sheets. I will add more tools in the future but for now, please try my Wuthering Waves materials planner!</p> */}
        <h2>In Sed Placerat Dui</h2>
        <p>Fusce pretium leo ut ultrices efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum elementum nulla quis ipsum gravida fermentum. Fusce tempor vitae ligula at vulputate. Fusce turpis tortor, ornare sed congue id, viverra sed eros. Sed placerat sagittis nisi, ut lacinia purus malesuada a. In maximus lectus a augue consequat, lobortis consequat arcu rhoncus. Nam imperdiet volutpat justo, interdum tristique arcu varius vel. Nulla fringilla molestie ligula. In pellentesque vulputate velit vel congue. Praesent scelerisque ut enim vitae commodo. Nam eros sem, imperdiet a lacinia elementum, facilisis eget elit. Duis imperdiet dictum enim, nec tincidunt sapien sagittis vel. Quisque faucibus ut ex nec blandit.</p>
        <nav>
          <div className="tool-list">
            {/* <a href="wuwa.html" className="tool-item">WuWa Inventory Planner</a> */}
            {/* <NavLink to="/Wuwa" className="tool-item">WuWa Inventory Planner</NavLink> */}
            <NavLink to="/Wuwa" className="tool-item">Vivamus Tincidunt</NavLink>

          </div>
        </nav>
      </section>
    </body>
  );
}

export default HomePage;