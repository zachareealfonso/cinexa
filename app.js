// CINEXA — Movies & Shows Explorer (TMDB API)

// ─── Config ───────────────────────────────────────────────────────────────────
const API_KEY  = '510eb9d984517c5bc61959beae559d19';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE = 'https://image.tmdb.org/t/p/';

// ─── Categories ───────────────────────────────────────────────────────────────
const MOVIE_CATEGORIES = [
  { id: 'marvel',       label: 'Marvel',           type: 'company',  value: '420' },
  { id: 'dc',           label: 'DC',               type: 'company',  value: '9993' },
  { id: 'disney',       label: 'Disney',           type: 'company',  value: '2' },
  { id: 'pixar',        label: 'Pixar',            type: 'company',  value: '3' },
  { id: 'ghibli',       label: 'Studio Ghibli',    type: 'company',  value: '10342' },
  { id: 'fastnfurious', label: 'Fast & Furious',   type: 'collection', value: '9485' },
  { id: 'horror',       label: 'Horror Classics',  type: 'genre',    value: '27' },
  { id: 'action',       label: 'Action',           type: 'genre',    value: '28' },
  { id: 'scifi',        label: 'Sci-Fi',           type: 'genre',    value: '878' },
  { id: 'animation',    label: 'Animation',        type: 'genre',    value: '16' },
  { id: 'anime_movies', label: 'Anime',            type: 'multi',    value: 'genre:16|keyword:210024' },
];

// Home page: curated mix of movies and shows
const HOME_CATEGORIES = [
  { id: 'marvel',       label: 'Marvel',            type: 'company', value: '420',   media: 'movie' },
  { id: 'dc',           label: 'DC',                type: 'company', value: '9993',  media: 'movie' },
  { id: 'tv_drama',     label: 'Drama',             type: 'genre',   value: '18',    media: 'tv'    },
  { id: 'disney',       label: 'Disney',            type: 'company', value: '2',     media: 'movie' },
  { id: 'tv_action',    label: 'Action & Adventure', type: 'genre',  value: '10759', media: 'tv'    },
  { id: 'action',       label: 'Action',            type: 'genre',   value: '28',    media: 'movie' },
  { id: 'tv_scifi',     label: 'Sci-Fi & Fantasy',  type: 'genre',   value: '10765', media: 'tv'    },
  { id: 'scifi',        label: 'Sci-Fi',            type: 'genre',   value: '878',   media: 'movie' },
  { id: 'tv_crime',     label: 'Crime',             type: 'genre',   value: '80',    media: 'tv'    },
  { id: 'animation',    label: 'Animation',         type: 'genre',   value: '16',    media: 'movie' },
];

const TV_CATEGORIES = [
  { id: 'tv_drama',       label: 'Drama',             type: 'genre', value: '18',    media: 'tv' },
  { id: 'tv_comedy',      label: 'Comedy',            type: 'genre', value: '35',    media: 'tv' },
  { id: 'tv_action',      label: 'Action & Adventure',type: 'genre', value: '10759', media: 'tv' },
  { id: 'tv_scifi',       label: 'Sci-Fi & Fantasy',  type: 'genre', value: '10765', media: 'tv' },
  { id: 'tv_crime',       label: 'Crime',             type: 'genre', value: '80',    media: 'tv' },
  { id: 'tv_reality',     label: 'Reality',           type: 'genre', value: '10764', media: 'tv' },
  { id: 'tv_animation',   label: 'Animated Shows',    type: 'genre', value: '16',    media: 'tv' },
  { id: 'tv_anime2',      label: 'Anime',             type: 'multi', value: 'genre:16|keyword:210024', media: 'tv' },
  { id: 'tv_thriller',    label: 'Thriller',          type: 'genre', value: '9648',  media: 'tv' },
  { id: 'tv_family',      label: 'Kids & Family',     type: 'genre', value: '10751', media: 'tv' },
  { id: 'tv_documentary', label: 'Documentary',       type: 'genre', value: '99',    media: 'tv' },
];

// Full MCU watch-order list. Strings = title search; objects = direct TMDB id fetch.
const MCU_LIST = [
  'Captain America: The First Avenger',
  { title: 'Agent Carter',                              id: 61550,  media: 'tv'    },
  'Captain Marvel',
  'Iron Man',
  'Iron Man 2',
  'The Incredible Hulk',
  'Thor',
  'The Avengers',
  'Iron Man 3',
  'Thor: The Dark World',
  'Captain America: The Winter Soldier',
  { title: 'Agents of S.H.I.E.L.D.',                   id: 1403,   media: 'tv'    },
  'Guardians of the Galaxy',
  'Guardians of the Galaxy Vol. 2',
  'Avengers: Age of Ultron',
  'Ant-Man',
  'Captain America: Civil War',
  'Black Widow',
  'Black Panther',
  'Spider-Man: Homecoming',
  'Doctor Strange',
  'Thor: Ragnarok',
  'Ant-Man and the Wasp',
  'Avengers: Infinity War',
  'Avengers: Endgame',
  { title: 'Loki (Season 1)',                           id: 84958,  media: 'tv'    },
  { title: 'What If...?',                               id: 91557,  media: 'tv'    },
  { title: 'WandaVision',                               id: 85271,  media: 'tv'    },
  { title: 'The Falcon and the Winter Soldier',         id: 88396,  media: 'tv'    },
  'Shang-Chi and the Legend of the Ten Rings',
  'Eternals',
  'Spider-Man: Far From Home',
  'Spider-Man: No Way Home',
  { title: 'Hawkeye',                                   id: 88329,  media: 'tv'    },
  'Doctor Strange in the Multiverse of Madness',
  { title: 'Moon Knight',                               id: 92749,  media: 'tv'    },
  { title: 'Ms. Marvel',                                id: 92782,  media: 'tv'    },
  'Thor: Love and Thunder',
  'Black Panther: Wakanda Forever',
  { title: 'She-Hulk: Attorney at Law',                 id: 92783,  media: 'tv'    },
  'Werewolf by Night',
  'The Guardians of the Galaxy Holiday Special',
  'Ant-Man and the Wasp: Quantumania',
  'Guardians of the Galaxy Vol. 3',
  { title: 'Secret Invasion',                           id: 114472, media: 'tv'    },
  { title: 'Loki (Season 2)',                           id: 84958,  media: 'tv'    },
  'The Marvels',
  { title: 'Echo',                                      id: 216898, media: 'tv'    },
  { title: 'Agatha All Along',                          id: 222589, media: 'tv'    },
  { title: 'Daredevil: Born Again',                     id: 202555, media: 'tv'    },
  'Deadpool & Wolverine',
  'Captain America: Brave New World',
  'Thunderbolts',
  'The Fantastic Four: First Steps',
  'Avengers: Doomsday',
  'Avengers: Secret Wars',
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function randomPage() { return Math.floor(Math.random() * 5) + 1; }

// ─── DOM References ───────────────────────────────────────────────────────────
const movieGrid        = document.getElementById('movieGrid');
const searchInput      = document.getElementById('searchInput');
const searchSection    = document.querySelector('.search-section');
const searchClear      = document.getElementById('searchClear');
const genreBar         = document.getElementById('genreBar');
const categoryRows     = document.getElementById('categoryRows');
const statusBar        = document.getElementById('statusBar');
const statusText       = document.getElementById('statusText');
const errorBar         = document.getElementById('errorBar');
const errorText        = document.getElementById('errorText');
const sectionTitle     = document.getElementById('sectionTitle');
const sectionCount     = document.getElementById('sectionCount');
const loadMoreWrap     = document.getElementById('loadMoreWrap');
const sortBar          = document.getElementById('sortBar');
const sortDropdownWrap = document.getElementById('sortDropdownWrap');
const sortDropdownBtn  = document.getElementById('sortDropdownBtn');
const sortDropdownText = document.getElementById('sortDropdownText');
const sortDropdownMenu = document.getElementById('sortDropdownMenu');
const sortOptions      = document.querySelectorAll('.sort-option');
const loadMoreBtn      = document.getElementById('loadMoreBtn');
const backTopBtn       = document.getElementById('backTopBtn');
const catBackBtn       = document.getElementById('catBackBtn');
const navBtns          = document.querySelectorAll('.nav-btn');
const mediaToggleBtns  = document.querySelectorAll('.toggle-btn');
const upcomingBtn      = document.getElementById('upcomingBtn');
const toast            = document.getElementById('toast');

// Detail modal elements
const detailOverlay     = document.getElementById('detailOverlay');
const detailClose       = document.getElementById('detailClose');
const detailBackdrop    = document.getElementById('detailBackdrop');
const detailPoster      = document.getElementById('detailPoster');
const detailTitle       = document.getElementById('detailTitle');
const detailTagline     = document.getElementById('detailTagline');
const detailYear        = document.getElementById('detailYear');
const detailRuntime     = document.getElementById('detailRuntime');
const detailRating      = document.getElementById('detailRating');
const detailType        = document.getElementById('detailType');
const detailGenres      = document.getElementById('detailGenres');
const detailOverview    = document.getElementById('detailOverview');
const detailCast        = document.getElementById('detailCast');
const detailFavBtn      = document.getElementById('detailFavBtn');
const detailShareBtn    = document.getElementById('detailShareBtn');
const detailTrailerBtn  = document.getElementById('detailTrailerBtn');
const detailTvInfo      = document.getElementById('detailTvInfo');
const detailMovieInfo   = document.getElementById('detailMovieInfo');
const detailSeasons     = document.getElementById('detailSeasons');
const detailEpisodes    = document.getElementById('detailEpisodes');
const detailStatus      = document.getElementById('detailStatus');
const detailBudget      = document.getElementById('detailBudget');
const detailRevenue     = document.getElementById('detailRevenue');
const detailBudgetWrap  = document.getElementById('detailBudgetWrap');
const detailRevenueWrap = document.getElementById('detailRevenueWrap');
const detailSimilarWrap = document.getElementById('detailSimilarWrap');
const detailSimilarTrack= document.getElementById('detailSimilarTrack');
const similarPrev       = document.getElementById('similarPrev');
const similarNext       = document.getElementById('similarNext');

// Trailer modal elements
const trailerOverlay = document.getElementById('trailerOverlay');
const trailerClose   = document.getElementById('trailerClose');
const trailerFrame   = document.getElementById('trailerFrame');

const heroSpotlight  = document.getElementById('heroSpotlight');
const heroSlides     = document.getElementById('heroSlides');
const heroTitle      = document.getElementById('heroTitle');
const heroBadge      = document.getElementById('heroBadge');
const heroMeta       = document.getElementById('heroMeta');
const heroDots       = document.getElementById('heroDots');
const heroProgress   = document.getElementById('heroProgress');
const heroDetailsBtn = document.getElementById('heroDetailsBtn');
const heroTabRow     = document.getElementById('heroTabRow');


let currentMedia    = null;
let currentSort     = 'popularity.desc';
let currentCat      = null;
let currentSection  = 'home';
let _prevSection    = 'home';
let currentPage     = 1;
let totalPages      = 1;
let currentQuery    = '';
let currentGenre    = null;
let fetchToken      = 0; // incremented on every new fetch; stale fetches check this before rendering
let currentItemId   = null;
let currentItemData = null;
let favorites       = JSON.parse(localStorage.getItem('cinexa_favs') || '[]');
let genreMap        = {};
let tvGenreMap      = {};
let fetchController = null;

// ─── Fetch ────────────────────────────────────────────────────────────────────
async function apiFetch(endpoint, params = {}) {
  if (fetchController) fetchController.abort();
  fetchController = new AbortController();
  showLoading(true);
  hideError();

  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.set('api_key', API_KEY);
  url.searchParams.set('include_adult', 'false');
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  try {
    const res = await fetch(url, { signal: fetchController.signal });
    if (!res.ok) {
      if (res.status === 401) throw new Error('Invalid API key.');
      if (res.status === 404) throw new Error('Not found (404).');
      throw new Error(`API error: ${res.status}`);
    }
    const data = await res.json();
    showLoading(false);
    return data;
  } catch (err) {
    if (err.name === 'AbortError') return null;
    showLoading(false);
    showError(!navigator.onLine ? 'You appear to be offline.' : err.message);
    return null;
  }
}

async function directFetch(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.set('api_key', API_KEY);
  url.searchParams.set('include_adult', 'false');
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return res.json();
  } catch { return null; }
}

