currIContent = "y"; // ajax request to include the tplates/... file or not
currCartTShow = "y";

var tmpSQBArr = null;
var tmpVitemArr = null;
tmpSQBArr = [];
tmpVitemArr = [];
var tmpVindex = 0;
var tmpPrdMediaArr = null;
tmpPrdMediaArr = [];


function getFBalbumPhotos(theAlbumID) {
    /*
    {
  "data": [
    {
      "id": "963341310922768",
      "name": "fu fb. im to lazy to install your apps so i wont participate. ill just shoot this meme.",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 1520,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/469581496_1637755473481345_2597430576770978444_n.jpg?stp=dst-webp&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=wZa22WmIT18Q7kNvgHKe_-l&_nc_oc=Adl3U-94mu06gSYHo-EjoAT1sPecnfAkhDuBKO33JyMgsjSFDEQhqCGg6zKEk7xPJuM&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGI4cgqaw-q0hQrvynDSNis7LLxA59hCZxvhgoiUqxjlg&oe=67E3C335",
          "width": 720
        },
        {
          "height": 1267,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/469581496_1637755473481345_2597430576770978444_n.jpg?stp=dst-webp_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=wZa22WmIT18Q7kNvgHKe_-l&_nc_oc=Adl3U-94mu06gSYHo-EjoAT1sPecnfAkhDuBKO33JyMgsjSFDEQhqCGg6zKEk7xPJuM&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYF9VobYol_bR_6JjmlQuL14ldCcdoFb2tmpkTCkBuH8kw&oe=67E3C335",
          "width": 600
        },
        {
          "height": 1013,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/469581496_1637755473481345_2597430576770978444_n.jpg?stp=dst-webp_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=wZa22WmIT18Q7kNvgHKe_-l&_nc_oc=Adl3U-94mu06gSYHo-EjoAT1sPecnfAkhDuBKO33JyMgsjSFDEQhqCGg6zKEk7xPJuM&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEorJ95OTc-nqZ-S528JrfB2r8aoIre74w01aRsj6hfBQ&oe=67E3C335",
          "width": 480
        },
        {
          "height": 676,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/469581496_1637755473481345_2597430576770978444_n.jpg?stp=dst-webp_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=wZa22WmIT18Q7kNvgHKe_-l&_nc_oc=Adl3U-94mu06gSYHo-EjoAT1sPecnfAkhDuBKO33JyMgsjSFDEQhqCGg6zKEk7xPJuM&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEyS7D1_IoGjd6jRfCfhtmsPlNINcmjuljvdnIPXoco0Q&oe=67E3C335",
          "width": 320
        },
        {
          "height": 540,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/469581496_1637755473481345_2597430576770978444_n.jpg?stp=dst-webp_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=wZa22WmIT18Q7kNvgHKe_-l&_nc_oc=Adl3U-94mu06gSYHo-EjoAT1sPecnfAkhDuBKO33JyMgsjSFDEQhqCGg6zKEk7xPJuM&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFLI3mieLPXuvFLWMNt7l48nT4JgPUSjfYDyvUHFwKhIg&oe=67E3C335",
          "width": 256
        },
        {
          "height": 274,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/469581496_1637755473481345_2597430576770978444_n.jpg?stp=dst-webp_p130x130&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=wZa22WmIT18Q7kNvgHKe_-l&_nc_oc=Adl3U-94mu06gSYHo-EjoAT1sPecnfAkhDuBKO33JyMgsjSFDEQhqCGg6zKEk7xPJuM&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYF3YTB2MKh6om9VCSdirGnUA_9dSQKTg9fE6HrHWUQDMg&oe=67E3C335",
          "width": 130
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/469581496_1637755473481345_2597430576770978444_n.jpg?stp=dst-webp_p75x225&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=wZa22WmIT18Q7kNvgHKe_-l&_nc_oc=Adl3U-94mu06gSYHo-EjoAT1sPecnfAkhDuBKO33JyMgsjSFDEQhqCGg6zKEk7xPJuM&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEcgcgIqtjuRcuX8970udbMlTrdtHVs0fdAR1vvvu39lA&oe=67E3C335",
          "width": 107
        }
      ],
      "picture": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/469581496_1637755473481345_2597430576770978444_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=111&ccb=1-7&_nc_sid=face19&_nc_ohc=wZa22WmIT18Q7kNvgHKe_-l&_nc_oc=Adl3U-94mu06gSYHo-EjoAT1sPecnfAkhDuBKO33JyMgsjSFDEQhqCGg6zKEk7xPJuM&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHNikwDmzVzd9IJfidBe8PDWXYNYsbEIPICv9Rmev0lbg&oe=67E3C335",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=963341310922768&set=a.110536656203242&type=3"
    },
    {
      "id": "811766102746957",
      "name": "da crypto. these 4 are what currently is leaving me mid term comfortable.  trying to trade dirt into gold is tiring. take it for what its worth.",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 1520,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/146174701_811766106080290_1288758296520228070_n.jpg?stp=dst-webp&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=g4EC1edPlw4Q7kNvgHIjkFP&_nc_oc=AdnM0396JBMmTzJknzV0s8hoXOQKoKsMJt7yi0VCum63PfZAfPMTqhCb_LcRMxF8WYI&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFN3HI-cpsiTcGGjzkXlvUl9MacOxcFum_RJsvODJX_5Q&oe=6805803F",
          "width": 720
        },
        {
          "height": 1267,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/146174701_811766106080290_1288758296520228070_n.jpg?stp=dst-webp_p600x600&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=g4EC1edPlw4Q7kNvgHIjkFP&_nc_oc=AdnM0396JBMmTzJknzV0s8hoXOQKoKsMJt7yi0VCum63PfZAfPMTqhCb_LcRMxF8WYI&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFycUD_TYAMIC7_e5CBqQ9LC1v8jF3PbEmxGlf41jPRzg&oe=6805803F",
          "width": 600
        },
        {
          "height": 1013,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/146174701_811766106080290_1288758296520228070_n.jpg?stp=dst-webp_p480x480&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=g4EC1edPlw4Q7kNvgHIjkFP&_nc_oc=AdnM0396JBMmTzJknzV0s8hoXOQKoKsMJt7yi0VCum63PfZAfPMTqhCb_LcRMxF8WYI&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHA3Fb713zZoE0bP4IBnfi_C6x7SNVrjJsjwnz1O25Mjg&oe=6805803F",
          "width": 480
        },
        {
          "height": 676,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/146174701_811766106080290_1288758296520228070_n.jpg?stp=dst-webp_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=g4EC1edPlw4Q7kNvgHIjkFP&_nc_oc=AdnM0396JBMmTzJknzV0s8hoXOQKoKsMJt7yi0VCum63PfZAfPMTqhCb_LcRMxF8WYI&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFOooZBSv6VofvJ_KrO31R0k4rnc5aDw8_BGTAQWOLHJQ&oe=6805803F",
          "width": 320
        },
        {
          "height": 540,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/146174701_811766106080290_1288758296520228070_n.jpg?stp=dst-webp_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=g4EC1edPlw4Q7kNvgHIjkFP&_nc_oc=AdnM0396JBMmTzJknzV0s8hoXOQKoKsMJt7yi0VCum63PfZAfPMTqhCb_LcRMxF8WYI&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGSL2_OA5vKP1RA8oH2NOkoTt_kYyyTxcJMGJqVPxbm5w&oe=6805803F",
          "width": 256
        },
        {
          "height": 274,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/146174701_811766106080290_1288758296520228070_n.jpg?stp=dst-webp_p130x130&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=g4EC1edPlw4Q7kNvgHIjkFP&_nc_oc=AdnM0396JBMmTzJknzV0s8hoXOQKoKsMJt7yi0VCum63PfZAfPMTqhCb_LcRMxF8WYI&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHYH8IMxzErIPOamLwuu_P21omnlTN-qYO2mRGDus87qg&oe=6805803F",
          "width": 130
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/146174701_811766106080290_1288758296520228070_n.jpg?stp=dst-webp_p75x225&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=g4EC1edPlw4Q7kNvgHIjkFP&_nc_oc=AdnM0396JBMmTzJknzV0s8hoXOQKoKsMJt7yi0VCum63PfZAfPMTqhCb_LcRMxF8WYI&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYG1nEf8wlNhnEWpTnBEle_7WKvbN4fNtCtvX5ERRAfzGw&oe=6805803F",
          "width": 107
        }
      ],
      "picture": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/146174701_811766106080290_1288758296520228070_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=101&ccb=1-7&_nc_sid=face19&_nc_ohc=g4EC1edPlw4Q7kNvgHIjkFP&_nc_oc=AdnM0396JBMmTzJknzV0s8hoXOQKoKsMJt7yi0VCum63PfZAfPMTqhCb_LcRMxF8WYI&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYExKhJt9FO7oZE9BO1eEADBdWwL_RjPZzBPTfMOObIXNQ&oe=6805803F",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=811766102746957&set=a.110536656203242&type=3"
    },
    {
      "id": "708701696386732",
      "name": "Paul Allens expedition yacht docked here in port Malaga.
r.i.p. dude.",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 1536,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/118702952_708701699720065_8275895038029495135_n.jpg?stp=dst-webp&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=GJUB0mZ9Cu4Q7kNvgElQsQD&_nc_oc=Adl1rjOMvQ4q-eFWEziM92-NvmDF29EcuM2tsq6FhjUNNuGZA8nvfIcb4_vad2KEl48&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHO-u5rsiLp-El1JKu7HD4VW2VzBeNwBD_pXaJ8yVuGJw&oe=68056E4F",
          "width": 2048
        },
        {
          "height": 960,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/118702952_708701699720065_8275895038029495135_n.jpg?stp=dst-webp_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=GJUB0mZ9Cu4Q7kNvgElQsQD&_nc_oc=Adl1rjOMvQ4q-eFWEziM92-NvmDF29EcuM2tsq6FhjUNNuGZA8nvfIcb4_vad2KEl48&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHRC9LJoyq1lzOSLOtEEKxSa_hyI9IKt93qIgVrIPjUoQ&oe=68056E4F",
          "width": 1280
        },
        {
          "height": 720,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/118702952_708701699720065_8275895038029495135_n.jpg?stp=dst-webp_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=GJUB0mZ9Cu4Q7kNvgElQsQD&_nc_oc=Adl1rjOMvQ4q-eFWEziM92-NvmDF29EcuM2tsq6FhjUNNuGZA8nvfIcb4_vad2KEl48&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGnHEEkpUCnWKoqoOiRL08zCS8dxptE5253CldTiQfTkA&oe=68056E4F",
          "width": 960
        },
        {
          "height": 600,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/118702952_708701699720065_8275895038029495135_n.jpg?stp=dst-webp_p600x600&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=GJUB0mZ9Cu4Q7kNvgElQsQD&_nc_oc=Adl1rjOMvQ4q-eFWEziM92-NvmDF29EcuM2tsq6FhjUNNuGZA8nvfIcb4_vad2KEl48&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHeRpHZkkVhWdoW_zxJJqXnSOK5VLY3yzky4Iky9gSSdg&oe=68056E4F",
          "width": 800
        },
        {
          "height": 480,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/118702952_708701699720065_8275895038029495135_n.jpg?stp=dst-webp_s640x640&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=GJUB0mZ9Cu4Q7kNvgElQsQD&_nc_oc=Adl1rjOMvQ4q-eFWEziM92-NvmDF29EcuM2tsq6FhjUNNuGZA8nvfIcb4_vad2KEl48&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFHhOurd9qhJnoAlbGL4oSUMdcMX38tJ8I90CjL8k_sfg&oe=68056E4F",
          "width": 640
        },
        {
          "height": 320,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/118702952_708701699720065_8275895038029495135_n.jpg?stp=dst-webp_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=GJUB0mZ9Cu4Q7kNvgElQsQD&_nc_oc=Adl1rjOMvQ4q-eFWEziM92-NvmDF29EcuM2tsq6FhjUNNuGZA8nvfIcb4_vad2KEl48&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEe9u9-1Zrjg79O_gx2qLwfGP-5Pv4uEjW3rOzXBZ3T4g&oe=68056E4F",
          "width": 427
        },
        {
          "height": 540,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/118702952_708701699720065_8275895038029495135_n.jpg?stp=dst-webp_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=GJUB0mZ9Cu4Q7kNvgElQsQD&_nc_oc=Adl1rjOMvQ4q-eFWEziM92-NvmDF29EcuM2tsq6FhjUNNuGZA8nvfIcb4_vad2KEl48&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEgCJ1nn-1AgoQISOZ4e9mvVaDi2QviKQ8KabHb5nb3FA&oe=68056E4F",
          "width": 720
        },
        {
          "height": 130,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/118702952_708701699720065_8275895038029495135_n.jpg?stp=dst-webp_s173x172&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=GJUB0mZ9Cu4Q7kNvgElQsQD&_nc_oc=Adl1rjOMvQ4q-eFWEziM92-NvmDF29EcuM2tsq6FhjUNNuGZA8nvfIcb4_vad2KEl48&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFb3jF8n_uSy4Xs6ixWeZM0TfMdoPR2vNdwbtxPOTWjpw&oe=68056E4F",
          "width": 173
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/118702952_708701699720065_8275895038029495135_n.jpg?stp=dst-webp_p75x225&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=GJUB0mZ9Cu4Q7kNvgElQsQD&_nc_oc=Adl1rjOMvQ4q-eFWEziM92-NvmDF29EcuM2tsq6FhjUNNuGZA8nvfIcb4_vad2KEl48&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGxDKAb2IJChWn2CkyDWMaqlaDSAx07hOHelKgka8weUg&oe=68056E4F",
          "width": 300
        }
      ],
      "picture": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/118702952_708701699720065_8275895038029495135_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=107&ccb=1-7&_nc_sid=face19&_nc_ohc=GJUB0mZ9Cu4Q7kNvgElQsQD&_nc_oc=Adl1rjOMvQ4q-eFWEziM92-NvmDF29EcuM2tsq6FhjUNNuGZA8nvfIcb4_vad2KEl48&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGhKpDZLLpgQlaG33wCvfieOYu5dGIsaHjWELhy8G0Z3g&oe=68056E4F",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=708701696386732&set=a.110536656203242&type=3"
    },
    {
      "id": "704957623427806",
      "name": "yep. nothing better to do. must be the sugar addiction. frkn antichrist. someone please tell him to stop hogging the data pipes.",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 1520,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/118474816_704957626761139_7792238287590255732_n.jpg?stp=dst-webp&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=GlgOvpIQI0wQ7kNvgFvHqlg&_nc_oc=AdlLEMcX3lVmJ_83NlYc30hFrM003zKZ7MT1MBjYK4jjBEpQcqi3fQ6xD8ZtXbHDJZg&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEL2aUT_EEESU8dtRpvuzDYIWCaSLXuRJtuDhwmBoBy_w&oe=68055F63",
          "width": 720
        },
        {
          "height": 1267,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/118474816_704957626761139_7792238287590255732_n.jpg?stp=dst-webp_p600x600&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=GlgOvpIQI0wQ7kNvgFvHqlg&_nc_oc=AdlLEMcX3lVmJ_83NlYc30hFrM003zKZ7MT1MBjYK4jjBEpQcqi3fQ6xD8ZtXbHDJZg&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEtpD0nFJuIc0F_ScwBJoSWXKRicyc-CaiaZYdiW2r0Tg&oe=68055F63",
          "width": 600
        },
        {
          "height": 1013,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/118474816_704957626761139_7792238287590255732_n.jpg?stp=dst-webp_p480x480&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=GlgOvpIQI0wQ7kNvgFvHqlg&_nc_oc=AdlLEMcX3lVmJ_83NlYc30hFrM003zKZ7MT1MBjYK4jjBEpQcqi3fQ6xD8ZtXbHDJZg&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFVtkSH6f6w6RKrg_JbsmFDTKnBE4TChZ3vU4ODvtwnRg&oe=68055F63",
          "width": 480
        },
        {
          "height": 676,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/118474816_704957626761139_7792238287590255732_n.jpg?stp=dst-webp_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=GlgOvpIQI0wQ7kNvgFvHqlg&_nc_oc=AdlLEMcX3lVmJ_83NlYc30hFrM003zKZ7MT1MBjYK4jjBEpQcqi3fQ6xD8ZtXbHDJZg&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFhlAWvJsEJf4jjOGwgIRFzhPTius5NICJIpAjfNcTufQ&oe=68055F63",
          "width": 320
        },
        {
          "height": 540,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/118474816_704957626761139_7792238287590255732_n.jpg?stp=dst-webp_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=GlgOvpIQI0wQ7kNvgFvHqlg&_nc_oc=AdlLEMcX3lVmJ_83NlYc30hFrM003zKZ7MT1MBjYK4jjBEpQcqi3fQ6xD8ZtXbHDJZg&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGHucvxCltaQ7-pG0ay6HdArN2H3rDxYPZ0p1i_9DtaeQ&oe=68055F63",
          "width": 256
        },
        {
          "height": 274,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/118474816_704957626761139_7792238287590255732_n.jpg?stp=dst-webp_p130x130&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=GlgOvpIQI0wQ7kNvgFvHqlg&_nc_oc=AdlLEMcX3lVmJ_83NlYc30hFrM003zKZ7MT1MBjYK4jjBEpQcqi3fQ6xD8ZtXbHDJZg&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGV3W8QOapopVa1RzZJpVo4hmrCXhykMNhDQmnid0d9JQ&oe=68055F63",
          "width": 130
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/118474816_704957626761139_7792238287590255732_n.jpg?stp=dst-webp_p75x225&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=GlgOvpIQI0wQ7kNvgFvHqlg&_nc_oc=AdlLEMcX3lVmJ_83NlYc30hFrM003zKZ7MT1MBjYK4jjBEpQcqi3fQ6xD8ZtXbHDJZg&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGkMYbrqNUYXMxic62mkqsJrhNVUfzo0iPPOKLGcRZ2gQ&oe=68055F63",
          "width": 107
        }
      ],
      "picture": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/118474816_704957626761139_7792238287590255732_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=101&ccb=1-7&_nc_sid=face19&_nc_ohc=GlgOvpIQI0wQ7kNvgFvHqlg&_nc_oc=AdlLEMcX3lVmJ_83NlYc30hFrM003zKZ7MT1MBjYK4jjBEpQcqi3fQ6xD8ZtXbHDJZg&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGLSsuOT_OcmUbQsruhx3dth0uxCDQxXLU4-fzFnAFTZw&oe=68055F63",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=704957623427806&set=a.110536656203242&type=3"
    },
    {
      "id": "641473646442871",
      "name": "qiando há sobras de bolonhesa e falta de pão, apresento o taco-bolonhesa...",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 2048,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/98025049_641473649776204_2587477917621551104_n.jpg?stp=dst-webp&_nc_cat=100&ccb=1-7&_nc_sid=e21142&_nc_ohc=2qV2hlV3j1EQ7kNvgFJm9da&_nc_oc=AdnBC9J8OBKNg4TBSZWf3HKFgcFr8oqX57mCDdB02GblzVDM_ezhhMlt4ReWGAOg9gI&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFEveBnkHDaebPyNv2GUFz0wHQHeMARiwMFyv7VkxEWMA&oe=68057F0F",
          "width": 1536
        },
        {
          "height": 1280,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/98025049_641473649776204_2587477917621551104_n.jpg?stp=dst-webp_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=e21142&_nc_ohc=2qV2hlV3j1EQ7kNvgFJm9da&_nc_oc=AdnBC9J8OBKNg4TBSZWf3HKFgcFr8oqX57mCDdB02GblzVDM_ezhhMlt4ReWGAOg9gI&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEQMXZ6POIMQ6bgUSyNEcJyN0wzQnrfWkrbX-Epsz7qCg&oe=68057F0F",
          "width": 960
        },
        {
          "height": 960,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/98025049_641473649776204_2587477917621551104_n.jpg?stp=dst-webp_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=e21142&_nc_ohc=2qV2hlV3j1EQ7kNvgFJm9da&_nc_oc=AdnBC9J8OBKNg4TBSZWf3HKFgcFr8oqX57mCDdB02GblzVDM_ezhhMlt4ReWGAOg9gI&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFyfrEMK2-ALC3GRRTmBwifBoikyc-C1ioMb3U8nRLZdA&oe=68057F0F",
          "width": 720
        },
        {
          "height": 800,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/98025049_641473649776204_2587477917621551104_n.jpg?stp=dst-webp_p600x600&_nc_cat=100&ccb=1-7&_nc_sid=e21142&_nc_ohc=2qV2hlV3j1EQ7kNvgFJm9da&_nc_oc=AdnBC9J8OBKNg4TBSZWf3HKFgcFr8oqX57mCDdB02GblzVDM_ezhhMlt4ReWGAOg9gI&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYE7CeZ4A2Ra0EbFKIqqVHt2wyQnU_KgOSs50CK483UKNw&oe=68057F0F",
          "width": 600
        },
        {
          "height": 640,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/98025049_641473649776204_2587477917621551104_n.jpg?stp=dst-webp_s640x640&_nc_cat=100&ccb=1-7&_nc_sid=e21142&_nc_ohc=2qV2hlV3j1EQ7kNvgFJm9da&_nc_oc=AdnBC9J8OBKNg4TBSZWf3HKFgcFr8oqX57mCDdB02GblzVDM_ezhhMlt4ReWGAOg9gI&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGLIXbbJAxFUDV1QNItBLVg6Wq4d0imGlCCw9kURg_CQg&oe=68057F0F",
          "width": 480
        },
        {
          "height": 427,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/98025049_641473649776204_2587477917621551104_n.jpg?stp=dst-webp_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=e21142&_nc_ohc=2qV2hlV3j1EQ7kNvgFJm9da&_nc_oc=AdnBC9J8OBKNg4TBSZWf3HKFgcFr8oqX57mCDdB02GblzVDM_ezhhMlt4ReWGAOg9gI&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYENFHaj6_LU3s2RXOEfnTok8aFhVhpRR7iv5uDgj2moPw&oe=68057F0F",
          "width": 320
        },
        {
          "height": 540,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/98025049_641473649776204_2587477917621551104_n.jpg?stp=dst-webp_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=e21142&_nc_ohc=2qV2hlV3j1EQ7kNvgFJm9da&_nc_oc=AdnBC9J8OBKNg4TBSZWf3HKFgcFr8oqX57mCDdB02GblzVDM_ezhhMlt4ReWGAOg9gI&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFBDSyCQ_pTa2oNl3fo83Jwd7sTUt-YMjK80sk55mPlpw&oe=68057F0F",
          "width": 405
        },
        {
          "height": 172,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/98025049_641473649776204_2587477917621551104_n.jpg?stp=dst-webp_s173x172&_nc_cat=100&ccb=1-7&_nc_sid=e21142&_nc_ohc=2qV2hlV3j1EQ7kNvgFJm9da&_nc_oc=AdnBC9J8OBKNg4TBSZWf3HKFgcFr8oqX57mCDdB02GblzVDM_ezhhMlt4ReWGAOg9gI&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGNzfhNtpLDXMZeks41IztuYqvu0g9MRqxqGrCjtaZ-rw&oe=68057F0F",
          "width": 129
        },
        {
          "height": 224,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/98025049_641473649776204_2587477917621551104_n.jpg?stp=dst-webp_p168x128&_nc_cat=100&ccb=1-7&_nc_sid=e21142&_nc_ohc=2qV2hlV3j1EQ7kNvgFJm9da&_nc_oc=AdnBC9J8OBKNg4TBSZWf3HKFgcFr8oqX57mCDdB02GblzVDM_ezhhMlt4ReWGAOg9gI&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGJqye9_WuJPFQBXbtJgRuCd2mfLRXj4X4RgJQ9hUoG2g&oe=68057F0F",
          "width": 168
        }
      ],
      "picture": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/98025049_641473649776204_2587477917621551104_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=100&ccb=1-7&_nc_sid=face19&_nc_ohc=2qV2hlV3j1EQ7kNvgFJm9da&_nc_oc=AdnBC9J8OBKNg4TBSZWf3HKFgcFr8oqX57mCDdB02GblzVDM_ezhhMlt4ReWGAOg9gI&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYECCUsu8LHuWuuGDDWPKK0vh16rbVW1zhZOnpo6eaBzcw&oe=68057F0F",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=641473646442871&set=a.110536656203242&type=3"
    },
    {
      "id": "391108674812704",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 960,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/56615080_391108678146037_8627097457953603584_n.jpg?stp=dst-webp&_nc_cat=108&ccb=1-7&_nc_sid=e21142&_nc_ohc=RDx4PRmCubgQ7kNvgEhfY3s&_nc_oc=AdkrDO4Fez9A5YjCOW16sAdWXv7Y6svDbkZFY7yClvOLbigs3WILrL0_tNoaZgmY4jU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYG86imQMGAfZpAEN__Q7T5B4kkHfXewpHXSEFUFuDHuEw&oe=68057E16",
          "width": 641
        },
        {
          "height": 899,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/56615080_391108678146037_8627097457953603584_n.jpg?stp=dst-webp_p600x600&_nc_cat=108&ccb=1-7&_nc_sid=e21142&_nc_ohc=RDx4PRmCubgQ7kNvgEhfY3s&_nc_oc=AdkrDO4Fez9A5YjCOW16sAdWXv7Y6svDbkZFY7yClvOLbigs3WILrL0_tNoaZgmY4jU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEXJQLVz803pwARY211Xidly7uHaIcQaQTe4DWPNuo1LA&oe=68057E16",
          "width": 600
        },
        {
          "height": 719,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/56615080_391108678146037_8627097457953603584_n.jpg?stp=dst-webp_p480x480&_nc_cat=108&ccb=1-7&_nc_sid=e21142&_nc_ohc=RDx4PRmCubgQ7kNvgEhfY3s&_nc_oc=AdkrDO4Fez9A5YjCOW16sAdWXv7Y6svDbkZFY7yClvOLbigs3WILrL0_tNoaZgmY4jU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEtVKnQpjIrphohbrNXpROPUgo4ZvjXbvvETwYlB_LlsA&oe=68057E16",
          "width": 480
        },
        {
          "height": 479,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/56615080_391108678146037_8627097457953603584_n.jpg?stp=dst-webp_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=e21142&_nc_ohc=RDx4PRmCubgQ7kNvgEhfY3s&_nc_oc=AdkrDO4Fez9A5YjCOW16sAdWXv7Y6svDbkZFY7yClvOLbigs3WILrL0_tNoaZgmY4jU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEe7qNRFaR28k2EMTw51Fo3O7WNn181IdsmLLbuC9Fdkw&oe=68057E16",
          "width": 320
        },
        {
          "height": 540,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/56615080_391108678146037_8627097457953603584_n.jpg?stp=dst-webp_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=e21142&_nc_ohc=RDx4PRmCubgQ7kNvgEhfY3s&_nc_oc=AdkrDO4Fez9A5YjCOW16sAdWXv7Y6svDbkZFY7yClvOLbigs3WILrL0_tNoaZgmY4jU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHRRS2GvUSwTwGDjnlMKN689a12Q0qxFM9xUnBPL2ypmA&oe=68057E16",
          "width": 361
        },
        {
          "height": 195,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/56615080_391108678146037_8627097457953603584_n.jpg?stp=dst-webp_p130x130&_nc_cat=108&ccb=1-7&_nc_sid=e21142&_nc_ohc=RDx4PRmCubgQ7kNvgEhfY3s&_nc_oc=AdkrDO4Fez9A5YjCOW16sAdWXv7Y6svDbkZFY7yClvOLbigs3WILrL0_tNoaZgmY4jU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYF_XzJT2oosCJ7mxwLFMGXtc92IGSwpRMR18g6aVefEDQ&oe=68057E16",
          "width": 130
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/56615080_391108678146037_8627097457953603584_n.jpg?stp=dst-webp_p75x225&_nc_cat=108&ccb=1-7&_nc_sid=e21142&_nc_ohc=RDx4PRmCubgQ7kNvgEhfY3s&_nc_oc=AdkrDO4Fez9A5YjCOW16sAdWXv7Y6svDbkZFY7yClvOLbigs3WILrL0_tNoaZgmY4jU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGXNUjlFEI0KmOpQwGpusxHPQD65tGR6VGVRAqtEmB-TQ&oe=68057E16",
          "width": 150
        }
      ],
      "picture": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/56615080_391108678146037_8627097457953603584_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=108&ccb=1-7&_nc_sid=face19&_nc_ohc=RDx4PRmCubgQ7kNvgEhfY3s&_nc_oc=AdkrDO4Fez9A5YjCOW16sAdWXv7Y6svDbkZFY7yClvOLbigs3WILrL0_tNoaZgmY4jU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEc5kqbG6aNTFWS71QrdIMOJRSSiE7hl5mL6r5DH4KmPw&oe=68057E16",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=391108674812704&set=a.110536656203242&type=3"
    },
    {
      "id": "390981571492081",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 1536,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/57154146_390981578158747_8197674039150379008_n.jpg?stp=dst-webp&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=gYyu-tCUK6kQ7kNvgG26L5C&_nc_oc=AdmrEEuwoOx7XFR7YSj5llCh1oD40YtjioX8PlL9IiFpj86Hty2Qjgaolg3slHZ4oDo&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEghrRwe91t-UNDc6TK_wO3w0j3BcHhZtJWVCPQZTJnFw&oe=68056AAC",
          "width": 2048
        },
        {
          "height": 960,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/57154146_390981578158747_8197674039150379008_n.jpg?stp=dst-webp_p960x960&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=gYyu-tCUK6kQ7kNvgG26L5C&_nc_oc=AdmrEEuwoOx7XFR7YSj5llCh1oD40YtjioX8PlL9IiFpj86Hty2Qjgaolg3slHZ4oDo&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFCF_g9Cm24ML9ts8DcMGf5_5XvT9ZS7EO9rIZs6dNRBw&oe=68056AAC",
          "width": 1280
        },
        {
          "height": 720,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/57154146_390981578158747_8197674039150379008_n.jpg?stp=dst-webp_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=gYyu-tCUK6kQ7kNvgG26L5C&_nc_oc=AdmrEEuwoOx7XFR7YSj5llCh1oD40YtjioX8PlL9IiFpj86Hty2Qjgaolg3slHZ4oDo&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYF2B9avE-np5s1HqItemkGI2P0tRJTUqKSI1xC52XBBIA&oe=68056AAC",
          "width": 960
        },
        {
          "height": 600,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/57154146_390981578158747_8197674039150379008_n.jpg?stp=dst-webp_p600x600&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=gYyu-tCUK6kQ7kNvgG26L5C&_nc_oc=AdmrEEuwoOx7XFR7YSj5llCh1oD40YtjioX8PlL9IiFpj86Hty2Qjgaolg3slHZ4oDo&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHhzYK_UHLWZv4umm_tmmQ4D21BxvI0RVrUGXlY27WSgA&oe=68056AAC",
          "width": 800
        },
        {
          "height": 480,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/57154146_390981578158747_8197674039150379008_n.jpg?stp=dst-webp_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=gYyu-tCUK6kQ7kNvgG26L5C&_nc_oc=AdmrEEuwoOx7XFR7YSj5llCh1oD40YtjioX8PlL9IiFpj86Hty2Qjgaolg3slHZ4oDo&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHSm4huSolpLihSkxbdM1UtkKHggUf8-A_2OoA3YdZMcQ&oe=68056AAC",
          "width": 640
        },
        {
          "height": 320,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/57154146_390981578158747_8197674039150379008_n.jpg?stp=dst-webp_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=gYyu-tCUK6kQ7kNvgG26L5C&_nc_oc=AdmrEEuwoOx7XFR7YSj5llCh1oD40YtjioX8PlL9IiFpj86Hty2Qjgaolg3slHZ4oDo&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFmNc992sNsLmpaGT7rnQT9GaGrzavwYGSW9h_mzrsSIQ&oe=68056AAC",
          "width": 427
        },
        {
          "height": 540,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/57154146_390981578158747_8197674039150379008_n.jpg?stp=dst-webp_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=gYyu-tCUK6kQ7kNvgG26L5C&_nc_oc=AdmrEEuwoOx7XFR7YSj5llCh1oD40YtjioX8PlL9IiFpj86Hty2Qjgaolg3slHZ4oDo&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFFPUArCewVCaJFImSO-VbYA5lp25geC1RDWiuJH36wrg&oe=68056AAC",
          "width": 720
        },
        {
          "height": 130,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/57154146_390981578158747_8197674039150379008_n.jpg?stp=dst-webp_s173x172&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=gYyu-tCUK6kQ7kNvgG26L5C&_nc_oc=AdmrEEuwoOx7XFR7YSj5llCh1oD40YtjioX8PlL9IiFpj86Hty2Qjgaolg3slHZ4oDo&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEbtf0fMIsCQ4RMnvIJDP2gtAVPu76ULNuwjZ_JAYGq1A&oe=68056AAC",
          "width": 173
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/57154146_390981578158747_8197674039150379008_n.jpg?stp=dst-webp_p75x225&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=gYyu-tCUK6kQ7kNvgG26L5C&_nc_oc=AdmrEEuwoOx7XFR7YSj5llCh1oD40YtjioX8PlL9IiFpj86Hty2Qjgaolg3slHZ4oDo&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYG1qtJ4LADxRvnuJDgpyjsLXju8C_X2PtqkomcTiQQKGg&oe=68056AAC",
          "width": 300
        }
      ],
      "picture": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/57154146_390981578158747_8197674039150379008_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=103&ccb=1-7&_nc_sid=face19&_nc_ohc=gYyu-tCUK6kQ7kNvgG26L5C&_nc_oc=AdmrEEuwoOx7XFR7YSj5llCh1oD40YtjioX8PlL9IiFpj86Hty2Qjgaolg3slHZ4oDo&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFf3yYDmTb8E_Vs16BWuQ-VBZOzwpQZQsRRXmBtzt-51g&oe=68056AAC",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=390981571492081&set=a.110536656203242&type=3"
    },
    {
      "id": "381793139077591",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 1152,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/55439713_381793145744257_4674189290211639296_n.jpg?stp=dst-webp&_nc_cat=109&ccb=1-7&_nc_sid=e21142&_nc_ohc=HnW6kizAVJEQ7kNvgECEq90&_nc_oc=AdmjRtjlB4uYM4jmdpBwjzOXAVUYxOfJZdUlx6LUQTGvQjMDi5XX2Qud3DeZ-6iTvnw&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHRiLqAXM3P7RvNRVlCjfmfz_k8qakq4fxGRRCtrIIH9Q&oe=68056277",
          "width": 2048
        },
        {
          "height": 960,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/55439713_381793145744257_4674189290211639296_n.jpg?stp=dst-webp_p960x960&_nc_cat=109&ccb=1-7&_nc_sid=e21142&_nc_ohc=HnW6kizAVJEQ7kNvgECEq90&_nc_oc=AdmjRtjlB4uYM4jmdpBwjzOXAVUYxOfJZdUlx6LUQTGvQjMDi5XX2Qud3DeZ-6iTvnw&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEezY06cbRyfv8sm_YSzytpZWMoPYPdfBjcxl97MuharA&oe=68056277",
          "width": 1707
        },
        {
          "height": 720,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/55439713_381793145744257_4674189290211639296_n.jpg?stp=dst-webp_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=e21142&_nc_ohc=HnW6kizAVJEQ7kNvgECEq90&_nc_oc=AdmjRtjlB4uYM4jmdpBwjzOXAVUYxOfJZdUlx6LUQTGvQjMDi5XX2Qud3DeZ-6iTvnw&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEDbXJMKv5x4bklf__nuO1oxIZtypKWZS1eML_MAs9SwA&oe=68056277",
          "width": 1280
        },
        {
          "height": 600,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/55439713_381793145744257_4674189290211639296_n.jpg?stp=dst-webp_p600x600&_nc_cat=109&ccb=1-7&_nc_sid=e21142&_nc_ohc=HnW6kizAVJEQ7kNvgECEq90&_nc_oc=AdmjRtjlB4uYM4jmdpBwjzOXAVUYxOfJZdUlx6LUQTGvQjMDi5XX2Qud3DeZ-6iTvnw&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYE1TL-Ql3gPlSAtZTvSnc_kF8aollY1UgLEigMRfAqe2Q&oe=68056277",
          "width": 1067
        },
        {
          "height": 480,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/55439713_381793145744257_4674189290211639296_n.jpg?stp=dst-webp_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=e21142&_nc_ohc=HnW6kizAVJEQ7kNvgECEq90&_nc_oc=AdmjRtjlB4uYM4jmdpBwjzOXAVUYxOfJZdUlx6LUQTGvQjMDi5XX2Qud3DeZ-6iTvnw&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFJz6O__SG1KISE8qzZiEpP1SbqwN8xHGznBlLmr47H7A&oe=68056277",
          "width": 853
        },
        {
          "height": 320,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/55439713_381793145744257_4674189290211639296_n.jpg?stp=dst-webp_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=e21142&_nc_ohc=HnW6kizAVJEQ7kNvgECEq90&_nc_oc=AdmjRtjlB4uYM4jmdpBwjzOXAVUYxOfJZdUlx6LUQTGvQjMDi5XX2Qud3DeZ-6iTvnw&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGK3rLY12pWikP1kopMcZ6rF9kQSrPEWYEd37UxNKvMhw&oe=68056277",
          "width": 569
        },
        {
          "height": 540,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/55439713_381793145744257_4674189290211639296_n.jpg?stp=dst-webp_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=e21142&_nc_ohc=HnW6kizAVJEQ7kNvgECEq90&_nc_oc=AdmjRtjlB4uYM4jmdpBwjzOXAVUYxOfJZdUlx6LUQTGvQjMDi5XX2Qud3DeZ-6iTvnw&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFVJYomqzdI7OfjuNxyPpwiRvDX548A2IzNwtSvy2CVbQ&oe=68056277",
          "width": 960
        },
        {
          "height": 130,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/55439713_381793145744257_4674189290211639296_n.jpg?stp=dst-webp_p130x130&_nc_cat=109&ccb=1-7&_nc_sid=e21142&_nc_ohc=HnW6kizAVJEQ7kNvgECEq90&_nc_oc=AdmjRtjlB4uYM4jmdpBwjzOXAVUYxOfJZdUlx6LUQTGvQjMDi5XX2Qud3DeZ-6iTvnw&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFlm5_UXO-nnopD4WI1h6b8Q9T4jVNuGe0YCfP8rAHM9g&oe=68056277",
          "width": 231
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/55439713_381793145744257_4674189290211639296_n.jpg?stp=dst-webp_p75x225&_nc_cat=109&ccb=1-7&_nc_sid=e21142&_nc_ohc=HnW6kizAVJEQ7kNvgECEq90&_nc_oc=AdmjRtjlB4uYM4jmdpBwjzOXAVUYxOfJZdUlx6LUQTGvQjMDi5XX2Qud3DeZ-6iTvnw&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEaHYsNvBuY-dMzJMQEtI9C4U2x1q-Y4MHlKj5F6_VMfg&oe=68056277",
          "width": 400
        }
      ],
      "picture": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/55439713_381793145744257_4674189290211639296_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=109&ccb=1-7&_nc_sid=face19&_nc_ohc=HnW6kizAVJEQ7kNvgECEq90&_nc_oc=AdmjRtjlB4uYM4jmdpBwjzOXAVUYxOfJZdUlx6LUQTGvQjMDi5XX2Qud3DeZ-6iTvnw&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGWYFGSKS77FSUZEuRq69PtbFmFfWKrwfwhl5N7xnVwmQ&oe=68056277",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=381793139077591&set=a.110536656203242&type=3"
    },
    {
      "id": "369385160318389",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 600,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52983181_369385173651721_5698343251468091392_n.jpg?stp=dst-webp&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=QTMIYldc_vIQ7kNvgF96uAu&_nc_oc=Adm0tUjtw3IEjKtmX56JMXXW32Fjd_cUCds1rrKjZgTRubMVXm3b92WbybYqGj4KhEU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGXG03Ilgt0foqWilnM8sQMwkVOEA2L7UWKaGw8Y9i7_w&oe=680569F3",
          "width": 800
        },
        {
          "height": 480,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52983181_369385173651721_5698343251468091392_n.jpg?stp=dst-webp_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=QTMIYldc_vIQ7kNvgF96uAu&_nc_oc=Adm0tUjtw3IEjKtmX56JMXXW32Fjd_cUCds1rrKjZgTRubMVXm3b92WbybYqGj4KhEU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHAoCWakG5Cc899nwH4UHjDi5x-HKK3cRLJVUPf52CDpg&oe=680569F3",
          "width": 640
        },
        {
          "height": 320,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52983181_369385173651721_5698343251468091392_n.jpg?stp=dst-webp_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=QTMIYldc_vIQ7kNvgF96uAu&_nc_oc=Adm0tUjtw3IEjKtmX56JMXXW32Fjd_cUCds1rrKjZgTRubMVXm3b92WbybYqGj4KhEU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFT3ZW-YXb-frzzMAv_ibjxKPA9kOJcfqvOlgO3AcG5cQ&oe=680569F3",
          "width": 427
        },
        {
          "height": 540,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52983181_369385173651721_5698343251468091392_n.jpg?stp=dst-webp_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=QTMIYldc_vIQ7kNvgF96uAu&_nc_oc=Adm0tUjtw3IEjKtmX56JMXXW32Fjd_cUCds1rrKjZgTRubMVXm3b92WbybYqGj4KhEU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEs9NtMH5q3Rnf9H19sfRs_XCLxbVI-agrhBHRzaz1Fjw&oe=680569F3",
          "width": 720
        },
        {
          "height": 130,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52983181_369385173651721_5698343251468091392_n.jpg?stp=dst-webp_s173x172&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=QTMIYldc_vIQ7kNvgF96uAu&_nc_oc=Adm0tUjtw3IEjKtmX56JMXXW32Fjd_cUCds1rrKjZgTRubMVXm3b92WbybYqGj4KhEU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEeZJxvBfOrZxogoUOAyEno1TJ_30k9hpi8m-6Euyz3lg&oe=680569F3",
          "width": 173
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52983181_369385173651721_5698343251468091392_n.jpg?stp=dst-webp_p75x225&_nc_cat=103&ccb=1-7&_nc_sid=e21142&_nc_ohc=QTMIYldc_vIQ7kNvgF96uAu&_nc_oc=Adm0tUjtw3IEjKtmX56JMXXW32Fjd_cUCds1rrKjZgTRubMVXm3b92WbybYqGj4KhEU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHRjK3RiwooH4OFD0O0CzV_AgMgD5h54w8b7QaF-IKi2A&oe=680569F3",
          "width": 300
        }
      ],
      "picture": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52983181_369385173651721_5698343251468091392_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=103&ccb=1-7&_nc_sid=face19&_nc_ohc=QTMIYldc_vIQ7kNvgF96uAu&_nc_oc=Adm0tUjtw3IEjKtmX56JMXXW32Fjd_cUCds1rrKjZgTRubMVXm3b92WbybYqGj4KhEU&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGlUq--yfgwrRE4wWEw_DxD7XHF8Ka-cBGWaJoQ9cnXrQ&oe=680569F3",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=369385160318389&set=a.110536656203242&type=3"
    },
    {
      "id": "369385156985056",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 623,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52732958_369385170318388_294800486408650752_n.jpg?stp=dst-webp&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=zwgLRowKtVAQ7kNvgG5I5V1&_nc_oc=Adng6vtGZNGVLR1-mAg420rSoWuxKChywdn3QVUzkW8xu63N230N7HduIKxy0uyJS7M&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFMdfZE5Frp5hHzcyopKHC1__bf1Ogj4TjFl0SnXnOv6w&oe=68056E12",
          "width": 831
        },
        {
          "height": 600,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52732958_369385170318388_294800486408650752_n.jpg?stp=dst-webp_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=zwgLRowKtVAQ7kNvgG5I5V1&_nc_oc=Adng6vtGZNGVLR1-mAg420rSoWuxKChywdn3QVUzkW8xu63N230N7HduIKxy0uyJS7M&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHHTpwM4la7_G8x9SUZnj3vukqOAtls1_SpUfoGx9ZwnA&oe=68056E12",
          "width": 800
        },
        {
          "height": 480,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52732958_369385170318388_294800486408650752_n.jpg?stp=dst-webp_s640x640&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=zwgLRowKtVAQ7kNvgG5I5V1&_nc_oc=Adng6vtGZNGVLR1-mAg420rSoWuxKChywdn3QVUzkW8xu63N230N7HduIKxy0uyJS7M&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEUklmU428Pcilu9Ip_1y_3MGe7jq2NsCXMsYtQ74rVDA&oe=68056E12",
          "width": 640
        },
        {
          "height": 320,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52732958_369385170318388_294800486408650752_n.jpg?stp=dst-webp_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=zwgLRowKtVAQ7kNvgG5I5V1&_nc_oc=Adng6vtGZNGVLR1-mAg420rSoWuxKChywdn3QVUzkW8xu63N230N7HduIKxy0uyJS7M&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFL0DpmZvN89FieYQfEzXeaKOmEu9guU70U3Sq7WntY_g&oe=68056E12",
          "width": 427
        },
        {
          "height": 540,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52732958_369385170318388_294800486408650752_n.jpg?stp=dst-webp_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=zwgLRowKtVAQ7kNvgG5I5V1&_nc_oc=Adng6vtGZNGVLR1-mAg420rSoWuxKChywdn3QVUzkW8xu63N230N7HduIKxy0uyJS7M&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHqVz-gDLo49mVkVpLUVCoT_xBW00UOZZgj5sa3ILEi8w&oe=68056E12",
          "width": 720
        },
        {
          "height": 130,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52732958_369385170318388_294800486408650752_n.jpg?stp=dst-webp_s173x172&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=zwgLRowKtVAQ7kNvgG5I5V1&_nc_oc=Adng6vtGZNGVLR1-mAg420rSoWuxKChywdn3QVUzkW8xu63N230N7HduIKxy0uyJS7M&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHvaO_RmVYF8J1Vdb_HT8jD2O-UQ1x93jl90bgZ8JKNyQ&oe=68056E12",
          "width": 173
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52732958_369385170318388_294800486408650752_n.jpg?stp=dst-webp_p75x225&_nc_cat=111&ccb=1-7&_nc_sid=e21142&_nc_ohc=zwgLRowKtVAQ7kNvgG5I5V1&_nc_oc=Adng6vtGZNGVLR1-mAg420rSoWuxKChywdn3QVUzkW8xu63N230N7HduIKxy0uyJS7M&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYExddpl5K1r853kXPF-nSQudM-jEkoQmWgWpi_s7heUaA&oe=68056E12",
          "width": 300
        }
      ],
      "picture": "https://scontent.flis6-2.fna.fbcdn.net/v/t1.6435-9/52732958_369385170318388_294800486408650752_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=111&ccb=1-7&_nc_sid=face19&_nc_ohc=zwgLRowKtVAQ7kNvgG5I5V1&_nc_oc=Adng6vtGZNGVLR1-mAg420rSoWuxKChywdn3QVUzkW8xu63N230N7HduIKxy0uyJS7M&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYH8h2miVCbEdwM0qUljwYs0xubh0CzxnY_fwFh_cUMZsQ&oe=68056E12",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=369385156985056&set=a.110536656203242&type=3"
    },
    {
      "id": "369385153651723",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 480,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/52893668_369385166985055_4115817956611457024_n.jpg?stp=dst-webp&_nc_cat=100&ccb=1-7&_nc_sid=e21142&_nc_ohc=TwGcEUMvaYAQ7kNvgGkBvUi&_nc_oc=AdlFYO-crpV4niEOeK2FEbx0jgF_w0M015JYSOmWt3al1VGqX96vlOhDaCNw6vCuuFs&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEOAGzOvtQrJVG6Y9K2L0fE6ccYqJyeh4EzmbI-I3_FGQ&oe=6805630E",
          "width": 640
        },
        {
          "height": 320,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/52893668_369385166985055_4115817956611457024_n.jpg?stp=dst-webp_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=e21142&_nc_ohc=TwGcEUMvaYAQ7kNvgGkBvUi&_nc_oc=AdlFYO-crpV4niEOeK2FEbx0jgF_w0M015JYSOmWt3al1VGqX96vlOhDaCNw6vCuuFs&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYECcMk3WXbZ7u3QP7mf93Qq5SFeBLuAdjAm8WM6E_D2DA&oe=6805630E",
          "width": 427
        },
        {
          "height": 130,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/52893668_369385166985055_4115817956611457024_n.jpg?stp=dst-webp_s173x172&_nc_cat=100&ccb=1-7&_nc_sid=e21142&_nc_ohc=TwGcEUMvaYAQ7kNvgGkBvUi&_nc_oc=AdlFYO-crpV4niEOeK2FEbx0jgF_w0M015JYSOmWt3al1VGqX96vlOhDaCNw6vCuuFs&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFe2J6X0GlFOrRFXWvwTu4XG7ssmT7Y6nm3oX2trGwzVQ&oe=6805630E",
          "width": 173
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/52893668_369385166985055_4115817956611457024_n.jpg?stp=dst-webp_p75x225&_nc_cat=100&ccb=1-7&_nc_sid=e21142&_nc_ohc=TwGcEUMvaYAQ7kNvgGkBvUi&_nc_oc=AdlFYO-crpV4niEOeK2FEbx0jgF_w0M015JYSOmWt3al1VGqX96vlOhDaCNw6vCuuFs&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYH14p7vBSdjoP5bAF7LMzzWb113cdwAlmCaFmz7GDhuZw&oe=6805630E",
          "width": 300
        }
      ],
      "picture": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/52893668_369385166985055_4115817956611457024_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=100&ccb=1-7&_nc_sid=face19&_nc_ohc=TwGcEUMvaYAQ7kNvgGkBvUi&_nc_oc=AdlFYO-crpV4niEOeK2FEbx0jgF_w0M015JYSOmWt3al1VGqX96vlOhDaCNw6vCuuFs&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHaVz7Qb43XPzP6G_S940EMgz2PYd-p8PH_fPMwLSQ_JA&oe=6805630E",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=369385153651723&set=a.110536656203242&type=3"
    },
    {
      "id": "369385146985057",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 422,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/52637301_369385150318390_4812242746129514496_n.jpg?stp=dst-webp&_nc_cat=104&ccb=1-7&_nc_sid=e21142&_nc_ohc=QIrKsGHUY9AQ7kNvgHvDir-&_nc_oc=AdmhGVEktWU43X4rowaK4bz1XtKle94xhKS-2Z9yz7oHpnXfFUf6vLDg5GWSgxJ7z5k&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFoILO6MZAPRg6E6Hk3yiMCpbb4yg2ywDAt9irOUUbdBg&oe=680564E4",
          "width": 594
        },
        {
          "height": 320,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/52637301_369385150318390_4812242746129514496_n.jpg?stp=dst-webp_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=e21142&_nc_ohc=QIrKsGHUY9AQ7kNvgHvDir-&_nc_oc=AdmhGVEktWU43X4rowaK4bz1XtKle94xhKS-2Z9yz7oHpnXfFUf6vLDg5GWSgxJ7z5k&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHmqhw1T3SpcWnA_CQTOtcpegDPK4pTVapN4Rr5qfDZcQ&oe=680564E4",
          "width": 450
        },
        {
          "height": 130,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/52637301_369385150318390_4812242746129514496_n.jpg?stp=dst-webp_p130x130&_nc_cat=104&ccb=1-7&_nc_sid=e21142&_nc_ohc=QIrKsGHUY9AQ7kNvgHvDir-&_nc_oc=AdmhGVEktWU43X4rowaK4bz1XtKle94xhKS-2Z9yz7oHpnXfFUf6vLDg5GWSgxJ7z5k&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFVJyKdCxSbmg0XG786DWvw9agGKwwd5MoOF2UySGEKPA&oe=680564E4",
          "width": 183
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/52637301_369385150318390_4812242746129514496_n.jpg?stp=dst-webp_p75x225&_nc_cat=104&ccb=1-7&_nc_sid=e21142&_nc_ohc=QIrKsGHUY9AQ7kNvgHvDir-&_nc_oc=AdmhGVEktWU43X4rowaK4bz1XtKle94xhKS-2Z9yz7oHpnXfFUf6vLDg5GWSgxJ7z5k&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYECk7QlpT3Ic_4S21OBg-Du4p_VsfGl9z6rPczGGiwysg&oe=680564E4",
          "width": 317
        }
      ],
      "picture": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/52637301_369385150318390_4812242746129514496_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=104&ccb=1-7&_nc_sid=face19&_nc_ohc=QIrKsGHUY9AQ7kNvgHvDir-&_nc_oc=AdmhGVEktWU43X4rowaK4bz1XtKle94xhKS-2Z9yz7oHpnXfFUf6vLDg5GWSgxJ7z5k&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEeyP-_Gi8O4w4UgMJzIssSEEw01DutMSdfh9dOQacqOQ&oe=680564E4",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=369385146985057&set=a.110536656203242&type=3"
    },
    {
      "id": "245434412713465",
      "name": "agora isto é que é cognac...",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 1807,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/36430399_245434419380131_4146445935334916096_n.jpg?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=37SmAzmyD3QQ7kNvgFaDzn0&_nc_oc=Adk8D7nm_YwZusc5V1EyxVT29mvUfgu2R-SEjGIQi-zy3D3rYPapczM4_QDEfvBzr2U&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEQ1gbH2pxejmye_1nGUbL-CsnikBvW0F9aoOF-dxEF6A&oe=68056B17",
          "width": 1440
        },
        {
          "height": 1205,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/36430399_245434419380131_4146445935334916096_n.jpg?stp=dst-webp_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=37SmAzmyD3QQ7kNvgFaDzn0&_nc_oc=Adk8D7nm_YwZusc5V1EyxVT29mvUfgu2R-SEjGIQi-zy3D3rYPapczM4_QDEfvBzr2U&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFsfAxDPmkpBFonePER0t97n_rZHp1dxSWoIRwyq-sQgw&oe=68056B17",
          "width": 960
        },
        {
          "height": 904,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/36430399_245434419380131_4146445935334916096_n.jpg?stp=dst-webp_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=37SmAzmyD3QQ7kNvgFaDzn0&_nc_oc=Adk8D7nm_YwZusc5V1EyxVT29mvUfgu2R-SEjGIQi-zy3D3rYPapczM4_QDEfvBzr2U&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGdZF6kX9_72Sg1uhi9HOWhYxVgt8lquZzhg7k7aEq1Bg&oe=68056B17",
          "width": 720
        },
        {
          "height": 753,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/36430399_245434419380131_4146445935334916096_n.jpg?stp=dst-webp_p600x600&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=37SmAzmyD3QQ7kNvgFaDzn0&_nc_oc=Adk8D7nm_YwZusc5V1EyxVT29mvUfgu2R-SEjGIQi-zy3D3rYPapczM4_QDEfvBzr2U&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGsKEqjbTqFdtHi-uyO9Fg6ChJks_5XIOW8hv4kAhsfQQ&oe=68056B17",
          "width": 600
        },
        {
          "height": 602,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/36430399_245434419380131_4146445935334916096_n.jpg?stp=dst-webp_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=37SmAzmyD3QQ7kNvgFaDzn0&_nc_oc=Adk8D7nm_YwZusc5V1EyxVT29mvUfgu2R-SEjGIQi-zy3D3rYPapczM4_QDEfvBzr2U&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHR6NWlCKKmw14bLE0dV9FW2jwLcNeC1C5riRpflhE35Q&oe=68056B17",
          "width": 480
        },
        {
          "height": 402,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/36430399_245434419380131_4146445935334916096_n.jpg?stp=dst-webp_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=37SmAzmyD3QQ7kNvgFaDzn0&_nc_oc=Adk8D7nm_YwZusc5V1EyxVT29mvUfgu2R-SEjGIQi-zy3D3rYPapczM4_QDEfvBzr2U&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYE3uAotSxnjEze8RnkD1L67FlJvH0uqZOPcLnp5tIEaCQ&oe=68056B17",
          "width": 320
        },
        {
          "height": 540,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/36430399_245434419380131_4146445935334916096_n.jpg?stp=dst-webp_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=37SmAzmyD3QQ7kNvgFaDzn0&_nc_oc=Adk8D7nm_YwZusc5V1EyxVT29mvUfgu2R-SEjGIQi-zy3D3rYPapczM4_QDEfvBzr2U&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEF_NxYLvep3_UNh1EeaFNzvjBg9MUVk4PL4RYBzQIigQ&oe=68056B17",
          "width": 430
        },
        {
          "height": 163,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/36430399_245434419380131_4146445935334916096_n.jpg?stp=dst-webp_p130x130&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=37SmAzmyD3QQ7kNvgFaDzn0&_nc_oc=Adk8D7nm_YwZusc5V1EyxVT29mvUfgu2R-SEjGIQi-zy3D3rYPapczM4_QDEfvBzr2U&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYF9evPaMjkETIJu4tX9aYVyW2zfHgC8QCOWMjTufjyNbg&oe=68056B17",
          "width": 130
        },
        {
          "height": 226,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/36430399_245434419380131_4146445935334916096_n.jpg?stp=dst-webp_s180x540&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=37SmAzmyD3QQ7kNvgFaDzn0&_nc_oc=Adk8D7nm_YwZusc5V1EyxVT29mvUfgu2R-SEjGIQi-zy3D3rYPapczM4_QDEfvBzr2U&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYG43nXpEsL7t5S2SK9Jo4SI19slbd0WSI-A2PvhSggK2g&oe=68056B17",
          "width": 180
        }
      ],
      "picture": "https://scontent.flis6-1.fna.fbcdn.net/v/t1.6435-9/36430399_245434419380131_4146445935334916096_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=106&ccb=1-7&_nc_sid=face19&_nc_ohc=37SmAzmyD3QQ7kNvgFaDzn0&_nc_oc=Adk8D7nm_YwZusc5V1EyxVT29mvUfgu2R-SEjGIQi-zy3D3rYPapczM4_QDEfvBzr2U&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGnCTpbgv78jMNZI3oEkM4GtpGGGl9jpj29DESauNbHIg&oe=68056B17",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=245434412713465&set=a.110536656203242&type=3"
    },
    {
      "id": "128842154372692",
      "name": "Countryside",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 293,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/481710499_1695731587683733_3097774671096253508_n.jpg?stp=dst-webp&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=5QnwcMVLjDcQ7kNvgEp_BvG&_nc_oc=AdnprqEuM2a8yAKZ2E8PMmDSqR4lP3qhk-iTKouPNKzxvUxnDVtYQarPElAwxozKdmc&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHdTg_P25N-kI6KhaDVZ0BM7qW5Yzgp8mv_CgQY01SEEQ&oe=67E3D248",
          "width": 520
        },
        {
          "height": 130,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/481710499_1695731587683733_3097774671096253508_n.jpg?stp=dst-webp_p130x130&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=5QnwcMVLjDcQ7kNvgEp_BvG&_nc_oc=AdnprqEuM2a8yAKZ2E8PMmDSqR4lP3qhk-iTKouPNKzxvUxnDVtYQarPElAwxozKdmc&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYF9KVtcnvCe8x6w1f6bk9hpM2vXqQjutBSxNqpy5TkqqA&oe=67E3D248",
          "width": 231
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/481710499_1695731587683733_3097774671096253508_n.jpg?stp=dst-webp_p75x225&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=5QnwcMVLjDcQ7kNvgEp_BvG&_nc_oc=AdnprqEuM2a8yAKZ2E8PMmDSqR4lP3qhk-iTKouPNKzxvUxnDVtYQarPElAwxozKdmc&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHCm3XwzeoOHq46-lxe9wTANHLTQ8c-BTHoGYw32dqHIw&oe=67E3D248",
          "width": 399
        }
      ],
      "picture": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/481710499_1695731587683733_3097774671096253508_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=107&ccb=1-7&_nc_sid=face19&_nc_ohc=5QnwcMVLjDcQ7kNvgEp_BvG&_nc_oc=AdnprqEuM2a8yAKZ2E8PMmDSqR4lP3qhk-iTKouPNKzxvUxnDVtYQarPElAwxozKdmc&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFwrEGJikrWSs1KhV2pCKUbMZPLyhjMhbSM7fyfEjgPwA&oe=67E3D248",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=128842154372692&set=a.110536656203242&type=3"
    },
    {
      "id": "128809411042633",
      "name": "rural France",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 293,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/482000892_1695730191017206_5101937521324975216_n.jpg?stp=dst-webp&_nc_cat=110&ccb=1-7&_nc_sid=e21142&_nc_ohc=P7-1WeEF5kwQ7kNvgG6AtMe&_nc_oc=Adl08ctvKfNRSR4kDwQTdzfvIsmFzOLck9R3poUHjk7h19enm1ZT_KemHh390IYlW2w&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFvKKaZxZz1Qd6H2diqWutuuv5S_pjCncsDC2TpsGW-fQ&oe=67E3DDAA",
          "width": 520
        },
        {
          "height": 130,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/482000892_1695730191017206_5101937521324975216_n.jpg?stp=dst-webp_p130x130&_nc_cat=110&ccb=1-7&_nc_sid=e21142&_nc_ohc=P7-1WeEF5kwQ7kNvgG6AtMe&_nc_oc=Adl08ctvKfNRSR4kDwQTdzfvIsmFzOLck9R3poUHjk7h19enm1ZT_KemHh390IYlW2w&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFUdxpPbuKEVRvr7sJyBzWmXec0vX3f_YmcZqX-uqs0kA&oe=67E3DDAA",
          "width": 231
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/482000892_1695730191017206_5101937521324975216_n.jpg?stp=dst-webp_p75x225&_nc_cat=110&ccb=1-7&_nc_sid=e21142&_nc_ohc=P7-1WeEF5kwQ7kNvgG6AtMe&_nc_oc=Adl08ctvKfNRSR4kDwQTdzfvIsmFzOLck9R3poUHjk7h19enm1ZT_KemHh390IYlW2w&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGba0vbYduok6CLSeVQLcWULlIDTPCSETjz6OlMMSiLfA&oe=67E3DDAA",
          "width": 399
        }
      ],
      "picture": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/482000892_1695730191017206_5101937521324975216_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=110&ccb=1-7&_nc_sid=face19&_nc_ohc=P7-1WeEF5kwQ7kNvgG6AtMe&_nc_oc=Adl08ctvKfNRSR4kDwQTdzfvIsmFzOLck9R3poUHjk7h19enm1ZT_KemHh390IYlW2w&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYF3GuSNOVTh--kWvOJmXZJGey4LnInHIjEpesEqwPrL9A&oe=67E3DDAA",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=128809411042633&set=a.110536656203242&type=3"
    },
    {
      "id": "116706185586289",
      "name": "bifana, road side, em Tábua.  5?.",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 520,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/480948317_1694656824457876_3959920557300903899_n.jpg?stp=dst-webp_r90&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=1B1Cd77D4EQQ7kNvgG4P5nu&_nc_oc=AdnQFyC-tbuvYcCvOQc__1WRdaEUDpAVuziepwZdpXuApMsr3SKhKcgFC2yFjliprms&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGCgl2wJ1Inx5W0fH5BSgPLVPREVyCYGwmMZwVslFYDHQ&oe=67E3E207",
          "width": 293
        },
        {
          "height": 231,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/480948317_1694656824457876_3959920557300903899_n.jpg?stp=dst-webp_p130x130_r90&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=1B1Cd77D4EQQ7kNvgG4P5nu&_nc_oc=AdnQFyC-tbuvYcCvOQc__1WRdaEUDpAVuziepwZdpXuApMsr3SKhKcgFC2yFjliprms&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGqLK9DGzwa-bWo7VoXKYmPiDYZgVV3oxfhQaAe-Rr5Qg&oe=67E3E207",
          "width": 130
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/480948317_1694656824457876_3959920557300903899_n.jpg?stp=dst-webp_p75x225_r90&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=1B1Cd77D4EQQ7kNvgG4P5nu&_nc_oc=AdnQFyC-tbuvYcCvOQc__1WRdaEUDpAVuziepwZdpXuApMsr3SKhKcgFC2yFjliprms&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGBcbZbQJq1Zpdu7HLrcq-oQ8FaeGe1pFl1lxC3_ndA2g&oe=67E3E207",
          "width": 127
        }
      ],
      "picture": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/480948317_1694656824457876_3959920557300903899_n.jpg?stp=dst-jpg_r90_s130x130_tt6&_nc_cat=107&ccb=1-7&_nc_sid=face19&_nc_ohc=1B1Cd77D4EQQ7kNvgG4P5nu&_nc_oc=AdnQFyC-tbuvYcCvOQc__1WRdaEUDpAVuziepwZdpXuApMsr3SKhKcgFC2yFjliprms&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFU_fYCzYk98_6SXgbsH2LSJ9wIcrgaj0KwvPXCExJ9kg&oe=67E3E207",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=116706185586289&set=a.110536656203242&type=3"
    },
    {
      "id": "115203272403247",
      "name": "pancorbo - basque country",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 293,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/482001266_1694648767792015_5230098578671514859_n.jpg?stp=dst-webp&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=4yRXk8yRfX4Q7kNvgHOpj4a&_nc_oc=AdkHBxTjZ4hjB-1qng45HZRlvNcaGeXigKqRqhZN1De0gtDBO_lMNKYgN7cbXW5IVhs&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFvQfpzg7WV4xUeAdfVkHm4c5EgJn6bxzrzS9xIh5QPbA&oe=67E3DD12",
          "width": 520
        },
        {
          "height": 130,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/482001266_1694648767792015_5230098578671514859_n.jpg?stp=dst-webp_p130x130&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=4yRXk8yRfX4Q7kNvgHOpj4a&_nc_oc=AdkHBxTjZ4hjB-1qng45HZRlvNcaGeXigKqRqhZN1De0gtDBO_lMNKYgN7cbXW5IVhs&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGUpyARTXzVV6SC2sM_8P2hyfPln0fgN6dzaMBywgdj9A&oe=67E3DD12",
          "width": 231
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/482001266_1694648767792015_5230098578671514859_n.jpg?stp=dst-webp_p75x225&_nc_cat=101&ccb=1-7&_nc_sid=e21142&_nc_ohc=4yRXk8yRfX4Q7kNvgHOpj4a&_nc_oc=AdkHBxTjZ4hjB-1qng45HZRlvNcaGeXigKqRqhZN1De0gtDBO_lMNKYgN7cbXW5IVhs&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFVSRMbvxbLmc6OPQjIZd4ssbiOxHd7tnydVUku_wu7kA&oe=67E3DD12",
          "width": 399
        }
      ],
      "picture": "https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/482001266_1694648767792015_5230098578671514859_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=101&ccb=1-7&_nc_sid=face19&_nc_ohc=4yRXk8yRfX4Q7kNvgHOpj4a&_nc_oc=AdkHBxTjZ4hjB-1qng45HZRlvNcaGeXigKqRqhZN1De0gtDBO_lMNKYgN7cbXW5IVhs&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYH8SUaztFmnKVQ209Swt1_EMB4vgoMbTTa8m7n6wrzMmQ&oe=67E3DD12",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=115203272403247&set=a.110536656203242&type=3"
    },
    {
      "id": "115202385736669",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 293,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/481246206_1694648974458661_8921008162173989471_n.jpg?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=pkYxn_XP-3wQ7kNvgHeP46o&_nc_oc=AdmgnQMw3ITy0OZqW9a_90A8YnXq6eY_XEZGtMhAq4VR1YGplcs-vW0uHjqH4izt8cE&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHALOGXcf-RrwBsSBC3kW5gnODNzTdtr42MMga4Re0O6A&oe=67E3BE0B",
          "width": 520
        },
        {
          "height": 130,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/481246206_1694648974458661_8921008162173989471_n.jpg?stp=dst-webp_p130x130&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=pkYxn_XP-3wQ7kNvgHeP46o&_nc_oc=AdmgnQMw3ITy0OZqW9a_90A8YnXq6eY_XEZGtMhAq4VR1YGplcs-vW0uHjqH4izt8cE&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYF_Jd4mEssm23PMJ-UXIF6-uTqo9aOUdAB_mEIjsoCB_w&oe=67E3BE0B",
          "width": 231
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/481246206_1694648974458661_8921008162173989471_n.jpg?stp=dst-webp_p75x225&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=pkYxn_XP-3wQ7kNvgHeP46o&_nc_oc=AdmgnQMw3ITy0OZqW9a_90A8YnXq6eY_XEZGtMhAq4VR1YGplcs-vW0uHjqH4izt8cE&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEOWDtrh2ROrGacG7x72KuMTooXrxerfCy25xTvtWg9qQ&oe=67E3BE0B",
          "width": 399
        }
      ],
      "picture": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/481246206_1694648974458661_8921008162173989471_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=106&ccb=1-7&_nc_sid=face19&_nc_ohc=pkYxn_XP-3wQ7kNvgHeP46o&_nc_oc=AdmgnQMw3ITy0OZqW9a_90A8YnXq6eY_XEZGtMhAq4VR1YGplcs-vW0uHjqH4izt8cE&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGhbCoMvbYGjIzjXra0q5Pp-oETDl73jbwaMc7syMyuKg&oe=67E3BE0B",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=115202385736669&set=a.110536656203242&type=3"
    },
    {
      "id": "115201132403461",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 293,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/481153295_1694648907792001_6043762123108706979_n.jpg?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=4BHM-pmXez8Q7kNvgGBNuUZ&_nc_oc=Adlv6eSvAa4CK-gJC13LpyFT4k-exsa6L1lhqR9sZ1bzhEtp4Mtj7uYDTM1lVMRlXao&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGR2Fqk6TWvLGUYEQNgnYJkIvOpEzZWMOIARVCDNBCHzw&oe=67E3DE2E",
          "width": 520
        },
        {
          "height": 130,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/481153295_1694648907792001_6043762123108706979_n.jpg?stp=dst-webp_p130x130&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=4BHM-pmXez8Q7kNvgGBNuUZ&_nc_oc=Adlv6eSvAa4CK-gJC13LpyFT4k-exsa6L1lhqR9sZ1bzhEtp4Mtj7uYDTM1lVMRlXao&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHtKf4Di-RF6Jx-wKjPPZN5us6tuoIMXYR2TDl0Avf1qA&oe=67E3DE2E",
          "width": 231
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/481153295_1694648907792001_6043762123108706979_n.jpg?stp=dst-webp_p75x225&_nc_cat=106&ccb=1-7&_nc_sid=e21142&_nc_ohc=4BHM-pmXez8Q7kNvgGBNuUZ&_nc_oc=Adlv6eSvAa4CK-gJC13LpyFT4k-exsa6L1lhqR9sZ1bzhEtp4Mtj7uYDTM1lVMRlXao&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYHDgTGkCQQ0fBmLIfzOk_ZFCkObXVUjeHV8TZijs9RH_Q&oe=67E3DE2E",
          "width": 399
        }
      ],
      "picture": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/481153295_1694648907792001_6043762123108706979_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=106&ccb=1-7&_nc_sid=face19&_nc_ohc=4BHM-pmXez8Q7kNvgGBNuUZ&_nc_oc=Adlv6eSvAa4CK-gJC13LpyFT4k-exsa6L1lhqR9sZ1bzhEtp4Mtj7uYDTM1lVMRlXao&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGOFdvdQXpxGZkPqTvRhxLaLEdwJi9m99NSLJrBOB5NJg&oe=67E3DE2E",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=115201132403461&set=a.110536656203242&type=3"
    },
    {
      "id": "112490092674565",
      "name": "...",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v4/yz/r/StEh3RhPvjk.gif",
      "webp_images": [
        {
          "height": 1441,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/480871098_1693656177891274_5305021970867283965_n.jpg?stp=dst-webp&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=acRP7zQtyLIQ7kNvgHzxfy7&_nc_oc=Adm6SM3E2lh1v97rE1yqxK9q-9ZxTpuTcpvjh6nC-18inUkExUACW3yzCwIedvk8Mew&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEcBThbIbK81Ic5UJx1hkokjq9H716t28oZcs1EIdskTA&oe=67E3F08A",
          "width": 573
        },
        {
          "height": 1207,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/480871098_1693656177891274_5305021970867283965_n.jpg?stp=dst-webp_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=acRP7zQtyLIQ7kNvgHzxfy7&_nc_oc=Adm6SM3E2lh1v97rE1yqxK9q-9ZxTpuTcpvjh6nC-18inUkExUACW3yzCwIedvk8Mew&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGaeJ-ZfdChaDcz0eWLBPy9KCKCJYj6E7MKDY8O2oAf3Q&oe=67E3F08A",
          "width": 480
        },
        {
          "height": 805,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/480871098_1693656177891274_5305021970867283965_n.jpg?stp=dst-webp_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=acRP7zQtyLIQ7kNvgHzxfy7&_nc_oc=Adm6SM3E2lh1v97rE1yqxK9q-9ZxTpuTcpvjh6nC-18inUkExUACW3yzCwIedvk8Mew&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFHQJYdR8gq2b01lKuiM9_WAI7yIpinOvTC_YpUZSkgIA&oe=67E3F08A",
          "width": 320
        },
        {
          "height": 540,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/480871098_1693656177891274_5305021970867283965_n.jpg?stp=dst-webp_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=acRP7zQtyLIQ7kNvgHzxfy7&_nc_oc=Adm6SM3E2lh1v97rE1yqxK9q-9ZxTpuTcpvjh6nC-18inUkExUACW3yzCwIedvk8Mew&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYFrAb7mcvk8MTQzlzYPCn1t3ZjclBCX99BbkN56FbcAgQ&oe=67E3F08A",
          "width": 215
        },
        {
          "height": 327,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/480871098_1693656177891274_5305021970867283965_n.jpg?stp=dst-webp_p130x130&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=acRP7zQtyLIQ7kNvgHzxfy7&_nc_oc=Adm6SM3E2lh1v97rE1yqxK9q-9ZxTpuTcpvjh6nC-18inUkExUACW3yzCwIedvk8Mew&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYGa4PlbxrZXVsFktdOndNBV_MUBHHWa0E94Tli5u0HfMA&oe=67E3F08A",
          "width": 130
        },
        {
          "height": 225,
          "source": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/480871098_1693656177891274_5305021970867283965_n.jpg?stp=dst-webp_p75x225&_nc_cat=107&ccb=1-7&_nc_sid=e21142&_nc_ohc=acRP7zQtyLIQ7kNvgHzxfy7&_nc_oc=Adm6SM3E2lh1v97rE1yqxK9q-9ZxTpuTcpvjh6nC-18inUkExUACW3yzCwIedvk8Mew&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEktC0ripffeDIlx7oQME-83kCf7bfh4rBQEMw8XIq5qQ&oe=67E3F08A",
          "width": 89
        }
      ],
      "picture": "https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/480871098_1693656177891274_5305021970867283965_n.jpg?stp=dst-jpg_s130x130_tt6&_nc_cat=107&ccb=1-7&_nc_sid=face19&_nc_ohc=acRP7zQtyLIQ7kNvgHzxfy7&_nc_oc=Adm6SM3E2lh1v97rE1yqxK9q-9ZxTpuTcpvjh6nC-18inUkExUACW3yzCwIedvk8Mew&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&edm=AC7C4-wEAAAA&_nc_gid=3zLzQcpKsW3-11__bJtKsQ&oh=00_AYEtFC7IVqnCq5s2TxBr34bPdZeTjWv80aADjMEI6O7qfA&oe=67E3F08A",
      "alt_text": "No photo description available.",
      "link": "https://www.facebook.com/photo.php?fbid=112490092674565&set=a.110536656203242&type=3"
    }
  ],
  "paging": {
    "cursors": {
      "before": "OTYzMzQxMzEwOTIyNzY4",
      "after": "MTEyNDkwMDkyNjc0NTY1"
    }
  }
}
    */
    FB.api('/' + theAlbumID + '/photos?fields=id,name,icon,webp_images,picture,alt_text,page_story_id,comments,link,likes', function(response) {
        console.log(JSON.stringify(response));
        var dvFBContent = document.getElementById("dvFBContent");
        var dvFBContentHTML = JSON.stringify(response);
        dvFBContent.innerHTML = dvFBContentHTML;
    });
}


