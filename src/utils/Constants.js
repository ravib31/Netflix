export  const LOGO = "https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460";
export const AVATAR = "https://avatars.githubusercontent.com/u/107496019?v=4";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+  process.env.REACT_APP_TMDB_KEY,
    }
  };

  export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500"

  export const BG_IMAGE= "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const SUPPORTED_LANGUAGES = [
    { identifier: 'en', name: 'English' },
    { identifier: 'hindi', name: 'Hindi' },
    { identifier: 'spanish', name: 'Spanish' },
    { identifier: 'bhojpuri', name: 'Bhojpuri' }
];


export const  OPENAI_KEY= process.env.REACT_APP_OPENAI_KEY;