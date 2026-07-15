const animals = [
  ["Aap", "🐒", "makkelijk", ["nieuwsgierig", "speels", "slim"]],
  ["Hond", "🐶", "makkelijk", ["trouw", "enthousiast", "sociaal"]],
  ["Kat", "🐱", "makkelijk", ["eigenwijs", "stil", "lenig"]],
  ["Leeuw", "🦁", "makkelijk", ["trots", "leider", "krachtig"]],
  ["Tijger", "🐯", "makkelijk", ["gefocust", "sluipend", "fel"]],
  ["Olifant", "🐘", "makkelijk", ["sterk", "zorgzaam", "goed geheugen"]],
  ["Giraf", "🦒", "makkelijk", ["rustig", "overzicht", "hoog"]],
  ["Zebra", "🦓", "makkelijk", ["opvallend", "snel", "groep"]],
  ["Panda", "🐼", "makkelijk", ["zacht", "kalm", "bamboe"]],
  ["Beer", "🐻", "makkelijk", ["sterk", "slaperig", "beschermend"]],
  ["Vos", "🦊", "makkelijk", ["sluw", "snel", "nacht"]],
  ["Wolf", "🐺", "makkelijk", ["roedel", "loyaal", "jager"]],
  ["Konijn", "🐰", "makkelijk", ["snel", "alert", "zacht"]],
  ["Kikker", "🐸", "makkelijk", ["springt", "groen", "water"]],
  ["Koe", "🐮", "makkelijk", ["kalm", "weide", "groot"]],
  ["Varken", "🐷", "makkelijk", ["slim", "modder", "gezellig"]],
  ["Paard", "🐴", "makkelijk", ["snel", "elegant", "sterk"]],
  ["Kip", "🐔", "makkelijk", ["druk", "alert", "erf"]],
  ["Pinguin", "🐧", "makkelijk", ["waggelt", "koud", "groep"]],
  ["Uil", "🦉", "makkelijk", ["wijs", "nacht", "stil"]],
  ["Eend", "🦆", "makkelijk", ["water", "waggelt", "sociaal"]],
  ["Papegaai", "🦜", "makkelijk", ["kleurrijk", "praat", "slim"]],
  ["Flamingo", "🦩", "makkelijk", ["balans", "roze", "elegant"]],
  ["Haai", "🦈", "makkelijk", ["scherp", "zee", "jager"]],
  ["Dolfijn", "🐬", "makkelijk", ["slim", "sociaal", "speels"]],
  ["Walvis", "🐋", "makkelijk", ["groot", "diep", "zanger"]],
  ["Octopus", "🐙", "makkelijk", ["slim", "armen", "camouflage"]],
  ["Schildpad", "🐢", "makkelijk", ["traag", "oud", "schild"]],
  ["Krokodil", "🐊", "makkelijk", ["stil", "sterke kaak", "water"]],
  ["Slang", "🐍", "makkelijk", ["glad", "stil", "verrast"]],
  ["Muis", "🐭", "makkelijk", ["klein", "snel", "voorzichtig"]],
  ["Hamster", "🐹", "makkelijk", ["hamstert", "klein", "nacht"]],
  ["Geit", "🐐", "makkelijk", ["klimt", "koppig", "nieuwsgierig"]],
  ["Schaap", "🐑", "makkelijk", ["zacht", "kudde", "rustig"]],
  ["Hert", "🦌", "makkelijk", ["elegant", "alert", "bos"]],
  ["Kangoeroe", "🦘", "makkelijk", ["springt", "sterk", "buidel"]],
  ["Koala", "🐨", "makkelijk", ["slaperig", "boom", "zacht"]],
  ["Egel", "🦔", "makkelijk", ["stekelig", "klein", "nacht"]],
  ["Pauw", "🦚", "makkelijk", ["show", "kleurrijk", "trots"]],
  ["Luipaard", "🐆", "makkelijk", ["snel", "gevlekt", "sluipt"]],
  ["Mier", "🐜", "normaal", ["teamwerk", "sterk", "druk"]],
  ["Bij", "🐝", "normaal", ["ijverig", "bloemen", "zoem"]],
  ["Vlinder", "🦋", "normaal", ["licht", "kleur", "verandering"]],
  ["Spin", "🕷️", "normaal", ["geduldig", "web", "stil"]],
  ["Schorpioen", "🦂", "normaal", ["stekelig", "woestijn", "fel"]],
  ["Krab", "🦀", "normaal", ["zijwaarts", "scharen", "kust"]],
  ["Kreeft", "🦞", "normaal", ["scharen", "rood", "zee"]],
  ["Inktvis", "🦑", "normaal", ["snel", "inkt", "diepte"]],
  ["Zeehond", "🦭", "normaal", ["nieuwsgierig", "water", "rond"]],
  ["Otter", "🦦", "normaal", ["speels", "water", "handig"]],
  ["Bever", "🦫", "normaal", ["bouwer", "hout", "doorzetter"]],
  ["Wasbeer", "🦝", "normaal", ["handig", "nacht", "nieuwsgierig"]],
  ["Stinkdier", "🦨", "normaal", ["waarschuwing", "rustig", "geur"]],
  ["Das", "🦡", "normaal", ["graver", "taai", "nacht"]],
  ["Nijlpaard", "🦛", "normaal", ["zwaar", "water", "territoriaal"]],
  ["Neushoorn", "🦏", "normaal", ["krachtig", "hoorn", "solide"]],
  ["Lama", "🦙", "normaal", ["eigenwijs", "hoogland", "zacht"]],
  ["Eland", "🫎", "normaal", ["groot", "bos", "rustig"]],
  ["Bizons", "🐃", "normaal", ["massa", "kudde", "stoer"]],
  ["Waterbuffel", "🐃", "normaal", ["sterk", "modder", "kalm"]],
  ["Kameel", "🐫", "normaal", ["uithouding", "woestijn", "voorraad"]],
  ["Dromedaris", "🐪", "normaal", ["hitte", "tocht", "geduld"]],
  ["Gorilla", "🦍", "normaal", ["sterk", "familie", "rustig"]],
  ["Orang-oetan", "🦧", "normaal", ["slim", "boom", "nadenkend"]],
  ["Chimpansee", "🐵", "normaal", ["sociaal", "handig", "druk"]],
  ["Hyena", "🦴", "normaal", ["lacher", "taai", "groep"]],
  ["Jakhals", "🐕", "normaal", ["sluw", "nacht", "kansrijk"]],
  ["Poema", "🐈", "normaal", ["stil", "snel", "berg"]],
  ["Lynx", "🐈", "normaal", ["scherp", "oren", "bos"]],
  ["Ocelot", "🐆", "normaal", ["gevlekt", "nacht", "lenig"]],
  ["Alpaca", "🦙", "normaal", ["zacht", "kudde", "hoogte"]],
  ["Maki", "🐒", "normaal", ["staart", "groep", "springt"]],
  ["Toekan", "🐦", "normaal", ["snavel", "kleur", "tropisch"]],
  ["Specht", "🐦", "normaal", ["ritme", "boom", "gericht"]],
  ["Zwaan", "🦢", "normaal", ["elegant", "water", "fel"]],
  ["Gans", "🪿", "normaal", ["luid", "waaks", "groep"]],
  ["Arend", "🦅", "normaal", ["scherp", "hoog", "vrij"]],
  ["Valk", "🦅", "normaal", ["snel", "zicht", "duik"]],
  ["Raaf", "🐦‍⬛", "normaal", ["slim", "zwart", "mysterie"]],
  ["Meeuw", "🐦", "normaal", ["brutaal", "kust", "luid"]],
  ["Snoek", "🐟", "normaal", ["schiet", "water", "jager"]],
  ["Zalm", "🐟", "normaal", ["tegenstroom", "sterk", "reis"]],
  ["Zeepaardje", "🐠", "normaal", ["klein", "zee", "bijzonder"]],
  ["Clownvis", "🐠", "normaal", ["kleur", "anemoon", "klein"]],
  ["Manta", "🐟", "normaal", ["zweeft", "breed", "zee"]],
  ["Kogelvis", "🐡", "normaal", ["rond", "defensief", "giftig"]],
  ["Narwal", "🐋", "normaal", ["tand", "arctisch", "zeldzaam"]],
  ["Orka", "🐋", "normaal", ["slim", "team", "zee"]],
  ["Kameleon", "🦎", "moeilijk", ["kleur", "geduld", "ogen"]],
  ["Leguaan", "🦎", "moeilijk", ["zonnig", "rustig", "schubben"]],
  ["Gekko", "🦎", "moeilijk", ["plakt", "nacht", "snel"]],
  ["Varan", "🦎", "moeilijk", ["groot", "tong", "warmte"]],
  ["Axolotl", "🦎", "moeilijk", ["regeneratie", "water", "glimlach"]],
  ["Salamander", "🦎", "moeilijk", ["vochtig", "stil", "nacht"]],
  ["Boomkikker", "🐸", "moeilijk", ["klein", "klimt", "felgroen"]],
  ["Pijlgifkikker", "🐸", "moeilijk", ["kleur", "giftig", "tropisch"]],
  ["Miereneter", "🐾", "moeilijk", ["lange tong", "rustig", "insecten"]],
  ["Luiaard", "🦥", "moeilijk", ["traag", "boom", "zuinig"]],
  ["Gordeldier", "🐾", "moeilijk", ["schild", "rolt", "nacht"]],
  ["Tapir", "🐾", "moeilijk", ["snuit", "bos", "zeldzaam"]],
  ["Okapi", "🦓", "moeilijk", ["strepen", "bos", "familie van giraf"]],
  ["Capibara", "🐹", "moeilijk", ["kalm", "water", "sociaal"]],
  ["Wombat", "🐾", "moeilijk", ["graver", "compact", "nacht"]],
  ["Quokka", "🐾", "moeilijk", ["vriendelijk", "klein", "eiland"]],
  ["Tasmaanse duivel", "🐾", "moeilijk", ["fel", "nacht", "geluid"]],
  ["Fret", "🐾", "moeilijk", ["nieuwsgierig", "slank", "speels"]],
  ["Mangoeste", "🐾", "moeilijk", ["snel", "dapper", "slangen"]],
  ["Stokstaartje", "🐾", "moeilijk", ["waaks", "groep", "rechtop"]],
  ["Serval", "🐈", "moeilijk", ["hoge sprong", "oren", "gras"]],
  ["Caracal", "🐈", "moeilijk", ["pluimoren", "sprong", "woestijn"]],
  ["Manenwolf", "🐺", "moeilijk", ["lange poten", "grasland", "solitair"]],
  ["Poolvos", "🦊", "moeilijk", ["wit", "koud", "compact"]],
  ["Sneeuwluipaard", "🐆", "moeilijk", ["berg", "staart", "stil"]],
  ["Rode panda", "🐾", "moeilijk", ["boom", "rood", "bamboe"]],
  ["Binturong", "🐾", "moeilijk", ["boom", "grijpstaart", "nacht"]],
  ["Fossa", "🐾", "moeilijk", ["Madagaskar", "lenig", "jager"]],
  ["Civetkat", "🐾", "moeilijk", ["nacht", "geur", "sluipt"]],
  ["Pangolin", "🐾", "moeilijk", ["schubben", "rolt", "mieren"]],
  ["Kaketoe", "🦜", "moeilijk", ["kuif", "luid", "slim"]],
  ["Kolibrie", "🐦", "moeilijk", ["zweeft", "snel", "nectar"]],
  ["IJsvogel", "🐦", "moeilijk", ["duikt", "blauw", "water"]],
  ["Secretarisvogel", "🐦", "moeilijk", ["lange benen", "slangen", "savanne"]],
  ["Schoenbekooievaar", "🐦", "moeilijk", ["grote snavel", "moeras", "stil"]],
  ["Hoatzin", "🐦", "moeilijk", ["bladeter", "kuif", "oerlijk"]],
  ["Kasuaris", "🐦", "moeilijk", ["helm", "krachtig", "regenwoud"]],
  ["Kiwi", "🐦", "moeilijk", ["nacht", "snavel", "Nieuw-Zeeland"]],
  ["Nandoe", "🐦", "moeilijk", ["renvogel", "gras", "snel"]],
  ["Lierstaart", "🐦", "moeilijk", ["imitator", "staart", "bos"]],
  ["Zeedraakje", "🐠", "expert", ["bladachtig", "camouflage", "zee"]],
  ["Blobvis", "🐟", "expert", ["diepzee", "zacht", "druk"]],
  ["Maanvis", "🐟", "expert", ["rond", "zonnend", "groot"]],
  ["Hamerhaai", "🦈", "expert", ["kopvorm", "zee", "sensoren"]],
  ["Zaagvis", "🐟", "expert", ["zaag", "kust", "zeldzaam"]],
  ["Coelacanth", "🐟", "expert", ["oervis", "diepte", "levend fossiel"]],
  ["Nautilus", "🐚", "expert", ["schelp", "diepte", "oud"]],
  ["Degenkrab", "🦀", "expert", ["oertijd", "schild", "kust"]],
  ["Zeeslak", "🐌", "expert", ["kleur", "zee", "weekdier"]],
  ["Kerstboomworm", "🪱", "expert", ["rif", "waaiers", "klein"]],
  ["Tardigrade", "🧬", "expert", ["extreem", "microscopisch", "taai"]],
  ["Naakte molrat", "🐾", "expert", ["kolonie", "ondergronds", "taai"]],
  ["Aye-aye", "🐾", "expert", ["vinger", "nacht", "Madagaskar"]],
  ["Tenrek", "🐾", "expert", ["stekelig", "Madagaskar", "klein"]],
  ["Sengi", "🐾", "expert", ["snuit", "snel", "Afrika"]],
  ["Dikdik", "🦌", "expert", ["klein", "antilope", "alert"]],
  ["Saiga", "🦌", "expert", ["neus", "steppe", "kudde"]],
  ["Markhor", "🐐", "expert", ["gedraaide hoorns", "berg", "klimmer"]],
  ["Takin", "🐐", "expert", ["berg", "zwaar", "goudkleurig"]],
  ["Anoa", "🐃", "expert", ["kleine buffel", "eiland", "bos"]],
  ["Bongo", "🦌", "expert", ["strepen", "bos", "antilope"]],
  ["Gerenoek", "🦌", "expert", ["lange nek", "struik", "elegant"]],
  ["Klipspringer", "🦌", "expert", ["rots", "springt", "klein"]],
  ["Fenek", "🦊", "expert", ["grote oren", "woestijn", "klein"]],
  ["Dhole", "🐺", "expert", ["roedel", "Azie", "jager"]],
  ["Jaguarundi", "🐈", "expert", ["slank", "laag", "kat"]],
  ["Margay", "🐈", "expert", ["boomkat", "nacht", "lenig"]],
  ["Viscacha", "🐾", "expert", ["rots", "oren", "knaagdier"]],
  ["Kinkajoe", "🐾", "expert", ["nacht", "nectar", "grijpstaart"]],
  ["Olingo", "🐾", "expert", ["boom", "nacht", "tropisch"]],
  ["Kakapo", "🦜", "expert", ["nachtpapegaai", "zeldzaam", "loopt"]],
  ["Takahe", "🐦", "expert", ["blauwgroen", "zeldzaam", "grondvogel"]],
  ["Jacana", "🐦", "expert", ["lange tenen", "waterplanten", "licht"]],
  ["Bijeneter", "🐦", "expert", ["kleur", "insecten", "lucht"]],
  ["Quetzal", "🐦", "expert", ["staart", "groen", "tropisch"]],
  ["Franjeteenhagedis", "🦎", "expert", ["zand", "tenen", "snel"]],
  ["Heloderma", "🦎", "expert", ["giftig", "woestijn", "traag"]],
  ["Matamata", "🐢", "expert", ["camouflage", "schildpad", "water"]],
  ["Gaviaal", "🐊", "expert", ["lange snuit", "rivier", "viseter"]],
  ["Olm", "🦎", "expert", ["grot", "blind", "water"]]
].map(([name, emoji, difficulty, traits], index) => ({ id: `${difficulty}-${index}`, name, emoji, difficulty, traits }));