function getFBalbums() {
    /*
    {
  "data": [
    {
      "created_time": "2017-05-28T10:29:44+0000",
      "name": "Mobile uploads",
      "id": "110536656203242"
    },
    {
      "created_time": "2017-05-27T12:35:29+0000",
      "name": "Profile pictures",
      "id": "109058919684349"
    },
    {
      "created_time": "2023-05-28T12:54:30+0000",
      "name": "Timeline photos",
      "id": "1320716808518548"
    }
  ],
  "paging": {
    "cursors": {
      "before": "MTEwNTM2NjU2MjAzMjQy",
      "after": "MTMyMDcxNjgwODUxODU0OAZDZD"
    }
  }
}
    */
    FB.api('/me/albums', function(response) {
        console.log(JSON.stringify(response));
        var dvFBContent = document.getElementById("dvFBContent");
        var dvFBContentHTML = JSON.stringify(response);
        dvFBContent.innerHTML = dvFBContentHTML;
    });
}


function getUFBPosts() {
    // FB.api('/me/feed', function(response) {
    // get all fields in posts
    // what are all fields in posts

     FB.api('/me/posts?fields=privacy,description,child_attachments,created_time,link,permalink_url,icon,status_type,type,id,message,picture,from,caption,name,source,full_picture', function(response) {
        console.log(JSON.stringify(response));
        var dvFBContent = document.getElementById("dvFBContent");
        var dvFBContentHTML = JSON.stringify(response);
        /*

        {
  "data": [
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2025-01-24T10:19:41+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1669073723682853",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1669073723682853",
      "message": "looks like assisted driving. someone elses hand on the pan handle. and if that dude is old, then im one of the founding fathers.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2025-01-12T21:06:26+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1661601754430050",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1661601754430050",
      "message": "thinking that local restaurantes should all have gift certificates available.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2025-01-07T16:05:22+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1658248974765328",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1658248974765328",
      "message": "you write one silly comment on fb and it turns into a 3 day name calling pastime. unreal.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2025-01-06T17:50:00+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1657677411489151",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1657677411489151",
      "message": "yep. monday. and im in a particularly rare form.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "description": "Provided to YouTube by Atlantic RecordsIn My Time of Dying (1990 Remaster) · Led ZeppelinPhysical Graffiti? 1975, 1990 Atlantic Recording CorporationRemaster...",
      "created_time": "2025-01-05T14:28:24+0000",
      "link": "https://youtu.be/scpqae3P7Dg",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1656926651564227",
      "icon": "https://www.facebook.com/images/icons/post.gif",
      "status_type": "shared_story",
      "type": "video",
      "id": "1708921679698057_1656926651564227",
      "message": "oh jojina! or whatevertf hes screaming while i do my sunday thing.
",
      "picture": "https://external.flis6-2.fna.fbcdn.net/emg1/v/t13/7972154645094630614?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fscpqae3P7Dg%2Fmaxresdefault.jpg&fb_obo=1&utld=ytimg.com&stp=c0.5000x0.5000f_dst-emg0_p130x130_q75_tt6&_nc_oc=AdmyfEnyVxYhBLc2lOlbbbePejfuJyfJazqcSgyJGUt2uJMrWEFg4U2qaHrSozyMl8g&ccb=13-1&oh=06_Q39-VXvJMiaF30Wuw5I2m8mtnBUtVUDym4MKDyy39hOHcpQ&oe=67DFE601&_nc_sid=315096",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      },
      "caption": "youtube.com",
      "name": "In My Time of Dying (1990 Remaster)",
      "source": "https://www.youtube.com/embed/scpqae3P7Dg?autoplay=1",
      "full_picture": "https://external.flis6-2.fna.fbcdn.net/emg1/v/t13/7972154645094630614?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fscpqae3P7Dg%2Fmaxresdefault.jpg&fb_obo=1&utld=ytimg.com&stp=dst-emg0_q75_s1280x720_tt6&_nc_oc=AdmyfEnyVxYhBLc2lOlbbbePejfuJyfJazqcSgyJGUt2uJMrWEFg4U2qaHrSozyMl8g&ccb=13-1&oh=06_Q39-8PISO8bJD3FS4tp8DnPm2cKJToVwFxP8AzYeL4jlf04&oe=67DFE601&_nc_sid=50234c"
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Only me",
        "friends": "",
        "value": "SELF"
      },
      "created_time": "2025-01-05T14:10:25+0000",
      "link": "https://jetbolt.io/whitepaper.pdf?v=1x",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1656916564898569",
      "icon": "https://www.facebook.com/images/icons/post.gif",
      "status_type": "shared_story",
      "type": "link",
      "id": "1708921679698057_1656916564898569",
      "message": "put in a couple of hundred on these guys.
from what i understand, they are trying to make building dApps on the skale chain gas free and easy for developers and users. jetbolt.io
anyway, i prefer a rug pull from something like this compared to some meme scheme.
https://jetbolt.io/whitepaper.pdf?v=1x",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      },
      "caption": "jetbolt.io",
      "name": "jetbolt.io"
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-12-06T22:02:47+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1637334476856778",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1637334476856778",
      "message": "edge has the option to create a qr code (image url), when right clicking for the context menu. it should also have option to scan the image for qr codes. in fact, it should be mandatory on all browsers; big and small. get everyone speaking the same language.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-12-06T13:21:55+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1637073990216160",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1637073990216160",
      "message": "wtf with the stories. click one wrong button and it turns into a story. to early for this sh!t.  the poetry/music ok is funny.
on a side,  ZRX is under the radar.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "description": "Provided to YouTube by The Orchard EnterprisesKindred Friend · The Black Crowes · Rich Robinson · Chris RobinsonHappiness Bastards? 2024 Silver Arrow Records...",
      "created_time": "2024-11-28T20:58:57+0000",
      "link": "https://youtu.be/UO_uwXr3AQ4",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1632067660716793",
      "icon": "https://www.facebook.com/images/icons/post.gif",
      "status_type": "shared_story",
      "type": "video",
      "id": "1708921679698057_1632067660716793",
      "message": "https://youtu.be/UO_uwXr3AQ4",
      "picture": "https://external.flis6-2.fna.fbcdn.net/emg1/v/t13/6099992799555829472?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FUO_uwXr3AQ4%2Fmaxresdefault.jpg&fb_obo=1&utld=ytimg.com&stp=c0.5000x0.5000f_dst-emg0_p130x130_q75_tt6&_nc_oc=AdlnSQoQWdFFDkWi6Gre03R1bIeAl840FyxyjCzUM-3kc0CW2g3ZX_23QwTHISiFMqE&ccb=13-1&oh=06_Q39-n9yOUGYLMkDUgI5LTLLybeFo0c52pxteoGzF9BgpOGk&oe=67DFBE6D&_nc_sid=315096",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      },
      "caption": "youtube.com",
      "name": "Kindred Friend",
      "source": "https://www.youtube.com/embed/UO_uwXr3AQ4?autoplay=1",
      "full_picture": "https://external.flis6-2.fna.fbcdn.net/emg1/v/t13/6099992799555829472?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FUO_uwXr3AQ4%2Fmaxresdefault.jpg&fb_obo=1&utld=ytimg.com&stp=dst-emg0_q75_s1280x720_tt6&_nc_oc=AdlnSQoQWdFFDkWi6Gre03R1bIeAl840FyxyjCzUM-3kc0CW2g3ZX_23QwTHISiFMqE&ccb=13-1&oh=06_Q39-_V5arWom07UnPTXqB1EC7BR4pbNpmOVdf-pHz4-pSO0&oe=67DFBE6D&_nc_sid=50234c"
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-11-26T02:02:50+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1630252327564993",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1630252327564993",
      "message": "made fun of Open AI's o1 thinking before speaking.
actually i prefer it on githubs copilot over claude 3.5 sonnet and GPT 4.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "description": "A new HBO documentary directed by Emmy-nominated filmmaker Cullen Hoback claims to have revealed the true identity of the pseudonymous creator of Bitcoin, Satoshi Nakamoto. As Politico notes, Hoback \"drew critical acclaim for his series 'Q: Into the Storm' that exposed the authors of the QAnon consp...",
      "created_time": "2024-10-04T08:31:33+0000",
      "link": "https://slashdot.org/story/24/10/03/2330200/mystery-creator-of-bitcoin-identified-new-hbo-documentary-claims?utm_source=rss1.0mainlinkanon&utm_medium=feed",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1594106877846205",
      "icon": "https://www.facebook.com/images/icons/post.gif",
      "status_type": "shared_story",
      "type": "link",
      "id": "1708921679698057_1594106877846205",
      "message": "the creator was my next door neighbor scheming day and night on how he was going to make his car payments. and out of frustration, while kicking the monopoly box and seeing the money scatter, it all came together.
you guys are a tough fkn crowd. have a nice day.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      },
      "caption": "slashdot.org",
      "name": "Mystery Creator of Bitcoin Identified, New HBO Documentary Claims - Slashdot"
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-10-03T08:38:06+0000",
      "link": "https://html2canvas.hertzen.com/",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1593393084584251",
      "icon": "https://www.facebook.com/images/icons/post.gif",
      "status_type": "shared_story",
      "type": "link",
      "id": "1708921679698057_1593393084584251",
      "message": "but this, this is frkn awesome.
https://html2canvas.hertzen.com/
especially in a time when  all we do is communicate through pictures. like them monkeys selecting the right picture to get a treat. im out. gotta get busy.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      },
      "caption": "html2canvas.hertzen.com",
      "name": "html2canvas - Screenshots with JavaScript"
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "description": "Embedded Posts are a simple way to put public posts - by a Page or a person on Facebook - into the content of your web site or web page. Only public posts from Facebook Pages and profiles can be embedded.",
      "created_time": "2024-09-30T20:42:13+0000",
      "link": "https://developers.facebook.com/docs/plugins/embedded-posts/",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1591603531429873",
      "icon": "https://www.facebook.com/images/icons/post.gif",
      "status_type": "shared_story",
      "type": "link",
      "id": "1708921679698057_1591603531429873",
      "message": "was playing around with the facebook post plugins for web pages. they work fine on desktop, but on mobile they are broken. from what i see, the script creates an iframe to show the facebook post. but on mobile, this from edge console error:
Refused to display 'https://m.facebook.com/' in a frame because it set 'X-Frame-Options' to 'deny'.
thats not the problem, the problem is they really dont care if its broken, or i.d.k.  howtf do you write a script to create an i-frame and then block i-frame request on your server? am i reading this wrong?
they removed the option for the iframe code snippet and they dont say anything about anything.
https://developers.facebook.com/docs/plugins/embedded-posts/",
      "picture": "https://static.xx.fbcdn.net/rsrc.php/v4/y1/r/xGN4CvUH3Nz.png",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      },
      "caption": "developers.facebook.com",
      "name": "Embedded Posts - Social Plugins - Documentation - Meta for Developers",
      "full_picture": "https://static.xx.fbcdn.net/rsrc.php/v4/y1/r/xGN4CvUH3Nz.png"
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Only me",
        "friends": "",
        "value": "SELF"
      },
      "description": "I've been using the Facebook Plugin for years, on dozens of websites, but all of a sudden, I can only see the page's facebook header, the actual feed appears only as a spinning icon. This is on my",
      "created_time": "2024-09-28T10:51:24+0000",
      "link": "https://stackoverflow.com/a/79033993/1082021",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1589832841606942",
      "icon": "https://www.facebook.com/images/icons/post.gif",
      "status_type": "shared_story",
      "type": "link",
      "id": "1708921679698057_1589832841606942",
      "message": "https://stackoverflow.com/a/79033993/1082021
not just a fb issue, google search js, etc.
i wish they knew we love ajax to.",
      "picture": "https://external.flis6-2.fna.fbcdn.net/emg1/v/t13/17131907803471129010?url=https%3A%2F%2Fcdn.sstatic.net%2FSites%2Fstackoverflow%2FImg%2Fapple-touch-icon%402.png%3Fv%3D73d79a89bded&fb_obo=1&utld=sstatic.net&stp=c0.5000x0.5000f_dst-emg0_p130x130_q75_tt6&_nc_oc=Adlpy34DHxsAVMP6IT22vn944PlfOy7SxSnH_VAkXf0IWiVQ2lbPzNSOVButX1oF8PY&ccb=13-1&oh=06_Q39-rlngdc15nVvncgg98lNnWby4pvzXuZoJ8KTXz5fnqgY&oe=67DFC9D9&_nc_sid=315096",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      },
      "caption": "stackoverflow.com",
      "name": "Facebook Plugin not showing on my desktop or mobile, but appears fine on another desktop",
      "full_picture": "https://external.flis6-2.fna.fbcdn.net/emg1/v/t13/17131907803471129010?url=https%3A%2F%2Fcdn.sstatic.net%2FSites%2Fstackoverflow%2FImg%2Fapple-touch-icon%402.png%3Fv%3D73d79a89bded&fb_obo=1&utld=sstatic.net&_nc_oc=Adlpy34DHxsAVMP6IT22vn944PlfOy7SxSnH_VAkXf0IWiVQ2lbPzNSOVButX1oF8PY&ccb=13-1&stp=dst-emg0_fr_q75_tt6&ur=50234c&_nc_sid=64c8fc&oh=06_Q39-2fhMdFee3mIuwIHSbxrCelYghW6r8pk9NU5nx1eK6l4&oe=67DFC9D9"
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-09-23T21:24:04+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1586574201932806",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1586574201932806",
      "message": "3mile island. amazon i think is also getting some reactors cranking. computation requires energy. regardless of medium used to execute it. probably cutting co2 emissions in the process so fck it.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-09-23T21:17:13+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1586571301933096",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1586571301933096",
      "message": "yep. your the king of fools. carry on. you can do it.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-09-22T20:45:56+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1585859862004240",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1585859862004240",
      "message": "partly i would say. lack of innovation, eternal shelf life, cheap imports, and maybe bad management, ecological friction, i.d.k. ask the rubbermaid.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-09-22T13:52:37+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1585635198693373",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1585635198693373",
      "message": "rhe parking lot prop thing. forgot to mention the body repair/paint.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-09-21T00:12:20+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1584403555483204",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1584403555483204",
      "message": "here they are setting up car dealerships with mechanic support in city owned and apartment complex parking lots. the latest fad in rising costs of property; use someone else's.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-09-03T01:59:30+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1571949410061952",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1571949410061952",
      "message": "so, forgot i had a hotmail account for the laptop i bought, ms requires one or something to the effect. forgot about this account, but came across it today and logged in. had a bunch of messages from fb, and didn't remember ever opening an fb account with this email. though it was fishing, but confirmed the links were legit. followed a link, and tried a password for login. had a new password sent and was logged in to this kid from brazil account who had 7 friends and last post was in 2012.
wtf do i do. delete the account?  no rest at all. on a fkn Monday. waiting for the fb police to show up.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-08-31T23:11:40+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1570599993530227",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1570599993530227",
      "message": "hit the duckduckgo search engine as default on my phone by mistake. actually, nice duck. ad free youtube. been with google since birth. i need a reason to swutch back now.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-08-31T20:47:03+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1570548983535328",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1570548983535328",
      "message": "NY Fed judge threw out the DOGE investors losses based on Elon Musk tweets and such of DOGE coin.
\"DOGE to the moon!\", seems like a legit prospectus to me.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-08-31T20:26:10+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1570540900202803",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1570540900202803",
      "message": "no argument here.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-08-15T02:44:59+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1559887271268166",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1559887271268166",
      "message": "soouuul traaiin. fck. gotta go to sleep.",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    },
    {
      "privacy": {
        "allow": "",
        "deny": "",
        "description": "Your friends",
        "friends": "",
        "value": "ALL_FRIENDS"
      },
      "created_time": "2024-08-15T02:22:17+0000",
      "permalink_url": "https://www.facebook.com/1708921679698057/posts/1559874944602732",
      "status_type": "mobile_status_update",
      "type": "status",
      "id": "1708921679698057_1559874944602732",
      "message": "Emily Chang's interview with Palmer Luckey hit spot on this. time consuming bureaucracy and tech do not mix.
https://www.youtube.com/watch?v=ItLFpYha6Wc",
      "from": {
        "name": "Joao Brs",
        "id": "1708921679698057"
      }
    }
  ],
  "paging": {
    "previous": "https://graph.facebook.com/v22.0/1708921679698057/posts?access_token=EAAZAymZC1RQtQBOxzyNmJx2cBUZCxxCY2oh3NPvCHQiQjCOusVVjji7g6xJxot1ChCdu4YryUKOLBhwZBUorG1AYYiI3NOkxYe6piUarFH6b2ZBNIkNwWEs78E9Y9rywZCZBZBYn9ZAaBvDngpNzi9woEnW0ZAefeQPcQQD9slqpnZCDCsy8hZCcvnYIrnnszTOqhdxAcgUhqI524n3or5cTcvZCxKLPOILEq96z4HP5HdiU0CYa5G7qZCK2Qb&pretty=0&fields=privacy%2Cdescription%2Cchild_attachments%2Ccreated_time%2Clink%2Cpermalink_url%2Cicon%2Cstatus_type%2Ctype%2Cid%2Cmessage%2Cpicture%2Cfrom%2Ccaption%2Cname%2Csource%2Cfull_picture&__previous=1&since=1737713981&until&__paging_token=enc_AdD5yNQ9asuBvZAqd4gmgxqGbm92cEmdG6pSFPsBCuPAb2FTGJZB4gSTONrmZCZArx9i5ZBZChdRIj6doBKCAWRvzWpjWQlzmj4eZBAyi4HZAZBmaGs3DNgZDZD",
    "next": "https://graph.facebook.com/v22.0/1708921679698057/posts?access_token=EAAZAymZC1RQtQBOxzyNmJx2cBUZCxxCY2oh3NPvCHQiQjCOusVVjji7g6xJxot1ChCdu4YryUKOLBhwZBUorG1AYYiI3NOkxYe6piUarFH6b2ZBNIkNwWEs78E9Y9rywZCZBZBYn9ZAaBvDngpNzi9woEnW0ZAefeQPcQQD9slqpnZCDCsy8hZCcvnYIrnnszTOqhdxAcgUhqI524n3or5cTcvZCxKLPOILEq96z4HP5HdiU0CYa5G7qZCK2Qb&pretty=0&fields=privacy%2Cdescription%2Cchild_attachments%2Ccreated_time%2Clink%2Cpermalink_url%2Cicon%2Cstatus_type%2Ctype%2Cid%2Cmessage%2Cpicture%2Cfrom%2Ccaption%2Cname%2Csource%2Cfull_picture&until=1723688537&since&__paging_token=enc_AdDab3v2xypsbpAMlu5PKu0qIbmToji0S1h5yp0ZBhZBvEYrGKcv7RPjlS8B9QS5SnGfZAEFpXxeGYTytOXm5B74pdtN0atFfcZC6n41MLLRp16AEQZDZD&__previous"
  }
}


        for (var i = 0; i < response.data.length; i++) {
            var post = response.data[i];
            dvFBContentHTML += "<div class='post'><div class='post-header'><img src='https://graph.facebook.com/" + post.from.id + "/picture' /><span>" + post.from.name + "</span></div>";
            if (post.message) {
                dvFBContentHTML += "<div class='post-content'>" + post.message + "</div>";
            }
            if (post.picture) {
                dvFBContentHTML += "<div class='post-picture'><img src='" + post.picture + "' /></div>";
            }
            dvFBContentHTML += "</div>";
        }
        */
       dvFBContentStr = "";
       tPostTtle = "";
         tPostCntnt = "";
            tPostImg = "";
            tPostSrc = "";
            tPostLnk = "";
            tPostPrvt = "";
            tPostCptn = "";
            tPostName = "";
            tPostMsg = "";
            tPostDesc = "";
            tPostIcon = "";
            tPostFrm = "";
            tPostType = "";
            tPostId = "";
            tPostStsType = "";
            tPostCrtTime = "";
            tPostPermLnk = "";
            tPostFullPic = "";

            tMainPTttl = "";
            tMainPTcntnt = "";
            tMainPMsg = "";
            tMainPTimg = "";
            tMainPTsrc = "";
            tMainPTlnk = "";
            tMainPTprvt = "";
            tMainPTcptn = "";
            tMainPTname = "";
            tMainPTdesc = "";
            tMainPTicon = "";
            tMainPTfrm = "";
            tMainPTtype = "";
            tMainPTid = "";
            tMainPTstsType = "";
            tMainPTcrtTime = "";
            tMainPTpermLnk = "";
            tMainPTfullPic = "";
            for(var i = 0; i < response.data.length; i++) {
                if(response.data[i].message) {
                    tPostMsg = response.data[i].message;
                } else {
                    if(response.data[i].name) {
                        tPostMsg = response.data[i].name;
                    } else if(response.data[i].description) {
                        tPostMsg = response.data[i].description;
                    }
                }

                if(response.data[i].picture) {
                    tPostImg = response.data[i].picture;
                } else if(response.data[i].full_picture) {
                    tPostImg = response.data[i].full_picture;
                } else if(response.data[i].icon) {
                    tPostImg = response.data[i].icon;
                } else {
                    tPostImg = "";
                }


                if(response.data[i].type) {
                    tPostType = response.data[i].type;
                }
                if(response.data[i].id) {
                    tPostId = response.data[i].id;
                }
                if(response.data[i].status_type) {
                    tPostStsType = response.data[i].status_type;
                }
                if(response.data[i].created_time) {
                    tPostCrtTime = response.data[i].created_time;
                }
                if(response.data[i].permalink_url) {
                    tPostPermLnk = response.data[i].permalink_url;
                }

                tMainPTttl += tPostTtle;
                tMainPTcntnt += tPostCntnt;
                tMainPMsg += tPostMsg;
                tMainPTimg += tPostImg;
                tMainPTsrc += tPostSrc;
                tMainPTlnk += tPostLnk;
                tMainPTprvt += tPostPrvt;
                tMainPTcptn += tPostCptn;
                tMainPTname += tPostName;
                tMainPTdesc += tPostDesc;
                tMainPTicon += tPostIcon;
                tMainPTfrm += tPostFrm;
                tMainPTtype += tPostType;
                tMainPTid += tPostId;
                tMainPTstsType += tPostStsType;
                tMainPTcrtTime += tPostCrtTime;
                tMainPTpermLnk += tPostPermLnk;
                tMainPTfullPic += tPostFullPic;
                dvFBContentStr += "<div class='post'><div class='post-header'><img src='https://graph.facebook.com/" + tPostFrm.id + "/picture' /><span>" + tPostFrm.name + "</span></div>";
                if(tPostMsg) {
                    dvFBContentStr += "<div class='post-content'>" + tPostMsg + "</div>";
                }
                if(tPostImg) {
                    dvFBContentStr += "<div class='post-picture'><img src='" + tPostImg + "' /></div>";
                }
                dvFBContentStr += "</div>";
            }
            document.getElementById("dvFBContent").innerHTML = dvFBContentStr;

    });
}
function doFBLogout() {
    FB.logout(function(response) {
        document.getElementById("dvFBContent").innerHTML = "";
    });
}

