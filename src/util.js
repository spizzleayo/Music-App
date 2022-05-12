import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
          name: "Mission",
          cover: "https://chillhop.com/wp-content/uploads/2022/03/b11c1508b5ddceec6a3eb89040eb6977fd861632-1024x1024.jpg",
          artist: "Tom Daye",
          id: uuidv4(),
          active: true,
          color: ['#BA4A46', '#FDF0DD'],
          audio: "https://mp3.chillhop.com/serve.php/?mp3=32864"
        },

        {
          name: "Blue Moment",
          cover: "https://chillhop.com/wp-content/uploads/2022/04/7e2c880b50c6647e59330b1c371101ce2950625f-1024x1024.jpg",
          artist: "Sugi.wa, Tom Ford",
          id: uuidv4(),
          active: false,
          color: ['#BA4A46', '#FDF0DD'],
          audio: "https://mp3.chillhop.com/serve.php/?mp3=32978"
        },


        
        {
            name: "Glow",
            cover: "https://chillhop.com/wp-content/uploads/2022/03/efb56e836d82d26e857b341a951f0337ace66b8b-1024x1024.jpg",
            artist: "Tesk",
            id: uuidv4(),
            active: false,
            color: ['#BA4A46', '#FDF0DD'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=32888"
          },

          {
            name: "Blue Bay",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/7e2c880b50c6647e59330b1c371101ce2950625f-1024x1024.jpg",
            artist: "Tom Ford",
            id: uuidv4(),
            active: false,
            color: ['#BA4A46', '#FDF0DD'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=34372"
          },
  
          {
            name: "Reflections",
            cover: "https://chillhop.com/wp-content/uploads/2022/03/b11c1508b5ddceec6a3eb89040eb6977fd861632-1024x1024.jpg",
            artist: "King Divine",
            id: uuidv4(),
            active: true,
            color: ['#BA4A46', '#FDF0DD'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=32854"
          },
   
          
    ];
}

export default chillHop;