const people = [
  ["Albert Einstein", "🧠", "makkelijk", ["wetenschap", "relativiteit", "warrig haar"], "Albert Einstein"],
  ["Taylor Swift", "🎤", "makkelijk", ["zangeres", "stadions", "songwriter"], "Taylor Swift"],
  ["Cristiano Ronaldo", "⚽", "makkelijk", ["voetbal", "Portugal", "doelpunten"], "Cristiano Ronaldo"],
  ["Lionel Messi", "⚽", "makkelijk", ["voetbal", "Argentinie", "dribbelen"], "Lionel Messi"],
  ["Barack Obama", "🇺🇸", "makkelijk", ["president", "Verenigde Staten", "spreker"], "Barack Obama"],
  ["Beyonce", "🎶", "makkelijk", ["zangeres", "podium", "wereldster"], "Beyoncé"],
  ["Leonardo da Vinci", "🎨", "makkelijk", ["kunstenaar", "uitvinder", "Mona Lisa"], "Leonardo da Vinci"],
  ["Cleopatra", "👑", "makkelijk", ["Egypte", "koningin", "macht"], "Cleopatra"],
  ["Michael Jackson", "🕺", "makkelijk", ["popmuziek", "dans", "moonwalk"], "Michael Jackson"],
  ["Elon Musk", "🚀", "makkelijk", ["Tesla", "ruimtevaart", "ondernemer"], "Elon Musk"],
  ["Vincent van Gogh", "🌻", "normaal", ["schilder", "zonnebloemen", "Nederland"], "Vincent van Gogh"],
  ["Frida Kahlo", "🌺", "normaal", ["schilderes", "Mexico", "zelfportretten"], "Frida Kahlo"],
  ["Nelson Mandela", "🕊️", "normaal", ["Zuid-Afrika", "vrijheid", "president"], "Nelson Mandela"],
  ["Marie Curie", "⚗️", "normaal", ["wetenschap", "radioactiviteit", "Nobelprijs"], "Marie Curie"],
  ["Walt Disney", "🏰", "normaal", ["animatie", "pretparken", "Mickey"], "Walt Disney"],
  ["Serena Williams", "🎾", "normaal", ["tennis", "kracht", "kampioen"], "Serena Williams"],
  ["Usain Bolt", "🏃", "normaal", ["sprint", "Jamaica", "wereldrecord"], "Usain Bolt"],
  ["Oprah Winfrey", "🎙️", "normaal", ["televisie", "interviews", "invloed"], "Oprah Winfrey"],
  ["Freddie Mercury", "🎙️", "normaal", ["Queen", "stem", "podium"], "Freddie Mercury"],
  ["Stephen Hawking", "🌌", "normaal", ["heelal", "natuurkunde", "rolstoel"], "Stephen Hawking"],
  ["Mahatma Gandhi", "🕊️", "moeilijk", ["India", "vrede", "protest"], "Mahatma Gandhi"],
  ["Ada Lovelace", "💻", "moeilijk", ["computer", "wiskunde", "pionier"], "Ada Lovelace"],
  ["Amelia Earhart", "✈️", "moeilijk", ["piloot", "oceaan", "verdwenen"], "Amelia Earhart"],
  ["Pablo Picasso", "🖼️", "moeilijk", ["kunst", "kubisme", "Spanje"], "Pablo Picasso"],
  ["Martin Luther King Jr.", "🎤", "moeilijk", ["rechten", "speech", "droom"], "Martin Luther King Jr."],
  ["Jane Goodall", "🐒", "moeilijk", ["chimpansees", "onderzoek", "natuur"], "Jane Goodall"],
  ["Rosa Parks", "🚌", "moeilijk", ["burgerrechten", "bus", "moed"], "Rosa Parks"],
  ["Mozart", "🎼", "moeilijk", ["klassiek", "componist", "wonderkind"], "Wolfgang Amadeus Mozart"],
  ["Aristoteles", "🏛️", "expert", ["filosoof", "Griekenland", "logica"], "Aristotle"],
  ["Hypatia", "📜", "expert", ["wiskunde", "Alexandrie", "filosofie"], "Hypatia"],
  ["Grace Hopper", "💾", "expert", ["programmeur", "COBOL", "marine"], "Grace Hopper"],
  ["Alan Turing", "🧩", "expert", ["codekraker", "computer", "Enigma"], "Alan Turing"],
  ["Katherine Johnson", "🚀", "expert", ["NASA", "wiskunde", "ruimtevaart"], "Katherine Johnson"],
  ["Ibn Sina", "📚", "expert", ["geneeskunde", "filosofie", "Perzie"], "Avicenna"],
  ["Hedy Lamarr", "📡", "expert", ["actrice", "uitvinder", "communicatie"], "Hedy Lamarr"],
  ["Mary Anning", "🦕", "expert", ["fossielen", "paleontologie", "kust"], "Mary Anning"]
].map(([name, emoji, difficulty, traits, photoTitle], index) => ({
  id: `people-${difficulty}-${index}`,
  name,
  emoji,
  difficulty,
  traits,
  photoTitle
}));