async function detailFetch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return res.json();
  } catch { return null; }
}

// ─── UI Helpers ───────────────────────────────────────────────────────────────
function showLoading(on) { statusBar.classList.toggle('hidden', !on); }
function showError(msg)  { errorBar.classList.remove('hidden'); errorText.textContent = '⚠ ' + msg; }
function hideError()     { errorBar.classList.add('hidden'); }
function setLoadMoreLoading(on) {
  loadMoreBtn.disabled = on;
  loadMoreBtn.textContent = on ? 'Loading…' : 'Load More';
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove('hidden');
  toast.classList.add('toast--visible');
  setTimeout(() => {
    toast.classList.remove('toast--visible');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 2200);
}

function formatMoney(n) {
  if (!n || n === 0) return null;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`;
  return `$${n.toLocaleString()}`;
}

// ─── Skeletons ────────────────────────────────────────────────────────────────
function renderSkeletons(count = 12) {
  movieGrid.innerHTML = '';
  for (let i = 0; i < count; i++) {
    movieGrid.innerHTML += `
      <div class="skeleton">
        <div class="skeleton-poster"></div>
        <div class="skeleton-body">
          <div class="skeleton-line"></div>
          <div class="skeleton-line short"></div>
        </div>
      </div>`;
  }
}

function rowSkeletons(count = 6) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `<div class="skeleton row-skeleton">
      <div class="skeleton-poster"></div>
      <div class="skeleton-body">
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
      </div>
    </div>`;
  }
  return html;
}

// ─── Title/Date helpers ───────────────────────────────────────────────────────
function getTitle(item) { return item.title || item.name || '—'; }
function getDate(item)  { return item.release_date || item.first_air_date || ''; }
function getYear(item)  { const d = getDate(item); return d ? d.slice(0, 4) : '—'; }
function isUpcoming(item) { const d = getDate(item); return d && d > new Date().toISOString().slice(0, 10); }

// ─── Grid Card ────────────────────────────────────────────────────────────────
function buildCard(item, mediaType) {
  const mt = mediaType || item._mediaType || 'movie';
  item._mediaType = mt;
  const isFav = favorites.some(f => f.id === item.id && f._mediaType === mt);
  const displayTitle = item._curatedTitle || getTitle(item);
  const poster = item.poster_path
    ? `<img class="card-poster" src="${IMG_BASE}w500${item.poster_path}" alt="${displayTitle}" loading="lazy" />`
    : `<div class="card-no-poster"><span class="card-no-poster-title">${displayTitle}</span></div>`;
  const ratingHtml = item.vote_average && item.vote_average > 0
    ? `<div class="card-rating">★ ${item.vote_average.toFixed(1)}</div>` : '';

  const metaParts = [getYear(item), mt === 'tv' ? 'Show' : 'Movie'];
  if (isUpcoming(item)) metaParts.push('<span class="card-meta-upcoming">Upcoming</span>');
  if (isFav) metaParts.push('<span class="card-meta-saved">Saved</span>');
  const metaRow = metaParts.join('<span class="card-meta-dot">·</span>');

  const card = document.createElement('div');
  card.className = 'movie-card' + (isFav ? ' is-fav' : '');
  card.dataset.id = item.id;
  card.dataset.media = mt;
  card.innerHTML = `
    <div class="card-poster-wrap">
      ${poster}${ratingHtml}
      <div class="card-fav-badge">♥</div>
    </div>
    <div class="card-body">
      <div class="card-title-row"><div class="card-title">${displayTitle}</div></div>
      <div class="card-meta-row">${metaRow}</div>
    </div>`;
  card.addEventListener('click', () => openDetail(item.id, mt));
  attachHoverPreview(card, item, mt);
  return card;
}

// ─── Row Card ─────────────────────────────────────────────────────────────────
function buildRowCard(item, mediaType) {
  const mt = mediaType || item._mediaType || 'movie';
  item._mediaType = mt;
  const isFav = favorites.some(f => f.id === item.id && f._mediaType === mt);
  const poster = item.poster_path
    ? `<img class="row-card-poster" src="${IMG_BASE}w500${item.poster_path}" alt="${getTitle(item)}" loading="lazy" />`
    : `<div class="row-card-no-poster"></div>`;
  const ratingHtml = item.vote_average && item.vote_average > 0
    ? `<div class="card-rating">★ ${item.vote_average.toFixed(1)}</div>` : '';

  const metaParts = [getYear(item), mt === 'tv' ? 'Show' : 'Movie'];
  if (isUpcoming(item)) metaParts.push('<span class="card-meta-upcoming">Upcoming</span>');
  if (isFav) metaParts.push('<span class="card-meta-saved">Saved</span>');
  const metaRow = metaParts.join('<span class="card-meta-dot">·</span>');

  const card = document.createElement('div');
  card.className = 'row-card' + (isFav ? ' is-fav' : '');
  card.dataset.id = item.id;
  card.dataset.media = mt;
  card.innerHTML = `
    <div class="row-card-poster-wrap">
      ${poster}${ratingHtml}
      <div class="card-fav-badge">♥</div>
    </div>
    <div class="row-card-body">
      <div class="card-title-row"><div class="row-card-title">${getTitle(item)}</div></div>
      <div class="card-meta-row">${metaRow}</div>
    </div>`;
  card.addEventListener('click', () => openDetail(item.id, mt));
  attachHoverPreview(card, item, mt);
  return card;
}

// ─── Category Rows ────────────────────────────────────────────────────────────
async function loadCategoryRows() {
  categoryRows.innerHTML = '';
  const cats = currentMedia === null ? HOME_CATEGORIES : currentMedia === 'tv' ? TV_CATEGORIES : MOVIE_CATEGORIES;

  // Pre-fetch the global pool once for trending/popular so categories don't repeat items
  const activeSection = currentSection.startsWith('home_') ? currentSection.replace('home_', '') : currentSection;
  const usedIds = new Set();
  let globalPoolIds = null; // Set of IDs in the trending/popular pool

  if (activeSection === 'trending') {
    const mts = currentMedia ? [currentMedia] : ['movie', 'tv'];
    const allTrend = await Promise.all(
      mts.flatMap(mt => [1,2,3,4,5].map(p => directFetch(`/trending/${mt}/week`, { page: p })))
    );
    globalPoolIds = new Set(allTrend.filter(d => d?.results).flatMap(d => d.results).map(i => i.id));
  } else if (activeSection === 'popular') {
    const mts = currentMedia ? [currentMedia] : ['movie', 'tv'];
    const allPop = await Promise.all(
      mts.flatMap(mt => [1,2,3,4,5].map(p => directFetch(mt === 'tv' ? '/tv/popular' : '/movie/popular', { page: p })))
    );
    globalPoolIds = new Set(allPop.filter(d => d?.results).flatMap(d => d.results).map(i => i.id));
  }

  for (const cat of cats) {
    const section = document.createElement('div');
    section.className = 'cat-row';
    section.innerHTML = `
      <div class="cat-row-header">
        <h3 class="cat-row-title">${cat.label}</h3>
        <button class="cat-row-see-all" data-cat-id="${cat.id}">See all →</button>
      </div>
      <div class="cat-row-scroll-wrap">
        <button class="cat-row-arrow cat-row-arrow--left" aria-label="Scroll left">&#8249;</button>
        <div class="cat-row-track" id="track-${cat.id}">${rowSkeletons(6)}</div>
        <button class="cat-row-arrow cat-row-arrow--right" aria-label="Scroll right">&#8250;</button>
      </div>`;
    categoryRows.appendChild(section);

    const track    = section.querySelector(`#track-${cat.id}`);
    const btnLeft  = section.querySelector('.cat-row-arrow--left');
    const btnRight = section.querySelector('.cat-row-arrow--right');

    function updateArrows() {
      btnLeft.classList.toggle('arrow-disabled', track.scrollLeft <= 2);
      btnRight.classList.toggle('arrow-disabled', track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
    }

    track.addEventListener('scroll', updateArrows, { passive: true });
    btnLeft.classList.add('arrow-disabled');

    btnLeft.addEventListener('click', () => {
      if (!btnLeft.classList.contains('arrow-disabled'))
        track.scrollBy({ left: -(track.clientWidth - 64), behavior: 'smooth' });
    });
    btnRight.addEventListener('click', () => {
      if (!btnRight.classList.contains('arrow-disabled'))
        track.scrollBy({ left: track.clientWidth - 64, behavior: 'smooth' });
    });

    section.querySelector('.cat-row-see-all').addEventListener('click', () => loadCategoryFull(cat));
    fetchCategoryRow(cat, track, globalPoolIds, usedIds);
  }
}

async function fetchCategoryRow(cat, track, globalPoolIds = null, usedIds = new Set()) {
  const mt = cat.media || 'movie';
  let allItems = [];

  const activeSection = currentSection.startsWith('home_') ? currentSection.replace('home_', '') : currentSection;

  if (cat.type === 'collection') {
    const data = await directFetch(`/collection/${cat.value}`);
    allItems = data?.parts || [];

  } else {
    const endpoint = mt === 'tv' ? '/discover/tv' : '/discover/movie';
    let sortBy, minVotes, extraParams = {};

    if (activeSection === 'trending') {
      // Use pre-fetched global trending pool, or fetch fresh if called standalone
      let trendIds = globalPoolIds;
      if (!trendIds) {
        const trendPages = await Promise.all([1,2,3,4,5].map(p => directFetch(`/trending/${mt}/week`, { page: p })));
        trendIds = new Set(trendPages.filter(d => d?.results).flatMap(d => d.results).map(i => i.id));
      }

      // Fetch all items for this category
      let catParams = { sort_by: 'popularity.desc', without_genres: '10749' };
      if (cat.type === 'company') catParams.with_companies = cat.value;
      if (cat.type === 'keyword') catParams.with_keywords  = cat.value;
      if (cat.type === 'genre')   catParams.with_genres    = cat.value;
      if (cat.type === 'multi')   { catParams.with_genres = '16'; catParams.with_keywords = '210024'; }
      const catPages = await Promise.all([1,2,3,4,5].map(p => directFetch(endpoint, { ...catParams, page: p })));
      const catItems = catPages.filter(d => d?.results).flatMap(d => d.results);

      // Intersect with trending pool, exclude already-used IDs
      allItems = catItems.filter(i => trendIds.has(i.id) && !usedIds.has(i.id));

      // Fallback: if less than 5 matches, use category items not yet used
      if (allItems.length < 5) allItems = catItems.filter(i => !usedIds.has(i.id));
      // Last resort: use anything
      if (allItems.length < 5) allItems = catItems;

    } else if (activeSection === 'toprated') {
      sortBy   = 'vote_average.desc';
      minVotes = 500;
      let params = { sort_by: sortBy, without_genres: '10749', 'vote_count.gte': minVotes };
      if (cat.type === 'company') params.with_companies = cat.value;
      if (cat.type === 'keyword') params.with_keywords  = cat.value;
      if (cat.type === 'genre')   params.with_genres    = cat.value;
      if (cat.type === 'multi')   { params.with_genres = '16'; params.with_keywords = '210024'; }
      const pages = await Promise.all([1, 2, 3].map(p => directFetch(endpoint, { ...params, page: p })));
      allItems = pages.filter(d => d?.results).flatMap(d => d.results);

    } else if (activeSection === 'popular') {
      // Use pre-fetched global popular pool, or fetch fresh if called standalone
      let popularIds = globalPoolIds;
      if (!popularIds) {
        const popularPages = await Promise.all([1,2,3,4,5].map(p => directFetch(mt === 'tv' ? '/tv/popular' : '/movie/popular', { page: p })));
        popularIds = new Set(popularPages.filter(d => d?.results).flatMap(d => d.results).map(i => i.id));
      }

      // Fetch all items for this category
      let catParams = { sort_by: 'popularity.desc', without_genres: '10749' };
      if (cat.type === 'company') catParams.with_companies = cat.value;
      if (cat.type === 'keyword') catParams.with_keywords  = cat.value;
      if (cat.type === 'genre')   catParams.with_genres    = cat.value;
      if (cat.type === 'multi')   { catParams.with_genres = '16'; catParams.with_keywords = '210024'; }
      const catPages = await Promise.all([1,2,3,4,5].map(p => directFetch(endpoint, { ...catParams, page: p })));
      const catItems = catPages.filter(d => d?.results).flatMap(d => d.results);

      // Intersect with popular pool, exclude already-used IDs
      allItems = catItems.filter(i => popularIds.has(i.id) && !usedIds.has(i.id));

      // Fallback: if less than 5 matches, use category items not yet used
      if (allItems.length < 5) allItems = catItems.filter(i => !usedIds.has(i.id));
      // Last resort: use anything
      if (allItems.length < 5) allItems = catItems;

    } else {
      // default (home) — random selection from across multiple pages
      let params = { sort_by: 'popularity.desc', without_genres: '10749' };
      if (cat.type === 'company') params.with_companies = cat.value;
      if (cat.type === 'keyword') params.with_keywords  = cat.value;
      if (cat.type === 'genre')   params.with_genres    = cat.value;
      if (cat.type === 'multi')   { params.with_genres = '16'; params.with_keywords = '210024'; }
      // Pick 3 random pages from the first 8 so results vary each visit
      const pagePool = [1,2,3,4,5,6,7,8];
      const randomPages = shuffle([...pagePool]).slice(0, 3);
      const pages = await Promise.all(randomPages.map(p => directFetch(endpoint, { ...params, page: p })));
      allItems = shuffle(pages.filter(d => d?.results).flatMap(d => d.results));
    }
  }

  allItems = allItems.filter(isClean);
  track.innerHTML = '';
  if (allItems.length === 0) { track.innerHTML = '<div class="row-empty">No results found.</div>'; return; }

  // Sort display order based on section
  let sorted;
  if (cat.type === 'collection') {
    sorted = allItems.sort((a, b) => (a.release_date || '').localeCompare(b.release_date || ''));
  } else if (activeSection === 'toprated') {
    sorted = allItems.sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0));
  } else {
    // trending and popular: highest popularity first
    sorted = allItems.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  }

  sorted.forEach(item => { usedIds.add(item.id); track.appendChild(buildRowCard(item, mt)); });
  track.dispatchEvent(new Event('scroll'));
}

