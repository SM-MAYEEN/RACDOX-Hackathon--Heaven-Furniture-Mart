import { useState } from "react";
import "./App.css";
import storyOneImage from "./assets/1.jpg";
import storyTwoImage from "./assets/2.png";
import storyThreeImage from "./assets/3.jpg";
import storyFourImage from "./assets/4.png";
import storyFiveImage from "./assets/5.jpg";
import cseFestImage from "./assets/cse fest.png";

const collections = [
  {
    title: "Living Room",
    items: ["Sofas", "Coffee tables", "TV units", "Consoles"],
    products: [
      [
        "Sofas",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/assets/heaven-hero-lounge.png",
      ],
      [
        "Coffee tables",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/products/image%20copy%209.png",
      ],
      [
        "TV units & consoles",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/editorial/about-main.jpg",
      ],
    ],
  },
  {
    title: "Bedroom",
    items: ["Beds", "Wardrobes", "Dressing tables", "Bedside tables"],
    products: [
      [
        "Beds",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/editorial/footer-bedroom-closeup.png",
      ],
      [
        "Wardrobes",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/products/image%20copy%203.png",
      ],
      [
        "Dressing tables & bedside",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/products/image%20copy%208.png",
      ],
    ],
  },
  {
    title: "Dining",
    items: ["Dining tables", "Dining chairs", "Cabinets", "Sideboards"],
    products: [
      [
        "Dining tables",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/products/image%20copy%204.png",
      ],
      [
        "Dining chairs",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/products/image%20copy%205.png",
      ],
      [
        "Cabinets & sideboards",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/products/image%20copy%204.png",
      ],
    ],
  },
  {
    title: "Office & Study",
    items: [
      "Executive tables",
      "Bookshelves",
      "Workstations",
      "Office storage",
    ],
    products: [
      [
        "Executive tables",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/images/study-desk-closeup.png",
      ],
      [
        "Bookshelves",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/images/study-desk-closeup.png",
      ],
      [
        "Workstations",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/images/study-desk-closeup.png",
      ],
    ],
  },
  {
    title: "Bespoke / Custom",
    items: ["Built to your space", "Made to your size", "Shaped to your taste"],
    products: [
      [
        "Custom living room",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/assets/heaven-hero-lounge.png",
      ],
      [
        "Custom bedroom",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/editorial/footer-bedroom-closeup.png",
      ],
      [
        "Custom dining & study",
        "https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/images/study-desk-closeup.png",
      ],
    ],
  },
];

const journey = [
  [
    "01",
    "Tell us your vision",
    "Share your room, measurements, inspiration, and the feeling you want the space to have.",
  ],
  [
    "02",
    "We design around it",
    "We shape the proportions, materials, colours, finishes, and details around your space.",
  ],
  [
    "03",
    "We craft & install",
    "Your piece is made with care, delivered to your home, and installed ready to live with.",
  ],
];

const communityStories = [
  {
    image: cseFestImage,
    title: "Supporting the IIUC CSE Fest 2025",
    text: "Heaven Furniture Mart supported the IIUC CSE Fest 2025 Rally as a sponsor, standing behind the students and community shaping Chattogram's future.",
  },
  {
    image: storyOneImage,
    title: "At the Chattogram Furniture Fair",
    text: "Heaven Furniture Mart joined the 14th Chattogram Furniture Fair 2024, bringing its craftsmanship and furniture story to a wider audience.",
  },
  {
    image: storyTwoImage,
    title: "Recognised for our work",
    text: "A moment of recognition shared with the people and partners who help us keep raising the standard of furniture made in Chattogram.",
  },
  {
    image: storyThreeImage,
    title: "The people behind Heaven",
    text: "Our team, partners and community are at the heart of every exhibition, project and piece we bring to life.",
  },
  {
    image: storyFourImage,
    title: "Meeting the furniture community",
    text: "From industry events to customer conversations, we keep learning, connecting and sharing the craft we care about.",
  },
  {
    image: storyFiveImage,
    title: "Together, we build the story",
    text: "The Heaven team brings care, detail and a shared pride in every space and community we take part in.",
  },
];