const countries = [
  ["Nederland", "🇳🇱", "makkelijk", ["molens", "oranje", "Amsterdam"], "Netherlands"],
  ["Belgie", "🇧🇪", "makkelijk", ["wafels", "Brussel", "bier"], "Belgium"],
  ["Duitsland", "🇩🇪", "makkelijk", ["Berlijn", "auto's", "buurland"], "Germany"],
  ["Frankrijk", "🇫🇷", "makkelijk", ["Eiffeltoren", "Parijs", "croissant"], "France"],
  ["Spanje", "🇪🇸", "makkelijk", ["Madrid", "zon", "tapas"], "Spain"],
  ["Italie", "🇮🇹", "makkelijk", ["pizza", "Rome", "laars"], "Italy"],
  ["Verenigde Staten", "🇺🇸", "makkelijk", ["New York", "president", "Hollywood"], "United States"],
  ["Japan", "🇯🇵", "makkelijk", ["Tokyo", "sushi", "technologie"], "Japan"],
  ["China", "🇨🇳", "makkelijk", ["grote muur", "Peking", "veel inwoners"], "China"],
  ["Brazilie", "🇧🇷", "makkelijk", ["voetbal", "Amazone", "carnaval"], "Brazil"],
  ["Canada", "🇨🇦", "normaal", ["esdoorn", "koud", "groot"], "Canada"],
  ["Australie", "🇦🇺", "normaal", ["kangoeroes", "Sydney", "eilandcontinent"], "Australia"],
  ["Mexico", "🇲🇽", "normaal", ["taco's", "Mexico-Stad", "kleur"], "Mexico"],
  ["India", "🇮🇳", "normaal", ["Taj Mahal", "curry", "veel inwoners"], "India"],
  ["Egypte", "🇪🇬", "normaal", ["piramides", "Nijl", "woestijn"], "Egypt"],
  ["Zuid-Afrika", "🇿🇦", "normaal", ["Kaapstad", "safari", "regenboog"], "South Africa"],
  ["Argentinie", "🇦🇷", "normaal", ["tango", "Messi", "Buenos Aires"], "Argentina"],
  ["Griekenland", "🇬🇷", "normaal", ["eilanden", "Athene", "oudheid"], "Greece"],
  ["Noorwegen", "🇳🇴", "normaal", ["fjorden", "koud", "Oslo"], "Norway"],
  ["Zweden", "🇸🇪", "normaal", ["Stockholm", "IKEA", "bossen"], "Sweden"],
  ["IJsland", "🇮🇸", "moeilijk", ["vulkanen", "geisers", "eiland"], "Iceland"],
  ["Marokko", "🇲🇦", "moeilijk", ["Marrakesh", "woestijn", "thee"], "Morocco"],
  ["Thailand", "🇹🇭", "moeilijk", ["Bangkok", "tempels", "stranden"], "Thailand"],
  ["Vietnam", "🇻🇳", "moeilijk", ["Hanoi", "rijstvelden", "kust"], "Vietnam"],
  ["Nieuw-Zeeland", "🇳🇿", "moeilijk", ["kiwi", "bergen", "eilanden"], "New Zealand"],
  ["Peru", "🇵🇪", "moeilijk", ["Machu Picchu", "Andes", "lama"], "Peru"],
  ["Turkije", "🇹🇷", "moeilijk", ["Istanbul", "brug tussen continenten", "thee"], "Turkey"],
  ["Zwitserland", "🇨🇭", "moeilijk", ["Alpen", "horloges", "chocolade"], "Switzerland"],
  ["Bhutan", "🇧🇹", "expert", ["Himalaya", "geluk", "draken"], "Bhutan"],
  ["Mongolie", "🇲🇳", "expert", ["steppe", "paarden", "Genghis Khan"], "Mongolia"],
  ["Namibie", "🇳🇦", "expert", ["duinen", "woestijn", "zuidelijk Afrika"], "Namibia"],
  ["Georgie", "🇬🇪", "expert", ["Kaukasus", "wijn", "Tbilisi"], "Georgia (country)"],
  ["Oman", "🇴🇲", "expert", ["woestijn", "Muscat", "Arabisch schiereiland"], "Oman"],
  ["Laos", "🇱🇦", "expert", ["Mekong", "landlocked", "tempels"], "Laos"],
  ["Madagaskar", "🇲🇬", "expert", ["maki's", "eiland", "baobab"], "Madagascar"],
  ["Estland", "🇪🇪", "expert", ["Tallinn", "digitaal", "Baltisch"], "Estonia"]
].map(([name, emoji, difficulty, traits, photoTitle], index) => ({
  id: `countries-${difficulty}-${index}`,
  name,
  emoji,
  difficulty,
  traits,
  photoTitle
}));

