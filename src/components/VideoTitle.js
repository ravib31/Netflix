import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black pt-[20%] w-full aspect-video'>
        <h1 className='text-2xl md:text-5xl font-bold '>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/3 '>{overview}</p>
        <div className='my-2 md:m-0'>
            <button className='bg-white text-black text-xl py-1 md:py-4 px-3  md:px-8 hover:bg-opacity-80 rounded-lg'>▶ Play</button>
            <button className='bg-black hidden md:inline-block text-white  text-xl p-4 mx-4 px-8 hover:bg-opacity-20 rounded-lg'>❕ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;







// {
//     "id": 1011985,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The perfect casting doesn't exi--",
//         "key": "JmF0LmnkkO4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-03-22T17:00:21.000Z",
//         "id": "65fef819197de40186189e6b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "'Kung Fu Panda 4' with filmmakers | Academy Conversations",
//         "key": "F9DvXKOAHmc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-03-21T16:00:07.000Z",
//         "id": "65fedaa6197de40186188932"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The Slyest Fox in All of China",
//         "key": "j8o0DeI_pDY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-03-20T17:00:37.000Z",
//         "id": "65fef84b60620a017c2b979b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"Battle\" 30s Spot",
//         "key": "69yHznzqCEI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-03-19T12:04:38.000Z",
//         "id": "65fadefc0bc5290130ad94b8"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"Awesomeness\" 15s Spot",
//         "key": "OPpPP8mAyCM",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-03-19T11:59:19.000Z",
//         "id": "65fade90bf31f2017efdb049"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"Air It Out\" 15s Spot",
//         "key": "-WiVQpUqPxE",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-03-19T11:58:23.000Z",
//         "id": "65fade400bc529017cae6ffa"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Po runs into Juniper City's dangerous underworld",
//         "key": "l6rQ33kZetw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-03-18T17:00:37.000Z",
//         "id": "65f88bfd28723c0130b712b7"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Skadoosh or Skablam?",
//         "key": "Y-Vv_bbttWQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-03-13T17:00:23.000Z",
//         "id": "65f3e5a83852020163e1fdd0"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Shh!! Sneaking into Chameleon's Fortress",
//         "key": "xPEXVq13nok",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-03-12T17:00:46.000Z",
//         "id": "65f12b300e4fc80186cb00f7"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "...Baby One More Time (from Kung Fu Panda 4) by Tenacious D",
//         "key": "_yWGGGUSYCQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-03-11T14:59:51.000Z",
//         "id": "65ef4dfaaf58cb01862c16cc"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Skadooshes Creepily",
//         "key": "qQ1hpNh24Wo",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-03-07T18:00:32.000Z",
//         "id": "65eb1cd8c3bffe016412a2f4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Quick Hits Jack Black",
//         "key": "f2rcsx9-WLY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-03-06T16:43:25.000Z",
//         "id": "65ec875d924ce60164414972"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"Jack Black Beats Po\" 15s Spot",
//         "key": "JQBIiIjpDmE",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-03-06T16:28:47.000Z",
//         "id": "65ec86cf8c44b9017c08b472"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The Kung Fu of Kung Fu Panda 4",
//         "key": "X0ZFGs0jEqs",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-03-05T18:00:28.000Z",
//         "id": "65e87802c15f890186176eb5"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "I'm only hungry for vengeance! Po & Zhen's Tavern Brawl",
//         "key": "xw06VruATfY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-03-04T18:00:25.000Z",
//         "id": "65e62834f706de014ac8cf9e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Maybe a little too relaxed",
//         "key": "YFtofiXTOog",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-03-03T18:00:15.000Z",
//         "id": "65e57f5220e6a5018654b3b9"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"Chant Event\" 30s Spot",
//         "key": "rd8WpIJtOZg",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-02-29T12:51:16.000Z",
//         "id": "65e0c6f1daf57c01629b6d0f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"Masterplan\" 30s Spot",
//         "key": "i-7Ji7vXb1U",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-02-29T12:50:52.000Z",
//         "id": "65e0c7adf8595801634e8b4e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"Greatest\" 30s Spot",
//         "key": "zzSB53ieltY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-02-29T12:50:35.000Z",
//         "id": "65e0c7c907e281017cdd5e16"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Introducing... Zhen",
//         "key": "j9jz3kTWzP4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-02-28T18:00:21.000Z",
//         "id": "65e010205294e701864ed214"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Good To Be Back",
//         "key": "sdPws6HTFDU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-02-28T14:57:27.000Z",
//         "id": "65df79e98e87020146039df0"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Sand & Spice Trailer",
//         "key": "d2OONzqh2jk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-02-26T16:00:20.000Z",
//         "id": "65dcbb96b7b69d0164c898ba"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Don't Meditate Before Dinner",
//         "key": "4nCR9Ohdvt8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-02-24T18:00:02.000Z",
//         "id": "65dd2d9639549a01874ec366"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Skadoosh",
//         "key": "5KQvhQZbBA8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-02-24T00:00:05.000Z",
//         "id": "65dd09103ff2df01870a289e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Take A Look",
//         "key": "LmqX5WMPSMM",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-02-21T21:30:01.000Z",
//         "id": "65d6893160975001622318fa"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Choreography",
//         "key": "Txofj7FHFYA",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-02-21T17:00:23.000Z",
//         "id": "65d6894cffd44d01872b9561"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Po Saves Village from Giant Stingray",
//         "key": "lVWL5B_m5GM",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-02-19T18:00:23.000Z",
//         "id": "65d40d44bbe1dd017d5ed580"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "New Year Same Me",
//         "key": "sGIgOHWNQ_U",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-02-17T18:00:22.000Z",
//         "id": "65dd2dc3a894d601640c0775"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "4 Hour Inner Peace Meditation with Po",
//         "key": "vqrJ6rRI_Hw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-02-16T17:00:10.000Z",
//         "id": "65d8c1a840d0fe0185a19166"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The Dragon Warrior has met his match.",
//         "key": "2zhO-mMmfGo",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-02-16T07:57:06.000Z",
//         "id": "65d8c0a340d0fe0185a1901b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Po Catches a Thief in the Hall of Heroes",
//         "key": "0k9poh1qd_o",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-02-12T18:00:00.000Z",
//         "id": "65cadaf68c0a480163b72d31"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Return TV Spot",
//         "key": "Lfzvb4HU1G0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-02-07T18:21:29.000Z",
//         "id": "65c3d5023fe7970162fe7de0"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Jack Black Recaps Kung Fu Panda 1-3 in 60 Seconds!",
//         "key": "eGYJvDH5NCU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-01-30T20:00:21.000Z",
//         "id": "65d8c1d3a284eb0185885bc2"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Trailer in 40 Seconds!",
//         "key": "-yjJCudZ4Bk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-01-29T18:00:00.000Z",
//         "id": "65dd2e2f8c0a4801811deb85"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "_inKs4eeHiI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-12-13T15:43:38.000Z",
//         "id": "6579d3254d23dd013a12bc58"
//       }
//     ]
//   }