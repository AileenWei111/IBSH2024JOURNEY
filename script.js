const passwords = {
    'Aileen': 'alltimeamericanbitch',
    'Aashika': 'fulltimeamericanhoe',
    'Esther': 'hoeshit',
    'Sunny': 'lokilover',
    'Angela': 'zhonglirider',
    'Lynette': 'deftones4life',
    'Salem': 'hweimaxxing'
};

function getUniqueMessage(studentName) {
    const uniqueMessages = {
        'Aileen': {
            message1: "That's me twat",
            boxColor: "#FAD7A0", 
            textColor: "#000000" 
        },
        'Aashika': {
            message1: "Congrats!<p>Always proud of you!",
            boxColor: "#E8DAEF", 
            textColor: "#000000"
        },
        'Angela': {
            message1: "Ayyyy mate! Happy graduation you MADE IT!! So how do we feel about surviving AP calculus AB and psychology?? I bet you did great and that you're gonna get a 5 when the score is released. You’ve always been super kind, smart, and generous so I have no doubt you’re going to do great in your future. Please believe in yourself, and take breaks when you need to! I know you’re graduating and looking forward to what’s ahead of you, but if you ever need anything/someone to talk to, your old friends will always be here (including me xp). Like, damn girl you need to tell me about everything that’s happened in IBSH so far cause I’m confused haha. Anyway, let’s rewind everything for a second,<p>We first met in 8th grade, when Salem introduced us to each other. You told me you were from Canada and I was like “OHHH OUI BAGUETTE?” so that was funny lmao. You were willing to become friends with me and I really appreciated that! We talked for a bit in 8th grade but there was nothing much, and 9th grade was when we truly got to know each other as friends. We were both obsessed with genshin and those moments were PEAK!!! Like genshin was actually so fun at the beginning and I would do anything to experience playing genshin with you again. We had sports science together, and I bet you remember how I was dying every class cause I looked like a clown LOL. We also had math class (before you abandoned us and went into honours grrrr) and I remember at the end of school year we were panicking cause we failed to turn in our math packets to the teacher, we were legit emailing her one by one 😭”LAOSHIIII WAIT HERE ARE THE PACKETS IM SO SORRY FOR TURNING THEM LATE WE DIDNT KNOW CAN YOU PLS NOT DEDUCT OUR POOSAYS” (over exaggeration but you get the idea)<p>And then there was 10th and 11th grade. I feel like I have to address some of this because I never really touched on this; I was just very immature during those years and I deeply apologize for any frustrations I have caused, I’m sorry. This is really awkward to admit especially in your graduation letter, but I really just don’t want any bad blood between us if there still is some haha xD. I’m just so glad that we became close again in 12th grade because you were a blast to hang out with! I genuinely loved talking to you, and I’d definitely want to hang out more with you some more once I graduate and head back to Taiwan for university. Happy graduation and wish you all the best, let’s grab a drink when we meet up again in Taiwan!<p>Best wishes to you,<p>Aileen.",
            message2: "<p>Angelaaaa!<p>Congratulations for graduating omg, getting into college in Taiwan seems really difficult but you managed to do it (cuz you’re smart af :)), woohoo! I can’t believe time went by so fast that we are actually going to college now :0<p>I had so much fun hanging out with you, from sharing mutual interest in anime, to drawing together and supporting each other's art, and just talking about random stuff in general :>. I wish we could have had a drawing session together someday outside of school but hopefully we have the chance to do that if I visit Taiwan! O also speaking of art, I would love to see any recent art that you have done so plz send some if you have any <3 Also let me know if you have any good anime or music recs lmao (and in case you are wondering, I am currently watching Nana rn, it's pretty gud imo) :D<p>Even though we are now in completely different parts of the globe right now, I hope we can continue staying in touch and even meet up sometime with our other besties :3 And if you do come to America someday, you better come to Iowa so that we can hang out (and harvest corn lol JKJK) >:D Again, congratulations for officially completing highschool and I hope for a successful future ahead <3<p>Best Regards,<p>Your bestie Aashika :D",
            boxColor: "#D6EAF8", 
            textColor: "#000000"
        },
        'Esther': {
            message1: "OMG MOMMY YOU’RE GRADUATING!!!!! My sugar mommy and wallet mwahhh i’m so proud of you, thank you for being my friend in IBSH and I bet you will do great things in life! Mommy you’re actually the kindest, most mature, optimistic, generous, and caring person I’ve ever met and I don’t know what I would’ve done without you in IBSH, you made 10th, 11th, 12th grade for me soo fun. I miss the moments such as us in music appreciation with lynette, goofing around with Aashika during physics, you walking with me to hi life, singing with you in activities and much more.<p>In 10th grade, we sat next to each other for homeroom as well as for English class. We also had lots of fun during P.E together. You often helped me with my chinese homework cause I’m just THAT bad at chinese, thank you smm hahahah. MEOWW We weren’t very close but we talked very often, and it was nice getting to know you better!<p>In 11th grade, you sat behind me for homeroom and we shared plennnntyyy of classes together, and naturally got closer as time passed! It also helped that I never bring money to school, so you became my “mother” and often lended me money (i’m sorry if I still haven’t paid back some money uwu) We had P.E, english, music appreciation, physics, activities, and U.S history together and I couldn’t have had that much fun without you. Do you remember dancing to JYP’s groove back in P.E? You also gave me a sticker of him but sadly it peeled off :(((. Next time we meet plz give me another sticker hmph! In music appreciation we’d do stupid stuff and annoy Ms. Francis, it was truly the best class xDDD. Do you remember us drawing on balloons during physics class? Us practicing paper hearts by Tori Kelly for the charity night performance?? You were awesome, thank you so much for being my singing buddyyyy! During activities we also had ping-pong and sang our hearts out, we were annoying so many people during Ping-pong class HAHAHAH, that was also the best class. It’s no coincidence that everywhere you are, there is always positivity and fun in it; you are always the one who brings so much joy to the room. I hope you continue to be yourself, have fun, and act goofy because life is too short!<p>In 12th grade, we often bickered like daughter and mother but you know how much i love you >3< HAHAHA. As always, in my last months you were such a joy to be around, and your presence makes everyone feel comfortable. We shared so many classes together in 12th grade it’s actually crazy, and I’m too lazy to type all of it out but you helped me make thousands of funny memories in a span of 3 months. Again, I’m so thankful that I got to become friends with you in IBSH, and I hope we can continue to hang out after you graduate. Please come visit Maryland when you come to the U.S, mother! Actually, I ORDER you to come visit me or I will kick your hoeshit, I hope this letter finds you before I find him. CONGRATULATIONS ON GRADUATING MOMMYYYYY<p>Your daughter,<p>Aileen.",
            message2: "<p>温曉愛！<p>很可愛！<p>乖小孩！<p>我超級愛！<p>Hope you remembered that epic chinese poem hee hee ;3 But anyways, CONGRATULATIONS ON GRADUATING!!! You are such a hardworking, kind, and inspiring friend so I am definitely not surprised you got into such great universities (and to the universities that rejected you, I will shoot them down dw >;3). Since Michigan and Indiana are so close to Iowa, we can definitely hang out sometime this year once you choose between those two, so exciting!<p>I am so happy that I got to meet you in 10th grade! I remember Salem was the one who introduced you to me and then I started showing you my doodles and even a doll I crocheted. I remember you being so surprised after seeing them and giving so many nice comments, I knew you would be a great and supportive friend, and I was correct! I really enjoyed being at your company, from doing stupid fun things together, to working on school projects like the Hamlet film and AP CS game, I enjoyed every minute we were together <3 Also even though we may have different worldviews such as religious differences, I enjoyed learning more about your background and going to youth groups with you, giving me the opportunity to see the world from different perspectives! I also really appreciated you for trying to understand my feelings and stuff like my gender and tysm for being so supportive ☆*o(≧▽≦)o*☆!<p>You know, there were many times during junior year where I was acting all emo and like not talking as much, I just want to say I am so sorry about that ahhh :’3! I really regret taking our time together for granted since I didn’t know I was going to leave IBSH so early but again, I'm happy that we are still friends and we better meet up soon once we start college <3<p>Best Regards,<p>帥哥簡詩卡 :3",
            boxColor: "#FCF3CF", 
            textColor: "#000000" 
        },
        'Lynette': {
            message1: "Hello there, gorgeous! Happy graduation to you, and I wish you good luck in whichever path you take towards your future. Remember, take a deep breath because it will all turn out fine in the end, okay? Sometimes things don’t go as you expected, but that doesn’t mean it’s a bad thing. Every experience is worth something, and learn to make the most out of it~ Happy graduation!<p>I remember first noticing you in 8th grade (I mean obviously cause that’s when I came to IBSH), but you stood out because of your cool demeanor, bad girl energy, and mysteriousness. I always wanted to become friends with you, but you were difficult to approach (or maybe I was just too awkward at that time). I was finally able to get one step closer to you because we did the Romeo & Juliet project together, and we became acquaintances in 9th grade. Then, our friendship started to really bloom in 10th grade because of Tony Fwu’s class hehe, do you remember us doing stupid stuff with Aashika? We drew amongus and random stuff on each other's arms, beatboxed the amongus theme, talked about silly ideas, etc… I unironically miss those moments. In 11th grade our friendship got even closer because we shared a class under Salopek (that stinky white old man) and we did many activities together. I enjoyed clowning on him with you, and I’m also so thankful that you shared your AP video notes with me because I would’ve died without your help TT. There was also InTune, and even though I’m not very good at singing, you still joined my band and helped me perform as a guitarist on stage… you’re a really great friend and I wish you can realize that.<p>In 12th grade we did even more things together such as regular hangouts, and I stayed at your house for 1 week; I’m so sorry you and your parents had to endure me for such a long time but I enjoyed being in your company for so long before leaving. You made all these years of IBSH great for me, and I will forever be thankful for you and consider you a great friend. I really wish you the best of luck in your future and hope you meet great people and end up in a great place. You’re an amazing guitarist, a generous and outgoing person, and also very smart, very very very pretty, so I hope you never doubt yourself and your abilities. Again, I wish you the very best with your graduation!<p>Congratulations,<p>Aileen. ",
            message2: "<p>Hai Lynette :D<p>Congratulations on graduating, you slayed fr :D I hope you have lots of fun at your future college and find more gays >:)<p>I think you are a very cool and supportive person and I am glad that you are part of my life. I appreciate you introducing me to playing guitar and suggesting some cool artists and songs to listen to! I remember when lil regs came together to form a band and we performed Black Sheep (the Scott Pilgrim one lol) and Paper Hearts, you did really great in those performances and I also loved listening to other songs you play on guitar and even riffs that you made on your instagram story :) Made me wish I still had my guitar from Taiwan lol XD I wish we could’ve performed together more since we have really similar music tastes and it would be cool if we did more rock songs together! Oh! Also speaking of music, I’ve been listening to this artist called “vs self”, though I kinda just discovered them recently so I didn’t listen to a lot of their songs yet lol. I think you would like their songs tho (if you haven’t listened to them yet) and my favortie song from them is “Desert Pt. II”! I’ve also been listening to more System of a Down lately and I would also suggest them if you haven’t listened to them yet :D<p>Besides being a great guitarist, you are also really supportive and understanding and i really appreciate that :3 From listening to me venting in the group chat, to just talking about random stuff, and video calling during lunch or class, I enjoyed all of it! I can’t believe all of that ended so soon though, I wish we could have done more, if only I’ve known sooner that I would leave IBSH so early :’( <p>Once again, I am so happy for you for finally leaving IBSH and moving on to cooler places (and hopefully finding more queer people lol)! I hope you become successful and have a slaytastic year ahead of you <3<p>Best Regards,<p>Your Bestie Raja :>",
            boxColor: "#D5DBDB", 
            textColor: "#000000"
        },
        'Salem': {
            message1: "Amazing work!",
            message2: "<p>Haii Bestie ong :3<p>So much has changed since we first met, new hobbies, interests, identity, and more! We have been through so much together, even when we went a whole year without seeing each other. I was surprised that I didn’t feel awkward when we met up in Jiao Da since we talked just as naturally as we do online and it was such a relieving experience :D I hope we can meet up like this again in the near future cuz I miss you so much omg >.<<p>You have been one of the most influential friends I have ever had, from helping me out in my art journey, to helping me come to terms with my gender identity, and also being a great listener during my darkest times. I enjoyed all the extremely random things that we did and talked about like our Y/N roleplay we did with our table (the physics professor and delinquent femboy LMAO), doing random dares like the ahegao face (:’3), and also the drawing challenges we did together. I really REALLY wished we hung out more omg, I had so much fun going to Big City with you and buying random stuff (like the maid costume and bunny ears if you remember lol). I could list all the fun things that we have done together and have impacted my life but then this letter would be wayyy too long :0 <p>I know that things have been extremely rough lately but I know very well you will overcome your hardships soon! You are a really strong person and I am so proud of you for continuing on whatever journey you are embarking right now (and yes, I really do mean it)! Also please don’t feel bad if I don’t reach out sometimes since I still deeply care and think about you, I will still gladly talk to you even during busy times when you want someone to talk to and ilysm <3<p>Best Regards,<p>Your Bestie Raja <3",
            boxColor: "#F9E7E7", 
            textColor: "#C39BD3" 
        },
        'Sunny': {
            message1: "I love you. There hasn’t been a day when I didn’t think about you, and you always found a way into my dreams; maybe that’s why I always wake up a bit disappointed that it isn’t real. You don’t know how badly I wish you were here, and even after all the time we spent apart, I couldn’t miss you any less– my feelings are still the same as they were on day one. I miss you.<p>When I was little, I looked up at the skies and wondered why the sun followed me everywhere I went. I didn’t know the answer, but it made me feel special.<p>And now, when I look at you I wonder why you cherish me so much despite my irregularity, flaws, and incompetence… I certainly don’t know the answer, but you still make me feel special. Just like the sun, you shine through every corner, every depth, every crevice of my world despite being so far away, yet so close. You are the only sun, the only one that makes my world so warm, so colourful, and so beautiful that I wouldn’t ever dare to be born in another solar system.<p>I remember when we first met in 8th grade, and though we had a rocky start, look at where we are now. To be fair I have no idea how I won you over but I somehow did, kudos to me! My most memorable moment with you in 8th grade was when… to be honest I don’t have a very specific moment that I remember, but I liked it whenever you laughed wide and open. You used to be somewhat cold, so seeing those moments where you opened up were really charming, and I wanted to get to know you better. I’m glad you’ve warmed up to me ever since then! One thing that’s always been consistent about your personality from 8th to 12th grade though, is your proclivity to simp for celebrities and actors (especially white men), but I’ll let that slide because you’re Sunny.<p>In 9th grade, my favorite memory was, there were many actually. From studying biology together in the corner of the classroom, filming geography projects in Salem’s house, texting each other excessively during lockdown, singing in Ms. Lin’s acapella class etc… None of them were better than the other, they are all memories I hold onto so dearly. However, I felt the most touched when you asked me to go with you to Charity Night, which was on your birthday. I remember you were pretty insistent actually, haha– I didn’t understand why you wanted me to accompany you out of all people. I was just so glad that I could make your birthday a little more fun, and that I’d get to be the one celebrating your special day.<p>In 10th grade, I enjoyed many things. Remember our trio? We were awesome for sure! Lots of things happened that year, but I’m glad I got closer to you out of all things. You came to my house for the first time and we watched euphoria together, sang karaoke, talked non-stop before sleep. But, I’m sorry you had to wake up 4 hours earlier than me because of my own alarm… oops! We also went to big city with some other friends, and surprisingly the most enjoyable part of that hangout was talking to one another on the bus. Oh, and also the field trip to an aquarium! Whatever its name was, I was walking with you there and the scenery was so pretty. Lastly, you came to my house again for my birthday with Salem, and we watched a horror movie– I forgot its name, even though it sent unholy shivers down my spine. We made silly little tiktoks for each other as well, and now I can’t even look back on it. If I watch it again I might need to get botox as a consequence of excessive cringing. Anyway! I’m glad you became a little more cringe that year, because um… how else will you become closer to the cringelord (me)? Needed to match my vibes xp.<p>In 11th grade, lots of things happened again, but as always our bond was getting deeper and deeper so that’s the good thing to focus on hehe. We walked with each other almost everyday to the back gate, didn’t we? Those were just simple moments, yet those memories I missed the most… it was so peaceful, and you walked extra steps everyday just to talk to me. I love you <3. After I ran in field day, I was on the verge of fainting yet you did everything you could to help me survive in that moment, I’m so grateful for you. I really appreciate everything you’ve done for me, you’re an amazing best friend. Oh! Do you remember activities? Ping Pong? We were with Jenny, Esther, and Lynette there! Those moments were also one of the best, where we’d goof around and be funny. Remember me singing loudly with Esther and pissing off you guys along with some other Ping Pong kids? Hahaha again, those were just simple moments, but it turned out to be the most memorable for me. There are lots more to name such as me annoying you during lunch time, me accompanying you to get your lunchbox, you walking with me to hi-life etc… I really took every second of my time in IBSH for granted. I hadn’t realized how much you all meant to me.<p>In 12th grade, we only got to spend 3 months together, but it was still cool, right? There were tons of moments to list, and each so special– especially when I stayed at your house for the weekend. I wish we can have fun like that in the future again, with just us two (and maybe Jenny :3). I really liked carpooling with you guys, and having a fun little picnic with your family, oh how I’d love to be your sister 😆! And when we met up with our other friends next to school at night, it was incredibly fun, I had the blast of my life and I hope you did too. Lastly, this is random but my favorite moment was when we walked together at the school track field, gazing at the stars while walking in circles and talking to each other. It was moments like those which I wish could last forever– it was so peaceful, beautiful, and felt like something profound. You’re someone who I can completely trust, open up to, and laugh with. I feel like words are not even needed between us, because your existence itself is enough to bring me joy. Even after I left, you somehow stuck onto me like superglue; no matter how I try to peel you off you always find a way to come back. When I created flower bracelets for seniors here, I made one that somehow looked like the sun and it reminded me of you again– and that’s just one example to mention. If you think I had an easy time without you, then you’re wrong… there wasn’t a single day where I didn’t think about you. So, no matter where you go, who you become, when we will next see each other, you’ll always be “Sunny” to me. Time to me, is quite frankly an insignificant social construct, but you, you are forever. I will always be extremely proud, grateful, and supportive of you. Happy Graduation, my Sunny.<p>Although those are just fleeting memories and things are likely never going to be the same after graduation, I’ll make sure to create more memories with you as time comes to pass. Things will inevitably change, the environment will become more difficult, time will get more scarce as we grow into adulthood, but one thing for sure is that I’ll always come back to you. I will never leave you behind because to me, you are like a home. I am indeed crying noodles as I write this, because nothing has ever described you more perfectly than “home”; for so many years I had been traveling around continents, changing schools, yet I never really had a place I belonged to. However, my friends at IBSH, especially you, carved a home for me and welcomed me in; you guys made Taiwan something special to me, even though it’s really just a silly little island. I digress, I just have too many things to tell you about. Too many things yet not enough words to describe my gratitude towards you. You are bound to do successful things in life, meet great people, and walk a great journey. Have a wonderful trip to Australia, and if you ever need a break, I will always be back in Taiwan (most likely) patiently waiting for you. (Next time I see you I’m going to hug you so hard that you fall to the ground, I already warned you so don’t blame me when that time comes :p ).<p>From a human 93 million miles away from you,<p>Aileen <3.",
            message2: "<p>Hai Sunny!<p>I am so proud of you for graduating from IBSH! You have done so many cool things in IBSH like video editing, filming, CScope, all those AP classes you were grinding, and most importantly, being an amazing friend! With all those cool things you have done, I’m sure you will do even greater things when you go to college in Australia :D Even though it took a while for us to open up to each other the first two years of knowing each other, I am really glad to have met such a nice, chill, and supportive friend like you to handle our chaotic shenanigans lol.<p>I still remember the Hamlet project where you saved our chaotically filmed clips through your wonderful editing and cinematography skills, never would I have thought that a film that takes place next to an abandoned playground made by a bunch of high schoolers cramming APs would look so cool thanks to your editing! Other than editing, you are also so smart omg, the fact that you were in honors math, AP Physics, Chemistry, and Computer Science is so cool gimmie that brain :0 Again, you are gonna do so many wonderful things in college I can feel it in my chaotic fortune telling veins >:)<p>Time went by so fast and I wish we could have hung out more before graduation omg ;-; I had so much fun with you, from going to Big City together to seeing you every lunch and being chaotic as you silently judge us lmao, I never knew that all of this would end so fast. But there will always be a bright future ahead of you and I hope you have fun in college and hopefully meet up someday :D<p>Best Regards,<p>Your Bestie Aashika ;3",
            boxColor: "#D5F5E3", 
            textColor: "#000000"
        }
    };
    const student = uniqueMessages[studentName];
    if (student) {
        document.body.style.backgroundColor = student.boxColor;
        document.body.innerHTML = `<div class="personalized-container">
                                       <h1>Happy graduation, ${studentName}!</h1>
                                       <div class="personalized-box">
                                           <p style="color: ${student.textColor};">${student.message1}</p>
                                       </div>
                                       <div class="personalized-box">
                                           <p style="color: ${student.textColor};">${student.message2 || ''}</p>
                                       </div>
                                   </div>`;
    } else {
        document.body.innerHTML = `<div class="personalized-container">
                                       <h1>No message found for ${studentName}</h1>
                                   </div>`;
    }
}