function loadCategoryFull(cat) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  hideHero();
  categoryRows.classList.add('hidden');
  document.getElementById('sectionHeader').classList.remove('hidden');
  movieGrid.classList.remove('hidden');

  _prevSection = currentSection;
  catBackBtn.classList.remove('hidden');

  navBtns.forEach(b => b.classList.remove('active'));
  currentSection = 'category';
  currentCat     = cat;
  currentPage    = 1;
  currentQuery   = '';
  currentGenre   = cat.value;
  currentSort    = 'popularity.desc';
  sectionTitle.textContent = cat.label;
  searchInput.value = '';
  searchClear.classList.add('hidden');
  genreBar.querySelectorAll('.genre-chip').forEach(c => c.classList.remove('active'));

  // Show MCU sort option only for Marvel
  const mcuOption = sortDropdownMenu.querySelector('[data-sort="mcu"]');
  if (mcuOption) mcuOption.style.display = cat.id === 'marvel' ? '' : 'none';

  if (cat.type === 'collection') {
    currentSort = 'release_date.asc';
    setActiveSortOption('release_date.asc');
  } else {
    currentSort = 'popularity.desc';
    setActiveSortOption('popularity.desc');
  }
  sortBar.classList.remove('hidden');

  renderSkeletons();
  _fetchCategoryPage(cat, 1);
}

async function _fetchCategoryPage(cat, page) {
  const token = ++fetchToken;
  const mt = cat.media || 'movie';

  // MCU sort: always delegate entirely to the curated MCU list — never fall through to company query
  if (currentSort === 'mcu') {
    await _fetchMCUList();
    return;
  }

  if (cat.type === 'collection') {
    const data = await apiFetch(`/collection/${cat.value}`, {});
    if (!data || token !== fetchToken) return;
    let parts = sortCollection([...(data.parts || [])], currentSort);
    totalPages = 1;
    renderItems(parts, false, mt, token);
    setLoadMoreLoading(false);
    return;
  }

  if (cat.type === 'multi') {
    const endpoint = mt === 'tv' ? '/discover/tv' : '/discover/movie';
    const data = await apiFetch(endpoint, { sort_by: currentSort, with_genres: '16', with_keywords: '210024', page });
    if (!data || token !== fetchToken) return;
    totalPages = data.total_pages;
    renderItems(data.results, page > 1, mt, token);
    setLoadMoreLoading(false);
    return;
  }

  const endpoint = mt === 'tv' ? '/discover/tv' : '/discover/movie';
  const apiSort  = currentSort === 'mcu' ? 'release_date.asc' : currentSort;
  let params = { sort_by: apiSort, page };
  if (cat.type === 'company') params.with_companies = cat.value;
  if (cat.type === 'keyword') params.with_keywords  = cat.value;
  if (cat.type === 'genre')   params.with_genres    = cat.value;

  const data = await apiFetch(endpoint, params);
  if (!data || token !== fetchToken) return;
  totalPages = data.total_pages;
  renderItems(data.results, page > 1, mt, token);
  setLoadMoreLoading(false);
}

// ─── Render Items ─────────────────────────────────────────────────────────────
function renderItems(items, append = false, mediaType, token) {
  if (token !== undefined && token !== fetchToken) return;
  const mt = mediaType || currentMedia;
  if (!append) movieGrid.innerHTML = '';

  const clean = (items || []).filter(isClean);
  if (clean.length === 0 && !append) {
    movieGrid.innerHTML = '<div class="no-results">No results found.</div>';
    loadMoreWrap.classList.add('hidden');
    return;
  }

  clean.forEach((item, i) => {
    const card = buildCard(item, mt);
    card.style.animationDelay = `${(i % 20) * 0.03}s`;
    movieGrid.appendChild(card);
  });

  loadMoreWrap.classList.toggle('hidden', currentPage >= totalPages);
  sectionCount.textContent = totalPages > 1 ? `page ${currentPage} of ${totalPages}` : '';
}

// ─── Hero Spotlight ───────────────────────────────────────────────────────────
let _heroItems       = [];
let _heroIndex       = 0;
let _heroTimer       = null;
let _heroProgressRaf = null;
let _heroTab         = 'trending'; // 'trending' | 'popular' | 'toprated'
let _heroMediaType   = null;       // null = home (mix), 'movie', 'tv'
let _heroCurrentItem = null;
const HERO_INTERVAL  = 6000;

const HERO_TAB_LABELS = { trending: 'Trending', popular: 'Popular', toprated: 'Top Rated' };
const HERO_BADGE_LABELS = {
  trending: (i) => `Trending #${i + 1}`,
  popular:  (i) => `Popular #${i + 1}`,
  toprated: (i) => `Top Rated #${i + 1}`,
};

async function fetchHeroItems(tab, mediaType) {
  const mt = mediaType || 'movie';
  let endpoint;
  if (tab === 'trending') endpoint = mt === 'tv' ? '/trending/tv/week'  : '/trending/movie/week';
  if (tab === 'popular')  endpoint = mt === 'tv' ? '/tv/popular'        : '/movie/popular';
  if (tab === 'toprated') endpoint = mt === 'tv' ? '/tv/top_rated'      : '/movie/top_rated';

  // If home (null), fetch both movies and TV then interleave
  if (mediaType === null) {
    const epMovie = tab === 'trending' ? '/trending/movie/week' : tab === 'popular' ? '/movie/popular' : '/movie/top_rated';
    const epTv    = tab === 'trending' ? '/trending/tv/week'    : tab === 'popular' ? '/tv/popular'    : '/tv/top_rated';
    const [mData, tData] = await Promise.all([directFetch(epMovie), directFetch(epTv)]);
    const movies = (mData?.results || []).filter(isClean).map(i => ({ ...i, _mediaType: 'movie' }));
    const shows  = (tData?.results  || []).filter(isClean).map(i => ({ ...i, _mediaType: 'tv' }));
    // interleave: m, tv, m, tv…
    const mixed = [];
    for (let i = 0; i < Math.max(movies.length, shows.length); i++) {
      if (movies[i]) mixed.push(movies[i]);
      if (shows[i])  mixed.push(shows[i]);
    }
    return mixed.filter(i => i.backdrop_path).slice(0, 8);
  }

  const data = await directFetch(endpoint);
  return (data?.results || [])
    .filter(i => isClean(i) && i.backdrop_path)
    .map(i => ({ ...i, _mediaType: mt }))
    .slice(0, 8);
}

function heroAnimateIn() {
  heroTitle.style.animation = 'none';
  heroBadge.style.animation = 'none';
  heroMeta.style.animation  = 'none';
  void heroTitle.offsetWidth;
  heroTitle.style.animation = '';
  heroBadge.style.animation = '';
  heroMeta.style.animation  = '';
}