const contentTypes = {
  animals: {
    label: "Dieren",
    icon: "🐾",
    intro: "Iedereen pakt een kaart en raadt het eigen dier door vragen te stellen.",
    items: animals
  },
  people: {
    label: "Bekende personen",
    icon: "👤",
    intro: "Iedereen pakt een kaart en raadt de eigen persoon door vragen te stellen.",
    items: people
  },
  countries: {
    label: "Landen",
    icon: "🌍",
    intro: "Iedereen pakt een kaart en raadt het eigen land door vragen te stellen.",
    items: countries
  }
};

const actingPrompts = [
  "houding",
  "manier van bewegen",
  "blik of gezichtsuitdrukking",
  "tempo",
  "geluid zonder woorden",
  "reactie als iemand dichtbij komt"
];

const photoTitles = {
  Aap: "Monkey",
  "Aye-aye": "Aye-aye",
  Alpaca: "Alpaca",
  Anoa: "Anoa",
  Arend: "Eagle",
  Axolotl: "Axolotl",
  Hond: "Dog",
  Kat: "Cat",
  Leeuw: "Lion",
  Tijger: "Tiger",
  Olifant: "Elephant",
  Giraf: "Giraffe",
  Zebra: "Zebra",
  Panda: "Giant panda",
  Beer: "Bear",
  Vos: "Fox",
  Wolf: "Wolf",
  Konijn: "Rabbit",
  Kikker: "Frog",
  Koe: "Cattle",
  Varken: "Pig",
  Paard: "Horse",
  Kip: "Chicken",
  Pinguin: "Penguin",
  Uil: "Owl",
  Eend: "Duck",
  Papegaai: "Parrot",
  Flamingo: "Flamingo",
  Haai: "Shark",
  Dolfijn: "Dolphin",
  Walvis: "Whale",
  Octopus: "Octopus",
  Schildpad: "Turtle",
  Krokodil: "Crocodile",
  Slang: "Snake",
  Muis: "Mouse",
  Hamster: "Hamster",
  Geit: "Goat",
  Schaap: "Sheep",
  Hert: "Deer",
  Kangoeroe: "Kangaroo",
  Koala: "Koala",
  Egel: "Hedgehog",
  Pauw: "Peafowl",
  Luipaard: "Leopard",
  Mier: "Ant",
  Bij: "Bee",
  Vlinder: "Butterfly",
  Spin: "Spider",
  Schorpioen: "Scorpion",
  Krab: "Crab",
  Kreeft: "Lobster",
  Inktvis: "Squid",
  Zeehond: "Pinniped",
  Otter: "Otter",
  Bever: "Beaver",
  Wasbeer: "Raccoon",
  Stinkdier: "Skunk",
  Das: "Badger",
  Nijlpaard: "Hippopotamus",
  Neushoorn: "Rhinoceros",
  Lama: "Llama",
  Eland: "Moose",
  Bizons: "Bison",
  Waterbuffel: "Water buffalo",
  Kameel: "Camel",
  Dromedaris: "Dromedary",
  Gorilla: "Gorilla",
  "Orang-oetan": "Orangutan",
  Chimpansee: "Chimpanzee",
  Hyena: "Hyena",
  Jakhals: "Jackal",
  Poema: "Cougar",
  Lynx: "Lynx",
  Ocelot: "Ocelot",
  Maki: "Lemur",
  Toekan: "Toucan",
  Specht: "Woodpecker",
  Zwaan: "Swan",
  Gans: "Goose",
  Valk: "Falcon",
  Raaf: "Raven",
  Meeuw: "Gull",
  Snoek: "Northern pike",
  Zalm: "Salmon",
  Zeepaardje: "Seahorse",
  Clownvis: "Amphiprioninae",
  Manta: "Manta ray",
  Kogelvis: "Tetraodontidae",
  Narwal: "Narwhal",
  Orka: "Orca",
  Kameleon: "Chameleon",
  Leguaan: "Iguana",
  Gekko: "Gecko",
  Varan: "Monitor lizard",
  Axolotl: "Axolotl",
  Salamander: "Salamander",
  Boomkikker: "Tree frog",
  Pijlgifkikker: "Poison dart frog",
  Miereneter: "Anteater",
  Luiaard: "Sloth",
  Gordeldier: "Armadillo",
  Tapir: "Tapir",
  Okapi: "Okapi",
  Capibara: "Capybara",
  Wombat: "Wombat",
  Quokka: "Quokka",
  "Tasmaanse duivel": "Tasmanian devil",
  Fret: "Ferret",
  Mangoeste: "Mongoose",
  Stokstaartje: "Meerkat",
  Serval: "Serval",
  Caracal: "Caracal",
  Manenwolf: "Maned wolf",
  Poolvos: "Arctic fox",
  Sneeuwluipaard: "Snow leopard",
  "Rode panda": "Red panda",
  Binturong: "Binturong",
  Fossa: "Fossa (animal)",
  Civetkat: "Civet",
  Pangolin: "Pangolin",
  Kaketoe: "Cockatoo",
  Kolibrie: "Hummingbird",
  IJsvogel: "Kingfisher",
  Secretarisvogel: "Secretarybird",
  Schoenbekooievaar: "Shoebill",
  Hoatzin: "Hoatzin",
  Kasuaris: "Cassowary",
  Kiwi: "Kiwi (bird)",
  Nandoe: "Rhea (bird)",
  Lierstaart: "Lyrebird",
  Zeedraakje: "Leafy seadragon",
  Blobvis: "Psychrolutes marcidus",
  Maanvis: "Ocean sunfish",
  Hamerhaai: "Hammerhead shark",
  Zaagvis: "Sawfish",
  Coelacanth: "Coelacanth",
  Nautilus: "Nautilus",
  Degenkrab: "Horseshoe crab",
  Zeeslak: "Sea slug",
  Kerstboomworm: "Spirobranchus giganteus",
  Tardigrade: "Tardigrade",
  "Naakte molrat": "Naked mole-rat",
  Tenrek: "Tenrec",
  Sengi: "Elephant shrew",
  Dikdik: "Dik-dik",
  Saiga: "Saiga antelope",
  Markhor: "Markhor",
  Takin: "Takin",
  Bongo: "Bongo (antelope)",
  Gerenoek: "Gerenuk",
  Klipspringer: "Klipspringer",
  Fenek: "Fennec fox",
  Dhole: "Dhole",
  Jaguarundi: "Jaguarundi",
  Margay: "Margay",
  Viscacha: "Viscacha",
  Kinkajoe: "Kinkajou",
  Olingo: "Olingo",
  Kakapo: "Kakapo",
  Takahe: "Takahē",
  Jacana: "Jacana",
  Bijeneter: "Bee-eater",
  Quetzal: "Resplendent quetzal",
  Franjeteenhagedis: "Fringe-toed lizard",
  Heloderma: "Gila monster",
  Matamata: "Mata mata",
  Gaviaal: "Gharial",
  Olm: "Olm"
};