function App() {
  const [activeStory, setActiveStory] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const currentStory = communityStories[activeStory];
  const normalizedSearch = searchQuery.trim().toLowerCase();
  const searchResults = normalizedSearch
    ? collections.flatMap((collection, collectionIndex) => {
        const categoryMatch = collection.title
          .toLowerCase()
          .includes(normalizedSearch);
        const productMatches = collection.products
          .map(([title]) => title)
          .filter((title) => title.toLowerCase().includes(normalizedSearch));
        return categoryMatch || productMatches.length > 0
          ? [{ collection, collectionIndex, productMatches }]
          : [];
      })
    : [];

  return (
    <main>
      <nav className="nav wrap" aria-label="Main navigation">
        <a
          className="brand"
          href="#top"
          aria-label="Heaven Furniture Mart home"
        >
          <span className="brand-mark">H</span>
          <span className="brand-wordmark">
            <strong>HEAVEN</strong>
            <em>FURNITURE MART</em>
          </span>
        </a>
        <div className="nav-links">
          <a href="#top">Home</a>
          <a href="#story">Our story</a>
          <a href="#collections">Collections</a>
          <a href="#showroom">Showroom</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-search">
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search"
            aria-label="Search collections and products"
          />
          <span>⌕</span>
          {searchQuery && (
            <div className="search-results" role="status">
              {searchResults.length > 0 ? (
                searchResults.map(
                  ({ collection, collectionIndex, productMatches }) => (
                    <a
                      href={`#collection-${collectionIndex + 1}`}
                      key={collection.title}
                      onClick={() => setSearchQuery("")}
                    >
                      <strong>{collection.title}</strong>
                      <small>
                        {productMatches.length > 0
                          ? productMatches.join(" · ")
                          : collection.items.join(" · ")}
                      </small>
                    </a>
                  ),
                )
              ) : (
                <span className="search-empty">No collection found</span>
              )}
            </div>
          )}
        </div>
        <a
          className="nav-cta"
          href="https://wa.me/8801960481983"
          target="_blank"
          rel="noreferrer"
        >
          Book a private visit <span>↗</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div
          className="hero-image"
          role="img"
          aria-label="Elegant Heaven Furniture living room"
        />
        <div className="hero-shade" />
        <div className="hero-copy wrap">
          <p className="eyebrow light">Designed · Crafted · Customized</p>
          <h1>
            Furniture, Crafted
            <br />
            <i>Around You.</i>
          </h1>
          <p className="hero-text">
            Bespoke sofas, beds, dining sets and interiors built around your
            space, your taste and the way you actually live — hand-finished in
            Chattogram.
          </p>
          <div className="hero-points">
            <span>Free design consultation</span>
            <b>◆</b>
            <span>Custom built</span>
            <b>◆</b>
            <span>Delivery & installation</span>
          </div>
          <a
            className="button button-light"
            href="https://wa.me/8801960481983"
            target="_blank"
            rel="noreferrer"
          >
            Request a free consultation <span>→</span>
          </a>
          <a className="button button-outline" href="#collections">
            View collections
          </a>
        </div>
        <div className="hero-note">
          EST. 2020 <span /> AGRABAD, CHATTOGRAM
        </div>
        <a className="scroll-cue" href="#story">
          Scroll <span>⌄</span>
        </a>
      </section>

      <section className="trust-strip" aria-label="Heaven Furniture highlights">
        <div className="trust-marquee">
          <span>Designed for your space</span>
          <b>◆</b>
          <span>Created by hand</span>
          <b>◆</b>
          <span>Made in Chattogram</span>
          <b>◆</b>
          <span>Built around you</span>
          <b>◆</b>
          <span>Designed for your space</span>
          <b>◆</b>
          <span>Created by hand</span>
        </div>
        <div className="trust-wrap wrap">
          <div>
            <strong>2020</strong>
            <span>Founded in Chattogram</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Bespoke, never mass-produced</span>
          </div>
          <div>
            <strong>Agrabad</strong>
            <span>Full physical showroom</span>
          </div>
          <div>
            <strong>2026</strong>
            <span>Nationwide BFIOA recognition</span>
          </div>
        </div>
      </section>

      <a
        className="whatsapp-float"
        href="https://wa.me/8801960481983"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Heaven Furniture on WhatsApp"
      >
        WP
      </a>

      <section className="intro wrap" id="story-intro">
        <div className="intro-label">
          <span className="rule" /> A little about us
        </div>
        <div className="intro-content">
          <h2>
            Furniture should feel like <i>you.</i>
          </h2>
          <div className="intro-body">
            <p>
              Since 2020, Heaven Furniture Mart has designed and hand-crafted
              bespoke furniture and interiors for homes across Chattogram. Every
              piece begins with a conversation, not a catalogue.
            </p>
            <p>
              Made-to-measure proportions, premium materials and careful
              finishing give every piece a sense of belonging in your home.
            </p>
          </div>
        </div>
      </section>

      <section className="why wrap" aria-labelledby="why-title">
        <div className="why-heading">
          <p className="eyebrow">Why choose Heaven</p>
          <h2 id="why-title">
            A different kind of <i>furniture experience.</i>
          </h2>
        </div>
        <div className="why-grid">
          <div>
            <span>01</span>
            <h3>Free design consultation</h3>
            <p>
              Talk with our designers before you commit, with no cost and no
              pressure.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Fully bespoke</h3>
            <p>
              Every piece is built to your exact space, size and personal taste.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Premium craftsmanship</h3>
            <p>
              Premium wood and materials, shaped in-house by skilled craftsmen.
            </p>
          </div>
          <div>
            <span>04</span>
            <h3>Large physical showroom</h3>
            <p>
              Visit us in Agrabad, Chattogram and experience each finish in
              person.
            </p>
          </div>
          <div>
            <span>05</span>
            <h3>Delivered & installed</h3>
            <p>We bring your finished piece home and install it with care.</p>
          </div>
          <div>
            <span>06</span>
            <h3>Easy payment options</h3>
            <p>
              Simple, flexible payment conversations for your custom project.
            </p>
          </div>
          <div>
            <span>07</span>
            <h3>Trusted by homeowners</h3>
            <p>
              Hundreds of happy homeowners have made Heaven part of their story.
            </p>
          </div>
        </div>
      </section>

      <section
        className="collections-showcase"
        id="collections"
        aria-labelledby="collection-title"
      >
        <div className="collections-shell wrap">
          <div className="collection-heading">
            <div>
              <p className="eyebrow">Collections</p>
              <h2 id="collection-title">
                A glimpse of what
                <br />
                <i>we craft.</i>
              </h2>
            </div>
            <p>
              Not the full catalogue — just a taste of what&apos;s possible in
              every room.
            </p>
          </div>
          <div className="collection-index" aria-label="Collection categories">
            {collections.map((collection, index) => (
              <a href={`#collection-${index + 1}`} key={collection.title}>
                <b>0{index + 1}</b>
                <strong>{collection.title}</strong>
                <small>{collection.items.join(" · ")}</small>
              </a>
            ))}
          </div>
          <div className="collection-groups">
            {collections.map((collection, index) => (
              <section
                className="collection-group"
                id={`collection-${index + 1}`}
                key={collection.title}
              >
                <div className="collection-group-heading">
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{collection.title}</h3>
                    <p>{collection.items.join(" · ")}</p>
                  </div>
                </div>
                <div className="collection-product-grid">
                  {collection.products.map(([product, image]) => (
                    <a
                      className="collection-product-card"
                      href="https://wa.me/8801960481983"
                      target="_blank"
                      rel="noreferrer"
                      key={product}
                    >
                      <div
                        className="collection-product-image"
                        style={{
                          backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(7, 18, 20, .92) 100%), url("${image}")`,
                        }}
                      />
                      <strong>{product}</strong>
                      <b>↗</b>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="craft" id="bespoke">
        <div
          className="craft-image"
          role="img"
          aria-label="Furniture workshop detail"
        />
        <div className="craft-content">
          <p className="eyebrow light">The Heaven way</p>
          <h2>
            Good design is
            <br />
            <i>felt</i> before it is seen.
          </h2>
          <p>
            We care about the quiet things: the balance of a silhouette, the
            warmth of a finish, the way a chair welcomes you at the end of a
            long day.
          </p>
          <div className="craft-points">
            <span>01</span>
            <span>Personal guidance</span>
            <span>02</span>
            <span>Enduring materials</span>
          </div>
        </div>
      </section>

      <section className="journey wrap" aria-labelledby="journey-title">
        <div className="journey-heading">
          <p className="eyebrow">The bespoke journey</p>
          <h2 id="journey-title">
            From your idea
            <br />
            to your <i>room.</i>
          </h2>
        </div>
        <div className="journey-list">
          {journey.map(([number, title, text]) => (
            <div key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="proof-band" id="story">
        <div className="proof-inner wrap">
          <div className="quote-mark">“</div>
          <blockquote>
            At Heaven Furniture Mart, we believe furniture is more than just
            function; it is a reflection of lifestyle, taste, and comfort. Every
            piece we create is designed to bring lasting elegance into the homes
            of our clients.
            <cite>Abul Kalam Bhuiyan · Managing Director</cite>
          </blockquote>
          <div className="milestones">
            <div>
              <strong>2020</strong>
              <span>Founded by Abul Kalam Bhuiyan</span>
            </div>
            <div>
              <strong>2021</strong>
              <span>Agrabad showroom opened</span>
            </div>
            <div>
              <strong>2024–25</strong>
              <span>International Furniture Fair, Chattogram</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>Nationwide BFIOA recognition</span>
            </div>
          </div>
        </div>
        <div className="founder-story wrap">
          <img
            src="https://heaven.helloimabid.com/cdn-cgi/image/width=900,quality=90,format=auto/images/managing-director.png"
            alt="Abul Kalam Bhuiyan, Managing Director of Heaven Furniture Mart"
          />
          <div>
            <p className="eyebrow">The founder&apos;s note</p>
            <blockquote>
              &quot;At Heaven Furniture Mart, we believe furniture is more than
              just function; it is a reflection of lifestyle, taste, and
              comfort. Every piece we create is designed to bring lasting
              elegance into the homes of our clients.&quot;
            </blockquote>
            <p className="founder-name">
              Abul Kalam Bhuiyan <span>Managing Director</span>
            </p>
          </div>
        </div>
        <div className="community-slider wrap">
          <div className="community-slide">
            <img src={currentStory.image} alt={currentStory.title} />
            <div>
              <p className="eyebrow">Community & recognition</p>
              <h2>
                {currentStory.title}
                <br />
                <i>part of the Heaven story.</i>
              </h2>
              <p>{currentStory.text}</p>
            </div>
          </div>
          <div className="community-slider-footer">
            <div className="community-dots">
              {communityStories.map((story, index) => (
                <button
                  className={index === activeStory ? "active" : ""}
                  type="button"
                  key={story.title}
                  aria-label={`Show story ${index + 1}: ${story.title}`}
                  onClick={() => setActiveStory(index)}
                >
                  0{index + 1}
                </button>
              ))}
            </div>
            <div className="community-slider-actions">
              <span>
                0{activeStory + 1} / 0{communityStories.length}
              </span>
              <button
                type="button"
                aria-label="Previous story"
                onClick={() =>
                  setActiveStory(
                    (activeStory - 1 + communityStories.length) %
                      communityStories.length,
                  )
                }
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next story"
                onClick={() =>
                  setActiveStory((activeStory + 1) % communityStories.length)
                }
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="showroom wrap" id="showroom">
        <div>
          <div className="showroom-brand">
            <img
              src="https://heaven-luxury-furniture.vercel.app/assets/logo-heaven.png"
              alt="Heaven Furniture Mart showroom"
            />
            <span>Heaven Furniture Mart · Agrabad Showroom</span>
          </div>
          <p className="eyebrow">Visit Heaven</p>
          <h2>
            Come find your
            <br />
            <i>place.</i>
          </h2>
          <div className="location-map">
            <iframe
              title="Heaven Furniture showroom location in Agrabad, Chattogram"
              src="https://www.google.com/maps?q=Agrabad%20Access%20Road%2C%20Chattogram&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="showroom-copy">
          <p>
            See our furniture up close, talk through your ideas and take your
            time finding the pieces that feel right.
          </p>
          <div className="location">
            <span>SHOWROOM</span>
            <strong>Agrabad Access Road, Chattogram</strong>
            <small>Saturday – Thursday · 10:00 AM – 9:00 PM</small>
          </div>
          <a
            className="button button-dark"
            href="https://wa.me/8801960481983"
            target="_blank"
            rel="noreferrer"
          >
            Book a private visit <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <img
              className="brand-logo"
              src="https://heaven-luxury-furniture.vercel.app/assets/logo-heaven.png"
              alt="Heaven Furniture Mart"
            />
          </div>
          <div className="footer-tagline">
            <p>Designed. Crafted. Customized.</p>
            <small>
              Furniture with feeling.
              <br />
              Made for your story.
            </small>
          </div>
          <div className="footer-column">
            <span className="footer-label">EXPLORE</span>
            <a href="#collections">Collections</a>
            <a href="#bespoke">Bespoke Furniture</a>
            <a href="#story">Our Story</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <span className="footer-label">VISIT</span>
            <p>
              Agrabad Access Road,
              <br />
              Chattogram, Bangladesh
            </p>
          </div>
          <div>
            <span className="footer-label">FOLLOW</span>
            <a href="mailto:heavenfurnituremart@gmail.com">
              heavenfurnituremart@gmail.com
            </a>
            <br />
            <a
              href="https://wa.me/8801960481983"
              target="_blank"
              rel="noreferrer"
            >
              +880 1960 481983
            </a>
            <div
              className="footer-socials"
              aria-label="Heaven Furniture social links"
            >
              <a
                className="social-icon"
                href="https://facebook.com/HeavenFurnitureMart"
                target="_blank"
                rel="noreferrer"
                aria-label="Heaven Furniture Mart on Facebook"
                title="Facebook"
              >
                f
              </a>{" "}
              <a
                className="social-icon social-instagram"
                href="https://instagram.com/heaven_furniture_ltd"
                target="_blank"
                rel="noreferrer"
                aria-label="Heaven Furniture Mart on Instagram"
                title="Instagram"
              >
                ◎
              </a>{" "}
              <a
                className="social-icon social-youtube"
                href="https://youtube.com/@HeavenFurnitureMart"
                target="_blank"
                rel="noreferrer"
                aria-label="Heaven Furniture Mart on YouTube"
                title="YouTube"
              >
                ▶
              </a>
            </div>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© 2026 Heaven Furniture Mart</span>
          <span>Made with care in Chattogram</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