function showHeroSlide(idx) {
  const item = _heroItems[idx];
  if (!item) return;
  _heroCurrentItem = item;
  _heroIndex = idx;

  // Slides
  heroSlides.querySelectorAll('.hero-slide').forEach((s, i) => {
    s.classList.toggle('active', i === idx);
  });

  // Badge
  heroBadge.textContent = HERO_BADGE_LABELS[_heroTab](idx);

  // Title
  heroTitle.textContent = getTitle(item);

  // Meta
  const year   = getYear(item);
  const rating = item.vote_average ? `★ ${item.vote_average.toFixed(1)}` : '';
  const type   = item._mediaType === 'tv' ? 'TV Show' : 'Movie';
  heroMeta.innerHTML = [year, type, rating]
    .filter(Boolean)
    .map((v, i, a) => v + (i < a.length - 1 ? ' <span class="hero-meta-sep">·</span> ' : ''))
    .join('');
  if (rating) heroMeta.querySelector && (heroMeta.innerHTML = heroMeta.innerHTML.replace(
    rating, `<span class="hero-rating">${rating}</span>`
  ));

  // Dots
  heroDots.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === idx));

  // Animate in text
  heroAnimateIn();

  // Progress bar reset
  heroProgress.style.transition = 'none';
  heroProgress.style.width = '0%';
  void heroProgress.offsetWidth;
  heroProgress.style.transition = `width ${HERO_INTERVAL}ms linear`;
  heroProgress.style.width = '100%';
}

function heroNext() {
  showHeroSlide((_heroIndex + 1) % _heroItems.length);
}

function startHeroTimer() {
  stopHeroTimer();
  _heroTimer = setInterval(heroNext, HERO_INTERVAL);
}
function stopHeroTimer() {
  clearInterval(_heroTimer);
  _heroTimer = null;
}

async function loadHero(tab, mediaType) {
  _heroTab = tab || _heroTab;
  _heroMediaType = mediaType !== undefined ? mediaType : _heroMediaType;

  heroSpotlight.classList.remove('hidden');

  // Update tab active state
  heroTabRow.querySelectorAll('.hero-tab').forEach(t =>
    t.classList.toggle('active', t.dataset.htab === _heroTab)
  );

  stopHeroTimer();
  _heroIndex = 0;

  // Build slides (show previous while loading)
  const items = await fetchHeroItems(_heroTab, _heroMediaType);
  if (!items.length) { heroSpotlight.classList.add('hidden'); return; }
  _heroItems = items;

  // Rebuild slide backgrounds
  heroSlides.innerHTML = '';
  items.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'hero-slide';
    slide.style.backgroundImage = `url(${IMG_BASE}w1280${item.backdrop_path})`;
    heroSlides.appendChild(slide);
  });

  // Rebuild dots
  heroDots.innerHTML = '';
  items.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => { stopHeroTimer(); showHeroSlide(i); startHeroTimer(); });
    heroDots.appendChild(dot);
  });

  showHeroSlide(0);
  startHeroTimer();
}

function hideHero() {
  stopHeroTimer();
  heroSpotlight.classList.add('hidden');
}

// Hero tab clicks
heroTabRow.addEventListener('click', e => {
  const tab = e.target.closest('.hero-tab');
  if (!tab || tab.classList.contains('active')) return;
  const htab = tab.dataset.htab;
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.section === htab));
  document.querySelectorAll('.sidebar-nav-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.section === htab)
  );
  currentSection = htab;
  loadHero(htab, _heroMediaType);
  loadCategoryRows();
});

// Hero details btn
heroDetailsBtn.addEventListener('click', () => {
  if (_heroCurrentItem) openDetail(_heroCurrentItem.id, _heroCurrentItem._mediaType);
});

// ─── Category rows / grid toggle ─────────────────────────────────────────────
function showCategoryRows() {
  searchSection.classList.remove('hidden');
  catBackBtn.classList.add('hidden');
  categoryRows.classList.remove('hidden');
  document.getElementById('sectionHeader').classList.add('hidden');
  document.getElementById('upcomingFilter').classList.add('hidden');
  movieGrid.classList.add('hidden');
  loadMoreWrap.classList.add('hidden');
  sortBar.classList.add('hidden');
  currentCat = null;
  // Sync hero tab with current section if it's a hero-compatible section
  const heroSection = (currentSection === 'trending' || currentSection === 'popular' || currentSection === 'toprated')
    ? currentSection : _heroTab;
  loadHero(heroSection, _heroMediaType);
}

function showGrid() {
  hideHero();
  searchSection.classList.remove('hidden');
  catBackBtn.classList.add('hidden');
  categoryRows.classList.add('hidden');
  document.getElementById('sectionHeader').classList.remove('hidden');
  movieGrid.classList.remove('hidden');
  // Hide filter when on Movies/Shows mode (currentMedia set), or when not on a filter-eligible section
  const filterEligible = currentSection === 'upcoming' || currentSection === 'favorites' || currentSection === 'airing';
  if (!filterEligible || currentMedia) {
    document.getElementById('upcomingFilter').classList.add('hidden');
  }
}

// ─── Sections ─────────────────────────────────────────────────────────────────
async function loadSection(section, page = 1) {
  showGrid();
  sortBar.classList.add('hidden');
  currentCat = null;
  currentSection = section;
  if (page === 1) renderSkeletons();

  const mt = currentMedia;
  let endpoint = '', title = '';

  if (mt === 'movie') {
    switch (section) {
      case 'trending': endpoint = '/trending/movie/week'; title = 'Trending Movies';    break;
      case 'popular':  endpoint = '/movie/popular';       title = 'Popular Movies';     break;
      case 'toprated': endpoint = '/movie/top_rated';     title = 'Top Rated Movies';   break;
      case 'upcoming': endpoint = '/movie/upcoming';      title = 'Upcoming Movies';    break;
      case 'airing':   endpoint = '/movie/now_playing';   title = 'Now Playing Movies'; break;
    }
  } else {
    switch (section) {
      case 'trending': endpoint = '/trending/tv/week'; title = 'Trending Shows';         break;
      case 'popular':  endpoint = '/tv/popular';       title = 'Popular Shows';           break;
      case 'toprated': endpoint = '/tv/top_rated';     title = 'Top Rated Shows';         break;
      case 'upcoming': endpoint = '/tv/on_the_air';    title = 'Upcoming Shows';          break;
      case 'airing':   endpoint = '/tv/on_the_air';    title = 'Currently Airing Shows';  break;
    }
  }

  sectionTitle.textContent = title;

  // For upcoming on Movies page, use discover with a broader future date window
  if (section === 'upcoming' && mt === 'movie') {
    const today = new Date().toISOString().slice(0, 10);
    const future = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000 * 2).toISOString().slice(0, 10);
    const data = await apiFetch('/discover/movie', {
      sort_by: 'popularity.desc',
      'primary_release_date.gte': today,
      'primary_release_date.lte': future,
      without_genres: '10749',
      page: page === 1 ? 1 : page,
    });
    if (!data) return;
    totalPages = data.total_pages || 1;
    const items = page === 1 ? shuffle([...data.results]) : data.results;
    renderItems(items, page > 1, mt);
    setLoadMoreLoading(false);
    return;
  }

  const fetchPage = page === 1 ? randomPage() : page;
  const data = await apiFetch(endpoint, { page: fetchPage, without_genres: '10749' });
  if (!data) return;

  totalPages = data.total_pages || 1;
  const shuffled = page === 1 ? shuffle([...data.results]) : data.results;
  renderItems(shuffled, page > 1, mt);
  setLoadMoreLoading(false);
}

async function loadSearch(query, page = 1) {
  showGrid();
  sortBar.classList.add('hidden');
  currentCat = null;
  currentSection = 'search';
  currentQuery   = query;
  if (page === 1) renderSkeletons();

  sectionTitle.textContent = `Results for "${query}"`;

  const endpoint = currentMedia === 'tv' ? '/search/tv' : '/search/movie';
  const data = await apiFetch(endpoint, { query, page });
  if (!data) return;

  totalPages = data.total_pages || 1;
  renderItems(data.results, page > 1, currentMedia);
  setLoadMoreLoading(false);
}

async function loadByGenre(genreId, genreName, page = 1) {
  showGrid();
  sortBar.classList.add('hidden');
  currentCat = null;
  currentSection = 'genre';
  currentGenre   = genreId;
  if (page === 1) renderSkeletons();

  sectionTitle.textContent = genreName;
  const endpoint = currentMedia === 'tv' ? '/discover/tv' : '/discover/movie';
  const data = await apiFetch(endpoint, { with_genres: genreId, sort_by: 'popularity.desc', page });
  if (!data) return;

  totalPages = data.total_pages || 1;
  renderItems(data.results, page > 1, currentMedia);
  setLoadMoreLoading(false);
}

let _favFilter = 'all'; // 'all' | 'movie' | 'tv'

function loadFavorites() {
  showGrid();
  currentSection = 'favorites';
  searchSection.classList.add('hidden');

  // If on Movies or Shows mode, hide dropdown and force filter to match
  const filterEl = document.getElementById('upcomingFilter');
  if (currentMedia) {
    _favFilter = currentMedia;
    filterEl.classList.add('hidden');
  } else {
    filterEl.classList.remove('hidden');
  }

  // Sync dropdown value
  const sel = document.getElementById('filterDropdownSelect');
  if (sel) {
    // Ensure "All" option exists
    if (!sel.querySelector('option[value="all"]')) {
      const allOpt = document.createElement('option');
      allOpt.value = 'all'; allOpt.textContent = 'All';
      sel.insertBefore(allOpt, sel.firstChild);
    }
    sel.value = _favFilter;
  }
  if (window._cfilterSetActive) window._cfilterSetActive(_favFilter);

  const filtered = _favFilter === 'all'
    ? favorites
    : favorites.filter(f => (f._mediaType || 'movie') === _favFilter);

  sectionTitle.textContent = 'Favorites';
  sectionCount.textContent = `${filtered.length} saved`;
  loadMoreWrap.classList.add('hidden');
  movieGrid.innerHTML = '';

  if (filtered.length === 0) {
    movieGrid.innerHTML = '<div class="no-results">' + (_favFilter === 'all' ? 'Nothing in your favorites yet.' : 'No ' + (_favFilter === 'movie' ? 'movies' : 'shows') + ' in your favorites yet.') + '</div>';
    return;
  }
  filtered.forEach((item, i) => {
    const card = buildCard(item, item._mediaType || 'movie');
    card.style.animationDelay = `${i * 0.03}s`;
    movieGrid.appendChild(card);
  });
}