const photoCache = new Map();
const photoRequests = new Set();
const photoFailures = new Set();

const difficultyConfig = {
  makkelijk: {
    label: "Makkelijk",
    description: "Bekende dieren, fijne warming-up.",
    pool: ["makkelijk"]
  },
  normaal: {
    label: "Normaal",
    description: "Bekend en verrassend door elkaar.",
    pool: ["makkelijk", "normaal"]
  },
  moeilijk: {
    label: "Moeilijk",
    description: "Meer zeldzame dieren en minder voor de hand liggend.",
    pool: ["normaal", "moeilijk"]
  },
  expert: {
    label: "Expert",
    description: "Voor mensen met dierentuinbrein.",
    pool: ["moeilijk", "expert"]
  }
};

const app = document.querySelector("#app");
const gameName = "RaadRondje";

const state = {
  players: ["Glenn", "Annemiek"],
  contentType: "animals",
  difficulty: "normaal",
  difficultyMode: "global",
  playerDifficulties: {
    Glenn: "normaal",
    Annemiek: "normaal"
  },
  phase: "category",
  assignments: [],
  revealedCards: new Set(),
  photoCards: new Set(),
  roundWinner: "",
  lastWinner: "",
  scores: {},
  resultsApplied: false,
  round: 1,
  toast: ""
};

const randomItems = (items, count) => {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy.slice(0, count);
};

const introItemsByType = new Map();

const getActiveConfig = () => contentTypes[state.contentType] || contentTypes.animals;

const getActiveItems = () => getActiveConfig().items;

const getIntroItems = () => {
  if (!introItemsByType.has(state.contentType)) {
    introItemsByType.set(state.contentType, randomItems(getActiveItems(), 20));
  }
  return introItemsByType.get(state.contentType);
};

const getPool = () => {
  const allowed = difficultyConfig[state.difficulty].pool;
  return getActiveItems().filter((item) => allowed.includes(item.difficulty));
};

const getPoolForDifficulty = (difficulty) => {
  const allowed = difficultyConfig[difficulty].pool;
  return getActiveItems().filter((item) => allowed.includes(item.difficulty));
};

const getAnimalInspiration = (animal) => [
  ...animal.traits,
  ...randomItems(actingPrompts, 3).map((prompt) => `gebruik ${prompt}`)
];

const getAnimalPhotoTitle = (animal) => animal.photoTitle || photoTitles[animal.name] || animal.name;

