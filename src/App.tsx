import React, { useState } from 'react';
import './index.css';
import AppRoutes from './routes';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const App: React.FC = () => {
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  const handleItemClick = () => {
    // Set the openPanel to null to collapse all panels
    setOpenPanel(null);
  };

  const handleLabelClick = (id: string) => {
    // Toggle the panel if it's already open, otherwise set it as the open panel
    setOpenPanel(openPanel === id ? null : id);
  };

  return (
    <Router>
      <div>

        <div className="w-full max-w-5xl rounded-xl shadow-2xl">
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
                      hover:before:*:scale-100">
            <label id="toggle-1" htmlFor="radio-1" onClick={() => handleLabelClick('panel-1')} className="toggle-label">Fundamental</label>
            <label id="toggle-2" htmlFor="radio-2" onClick={() => handleLabelClick('panel-2')} className="toggle-label">Animation</label>
            <label id="toggle-3" htmlFor="radio-3" onClick={() => handleLabelClick('panel-3')} className="toggle-label">Decor</label>
            <label id="toggle-4" htmlFor="radio-4" onClick={() => handleLabelClick('panel-4')} className="toggle-label">Serving & Tableware</label>
            <label id="toggle-5" htmlFor="radio-5" onClick={() => handleLabelClick('panel-5')} className="toggle-label">Textiles & Carpets</label>
            <label id="toggle-6" htmlFor="radio-6" onClick={() => handleLabelClick('panel-6')} className="toggle-label">Jewelry & Accessories</label>
            <label id="toggle-7" htmlFor="radio-7" onClick={() => handleLabelClick('panel-7')} className="toggle-label">Outdoor Environment</label>
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
            <input type="radio" id="radio-1" name="panel-toggle" className="sr-only" checked={openPanel === 'panel-1'} onChange={() => handleLabelClick('panel-1')} />
            <article id="panel-1">
              <div>
                <h3>Cool Components</h3>
                <ul>
                  <li onClick={handleItemClick}><a href="#">Sofas</a></li>
                  <li onClick={handleItemClick}><a href="#">Coffee Tables</a></li>
                  <li onClick={handleItemClick}><a href="#">TV Stands</a></li>
                  <li onClick={handleItemClick}><a href="#">Bookshelves</a></li>
                  <li onClick={handleItemClick}><a href="#">Rugs</a></li>
                  <li onClick={handleItemClick}><a href="#">Curtains</a></li>
                  <li onClick={handleItemClick}><a href="#">Lamps</a></li>
                  <li onClick={handleItemClick}><a href="#">Wall Art</a></li>
                  <li onClick={handleItemClick}><a href="#">Chairs</a></li>
                </ul>
              </div>
              <div>
                <h3>Cool Div</h3>
                <ul>
                  <li onClick={handleItemClick}><a href="#">Cookware</a></li>
                  <li onClick={handleItemClick}><a href="#">Cutlery</a></li>
                  <li onClick={handleItemClick}><a href="#">Appliances</a></li>
                  <li onClick={handleItemClick}><a href="#">Storage Solutions</a></li>
                  <li onClick={handleItemClick}><a href="#">Dining Tables</a></li>
                  <li onClick={handleItemClick}><a href="#">Chairs</a></li>
                  <li onClick={handleItemClick}><a href="#">Kitchen Islands</a></li>
                  <li onClick={handleItemClick}><a href="#">Tableware</a></li>
                </ul>
              </div>
              <div>
                <h3>Other1</h3>
                <ul>
                  <li onClick={handleItemClick}><a href="#">abc</a></li>
                  <li onClick={handleItemClick}><a href="#">def</a></li>
                  <li onClick={handleItemClick}><a href="#">hij</a></li>
                </ul>
              </div>
              <div>
                <h3>Other2</h3>
                <ul>
                  <li onClick={handleItemClick}><a href="#">abc</a></li>
                  <li onClick={handleItemClick}><a href="#">def</a></li>
                  <li onClick={handleItemClick}><a href="#">hij</a></li>
                </ul>
              </div>
            </article>

            <input type="radio" id="radio-2" name="panel-toggle" className="sr-only" checked={openPanel === 'panel-2'} onChange={() => handleLabelClick('panel-2')} />
            <article id="panel-2">
              <div>
                <h3>eCommerce</h3>
                <ul>
                  <li onClick={handleItemClick}><Link to="/love-heart-demo">Love Heart Demo</Link></li>
                  <li onClick={handleItemClick}><Link to="/five-star-rating-demo">Five Star Rating Demo</Link></li>
                  <li onClick={handleItemClick}><Link to="/hij">hij</Link></li>
                </ul>
              </div>
              <div>
                <h3>Generic</h3>
                <ul>
                  <li onClick={handleItemClick}><Link to="/rainbow-loader-demo">Rainbow Loader Demo</Link></li>
                  <li onClick={handleItemClick}><Link to="/jumpingball-loader-demo">Jumping Ball Loader Demo</Link></li>
                  <li onClick={handleItemClick}><a href="/ironman-loader-demo">IronMan loader demo</a></li>
                  <li onClick={handleItemClick}><a href="/card-carousel-demo">Card carousel demo</a></li>
                </ul>
              </div>
            </article>

            <input type="radio" id="radio-3" name="panel-toggle" className="sr-only" checked={openPanel === 'panel-3'} onChange={() => handleLabelClick('panel-3')} />
            <article id="panel-3">
              <div>
                <h3>Living Room</h3>
                <ul>
                  <li onClick={handleItemClick}><a href="#">Vases</a></li>
                  <li onClick={handleItemClick}><a href="#">Sculptures</a></li>
                  <li onClick={handleItemClick}><a href="#">Picture Frames</a></li>
                </ul>
              </div>
            </article>

            <input type="radio" id="radio-4" name="panel-toggle" className="sr-only" checked={openPanel === 'panel-4'} onChange={() => handleLabelClick('panel-4')} />
            <article id="panel-4">
              <div>
                <h3>Dining</h3>
                <ul>
                  <li onClick={handleItemClick}><a href="#">Plates</a></li>
                  <li onClick={handleItemClick}><a href="#">Bowls</a></li>
                  <li onClick={handleItemClick}><a href="#">Glasses</a></li>
                  <li onClick={handleItemClick}><a href="#">Cutlery</a></li>
                  <li onClick={handleItemClick}><a href="#">Tablecloths</a></li>
                  <li onClick={handleItemClick}><a href="#">Napkins</a></li>
                  <li onClick={handleItemClick}><a href="#">Serving Trays</a></li>
                  <li onClick={handleItemClick}><a href="#">Candle Holders</a></li>
                  <li onClick={handleItemClick}><a href="#">Coasters</a></li>
                  <li onClick={handleItemClick}><a href="#">Table Runners</a></li>
                  <li onClick={handleItemClick}><a href="#">Centerpieces</a></li>
                </ul>
              </div>
            </article>

            <input type="radio" id="radio-5" name="panel-toggle" className="sr-only" checked={openPanel === 'panel-5'} onChange={() => handleLabelClick('panel-5')} />
            <article id="panel-5">
              <div>
                <h3>Bedroom</h3>
                <ul>
                  <li onClick={handleItemClick}><a href="#">Bedding Sets</a></li>
                  <li onClick={handleItemClick}><a href="#">Pillows</a></li>
                  <li onClick={handleItemClick}><a href="#">Throws</a></li>
                  <li onClick={handleItemClick}><a href="#">Bedspreads</a></li>
                  <li onClick={handleItemClick}><a href="#">Blankets</a></li>
                  <li onClick={handleItemClick}><a href="#">Curtains</a></li>
                  <li onClick={handleItemClick}><a href="#">Rugs</a></li>
                  <li onClick={handleItemClick}><a href="#">Mirrors</a></li>
                  <li onClick={handleItemClick}><a href="#">Wall Art</a></li>
                </ul>
              </div>
            </article>

            <input type="radio" id="radio-6" name="panel-toggle" className="sr-only" checked={openPanel === 'panel-6'} onChange={() => handleLabelClick('panel-6')} />
            <article id="panel-6">
              <div>
                <h3>Jewelry</h3>
                <ul>
                  <li onClick={handleItemClick}><a href="#">Necklaces</a></li>
                  <li onClick={handleItemClick}><a href="#">Bracelets</a></li>
                  <li onClick={handleItemClick}><a href="#">Earrings</a></li>
                  <li onClick={handleItemClick}><a href="#">Rings</a></li>
                  <li onClick={handleItemClick}><a href="#">Brooches</a></li>
                  <li onClick={handleItemClick}><a href="#">Anklets</a></li>
                  <li onClick={handleItemClick}><a href="#">Cufflinks</a></li>
                </ul>
              </div>
              <div>
                <h3>Accessories</h3>
                <ul>
                  <li onClick={handleItemClick}><a href="#">Hats</a></li>
                  <li onClick={handleItemClick}><a href="#">Scarves</a></li>
                  <li onClick={handleItemClick}><a href="#">Gloves</a></li>
                  <li onClick={handleItemClick}><a href="#">Belts</a></li>
                  <li onClick={handleItemClick}><a href="#">Bags</a></li>
                  <li onClick={handleItemClick}><a href="#">Sunglasses</a></li>
                  <li onClick={handleItemClick}><a href="#">Wallets</a></li>
                  <li onClick={handleItemClick}><a href="#">Keychains</a></li>
                  <li onClick={handleItemClick}><a href="#">Watches</a></li>
                </ul>
              </div>
            </article>

            <input type="radio" id="radio-7" name="panel-toggle" className="sr-only" checked={openPanel === 'panel-7'} onChange={() => handleLabelClick('panel-7')} />
            <article id="panel-7">
              <div>
                <h3>Outdoor Furniture</h3>
                <ul>
                  <li onClick={handleItemClick}><a href="#">Patio Sets</a></li>
                  <li onClick={handleItemClick}><a href="#">Garden Chairs</a></li>
                  <li onClick={handleItemClick}><a href="#">Hammocks</a></li>
                  <li onClick={handleItemClick}><a href="#">Sun Loungers</a></li>
                  <li onClick={handleItemClick}><a href="#">Outdoor Tables</a></li>
                  <li onClick={handleItemClick}><a href="#">BBQ Grills</a></li>
                  <li onClick={handleItemClick}><a href="#">Outdoor Cushions</a></li>
                  <li onClick={handleItemClick}><a href="#">Fire Pits</a></li>
                  <li onClick={handleItemClick}><a href="#">Gazebos</a></li>
                  <li onClick={handleItemClick}><a href="#">Parasols</a></li>
                  <li onClick={handleItemClick}><a href="#">Planters</a></li>
                  <li onClick={handleItemClick}><a href="#">Garden Sheds</a></li>
                  <li onClick={handleItemClick}><a href="#">Outdoor Rugs</a></li>
                </ul>
              </div>
              <div>
                <h3>Garden Decor</h3>
                <ul>
                  <li onClick={handleItemClick}><a href="#">Garden Statues</a></li>
                  <li onClick={handleItemClick}><a href="#">Wind Chimes</a></li>
                  <li onClick={handleItemClick}><a href="#">Bird Feeders</a></li>
                  <li onClick={handleItemClick}><a href="#">Garden Gnomes</a></li>
                  <li onClick={handleItemClick}><a href="#">Water Features</a></li>
                  <li onClick={handleItemClick}><a href="#">Garden Lights</a></li>
                  <li onClick={handleItemClick}><a href="#">Trellises</a></li>
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