// ─── Detail Modal ─────────────────────────────────────────────────────────────
async function openDetail(itemId, mediaType) {
  const mt = mediaType || currentMedia;
  currentItemId = itemId;
  detailOverlay.classList.remove('hidden');

  detailTitle.textContent    = 'Loading…';
  detailTagline.textContent  = '';
  detailOverview.textContent = '';
  detailGenres.innerHTML     = '';
  detailCast.innerHTML       = '';
  detailBackdrop.src         = '';
  detailPoster.src           = '';
  detailYear.textContent     = '';
  detailRuntime.textContent  = '';
  detailRating.textContent   = '';
  detailType.textContent     = '';
  detailTrailerBtn.classList.add('hidden');
  detailTvInfo.classList.add('hidden');
  detailMovieInfo.classList.add('hidden');
  detailSimilarWrap.classList.add('hidden');

  const apiBase = `${BASE_URL}/${mt}/${itemId}?api_key=${API_KEY}`;
  const [detail, credits, videos, similar] = await Promise.all([
    detailFetch(apiBase),
    detailFetch(`${BASE_URL}/${mt}/${itemId}/credits?api_key=${API_KEY}`),
    detailFetch(`${BASE_URL}/${mt}/${itemId}/videos?api_key=${API_KEY}`),
    detailFetch(`${BASE_URL}/${mt}/${itemId}/recommendations?api_key=${API_KEY}`),
  ]);

  if (!detail) { detailOverlay.classList.add('hidden'); return; }

  currentItemData = detail;
  currentItemData._mediaType = mt;

  detailBackdrop.src = detail.backdrop_path ? `${IMG_BASE}w1280${detail.backdrop_path}` : '';
  detailPoster.src   = detail.poster_path   ? `${IMG_BASE}w780${detail.poster_path}` : '';
  detailTitle.textContent   = getTitle(detail);
  detailTagline.textContent = detail.tagline || '';

  const dateStr = getDate(detail);
  detailYear.textContent = dateStr ? dateStr.slice(0, 4) : '—';

  if (mt === 'movie') {
    detailRuntime.textContent = detail.runtime ? `${detail.runtime} min` : '—';
    detailType.textContent = 'Movie';
    detailTvInfo.classList.add('hidden');
    const budget  = formatMoney(detail.budget);
    const revenue = formatMoney(detail.revenue);
    if (budget || revenue) {
      detailMovieInfo.classList.remove('hidden');
      detailBudgetWrap.style.display  = budget  ? '' : 'none';
      detailRevenueWrap.style.display = revenue ? '' : 'none';
      detailBudget.textContent  = budget  || '';
      detailRevenue.textContent = revenue || '';
    } else {
      detailMovieInfo.classList.add('hidden');
    }
  } else {
    const epRt = detail.episode_run_time;
    detailRuntime.textContent = (epRt && epRt.length > 0) ? `${epRt[0]} min/ep` : '—';
    detailType.textContent = 'TV Show';
    detailMovieInfo.classList.add('hidden');
    detailTvInfo.classList.remove('hidden');
    detailSeasons.textContent  = detail.number_of_seasons  || '—';
    detailEpisodes.textContent = detail.number_of_episodes || '—';
    detailStatus.textContent   = detail.status             || '—';
  }

  if (detail.vote_average && detail.vote_count > 0) {
    detailRating.textContent   = `★ ${detail.vote_average.toFixed(1)}`;
    detailRating.style.display = '';
  } else {
    detailRating.style.display = 'none';
  }

  detailOverview.textContent = detail.overview || 'No overview available.';
  detailGenres.innerHTML = (detail.genres || []).map(g => `<span class="genre-tag">${g.name}</span>`).join('');

  const cast = (credits?.cast || []).slice(0, 12);
  detailCast.innerHTML = cast.map(c => {
    const initials = c.name.split(' ').map(n => n[0]).slice(0, 2).join('');
    const photoSrc = c.profile_path ? `${IMG_BASE}w185${c.profile_path}` : '';
    return `
      <div class="cast-member">
        ${photoSrc
          ? `<img class="cast-photo" src="${photoSrc}" alt="${c.name}"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
             <div class="cast-photo cast-initials" style="display:none">${initials}</div>`
          : `<div class="cast-photo cast-initials">${initials}</div>`
        }
        <div class="cast-name">${c.name}</div>
        ${c.character ? `<div class="cast-char">${c.character}</div>` : ''}
      </div>`;
  }).join('');

  const trailer = (videos?.results || []).find(v => v.type === 'Trailer' && v.site === 'YouTube');
  if (trailer) {
    detailTrailerBtn.classList.remove('hidden');
    detailTrailerBtn.onclick = () => openTrailer(trailer.key);
  }

  let simItems = (similar?.results || []).filter(s => s.poster_path).slice(0, 10);

  // Fallback to /similar if recommendations returned nothing
  if (simItems.length === 0) {
    const fallback = await detailFetch(`${BASE_URL}/${mt}/${itemId}/similar?api_key=${API_KEY}`);
    simItems = (fallback?.results || []).filter(s => s.poster_path).slice(0, 10);
  }

  if (simItems.length > 0) {
    detailSimilarWrap.classList.remove('hidden');
    detailSimilarTrack.innerHTML = '';
    simItems.forEach(s => {
      const mini = document.createElement('div');
      mini.className = 'similar-card';
      mini.innerHTML = s.poster_path
        ? `<img src="${IMG_BASE}w185${s.poster_path}" alt="${getTitle(s)}" loading="lazy" />`
        : `<div class="similar-card-placeholder"></div>`;
      mini.title = getTitle(s);
      mini.addEventListener('click', () => openDetail(s.id, mt));
      detailSimilarTrack.appendChild(mini);
    });
  }

  updateFavBtn(itemId, mt);
  trapFocus(detailOverlay);
}

function closeDetail() {
  releaseFocus(detailOverlay);
  detailOverlay.classList.add('hidden');
}

function updateFavBtn(itemId, mt) {
  const isFav = favorites.some(f => f.id === itemId && f._mediaType === mt);
  detailFavBtn.textContent = isFav ? 'Saved' : 'Add to Favorites';
  detailFavBtn.classList.toggle('active', isFav);
}

function toggleFavorite(itemId, mt) {
  const idx = favorites.findIndex(f => f.id === itemId && f._mediaType === mt);
  if (idx > -1) {
    favorites.splice(idx, 1);
    showToast('Removed from favorites');
  } else if (currentItemData) {
    favorites.push({
      id:             currentItemData.id,
      title:          currentItemData.title,
      name:           currentItemData.name,
      release_date:   currentItemData.release_date,
      first_air_date: currentItemData.first_air_date,
      poster_path:    currentItemData.poster_path,
      vote_average:   currentItemData.vote_average,
      vote_count:     currentItemData.vote_count,
      _mediaType:     mt,
    });
    showToast('Added to favorites');
  }
  localStorage.setItem('cinexa_favs', JSON.stringify(favorites));
  updateFavBtn(itemId, mt);
  const isSaved = favorites.some(f => f.id === itemId && f._mediaType === mt);
  document.querySelectorAll(`.movie-card[data-id="${itemId}"][data-media="${mt}"], .row-card[data-id="${itemId}"][data-media="${mt}"]`).forEach(card => {
    card.classList.toggle('is-fav', isSaved);
    // update meta row saved tag
    const metaRow = card.querySelector('.card-meta-row');
    if (metaRow) {
      let savedSpan = metaRow.querySelector('.card-meta-saved');
      let savedDot  = metaRow.querySelector('.card-meta-saved-dot');
      if (isSaved && !savedSpan) {
        const dot = document.createElement('span');
        dot.className = 'card-meta-dot card-meta-saved-dot';
        dot.textContent = '·';
        const span = document.createElement('span');
        span.className = 'card-meta-saved';
        span.textContent = 'Saved';
        metaRow.appendChild(dot);
        metaRow.appendChild(span);
      } else if (!isSaved && savedSpan) {
        if (savedDot) savedDot.remove();
        savedSpan.remove();
      }
    }
  });
  if (currentSection === 'favorites') loadFavorites();
}

// ─── Share ────────────────────────────────────────────────────────────────────
function shareItem() {
  if (!currentItemData) return;
  const title  = getTitle(currentItemData);
  const tmdbId = currentItemData.id;
  const mt     = currentItemData._mediaType || 'movie';
  const url    = `https://www.themoviedb.org/${mt}/${tmdbId}`;
  if (navigator.share) {
    navigator.share({ title, text: `Check out "${title}" on TMDB`, url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url).then(() => showToast('Link copied! '));
  }
}

// ─── Trailer ──────────────────────────────────────────────────────────────────
function openTrailer(youtubeKey) {
  window.open(`https://www.youtube.com/watch?v=${youtubeKey}`, '_blank', 'noopener');
}
function closeTrailer() {
  trailerFrame.src = '';
  releaseFocus(trailerOverlay);
  trailerOverlay.classList.add('hidden');
}

// ─── Genres ───────────────────────────────────────────────────────────────────
async function loadGenres() {
  const endpoint = currentMedia === 'tv' ? '/genre/tv/list' : '/genre/movie/list';
  const data = await directFetch(endpoint);
  if (!data || !data.genres) return;

  genreMap = {};
  data.genres.forEach(g => { genreMap[g.id] = g.name; });

  genreBar.innerHTML = data.genres.map(g =>
    `<button class="genre-chip" data-genre-id="${g.id}" data-genre-name="${g.name}">${g.name}</button>`
  ).join('');

  genreBar.querySelectorAll('.genre-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const isActive = chip.classList.contains('active');
      genreBar.querySelectorAll('.genre-chip').forEach(c => c.classList.remove('active'));
      navBtns.forEach(b => b.classList.remove('active'));
      if (isActive) { currentGenre = null; showCategoryRows(); return; }
      chip.classList.add('active');
      loadByGenre(chip.dataset.genreId, chip.dataset.genreName);
    });
  });
}