const getLocalAnimalImageUrl = (animal) => {
  const name = String(animal.name)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#ecf8f0"/>
          <stop offset="0.58" stop-color="#fff7df"/>
          <stop offset="1" stop-color="#e9f3ff"/>
        </linearGradient>
      </defs>
      <rect width="640" height="420" rx="32" fill="url(#bg)"/>
      <circle cx="510" cy="72" r="42" fill="#f9b233" opacity="0.4"/>
      <path d="M0 338 C130 298 218 372 340 332 C460 294 520 322 640 286 L640 420 L0 420 Z" fill="#b8df9b" opacity="0.76"/>
      <text x="320" y="242" text-anchor="middle" dominant-baseline="middle" font-size="148">${animal.emoji}</text>
      <text x="320" y="356" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#14532d">${name}</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const getPhotoFallbackUrls = (title) => {
  return [];
};

const retry = (task, retries = 2, delay = 450) =>
  task().catch((error) => {
    if (retries <= 0) throw error;
    return new Promise((resolve) => window.setTimeout(resolve, delay)).then(() =>
      retry(task, retries - 1, delay * 1.6)
    );
  });

const escapeCssValue = (value) => {
  if (window.CSS?.escape) return CSS.escape(value);
  return String(value).replaceAll("\\", "\\\\").replaceAll('"', '\\"');
};

