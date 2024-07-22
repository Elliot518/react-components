import React from 'react';
import './index.css';
import AppRoutes from './routes';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gradient-to-t from-purple-300 to-purple-100 flex flex-col gap-12 items-center justify-center min-h-screen p-4
          before:[&:has(#radio-1:checked)_#toggle-1]:scale-100
          before:[&:has(#radio-2:checked)_#toggle-2]:scale-100
          before:[&:has(#radio-3:checked)_#toggle-3]:scale-100
          before:[&:has(#radio-4:checked)_#toggle-4]:scale-100
          before:[&:has(#radio-5:checked)_#toggle-5]:scale-100
          before:[&:has(#radio-6:checked)_#toggle-6]:scale-100
          before:[&:has(#radio-7:checked)_#toggle-7]:scale-100">

        <div className="bg-white/50 backdrop-blur-md ring ring-black/5 p-8 w-full max-w-5xl rounded-xl shadow-2xl shadow-purple-300 ">
          <nav className="flex flex-wrap gap-0 text-sm
                      *:py-2
                      *:px-4
                      *:relative
                      *:isolate 
                      *:cursor-pointer
                      *:whitespace-nowrap
                      before:*:absolute
                      before:*:w-full
                      before:*:h-1
                      before:*:left-0
                      before:*:bottom-0
                      before:*:bg-purple-400
                      before:*:rounded-full
                      before:*:transition-all
                      before:*:duration-500
                      before:*:ease-[cubic-bezier(.47,1.64,.38,.87)]
                      before:*:scale-0
                      before:*:origin-left 
                      hover:before:*:scale-100
                  ">
            <label id="toggle-1" htmlFor="radio-1">Fundamental</label>
            <label id="toggle-2" htmlFor="radio-2">Animation</label>
            <label id="toggle-3" htmlFor="radio-3">Decor</label>
            <label id="toggle-4" htmlFor="radio-4">Serving & Tableware</label>
            <label id="toggle-5" htmlFor="radio-5">Textiles & Carpets</label>
            <label id="toggle-6" htmlFor="radio-6">Jewelry & Accessories</label>
            <label id="toggle-7" htmlFor="radio-7">Outdoor Environment</label>
          </nav>

          <section className="grid [grid-template-areas:'stack']  mt-8
                      [&>article]:[grid-area:stack]
                      [&>article]:transition-all
                      [&>article]:duration-500
                      [&>article>div]:scale-0
                      [&>article>div]:origin-top
                      [&>article>div]:transition-all
                      [&>article>div]:duration-500
                      [&>input:checked+article>div]:ease-[cubic-bezier(.47,1.64,.38,.87)]
                      [&>input:checked+article>div]:scale-100
                      [&>input:checked+article>div]:delay-500
                      [&>input:checked+article>div:nth-child(2)]:delay-[800ms]
                      [&>input:checked+article>div:nth-child(3)]:delay-[1100ms]
                      [&>input:checked+article>div:nth-child(4)]:delay-[1400ms]
                      [&>article]:grid
                      [&>article]:grid-cols-1
                      min-[400px]:[&>article]:grid-cols-2
                      sm:[&>article]:grid-cols-4
                      [&>article]:gap-4
                      [&_h3]:font-medium
                      [&_h3]:mb-2
                      [&_h3]:text-sm
                      [&_h3]:px-3

                      [&_a]:font-thin
                      [&_a]:text-sm
                      [&_a]:py-1 
                      [&_a]:px-3
                      [&_a]:relative
                      [&_a]:isolate 
                      [&_a]:block 

                      before:[&_a]:absolute
                      before:[&_a]:inset-[0_100%_0_0]
                      before:[&_a]:bg-gradient-to-r
                      before:[&_a]:from-purple-300
                      before:[&_a]:to-purple-transparent
                      before:[&_a]:-z-10
                      before:[&_a]:rounded-md
                      before:[&_a]:transition-all
                      before:[&_a]:duration-500
                      before:[&_a]:ease-in-out
                      hover:before:[&_a]:inset-0
                  ">
            <input type="radio" id="radio-1" name="panel-toggle" className="sr-only" />
            <article id="panel-1">
              <div>
                <h3>Cool Components</h3>
                <ul>
                  <li><a href="#">Sofas</a></li>
                  <li><a href="#">Coffee Tables</a></li>
                  <li><a href="#">TV Stands</a></li>
                  <li><a href="#">Bookshelves</a></li>
                  <li><a href="#">Rugs</a></li>
                  <li><a href="#">Curtains</a></li>
                  <li><a href="#">Lamps</a></li>
                  <li><a href="#">Wall Art</a></li>
                  <li><a href="#">Chairs</a></li>
                </ul>
              </div>
              <div>
                <h3>Cool Div</h3>
                <ul>
                  <li><a href="#">Cookware</a></li>
                  <li><a href="#">Cutlery</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Storage Solutions</a></li>
                  <li><a href="#">Dining Tables</a></li>
                  <li><a href="#">Chairs</a></li>
                  <li><a href="#">Kitchen Islands</a></li>
                  <li><a href="#">Tableware</a></li>
                </ul>
              </div>
              <div>
                <h3>Other1</h3>
                <ul>
                  <li><a href="#">abc</a></li>
                  <li><a href="#">def</a></li>
                  <li><a href="#">hij</a></li>
                </ul>
              </div>
              <div>
                <h3>Other2</h3>
                <ul>
                  <li><a href="#">abc</a></li>
                  <li><a href="#">def</a></li>
                  <li><a href="#">hij</a></li>
                </ul>
              </div>
            </article>

            <input type="radio" id="radio-2" name="panel-toggle" className="sr-only" />
            <article id="panel-2">
              <div>
                <h3>eCommerce</h3>
                <ul>
                  <li><Link to="/love-heart-demo">Love Heart Demo</Link></li>
                  <li><Link to="/def">def</Link></li>
                  <li><Link to="/hij">hij</Link></li>
                </ul>
              </div>
              <div>
                <h3>Demo2</h3>
                <ul>
                  <li><a href="#">abc</a></li>
                  <li><a href="#">def</a></li>
                  <li><a href="#">hij</a></li>
                </ul>
              </div>
            </article>

            <input type="radio" id="radio-3" name="panel-toggle" className="sr-only" />
            <article id="panel-3">
              <div>
                <h3>Living Room</h3>
                <ul>
                  <li><a href="#">Vases</a></li>
                  <li><a href="#">Sculptures</a></li>
                  <li><a href="#">Picture Frames</a></li>
                  <li><a href="#">Cushions</a></li>
                  <li><a href="#">Throws</a></li>
                  <li><a href="#">Mirrors</a></li>
                  <li><a href="#">Wall Clocks</a></li>
                  <li><a href="#">Candles</a></li>
                  <li><a href="#">Planters</a></li>
                  <li><a href="#">Room Dividers</a></li>
                  <li><a href="#">Cabinets</a></li>
                  <li><a href="#">Shelves</a></li>
                  <li><a href="#">Blankets</a></li>
                  <li><a href="#">Pillows</a></li>
                  <li><a href="#">Poufs</a></li>
                </ul>
              </div>
            </article>

            <input type="radio" id="radio-4" name="panel-toggle" className="sr-only" />
            <article id="panel-4">
              <div>
                <h3>Dining</h3>
                <ul>
                  <li><a href="#">Plates</a></li>
                  <li><a href="#">Bowls</a></li>
                  <li><a href="#">Glasses</a></li>
                  <li><a href="#">Cutlery</a></li>
                  <li><a href="#">Tablecloths</a></li>
                  <li><a href="#">Napkins</a></li>
                  <li><a href="#">Serving Trays</a></li>
                  <li><a href="#">Candle Holders</a></li>
                  <li><a href="#">Coasters</a></li>
                  <li><a href="#">Table Runners</a></li>
                  <li><a href="#">Centerpieces</a></li>
                </ul>
              </div>
            </article>

            <input type="radio" id="radio-5" name="panel-toggle" className="sr-only" />
            <article id="panel-5">
              <div>
                <h3>Bedroom</h3>
                <ul>
                  <li><a href="#">Bedding Sets</a></li>
                  <li><a href="#">Pillows</a></li>
                  <li><a href="#">Throws</a></li>
                  <li><a href="#">Bedspreads</a></li>
                  <li><a href="#">Blankets</a></li>
                  <li><a href="#">Curtains</a></li>
                  <li><a href="#">Rugs</a></li>
                  <li><a href="#">Mirrors</a></li>
                  <li><a href="#">Wall Art</a></li>
                </ul>
              </div>
            </article>

            <input type="radio" id="radio-6" name="panel-toggle" className="sr-only" />
            <article id="panel-6">
              <div>
                <h3>Jewelry</h3>
                <ul>
                  <li><a href="#">Necklaces</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Brooches</a></li>
                  <li><a href="#">Anklets</a></li>
                  <li><a href="#">Cufflinks</a></li>
                </ul>
              </div>
              <div>
                <h3>Accessories</h3>
                <ul>
                  <li><a href="#">Hats</a></li>
                  <li><a href="#">Scarves</a></li>
                  <li><a href="#">Gloves</a></li>
                  <li><a href="#">Belts</a></li>
                  <li><a href="#">Bags</a></li>
                  <li><a href="#">Sunglasses</a></li>
                  <li><a href="#">Wallets</a></li>
                  <li><a href="#">Keychains</a></li>
                  <li><a href="#">Watches</a></li>
                </ul>
              </div>
            </article>

            <input type="radio" id="radio-7" name="panel-toggle" className="sr-only" />
            <article id="panel-7">
              <div>
                <h3>Outdoor Furniture</h3>
                <ul>
                  <li><a href="#">Patio Sets</a></li>
                  <li><a href="#">Garden Chairs</a></li>
                  <li><a href="#">Hammocks</a></li>
                  <li><a href="#">Sun Loungers</a></li>
                  <li><a href="#">Outdoor Tables</a></li>
                  <li><a href="#">BBQ Grills</a></li>
                  <li><a href="#">Outdoor Cushions</a></li>
                  <li><a href="#">Fire Pits</a></li>
                  <li><a href="#">Gazebos</a></li>
                  <li><a href="#">Parasols</a></li>
                  <li><a href="#">Planters</a></li>
                  <li><a href="#">Garden Sheds</a></li>
                  <li><a href="#">Outdoor Rugs</a></li>
                </ul>
              </div>
              <div>
                <h3>Garden Decor</h3>
                <ul>
                  <li><a href="#">Garden Statues</a></li>
                  <li><a href="#">Wind Chimes</a></li>
                  <li><a href="#">Bird Feeders</a></li>
                  <li><a href="#">Garden Gnomes</a></li>
                  <li><a href="#">Water Features</a></li>
                  <li><a href="#">Garden Lights</a></li>
                  <li><a href="#">Trellises</a></li>
                </ul>
              </div>
            </article>
          </section>
        </div>
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;

