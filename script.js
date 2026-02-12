// script.js
// GEN Z YEARBOOK – 15 PAGES, UNIQUE LAYOUTS
// PAGE 1: COVER (sliding animation, welcome)
// PAGE 2: MEMORIES COLLAGE (chaotic, sticky notes, polaroids)
// ALL EMOJIS NOW APPLE/iOS STYLE

const CoverPage = () => {
  return (
    <div className="position-relative w-100 d-flex flex-column align-items-center justify-content-center min-vh-100 px-3 py-5 page-section" id="page-1">
      {/* decorative washi tape */}
      <div className="tape" style={{ top: '12%', left: '5%', transform: 'rotate(-8deg)' }}></div>
      <div className="tape" style={{ bottom: '15%', right: '8%', transform: 'rotate(5deg)', width: '100px' }}></div>
      
      {/* MAIN COVER CARD — sliding in */}
      <div className="slide-in w-100 d-flex flex-column align-items-center" style={{ maxWidth: '780px' }}>
        <div className="relative mb-6 text-center">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight" 
              style={{ 
                color: 'var(--warm-brown)', 
                textShadow: '6px 6px 0 var(--dusty-rose), 2px 2px 0 var(--cream)',
                letterSpacing: '-0.02em'
              }}>
            yearbook of ArVi
          </h1>
          <span className="absolute -top-8 -right-12 rotate-12 text-4xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>✦✦✦</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-2 mb-6 opacity-80" style={{ color: 'var(--ink)' }}>
          <span className="bg-[#e6ccbe] px-4 py-1 rounded-full text-sm font-semibold shadow-sm">Chaos</span>
          <span className="text-lg">·</span>
          <span className="font-serif italic text-[#8b7a69]">Love.</span>
          <span className="font-serif italic text-[#8b7a69]">Happiness.</span>
          <span className="font-serif italic text-[#8b7a69]">Perspectives.</span>
          <span className="text-lg">·</span>
          <span className="bg-[#b9c6ae] px-4 py-1 rounded-full text-sm text-white shadow-sm">Happy Anniversary</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 w-full max-w-2xl mx-auto">
          <div className="polaroid rotate-[-1deg] col-span-1">
            <img src="photos/page-1/one-year-ago.jpeg" alt="memory 1" className="w-full h-28 object-cover rounded-sm" />
            <p className="text-xs mt-2 font-medium text-[#5e5546]">1 year ago · 📍</p>
          </div>
          <div className="polaroid rotate-[2deg] col-span-1">
            <img src="photos/page-1/navratri.jpeg" alt="memory 2" className="w-full h-28 object-cover rounded-sm" />
            <p className="text-xs mt-2 font-medium text-[#5e5546]">Navratri · 2025</p>
          </div>
          <div className="polaroid rotate-[-3deg] col-span-1 hidden md:block">
            <img src="photos/page-1/september-days.jpeg" alt="memory 3" className="w-full h-28 object-cover rounded-sm" />
            <p className="text-xs mt-2 font-medium text-[#5e5546]">september days</p>
          </div>
        </div>

        <div className="mt-10 text-center max-w-lg" style={{ backgroundColor: 'rgba(255, 243, 226, 0.7)', backdropFilter: 'blur(4px)', border: '1px dashed var(--sage)', borderRadius: '50px', padding: '20px 28px' }}>
          <span className="text-5xl mb-2 block animate-bounce" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>✨</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--ink)' }}>one year together</h2>
          <p className="text-md md:text-lg mt-3" style={{ color: 'var(--warm-brown)' }}>
            <span className="bg-[#e6ccbe] px-3 py-1 rounded-full text-sm font-semibold mr-2">15 pages</span>
            celebrating · photos · memories
          </p>
        </div>

        <div className="mt-12 flex gap-4 flex-wrap justify-center">
          <a href="#page-2" className="btn-scrap">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📖</span> turn to page 2 →
          </a>
          <button className="px-6 py-2 rounded-full border-2 border-[#8b7a69] text-[#4a3f36] bg-white/60 backdrop-blur-sm hover:bg-[#e6ccbe] transition-all font-medium">
            ✦ memories
          </button>
        </div>

      </div>
    </div>
  );
};

// PAGE 2: MEMORIES COLLAGE - ALL EMOJIS NOW APPLE STYLE
const Page2 = () => {
  return (
    <div className="position-relative w-100 min-vh-100 px-3 py-5 page-section d-flex flex-column align-items-center justify-content-center" 
         id="page-2" 
         style={{ backgroundColor: 'rgba(255, 243, 226, 0.3)', borderTop: '6px double var(--sage)', borderBottom: '6px double var(--sage)' }}>
      
      {/* messy tape cluster */}
      <div className="tape" style={{ top: '3%', right: '2%', width: '110px', transform: 'rotate(12deg)', background: 'rgba(185,198,174,0.5)' }}></div>
      <div className="tape" style={{ bottom: '5%', left: '1%', width: '70px', transform: 'rotate(-7deg)', background: 'rgba(230,204,190,0.6)' }}></div>
      
      <div className="zigzag-border w-100 mb-4"></div>

      <div className="flex items-center gap-3 mb-2 self-start">
        <span className="text-5xl rotate-12 inline-block" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📍</span>
        <h2 className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--warm-brown)', textShadow: '3px 3px 0 var(--faded-denim)' }}>memories</h2>
      </div>
      <p className="text-md self-start ml-16 -mt-2 italic" style={{ color: 'var(--ink)' }}>the best scraps from our year ✦</p>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-8 w-full max-w-6xl">
        {/* big polaroid */}
        <div className="col-span-2 md:col-span-2 polaroid rotate-[-2deg] p-3">
          <img src="photos/page-2/bday-bash.jpeg" alt="birthday bash" className="w-full h-40 object-cover rounded-sm" />
          <p className="text-sm mt-3 font-bold text-[#4a3f36]">birthday bash · apr 9</p>
          <p className="text-xs text-[#8b7a69]">quite an awesome day</p>
        </div>

        {/* sticky note */}
        <div className="col-span-1 sticky-note p-4 rotate-[3deg] h-fit">
          <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📎</span>
          <p className="font-bold text-lg mt-1" style={{ color: '#5e5546' }}>"we stayed up until 3am"</p>
          <p className="text-xs mt-2">— april 9th, 2025</p>
        </div>

        {/* film strip */}
        <div className="col-span-1 bg-black/5 p-2 border-2 border-dashed border-[#9ba9b2] rounded-sm">
          <img src= "photos/page-2/photo-booth-1.jpeg" alt="film strip" className="w-full h-40 object-cover rounded-sm" />
          <p className="text-[0.7rem] mt-1 font-mono text-[#4a3f36]">photo booths</p>
        </div>

        {/* small polaroid + tag */}
        <div className="col-span-1 flex flex-col gap-2">
          <div className="polaroid p-2 rotate-[1deg]">
            <img src="photos/page-2/7th-heaven.jpeg" alt="september days" className="w-full h-28 object-cover rounded-sm" />
            <p className="text-[0.65rem] mt-1">7th heaven dates</p>
          </div>
          <div className="bg-[#fff3e2] p-2 border-l-4 border-[#e6ccbe] text-xs">
            <span className="font-bold">286</span> photos this year
          </div>
        </div>

        {/* wide sticky note */}
        <div className="col-span-2 sticky-note p-4 rotate-[-1deg] flex gap-3 items-center" style={{ background: '#f5e3d2' }}>
          <span className="text-3xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🗒️</span>
          <div>
            <p className="font-semibold text-[#5e5546]">Hey There!</p>
            <ul className="text-xs list-disc list-inside">
                <li>Just made a little scrapbook!</li>
                <li>Hope you like the vibes and memories.</li>
                <li>Well you didn't agree to do it so I thought I'd do it anyway!</li>
                <li>Here's to many more years of chaos and love. ✨</li>
            </ul>
          </div>
        </div>

        {/* torn paper */}
        <div className="col-span-1 torn-paper p-3 flex flex-col items-center justify-center">
          <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📅</span>
          <span className="font-bold text-[#8b7a69]">13.02.2025</span>
          <span className="text-[0.6rem] uppercase">one year ago</span>
        </div>

        {/* photo stack */}
        <div className="col-span-1 relative">
          <div className="absolute -top-2 -left-2 w-full h-full bg-[#e6ccbe] border border-white rotate-3"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#b9c6ae] border border-white -rotate-1"></div>
          <div className="relative bg-white p-2 shadow-md z-10">
            <img src="photos/page-2/apr-26.jpeg" alt="cafe chill" className="w-full h-28 object-cover rounded-sm" />
            <p className="text-[0.6rem] mt-1">apr 26 · cute</p>
          </div>
        </div>

        {/* footer caption */}
        <div className="col-span-3 md:col-span-4 flex justify-end mt-4">
          <span className="bg-white px-6 py-3 rounded-full border-2 border-[#b9c6ae] text-sm rotate-[-1deg] shadow-md">
            ✦  15 pages of us  ✦
          </span>
        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-8">
        <a href="#page-1" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36]">← cover</a>
        <div className="text-xs flex gap-1 items-center text-[#9ba9b2] font-mono">
          <span className="w-2 h-2 rounded-full bg-[#e6ccbe]"></span> 02 / 15 · memory collage
          <span className="w-2 h-2 rounded-full bg-[#b9c6ae] ml-2"></span>
        </div>
        <a href="#page-3" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36]">page 3 →</a>
      </div>
      
      <div className="zigzag-border w-100 mt-5 transform rotate-180"></div>
    </div>
  );
};

// PAGE 3: JANUARY 2025 · THE DAY WE MET
// First meeting story with 3 photo placeholders and sweet text
const Page3 = () => {
  return (
    <div className="position-relative w-100 min-vh-100 px-3 py-5 page-section d-flex flex-column align-items-center justify-content-center" 
         id="page-3"
         style={{ 
           background: 'linear-gradient(145deg, rgba(248,224,224,0.2), rgba(230,204,190,0.1))',
           borderTop: '3px solid var(--meet-cute-pink)',
           borderBottom: '3px solid var(--dusty-rose)'
         }}>
      
      {/* decorative tape - blush tones */}
      <div className="tape" style={{ top: '5%', left: '8%', width: '100px', transform: 'rotate(-8deg)', background: 'rgba(248,224,224,0.7)' }}></div>
      <div className="tape" style={{ bottom: '8%', right: '5%', width: '80px', transform: 'rotate(12deg)', background: 'rgba(230,204,190,0.6)' }}></div>
      
      {/* heart doodle border */}
      <div className="heart-doodle w-100 mb-6"></div>

      {/* main content */}
      <div className="w-full max-w-6xl mx-auto">
        
        {/* HEADER - date and event */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-7xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💌</span>
              <div>
                <h2 className="text-6xl md:text-7xl font-bold" style={{ color: 'var(--ink)', textShadow: '2px 2px 0 var(--meet-cute-pink)' }}>
                  the time
                </h2>
                <h2 className="text-5xl md:text-6xl font-bold -mt-2" style={{ color: 'var(--warm-brown)' }}>
                  we met
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-2 mt-3">
              <span className="event-badge">
                <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎫</span> The Dic Event 2025
              </span>
              <span className="event-badge" style={{ background: 'var(--dusty-rose)' }}>
                <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📅</span> jan 22-28
              </span>
            </div>
          </div>
          <span className="bg-white px-5 py-3 rounded-full border-2 border-[#f8e0e0] text-sm shadow-sm mt-4 md:mt-0 rotate-[1deg]">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>✨</span> first hello, forever us
          </span>
        </div>

        {/* PHOTO GRID - 3 photos from the event */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          {/* PHOTO 1 - wide shot of event */}
          <div className="first-meet-polaroid rotate-[-1deg] flex flex-col h-full">
            <div className="w-full h-64 bg-gradient-to-br from-[#f8e0e0] to-[#e6ccbe] flex items-center justify-center rounded-sm overflow-hidden">
              <img src="photos/page-3/so-mean-lol.jpeg" alt="the dic event" className="w-full h-full object-cover"></img>
            </div>
            <div className="flex-1 p-3 pb-5">
              <p className="text-xs font-medium text-[#5e5546] flex items-center gap-1">
                <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📍</span> i looked so mean lol
              </p>
            </div>
          </div>
          
          {/* PHOTO 2 - the actual first meeting moment */}
          <div className="first-meet-polaroid rotate-[2deg] relative flex flex-col h-full">
            <div className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-md z-10">
              <span className="text-xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>❤️</span>
            </div>
            <div className="w-full h-64 bg-gradient-to-br from-[#ffd9d9] to-[#e6ccbe] flex items-center justify-center rounded-sm overflow-hidden">
              <img src="photos/page-3/first-meet.jpeg" alt="first meeting" className="w-full h-full object-cover"></img>
            </div>
            <div className="flex-1 p-3 pb-5">
              <p className="text-xs mt-2 font-medium text-[#5e5546] flex items-center gap-1">
                <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💬</span> "koi ne ahya GTA Vice City install karta aavde chhe?"
              </p>
            </div>
          </div>
          
          {/* PHOTO 3 - later that night */}
          <div className="first-meet-polaroid rotate-[-2deg] flex flex-col h-full">
            <div className="w-full h-64 bg-gradient-to-br from-[#d9e0e2] to-[#c7d8dd] flex items-center justify-center rounded-sm overflow-hidden">
              <img src="photos/page-3/id-mil-gayi.jpeg" alt="ID received" className="w-full h-full object-cover"></img>
            </div>
            <div className="flex-1 p-3 pb-5">
              <p className="text-xs mt-2 font-medium text-[#5e5546] flex items-center gap-1">
                <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🌙</span> ID mil gayi hell yeahh!
              </p>
            </div>
          </div>
        </div>
        {/* STORY SECTION - the meet-cute text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          
          {/* left column - handwritten memory */}
          <div className="bg-white p-6 rounded-3xl border-2 border-[#f8e0e0] shadow-lg rotate-[-0.5deg]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📎</span>
              <h3 className="font-bold text-lg" style={{ color: 'var(--ink)' }}>the first day of us</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-brown)' }}>
              i was sitting randomly with Helly and Sarang talking random things and suddenly heard
              a voice behind me asking about GTA Vice City. I turned around and there you were, 
              asking the most random question but it was the perfect icebreaker. 
              We ended up talking to each other, about everything and nothing, and it felt like we had known each other forever. It was awkward, sweet, and the start of something really special.
            </p>
            <p className="text-xs mt-4 italic text-right">— 387 days ago</p>
          </div>
          
          {/* right column - what we said later */}
          <div className="bg-[#fff3e2] p-6 rounded-3xl border-2 border-dashed border-[#e6ccbe] rotate-[0.8deg]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💭</span>
              <h3 className="font-bold text-lg" style={{ color: 'var(--ink)' }}>what we said later</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm bg-white/70 p-3 rounded-2xl">
                <span className="font-bold">me:</span> "did you check the site i told you about?"
              </p>
              <p className="text-sm bg-white/70 p-3 rounded-2xl">
                <span className="font-bold">you:</span> "No I didn't but how can I trust it"
              </p>
              <p className="text-sm bg-white/70 p-3 rounded-2xl">
                <span className="font-bold">me:</span> "Lol trust me it's a good site, I use it all the time"
              </p>
            </div>
          </div>
        </div>

        {/* MEMORY CAPSULE - tiny details */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="bg-white px-5 py-3 rounded-full border border-[#f8e0e0] text-sm shadow-sm flex items-center gap-2">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🧣</span> you wore confidence like a cloak
          </div>
          <div className="bg-white px-5 py-3 rounded-full border border-[#f8e0e0] text-sm shadow-sm flex items-center gap-2">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>☕️</span> i got the "cool bartan dhonewala" tag
          </div>
          <div className="bg-white px-5 py-3 rounded-full border border-[#f8e0e0] text-sm shadow-sm flex items-center gap-2">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎶</span> my mind played "No.1 Party Anthem"
          </div>
          <div className="bg-white px-5 py-3 rounded-full border border-[#f8e0e0] text-sm shadow-sm flex items-center gap-2">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📱</span> exchanged IDs in evening
          </div>
        </div>

        {/* date stamp */}
        <div className="mt-12 text-center">
          <span className="inline-block bg-[#e6ccbe] px-8 py-3 rounded-full text-sm font-medium text-[#4a3f36] rotate-[-1deg] shadow-md">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📌</span>  january 22, 2025 · the dic event 2025  ·  the beginning  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📌</span>
          </span>
        </div>
      </div>

      {/* navigation */}
      <div className="w-full flex justify-between items-center mt-8 px-4">
        <a href="#page-2" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36]">← memories</a>
        <div className="text-xs flex gap-1 items-center text-[#9ba9b2] font-mono">
          <span className="w-2 h-2 rounded-full bg-[#f8e0e0]"></span> 03 / 15 · the day we met · jan 22, 2025
        </div>
        <a href="#page-4" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36]">page 4 →</a>
      </div>

      <div className="heart-doodle w-100 mt-5 transform rotate-180"></div>
    </div>
  );
};

