/*!
 * Ezmoji v0.7.0 
 * (c) 2019 Michael Arakilian
 * Released under the MIT License.
 */
var ezmoji = {}

ezmoji.list = {
    "smile": { "code": ":smile:", "emoji": "😄" },
    "laughing": { "code": ":laughing:", "emoji": "😆" },
    "blush": { "code": ":blush:", "emoji": "😊" },
    "smiley": { "code": ":smiley:", "emoji": "😃" },
    "relaxed": { "code": ":relaxed:", "emoji": "😊" },
    "smirk": { "code": ":smirk:", "emoji": "😏" },
    "heart_eyes": { "code": ":heart_eyes:", "emoji": "😍" },
    "kissing_heart": { "code": ":kissing_heart:", "emoji": "😘" },
    "kissing_eyes_closed": { "code": ":kissing_eyes_closed:", "emoji": "😚" },
    "flushed": { "code": ":flushed:", "emoji": "😳" },
    "relieved": { "code": ":relieved:", "emoji": "😌" },
    "satisfied": { "code": ":satisfied:", "emoji": "😆" },
    "grin": { "code": ":grin:", "emoji": "😁" },
    "wink": { "code": ":wink:", "emoji": "😉" },
    "stuck_out_tongue_winking_eye": { "code": ":stuck_out_tongue_winking_eye:", "emoji": "😜" },
    "stuck_out_tongue_closed_eye": { "code": ":stuck_out_tongue_closed_eye:", "emoji": "😝" },
    "grinning": { "code": ":grinning:", "emoji": "😀" },
    "kissing": { "code": ":kissing:", "emoji": "😗" },
    "kissing_smiling_eyes": { "code": ":kissing_smiling_eyes:", "emoji": "😙" },
    "stuck_out_tongue": { "code": ":stuck_out_tongue:", "emoji": "😛" },
    "sleeping": { "code": ":sleeping:", "emoji": "😴" },
    "worried": { "code": ":worried:", "emoji": "😟" },
    "frowning": { "code": ":frowning:", "emoji": "😦" },
    "anguished": { "code": ":anguished:", "emoji": "😧" },
    "open_mouth": { "code": ":open_mouth:", "emoji": "😮" },
    "grimacing": { "code": ":grimacing:", "emoji": "😬" },
    "confused": { "code": ":confused:", "emoji": "😕" },
    "hushed": { "code": ":hushed:", "emoji": "😯" },
    "expressionless": { "code": ":expressionless:", "emoji": "😑" },
    "unamused": { "code": ":unamused:", "emoji": "😒" },
    "sweat_smile": { "code": ":sweat_smile:", "emoji": "😅" },
    "sweat": { "code": ":sweat:", "emoji": "😓" },
    "disappionted_relieved": { "code": ":disappionted_relieved:", "emoji": "😥" },
    "weary": { "code": ":weary:", "emoji": "😩" },
    "pensive": { "code": ":pensive:", "emoji": "😔" },
    "disappionted": { "code": ":disappionted:", "emoji": "😞" },
    "confounded": { "code": ":confounded:", "emoji": "😖" },
    "fearful": { "code": ":fearful:", "emoji": "😨" },
    "cold_sweat": { "code": ":cold_sweat:", "emoji": "😰" },
    "persevere": { "code": ":persevere:", "emoji": "😣" },
    "cry": { "code": ":cry:", "emoji": "😢" },
    "sob": { "code": ":sob:", "emoji": "😭" },
    "joy": { "code": ":joy:", "emoji": "😂" },
    "astonished": { "code": ":astonished:", "emoji": "😲" },
    "scream": { "code": ":scream:", "emoji": "😱" },
    "tired_face": { "code": ":tired_face:", "emoji": "😫" },
    "angry": { "code": ":angry:", "emoji": "😠" },
    "rage": { "code": ":rage:", "emoji": "😡" },
    "triumph": { "code": ":triumph:", "emoji": "😤" },
    "sleepy": { "code": ":sleepy:", "emoji": "😪" },
    "yum": { "code": ":yum:", "emoji": "😋" },
    "mask": { "code": ":mask:", "emoji": "😷" },
    "sunglasses": { "code": ":sunglasses:", "emoji": "😎" },
    "dizzy_face": { "code": ":dizzy_face:", "emoji": "😵" },
    "imp": { "code": ":imp:", "emoji": "👿" },
    "smiling_imp": { "code": ":smiling_imp:", "emoji": "😈" },
    "neutral_face": { "code": ":neutral_face:", "emoji": "😐" },
    "no_mouth": { "code": ":no_mouth:", "emoji": "😶" },
    "innocent": { "code": ":innocent:", "emoji": "😇" },
    "alien": { "code": ":alien:", "emoji": "👽" },
    "yellow_heart": { "code": ":yellow_heart:", "emoji": "💛" },
    "blue_heart": { "code": ":blue_heart:", "emoji": "💙" },
    "purple_heart": { "code": ":purple_heart:", "emoji": "💜" },
    "heart": { "code": ":heart:", "emoji": "❤️" },
    "green_heart": { "code": ":green_heart:", "emoji": "💚" },
    "broken_heart": { "code": ":broken_heart:", "emoji": "💔" },
    "heartbeat": { "code": ":heartbeat:", "emoji": "💓" },
    "heartpulse": { "code": ":heartpulse:", "emoji": "💗" },
    "two_hearts": { "code": ":two_hearts:", "emoji": "💕" },
    "revolving_hearts": { "code": ":revolving_hearts:", "emoji": "💞" },
    "cupid": { "code": ":cupid:", "emoji": "💘" },
    "sparkling_heart": { "code": ":sparkling_heart:", "emoji": "💖" },
    "sparkles": { "code": ":sparkles:", "emoji": "✨" },
    "star": { "code": ":star:", "emoji": "⭐️" },
    "star2": { "code": ":star2:", "emoji": "🌟" },
    "dizzy": { "code": ":dizzy:", "emoji": "💫" },
    "boom": { "code": ":boom:", "emoji": "💥" },
    "collision": { "code": ":collision:", "emoji": "💥" },
    "anger": { "code": ":anger:", "emoji": "💢" },
    "exclamation": { "code": ":exclamation:", "emoji": "❗️" },
    "question": { "code": ":question:", "emoji": "❓" },
    "grey_exclamation": { "code": ":grey_exclamation:", "emoji": "❕" },
    "grey_question": { "code": ":grey_question:", "emoji": "❔" },
    "zzz": { "code": ":zzz:", "emoji": "💤" },
    "dash": { "code": ":dash:", "emoji": "💨" },
    "sweat_drops": { "code": ":sweat_drops:", "emoji": "💦" },
    "notes": { "code": ":notes:", "emoji": "🎶" },
    "musical_note": { "code": ":musical_note:", "emoji": "🎵" },
    "fire": { "code": ":fire:", "emoji": "🔥" },
    "hankey": { "code": ":hankey:", "emoji": "💩" },
    "poop": { "code": ":poop:", "emoji": "💩" },
    "shit": { "code": ":shit:", "emoji": "💩" },
    "plusone": { "code": ":+1:", "emoji": "👍" },
    "thumbsup": { "code": ":thumbsup:", "emoji": "👍" },
    "minusone": { "code": ":-1:", "emoji": "👎" },
    "thumbsdown": { "code": ":thumbsdown:", "emoji": "👎" },
    "ok_hand": { "code": ":ok_hand:", "emoji": "👌" },
    "punch": { "code": ":punch:", "emoji": "👊" },
    "facepunch": { "code": ":facepunch:", "emoji": "👊" },
    "fist": { "code": ":fist:", "emoji": "✊" },
    "v": { "code": ":v:", "emoji": "✌️" },
    "wave": { "code": ":wave:", "emoji": "👋" },
    "hand": { "code": ":hand:", "emoji": "✋" },
    "raised_hand": { "code": ":raised_hand:", "emoji": "✋" },
    "open_hands": { "code": ":open_hands:", "emoji": "👐" },
    "point_up": { "code": ":point_up:", "emoji": "☝️" },
    "point_down": { "code": ":point_down:", "emoji": "👇" },
    "point_left": { "code": ":point_left:", "emoji": "👈" },
    "point_right": { "code": ":point_right:", "emoji": "👉" },
    "raised_hands": { "code": ":raised_hands:", "emoji": "🙌" },
    "pray": { "code": ":pray:", "emoji": "🙏" },
    "point_up_2": { "code": ":point_up_2:", "emoji": "👆" },
    "clap": { "code": ":clap:", "emoji": "👏" },
    "muscle": { "code": ":muscle:", "emoji": "💪" },
    "metal": { "code": ":metal:", "emoji": "🤘" },
    "fu": { "code": ":fu:", "emoji": "🖕" },
    "walking": { "code": ":walking:", "emoji": "🚶" },
    "runner": { "code": ":runner:", "emoji": "🏃" },
    "running": { "code": ":running:", "emoji": "🏃" },
    "couple": { "code": ":couple:", "emoji": "👫" },
    "family": { "code": ":family:", "emoji": "👪" },
    "two_men_holding_hands": { "code": ":two_men_holding_hands:", "emoji": "👬" },
    "two_women_holding_hands": { "code": ":two_women_holding_hands:", "emoji": "👭" },
    "dancer": { "code": ":dancer:", "emoji": "💃" },
    "dancers": { "code": ":dancers:", "emoji": "👯" },
    "ok_woman": { "code": ":ok_woman:", "emoji": "🙆" },
    "no_good": { "code": ":no_good:", "emoji": "🙅" },
    "information_desk_person": { "code": ":information_desk_person:", "emoji": "💁" },
    "raising_hand": { "code": ":raising_hand:", "emoji": "🙋" },
    "bride_with_veil": { "code": ":bride_with_veil:", "emoji": "👰" },
    "person_with_pouting_face": { "code": ":person_with_pouting_face:", "emoji": "🙎" },
    "person_frowning": { "code": ":person_frowning:", "emoji": "🙍" },
    "bow": { "code": ":bow:", "emoji": "🙇" },
    "couplekiss": { "code": ":couplekiss:", "emoji": "💏" },
    "couple_with_heart": { "code": ":couple_with_heart:", "emoji": "💑" },
    "massage": { "code": ":massage:", "emoji": "💆" },
    "haircut": { "code": ":haircut:", "emoji": "💇" },
    "nail_care": { "code": ":nail_care:", "emoji": "💅" },
    "boy": { "code": ":boy:", "emoji": "👦" },
    "girl": { "code": ":girl:", "emoji": "👧" },
    "woman": { "code": ":woman:", "emoji": "👩" },
    "man": { "code": ":man:", "emoji": "👨" },
    "baby": { "code": ":baby:", "emoji": "👶" },
    "older_woman": { "code": ":older_woman:", "emoji": "👵" },
    "older_man": { "code": ":older_man:", "emoji": "👴" },
    "person_with_blond_hair": { "code": ":person_with_blond_hair:", "emoji": "👱" },
    "man_with_gua_pi_mao": { "code": ":man_with_gua_pi_mao:", "emoji": "👲" },
    "man_with_turban": { "code": ":man_with_turban:", "emoji": "👳" },
    "construction_worker": { "code": ":construction_worker:", "emoji": "👷" },
    "cop": { "code": ":cop:", "emoji": "👮" },
    "angel": { "code": ":angel:", "emoji": "👼" },
    "princess": { "code": ":princess:", "emoji": "👸" },
    "smiley_cat": { "code": ":smiley_cat:", "emoji": "😺" },
    "smile_cat": { "code": ":smile_cat:", "emoji": "😸" },
    "heart_eyes_cat": { "code": ":heart_eyes_cat:", "emoji": "😻" },
    "kissing_cat": { "code": ":kissing_cat:", "emoji": "😽" },
    "smirk_cat": { "code": ":smirk_cat:", "emoji": "😼" },
    "scream_cat": { "code": ":scream_cat:", "emoji": "🙀" },
    "crying_cat_face": { "code": ":crying_cat_face:", "emoji": "😿" },
    "joy_cat": { "code": ":joy_cat:", "emoji": "😹" },
    "pouting_cat": { "code": ":pouting_cat:", "emoji": "😾" },
    "japanese_ogre": { "code": ":japanese_ogre:", "emoji": "👹" },
    "japanese_goblin": { "code": ":japanese_goblin:", "emoji": "👺" },
    "see_no_evil": { "code": ":see_no_evil:", "emoji": "🙈" },
    "hear_no_evil": { "code": ":hear_no_evil:", "emoji": "🙉" },
    "speak_no_evil": { "code": ":speak_no_evil:", "emoji": "🙊" },
    "guardsman": { "code": ":guardsman:", "emoji": "💂" },
    "skull": { "code": ":skull:", "emoji": "💀" },
    "feet": { "code": ":feet:", "emoji": "🐾" },
    "lips": { "code": ":lips:", "emoji": "👄" },
    "kiss": { "code": ":kiss:", "emoji": "💋" },
    "droplet": { "code": ":droplet:", "emoji": "💧" },
    "ear": { "code": ":ear:", "emoji": "👂" },
    "eyes": { "code": ":eyes:", "emoji": "👀" },
    "nose": { "code": ":nose:", "emoji": "👃" },
    "tongue": { "code": ":tongue:", "emoji": "👅" },
    "love_letter": { "code": ":love_letter:", "emoji": "💌" },
    "bust_in_silhouette": { "code": ":bust_in_silhouette:", "emoji": "👤" },
    "busts_in_silhouette": { "code": ":busts_in_silhouette:", "emoji": "👥" },
    "speech_balloon": { "code": ":speech_balloon:", "emoji": "💬" },
    "thought_balloon": { "code": ":thought_balloon:", "emoji": "💭" },
    "sunny": { "code": ":sunny:", "emoji": "☀️" },
    "umbrella": { "code": ":umbrella:", "emoji": "☔️" },
    "cloud": { "code": ":cloud:", "emoji": "☁️" },
    "snowflake": { "code": ":snowflake:", "emoji": "❄️" },
    "snowman": { "code": ":snowman:", "emoji": "⛄️" },
    "zap": { "code": ":zap:", "emoji": "⚡️" },
    "cyclone": { "code": ":cyclone:", "emoji": "🌀" },
    "foggy": { "code": ":foggy:", "emoji": "🌁" },
    "ocean": { "code": ":ocean:", "emoji": "🌊" },
    "cat": { "code": ":cat:", "emoji": "🐱" },
    "dog": { "code": ":dog:", "emoji": "🐶" },
    "mouse": { "code": ":mouse:", "emoji": "🐭" },
    "hamster": { "code": ":hamster:", "emoji": "🐹" },
    "rabbit": { "code": ":rabbit:", "emoji": "🐰" },
    "wolf": { "code": ":wolf:", "emoji": "🐺" },
    "frog": { "code": ":frog:", "emoji": "🐸" },
    "tiger": { "code": ":tiger:", "emoji": "🐯" },
    "koala": { "code": ":koala:", "emoji": "🐨" },
    "bear": { "code": ":bear:", "emoji": "🐻" },
    "pig": { "code": ":pig:", "emoji": "🐷" },
    "pig_nose": { "code": ":pig_nose:", "emoji": "🐽" },
    "cow": { "code": ":cow:", "emoji": "🐮" },
    "boar": { "code": ":boar:", "emoji": "🐗" },
    "monkey_face": { "code": ":monkey_face:", "emoji": "🐵" },
    "monkey": { "code": ":monkey:", "emoji": "🐒" },
    "horse": { "code": ":horse:", "emoji": "🐴" },
    "racehorse": { "code": ":racehorse:", "emoji": "🐎" },
    "camel": { "code": ":camel:", "emoji": "🐫" },
    "sheep": { "code": ":sheep:", "emoji": "🐑" },
    "elephant": { "code": ":elephant:", "emoji": "🐘" },
    "panda_face": { "code": ":panda_face:", "emoji": "🐼" },
    "snake": { "code": ":snake:", "emoji": "🐍" },
    "bird": { "code": ":bird:", "emoji": "🐦" },
    "baby_chick": { "code": ":baby_chick:", "emoji": "🐤" },
    "hatched_chick": { "code": ":hatched_chick:", "emoji": "🐥" },
    "hatching_chick": { "code": ":hatching_chick:", "emoji": "🐣" },
    "chicken": { "code": ":chicken:", "emoji": "🐔" },
    "penguin": { "code": ":penguin:", "emoji": "🐧" },
    "turtle": { "code": ":turtle:", "emoji": "🐢" },
    "bug": { "code": ":bug:", "emoji": "🐛" },
    "honeybee": { "code": ":honeybee:", "emoji": "🐝" },
    "ant": { "code": ":ant:", "emoji": "🐜" },
    "beetle": { "code": ":beetle:", "emoji": "🐞" },
    "snail": { "code": ":snail:", "emoji": "🐌" },
    "octopus": { "code": ":octopus:", "emoji": "🐙" },
    "tropical_fish": { "code": ":tropical_fish:", "emoji": "🐠" },
    "fish": { "code": ":fish:", "emoji": "🐟" },
    "whale": { "code": ":whale:", "emoji": "🐳" },
    "whale2": { "code": ":whale2:", "emoji": "🐋" },
    "dolphin": { "code": ":dolphin:", "emoji": "🐬" },
    "cow2": { "code": ":cow2:", "emoji": "🐄" },
    "ram": { "code": ":ram:", "emoji": "🐏" },
    "rat": { "code": ":rat:", "emoji": "🐀" },
    "water_buffalo": { "code": ":water_buffalo:", "emoji": "🐃" },
    "tiger2": { "code": ":tiger2:", "emoji": "🐅" },
    "rabbit2": { "code": ":rabbit2:", "emoji": "🐇" },
    "dragon": { "code": ":dragon:", "emoji": "🐉" },
    "goat": { "code": ":goat:", "emoji": "🐐" },
    "rooster": { "code": ":rooster:", "emoji": "🐓" },
    "dog2": { "code": ":dog2:", "emoji": "🐕" },
    "pig2": { "code": ":pig2:", "emoji": "🐖" },
    "mouse2": { "code": ":mouse2:", "emoji": "🐁" },
    "ox": { "code": ":ox:", "emoji": "🐂" },
    "dragon_face": { "code": ":dragon_face:", "emoji": "🐲" },
    "blowfish": { "code": ":blowfish:", "emoji": "🐡" },
    "crocodile": { "code": ":crocodile:", "emoji": "🐊" },
    "dromedary_camel": { "code": ":dromedary_camel:", "emoji": "🐪" },
    "leopard": { "code": ":leopard:", "emoji": "🐆" },
    "cat2": { "code": ":cat2:", "emoji": "🐈" },
    "poodle": { "code": ":poodle:", "emoji": "🐩" },
    "paw_prints": { "code": ":paw_prints:", "emoji": "🐾" },
    "bouquet": { "code": ":bouquet:", "emoji": "💐" },
    "cherry_blossom": { "code": ":cherry_blossom:", "emoji": "🌸" },
    "tulip": { "code": ":tulip:", "emoji": "🌷" },
    "four_leaf_clover": { "code": ":four_leaf_clover:", "emoji": "🍀" },
    "rose": { "code": ":rose:", "emoji": "🌹" },
    "sunflower": { "code": ":sunflower:", "emoji": "🌻" },
    "hibiscus": { "code": ":hibiscus:", "emoji": "🌺" },
    "maple_leaf": { "code": ":maple_leaf:", "emoji": "🍁" },
    "leaves": { "code": ":leaves:", "emoji": "🍃" },
    "fallen_leaf": { "code": ":fallen_leaf:", "emoji": "🍂" },
    "herb": { "code": ":herb:", "emoji": "🌿" },
    "mushroom": { "code": ":mushroom:", "emoji": "🍄" },
    "cactus": { "code": ":cactus:", "emoji": "🌵" },
    "palm_tree": { "code": ":palm_tree:", "emoji": "🌴" },
    "evergreen_tree": { "code": ":evergreen_tree:", "emoji": "🌲" },
    "deciduous_tree": { "code": ":deciduous_tree:", "emoji": "🌳" },
    "chestnut": { "code": ":chestnut:", "emoji": "🌰" },
    "seedling": { "code": ":seedling:", "emoji": "🌱" },
    "blossom": { "code": ":blossom:", "emoji": "🌼" },
    "ear_of_rice": { "code": ":ear_of_rice:", "emoji": "🌾" },
    "shell": { "code": ":shell:", "emoji": "🐚" },
    "globe_with_meridians": { "code": ":globe_with_meridians:", "emoji": "🌐" },
    "sun_with_face": { "code": ":sun_with_face:", "emoji": "🌞" },
    "full_moon_with_face": { "code": ":full_moon_with_face:", "emoji": "🌝" },
    "new_moon_with_face": { "code": ":new_moon_with_face:", "emoji": "🌚" },
    "new_moon": { "code": ":new_moon:", "emoji": "🌑" },
    "waxing_crescent_moon": { "code": ":waxing_crescent_moon:", "emoji": "🌒" },
    "first_quarter_moon": { "code": ":first_quarter_moon:", "emoji": "🌓" },
    "waxing_gibbous_moon": { "code": ":waxing_gibbous_moon:", "emoji": "🌔" },
    "full_moon": { "code": ":full_moon:", "emoji": "🌕" },
    "waning_gibbous_moon": { "code": ":waning_gibbous_moon:", "emoji": "🌖" },
    "last_quarter_moon": { "code": ":last_quarter_moon:", "emoji": "🌗" },
    "waning_crescent_moon": { "code": ":waning_crescent_moon:", "emoji": "🌘" },
    "last_quarter_moon_with_face": { "code": ":last_quarter_moon_with_face:", "emoji": "🌜" },
    "first_quarter_moon_with_face": { "code": ":first_quarter_moon_with_face:", "emoji": "🌛" },
    "moon": { "code": ":moon:", "emoji": "🌔" },
    "earth_africa": { "code": ":earth_africa:", "emoji": "🌍" },
    "earth_americas": { "code": ":earth_americas:", "emoji": "🌎" },
    "earth_asia": { "code": ":earth_asia:", "emoji": "🌏" },
    "volcano": { "code": ":volcano:", "emoji": "🌋" },
    "milky_way": { "code": ":milky_way:", "emoji": "🌌" },
    "partly_sunny": { "code": ":partly_sunny:", "emoji": "⛅️" },
    "bowtie": { "code": ":bowtie:", "emoji": "👔" }
}

ezmoji.check = function(node) {
    for (var emoji in ezmoji.list) {
        if(node.innerText.includes(ezmoji.list[emoji].code)) {
            var nstr = node.innerHTML.replace(
                ezmoji.list[emoji].code, 
                ezmoji.list[emoji].emoji
            )
            return node.innerHTML = nstr
        }
    }
}

ezmoji.init = function(node) {
    var nodes = node.childNodes
    for (var i = 0; i < nodes.length; i++) {
        if(!nodes[i]) { continue }
        if(nodes[i].childNodes.length > 0) {
            ezmoji.init(nodes[i])
            ezmoji.check(nodes[i])
        }
    }
}

window.addEventListener("load", ezmoji.init(document))