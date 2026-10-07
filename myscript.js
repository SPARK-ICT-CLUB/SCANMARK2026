const quotes = [

    // =========================
    // ENGLISH QUOTES
    // =========================

    "“You do not have to have everything figured out to keep moving forward.”",
    "“Keep going. Small steps still move you forward.”",
    "“Your pace is still progress.”",
    "“Give yourself permission to begin again.”",
    "“There is something good waiting for you beyond this moment.”",
    "“You are allowed to be a work in progress.”",
    "“A little progress today is still worth celebrating.”",
    "“Take the next step. You do not need to see the whole path.”",
    "“You are doing better than you think.”",
    "“One small step today can become a big change tomorrow.”",
    "“Be proud of yourself for making it this far.”",
    "“You don't need a perfect day to have a good moment.”",
    "“Every day is a new chance to try again.”",
    "“You are capable of more than you realize.”",
    "“Trust the process, even when it feels slow.”",
    "“Your future self will thank you for not giving up.”",
    "“You can take things one step at a time.”",
    "“Good things can grow from small beginnings.”",
    "“You deserve moments of peace and joy.”",
    "“Keep choosing progress over perfection.”",
    "“You are stronger than the difficult day you are having.”",
    "“Let yourself grow at your own pace.”",
    "“A fresh start can happen at any moment.”",
    "“You do not need permission to believe in yourself.”",
    "“Your effort matters, even when nobody sees it.”",
    "“There is no shame in taking a break.”",
    "“Be patient with yourself. You are learning.”",
    "“You have made it through every hard day before this one.”",
    "“Keep your heart open to unexpected possibilities.”",
    "“You are becoming someone you can be proud of.”",
    "“Small wins are still wins.”",
    "“Do what you can with what you have today.”",
    "“You can start again without starting from zero.”",
    "“Your dreams are worth taking seriously.”",
    "“You do not have to rush your journey.”",
    "“There is beauty in becoming.”",
    "“Keep showing up for yourself.”",
    "“One day, you will be glad you kept going.”",
    "“Your story is still being written.”",
    "“You are allowed to change your mind and choose a new direction.”",
    "“Hope can begin with one small thought.”",
    "“Make room for good things to find you.”",
    "“You can be proud of progress nobody else can see.”",
    "“Today does not have to be perfect to be meaningful.”",
    "“Take a breath. Then take the next step.”",
    "“You are not behind. You are on your own path.”",
    "“Give yourself the same kindness you give to others.”",
    "“Your best can look different every day.”",
    "“Keep going, even if your steps are tiny.”",
    "“You are worthy of the future you are working toward.”",
    "“There is still so much ahead of you.”",
    "“You can do difficult things one piece at a time.”",
    "“Be gentle with yourself while you grow.”",
    "“Your effort today is building tomorrow.”",
    "“You do not need to know the ending to begin the story.”",
    "“Let today be a reminder that you can begin again.”",
    "“You have permission to dream big.”",
    "“Keep learning, keep growing, keep going.”",
    "“Sometimes the bravest thing is simply trying again.”",
    "“Your little steps are creating a bigger journey.”",
    "“You can make progress without having all the answers.”",
    "“Choose to believe that better days are possible.”",
    "“Your kindness, effort, and courage all matter.”",
    "“It is okay if your path looks different from everyone else's.”",
    "“You are allowed to celebrate how far you have come.”",
    "“Keep a little hope with you wherever you go.”",
    "“You are learning things that will make you stronger.”",
    "“There is nothing wrong with taking your time.”",
    "“Your journey does not need to look perfect.”",
    "“Do not underestimate what consistency can create.”",
    "“A quiet step forward is still a step forward.”",
    "“You can pause without giving up.”",
    "“The next chapter can be different from the last.”",
    "“Your possibilities are bigger than one difficult moment.”",
    "“Keep making choices your future self will appreciate.”",
    "“Your courage may be quieter than you expected, but it is still courage.”",
    "“You can turn a difficult season into a lesson.”",
    "“Every small act of effort adds up.”",
    "“You do not need to compare your chapter with someone else's.”",
    "“There is strength in starting small.”",
    "“Your progress deserves patience, not pressure.”",
    "“Keep believing that your efforts can lead somewhere meaningful.”",
    "“You are not required to have everything figured out today.”",
    "“Give yourself credit for the things you keep trying to do.”",

    // =========================
    // TAGALOG QUOTES
    // =========================

    "“Kaya mo 'yan. Isang hakbang lang bawat araw.”",
    "“Hindi mo kailangang maging perpekto para magsimula.”",
    "“Darating din ang araw na masasabi mong, sulit pala ang lahat.”",
    "“Pahinga kung kailangan, pero huwag susuko.”",
    "“Maliit man ang progreso, progreso pa rin.”",
    "“May mga bagay na hindi mo kailangang madaliin.”",
    "“Maniwala ka sa sarili mo, kahit kaunti lang muna.”",
    "“Hindi ka nahuhuli. May sarili kang timeline.”",
    "“Okay lang magsimula ulit.”",
    "“Hindi lahat ng araw kailangan productive. Minsan, kailangan mo lang huminga.”",
    "“May magandang bagay na naghihintay sa dulo ng iyong pagsisikap.”",
    "“Unti-unti lang. Hindi naman karera ang buhay.”",
    "“Kung pagod ka, pahinga. Huwag sumuko.”",
    "“One day at a time. Kaya natin 'to.”",
    "“Hindi man ngayon, pero darating din ang tamang panahon.”",
    "“Hindi mo kailangang malaman ang buong plano. Simulan mo lang ang susunod na hakbang.”",
    "“May magandang bukas na naghihintay sa iyo.”",
    "“Dahan-dahan lang. May oras para sa lahat.”",
    "“Hindi mo kailangang bilisan ang sarili mo.”",
    "“Ang maliit na hakbang ay hakbang pa rin.”",
    "“May halaga ang bawat pagsisikap mo.”",
    "“Hindi kabiguan ang magpahinga.”",
    "“Pwede kang magsimula ulit kahit ilang beses pa.”",
    "“Huwag mong ikumpara ang journey mo sa journey ng iba.”",
    "“May sarili kang panahon para mamukadkad.”",
    "“Hindi kailangang perfect ang araw para maging maganda ito.”",
    "“Kaya mong harapin ang susunod na hakbang.”",
    "“Maging mabait ka rin sa sarili mo.”",
    "“Hindi nasusukat sa bilis ang tunay na progreso.”",
    "“May dahilan para ipagmalaki ang sarili mo.”",
    "“Kung hindi mo alam ang buong daan, okay lang. Simulan mo sa kaya mo.”",
    "“May bagong pagkakataon sa bawat araw.”",
    "“Huwag matakot magsimula sa maliit.”",
    "“Ang pagod ay senyales na kailangan mong huminga, hindi sumuko.”",
    "“Unti-unti, makakarating ka rin.”",
    "“May mga pangarap na kailangan lang ng panahon.”",
    "“Hindi mo kailangang maging katulad ng iba para maging sapat.”",
    "“Kahit mabagal, basta patuloy.”",
    "“Darating din ang araw na maiintindihan mo kung bakit kinailangan mong maghintay.”",
    "“May magandang bagay na maaaring magsimula sa isang simpleng hakbang.”",
    "“Piliin mong maniwala sa kakayahan mo.”",
    "“Hindi sayang ang effort na ginagawa mo para sa sarili mo.”",
    "“May bukas pa para subukan ulit.”",
    "“Kaya mo. Hindi man sabay-sabay, pero paisa-isa.”",
    "“Hinga muna. Tapos laban ulit.”",
    "“Hindi ka nahuhuli; iba lang ang takbo ng buhay mo.”",
    "“May progress kahit hindi mo agad nakikita.”",
    "“Proud ka man o hindi ngayon, tandaan mong may narating ka na.”",
    "“Panatilihin ang pag-asa, kahit maliit lang.”",
    "“Ang bawat araw ay panibagong pagkakataon.”",
    "“Hindi mo kailangang malaman ang lahat bago ka magsimula.”",
    "“May lugar para sa pangarap mo.”",
    "“Kung kaya mong magsimula, kaya mong magpatuloy.”",
    "“Mas marami ka pang kayang gawin kaysa sa iniisip mo.”",
    "“Kahit isang hakbang lang ngayon, sapat na muna iyon.”",
    "“Hindi mo kailangang maging okay palagi.”",
    "“Darating din ang araw na masasabi mong, kinaya ko pala.”",
    "“May liwanag kahit sa mabagal na panahon.”",
    "“Piliin ang progreso, hindi ang pressure.”",
    "“Ang sarili mong timeline ay valid.”",
    "“May dahilan para magpatuloy.”",
    "“Bawat maliit na tagumpay ay mahalaga.”",
    "“Hindi mo kailangang madaliin ang paglago mo.”",
    "“Kaya mo ring maging proud sa sarili mo.”",
    "“Minsan, ang kailangan mo lang ay isa pang subok.”",
    "“May magandang kwento pang naghihintay sa iyo.”",
    "“Sige lang. Unti-unti, makakarating ka rin.”",
    "“One day at a time. Kaya natin 'to.”",

    // =========================
    // FUNNY / STUDENT / ICT QUOTES
    // =========================

    "“Breathe in. Breathe out. Pretend you know what you’re doing.”",
    "“You are doing great. Or at least, you opened the app.”",
    "“Progress is progress, even if today’s progress was just surviving Monday.”",
    "“Your future self is watching. Please stop opening TikTok every five minutes.”",
    "“You can do it. But first, maybe drink some water.”",
    "“One task at a time. Multitasking is just panicking with confidence.”",
    "“Believe in yourself. Your Wi-Fi already believes in you… sometimes.”",
    "“It’s okay to not have a plan. Just make it look intentional.”",
    "“You are not lazy. You are buffering.”",
    "“If at first you don’t succeed, check if you actually clicked Submit.”",
    "“Your grades are not your entire personality. Thankfully.”",
    "“Study now, celebrate later. Or celebrate first and call it motivation.”",
    "“You deserve a break. Just remember that a 3-hour break is technically a vacation.”",
    "“Keep going. The deadline is getting closer anyway.”",
    "“You can survive this. You survived group projects before.”",
    "“Your brain said ‘I got this.’ Your brain was being optimistic.”",
    "“Ctrl + S your work. Ctrl + Z your regrets.”",
    "“If the code works, do not touch it. This is a sacred rule.”",
    "“Debugging: fixing problems you accidentally created while trying to create something else.”",
    "“There are two kinds of students: those who save their files and those who learn the hard way.”",
    "“May deadline ka pa? Congratulations, may character development ka.”",
    "“Hindi ka tamad. Nagpapahinga ka lang nang may commitment.”",
    "“Kaya mo ’yan. Pero kung hindi, at least may backup plan… hopefully.”",
    "“Ang assignment ay parang multo. Akala mo wala na, biglang nagpaparamdam.”",
    "“Study smart, not hard. Pero kung kailangan, hard mode na lang.”",
    "“Pahinga muna. Baka pati Google Drive kailangan nang magpahinga sa dami ng files mo.”",
    "“Kung hindi gumana, refresh. Kung hindi pa rin, pray.”",
    "“Hindi lahat ng error ay failure. Minsan, typo lang talaga.”",
    "“Your laptop has survived your 47 open tabs. You can survive this too.”",
    "“Reminder: naming your file FINAL_FINAL_REALFINAL.pdf does not make it final.”",
    "“If you cannot find the answer, check your notes. If it’s not there, check your classmate.”",
    "“Group project tip: at least know the group chat exists.”",
    "“You studied for three hours and remembered nothing? Same. Character development.”",
    "“Ang tunay na productivity ay kapag natapos mo ang task bago ka mag-scroll ulit.”",
    "“Motivation is temporary. Deadlines are surprisingly consistent.”",
    "“You don’t need a perfect plan. You just need to stop staring at the blank document.”",
    "“Your assignment is not going to finish itself. Sadly.”",
    "“Kapag pagod na, huminga. Kapag deadline na, bilisan.”",
    "“Hindi lahat ng ‘seen’ ay rejection. Minsan, teacher mo lang talaga.”",
    "“Good things take time. Bad decisions take approximately three seconds.”",
    "“Be the reason your future self says, ‘Thank goodness I submitted that.’”",
    "“You can do hard things. You can also do easy things, like taking a nap.”",
    "“If you’re reading this instead of studying, technically you are reading. Progress!”",
    "“Your screen time report is not a report card. Please stop treating it like one.”",
    "“Minsan kailangan mo lang ng kape, courage, at stable internet.”",
    "“Hindi mo kailangang malaman lahat. Google exists. Use your powers wisely.”",
    "“Keep going. Somewhere out there, someone is also pretending to understand the lesson.”",
    "“You are one ‘Submit’ button away from freedom.”",
    "“Reminder: ‘mamaya na’ is not a study strategy.”",
    "“If your motivation disappears, check under your bed. Baka doon nagtago.”",
    "“Be productive today so tomorrow-you can procrastinate with peace.”",
    "“You got this. And if you don’t, at least you got this ScanMark message.”",

    // =========================
    // GENERAL FUNNY QUOTES
    // =========================

    "“Life is short. Order the fries.”",
    "“Everything will be okay. If not, there’s always snacks.”",
    "“You are doing amazing. Please accept this invisible trophy.”",
    "“Sometimes the best plan is to wing it and hope nobody notices.”",
    "“Be yourself. Everyone else is already taken.”",
    "“Your vibe attracts your tribe. Choose one with snacks.”",
    "“A little chaos keeps life interesting.”",
    "“Today’s mood: trying my best and hoping that counts.”",
    "“You survived another day. Honestly, impressive.”",
    "“Don’t worry. You’re only one awkward moment away from another awkward moment.”",
    "“Romanticize your life. Even washing dishes can have a soundtrack.”",
    "“If life gives you lemons, check if there’s sugar nearby.”",
    "“Some days you sparkle. Some days you just exist. Both count.”",
    "“Your bed believes in you. It would also like you to stay.”",
    "“Remember: nobody has it all figured out. Some people just have better Wi-Fi.”",
    "“Take life one snack at a time.”",
    "“You don’t need to have your life together before lunchtime.”",
    "“Plot twist: you were actually doing better than you thought.”",
    "“Main character energy, minor character budget.”",
    "“Stay hydrated and slightly mysterious.”",
    "“If today feels weird, congratulations. You’re having a human experience.”",
    "“Do more of what makes you forget to check the time.”",
    "“Your only competition is yesterday-you. And yesterday-you was probably tired.”",
    "“Be proud of yourself. Even your alarm clock knows you’ve been trying.”",
    "“Some problems need solutions. Others need a nap.”",
    "“You deserve good things, cute things, and an uninterrupted nap.”",
    "“Life update: still figuring it out.”",
    "“No thoughts, just vibes… and maybe snacks.”",
    "“You can’t control everything. Especially other people’s opinions. Good news!”",
    "“If you’re waiting for a sign, this is it. Now go get a snack.”",
    "“Your life doesn’t need to be aesthetic every day.”",
    "“It’s okay to have absolutely no idea what’s going on.”",
    "“Today is a good day to pretend you have a plan.”",
    "“Be soft with yourself. Life already has enough hard edges.”",
    "“You are allowed to change your mind. Preferably before ordering.”",
    "“Sometimes doing nothing is exactly what your brain ordered.”",
    "“You’re not late. You’re making an entrance.”",
    "“A bad day is not a bad life. It’s just a bad episode.”",
    "“Keep your standards high and your expectations of Monday low.”",
    "“Don’t take life too seriously. Nobody gets out with their unread notifications.”",
    "“You’re doing fine. The evidence may be questionable, but still.”",
    "“If you can’t find the sunshine, become the slightly chaotic sunshine.”",
    "“Today’s goal: make at least one memory worth laughing about later.”",
    "“You deserve a life that feels good, not just one that looks good.”",
    "“Laugh a little. You’re already here.”",
    "“Go where you feel appreciated. Or where they have good food.”",
    "“Life is basically a group project where nobody knows the instructions.”",
    "“Hindi man ngayon, may tamang panahon din para sa iyo.”"
];