// PAGE 4: FEBRUARY & MARCH 2025 · THE IN-BETWEEN
// Feb 13: Mid sems over, confessed in college, she had to leave, waited 1 hour with 2 friends
// Conversation wasn't the best, she was sad
// Mar 7: Brain & Brawn — she was anchor, you were camera guy, band played Yeh Fitoor Mera
// At night, she said "i feel the same too"
// Mar 29: Amusement park with friends, ferris wheel, held hands, not dating yet

const Page4 = () => {
  return (
    <div className="position-relative w-100 min-vh-100 px-3 py-5 page-section d-flex flex-column align-items-center justify-content-center" 
         id="page-4"
         style={{ 
           background: 'linear-gradient(145deg, rgba(185,198,174,0.1), rgba(230,204,190,0.15))',
           borderTop: '6px double var(--sage)',
           borderBottom: '6px double var(--dusty-rose)'
         }}>
      
      {/* decorative tape */}
      <div className="tape" style={{ top: '4%', left: '3%', width: '120px', transform: 'rotate(-12deg)', background: 'rgba(230,204,190,0.6)' }}></div>
      <div className="tape" style={{ bottom: '6%', right: '2%', width: '100px', transform: 'rotate(9deg)', background: 'rgba(185,198,174,0.5)' }}></div>
      
      <div className="w-full max-w-6xl mx-auto">
        
        {/* HEADER — feb 13 · mar 7 · mar 29 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-6xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📆</span>
              <h2 className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--ink)', textShadow: '2px 2px 0 var(--dusty-rose)' }}>
                feb & mar
              </h2>
            </div>
            <div className="flex items-center gap-2 ml-2 mt-1">
              <span className="bg-white px-4 py-1 rounded-full text-sm border border-[#8b7a69] shadow-sm">
                <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎓</span>  mid sems over
              </span>
              <span className="text-sm italic text-[#8b7a69]">confession · she said it back · fun world</span>
            </div>
          </div>
          <span className="bg-white px-5 py-2 rounded-full border-2 border-[#b9c6ae] text-sm shadow-md mt-4 md:mt-0 rotate-[-1deg]">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>⏳</span>  The In-Between  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>⏳</span>
          </span>
        </div>

        {/* === FEB 13 — CONFESSION + THE WAIT === */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-8 rounded-full bg-[#e6ccbe] flex items-center justify-center text-white text-sm">1</span>
            <h3 className="text-xl font-bold" style={{ color: 'var(--ink)' }}>february 13 · the confession</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* confession moment */}
            <div className="confession-bubble">
              <h4 className="font-bold text-lg mb-3 mt-2" style={{ color: 'var(--ink)' }}>11:15pm</h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-brown)' }}>
                mid sems just ended. i called you by the parking. i called you to come aside coz i wanted to tell you something.
              </p>
              <div className="mt-3 bg-[#fff3e2] p-4 rounded-2xl">
                <p className="text-sm italic font-medium" style={{ color: 'var(--ink)' }}>
                  "aapde jyare dic ma maila since that day, i feel kinda attached towards you."
                </p>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs">
                <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🕯️</span>
                <span className="italic text-[#8b7a69]">you started to say something. then you looked at your phone, there was a call. you had to go.</span>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[0.65rem] text-[#8b7a69]">conversation lasted 87 seconds</span>
              </div>
            </div>
            
            {/* the wait — 1 hour, 2 friends */}
            <div className="stayed-card">
              <h4 className="font-bold text-lg mb-3" style={{ color: 'var(--ink)' }}>1:23pm · the wait</h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-brown)' }}>
                you said "i have to go, can we talk later?" and then you left. so i waited.
              </p>
              <div className="mt-4 bg-white p-3 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>👥</span>
                  <span className="font-semibold text-sm">vishwa and saumya waited with me</span>
                </div>
                <p className="text-xs text-[#5e5546]">
                  they didn't ask questions. they just sat on the bench and scrolled their phones and played UNO with me.
                </p>
              </div>
            </div>
          </div>

          {/* the conversation — wasn't the best, she was sad */}
          <div className="mt-6 max-w-3xl mx-auto">
            <div className="bg-[#f0e7de] p-5 rounded-3xl border border-dashed border-[#8b7a69] rotate-[-0.2deg]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🕯️</span>
                <h4 className="font-semibold">1:30pm · she came back</h4>
              </div>
              <p className="text-sm text-[#5e5546] leading-relaxed">
                you looked tired. you started to walk away. we walked on the steps. you were quiet for a long time. then you said:
              </p>
              <div className="mt-3 bg-white/70 p-4 rounded-2xl italic text-sm">
                "i don't know what to say. i just... i didn't expect this. i'm sorry"
              </div>
              <p className="text-sm text-[#5e5546] mt-3">
                you were sad. i could tell you felt guilty. i said it was okay. 
                that you didn't have to have an answer. the conversation wasn't the best.
                but i was still there.
              </p>
              <div className="mt-4 text-xs text-right text-[#8b7a69]">
                — we talked for 10 minutes. you were scared and sad. i was just trying to be there for you.
              </div>
            </div>
          </div>
        </div>

        {/* === MARCH 7 — BRAIN & BRAWN · SHE SAID IT BACK === */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-8 rounded-full bg-[#b9c6ae] flex items-center justify-center text-white text-sm">2</span>
            <h3 className="text-xl font-bold" style={{ color: 'var(--ink)' }}>march 7 · brain & brawn · the night she said it back</h3>
          </div>

          {/* event grid — anchor + camera guy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* she was the anchor */}
            <div className="bg-white p-5 rounded-3xl border-2 border-[#e6ccbe] shadow-lg rotate-[-0.3deg]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎙️</span>
                <h4 className="font-bold text-lg" style={{ color: 'var(--ink)' }}>she was on stage</h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-brown)' }}>
                she was the anchor for the event. she was amazing. she kept looking at me while she was on stage. she was bold, confident, and she didn't fumble a single time. i was so proud of her. it was like i had a front row seat to watch her shine.
              </p>
              <div className="mt-4 bg-[#fff3e2] p-3 rounded-2xl">
                <span className="text-xs font-medium">anchor notes:</span>
                <p className="text-xs italic mt-1">"he didn't miss a single frame"</p>
              </div>
            </div>
            
            {/* you were the camera guy */}
            <div className="bg-white p-5 rounded-3xl border-2 border-[#b9c6ae] shadow-lg rotate-[0.5deg]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎥</span>
                <h4 className="font-bold text-lg" style={{ color: 'var(--ink)' }}>He was behind the camera</h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-brown)' }}>
                he was focused on getting good shots of her. he kept looking at her between segments. he was there for the whole event, even when his band wasn't playing.
              </p>
              <div className="mt-4 bg-[#fff3e2] p-3 rounded-2xl">
                <span className="text-xs font-medium">cameraman notes:</span>
                <p className="text-xs italic mt-1">"i volunteered so i'd have an excuse to watch her the whole time lol"</p>
              </div>
            </div>
          </div>

          {/* THE SONG — Yeh Fitoor Mera */}
          <div className="mt-8 relative">
            <div className="bg-gradient-to-r from-[#fff3e2] to-[#f5e5d5] p-6 rounded-3xl border-2 border-[#e6ccbe] shadow-xl max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-7xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎵</div>
                <div className="text-center md:text-left">
                  <span className="bg-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#8b7a69]">the moment</span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2" style={{ color: 'var(--ink)' }}>Yeh Fitoor Mera</h3>
                  <p className="text-sm mt-2 italic" style={{ color: 'var(--warm-brown)' }}>
                    "yeh fitoor mera, laya mujhko hai tere kareeb..."
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="bg-white px-4 py-2 rounded-full text-xs shadow-sm flex items-center gap-1">
                      <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎸</span> Our band played it
                    </span>
                    <span className="bg-white px-4 py-2 rounded-full text-xs shadow-sm flex items-center gap-1">
                      <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎤</span> we both sat together and enjoyed it
                    </span>
                  </div>
                  <p className="text-xs mt-4 text-[#8b7a69] max-w-md">
                    this song became ours that night. every time it plays now, we're both back in that seminar hall.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* THE CONFESSION — at night */}
          <div className="mt-8">
            <div className="relative bg-[#1e2a36] text-white p-7 rounded-3xl border-4 border-white/20 shadow-2xl">
              <div className="absolute -top-4 -right-2 text-4xl rotate-12" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🌙</div>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💫</span>
                <h4 className="font-bold text-xl text-white">11:32pm · she said it</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                    <p className="text-sm leading-relaxed text-white/90 italic">
                      "And ik it hurts but it is what it is I cannot say yes you already know the reason so 
                      I can't think more even if I want to so umm"
                      <span className="block mt-3 text-base font-medium not-italic text-white">i want to say Yes.</span>
                      <span className="block mt-2 text-xs text-white/70">Done? Dusted?</span>"
                    </p>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="bg-white/5 p-5 rounded-2xl h-full flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🕯️</span>
                      <span className="text-sm font-medium text-white/80">what i said back</span>
                    </div>
                    <p className="text-xs text-white/70 italic">
                      "If I had known that I would have never been afraid to look into those eyes even for once"
                    </p>
                    <div className="mt-3 text-[0.65rem] text-white/50 text-right">
                      — march 7 · 11:34pm
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-5 text-center">
                <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-xs backdrop-blur-sm border border-white/30">
                  not dating yet · but now we both knew
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* === MARCH 29 — FUN WORLD · AMUSEMENT PARK === */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-8 rounded-full bg-[#c7d8dd] flex items-center justify-center text-white text-sm">3</span>
            <h3 className="text-xl font-bold" style={{ color: 'var(--ink)' }}>march 29 · fun world · not dating yet but it was already us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* THE PHOTO — ferris wheel */}
            <div className="md:col-span-2">
              <div className="amusement-park-polaroid">
                <div className="ferris-wheel-moment">
                  <div className="w-full h-64 bg-gradient-to-br from-[#c7d8dd] to-[#b9c6ae] flex flex-col items-center justify-center rounded-md relative">
                    <img src="photos/page-4/ferris-wheel.jpeg" alt="ferris wheel moment" className="w-full h-full object-cover rounded-md" />
                    <div className="absolute bottom-2 right-2 text-4xl rotate-12" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🤚</div>
                  </div>
                </div>
                <p className="text-sm mt-3 font-medium text-center" style={{ color: 'var(--ink)' }}>
                  we weren't dating yet but we looked like a cute teenage couple.
                </p>
                <p className="text-xs text-center text-[#8b7a69] mt-1">
                  our friends were all already getting up on ride.
                  i think you just wanted to hold on.
                </p>
              </div>
            </div>
            
            {/* that day details */}
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-[#e6ccbe] shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎟️</span>
                  <h4 className="font-bold">that day</h4>
                </div>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">• i picked you up from the alley near your house</li>
                  <li className="flex items-start gap-2">• we played antakshari in the garden</li>
                  <li className="flex items-start gap-2">• we held hands for the first time</li>
                  <li className="flex items-start gap-2">• shared a seat together on that kite ride</li>
                  <li className="flex items-start gap-2 font-medium">• i had to leave early and we both felt bad about it</li>
                </ul>
              </div>
              
              <div className="bg-[#fff3e2] p-4 rounded-2xl border border-dashed border-[#b9c6ae]">
                <div className="flex items-center gap-2">
                  <span className="text-xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🧸</span>
                  <div>
                    <span className="text-sm font-medium">you blushed all the time and couldn't say a single word</span>
                    <p className="text-[0.65rem] text-[#8b7a69]">(i knew. we both knew.)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-2 rounded-full border border-[#b9c6ae] text-xs flex items-center gap-2 w-fit">
                <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎯</span> with Spam Purpose
              </div>
            </div>
          </div>
        </div>

        {/* REFLECTION — what it meant */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="reflection-card-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💭</span>
              <h4 className="font-bold text-sm">what i thought on feb 13</h4>
            </div>
            <p className="text-xs italic text-[#5e5546]">
              "even if she doesn't feel the same, i don't regret it. at least she knows."
            </p>
          </div>
          
          <div className="reflection-card-right">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🕯️</span>
              <h4 className="font-bold text-sm">what you said on mar 7</h4>
            </div>
            <p className="text-xs italic text-[#5e5546]">
              "i feel the same too. i just don't know what we can do about it right now."
            </p>
          </div>
        </div>

        {/* FOOTER — not dating yet but it was already us */}
        <div className="mt-12 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2/3 h-px bg-[#e6ccbe]/60"></div>
          </div>
          <span className="relative bg-[#fff3e2] px-8 py-3 rounded-full text-sm border-2 border-[#b9c6ae] shadow-md inline-flex items-center gap-3">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🌷</span>  not dating yet · but it was already us  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🌷</span>
          </span>
        </div>
      </div>

      {/* navigation */}
      <div className="w-full flex justify-between items-center mt-12 px-4">
        <a href="#page-3" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36] flex items-center gap-1">
          <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>←</span> the day we met
        </a>
        <div className="text-xs flex gap-1 items-center text-[#9ba9b2] font-mono bg-white/50 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#e6ccbe]"></span>
          <span className="w-2 h-2 rounded-full bg-[#b9c6ae]"></span>
          <span className="w-2 h-2 rounded-full bg-[#c7d8dd]"></span>
          04 / 15 · feb 13 + mar 7 + mar 29
        </div>
        <a href="#page-5" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36] flex items-center gap-1">
          page 5 <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>→</span>
        </a>
      </div>
    </div>
  );
};

// PAGE 5: APRIL 2025 · HER BIRTHDAY · THE THREE WORDS
// Crystal mall 4 days earlier with her 3 best friends
// She was in Ahmedabad, came back 2 days before
// Made her an edit
// Couldn't stop wishing her — shook hands AGAIN AND AGAIN like a SIMP
// Her friends witnessed everything
// 3am conversation · "i love you" for the first time
// STILL NOT DATING 😭

const Page5 = () => {
  return (
    <div className="position-relative w-100 min-vh-100 px-3 py-5 page-section d-flex flex-column align-items-center justify-content-center" 
         id="page-5"
         style={{ 
           background: 'linear-gradient(145deg, rgba(255,223,223,0.2), rgba(255,209,209,0.1))',
           borderTop: '6px double #ffb7b7',
           borderBottom: '6px double var(--dusty-rose)'
         }}>
      
      {/* birthday tape — pink overload */}
      <div className="tape" style={{ top: '3%', right: '5%', width: '110px', transform: 'rotate(12deg)', background: 'rgba(255,183,183,0.5)' }}></div>
      <div className="tape" style={{ bottom: '7%', left: '2%', width: '90px', transform: 'rotate(-8deg)', background: 'rgba(255,209,209,0.6)' }}></div>
      
      <div className="w-full max-w-6xl mx-auto">
        
        {/* HEADER — APRIL 9 · SHE WAS BORN */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-4">
              <span className="text-7xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎂</span>
              <div>
                <h2 className="text-6xl md:text-7xl font-bold" style={{ color: 'var(--ink)', textShadow: '3px 3px 0 #ffd1d1' }}>
                  april 9
                </h2>
                <p className="text-lg mt-1" style={{ color: 'var(--warm-brown)' }}>she turned 17 · i turned into a SIMP</p>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-2 mt-2">
              <span className="bg-white px-4 py-1 rounded-full text-sm border border-[#ffb7b7] shadow-sm">
                <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎁</span>  surprise party
              </span>
              <span className="text-sm italic text-[#8b7a69]">still not dating ARE YOU KIDDING ME</span>
            </div>
          </div>
          <span className="bg-white px-6 py-3 rounded-full border-2 border-[#ffb7b7] text-sm shadow-md mt-4 md:mt-0 rotate-[2deg] flex items-center gap-2">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🤝</span>  shook hands approximately 47 times  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🤝</span>
          </span>
        </div>

        {/* === PART 1: THE PLANNING (4 DAYS EARLIER) === */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-[#ffb7b7] flex items-center justify-center text-white font-bold">1</span>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--ink)' }}>april 5 · crystal mall · mission: make her cry (happy)</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* with her 3 best friends */}
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-3xl border-2 border-[#ffb7b7] shadow-lg rotate-[-0.3deg]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🛍️</span>
                  <h4 className="font-bold text-lg" style={{ color: 'var(--ink)' }}>operation birthday · with the girl squad</h4>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-brown)' }}>
                  me and her 3 best friends. crystal mall. 4 days before her birthday.
                  she was in ahmedabad. had no idea we were plotting.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="bg-[#fff3e2] p-2 rounded-xl text-center">
                    <span className="text-xl">⭐</span>
                    <p className="text-[0.65rem] mt-1">decoration plans</p>
                  </div>
                  <div className="bg-[#fff3e2] p-2 rounded-xl text-center">
                    <span className="text-xl">🚗</span>
                    <p className="text-[0.65rem] mt-1">hotwheels</p>
                  </div>
                  <div className="bg-[#fff3e2] p-2 rounded-xl text-center">
                    <span className="text-xl">🎐</span>
                    <p className="text-[0.65rem] mt-1">wind chimes</p>
                  </div>
                </div>
                <p className="text-xs mt-4 italic text-[#8b7a69]">
                  her friends were so excited. they kept saying "she's going to cry." i said "good."
                </p>
              </div>
            </div>
            
            {/* she was in ahmedabad */}
            <div className="bg-[#f0e7de] p-5 rounded-3xl border border-dashed border-[#8b7a69] rotate-[0.5deg] flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📍</span>
                <span className="font-semibold">ahmedabad</span>
              </div>
              <p className="text-xs text-[#5e5546]">
                she was 200km away. had no clue i was running around a mall with her besties buying her gifts.
              </p>
              <div className="mt-3 bg-white/70 p-2 rounded-lg text-xs text-center">
                she deactivated her account before her birthday so it was good for us of her not being able to see our plans hehe
              </div>
            </div>
          </div>
          
          {/* she came back 2 days early */}
          <div className="mt-6 max-w-3xl">
            <div className="bg-gradient-to-r from-[#ffe9e9] to-[#ffdbdb] p-4 rounded-2xl border border-[#ffb7b7] flex items-center gap-4">
              <span className="text-3xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🚗</span>
              <div>
                <span className="font-bold text-md">april 7 · she came back 2 days early</span>
                <p className="text-xs text-[#5e5546] mt-1">my heart: 📈📈📈📈📈</p>
              </div>
            </div>
          </div>
        </div>

        {/* === PART 2: THE EDIT === */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-[#ffb7b7] flex items-center justify-center text-white font-bold">2</span>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--ink)' }}>the edit · local editor supremacy</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/5 p-6 rounded-3xl border-2 border-[#b9c6ae] shadow-lg rotate-[-0.8deg] relative">
              <div className="absolute -top-4 -left-2 text-4xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎬</div>
              <div className="mt-4 text-center">
                <img src="photos/page-5/birthday-edit.jpeg" className="w-full h-64 object-cover rounded-lg"></img>
                <div className="bg-white p-3 rounded-xl mt-4 text-xs">
                  <p className="italic">"i spent 6 hours on this and i'm not even sorry"</p>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  <span className="bg-white px-3 py-1 rounded-full text-xs">📸 22 photos</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">🎵 1 song</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">✂️ 11 transitions</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border-2 border-[#e6ccbe] shadow-lg rotate-[0.5deg]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💬</span>
                <h4 className="font-bold">she said</h4>
              </div>
              <p className="text-sm italic text-[#5e5546]">
                "wait you MADE this? for ME?"
              </p>
              <p className="text-sm italic text-[#5e5546] mt-2">
                "i'm crying aww."
              </p>
              <div className="mt-4 text-xs text-right text-[#8b7a69]">
                — she watched it 5 times that night
              </div>
            </div>
          </div>
        </div>

        {/* === PART 3: THE SIMP BEHAVIOR === */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-[#ffb7b7] flex items-center justify-center text-white font-bold">3</span>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--ink)' }}>the handshake saga · public simp exhibition</h3>
          </div>
          
          <div className="bg-gradient-to-r from-[#fff3e2] to-[#ffe6e6] p-7 rounded-3xl border-4 border-dashed border-[#ffb7b7] shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-8xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🤝</div>
              <div>
                <h4 className="font-bold text-2xl mb-2" style={{ color: 'var(--ink)' }}>"happy birthday" × 47</h4>
                <p className="text-md text-[#5e5546]">
                  i couldn't stop. i kept going back. "happy birthday!!!" *shakes hand*.
                  <br />5 minutes later: "HAPPY BIRTHDAY!!!" *shakes hand AGAIN*.
                  <br />her friends were watching. they were ofcourse laughing.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-white px-4 py-2 rounded-full text-xs shadow-sm">"bro is down bad" — sarang</span>
                  <span className="bg-white px-4 py-2 rounded-full text-xs shadow-sm">"hmm hmm we can understand arhan" — helly</span>
                  <span className="bg-white px-4 py-2 rounded-full text-xs shadow-sm">"this is painful to watch" — her bestie</span>
                </div>
                <p className="text-xs mt-4 text-[#8b7a69] italic">
                  she was blushing the whole time. she kept shaking back. WE WEREN'T EVEN DATING.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === PART 4: 3AM · THE THREE WORDS === */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-[#ffb7b7] flex items-center justify-center text-white font-bold">4</span>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--ink)' }}>3:00am · the golden words</h3>
          </div>
          
          <div className="relative">
            {/* night sky background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a2e] to-[#1c2c3f] opacity-95 rounded-3xl"></div>
            
            <div className="relative p-8 rounded-3xl border-2 border-white/30 text-white">
              <div className="absolute -top-5 -left-2 text-5xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>✨</div>
              <div className="absolute -bottom-5 -right-2 text-5xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💫</div>
              
              <div className="text-center mb-8">
                <span className="text-sm uppercase tracking-[0.3em] text-white/60">april 10 · 3:00am</span>
                <h3 className="text-4xl md:text-5xl font-bold mt-2 text-white">"i love you"</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💌</span>
                    <span className="font-bold text-lg">me</span>
                  </div>
                  <p className="text-sm text-white/90 italic">
                    "i know we're not dating. i know things are complicated.
                    <br />i will just say it. i have to say it. i need to say it.
                    <br /><span className="text-2xl font-normal not-italic text-white mt-2 block">but i can't 😭</span>"
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🕯️</span>
                    <span className="font-bold text-lg">her</span>
                  </div>
                  <p className="text-sm text-white/90 italic">
                    "even i want to say it to you.
                    <br />let's say it together.
                    <br />letter by letter. word by word."
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <span className="inline-block bg-white/20 px-6 py-3 rounded-full text-sm backdrop-blur-sm border border-white/30">
                  we said i love you before we ever said "will you be my girlfriend"
                </span>
              </div>
              
              <div className="mt-6 text-xs text-white/50 text-center">
                we talked like more than 3 hours that night.
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER — STILL NOT DATING 😭 */}
        <div className="mt-12 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2/3 h-px bg-[#ffb7b7]/60"></div>
          </div>
          <span className="relative bg-white px-8 py-4 rounded-full text-md border-2 border-[#ffb7b7] shadow-md inline-flex items-center gap-3 font-bold" style={{ color: 'var(--ink)' }}>
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>😭</span>  WE STILL WEREN'T DATING. MAKE IT MAKE SENSE.  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>😭</span>
          </span>
          <p className="text-xs mt-4 text-[#8b7a69] italic">
            (she knew. i knew. everyone knew. we were basically dating. we just hadn't said the words.)
          </p>
        </div>
      </div>

      {/* navigation */}
      <div className="w-full flex justify-between items-center mt-12 px-4">
        <a href="#page-4" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36] flex items-center gap-1">
          <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>←</span> feb & mar · the in-between
        </a>
        <div className="text-xs flex gap-1 items-center text-[#9ba9b2] font-mono bg-white/50 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#ffb7b7]"></span>
          <span className="w-2 h-2 rounded-full bg-[#ffb7b7]"></span>
          <span className="w-2 h-2 rounded-full bg-[#ffb7b7]"></span>
          05 / 15 · april 9 · i love you · STILL NOT DATING
        </div>
        <a href="#page-6" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36] flex items-center gap-1">
          page 6 <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>→</span>
        </a>
      </div>
    </div>
  );
};

// PAGE 6: APRIL 25 · MY BIRTHDAY SURPRISE · SHE PLANNED IT ALONE
// Vacations starting soon (27th april) — i'm her senior
// She tried convincing Spam Purpose but no one could make it
// April 25 — she took Saumya, he brought me thinking it's his personal work
// Saumya SALUTED and left. ABSOLUTE KING.
// She was there. Alone. Gifts in hand.
// Spider-Man keychain from her bestie's brand "Scribbles"
// Deodorant — "couldn't find what else to give a guy" 😭
// Face to face "I love you" for the first time
// WE STILL WEREN'T DATING.
// There's a photo. Of course there's a photo.

const Page6 = () => {
  return (
    <div className="position-relative w-100 min-vh-100 px-3 py-5 page-section d-flex flex-column align-items-center justify-content-center" 
         id="page-6"
         style={{ 
           background: 'linear-gradient(145deg, rgba(185,198,174,0.1), rgba(230,204,190,0.2))',
           borderTop: '6px double var(--sage)',
           borderBottom: '6px double var(--dusty-rose)'
         }}>
      
      {/* celebratory tape — she planned THIS */}
      <div className="tape" style={{ top: '5%', left: '7%', width: '100px', transform: 'rotate(-8deg)', background: 'rgba(185,198,174,0.6)' }}></div>
      <div className="tape" style={{ bottom: '8%', right: '4%', width: '120px', transform: 'rotate(12deg)', background: 'rgba(230,204,190,0.7)' }}></div>
      
      <div className="w-full max-w-6xl mx-auto">
        
        {/* HEADER — APRIL 25 · MY TURN */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-4">
              <span className="text-7xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎂</span>
              <div>
                <h2 className="text-6xl md:text-7xl font-bold" style={{ color: 'var(--ink)', textShadow: '3px 3px 0 var(--dusty-rose)' }}>
                  april 25
                </h2>
                <p className="text-lg mt-1" style={{ color: 'var(--warm-brown)' }}>she planned it. alone. just for me.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-2 mt-2">
              <span className="bg-white px-4 py-1 rounded-full text-sm border border-[#b9c6ae] shadow-sm">
                <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎁</span>  surprise party of ONE
              </span>
              <span className="text-sm italic text-[#8b7a69]">(the whole gang couldn't make it but she still did it)</span>
            </div>
          </div>
          <span className="bg-white px-6 py-3 rounded-full border-2 border-[#e6ccbe] text-sm shadow-md mt-4 md:mt-0 rotate-[-1deg] flex items-center gap-2">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🫡</span>  saumya, the wingman of the century  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🫡</span>
          </span>
        </div>

        {/* === PART 1: THE SETUP — SHE TRIED, NO ONE COULD COME === */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-[#b9c6ae] flex items-center justify-center text-white font-bold">1</span>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--ink)' }}>operation birthday: solo mode</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-3xl border-2 border-[#e6ccbe] shadow-lg rotate-[-0.3deg]">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🗓️</span>
                <h4 className="font-bold text-lg" style={{ color: 'var(--ink)' }}>april 27 · vacations start</h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-brown)' }}>
                i'm her senior. my summer break was about to begin. 
                she knew if she didn't do it now, she'd miss her chance.
              </p>
              <div className="mt-4 bg-[#fff3e2] p-4 rounded-2xl">
                <span className="text-xs font-medium block mb-1">she tried convincing 🎯 Spam Purpose:</span>
                <p className="text-xs italic text-[#5e5546]">
                  "please guys it's his birthday 😭" 
                  <br />"i can't, my exams" 
                  <br />"i have family thing" 
                  <br />"i'm out of town"
                </p>
                <p className="text-xs mt-3 font-medium text-[#8b7a69]">
                  one by one, everyone dropped out. but she didn't cancel.
                </p>
              </div>
            </div>
            
            <div className="bg-[#f0e7de] p-6 rounded-3xl border-2 border-dashed border-[#8b7a69] rotate-[0.5deg] flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎯</span>
                <h4 className="font-bold">spam purpose · absent</h4>
              </div>
              <p className="text-sm text-[#5e5546] italic">
                "it's okay. i'll do it myself."
              </p>
              <p className="text-xs mt-4 text-right text-[#8b7a69]">
                — she said. like a protagonist.
              </p>
            </div>
          </div>
        </div>

        {/* === PART 2: SAUMYA, THE WINGMAN LEGEND === */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-[#b9c6ae] flex items-center justify-center text-white font-bold">2</span>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--ink)' }}>🫡 the salute heard round the world</h3>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#b9c6ae] to-[#e6ccbe] opacity-20 blur-xl rounded-3xl"></div>
            <div className="relative bg-white p-8 rounded-3xl border-4 border-[#b9c6ae] shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-1 text-center">
                  <div className="text-8xl mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🫡</div>
                  <span className="bg-[#e6ccbe] px-4 py-2 rounded-full text-sm font-bold">SAUMYA</span>
                </div>
                <div className="md:col-span-2">
                  <p className="text-md leading-relaxed" style={{ color: 'var(--ink)' }}>
                    "bro just come with me, i need your help with something personal."
                  </p>
                  <p className="text-sm text-[#5e5546] mt-2">
                    i believed him. obviously i believed him. he's my friend.
                    <br />we walked. we reached. i turned around.
                  </p>
                  <div className="mt-4 bg-[#fff3e2] p-4 rounded-2xl">
                    <span className="text-xl block mb-2">👋</span>
                    <p className="text-sm italic font-medium">
                      saumya looked at me. then he looked at her. 
                      <br />he SALUTED. and walked away.
                    </p>
                  </div>
                  <p className="text-xs mt-3 text-[#8b7a69] text-right italic">
                    — never ask him what the "personal work" was. it was her.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === PART 3: THE MOMENT — SHE WAS THERE, ALONE === */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-[#b9c6ae] flex items-center justify-center text-white font-bold">3</span>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--ink)' }}>and there she was</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PHOTO — the moment */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-full h-full bg-[#e6ccbe] border border-white rotate-[2deg] rounded-lg"></div>
              <div className="absolute top-1 left-1 w-full h-full bg-[#b9c6ae] border border-white rotate-[-1deg] rounded-lg"></div>
              <div className="relative bg-white p-4 pb-8 rounded-lg shadow-xl rotate-[0.8deg] z-10">
                <div className="w-full h-64 bg-gradient-to-br from-[#ffd1d1] to-[#ffe3e3] flex flex-col items-center justify-center rounded-md relative">
                  <img src="photos/page-6/my-birthday.jpeg" className="w-full h-full object-cover rounded-md"></img>
                  <div className="absolute bottom-2 left-2 text-2xl bg-white/80 p-2 rounded-full">
                    <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎂</span>
                  </div>
                </div>
                <p className="text-sm mt-3 font-medium text-center" style={{ color: 'var(--ink)' }}>
                  she was alone. gifts in hand. smiling like she'd been caught.
                </p>
                <p className="text-xs text-center text-[#8b7a69] mt-1">
                  i still couldn't believe she did all this. for me. by herself. it was the sweetest thing ever.
                </p>
              </div>
            </div>
            
            {/* THE GIFTS */}
            <div className="space-y-5">
              <div className="bg-white p-5 rounded-2xl border-2 border-[#e6ccbe] shadow-md rotate-[-0.2deg]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🕷️</span>
                  <h4 className="font-bold text-lg">the spider-man keychain</h4>
                </div>
                <p className="text-sm text-[#5e5546]">
                  her bestie designed it. her bestie's brand — <span className="font-bold italic">"scribbles"</span>.
                  <br />she told her exactly what to make. a tiny spider-man. for me.
                </p>
                <div className="mt-3 bg-[#fff3e2] p-2 rounded-lg inline-block">
                  <span className="text-xs">✍️ scribbles · custom made with love</span>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-2xl border-2 border-[#b9c6ae] shadow-md rotate-[0.5deg]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🧴</span>
                  <h4 className="font-bold text-lg">the deodorant</h4>
                </div>
                <p className="text-sm text-[#5e5546] italic">
                  "i didn't know what else to give to a guy 😭"
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs bg-[#f0e7de] p-2 rounded-lg">
                  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🤷‍♀️</span>
                  <span>she said this. with her whole chest. i love her.</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#ffe9e9] to-[#fff3e2] p-4 rounded-2xl border border-dashed border-[#8b7a69]">
                <p className="text-xs text-center text-[#5e5546]">
                  <span className="font-bold">the keychain</span> lives in my bag. 
                  <br /><span className="font-bold">the deodorant</span> lives in my cabinet. 
                  <br />i use both. every day.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === PART 4: FACE TO FACE · I LOVE YOU === */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-[#b9c6ae] flex items-center justify-center text-white font-bold">4</span>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--ink)' }}>face to face · the three words</h3>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e2a36] to-[#2c3a47] opacity-95 rounded-3xl"></div>
            <div className="relative p-8 rounded-3xl border-2 border-white/30 text-white">
              
              <div className="text-center mb-8">
                <span className="text-sm uppercase tracking-[0.2em] text-white/60">april 25 · evening</span>
                <h3 className="text-4xl md:text-5xl font-bold mt-3 text-white">"i love you"</h3>
                <p className="text-md mt-2 text-white/80 italic">(for the first time, face to face)</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎁</span>
                    <span className="font-bold text-lg">after the gifts</span>
                  </div>
                  <p className="text-sm text-white/90">
                    we were heading home on our scooters
                    <br />we stood by near her house. we were about to say bye. then i said it. the words that had been stuck in my throat for months.
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💬</span>
                    <span className="font-bold text-lg">me</span>
                  </div>
                  <p className="text-sm text-white/90 italic">
                    "you did all this. alone. for me."
                    <br />"i love you."
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 md:col-span-2 max-w-2xl mx-auto w-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🕯️</span>
                    <span className="font-bold text-lg">her</span>
                  </div>
                  <p className="text-sm text-white/90 italic text-center">
                    she looked at me. gave a cute little smile and said it.
                    <br /><span className="text-xl not-italic text-white mt-2 block">"i love you too."</span>
                    <br />no hesitation. no fear. just truth.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <span className="inline-block bg-white/20 px-6 py-3 rounded-full text-sm backdrop-blur-sm border border-white/30">
                  the first time we said it looking into each other's eyes
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* === FOOTER — STILL. NOT. DATING. === */}
        <div className="mt-12 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2/3 h-px bg-[#b9c6ae]/60"></div>
          </div>
          <span className="relative bg-white px-8 py-4 rounded-full text-md border-4 border-[#e6ccbe] shadow-xl inline-flex items-center gap-3 font-bold" style={{ color: 'var(--ink)' }}>
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>😭</span>  SHE PLANNED MY BIRTHDAY. ALONE. SAID I LOVE YOU TO MY FACE.  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>😭</span>
          </span>
          <p className="text-sm mt-4 text-[#8b7a69] font-bold">
            WE STILL WEREN'T DATING. WHAT ARE WE EVEN DOING.
          </p>
          <p className="text-xs mt-2 text-[#8b7a69] italic">
            (saumya deserves a statue. scribbles deserves a shoutout. she deserves the world.)
          </p>
        </div>
      </div>

      {/* navigation */}
      <div className="w-full flex justify-between items-center mt-12 px-4">
        <a href="#page-5" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36] flex items-center gap-1">
          <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>←</span> april 9 · her birthday
        </a>
        <div className="text-xs flex gap-1 items-center text-[#9ba9b2] font-mono bg-white/50 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#b9c6ae]"></span>
          <span className="w-2 h-2 rounded-full bg-[#e6ccbe]"></span>
          <span className="w-2 h-2 rounded-full bg-[#b9c6ae]"></span>
          06 / 15 · april 25 · she planned MY birthday · STILL NOT DATING
        </div>
        <a href="#page-7" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36] flex items-center gap-1">
          page 7 <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>→</span>
        </a>
      </div>
    </div>
  );
};

// PAGE 7: MAY 11 · THE DAY WE FINALLY STARTED DATING
// "and what if i ask you, will you be my boyfriend?"
// "frr?? 😭"
// "yea i'm serious.. coz as you said and i thought i am keeping you hanging from a while soo yeah let's date.. you won't ask it back?"
// "O' divine beauty of seven seas, will you be my girlfriend?"
// "YES" 😭
// Jan 22 → May 11 · 110 days of pining · FINALLY OVER

const Page7 = () => {
  return (
    <div className="position-relative w-100 min-vh-100 px-3 py-5 page-section d-flex flex-column align-items-center justify-content-center" 
         id="page-7"
         style={{ 
           background: 'linear-gradient(145deg, rgba(255,215,215,0.2), rgba(255,235,205,0.2))',
           borderTop: '8px double gold',
           borderBottom: '8px double gold'
         }}>
      
      {/* celebratory confetti — WE MADE IT */}
      <div className="absolute top-10 left-5 text-6xl opacity-20 rotate-[-15deg]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎉</div>
      <div className="absolute bottom-10 right-5 text-6xl opacity-20 rotate-[20deg]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎊</div>
      
      {/* celebratory tape — GOLD ENERGY */}
      <div className="tape" style={{ top: '8%', right: '10%', width: '150px', transform: 'rotate(15deg)', background: 'rgba(255,215,0,0.2)', borderLeft: '2px dashed gold', borderRight: '2px dashed gold' }}></div>
      <div className="tape" style={{ bottom: '12%', left: '5%', width: '130px', transform: 'rotate(-8deg)', background: 'rgba(255,215,0,0.15)', borderLeft: '2px dashed gold', borderRight: '2px dashed gold' }}></div>
      
      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* HEADER — MAY 11 · THE DAY */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/90 px-6 py-2 rounded-full text-sm border-2 border-gold shadow-lg mb-4" style={{ borderColor: 'gold', color: 'var(--ink)' }}>
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📆</span>  jan 22 → may 11 · 110 days of pining  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📆</span>
          </span>
          
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold mb-4" style={{ 
              color: 'var(--ink)', 
              textShadow: '6px 6px 0 #ffd1d1, 12px 12px 0 rgba(255,215,0,0.2)'
            }}>
              MAY 11
            </h1>
            <div className="absolute -top-10 -right-10 text-7xl rotate-12" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💍</div>
            <div className="absolute -bottom-10 -left-10 text-7xl -rotate-12" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💫</div>
          </div>
          
          <p className="text-2xl mt-6 italic" style={{ color: 'var(--warm-brown)' }}>
            the day we stopped waiting and started being us
          </p>
        </div>

        {/* THE MAIN EVENT — THE CONVERSATION */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ffd1d1] via-gold to-[#ffe4b5] opacity-20 blur-2xl rounded-3xl"></div>
            
            <div className="relative bg-white p-8 md:p-12 rounded-3xl border-4 border-[#ffd1d1] shadow-2xl">
              
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-full border-4 border-[#ffd1d1] shadow-lg">
                <span className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💌</span>
                <span className="font-bold ml-2">THE PROPOSAL</span>
              </div>
              
              <div className="mt-8 space-y-8">
                
                {/* SHE ASKS FIRST */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ffe4e4] flex items-center justify-center text-2xl flex-shrink-0 border-2 border-[#ffb7b7]">
                    👧
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#ffe4e4] p-5 rounded-2xl rounded-tl-none relative">
                      <p className="text-lg md:text-xl italic" style={{ color: 'var(--ink)' }}>
                        "and what if i ask you, will you be my boyfriend?"
                      </p>
                    </div>
                    <span className="text-xs text-[#8b7a69] mt-1 ml-2">she said. just like that. casually. like it wasn't everything i'd been waiting for.</span>
                  </div>
                </div>
                
                {/* ME BEING STUNNED */}
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="w-12 h-12 rounded-full bg-[#e6ccbe] flex items-center justify-center text-2xl flex-shrink-0 border-2 border-[#b9c6ae]">
                    👦
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#fff3e2] p-5 rounded-2xl rounded-tr-none relative">
                      <p className="text-lg md:text-xl font-bold" style={{ color: 'var(--ink)' }}>
                        "frr?? 😭"
                      </p>
                    </div>
                    <span className="text-xs text-[#8b7a69] mt-1 mr-2 text-right block">— me, absolutely stunned, couldn't believe it was finally happening</span>
                  </div>
                </div>
                
                {/* SHE CLARIFIES */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ffe4e4] flex items-center justify-center text-2xl flex-shrink-0 border-2 border-[#ffb7b7]">
                    👧
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#ffe4e4] p-5 rounded-2xl rounded-tl-none">
                      <p className="text-lg md:text-xl italic" style={{ color: 'var(--ink)' }}>
                        "yea i'm serious.. coz as you said and i thought i am keeping you hanging from a while soo yeah let's date.."
                      </p>
                      <p className="text-lg md:text-xl italic mt-2 font-medium" style={{ color: 'var(--ink)' }}>
                        "you won't ask it back?"
                      </p>
                    </div>
                    <span className="text-xs text-[#8b7a69] mt-1 ml-2">she was waiting for ME to ask. but she couldn't wait anymore. 😭</span>
                  </div>
                </div>
                
                {/* THE DIVINE LINE */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-4 border-dashed border-gold opacity-50"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-8 py-3 rounded-full text-sm border-4 border-gold shadow-lg font-bold" style={{ color: 'var(--ink)' }}>
                      <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>✨</span> AND THEN I SAID THE THING <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>✨</span>
                    </span>
                  </div>
                </div>
                
                {/* ME — POETIC KING */}
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="w-16 h-16 rounded-full bg-[#e6ccbe] flex items-center justify-center text-3xl flex-shrink-0 border-4 border-gold">
                    👑
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-[#fff3e2] to-[#ffe4e4] p-6 rounded-3xl border-4 border-gold shadow-xl">
                      <p className="text-2xl md:text-3xl font-bold italic text-center" style={{ color: 'var(--ink)' }}>
                        "O' Vini Ashara the divine beauty of the seven seas, 
                        <br /> will you accept this silly man in love to be your boyfriend?"
                      </p>
                      <div className="mt-3 text-center">
                        <span className="text-xs uppercase tracking-[0.2em] text-[#8b7a69]">— the line that will live in infamy</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* HER ANSWER */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#ffe4e4] flex items-center justify-center text-3xl flex-shrink-0 border-4 border-gold">
                    💖
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-[#ffe4e4] to-[#ffd9d9] p-6 rounded-3xl border-4 border-gold shadow-xl">
                      <p className="text-5xl md:text-7xl font-bold text-center" style={{ color: 'var(--ink)' }}>
                        "YES"
                      </p>
                      <div className="mt-3 text-center">
                        <span className="text-sm italic text-[#8b7a69]">— she said. immediately. no hesitation. 😭</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* TIMESTAMP */}
              <div className="mt-10 text-center border-t-2 border-dashed border-[#e6ccbe] pt-6">
                <span className="bg-[#fff3e2] px-6 py-3 rounded-full text-sm font-mono">
                  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>⏰</span>  may 11, 2025 · 2:02am · the exact moment everything changed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* THE JOURNEY — JAN 22 → MAY 11 */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--ink)' }}>
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🕯️</span>  110 days of waiting · worth every second  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🕯️</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white p-3 rounded-2xl border-2 border-[#e6ccbe] text-center">
              <span className="text-2xl block mb-1">🎵</span>
              <span className="text-xs font-bold">JAN 22</span>
              <p className="text-[0.6rem] text-[#8b7a69]">dic event</p>
            </div>
            <div className="bg-white p-3 rounded-2xl border-2 border-[#e6ccbe] text-center">
              <span className="text-2xl block mb-1">💬</span>
              <span className="text-xs font-bold">FEB 13</span>
              <p className="text-[0.6rem] text-[#8b7a69]">confession</p>
            </div>
            <div className="bg-white p-3 rounded-2xl border-2 border-[#e6ccbe] text-center">
              <span className="text-2xl block mb-1">🎙️</span>
              <span className="text-xs font-bold">MAR 7</span>
              <p className="text-[0.6rem] text-[#8b7a69]">"i feel the same"</p>
            </div>
            <div className="bg-white p-3 rounded-2xl border-2 border-[#e6ccbe] text-center">
              <span className="text-2xl block mb-1">🎂</span>
              <span className="text-xs font-bold">APR 9</span>
              <p className="text-[0.6rem] text-[#8b7a69]">her birthday · i love you</p>
            </div>
            <div className="bg-white p-3 rounded-2xl border-4 border-gold text-center relative">
              <div className="absolute -top-2 -right-2 text-xl">✨</div>
              <span className="text-2xl block mb-1">💍</span>
              <span className="text-xs font-bold">MAY 11</span>
              <p className="text-[0.6rem] text-[#8b7a69]">OFFICIAL!!!</p>
            </div>
          </div>
        </div>

        {/* THE PHOTO — we must have one */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold to-[#ffd1d1] opacity-30 blur-xl rounded-3xl"></div>
            <div className="relative bg-white p-5 pb-10 rounded-2xl shadow-2xl rotate-[1deg] border-8 border-white">
              <div className="w-full h-80 bg-gradient-to-br from-[#ffd9b0] to-[#ffe4e1] flex flex-col items-center justify-center rounded-lg relative">
                <img src="photos/page-7/may-11.jpeg" className="w-full h-full object-cover rounded-lg"></img>
              </div>
              <p className="text-sm mt-4 text-center font-medium" style={{ color: 'var(--ink)' }}>
                i asked. she said yes. we finally stopped pretending.
              </p>
              <p className="text-xs text-center text-[#8b7a69] mt-1">
                (she's still the divine beauty of the seven seas. now officially mine.)
              </p>
            </div>
          </div>
        </div>

        {/* THE STATUS UPDATE */}
        <div className="bg-gradient-to-r from-[#fff3e2] to-[#ffe4e4] p-6 rounded-3xl border-4 border-gold max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-4xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💘</span>
            <span className="text-2xl font-bold" style={{ color: 'var(--ink)' }}>RELATIONSHIP STATUS</span>
            <span className="text-4xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💘</span>
          </div>
          <p className="text-5xl md:text-6xl font-black mb-2" style={{ color: 'var(--ink)' }}>
            TAKEN
          </p>
          <p className="text-md text-[#5e5546]">
            by each other. finally. officially. FINALLY.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <span className="bg-white px-4 py-2 rounded-full text-xs border-2 border-gold">since may 11, 2025</span>
            <span className="bg-white px-4 py-2 rounded-full text-xs border-2 border-gold">110 days in the making</span>
          </div>
        </div>

        {/* FOOTER — WE MADE IT */}
        <div className="mt-16 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
          <span className="relative bg-white px-10 py-5 rounded-full text-2xl border-8 border-gold shadow-2xl inline-flex items-center gap-4 font-bold" style={{ color: 'var(--ink)' }}>
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💖</span>  FINALLY OFFICIAL  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💖</span>
          </span>
          <p className="text-md mt-6 text-[#8b7a69] font-medium">
            jan 22 → may 11 · 110 days · worth every moment of waiting
          </p>
          <p className="text-sm mt-2 text-[#8b7a69] italic">
            "O' divine beauty of the seven seas, will you be my girlfriend?" — and she said yes. 😭
          </p>
        </div>
      </div>

      {/* navigation */}
      <div className="w-full flex justify-between items-center mt-16 px-4">
        <a href="#page-6" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36] flex items-center gap-1">
          <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>←</span> april 25 · my birthday surprise
        </a>
        <div className="text-xs flex gap-1 items-center text-[#9ba9b2] font-mono bg-white/80 px-4 py-2 rounded-full shadow-md">
          <span className="w-3 h-3 rounded-full bg-gold"></span>
          <span className="w-3 h-3 rounded-full bg-gold"></span>
          <span className="w-3 h-3 rounded-full bg-gold"></span>
          07 / 15 · MAY 11 · THE DAY WE BECAME OFFICIAL
        </div>
        <a href="#page-8" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36] flex items-center gap-1">
          page 8 <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>→</span>
        </a>
      </div>
    </div>
  );
};

// PAGE 8: MAY — SEPTEMBER · THE SUMMER OF US
// Finally together. Finally official. Finally we get to just... be.
// Mall dates · Garden walks · Cafes · Her pony ribbon on my wrist like a charm
// 9 pictures · 1000 memories · every single one developed twice

const Page8 = () => {
  return (
    <div className="position-relative w-100 min-vh-100 px-3 py-5 page-section d-flex flex-column align-items-center justify-content-center" 
         id="page-8"
         style={{ 
           background: 'linear-gradient(145deg, rgba(255,248,225,0.3), rgba(255,235,215,0.3))',
           borderTop: '6px double var(--dusty-rose)',
           borderBottom: '6px double var(--sage)'
         }}>
      
      {/* soft tape — summer pastels */}
      <div className="tape" style={{ top: '6%', left: '8%', width: '100px', transform: 'rotate(-5deg)', background: 'rgba(255,218,185,0.5)' }}></div>
      <div className="tape" style={{ bottom: '7%', right: '5%', width: '120px', transform: 'rotate(10deg)', background: 'rgba(255,228,196,0.6)' }}></div>
      
      <div className="w-full max-w-7xl mx-auto">
        
        {/* HEADER — THE SUMMER OF US */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/90 px-6 py-2 rounded-full text-sm border-2 border-[#e6ccbe] shadow-lg mb-4">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>☀️</span>  may — september 2025  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>☀️</span>
          </span>
          
          <h2 className="text-7xl md:text-8xl font-bold mb-4" style={{ 
            color: 'var(--ink)', 
            textShadow: '4px 4px 0 #ffe4e1, 8px 8px 0 rgba(230,204,190,0.3)'
          }}>
            the summer
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold -mt-4" style={{ color: 'var(--warm-brown)' }}>
            of us
          </h3>
          
          <p className="text-xl mt-6 max-w-2xl mx-auto" style={{ color: 'var(--ink)' }}>
            finally together. finally official. finally we get to just... be.
          </p>
          
          <div className="flex justify-center gap-3 mt-6">
            <span className="bg-white px-4 py-2 rounded-full text-sm border border-[#b9c6ae] shadow-sm">
              <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🛍️</span> 9 dates
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm border border-[#b9c6ae] shadow-sm">
              <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📸</span> 1,000+ photos
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm border border-[#b9c6ae] shadow-sm">
              <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎀</span> her ribbon on my wrist
            </span>
          </div>
        </div>

        {/* THE RIBBON — the charm */}
        <div className="max-w-3xl mx-auto mb-20 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#ffd1d1] to-[#ffe4e1] opacity-30 blur-2xl rounded-full"></div>
          <div className="relative bg-white p-6 rounded-3xl border-4 border-dashed border-[#ffb7b7] shadow-xl flex flex-col md:flex-row items-center gap-6">
            <div className="text-7xl md:text-8xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎀</div>
            <div>
              <h4 className="text-2xl font-bold mb-2" style={{ color: 'var(--ink)' }}>her pony ribbon</h4>
              <p className="text-md text-[#5e5546]">
                she tied it around my wrist one day. said it looked cute.
                <br />i never wanted to take it off. it felt like my good luck charm.
                <br />every date, every café, every walk — i wanted it to be there.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="bg-[#fff3e2] px-4 py-2 rounded-full text-xs">
                  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💬</span> "you like wearing it?"
                </span>
                <span className="bg-[#ffe4e4] px-4 py-2 rounded-full text-xs">
                  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🤷‍♂️</span> "obviously. it's my rolex."
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* THE PHOTO GRID — 9 PICTURES, THOUSAND MEMORIES */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-10" style={{ color: 'var(--ink)' }}>
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📷</span>  few pictures · thousand memories  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📷</span>
          </h3>
          
          {/* PHOTO GRID — 3x3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. FIRST DATE · MAY 20 */}
            <div className="bg-white p-3 pb-6 rounded-lg shadow-md rotate-[-0.5deg] hover:rotate-0 transition-all duration-300">
              <div className="w-full h-40 bg-gradient-to-br from-[#b9c6ae] to-[#9ba9b2] flex items-center justify-center text-5xl rounded-md relative">
                <img src="photos/page-8/crystal-mall-date.jpeg" className="w-full h-full object-cover rounded-md"></img>
                <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-full text-[0.6rem]">📸 1/9</div>
              </div>
              <p className="text-xs mt-2 font-medium text-center" style={{ color: 'var(--ink)' }}>crystal mall date · may 20</p>
              <p className="text-[0.6rem] text-center text-[#8b7a69]">our first date. as a cute couple.</p>
            </div>

            {/* 2. GARDEN · JUNE 4 */}
            <div className="bg-white p-3 pb-6 rounded-lg shadow-md rotate-[0.8deg] hover:rotate-0 transition-all duration-300">
              <div className="w-full h-40 bg-gradient-to-br from-[#e6ccbe] to-[#d9b8a8] flex items-center justify-center text-5xl rounded-md relative">
                <img src="photos/page-8/garden.jpeg" className="w-full h-full object-cover rounded-md"></img>
                <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-full text-[0.6rem]">📸 2/9</div>
              </div>
              <p className="text-xs mt-2 font-medium text-center" style={{ color: 'var(--ink)' }}>garden · june 4</p>
              <p className="text-[0.6rem] text-center text-[#8b7a69]">our favorite spot. where we stayed relaxed and stress-free.</p>
            </div>

            {/* 3. PHOTOBOOTH · JULY 12 */}
            <div className="bg-white p-3 pb-6 rounded-lg shadow-md rotate-[0.2deg] hover:rotate-0 transition-all duration-300 relative">
              <div className="absolute -top-2 -right-2 text-2xl">💫</div>
              <div className="w-full h-40 bg-gradient-to-br from-[#ffdab9] to-[#ffe4b5] flex items-center justify-center text-5xl rounded-md relative">
                <img src="photos/page-8/photobooth.jpeg" className="w-full h-full object-cover rounded-md"></img>
                <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-full text-[0.6rem]">📸 3/9</div>
              </div>
              <p className="text-xs mt-2 font-medium text-center" style={{ color: 'var(--ink)' }}>photobooth · july 12</p>
              <p className="text-[0.6rem] text-center text-[#8b7a69]">our cute photobooth era aww.</p>
            </div>

            {/* 4. FLOWER LAUNCH · JULY 16 */}
            <div className="bg-white p-3 pb-6 rounded-lg shadow-md rotate-[-0.7deg] hover:rotate-0 transition-all duration-300">
              <div className="w-full h-40 bg-gradient-to-br from-[#ffb7b7] to-[#ffa07a] flex items-center justify-center text-5xl rounded-md relative">
                <img src="photos/page-8/flowers.jpeg" className="w-full h-full object-cover rounded-md"></img>
                <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-full text-[0.6rem]">📸 4/9</div>
              </div>
              <p className="text-xs mt-2 font-medium text-center" style={{ color: 'var(--ink)' }}>flowers · july 16</p>
              <p className="text-[0.6rem] text-center text-[#8b7a69]">the soft-flower-launch lol</p>
            </div>

            {/* 5. 7TH HEAVEN · JULY 17 */}
            <div className="bg-white p-3 pb-6 rounded-lg shadow-md rotate-[-0.3deg] hover:rotate-0 transition-all duration-300">
              <div className="w-full h-40 bg-gradient-to-br from-[#c7d8dd] to-[#b0c4ce] flex items-center justify-center text-5xl rounded-md relative">
                <img src="photos/page-8/7th-heaven.jpeg" className="w-full h-full object-cover rounded-md"></img>
                <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-full text-[0.6rem]">📸 5/9</div>
              </div>
              <p className="text-xs mt-2 font-medium text-center" style={{ color: 'var(--ink)' }}>7th heaven · july 17</p>
              <p className="text-[0.6rem] text-center text-[#8b7a69]">how can we forget those sweet days filled with brownies and laughter.</p>
            </div>

            {/* 6. ICE CREAM · JULY 23 */}
            <div className="bg-white p-3 pb-6 rounded-lg shadow-md rotate-[0.4deg] hover:rotate-0 transition-all duration-300">
              <div className="w-full h-40 bg-gradient-to-br from-[#f7cac9] to-[#f5b0a5] flex items-center justify-center text-5xl rounded-md relative">
                <img src="photos/page-8/ice-cream.jpeg" className="w-full h-full object-cover rounded-md"></img>
                <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-full text-[0.6rem]">📸 6/9</div>
              </div>
              <p className="text-xs mt-2 font-medium text-center" style={{ color: 'var(--ink)' }}>ice cream · july 23</p>
              <p className="text-[0.6rem] text-center text-[#8b7a69]">little side dates with spam purpose</p>
            </div>

            {/* 7. SILLY US · AUG 22 */}
            <div className="bg-white p-3 pb-6 rounded-lg shadow-md rotate-[1.5deg] hover:rotate-0 transition-all duration-300">
              <div className="w-full h-40 bg-gradient-to-br from-[#b9c6ae] to-[#a2b09b] flex items-center justify-center text-5xl rounded-md relative">
                <img src="photos/page-8/silly-us.jpeg" className="w-full h-full object-cover rounded-md"></img>
                <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-full text-[0.6rem]">📸 7/9</div>
              </div>
              <p className="text-xs mt-2 font-medium text-center" style={{ color: 'var(--ink)' }}>silly us · aug 22</p>
              <p className="text-[0.6rem] text-center text-[#8b7a69]">i looked like that one character from inside out lol.</p>
            </div>

            {/* 8. TAYLOR SWIFT · SEPT 1 */}
            <div className="bg-white p-3 pb-6 rounded-lg shadow-md rotate-[-1.1deg] hover:rotate-0 transition-all duration-300">
              <div className="w-full h-40 bg-gradient-to-br from-[#e6ccbe] to-[#d2b48c] flex items-center justify-center text-5xl rounded-md relative">
                <img src="photos/page-8/story.jpeg" className="w-full h-full object-cover rounded-md"></img>
                <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-full text-[0.6rem]">📸 8/9</div>
              </div>
              <p className="text-xs mt-2 font-medium text-center" style={{ color: 'var(--ink)' }}>story · sept 1</p>
              <p className="text-[0.6rem] text-center text-[#8b7a69]">i kept in mind my duties of being a swiftie's boyfie.</p>
            </div>

            {/* 9. RIBBON · SEPTEMBER 17 */}
            <div className="bg-white p-3 pb-6 rounded-lg shadow-md rotate-[1.2deg] hover:rotate-0 transition-all duration-300">
              <div className="w-full h-40 bg-gradient-to-br from-[#ffd1d1] to-[#ffe4e1] flex items-center justify-center text-5xl rounded-md relative">
                <img src="photos/page-8/her-ribbon.jpeg" className="w-full h-full object-cover rounded-md"></img>
                <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-full text-[0.6rem]">📸 9/9</div>
              </div>
              <p className="text-xs mt-2 font-medium text-center" style={{ color: 'var(--ink)' }}>her ribbon · september 17</p>
              <p className="text-[0.6rem] text-center text-[#8b7a69]">my rolex fr</p>
            </div>
          </div>   
          <p className="text-sm text-center mt-8 italic text-[#8b7a69]">
            and a thousand more photos we didn't post, didn't develop, but we'll never forget.
          </p>
        </div>

        {/* THE RIBBON — POEM/REFLECTION */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-[#fff3e2] p-6 rounded-3xl border-4 border-double border-[#b9c6ae] text-center rotate-[0.3deg]">
            <span className="text-4xl mb-3 inline-block">🌷</span>
            <p className="text-md italic" style={{ color: 'var(--ink)' }}>
              "the soft dating teenage love era.
              <br />the one where we were still figuring out how to be us.
              <br />the one where every moment felt like a dream we didn't want to wake up from.
              <br />the one where we didn't care about labels, just about being together.
              <br />the one where you tied that ribbon around my wrist and made it yours. and i made it mine."
            </p>
            <p className="text-xs mt-4 text-[#8b7a69]">— still everything in my memories. forever evergreen</p>
          </div>
        </div>

        {/* FOOTER — SUMMER OF US */}
        <div className="mt-12 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-[#e6ccbe] to-transparent"></div>
          </div>
          <span className="relative bg-white px-8 py-4 rounded-full text-xl border-4 border-[#e6ccbe] shadow-lg inline-flex items-center gap-3 font-bold" style={{ color: 'var(--ink)' }}>
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>☀️</span>  may → september · the summer we became us  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>☀️</span>
          </span>
          <p className="text-sm mt-4 text-[#8b7a69]">
            few pictures here. 1,000 more in my heart. and a ribbon that still hasn't left my wrist.
          </p>
        </div>
      </div>

      {/* navigation */}
      <div className="w-full flex justify-between items-center mt-16 px-4">
        <a href="#page-7" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36] flex items-center gap-1">
          <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>←</span> may 11 · we became official
        </a>
        <div className="text-xs flex gap-1 items-center text-[#9ba9b2] font-mono bg-white/80 px-4 py-2 rounded-full shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#ffb7b7]"></span>
          <span className="w-2 h-2 rounded-full bg-[#e6ccbe]"></span>
          <span className="w-2 h-2 rounded-full bg-[#b9c6ae]"></span>
          <span className="w-2 h-2 rounded-full bg-[#ffb7b7]"></span>
          08 / 15 · may — sept · the summer of us
        </div>
        <a href="#page-9" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36] flex items-center gap-1">
          page 9 <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>→</span>
        </a>
      </div>
    </div>
  );
};

// PAGE 9: SEPTEMBER 23 · NAVRATRI · THE CINEMATIC MEETING
// She was at Jainam with her family. I was outside waiting.
// Raivat — the jain friend who made it possible.
// "coming out for photos" = coming out to meet ME.
// 10-15 minutes. 50 photos. We'll keep 4.
// All dressed up. All worth it.

const Page9 = () => {
  return (
    <div className="position-relative w-100 min-vh-100 px-3 py-5 page-section d-flex flex-column align-items-center justify-content-center" 
         id="page-9"
         style={{ 
           background: 'linear-gradient(145deg, rgba(255,215,0,0.1), rgba(255,140,0,0.1))',
           borderTop: '6px double #ff8c00',
           borderBottom: '6px double #ffd700'
         }}>
      
      {/* decorative — garba energy */}
      <div className="tape" style={{ top: '7%', left: '5%', width: '130px', transform: 'rotate(-12deg)', background: 'rgba(255,140,0,0.2)', borderLeft: '2px dashed #ff8c00', borderRight: '2px dashed #ff8c00' }}></div>
      <div className="tape" style={{ bottom: '9%', right: '3%', width: '110px', transform: 'rotate(15deg)', background: 'rgba(255,215,0,0.2)', borderLeft: '2px dashed #ffd700', borderRight: '2px dashed #ffd700' }}></div>
      
      <div className="w-full max-w-6xl mx-auto">
        
        {/* HEADER — NAVRATRI 2025 */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/90 px-6 py-2 rounded-full text-sm border-2 border-[#ff8c00] shadow-lg mb-4">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🪔</span>  september 23 · navratri 2025  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🪔</span>
          </span>
          
          <div className="relative">
            <h2 className="text-7xl md:text-8xl font-bold mb-4" style={{ 
              color: 'var(--ink)', 
              textShadow: '4px 4px 0 #ffd700, 8px 8px 0 rgba(255,140,0,0.3)'
            }}>
              the disguise
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold -mt-4" style={{ color: '#ff8c00' }}>
              meeting
            </h3>
            <div className="absolute -top-10 -right-10 text-7xl rotate-12" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎭</div>
            <div className="absolute -bottom-10 -left-10 text-7xl -rotate-12" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>✨</div>
          </div>
          
          <p className="text-xl mt-8 max-w-2xl mx-auto italic" style={{ color: 'var(--warm-brown)' }}>
            "i'm just going out for photos, mummy" — the greatest lie she ever told.
          </p>
        </div>

        {/* THE PLAN — CINEMATIC BREAKDOWN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* HER SIDE */}
          <div className="bg-white p-6 rounded-3xl border-4 border-[#ffd700] shadow-xl rotate-[-0.5deg] relative">
            <div className="absolute -top-4 -left-2 text-4xl">👧</div>
            <h4 className="text-2xl font-bold mb-4 mt-4" style={{ color: '#ff8c00' }}>her · inside jainam</h4>
            <div className="space-y-4">
              <div className="bg-[#fff3e2] p-3 rounded-2xl">
                <p className="text-sm italic">
                  "i want to click some photos with the decorations. just 10 minutes."
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">👯‍♀️</span>
                <p className="text-sm text-[#5e5546]">her bestie — the accomplice. came along to make it believable.</p>
              </div>
              <div className="bg-[#ffe4e4] p-3 rounded-2xl">
                <p className="text-xs font-medium text-center">💓 heart rate: 📈📈📈</p>
                <p className="text-xs text-center mt-1">"what if he's not there? what if he is? what if we get caught?"</p>
              </div>
            </div>
          </div>
          
          {/* MY SIDE */}
          <div className="bg-white p-6 rounded-3xl border-4 border-[#ff8c00] shadow-xl rotate-[0.5deg] relative">
            <div className="absolute -top-4 -right-2 text-4xl">👦</div>
            <h4 className="text-2xl font-bold mb-4 mt-4" style={{ color: '#ffd700' }}>me · outside jainam</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🫡</span>
                <div>
                  <p className="text-sm font-bold">raivat · the legend</p>
                  <p className="text-xs text-[#5e5546]">my jain friend. also going to jainam. made this WHOLE thing possible.</p>
                </div>
              </div>
              <div className="bg-[#e6ccbe] p-3 rounded-2xl">
                <p className="text-sm italic">
                  "just act normal. she'll come out. you'll see her. don't panic."
                </p>
                <p className="text-xs mt-1 text-right">— raivat, the absolute wingman</p>
              </div>
              <div className="bg-[#fff3e2] p-3 rounded-2xl">
                <p className="text-xs font-medium text-center">heart rate: 📈📈📈📈📈</p>
                <p className="text-xs text-center mt-1">all dressed up. waiting. hoping she actually makes it out.</p>
              </div>
            </div>
          </div>
        </div>

        {/* THE MOMENT — SHE APPEARS */}
        <div className="max-w-4xl mx-auto mb-20 relative">
          <div className="absolute -inset-6 bg-gradient-to-r from-[#ffd700] to-[#ff8c00] opacity-20 blur-3xl rounded-full"></div>
          
          <div className="relative bg-[#1a1a1a] text-white p-8 rounded-3xl border-4 border-[#ffd700] shadow-2xl">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#ff8c00] px-8 py-3 rounded-full text-white font-bold text-lg whitespace-nowrap">
              🎬 THE MEETING
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-right">
                <span className="text-8xl inline-block" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🚪</span>
                <p className="text-sm mt-2 text-white/70">she walked out</p>
              </div>
              
              <div className="text-center md:text-left">
                <span className="text-8xl inline-block" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>👀</span>
                <p className="text-sm mt-2 text-white/70">i saw her</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-white/10 p-6 rounded-3xl border border-white/20">
                <p className="text-2xl md:text-3xl italic font-light">
                  "you came."
                </p>
                <p className="text-2xl md:text-3xl italic font-light mt-2">
                  "jaldi jaldi oli side jaiye"
                </p>
                <p className="text-xs text-white/60 mt-4">
                  — we said nothing. we just smiled. 50 photos later, we still couldn't stop.
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm backdrop-blur-sm border border-white/30">
                ⏱️ 10-15 minutes · 50 photos · a lifetime of memory
              </span>
            </div>
          </div>
        </div>

        {/* THE PHOTOS — 4 OUT OF 50 */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-10" style={{ color: 'var(--ink)' }}>
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📷</span>  50 photos · we kept these 4  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📷</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* PHOTO 1 — all dressed up */}
            <div className="bg-white p-4 pb-8 rounded-xl shadow-2xl rotate-[-1deg] hover:rotate-0 transition-all duration-300 border-4 border-white">
              <div className="w-full h-64 bg-gradient-to-br from-[#ffd700] to-[#ff8c00] flex flex-col items-center justify-center rounded-lg relative">
                <img src="photos/page-9/photo-1.jpeg" className="w-full h-full object-cover rounded-md"></img>
                <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs shadow-lg">📸 1/4</div>
              </div>
              <p className="text-sm mt-3 font-medium text-center" style={{ color: 'var(--ink)' }}>all dressed up</p>
              <p className="text-xs text-center text-[#8b7a69]">we planned this outfit coordination for weeks.</p>
            </div>
            
            {/* PHOTO 2 — candid smile */}
            <div className="bg-white p-4 pb-8 rounded-xl shadow-2xl rotate-[1deg] hover:rotate-0 transition-all duration-300 border-4 border-white">
              <div className="w-full h-64 bg-gradient-to-br from-[#ffb7b7] to-[#ffa07a] flex flex-col items-center justify-center rounded-lg relative">
                <img src="photos/page-9/photo-3.jpeg" className="w-full h-full object-cover rounded-md"></img>
                <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs shadow-lg">📸 2/4</div>
              </div>
              <p className="text-sm mt-3 font-medium text-center" style={{ color: 'var(--ink)' }}>she laughed. i caught it.</p>
              <p className="text-xs text-center text-[#8b7a69]">Yashvi took this. did the bestie role perfectly.</p>
            </div>
            
            {/* PHOTO 3 — traditional poses */}
            <div className="bg-white p-4 pb-8 rounded-xl shadow-2xl rotate-[-0.5deg] hover:rotate-0 transition-all duration-300 border-4 border-white">
              <div className="w-full h-64 bg-gradient-to-br from-[#b9c6ae] to-[#9ba9b2] flex flex-col items-center justify-center rounded-lg relative">
                <img src="photos/page-9/photo-2.jpeg" className="w-full h-full object-cover rounded-md"></img>
                <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs shadow-lg">📸 3/4</div>
              </div>
              <p className="text-sm mt-3 font-medium text-center" style={{ color: 'var(--ink)' }}>our only "posed" photo</p>
              <p className="text-xs text-center text-[#8b7a69]">raivat forced us. we're glad he did.</p>
            </div>
            
            {/* PHOTO 4 — the goodbye */}
            <div className="bg-white p-4 pb-8 rounded-xl shadow-2xl rotate-[1.5deg] hover:rotate-0 transition-all duration-300 border-4 border-white relative">
              <div className="absolute -top-3 -right-3 text-3xl">💫</div>
              <div className="w-full h-64 bg-gradient-to-br from-[#ffdab9] to-[#ffe4b5] flex flex-col items-center justify-center rounded-lg relative">
                <img src="photos/page-9/photo-4.jpeg" className="w-full h-full object-cover rounded-md"></img>
                <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs shadow-lg">📸 4/4</div>
              </div>
              <p className="text-sm mt-3 font-medium text-center" style={{ color: 'var(--ink)' }}>the goodbye</p>
              <p className="text-xs text-center text-[#8b7a69]">10 minutes felt like 10 seconds.</p>
            </div>
          </div>
          
          <p className="text-sm text-center mt-8 italic text-[#8b7a69] bg-white/70 p-3 rounded-full max-w-2xl mx-auto">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎭</span>  she went back inside. her family never knew. but we have the photos forever.  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎭</span>
          </p>
        </div>

        {/* RAIVAT — THE UNSUNG HERO */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-[#ffd700] to-[#ff8c00] p-1 rounded-3xl shadow-2xl">
            <div className="bg-white p-6 rounded-3xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-7xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🫡</div>
                <div>
                  <h4 className="text-2xl font-bold mb-2" style={{ color: 'var(--ink)' }}>raivat · the wingman of navratri</h4>
                  <p className="text-sm text-[#5e5546]">
                    "bro i'll be right there. just act normal. she's coming."
                    <br /><br />
                    he stood with me. waited with me. didn't ask questions. 
                    <br />just knew this was important.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="bg-[#fff3e2] px-4 py-2 rounded-full text-xs font-bold">🫡 SALUTE</span>
                    <span className="bg-[#e6ccbe] px-4 py-2 rounded-full text-xs">MVP · SEPT 23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* THE CONFESSION — cinematic AF */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-black/5 p-8 rounded-3xl border-4 border-double border-[#ff8c00] text-center relative">
            <div className="absolute -top-5 -left-5 text-5xl opacity-50" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎬</div>
            <div className="absolute -bottom-5 -right-5 text-5xl opacity-50" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎬</div>
            
            <p className="text-lg italic" style={{ color: 'var(--ink)' }}>
              "everyone from our group couldn't make it together this year.
              <br />so we made our own way. just us. 15 minutes. 50 photos.
              <br />her family thought she was clicking decorations.
              <br />she was clicking memories with me."
            </p>
            <p className="text-xs mt-4 text-[#8b7a69]">— the most cinematic 15 minutes of our lives</p>
          </div>
        </div>

        {/* FOOTER — 50 PHOTOS, 4 KEPT, 1 MEMORY */}
        <div className="mt-12 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-[#ff8c00] to-transparent"></div>
          </div>
          <span className="relative bg-white px-8 py-4 rounded-full text-xl border-4 border-[#ffd700] shadow-lg inline-flex items-center gap-3 font-bold" style={{ color: 'var(--ink)' }}>
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎭</span>  the disguise meeting · navratri 2025  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎭</span>
          </span>
          <p className="text-sm mt-4 text-[#8b7a69]">
            50 photos taken. 4 shown here. 1 story we'll tell forever.
          </p>
        </div>
      </div>

      {/* navigation */}
      <div className="w-full flex justify-between items-center mt-16 px-4">
        <a href="#page-8" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36] flex items-center gap-1">
          <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>←</span> the summer of us
        </a>
        <div className="text-xs flex gap-1 items-center text-[#9ba9b2] font-mono bg-white/80 px-4 py-2 rounded-full shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#ffd700]"></span>
          <span className="w-2 h-2 rounded-full bg-[#ff8c00]"></span>
          <span className="w-2 h-2 rounded-full bg-[#ffd700]"></span>
          09 / 15 · sept 23 · navratri · the disguise meeting
        </div>
        <a href="#page-10" className="text-[#8b7a69] underline decoration-dotted text-sm hover:text-[#4a3f36] flex items-center gap-1">
          page 10 <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>→</span>
        </a>
      </div>
    </div>
  );
};

// PAGE 10: THE FINAL PAGE · HONORABLE MENTIONS · THE LOVE LETTER
// "click me before you leave"
// An envelope. A letter. Everything we couldn't fit in 9 pages.
// For her. Always for her.

const Page10 = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = React.useState(false);
  
  return (
    <div className="position-relative w-100 min-vh-100 px-3 py-5 page-section d-flex flex-column align-items-center justify-content-center" 
         id="page-10"
         style={{ 
           background: 'linear-gradient(145deg, rgba(255,243,226,0.5), rgba(230,204,190,0.3))',
           borderTop: '6px double var(--dusty-rose)',
           borderBottom: '6px double var(--sage)'
         }}>
      
      {/* final tape — soft, sentimental */}
      <div className="tape" style={{ top: '5%', right: '8%', width: '120px', transform: 'rotate(8deg)', background: 'rgba(230,204,190,0.5)' }}></div>
      <div className="tape" style={{ bottom: '7%', left: '6%', width: '100px', transform: 'rotate(-6deg)', background: 'rgba(185,198,174,0.5)' }}></div>
      
      <div className="w-full max-w-6xl mx-auto">
        
        {/* HEADER — HONORABLE MENTIONS */}
        <div className="text-center mb-12">
          <span className="inline-block bg-white/90 px-6 py-2 rounded-full text-sm border-2 border-[#e6ccbe] shadow-lg mb-4">
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📖</span>  page 10 / 15  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📖</span>
          </span>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-2" style={{ 
            color: 'var(--ink)', 
            textShadow: '3px 3px 0 var(--dusty-rose)'
          }}>
            honorable mentions
          </h2>
          
          <p className="text-xl mt-4 max-w-2xl mx-auto" style={{ color: 'var(--warm-brown)' }}>
            the moments that didn't make it to 9 pages,
            <br />but made it to my heart.
          </p>
        </div>

        {/* HONORABLE MENTIONS — POLAROID GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-20">
          
          {/* 1. late night calls */}
          <div className="bg-white p-1.5 pb-3 rounded-lg shadow-md rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col">
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-sm overflow-hidden">
              <img src="photos/page-10/fav-pic.jpeg" alt="my favorite pic" className="w-full h-full object-cover"></img>
            </div>
            <div className="mt-1.5 px-1">
              <p className="text-[0.65rem] font-medium leading-tight text-center" style={{ color: 'var(--ink)' }}>my favorite pic</p>
              <p className="text-[0.5rem] text-center text-[#8b7a69] mt-0.5 leading-tight">we look like two little cute kids in love aww.</p>
            </div>
          </div>
          
          {/* 2. celebrity silly pic */}
          <div className="bg-white p-1.5 pb-3 rounded-lg shadow-md rotate-[1deg] hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col">
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#ffd1d1] to-[#ffe4e1] rounded-sm overflow-hidden">
              <img src="photos/page-10/celebrity-jainam.jpeg" alt="celebrity of Jainam" className="w-full h-full object-cover"></img>
            </div>
            <div className="mt-1.5 px-1">
              <p className="text-[0.65rem] font-medium leading-tight text-center" style={{ color: 'var(--ink)' }}>celebrity of Jainam</p>
              <p className="text-[0.5rem] text-center text-[#8b7a69] mt-0.5 leading-tight">sorry for this lmao 😭</p>
            </div>
          </div>
          
          {/* 3. the time we almost matched */}
          <div className="bg-white p-1.5 pb-3 rounded-lg shadow-md rotate-[-1deg] hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col">
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#b9c6ae] to-[#9ba9b2] rounded-sm overflow-hidden">
              <img src="photos/page-10/line-without-hook.jpg" alt="Line Without a Hook" className="w-full h-full object-cover"></img>
            </div>
            <div className="mt-1.5 px-1">
              <p className="text-[0.65rem] font-medium leading-tight text-center" style={{ color: 'var(--ink)' }}>Line Without a Hook</p>
              <p className="text-[0.5rem] text-center text-[#8b7a69] mt-0.5 leading-tight">our song is ours forever.</p>
            </div>
          </div>
          
          {/* 4. her laugh recorded */}
          <div className="bg-white p-1.5 pb-3 rounded-lg shadow-md rotate-[2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col">
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#e6ccbe] to-[#d9b8a8] rounded-sm overflow-hidden">
              <img src="photos/page-10/ember-and-wade.jpg" alt="Ember and Wade" className="w-full h-full object-cover"></img>
            </div>
            <div className="mt-1.5 px-1">
              <p className="text-[0.65rem] font-medium leading-tight text-center" style={{ color: 'var(--ink)' }}>Ember and Wade</p>
              <p className="text-[0.5rem] text-center text-[#8b7a69] mt-0.5 leading-tight">our soul characters fr.</p>
            </div>
          </div>
          
          {/* 5. the rain day */}
          <div className="bg-white p-1.5 pb-3 rounded-lg shadow-md rotate-[1.5deg] hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col">
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#c7d8dd] to-[#b0c4ce] rounded-sm overflow-hidden">
              <img src="photos/page-10/ghibli-art.jpeg" alt="ghibli art" className="w-full h-full object-cover"></img>
            </div>
            <div className="mt-1.5 px-1">
              <p className="text-[0.65rem] font-medium leading-tight text-center" style={{ color: 'var(--ink)' }}>ghibli art</p>
              <p className="text-[0.5rem] text-center text-[#8b7a69] mt-0.5 leading-tight">we look sweet in every universe.</p>
            </div>
          </div>
          
          {/* 6. kids photo */}
          <div className="bg-white p-1.5 pb-3 rounded-lg shadow-md rotate-[-1.5deg] hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col">
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#ffb7b7] to-[#ffa07a] rounded-sm overflow-hidden">
              <img src="photos/page-10/low-quality-photo.jpeg" alt="low quality photo" className="w-full h-full object-cover"></img>
            </div>
            <div className="mt-1.5 px-1">
              <p className="text-[0.65rem] font-medium leading-tight text-center" style={{ color: 'var(--ink)' }}>low quality photo</p>
              <p className="text-[0.5rem] text-center text-[#8b7a69] mt-0.5 leading-tight">photo we'd show our kids lol</p>
            </div>
          </div>
          
          {/* 7. our inside jokes */}
          <div className="bg-white p-1.5 pb-3 rounded-lg shadow-md rotate-[0.8deg] hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col">
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#f7cac9] to-[#f5b0a5] rounded-sm overflow-hidden">
              <img src="photos/page-10/silly-me-silly-you.jpeg" alt="silly me silly you" className="w-full h-full object-cover"></img>
            </div>
            <div className="mt-1.5 px-1">
              <p className="text-[0.65rem] font-medium leading-tight text-center" style={{ color: 'var(--ink)' }}>silly me silly you</p>
              <p className="text-[0.5rem] text-center text-[#8b7a69] mt-0.5 leading-tight">our underrated photo fr.</p>
            </div>
          </div>
          
          {/* 8. the first time she said my name differently */}
          <div className="bg-white p-1.5 pb-3 rounded-lg shadow-md rotate-[-0.8deg] hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col">
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#ffdab9] to-[#ffe4b5] rounded-sm overflow-hidden">
              <img src="photos/page-10/spider-man-paglus.jpeg" alt="Spider-Man Paglus" className="w-full h-full object-cover"></img>
            </div>
            <div className="mt-1.5 px-1">
              <p className="text-[0.65rem] font-medium leading-tight text-center" style={{ color: 'var(--ink)' }}>Spider-Man Paglus</p>
              <p className="text-[0.5rem] text-center text-[#8b7a69] mt-0.5 leading-tight">we both put efforts in it together.</p>
            </div>
          </div>
        </div>

        {/* ENVELOPE — CLICK ME BEFORE YOU LEAVE */}
        <div className="max-w-md mx-auto mb-16 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#e6ccbe] to-[#b9c6ae] opacity-30 blur-2xl rounded-full"></div>
          
          {!isEnvelopeOpen ? (
            // CLOSED ENVELOPE
            <div 
              onClick={() => setIsEnvelopeOpen(true)}
              className="relative bg-white p-8 rounded-3xl border-4 border-[#e6ccbe] shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-20" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>
                ✉️
              </div>
              
              <div className="relative z-10 text-center py-12">
                <span className="text-8xl mb-4 inline-block animate-bounce" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>
                  ✉️
                </span>
                <h3 className="text-3xl font-bold mb-3" style={{ color: 'var(--ink)' }}>
                  click me before you leave
                </h3>
                <p className="text-sm text-[#8b7a69] italic">
                  there's something i've been wanting to say...
                </p>
                <div className="mt-6 w-16 h-16 mx-auto border-4 border-[#e6ccbe] border-dashed rounded-full flex items-center justify-center">
                  <span className="text-2xl">👇</span>
                </div>
              </div>
              
              {/* envelope flap */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-10 bg-[#e6ccbe] rotate-45 origin-center"></div>
            </div>
          ) : (
            // OPEN ENVELOPE — THE LOVE LETTER
            <div className="relative animate-slideIn">
              {/* envelope back */}
              <div className="absolute inset-0 bg-[#e6ccbe] rounded-3xl rotate-1 opacity-20"></div>
              
              {/* letter */}
              <div className="relative bg-gradient-to-br from-[#fffaf0] to-[#fff3e2] p-8 md:p-12 rounded-3xl border-4 border-[#e6ccbe] shadow-2xl rotate-[-0.5deg]">
                
                {/* close button */}
                <button 
                  onClick={() => setIsEnvelopeOpen(false)}
                  className="absolute -top-3 -right-3 bg-white w-10 h-10 rounded-full border-2 border-[#e6ccbe] shadow-lg flex items-center justify-center hover:bg-[#e6ccbe] transition-colors"
                >
                  ✕
                </button>
                
                {/* letter content */}
                <div className="prose prose-sm max-w-none" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  
                  <div className="text-center mb-6">
                    <span className="text-6xl mb-2 inline-block" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💌</span>
                    <h3 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--ink)' }}>
                      dear you,
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-md md:text-lg leading-relaxed" style={{ color: 'var(--warm-brown)' }}>
                    
                    <p className="italic">
                      10 pages. 12 months. a lifetime of memories.
                    </p>
                    
                    <p>
                      i didn't know how the girl on jan 22 at the dic event would become my whole world.
                      <br />i didn't know that waiting 1 hour with vishwa and saumya would be worth it.
                      <br />i didn't know that a ribbon on my wrist would become my most prized possession.
                    </p>
                    
                    <p>
                      but here we are. feb 13, the day i said it. the day i became the luckiest.
                    </p>
                    
                    <p className="font-medium" style={{ color: 'var(--ink)' }}>
                      you are:
                    </p>
                    
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>✨</span> 
                        <span>the first person i want to tell everything</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎵</span> 
                        <span>the reason yeh fitoor mera & line without a hook hits different now</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>🎀</span> 
                        <span>the girl who gave me her trust as her first love ever.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💖</span> 
                        <span>my divine beauty of the seven seas</span>
                      </li>
                    </ul>
                    
                    <p className="mt-6">
                      there are still 5 pages left in this yearbook. 
                      <br />but this is the only one that matters — because it's the one where i get to say:
                    </p>
                    
                    <p className="text-2xl md:text-3xl font-bold text-center my-8" style={{ color: 'var(--ink)' }}>
                      thank you for existing.
                      <br />thank you for staying.
                      <br />thank you for being mine.
                    </p>
                    
                    <p className="text-right mt-8">
                      forever yours,
                      <br />
                      <span className="text-xl font-bold" style={{ color: 'var(--ink)' }}>Your silly boy in love</span>
                    </p>
                    
                    <p className="text-xs text-center mt-8 text-[#8b7a69] italic border-t-2 border-dashed border-[#e6ccbe] pt-6">
                      p.s. — you still owe me that fun world date.
                      <br />p.p.s. — i love you. in case that wasn't clear.
                    </p>
                  </div>
                </div>
                
                {/* wax seal effect */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#e6ccbe] rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl">
                  💮
                </div>
              </div>
            </div>
          )}
        </div>

        {/* THE YEARBOOK — A LOOK BACK */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-3xl border-2 border-[#e6ccbe] shadow-lg">
            <h4 className="text-2xl font-bold mb-4" style={{ color: 'var(--ink)' }}>
              <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📘</span>  10 pages · 12 months · 1 story  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📘</span>
            </h4>
            
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <span className="bg-white px-3 py-2 rounded-full border border-[#e6ccbe]">🎵 dic event · jan 22</span>
              <span className="bg-white px-3 py-2 rounded-full border border-[#e6ccbe]">💬 the confession · feb 13</span>
              <span className="bg-white px-3 py-2 rounded-full border border-[#e6ccbe]">🎤 brain & brawn · mar 7</span>
              <span className="bg-white px-3 py-2 rounded-full border border-[#e6ccbe]">🎡 fun world · mar 29</span>
              <span className="bg-white px-3 py-2 rounded-full border border-[#e6ccbe]">🎂 her birthday · apr 9</span>
              <span className="bg-white px-3 py-2 rounded-full border border-[#e6ccbe]">🎁 my birthday · apr 25</span>
              <span className="bg-white px-3 py-2 rounded-full border border-[#e6ccbe]">💍 may 11 · official</span>
              <span className="bg-white px-3 py-2 rounded-full border border-[#e6ccbe]">☀️ summer of us</span>
              <span className="bg-white px-3 py-2 rounded-full border border-[#e6ccbe]">🎭 navratri · sept 23</span>
            </div>
            
            <p className="text-sm mt-6 italic text-[#8b7a69]">
              and this is only the beginning. there are still 5 empty pages waiting for our future.
            </p>
          </div>
        </div>

        {/* GOODBYE — FOR NOW */}
        <div className="mt-16 text-center">
          <span className="inline-block bg-white px-8 py-4 rounded-full text-lg border-4 border-[#b9c6ae] shadow-lg" style={{ color: 'var(--ink)' }}>
            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💫</span>  see you on the next pages  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>💫</span>
          </span>
          <p className="text-xs mt-4 text-[#8b7a69]">
            this yearbook will never be finished. because we're not done yet.
          </p>
        </div>
      </div>

      {/* navigation — back to cover */}
      <div className="w-full flex justify-center items-center mt-16 px-4">
        <a href="#page-1" className="bg-white px-6 py-3 rounded-full text-sm border-2 border-[#b9c6ae] shadow-md hover:bg-[#fff3e2] transition-all flex items-center gap-2 no-underline" style={{ color: 'var(--ink)' }}>
          <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📖</span>  close the yearbook · for now  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI Emoji\", \"Apple Color Emoji\", sans-serif' }}>📖</span>
        </a>
      </div>
      
      <div className="text-xs flex gap-1 items-center text-[#9ba9b2] font-mono bg-white/80 px-4 py-2 rounded-full shadow-md mt-8">
        <span className="w-2 h-2 rounded-full bg-[#e6ccbe]"></span>
        <span className="w-2 h-2 rounded-full bg-[#b9c6ae]"></span>
        <span className="w-2 h-2 rounded-full bg-[#e6ccbe]"></span>
        <span className="w-2 h-2 rounded-full bg-[#b9c6ae]"></span>
        10 / 15 · honorable mentions · the love letter
      </div>
    </div>
  );
};

// MAIN APP COMPONENT
const App = () => {
  return (
    <div className="d-flex flex-column">
      <CoverPage />
      <div className="page-divider"></div>
      <Page2 />
      <div className="page-divider"></div>
      <Page3 />
      <div className="page-divider"></div>
      <Page4 />
      <div className="page-divider"></div>
      <Page5 />
      <div className="page-divider"></div>
      <Page6 />
      <div className="page-divider"></div>
      <Page7 />      
      <div className="page-divider"></div>
      <Page8 />
      <div className="page-divider"></div>
      <Page9 />
      <div className="page-divider"></div>
      <Page10 />
      
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);