function doFBLogin() {
  // add the pages_read_engagement permission to the list of permissions
  // you want to ask from the user

     // If you are logged in, automatically get your name and email adress, your public profile information
     FB.login(function(response) {
      if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       FB.api('/me', {fields: 'name'}, function(response) {
           document.getElementById("dvFBContent").innerHTML = "Good to see you, " + response.name + ". i see your email address is " + response.email;
           getUFBPosts();
       }, {scope: 'pages_read_engagement'});

      } else {
      //  If you are not logged in, the login dialog will open for you to login asking for permission to get your public profile and email
       console.log('User cancelled login or did not fully authorize.');
      JSSHOP.ui.doAlertBox("error", "Alert", "User cancelled login or popup blocker is enabled.", "noQvalue");
      }
      });
}

function foFBpopnotblkd() {


    // Initialize the SDK with your app and the Graph API version for your app
    FB.init({
    appId            : '1814864155722452',
    xfbml            : true,
    version          : 'v22.0',
    // add pages_read_engagement to the list of permissions you want to ask from the user
    // you can add more permissions if you want
     scope: 'pages_read_engagement'


    });
    // first check if user is already logged in, if not, login
    FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      document.getElementById("dvFBContent").innerHTML = "Good to see you, " + response.name + ". i see your email address is " + response.email;

      // the user is logged in and has authenticated your app, and response.authResponse supplies the user's ID, a valid access token, a signed request, and the time the access token and signed request each expire
      console.log('connected');
      getUFBPosts();
      } else {
        doFBLogin();

    }
    }
    );


}

var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
         // fb test stuff
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {foFBpopnotblkd();return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk')
    );
    setTimeout(function() {foFBpopnotblkd();}, 1000);

};