const loadAnimalPhotos = () => {
  document.querySelectorAll("[data-photo-title]").forEach((photo) => {
    const title = photo.dataset.photoTitle;
    const image = photo.querySelector("img");
    if (!title || !image) return;

    if (photoCache.has(title) && !photoFailures.has(title)) {
      setPhotoSource(photo, image, photoCache.get(title), title);
      return;
    }

    if (photoRequests.has(title)) return;

    photoRequests.add(title);
    const endpoint = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replaceAll(" ", "_"))}`;
    retry(() => fetch(endpoint).then((response) => {
      if (!response.ok) throw new Error("Geen Wikipedia-foto");
      return response.json();
    }))
      .then((data) => {
        const sources = [
          data?.originalimage?.source,
          data?.thumbnail?.source,
          ...getPhotoFallbackUrls(title)
        ].filter(Boolean);
        photoCache.set(title, sources);
        photoFailures.delete(title);
        document.querySelectorAll(`[data-photo-title="${escapeCssValue(title)}"]`).forEach((currentPhoto) => {
          setPhotoSource(currentPhoto, currentPhoto.querySelector("img"), sources, title);
        });
      })
      .catch(() => {
        const sources = getPhotoFallbackUrls(title);
        photoCache.set(title, sources);
        photoFailures.delete(title);
        setPhotoSource(photo, image, sources, title);
      })
      .finally(() => photoRequests.delete(title));
  });
};

const setPhotoSource = (photo, image, sources, title) => {
  if (!photo || !image) return;
  const localSource = image.dataset.localSrc || "";
  const queue = Array.isArray(sources) ? [...sources] : [sources].filter(Boolean);
  const retriedSources = [...queue, ...queue.map((source) =>
    source.startsWith("data:") ? source : `${source}${source.includes("?") ? "&" : "?"}retry=${Date.now()}`
  )];
  if (localSource && !image.src) image.src = localSource;
  photo.classList.add("loaded");

  const tryNextSource = () => {
    const nextSource = retriedSources.shift();
    if (!nextSource) {
      if (localSource) image.src = localSource;
      if (title) photoFailures.add(title);
      return;
    }

    const probe = new Image();
    probe.referrerPolicy = "no-referrer";
    probe.onload = () => {
      image.src = nextSource;
      if (title) {
        photoFailures.delete(title);
        photoCache.set(title, [nextSource]);
      }
    };
    probe.onerror = tryNextSource;
    probe.src = nextSource;
  };
  tryNextSource();
};

const ensureScores = () => {
  state.players.forEach((player) => {
    if (state.scores[player] === undefined) state.scores[player] = 0;
  });
  Object.keys(state.scores).forEach((player) => {
    if (!state.players.includes(player)) delete state.scores[player];
  });
};

const showToast = (message) => {
  state.toast = message;
  render();
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    state.toast = "";
    render();
  }, 2600);
};

const startRound = () => {
  ensureScores();
  if (state.players.length < 2) {
    showToast("Voeg minimaal twee spelers toe.");
    return;
  }

  const pool = getPool();
  if (state.difficultyMode === "global" && pool.length < state.players.length) {
    showToast("Kies minder spelers of een grotere moeilijkheidspool.");
    return;
  }

  const usedAnimalIds = new Set();
  const pickAnimalForPlayer = (player) => {
    const difficulty = state.difficultyMode === "perPlayer"
      ? state.playerDifficulties[player] || state.difficulty
      : state.difficulty;
    const playerPool = getPoolForDifficulty(difficulty).filter((animal) => !usedAnimalIds.has(animal.id));
    const pickedAnimal = randomItems(playerPool, 1)[0];
    if (pickedAnimal) usedAnimalIds.add(pickedAnimal.id);
    return pickedAnimal;
  };
  const pickedAnimals = state.players.map(pickAnimalForPlayer);
  if (pickedAnimals.some((animal) => !animal)) {
    showToast("Niet genoeg unieke dieren voor deze instellingen.");
    return;
  }
  state.assignments = state.players.map((player, index) => ({
    player,
    animal: pickedAnimals[index],
    inspiration: getAnimalInspiration(pickedAnimals[index])
  }));
  state.revealedCards = new Set();
  state.photoCards = new Set();
  state.roundWinner = "";
  state.lastWinner = "";
  state.resultsApplied = false;
  state.phase = "cards";
  render();
};

const addPlayer = () => {
  const input = document.querySelector("#playerName");
  const name = input.value.trim();
  if (!name) return;
  if (state.players.some((player) => player.toLowerCase() === name.toLowerCase())) {
    showToast("Die naam staat al in het spel.");
    return;
  }
  state.players.push(name);
  state.scores[name] = 0;
  state.playerDifficulties[name] = state.difficulty;
  input.value = "";
  render();
};

const removePlayer = (index) => {
  const [removedPlayer] = state.players.splice(index, 1);
  delete state.scores[removedPlayer];
  delete state.playerDifficulties[removedPlayer];
  render();
};

const setDifficulty = (difficulty) => {
  state.difficulty = difficulty;
  render();
};

const setContentType = (contentType) => {
  state.contentType = contentTypes[contentType] ? contentType : "animals";
  state.phase = "setup";
  render();
};

const setDifficultyMode = (mode) => {
  state.difficultyMode = mode;
  state.players.forEach((player) => {
    if (!state.playerDifficulties[player]) state.playerDifficulties[player] = state.difficulty;
  });
  render();
};

const setPlayerDifficulty = (player, difficulty) => {
  state.playerDifficulties[player] = difficulty;
  render();
};

const revealCard = (player) => {
  if (state.revealedCards.has(player)) {
    state.revealedCards.delete(player);
    state.photoCards.delete(player);
  } else {
    state.revealedCards.add(player);
  }
  render();
};

const togglePhoto = (player) => {
  if (state.photoCards.has(player)) {
    state.photoCards.delete(player);
  } else {
    state.photoCards.add(player);
  }
  render();
};

const retryPhoto = (title) => {
  photoCache.delete(title);
  photoFailures.delete(title);
  photoRequests.delete(title);
  render();
};

const goScoring = () => {
  state.revealedCards = new Set();
  state.phase = "score";
  render();
};

const revealResults = () => {
  if (!state.roundWinner) {
    showToast("Kies eerst wie deze ronde heeft gewonnen.");
    return;
  }
  ensureScores();
  if (!state.resultsApplied) state.scores[state.roundWinner] += 1;
  state.lastWinner = state.roundWinner;
  state.resultsApplied = true;
  state.phase = "results";
  render();
};

const nextRound = () => {
  state.round += 1;
  startRound();
};

const resetGame = () => {
  state.phase = "setup";
  state.assignments = [];
  state.revealedCards = new Set();
  state.photoCards = new Set();
  state.roundWinner = "";
  state.lastWinner = "";
  state.resultsApplied = false;
  render();
};

const chooseCategory = () => {
  state.phase = "category";
  state.assignments = [];
  state.revealedCards = new Set();
  state.photoCards = new Set();
  state.roundWinner = "";
  state.lastWinner = "";
  state.resultsApplied = false;
  render();
};

const hasGameProgress = () =>
  state.assignments.length > 0 ||
  state.round > 1 ||
  Object.values(state.scores).some((score) => score > 0);

const goToCategoriesFromTopbar = () => {
  if (state.phase !== "category" && hasGameProgress()) {
    const confirmed = window.confirm("Terug naar de categorieen? Je huidige ronde wordt gesloten.");
    if (!confirmed) return;
  }
  chooseCategory();
};

const setRoundWinner = (winner) => {
  state.roundWinner = winner;
  render();
};

const endGame = () => {
  state.phase = "final";
  render();
};

const playerColor = (index) => {
  const colors = ["#f9b233", "#e85d4f", "#3b82a8", "#1f7a45", "#8b5cf6", "#ef7d3c", "#14b8a6"];
  return colors[index % colors.length];
};

const setupView = () => {
  const pool = getPool();
  const activeConfig = getActiveConfig();
  return `
    <main class="hero-grid">
      <section class="panel setup-panel">
        <h2 class="section-title">Spelers</h2>
        <div class="field-row">
          <label for="playerName">Naam toevoegen</label>
          <div class="player-input">
            <input id="playerName" type="text" maxlength="24" autocomplete="off" placeholder="Bijv. Glenn" />
            <button class="secondary" type="button" data-action="add-player" aria-label="Speler toevoegen">＋</button>
          </div>
        </div>
        <div class="players-list" aria-live="polite">
          ${state.players.map((player, index) => `
            <div class="player-chip">
              <span class="avatar-dot" style="background:${playerColor(index)}"></span>
              <strong>${escapeHtml(player)}</strong>
              <button class="icon-button" type="button" data-action="remove-player" data-index="${index}" aria-label="${escapeHtml(player)} verwijderen">×</button>
            </div>
          `).join("")}
        </div>

        <div class="current-category">
          <span>${activeConfig.icon}</span>
          <strong>${activeConfig.label}</strong>
          <button class="secondary" type="button" data-action="category">Andere variant</button>
        </div>

        <h2 class="section-title">Moeilijkheid</h2>
        <div class="mode-switch" role="group" aria-label="Moeilijkheidsmodus">
          <button class="mode-button" type="button" data-action="difficulty-mode" data-mode="global" aria-pressed="${state.difficultyMode === "global"}">Iedereen gelijk</button>
          <button class="mode-button" type="button" data-action="difficulty-mode" data-mode="perPlayer" aria-pressed="${state.difficultyMode === "perPlayer"}">Per speler</button>
        </div>
        <div class="difficulty-grid">
          ${Object.entries(difficultyConfig).map(([key, config]) => `
            <button class="choice-button" type="button" data-action="difficulty" data-difficulty="${key}" aria-pressed="${state.difficulty === key}">
              <strong>${config.label}</strong>
              <span>${config.description}</span>
            </button>
          `).join("")}
        </div>
        ${state.difficultyMode === "perPlayer" ? `
          <div class="player-difficulty-list">
            ${state.players.map((player) => `
              <label class="player-difficulty-row">
                <strong>${escapeHtml(player)}</strong>
                <select data-action="player-difficulty" data-player="${escapeAttr(player)}">
                  ${Object.entries(difficultyConfig).map(([key, config]) => `
                    <option value="${key}" ${state.playerDifficulties[player] === key ? "selected" : ""}>${config.label}</option>
                  `).join("")}
                </select>
              </label>
            `).join("")}
          </div>
        ` : ""}

        <div class="meta-grid">
          <div class="meta-box"><strong>${state.players.length}</strong><span>spelers</span></div>
          <div class="meta-box"><strong>${state.difficultyMode === "global" ? pool.length : "mix"}</strong><span>kaarten in pot</span></div>
          <div class="meta-box"><strong>${state.round}</strong><span>ronde</span></div>
        </div>

        <button class="primary" type="button" data-action="start" ${state.players.length < 2 ? "disabled" : ""}>Start ronde</button>
        <p class="small-note">${activeConfig.intro} De eerste die het eigen antwoord raadt wint de ronde.</p>
      </section>

      <aside class="panel visual-panel" aria-hidden="true">
        <div class="habitat">
          <div class="animal-cloud">
            ${getIntroItems().map((item) => `<span class="animal-token">${item.emoji}</span>`).join("")}
          </div>
        </div>
      </aside>
    </main>
  `;
};

const categoryView = () => `
  <main class="category-view">
    <section class="category-hero">
      <div>
        <p class="eyebrow">Kies een speltype</p>
        <h2>Wat gaan jullie raden?</h2>
      </div>
      <div class="category-grid">
        ${Object.entries(contentTypes).map(([key, config]) => `
          <button class="category-card" type="button" data-action="content-type" data-content-type="${key}">
            <span class="category-icon">${config.icon}</span>
            <strong>${config.label}</strong>
            <small>${config.intro}</small>
          </button>
        `).join("")}
      </div>
    </section>
  </main>
`;

const cardsView = () => `
  <main class="game-view">
    <section class="panel stage-panel">
      <div class="stage-header">
        <div>
          <h2>Geheime kaarten</h2>
          <p>Geef de telefoon door. Open alleen je eigen kaart en sluit hem daarna weer.</p>
        </div>
        <button class="secondary" type="button" data-action="reset">Instellingen</button>
      </div>
      <div class="card-grid">
        ${state.assignments.map(({ player, animal, inspiration }) => {
          const open = state.revealedCards.has(player);
          const showPhoto = state.photoCards.has(player);
          const photoTitle = getAnimalPhotoTitle(animal);
          const localImageUrl = getLocalAnimalImageUrl(animal);
          return `
            <article class="secret-card ${open ? "revealed" : "locked"}">
              <div class="secret-card-body">
                <h3 class="card-name">${escapeHtml(player)}</h3>
                ${open ? `
                  ${showPhoto ? `
                    <div class="animal-photo loaded" data-photo-title="${escapeAttr(photoTitle)}">
                      <img src="${localImageUrl}" data-local-src="${localImageUrl}" alt="Voorbeeldafbeelding van ${escapeAttr(animal.name)}" loading="lazy" referrerpolicy="no-referrer" />
                      <span class="animal-photo-fallback">${animal.emoji}</span>
                    </div>
                  ` : `
                    <div class="animal-icon-card" aria-hidden="true">${animal.emoji}</div>
                  `}
                  <h4 class="animal-name">${animal.name}</h4>
                  <div class="photo-actions">
                    <button class="photo-toggle" type="button" data-action="toggle-photo" data-player="${escapeAttr(player)}">${showPhoto ? "Toon icoon" : "Toon foto"}</button>
                    ${showPhoto ? `<button class="photo-toggle" type="button" data-action="retry-photo" data-photo-title="${escapeAttr(photoTitle)}">Ververs foto</button>` : ""}
                  </div>
                  <p class="small-note">Inspiratie voor hints, vragen en spel.</p>
                  <ul class="traits">${inspiration.map((trait) => `<li>${trait}</li>`).join("")}</ul>
                ` : `
                  <div class="secret-cover" aria-hidden="true">
                    <span>?</span>
                  </div>
                  <p class="small-note">Tik pas als deze speler kijkt.</p>
                `}
              </div>
              <button class="${open ? "secondary" : "primary"} card-toggle" type="button" data-action="reveal-card" data-player="${escapeAttr(player)}">${open ? "Sluit kaart" : "Toon kaart"}</button>
            </article>
          `;
        }).join("")}
      </div>
      <div class="actions">
        <button class="primary" type="button" data-action="scoring">Naar punten</button>
      </div>
    </section>
  </main>
`;

const scoringView = () => {
  return `
    <main class="game-view">
      <section class="panel stage-panel">
        <div class="stage-header">
          <div>
            <h2>Wie won de ronde?</h2>
            <p>Kies de speler die als eerste de eigen kaart heeft geraden. Die speler krijgt 1 punt.</p>
          </div>
          <button class="secondary" type="button" data-action="cards">Kaarten</button>
        </div>
        <div class="round-winner-panel">
          <div class="winner-buttons big">
            ${state.players.map((candidate) => `
              <button
                class="winner-button"
                type="button"
                data-action="winner"
                data-winner="${escapeAttr(candidate)}"
                aria-pressed="${state.roundWinner === candidate}"
              >${escapeHtml(candidate)}</button>
            `).join("")}
          </div>
        </div>
        <div class="actions">
          <button class="primary" type="button" data-action="results">Onthul score</button>
          <button class="secondary" type="button" data-action="reset">Nieuwe instellingen</button>
        </div>
      </section>
    </main>
  `;
};

const resultsView = () => {
  const sortedScores = [...state.players].sort((a, b) => state.scores[b] - state.scores[a] || a.localeCompare(b));
  return `
    <main class="game-view">
      <section class="panel stage-panel">
        <div class="stage-header">
          <div>
            <h2>Uitslag</h2>
            <p>${state.lastWinner ? `${escapeHtml(state.lastWinner)} wint deze ronde en krijgt 1 punt.` : "Geen winnaar gekozen."}</p>
          </div>
          <span class="score">+1</span>
        </div>
        <div class="score-table">
          ${sortedScores.map((player, index) => `
            <div class="score-row">
              <span>${index + 1}</span>
              <strong>${escapeHtml(player)}</strong>
              <b>${state.scores[player]}</b>
            </div>
          `).join("")}
        </div>
        <div class="actions">
          <button class="primary" type="button" data-action="next-round">Nog een ronde</button>
          <button class="secondary" type="button" data-action="end-game">Einde spel</button>
        </div>
      </section>
    </main>
  `;
};

const finalView = () => {
  const sortedScores = [...state.players].sort((a, b) => state.scores[b] - state.scores[a] || a.localeCompare(b));
  const winnerScore = sortedScores.length ? state.scores[sortedScores[0]] : 0;
  const winners = sortedScores.filter((player) => state.scores[player] === winnerScore && winnerScore > 0);
  return `
    <main class="game-view">
      <section class="panel stage-panel">
        <div class="stage-header">
          <div>
            <h2>Eindstand</h2>
            <p>${winners.length ? `${winners.map(escapeHtml).join(" en ")} wint het spel.` : "Er zijn nog geen punten gescoord."}</p>
          </div>
          <span class="score">${winnerScore}</span>
        </div>
        <div class="score-table">
          ${sortedScores.map((player, index) => `
            <div class="score-row">
              <span>${index + 1}</span>
              <strong>${escapeHtml(player)}</strong>
              <b>${state.scores[player]}</b>
            </div>
          `).join("")}
        </div>
        <div class="actions">
          <button class="primary" type="button" data-action="next-round">Nog een ronde</button>
          <button class="secondary" type="button" data-action="reset">Nieuw spel</button>
        </div>
      </section>
    </main>
  `;
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const escapeAttr = escapeHtml;

const render = () => {
  const view = state.phase === "category"
      ? categoryView()
      : state.phase === "setup"
      ? setupView()
      : state.phase === "cards"
        ? cardsView()
      : state.phase === "score"
        ? scoringView()
      : state.phase === "final"
        ? finalView()
        : resultsView();

  const activeConfig = getActiveConfig();
  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <button class="brand" type="button" data-action="topbar-category" aria-label="Terug naar categorieen">
          <div class="brand-mark" aria-hidden="true">${activeConfig.icon}</div>
          <div>
            <h1>${gameName}</h1>
            <p>${state.phase === "category" ? "Kies een categorie" : activeConfig.label}</p>
          </div>
        </button>
        <div class="status-pill">${difficultyConfig[state.difficulty].label} · ronde ${state.round}</div>
      </header>
      ${view}
      ${state.toast ? `<div class="toast" role="status">${escapeHtml(state.toast)}</div>` : ""}
    </div>
  `;

  loadAnimalPhotos();

};

