import React from 'react';
import './index.css';

const App: React.FC = () => {
  return (
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
          <label id="toggle-1" htmlFor="radio-1">Furniture</label>
          <label id="toggle-2" htmlFor="radio-2">Lighting</label>
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
              <h3>Living Room</h3>
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
              <h3>Kitchen</h3>
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
              <h3>Bedroom</h3>
              <ul>
                <li><a href="#">Beds</a></li>
                <li><a href="#">Wardrobes</a></li>
                <li><a href="#">Dressers</a></li>
                <li><a href="#">Nightstands</a></li>
                <li><a href="#">Bedding</a></li>
                <li><a href="#">Mirrors</a></li>
                <li><a href="#">Lamps</a></li>
              </ul>
            </div>
            <div>
              <h3>Entrance & Hallways</h3>
              <ul>
                <li><a href="#">Console Tables</a></li>
                <li><a href="#">Coat Racks</a></li>
                <li><a href="#">Shoe Storage</a></li>
                <li><a href="#">Mirrors</a></li>
                <li><a href="#">Rugs</a></li>
                <li><a href="#">Lighting</a></li>
              </ul>
            </div>
          </article>

          <input type="radio" id="radio-2" name="panel-toggle" className="sr-only" />
          <article id="panel-2">
            <div>
              <h3>Interior</h3>
              <ul>
                <li><a href="#">Ceiling Lights</a></li>
                <li><a href="#">Pendant Lights</a></li>
                <li><a href="#">Chandeliers</a></li>
                <li><a href="#">Recessed Lighting</a></li>
                <li><a href="#">Track Lighting</a></li>
                <li><a href="#">Wall Sconces</a></li>
                <li><a href="#">Table Lamps</a></li>
                <li><a href="#">Floor Lamps</a></li>
                <li><a href="#">Under Cabinet Lighting</a></li>
                <li><a href="#">Accent Lighting</a></li>
              </ul>
            </div>
            <div>
              <h3>Exterior</h3>
              <ul>
                <li><a href="#">Outdoor Wall Lights</a></li>
                <li><a href="#">Outdoor Ceiling Lights</a></li>
                <li><a href="#">Landscape Lighting</a></li>
                <li><a href="#">Pathway Lights</a></li>
                <li><a href="#">Deck & Step Lights</a></li>
                <li><a href="#">Outdoor Post Lights</a></li>
                <li><a href="#">Security Lights</a></li>
                <li><a href="#">Flood Lights</a></li>
                <li><a href="#">String Lights</a></li>
                <li><a href="#">Solar Lights</a></li>
              </ul>
            </div>
          </article>

          <input type="radio" id="radio-3" name="panel-toggle" className="sr-only" />
          <article id="panel-3">
            <div>
              <h3>Living Room</h3>
              <ul>
                <li><a href="#">Vases</a></li>
                <li><a href="#">Candles & Holders</a></li>
                <li><a href="#">Picture Frames</a></li>
                <li><a href="#">Clocks</a></li>
                <li><a href="#">Sculptures</a></li>
                <li><a href="#">Throws & Blankets</a></li>
                <li><a href="#">Pillows & Cushions</a></li>
                <li><a href="#">Bowls & Trays</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">Plants & Planters</a></li>
              </ul>
            </div>
            <div>
              <h3>Bedroom</h3>
              <ul>
                <li><a href="#">Throws & Blankets</a></li>
                <li><a href="#">Pillows & Cushions</a></li>
                <li><a href="#">Candles & Holders</a></li>
                <li><a href="#">Picture Frames</a></li>
                <li><a href="#">Clocks</a></li>
                <li><a href="#">Mirrors</a></li>
                <li><a href="#">Plants & Planters</a></li>
              </ul>
            </div>
          </article>

          <input type="radio" id="radio-4" name="panel-toggle" className="sr-only" />
          <article id="panel-4">
            <div>
              <h3>Dining</h3>
              <ul>
                <li><a href="#">Dinnerware Sets</a></li>
                <li><a href="#">Flatware Sets</a></li>
                <li><a href="#">Drinkware</a></li>
                <li><a href="#">Serveware</a></li>
                <li><a href="#">Napkins & Rings</a></li>
                <li><a href="#">Tablecloths & Runners</a></li>
                <li><a href="#">Serving Trays</a></li>
                <li><a href="#">Platters</a></li>
                <li><a href="#">Bowls</a></li>
                <li><a href="#">Pitchers & Carafes</a></li>
              </ul>
            </div>
            <div>
              <h3>Specialty</h3>
              <ul>
                <li><a href="#">Barware</a></li>
                <li><a href="#">Tea & Coffee Sets</a></li>
                <li><a href="#">Bakeware</a></li>
                <li><a href="#">Cheese Boards</a></li>
                <li><a href="#">Gravy Boats</a></li>
                <li><a href="#">Butter Dishes</a></li>
                <li><a href="#">Condiment Sets</a></li>
              </ul>
            </div>
          </article>

          <input type="radio" id="radio-5" name="panel-toggle" className="sr-only" />
          <article id="panel-5">
            <div>
              <h3>Living Room</h3>
              <ul>
                <li><a href="#">Area Rugs</a></li>
                <li><a href="#">Throw Blankets</a></li>
                <li><a href="#">Decorative Pillows</a></li>
                <li><a href="#">Curtains</a></li>
                <li><a href="#">Table Runners</a></li>
                <li><a href="#">Chair Pads</a></li>
                <li><a href="#">Floor Cushions</a></li>
              </ul>
            </div>
            <div>
              <h3>Bedroom</h3>
              <ul>
                <li><a href="#">Bedding Sets</a></li>
                <li><a href="#">Duvet Covers</a></li>
                <li><a href="#">Comforters</a></li>
                <li><a href="#">Throw Pillows</a></li>
                <li><a href="#">Blankets</a></li>
                <li><a href="#">Curtains</a></li>
              </ul>
            </div>
          </article>

          <input type="radio" id="radio-6" name="panel-toggle" className="sr-only" />
          <article id="panel-6">
            <div>
              <h3>Women</h3>
              <ul>
                <li><a href="#">Necklaces</a></li>
                <li><a href="#">Earrings</a></li>
                <li><a href="#">Bracelets</a></li>
                <li><a href="#">Rings</a></li>
                <li><a href="#">Anklets</a></li>
                <li><a href="#">Brooches</a></li>
              </ul>
            </div>
            <div>
              <h3>Men</h3>
              <ul>
                <li><a href="#">Watches</a></li>
                <li><a href="#">Bracelets</a></li>
                <li><a href="#">Rings</a></li>
                <li><a href="#">Cufflinks</a></li>
                <li><a href="#">Necklaces</a></li>
              </ul>
            </div>
          </article>

          <input type="radio" id="radio-7" name="panel-toggle" className="sr-only" />
          <article id="panel-7">
            <div>
              <h3>Furniture</h3>
              <ul>
                <li><a href="#">Outdoor Tables</a></li>
                <li><a href="#">Outdoor Chairs</a></li>
                <li><a href="#">Patio Sets</a></li>
                <li><a href="#">Lounge Furniture</a></li>
                <li><a href="#">Umbrellas</a></li>
                <li><a href="#">Outdoor Cushions</a></li>
              </ul>
            </div>
            <div>
              <h3>Decor</h3>
              <ul>
                <li><a href="#">Outdoor Rugs</a></li>
                <li><a href="#">Planters</a></li>
                <li><a href="#">Water Fountains</a></li>
                <li><a href="#">Outdoor Lighting</a></li>
                <li><a href="#">Garden Statues</a></li>
                <li><a href="#">Outdoor Wall Art</a></li>
                <li><a href="#">Fire Pits</a></li>
                <li><a href="#">Garden Stakes</a></li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