// =========================
// CURRENT QUOTE
// =========================

let current = -1;


// =========================
// ELEMENTS
// =========================

const quoteEl = document.getElementById("quote");
const toast = document.getElementById("toast");
const newQuoteButton = document.getElementById("newQuote");
const copyQuoteButton = document.getElementById("copyQuote");


// =========================
// RANDOM QUOTE
// =========================

function showNextQuote() {

    if (!quoteEl || quotes.length === 0) {
        return;
    }

    let next;

    do {

        next = Math.floor(
            Math.random() * quotes.length
        );

    } while (
        next === current &&
        quotes.length > 1
    );

    current = next;

    quoteEl.textContent = quotes[current];


    // Quote animation

    quoteEl.animate(
        [
            {
                opacity: 0.35,
                transform: "translateY(6px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 280,
            easing: "ease-out"
        }
    );
}


// =========================
// GET INSPIRED BUTTON
// =========================

if (newQuoteButton) {

    newQuoteButton.addEventListener(
        "click",
        showNextQuote
    );

}


// =========================
// COPY QUOTE
// =========================

if (copyQuoteButton) {

    copyQuoteButton.addEventListener(
        "click",
        async function () {

            try {

                await navigator.clipboard.writeText(
                    quoteEl.textContent
                );

                toast.textContent =
                    "✓ Quote copied!";

                toast.classList.add(
                    "show"
                );

                setTimeout(
                    function () {

                        toast.classList.remove(
                            "show"
                        );

                    },
                    1500
                );

            } catch (error) {

                toast.textContent =
                    "Select and copy the quote";

                toast.classList.add(
                    "show"
                );

                setTimeout(
                    function () {

                        toast.classList.remove(
                            "show"
                        );

                    },
                    1700
                );

            }

        }
    );

}


// =========================
// SHOW FIRST RANDOM QUOTE
// =========================

showNextQuote();