// ─── Media Toggle ─────────────────────────────────────────────────────────────
mediaToggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const mt = btn.dataset.media;
    if (mt === currentMedia) return;
    mediaToggleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMedia = mt;
    _heroMediaType = mt;
    // In Movies mode: standalone btn = "Now Playing"; in Shows mode: keep as "Airing" (currently airing TV)
    // upcomingBtn always stays "Upcoming" in both modes
    upcomingBtn.textContent = 'Upcoming';
    document.querySelectorAll('.nav-btn[data-section="airing"], .sidebar-nav-btn[data-section="airing"]')
      .forEach(b => {
        b.style.display = '';
        b.textContent   = mt === 'tv' ? 'Airing' : 'Now Playing';
      });
    searchInput.value = '';
    lastQuery = '';
    searchClear.classList.add('hidden');
    currentGenre = null;
    // Preserve the active section when switching media type
    const catRowSections  = ['trending', 'popular', 'toprated'];
    const gridSections    = ['upcoming', 'airing', 'toprated'];
    const preserveSection = currentSection !== 'home' ? currentSection : null;
    if (preserveSection) {
      navBtns.forEach(b => b.classList.toggle('active', b.dataset.section === preserveSection));
      document.querySelectorAll('.sidebar-nav-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.section === preserveSection)
      );
      if (preserveSection === 'favorites') {
        loadGenres().then(() => loadFavorites());
      } else if (catRowSections.includes(preserveSection)) {
        loadHero(preserveSection, mt);
        Promise.all([loadGenres(), loadCategoryRows()]);
        showCategoryRows();
      } else {
        // upcoming, airing, toprated in grid view — reload with new media type
        loadGenres().then(() => {
          if (preserveSection === 'airing') { _airingFilter = mt; loadAiringDefault(); }
          else loadSection(preserveSection);
        });
      }
    } else {
      navBtns.forEach(b => b.classList.remove('active'));
      currentSection = 'home';
      Promise.all([loadGenres(), loadCategoryRows()]);
      showCategoryRows();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ─── Focus Trap ───────────────────────────────────────────────────────────────
function trapFocus(element) {
  const focusable = element.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  element._trapHandler = function(e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
    else            { if (document.activeElement === last)  { e.preventDefault(); first.focus(); } }
  };
  element.addEventListener('keydown', element._trapHandler);
  first?.focus();
}
function releaseFocus(element) {
  if (element._trapHandler) {
    element.removeEventListener('keydown', element._trapHandler);
    delete element._trapHandler;
  }
}

// ─── Upcoming (curated static list + TMDB search fallback) ────────────────────
const TODAY      = new Date().toISOString().slice(0, 10);
const YEAR_END   = new Date().getFullYear() + '-12-31';
const ADULT_KEYWORDS = /hentai|porn|sex|adult|erotic|xxx|nude|naked|nsfw/i;

function isClean(item) {
  if (!item.poster_path) return false;
  const title = (item.title || item.name || '').toLowerCase();
  return !ADULT_KEYWORDS.test(title);
}

// ─── Upcoming (today+) via TMDB discover ──────────────────────────────────────

let _upcomingFilter    = 'all'; // 'all' | 'movie' | 'tv'
let _upcomingMoviePage = 1;
let _upcomingTvPage    = 1;
let _upcomingMovieMax  = 1;
let _upcomingTvMax     = 1;

async function _fetchUpcomingPage(mediaType, page) {
  const today    = new Date().toISOString().slice(0, 10);
  const endpoint = mediaType === 'movie' ? '/discover/movie' : '/discover/tv';
  const dateKey  = mediaType === 'movie' ? 'primary_release_date.gte' : 'first_air_date.gte';
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.set('api_key',        API_KEY);
  url.searchParams.set('include_adult',  'false');
  url.searchParams.set('sort_by',        'popularity.desc');
  url.searchParams.set(dateKey,          today);          // always from today onwards
  url.searchParams.set('without_genres', '10749');
  url.searchParams.set('page',           page);
  try {
    const res  = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    // Extra client-side filter: only keep items whose date is >= today
    if (data?.results) {
      data.results = data.results.filter(item => {
        const d = item.release_date || item.first_air_date || '';
        return !d || d >= today;
      });
    }
    return data;
  } catch { return null; }
}

async function loadUpcomingDefault(append = false) {
  if (!append) window.scrollTo({ top: 0, behavior: 'smooth' });
  showGrid();
  sortBar.classList.add('hidden');
  currentCat = null;
  currentSection = 'upcoming';

  // If on Movies or Shows mode, hide dropdown and force filter to match
  const filterEl = document.getElementById('upcomingFilter');
  if (currentMedia) {
    _upcomingFilter = currentMedia;
    filterEl.classList.add('hidden');
  } else {
    filterEl.classList.remove('hidden');
  }
  const sel = document.getElementById('filterDropdownSelect');
  if (sel) sel.value = _upcomingFilter;
  if (window._cfilterSetActive) window._cfilterSetActive(_upcomingFilter);

  const isMovie = _upcomingFilter === 'movie';
  const isTv    = _upcomingFilter === 'tv';
  const isAll   = _upcomingFilter === 'all';

  if (!append) {
    _upcomingMoviePage = 1;
    _upcomingTvPage    = 1;
    _upcomingMovieMax  = 1;
    _upcomingTvMax     = 1;
    movieGrid.innerHTML = '';
    renderSkeletons();
  }

  sectionTitle.textContent = isAll ? 'Upcoming' : isMovie ? 'Upcoming Movies' : 'Upcoming Shows';

  // Fetch all needed data first, then clear skeletons and render
  let movieData = null, tvData = null;
  if (isMovie || isAll) movieData = await _fetchUpcomingPage('movie', _upcomingMoviePage);
  if (isTv    || isAll) tvData    = await _fetchUpcomingPage('tv',    _upcomingTvPage);

  if (!append) movieGrid.innerHTML = ''; // clear skeletons now that data is ready

  if (movieData) {
    _upcomingMovieMax = movieData.total_pages || 1;
    (movieData.results || []).forEach(item => {
      item._mediaType = 'movie';
      movieGrid.appendChild(buildCard(item, 'movie'));
    });
  }
  if (tvData) {
    _upcomingTvMax = tvData.total_pages || 1;
    (tvData.results || []).forEach(item => {
      item._mediaType = 'tv';
      movieGrid.appendChild(buildCard(item, 'tv'));
    });
  }

  movieGrid.classList.remove('hidden');

  const movieHasMore = (isMovie || isAll) && _upcomingMoviePage < _upcomingMovieMax;
  const showHasMore  = (isTv    || isAll) && _upcomingTvPage    < _upcomingTvMax;
  loadMoreWrap.classList.toggle('hidden', !(movieHasMore || showHasMore));
  setLoadMoreLoading(false);
}

// upcomingFilter click is handled in the Home Section block below

// ─── Airing (default page — what's on right now) ──────────────────────────────
let _airingFilter = 'all'; // 'all' | 'movie' | 'tv'
let _airingMoviePage = 1;
let _airingTvPage    = 1;
let _airingMovieMax  = 1;
let _airingTvMax     = 1;

async function loadAiringDefault(append = false) {
  if (!append) window.scrollTo({ top: 0, behavior: 'smooth' });
  showGrid();
  sortBar.classList.add('hidden');
  currentCat = null;
  currentSection = 'airing';

  const filterEl = document.getElementById('upcomingFilter');
  if (currentMedia) {
    // Movies/Shows mode: force filter, hide dropdown
    _airingFilter = currentMedia;
    filterEl.classList.add('hidden');
  } else {
    // Default home page: always show dropdown regardless of chosen filter
    filterEl.classList.remove('hidden');
  }
  if (window._cfilterSetActive) window._cfilterSetActive(_airingFilter);

  if (!append) {
    _airingMoviePage = 1;
    _airingTvPage    = 1;
    renderSkeletons();
  }

  sectionTitle.textContent = _airingFilter === 'movie' ? 'Now Playing' : _airingFilter === 'tv' ? 'Currently Airing' : 'Now Playing & Airing';

  let items = [];

  if (_airingFilter === 'movie' || _airingFilter === 'all') {
    const data = await apiFetch('/movie/now_playing', { page: _airingMoviePage });
    _airingMovieMax = data?.total_pages || 1;
    const movieItems = (data?.results || []).filter(i => isClean(i)).map(i => ({ ...i, _mediaType: 'movie' }));
    items = [...items, ...movieItems];
  }

  if (_airingFilter === 'tv' || _airingFilter === 'all') {
    const data = await apiFetch('/tv/on_the_air', { page: _airingTvPage });
    _airingTvMax = data?.total_pages || 1;
    const tvItems = (data?.results || []).filter(i => isClean(i)).map(i => ({ ...i, _mediaType: 'tv' }));
    items = [...items, ...tvItems];
  }

  // For 'all', interleave movies and shows sorted by popularity
  if (_airingFilter === 'all') {
    items.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  }

  if (!append) movieGrid.innerHTML = '';
  items.forEach(item => movieGrid.appendChild(buildCard(item, item._mediaType)));
  movieGrid.classList.remove('hidden');

  const hasMore = _airingFilter === 'movie'
    ? _airingMoviePage < _airingMovieMax
    : _airingFilter === 'tv'
    ? _airingTvPage < _airingTvMax
    : _airingMoviePage < _airingMovieMax || _airingTvPage < _airingTvMax;
  loadMoreWrap.classList.toggle('hidden', !hasMore);
  setLoadMoreLoading(false);
}

// ─── Home Section (mixed movies + shows, no media type forced) ────────────────
let _homeSectionFilter = 'movie'; // 'movie' | 'tv' — sub-filter inside home sections
let _homeSectionPage   = 1;
let _homeSectionMax    = 1;

async function loadSectionHome(section, append = false) {
  showGrid();
  sortBar.classList.add('hidden');
  currentCat     = null;
  currentSection = 'home_' + section;
  // Keep nav-btn highlight in sync
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.section === section));

  // Show the Movies/Shows filter (reuse upcomingFilter UI)
  const filterEl = document.getElementById('upcomingFilter');
  filterEl.classList.remove('hidden');
  const sel2 = document.getElementById('filterDropdownSelect');
  if (sel2) sel2.value = _homeSectionFilter;
  if (window._cfilterSetActive) window._cfilterSetActive(_homeSectionFilter);

  if (!append) {
    _homeSectionPage = 1;
    renderSkeletons();
  }

  const isMovie = _homeSectionFilter === 'movie';
  const mt = isMovie ? 'movie' : 'tv';

  let endpoint = '', title = '';
  if (isMovie) {
    switch (section) {
      case 'trending': endpoint = '/trending/movie/week'; title = 'Trending Movies';    break;
      case 'popular':  endpoint = '/movie/popular';       title = 'Popular Movies';     break;
      case 'toprated': endpoint = '/movie/top_rated';     title = 'Top Rated Movies';   break;
    }
  } else {
    switch (section) {
      case 'trending': endpoint = '/trending/tv/week';    title = 'Trending Shows';     break;
      case 'popular':  endpoint = '/tv/popular';          title = 'Popular Shows';      break;
      case 'toprated': endpoint = '/tv/top_rated';        title = 'Top Rated Shows';    break;
    }
  }

  sectionTitle.textContent = title;

  const fetchPage = _homeSectionPage === 1 ? randomPage() : _homeSectionPage;
  const data = await apiFetch(endpoint, { page: fetchPage, without_genres: '10749' });
  if (!data) return;

  _homeSectionMax = data.total_pages || 1;
  const items = _homeSectionPage === 1 ? shuffle([...data.results]) : data.results;

  if (!append) movieGrid.innerHTML = '';
  items.filter(isClean).forEach((item, i) => {
    const card = buildCard(item, mt);
    card.style.animationDelay = `${(i % 20) * 0.03}s`;
    movieGrid.appendChild(card);
  });
  movieGrid.classList.remove('hidden');

  loadMoreWrap.classList.toggle('hidden', _homeSectionPage >= _homeSectionMax);
  setLoadMoreLoading(false);
}

// Wire up Movies / Shows filter for home sections (reuses upcomingFilter buttons)
// We patch the existing upcomingFilter click handler to cover both cases
// ── Custom Filter Dropdown Logic ──────────────────────────────────────────────
(function() {
  const trigger = document.getElementById('cfilterTrigger');
  const menu    = document.getElementById('cfilterMenu');
  const label   = document.getElementById('cfilterLabel');
  if (!trigger || !menu) return;

  function setActive(val) {
    menu.querySelectorAll('.cfilter-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.value === val);
    });
    const activeOpt = menu.querySelector(`.cfilter-option[data-value="${val}"]`);
    if (activeOpt) {
      label.textContent = activeOpt.querySelector('.cfilter-opt-label').textContent;
      trigger.querySelector('.cfilter-icon').textContent = activeOpt.dataset.icon;
    }
  }

  function openMenu() {
    trigger.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
  }

  function closeMenu() {
    trigger.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  }

  trigger.addEventListener('click', e => {
    e.stopPropagation();
    menu.classList.contains('open') ? closeMenu() : openMenu();
  });

  menu.addEventListener('click', e => {
    const opt = e.target.closest('.cfilter-option');
    if (!opt) return;
    const val = opt.dataset.value;
    setActive(val);
    closeMenu();
    // Fire logic
    if (currentSection === 'favorites') {
      _favFilter = val;
      loadFavorites();
    } else if (currentSection === 'upcoming') {
      _upcomingFilter = val; // 'all' | 'movie' | 'tv'
      loadUpcomingDefault();
    } else if (currentSection === 'airing') {
      _airingFilter = val;
      loadAiringDefault();
    } else if (currentSection.startsWith('home_')) {
      _homeSectionFilter = val === 'all' ? 'movie' : val;
      loadSectionHome(currentSection.replace('home_', ''));
    }
  });

  document.addEventListener('click', () => closeMenu());
  menu.addEventListener('click', e => e.stopPropagation());

  // expose setter for sync calls
  window._cfilterSetActive = setActive;
})();