app.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const { action } = button.dataset;
  if (action === "add-player") addPlayer();
  if (action === "remove-player") removePlayer(Number(button.dataset.index));
  if (action === "content-type") setContentType(button.dataset.contentType);
  if (action === "category") goToCategoriesFromTopbar();
  if (action === "topbar-category") goToCategoriesFromTopbar();
  if (action === "difficulty") setDifficulty(button.dataset.difficulty);
  if (action === "difficulty-mode") setDifficultyMode(button.dataset.mode);
  if (action === "start") startRound();
  if (action === "reveal-card") revealCard(button.dataset.player);
  if (action === "toggle-photo") togglePhoto(button.dataset.player);
  if (action === "retry-photo") retryPhoto(button.dataset.photoTitle);
  if (action === "scoring") goScoring();
  if (action === "winner") setRoundWinner(button.dataset.winner);
  if (action === "cards") {
    state.phase = "cards";
    render();
  }
  if (action === "results") revealResults();
  if (action === "next-round") nextRound();
  if (action === "end-game") endGame();
  if (action === "reset") resetGame();
});

app.addEventListener("change", (event) => {
  if (event.target.matches("select[data-action='player-difficulty']")) {
    setPlayerDifficulty(event.target.dataset.player, event.target.value);
  }
});

app.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.matches("#playerName")) {
    addPlayer();
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/public-sw.js").catch(() => {});
  });
}

render();