let attemptCount = {
    Aashika: 0,
    Aileen: 0,
    Angela: 0,
    Esther: 0,
    Lynette: 0,
    Salem: 0,
    Sunny: 0
};

const personalizedImages = {
    Aashika: "aashika_image_url",
    Aileen: "aileen_image_url",
    Angela: "angela_image_url",
    Esther: "esther_image_url",
    Lynette: "lynette_image_url",
    Salem: "salem_image_url",
    Sunny: "sunny_image_url"
};

const backgroundColors = {
    Aashika: "#E8DAEF",
    Aileen: "#FAD7A0",
    Angela: "#D6EAF8",
    Esther: "#FCF3CF",
    Lynette: "#D5DBDB",
    Salem: "#F9E7E7",
    Sunny: "#D5F5E3"
};

function promptPassword(studentName) {
    const password = prompt(`Enter password for ${studentName}:`);
    const correctPassword = passwords[studentName];
    
    if (password !== null && password.toLowerCase() === correctPassword.toLowerCase()) {
        attemptCount[studentName] = 0; // Reset the count on successful attempt
        getUniqueMessage(studentName);
    } else {
        attemptCount[studentName]++;
        
        if (attemptCount[studentName] >= 3) {
            const hint = getHint(studentName);
            alert(`Incorrect password! Hint: ${hint}`);
        } else {
            alert("Incorrect password! Please try again.");
        }
    }
}

function getHint(name) {
    const hints = {
        Aileen: '************bitch',
        Aashika: '************hoe',
        Angela: '*******rider',
        Esther: 'ho*shi*',
        Lynette: '********4life',
        Salem: '****maxxing',
        Sunny: '****lover'
    };
    return hints[name];
}