// ─── Nav Buttons ──────────────────────────────────────────────────────────────
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    genreBar.querySelectorAll('.genre-chip').forEach(c => c.classList.remove('active'));
    currentGenre = null;
    const section = btn.dataset.section;

    // On default home page (no media type selected), keep context and use home loaders
    if (!currentMedia) {
      if (section === 'upcoming')  { _upcomingFilter = 'all'; loadUpcomingDefault(); return; }
      if (section === 'airing')    { _airingFilter = 'all'; loadAiringDefault();   return; }
      if (section === 'favorites') { loadFavorites();       return; }
      // trending / popular / toprated — reload category rows with new sort
      currentSection = section;
      loadHero(section, null);
      showCategoryRows();
      loadCategoryRows();
      return;
    }

    // On Movies or Shows page — trending/popular/toprated reloads categories with correct sort
    if (section === 'trending' || section === 'popular' || section === 'toprated') {
      currentSection = section;
      showCategoryRows();
      loadHero(section, currentMedia);
      loadCategoryRows();
      return;
    }

    if (section === 'favorites') loadFavorites();
    // Shows > Upcoming → use curated shows list (same as default Upcoming > Shows filter)
    else if (section === 'upcoming' && currentMedia === 'tv') {
      _upcomingFilter = 'tv';
      loadUpcomingDefault();
    }
    // Movies > Upcoming → use curated movies list (same as default Upcoming > Movies filter)
    else if (section === 'upcoming' && currentMedia === 'movie') {
      _upcomingFilter = 'movie';
      loadUpcomingDefault();
    }
    // Now Playing / Airing → use loadAiringDefault with media type forced
    else if (section === 'airing') {
      _airingFilter = currentMedia;
      loadAiringDefault();
    }
    else loadSection(section);
  });
});

// ─── Search ───────────────────────────────────────────────────────────────────
let searchTimer;
let lastQuery = '';

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim();
  searchClear.classList.toggle('hidden', !q);
  genreBar.classList.toggle('search-active', !!q);
  clearTimeout(searchTimer);
  if (q === lastQuery) return;
  lastQuery = q;
  if (!q) { navBtns.forEach(b => b.classList.remove('active')); showCategoryRows(); return; }
  searchTimer = setTimeout(() => {
    navBtns.forEach(b => b.classList.remove('active'));
    genreBar.querySelectorAll('.genre-chip').forEach(c => c.classList.remove('active'));
    loadSearch(q);
  }, 400);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  lastQuery = '';
  searchClear.classList.add('hidden');
  genreBar.classList.remove('search-active');
  navBtns.forEach(b => b.classList.remove('active'));
  showCategoryRows();
});

// ─── Load More ────────────────────────────────────────────────────────────────
loadMoreBtn.addEventListener('click', () => {
  setLoadMoreLoading(true);
  // Default page upcoming — page-based pagination via discover API
  if (currentSection === 'upcoming' && currentMedia === null) {
    if (_upcomingFilter === 'movie') _upcomingMoviePage++;
    else if (_upcomingFilter === 'tv') _upcomingTvPage++;
    else { _upcomingMoviePage++; _upcomingTvPage++; }
    loadUpcomingDefault(true);
    return;
  }
  // Shows/Movies upcoming (routed through loadUpcomingDefault with filter set)
  if (currentSection === 'upcoming' && currentMedia !== null) {
    if (_upcomingFilter === 'movie') _upcomingMoviePage++;
    else if (_upcomingFilter === 'tv') _upcomingTvPage++;
    else { _upcomingMoviePage++; _upcomingTvPage++; }
    loadUpcomingDefault(true);
    return;
  }
  // Airing (both default page and Movies/Shows mode) — paginate via loadAiringDefault
  if (currentSection === 'airing') {
    if (_airingFilter === 'movie') _airingMoviePage++;
    else if (_airingFilter === 'tv') _airingTvPage++;
    else { _airingMoviePage++; _airingTvPage++; }
    loadAiringDefault(true);
    return;
  }
  // Home section (trending/popular/toprated without media type selected)
  if (currentSection.startsWith('home_') && currentMedia === null) {
    _homeSectionPage++;
    loadSectionHome(currentSection.replace('home_', ''), true);
    return;
  }
  currentPage++;
  if (currentSection === 'search') {
    loadSearch(currentQuery, currentPage);
  } else if (currentSection === 'genre') {
    loadByGenre(currentGenre, sectionTitle.textContent, currentPage);
  } else if (currentSection === 'category') {
    const cats = currentMedia === 'tv' ? TV_CATEGORIES : MOVIE_CATEGORIES;
    const cat  = cats.find(c => c.label === sectionTitle.textContent);
    if (cat) _fetchCategoryPage(cat, currentPage);
  } else {
    loadSection(currentSection, currentPage);
  }
});

// ─── Home Button ──────────────────────────────────────────────────────────────
const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', () => {
  homeBtn.classList.remove('clicking');
  void homeBtn.offsetWidth;
  homeBtn.classList.add('clicking');
  setTimeout(() => homeBtn.classList.remove('clicking'), 450);

  // Reset to true default — no media type selected
  currentMedia = null;
  currentSection = 'home';
  _heroMediaType = null;
  _heroTab = 'trending';
  _homeSectionFilter = 'movie';
  _homeSectionPage   = 1;
  mediaToggleBtns.forEach(b => b.classList.remove('active'));
  upcomingBtn.textContent = 'Upcoming';
  // Restore standalone Airing button to default label
  document.querySelectorAll('.nav-btn[data-section="airing"], .sidebar-nav-btn[data-section="airing"]')
    .forEach(b => { b.style.display = ''; b.textContent = 'Now Playing & Airing'; });

  searchInput.value = '';
  lastQuery = '';
  searchClear.classList.add('hidden');
  navBtns.forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.sidebar-nav-btn').forEach(b => b.classList.remove('active'));
  genreBar.querySelectorAll('.genre-chip').forEach(c => c.classList.remove('active'));
  currentGenre = null;

  Promise.all([loadGenres(), loadCategoryRows()]);
  showCategoryRows();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── Back to Top ──────────────────────────────────────────────────────────────
window.addEventListener('scroll', () => { backTopBtn.classList.toggle('visible', window.scrollY > 400); });
backTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

catBackBtn.addEventListener('click', () => {
  catBackBtn.classList.add('hidden');
  const sec = _prevSection || 'home';
  if (sec === 'home' || sec === 'trending' || sec === 'popular' || sec === 'toprated') {
    const btn = document.querySelector(`.nav-btn[data-section="${sec === 'home' ? 'trending' : sec}"]`);
    if (btn) { btn.click(); } else { showCategoryRows(); }
  } else {
    const btn = document.querySelector(`.nav-btn[data-section="${sec}"]`);
    if (btn) { btn.click(); } else { showCategoryRows(); }
  }
  _prevSection = 'home';
});

// ─── Modal Events ─────────────────────────────────────────────────────────────
similarPrev.addEventListener('click', () => { detailSimilarTrack.scrollBy({ left: -300, behavior: 'smooth' }); });
similarNext.addEventListener('click', () => { detailSimilarTrack.scrollBy({ left:  300, behavior: 'smooth' }); });
detailClose.addEventListener('click', closeDetail);
detailOverlay.addEventListener('click', e => { if (e.target === detailOverlay) closeDetail(); });
detailFavBtn.addEventListener('click', () => toggleFavorite(currentItemId, currentItemData?._mediaType || currentMedia));
detailShareBtn.addEventListener('click', shareItem);
trailerClose.addEventListener('click', closeTrailer);
trailerOverlay.addEventListener('click', e => { if (e.target === trailerOverlay) closeTrailer(); });

// ─── Keyboard Shortcuts ───────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!trailerOverlay.classList.contains('hidden')) { closeTrailer(); return; }
    if (!detailOverlay.classList.contains('hidden'))  { closeDetail();  return; }
  }
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
});

// ─── Hover Preview Card ───────────────────────────────────────────────────────
let _hoverTimer = null;
let _activePreview = null;

function attachHoverPreview(card, item, mediaType) {
  card.addEventListener('mouseenter', () => {
    _hoverTimer = setTimeout(async () => {
      dismissHoverPreview();
      const mt = mediaType || currentMedia;
      const [detail, credits] = await Promise.all([
        detailFetch(`${BASE_URL}/${mt}/${item.id}?api_key=${API_KEY}`),
        detailFetch(`${BASE_URL}/${mt}/${item.id}/credits?api_key=${API_KEY}`),
      ]);
      if (!detail) return;

      const preview = document.createElement('div');
      preview.className = 'hover-card';

      const backdrop = detail.backdrop_path
        ? `<img class="hover-card-backdrop" src="${IMG_BASE}w780${detail.backdrop_path}" alt="" />`
        : `<div class="hover-card-backdrop-empty"></div>`;

      const genres  = (detail.genres || []).slice(0, 3).map(g => `<span class="genre-tag">${g.name}</span>`).join('');
      const cast    = (credits?.cast || []).slice(0, 4).map(c => c.name).join(', ');
      const rating  = detail.vote_average && detail.vote_count > 0
        ? `<span class="meta-badge meta-rating">★ ${detail.vote_average.toFixed(1)}</span>` : '';
      const year    = getYear(detail);
      let runtimeStr = '';
      if (mt === 'movie') runtimeStr = detail.runtime ? `${detail.runtime} min` : '';
      else runtimeStr = detail.number_of_seasons ? `${detail.number_of_seasons} seasons` : '';

      preview.innerHTML = `
        <div class="hover-card-media">
          ${backdrop}
          <div class="hover-card-fade"></div>
          <div class="hover-card-type-badge">${mt === 'tv' ? 'Show' : 'Movie'}</div>
        </div>
        <div class="hover-card-body">
          ${detail.tagline ? `<p class="hover-card-tagline">${detail.tagline}</p>` : ''}
          <h3 class="hover-card-title">${getTitle(detail)}</h3>
          <div class="hover-card-meta">
            <span class="meta-badge">${year}</span>
            ${runtimeStr ? `<span class="meta-badge">${runtimeStr}</span>` : ''}
            ${rating}
            <span class="meta-badge">${mt === 'tv' ? 'TV' : 'Film'}</span>
          </div>
          <div class="hover-card-genres">${genres}</div>
          <p class="hover-card-overview">${(detail.overview || '').slice(0, 220)}${(detail.overview || '').length > 220 ? '…' : ''}</p>
          ${cast ? `<p class="hover-card-cast"><strong>Cast:</strong> ${cast}</p>` : ''}
          <div class="hover-card-actions">
            <button class="hover-btn-detail">More Info</button>
          </div>
        </div>`;

      preview.querySelector('.hover-btn-detail').addEventListener('click', (e) => {
        e.stopPropagation();
        dismissHoverPreview();
        openDetail(item.id, mt);
      });

      document.body.appendChild(preview);
      _activePreview = preview;

      const rect = card.getBoundingClientRect();
      const pw = 300;
      let left = rect.left;
      let top  = rect.top + rect.height / 2 - 200;
      if (left + pw > window.innerWidth - 8) left = window.innerWidth - pw - 8;
      if (left < 8) left = 8;
      if (top + 400 > window.innerHeight - 8) top = window.innerHeight - 408;
      if (top < 8) top = 8;

      preview.style.left  = left + 'px';
      preview.style.top   = top + 'px';
      preview.style.width = pw + 'px';
      requestAnimationFrame(() => preview.classList.add('hover-card--visible'));
    }, 900);
  });

  card.addEventListener('mouseleave', () => {
    clearTimeout(_hoverTimer);
    setTimeout(() => {
      if (_activePreview && !_activePreview.matches(':hover')) dismissHoverPreview();
    }, 150);
  });
}

function dismissHoverPreview() {
  clearTimeout(_hoverTimer);
  if (_activePreview) { _activePreview.remove(); _activePreview = null; }
}

document.addEventListener('mouseover', (e) => {
  if (_activePreview && !_activePreview.contains(e.target) && !e.target.closest('.row-card') && !e.target.closest('.movie-card')) {
    dismissHoverPreview();
  }
});

// ─── MCU List Fetch ───────────────────────────────────────────────────────────
// Fetches each MCU entry by direct ID (objects) or title search (strings).
async function _fetchMCUList() {
  const token = ++fetchToken;
  sectionCount.textContent = '';
  loadMoreWrap.classList.add('hidden');
  movieGrid.innerHTML = '';
  showLoading(true);
  hideError();

  try {
    const results = await Promise.all(
      MCU_LIST.map(async (entry, idx) => {
        const norm = s => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');

        // Object entry: fetch directly by TMDB id — no ambiguity
        if (typeof entry === 'object') {
          const data = await directFetch(`/${entry.media}/${entry.id}`);
          if (!data) return null;
          data._mediaType = entry.media;
          data._listTitle = entry.title;
          data._listIdx   = idx; // keep position for dedup of same-id entries (Loki S1/S2)
          return data;
        }

        // String entry: search both movie and TV
        const [movieData, tvData] = await Promise.all([
          directFetch('/search/movie', { query: entry }),
          directFetch('/search/tv',    { query: entry }),
        ]);
        const titleNorm = norm(entry);
        const movieMatch = (movieData?.results || []).find(r => norm(r.title) === titleNorm || titleNorm.includes(norm(r.title)));
        const tvMatch    = (tvData?.results    || []).find(r => norm(r.name)  === titleNorm || titleNorm.includes(norm(r.name)));
        if (movieMatch) { movieMatch._mediaType = 'movie'; movieMatch._listIdx = idx; return movieMatch; }
        if (tvMatch)    { tvMatch._mediaType    = 'tv';    tvMatch._listIdx    = idx; return tvMatch; }
        return null;
      })
    );

    if (token !== fetchToken) return;

    // Dedup by listIdx so Loki S1 and Loki S2 (same TMDB id, different positions) both show
    const seen = new Set();
    const deduped = results.filter(item => {
      if (!item) return false;
      const k = item._listIdx !== undefined ? String(item._listIdx) : (item._mediaType + item.id);
      if (seen.has(k)) return false;
      seen.add(k); return true;
    });

    showLoading(false);
    movieGrid.innerHTML = '';
    sectionCount.textContent = `${deduped.length} titles`;
    if (deduped.length === 0) { movieGrid.innerHTML = '<div class="no-results">No results found.</div>'; return; }
    deduped.forEach(item => movieGrid.appendChild(buildCard(item, item._mediaType)));
  } catch(e) {
    if (token !== fetchToken) return;
    showLoading(false);
    showError('Could not load MCU list.');
  }
}

// ─── Sort Helpers ─────────────────────────────────────────────────────────────
function sortCollection(items, sortKey) {
  const copy = [...items];
  switch (sortKey) {
    case 'release_date.asc':  return copy.sort((a, b) => (a.release_date || '').localeCompare(b.release_date || ''));
    case 'release_date.desc': return copy.sort((a, b) => (b.release_date || '').localeCompare(a.release_date || ''));
    case 'vote_average.desc': return copy.sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0));
    case 'mcu':               return copy.sort((a, b) => (a.release_date || '').localeCompare(b.release_date || ''));
    case 'popularity.desc':
    default:                  return copy.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  }
}

// ─── Sort Dropdown ────────────────────────────────────────────────────────────
const sortMeta = {
  'popularity.desc':   'Popularity',
  'release_date.desc': 'Newest First',
  'release_date.asc':  'Oldest First',
  'mcu':               'MCU',
  'vote_average.desc': 'Highest Rated',
};

function setActiveSortOption(sortKey) {
  sortOptions.forEach(opt => opt.classList.toggle('active', opt.dataset.sort === sortKey));
  sortDropdownText.textContent = sortMeta[sortKey] || sortKey;
}

sortDropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = sortDropdownWrap.classList.toggle('open');
  sortDropdownBtn.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', () => {
  sortDropdownWrap.classList.remove('open');
  sortDropdownBtn.setAttribute('aria-expanded', false);
});
sortDropdownMenu.addEventListener('click', e => e.stopPropagation());

sortOptions.forEach(opt => {
  opt.addEventListener('click', () => {
    const newSort = opt.dataset.sort;
    if (opt.classList.contains('active')) { sortDropdownWrap.classList.remove('open'); return; }
    currentSort = newSort;
    setActiveSortOption(newSort);
    sortDropdownWrap.classList.remove('open');
    sortDropdownBtn.setAttribute('aria-expanded', false);
    currentPage = 1;
    if (currentSection === 'category' && currentCat) {
      renderSkeletons();
      if      (newSort === 'mcu') _fetchMCUList();
      else                       _fetchCategoryPage(currentCat, 1);
    }
  });
});

// ─── Sidebar ──────────────────────────────────────────────────────────────────
const sidebar         = document.getElementById('sidebar');
const sidebarBackdrop = document.getElementById('sidebarBackdrop');
const hamburgerBtn    = document.getElementById('hamburgerBtn');
const sidebarClose    = document.getElementById('sidebarClose');
const sidebarWtwBtn   = document.getElementById('sidebarWtwBtn');
const sidebarWtwPanel = document.getElementById('sidebarWtwPanel');

function openSidebar() {
  sidebar.classList.add('open');
  sidebarBackdrop.classList.add('open');
  hamburgerBtn.classList.add('open');
  document.body.style.overflow = 'hidden';
  syncSidebarActive();
}

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarBackdrop.classList.remove('open');
  hamburgerBtn.classList.remove('open');
  document.body.style.overflow = '';
}

function syncSidebarActive() {
  // Media buttons
  document.querySelectorAll('.sidebar-media-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.media === currentMedia)
  );
  // Nav buttons — only highlight if user explicitly picked a section.
  // On the default home page (no media type selected), nothing should be highlighted.
  const isDefaultHome = currentMedia === null && (currentSection === 'home' || currentSection.startsWith('home_'));
  const activeSection = isDefaultHome
    ? null
    : (currentSection.startsWith('home_') ? currentSection.replace('home_', '') : currentSection);
  document.querySelectorAll('.sidebar-nav-btn').forEach(b =>
    b.classList.toggle('active', activeSection !== null && b.dataset.section === activeSection)
  );
}

hamburgerBtn.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarBackdrop.addEventListener('click', closeSidebar);

// Where to Watch toggle
sidebarWtwBtn.addEventListener('click', () => {
  const isOpen = sidebarWtwPanel.classList.toggle('hidden');
  sidebarWtwBtn.classList.toggle('open', !isOpen);
  // isOpen is true means it was just hidden (toggle returned true = it now has the class)
  sidebarWtwBtn.classList.toggle('open', !sidebarWtwPanel.classList.contains('hidden'));
});

// Sidebar media buttons — same as main media toggle
document.querySelectorAll('.sidebar-media-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const mt = btn.dataset.media;
    closeSidebar();
    if (mt === currentMedia) return;
    mediaToggleBtns.forEach(b => b.classList.toggle('active', b.dataset.media === mt));
    currentMedia = mt;
    _heroMediaType = mt;
    upcomingBtn.textContent = 'Upcoming';
    // In Movies mode: standalone btn = "Now Playing"; in Shows mode: keep as "Airing"
    document.querySelectorAll('.nav-btn[data-section="airing"], .sidebar-nav-btn[data-section="airing"]')
      .forEach(b => {
        b.style.display = '';
        b.textContent   = mt === 'tv' ? 'Airing' : 'Now Playing';
      });
    searchInput.value = '';
    lastQuery = '';
    searchClear.classList.add('hidden');
    currentGenre = null;
    // Preserve the active section when switching media type
    const catRowSections  = ['trending', 'popular', 'toprated'];
    const preserveSection = currentSection !== 'home' ? currentSection : null;
    if (preserveSection) {
      navBtns.forEach(b => b.classList.toggle('active', b.dataset.section === preserveSection));
      document.querySelectorAll('.sidebar-nav-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.section === preserveSection)
      );
      if (preserveSection === 'favorites') {
        loadGenres().then(() => loadFavorites());
      } else if (catRowSections.includes(preserveSection)) {
        loadHero(preserveSection, mt);
        Promise.all([loadGenres(), loadCategoryRows()]);
        showCategoryRows();
      } else {
        // upcoming, airing in grid view — reload with new media type
        loadGenres().then(() => {
          if (preserveSection === 'airing') { _airingFilter = mt; loadAiringDefault(); }
          else loadSection(preserveSection);
        });
      }
    } else {
      navBtns.forEach(b => b.classList.remove('active'));
      currentSection = 'home';
      Promise.all([loadGenres(), loadCategoryRows()]);
      showCategoryRows();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Sidebar nav buttons
document.querySelectorAll('.sidebar-nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.dataset.section;
    closeSidebar();
    // Update active state everywhere
    currentSection = section;
    navBtns.forEach(b => b.classList.toggle('active', b.dataset.section === section));
    document.querySelectorAll('.sidebar-nav-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.section === section)
    );
    genreBar.querySelectorAll('.genre-chip').forEach(c => c.classList.remove('active'));
    currentGenre = null;

    if (!currentMedia) {
      if (section === 'upcoming')  { _upcomingFilter = 'all'; loadUpcomingDefault(); return; }
      if (section === 'airing')    { _airingFilter = 'all'; loadAiringDefault();   return; }
      if (section === 'favorites') { loadFavorites();       return; }
      currentSection = section;
      showCategoryRows();
      loadHero(section, null);
      loadCategoryRows();
      return;
    }
    if (section === 'favorites') { loadFavorites(); return; }
    // Movies/Shows trending/popular/toprated — reload category rows with correct sort
    if (section === 'trending' || section === 'popular' || section === 'toprated') {
      currentSection = section;
      loadHero(section, currentMedia);
      showCategoryRows();
      loadCategoryRows();
      return;
    }
    // Shows > Upcoming → curated shows list
    if (section === 'upcoming' && currentMedia === 'tv') {
      _upcomingFilter = 'tv';
      loadUpcomingDefault();
      return;
    }
    // Movies > Upcoming → curated movies list
    if (section === 'upcoming' && currentMedia === 'movie') {
      _upcomingFilter = 'movie';
      loadUpcomingDefault();
      return;
    }
    // Now Playing / Airing → use loadAiringDefault with media type forced
    if (section === 'airing') {
      _airingFilter = currentMedia;
      loadAiringDefault();
      return;
    }
    loadSection(section);
  });
});

// Close sidebar on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && sidebar.classList.contains('open')) closeSidebar();
});

// ─── Init ─────────────────────────────────────────────────────────────────────
async function init() {
  showCategoryRows();
  await Promise.all([loadGenres(), loadCategoryRows()]);
}

init();
