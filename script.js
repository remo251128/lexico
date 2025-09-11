/*
TRANSLATION NOTE: 
All user-facing text must be added to the LANGUAGES object with both Spanish (es) 
and English (en) versions. When adding new UI elements:
1. Add the text to the LANGUAGES object under both languages
2. Use the language keys in your code instead of hardcoded text
3. Update the updateLanguage() function to handle the new text elements
*/

const LANGUAGES = {
    es: {
        unlimitedAttempts: "Intentos ilimitados",
        playOtherCountries: "Juega en otros países:",
        statsTitle: "Estadísticas",
        gamesPlayed: "Jugadas",
        winPercentage: "Victorias",
        currentStreak: "Racha actual",
        maxStreak: "Racha máxima",
        guessDistribution: "Distribución de intentos",
        share: "Compartir",
        nextGame: "¡Puedes jugar otra palabra ahora mismo!",
        howToPlay: "Cómo jugar",
        instructions: [
            "Adivina la palabra oculta en 6 intentos.",
            "Cada intento debe ser una palabra válida de 5 letras.",
            "Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra."
        ],
        examples: "Ejemplos",
        exampleCorrect: "La letra <strong>B</strong> está en la palabra y en la posición correcta.",
        examplePresent: "La letra <strong>A</strong> está en la palabra pero en la posición incorrecta.",
        exampleAbsent: "La letra <strong>U</strong> no está en la palabra.",
        note: "¡Puedes jugar tantas veces como quieras! Cada país tiene su propia lista de palabras con jerga local.",
        monetizationNote: "Nota: Esta versión es gratuita. En el futuro podríamos añadir características premium como estadísticas avanzadas o temas personalizados.",
        winTitle: "¡Ganaste!",
        loseTitle: "¡Perdiste!",
        correctWord: "La palabra era:",
        playAgain: "Jugar otra",
        shareResults: "Compartir",
        shareText: "Lexico LATINO {country} {guesses}/6\n\n{grid}",
        invalidWord: "Palabra no válida",
        tooShort: "La palabra debe tener 5 letras",
        // Game over modal labels
        statsLabel: "Estadísticas",
        distributionLabel: "Distribución de intentos",
        gamesPlayed: "Jugadas",
        winPercentage: "Victorias",
        currentStreak: "Racha actual",
        maxStreak: "Racha máxima",
        guessDistribution: "Distribución de intentos",
        playAgain: "Jugar otra",
        shareResults: "Compartir",
        otherVersions: "Prueba nuestras otras versiones del juego",
        selectGameMode: "Selecciona un Modo de Juego",
    footballCategory: "Fútbol",
    footballPlayers: "Jugadores de Fútbol",
    slangCategory: "Jerga Latina",
    slangArgentina: "Jerga Argentina",
    slangChile: "Jerga Chilena",
    slangPeru: "Jerga Peruana",
    slangColombia: "Jerga Colombiana",
    slangMexico: "Jerga Mexicana"
    },
    en: {
        unlimitedAttempts: "Unlimited games",
        playOtherCountries: "Also try other countries' versions",
        statsTitle: "Statistics",
        gamesPlayed: "Played",
        winPercentage: "Win %",
        currentStreak: "Current streak",
        maxStreak: "Max streak",
        guessDistribution: "Guess distribution",
        share: "Share",
        nextGame: "You can play another word right now!",
        howToPlay: "How to play",
        instructions: [
            "Guess the hidden word in 6 tries.",
            "Each guess must be a valid 5-letter word.",
            "After each guess, the tile colors will show how close your guess was."
        ],
        examples: "Examples",
        exampleCorrect: "The letter <strong>B</strong> is in the word and in the correct position.",
        examplePresent: "The letter <strong>A</strong> is in the word but in the wrong position.",
        exampleAbsent: "The letter <strong>U</strong> is not in the word.",
        note: "You can play as many times as you want! Each country has its own list of words with local slang.",
        monetizationNote: "Note: This version is free. In the future we might add premium features like advanced statistics or custom themes.",
        winTitle: "You win!",
        loseTitle: "You lose",
        correctWord: "The word was:",
        playAgain: "Play again",
        shareResults: "Share",
        shareText: "Lexico LATINO {country} {guesses}/6\n\n{grid}",
        invalidWord: "Invalid word",
        tooShort: "Word must be 5 letters",
        // Game over modal labels
        statsLabel: "Statistics",
        distributionLabel: "Guess distribution",
        gamesPlayed: "Played",
        winPercentage: "Win %",
        currentStreak: "Current streak",
        maxStreak: "Max streak",
        guessDistribution: "Guess distribution",
        playAgain: "Play again",
        shareResults: "Share",
        otherVersions: "Take a look at our other versions of the game",
        selectGameMode: "Select a Game Mode",
    footballCategory: "Football/Soccer",
    footballPlayers: "Football Players",
    slangCategory: "Latin Slang",
    slangArgentina: "Argentinian Slang",
    slangChile: "Chilean Slang",
    slangPeru: "Peruvian Slang",
    slangColombia: "Colombian Slang",
    slangMexico: "Mexican Slang"
    }
};

let currentLanguage = 'es'; // Default language



// ------------------------------------------------------------------------------------

// Country word lists (in a real app, these would be much larger)

// LISTA DE PALABRAS


const WORD_LISTS = {
    general: [ "ababa","abaca","abaco","abada","abadi","abaja","abaje","abajo","abala","abale","abalo","abana","abane","abano","abasi","abata","abate","abati","abato","aba\xf1a","aba\xf1e","aba\xf1o","abece","abeja","abete","abeto","abiar","abias","abina","abine","abino","abiso","abita","abite","abito","aboba","abobe","abobo","aboca","aboco","abofa","abofe","abofo","aboga","abogo","aboli","abona","abone","abono","aboya","aboye","aboyo","abozo","abran","abras","abren","abres","abria","abrid","abril","abrio","abrir","abris","absit","abubo","abuce","abuje","abura","abure","aburo","abusa","abuse","abuso","abuza","abuzo","acaba","acabe","acabo","acama","acame","acamo","acana","acara","acare","acaro","acaso","acata","acate","acato","acebo","acece","aceda","acede","acedo","acema","acepa","acepe","acepo","acera","acere","acero","aceta","aceto","aceza","acezo","ace\xf1a","achin","achis","acial","aciar","acida","acido","acije","acilo","acimo","acion","acles","aclla","acmes","acnes","acoca","acoco","acoda","acode","acodo","acoge","acogi","acoja","acojo","acola","acole","acolo","acopa","acope","acopo","acora","acore","acoro","acosa","acose","acoso","acota","acote","acoto","acres","acroe","acroy","actas","actea","actor","actos","actua","actue","actuo","acuda","acude","acudi","acudo","acuea","acueo","acula","acule","aculo","acuna","acune","acuno","acure","acusa","acuse","acuso","acuta","acuti","acuto","acuyo","acu\xf1a","acu\xf1e","acu\xf1o","adala","adama","adame","adamo","adaza","adema","ademe","ademo","adiad","adian","adiar","adias","adien","adies","adios","adiva","adive","adoba","adobe","adobo","adora","adore","adoro","adosa","adose","adoso","adrad","adral","adran","adrar","adras","adren","adres","aduar","aduce","aduci","adufe","aduja","aduje","adujo","adula","adule","adulo","aduna","adune","aduno","adura","adure","aduri","aduro","adven","aedas","aedos","aerea","aereo","aetas","afaca","aface","afaga","afago","afama","afame","afamo","afana","afane","afano","afara","afare","afata","afate","afato","afead","afean","afear","afeas","afeen","afees","afiar","afice","afija","afijo","afila","afile","afilo","afina","afine","afino","afizo","aflui","afoca","afoco","afofa","afofe","afofo","afoga","afogo","afona","afono","afora","afore","aforo","afosa","afose","afoso","aftas","afufa","afufe","afufo","afuma","afume","afumo","agace","agami","agana","agane","agano","agape","agata","agave","agios","agita","agite","agito","agnus","agola","agole","agolo","agora","agore","agoro","agota","agote","agoto","agras","agraz","agres","agria","agrie","agrio","agror","agros","aguad","aguai","aguan","aguar","aguas","aguay","aguce","aguda","agudo","aguen","agues","aguin","aguio","aguja","aguti","aguza","aguzo","ahaja","ahaje","ahajo","ahija","ahije","ahijo","ahila","ahile","ahilo","ahina","ahita","ahite","ahito","ahoga","ahogo","ahora","ahoya","ahoye","ahoyo","ahuma","ahume","ahumo","ahusa","ahuse","ahuso","aillo","aillu","ainas","airad","airan","airar","airas","airea","airee","airen","aireo","aires","airon","aisas","aisla","aisle","aislo","aites","ajaba","ajada","ajado","ajais","ajaja","ajara","ajare","ajase","ajead","ajean","ajear","ajeas","ajebe","ajeen","ajees","ajeis","ajena","ajeno","ajeos","ajera","ajero","ajete","ajice","ajies","ajipa","ajiza","ajizo","ajobo","ajora","ajore","ajoro","ajota","ajote","ajoto","ajuar","ajuma","ajume","ajumo","ajuna","ajuno","alaba","alabe","alabo","alaco","alada","alado","alafa","alaga","alago","alaju","alala","alalo","alama","alamo","alana","alano","alaui","alazo","albar","albas","albea","albee","albeo","albin","albor","albos","album","albur","alcas","alcea","alcen","alces","alcor","aldea","alead","alean","alear","aleas","alece","aleda","aleen","alees","alefs","alega","alego","aleja","aleje","alejo","alela","alele","aleli","alelo","alema","alero","aleta","aleto","aleve","aleya","alezo","alfad","alfan","alfar","alfas","alfen","alfes","alfil","alfiz","alfoz","algar","algas","algol","algos","algun","alhoz","aliad","alian","aliar","alias","alica","alien","alier","alies","alifa","aliga","aligo","alija","alije","alijo","alimo","alims","alioj","alisa","alise","aliso","ali\xf1a","ali\xf1e","ali\xf1o","aljez","aljor","allen","almas","almea","almez","almos","almud","alnas","alnos","aloba","alobe","alobo","aloca","aloco","aloes","aloja","aloje","alojo","alola","alole","alolo","aloma","alome","alomo","alona","alora","alosa","alota","alote","aloto","aloya","alpes","altar","altas","altea","altee","alteo","altor","altos","aluas","aluce","aluda","alude","aludi","aludo","alula","aluna","alune","aluno","aluza","aluzo","alveo","alzad","alzan","alzar","alzas","alzos","amaba","amada","amado","amaga","amago","amais","amala","amale","amalo","amana","amane","amano","amara","amare","amaro","amasa","amase","amaso","amata","amate","amato","ama\xf1a","ama\xf1e","ama\xf1o","ambar","ambas","ambla","amble","amblo","ambon","ambos","ameba","ameis","amela","amele","amelo","amena","ameno","ameos","amera","amere","amero","amias","amiba","amibo","amida","amiga","amigo","amina","amine","amino","amiri","amito","amola","amole","amolo","amomo","amona","amone","amono","amove","amovi","ampay","ampla","amplo","ampon","ampos","ampra","ampre","ampro","amuga","amugo","amula","amule","amulo","amura","amure","amuro","amuso","anabi","anaco","anade","anafe","anamu","anana","anata","ancas","ancha","anche","ancho","ancla","ancle","anclo","ancon","ancua","andad","andan","andar","andas","andel","anden","andes","andon","anead","anean","anear","aneas","aneen","anees","anega","anego","aneja","aneje","anejo","aneto","anexa","anexe","anexo","angel","angla","anglo","angor","angra","angus","anida","anide","anido","anima","anime","animo","anion","anisa","anise","aniso","anito","ani\xf1a","ani\xf1e","ani\xf1o","anjeo","anoas","anodo","anola","anole","anolo","anona","anota","anote","anoto","ansar","ansas","ansia","ansie","ansio","antas","antes","antia","antis","antro","anual","anuas","anuda","anude","anudo","anula","anule","anulo","anuos","anura","anuro","aocar","aojad","aojan","aojar","aojas","aojen","aojes","aojos","aonia","aonio","aorta","aovad","aovan","aovar","aovas","aoven","aoves","apaga","apago","apale","apara","apare","aparo","apa\xf1a","apa\xf1e","apa\xf1o","apead","apean","apear","apeas","apeen","apees","apega","apego","apela","apele","apelo","apena","apene","apeno","apeos","apera","apere","apero","apese","apice","apila","apile","apilo","apios","apipa","apipe","apipo","apiri","apita","apite","apito","api\xf1a","api\xf1e","api\xf1o","apnea","apoca","apoce","apoco","apoda","apode","apodo","apola","apole","apolo","apone","aposa","apose","aposo","apoya","apoye","apoyo","apoza","apozo","apres","aproa","aproe","aproo","aptar","aptas","aptos","apuna","apune","apuno","apura","apure","apuro","apuse","apuso","apu\xf1a","apu\xf1e","apu\xf1o","aquea","aquel","aqueo","araba","arabe","arabi","arabo","arada","arado","arais","arana","arara","arare","arasa","arase","araza","ara\xf1a","ara\xf1e","ara\xf1o","arbol","arbor","arcad","arcan","arcar","arcas","arcea","arcen","arces","archa","archi","arcon","arcos","ardan","ardas","ardea","arded","arden","arder","ardes","ardia","ardid","ardil","ardio","ardor","ardua","arduo","areas","areca","areis","arela","arele","arelo","arena","arene","areno","arepa","arete","arfad","arfan","arfar","arfas","arfen","arfes","arfil","argan","argel","argen","argon","argos","argot","argue","argui","arias","arica","arico","arida","arido","aries","arija","arije","arijo","arilo","arios","arlad","arlan","arlar","arlas","arlen","arles","arlos","armad","arman","armar","armas","armen","armes","armon","armos","arnas","arnes","aroca","aroma","arome","aromo","arpad","arpan","arpar","arpas","arpen","arpeo","arpes","arpia","arpon","arque","arras","arraz","arrea","arree","arreo","arres","arria","arrie","arrio","arroz","arrua","arrue","arrui","arruo","artal","artas","artes","artos","arula","arupo","aru\xf1a","aru\xf1e","aru\xf1o","arzon","asaba","asaca","asaco","asada","asado","asais","asara","asare","asaro","asase","ascar","ascas","ascia","ascio","ascos","ascua","asead","asean","asear","aseas","aseda","asede","asedo","aseen","asees","aseis","asela","asele","aselo","aseos","asesa","asese","aseso","asgan","asgas","asian","asias","asica","asico","asida","asido","asila","asile","asilo","asina","asira","asire","asmar","asmas","asnal","asnas","asnos","asola","asole","asolo","asoma","asome","asomo","asona","asone","asono","aspad","aspan","aspar","aspas","aspea","aspee","aspen","aspeo","aspes","aspic","aspid","aspro","astas","aster","astil","astro","astur","asuma","asume","asumi","asumo","asura","asure","asuro","asuso","ataba","atabe","ataca","ataco","atada","atado","atais","ataja","ataje","atajo","atapa","atape","atapo","atara","atare","atase","ataud","ata\xf1a","ata\xf1e","ata\xf1o","atear","ateas","atece","ateis","ateje","ateos","ateri","atesa","atese","ateso","ateta","atete","ateto","ateza","atezo","atiba","atibe","atibo","atica","atice","atico","atina","atine","atino","atipa","atipe","atipo","atiza","atizo","atlas","atoad","atoan","atoar","atoas","atoba","atobe","atobo","atoen","atoes","atoja","atoje","atojo","atole","atomo","atona","atono","atora","atore","atoro","atrae","atras","atril","atrio","atroz","atufa","atufe","atufo","atura","ature","aturo","atusa","atuse","atuso","atuve","atuvo","aucas","audaz","audio","auges","augur","aulas","aulla","aulle","aullo","aunad","aunan","aunar","aunas","aunen","aunes","aupad","aupan","aupar","aupas","aupen","aupes","auras","aurea","aureo","ausol","autan","autor","autos","avada","avade","avado","avaha","avahe","avaho","avala","avale","avalo","avara","avaro","avati","avece","avena","avene","aveni","aveno","aveza","avezo","aviad","avian","aviar","avias","avica","avida","avido","avien","avies","avine","avino","avion","avios","avisa","avise","aviso","aviva","avive","avivo","avoca","avoco","avugo","axial","axila","ayaco","ayate","ayead","ayean","ayear","ayeas","ayeen","ayees","ayora","ayote","ayuas","ayuda","ayude","ayudo","ayuga","ayuna","ayune","ayuno","ayuso","azada","azaga","azago","azala","azara","azare","azaro","azcon","azeri","azimo","azoad","azoan","azoar","azoas","azoca","azoco","azoen","azoes","azoga","azogo","azola","azole","azolo","azora","azore","azoro","azota","azote","azoto","aztor","azuas","azuce","azuda","azula","azule","azulo","azuts","azuza","azuzo","a\xf1ada","a\xf1ade","a\xf1adi","a\xf1ado","a\xf1eda","a\xf1ede","a\xf1edi","a\xf1edo","a\xf1eja","a\xf1eje","a\xf1ejo","a\xf1era","a\xf1ero","a\xf1ida","a\xf1ide","a\xf1idi","a\xf1ido","a\xf1ila","a\xf1ile","a\xf1ilo","a\xf1ina","a\xf1ino","a\xf1oja","a\xf1ojo","a\xf1ora","a\xf1ore","a\xf1oro","a\xf1osa","a\xf1oso","a\xf1uda","a\xf1ude","a\xf1udo","babas","babea","babee","babel","babeo","babis","bable","babor","bacan","bacas","bache","bacia","bacin","bacon","badal","badan","badas","badea","baden","badil","bafle","bagad","bagan","bagar","bagas","bagos","bagre","bague","bahai","bahia","baida","baifa","baifo","baila","baile","bailo","bajad","bajan","bajar","bajas","bajea","bajee","bajel","bajen","bajeo","bajes","bajez","bajia","bajin","bajio","bajon","bajos","balad","balaj","balan","balar","balas","balay","balda","balde","baldo","balea","balee","balen","baleo","bales","balin","balon","balos","balsa","balso","balta","balto","bamba","bambu","banal","banas","banca","bance","banco","banda","bando","banir","banjo","bantu","banyo","banzo","baque","barba","barbe","barbo","barca","barco","barda","barde","bardo","bares","baria","baril","bario","baris","barns","baron","baros","barra","barre","barri","barro","barza","basad","basal","basan","basar","basas","basca","basen","bases","basis","basna","basta","baste","basto","batan","batas","batea","batee","batel","baten","bateo","bates","batey","batia","batid","batin","batio","batir","batis","baton","batos","batua","baula","baure","bausa","bauza","bayal","bayas","bayon","bayos","bayua","bayus","bazar","bazas","bazos","ba\xf1ad","ba\xf1an","ba\xf1ar","ba\xf1as","ba\xf1en","ba\xf1es","ba\xf1il","ba\xf1os","beata","beato","beban","bebas","bebed","beben","beber","bebes","bebia","bebio","becad","becan","becar","becas","bedel","befad","befan","befar","befas","befen","befes","befos","befre","begum","beige","bejin","belda","belde","beldo","belen","beles","belez","belfa","belfo","belga","belio","bella","bello","belua","bemba","bembe","bembo","bemol","benes","beoda","beodo","beori","beque","berbi","berma","beron","berra","berre","berro","berta","berza","besad","besan","besar","besas","besen","beses","besos","betas","betel","betun","beuda","beudo","beyes","bezar","bezon","bezos","biaza","bibis","bical","bicha","biche","bicho","bicis","bicos","bides","bidon","biela","bifaz","bifes","bigas","bijao","bijas","bijol","bilao","biles","bilis","billa","bilma","bilme","bilmo","bimba","binad","binan","binar","binas","binea","binee","binen","bineo","bines","bingo","binza","biota","biras","birla","birle","birli","birlo","biros","bisad","bisan","bisar","bisas","bisel","bisen","bises","bisos","biste","bitad","bitan","bitar","bitas","biten","biter","bites","bitor","bizas","bizca","bizco","bizma","bizme","bizmo","bizna","blaos","blava","blavo","bleda","bledo","bloca","bloco","blocs","blues","blusa","boato","bobas","bobea","bobee","bobeo","bobos","bocal","bocas","bocea","bocee","bocel","boceo","bocha","boche","bocho","bocin","bocio","bocon","bocoy","bodas","bodes","bodon","bofan","bofar","bofas","bofen","bofes","bofia","bofos","bogad","bogan","bogar","bogas","bogue","bohio","boina","boira","boite","bojad","bojan","bojar","bojas","bojea","bojee","bojen","bojeo","bojes","bojos","bolar","bolas","boldo","bolea","bolee","boleo","boles","bolin","bolis","bolla","bolle","bollo","bolon","bolos","bolsa","bolso","bomba","bombe","bombo","bonal","bones","bonga","bongo","bonos","bonzo","boque","boqui","borax","borda","borde","bordo","boreo","boria","borla","borna","borne","borni","boros","borra","borre","borro","borto","bosar","boson","bosta","botad","botan","botar","botas","botea","botee","boten","boteo","botes","botin","boton","botor","botos","boxea","boxee","boxeo","boxer","boxes","boyad","boyal","boyan","boyar","boyas","boyen","boyes","bozal","bozas","bozon","bozos","braca","braco","braga","brama","brame","bramo","brasa","brava","bravo","braza","brazo","bra\xf1a","bread","brean","brear","breas","breca","brece","breco","breen","brees","brega","brego","brete","breva","breve","breza","brezo","bre\xf1a","brial","briba","brice","brida","briol","brios","brisa","brise","briso","briza","brizo","broas","broca","broce","broma","brome","bromo","brota","brote","broto","broza","brozo","bruce","brugo","bruja","bruje","bruji","brujo","bruma","brume","brumo","bruna","bruno","bruta","bruto","bruts","bruza","bruzo","bru\xf1a","bru\xf1e","bru\xf1i","bru\xf1o","buaro","bubas","bubis","bubon","bucal","bucea","bucee","bucen","buceo","buces","buche","bucio","bucle","bucos","budas","budin","buega","buena","bueno","buera","bufad","bufan","bufar","bufas","bufen","bufeo","bufes","bufet","bufia","bufon","bufos","bugle","buhio","buhos","buida","buido","bujeo","bujes","bujia","bujos","bular","bulas","bulbo","bulda","bules","bulin","bulis","bulla","bulle","bulli","bullo","bulon","bulos","bulto","bunas","bunio","buque","buras","burda","burdo","burel","bureo","burga","burgo","buril","burio","buris","burla","burle","burlo","buros","burra","burro","busca","busco","buses","busto","buten","butia","buyos","buzad","buzan","buzar","buzas","buzon","buzos","cabal","cabas","cabed","caben","caber","cabes","cabia","cabio","cable","cabos","cabra","cabre","cabro","cacan","cacao","cacas","cacea","cacee","cacen","caceo","caces","cacha","cache","cacho","cachu","cacle","cacos","cacto","cacuy","cadas","cadis","cados","caeis","caena","caera","caere","cafes","cafiz","cafre","cagad","cagan","cagar","cagas","cagon","cague","cahiz","caian","caias","caico","caida","caido","caies","caiga","caigo","caima","caire","caite","cajas","cajel","cajin","cajis","cajon","cajos","calad","calan","calao","calar","calas","calca","calce","calco","calda","caldo","caled","calen","caler","cales","calia","calio","calis","caliz","calla","calle","callo","calma","calme","calmo","calon","calor","calos","calta","calva","calve","calvo","calza","calzo","camal","camao","camas","camba","cambe","cambo","camio","camon","campa","campe","campo","canal","canas","canda","cande","candi","cando","canea","canee","caneo","canes","caney","canez","canga","cango","cania","canil","canje","canoa","canon","canos","cansa","canse","canso","canta","cante","canto","cantu","caoba","caobo","capad","capan","capar","capas","capaz","capea","capee","capel","capen","capeo","capes","capia","capin","capio","capis","capon","capos","cappa","capta","capte","capto","capuz","caqui","carao","caras","carau","caray","carba","carca","carda","carde","cardo","carea","caree","carel","careo","cares","carey","carga","cargo","caria","carie","cario","caris","cariz","carla","carlo","carme","carne","caron","caros","carpa","carpe","carpi","carpo","carra","carro","carta","carvi","casad","casal","casan","casar","casas","casca","casco","casea","casen","caseo","cases","casia","casis","cason","casos","caspa","casta","casto","catad","catan","catar","catas","catea","catee","caten","cateo","cates","catey","catin","caton","catos","catre","cauba","cauca","cauce","cauda","cauje","caula","cauno","cauri","cauro","causa","cause","causo","cauta","cauto","cauza","cavad","cavan","cavar","cavas","cavea","caven","caves","cavia","cavio","cavis","cavon","cavos","cayan","cayas","cayos","cazad","cazan","cazar","cazas","cazon","cazos","cazuz","ca\xf1ad","ca\xf1al","ca\xf1an","ca\xf1ar","ca\xf1as","ca\xf1ea","ca\xf1ee","ca\xf1en","ca\xf1eo","ca\xf1es","ca\xf1is","ca\xf1on","ca\xf1os","ceaja","ceajo","cebad","ceban","cebar","cebas","ceben","cebes","cebil","cebon","cebos","cebra","cebro","cebti","cebus","cecal","cecas","cecea","cecee","ceceo","cedan","cedas","ceded","ceden","ceder","cedes","cedia","cedio","cedro","cefea","cefee","cefeo","cefos","cegad","cegar","cegas","cegua","cegue","ceiba","ceibo","cejad","cejan","cejar","cejas","cejen","cejes","cejos","celad","celan","celar","celas","celda","celen","celes","celfo","celia","cella","cello","celos","celta","cemas","cembo","cenad","cenal","cenan","cenar","cenas","cenca","cenco","cenen","cenes","cenia","cenis","cenit","censa","cense","censo","cents","cepas","cepos","cepti","cequi","ceras","cerca","cerco","cerda","cerdo","cerea","cereo","cerio","cerna","cerne","cerni","cerno","ceron","ceros","cerpa","cerra","cerre","cerro","cesad","cesan","cesar","cesas","cesen","ceses","cesio","cesta","cesto","cetil","cetis","cetme","cetra","cetre","cetro","ceuti","ce\xf1ad","ce\xf1an","ce\xf1ar","ce\xf1as","ce\xf1en","ce\xf1es","ce\xf1ia","ce\xf1id","ce\xf1ir","ce\xf1is","ce\xf1os","chaca","chace","chaco","chafa","chafe","chafo","chais","chaja","chala","chale","chalo","chama","chame","chamo","chana","chane","chano","chapa","chape","chapo","chata","chato","chaul","chauz","chava","chave","chavo","chaya","chaye","chayo","chaza","chazo","checa","checo","chefs","cheje","chela","chele","cheli","chelo","chepa","chepe","chepo","chera","chero","chesa","cheso","cheta","cheto","chiad","chian","chiar","chias","chica","chico","chics","chida","chido","chien","chies","chifa","chiis","chile","chima","chime","chimo","chimu","china","chine","chino","chipa","chipe","chips","chira","chiri","chisa","chist","chita","chite","chito","chiva","chive","chivo","chiza","choba","choca","choco","chofe","chola","cholo","chona","chono","chopa","chope","chopo","chora","chore","chori","choro","chota","chote","choto","chova","choya","choye","choyo","choza","chozo","chuas","chuca","chuce","chuco","chufa","chufe","chufo","chula","chule","chulo","chuna","chupa","chupe","chupo","chura","churo","churu","chuta","chute","chuto","chuts","chuva","chuya","chuyo","chuza","chuzo","chu\xf1a","chu\xf1o","ciaba","ciado","ciais","ciani","ciara","ciare","ciase","ciato","cibal","cibis","cicas","cicca","cicla","cicle","ciclo","cides","cidra","cidro","cieca","ciega","ciego","cieis","cielo","ciemo","cieno","cifra","cifre","cifro","cigua","cijas","cilio","cilla","cimar","cimas","cimba","cimia","cimpa","cinas","cinca","cinco","cincs","cines","cinia","cinta","cinte","cinto","cipes","cipos","circa","circe","circo","cirio","cirro","cisca","cisco","cisma","cisme","cismo","cisne","cista","citad","citan","citar","citas","citen","cites","citra","civil","ci\xf1an","ci\xf1as","ci\xf1en","ci\xf1es","claco","clacs","clama","clame","clamo","clapa","clara","claro","clase","clava","clave","clavo","clema","clero","clica","clics","clima","clips","clisa","clise","cliso","cloca","cloco","clona","clone","clono","clora","clore","cloro","clota","clube","clubs","coana","coati","cobas","cobea","cobez","cobil","cobla","cobos","cobra","cobre","cobro","cocad","cocal","cocan","cocar","cocas","cocea","coced","cocee","coceo","cocer","coces","cocha","coche","cochi","cocho","cocia","cocio","cocol","cocos","cocui","cocuy","codal","codas","codea","codee","codeo","codez","codin","codon","codos","coeva","coevo","cofan","cofas","cofia","cofin","cofre","coged","cogen","coger","coges","cogia","cogio","cogon","coima","coime","coine","coipo","coita","coite","coito","cojal","cojan","cojas","cojea","cojee","cojeo","cojin","cojon","cojos","colad","colan","colar","colas","colea","colee","colen","coleo","coles","colga","colgo","colin","colla","colma","colme","colmo","colon","color","colos","colpa","colpe","colza","comal","coman","comas","comba","combe","combo","comed","comen","comer","comes","comia","comic","comio","comis","comta","comto","comun","conca","conde","conga","congo","conos","conta","conte","conto","coona","copad","copal","copan","copar","copas","copea","copec","copee","copen","copeo","copes","copey","copia","copie","copin","copio","copla","copon","copos","copra","copta","copto","coque","coqui","corad","coral","coran","corar","coras","corbe","corca","corco","corda","corea","coree","coren","coreo","cores","corio","coris","corla","corle","corlo","corma","corno","coros","corpa","corps","corra","corre","corri","corro","corsa","corse","corso","corta","corte","corto","corua","corva","corve","corvo","corza","corzo","cosan","cosas","cosca","cosco","cosed","cosen","coser","coses","cosia","cosio","cosos","cospe","costa","coste","costo","cotad","cotan","cotar","cotas","coten","cotes","cotin","cotis","coton","cotos","cotua","covad","covan","covar","covas","coven","coves","coxal","coxas","coxis","coyan","coyas","coyes","coyol","co\xf1ac","co\xf1as","co\xf1ea","co\xf1ee","co\xf1eo","co\xf1on","co\xf1os","cracs","crasa","craso","craza","cread","crean","crear","creas","crece","creci","credo","creed","creen","creer","crees","creia","crema","creme","cremo","crepe","creps","cresa","creso","creta","creyo","criad","crian","criar","crias","criba","cribe","cribo","crica","crics","crida","crien","cries","crina","crine","crino","crios","croad","croan","croar","croas","croco","croen","croes","croma","crome","cromo","crono","cross","croto","croza","cruce","cruda","crudo","cruel","cruja","cruje","cruji","crujo","cruor","crups","cruza","cruzo","cuaba","cuaco","cuada","cuado","cuaja","cuaje","cuajo","cuape","cuasi","cuata","cuate","cuati","cubas","cubil","cubos","cubra","cubre","cubri","cubro","cucad","cucan","cucar","cucas","cucha","cuche","cuchi","cucho","cucos","cucus","cucuy","cueca","cuece","cueco","cuela","cuele","cuelo","cuera","cuero","cuete","cueto","cueva","cueza","cuezo","cuica","cuico","cuida","cuide","cuido","cuija","cuilo","cuina","cuino","cuita","cujas","cujes","cujin","cujis","cujon","cular","culas","culea","culee","culen","culeo","culia","culio","culis","culle","culon","culos","culpa","culpe","culpo","culta","culto","cumas","cumba","cumbe","cumbo","cumel","cumpa","cunad","cunan","cunar","cunas","cunda","cunde","cundi","cundo","cunea","cunee","cunen","cuneo","cunes","cuota","cupes","cuple","cupon","cupos","cuque","curad","cural","curan","curar","curas","curca","curco","curda","curdo","curen","cures","curia","curie","curil","curio","curis","curos","curra","curre","curro","curry","cursa","curse","cursi","curso","curta","curte","curti","curto","curul","curva","curve","curvo","cusan","cusas","cusca","cusco","cuscu","cusen","cuses","cusia","cusid","cusio","cusir","cusis","cusma","cuspa","cusul","cutas","cuter","cutes","cutio","cutir","cutis","cutos","cutra","cutre","cuyas","cuyeo","cuyes","cuyos","cuzas","cuzco","cuzma","cuzos","cuzul","cu\xf1ad","cu\xf1al","cu\xf1an","cu\xf1ar","cu\xf1as","cu\xf1en","cu\xf1es","cu\xf1os","daban","dabas","dable","dacha","dacia","dacio","dadas","dador","dados","dagas","dahir","daifa","dajao","dalas","dalgo","dalia","dalla","dalle","dallo","damas","damil","damos","dance","dandi","dando","danes","dango","danta","dante","danto","danza","danzo","daqui","daran","daras","dardo","dares","darga","daria","datad","datan","datar","datas","datea","datee","daten","dateo","dates","datil","datos","dauco","dauda","dazas","da\xf1ad","da\xf1an","da\xf1ar","da\xf1as","da\xf1en","da\xf1es","da\xf1os","deban","debas","debda","debdo","debed","deben","deber","debes","debia","debil","debio","debla","debos","debut","decae","decai","decia","decid","decir","decis","decor","dedal","dedeo","dedil","dedos","deesa","dejad","dejan","dejar","dejas","dejen","dejes","dejos","delco","deles","delga","delia","delio","della","dello","delta","demas","demos","dende","densa","denso","denta","dente","dento","depon","deque","derbi","desca","desda","desde","desdi","desea","desee","deseo","deses","desga","desoi","desta","deste","desto","desus","detal","deten","deuda","deudo","deven","deyes","dezma","dezme","dezmo","de\xf1ar","diada","diado","diana","dia\xf1o","dicaz","dicen","dices","dicha","dicho","dicta","dicte","dicto","diego","diera","diere","diese","diesi","dieta","diete","dieto","digan","digas","digna","digne","digno","dijes","dilui","diman","dimas","dimen","dimes","dimia","dimid","dimio","dimir","dimis","dimos","dinar","dinas","dines","dinos","diodo","diosa","dioso","dique","diran","diras","diria","disca","disco","dison","dista","diste","disto","ditas","diuca","divan","divas","divos","di\xf1ad","di\xf1an","di\xf1ar","di\xf1as","di\xf1en","di\xf1es","dobla","doble","doblo","docas","doces","docil","docta","docto","dodos","dogal","dogas","dogma","dogos","dogre","dolad","dolar","dolas","doled","doler","doles","dolia","dolio","dolor","dolos","domad","doman","domar","domas","dombo","domen","domes","domos","donad","donan","donar","donas","donde","donen","doneo","dones","dopad","dopan","dopar","dopas","dopen","dopes","dorad","doral","doran","dorar","doras","doren","dores","doria","dorio","dormi","dorna","dorso","dosel","doses","dosis","dotad","dotal","dotan","dotar","dotas","doten","dotes","dotor","do\xf1as","do\xf1ea","do\xf1ee","do\xf1eo","draba","draga","drago","drama","dreas","drena","drene","dreno","drias","drino","driza","droga","drogo","drope","drupa","drusa","druso","dseda","dubas","dubda","dubio","ducal","ducas","duces","ducha","duche","ducho","ducos","ducto","dudad","dudan","dudar","dudas","duden","dudes","duela","duele","duelo","dueto","due\xf1a","due\xf1o","dugos","dujos","dular","dulas","dulce","dulia","duman","dumas","dumen","dumes","dumia","dumid","dumio","dumir","dumis","dunas","dunda","dundo","dupla","duplo","duque","durad","duran","durar","duras","duren","dures","duros","ebano","ebria","ebrio","echad","echan","echar","echas","echen","eches","ecuas","ecuos","edema","edila","edita","edite","edito","edrad","edran","edrar","edras","edren","edres","educa","educe","educi","educo","eduje","edujo","efebo","efeta","efeto","eflui","eforo","egena","egeno","egida","eguar","eiras","ejido","ejion","ejote","elami","elata","elato","elche","elega","elegi","elego","elemi","elepe","eleta","eleto","eleva","eleve","elevo","elfos","elida","elide","elidi","elido","elige","elija","elije","elijo","elite","ellas","elles","ellos","elote","eluda","elude","eludi","eludo","emana","emane","emano","embai","emita","emite","emiti","emito","empos","empra","empre","empro","emues","emula","emule","emulo","enana","enano","encia","eneal","eneas","eneja","eneje","enejo","enema","eneos","enero","enoja","enoje","enojo","enria","enrie","enrio","ensay","enteo","entes","entra","entre","entro","enula","enves","envia","envie","envio","enzas","eolia","eolio","eones","epale","epata","epate","epato","epica","epico","epoca","epoda","epodo","epota","epoto","epoxi","equis","eraba","erada","erado","erais","eraje","erala","erara","erare","erase","erbio","ercer","erebo","ereis","ergio","ergui","erial","erias","erice","erige","erigi","erija","erijo","erina","erios","eriza","erizo","ermar","eroga","erogo","errad","erraj","erran","errar","erras","erren","erres","error","erros","eruta","erute","eruto","escas","escay","escoa","esmui","esnob","espay","espia","espie","espin","espio","esqui","estad","estan","estar","estas","estay","esten","ester","estes","estil","estio","estol","estor","estos","estoy","estro","esula","etano","etapa","etica","etico","etilo","etimo","etnea","etneo","etnia","etola","etolo","etusa","eubea","eubeo","euros","evada","evade","evadi","evado","evita","evite","evito","evoca","evoco","evohe","exida","exige","exigi","exija","exijo","exila","exile","exilo","exima","exime","eximi","eximo","exito","exodo","exora","exore","exoro","expia","expie","expio","expon","extra","exuda","exude","exudo","fabas","fabla","fabos","fabro","facas","facer","faces","facha","fache","facho","facil","facon","facto","fadas","fados","faena","faene","faeno","fagos","fagot","faina","faino","fajad","fajan","fajar","fajas","fajea","fajee","fajen","fajeo","fajes","fajin","fajol","fajon","fajos","falaz","falca","falce","falco","falda","falla","falle","fallo","falos","falsa","false","falso","falta","falte","falto","falua","famas","fanal","fanes","fango","faqui","farad","faras","farda","farde","fardo","faria","fario","farol","faron","faros","farpa","farra","farro","farsa","farte","fases","fasol","fasos","fasta","fasto","fatal","fatas","fator","fatos","fatua","fatuo","fauna","fauno","favor","favos","faxea","faxee","faxeo","faxes","fayas","fa\xf1ad","fa\xf1an","fa\xf1ar","fa\xf1as","fa\xf1en","fa\xf1es","febea","febeo","feble","fecal","feces","fecha","feche","fecho","feeza","fejes","feliz","felon","felpa","felpe","felpo","felus","femad","feman","femar","femas","femen","femes","femur","fenal","fenda","fendi","fenix","fenol","feral","feraz","feria","ferie","ferio","ferir","fermi","feroz","ferra","ferre","ferro","ferry","festa","fetal","fetas","feten","fetor","fetos","fetua","feuca","feuco","feuda","feude","feudo","feura","fiaba","fiaca","fiada","fiado","fiais","fiana","fiara","fiare","fiase","fiats","fibra","ficar","ficen","fices","ficha","fiche","ficho","ficus","fideo","fieis","fiemo","fiera","fiero","fifad","fifan","fifar","fifas","fifen","fifes","fifis","figle","figon","fijad","fijan","fijar","fijas","fijen","fijes","fijon","fijos","filad","filan","filar","filas","filen","files","filfa","filia","filie","filin","filio","filis","fillo","filma","filme","filmo","films","filon","filos","fimos","finad","final","finan","finar","finas","finca","finco","finen","fines","finge","fingi","finia","finid","finio","finir","finis","finja","finjo","finos","finta","finte","finto","fique","firma","firme","firmo","fisan","fisco","fisga","fisgo","fista","fisto","fizad","fizan","fizar","fizas","fizon","fi\xf1es","flaca","flaco","flama","flaon","flash","flato","flava","flavo","fleco","fleja","fleje","flejo","flema","fleme","fleos","fleta","flete","fleto","flexo","flipa","flipe","flipo","floja","flojo","flora","flore","floro","flota","flote","floto","fluia","fluid","fluir","fluis","flujo","fluor","fluya","fluye","fluyo","fobia","focal","focas","focha","focia","focio","focos","fofas","fofos","fogon","foisa","foiso","fojas","folga","folgo","folia","folie","folio","folla","folle","follo","foluz","fomes","fonda","fondo","fones","fonil","fonio","fonje","fonos","foque","foral","foras","forca","force","forja","forje","forjo","forma","forme","formo","forno","foros","forra","forre","forro","forte","forum","forza","forzo","fosad","fosal","fosan","fosar","fosas","fosca","fosco","fosen","foses","fosil","fosor","fosos","foton","fotos","fovea","fracs","frada","frade","frado","fraga","frase","fra\xf1a","fra\xf1e","fra\xf1i","fra\xf1o","frece","fredo","frega","frego","freia","freid","freir","freis","frena","frene","freno","freon","freos","fresa","frese","freso","freta","frete","freto","freza","frezo","frian","frias","frica","frico","frien","fries","frior","frios","frisa","frise","friso","frita","frite","frito","froga","frogo","frota","frote","froto","fruia","fruid","fruir","fruis","fruta","frute","fruto","fruya","fruye","fruyo","fucar","fuchi","fucia","fucos","fudre","fuego","fuera","fuere","fuero","fuesa","fuese","fuets","fufad","fufan","fufar","fufas","fufen","fufes","fufos","fufus","fugan","fugar","fugas","fugaz","fugir","fugue","fuina","fular","fulas","fulge","fulgi","fulja","fuljo","fulla","fumad","fuman","fumar","fumas","fumen","fumes","fumon","funca","funco","funda","funde","fundi","fundo","funge","fungi","funja","funjo","furas","furia","furor","furos","furto","fusas","fusca","fusco","fusil","fusor","fusos","fusta","fuste","fusto","futil","futon","futre","fu\xf1ar","gaban","gabar","gacel","gacha","gache","gachi","gacho","gafad","gafan","gafar","gafas","gafea","gafee","gafen","gafeo","gafes","gafos","gagas","gagos","gaita","gajes","gajos","galan","galas","galce","galea","galeo","gales","galga","galgo","galio","galla","galle","gallo","galon","galop","galos","galua","gamas","gamba","gamma","gamon","gamos","ganad","ganan","ganar","ganas","ganen","ganes","ganga","gansa","ganso","ganta","gante","garas","garas","garay","garba","garbe","garbo","garfa","garia","gario","garla","garle","garlo","garma","garos","garpa","garpe","garpo","garra","garre","garri","garro","garua","garue","garuo","garza","garzo","gasas","gasea","gasee","gaseo","gases","gason","gasta","gaste","gasto","gatas","gatea","gatee","gateo","gatos","gauss","gavia","gayad","gayan","gayar","gayas","gayen","gayes","gayos","gazas","gazna","gazne","gazno","ga\xf1an","ga\xf1as","ga\xf1en","ga\xf1es","ga\xf1ia","ga\xf1id","ga\xf1il","ga\xf1in","ga\xf1ir","ga\xf1is","ga\xf1on","gelan","gelar","gelas","gelen","geles","gelfe","gemas","gemia","gemid","gemir","gemis","genes","genio","genol","gente","geoda","gerbo","gesta","geste","gesto","getas","gibad","giban","gibao","gibar","gibas","giben","gibes","gibon","gigas","gilas","giles","gilis","gilva","gilvo","giman","gimas","gimen","gimes","gimio","ginea","girad","giran","girar","giras","giren","gires","giros","gises","giste","glase","glayo","gleba","glera","glial","glias","glide","glifo","globo","glosa","glose","gloso","gluma","gneis","gnomo","goben","gobio","gocen","goces","gocha","gocho","godas","godeo","godos","gofas","gofio","gofos","gofra","gofre","gofro","golas","golea","golee","goleo","goles","golfa","golfo","golfs","golpe","gomar","gomas","gomel","gomer","gomia","gonce","gongo","gorda","gordo","gorga","gorja","gorma","gorme","gormo","gorra","gorro","gotas","gotea","gotee","goteo","goton","goyas","goyos","gozad","gozan","gozar","gozas","gozne","gozon","gozos","graba","grabe","grabo","grada","grade","grado","grafo","grais","graja","grajo","grama","grame","gramo","grana","grand","grane","grano","grant","graos","grapa","grape","grapo","grasa","graso","grata","grate","grato","grava","grave","gravo","greba","greca","greco","greda","green","grelo","greno","gre\xf1a","grial","grida","grifa","grife","grifo","grija","grill","grima","gripa","gripe","gripo","grisa","grisu","grita","grite","grito","groad","groan","groar","groas","groen","groes","grogs","grojo","gromo","grosa","groso","gruas","gruia","gruid","gruir","gruis","gruja","gruje","gruji","grujo","grumo","grupa","grupi","grupo","gruta","gruya","gruye","gruyo","gru\xf1a","gru\xf1e","gru\xf1i","gru\xf1o","guaba","guabo","guaca","guaco","guado","guais","guaja","guaje","guala","guama","guame","guamo","guano","guaos","guapa","guape","guapo","guara","guare","guari","guaro","guasa","guaso","guata","guate","guato","guaya","guaye","guayo","gubia","guera","guero","gueto","gue\xf1a","guiad","guian","guiar","guias","guida","guido","guien","guies","guifa","guija","guijo","guila","guilo","guina","guino","guion","guipa","guipe","guipo","guira","guire","guiri","guiro","guisa","guise","guiso","guita","guite","guito","guiye","gui\xf1a","gui\xf1e","gui\xf1o","gujas","gulag","gular","gulas","gulay","gules","gumia","gurda","gurdo","guris","gurus","gusta","guste","gusto","guzga","guzgo","guzla","habar","habas","haber","habia","habil","habiz","habla","hable","hablo","habon","habra","habre","habus","hacan","haced","hacen","hacer","haces","hacha","hache","hacho","hacia","hadar","hadas","hados","hafiz","hagan","hagas","haiga","halad","halan","halar","halas","halda","halen","hales","halla","halle","hallo","halon","halos","hamez","hampa","hampo","hanzo","hapax","haran","haras","harba","harbe","harbo","harca","harda","harem","haren","haria","harma","haron","harpa","harre","harta","harte","harto","hasta","hatea","hatee","hateo","hatos","haute","havar","havos","hayal","hayan","hayas","hayos","hazas","heben","hebra","heces","hecha","hecho","heded","heder","hedes","hedia","hedio","hedor","helad","helar","helas","helea","helee","heleo","helio","helor","hemos","henal","henar","hende","hendi","henil","henos","henry","herba","herbe","herbo","heria","herid","heril","herir","heris","herma","heroe","herpe","herra","herre","herro","hertz","herve","hervi","hespa","hespe","hespi","hespo","hetea","heteo","hevea","he\xf1ia","he\xf1id","he\xf1ir","he\xf1is","hiato","hicos","hidra","hieda","hiede","hiedo","hiela","hiele","hielo","hiena","hiera","hiere","hiero","higas","higos","higui","hijas","hijea","hijee","hijeo","hijos","hilad","hilan","hilar","hilas","hilen","hiles","hilio","hilos","himen","himno","himpa","himpe","himpo","hinca","hinco","hindi","hindu","hipad","hipan","hipar","hipas","hipen","hiper","hipes","hipos","hippy","hirco","hirio","hirma","hirme","hirmo","hisca","hispa","hispe","hispi","hispo","hitad","hitan","hitar","hitas","hiten","hites","hiton","hitos","hi\xf1an","hi\xf1as","hi\xf1en","hi\xf1es","hi\xf1ia","hi\xf1id","hi\xf1ir","hi\xf1is","hobby","hobos","hocen","hoces","hogar","hogos","hojas","hojea","hojee","hojeo","holan","holco","holea","holee","holeo","holga","holgo","holla","holle","hollo","homes","honda","hondo","hongo","honor","honra","honre","honro","hopan","hopar","hopas","hopea","hopee","hopen","hopeo","hopes","hopos","hoque","horas","horca","horco","horda","horma","horna","horne","horno","horra","horre","horro","hosca","hosco","hospa","hoste","hotel","hotos","hoves","hoyad","hoyan","hoyar","hoyas","hoyen","hoyes","hoyos","hozad","hozan","hozar","hozas","huaca","huaco","huaje","huaos","hucha","hucho","hucia","hueca","hueco","huego","huela","huele","huelo","huera","huero","huesa","hueso","hueva","hueve","huevo","huian","huias","huich","huida","huido","huifa","huila","huilo","huira","huire","huiro","hulad","hulan","hular","hulas","hulea","hulee","hulen","huleo","hules","hulla","hulte","humad","human","humar","humas","humea","humee","humen","humeo","humes","humil","humor","humos","humus","hunas","hunda","hunde","hundi","hundo","hunos","hupes","huras","hurga","hurgo","huris","huron","hurra","hurta","hurte","hurto","husar","husma","husme","husmo","husos","hutas","hutia","huyan","huyas","huyen","huyes","ibais","ibera","ibero","ibice","icaco","iceis","ichal","ichos","ichus","icono","ictus","idead","ideal","idean","idear","ideas","ideay","ideen","idees","ideos","idolo","iglus","ignea","igneo","igual","iguar","ijada","ijiyo","ijuju","ileon","ileos","ilesa","ileso","ilion","ilota","iluda","ilude","iludi","iludo","ilusa","iluso","imada","imana","imane","imano","imbui","imela","imita","imite","imito","impar","impia","impio","impla","imple","implo","impon","inane","incas","incoa","incoe","incoo","indas","index","india","indio","indos","infla","infle","inflo","ingas","ingle","ingon","ingre","inope","input","inris","insta","inste","insto","inter","intis","intui","invar","iones","iotas","ipsis","irada","irado","irani","ireis","irgan","irgas","irgue","irian","irias","iride","irisa","irise","iriso","irrui","irupe","isbas","islam","islan","islas","isleo","isoca","istmo","itala","italo","items","itera","itere","itero","itria","itrio","itzaj","izaba","izada","izado","izais","izara","izare","izase","izote","jabas","jabis","jable","jabon","jabra","jabre","jabri","jabro","jacal","jacas","jacer","jacha","jacos","jacta","jacte","jacto","jadas","jadea","jadee","jadeo","jades","jadia","jadie","jadio","jaece","jaeza","jaezo","jagua","jaiba","jaima","jajay","jalad","jalan","jalar","jalas","jalda","jalde","jaldo","jalea","jalee","jalen","jaleo","jales","jalma","jalon","jamad","jaman","jamar","jamas","jamba","jambe","jambo","jamen","james","jamon","janes","japon","jaque","jaral","jaras","jarba","jarbe","jarbo","jarca","jarda","jaros","jarra","jarre","jarro","jasad","jasan","jasar","jasas","jasen","jases","jaspe","jatas","jateo","jates","jatib","jatos","jauda","jaudo","jauja","jaula","jauta","jauto","javas","javos","jayan","ja\xf1as","ja\xf1os","jebes","jedad","jedan","jedar","jedas","jeden","jedes","jefas","jefes","jeito","jejen","jeliz","jemal","jemes","jeque","jeras","jerbo","jerez","jerga","jerpa","jetad","jetan","jetar","jetas","jetea","jetee","jeten","jeteo","jetes","jeton","jetos","jibes","jibia","jicos","jifas","jifia","jigas","jigue","jijas","jijea","jijee","jijeo","jimad","jiman","jimar","jimas","jimen","jimes","jimia","jimio","jinda","jines","jiote","jipas","jipia","jipie","jipio","jipis","jiras","jirel","jiron","jisca","jitad","jitan","jitar","jitas","jiten","jites","ji\xf1ad","ji\xf1an","ji\xf1ar","ji\xf1as","ji\xf1en","ji\xf1es","jobar","jobos","jocha","joche","jocho","jocon","jocos","jodan","jodas","joded","joden","joder","jodes","jodia","jodio","jodon","jofor","jolin","jondo","jonia","jonio","jopan","jopar","jopas","jopea","jopee","jopen","jopeo","jopes","jopos","joras","jorco","jorfe","jorga","jorge","jorro","josas","jotas","jotes","jotos","joule","joven","joyas","joyel","joyon","joyos","juana","jubas","jubon","jubos","jucas","jucos","judas","judia","judio","judos","juega","juego","juera","jueza","jugad","jugar","jugas","jugos","jugue","jujea","jujee","jujeo","julia","julio","julos","juman","jumar","jumas","jumea","jumee","jumen","jumeo","jumes","jumil","jumos","junce","junci","junco","junio","junta","junte","junto","junza","junzo","jupas","jupea","jupee","jupeo","jupon","jurad","juran","jurar","juras","jurco","jurel","juren","jures","juros","jusis","justa","juste","justo","jutas","jutia","juvia","juzga","juzgo","ju\xf1an","ju\xf1as","ju\xf1en","ju\xf1es","ju\xf1ia","ju\xf1id","ju\xf1ir","ju\xf1is","labeo","labes","labia","labil","labio","labor","labra","labre","labro","lacad","lacan","lacar","lacas","lacea","lacee","lacen","laceo","laces","lacha","lacho","lacia","lacio","lacon","lacra","lacre","lacro","lacta","lacte","lacto","ladas","ladea","ladee","ladeo","ladon","lados","ladra","ladre","ladro","lagar","lagos","lagua","laica","laico","laida","laido","lajas","laman","lamas","lamba","lambe","lambi","lambo","lamed","lamen","lamer","lames","lamia","lamin","lamio","lampa","lampe","lampo","lanar","lanas","lance","landa","lande","lando","langa","lania","lanio","lanza","lanzo","lapas","lapiz","lapon","lapos","lapsa","lapso","laque","larda","larde","lardo","lares","larga","largo","larra","larva","lasar","lasas","lasca","lasco","laser","lasos","lasta","laste","lasto","lasun","latan","latas","lataz","latea","latee","laten","lateo","lates","latex","latia","latid","latin","latio","latir","latis","laton","latos","lauda","laude","laudo","launa","lauro","lauta","lauto","lavad","lavan","lavar","lavas","laven","laves","laxad","laxan","laxar","laxas","laxen","laxes","laxos","layad","layan","layar","layas","layen","layes","lazad","lazan","lazar","lazas","lazos","la\xf1ad","la\xf1an","la\xf1ar","la\xf1as","la\xf1en","la\xf1es","leais","lecha","leche","lecho","lecos","ledas","ledon","ledos","leeis","leera","leere","legad","legal","legan","legar","legas","legon","legos","legra","legre","legro","legua","legue","legui","leian","leias","leida","leido","leila","leima","lejas","lejia","lejio","lejos","lelas","lelos","leman","lemas","lembo","lempo","lemur","lenas","lenca","lenes","lenon","lenta","lente","lento","leona","lepra","leras","lerda","lerdo","lesas","lesea","lesee","leseo","lesna","lesos","leste","letal","letea","leteo","leton","letra","leuco","leuda","leude","leudo","levad","levan","levar","levas","leven","leves","leyes","lezda","lezna","lezne","le\xf1ad","le\xf1an","le\xf1ar","le\xf1as","le\xf1en","le\xf1es","le\xf1os","liaba","liada","liado","liais","liana","liara","liare","liase","liaza","libad","liban","libar","libas","liben","liber","libes","libia","libio","libon","libra","libre","libro","liceo","licia","licio","licor","licua","licue","licuo","lider","lides","lidia","lidie","lidio","lidon","liega","liego","lieis","lieva","lieve","ligad","ligan","ligar","ligas","light","ligio","ligon","ligue","ligur","lijad","lijan","lijar","lijas","lijen","lijes","lilac","lilao","lilas","lilio","lilos","limad","liman","limar","limas","limbo","limen","limes","limon","limos","linao","linar","lince","linda","linde","lindo","linea","linee","lineo","linfa","linio","linon","linos","liosa","lioso","lipas","lipes","lipis","lipon","liras","liria","lirio","liron","lisas","lises","lisia","lisie","lisio","lisis","lisol","lisos","lista","liste","listo","litad","litan","litar","litas","liten","lites","litio","litis","litre","litro","lituo","liuda","liude","liudo","livor","lizas","lizos","li\xf1os","llaca","llaga","llago","llama","llame","llamo","llana","llano","llapa","llape","llapo","llave","lleca","lleco","llega","llego","llena","llene","lleno","llera","lleva","lleve","llevo","llora","llore","lloro","llosa","llove","llovi","loaba","loada","loado","loais","loara","loare","loase","lobas","lobby","lobea","lobee","lobeo","lobos","local","locas","locea","locee","loceo","locha","loche","locos","locro","lodon","lodos","lodra","loeis","logar","logia","logis","logos","logra","logre","logro","loica","loina","loino","lolas","lolea","lolee","loleo","lolio","lolis","lolos","lomas","lomba","lombo","lomea","lomee","lomeo","lomos","lonas","lonco","longa","longo","lonja","loras","lorea","loree","loreo","lores","loros","lorza","losad","losan","losar","losas","losen","loses","lotas","lotea","lotee","loteo","lotes","lotin","lotos","lozas","lucas","lucen","luces","lucha","luche","lucho","lucia","lucid","lucio","lucir","lucis","lucra","lucre","lucro","ludan","ludas","luden","ludes","ludia","ludid","ludie","ludio","ludir","ludis","ludos","luego","lue\xf1e","lugar","lugre","luian","luias","luida","luido","luira","luire","luisa","lujad","lujan","lujar","lujas","lujen","lujes","lujos","lulos","lulus","lumas","lumbo","lumen","lumia","lunar","lunas","lunch","lunea","lunee","lunel","luneo","lunes","lunfa","lupas","lupia","lupus","lurte","lusas","lusca","lusco","lusos","lutea","luteo","lutos","luvia","luxad","luxan","luxar","luxas","luxen","luxes","luyan","luyas","luyen","luyes","luzca","luzco","lycra","mabis","mable","macal","macan","macar","macas","macea","macee","macen","maceo","maces","macha","mache","machi","macho","macia","macio","macis","macla","macon","macro","macua","mador","madre","maesa","maese","maeso","mae\xf1a","mae\xf1o","mafia","magas","magia","magie","magin","magio","magma","magna","magno","magos","magra","magro","mague","mahon","maido","majad","majal","majan","majar","majas","majea","majee","majen","majeo","majes","majos","malar","malas","malea","malee","maleo","males","malis","malla","malle","mallo","malon","malos","malta","malva","malve","malvo","mamad","maman","mamar","mamas","mambi","mambo","mamen","mames","mamey","mamia","mamon","mamua","mamut","manad","manal","manan","manar","manas","manca","manco","manda","mande","mandi","mando","manea","manee","manen","maneo","manes","manga","mango","mania","manid","manio","manir","manis","manos","mansa","manso","manta","manto","manus","maoma","maori","mapas","mapea","mapee","mapeo","mapos","maque","maqui","maras","marca","marce","marci","marco","marea","maree","mareo","mares","marga","margo","maria","marlo","maron","maros","marra","marre","marro","marsa","marso","marta","marte","marza","marzo","masad","masan","masar","masas","masca","masco","masea","masee","masen","maseo","mases","masia","maslo","mason","maste","masto","matad","matan","matar","matas","matea","matee","maten","mateo","mates","matiz","maton","matos","matul","maula","maule","maulo","maura","maure","mauro","mayad","mayal","mayan","mayar","mayas","mayea","mayee","mayen","mayeo","mayes","mayor","mayos","mazad","mazan","mazar","mazas","mazna","mazne","mazno","mazos","ma\xf1as","ma\xf1ea","ma\xf1ee","ma\xf1eo","ma\xf1io","ma\xf1os","mbaya","meaba","meada","meado","meais","meaja","meano","meara","meare","mease","meato","mecas","meced","mecen","mecer","meces","mecha","meche","mecho","mecia","mecio","mecos","medas","media","medid","medie","medio","medir","medis","medos","medra","medre","medro","meeis","megas","megos","meiga","meigo","mejan","mejas","mejed","mejen","mejer","mejes","mejia","mejio","mejor","melad","melar","melas","melca","melga","melgo","melis","mella","melle","mello","melon","melsa","melva","memas","memez","memos","menad","menan","menar","menas","menda","menea","menee","menen","meneo","menes","menge","menor","menos","mensa","menso","mensu","menta","mente","menti","mento","menus","meona","merad","meran","merar","meras","merca","merco","meren","meres","merey","mergo","merla","merlo","merma","merme","mermo","merol","meros","mersa","mesad","mesan","mesar","mesas","mesen","meses","mesma","mesmo","meson","mesta","mesto","metad","metal","metan","metas","meted","meten","meter","metes","metia","metio","metra","metro","meyas","meyor","mezan","mezas","miaba","miado","miaga","miago","miais","miaja","miara","miare","miase","miaus","mia\xf1a","mia\xf1e","mia\xf1o","micas","micer","mices","micha","miche","micho","micos","micra","micro","midan","midas","miden","mides","midio","miedo","mieis","miela","miele","mielo","miera","migad","migan","migar","migas","migra","migre","migro","migue","mijos","milan","miles","milis","milla","millo","milpa","mimad","miman","mimar","mimas","mimen","mimes","mimos","minad","minal","minan","minar","minas","minaz","minen","mines","minga","mingo","minia","minie","minio","minue","mioma","miona","miope","mirad","miran","mirar","miras","miren","mires","mirla","mirle","mirlo","miron","mirra","mirto","mirza","misad","misal","misan","misar","misas","misen","mises","misia","misil","misio","misma","mismo","mista","miste","misto","mitad","mitan","mitas","mitin","miton","mitos","mitra","mitre","mitro","miura","mixta","mixto","mizas","mizos","mi\xf1on","moais","moare","moble","mocad","mocan","mocar","mocas","mocea","mocee","moceo","mocha","moche","mocho","mocil","mocos","modal","modas","modem","modio","modos","mofad","mofan","mofar","mofas","mofen","mofes","mogas","mogol","mogon","mogos","mohin","mohos","mohur","mojad","mojan","mojar","mojas","mojel","mojen","mojes","mojil","mojis","mojon","mojos","molad","molan","molar","molas","molda","molde","moldo","moled","molen","moler","moles","molia","molio","molla","molle","molon","molos","molsa","molso","momea","momee","momeo","momia","momio","momos","monas","monda","monde","mondo","monea","monee","moneo","monfi","monga","mongo","monis","monja","monje","monos","monra","monse","monta","monte","monto","mopan","mopas","moque","morad","moral","moran","morar","moras","morbo","morca","morco","morde","mordi","morea","moren","moreo","mores","morfa","morfe","morfo","morga","moria","morid","morir","moris","morma","morme","mormo","moron","moros","morra","morro","morsa","morse","mosca","mosco","mosen","moste","mosto","motas","motea","motee","motel","moteo","motes","motil","motin","moton","motor","motos","moved","mover","moves","movia","movil","movio","moxas","moxte","moyas","moyos","mozas","mozos","mo\xf1as","mo\xf1on","mo\xf1os","muare","muble","mucas","mucha","mucho","mucos","mudad","mudan","mudar","mudas","muden","mudes","mudez","mudos","mueca","muela","muele","muelo","muera","muere","muero","mueso","mueva","mueve","muevo","mufas","mufla","mufti","mugad","mugan","mugar","mugas","mugen","muges","mugia","mugid","mugil","mugio","mugir","mugis","mugle","mugor","mugre","mugue","muian","muias","muida","muido","muira","muire","mujan","mujas","mujer","mujol","mular","mulas","muleo","mules","mulla","mulle","mulli","mullo","mulos","mulsa","mulso","multa","multe","multo","munas","mundo","murad","mural","muran","murar","muras","muren","mures","murga","muria","murio","muros","murta","murto","musan","musar","musas","musca","musco","musen","museo","muses","musga","musgo","musia","musio","musir","musis","muslo","musos","mutad","mutan","mutar","mutas","muten","mutes","mutis","mutra","mutro","mutua","mutuo","muyan","muyas","muyen","muyes","mu\xf1an","mu\xf1as","mu\xf1en","mu\xf1es","mu\xf1ia","mu\xf1id","mu\xf1ir","mu\xf1is","mu\xf1on","nabab","nabal","nabar","nabas","nabis","nabla","nabos","nacar","nacas","naced","nacen","nacer","naces","nacha","nacho","nacia","nacio","nacos","nacre","nadad","nadal","nadan","nadar","nadas","naden","nades","nadga","nadie","nadir","nafra","nafre","nafro","nafta","nagua","nahoa","nahua","naife","naifs","naipe","naire","najas","nalca","nalga","nanas","nanay","nance","nanea","nanee","naneo","nansa","nansu","nanta","nante","nanto","napas","napea","napeo","naque","narco","nardo","nares","nariz","narra","narre","narro","nasal","nasas","nason","nasos","natal","natas","natia","natio","natos","natri","nauta","naval","navas","naves","navio","nazca","nazco","nazis","nebel","nebis","nebli","nebro","necea","necee","neceo","necia","necio","negad","negar","negas","negra","negro","negue","negus","nejas","nejos","neldo","neles","nemas","nemea","nemeo","nemes","nemon","nenas","nenes","nenia","nepes","neron","nesga","nesgo","netas","netos","neuma","nevad","nevar","nevas","nevos","nevus","nexos","niara","niazo","niche","nicho","nicle","nicol","nidal","nidia","nidio","nidos","niega","niego","niela","niele","nielo","nieta","nieto","nieva","nieve","nievo","nigua","nilad","nilon","nimba","nimbe","nimbo","nimia","nimio","ninfa","ninfo","ninot","nioto","nipas","nipis","nipon","nipos","niqui","niste","nitor","nitos","nitra","nitre","nitro","nivea","nivel","niveo","nixte","ni\xf1as","ni\xf1ea","ni\xf1ee","ni\xf1eo","ni\xf1ez","ni\xf1os","nobel","noble","nocas","noche","nocir","nocla","nodal","nodos","noema","nogal","nolis","nolit","nomas","nomon","nomos","nonas","nones","nonio","nonos","nopal","noque","noray","noria","norma","norme","normo","norte","notad","notan","notar","notas","noten","notes","notos","notro","novad","noval","novan","novar","novas","novel","noven","noves","novia","novie","novio","noyos","nubes","nubia","nubil","nubio","nubla","nuble","nublo","nucas","nuche","nucir","nucos","nudas","nudos","nuera","nuesa","nueso","nueva","nueve","nuevo","nueza","nulas","nulos","numen","numos","nunca","nutra","nutre","nutri","nutro","nu\xf1os","oasis","obelo","obesa","obeso","obice","obito","oblea","oboes","obolo","obrad","obran","obrar","obras","obren","obres","obsta","obste","obsto","obten","obues","obvia","obvie","obvio","ocapi","ocaso","ocelo","ocena","ochos","ociad","ocian","ociar","ocias","ocien","ocies","ocios","ocles","oclui","ocote","ocras","ocres","ocrey","ocuje","ocume","ocumo","ocupa","ocupe","ocupo","odeon","odiad","odian","odiar","odias","odien","odies","odios","odres","oeste","ofita","oga\xf1o","ogros","ohmio","oiais","oible","oidas","oidio","oidor","oidos","oigan","oigas","oimos","oiran","oiras","oiria","oislo","oiste","ojala","ojale","ojalo","ojead","ojean","ojear","ojeas","ojeen","ojees","ojeos","ojera","ojete","ojito","ojiva","ojosa","ojoso","ojota","ojuda","ojudo","olais","olaje","olead","olean","olear","oleas","oleen","olees","oleis","oleos","olera","olere","olian","olias","olida","olido","olios","oliva","olive","olivo","ollao","ollar","ollas","olmas","olmos","olote","olura","omani","omaso","ombus","omega","omero","omeya","omina","omine","omino","omisa","omiso","omita","omite","omiti","omito","omoto","oncea","oncee","onceo","onces","ondas","ondea","ondee","ondeo","ondra","onece","oneci","onice","onoto","onzas","opaca","opaco","opada","opado","opalo","opera","opere","opero","opila","opile","opilo","opima","opimo","opina","opine","opino","opios","opone","optad","optan","optar","optas","opten","optes","opuse","opuso","oraba","orada","orado","orais","oraje","orale","orara","orare","orase","orate","orbes","orcas","orcen","orces","orcos","orden","oread","orean","orear","oreas","oreen","orees","oreis","oreja","oreos","orero","orfos","orfre","orgia","oribe","ories","orina","orine","orino","oriol","orive","orlad","orlan","orlar","orlas","orlen","orles","orlos","ornad","ornan","ornar","ornas","ornea","ornee","ornen","orneo","ornes","oroya","ortos","oruga","orujo","orzad","orzan","orzar","orzas","osaba","osada","osado","osais","osara","osare","osase","oscas","oscos","osead","osean","osear","oseas","oseen","osees","oseis","oseos","osera","osero","oseta","osmio","ososa","ososo","ostas","ostia","ostra","ostro","osuda","osudo","osuna","osuno","otate","otead","otean","otear","oteas","oteen","otees","otero","otila","otile","otilo","otoba","oto\xf1a","oto\xf1e","oto\xf1o","otras","otres","otris","otros","ovaba","ovada","ovado","ovais","ovala","ovale","ovalo","ovara","ovare","ovase","oveis","oveja","overa","overo","ovido","ovina","ovino","ovnis","ovolo","ovosa","ovoso","ovula","ovule","ovulo","oxead","oxean","oxear","oxeas","oxeen","oxees","oxida","oxide","oxido","oyera","oyere","oyese","ozena","ozona","ozono","pacae","pacas","pacay","paced","pacen","pacer","paces","pacha","pacho","pacia","pacio","pacon","pacos","pacta","pacte","pacto","pacus","padre","pafia","pafio","pagad","pagan","pagar","pagas","pagel","pagos","pagro","pagua","pague","pahua","paico","paila","paina","paira","paire","pairo","pajar","pajas","pajea","pajee","pajel","pajeo","pajes","pajil","pajla","pajon","pajos","pajuz","palas","palay","palca","palco","palea","palee","paleo","pales","palia","palie","palio","palis","palla","palle","pallo","palma","palme","palmo","palon","palor","palos","palpa","palpe","palpi","palpo","palta","palto","pamba","pampa","pamue","panal","panas","panca","panco","panda","pando","panel","panes","panga","panji","panos","pansa","panty","panul","panza","papad","papal","papan","papar","papas","papaz","papea","papee","papel","papen","papeo","papes","papin","papon","papos","papua","papus","parad","paral","paran","parao","parar","paras","parca","parce","parco","parda","pardo","parea","pared","paree","parel","paren","pareo","pares","pargo","paria","parid","pario","parir","paris","parla","parle","parlo","parne","paros","parpa","parpe","parpo","parra","parre","parro","parsi","parta","parte","parti","parto","parva","parvo","pasad","pasan","pasar","pasas","pasco","pasea","pasee","pasen","paseo","pases","pasil","pasma","pasme","pasmo","pasos","paspa","paspe","paspo","pasta","paste","pasto","patan","patao","patas","patax","patay","patea","patee","pateo","pater","pates","patin","patio","patis","paton","patos","pauji","paula","paule","paulo","pausa","pause","pauso","pauta","paute","pauto","pavas","paves","pavia","pavon","pavor","pavos","paxte","payad","payan","payar","payas","payen","payes","payos","pazca","pazco","pazos","pa\xf1al","pa\xf1il","pa\xf1ol","pa\xf1os","peais","peaje","peala","peale","pealo","peana","pea\xf1a","pebre","pecad","pecan","pecar","pecas","peces","pecha","peche","pecho","pecio","pecta","pecte","pecto","pedal","pedia","pedid","pedio","pedir","pedis","pedos","pedro","peeis","peera","peere","pegad","pegan","pegar","pegas","pegon","pegos","pegue","peian","peias","peido","peina","peine","peino","pejes","pejin","pelad","pelan","pelar","pelas","pelde","pelea","pelee","pelen","peleo","peles","pelis","pella","pello","pelma","pelon","pelos","pelta","pelus","pelvi","pemon","penad","penal","penan","penar","penas","penca","penco","penda","pende","pendi","pendo","penen","penes","penis","penol","penos","pensa","pense","penso","peora","pepas","pepes","pepla","peplo","pepon","pepus","peque","peral","peras","perca","perde","perdi","peris","perla","perle","perlo","perna","perno","perol","peros","perra","perro","persa","perta","perus","pesad","pesan","pesar","pesas","pesca","pesce","pesco","pesen","peses","pesga","pesgo","pesia","pesol","pesor","pesos","peste","petad","petan","petar","petas","peten","petes","petos","petra","peuco","peumo","pezon","pe\xf1as","pe\xf1ol","pe\xf1on","pe\xf1os","piaba","piada","piado","piafa","piafe","piafo","piais","piala","piale","pialo","piano","piara","piare","piase","pibas","pibes","pibil","picad","pical","pican","picar","picas","picea","piceo","picha","piche","pichi","picho","picon","picor","picos","picuy","pidan","pidas","piden","pides","pidio","pidon","pieis","piejo","pieza","pifas","pifia","pifie","pifio","pigra","pigre","pigro","pigua","pihua","pijas","pijes","pijin","pijos","pijul","pijuy","pilad","pilan","pilar","pilas","pilca","pilen","pileo","piles","pilla","pille","pillo","pilme","pilon","pilos","pinal","pinar","pinas","pince","pines","pinga","pingo","pinna","pinol","pinos","pinta","pinte","pinto","pinza","pinzo","piojo","piola","piole","piolo","piona","pipad","pipan","pipar","pipas","pipen","pipes","pipia","pipie","pipil","pipio","pipis","pipon","pipos","pique","pirad","piral","piran","pirar","piras","pirca","pirco","piren","pires","pirla","piron","piros","pirra","pirre","pirri","pirro","pirul","pirus","pisad","pisan","pisar","pisas","pisca","pisco","pisen","pises","pison","pisos","pispa","pispe","pispo","pista","piste","pisto","pitad","pital","pitan","pitao","pitar","pitas","pitea","pitee","piten","piteo","pites","pitia","pitio","pitis","piton","pitos","piula","piule","piulo","piune","piure","pivot","pixel","pizca","pizco","pizza","pi\xf1al","pi\xf1as","pi\xf1en","pi\xf1on","pi\xf1os","placa","place","placi","placo","plaga","plago","plana","plano","plata","plato","playa","playe","playo","plaza","plazo","pla\xf1a","pla\xf1e","pla\xf1i","pla\xf1o","plebe","pleca","plega","plego","plena","pleno","pleon","plepa","plexo","plica","plisa","plise","pliso","ploma","plome","plomo","plugo","pluma","pobla","poble","poblo","pobos","pobra","pobre","pocas","pocha","pocho","pocos","podad","podal","podan","podar","podas","poded","poden","poder","podes","podia","podio","podon","podra","podre","poema","poeta","poino","poisa","poise","polar","polca","polco","polea","polen","poleo","polex","polin","polio","polir","polis","polla","pollo","polos","polvo","pomar","pomas","pomez","pomos","pompa","pompo","ponci","poned","ponen","poner","pones","poney","ponga","pongo","ponia","ponis","ponto","popad","popan","popar","popas","popel","popen","popes","popos","popti","porco","porga","porgo","porno","poros","porra","porro","porta","porte","porto","posad","posan","posar","posas","posca","posea","posee","posei","posen","poseo","poses","posma","posmo","poson","posos","posta","poste","potad","potan","potar","potas","potea","potee","poten","poteo","potes","potos","potra","potro","poyad","poyal","poyan","poyar","poyas","poyen","poyes","poyos","pozal","pozas","pozol","pozos","prado","praos","prava","pravo","praza","prear","preas","preda","presa","preso","prest","preve","previ","pre\xf1a","pre\xf1e","pre\xf1o","prima","prime","primo","prion","prior","prisa","priva","prive","privo","proal","proas","proba","probe","probo","proco","proel","profa","profe","prois","proiz","prole","prona","prono","prora","prosa","pruna","pruno","psies","puaba","puada","puado","puais","puara","puare","puase","puber","pubes","pubis","pucha","pucho","pucia","pudin","pudio","pudir","pudor","pudra","pudre","pudri","pudro","pudus","pueda","puede","puedo","pueis","pufos","pugas","pugil","pugna","pugne","pugno","pujad","pujan","pujar","pujas","pujen","pujes","pujos","pulan","pulas","pulen","pules","pulga","pulia","pulid","pulio","pulir","pulis","pulla","pulle","pullo","pulpa","pulpo","pulsa","pulse","pulso","pumas","pumba","punan","punar","punas","punce","punen","punes","punga","punge","pungi","punia","punid","punio","punir","punis","punja","punjo","punta","punte","punto","punza","punzo","pupad","pupan","pupar","pupas","pupen","pupes","pupos","pupus","puras","purea","puree","pureo","pures","purga","purgo","purin","puros","purra","purre","purri","purro","puses","puspa","puspo","putal","putas","putea","putee","puteo","puton","putos","puyad","puyan","puyar","puyas","puyen","puyes","puyon","puyos","puzle","puzol","pu\xf1al","pu\xf1ar","pu\xf1ir","pu\xf1os","pymes","queco","queda","quede","quedo","queja","queje","quejo","quema","queme","quemi","quemo","quena","quepa","quepi","quepo","quera","quere","quero","queso","quias","quien","quier","quifs","quijo","quila","quilo","quima","quimo","quina","quino","quios","quipa","quipu","quisa","quise","quiso","quita","quite","quito","quitu","quivi","quiza","qui\xf1a","qui\xf1e","qui\xf1o","rabal","rabas","rabea","rabee","rabel","rabeo","rabia","rabie","rabil","rabio","rabis","rabon","rabos","racea","racee","racel","raceo","racha","rache","racho","racor","racos","radal","radar","radas","rades","radia","radie","radio","radon","raeis","raera","raere","rafal","rafas","rafea","rafee","rafeo","rafes","rafez","rafia","ragua","ragus","rahez","raian","raias","raice","raida","raido","raiga","raigo","raijo","raiza","raizo","rajad","rajan","rajar","rajas","rajen","rajes","rajon","ralas","ralba","ralbe","ralbo","ralea","ralee","raleo","ralla","ralle","rallo","rally","ralos","ralva","ralve","ralvo","ramal","ramas","ramea","ramee","rameo","ramio","ramon","ramos","rampa","rampe","rampo","ranas","randa","rands","rango","ranos","rapad","rapan","rapar","rapas","rapaz","rapen","rapes","rapos","rapta","rapte","rapto","raque","raras","rarea","raree","rareo","raros","rasad","rasan","rasar","rasas","rasca","rasco","rasel","rasen","rases","rasga","rasgo","rasis","rasos","raspa","raspe","raspo","ratas","ratea","ratee","rateo","ratio","raton","ratos","rauca","rauco","rauda","raudo","rauli","rauta","rayad","rayan","rayar","rayas","rayen","rayes","rayon","rayos","razar","razas","razia","razon","ra\xf1as","ra\xf1os","reaje","reala","reama","reame","reamo","reara","reare","rearo","reata","reate","reato","rebla","reble","reblo","rebol","rebus","recae","recai","recel","recen","reces","recia","recio","recle","recre","recta","recte","recto","recua","redad","redan","redar","redas","redel","reden","redes","redil","redol","redor","redro","refez","regad","regar","regas","regia","regid","regio","regir","regis","regla","regle","reglo","regue","rehaz","rehen","rehui","rehus","reian","reias","reida","reido","reila","reile","reilo","reina","reine","reino","reira","reire","rejal","rejas","rejin","rejon","rejos","rejus","relax","relea","relee","relei","relej","releo","reles","reloj","relsa","relso","relva","relve","relvo","remad","reman","remar","remas","remen","remes","remos","renal","renca","renco","renda","rende","rendi","rendo","renes","renga","rengo","renil","renio","renos","renta","rente","rento","reoca","reojo","repon","repos","repta","repte","repto","resal","reses","resma","resol","respe","resta","reste","resto","retad","retal","retan","retar","retas","retel","reten","retes","retin","retor","retos","retro","reuma","reuna","reune","reuni","reuno","revea","reved","reven","reveo","rever","reves","revio","reyad","reyan","reyar","reyas","reyen","reyes","rezad","rezan","rezar","rezas","rezno","rezon","rezos","re\xf1ia","re\xf1id","re\xf1ir","re\xf1is","riada","riais","riata","ribas","ricas","ricen","rices","ricia","ricio","ricos","riega","riego","riela","riele","rielo","riera","riere","riese","rifad","rifan","rifar","rifas","rifen","rifes","rifle","rigen","riges","rigil","rigio","rigor","rigua","rigue","rijan","rijas","rijos","rilad","rilan","rilar","rilas","rilen","riles","rimad","riman","rimar","rimas","rimel","rimen","rimes","rimus","rinda","rinde","rindo","ringa","ringo","rioja","ripia","ripie","ripio","risas","risca","risco","risos","rispa","rispe","rispo","ritma","ritme","ritmo","riton","ritos","rival","rizad","rizal","rizan","rizar","rizas","rizon","rizos","ri\xf1an","ri\xf1as","ri\xf1en","ri\xf1es","ri\xf1on","roais","roana","roano","robad","roban","robar","robas","robda","roben","robes","robin","robla","roble","roblo","robos","robot","robra","robre","rocas","rocea","rocee","rocen","roceo","roces","rocha","roche","rocho","rocia","rocie","rocin","rocio","rocos","rodad","rodal","rodao","rodar","rodas","rodea","rodee","rodeo","rodia","rodil","rodio","rodos","roeis","roela","roera","roere","roete","rogad","rogar","rogas","rogos","rogue","roian","roias","roida","roido","roiga","roigo","rojal","rojas","rojea","rojee","rojeo","rojez","rojos","rolad","rolan","rolar","rolas","rolda","rolde","roldo","rolen","roleo","roles","rolla","rolle","rollo","rolos","roman","romas","rombo","romea","romeo","romin","romis","romos","rompa","rompe","rompi","rompo","ronca","ronce","ronco","ronda","ronde","rondo","rones","ronza","ronzo","ropas","ropon","roque","rorad","roran","rorar","roras","roren","rores","rorro","rosal","rosan","rosar","rosas","rosca","rosco","rosea","rosee","rosen","roseo","roses","rosjo","roson","rosos","rosta","roste","rosti","rosto","rotad","rotal","rotan","rotar","rotas","roten","rotes","rotor","rotos","rouge","royan","royas","royos","rozad","rozan","rozar","rozas","rozna","rozne","rozno","rozon","rozos","ro\xf1ad","ro\xf1al","ro\xf1an","ro\xf1ar","ro\xf1as","ro\xf1en","ro\xf1es","ro\xf1ia","ruaba","ruada","ruado","ruais","ruana","ruano","ruara","ruare","ruase","rubea","rubeo","rubia","rubin","rubio","rubis","rublo","rubor","rubra","rubro","rucad","rucan","rucar","rucas","rucha","ruche","rucho","rucia","rucio","rucos","rudas","rudos","rueca","rueda","ruede","ruedo","ruega","ruego","rueis","ruejo","rue\xf1o","rufas","rufon","rufos","rugad","rugan","rugar","rugas","rugby","rugen","ruges","rugia","rugid","rugio","rugir","rugis","rugue","ruido","ruina","ruine","ruino","rujan","rujas","rujia","rujie","rujio","rulad","rulan","rular","rulas","rulen","rules","rulos","rumba","rumbe","rumbo","rumia","rumie","rumio","rumis","rumor","rumos","runas","runes","runga","rungo","runos","rupia","ruque","rural","rurru","rusas","rusco","rusel","ruses","rusia","rusos","rusta","ruste","rusti","rusto","rutad","rutan","rutar","rutas","rutel","ruten","rutes","ru\xf1ad","ru\xf1an","ru\xf1ar","ru\xf1as","ru\xf1en","ru\xf1es","ru\xf1ia","ru\xf1id","ru\xf1ir","ru\xf1is","sabea","sabed","saben","sabeo","saber","sabes","sabia","sabio","sabir","sable","sabor","sabra","sabre","sacad","sacan","sacar","sacas","saces","sacha","sache","sacho","sacia","sacie","sacio","sacon","sacos","sacra","sacre","sacro","saeta","saete","saeti","saeto","safir","sagas","sagaz","sagus","saina","saine","saino","sajad","sajan","sajar","sajas","sajen","sajes","sajia","sajon","salad","salan","salar","salas","salaz","salce","salda","salde","saldo","salea","salee","salen","saleo","salep","sales","salga","salgo","salia","salid","salin","salio","salir","salis","salla","salle","sallo","salma","salme","salmo","salol","salon","salpa","salsa","salso","salta","salte","salto","salud","salva","salve","salvo","saman","samas","samba","sambo","samia","samio","sampa","sanad","sanan","sanar","sanas","sanco","sanea","sanee","sanen","saneo","sanes","sango","sanie","sanja","sanje","sanjo","sanos","sansa","sanso","santa","santo","sapas","sapea","sapee","sapeo","sapos","saque","saran","sarao","sarda","sarde","sardo","sarga","sargo","saria","saris","sarna","sarro","sarta","sarza","sarzo","sasal","satan","satas","saten","satin","satis","satos","sauce","sauco","saudi","sauna","savia","saxea","saxeo","saxos","sayal","sayas","sayon","sayos","sazon","sa\xf1as","seais","sebes","sebos","secad","secan","secar","secas","secon","secos","secta","secua","sedad","sedal","sedan","sedar","sedas","sedea","sedee","seden","sedeo","sedes","segad","segar","segas","segri","segue","segui","segun","segur","seibo","seico","seise","sejes","seles","sella","selle","sello","selva","semas","semen","semis","senas","senda","senes","senil","senos","senta","sente","senti","sento","seora","sepan","sepas","sepes","sepia","septo","seque","seran","seras","serba","serbo","seres","seria","serie","serio","serna","seron","serpa","serra","serre","serro","servi","servo","sesea","sesee","sesen","seseo","seses","sesga","sesgo","sesil","sesis","sesma","sesmo","sesos","setal","setas","setos","sexad","sexan","sexar","sexas","sexen","sexes","sexma","sexmo","sexos","sexta","sexto","se\xf1al","se\xf1as","se\xf1or","short","shuar","sibil","siclo","sicus","sidas","sidra","siega","siego","siena","sieso","siete","sifon","sifue","sigan","sigas","sigla","siglo","sigma","signa","signe","signo","sigua","sigue","sijes","sijus","silba","silbe","silbo","siles","silex","silfo","silga","silgo","silla","silos","silva","simas","simia","simil","simio","simon","simpa","simun","singa","singo","sinos","sioux","sipes","sique","siras","sirga","sirgo","siria","sirin","sirio","sirle","siros","sirte","sirva","sirve","sirvo","sisad","sisal","sisan","sisar","sisas","sisca","sisea","sisee","sisen","siseo","sises","sismo","sison","sitas","sitia","sitie","sitio","sitos","situa","situe","situo","soasa","soase","soaso","sobad","soban","sobar","sobas","soben","sobeo","sobes","sobon","sobos","sobra","sobre","sobro","socas","socaz","soche","socia","socio","socol","sodas","sodio","soeza","sofas","sofis","sogas","sogun","sojas","solad","solar","solas","solaz","solda","solde","soldo","solea","solee","solen","soleo","soler","soles","solfa","solia","solio","solla","sollo","solos","solta","solte","solto","somas","somos","sonad","sonar","sonas","sonda","sonde","sondo","sones","sonio","sonsa","sonso","sonta","sonto","sopad","sopan","sopar","sopas","sopea","sopee","sopen","sopeo","sopes","sopie","sopla","sople","soplo","sopon","sopor","sorba","sorbe","sorbi","sorbo","sorce","sorda","sordo","sores","sorgo","sorna","sorne","sorno","soror","soros","sorra","sosal","sosar","sosas","sosia","sosos","sotad","sotan","sotar","sotas","soten","sotes","sotil","sotol","sotos","sovoz","soyas","so\xf1ad","so\xf1ar","so\xf1as","sport","spray","stand","suaba","suabo","suata","suato","suave","suazi","suban","subas","suben","subeo","subes","subia","subid","subio","subir","subis","subte","suche","sucia","sucio","sucos","sucre","sucus","sudad","sudan","sudar","sudas","suden","sudes","sudor","sueca","sueco","suela","suele","suelo","suena","suene","sueno","suero","sueva","suevo","sue\xf1a","sue\xf1e","sue\xf1o","sufis","sufra","sufre","sufri","sufro","suido","suita","suite","suiza","suizo","sulas","sulco","sulla","sumad","suman","sumar","sumas","sumen","sumes","sumia","sumid","sumio","sumir","sumis","sumos","sumus","sunca","sunco","super","supla","suple","supli","suplo","supon","supra","sural","suras","surca","surco","surda","surde","surdi","surdo","sures","surfs","surge","surgi","suris","surja","surjo","surta","surte","surti","surto","suses","susto","sutas","sutes","sutil","suyas","suyos","suzon","tabal","tabas","tabea","tabes","tabis","tabla","table","tablo","tabon","tabor","tabos","tabus","tacar","tacas","tacen","taces","tacet","tacha","tache","tacho","tacon","tacos","tacto","tafia","tafon","tafos","tafur","tagua","tahas","tahur","taifa","taiga","taima","taime","taimo","taina","taino","taipa","taira","taire","taita","tajad","tajan","tajar","tajas","tajea","tajee","tajen","tajeo","tajes","tajin","tajon","tajos","tajus","talad","talan","talar","talas","talco","talea","taled","talen","tales","talgo","talin","talio","talla","talle","tallo","talma","talon","talos","talpa","talud","tamal","tamba","tambo","tamil","tamiz","tamos","tamul","tanas","tanca","tanco","tanda","tanes","tanga","tange","tangi","tango","tanja","tanjo","tanor","tanos","tanta","tanto","tanza","tapad","tapan","tapar","tapas","tapea","tapee","tapen","tapeo","tapes","tapia","tapie","tapin","tapio","tapir","tapis","tapiz","tapon","taque","tarad","taran","tarar","taras","taray","tarca","tarco","tarda","tarde","tardo","tarea","taren","tares","tarin","tarja","tarje","tarjo","tarma","tarot","tarra","tarro","tarso","tarta","tasad","tasan","tasar","tasas","tasca","tasco","tasen","tases","tasia","tasio","tasis","tasto","tatas","tatay","tatos","tatua","tatue","tatuo","tatus","tauca","tauco","taula","tauro","taxis","taxon","tayos","tayul","tazad","tazan","tazar","tazas","tazon","ta\xf1ad","ta\xf1an","ta\xf1ar","ta\xf1as","ta\xf1ed","ta\xf1en","ta\xf1er","ta\xf1es","ta\xf1ia","ta\xf1os","teame","tebea","tebeo","tecas","teces","techa","teche","techo","tecla","tecle","teclo","tecol","tedas","tedio","tefes","tegea","tegeo","tegua","tegue","tehul","teina","tejad","tejan","tejar","tejas","tejed","tejen","tejer","tejes","tejia","tejio","tejon","tejos","telar","telas","teles","telex","telon","temad","teman","temar","temas","temed","temen","temer","temes","temia","temio","temor","tempo","temus","tenas","tenaz","tenca","tende","tendi","tened","tener","tenes","tenga","tengo","tenia","tenio","tenis","tenor","tensa","tense","tenso","tenta","tente","tento","tenue","teosa","teoso","tepes","tepus","tepuy","teque","terca","terco","terma","termo","terna","terne","terno","teros","tersa","terse","terso","tesad","tesan","tesar","tesas","tesen","teses","tesis","tesla","teson","tesos","testa","teste","testo","tetad","tetan","tetar","tetas","teten","tetes","teton","tetra","tetro","texes","texto","teyas","teyos","teyus","te\xf1as","te\xf1ia","te\xf1id","te\xf1ir","te\xf1is","tiaca","tiara","tibar","tibes","tibia","tibie","tibio","tibor","ticas","ticos","tiene","tiesa","tieso","tifas","tifon","tifos","tifus","tigra","tigre","tigua","tigue","tijas","tijos","tijul","tilas","tilda","tilde","tildo","tiles","tilia","tilin","tilla","tille","tillo","tilma","tilos","timad","timan","timar","timas","timba","timbo","timen","times","timol","timon","timos","timpa","tinas","tinca","tinco","tinea","tineo","tinge","tinos","tinta","tinte","tinto","tipas","tipis","tiple","tipoi","tipos","tipoy","tique","tiqui","tirad","tiran","tirar","tiras","tiren","tires","tiria","tirio","tiron","tiros","tirro","tirso","tirte","tisis","tiste","tisus","titad","titan","titar","titas","titea","titee","titen","titeo","tites","titil","titis","titos","tizas","tizna","tizne","tizno","tizon","tizos","ti\xf1an","ti\xf1as","ti\xf1en","ti\xf1es","tlaco","toaba","toada","toado","toais","toara","toare","toase","tobar","tobas","tocad","tocan","tocar","tocas","tocen","toces","tocha","toche","tocho","tocia","tocio","tocon","tocos","tocte","todas","todia","todos","toeis","toesa","tofos","togan","togar","togas","togue","tojal","tojos","tolas","tolda","tolde","toldo","toles","tolla","tollo","tolmo","tolon","tolva","tomad","toman","tomar","tomas","tomen","tomes","tomin","tomon","tomos","tonad","tonal","tonan","tonar","tonas","tonca","tondo","tonel","tonen","toner","tones","tonga","tongo","tonos","tonta","tonto","topad","topan","topar","topas","topea","topee","topen","topeo","topes","topia","topil","topon","topos","toque","toqui","toral","toras","torax","torca","torce","torci","torco","torda","tordo","torea","toree","toreo","tores","torga","torgo","toril","torio","tormo","torna","torne","torno","toron","toros","torpe","torra","torre","torro","torso","torta","torva","torvo","tosan","tosas","tosca","tosco","tosed","tosen","toser","toses","tosia","tosio","tosta","toste","tosto","total","totem","totes","totis","totol","tovas","tozad","tozal","tozan","tozar","tozas","tozos","to\xf1as","to\xf1il","traba","trabe","trabo","traca","trace","traed","traen","traer","traes","trafa","traga","trago","traia","traje","trajo","trama","trame","tramo","trapa","trape","trapo","traro","trata","trate","trato","travo","traza","trazo","trebo","trece","trefe","treja","trema","treme","tremi","tremo","trena","treno","treos","trepa","trepe","trepo","treta","triad","trial","trian","triar","trias","tribu","trice","trien","tries","triga","trigo","trile","trina","trine","trino","trios","tripa","tripe","trisa","trise","triso","triza","trizo","troca","troce","troco","troja","troje","trola","trole","trona","trone","trono","tropa","tropo","trota","trote","troto","trova","trove","trovo","troza","trozo","truca","truco","trues","trufa","trufe","trufo","truja","trusa","trust","tuani","tubas","tubos","tucan","tucas","tucia","tucos","tucun","tudas","tudel","tueca","tueco","tuera","tuero","tufea","tufee","tufeo","tufos","tuina","tular","tules","tulio","tulla","tulle","tulli","tullo","tulpa","tumba","tumbe","tumbo","tumor","tumos","tunad","tunal","tunan","tunar","tunas","tunca","tunco","tunda","tunde","tundi","tundo","tunea","tunee","tunel","tunen","tuneo","tunes","tunjo","tunos","tunta","tupan","tupas","tupen","tupes","tupia","tupid","tupin","tupio","tupir","tupis","tupos","turar","turba","turbe","turbo","turca","turco","turma","turna","turne","turno","turon","turra","turre","turro","tusad","tusan","tusar","tusas","tusca","tusco","tusen","tuses","tuson","tusos","tutas","tutea","tutee","tuteo","tutes","tutia","tutor","tutos","tutus","tuyas","tuyos","tuzas","ubica","ubico","ubies","ubios","ubres","ucase","uchus","uebos","ufana","ufane","ufano","ugres","ujier","ujule","ulaga","ulala","ulano","ulema","ulpos","ultra","uluas","ulula","ulule","ululo","umbra","umbro","umero","unais","uncen","unces","uncia","uncid","uncio","uncir","uncis","ungen","unges","ungia","ungid","ungio","ungir","ungis","unian","unias","unica","unico","unida","unido","union","unira","unire","unjan","unjas","untad","untan","untar","untas","unten","untes","untos","unzan","unzas","upaba","upada","upado","upais","upara","upare","upase","upeis","upupa","uraos","urape","urato","urbes","urcas","urces","urdan","urdas","urden","urdes","urdia","urdid","urdio","urdir","urdis","urdus","ureas","urgen","urges","urgia","urgid","urgio","urgir","urgis","urica","urico","urjan","urjas","urnas","urtas","urubu","urucu","uruga","usaba","usada","usado","usais","usaje","usara","usare","usase","useis","usgos","usias","usier","usina","usted","usual","usura","usure","usuro","utero","uvada","uvate","uveas","uvera","uvero","uviar","uvula","u\xf1ada","u\xf1ado","u\xf1ais","u\xf1ate","u\xf1era","u\xf1ere","u\xf1ero","u\xf1ese","u\xf1eta","u\xf1ian","u\xf1ias","u\xf1ida","u\xf1ido","u\xf1ira","u\xf1ire","u\xf1osa","u\xf1oso","u\xf1udo","vacad","vacan","vacar","vacas","vacia","vacie","vacio","vacos","vacua","vacuo","vadea","vadee","vadeo","vades","vados","vafea","vafee","vafeo","vagad","vagan","vagar","vagas","vagon","vagos","vague","vahad","vahan","vahar","vahas","vahea","vahee","vahen","vaheo","vahes","vahos","vaida","vaina","vajea","vajee","vajeo","valar","valed","valen","valer","vales","valet","valga","valgo","valia","valio","valis","valla","valle","vallo","valon","valor","valsa","valse","valso","valua","value","valuo","valva","vamos","vanas","vanea","vanee","vaneo","vanos","vapor","vaque","varad","varal","varan","varar","varas","varea","varee","varen","vareo","vares","varga","varia","varie","vario","varis","variz","varon","vasar","vasas","vasca","vasco","vasos","vasta","vasto","vater","vates","vatio","vayan","vayas","veais","vecen","veces","vedad","vedan","vedar","vedas","veden","vedes","vegas","veian","veias","vejad","vejan","vejar","vejas","vejen","vejes","vejez","velad","velan","velar","velas","velay","velen","veles","velis","veliz","vello","velon","velos","veloz","vemos","venal","venas","vence","venci","venda","vende","vendi","vendo","venga","vengo","venia","venid","venir","venis","venta","vente","vento","venus","venza","venzo","veran","veras","veraz","verba","verbo","verde","veres","verga","verge","veria","veril","verja","verme","vermu","veros","versa","verse","verso","verte","verti","veste","vesti","vetad","vetan","vetar","vetas","vetea","vetee","veten","veteo","vetes","veton","vetos","vezad","vezan","vezar","vezas","viada","viaja","viaje","viajo","vibra","vibre","vibro","vicha","viche","vicho","vichy","vicia","vicie","vicio","vicos","victo","vidas","video","vides","vidon","vidro","vieja","viejo","viene","viera","viere","viesa","viese","vigas","vigia","vigie","vigio","vigor","viles","villa","vilos","vimos","vinal","vinar","vinca","vinco","vinos","vinta","viola","viole","violo","virad","viral","viran","virar","viras","viren","vireo","vires","virgo","viril","virio","virol","viron","virus","visad","visan","visar","visas","visco","visea","visee","visen","viseo","vises","visir","vison","visor","visos","vista","viste","visto","vitad","vital","vitan","vitar","vitas","viten","vites","vitor","vitos","vitre","viuda","viudo","vivac","vivad","vivan","vivar","vivas","vivaz","viven","vives","vivez","vivia","vivid","vivio","vivir","vivis","vivon","vivos","vi\xf1as","voace","vocal","vocea","vocee","voceo","voces","vodca","vodus","voila","volad","volar","volas","volca","volco","volea","volee","voleo","volon","volts","volve","volvi","volvo","vomer","voraz","vosea","vosee","voseo","votad","votan","votar","votas","voten","votes","votos","votri","vozna","vozne","vozno","vudus","vuela","vuele","vuelo","vuesa","vueso","vulgo","vulto","vulva","vusco","xecas","xenon","xinca","xiote","xolas","xolos","yabas","yacal","yacas","yaced","yacen","yacer","yaces","yacia","yacio","yacon","yagan","yagas","yagua","yaiti","yales","yamao","yambo","yampa","yanas","yanta","yante","yanto","yapad","yapan","yapar","yapas","yapen","yapes","yapus","yaque","yaqui","yarda","yares","yarey","yaros","yatai","yatay","yates","yayas","yayos","yazca","yazco","yazga","yazgo","yebos","yecos","yedgo","yedra","yegua","yelgo","yelmo","yemas","yendo","yenes","yente","yeral","yerba","yerga","yergo","yerma","yerme","yermo","yerna","yerno","yeros","yerra","yerre","yerro","yersi","yerta","yerto","yervo","yesal","yesar","yesca","yeson","yesos","yetis","yeyes","yeyos","yezgo","yinas","yines","yiras","yiros","yodad","yodan","yodar","yodas","yoden","yodes","yodos","yogar","yogas","yogos","yogui","yogur","yolas","yoqui","yoris","yoses","yoyos","yucal","yucas","yucpa","yudos","yugos","yumba","yumbo","yunga","yunta","yunto","yuras","yures","yutas","yutes","yuyal","yuyos","zabra","zabro","zacas","zacea","zacee","zaceo","zades","zafad","zafan","zafar","zafas","zafen","zafes","zafia","zafio","zafir","zafon","zafos","zafra","zafre","zagal","zagas","zagua","zahen","zahon","zaida","zaina","zaino","zajon","zalas","zalba","zalbo","zalea","zalee","zaleo","zalla","zalle","zallo","zamba","zambo","zampa","zampe","zampo","zanas","zanca","zanco","zanga","zanja","zanje","zanjo","zapad","zapan","zapar","zapas","zapea","zapee","zapen","zapeo","zapes","zaque","zarbo","zarca","zarco","zares","zarja","zarpa","zarpe","zarpo","zarza","zarzo","zatas","zayas","zazas","zazos","zebra","zedas","zegri","zeina","zejel","zenda","zendo","zenes","zenit","zetas","zincs","zocad","zocan","zocar","zocas","zoclo","zocos","zofra","zoilo","zoizo","zolle","zomas","zombi","zomos","zompa","zompo","zonal","zonas","zonda","zonta","zonto","zonza","zonzo","zopas","zopes","zopos","zoque","zorra","zorro","zotal","zotes","zotol","zuavo","zubia","zudas","zueca","zueco","zuela","zuiza","zulla","zulle","zullo","zulus","zumas","zumba","zumbe","zumbo","zumos","zunas","zunza","zupia","zuras","zurba","zurce","zurci","zurda","zurde","zurdi","zurdo","zurea","zuree","zureo","zuros","zurra","zurre","zurri","zurro","zurza","zurzo","zuzar","zuzon","zu\xf1an","zu\xf1as","zu\xf1en","zu\xf1es","zu\xf1ia","zu\xf1id","zu\xf1ir","zu\xf1is","zu\xf1os","\xf1ajas","\xf1ajos","\xf1ames","\xf1ampi","\xf1andu","\xf1anga","\xf1ango","\xf1apas","\xf1aque","\xf1atas","\xf1atea","\xf1atee","\xf1ateo","\xf1atos","\xf1a\xf1as","\xf1a\xf1os","\xf1ecas","\xf1ecla","\xf1ecos","\xf1enga","\xf1engo","\xf1eque","\xf1inga","\xf1ipes","\xf1ique","\xf1ires","\xf1isca","\xf1izca","\xf1ocas","\xf1ocha","\xf1oclo","\xf1ocos","\xf1olas","\xf1onga","\xf1ongo","\xf1oqui","\xf1oras","\xf1orbo","\xf1ores","\xf1o\xf1as","\xf1o\xf1ez","\xf1o\xf1os","\xf1ublo","\xf1ucas","\xf1ucos","\xf1udos","\xf1urda","\xf1urdo","\xf1utas","\xf1utos","\xf1uzco" ],
    general_ingles: [
        "aback",
  "abase",
  "abate",
  "abbey",
  "abbot",
  "abhor",
  "abide",
  "abled",
  "abode",
  "abort",
  "about",
  "above",
  "abuse",
  "abyss",
  "acorn",
  "acrid",
  "actor",
  "acute",
  "adage",
  "adapt",
  "adept",
  "admin",
  "admit",
  "adobe",
  "adopt",
  "adore",
  "adorn",
  "adult",
  "affix",
  "afire",
  "afoot",
  "afoul",
  "after",
  "again",
  "agape",
  "agate",
  "agent",
  "agile",
  "aging",
  "aglow",
  "agony",
  "agree",
  "ahead",
  "aider",
  "aisle",
  "alarm",
  "album",
  "alert",
  "algae",
  "alibi",
  "alien",
  "align",
  "alike",
  "alive",
  "allay",
  "alley",
  "allot",
  "allow",
  "alloy",
  "aloft",
  "alone",
  "along",
  "aloof",
  "aloud",
  "alpha",
  "altar",
  "alter",
  "amass",
  "amaze",
  "amber",
  "amble",
  "amend",
  "amiss",
  "amity",
  "among",
  "ample",
  "amply",
  "amuse",
  "angel",
  "anger",
  "angle",
  "angry",
  "angst",
  "anime",
  "ankle",
  "annex",
  "annoy",
  "annul",
  "anode",
  "antic",
  "anvil",
  "aorta",
  "apart",
  "aphid",
  "aping",
  "apnea",
  "apple",
  "apply",
  "apron",
  "aptly",
  "arbor",
  "ardor",
  "arena",
  "argue",
  "arise",
  "armor",
  "aroma",
  "arose",
  "array",
  "arrow",
  "arson",
  "artsy",
  "ascot",
  "ashen",
  "aside",
  "askew",
  "assay",
  "asset",
  "atoll",
  "atone",
  "attic",
  "audio",
  "audit",
  "augur",
  "aunty",
  "avail",
  "avert",
  "avian",
  "avoid",
  "await",
  "awake",
  "award",
  "aware",
  "awash",
  "awful",
  "awoke",
  "axial",
  "axiom",
  "axion",
  "azure",
  "bacon",
  "badge",
  "badly",
  "bagel",
  "baggy",
  "baker",
  "baler",
  "balmy",
  "banal",
  "banjo",
  "barge",
  "baron",
  "basal",
  "basic",
  "basil",
  "basin",
  "basis",
  "baste",
  "batch",
  "bathe",
  "baton",
  "batty",
  "bawdy",
  "bayou",
  "beach",
  "beady",
  "beard",
  "beast",
  "beech",
  "beefy",
  "befit",
  "began",
  "begat",
  "beget",
  "begin",
  "begun",
  "being",
  "belch",
  "belie",
  "belle",
  "belly",
  "below",
  "bench",
  "beret",
  "berry",
  "berth",
  "beset",
  "betel",
  "bevel",
  "bezel",
  "bible",
  "bicep",
  "biddy",
  "bigot",
  "bilge",
  "billy",
  "binge",
  "bingo",
  "biome",
  "birch",
  "birth",
  "bison",
  "bitty",
  "black",
  "blade",
  "blame",
  "bland",
  "blank",
  "blare",
  "blast",
  "blaze",
  "bleak",
  "bleat",
  "bleed",
  "bleep",
  "blend",
  "bless",
  "blimp",
  "blind",
  "blink",
  "bliss",
  "blitz",
  "bloat",
  "block",
  "bloke",
  "blond",
  "blood",
  "bloom",
  "blown",
  "bluer",
  "bluff",
  "blunt",
  "blurb",
  "blurt",
  "blush",
  "board",
  "boast",
  "bobby",
  "boney",
  "bongo",
  "bonus",
  "booby",
  "boost",
  "booth",
  "booty",
  "booze",
  "boozy",
  "borax",
  "borne",
  "bosom",
  "bossy",
  "botch",
  "bough",
  "boule",
  "bound",
  "bowel",
  "boxer",
  "brace",
  "braid",
  "brain",
  "brake",
  "brand",
  "brash",
  "brass",
  "brave",
  "bravo",
  "brawl",
  "brawn",
  "bread",
  "break",
  "breed",
  "briar",
  "bribe",
  "brick",
  "bride",
  "brief",
  "brine",
  "bring",
  "brink",
  "briny",
  "brisk",
  "broad",
  "broil",
  "broke",
  "brood",
  "brook",
  "broom",
  "broth",
  "brown",
  "brunt",
  "brush",
  "brute",
  "buddy",
  "budge",
  "buggy",
  "bugle",
  "build",
  "built",
  "bulge",
  "bulky",
  "bully",
  "bunch",
  "bunny",
  "burly",
  "burnt",
  "burst",
  "bused",
  "bushy",
  "butch",
  "butte",
  "buxom",
  "buyer",
  "bylaw",
  "cabal",
  "cabby",
  "cabin",
  "cable",
  "cacao",
  "cache",
  "cacti",
  "caddy",
  "cadet",
  "cagey",
  "cairn",
  "camel",
  "cameo",
  "canal",
  "candy",
  "canny",
  "canoe",
  "canon",
  "caper",
  "caput",
  "carat",
  "cargo",
  "carol",
  "carry",
  "carve",
  "caste",
  "catch",
  "cater",
  "catty",
  "caulk",
  "cause",
  "cavil",
  "cease",
  "cedar",
  "cello",
  "chafe",
  "chaff",
  "chain",
  "chair",
  "chalk",
  "champ",
  "chant",
  "chaos",
  "chard",
  "charm",
  "chart",
  "chase",
  "chasm",
  "cheap",
  "cheat",
  "check",
  "cheek",
  "cheer",
  "chess",
  "chest",
  "chick",
  "chide",
  "chief",
  "child",
  "chili",
  "chill",
  "chime",
  "china",
  "chirp",
  "chock",
  "choir",
  "choke",
  "chord",
  "chore",
  "chose",
  "chuck",
  "chump",
  "chunk",
  "churn",
  "chute",
  "cider",
  "cigar",
  "cinch",
  "circa",
  "civic",
  "civil",
  "clack",
  "claim",
  "clamp",
  "clang",
  "clank",
  "clash",
  "clasp",
  "class",
  "clean",
  "clear",
  "cleat",
  "cleft",
  "clerk",
  "click",
  "cliff",
  "climb",
  "cling",
  "clink",
  "cloak",
  "clock",
  "clone",
  "close",
  "cloth",
  "cloud",
  "clout",
  "clove",
  "clown",
  "cluck",
  "clued",
  "clump",
  "clung",
  "coach",
  "coast",
  "cobra",
  "cocoa",
  "colon",
  "color",
  "comet",
  "comfy",
  "comic",
  "comma",
  "conch",
  "condo",
  "conic",
  "copse",
  "coral",
  "corer",
  "corny",
  "couch",
  "cough",
  "could",
  "count",
  "coupe",
  "court",
  "coven",
  "cover",
  "covet",
  "covey",
  "cower",
  "coyly",
  "crack",
  "craft",
  "cramp",
  "crane",
  "crank",
  "crash",
  "crass",
  "crate",
  "crave",
  "crawl",
  "craze",
  "crazy",
  "creak",
  "cream",
  "credo",
  "creed",
  "creek",
  "creep",
  "creme",
  "crepe",
  "crept",
  "cress",
  "crest",
  "crick",
  "cried",
  "crier",
  "crime",
  "crimp",
  "crisp",
  "croak",
  "crock",
  "crone",
  "crony",
  "crook",
  "cross",
  "croup",
  "crowd",
  "crown",
  "crude",
  "cruel",
  "crumb",
  "crump",
  "crush",
  "crust",
  "crypt",
  "cubic",
  "cumin",
  "curio",
  "curly",
  "curry",
  "curse",
  "curve",
  "curvy",
  "cutie",
  "cyber",
  "cycle",
  "cynic",
  "daddy",
  "daily",
  "dairy",
  "daisy",
  "dally",
  "dance",
  "dandy",
  "datum",
  "daunt",
  "dealt",
  "death",
  "debar",
  "debit",
  "debug",
  "debut",
  "decal",
  "decay",
  "decor",
  "decoy",
  "decry",
  "defer",
  "deign",
  "deity",
  "delay",
  "delta",
  "delve",
  "demon",
  "demur",
  "denim",
  "dense",
  "depot",
  "depth",
  "derby",
  "deter",
  "detox",
  "deuce",
  "devil",
  "diary",
  "dicey",
  "digit",
  "dilly",
  "dimly",
  "diner",
  "dingo",
  "dingy",
  "diode",
  "dirge",
  "dirty",
  "disco",
  "ditch",
  "ditto",
  "ditty",
  "diver",
  "dizzy",
  "dodge",
  "dodgy",
  "dogma",
  "doing",
  "dolly",
  "donor",
  "donut",
  "dopey",
  "doubt",
  "dough",
  "dowdy",
  "dowel",
  "downy",
  "dowry",
  "dozen",
  "draft",
  "drain",
  "drake",
  "drama",
  "drank",
  "drape",
  "drawl",
  "drawn",
  "dread",
  "dream",
  "dress",
  "dried",
  "drier",
  "drift",
  "drill",
  "drink",
  "drive",
  "droit",
  "droll",
  "drone",
  "drool",
  "droop",
  "dross",
  "drove",
  "drown",
  "druid",
  "drunk",
  "dryer",
  "dryly",
  "duchy",
  "dully",
  "dummy",
  "dumpy",
  "dunce",
  "dusky",
  "dusty",
  "dutch",
  "duvet",
  "dwarf",
  "dwell",
  "dwelt",
  "dying",
  "eager",
  "eagle",
  "early",
  "earth",
  "easel",
  "eaten",
  "eater",
  "ebony",
  "eclat",
  "edict",
  "edify",
  "eerie",
  "egret",
  "eight",
  "eject",
  "eking",
  "elate",
  "elbow",
  "elder",
  "elect",
  "elegy",
  "elfin",
  "elide",
  "elite",
  "elope",
  "elude",
  "email",
  "embed",
  "ember",
  "emcee",
  "empty",
  "enact",
  "endow",
  "enema",
  "enemy",
  "enjoy",
  "ennui",
  "ensue",
  "enter",
  "entry",
  "envoy",
  "epoch",
  "epoxy",
  "equal",
  "equip",
  "erase",
  "erect",
  "erode",
  "error",
  "erupt",
  "essay",
  "ester",
  "ether",
  "ethic",
  "ethos",
  "etude",
  "evade",
  "event",
  "every",
  "evict",
  "evoke",
  "exact",
  "exalt",
  "excel",
  "exert",
  "exile",
  "exist",
  "expel",
  "extol",
  "extra",
  "exult",
  "eying",
  "fable",
  "facet",
  "faint",
  "fairy",
  "faith",
  "false",
  "fancy",
  "fanny",
  "farce",
  "fatal",
  "fatty",
  "fault",
  "fauna",
  "favor",
  "feast",
  "fecal",
  "feign",
  "fella",
  "felon",
  "femme",
  "femur",
  "fence",
  "feral",
  "ferry",
  "fetal",
  "fetch",
  "fetid",
  "fetus",
  "fever",
  "fewer",
  "fiber",
  "ficus",
  "field",
  "fiend",
  "fiery",
  "fifth",
  "fifty",
  "fight",
  "filer",
  "filet",
  "filly",
  "filmy",
  "filth",
  "final",
  "finch",
  "finer",
  "first",
  "fishy",
  "fixer",
  "fizzy",
  "fjord",
  "flack",
  "flail",
  "flair",
  "flake",
  "flaky",
  "flame",
  "flank",
  "flare",
  "flash",
  "flask",
  "fleck",
  "fleet",
  "flesh",
  "flick",
  "flier",
  "fling",
  "flint",
  "flirt",
  "float",
  "flock",
  "flood",
  "floor",
  "flora",
  "floss",
  "flour",
  "flout",
  "flown",
  "fluff",
  "fluid",
  "fluke",
  "flume",
  "flung",
  "flunk",
  "flush",
  "flute",
  "flyer",
  "foamy",
  "focal",
  "focus",
  "foggy",
  "foist",
  "folio",
  "folly",
  "foray",
  "force",
  "forge",
  "forgo",
  "forte",
  "forth",
  "forty",
  "forum",
  "found",
  "foyer",
  "frail",
  "frame",
  "frank",
  "fraud",
  "freak",
  "freed",
  "freer",
  "fresh",
  "friar",
  "fried",
  "frill",
  "frisk",
  "fritz",
  "frock",
  "frond",
  "front",
  "frost",
  "froth",
  "frown",
  "froze",
  "fruit",
  "fudge",
  "fugue",
  "fully",
  "fungi",
  "funky",
  "funny",
  "furor",
  "furry",
  "fussy",
  "fuzzy",
  "gaffe",
  "gaily",
  "gamer",
  "gamma",
  "gamut",
  "gassy",
  "gaudy",
  "gauge",
  "gaunt",
  "gauze",
  "gavel",
  "gawky",
  "gayer",
  "gayly",
  "gazer",
  "gecko",
  "geeky",
  "geese",
  "genie",
  "genre",
  "ghost",
  "ghoul",
  "giant",
  "giddy",
  "gipsy",
  "girly",
  "girth",
  "given",
  "giver",
  "glade",
  "gland",
  "glare",
  "glass",
  "glaze",
  "gleam",
  "glean",
  "glide",
  "glint",
  "gloat",
  "globe",
  "gloom",
  "glory",
  "gloss",
  "glove",
  "glyph",
  "gnash",
  "gnome",
  "godly",
  "going",
  "golem",
  "golly",
  "gonad",
  "goner",
  "goody",
  "gooey",
  "goofy",
  "goose",
  "gorge",
  "gouge",
  "gourd",
  "grace",
  "grade",
  "graft",
  "grail",
  "grain",
  "grand",
  "grant",
  "grape",
  "graph",
  "grasp",
  "grass",
  "grate",
  "grave",
  "gravy",
  "graze",
  "great",
  "greed",
  "green",
  "greet",
  "grief",
  "grill",
  "grime",
  "grimy",
  "grind",
  "gripe",
  "groan",
  "groin",
  "groom",
  "grope",
  "gross",
  "group",
  "grout",
  "grove",
  "growl",
  "grown",
  "gruel",
  "gruff",
  "grunt",
  "guard",
  "guava",
  "guess",
  "guest",
  "guide",
  "guild",
  "guile",
  "guilt",
  "guise",
  "gulch",
  "gully",
  "gumbo",
  "gummy",
  "guppy",
  "gusto",
  "gusty",
  "gypsy",
  "habit",
  "hairy",
  "halve",
  "handy",
  "happy",
  "hardy",
  "harem",
  "harpy",
  "harry",
  "harsh",
  "haste",
  "hasty",
  "hatch",
  "hater",
  "haunt",
  "haute",
  "haven",
  "havoc",
  "hazel",
  "heady",
  "heard",
  "heart",
  "heath",
  "heave",
  "heavy",
  "hedge",
  "hefty",
  "heist",
  "helix",
  "hello",
  "hence",
  "heron",
  "hilly",
  "hinge",
  "hippo",
  "hippy",
  "hitch",
  "hoard",
  "hobby",
  "hoist",
  "holly",
  "homer",
  "honey",
  "honor",
  "horde",
  "horny",
  "horse",
  "hotel",
  "hotly",
  "hound",
  "house",
  "hovel",
  "hover",
  "howdy",
  "human",
  "humid",
  "humor",
  "humph",
  "humus",
  "hunch",
  "hunky",
  "hurry",
  "husky",
  "hussy",
  "hutch",
  "hydro",
  "hyena",
  "hymen",
  "hyper",
  "icily",
  "icing",
  "ideal",
  "idiom",
  "idiot",
  "idler",
  "idyll",
  "igloo",
  "iliac",
  "image",
  "imbue",
  "impel",
  "imply",
  "inane",
  "inbox",
  "incur",
  "index",
  "inept",
  "inert",
  "infer",
  "ingot",
  "inlay",
  "inlet",
  "inner",
  "input",
  "inter",
  "intro",
  "ionic",
  "irate",
  "irony",
  "islet",
  "issue",
  "itchy",
  "ivory",
  "jaunt",
  "jazzy",
  "jelly",
  "jerky",
  "jetty",
  "jewel",
  "jiffy",
  "joint",
  "joist",
  "joker",
  "jolly",
  "joust",
  "judge",
  "juice",
  "juicy",
  "jumbo",
  "jumpy",
  "junta",
  "junto",
  "juror",
  "kappa",
  "karma",
  "kayak",
  "kebab",
  "khaki",
  "kinky",
  "kiosk",
  "kitty",
  "knack",
  "knave",
  "knead",
  "kneed",
  "kneel",
  "knelt",
  "knife",
  "knock",
  "knoll",
  "known",
  "koala",
  "krill",
  "label",
  "labor",
  "laden",
  "ladle",
  "lager",
  "lance",
  "lanky",
  "lapel",
  "lapse",
  "large",
  "larva",
  "lasso",
  "latch",
  "later",
  "lathe",
  "latte",
  "laugh",
  "layer",
  "leach",
  "leafy",
  "leaky",
  "leant",
  "leapt",
  "learn",
  "lease",
  "leash",
  "least",
  "leave",
  "ledge",
  "leech",
  "leery",
  "lefty",
  "legal",
  "leggy",
  "lemon",
  "lemur",
  "leper",
  "level",
  "lever",
  "libel",
  "liege",
  "light",
  "liken",
  "lilac",
  "limbo",
  "limit",
  "linen",
  "liner",
  "lingo",
  "lipid",
  "lithe",
  "liver",
  "livid",
  "llama",
  "loamy",
  "loath",
  "lobby",
  "local",
  "locus",
  "lodge",
  "lofty",
  "logic",
  "login",
  "loopy",
  "loose",
  "lorry",
  "loser",
  "louse",
  "lousy",
  "lover",
  "lower",
  "lowly",
  "loyal",
  "lucid",
  "lucky",
  "lumen",
  "lumpy",
  "lunar",
  "lunch",
  "lunge",
  "lupus",
  "lurch",
  "lurid",
  "lusty",
  "lying",
  "lymph",
  "lyric",
  "macaw",
  "macho",
  "macro",
  "madam",
  "madly",
  "mafia",
  "magic",
  "magma",
  "maize",
  "major",
  "maker",
  "mambo",
  "mamma",
  "mammy",
  "manga",
  "mange",
  "mango",
  "mangy",
  "mania",
  "manic",
  "manly",
  "manor",
  "maple",
  "march",
  "marry",
  "marsh",
  "mason",
  "masse",
  "match",
  "matey",
  "mauve",
  "maxim",
  "maybe",
  "mayor",
  "mealy",
  "meant",
  "meaty",
  "mecca",
  "medal",
  "media",
  "medic",
  "melee",
  "melon",
  "mercy",
  "merge",
  "merit",
  "merry",
  "metal",
  "meter",
  "metro",
  "micro",
  "midge",
  "midst",
  "might",
  "milky",
  "mimic",
  "mince",
  "miner",
  "minim",
  "minor",
  "minty",
  "minus",
  "mirth",
  "miser",
  "missy",
  "mocha",
  "modal",
  "model",
  "modem",
  "mogul",
  "moist",
  "molar",
  "moldy",
  "money",
  "month",
  "moody",
  "moose",
  "moral",
  "moron",
  "morph",
  "mossy",
  "motel",
  "motif",
  "motor",
  "motto",
  "moult",
  "mound",
  "mount",
  "mourn",
  "mouse",
  "mouth",
  "mover",
  "movie",
  "mower",
  "mucky",
  "mucus",
  "muddy",
  "mulch",
  "mummy",
  "munch",
  "mural",
  "murky",
  "mushy",
  "music",
  "musky",
  "musty",
  "myrrh",
  "nadir",
  "naive",
  "nanny",
  "nasal",
  "nasty",
  "natal",
  "naval",
  "navel",
  "needy",
  "neigh",
  "nerdy",
  "nerve",
  "never",
  "newer",
  "newly",
  "nicer",
  "niche",
  "niece",
  "night",
  "ninja",
  "ninny",
  "ninth",
  "noble",
  "nobly",
  "noise",
  "noisy",
  "nomad",
  "noose",
  "north",
  "nosey",
  "notch",
  "novel",
  "nudge",
  "nurse",
  "nutty",
  "nylon",
  "nymph",
  "oaken",
  "obese",
  "occur",
  "ocean",
  "octal",
  "octet",
  "odder",
  "oddly",
  "offal",
  "offer",
  "often",
  "olden",
  "older",
  "olive",
  "ombre",
  "omega",
  "onion",
  "onset",
  "opera",
  "opine",
  "opium",
  "optic",
  "orbit",
  "order",
  "organ",
  "other",
  "otter",
  "ought",
  "ounce",
  "outdo",
  "outer",
  "outgo",
  "ovary",
  "ovate",
  "overt",
  "ovine",
  "ovoid",
  "owing",
  "owner",
  "oxide",
  "ozone",
  "paddy",
  "pagan",
  "paint",
  "paler",
  "palsy",
  "panel",
  "panic",
  "pansy",
  "papal",
  "paper",
  "parer",
  "parka",
  "parry",
  "parse",
  "party",
  "pasta",
  "paste",
  "pasty",
  "patch",
  "patio",
  "patsy",
  "patty",
  "pause",
  "payee",
  "payer",
  "peace",
  "peach",
  "pearl",
  "pecan",
  "pedal",
  "penal",
  "pence",
  "penne",
  "penny",
  "perch",
  "peril",
  "perky",
  "pesky",
  "pesto",
  "petal",
  "petty",
  "phase",
  "phone",
  "phony",
  "photo",
  "piano",
  "picky",
  "piece",
  "piety",
  "piggy",
  "pilot",
  "pinch",
  "piney",
  "pinky",
  "pinto",
  "piper",
  "pique",
  "pitch",
  "pithy",
  "pivot",
  "pixel",
  "pixie",
  "pizza",
  "place",
  "plaid",
  "plain",
  "plait",
  "plane",
  "plank",
  "plant",
  "plate",
  "plaza",
  "plead",
  "pleat",
  "plied",
  "plier",
  "pluck",
  "plumb",
  "plume",
  "plump",
  "plunk",
  "plush",
  "poesy",
  "point",
  "poise",
  "poker",
  "polar",
  "polka",
  "polyp",
  "pooch",
  "poppy",
  "porch",
  "poser",
  "posit",
  "posse",
  "pouch",
  "pound",
  "pouty",
  "power",
  "prank",
  "prawn",
  "preen",
  "press",
  "price",
  "prick",
  "pride",
  "pried",
  "prime",
  "primo",
  "print",
  "prior",
  "prism",
  "privy",
  "prize",
  "probe",
  "prone",
  "prong",
  "proof",
  "prose",
  "proud",
  "prove",
  "prowl",
  "proxy",
  "prude",
  "prune",
  "psalm",
  "pubic",
  "pudgy",
  "puffy",
  "pulpy",
  "pulse",
  "punch",
  "pupil",
  "puppy",
  "puree",
  "purer",
  "purge",
  "purse",
  "pushy",
  "putty",
  "pygmy",
  "quack",
  "quail",
  "quake",
  "qualm",
  "quark",
  "quart",
  "quash",
  "quasi",
  "queen",
  "queer",
  "quell",
  "query",
  "quest",
  "queue",
  "quick",
  "quiet",
  "quill",
  "quilt",
  "quirk",
  "quite",
  "quota",
  "quote",
  "quoth",
  "rabbi",
  "rabid",
  "racer",
  "radar",
  "radii",
  "radio",
  "rainy",
  "raise",
  "rajah",
  "rally",
  "ralph",
  "ramen",
  "ranch",
  "randy",
  "range",
  "rapid",
  "rarer",
  "raspy",
  "ratio",
  "ratty",
  "raven",
  "rayon",
  "razor",
  "reach",
  "react",
  "ready",
  "realm",
  "rearm",
  "rebar",
  "rebel",
  "rebus",
  "rebut",
  "recap",
  "recur",
  "recut",
  "reedy",
  "refer",
  "refit",
  "regal",
  "rehab",
  "reign",
  "relax",
  "relay",
  "relic",
  "remit",
  "renal",
  "renew",
  "repay",
  "repel",
  "reply",
  "rerun",
  "reset",
  "resin",
  "retch",
  "retro",
  "retry",
  "reuse",
  "revel",
  "revue",
  "rhino",
  "rhyme",
  "rider",
  "ridge",
  "rifle",
  "right",
  "rigid",
  "rigor",
  "rinse",
  "ripen",
  "riper",
  "risen",
  "riser",
  "risky",
  "rival",
  "river",
  "rivet",
  "roach",
  "roast",
  "robin",
  "robot",
  "rocky",
  "rodeo",
  "roger",
  "rogue",
  "roomy",
  "roost",
  "rotor",
  "rouge",
  "rough",
  "round",
  "rouse",
  "route",
  "rover",
  "rowdy",
  "rower",
  "royal",
  "ruddy",
  "ruder",
  "rugby",
  "ruler",
  "rumba",
  "rumor",
  "rupee",
  "rural",
  "rusty",
  "sadly",
  "safer",
  "saint",
  "salad",
  "sally",
  "salon",
  "salsa",
  "salty",
  "salve",
  "salvo",
  "sandy",
  "saner",
  "sappy",
  "sassy",
  "satin",
  "satyr",
  "sauce",
  "saucy",
  "sauna",
  "saute",
  "savor",
  "savoy",
  "savvy",
  "scald",
  "scale",
  "scalp",
  "scaly",
  "scamp",
  "scant",
  "scare",
  "scarf",
  "scary",
  "scene",
  "scent",
  "scion",
  "scoff",
  "scold",
  "scone",
  "scoop",
  "scope",
  "score",
  "scorn",
  "scour",
  "scout",
  "scowl",
  "scram",
  "scrap",
  "scree",
  "screw",
  "scrub",
  "scrum",
  "scuba",
  "sedan",
  "seedy",
  "segue",
  "seize",
  "semen",
  "sense",
  "sepia",
  "serif",
  "serum",
  "serve",
  "setup",
  "seven",
  "sever",
  "sewer",
  "shack",
  "shade",
  "shady",
  "shaft",
  "shake",
  "shaky",
  "shale",
  "shall",
  "shalt",
  "shame",
  "shank",
  "shape",
  "shard",
  "share",
  "shark",
  "sharp",
  "shave",
  "shawl",
  "shear",
  "sheen",
  "sheep",
  "sheer",
  "sheet",
  "sheik",
  "shelf",
  "shell",
  "shied",
  "shift",
  "shine",
  "shiny",
  "shire",
  "shirk",
  "shirt",
  "shoal",
  "shock",
  "shone",
  "shook",
  "shoot",
  "shore",
  "shorn",
  "short",
  "shout",
  "shove",
  "shown",
  "showy",
  "shrew",
  "shrub",
  "shrug",
  "shuck",
  "shunt",
  "shush",
  "shyly",
  "siege",
  "sieve",
  "sight",
  "sigma",
  "silky",
  "silly",
  "since",
  "sinew",
  "singe",
  "siren",
  "sissy",
  "sixth",
  "sixty",
  "skate",
  "skier",
  "skiff",
  "skill",
  "skimp",
  "skirt",
  "skulk",
  "skull",
  "skunk",
  "slack",
  "slain",
  "slang",
  "slant",
  "slash",
  "slate",
  "sleek",
  "sleep",
  "sleet",
  "slept",
  "slice",
  "slick",
  "slide",
  "slime",
  "slimy",
  "sling",
  "slink",
  "sloop",
  "slope",
  "slosh",
  "sloth",
  "slump",
  "slung",
  "slunk",
  "slurp",
  "slush",
  "slyly",
  "smack",
  "small",
  "smart",
  "smash",
  "smear",
  "smell",
  "smelt",
  "smile",
  "smirk",
  "smite",
  "smith",
  "smock",
  "smoke",
  "smoky",
  "smote",
  "snack",
  "snail",
  "snake",
  "snaky",
  "snare",
  "snarl",
  "sneak",
  "sneer",
  "snide",
  "sniff",
  "snipe",
  "snoop",
  "snore",
  "snort",
  "snout",
  "snowy",
  "snuck",
  "snuff",
  "soapy",
  "sober",
  "soggy",
  "solar",
  "solid",
  "solve",
  "sonar",
  "sonic",
  "sooth",
  "sooty",
  "sorry",
  "sound",
  "south",
  "sower",
  "space",
  "spade",
  "spank",
  "spare",
  "spark",
  "spasm",
  "spawn",
  "speak",
  "spear",
  "speck",
  "speed",
  "spell",
  "spelt",
  "spend",
  "spent",
  "sperm",
  "spice",
  "spicy",
  "spied",
  "spiel",
  "spike",
  "spiky",
  "spill",
  "spilt",
  "spine",
  "spiny",
  "spire",
  "spite",
  "splat",
  "split",
  "spoil",
  "spoke",
  "spoof",
  "spook",
  "spool",
  "spoon",
  "spore",
  "sport",
  "spout",
  "spray",
  "spree",
  "sprig",
  "spunk",
  "spurn",
  "spurt",
  "squad",
  "squat",
  "squib",
  "stack",
  "staff",
  "stage",
  "staid",
  "stain",
  "stair",
  "stake",
  "stale",
  "stalk",
  "stall",
  "stamp",
  "stand",
  "stank",
  "stare",
  "stark",
  "start",
  "stash",
  "state",
  "stave",
  "stead",
  "steak",
  "steal",
  "steam",
  "steed",
  "steel",
  "steep",
  "steer",
  "stein",
  "stern",
  "stick",
  "stiff",
  "still",
  "stilt",
  "sting",
  "stink",
  "stint",
  "stock",
  "stoic",
  "stoke",
  "stole",
  "stomp",
  "stone",
  "stony",
  "stood",
  "stool",
  "stoop",
  "store",
  "stork",
  "storm",
  "story",
  "stout",
  "stove",
  "strap",
  "straw",
  "stray",
  "strip",
  "strut",
  "stuck",
  "study",
  "stuff",
  "stump",
  "stung",
  "stunk",
  "stunt",
  "style",
  "suave",
  "sugar",
  "suing",
  "suite",
  "sulky",
  "sully",
  "sumac",
  "sunny",
  "super",
  "surer",
  "surge",
  "surly",
  "sushi",
  "swami",
  "swamp",
  "swarm",
  "swash",
  "swath",
  "swear",
  "sweat",
  "sweep",
  "sweet",
  "swell",
  "swept",
  "swift",
  "swill",
  "swine",
  "swing",
  "swirl",
  "swish",
  "swoon",
  "swoop",
  "sword",
  "swore",
  "sworn",
  "swung",
  "synod",
  "syrup",
  "tabby",
  "table",
  "taboo",
  "tacit",
  "tacky",
  "taffy",
  "taint",
  "taken",
  "taker",
  "tally",
  "talon",
  "tamer",
  "tango",
  "tangy",
  "taper",
  "tapir",
  "tardy",
  "tarot",
  "taste",
  "tasty",
  "tatty",
  "taunt",
  "tawny",
  "teach",
  "teary",
  "tease",
  "teddy",
  "teeth",
  "tempo",
  "tenet",
  "tenor",
  "tense",
  "tenth",
  "tepee",
  "tepid",
  "terra",
  "terse",
  "testy",
  "thank",
  "theft",
  "their",
  "theme",
  "there",
  "these",
  "theta",
  "thick",
  "thief",
  "thigh",
  "thing",
  "think",
  "third",
  "thong",
  "thorn",
  "those",
  "three",
  "threw",
  "throb",
  "throw",
  "thrum",
  "thumb",
  "thump",
  "thyme",
  "tiara",
  "tibia",
  "tidal",
  "tiger",
  "tight",
  "tilde",
  "timer",
  "timid",
  "tipsy",
  "titan",
  "tithe",
  "title",
  "toast",
  "today",
  "toddy",
  "token",
  "tonal",
  "tonga",
  "tonic",
  "tooth",
  "topaz",
  "topic",
  "torch",
  "torso",
  "torus",
  "total",
  "totem",
  "touch",
  "tough",
  "towel",
  "tower",
  "toxic",
  "toxin",
  "trace",
  "track",
  "tract",
  "trade",
  "trail",
  "train",
  "trait",
  "tramp",
  "trash",
  "trawl",
  "tread",
  "treat",
  "trend",
  "triad",
  "trial",
  "tribe",
  "trice",
  "trick",
  "tried",
  "tripe",
  "trite",
  "troll",
  "troop",
  "trope",
  "trout",
  "trove",
  "truce",
  "truck",
  "truer",
  "truly",
  "trump",
  "trunk",
  "truss",
  "trust",
  "truth",
  "tryst",
  "tubal",
  "tuber",
  "tulip",
  "tulle",
  "tumor",
  "tunic",
  "turbo",
  "tutor",
  "twang",
  "tweak",
  "tweed",
  "tweet",
  "twice",
  "twine",
  "twirl",
  "twist",
  "twixt",
  "tying",
  "udder",
  "ulcer",
  "ultra",
  "umbra",
  "uncle",
  "uncut",
  "under",
  "undid",
  "undue",
  "unfed",
  "unfit",
  "unify",
  "union",
  "unite",
  "unity",
  "unlit",
  "unmet",
  "unset",
  "untie",
  "until",
  "unwed",
  "unzip",
  "upper",
  "upset",
  "urban",
  "urine",
  "usage",
  "usher",
  "using",
  "usual",
  "usurp",
  "utile",
  "utter",
  "vague",
  "valet",
  "valid",
  "valor",
  "value",
  "valve",
  "vapid",
  "vapor",
  "vault",
  "vaunt",
  "vegan",
  "venom",
  "venue",
  "verge",
  "verse",
  "verso",
  "verve",
  "vicar",
  "video",
  "vigil",
  "vigor",
  "villa",
  "vinyl",
  "viola",
  "viper",
  "viral",
  "virus",
  "visit",
  "visor",
  "vista",
  "vital",
  "vivid",
  "vixen",
  "vocal",
  "vodka",
  "vogue",
  "voice",
  "voila",
  "vomit",
  "voter",
  "vouch",
  "vowel",
  "vying",
  "wacky",
  "wafer",
  "wager",
  "wagon",
  "waist",
  "waive",
  "waltz",
  "warty",
  "waste",
  "watch",
  "water",
  "waver",
  "waxen",
  "weary",
  "weave",
  "wedge",
  "weedy",
  "weigh",
  "weird",
  "welch",
  "welsh",
  "whack",
  "whale",
  "wharf",
  "wheat",
  "wheel",
  "whelp",
  "where",
  "which",
  "whiff",
  "while",
  "whine",
  "whiny",
  "whirl",
  "whisk",
  "white",
  "whole",
  "whoop",
  "whose",
  "widen",
  "wider",
  "widow",
  "width",
  "wield",
  "wight",
  "willy",
  "wimpy",
  "wince",
  "winch",
  "windy",
  "wiser",
  "wispy",
  "witch",
  "witty",
  "woken",
  "woman",
  "women",
  "woody",
  "wooer",
  "wooly",
  "woozy",
  "wordy",
  "world",
  "worry",
  "worse",
  "worst",
  "worth",
  "would",
  "wound",
  "woven",
  "wrack",
  "wrath",
  "wreak",
  "wreck",
  "wrest",
  "wring",
  "wrist",
  "write",
  "wrong",
  "wrote",
  "wrung",
  "wryly",
  "yacht",
  "yearn",
  "yeast",
  "yield",
  "young",
  "youth",
  "zebra",
  "zesty",
  "zonal"
    ],
    general_doble: [
        "ababa","abaca","abaco","abada","abadi","abaja","abaje","abajo","abala","abale","abalo","abana","abane","abano","abasi","abata","abate","abati","abato","aba\xf1a","aba\xf1e","aba\xf1o","abece","abeja","abete","abeto","abiar","abias","abina","abine","abino","abiso","abita","abite","abito","aboba","abobe","abobo","aboca","aboco","abofa","abofe","abofo","aboga","abogo","aboli","abona","abone","abono","aboya","aboye","aboyo","abozo","abran","abras","abren","abres","abria","abrid","abril","abrio","abrir","abris","absit","abubo","abuce","abuje","abura","abure","aburo","abusa","abuse","abuso","abuza","abuzo","acaba","acabe","acabo","acama","acame","acamo","acana","acara","acare","acaro","acaso","acata","acate","acato","acebo","acece","aceda","acede","acedo","acema","acepa","acepe","acepo","acera","acere","acero","aceta","aceto","aceza","acezo","ace\xf1a","achin","achis","acial","aciar","acida","acido","acije","acilo","acimo","acion","acles","aclla","acmes","acnes","acoca","acoco","acoda","acode","acodo","acoge","acogi","acoja","acojo","acola","acole","acolo","acopa","acope","acopo","acora","acore","acoro","acosa","acose","acoso","acota","acote","acoto","acres","acroe","acroy","actas","actea","actor","actos","actua","actue","actuo","acuda","acude","acudi","acudo","acuea","acueo","acula","acule","aculo","acuna","acune","acuno","acure","acusa","acuse","acuso","acuta","acuti","acuto","acuyo","acu\xf1a","acu\xf1e","acu\xf1o","adala","adama","adame","adamo","adaza","adema","ademe","ademo","adiad","adian","adiar","adias","adien","adies","adios","adiva","adive","adoba","adobe","adobo","adora","adore","adoro","adosa","adose","adoso","adrad","adral","adran","adrar","adras","adren","adres","aduar","aduce","aduci","adufe","aduja","aduje","adujo","adula","adule","adulo","aduna","adune","aduno","adura","adure","aduri","aduro","adven","aedas","aedos","aerea","aereo","aetas","afaca","aface","afaga","afago","afama","afame","afamo","afana","afane","afano","afara","afare","afata","afate","afato","afead","afean","afear","afeas","afeen","afees","afiar","afice","afija","afijo","afila","afile","afilo","afina","afine","afino","afizo","aflui","afoca","afoco","afofa","afofe","afofo","afoga","afogo","afona","afono","afora","afore","aforo","afosa","afose","afoso","aftas","afufa","afufe","afufo","afuma","afume","afumo","agace","agami","agana","agane","agano","agape","agata","agave","agios","agita","agite","agito","agnus","agola","agole","agolo","agora","agore","agoro","agota","agote","agoto","agras","agraz","agres","agria","agrie","agrio","agror","agros","aguad","aguai","aguan","aguar","aguas","aguay","aguce","aguda","agudo","aguen","agues","aguin","aguio","aguja","aguti","aguza","aguzo","ahaja","ahaje","ahajo","ahija","ahije","ahijo","ahila","ahile","ahilo","ahina","ahita","ahite","ahito","ahoga","ahogo","ahora","ahoya","ahoye","ahoyo","ahuma","ahume","ahumo","ahusa","ahuse","ahuso","aillo","aillu","ainas","airad","airan","airar","airas","airea","airee","airen","aireo","aires","airon","aisas","aisla","aisle","aislo","aites","ajaba","ajada","ajado","ajais","ajaja","ajara","ajare","ajase","ajead","ajean","ajear","ajeas","ajebe","ajeen","ajees","ajeis","ajena","ajeno","ajeos","ajera","ajero","ajete","ajice","ajies","ajipa","ajiza","ajizo","ajobo","ajora","ajore","ajoro","ajota","ajote","ajoto","ajuar","ajuma","ajume","ajumo","ajuna","ajuno","alaba","alabe","alabo","alaco","alada","alado","alafa","alaga","alago","alaju","alala","alalo","alama","alamo","alana","alano","alaui","alazo","albar","albas","albea","albee","albeo","albin","albor","albos","album","albur","alcas","alcea","alcen","alces","alcor","aldea","alead","alean","alear","aleas","alece","aleda","aleen","alees","alefs","alega","alego","aleja","aleje","alejo","alela","alele","aleli","alelo","alema","alero","aleta","aleto","aleve","aleya","alezo","alfad","alfan","alfar","alfas","alfen","alfes","alfil","alfiz","alfoz","algar","algas","algol","algos","algun","alhoz","aliad","alian","aliar","alias","alica","alien","alier","alies","alifa","aliga","aligo","alija","alije","alijo","alimo","alims","alioj","alisa","alise","aliso","ali\xf1a","ali\xf1e","ali\xf1o","aljez","aljor","allen","almas","almea","almez","almos","almud","alnas","alnos","aloba","alobe","alobo","aloca","aloco","aloes","aloja","aloje","alojo","alola","alole","alolo","aloma","alome","alomo","alona","alora","alosa","alota","alote","aloto","aloya","alpes","altar","altas","altea","altee","alteo","altor","altos","aluas","aluce","aluda","alude","aludi","aludo","alula","aluna","alune","aluno","aluza","aluzo","alveo","alzad","alzan","alzar","alzas","alzos","amaba","amada","amado","amaga","amago","amais","amala","amale","amalo","amana","amane","amano","amara","amare","amaro","amasa","amase","amaso","amata","amate","amato","ama\xf1a","ama\xf1e","ama\xf1o","ambar","ambas","ambla","amble","amblo","ambon","ambos","ameba","ameis","amela","amele","amelo","amena","ameno","ameos","amera","amere","amero","amias","amiba","amibo","amida","amiga","amigo","amina","amine","amino","amiri","amito","amola","amole","amolo","amomo","amona","amone","amono","amove","amovi","ampay","ampla","amplo","ampon","ampos","ampra","ampre","ampro","amuga","amugo","amula","amule","amulo","amura","amure","amuro","amuso","anabi","anaco","anade","anafe","anamu","anana","anata","ancas","ancha","anche","ancho","ancla","ancle","anclo","ancon","ancua","andad","andan","andar","andas","andel","anden","andes","andon","anead","anean","anear","aneas","aneen","anees","anega","anego","aneja","aneje","anejo","aneto","anexa","anexe","anexo","angel","angla","anglo","angor","angra","angus","anida","anide","anido","anima","anime","animo","anion","anisa","anise","aniso","anito","ani\xf1a","ani\xf1e","ani\xf1o","anjeo","anoas","anodo","anola","anole","anolo","anona","anota","anote","anoto","ansar","ansas","ansia","ansie","ansio","antas","antes","antia","antis","antro","anual","anuas","anuda","anude","anudo","anula","anule","anulo","anuos","anura","anuro","aocar","aojad","aojan","aojar","aojas","aojen","aojes","aojos","aonia","aonio","aorta","aovad","aovan","aovar","aovas","aoven","aoves","apaga","apago","apale","apara","apare","aparo","apa\xf1a","apa\xf1e","apa\xf1o","apead","apean","apear","apeas","apeen","apees","apega","apego","apela","apele","apelo","apena","apene","apeno","apeos","apera","apere","apero","apese","apice","apila","apile","apilo","apios","apipa","apipe","apipo","apiri","apita","apite","apito","api\xf1a","api\xf1e","api\xf1o","apnea","apoca","apoce","apoco","apoda","apode","apodo","apola","apole","apolo","apone","aposa","apose","aposo","apoya","apoye","apoyo","apoza","apozo","apres","aproa","aproe","aproo","aptar","aptas","aptos","apuna","apune","apuno","apura","apure","apuro","apuse","apuso","apu\xf1a","apu\xf1e","apu\xf1o","aquea","aquel","aqueo","araba","arabe","arabi","arabo","arada","arado","arais","arana","arara","arare","arasa","arase","araza","ara\xf1a","ara\xf1e","ara\xf1o","arbol","arbor","arcad","arcan","arcar","arcas","arcea","arcen","arces","archa","archi","arcon","arcos","ardan","ardas","ardea","arded","arden","arder","ardes","ardia","ardid","ardil","ardio","ardor","ardua","arduo","areas","areca","areis","arela","arele","arelo","arena","arene","areno","arepa","arete","arfad","arfan","arfar","arfas","arfen","arfes","arfil","argan","argel","argen","argon","argos","argot","argue","argui","arias","arica","arico","arida","arido","aries","arija","arije","arijo","arilo","arios","arlad","arlan","arlar","arlas","arlen","arles","arlos","armad","arman","armar","armas","armen","armes","armon","armos","arnas","arnes","aroca","aroma","arome","aromo","arpad","arpan","arpar","arpas","arpen","arpeo","arpes","arpia","arpon","arque","arras","arraz","arrea","arree","arreo","arres","arria","arrie","arrio","arroz","arrua","arrue","arrui","arruo","artal","artas","artes","artos","arula","arupo","aru\xf1a","aru\xf1e","aru\xf1o","arzon","asaba","asaca","asaco","asada","asado","asais","asara","asare","asaro","asase","ascar","ascas","ascia","ascio","ascos","ascua","asead","asean","asear","aseas","aseda","asede","asedo","aseen","asees","aseis","asela","asele","aselo","aseos","asesa","asese","aseso","asgan","asgas","asian","asias","asica","asico","asida","asido","asila","asile","asilo","asina","asira","asire","asmar","asmas","asnal","asnas","asnos","asola","asole","asolo","asoma","asome","asomo","asona","asone","asono","aspad","aspan","aspar","aspas","aspea","aspee","aspen","aspeo","aspes","aspic","aspid","aspro","astas","aster","astil","astro","astur","asuma","asume","asumi","asumo","asura","asure","asuro","asuso","ataba","atabe","ataca","ataco","atada","atado","atais","ataja","ataje","atajo","atapa","atape","atapo","atara","atare","atase","ataud","ata\xf1a","ata\xf1e","ata\xf1o","atear","ateas","atece","ateis","ateje","ateos","ateri","atesa","atese","ateso","ateta","atete","ateto","ateza","atezo","atiba","atibe","atibo","atica","atice","atico","atina","atine","atino","atipa","atipe","atipo","atiza","atizo","atlas","atoad","atoan","atoar","atoas","atoba","atobe","atobo","atoen","atoes","atoja","atoje","atojo","atole","atomo","atona","atono","atora","atore","atoro","atrae","atras","atril","atrio","atroz","atufa","atufe","atufo","atura","ature","aturo","atusa","atuse","atuso","atuve","atuvo","aucas","audaz","audio","auges","augur","aulas","aulla","aulle","aullo","aunad","aunan","aunar","aunas","aunen","aunes","aupad","aupan","aupar","aupas","aupen","aupes","auras","aurea","aureo","ausol","autan","autor","autos","avada","avade","avado","avaha","avahe","avaho","avala","avale","avalo","avara","avaro","avati","avece","avena","avene","aveni","aveno","aveza","avezo","aviad","avian","aviar","avias","avica","avida","avido","avien","avies","avine","avino","avion","avios","avisa","avise","aviso","aviva","avive","avivo","avoca","avoco","avugo","axial","axila","ayaco","ayate","ayead","ayean","ayear","ayeas","ayeen","ayees","ayora","ayote","ayuas","ayuda","ayude","ayudo","ayuga","ayuna","ayune","ayuno","ayuso","azada","azaga","azago","azala","azara","azare","azaro","azcon","azeri","azimo","azoad","azoan","azoar","azoas","azoca","azoco","azoen","azoes","azoga","azogo","azola","azole","azolo","azora","azore","azoro","azota","azote","azoto","aztor","azuas","azuce","azuda","azula","azule","azulo","azuts","azuza","azuzo","a\xf1ada","a\xf1ade","a\xf1adi","a\xf1ado","a\xf1eda","a\xf1ede","a\xf1edi","a\xf1edo","a\xf1eja","a\xf1eje","a\xf1ejo","a\xf1era","a\xf1ero","a\xf1ida","a\xf1ide","a\xf1idi","a\xf1ido","a\xf1ila","a\xf1ile","a\xf1ilo","a\xf1ina","a\xf1ino","a\xf1oja","a\xf1ojo","a\xf1ora","a\xf1ore","a\xf1oro","a\xf1osa","a\xf1oso","a\xf1uda","a\xf1ude","a\xf1udo","babas","babea","babee","babel","babeo","babis","bable","babor","bacan","bacas","bache","bacia","bacin","bacon","badal","badan","badas","badea","baden","badil","bafle","bagad","bagan","bagar","bagas","bagos","bagre","bague","bahai","bahia","baida","baifa","baifo","baila","baile","bailo","bajad","bajan","bajar","bajas","bajea","bajee","bajel","bajen","bajeo","bajes","bajez","bajia","bajin","bajio","bajon","bajos","balad","balaj","balan","balar","balas","balay","balda","balde","baldo","balea","balee","balen","baleo","bales","balin","balon","balos","balsa","balso","balta","balto","bamba","bambu","banal","banas","banca","bance","banco","banda","bando","banir","banjo","bantu","banyo","banzo","baque","barba","barbe","barbo","barca","barco","barda","barde","bardo","bares","baria","baril","bario","baris","barns","baron","baros","barra","barre","barri","barro","barza","basad","basal","basan","basar","basas","basca","basen","bases","basis","basna","basta","baste","basto","batan","batas","batea","batee","batel","baten","bateo","bates","batey","batia","batid","batin","batio","batir","batis","baton","batos","batua","baula","baure","bausa","bauza","bayal","bayas","bayon","bayos","bayua","bayus","bazar","bazas","bazos","ba\xf1ad","ba\xf1an","ba\xf1ar","ba\xf1as","ba\xf1en","ba\xf1es","ba\xf1il","ba\xf1os","beata","beato","beban","bebas","bebed","beben","beber","bebes","bebia","bebio","becad","becan","becar","becas","bedel","befad","befan","befar","befas","befen","befes","befos","befre","begum","beige","bejin","belda","belde","beldo","belen","beles","belez","belfa","belfo","belga","belio","bella","bello","belua","bemba","bembe","bembo","bemol","benes","beoda","beodo","beori","beque","berbi","berma","beron","berra","berre","berro","berta","berza","besad","besan","besar","besas","besen","beses","besos","betas","betel","betun","beuda","beudo","beyes","bezar","bezon","bezos","biaza","bibis","bical","bicha","biche","bicho","bicis","bicos","bides","bidon","biela","bifaz","bifes","bigas","bijao","bijas","bijol","bilao","biles","bilis","billa","bilma","bilme","bilmo","bimba","binad","binan","binar","binas","binea","binee","binen","bineo","bines","bingo","binza","biota","biras","birla","birle","birli","birlo","biros","bisad","bisan","bisar","bisas","bisel","bisen","bises","bisos","biste","bitad","bitan","bitar","bitas","biten","biter","bites","bitor","bizas","bizca","bizco","bizma","bizme","bizmo","bizna","blaos","blava","blavo","bleda","bledo","bloca","bloco","blocs","blues","blusa","boato","bobas","bobea","bobee","bobeo","bobos","bocal","bocas","bocea","bocee","bocel","boceo","bocha","boche","bocho","bocin","bocio","bocon","bocoy","bodas","bodes","bodon","bofan","bofar","bofas","bofen","bofes","bofia","bofos","bogad","bogan","bogar","bogas","bogue","bohio","boina","boira","boite","bojad","bojan","bojar","bojas","bojea","bojee","bojen","bojeo","bojes","bojos","bolar","bolas","boldo","bolea","bolee","boleo","boles","bolin","bolis","bolla","bolle","bollo","bolon","bolos","bolsa","bolso","bomba","bombe","bombo","bonal","bones","bonga","bongo","bonos","bonzo","boque","boqui","borax","borda","borde","bordo","boreo","boria","borla","borna","borne","borni","boros","borra","borre","borro","borto","bosar","boson","bosta","botad","botan","botar","botas","botea","botee","boten","boteo","botes","botin","boton","botor","botos","boxea","boxee","boxeo","boxer","boxes","boyad","boyal","boyan","boyar","boyas","boyen","boyes","bozal","bozas","bozon","bozos","braca","braco","braga","brama","brame","bramo","brasa","brava","bravo","braza","brazo","bra\xf1a","bread","brean","brear","breas","breca","brece","breco","breen","brees","brega","brego","brete","breva","breve","breza","brezo","bre\xf1a","brial","briba","brice","brida","briol","brios","brisa","brise","briso","briza","brizo","broas","broca","broce","broma","brome","bromo","brota","brote","broto","broza","brozo","bruce","brugo","bruja","bruje","bruji","brujo","bruma","brume","brumo","bruna","bruno","bruta","bruto","bruts","bruza","bruzo","bru\xf1a","bru\xf1e","bru\xf1i","bru\xf1o","buaro","bubas","bubis","bubon","bucal","bucea","bucee","bucen","buceo","buces","buche","bucio","bucle","bucos","budas","budin","buega","buena","bueno","buera","bufad","bufan","bufar","bufas","bufen","bufeo","bufes","bufet","bufia","bufon","bufos","bugle","buhio","buhos","buida","buido","bujeo","bujes","bujia","bujos","bular","bulas","bulbo","bulda","bules","bulin","bulis","bulla","bulle","bulli","bullo","bulon","bulos","bulto","bunas","bunio","buque","buras","burda","burdo","burel","bureo","burga","burgo","buril","burio","buris","burla","burle","burlo","buros","burra","burro","busca","busco","buses","busto","buten","butia","buyos","buzad","buzan","buzar","buzas","buzon","buzos","cabal","cabas","cabed","caben","caber","cabes","cabia","cabio","cable","cabos","cabra","cabre","cabro","cacan","cacao","cacas","cacea","cacee","cacen","caceo","caces","cacha","cache","cacho","cachu","cacle","cacos","cacto","cacuy","cadas","cadis","cados","caeis","caena","caera","caere","cafes","cafiz","cafre","cagad","cagan","cagar","cagas","cagon","cague","cahiz","caian","caias","caico","caida","caido","caies","caiga","caigo","caima","caire","caite","cajas","cajel","cajin","cajis","cajon","cajos","calad","calan","calao","calar","calas","calca","calce","calco","calda","caldo","caled","calen","caler","cales","calia","calio","calis","caliz","calla","calle","callo","calma","calme","calmo","calon","calor","calos","calta","calva","calve","calvo","calza","calzo","camal","camao","camas","camba","cambe","cambo","camio","camon","campa","campe","campo","canal","canas","canda","cande","candi","cando","canea","canee","caneo","canes","caney","canez","canga","cango","cania","canil","canje","canoa","canon","canos","cansa","canse","canso","canta","cante","canto","cantu","caoba","caobo","capad","capan","capar","capas","capaz","capea","capee","capel","capen","capeo","capes","capia","capin","capio","capis","capon","capos","cappa","capta","capte","capto","capuz","caqui","carao","caras","carau","caray","carba","carca","carda","carde","cardo","carea","caree","carel","careo","cares","carey","carga","cargo","caria","carie","cario","caris","cariz","carla","carlo","carme","carne","caron","caros","carpa","carpe","carpi","carpo","carra","carro","carta","carvi","casad","casal","casan","casar","casas","casca","casco","casea","casen","caseo","cases","casia","casis","cason","casos","caspa","casta","casto","catad","catan","catar","catas","catea","catee","caten","cateo","cates","catey","catin","caton","catos","catre","cauba","cauca","cauce","cauda","cauje","caula","cauno","cauri","cauro","causa","cause","causo","cauta","cauto","cauza","cavad","cavan","cavar","cavas","cavea","caven","caves","cavia","cavio","cavis","cavon","cavos","cayan","cayas","cayos","cazad","cazan","cazar","cazas","cazon","cazos","cazuz","ca\xf1ad","ca\xf1al","ca\xf1an","ca\xf1ar","ca\xf1as","ca\xf1ea","ca\xf1ee","ca\xf1en","ca\xf1eo","ca\xf1es","ca\xf1is","ca\xf1on","ca\xf1os","ceaja","ceajo","cebad","ceban","cebar","cebas","ceben","cebes","cebil","cebon","cebos","cebra","cebro","cebti","cebus","cecal","cecas","cecea","cecee","ceceo","cedan","cedas","ceded","ceden","ceder","cedes","cedia","cedio","cedro","cefea","cefee","cefeo","cefos","cegad","cegar","cegas","cegua","cegue","ceiba","ceibo","cejad","cejan","cejar","cejas","cejen","cejes","cejos","celad","celan","celar","celas","celda","celen","celes","celfo","celia","cella","cello","celos","celta","cemas","cembo","cenad","cenal","cenan","cenar","cenas","cenca","cenco","cenen","cenes","cenia","cenis","cenit","censa","cense","censo","cents","cepas","cepos","cepti","cequi","ceras","cerca","cerco","cerda","cerdo","cerea","cereo","cerio","cerna","cerne","cerni","cerno","ceron","ceros","cerpa","cerra","cerre","cerro","cesad","cesan","cesar","cesas","cesen","ceses","cesio","cesta","cesto","cetil","cetis","cetme","cetra","cetre","cetro","ceuti","ce\xf1ad","ce\xf1an","ce\xf1ar","ce\xf1as","ce\xf1en","ce\xf1es","ce\xf1ia","ce\xf1id","ce\xf1ir","ce\xf1is","ce\xf1os","chaca","chace","chaco","chafa","chafe","chafo","chais","chaja","chala","chale","chalo","chama","chame","chamo","chana","chane","chano","chapa","chape","chapo","chata","chato","chaul","chauz","chava","chave","chavo","chaya","chaye","chayo","chaza","chazo","checa","checo","chefs","cheje","chela","chele","cheli","chelo","chepa","chepe","chepo","chera","chero","chesa","cheso","cheta","cheto","chiad","chian","chiar","chias","chica","chico","chics","chida","chido","chien","chies","chifa","chiis","chile","chima","chime","chimo","chimu","china","chine","chino","chipa","chipe","chips","chira","chiri","chisa","chist","chita","chite","chito","chiva","chive","chivo","chiza","choba","choca","choco","chofe","chola","cholo","chona","chono","chopa","chope","chopo","chora","chore","chori","choro","chota","chote","choto","chova","choya","choye","choyo","choza","chozo","chuas","chuca","chuce","chuco","chufa","chufe","chufo","chula","chule","chulo","chuna","chupa","chupe","chupo","chura","churo","churu","chuta","chute","chuto","chuts","chuva","chuya","chuyo","chuza","chuzo","chu\xf1a","chu\xf1o","ciaba","ciado","ciais","ciani","ciara","ciare","ciase","ciato","cibal","cibis","cicas","cicca","cicla","cicle","ciclo","cides","cidra","cidro","cieca","ciega","ciego","cieis","cielo","ciemo","cieno","cifra","cifre","cifro","cigua","cijas","cilio","cilla","cimar","cimas","cimba","cimia","cimpa","cinas","cinca","cinco","cincs","cines","cinia","cinta","cinte","cinto","cipes","cipos","circa","circe","circo","cirio","cirro","cisca","cisco","cisma","cisme","cismo","cisne","cista","citad","citan","citar","citas","citen","cites","citra","civil","ci\xf1an","ci\xf1as","ci\xf1en","ci\xf1es","claco","clacs","clama","clame","clamo","clapa","clara","claro","clase","clava","clave","clavo","clema","clero","clica","clics","clima","clips","clisa","clise","cliso","cloca","cloco","clona","clone","clono","clora","clore","cloro","clota","clube","clubs","coana","coati","cobas","cobea","cobez","cobil","cobla","cobos","cobra","cobre","cobro","cocad","cocal","cocan","cocar","cocas","cocea","coced","cocee","coceo","cocer","coces","cocha","coche","cochi","cocho","cocia","cocio","cocol","cocos","cocui","cocuy","codal","codas","codea","codee","codeo","codez","codin","codon","codos","coeva","coevo","cofan","cofas","cofia","cofin","cofre","coged","cogen","coger","coges","cogia","cogio","cogon","coima","coime","coine","coipo","coita","coite","coito","cojal","cojan","cojas","cojea","cojee","cojeo","cojin","cojon","cojos","colad","colan","colar","colas","colea","colee","colen","coleo","coles","colga","colgo","colin","colla","colma","colme","colmo","colon","color","colos","colpa","colpe","colza","comal","coman","comas","comba","combe","combo","comed","comen","comer","comes","comia","comic","comio","comis","comta","comto","comun","conca","conde","conga","congo","conos","conta","conte","conto","coona","copad","copal","copan","copar","copas","copea","copec","copee","copen","copeo","copes","copey","copia","copie","copin","copio","copla","copon","copos","copra","copta","copto","coque","coqui","corad","coral","coran","corar","coras","corbe","corca","corco","corda","corea","coree","coren","coreo","cores","corio","coris","corla","corle","corlo","corma","corno","coros","corpa","corps","corra","corre","corri","corro","corsa","corse","corso","corta","corte","corto","corua","corva","corve","corvo","corza","corzo","cosan","cosas","cosca","cosco","cosed","cosen","coser","coses","cosia","cosio","cosos","cospe","costa","coste","costo","cotad","cotan","cotar","cotas","coten","cotes","cotin","cotis","coton","cotos","cotua","covad","covan","covar","covas","coven","coves","coxal","coxas","coxis","coyan","coyas","coyes","coyol","co\xf1ac","co\xf1as","co\xf1ea","co\xf1ee","co\xf1eo","co\xf1on","co\xf1os","cracs","crasa","craso","craza","cread","crean","crear","creas","crece","creci","credo","creed","creen","creer","crees","creia","crema","creme","cremo","crepe","creps","cresa","creso","creta","creyo","criad","crian","criar","crias","criba","cribe","cribo","crica","crics","crida","crien","cries","crina","crine","crino","crios","croad","croan","croar","croas","croco","croen","croes","croma","crome","cromo","crono","cross","croto","croza","cruce","cruda","crudo","cruel","cruja","cruje","cruji","crujo","cruor","crups","cruza","cruzo","cuaba","cuaco","cuada","cuado","cuaja","cuaje","cuajo","cuape","cuasi","cuata","cuate","cuati","cubas","cubil","cubos","cubra","cubre","cubri","cubro","cucad","cucan","cucar","cucas","cucha","cuche","cuchi","cucho","cucos","cucus","cucuy","cueca","cuece","cueco","cuela","cuele","cuelo","cuera","cuero","cuete","cueto","cueva","cueza","cuezo","cuica","cuico","cuida","cuide","cuido","cuija","cuilo","cuina","cuino","cuita","cujas","cujes","cujin","cujis","cujon","cular","culas","culea","culee","culen","culeo","culia","culio","culis","culle","culon","culos","culpa","culpe","culpo","culta","culto","cumas","cumba","cumbe","cumbo","cumel","cumpa","cunad","cunan","cunar","cunas","cunda","cunde","cundi","cundo","cunea","cunee","cunen","cuneo","cunes","cuota","cupes","cuple","cupon","cupos","cuque","curad","cural","curan","curar","curas","curca","curco","curda","curdo","curen","cures","curia","curie","curil","curio","curis","curos","curra","curre","curro","curry","cursa","curse","cursi","curso","curta","curte","curti","curto","curul","curva","curve","curvo","cusan","cusas","cusca","cusco","cuscu","cusen","cuses","cusia","cusid","cusio","cusir","cusis","cusma","cuspa","cusul","cutas","cuter","cutes","cutio","cutir","cutis","cutos","cutra","cutre","cuyas","cuyeo","cuyes","cuyos","cuzas","cuzco","cuzma","cuzos","cuzul","cu\xf1ad","cu\xf1al","cu\xf1an","cu\xf1ar","cu\xf1as","cu\xf1en","cu\xf1es","cu\xf1os","daban","dabas","dable","dacha","dacia","dacio","dadas","dador","dados","dagas","dahir","daifa","dajao","dalas","dalgo","dalia","dalla","dalle","dallo","damas","damil","damos","dance","dandi","dando","danes","dango","danta","dante","danto","danza","danzo","daqui","daran","daras","dardo","dares","darga","daria","datad","datan","datar","datas","datea","datee","daten","dateo","dates","datil","datos","dauco","dauda","dazas","da\xf1ad","da\xf1an","da\xf1ar","da\xf1as","da\xf1en","da\xf1es","da\xf1os","deban","debas","debda","debdo","debed","deben","deber","debes","debia","debil","debio","debla","debos","debut","decae","decai","decia","decid","decir","decis","decor","dedal","dedeo","dedil","dedos","deesa","dejad","dejan","dejar","dejas","dejen","dejes","dejos","delco","deles","delga","delia","delio","della","dello","delta","demas","demos","dende","densa","denso","denta","dente","dento","depon","deque","derbi","desca","desda","desde","desdi","desea","desee","deseo","deses","desga","desoi","desta","deste","desto","desus","detal","deten","deuda","deudo","deven","deyes","dezma","dezme","dezmo","de\xf1ar","diada","diado","diana","dia\xf1o","dicaz","dicen","dices","dicha","dicho","dicta","dicte","dicto","diego","diera","diere","diese","diesi","dieta","diete","dieto","digan","digas","digna","digne","digno","dijes","dilui","diman","dimas","dimen","dimes","dimia","dimid","dimio","dimir","dimis","dimos","dinar","dinas","dines","dinos","diodo","diosa","dioso","dique","diran","diras","diria","disca","disco","dison","dista","diste","disto","ditas","diuca","divan","divas","divos","di\xf1ad","di\xf1an","di\xf1ar","di\xf1as","di\xf1en","di\xf1es","dobla","doble","doblo","docas","doces","docil","docta","docto","dodos","dogal","dogas","dogma","dogos","dogre","dolad","dolar","dolas","doled","doler","doles","dolia","dolio","dolor","dolos","domad","doman","domar","domas","dombo","domen","domes","domos","donad","donan","donar","donas","donde","donen","doneo","dones","dopad","dopan","dopar","dopas","dopen","dopes","dorad","doral","doran","dorar","doras","doren","dores","doria","dorio","dormi","dorna","dorso","dosel","doses","dosis","dotad","dotal","dotan","dotar","dotas","doten","dotes","dotor","do\xf1as","do\xf1ea","do\xf1ee","do\xf1eo","draba","draga","drago","drama","dreas","drena","drene","dreno","drias","drino","driza","droga","drogo","drope","drupa","drusa","druso","dseda","dubas","dubda","dubio","ducal","ducas","duces","ducha","duche","ducho","ducos","ducto","dudad","dudan","dudar","dudas","duden","dudes","duela","duele","duelo","dueto","due\xf1a","due\xf1o","dugos","dujos","dular","dulas","dulce","dulia","duman","dumas","dumen","dumes","dumia","dumid","dumio","dumir","dumis","dunas","dunda","dundo","dupla","duplo","duque","durad","duran","durar","duras","duren","dures","duros","ebano","ebria","ebrio","echad","echan","echar","echas","echen","eches","ecuas","ecuos","edema","edila","edita","edite","edito","edrad","edran","edrar","edras","edren","edres","educa","educe","educi","educo","eduje","edujo","efebo","efeta","efeto","eflui","eforo","egena","egeno","egida","eguar","eiras","ejido","ejion","ejote","elami","elata","elato","elche","elega","elegi","elego","elemi","elepe","eleta","eleto","eleva","eleve","elevo","elfos","elida","elide","elidi","elido","elige","elija","elije","elijo","elite","ellas","elles","ellos","elote","eluda","elude","eludi","eludo","emana","emane","emano","embai","emita","emite","emiti","emito","empos","empra","empre","empro","emues","emula","emule","emulo","enana","enano","encia","eneal","eneas","eneja","eneje","enejo","enema","eneos","enero","enoja","enoje","enojo","enria","enrie","enrio","ensay","enteo","entes","entra","entre","entro","enula","enves","envia","envie","envio","enzas","eolia","eolio","eones","epale","epata","epate","epato","epica","epico","epoca","epoda","epodo","epota","epoto","epoxi","equis","eraba","erada","erado","erais","eraje","erala","erara","erare","erase","erbio","ercer","erebo","ereis","ergio","ergui","erial","erias","erice","erige","erigi","erija","erijo","erina","erios","eriza","erizo","ermar","eroga","erogo","errad","erraj","erran","errar","erras","erren","erres","error","erros","eruta","erute","eruto","escas","escay","escoa","esmui","esnob","espay","espia","espie","espin","espio","esqui","estad","estan","estar","estas","estay","esten","ester","estes","estil","estio","estol","estor","estos","estoy","estro","esula","etano","etapa","etica","etico","etilo","etimo","etnea","etneo","etnia","etola","etolo","etusa","eubea","eubeo","euros","evada","evade","evadi","evado","evita","evite","evito","evoca","evoco","evohe","exida","exige","exigi","exija","exijo","exila","exile","exilo","exima","exime","eximi","eximo","exito","exodo","exora","exore","exoro","expia","expie","expio","expon","extra","exuda","exude","exudo","fabas","fabla","fabos","fabro","facas","facer","faces","facha","fache","facho","facil","facon","facto","fadas","fados","faena","faene","faeno","fagos","fagot","faina","faino","fajad","fajan","fajar","fajas","fajea","fajee","fajen","fajeo","fajes","fajin","fajol","fajon","fajos","falaz","falca","falce","falco","falda","falla","falle","fallo","falos","falsa","false","falso","falta","falte","falto","falua","famas","fanal","fanes","fango","faqui","farad","faras","farda","farde","fardo","faria","fario","farol","faron","faros","farpa","farra","farro","farsa","farte","fases","fasol","fasos","fasta","fasto","fatal","fatas","fator","fatos","fatua","fatuo","fauna","fauno","favor","favos","faxea","faxee","faxeo","faxes","fayas","fa\xf1ad","fa\xf1an","fa\xf1ar","fa\xf1as","fa\xf1en","fa\xf1es","febea","febeo","feble","fecal","feces","fecha","feche","fecho","feeza","fejes","feliz","felon","felpa","felpe","felpo","felus","femad","feman","femar","femas","femen","femes","femur","fenal","fenda","fendi","fenix","fenol","feral","feraz","feria","ferie","ferio","ferir","fermi","feroz","ferra","ferre","ferro","ferry","festa","fetal","fetas","feten","fetor","fetos","fetua","feuca","feuco","feuda","feude","feudo","feura","fiaba","fiaca","fiada","fiado","fiais","fiana","fiara","fiare","fiase","fiats","fibra","ficar","ficen","fices","ficha","fiche","ficho","ficus","fideo","fieis","fiemo","fiera","fiero","fifad","fifan","fifar","fifas","fifen","fifes","fifis","figle","figon","fijad","fijan","fijar","fijas","fijen","fijes","fijon","fijos","filad","filan","filar","filas","filen","files","filfa","filia","filie","filin","filio","filis","fillo","filma","filme","filmo","films","filon","filos","fimos","finad","final","finan","finar","finas","finca","finco","finen","fines","finge","fingi","finia","finid","finio","finir","finis","finja","finjo","finos","finta","finte","finto","fique","firma","firme","firmo","fisan","fisco","fisga","fisgo","fista","fisto","fizad","fizan","fizar","fizas","fizon","fi\xf1es","flaca","flaco","flama","flaon","flash","flato","flava","flavo","fleco","fleja","fleje","flejo","flema","fleme","fleos","fleta","flete","fleto","flexo","flipa","flipe","flipo","floja","flojo","flora","flore","floro","flota","flote","floto","fluia","fluid","fluir","fluis","flujo","fluor","fluya","fluye","fluyo","fobia","focal","focas","focha","focia","focio","focos","fofas","fofos","fogon","foisa","foiso","fojas","folga","folgo","folia","folie","folio","folla","folle","follo","foluz","fomes","fonda","fondo","fones","fonil","fonio","fonje","fonos","foque","foral","foras","forca","force","forja","forje","forjo","forma","forme","formo","forno","foros","forra","forre","forro","forte","forum","forza","forzo","fosad","fosal","fosan","fosar","fosas","fosca","fosco","fosen","foses","fosil","fosor","fosos","foton","fotos","fovea","fracs","frada","frade","frado","fraga","frase","fra\xf1a","fra\xf1e","fra\xf1i","fra\xf1o","frece","fredo","frega","frego","freia","freid","freir","freis","frena","frene","freno","freon","freos","fresa","frese","freso","freta","frete","freto","freza","frezo","frian","frias","frica","frico","frien","fries","frior","frios","frisa","frise","friso","frita","frite","frito","froga","frogo","frota","frote","froto","fruia","fruid","fruir","fruis","fruta","frute","fruto","fruya","fruye","fruyo","fucar","fuchi","fucia","fucos","fudre","fuego","fuera","fuere","fuero","fuesa","fuese","fuets","fufad","fufan","fufar","fufas","fufen","fufes","fufos","fufus","fugan","fugar","fugas","fugaz","fugir","fugue","fuina","fular","fulas","fulge","fulgi","fulja","fuljo","fulla","fumad","fuman","fumar","fumas","fumen","fumes","fumon","funca","funco","funda","funde","fundi","fundo","funge","fungi","funja","funjo","furas","furia","furor","furos","furto","fusas","fusca","fusco","fusil","fusor","fusos","fusta","fuste","fusto","futil","futon","futre","fu\xf1ar","gaban","gabar","gacel","gacha","gache","gachi","gacho","gafad","gafan","gafar","gafas","gafea","gafee","gafen","gafeo","gafes","gafos","gagas","gagos","gaita","gajes","gajos","galan","galas","galce","galea","galeo","gales","galga","galgo","galio","galla","galle","gallo","galon","galop","galos","galua","gamas","gamba","gamma","gamon","gamos","ganad","ganan","ganar","ganas","ganen","ganes","ganga","gansa","ganso","ganta","gante","garas","garas","garay","garba","garbe","garbo","garfa","garia","gario","garla","garle","garlo","garma","garos","garpa","garpe","garpo","garra","garre","garri","garro","garua","garue","garuo","garza","garzo","gasas","gasea","gasee","gaseo","gases","gason","gasta","gaste","gasto","gatas","gatea","gatee","gateo","gatos","gauss","gavia","gayad","gayan","gayar","gayas","gayen","gayes","gayos","gazas","gazna","gazne","gazno","ga\xf1an","ga\xf1as","ga\xf1en","ga\xf1es","ga\xf1ia","ga\xf1id","ga\xf1il","ga\xf1in","ga\xf1ir","ga\xf1is","ga\xf1on","gelan","gelar","gelas","gelen","geles","gelfe","gemas","gemia","gemid","gemir","gemis","genes","genio","genol","gente","geoda","gerbo","gesta","geste","gesto","getas","gibad","giban","gibao","gibar","gibas","giben","gibes","gibon","gigas","gilas","giles","gilis","gilva","gilvo","giman","gimas","gimen","gimes","gimio","ginea","girad","giran","girar","giras","giren","gires","giros","gises","giste","glase","glayo","gleba","glera","glial","glias","glide","glifo","globo","glosa","glose","gloso","gluma","gneis","gnomo","goben","gobio","gocen","goces","gocha","gocho","godas","godeo","godos","gofas","gofio","gofos","gofra","gofre","gofro","golas","golea","golee","goleo","goles","golfa","golfo","golfs","golpe","gomar","gomas","gomel","gomer","gomia","gonce","gongo","gorda","gordo","gorga","gorja","gorma","gorme","gormo","gorra","gorro","gotas","gotea","gotee","goteo","goton","goyas","goyos","gozad","gozan","gozar","gozas","gozne","gozon","gozos","graba","grabe","grabo","grada","grade","grado","grafo","grais","graja","grajo","grama","grame","gramo","grana","grand","grane","grano","grant","graos","grapa","grape","grapo","grasa","graso","grata","grate","grato","grava","grave","gravo","greba","greca","greco","greda","green","grelo","greno","gre\xf1a","grial","grida","grifa","grife","grifo","grija","grill","grima","gripa","gripe","gripo","grisa","grisu","grita","grite","grito","groad","groan","groar","groas","groen","groes","grogs","grojo","gromo","grosa","groso","gruas","gruia","gruid","gruir","gruis","gruja","gruje","gruji","grujo","grumo","grupa","grupi","grupo","gruta","gruya","gruye","gruyo","gru\xf1a","gru\xf1e","gru\xf1i","gru\xf1o","guaba","guabo","guaca","guaco","guado","guais","guaja","guaje","guala","guama","guame","guamo","guano","guaos","guapa","guape","guapo","guara","guare","guari","guaro","guasa","guaso","guata","guate","guato","guaya","guaye","guayo","gubia","guera","guero","gueto","gue\xf1a","guiad","guian","guiar","guias","guida","guido","guien","guies","guifa","guija","guijo","guila","guilo","guina","guino","guion","guipa","guipe","guipo","guira","guire","guiri","guiro","guisa","guise","guiso","guita","guite","guito","guiye","gui\xf1a","gui\xf1e","gui\xf1o","gujas","gulag","gular","gulas","gulay","gules","gumia","gurda","gurdo","guris","gurus","gusta","guste","gusto","guzga","guzgo","guzla","habar","habas","haber","habia","habil","habiz","habla","hable","hablo","habon","habra","habre","habus","hacan","haced","hacen","hacer","haces","hacha","hache","hacho","hacia","hadar","hadas","hados","hafiz","hagan","hagas","haiga","halad","halan","halar","halas","halda","halen","hales","halla","halle","hallo","halon","halos","hamez","hampa","hampo","hanzo","hapax","haran","haras","harba","harbe","harbo","harca","harda","harem","haren","haria","harma","haron","harpa","harre","harta","harte","harto","hasta","hatea","hatee","hateo","hatos","haute","havar","havos","hayal","hayan","hayas","hayos","hazas","heben","hebra","heces","hecha","hecho","heded","heder","hedes","hedia","hedio","hedor","helad","helar","helas","helea","helee","heleo","helio","helor","hemos","henal","henar","hende","hendi","henil","henos","henry","herba","herbe","herbo","heria","herid","heril","herir","heris","herma","heroe","herpe","herra","herre","herro","hertz","herve","hervi","hespa","hespe","hespi","hespo","hetea","heteo","hevea","he\xf1ia","he\xf1id","he\xf1ir","he\xf1is","hiato","hicos","hidra","hieda","hiede","hiedo","hiela","hiele","hielo","hiena","hiera","hiere","hiero","higas","higos","higui","hijas","hijea","hijee","hijeo","hijos","hilad","hilan","hilar","hilas","hilen","hiles","hilio","hilos","himen","himno","himpa","himpe","himpo","hinca","hinco","hindi","hindu","hipad","hipan","hipar","hipas","hipen","hiper","hipes","hipos","hippy","hirco","hirio","hirma","hirme","hirmo","hisca","hispa","hispe","hispi","hispo","hitad","hitan","hitar","hitas","hiten","hites","hiton","hitos","hi\xf1an","hi\xf1as","hi\xf1en","hi\xf1es","hi\xf1ia","hi\xf1id","hi\xf1ir","hi\xf1is","hobby","hobos","hocen","hoces","hogar","hogos","hojas","hojea","hojee","hojeo","holan","holco","holea","holee","holeo","holga","holgo","holla","holle","hollo","homes","honda","hondo","hongo","honor","honra","honre","honro","hopan","hopar","hopas","hopea","hopee","hopen","hopeo","hopes","hopos","hoque","horas","horca","horco","horda","horma","horna","horne","horno","horra","horre","horro","hosca","hosco","hospa","hoste","hotel","hotos","hoves","hoyad","hoyan","hoyar","hoyas","hoyen","hoyes","hoyos","hozad","hozan","hozar","hozas","huaca","huaco","huaje","huaos","hucha","hucho","hucia","hueca","hueco","huego","huela","huele","huelo","huera","huero","huesa","hueso","hueva","hueve","huevo","huian","huias","huich","huida","huido","huifa","huila","huilo","huira","huire","huiro","hulad","hulan","hular","hulas","hulea","hulee","hulen","huleo","hules","hulla","hulte","humad","human","humar","humas","humea","humee","humen","humeo","humes","humil","humor","humos","humus","hunas","hunda","hunde","hundi","hundo","hunos","hupes","huras","hurga","hurgo","huris","huron","hurra","hurta","hurte","hurto","husar","husma","husme","husmo","husos","hutas","hutia","huyan","huyas","huyen","huyes","ibais","ibera","ibero","ibice","icaco","iceis","ichal","ichos","ichus","icono","ictus","idead","ideal","idean","idear","ideas","ideay","ideen","idees","ideos","idolo","iglus","ignea","igneo","igual","iguar","ijada","ijiyo","ijuju","ileon","ileos","ilesa","ileso","ilion","ilota","iluda","ilude","iludi","iludo","ilusa","iluso","imada","imana","imane","imano","imbui","imela","imita","imite","imito","impar","impia","impio","impla","imple","implo","impon","inane","incas","incoa","incoe","incoo","indas","index","india","indio","indos","infla","infle","inflo","ingas","ingle","ingon","ingre","inope","input","inris","insta","inste","insto","inter","intis","intui","invar","iones","iotas","ipsis","irada","irado","irani","ireis","irgan","irgas","irgue","irian","irias","iride","irisa","irise","iriso","irrui","irupe","isbas","islam","islan","islas","isleo","isoca","istmo","itala","italo","items","itera","itere","itero","itria","itrio","itzaj","izaba","izada","izado","izais","izara","izare","izase","izote","jabas","jabis","jable","jabon","jabra","jabre","jabri","jabro","jacal","jacas","jacer","jacha","jacos","jacta","jacte","jacto","jadas","jadea","jadee","jadeo","jades","jadia","jadie","jadio","jaece","jaeza","jaezo","jagua","jaiba","jaima","jajay","jalad","jalan","jalar","jalas","jalda","jalde","jaldo","jalea","jalee","jalen","jaleo","jales","jalma","jalon","jamad","jaman","jamar","jamas","jamba","jambe","jambo","jamen","james","jamon","janes","japon","jaque","jaral","jaras","jarba","jarbe","jarbo","jarca","jarda","jaros","jarra","jarre","jarro","jasad","jasan","jasar","jasas","jasen","jases","jaspe","jatas","jateo","jates","jatib","jatos","jauda","jaudo","jauja","jaula","jauta","jauto","javas","javos","jayan","ja\xf1as","ja\xf1os","jebes","jedad","jedan","jedar","jedas","jeden","jedes","jefas","jefes","jeito","jejen","jeliz","jemal","jemes","jeque","jeras","jerbo","jerez","jerga","jerpa","jetad","jetan","jetar","jetas","jetea","jetee","jeten","jeteo","jetes","jeton","jetos","jibes","jibia","jicos","jifas","jifia","jigas","jigue","jijas","jijea","jijee","jijeo","jimad","jiman","jimar","jimas","jimen","jimes","jimia","jimio","jinda","jines","jiote","jipas","jipia","jipie","jipio","jipis","jiras","jirel","jiron","jisca","jitad","jitan","jitar","jitas","jiten","jites","ji\xf1ad","ji\xf1an","ji\xf1ar","ji\xf1as","ji\xf1en","ji\xf1es","jobar","jobos","jocha","joche","jocho","jocon","jocos","jodan","jodas","joded","joden","joder","jodes","jodia","jodio","jodon","jofor","jolin","jondo","jonia","jonio","jopan","jopar","jopas","jopea","jopee","jopen","jopeo","jopes","jopos","joras","jorco","jorfe","jorga","jorge","jorro","josas","jotas","jotes","jotos","joule","joven","joyas","joyel","joyon","joyos","juana","jubas","jubon","jubos","jucas","jucos","judas","judia","judio","judos","juega","juego","juera","jueza","jugad","jugar","jugas","jugos","jugue","jujea","jujee","jujeo","julia","julio","julos","juman","jumar","jumas","jumea","jumee","jumen","jumeo","jumes","jumil","jumos","junce","junci","junco","junio","junta","junte","junto","junza","junzo","jupas","jupea","jupee","jupeo","jupon","jurad","juran","jurar","juras","jurco","jurel","juren","jures","juros","jusis","justa","juste","justo","jutas","jutia","juvia","juzga","juzgo","ju\xf1an","ju\xf1as","ju\xf1en","ju\xf1es","ju\xf1ia","ju\xf1id","ju\xf1ir","ju\xf1is","labeo","labes","labia","labil","labio","labor","labra","labre","labro","lacad","lacan","lacar","lacas","lacea","lacee","lacen","laceo","laces","lacha","lacho","lacia","lacio","lacon","lacra","lacre","lacro","lacta","lacte","lacto","ladas","ladea","ladee","ladeo","ladon","lados","ladra","ladre","ladro","lagar","lagos","lagua","laica","laico","laida","laido","lajas","laman","lamas","lamba","lambe","lambi","lambo","lamed","lamen","lamer","lames","lamia","lamin","lamio","lampa","lampe","lampo","lanar","lanas","lance","landa","lande","lando","langa","lania","lanio","lanza","lanzo","lapas","lapiz","lapon","lapos","lapsa","lapso","laque","larda","larde","lardo","lares","larga","largo","larra","larva","lasar","lasas","lasca","lasco","laser","lasos","lasta","laste","lasto","lasun","latan","latas","lataz","latea","latee","laten","lateo","lates","latex","latia","latid","latin","latio","latir","latis","laton","latos","lauda","laude","laudo","launa","lauro","lauta","lauto","lavad","lavan","lavar","lavas","laven","laves","laxad","laxan","laxar","laxas","laxen","laxes","laxos","layad","layan","layar","layas","layen","layes","lazad","lazan","lazar","lazas","lazos","la\xf1ad","la\xf1an","la\xf1ar","la\xf1as","la\xf1en","la\xf1es","leais","lecha","leche","lecho","lecos","ledas","ledon","ledos","leeis","leera","leere","legad","legal","legan","legar","legas","legon","legos","legra","legre","legro","legua","legue","legui","leian","leias","leida","leido","leila","leima","lejas","lejia","lejio","lejos","lelas","lelos","leman","lemas","lembo","lempo","lemur","lenas","lenca","lenes","lenon","lenta","lente","lento","leona","lepra","leras","lerda","lerdo","lesas","lesea","lesee","leseo","lesna","lesos","leste","letal","letea","leteo","leton","letra","leuco","leuda","leude","leudo","levad","levan","levar","levas","leven","leves","leyes","lezda","lezna","lezne","le\xf1ad","le\xf1an","le\xf1ar","le\xf1as","le\xf1en","le\xf1es","le\xf1os","liaba","liada","liado","liais","liana","liara","liare","liase","liaza","libad","liban","libar","libas","liben","liber","libes","libia","libio","libon","libra","libre","libro","liceo","licia","licio","licor","licua","licue","licuo","lider","lides","lidia","lidie","lidio","lidon","liega","liego","lieis","lieva","lieve","ligad","ligan","ligar","ligas","light","ligio","ligon","ligue","ligur","lijad","lijan","lijar","lijas","lijen","lijes","lilac","lilao","lilas","lilio","lilos","limad","liman","limar","limas","limbo","limen","limes","limon","limos","linao","linar","lince","linda","linde","lindo","linea","linee","lineo","linfa","linio","linon","linos","liosa","lioso","lipas","lipes","lipis","lipon","liras","liria","lirio","liron","lisas","lises","lisia","lisie","lisio","lisis","lisol","lisos","lista","liste","listo","litad","litan","litar","litas","liten","lites","litio","litis","litre","litro","lituo","liuda","liude","liudo","livor","lizas","lizos","li\xf1os","llaca","llaga","llago","llama","llame","llamo","llana","llano","llapa","llape","llapo","llave","lleca","lleco","llega","llego","llena","llene","lleno","llera","lleva","lleve","llevo","llora","llore","lloro","llosa","llove","llovi","loaba","loada","loado","loais","loara","loare","loase","lobas","lobby","lobea","lobee","lobeo","lobos","local","locas","locea","locee","loceo","locha","loche","locos","locro","lodon","lodos","lodra","loeis","logar","logia","logis","logos","logra","logre","logro","loica","loina","loino","lolas","lolea","lolee","loleo","lolio","lolis","lolos","lomas","lomba","lombo","lomea","lomee","lomeo","lomos","lonas","lonco","longa","longo","lonja","loras","lorea","loree","loreo","lores","loros","lorza","losad","losan","losar","losas","losen","loses","lotas","lotea","lotee","loteo","lotes","lotin","lotos","lozas","lucas","lucen","luces","lucha","luche","lucho","lucia","lucid","lucio","lucir","lucis","lucra","lucre","lucro","ludan","ludas","luden","ludes","ludia","ludid","ludie","ludio","ludir","ludis","ludos","luego","lue\xf1e","lugar","lugre","luian","luias","luida","luido","luira","luire","luisa","lujad","lujan","lujar","lujas","lujen","lujes","lujos","lulos","lulus","lumas","lumbo","lumen","lumia","lunar","lunas","lunch","lunea","lunee","lunel","luneo","lunes","lunfa","lupas","lupia","lupus","lurte","lusas","lusca","lusco","lusos","lutea","luteo","lutos","luvia","luxad","luxan","luxar","luxas","luxen","luxes","luyan","luyas","luyen","luyes","luzca","luzco","lycra","mabis","mable","macal","macan","macar","macas","macea","macee","macen","maceo","maces","macha","mache","machi","macho","macia","macio","macis","macla","macon","macro","macua","mador","madre","maesa","maese","maeso","mae\xf1a","mae\xf1o","mafia","magas","magia","magie","magin","magio","magma","magna","magno","magos","magra","magro","mague","mahon","maido","majad","majal","majan","majar","majas","majea","majee","majen","majeo","majes","majos","malar","malas","malea","malee","maleo","males","malis","malla","malle","mallo","malon","malos","malta","malva","malve","malvo","mamad","maman","mamar","mamas","mambi","mambo","mamen","mames","mamey","mamia","mamon","mamua","mamut","manad","manal","manan","manar","manas","manca","manco","manda","mande","mandi","mando","manea","manee","manen","maneo","manes","manga","mango","mania","manid","manio","manir","manis","manos","mansa","manso","manta","manto","manus","maoma","maori","mapas","mapea","mapee","mapeo","mapos","maque","maqui","maras","marca","marce","marci","marco","marea","maree","mareo","mares","marga","margo","maria","marlo","maron","maros","marra","marre","marro","marsa","marso","marta","marte","marza","marzo","masad","masan","masar","masas","masca","masco","masea","masee","masen","maseo","mases","masia","maslo","mason","maste","masto","matad","matan","matar","matas","matea","matee","maten","mateo","mates","matiz","maton","matos","matul","maula","maule","maulo","maura","maure","mauro","mayad","mayal","mayan","mayar","mayas","mayea","mayee","mayen","mayeo","mayes","mayor","mayos","mazad","mazan","mazar","mazas","mazna","mazne","mazno","mazos","ma\xf1as","ma\xf1ea","ma\xf1ee","ma\xf1eo","ma\xf1io","ma\xf1os","mbaya","meaba","meada","meado","meais","meaja","meano","meara","meare","mease","meato","mecas","meced","mecen","mecer","meces","mecha","meche","mecho","mecia","mecio","mecos","medas","media","medid","medie","medio","medir","medis","medos","medra","medre","medro","meeis","megas","megos","meiga","meigo","mejan","mejas","mejed","mejen","mejer","mejes","mejia","mejio","mejor","melad","melar","melas","melca","melga","melgo","melis","mella","melle","mello","melon","melsa","melva","memas","memez","memos","menad","menan","menar","menas","menda","menea","menee","menen","meneo","menes","menge","menor","menos","mensa","menso","mensu","menta","mente","menti","mento","menus","meona","merad","meran","merar","meras","merca","merco","meren","meres","merey","mergo","merla","merlo","merma","merme","mermo","merol","meros","mersa","mesad","mesan","mesar","mesas","mesen","meses","mesma","mesmo","meson","mesta","mesto","metad","metal","metan","metas","meted","meten","meter","metes","metia","metio","metra","metro","meyas","meyor","mezan","mezas","miaba","miado","miaga","miago","miais","miaja","miara","miare","miase","miaus","mia\xf1a","mia\xf1e","mia\xf1o","micas","micer","mices","micha","miche","micho","micos","micra","micro","midan","midas","miden","mides","midio","miedo","mieis","miela","miele","mielo","miera","migad","migan","migar","migas","migra","migre","migro","migue","mijos","milan","miles","milis","milla","millo","milpa","mimad","miman","mimar","mimas","mimen","mimes","mimos","minad","minal","minan","minar","minas","minaz","minen","mines","minga","mingo","minia","minie","minio","minue","mioma","miona","miope","mirad","miran","mirar","miras","miren","mires","mirla","mirle","mirlo","miron","mirra","mirto","mirza","misad","misal","misan","misar","misas","misen","mises","misia","misil","misio","misma","mismo","mista","miste","misto","mitad","mitan","mitas","mitin","miton","mitos","mitra","mitre","mitro","miura","mixta","mixto","mizas","mizos","mi\xf1on","moais","moare","moble","mocad","mocan","mocar","mocas","mocea","mocee","moceo","mocha","moche","mocho","mocil","mocos","modal","modas","modem","modio","modos","mofad","mofan","mofar","mofas","mofen","mofes","mogas","mogol","mogon","mogos","mohin","mohos","mohur","mojad","mojan","mojar","mojas","mojel","mojen","mojes","mojil","mojis","mojon","mojos","molad","molan","molar","molas","molda","molde","moldo","moled","molen","moler","moles","molia","molio","molla","molle","molon","molos","molsa","molso","momea","momee","momeo","momia","momio","momos","monas","monda","monde","mondo","monea","monee","moneo","monfi","monga","mongo","monis","monja","monje","monos","monra","monse","monta","monte","monto","mopan","mopas","moque","morad","moral","moran","morar","moras","morbo","morca","morco","morde","mordi","morea","moren","moreo","mores","morfa","morfe","morfo","morga","moria","morid","morir","moris","morma","morme","mormo","moron","moros","morra","morro","morsa","morse","mosca","mosco","mosen","moste","mosto","motas","motea","motee","motel","moteo","motes","motil","motin","moton","motor","motos","moved","mover","moves","movia","movil","movio","moxas","moxte","moyas","moyos","mozas","mozos","mo\xf1as","mo\xf1on","mo\xf1os","muare","muble","mucas","mucha","mucho","mucos","mudad","mudan","mudar","mudas","muden","mudes","mudez","mudos","mueca","muela","muele","muelo","muera","muere","muero","mueso","mueva","mueve","muevo","mufas","mufla","mufti","mugad","mugan","mugar","mugas","mugen","muges","mugia","mugid","mugil","mugio","mugir","mugis","mugle","mugor","mugre","mugue","muian","muias","muida","muido","muira","muire","mujan","mujas","mujer","mujol","mular","mulas","muleo","mules","mulla","mulle","mulli","mullo","mulos","mulsa","mulso","multa","multe","multo","munas","mundo","murad","mural","muran","murar","muras","muren","mures","murga","muria","murio","muros","murta","murto","musan","musar","musas","musca","musco","musen","museo","muses","musga","musgo","musia","musio","musir","musis","muslo","musos","mutad","mutan","mutar","mutas","muten","mutes","mutis","mutra","mutro","mutua","mutuo","muyan","muyas","muyen","muyes","mu\xf1an","mu\xf1as","mu\xf1en","mu\xf1es","mu\xf1ia","mu\xf1id","mu\xf1ir","mu\xf1is","mu\xf1on","nabab","nabal","nabar","nabas","nabis","nabla","nabos","nacar","nacas","naced","nacen","nacer","naces","nacha","nacho","nacia","nacio","nacos","nacre","nadad","nadal","nadan","nadar","nadas","naden","nades","nadga","nadie","nadir","nafra","nafre","nafro","nafta","nagua","nahoa","nahua","naife","naifs","naipe","naire","najas","nalca","nalga","nanas","nanay","nance","nanea","nanee","naneo","nansa","nansu","nanta","nante","nanto","napas","napea","napeo","naque","narco","nardo","nares","nariz","narra","narre","narro","nasal","nasas","nason","nasos","natal","natas","natia","natio","natos","natri","nauta","naval","navas","naves","navio","nazca","nazco","nazis","nebel","nebis","nebli","nebro","necea","necee","neceo","necia","necio","negad","negar","negas","negra","negro","negue","negus","nejas","nejos","neldo","neles","nemas","nemea","nemeo","nemes","nemon","nenas","nenes","nenia","nepes","neron","nesga","nesgo","netas","netos","neuma","nevad","nevar","nevas","nevos","nevus","nexos","niara","niazo","niche","nicho","nicle","nicol","nidal","nidia","nidio","nidos","niega","niego","niela","niele","nielo","nieta","nieto","nieva","nieve","nievo","nigua","nilad","nilon","nimba","nimbe","nimbo","nimia","nimio","ninfa","ninfo","ninot","nioto","nipas","nipis","nipon","nipos","niqui","niste","nitor","nitos","nitra","nitre","nitro","nivea","nivel","niveo","nixte","ni\xf1as","ni\xf1ea","ni\xf1ee","ni\xf1eo","ni\xf1ez","ni\xf1os","nobel","noble","nocas","noche","nocir","nocla","nodal","nodos","noema","nogal","nolis","nolit","nomas","nomon","nomos","nonas","nones","nonio","nonos","nopal","noque","noray","noria","norma","norme","normo","norte","notad","notan","notar","notas","noten","notes","notos","notro","novad","noval","novan","novar","novas","novel","noven","noves","novia","novie","novio","noyos","nubes","nubia","nubil","nubio","nubla","nuble","nublo","nucas","nuche","nucir","nucos","nudas","nudos","nuera","nuesa","nueso","nueva","nueve","nuevo","nueza","nulas","nulos","numen","numos","nunca","nutra","nutre","nutri","nutro","nu\xf1os","oasis","obelo","obesa","obeso","obice","obito","oblea","oboes","obolo","obrad","obran","obrar","obras","obren","obres","obsta","obste","obsto","obten","obues","obvia","obvie","obvio","ocapi","ocaso","ocelo","ocena","ochos","ociad","ocian","ociar","ocias","ocien","ocies","ocios","ocles","oclui","ocote","ocras","ocres","ocrey","ocuje","ocume","ocumo","ocupa","ocupe","ocupo","odeon","odiad","odian","odiar","odias","odien","odies","odios","odres","oeste","ofita","oga\xf1o","ogros","ohmio","oiais","oible","oidas","oidio","oidor","oidos","oigan","oigas","oimos","oiran","oiras","oiria","oislo","oiste","ojala","ojale","ojalo","ojead","ojean","ojear","ojeas","ojeen","ojees","ojeos","ojera","ojete","ojito","ojiva","ojosa","ojoso","ojota","ojuda","ojudo","olais","olaje","olead","olean","olear","oleas","oleen","olees","oleis","oleos","olera","olere","olian","olias","olida","olido","olios","oliva","olive","olivo","ollao","ollar","ollas","olmas","olmos","olote","olura","omani","omaso","ombus","omega","omero","omeya","omina","omine","omino","omisa","omiso","omita","omite","omiti","omito","omoto","oncea","oncee","onceo","onces","ondas","ondea","ondee","ondeo","ondra","onece","oneci","onice","onoto","onzas","opaca","opaco","opada","opado","opalo","opera","opere","opero","opila","opile","opilo","opima","opimo","opina","opine","opino","opios","opone","optad","optan","optar","optas","opten","optes","opuse","opuso","oraba","orada","orado","orais","oraje","orale","orara","orare","orase","orate","orbes","orcas","orcen","orces","orcos","orden","oread","orean","orear","oreas","oreen","orees","oreis","oreja","oreos","orero","orfos","orfre","orgia","oribe","ories","orina","orine","orino","oriol","orive","orlad","orlan","orlar","orlas","orlen","orles","orlos","ornad","ornan","ornar","ornas","ornea","ornee","ornen","orneo","ornes","oroya","ortos","oruga","orujo","orzad","orzan","orzar","orzas","osaba","osada","osado","osais","osara","osare","osase","oscas","oscos","osead","osean","osear","oseas","oseen","osees","oseis","oseos","osera","osero","oseta","osmio","ososa","ososo","ostas","ostia","ostra","ostro","osuda","osudo","osuna","osuno","otate","otead","otean","otear","oteas","oteen","otees","otero","otila","otile","otilo","otoba","oto\xf1a","oto\xf1e","oto\xf1o","otras","otres","otris","otros","ovaba","ovada","ovado","ovais","ovala","ovale","ovalo","ovara","ovare","ovase","oveis","oveja","overa","overo","ovido","ovina","ovino","ovnis","ovolo","ovosa","ovoso","ovula","ovule","ovulo","oxead","oxean","oxear","oxeas","oxeen","oxees","oxida","oxide","oxido","oyera","oyere","oyese","ozena","ozona","ozono","pacae","pacas","pacay","paced","pacen","pacer","paces","pacha","pacho","pacia","pacio","pacon","pacos","pacta","pacte","pacto","pacus","padre","pafia","pafio","pagad","pagan","pagar","pagas","pagel","pagos","pagro","pagua","pague","pahua","paico","paila","paina","paira","paire","pairo","pajar","pajas","pajea","pajee","pajel","pajeo","pajes","pajil","pajla","pajon","pajos","pajuz","palas","palay","palca","palco","palea","palee","paleo","pales","palia","palie","palio","palis","palla","palle","pallo","palma","palme","palmo","palon","palor","palos","palpa","palpe","palpi","palpo","palta","palto","pamba","pampa","pamue","panal","panas","panca","panco","panda","pando","panel","panes","panga","panji","panos","pansa","panty","panul","panza","papad","papal","papan","papar","papas","papaz","papea","papee","papel","papen","papeo","papes","papin","papon","papos","papua","papus","parad","paral","paran","parao","parar","paras","parca","parce","parco","parda","pardo","parea","pared","paree","parel","paren","pareo","pares","pargo","paria","parid","pario","parir","paris","parla","parle","parlo","parne","paros","parpa","parpe","parpo","parra","parre","parro","parsi","parta","parte","parti","parto","parva","parvo","pasad","pasan","pasar","pasas","pasco","pasea","pasee","pasen","paseo","pases","pasil","pasma","pasme","pasmo","pasos","paspa","paspe","paspo","pasta","paste","pasto","patan","patao","patas","patax","patay","patea","patee","pateo","pater","pates","patin","patio","patis","paton","patos","pauji","paula","paule","paulo","pausa","pause","pauso","pauta","paute","pauto","pavas","paves","pavia","pavon","pavor","pavos","paxte","payad","payan","payar","payas","payen","payes","payos","pazca","pazco","pazos","pa\xf1al","pa\xf1il","pa\xf1ol","pa\xf1os","peais","peaje","peala","peale","pealo","peana","pea\xf1a","pebre","pecad","pecan","pecar","pecas","peces","pecha","peche","pecho","pecio","pecta","pecte","pecto","pedal","pedia","pedid","pedio","pedir","pedis","pedos","pedro","peeis","peera","peere","pegad","pegan","pegar","pegas","pegon","pegos","pegue","peian","peias","peido","peina","peine","peino","pejes","pejin","pelad","pelan","pelar","pelas","pelde","pelea","pelee","pelen","peleo","peles","pelis","pella","pello","pelma","pelon","pelos","pelta","pelus","pelvi","pemon","penad","penal","penan","penar","penas","penca","penco","penda","pende","pendi","pendo","penen","penes","penis","penol","penos","pensa","pense","penso","peora","pepas","pepes","pepla","peplo","pepon","pepus","peque","peral","peras","perca","perde","perdi","peris","perla","perle","perlo","perna","perno","perol","peros","perra","perro","persa","perta","perus","pesad","pesan","pesar","pesas","pesca","pesce","pesco","pesen","peses","pesga","pesgo","pesia","pesol","pesor","pesos","peste","petad","petan","petar","petas","peten","petes","petos","petra","peuco","peumo","pezon","pe\xf1as","pe\xf1ol","pe\xf1on","pe\xf1os","piaba","piada","piado","piafa","piafe","piafo","piais","piala","piale","pialo","piano","piara","piare","piase","pibas","pibes","pibil","picad","pical","pican","picar","picas","picea","piceo","picha","piche","pichi","picho","picon","picor","picos","picuy","pidan","pidas","piden","pides","pidio","pidon","pieis","piejo","pieza","pifas","pifia","pifie","pifio","pigra","pigre","pigro","pigua","pihua","pijas","pijes","pijin","pijos","pijul","pijuy","pilad","pilan","pilar","pilas","pilca","pilen","pileo","piles","pilla","pille","pillo","pilme","pilon","pilos","pinal","pinar","pinas","pince","pines","pinga","pingo","pinna","pinol","pinos","pinta","pinte","pinto","pinza","pinzo","piojo","piola","piole","piolo","piona","pipad","pipan","pipar","pipas","pipen","pipes","pipia","pipie","pipil","pipio","pipis","pipon","pipos","pique","pirad","piral","piran","pirar","piras","pirca","pirco","piren","pires","pirla","piron","piros","pirra","pirre","pirri","pirro","pirul","pirus","pisad","pisan","pisar","pisas","pisca","pisco","pisen","pises","pison","pisos","pispa","pispe","pispo","pista","piste","pisto","pitad","pital","pitan","pitao","pitar","pitas","pitea","pitee","piten","piteo","pites","pitia","pitio","pitis","piton","pitos","piula","piule","piulo","piune","piure","pivot","pixel","pizca","pizco","pizza","pi\xf1al","pi\xf1as","pi\xf1en","pi\xf1on","pi\xf1os","placa","place","placi","placo","plaga","plago","plana","plano","plata","plato","playa","playe","playo","plaza","plazo","pla\xf1a","pla\xf1e","pla\xf1i","pla\xf1o","plebe","pleca","plega","plego","plena","pleno","pleon","plepa","plexo","plica","plisa","plise","pliso","ploma","plome","plomo","plugo","pluma","pobla","poble","poblo","pobos","pobra","pobre","pocas","pocha","pocho","pocos","podad","podal","podan","podar","podas","poded","poden","poder","podes","podia","podio","podon","podra","podre","poema","poeta","poino","poisa","poise","polar","polca","polco","polea","polen","poleo","polex","polin","polio","polir","polis","polla","pollo","polos","polvo","pomar","pomas","pomez","pomos","pompa","pompo","ponci","poned","ponen","poner","pones","poney","ponga","pongo","ponia","ponis","ponto","popad","popan","popar","popas","popel","popen","popes","popos","popti","porco","porga","porgo","porno","poros","porra","porro","porta","porte","porto","posad","posan","posar","posas","posca","posea","posee","posei","posen","poseo","poses","posma","posmo","poson","posos","posta","poste","potad","potan","potar","potas","potea","potee","poten","poteo","potes","potos","potra","potro","poyad","poyal","poyan","poyar","poyas","poyen","poyes","poyos","pozal","pozas","pozol","pozos","prado","praos","prava","pravo","praza","prear","preas","preda","presa","preso","prest","preve","previ","pre\xf1a","pre\xf1e","pre\xf1o","prima","prime","primo","prion","prior","prisa","priva","prive","privo","proal","proas","proba","probe","probo","proco","proel","profa","profe","prois","proiz","prole","prona","prono","prora","prosa","pruna","pruno","psies","puaba","puada","puado","puais","puara","puare","puase","puber","pubes","pubis","pucha","pucho","pucia","pudin","pudio","pudir","pudor","pudra","pudre","pudri","pudro","pudus","pueda","puede","puedo","pueis","pufos","pugas","pugil","pugna","pugne","pugno","pujad","pujan","pujar","pujas","pujen","pujes","pujos","pulan","pulas","pulen","pules","pulga","pulia","pulid","pulio","pulir","pulis","pulla","pulle","pullo","pulpa","pulpo","pulsa","pulse","pulso","pumas","pumba","punan","punar","punas","punce","punen","punes","punga","punge","pungi","punia","punid","punio","punir","punis","punja","punjo","punta","punte","punto","punza","punzo","pupad","pupan","pupar","pupas","pupen","pupes","pupos","pupus","puras","purea","puree","pureo","pures","purga","purgo","purin","puros","purra","purre","purri","purro","puses","puspa","puspo","putal","putas","putea","putee","puteo","puton","putos","puyad","puyan","puyar","puyas","puyen","puyes","puyon","puyos","puzle","puzol","pu\xf1al","pu\xf1ar","pu\xf1ir","pu\xf1os","pymes","queco","queda","quede","quedo","queja","queje","quejo","quema","queme","quemi","quemo","quena","quepa","quepi","quepo","quera","quere","quero","queso","quias","quien","quier","quifs","quijo","quila","quilo","quima","quimo","quina","quino","quios","quipa","quipu","quisa","quise","quiso","quita","quite","quito","quitu","quivi","quiza","qui\xf1a","qui\xf1e","qui\xf1o","rabal","rabas","rabea","rabee","rabel","rabeo","rabia","rabie","rabil","rabio","rabis","rabon","rabos","racea","racee","racel","raceo","racha","rache","racho","racor","racos","radal","radar","radas","rades","radia","radie","radio","radon","raeis","raera","raere","rafal","rafas","rafea","rafee","rafeo","rafes","rafez","rafia","ragua","ragus","rahez","raian","raias","raice","raida","raido","raiga","raigo","raijo","raiza","raizo","rajad","rajan","rajar","rajas","rajen","rajes","rajon","ralas","ralba","ralbe","ralbo","ralea","ralee","raleo","ralla","ralle","rallo","rally","ralos","ralva","ralve","ralvo","ramal","ramas","ramea","ramee","rameo","ramio","ramon","ramos","rampa","rampe","rampo","ranas","randa","rands","rango","ranos","rapad","rapan","rapar","rapas","rapaz","rapen","rapes","rapos","rapta","rapte","rapto","raque","raras","rarea","raree","rareo","raros","rasad","rasan","rasar","rasas","rasca","rasco","rasel","rasen","rases","rasga","rasgo","rasis","rasos","raspa","raspe","raspo","ratas","ratea","ratee","rateo","ratio","raton","ratos","rauca","rauco","rauda","raudo","rauli","rauta","rayad","rayan","rayar","rayas","rayen","rayes","rayon","rayos","razar","razas","razia","razon","ra\xf1as","ra\xf1os","reaje","reala","reama","reame","reamo","reara","reare","rearo","reata","reate","reato","rebla","reble","reblo","rebol","rebus","recae","recai","recel","recen","reces","recia","recio","recle","recre","recta","recte","recto","recua","redad","redan","redar","redas","redel","reden","redes","redil","redol","redor","redro","refez","regad","regar","regas","regia","regid","regio","regir","regis","regla","regle","reglo","regue","rehaz","rehen","rehui","rehus","reian","reias","reida","reido","reila","reile","reilo","reina","reine","reino","reira","reire","rejal","rejas","rejin","rejon","rejos","rejus","relax","relea","relee","relei","relej","releo","reles","reloj","relsa","relso","relva","relve","relvo","remad","reman","remar","remas","remen","remes","remos","renal","renca","renco","renda","rende","rendi","rendo","renes","renga","rengo","renil","renio","renos","renta","rente","rento","reoca","reojo","repon","repos","repta","repte","repto","resal","reses","resma","resol","respe","resta","reste","resto","retad","retal","retan","retar","retas","retel","reten","retes","retin","retor","retos","retro","reuma","reuna","reune","reuni","reuno","revea","reved","reven","reveo","rever","reves","revio","reyad","reyan","reyar","reyas","reyen","reyes","rezad","rezan","rezar","rezas","rezno","rezon","rezos","re\xf1ia","re\xf1id","re\xf1ir","re\xf1is","riada","riais","riata","ribas","ricas","ricen","rices","ricia","ricio","ricos","riega","riego","riela","riele","rielo","riera","riere","riese","rifad","rifan","rifar","rifas","rifen","rifes","rifle","rigen","riges","rigil","rigio","rigor","rigua","rigue","rijan","rijas","rijos","rilad","rilan","rilar","rilas","rilen","riles","rimad","riman","rimar","rimas","rimel","rimen","rimes","rimus","rinda","rinde","rindo","ringa","ringo","rioja","ripia","ripie","ripio","risas","risca","risco","risos","rispa","rispe","rispo","ritma","ritme","ritmo","riton","ritos","rival","rizad","rizal","rizan","rizar","rizas","rizon","rizos","ri\xf1an","ri\xf1as","ri\xf1en","ri\xf1es","ri\xf1on","roais","roana","roano","robad","roban","robar","robas","robda","roben","robes","robin","robla","roble","roblo","robos","robot","robra","robre","rocas","rocea","rocee","rocen","roceo","roces","rocha","roche","rocho","rocia","rocie","rocin","rocio","rocos","rodad","rodal","rodao","rodar","rodas","rodea","rodee","rodeo","rodia","rodil","rodio","rodos","roeis","roela","roera","roere","roete","rogad","rogar","rogas","rogos","rogue","roian","roias","roida","roido","roiga","roigo","rojal","rojas","rojea","rojee","rojeo","rojez","rojos","rolad","rolan","rolar","rolas","rolda","rolde","roldo","rolen","roleo","roles","rolla","rolle","rollo","rolos","roman","romas","rombo","romea","romeo","romin","romis","romos","rompa","rompe","rompi","rompo","ronca","ronce","ronco","ronda","ronde","rondo","rones","ronza","ronzo","ropas","ropon","roque","rorad","roran","rorar","roras","roren","rores","rorro","rosal","rosan","rosar","rosas","rosca","rosco","rosea","rosee","rosen","roseo","roses","rosjo","roson","rosos","rosta","roste","rosti","rosto","rotad","rotal","rotan","rotar","rotas","roten","rotes","rotor","rotos","rouge","royan","royas","royos","rozad","rozan","rozar","rozas","rozna","rozne","rozno","rozon","rozos","ro\xf1ad","ro\xf1al","ro\xf1an","ro\xf1ar","ro\xf1as","ro\xf1en","ro\xf1es","ro\xf1ia","ruaba","ruada","ruado","ruais","ruana","ruano","ruara","ruare","ruase","rubea","rubeo","rubia","rubin","rubio","rubis","rublo","rubor","rubra","rubro","rucad","rucan","rucar","rucas","rucha","ruche","rucho","rucia","rucio","rucos","rudas","rudos","rueca","rueda","ruede","ruedo","ruega","ruego","rueis","ruejo","rue\xf1o","rufas","rufon","rufos","rugad","rugan","rugar","rugas","rugby","rugen","ruges","rugia","rugid","rugio","rugir","rugis","rugue","ruido","ruina","ruine","ruino","rujan","rujas","rujia","rujie","rujio","rulad","rulan","rular","rulas","rulen","rules","rulos","rumba","rumbe","rumbo","rumia","rumie","rumio","rumis","rumor","rumos","runas","runes","runga","rungo","runos","rupia","ruque","rural","rurru","rusas","rusco","rusel","ruses","rusia","rusos","rusta","ruste","rusti","rusto","rutad","rutan","rutar","rutas","rutel","ruten","rutes","ru\xf1ad","ru\xf1an","ru\xf1ar","ru\xf1as","ru\xf1en","ru\xf1es","ru\xf1ia","ru\xf1id","ru\xf1ir","ru\xf1is","sabea","sabed","saben","sabeo","saber","sabes","sabia","sabio","sabir","sable","sabor","sabra","sabre","sacad","sacan","sacar","sacas","saces","sacha","sache","sacho","sacia","sacie","sacio","sacon","sacos","sacra","sacre","sacro","saeta","saete","saeti","saeto","safir","sagas","sagaz","sagus","saina","saine","saino","sajad","sajan","sajar","sajas","sajen","sajes","sajia","sajon","salad","salan","salar","salas","salaz","salce","salda","salde","saldo","salea","salee","salen","saleo","salep","sales","salga","salgo","salia","salid","salin","salio","salir","salis","salla","salle","sallo","salma","salme","salmo","salol","salon","salpa","salsa","salso","salta","salte","salto","salud","salva","salve","salvo","saman","samas","samba","sambo","samia","samio","sampa","sanad","sanan","sanar","sanas","sanco","sanea","sanee","sanen","saneo","sanes","sango","sanie","sanja","sanje","sanjo","sanos","sansa","sanso","santa","santo","sapas","sapea","sapee","sapeo","sapos","saque","saran","sarao","sarda","sarde","sardo","sarga","sargo","saria","saris","sarna","sarro","sarta","sarza","sarzo","sasal","satan","satas","saten","satin","satis","satos","sauce","sauco","saudi","sauna","savia","saxea","saxeo","saxos","sayal","sayas","sayon","sayos","sazon","sa\xf1as","seais","sebes","sebos","secad","secan","secar","secas","secon","secos","secta","secua","sedad","sedal","sedan","sedar","sedas","sedea","sedee","seden","sedeo","sedes","segad","segar","segas","segri","segue","segui","segun","segur","seibo","seico","seise","sejes","seles","sella","selle","sello","selva","semas","semen","semis","senas","senda","senes","senil","senos","senta","sente","senti","sento","seora","sepan","sepas","sepes","sepia","septo","seque","seran","seras","serba","serbo","seres","seria","serie","serio","serna","seron","serpa","serra","serre","serro","servi","servo","sesea","sesee","sesen","seseo","seses","sesga","sesgo","sesil","sesis","sesma","sesmo","sesos","setal","setas","setos","sexad","sexan","sexar","sexas","sexen","sexes","sexma","sexmo","sexos","sexta","sexto","se\xf1al","se\xf1as","se\xf1or","short","shuar","sibil","siclo","sicus","sidas","sidra","siega","siego","siena","sieso","siete","sifon","sifue","sigan","sigas","sigla","siglo","sigma","signa","signe","signo","sigua","sigue","sijes","sijus","silba","silbe","silbo","siles","silex","silfo","silga","silgo","silla","silos","silva","simas","simia","simil","simio","simon","simpa","simun","singa","singo","sinos","sioux","sipes","sique","siras","sirga","sirgo","siria","sirin","sirio","sirle","siros","sirte","sirva","sirve","sirvo","sisad","sisal","sisan","sisar","sisas","sisca","sisea","sisee","sisen","siseo","sises","sismo","sison","sitas","sitia","sitie","sitio","sitos","situa","situe","situo","soasa","soase","soaso","sobad","soban","sobar","sobas","soben","sobeo","sobes","sobon","sobos","sobra","sobre","sobro","socas","socaz","soche","socia","socio","socol","sodas","sodio","soeza","sofas","sofis","sogas","sogun","sojas","solad","solar","solas","solaz","solda","solde","soldo","solea","solee","solen","soleo","soler","soles","solfa","solia","solio","solla","sollo","solos","solta","solte","solto","somas","somos","sonad","sonar","sonas","sonda","sonde","sondo","sones","sonio","sonsa","sonso","sonta","sonto","sopad","sopan","sopar","sopas","sopea","sopee","sopen","sopeo","sopes","sopie","sopla","sople","soplo","sopon","sopor","sorba","sorbe","sorbi","sorbo","sorce","sorda","sordo","sores","sorgo","sorna","sorne","sorno","soror","soros","sorra","sosal","sosar","sosas","sosia","sosos","sotad","sotan","sotar","sotas","soten","sotes","sotil","sotol","sotos","sovoz","soyas","so\xf1ad","so\xf1ar","so\xf1as","sport","spray","stand","suaba","suabo","suata","suato","suave","suazi","suban","subas","suben","subeo","subes","subia","subid","subio","subir","subis","subte","suche","sucia","sucio","sucos","sucre","sucus","sudad","sudan","sudar","sudas","suden","sudes","sudor","sueca","sueco","suela","suele","suelo","suena","suene","sueno","suero","sueva","suevo","sue\xf1a","sue\xf1e","sue\xf1o","sufis","sufra","sufre","sufri","sufro","suido","suita","suite","suiza","suizo","sulas","sulco","sulla","sumad","suman","sumar","sumas","sumen","sumes","sumia","sumid","sumio","sumir","sumis","sumos","sumus","sunca","sunco","super","supla","suple","supli","suplo","supon","supra","sural","suras","surca","surco","surda","surde","surdi","surdo","sures","surfs","surge","surgi","suris","surja","surjo","surta","surte","surti","surto","suses","susto","sutas","sutes","sutil","suyas","suyos","suzon","tabal","tabas","tabea","tabes","tabis","tabla","table","tablo","tabon","tabor","tabos","tabus","tacar","tacas","tacen","taces","tacet","tacha","tache","tacho","tacon","tacos","tacto","tafia","tafon","tafos","tafur","tagua","tahas","tahur","taifa","taiga","taima","taime","taimo","taina","taino","taipa","taira","taire","taita","tajad","tajan","tajar","tajas","tajea","tajee","tajen","tajeo","tajes","tajin","tajon","tajos","tajus","talad","talan","talar","talas","talco","talea","taled","talen","tales","talgo","talin","talio","talla","talle","tallo","talma","talon","talos","talpa","talud","tamal","tamba","tambo","tamil","tamiz","tamos","tamul","tanas","tanca","tanco","tanda","tanes","tanga","tange","tangi","tango","tanja","tanjo","tanor","tanos","tanta","tanto","tanza","tapad","tapan","tapar","tapas","tapea","tapee","tapen","tapeo","tapes","tapia","tapie","tapin","tapio","tapir","tapis","tapiz","tapon","taque","tarad","taran","tarar","taras","taray","tarca","tarco","tarda","tarde","tardo","tarea","taren","tares","tarin","tarja","tarje","tarjo","tarma","tarot","tarra","tarro","tarso","tarta","tasad","tasan","tasar","tasas","tasca","tasco","tasen","tases","tasia","tasio","tasis","tasto","tatas","tatay","tatos","tatua","tatue","tatuo","tatus","tauca","tauco","taula","tauro","taxis","taxon","tayos","tayul","tazad","tazan","tazar","tazas","tazon","ta\xf1ad","ta\xf1an","ta\xf1ar","ta\xf1as","ta\xf1ed","ta\xf1en","ta\xf1er","ta\xf1es","ta\xf1ia","ta\xf1os","teame","tebea","tebeo","tecas","teces","techa","teche","techo","tecla","tecle","teclo","tecol","tedas","tedio","tefes","tegea","tegeo","tegua","tegue","tehul","teina","tejad","tejan","tejar","tejas","tejed","tejen","tejer","tejes","tejia","tejio","tejon","tejos","telar","telas","teles","telex","telon","temad","teman","temar","temas","temed","temen","temer","temes","temia","temio","temor","tempo","temus","tenas","tenaz","tenca","tende","tendi","tened","tener","tenes","tenga","tengo","tenia","tenio","tenis","tenor","tensa","tense","tenso","tenta","tente","tento","tenue","teosa","teoso","tepes","tepus","tepuy","teque","terca","terco","terma","termo","terna","terne","terno","teros","tersa","terse","terso","tesad","tesan","tesar","tesas","tesen","teses","tesis","tesla","teson","tesos","testa","teste","testo","tetad","tetan","tetar","tetas","teten","tetes","teton","tetra","tetro","texes","texto","teyas","teyos","teyus","te\xf1as","te\xf1ia","te\xf1id","te\xf1ir","te\xf1is","tiaca","tiara","tibar","tibes","tibia","tibie","tibio","tibor","ticas","ticos","tiene","tiesa","tieso","tifas","tifon","tifos","tifus","tigra","tigre","tigua","tigue","tijas","tijos","tijul","tilas","tilda","tilde","tildo","tiles","tilia","tilin","tilla","tille","tillo","tilma","tilos","timad","timan","timar","timas","timba","timbo","timen","times","timol","timon","timos","timpa","tinas","tinca","tinco","tinea","tineo","tinge","tinos","tinta","tinte","tinto","tipas","tipis","tiple","tipoi","tipos","tipoy","tique","tiqui","tirad","tiran","tirar","tiras","tiren","tires","tiria","tirio","tiron","tiros","tirro","tirso","tirte","tisis","tiste","tisus","titad","titan","titar","titas","titea","titee","titen","titeo","tites","titil","titis","titos","tizas","tizna","tizne","tizno","tizon","tizos","ti\xf1an","ti\xf1as","ti\xf1en","ti\xf1es","tlaco","toaba","toada","toado","toais","toara","toare","toase","tobar","tobas","tocad","tocan","tocar","tocas","tocen","toces","tocha","toche","tocho","tocia","tocio","tocon","tocos","tocte","todas","todia","todos","toeis","toesa","tofos","togan","togar","togas","togue","tojal","tojos","tolas","tolda","tolde","toldo","toles","tolla","tollo","tolmo","tolon","tolva","tomad","toman","tomar","tomas","tomen","tomes","tomin","tomon","tomos","tonad","tonal","tonan","tonar","tonas","tonca","tondo","tonel","tonen","toner","tones","tonga","tongo","tonos","tonta","tonto","topad","topan","topar","topas","topea","topee","topen","topeo","topes","topia","topil","topon","topos","toque","toqui","toral","toras","torax","torca","torce","torci","torco","torda","tordo","torea","toree","toreo","tores","torga","torgo","toril","torio","tormo","torna","torne","torno","toron","toros","torpe","torra","torre","torro","torso","torta","torva","torvo","tosan","tosas","tosca","tosco","tosed","tosen","toser","toses","tosia","tosio","tosta","toste","tosto","total","totem","totes","totis","totol","tovas","tozad","tozal","tozan","tozar","tozas","tozos","to\xf1as","to\xf1il","traba","trabe","trabo","traca","trace","traed","traen","traer","traes","trafa","traga","trago","traia","traje","trajo","trama","trame","tramo","trapa","trape","trapo","traro","trata","trate","trato","travo","traza","trazo","trebo","trece","trefe","treja","trema","treme","tremi","tremo","trena","treno","treos","trepa","trepe","trepo","treta","triad","trial","trian","triar","trias","tribu","trice","trien","tries","triga","trigo","trile","trina","trine","trino","trios","tripa","tripe","trisa","trise","triso","triza","trizo","troca","troce","troco","troja","troje","trola","trole","trona","trone","trono","tropa","tropo","trota","trote","troto","trova","trove","trovo","troza","trozo","truca","truco","trues","trufa","trufe","trufo","truja","trusa","trust","tuani","tubas","tubos","tucan","tucas","tucia","tucos","tucun","tudas","tudel","tueca","tueco","tuera","tuero","tufea","tufee","tufeo","tufos","tuina","tular","tules","tulio","tulla","tulle","tulli","tullo","tulpa","tumba","tumbe","tumbo","tumor","tumos","tunad","tunal","tunan","tunar","tunas","tunca","tunco","tunda","tunde","tundi","tundo","tunea","tunee","tunel","tunen","tuneo","tunes","tunjo","tunos","tunta","tupan","tupas","tupen","tupes","tupia","tupid","tupin","tupio","tupir","tupis","tupos","turar","turba","turbe","turbo","turca","turco","turma","turna","turne","turno","turon","turra","turre","turro","tusad","tusan","tusar","tusas","tusca","tusco","tusen","tuses","tuson","tusos","tutas","tutea","tutee","tuteo","tutes","tutia","tutor","tutos","tutus","tuyas","tuyos","tuzas","ubica","ubico","ubies","ubios","ubres","ucase","uchus","uebos","ufana","ufane","ufano","ugres","ujier","ujule","ulaga","ulala","ulano","ulema","ulpos","ultra","uluas","ulula","ulule","ululo","umbra","umbro","umero","unais","uncen","unces","uncia","uncid","uncio","uncir","uncis","ungen","unges","ungia","ungid","ungio","ungir","ungis","unian","unias","unica","unico","unida","unido","union","unira","unire","unjan","unjas","untad","untan","untar","untas","unten","untes","untos","unzan","unzas","upaba","upada","upado","upais","upara","upare","upase","upeis","upupa","uraos","urape","urato","urbes","urcas","urces","urdan","urdas","urden","urdes","urdia","urdid","urdio","urdir","urdis","urdus","ureas","urgen","urges","urgia","urgid","urgio","urgir","urgis","urica","urico","urjan","urjas","urnas","urtas","urubu","urucu","uruga","usaba","usada","usado","usais","usaje","usara","usare","usase","useis","usgos","usias","usier","usina","usted","usual","usura","usure","usuro","utero","uvada","uvate","uveas","uvera","uvero","uviar","uvula","u\xf1ada","u\xf1ado","u\xf1ais","u\xf1ate","u\xf1era","u\xf1ere","u\xf1ero","u\xf1ese","u\xf1eta","u\xf1ian","u\xf1ias","u\xf1ida","u\xf1ido","u\xf1ira","u\xf1ire","u\xf1osa","u\xf1oso","u\xf1udo","vacad","vacan","vacar","vacas","vacia","vacie","vacio","vacos","vacua","vacuo","vadea","vadee","vadeo","vades","vados","vafea","vafee","vafeo","vagad","vagan","vagar","vagas","vagon","vagos","vague","vahad","vahan","vahar","vahas","vahea","vahee","vahen","vaheo","vahes","vahos","vaida","vaina","vajea","vajee","vajeo","valar","valed","valen","valer","vales","valet","valga","valgo","valia","valio","valis","valla","valle","vallo","valon","valor","valsa","valse","valso","valua","value","valuo","valva","vamos","vanas","vanea","vanee","vaneo","vanos","vapor","vaque","varad","varal","varan","varar","varas","varea","varee","varen","vareo","vares","varga","varia","varie","vario","varis","variz","varon","vasar","vasas","vasca","vasco","vasos","vasta","vasto","vater","vates","vatio","vayan","vayas","veais","vecen","veces","vedad","vedan","vedar","vedas","veden","vedes","vegas","veian","veias","vejad","vejan","vejar","vejas","vejen","vejes","vejez","velad","velan","velar","velas","velay","velen","veles","velis","veliz","vello","velon","velos","veloz","vemos","venal","venas","vence","venci","venda","vende","vendi","vendo","venga","vengo","venia","venid","venir","venis","venta","vente","vento","venus","venza","venzo","veran","veras","veraz","verba","verbo","verde","veres","verga","verge","veria","veril","verja","verme","vermu","veros","versa","verse","verso","verte","verti","veste","vesti","vetad","vetan","vetar","vetas","vetea","vetee","veten","veteo","vetes","veton","vetos","vezad","vezan","vezar","vezas","viada","viaja","viaje","viajo","vibra","vibre","vibro","vicha","viche","vicho","vichy","vicia","vicie","vicio","vicos","victo","vidas","video","vides","vidon","vidro","vieja","viejo","viene","viera","viere","viesa","viese","vigas","vigia","vigie","vigio","vigor","viles","villa","vilos","vimos","vinal","vinar","vinca","vinco","vinos","vinta","viola","viole","violo","virad","viral","viran","virar","viras","viren","vireo","vires","virgo","viril","virio","virol","viron","virus","visad","visan","visar","visas","visco","visea","visee","visen","viseo","vises","visir","vison","visor","visos","vista","viste","visto","vitad","vital","vitan","vitar","vitas","viten","vites","vitor","vitos","vitre","viuda","viudo","vivac","vivad","vivan","vivar","vivas","vivaz","viven","vives","vivez","vivia","vivid","vivio","vivir","vivis","vivon","vivos","vi\xf1as","voace","vocal","vocea","vocee","voceo","voces","vodca","vodus","voila","volad","volar","volas","volca","volco","volea","volee","voleo","volon","volts","volve","volvi","volvo","vomer","voraz","vosea","vosee","voseo","votad","votan","votar","votas","voten","votes","votos","votri","vozna","vozne","vozno","vudus","vuela","vuele","vuelo","vuesa","vueso","vulgo","vulto","vulva","vusco","xecas","xenon","xinca","xiote","xolas","xolos","yabas","yacal","yacas","yaced","yacen","yacer","yaces","yacia","yacio","yacon","yagan","yagas","yagua","yaiti","yales","yamao","yambo","yampa","yanas","yanta","yante","yanto","yapad","yapan","yapar","yapas","yapen","yapes","yapus","yaque","yaqui","yarda","yares","yarey","yaros","yatai","yatay","yates","yayas","yayos","yazca","yazco","yazga","yazgo","yebos","yecos","yedgo","yedra","yegua","yelgo","yelmo","yemas","yendo","yenes","yente","yeral","yerba","yerga","yergo","yerma","yerme","yermo","yerna","yerno","yeros","yerra","yerre","yerro","yersi","yerta","yerto","yervo","yesal","yesar","yesca","yeson","yesos","yetis","yeyes","yeyos","yezgo","yinas","yines","yiras","yiros","yodad","yodan","yodar","yodas","yoden","yodes","yodos","yogar","yogas","yogos","yogui","yogur","yolas","yoqui","yoris","yoses","yoyos","yucal","yucas","yucpa","yudos","yugos","yumba","yumbo","yunga","yunta","yunto","yuras","yures","yutas","yutes","yuyal","yuyos","zabra","zabro","zacas","zacea","zacee","zaceo","zades","zafad","zafan","zafar","zafas","zafen","zafes","zafia","zafio","zafir","zafon","zafos","zafra","zafre","zagal","zagas","zagua","zahen","zahon","zaida","zaina","zaino","zajon","zalas","zalba","zalbo","zalea","zalee","zaleo","zalla","zalle","zallo","zamba","zambo","zampa","zampe","zampo","zanas","zanca","zanco","zanga","zanja","zanje","zanjo","zapad","zapan","zapar","zapas","zapea","zapee","zapen","zapeo","zapes","zaque","zarbo","zarca","zarco","zares","zarja","zarpa","zarpe","zarpo","zarza","zarzo","zatas","zayas","zazas","zazos","zebra","zedas","zegri","zeina","zejel","zenda","zendo","zenes","zenit","zetas","zincs","zocad","zocan","zocar","zocas","zoclo","zocos","zofra","zoilo","zoizo","zolle","zomas","zombi","zomos","zompa","zompo","zonal","zonas","zonda","zonta","zonto","zonza","zonzo","zopas","zopes","zopos","zoque","zorra","zorro","zotal","zotes","zotol","zuavo","zubia","zudas","zueca","zueco","zuela","zuiza","zulla","zulle","zullo","zulus","zumas","zumba","zumbe","zumbo","zumos","zunas","zunza","zupia","zuras","zurba","zurce","zurci","zurda","zurde","zurdi","zurdo","zurea","zuree","zureo","zuros","zurra","zurre","zurri","zurro","zurza","zurzo","zuzar","zuzon","zu\xf1an","zu\xf1as","zu\xf1en","zu\xf1es","zu\xf1ia","zu\xf1id","zu\xf1ir","zu\xf1is","zu\xf1os","\xf1ajas","\xf1ajos","\xf1ames","\xf1ampi","\xf1andu","\xf1anga","\xf1ango","\xf1apas","\xf1aque","\xf1atas","\xf1atea","\xf1atee","\xf1ateo","\xf1atos","\xf1a\xf1as","\xf1a\xf1os","\xf1ecas","\xf1ecla","\xf1ecos","\xf1enga","\xf1engo","\xf1eque","\xf1inga","\xf1ipes","\xf1ique","\xf1ires","\xf1isca","\xf1izca","\xf1ocas","\xf1ocha","\xf1oclo","\xf1ocos","\xf1olas","\xf1onga","\xf1ongo","\xf1oqui","\xf1oras","\xf1orbo","\xf1ores","\xf1o\xf1as","\xf1o\xf1ez","\xf1o\xf1os","\xf1ublo","\xf1ucas","\xf1ucos","\xf1udos","\xf1urda","\xf1urdo","\xf1utas","\xf1utos","\xf1uzco","aback",
  "abase",
  "abate",
  "abbey",
  "abbot",
  "abhor",
  "abide",
  "abled",
  "abode",
  "abort",
  "about",
  "above",
  "abuse",
  "abyss",
  "acorn",
  "acrid",
  "actor",
  "acute",
  "adage",
  "adapt",
  "adept",
  "admin",
  "admit",
  "adobe",
  "adopt",
  "adore",
  "adorn",
  "adult",
  "affix",
  "afire",
  "afoot",
  "afoul",
  "after",
  "again",
  "agape",
  "agate",
  "agent",
  "agile",
  "aging",
  "aglow",
  "agony",
  "agree",
  "ahead",
  "aider",
  "aisle",
  "alarm",
  "album",
  "alert",
  "algae",
  "alibi",
  "alien",
  "align",
  "alike",
  "alive",
  "allay",
  "alley",
  "allot",
  "allow",
  "alloy",
  "aloft",
  "alone",
  "along",
  "aloof",
  "aloud",
  "alpha",
  "altar",
  "alter",
  "amass",
  "amaze",
  "amber",
  "amble",
  "amend",
  "amiss",
  "amity",
  "among",
  "ample",
  "amply",
  "amuse",
  "angel",
  "anger",
  "angle",
  "angry",
  "angst",
  "anime",
  "ankle",
  "annex",
  "annoy",
  "annul",
  "anode",
  "antic",
  "anvil",
  "aorta",
  "apart",
  "aphid",
  "aping",
  "apnea",
  "apple",
  "apply",
  "apron",
  "aptly",
  "arbor",
  "ardor",
  "arena",
  "argue",
  "arise",
  "armor",
  "aroma",
  "arose",
  "array",
  "arrow",
  "arson",
  "artsy",
  "ascot",
  "ashen",
  "aside",
  "askew",
  "assay",
  "asset",
  "atoll",
  "atone",
  "attic",
  "audio",
  "audit",
  "augur",
  "aunty",
  "avail",
  "avert",
  "avian",
  "avoid",
  "await",
  "awake",
  "award",
  "aware",
  "awash",
  "awful",
  "awoke",
  "axial",
  "axiom",
  "axion",
  "azure",
  "bacon",
  "badge",
  "badly",
  "bagel",
  "baggy",
  "baker",
  "baler",
  "balmy",
  "banal",
  "banjo",
  "barge",
  "baron",
  "basal",
  "basic",
  "basil",
  "basin",
  "basis",
  "baste",
  "batch",
  "bathe",
  "baton",
  "batty",
  "bawdy",
  "bayou",
  "beach",
  "beady",
  "beard",
  "beast",
  "beech",
  "beefy",
  "befit",
  "began",
  "begat",
  "beget",
  "begin",
  "begun",
  "being",
  "belch",
  "belie",
  "belle",
  "belly",
  "below",
  "bench",
  "beret",
  "berry",
  "berth",
  "beset",
  "betel",
  "bevel",
  "bezel",
  "bible",
  "bicep",
  "biddy",
  "bigot",
  "bilge",
  "billy",
  "binge",
  "bingo",
  "biome",
  "birch",
  "birth",
  "bison",
  "bitty",
  "black",
  "blade",
  "blame",
  "bland",
  "blank",
  "blare",
  "blast",
  "blaze",
  "bleak",
  "bleat",
  "bleed",
  "bleep",
  "blend",
  "bless",
  "blimp",
  "blind",
  "blink",
  "bliss",
  "blitz",
  "bloat",
  "block",
  "bloke",
  "blond",
  "blood",
  "bloom",
  "blown",
  "bluer",
  "bluff",
  "blunt",
  "blurb",
  "blurt",
  "blush",
  "board",
  "boast",
  "bobby",
  "boney",
  "bongo",
  "bonus",
  "booby",
  "boost",
  "booth",
  "booty",
  "booze",
  "boozy",
  "borax",
  "borne",
  "bosom",
  "bossy",
  "botch",
  "bough",
  "boule",
  "bound",
  "bowel",
  "boxer",
  "brace",
  "braid",
  "brain",
  "brake",
  "brand",
  "brash",
  "brass",
  "brave",
  "bravo",
  "brawl",
  "brawn",
  "bread",
  "break",
  "breed",
  "briar",
  "bribe",
  "brick",
  "bride",
  "brief",
  "brine",
  "bring",
  "brink",
  "briny",
  "brisk",
  "broad",
  "broil",
  "broke",
  "brood",
  "brook",
  "broom",
  "broth",
  "brown",
  "brunt",
  "brush",
  "brute",
  "buddy",
  "budge",
  "buggy",
  "bugle",
  "build",
  "built",
  "bulge",
  "bulky",
  "bully",
  "bunch",
  "bunny",
  "burly",
  "burnt",
  "burst",
  "bused",
  "bushy",
  "butch",
  "butte",
  "buxom",
  "buyer",
  "bylaw",
  "cabal",
  "cabby",
  "cabin",
  "cable",
  "cacao",
  "cache",
  "cacti",
  "caddy",
  "cadet",
  "cagey",
  "cairn",
  "camel",
  "cameo",
  "canal",
  "candy",
  "canny",
  "canoe",
  "canon",
  "caper",
  "caput",
  "carat",
  "cargo",
  "carol",
  "carry",
  "carve",
  "caste",
  "catch",
  "cater",
  "catty",
  "caulk",
  "cause",
  "cavil",
  "cease",
  "cedar",
  "cello",
  "chafe",
  "chaff",
  "chain",
  "chair",
  "chalk",
  "champ",
  "chant",
  "chaos",
  "chard",
  "charm",
  "chart",
  "chase",
  "chasm",
  "cheap",
  "cheat",
  "check",
  "cheek",
  "cheer",
  "chess",
  "chest",
  "chick",
  "chide",
  "chief",
  "child",
  "chili",
  "chill",
  "chime",
  "china",
  "chirp",
  "chock",
  "choir",
  "choke",
  "chord",
  "chore",
  "chose",
  "chuck",
  "chump",
  "chunk",
  "churn",
  "chute",
  "cider",
  "cigar",
  "cinch",
  "circa",
  "civic",
  "civil",
  "clack",
  "claim",
  "clamp",
  "clang",
  "clank",
  "clash",
  "clasp",
  "class",
  "clean",
  "clear",
  "cleat",
  "cleft",
  "clerk",
  "click",
  "cliff",
  "climb",
  "cling",
  "clink",
  "cloak",
  "clock",
  "clone",
  "close",
  "cloth",
  "cloud",
  "clout",
  "clove",
  "clown",
  "cluck",
  "clued",
  "clump",
  "clung",
  "coach",
  "coast",
  "cobra",
  "cocoa",
  "colon",
  "color",
  "comet",
  "comfy",
  "comic",
  "comma",
  "conch",
  "condo",
  "conic",
  "copse",
  "coral",
  "corer",
  "corny",
  "couch",
  "cough",
  "could",
  "count",
  "coupe",
  "court",
  "coven",
  "cover",
  "covet",
  "covey",
  "cower",
  "coyly",
  "crack",
  "craft",
  "cramp",
  "crane",
  "crank",
  "crash",
  "crass",
  "crate",
  "crave",
  "crawl",
  "craze",
  "crazy",
  "creak",
  "cream",
  "credo",
  "creed",
  "creek",
  "creep",
  "creme",
  "crepe",
  "crept",
  "cress",
  "crest",
  "crick",
  "cried",
  "crier",
  "crime",
  "crimp",
  "crisp",
  "croak",
  "crock",
  "crone",
  "crony",
  "crook",
  "cross",
  "croup",
  "crowd",
  "crown",
  "crude",
  "cruel",
  "crumb",
  "crump",
  "crush",
  "crust",
  "crypt",
  "cubic",
  "cumin",
  "curio",
  "curly",
  "curry",
  "curse",
  "curve",
  "curvy",
  "cutie",
  "cyber",
  "cycle",
  "cynic",
  "daddy",
  "daily",
  "dairy",
  "daisy",
  "dally",
  "dance",
  "dandy",
  "datum",
  "daunt",
  "dealt",
  "death",
  "debar",
  "debit",
  "debug",
  "debut",
  "decal",
  "decay",
  "decor",
  "decoy",
  "decry",
  "defer",
  "deign",
  "deity",
  "delay",
  "delta",
  "delve",
  "demon",
  "demur",
  "denim",
  "dense",
  "depot",
  "depth",
  "derby",
  "deter",
  "detox",
  "deuce",
  "devil",
  "diary",
  "dicey",
  "digit",
  "dilly",
  "dimly",
  "diner",
  "dingo",
  "dingy",
  "diode",
  "dirge",
  "dirty",
  "disco",
  "ditch",
  "ditto",
  "ditty",
  "diver",
  "dizzy",
  "dodge",
  "dodgy",
  "dogma",
  "doing",
  "dolly",
  "donor",
  "donut",
  "dopey",
  "doubt",
  "dough",
  "dowdy",
  "dowel",
  "downy",
  "dowry",
  "dozen",
  "draft",
  "drain",
  "drake",
  "drama",
  "drank",
  "drape",
  "drawl",
  "drawn",
  "dread",
  "dream",
  "dress",
  "dried",
  "drier",
  "drift",
  "drill",
  "drink",
  "drive",
  "droit",
  "droll",
  "drone",
  "drool",
  "droop",
  "dross",
  "drove",
  "drown",
  "druid",
  "drunk",
  "dryer",
  "dryly",
  "duchy",
  "dully",
  "dummy",
  "dumpy",
  "dunce",
  "dusky",
  "dusty",
  "dutch",
  "duvet",
  "dwarf",
  "dwell",
  "dwelt",
  "dying",
  "eager",
  "eagle",
  "early",
  "earth",
  "easel",
  "eaten",
  "eater",
  "ebony",
  "eclat",
  "edict",
  "edify",
  "eerie",
  "egret",
  "eight",
  "eject",
  "eking",
  "elate",
  "elbow",
  "elder",
  "elect",
  "elegy",
  "elfin",
  "elide",
  "elite",
  "elope",
  "elude",
  "email",
  "embed",
  "ember",
  "emcee",
  "empty",
  "enact",
  "endow",
  "enema",
  "enemy",
  "enjoy",
  "ennui",
  "ensue",
  "enter",
  "entry",
  "envoy",
  "epoch",
  "epoxy",
  "equal",
  "equip",
  "erase",
  "erect",
  "erode",
  "error",
  "erupt",
  "essay",
  "ester",
  "ether",
  "ethic",
  "ethos",
  "etude",
  "evade",
  "event",
  "every",
  "evict",
  "evoke",
  "exact",
  "exalt",
  "excel",
  "exert",
  "exile",
  "exist",
  "expel",
  "extol",
  "extra",
  "exult",
  "eying",
  "fable",
  "facet",
  "faint",
  "fairy",
  "faith",
  "false",
  "fancy",
  "fanny",
  "farce",
  "fatal",
  "fatty",
  "fault",
  "fauna",
  "favor",
  "feast",
  "fecal",
  "feign",
  "fella",
  "felon",
  "femme",
  "femur",
  "fence",
  "feral",
  "ferry",
  "fetal",
  "fetch",
  "fetid",
  "fetus",
  "fever",
  "fewer",
  "fiber",
  "ficus",
  "field",
  "fiend",
  "fiery",
  "fifth",
  "fifty",
  "fight",
  "filer",
  "filet",
  "filly",
  "filmy",
  "filth",
  "final",
  "finch",
  "finer",
  "first",
  "fishy",
  "fixer",
  "fizzy",
  "fjord",
  "flack",
  "flail",
  "flair",
  "flake",
  "flaky",
  "flame",
  "flank",
  "flare",
  "flash",
  "flask",
  "fleck",
  "fleet",
  "flesh",
  "flick",
  "flier",
  "fling",
  "flint",
  "flirt",
  "float",
  "flock",
  "flood",
  "floor",
  "flora",
  "floss",
  "flour",
  "flout",
  "flown",
  "fluff",
  "fluid",
  "fluke",
  "flume",
  "flung",
  "flunk",
  "flush",
  "flute",
  "flyer",
  "foamy",
  "focal",
  "focus",
  "foggy",
  "foist",
  "folio",
  "folly",
  "foray",
  "force",
  "forge",
  "forgo",
  "forte",
  "forth",
  "forty",
  "forum",
  "found",
  "foyer",
  "frail",
  "frame",
  "frank",
  "fraud",
  "freak",
  "freed",
  "freer",
  "fresh",
  "friar",
  "fried",
  "frill",
  "frisk",
  "fritz",
  "frock",
  "frond",
  "front",
  "frost",
  "froth",
  "frown",
  "froze",
  "fruit",
  "fudge",
  "fugue",
  "fully",
  "fungi",
  "funky",
  "funny",
  "furor",
  "furry",
  "fussy",
  "fuzzy",
  "gaffe",
  "gaily",
  "gamer",
  "gamma",
  "gamut",
  "gassy",
  "gaudy",
  "gauge",
  "gaunt",
  "gauze",
  "gavel",
  "gawky",
  "gayer",
  "gayly",
  "gazer",
  "gecko",
  "geeky",
  "geese",
  "genie",
  "genre",
  "ghost",
  "ghoul",
  "giant",
  "giddy",
  "gipsy",
  "girly",
  "girth",
  "given",
  "giver",
  "glade",
  "gland",
  "glare",
  "glass",
  "glaze",
  "gleam",
  "glean",
  "glide",
  "glint",
  "gloat",
  "globe",
  "gloom",
  "glory",
  "gloss",
  "glove",
  "glyph",
  "gnash",
  "gnome",
  "godly",
  "going",
  "golem",
  "golly",
  "gonad",
  "goner",
  "goody",
  "gooey",
  "goofy",
  "goose",
  "gorge",
  "gouge",
  "gourd",
  "grace",
  "grade",
  "graft",
  "grail",
  "grain",
  "grand",
  "grant",
  "grape",
  "graph",
  "grasp",
  "grass",
  "grate",
  "grave",
  "gravy",
  "graze",
  "great",
  "greed",
  "green",
  "greet",
  "grief",
  "grill",
  "grime",
  "grimy",
  "grind",
  "gripe",
  "groan",
  "groin",
  "groom",
  "grope",
  "gross",
  "group",
  "grout",
  "grove",
  "growl",
  "grown",
  "gruel",
  "gruff",
  "grunt",
  "guard",
  "guava",
  "guess",
  "guest",
  "guide",
  "guild",
  "guile",
  "guilt",
  "guise",
  "gulch",
  "gully",
  "gumbo",
  "gummy",
  "guppy",
  "gusto",
  "gusty",
  "gypsy",
  "habit",
  "hairy",
  "halve",
  "handy",
  "happy",
  "hardy",
  "harem",
  "harpy",
  "harry",
  "harsh",
  "haste",
  "hasty",
  "hatch",
  "hater",
  "haunt",
  "haute",
  "haven",
  "havoc",
  "hazel",
  "heady",
  "heard",
  "heart",
  "heath",
  "heave",
  "heavy",
  "hedge",
  "hefty",
  "heist",
  "helix",
  "hello",
  "hence",
  "heron",
  "hilly",
  "hinge",
  "hippo",
  "hippy",
  "hitch",
  "hoard",
  "hobby",
  "hoist",
  "holly",
  "homer",
  "honey",
  "honor",
  "horde",
  "horny",
  "horse",
  "hotel",
  "hotly",
  "hound",
  "house",
  "hovel",
  "hover",
  "howdy",
  "human",
  "humid",
  "humor",
  "humph",
  "humus",
  "hunch",
  "hunky",
  "hurry",
  "husky",
  "hussy",
  "hutch",
  "hydro",
  "hyena",
  "hymen",
  "hyper",
  "icily",
  "icing",
  "ideal",
  "idiom",
  "idiot",
  "idler",
  "idyll",
  "igloo",
  "iliac",
  "image",
  "imbue",
  "impel",
  "imply",
  "inane",
  "inbox",
  "incur",
  "index",
  "inept",
  "inert",
  "infer",
  "ingot",
  "inlay",
  "inlet",
  "inner",
  "input",
  "inter",
  "intro",
  "ionic",
  "irate",
  "irony",
  "islet",
  "issue",
  "itchy",
  "ivory",
  "jaunt",
  "jazzy",
  "jelly",
  "jerky",
  "jetty",
  "jewel",
  "jiffy",
  "joint",
  "joist",
  "joker",
  "jolly",
  "joust",
  "judge",
  "juice",
  "juicy",
  "jumbo",
  "jumpy",
  "junta",
  "junto",
  "juror",
  "kappa",
  "karma",
  "kayak",
  "kebab",
  "khaki",
  "kinky",
  "kiosk",
  "kitty",
  "knack",
  "knave",
  "knead",
  "kneed",
  "kneel",
  "knelt",
  "knife",
  "knock",
  "knoll",
  "known",
  "koala",
  "krill",
  "label",
  "labor",
  "laden",
  "ladle",
  "lager",
  "lance",
  "lanky",
  "lapel",
  "lapse",
  "large",
  "larva",
  "lasso",
  "latch",
  "later",
  "lathe",
  "latte",
  "laugh",
  "layer",
  "leach",
  "leafy",
  "leaky",
  "leant",
  "leapt",
  "learn",
  "lease",
  "leash",
  "least",
  "leave",
  "ledge",
  "leech",
  "leery",
  "lefty",
  "legal",
  "leggy",
  "lemon",
  "lemur",
  "leper",
  "level",
  "lever",
  "libel",
  "liege",
  "light",
  "liken",
  "lilac",
  "limbo",
  "limit",
  "linen",
  "liner",
  "lingo",
  "lipid",
  "lithe",
  "liver",
  "livid",
  "llama",
  "loamy",
  "loath",
  "lobby",
  "local",
  "locus",
  "lodge",
  "lofty",
  "logic",
  "login",
  "loopy",
  "loose",
  "lorry",
  "loser",
  "louse",
  "lousy",
  "lover",
  "lower",
  "lowly",
  "loyal",
  "lucid",
  "lucky",
  "lumen",
  "lumpy",
  "lunar",
  "lunch",
  "lunge",
  "lupus",
  "lurch",
  "lurid",
  "lusty",
  "lying",
  "lymph",
  "lyric",
  "macaw",
  "macho",
  "macro",
  "madam",
  "madly",
  "mafia",
  "magic",
  "magma",
  "maize",
  "major",
  "maker",
  "mambo",
  "mamma",
  "mammy",
  "manga",
  "mange",
  "mango",
  "mangy",
  "mania",
  "manic",
  "manly",
  "manor",
  "maple",
  "march",
  "marry",
  "marsh",
  "mason",
  "masse",
  "match",
  "matey",
  "mauve",
  "maxim",
  "maybe",
  "mayor",
  "mealy",
  "meant",
  "meaty",
  "mecca",
  "medal",
  "media",
  "medic",
  "melee",
  "melon",
  "mercy",
  "merge",
  "merit",
  "merry",
  "metal",
  "meter",
  "metro",
  "micro",
  "midge",
  "midst",
  "might",
  "milky",
  "mimic",
  "mince",
  "miner",
  "minim",
  "minor",
  "minty",
  "minus",
  "mirth",
  "miser",
  "missy",
  "mocha",
  "modal",
  "model",
  "modem",
  "mogul",
  "moist",
  "molar",
  "moldy",
  "money",
  "month",
  "moody",
  "moose",
  "moral",
  "moron",
  "morph",
  "mossy",
  "motel",
  "motif",
  "motor",
  "motto",
  "moult",
  "mound",
  "mount",
  "mourn",
  "mouse",
  "mouth",
  "mover",
  "movie",
  "mower",
  "mucky",
  "mucus",
  "muddy",
  "mulch",
  "mummy",
  "munch",
  "mural",
  "murky",
  "mushy",
  "music",
  "musky",
  "musty",
  "myrrh",
  "nadir",
  "naive",
  "nanny",
  "nasal",
  "nasty",
  "natal",
  "naval",
  "navel",
  "needy",
  "neigh",
  "nerdy",
  "nerve",
  "never",
  "newer",
  "newly",
  "nicer",
  "niche",
  "niece",
  "night",
  "ninja",
  "ninny",
  "ninth",
  "noble",
  "nobly",
  "noise",
  "noisy",
  "nomad",
  "noose",
  "north",
  "nosey",
  "notch",
  "novel",
  "nudge",
  "nurse",
  "nutty",
  "nylon",
  "nymph",
  "oaken",
  "obese",
  "occur",
  "ocean",
  "octal",
  "octet",
  "odder",
  "oddly",
  "offal",
  "offer",
  "often",
  "olden",
  "older",
  "olive",
  "ombre",
  "omega",
  "onion",
  "onset",
  "opera",
  "opine",
  "opium",
  "optic",
  "orbit",
  "order",
  "organ",
  "other",
  "otter",
  "ought",
  "ounce",
  "outdo",
  "outer",
  "outgo",
  "ovary",
  "ovate",
  "overt",
  "ovine",
  "ovoid",
  "owing",
  "owner",
  "oxide",
  "ozone",
  "paddy",
  "pagan",
  "paint",
  "paler",
  "palsy",
  "panel",
  "panic",
  "pansy",
  "papal",
  "paper",
  "parer",
  "parka",
  "parry",
  "parse",
  "party",
  "pasta",
  "paste",
  "pasty",
  "patch",
  "patio",
  "patsy",
  "patty",
  "pause",
  "payee",
  "payer",
  "peace",
  "peach",
  "pearl",
  "pecan",
  "pedal",
  "penal",
  "pence",
  "penne",
  "penny",
  "perch",
  "peril",
  "perky",
  "pesky",
  "pesto",
  "petal",
  "petty",
  "phase",
  "phone",
  "phony",
  "photo",
  "piano",
  "picky",
  "piece",
  "piety",
  "piggy",
  "pilot",
  "pinch",
  "piney",
  "pinky",
  "pinto",
  "piper",
  "pique",
  "pitch",
  "pithy",
  "pivot",
  "pixel",
  "pixie",
  "pizza",
  "place",
  "plaid",
  "plain",
  "plait",
  "plane",
  "plank",
  "plant",
  "plate",
  "plaza",
  "plead",
  "pleat",
  "plied",
  "plier",
  "pluck",
  "plumb",
  "plume",
  "plump",
  "plunk",
  "plush",
  "poesy",
  "point",
  "poise",
  "poker",
  "polar",
  "polka",
  "polyp",
  "pooch",
  "poppy",
  "porch",
  "poser",
  "posit",
  "posse",
  "pouch",
  "pound",
  "pouty",
  "power",
  "prank",
  "prawn",
  "preen",
  "press",
  "price",
  "prick",
  "pride",
  "pried",
  "prime",
  "primo",
  "print",
  "prior",
  "prism",
  "privy",
  "prize",
  "probe",
  "prone",
  "prong",
  "proof",
  "prose",
  "proud",
  "prove",
  "prowl",
  "proxy",
  "prude",
  "prune",
  "psalm",
  "pubic",
  "pudgy",
  "puffy",
  "pulpy",
  "pulse",
  "punch",
  "pupil",
  "puppy",
  "puree",
  "purer",
  "purge",
  "purse",
  "pushy",
  "putty",
  "pygmy",
  "quack",
  "quail",
  "quake",
  "qualm",
  "quark",
  "quart",
  "quash",
  "quasi",
  "queen",
  "queer",
  "quell",
  "query",
  "quest",
  "queue",
  "quick",
  "quiet",
  "quill",
  "quilt",
  "quirk",
  "quite",
  "quota",
  "quote",
  "quoth",
  "rabbi",
  "rabid",
  "racer",
  "radar",
  "radii",
  "radio",
  "rainy",
  "raise",
  "rajah",
  "rally",
  "ralph",
  "ramen",
  "ranch",
  "randy",
  "range",
  "rapid",
  "rarer",
  "raspy",
  "ratio",
  "ratty",
  "raven",
  "rayon",
  "razor",
  "reach",
  "react",
  "ready",
  "realm",
  "rearm",
  "rebar",
  "rebel",
  "rebus",
  "rebut",
  "recap",
  "recur",
  "recut",
  "reedy",
  "refer",
  "refit",
  "regal",
  "rehab",
  "reign",
  "relax",
  "relay",
  "relic",
  "remit",
  "renal",
  "renew",
  "repay",
  "repel",
  "reply",
  "rerun",
  "reset",
  "resin",
  "retch",
  "retro",
  "retry",
  "reuse",
  "revel",
  "revue",
  "rhino",
  "rhyme",
  "rider",
  "ridge",
  "rifle",
  "right",
  "rigid",
  "rigor",
  "rinse",
  "ripen",
  "riper",
  "risen",
  "riser",
  "risky",
  "rival",
  "river",
  "rivet",
  "roach",
  "roast",
  "robin",
  "robot",
  "rocky",
  "rodeo",
  "roger",
  "rogue",
  "roomy",
  "roost",
  "rotor",
  "rouge",
  "rough",
  "round",
  "rouse",
  "route",
  "rover",
  "rowdy",
  "rower",
  "royal",
  "ruddy",
  "ruder",
  "rugby",
  "ruler",
  "rumba",
  "rumor",
  "rupee",
  "rural",
  "rusty",
  "sadly",
  "safer",
  "saint",
  "salad",
  "sally",
  "salon",
  "salsa",
  "salty",
  "salve",
  "salvo",
  "sandy",
  "saner",
  "sappy",
  "sassy",
  "satin",
  "satyr",
  "sauce",
  "saucy",
  "sauna",
  "saute",
  "savor",
  "savoy",
  "savvy",
  "scald",
  "scale",
  "scalp",
  "scaly",
  "scamp",
  "scant",
  "scare",
  "scarf",
  "scary",
  "scene",
  "scent",
  "scion",
  "scoff",
  "scold",
  "scone",
  "scoop",
  "scope",
  "score",
  "scorn",
  "scour",
  "scout",
  "scowl",
  "scram",
  "scrap",
  "scree",
  "screw",
  "scrub",
  "scrum",
  "scuba",
  "sedan",
  "seedy",
  "segue",
  "seize",
  "semen",
  "sense",
  "sepia",
  "serif",
  "serum",
  "serve",
  "setup",
  "seven",
  "sever",
  "sewer",
  "shack",
  "shade",
  "shady",
  "shaft",
  "shake",
  "shaky",
  "shale",
  "shall",
  "shalt",
  "shame",
  "shank",
  "shape",
  "shard",
  "share",
  "shark",
  "sharp",
  "shave",
  "shawl",
  "shear",
  "sheen",
  "sheep",
  "sheer",
  "sheet",
  "sheik",
  "shelf",
  "shell",
  "shied",
  "shift",
  "shine",
  "shiny",
  "shire",
  "shirk",
  "shirt",
  "shoal",
  "shock",
  "shone",
  "shook",
  "shoot",
  "shore",
  "shorn",
  "short",
  "shout",
  "shove",
  "shown",
  "showy",
  "shrew",
  "shrub",
  "shrug",
  "shuck",
  "shunt",
  "shush",
  "shyly",
  "siege",
  "sieve",
  "sight",
  "sigma",
  "silky",
  "silly",
  "since",
  "sinew",
  "singe",
  "siren",
  "sissy",
  "sixth",
  "sixty",
  "skate",
  "skier",
  "skiff",
  "skill",
  "skimp",
  "skirt",
  "skulk",
  "skull",
  "skunk",
  "slack",
  "slain",
  "slang",
  "slant",
  "slash",
  "slate",
  "sleek",
  "sleep",
  "sleet",
  "slept",
  "slice",
  "slick",
  "slide",
  "slime",
  "slimy",
  "sling",
  "slink",
  "sloop",
  "slope",
  "slosh",
  "sloth",
  "slump",
  "slung",
  "slunk",
  "slurp",
  "slush",
  "slyly",
  "smack",
  "small",
  "smart",
  "smash",
  "smear",
  "smell",
  "smelt",
  "smile",
  "smirk",
  "smite",
  "smith",
  "smock",
  "smoke",
  "smoky",
  "smote",
  "snack",
  "snail",
  "snake",
  "snaky",
  "snare",
  "snarl",
  "sneak",
  "sneer",
  "snide",
  "sniff",
  "snipe",
  "snoop",
  "snore",
  "snort",
  "snout",
  "snowy",
  "snuck",
  "snuff",
  "soapy",
  "sober",
  "soggy",
  "solar",
  "solid",
  "solve",
  "sonar",
  "sonic",
  "sooth",
  "sooty",
  "sorry",
  "sound",
  "south",
  "sower",
  "space",
  "spade",
  "spank",
  "spare",
  "spark",
  "spasm",
  "spawn",
  "speak",
  "spear",
  "speck",
  "speed",
  "spell",
  "spelt",
  "spend",
  "spent",
  "sperm",
  "spice",
  "spicy",
  "spied",
  "spiel",
  "spike",
  "spiky",
  "spill",
  "spilt",
  "spine",
  "spiny",
  "spire",
  "spite",
  "splat",
  "split",
  "spoil",
  "spoke",
  "spoof",
  "spook",
  "spool",
  "spoon",
  "spore",
  "sport",
  "spout",
  "spray",
  "spree",
  "sprig",
  "spunk",
  "spurn",
  "spurt",
  "squad",
  "squat",
  "squib",
  "stack",
  "staff",
  "stage",
  "staid",
  "stain",
  "stair",
  "stake",
  "stale",
  "stalk",
  "stall",
  "stamp",
  "stand",
  "stank",
  "stare",
  "stark",
  "start",
  "stash",
  "state",
  "stave",
  "stead",
  "steak",
  "steal",
  "steam",
  "steed",
  "steel",
  "steep",
  "steer",
  "stein",
  "stern",
  "stick",
  "stiff",
  "still",
  "stilt",
  "sting",
  "stink",
  "stint",
  "stock",
  "stoic",
  "stoke",
  "stole",
  "stomp",
  "stone",
  "stony",
  "stood",
  "stool",
  "stoop",
  "store",
  "stork",
  "storm",
  "story",
  "stout",
  "stove",
  "strap",
  "straw",
  "stray",
  "strip",
  "strut",
  "stuck",
  "study",
  "stuff",
  "stump",
  "stung",
  "stunk",
  "stunt",
  "style",
  "suave",
  "sugar",
  "suing",
  "suite",
  "sulky",
  "sully",
  "sumac",
  "sunny",
  "super",
  "surer",
  "surge",
  "surly",
  "sushi",
  "swami",
  "swamp",
  "swarm",
  "swash",
  "swath",
  "swear",
  "sweat",
  "sweep",
  "sweet",
  "swell",
  "swept",
  "swift",
  "swill",
  "swine",
  "swing",
  "swirl",
  "swish",
  "swoon",
  "swoop",
  "sword",
  "swore",
  "sworn",
  "swung",
  "synod",
  "syrup",
  "tabby",
  "table",
  "taboo",
  "tacit",
  "tacky",
  "taffy",
  "taint",
  "taken",
  "taker",
  "tally",
  "talon",
  "tamer",
  "tango",
  "tangy",
  "taper",
  "tapir",
  "tardy",
  "tarot",
  "taste",
  "tasty",
  "tatty",
  "taunt",
  "tawny",
  "teach",
  "teary",
  "tease",
  "teddy",
  "teeth",
  "tempo",
  "tenet",
  "tenor",
  "tense",
  "tenth",
  "tepee",
  "tepid",
  "terra",
  "terse",
  "testy",
  "thank",
  "theft",
  "their",
  "theme",
  "there",
  "these",
  "theta",
  "thick",
  "thief",
  "thigh",
  "thing",
  "think",
  "third",
  "thong",
  "thorn",
  "those",
  "three",
  "threw",
  "throb",
  "throw",
  "thrum",
  "thumb",
  "thump",
  "thyme",
  "tiara",
  "tibia",
  "tidal",
  "tiger",
  "tight",
  "tilde",
  "timer",
  "timid",
  "tipsy",
  "titan",
  "tithe",
  "title",
  "toast",
  "today",
  "toddy",
  "token",
  "tonal",
  "tonga",
  "tonic",
  "tooth",
  "topaz",
  "topic",
  "torch",
  "torso",
  "torus",
  "total",
  "totem",
  "touch",
  "tough",
  "towel",
  "tower",
  "toxic",
  "toxin",
  "trace",
  "track",
  "tract",
  "trade",
  "trail",
  "train",
  "trait",
  "tramp",
  "trash",
  "trawl",
  "tread",
  "treat",
  "trend",
  "triad",
  "trial",
  "tribe",
  "trice",
  "trick",
  "tried",
  "tripe",
  "trite",
  "troll",
  "troop",
  "trope",
  "trout",
  "trove",
  "truce",
  "truck",
  "truer",
  "truly",
  "trump",
  "trunk",
  "truss",
  "trust",
  "truth",
  "tryst",
  "tubal",
  "tuber",
  "tulip",
  "tulle",
  "tumor",
  "tunic",
  "turbo",
  "tutor",
  "twang",
  "tweak",
  "tweed",
  "tweet",
  "twice",
  "twine",
  "twirl",
  "twist",
  "twixt",
  "tying",
  "udder",
  "ulcer",
  "ultra",
  "umbra",
  "uncle",
  "uncut",
  "under",
  "undid",
  "undue",
  "unfed",
  "unfit",
  "unify",
  "union",
  "unite",
  "unity",
  "unlit",
  "unmet",
  "unset",
  "untie",
  "until",
  "unwed",
  "unzip",
  "upper",
  "upset",
  "urban",
  "urine",
  "usage",
  "usher",
  "using",
  "usual",
  "usurp",
  "utile",
  "utter",
  "vague",
  "valet",
  "valid",
  "valor",
  "value",
  "valve",
  "vapid",
  "vapor",
  "vault",
  "vaunt",
  "vegan",
  "venom",
  "venue",
  "verge",
  "verse",
  "verso",
  "verve",
  "vicar",
  "video",
  "vigil",
  "vigor",
  "villa",
  "vinyl",
  "viola",
  "viper",
  "viral",
  "virus",
  "visit",
  "visor",
  "vista",
  "vital",
  "vivid",
  "vixen",
  "vocal",
  "vodka",
  "vogue",
  "voice",
  "voila",
  "vomit",
  "voter",
  "vouch",
  "vowel",
  "vying",
  "wacky",
  "wafer",
  "wager",
  "wagon",
  "waist",
  "waive",
  "waltz",
  "warty",
  "waste",
  "watch",
  "water",
  "waver",
  "waxen",
  "weary",
  "weave",
  "wedge",
  "weedy",
  "weigh",
  "weird",
  "welch",
  "welsh",
  "whack",
  "whale",
  "wharf",
  "wheat",
  "wheel",
  "whelp",
  "where",
  "which",
  "whiff",
  "while",
  "whine",
  "whiny",
  "whirl",
  "whisk",
  "white",
  "whole",
  "whoop",
  "whose",
  "widen",
  "wider",
  "widow",
  "width",
  "wield",
  "wight",
  "willy",
  "wimpy",
  "wince",
  "winch",
  "windy",
  "wiser",
  "wispy",
  "witch",
  "witty",
  "woken",
  "woman",
  "women",
  "woody",
  "wooer",
  "wooly",
  "woozy",
  "wordy",
  "world",
  "worry",
  "worse",
  "worst",
  "worth",
  "would",
  "wound",
  "woven",
  "wrack",
  "wrath",
  "wreak",
  "wreck",
  "wrest",
  "wring",
  "wrist",
  "write",
  "wrong",
  "wrote",
  "wrung",
  "wryly",
  "yacht",
  "yearn",
  "yeast",
  "yield",
  "young",
  "youth",
  "zebra",
  "zesty",
  "zonal"
    ],
    argentina: [
        "wacha","wacho","diego","burra","huevo","messi","cheto","birra","bondi","pucho","grasa","curro","guita","bocha","capos","lucas","gamba","groso","viejo","posta","facha","morfa","tujes","chupa","torra","gedes","garca","holis","waska","ruchi","ripeo","rapon","pajin","ontas","otaku","ndeah","\xf1aupa","naisu","napia","mufar","minon","mimir","malay","macri","lorca","lcddl","kenai","junar","jovie","jermu","garso","furro","fulbo","finde","crack","chupi","boloh","bendi","bachi","nashe","skere","aijue","wache","ladri","fiolo","frula","geder","yeite","grela","araca","garco","ajoba","murra","nerca","michi","upite","pesto","chuia","siome","yirar","jabru","ratis","trolo","porfa","porfi","fiera","guaso","culia","culea","ocote","junar","kirka","chato","croic","croto","iendo","priti","sivua","botea","qloqe","lungo","lompa","malco","juira","manso","mansa","fiera","guaso","culia","culea","ocote","junar","kirka","chato","croio","croto","iendo","priti","sivua","botea","qloqe","lungo","lompa","malco","juira","manso","mansa","peron","miron","minon","telos","jabru","gilun","cufea","gonca","gaver","govir","virgo","tongo","taita","minga","grilo","catre","funyi","feite","messi","bocha","ceibo","truco","choto","asado","tango","lucas","zafar","orsai","mango","curro","garca","lompa","minga","facha","biaba","fiaca","grosa","porra","pique","nashe","skere","zapan","yirar","rajar","prepo","ligar","punga","jodon","plomo","junar","gilun","garra","funyi","croto","nocau","cucha","murra","corno","remis","upita","ceibo","quino","zapan","pique","nocau","murra","cucha","jodon","biaba","orsai","gilda","govir","totin","cafua","orgas","crota","vesre","pichi","chano","ferne","curda","taita","taura","lunga","liero","broli","pelpa","fuira","fecas","zapis","chobi","choma","gotan","jerco","langa","lleca","rioba","soque","zapie","prode","compa","combi","utaco","otaku","genia","\xf1eris","ortea","pijon","delpo","paqui","pakis","yugar","rrope"
    ],
    chile: [
    "bacan", "buche", "cabra", "cacha", "chapa", "choro", "curao", "denso", "fallo", "ficha", "fonda", "freak", "fresa", "ganso", "guata", "huaso", "jotes", "lanza", "lateo", "lesea", "longi", "lucas", "machi", "micro", "minas", "minos", "nanai", "piola", "polvo", "quina", "rasca", "sapos", "socio", "talla", "tacos", "tatas", "tollo", "tutos", "vacas", "vireo", "yunta", "zombi", "qliao","balsa", "bamba", "banjo", "barra", "batea", "bello", "bemba", "bicho", "birra", "bocha", 
    "bombo", "borra", "botar", "broca", "bruto", "buena", "bueno", "burro", "busca", "cacho", 
    "cafia", "caida", "calle", "calma", "canto", "capos", "carga", "carpa", "carta", "casco", 
    "causa", "cebra", "celos", "cepas", "cerdo", "chala", "chato", "chela", "chile", 
    "china", "chino", "chiva", "chivo", "choco", "chula", "chulo", "chupa", "chuzo", "clavo", 
    "cleta", "coima", "combo", "compa", "conti", "copas", "copeo", "copla", "corta", "corto", 
    "cosca", "costo", "crema", "crudo", "cuate", "cueca", "cuero", "culpa", "cumpa", "curda", 
    "cursi", "darlo", "darse", "dateo", "dedos", "dejar", "demas", "diuca", "dobla", "droga", 
    "dulce", "duros", "enano", "entra", "envio", "facho", "falla", "farra", "feria", "filar", 
    "fleto", "flojo", "forro", "freno", "fruta", "funar", "gallo", "gansa", "garpa", "garra", 
    "gatos", "giles", "gorra", "grasa", "guapo", "guion", "harto", "hueco", "hueon", "hueva", 
    "huevo", "jaiva", "jalar", "joder", "jugar", "junta", "lacho", "latas", "leche", "lento", 
    "leseo", "listo", "llave", "lolas", "lucho", "lukas", "macul", "mafia", "manco", "mango", 
    "manos", "marca", "matar", "mateo", "media", "medio", "merca", "mesas", "michi", "micos", 
    "miras", "mitos", "mocha", "moles", "monda", "monos", "morro", "mosca", "mosto", "motel", 
    "mover", "mueca", "muela", "mujer", "multa", "naipe", "nariz", "negro", "nenes", "niuna", 
    "noche", "norte", "novio", "nueve", "nunca", "ñecla", "ojala", "ojota", "okupa",  
    "opera", "orden", "pagar", "paila", "palta", "panas", "panco", "panda", "pañal", "parar", 
    "patas", "patio", "patos", "patuo", "payas", "peces", "pedir", "pelar", "pelos", "penar", 
    "penca", "penka", "peñas", "perla", "perno", "perro", "pesos", "pesto", "petas", "pezca", 
    "picar", "pichi", "picos", "pieza", "pilla", "pillo", "pinta", "pinto", "pisar", "pisco", 
    "plata", "plomo", "pluma", "pobre", "pocos", "poder", "pollo", "poner", "porro", "posta", 
    "preso", "prima", "primo", "promo", "pucho", "pudin", "punga", "punta", "punto", "queda", 
    "queso", "rajar", "raton", "rayar", "ricas", "ricos", "rifar", "riles", "rinde", "ritos", 
    "robar", "rocha", "rollo", "rompe", "rorro", "rosca", "rubia", "rubio", "ruido", "rumba", 
    "rumbo", "saber", "sacar", "salas", "salir", "salsa", "salto", "saque", "secar", "senda", 
    "serio", "sesos", "siete", "silla", "sonar", "sopas", "soplo", "suave", "subir", "sucio", 
    "sueco", "suena", "sueno", "sumar", "super", "tabla", "tarro", "techo", "tecla", "telas", 
    "temas", "tener", "tenis", "tetas", "tieso", "tinca", "tinto", "tipos", "tirar", "tocar", 
    "tomar", "tonto", "toque", "torta", "tosco", "trago", "traro", "trigo", "trolo", "tropa", 
    "truco", "turno", "tusar", "ubres", "uñoso", "vaina", "valer", "vamos", "vende", "venir", 
    "venta", "verga", "viaje", "vieja", "viejo", "visto", "volar", "votar", "vuela", "vuelo", 
    "wacas", "wacka", "wacko", "washi", "waton", "wawas", "weada", "weado", "weazo", "webas", 
    "webea", "webeo", "wecas", "wecho", "welas", "weles", "wenas", "wenos", "wetas", "weveo", 
    "wevon", "wilea", "wileo", "winka", "wuata", "wueon", "yegua", "yesca", "zafar", "zarpa", 
    "zorra", "zorro"
],
peru: [
    "bacan", "bagre", "bamba", "barba", "barco", "barri", "barro", "basta", "bicho", "bobin", 
 "bolsa", "bomba", "bravo", "broca", "buena", "bueno", "burro", "busca", "cabro", 
    "cacha", "cacho", "caida", "calle", "calma", "canto", "capos", "carga", "carpa", "carta", 
    "causa", "cebra", "celos", "cerdo", "chapa", "chato", "chela", "chico", "china", "chino", 
    "chiva", "chivo", "cholo", "choro", "chula", "chulo", "chupa", "chuzo", "clavo", "coima", 
    "combo", "compa", "conti", "copas", "corta", "corto", "costo", "crema", "crudo", "cuate", 
    "cuero", "culpa", "cumpa", "curda", "cursi", "darlo", "darse", "dateo", "dedos", "dejar", 
    "diuca", "dobla", "droga", "dulce", "duros", "enano", "entra", "envio", "facho", "falla", 
    "farra", "feria", "filar", "flaco", "flojo", "forro", "freno", "fruta", "funar", "gallo", 
    "gansa", "garpa", "garra", "gatos", "giles", "gorra", "grasa", "guapo", "guion", "harto", 
    "huaco", "hueco", "huevo", "jaiva", "jalar", "jamon", "jateo", "joder", "jugar", "junta", 
    "lacho", "latas", "leche", "lento", "leseo", "listo", "llave", "lolas", "lucho", "lukas", 
    "macho", "mafia", "manco", "mango", "manos", "marca", "matar", "mateo", "media", "medio", 
    "merca", "mesas", "michi", "micos", "minas", "minos", "miras", "mitos", "mocha", "moles", 
    "monda", "monfu", "monos", "morro", "mosca", "mosto", "motel", "mover", "mueca", "muela", 
    "mujer", "multa", "naipe", "nariz", "negro", "nenes", "niuna", "noche", "norte", "novio", 
    "nueve", "nunca", "ojala", "ojota", "okupa", "onvre", "opera", "orden", "pagar", "paila", 
    "palta", "panas", "panco", "panda", "parar", "patas", "patio", "patos", "patuo", "payas", 
    "peces", "pedir", "pelar", "pelos", "penar", "penca", "penka", "perla", "perno", "perro", 
    "pesos", "pesto", "petas", "pezca", "picar", "pichi", "picos", "pieza", "pilla", "pillo", 
    "pinta", "pinto", "pisar", "pisco", "plata", "plomo", "pluma", "pobre", "pocos", "poder", 
    "pollo", "poner", "porro", "posta", "preso", "prima", "primo", "promo", "pucho", "pudin", 
    "punga", "punta", "punto", "queda", "queso", "rajar", "raton", "rayar", "ricas", "ricos", 
    "rifar", "riles", "rinde", "ritos", "robar", "rocha", "rollo", "rompe", "rorro", "rosca", 
    "rubia", "rubio", "ruido", "rumba", "rumbo", "saber", "sacar", "salas", "salir", "salsa", 
    "salto", "saque", "secar", "senda", "serio", "sesos", "siete", "silla", "socio", "sonar", 
    "sopas", "soplo", "suave", "subir", "sucio", "sueco", "suena", "sueno", "sumar", "super", 
    "tabla", "tacos", "talla", "tarro", "tatas", "techo", "tecla", "telas", "temas", "tener", 
    "tenis", "tetas", "tieso", "tinca", "tinto", "tipos", "tirar", "tocar", "tomar", "tonto", 
    "toque", "torta", "tosco", "trago", "traro", "trigo", "trolo", "tropa", "truco", "turno", 
    "tusar", "ubres", "uñoso", "vaina", "valer", "vamos", "vende", "venir", "venta", "verga", 
    "viaje", "vieja", "viejo", "visto", "volar", "votar", "vuela", "vuelo", "wacas", "wacko", 
    "washi", "waton", "wawas", "weada", "weado", "weazo", "webas", "webea", "webeo", "wecas", 
    "wecho", "welas", "weles", "wenas", "wenos", "wetas", "weveo", "wevon", "wilea", "wileo", 
    "winka", "wuata", "wueon", "yegua", "yesca", "zafar", "zarpa", "zorra", "zorro"
],
mexico: [
"weyes", "mamon", "fresa", "chido", "vatos", "chale", "jodon", "plebe", "chavo", "cholo", "cuate", "jaina", "nacos", "orale", "pisto", "zorra", "cabro", "chafa", "chiva", "compa", "ganso", "lilas", "mamar", "menso", "meros", "morra", "necio", "pache", "padre", "perro", "pique", "queco", "rolas", "tacos", "torta", "trole", "verga", "weyes", "mecos", "babas", "bizco",  "chapo", "chido", "chile", "comal", "cuero", "gacho", "gafas", "guero", "huevo", "jotos", "macho", "mamar", "mamon", "siono", "menso", "meras", "migra", "morro", "necio", "aguas", "nopal",  "ojete", "padre", "banda", "pedos", "pegar", "pelar", "pelon", "penal", "perro", "mecos", "rajar", "regio", "agave", "renta", "retar", "rifar", "rolas", "rollo", "checa", "suave", "cruda", "ijole", "chela", "torta", "gripa", "mande", "mofle", "chale", "chava", "guapo", "chulo", "galan", "socio", "varos", "super", "susto", "tacos", "tenis", "elote", "manso", "milpa", "cuate", "flete", "tigre", "vieja", "preto", "huevo", "valer", "guera", "pedos", "moles", "chafa", "wacha", "guaje", "hueva"
],
colombia: [
    "bacan", "parce", "chino", "vieja", "manes", "rumba", "reina", "guaro", "chapa", "choro", 
    "paisa", "lucas", "plata", "gonor", "pilas", "parla", "chiva", "chivo", "chulo", "chupa", 
    "chuzo", "guaro", "gueva", "guisa", "joder", "llave", "lolas", "lucho", "lukas", "macho", 
    "mango", "manos", "marca", "matar", "mateo", "media", "medio", "merca", "mesas", "michi", 
    "micos", "minas", "minos", "miras", "mitos", "mocha", "moles", "monda", "monfu", "monos", 
    "morro", "mosca", "mosto", "motel", "mover", "mueca", "muela", "mujer", "multa", "naipe", 
    "nariz", "negro", "nenes", "niuna", "noche", "norte", "novio", "nueve", "nunca", "ojala", 
    "ojota", "okupa", "onvre", "opera", "orden", "pagar", "paila", "palta", "panas", "panco", 
    "panda", "parar", "patas", "patio", "patos", "patuo", "payas", "peces", "pedir", "pelar", 
    "pelos", "penar", "penca", "penka", "perla", "perno", "perro", "pesos", "pesto", "petas", 
    "pezca", "picar", "pichi", "picos", "pieza", "pilla", "pillo", "pinta", "pinto", "pisar", 
    "pisco", "plata", "plomo", "pluma", "pobre", "pocos", "poder", "pollo", "poner", "porro", 
    "posta", "preso", "prima", "primo", "promo", "pucho", "pudin", "punga", "punta", "punto", 
    "queda", "queso", "rajar", "raton", "rayar", "ricas", "ricos", "rifar", "riles", "rinde", 
    "ritos", "robar", "rocha", "rollo", "rompe", "rorro", "rosca", "rubia", "rubio", "ruido", 
    "rumba", "rumbo", "saber", "sacar", "salas", "salir", "salsa", "salto", "saque", "secar", 
    "senda", "serio", "sesos", "siete", "silla", "socio", "sonar", "sopas", "soplo", "suave", 
    "subir", "sucio", "sueco", "suena", "sueno", "sumar", "super", "tabla", "tacos", "talla", 
    "tarro", "tatas", "techo", "tecla", "telas", "temas", "tener", "tenis", "tetas", "tieso", 
    "tinca", "tinto", "tipos", "tirar", "tocar", "tomar", "tonto", "toque", "torta", "tosco", 
    "trago", "traro", "trigo", "trolo", "tropa", "truco", "turno", "tusar", "ubres", "uñoso", 
    "vaina", "valer", "vamos", "vende", "venir", "venta", "verga", "viaje", "vieja", "viejo", 
    "visto", "volar", "votar", "vuela", "vuelo"
],
colombiaformer: [
        "parce", "bacano", "chimba", "guaro", "parche", "rumba", "chino", "llave", "pana", "berraco",
        "chucha", "gono", "luca", "mamera", "ñero", "pela", "tinto", "vaina", "yeyo", "zorro"
    ],
    peruformer: [
        "pata", "jame", "chamba", "chibolo", "pata", "jato", "yuca", "chamo", "pata", "pata",
        "floro", "chamo", "jato", "yuca", "pata", "jame", "chamba", "chibolo", "pata", "jato"
    ],
    
chileformer: [
        "weon", "fome", "polol", "copet", "choro", "flaite", "cuico", "paco", "altic", "chanta",
        "guagua", "poto", "tula", "chuch", "caite", "chacre", "chuper", "fome", "garra", "guata"
    ],
    mexicoformer: [
        "wey", "chido", "naco", "güey", "padre", "chavo", "jefa", "fresa", "chamba", "bronca",
        "cantin", "cholo", "gacho", "joto", "mamón", "neta", "pache", "trole", "vato", "zope"
    ],
    argentinaformer: [
        "trolo", "yetas", "zarpa",
        "guita", "pende", "jodas", "pucho", "pucho", "pucho", "birra", "pucho", "piola", "pucho"
    ],
    jugadores_de_futbol: [
        "kante", "messi", "silva", "gotze", "klich", "ramos", 
  "rossi", "pirlo", "pique", "henry", "gomez", "villa", "foden", "totti",
  "milla", "navas", "keane", "onana", "salah", "alves", "neuer", "fekir",
  "coman", "allen", "reyna", "jones", "bento", "vidic", "xhaka", "pires",
  "tadic", "mikel", "lopez", "perez", "toure", "moses", "iwobi",
  "bravo", "nesta", "puyol", "pinto", "rodri", "keita", "leiva", "jovic",
  "dzeko", "pogba", "matip", "giggs", "sahin", "dunga", "salas", "smith",
  "adams", "evans", "keown", "schar", "pulis", "jenas", "klopp",
  "degea", "felix", "lippi", "suazo", "trapp", "brown", "young", "coady",
  "arias", "cisse", "abate", "depay", "terry", "mendy", "savic", "rojas",
  "juric", "blanc", "ekdal", "moura", "ganso", "reina", "clark", "adler",
  "vidal", "fuchs", "oblak", "kroos", "ayala", "motta", "clyne", "porro",
  "kalas", "oshea", "pioli", "davis", "baker", "hayes",
  "sakai", "klose", "banks", "perea", "basso", "funes", "pelle", "costa",
  "lloyd", "nasri", "owens", "perin", "menez", "cesar", "fonte", "vardy",
 "barry", "inler", "petit", "chivu", "okaka", "moyes", "gibbs",
  "diouf", "zenga", "carew", "dinho", "neres",
 "dante", "lucas", "valon", "alaba", "skrtl", 
  "honda", "essam", "velez", "toney", "garza", "walsh", "larin",
  "viana", "osman", "chong", "agger", "zouma", "godoy", "berra",
  "ruddy", "xisco", "mount", "pedri", "marin", "elano", "lunin", "balde", "rivas",
  "lemar", "galan", "seidu", "simon", "djalo", "gakpo", "nuñez", "cunha", "dalot",
  "olise", "pacho", "neves", "jesus", "moore", "walsh", "gusto", "muani"
    ],
    equipos_de_futbol: [
        "milan","leeds","porto","nancy","genoa","mainz","luton","rapid","braga","derby",
        "belen","brest","dijon","audax","split","hansa","reims","ulsan","iwata","siena",
        "inter","river","pumas","villa","stoke","wigan","lazio","parma","lecce","union",
        "tigre","lanus","velez","bahia","ceara","kazan","gijon","betis","celta"

    ],
    nombres_hombre_ingles: [
        "aaron", "allen", "andre",  "barry", "billy", "blake", "brady", "brent",
  "brian", "bruce", "caleb", "cecil","cedar", "cesar", "chase", "chris", "clark", "clyde", "colby",
  "colin", "conan", "craig", "cyrus", "danny", "daryl", "david",
  "denis", "derek", "devin", "devon", "diego", "dixon", "donny", "drake", "dylan",
  "edgar", "edwin", "ellis", "elmer", "elvis",  "emmet", "erick", "ernie", "ethan",
   "felix", "floyd", "frank",  "gavin", "grant", "henry",
  "homer",  "irvin", "isaac", "jacob", "jaden", "james", "jamie", "jared", "jason",
  "jesse", "jimmy",  "jonah", "jonas",  "judah",
   "keith", "kevin", "larry",  "lenny", "leroy", "lewis", "logan",
  "louis", "lucas",  "mason", "miles", "moses", "nicky", "nigel", "nixon", "nolan",
  "oscar",  "peter", "ralph", "ramon", "randy", "reese", "ricky", "robin", "roger",
  "ronan", "ronny", "rowan",  "ruben", "sammy", "scott",
  "shawn", "simon", "sonny", "steve", "terry", "tommy", "trace", "trent", "tobey", "tyler",
  "tyson", "uriah", "vance", "verne", "wayne", "willy", "wyatt",
  "abdul", "alvin", "artie", "avery", "benny",
 "brice", "bryce", "buddy",  "clint", "clive", "fabio",
   "irwin", "jamal", "kenny", "lance", "miles","niles", "ollie", 
  "percy", "quinn", "rhett", "rocco", "shane", "silas", "timmy"
    ],
    nombres_mujer_ingles: [
        "alice", "amber", "angel", "anita", "april", "ashly", "avery", "betty",
  "blair", "carla", "carly",  "chloe", "clara", "daisy",
  "danae", "debra", "dixie", "donna", "edith", "ellen", "elsie", "emily", "erica",
  "faith", "fiona", "grace", "hanna", "heidi", "helen", "holly",
   "irene", "ivana", "jamie", "janet", "janie", "jenny", "jewel", "jodie",
  "joann", "josie", "judie",  "karen", "katie", "kayla", "kelly", "kerri",
  "kiana", "kimmy", "kitty", "lacey", "laura", "layla", "leila", "lilly",
  "linda", "livia", "lucia", "lucie",  
  "mabel", "malia",  "margo", "maria", "marie", "marla",
  "marta", "megan",  "mindy", "molly", "naomi", 
   "nicky", "nikki", "olive", "paige", "pearl", "perla",
  "petra", "pippa", "quinn",  "raven", "reese", "regan", "riley",
  "robin", "rosie", "roxie", "sally", "sandy", "sarah", 
   "siena", "sonia", , "stacy", "storm", "susan", "sasha",
  "susie", "sybil", "talia", "tanya", "tasha", "tessa", "tracy", "trish",
  "vicky", "wanda", "wendy", 
  "zelda", "zonia","alina", "amira", 
  "britt", "celia", "ceara", "cindy", "delia", "ciara",
  "dolly",  "elena", "elisa", "elise", 
 "enola", "ester", "ethel", 
  "frida", "genie", "gilda", "ginny", "greta",
   "hilda", "india", "irina",  "janna", 
   "jolie", "josey",  "karin",  "kacey",
   "kathy", "katie", "kenya", 
   "leann", "liana", "libby", "lorna",
  "lotte",  "maeve",   "maite", "mayra",
  "moria", "nadia",  "norma", "nuria",
 "salma",  "selma",  "sheri", 
   "susan", "tania", "tarah",  "tonya",
 "wilma", "zelma", "zenia", "xenia"

    ],
    nombres_hombre_espanol: [
        "aaron", "aitor", "alejo", "alain", "angel", "ariel", "asier", "anton",
   "carlo", "casto", "cesar", "dacio", "dario", "david", "diego", "dante",
  "edgar",  "elian", "elias", "elvis",
  "enric", "erick",   "fabio", "fidel",
  "felix",    "guido",   
   "jacob",  "jesus",  "jorge",  "jonas", "jordi", "justo", "italo",
  "josue",  "julen", "julio", "kevin", 
   "lucas",  "lucio", 
  "mario", "marco", "mauro",  "nando",  "oscar", "mateo", "oriol", "piero", "renzo",
  "pablo", "pedro",  "ramon", 
   "roman",  "ruben",  "salva", "santi", "romeo", "roque",
   "sergi", "silas",  "simon", "tadeo", "vasco",
   "telmo",  "tomas",  "valen",
   "tulio", "jaime", "jairo", "tiago", "mirko","bruno","isaac","pavel","borja"
    ],
    nombres_mujer_espanol: [
         "ainoa",  "alina", 
  "amada", "amaya", "amira", "anahi",  "angie", "anisa", "anita",
   "areli",  
  "belen",  "bella", "berta",  "brisa", 
  "carla",  "carol", "celia", "ciara", "clara",  "conny", "coral",
  "delia", "dalia", "danae",  "danna",  "daria", 
    "diana", "dulce", "edith", "evita", "freya",
   "elena",   "elisa", "elvia", 
  "emily",  "erica", "erika",  "ester",  
   "fabia", "fanny", 
   "helen",  "hilda", 
 "irina", "ivana", "irene", "flora",
  "janet", "jenny", 
  "joana",  "juana", "julia", 
  "karen",  "karla", "katia", "keira", 
  "laura", "leire",  "leyre", "lidia",
   "lilia",  "linda", "luana",
  "lucia",  "luisa",  
  "maite",  "maria", 
   "marta", 
  "mayra",  
  "mirta",  "nadia", "nancy",
  "naomi",  "nerea", "noemi",
   "nuria",  
   "paola",  "paula", "perla", "pilar",
   "reina", 
  "rocio",  
   "salma",  "sarai",
  "sofia",  "sonia",  "susan", "talia", "telma",
  "tania",  
 "wanda", "xenia", "moira","betty","vilma"
    ]
};


// FIN LISTA DE PALABRAS

/* ===== SAFE VERSION SYSTEM ===== */


// -----------------------------------------------------------------------------------


const VERSION_CONFIG = {
    
    'footballteams': { //  EL NOMBRE DE ESTE OBJETO SE USA PARA EL URL! --- NO USAR URLS YA USADAS EN VRSIONES VIEJAS O NUEVAS Y NO USAR CARCTERES ESPECIALES --- 
        title: { es: "Equipos de Fútbol", en: "Football Teams" },
        icon: "👟",
        background: "url('https://www.placesleisure.org/media/nnzmyc1b/two-column-football-3g-pitch.jpg?width=800&height=572&v=1da0da618d315b0')",
        wordLists: {
            answers: WORD_LISTS.equipos_de_futbol,
            valid: WORD_LISTS.general_doble
        },
        category: { es: "Fútbol", en: "Football/Soccer" }
    },
    'malenames': { //  EL NOMBRE DE ESTE OBJETO SE USA PARA EL URL! --- NO USAR URLS YA USADAS EN VRSIONES VIEJAS O NUEVAS Y NO USAR CARCTERES ESPECIALES --- 
        title: { es: "Nombres de Hombre (Inglés)", en: "Male Names" },
        icon: "👦",
        background: "url('https://slidescorner.com/wp-content/uploads/2023/12/Light-Blue-Background-Science-Medical-with-Gradient-and-Wavy-Lines-by-SlidesCorner.com_-1024x576.jpg.webp')",
        wordLists: {
            answers: WORD_LISTS.nombres_hombre_ingles ,
            valid: WORD_LISTS.nombres_hombre_ingles
        },
        category: { es: "Nombres", en: "Names" }
    },
    'femalenames': { //  EL NOMBRE DE ESTE OBJETO SE USA PARA EL URL! --- NO USAR URLS YA USADAS EN VRSIONES VIEJAS O NUEVAS Y NO USAR CARCTERES ESPECIALES ---  
        title: { es: "Nombres de Mujer (Inglés)", en: "Female Names" },
        icon: "👧",
        background: "url('https://files.123freevectors.com/wp-content/original/156204-abstract-light-pink-background.jpg')",
        wordLists: {
            answers: WORD_LISTS.nombres_mujer_ingles,
            valid: WORD_LISTS.nombres_mujer_ingles
        },
        category: { es: "Nombres", en: "Names" }
    },
    'malenamesesp': { //  EL NOMBRE DE ESTE OBJETO SE USA PARA EL URL! --- NO USAR URLS YA USADAS EN VRSIONES VIEJAS O NUEVAS Y NO USAR CARCTERES ESPECIALES --- 
        title: { es: "Nombres de Hombre", en: "Male Names (Spanish)" },
        icon: "👦🏻",
        background: "url('https://slidescorner.com/wp-content/uploads/2023/12/Light-Blue-Background-Science-Medical-with-Gradient-and-Wavy-Lines-by-SlidesCorner.com_-1024x576.jpg.webp')",
        wordLists: {
            answers: WORD_LISTS.nombres_hombre_espanol,
            valid: WORD_LISTS.nombres_hombre_espanol
        },
        category: { es: "Nombres", en: "Names" }
    },
    'femalenamesesp': { //  EL NOMBRE DE ESTE OBJETO SE USA PARA EL URL! --- NO USAR URLS YA USADAS EN VRSIONES VIEJAS O NUEVAS Y NO USAR CARCTERES ESPECIALES --- 
        title: { es: "Nombres de Mujer", en: "Female Names (Spanish)" },
        icon: "👩🏻",
        background: "url('https://files.123freevectors.com/wp-content/original/156204-abstract-light-pink-background.jpg')",
        wordLists: {
            answers: WORD_LISTS.nombres_mujer_espanol,
            valid: WORD_LISTS.nombres_mujer_espanol
        },
        category: { es: "Nombres", en: "Names" }
    }

    
    
};


function handleUrlRouting() {
    console.log("🔄 Handling URL:", window.location.pathname);
    console.log("VERSION_CONFIG keys:", Object.keys(VERSION_CONFIG));

    const path = window.location.pathname;
    const parts = path.split('/').filter(p => p);
    
    let versionPath, lang;
    
    if (parts.length >= 2) {
        versionPath = parts[0];
        lang = parts[1];
    } else if (parts.length === 1) {
        versionPath = parts[0];
        lang = 'es';
    } else {
        currentCountry = 'argentina';
        currentLanguage = 'es';
        updateCountryUI();
        updateLanguage();
        newGame();
        sessionStorage.removeItem('redirect');
        return;
    }
    
    // 1. Set Language if valid
    if (LANGUAGES[lang]) {
        currentLanguage = lang;
        updateLanguage();
    }
    
    // 2. Find and Set the Game Version
    let versionFound = false;
    
    // Check VERSION_CONFIG first (new system)
    if (VERSION_CONFIG[versionPath]) {
        currentCountry = versionPath;
        applyVersionStyles(VERSION_CONFIG[versionPath]);
        versionFound = true;
        console.log("✅ Found VERSION_CONFIG match:", versionPath);
    }
    // If not found in VERSION_CONFIG, check special football mode
    else if (versionPath === 'football-players') {
        currentCountry = 'football-players';
        updateCountryUI();
        versionFound = true;
        console.log("✅ Found football-players mode");
    }
    // If still not found, check old country system
    else if (['argentina', 'chile', 'peru', 'colombia', 'mexico'].includes(versionPath)) {
        currentCountry = versionPath;
        updateCountryUI();
        versionFound = true;
        console.log("✅ Found country mode:", versionPath);
    }
    
    // 3. If no version was found from the path, default to Argentina
    if (!versionFound) {
        console.log("❌ No version found, defaulting to argentina");
        currentCountry = 'argentina';
        updateCountryUI();
    } else {
        console.log("✅ Version set to:", currentCountry);
    }
    
    // 4. Start a New Game with the new settings
    newGame();
    
    // 5. Clear the sessionStorage redirect now that we've handled it via the URL
    sessionStorage.removeItem('redirect');
}


function generateVersionLinks() {
  let html = '';
  Object.entries(VERSION_CONFIG).forEach(([_, config]) => {
    html += `
      <a href="/${config.urlPath}/en">${config.title.en}</a> |
      <a href="/${config.urlPath}/es">${config.title.es}</a><br>
    `;
  });
  document.getElementById('version-links').innerHTML = html;
}


/* ===== VERSION HELPERS ===== */
function applyVersionStyles(config) {
    if (!config) return;
    
    // Only modify these specific elements
    document.querySelector('.title').textContent = 'Wordz';
    document.querySelector('.subtitle').style.display = 'none';
    document.body.style.backgroundImage = config.background;
    
    const flagContainer = document.querySelector('.country-flag');
    if (flagContainer) {
        flagContainer.innerHTML = `
            ${config.icon.startsWith('http') ? 
                `<img src="${config.icon}" class="game-mode-icon">` : 
                `<span class="game-mode-icon">${config.icon}</span>`}
            <span>${currentLanguage === 'es' ? config.title.es : config.title.en}</span>
        `;
    }
}

function addVersionToMenu(config, versionId) {
    const modal = document.getElementById('game-modes-modal');
    if (!modal) return;
    
    // Find or create category
    let categoryEl = [...modal.querySelectorAll('.category-title')]
        .find(el => el.textContent === config.category.es || 
                    el.textContent === config.category.en)
        ?.closest('.game-mode-category');
    
    if (!categoryEl) {
        categoryEl = document.createElement('div');
        categoryEl.className = 'game-mode-category';
        categoryEl.innerHTML = `
            <h3 class="category-title">
                ${currentLanguage === 'es' ? config.category.es : config.category.en}
            </h3>
        `;
        modal.querySelector('.game-modes-content').appendChild(categoryEl);
    }
    
    // Add version button
    const versionEl = document.createElement('div');
    versionEl.className = 'game-mode-option';
    versionEl.dataset.mode = versionId;
    versionEl.innerHTML = `
        <span class="game-mode-icon">${config.icon}</span>
        <span class="game-mode-name">
            ${currentLanguage === 'es' ? config.title.es : config.title.en}
        </span>
    `;
    versionEl.addEventListener('click', () => {
        currentCountry = versionId;
        applyVersionStyles(config);
        newGame();
        modal.style.display = 'none';
    });
    
    categoryEl.appendChild(versionEl);
}
// Customizable messages
const COUNTRY_MESSAGES = {
    argentina: {
        win: "¡Claro que sí campeón! La palabra era",
        lose: "Nooo amigo, la palabra era"
    },
    chile: {
        win: "¡Ohh el wn inteligente! La palabra era",
        lose: "No po, la palabra era"
    },
    peru: {
        win: "¡Bien ahí causita! La palabra era",
        lose: "Mal ahí brother, la palabra era"
    },
    colombia: {
        win: "¡Qué chimba! La palabra era",
        lose: "No parce, la palabra era"
    },
    mexico: {
        win: "Muy bien carnal, la palabra era",
        lose: "No mames we, la palabra era"
    }
};
/*
function getCorrectSoundPath(filename) {
  // Case 1: If using hash routing (/#/path)
  if (window.location.hash) {
    return `sounds/${filename}`; 
  }
  
  // Case 2: If using path routing (/game/play)
  const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
  return `${basePath ? basePath + '/' : ''}sounds/${filename}`;
}
*/
function getCorrectSoundPath(filename) {
  return (window.location.pathname.includes('/game/') ? '../' : '') + `sounds/${filename}`;
}

// Audio Manager with local files
const AudioManager = {
  // 2. MODIFY paths to use the corrector
  sounds: {
    move: new Audio(getCorrectSoundPath('move.mp3')),
    guess: new Audio(getCorrectSoundPath('guess.mp3')),
    win: new Audio(getCorrectSoundPath('win.mp3')),
    loss: new Audio(getCorrectSoundPath('loss.mp3'))
  },
  
  init() {
    Object.values(this.sounds).forEach(sound => {
      sound.volume = 0.7;
      sound.load();
    });
  },
  
  play(soundName) {
    // 3. ADD this error catch
    try {
      this.sounds[soundName].currentTime = 0;
      this.sounds[soundName].play().catch(e => console.warn(soundName, e));
    } catch(e) {
      console.error("Audio error:", e);
      // 4. ADD silent retry for Chrome
      document.addEventListener('click', () => {
        this.sounds[soundName].play();
      }, { once: true });
    }
  }
};



// Initialize on first user interaction
function initAudio() {
  // Only initialize once
  if (!AudioManager.sounds.move) {
    AudioManager.init();
  }
  document.removeEventListener('click', initAudio);
  document.removeEventListener('keydown', initAudio);
}

document.addEventListener('click', initAudio);
document.addEventListener('keydown', initAudio);

// Current game state
let currentCountry = 'argentina';
let word = '';
let guesses = [];
let currentGuess = '';
let gameOver = false;

// Stats
let stats = {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    guessDistribution: [0, 0, 0, 0, 0, 0]
};

// DOM elements
const board = document.getElementById('board');
const keyboard = document.querySelector('.keyboard');
const infoBtn = document.getElementById('info-btn');
const statsBtn = document.getElementById('stats-btn');
const infoModal = document.getElementById('info-modal');
const statsModal = document.getElementById('stats-modal');
const gameOverModal = document.getElementById('game-over-modal');
const closeBtns = document.querySelectorAll('.close-btn');
const flagOptions = document.querySelectorAll('.flag-option');
const shareBtn = document.getElementById('share-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const shareResultBtn = document.getElementById('share-result-btn');

// ========== MODIFIED FUNCTIONS ========== //

// Get a random word from the current country's list (answers are always country-specific)
//function getRandomWord() {
//    const words = WORD_LISTS[currentCountry];
//    return words[Math.floor(Math.random() * words.length)].toUpperCase();
//}

// Check if a word is valid (in general list OR country list)


//function isValidWord(guess) {
//    const guessLower = guess.toLowerCase();
//    const inGeneral = WORD_LISTS.general.includes(guessLower);
//    const inCountry = WORD_LISTS[currentCountry].includes(guessLower);
    
//    if (inCountry || inGeneral) {
//        return { valid: true, inCountry: inCountry };
//    }
//    return { valid: false, message: 'invalidWord' };
//}

/*
function isValidWord(guess) {
    const guessLower = guess.toLowerCase();
    
    if (currentCountry === 'football-players') {
        return WORD_LISTS.jugadores_de_futbol.includes(guessLower);
    }
    
    return WORD_LISTS.general.includes(guessLower) || WORD_LISTS[currentCountry].includes(guessLower);
}
    */

function isValidWord(guess) {
    const guessLower = guess.toLowerCase();
    
    // 1. Check VERSION_CONFIG first
    if (VERSION_CONFIG[currentCountry]) {
        const { answers, valid } = VERSION_CONFIG[currentCountry].wordLists;
        return valid.includes(guessLower) || answers.includes(guessLower);
    }
    // 2. Original football version check
    else if (currentCountry === 'football-players') {
        return WORD_LISTS.jugadores_de_futbol.includes(guessLower);
    }
    // 3. Original behavior for other versions
    else {
        return WORD_LISTS.general.includes(guessLower) || 
               (WORD_LISTS[currentCountry] && WORD_LISTS[currentCountry].includes(guessLower));
    }
}

function updateInfoModalContent() {
    const modal = document.getElementById('info-modal');
    if (!modal) return;
    
    modal.querySelector('h2').textContent = LANGUAGES[currentLanguage].howToPlay;
    // Add all other info modal translations...
}

function updateStatsModalContent() {
    const modal = document.getElementById('stats-modal');
    if (!modal) return;
    
    modal.querySelector('h2').textContent = LANGUAGES[currentLanguage].statsTitle;
    // Add all other stats modal translations...
}

function updateGameOverModalContent() {
    const modal = document.getElementById('game-over-modal');
    if (!modal) return;
    
    // Don't update title/message here as they're game-state dependent
    modal.querySelectorAll('.stat-label')[0].textContent = LANGUAGES[currentLanguage].gamesPlayed;
    // Add all other game over modal translations...
}

// Submit the current guess with improved validation messaging
/*
function submitGuess() {
    if (currentGuess.length < 5) {
        showMessage('La palabra debe tener 5 letras');
        return;
    }

    const guessLower = currentGuess.toLowerCase();
    if (!isValidWord(currentGuess)) {
        showMessage('Palabra no válida');
        shakeRow(guesses.length);
        return;
    }

    // Special message for words in general dictionary but not current country
    if (WORD_LISTS.general.includes(guessLower) && !WORD_LISTS[currentCountry].includes(guessLower)) {
        const countryName = document.querySelector('.country-flag span').textContent;
        showMessage(`Válida en español, pero no en ${countryName}`);
        shakeRow(guesses.length);
        return;
    }

    AudioManager.play('guess');
    guesses.push(currentGuess);
    updateBoardWithResult();

    if (currentGuess === word) {
        gameWon();
    } else if (guesses.length === 6) {
        gameLost();
    } else {
        currentGuess = '';
    }
}
*/

// Generate share text with country information
function generateShareText() {
    let title, grid = '';
    
    if (currentCountry === 'football-players') {
        title = 'Wordz Football';
    } else {
        const countryName = document.querySelector('.country-flag span').textContent;
        title = `Lexico LATINO ${countryName}`;
    }
    
    const guessCount = guesses.length === 6 ? 'X' : guesses.length;
    
    guesses.forEach(guess => {
        const wordLetters = word.split('');
        const guessLetters = guess.split('');
        
        for (let i = 0; i < 5; i++) {
            if (guessLetters[i] === wordLetters[i]) {
                grid += '🟩';
            } else if (wordLetters.includes(guessLetters[i])) {
                grid += '🟨';
            } else {
                grid += '⬜';
            }
        }
        grid += '\n';
    });
    
    return `${title} ${guessCount}/6\n\n${grid}`;
}

// ========== UNMODIFIED FUNCTIONS ========== //

// Initialize the game
/*function init() {
    loadStats();
    setupEventListeners();
    newGame();
    updateGameModesModal();
    setupGameModeSelection();
}
    */

function init() {
    loadStats();
    setupEventListeners();
    updateGameModesModal();
    setupGameModeSelection();
    
    // Handle the initial URL the page was loaded with
    handleUrlRouting();
}

// Set up event listeners
function setupEventListeners() {
    document.addEventListener('keydown', handleKeyPress);
    
    keyboard.addEventListener('click', (e) => {
        if (e.target.classList.contains('key')) {
            const key = e.target.textContent;
            if (key === 'ENTER') {
                submitGuess();
            } else if (key === '⌫') {
                deleteLetter();
            } else {
                addLetter(key);
            }
        }
    });
    
    infoBtn.addEventListener('click', () => infoModal.style.display = 'flex');
    statsBtn.addEventListener('click', showStats);
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            infoModal.style.display = 'none';
            statsModal.style.display = 'none';
            gameOverModal.style.display = 'none';
        });
    });
    
    shareBtn.addEventListener('click', shareStats);
    shareResultBtn.addEventListener('click', shareResult);
    playAgainBtn.addEventListener('click', newGame);
    
    // UPDATED: Flag options with URL update
    flagOptions.forEach(option => {
        option.addEventListener('click', () => {
            currentCountry = option.dataset.country;
            updateUrl(); // ADDED: Update URL for country changes
            window.scrollTo(0, 0);
            updateCountryUI();
            newGame();
        });
    });

    // UPDATED: Language toggle with URL update
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentLanguage = btn.dataset.lang;
            updateLanguage();
            updateUrl(); // ADDED: Update URL for language changes
            
            // New code for version title translation
            const flagText = document.querySelector('.country-flag span:last-child');
            if (!flagText) return;
            
            if (VERSION_CONFIG[currentCountry]) {
                flagText.textContent = VERSION_CONFIG[currentCountry].title[currentLanguage];
            } 
            else if (currentCountry === 'football-players') {
                flagText.textContent = LANGUAGES[currentLanguage].footballPlayers;
            }
        });
    });
}

/*
function updateUrl() {
    let path;
    
    // Handle VERSION_CONFIG modes
    if (VERSION_CONFIG[currentCountry]) {
        path = `/${VERSION_CONFIG[currentCountry].urlPath}/${currentLanguage}`;
    }
    // Handle football players mode
    else if (currentCountry === 'football-players') {
        path = `/football-players/${currentLanguage}`;
    }
    // Handle country modes
    else {
        path = `/${currentCountry}/${currentLanguage}`;
    }
    
    window.history.pushState({}, '', path);
}
*/

function updateUrl() {
    let path;
    
    // Simple path construction using currentCountry directly
    path = `/${currentCountry}/${currentLanguage}`;
    
    // Only update if different from current URL to avoid redundant history entries
    if (window.location.pathname !== path) {
        window.history.pushState({}, '', path);
    }
}

// Handle game mode selection
function setupGameModeSelection() {
  const modal = document.getElementById('game-modes-modal');
  const gameModeOptions = document.querySelectorAll('.game-mode-option');
  
  // Open modal when button clicked
  document.getElementById('other-versions-btn').addEventListener('click', () => {
    modal.style.display = 'flex';
  });
  
  // Close modal
  modal.querySelector('.close-btn').addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // Handle mode selection
  gameModeOptions.forEach(option => {
    option.addEventListener('click', () => {
      const mode = option.dataset.mode;

      window.scrollTo(0, 0);
      
      if (mode === 'football-players') {
        currentCountry = 'football-players';
        updateUrl(); // ADDED: Update URL for football mode
        updateCountryUI();
        newGame();
      } 
      else if (['argentina', 'chile', 'peru', 'colombia', 'mexico'].includes(mode)) {
        // Same functionality as flag click
        currentCountry = mode;
        updateUrl(); // ADDED: Update URL for country modes
        updateCountryUI();
        newGame();
      }
      // Handle VERSION_CONFIG modes
      else if (VERSION_CONFIG[mode]) {
        currentCountry = mode;
        applyVersionStyles(VERSION_CONFIG[mode]);
        updateUrl(); // ADDED: Update URL for VERSION_CONFIG modes
        newGame();
      }
      
      modal.style.display = 'none';
    });
  });

  // ADDED: Handle VERSION_CONFIG options from the modal
  const versionOptions = modal.querySelectorAll('.game-mode-option[data-mode]');
  versionOptions.forEach(option => {
    const mode = option.dataset.mode;
    if (VERSION_CONFIG[mode]) {
      option.addEventListener('click', () => {
        currentCountry = mode;
        applyVersionStyles(VERSION_CONFIG[mode]);
        updateUrl(); // ADDED: Update URL
        newGame();
        modal.style.display = 'none';
      });
    }
  });
}


function updateGameModesModal() {
  const lang = LANGUAGES[currentLanguage];
  const modal = document.getElementById('game-modes-modal');
  
  // 1. Update static text elements
  document.querySelector('.game-modes-title').textContent = lang.selectGameMode;
  document.querySelector('[data-category="football"]').textContent = lang.footballCategory;
  document.querySelector('[data-category="slang"]').textContent = lang.slangCategory;
  
  document.querySelector('[data-mode="football-players"] .game-mode-name').textContent = lang.footballPlayers;
  
  // Country modes
  document.querySelector('[data-mode="argentina"] .game-mode-name').textContent = lang.slangArgentina;
  document.querySelector('[data-mode="chile"] .game-mode-name').textContent = lang.slangChile;
  document.querySelector('[data-mode="peru"] .game-mode-name').textContent = lang.slangPeru;
  document.querySelector('[data-mode="colombia"] .game-mode-name').textContent = lang.slangColombia;
  document.querySelector('[data-mode="mexico"] .game-mode-name').textContent = lang.slangMexico;

  // 2. Clean up previous dynamic content
  const dynamicCategories = modal.querySelectorAll('.game-mode-category');
  dynamicCategories.forEach(category => {
    // Keep only the original football and slang categories
    const isOriginalCategory = ['football', 'slang'].some(original => 
      category.querySelector('.category-title')?.dataset.category === original
    );
    if (!isOriginalCategory) {
      category.remove();
    }
  });

  // 3. Clean up dynamic version options
  const dynamicOptions = modal.querySelectorAll('.game-mode-option[data-mode]');
  dynamicOptions.forEach(option => {
    if (VERSION_CONFIG[option.dataset.mode]) {
      option.remove();
    }
  });

  // 4. Rebuild dynamic content
  const categoryMap = {};
  
  // Group versions by category
  Object.entries(VERSION_CONFIG).forEach(([id, config]) => {
    const categoryKey = currentLanguage === 'es' ? config.category.es : config.category.en;
    if (!categoryMap[categoryKey]) {
      categoryMap[categoryKey] = [];
    }
    categoryMap[categoryKey].push({ id, config });
  });

  // Create or update categories
  Object.entries(categoryMap).forEach(([categoryName, versions]) => {
    // Find existing category or create new one
    let categoryEl = [...modal.querySelectorAll('.category-title')]
      .find(el => el.textContent === categoryName)
      ?.closest('.game-mode-category');

    if (!categoryEl) {
      categoryEl = document.createElement('div');
      categoryEl.className = 'game-mode-category';
      categoryEl.innerHTML = `
        <h3 class="category-title">${categoryName}</h3>
      `;
      // Insert after the original categories
      const lastOriginalCategory = modal.querySelector('[data-category="slang"]').closest('.game-mode-category');
      lastOriginalCategory.after(categoryEl);
    }

    // Add versions to category
    versions.forEach(({ id, config }) => {
      const existingOption = categoryEl.querySelector(`.game-mode-option[data-mode="${id}"]`);
      if (!existingOption) {
        const versionEl = document.createElement('div');
        versionEl.className = 'game-mode-option';
        versionEl.dataset.mode = id;
        versionEl.innerHTML = `
          <span class="game-mode-icon">${config.icon}</span>
          <span class="game-mode-name">
            ${currentLanguage === 'es' ? config.title.es : config.title.en}
          </span>
        `;
        versionEl.addEventListener('click', () => {
          currentCountry = id;
          applyVersionStyles(config);
          updateUrl(); // ADDED: Update URL for VERSION_CONFIG modes
          newGame();
          modal.style.display = 'none';
        });
        categoryEl.appendChild(versionEl);
      }
    });
  });
}


function updateFootballDisplayText() {
    if (currentCountry === 'football-players') {
        const flagContainer = document.querySelector('.country-flag');
        if (flagContainer) {
            flagContainer.innerHTML = `
                <span class="football-icon">⚽</span>
                <span>${LANGUAGES[currentLanguage].footballPlayers}</span>
            `;
        }
    }
}


function updateLanguage() {
    const lang = LANGUAGES[currentLanguage];
    
    // 1. Update CORE UI elements
    const timer = document.querySelector('.timer');
    const countryTitle = document.querySelector('.country-selector h3');
    const versionBtn = document.getElementById('other-versions-btn');
    
    if (timer) timer.textContent = lang.unlimitedAttempts;
    if (countryTitle) countryTitle.textContent = lang.playOtherCountries;
    if (versionBtn) versionBtn.textContent = lang.otherVersions;

    // 2. Update MODALS with all missing strings
    // Info Popup - Complete update
    const infoModal = document.getElementById('info-modal');
    if (infoModal) {
        // Main content
        infoModal.querySelector('h2').textContent = lang.howToPlay;
        const infoParagraphs = infoModal.querySelectorAll('.instructions p:not(.examples p)');
        if (infoParagraphs.length >= 3) {
            infoParagraphs[0].textContent = lang.instructions[0];
            infoParagraphs[1].textContent = lang.instructions[1];
            infoParagraphs[2].textContent = lang.instructions[2];
        }
        
        // Examples
        infoModal.querySelector('.examples h3').textContent = lang.examples;
        const examples = infoModal.querySelectorAll('.examples p');
        if (examples.length >= 3) {
            examples[0].innerHTML = lang.exampleCorrect;
            examples[1].innerHTML = lang.examplePresent;
            examples[2].innerHTML = lang.exampleAbsent;
        }
        
        // Notes (FIXED STRINGS)
        const noteText = infoModal.querySelector('.note-text');
        const monetizationNote = infoModal.querySelector('.monetization-note p');
        if (noteText) noteText.innerHTML = lang.note; // "¡Puedes jugar tantas veces..."
        if (monetizationNote) monetizationNote.innerHTML = lang.monetizationNote; // "Nota: Esta versión..."
    }

    // Stats Popup - Complete update
    const statsModal = document.getElementById('stats-modal');
    if (statsModal) {
        // Main stats
        statsModal.querySelector('h2').textContent = lang.statsTitle;
        const statLabels = statsModal.querySelectorAll('.stat-label');
        if (statLabels.length >= 4) {
            statLabels[0].textContent = lang.gamesPlayed;
            statLabels[1].textContent = lang.winPercentage;
            statLabels[2].textContent = lang.currentStreak;
            statLabels[3].textContent = lang.maxStreak;
        }
        
        // Fixed strings
        statsModal.querySelector('h3').textContent = lang.guessDistribution;
        const shareBtn = statsModal.querySelector('.share-btn');
        const nextWordText = statsModal.querySelector('.next-word-timer p');
        if (shareBtn) shareBtn.innerHTML = `<i class="fas fa-share-alt"></i> ${lang.share}`; // "Compartir"
        if (nextWordText) nextWordText.textContent = lang.nextGame; // "Puedes jugar otra palabra..."
    }

    // 3. FOOTBALL MODE updates
    if (currentCountry === 'football-players') {
        const footballText = document.querySelector('.country-flag span:not(.football-icon)');
        if (footballText) footballText.textContent = lang.footballPlayers;
    }

    // 4. Update game modes modal
    updateGameModesModal();
}

function updateModalTranslations() {
    const lang = LANGUAGES[currentLanguage];
    
    // Info Modal
    const infoModal = document.getElementById('info-modal');
    if (infoModal) {
        infoModal.querySelector('h2').textContent = lang.howToPlay;
        // ... rest of info modal translations ...
    }

    // Stats Modal
    const statsModal = document.getElementById('stats-modal');
    if (statsModal) {
        statsModal.querySelector('h2').textContent = lang.statsTitle;
        // ... rest of stats modal translations ...
    }

    // Game Over Modal (static elements only)
    const gameOverModal = document.getElementById('game-over-modal');
    if (gameOverModal) {
        gameOverModal.querySelector('h3').textContent = lang.distributionLabel;
        // ... rest of game over modal translations ...
    }
}


// Start a new game
function newGame() {
    // Close any open modals
    infoModal.style.display = 'none';
    statsModal.style.display = 'none';
    gameOverModal.style.display = 'none';
    
    // Reset game state
    word = getRandomWord();
    guesses = [];
    currentGuess = '';
    gameOver = false;
    
    // Clear the board
    board.innerHTML = '';
    
    // Generate the board
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        
        for (let j = 0; j < 5; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            row.appendChild(tile);
        }
        
        board.appendChild(row);
    }
    
    // Generate the keyboard
    generateKeyboard();

    // Update UI based on mode
    updateCountryUI();
    
    console.log('Word:', word); // For debugging
}

// Get a random word from the current country's list
/*function getRandomWord() {
    if (currentCountry === 'football-players') {
        const words = WORD_LISTS.jugadores_de_futbol;
        return words[Math.floor(Math.random() * words.length)].toUpperCase();
    } else {
        const words = WORD_LISTS[currentCountry];
        return words[Math.floor(Math.random() * words.length)].toUpperCase();
    }
}
    */

function getRandomWord() {
    // 1. Check if version exists in VERSION_CONFIG
    if (VERSION_CONFIG[currentCountry]) {
        const answerList = VERSION_CONFIG[currentCountry].wordLists.answers;
        return answerList[Math.floor(Math.random() * answerList.length)].toUpperCase();
    }
    // 2. Fallback to original football version
    else if (currentCountry === 'football-players') {
        const words = WORD_LISTS.jugadores_de_futbol;
        return words[Math.floor(Math.random() * words.length)].toUpperCase();
    }
    // 3. Original behavior for other versions
    else {
        const words = WORD_LISTS[currentCountry];
        return words[Math.floor(Math.random() * words.length)].toUpperCase();
    }
}

// Generate the on-screen keyboard
function generateKeyboard() {
    keyboard.innerHTML = '';
    
    const keyboardLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
    ];
    
    keyboardLayout.forEach(row => {
        const keyboardRow = document.createElement('div');
        keyboardRow.className = 'keyboard-row';
        
        row.forEach(key => {
            const keyElement = document.createElement('button');
            keyElement.className = 'key';
            keyElement.textContent = key;
            
            if (key === 'ENTER' || key === '⌫') {
                keyElement.classList.add('key-wide');
            }
            
            keyboardRow.appendChild(keyElement);
        });
        
        keyboard.appendChild(keyboardRow);
    });
}

// Handle physical keyboard input
function handleKeyPress(e) {
    if (gameOver) return;
    
    const key = e.key.toUpperCase();
    
    if (key === 'ENTER') {
        submitGuess();
    } else if (key === 'BACKSPACE') {
        deleteLetter();
    } else if (/^[A-ZÑ]$/.test(key)) {
        addLetter(key);
    }
}

// Add a letter to the current guess
function addLetter(letter) {
    if (currentGuess.length < 5) {
        currentGuess += letter;
        updateBoard();
        AudioManager.play('move'); // Play move sound
    }
}

// Delete the last letter from the current guess
function deleteLetter() {
    if (currentGuess.length > 0) {
        currentGuess = currentGuess.slice(0, -1);
        updateBoard();
    }
}

// Update the board to reflect the current guess
function updateBoard() {
    const row = board.children[guesses.length];
    
    for (let i = 0; i < 5; i++) {
        const tile = row.children[i];
        tile.textContent = currentGuess[i] || '';
        tile.className = 'tile';
        
        if (currentGuess[i]) {
            tile.classList.add('filled');
        }
    }
}

// Submit the current guess
/*
function submitGuess() {
    if (currentGuess.length < 5) {
        showMessage('tooShort');
        return;
    }

    const validation = isValidWord(currentGuess);
    if (!validation.valid) {
        showMessage(validation.message);
        shakeRow(guesses.length);
        return;
    }

    AudioManager.play('guess');
    guesses.push(currentGuess);
    updateBoardWithResult();

    if (currentGuess === word) {
        gameWon();
    } else if (guesses.length === 6) {
        gameLost();
    } else {
        currentGuess = '';
    }
}
    */

function submitGuess() {
    if (currentGuess.length < 5) {
        //showMessage(LANGUAGES[currentLanguage].tooShort);
        shakeRow(guesses.length);
        return;
    }

    if (!isValidWord(currentGuess)) {
        //showMessage(LANGUAGES[currentLanguage].invalidWord);
        shakeRow(guesses.length);
        return;
    }

    AudioManager.play('guess');
    guesses.push(currentGuess);
    updateBoardWithResult();

    if (currentGuess === word) {
        gameWon();
    } else if (guesses.length === 6) {
        gameLost();
    } else {
        currentGuess = '';
    }
}

// Check if a word is valid (in the word list)
//function isValidWord(guess) {
//    return WORD_LISTS[currentCountry].includes(guess.toLowerCase());
//}
//

// Update the board with the result of the current guess
function updateBoardWithResult() {
    const row = board.children[guesses.length - 1];
    const guess = guesses[guesses.length - 1];
    const wordLetters = word.split('');
    const guessLetters = guess.split('');
    
    // First pass: mark correct letters
    for (let i = 0; i < 5; i++) {
        const tile = row.children[i];
        
        if (guessLetters[i] === wordLetters[i]) {
            tile.classList.add('correct');
            updateKeyboardKey(guessLetters[i], 'correct');
            wordLetters[i] = null; // Mark as used
        }
    }
    
    // Second pass: mark present letters
    for (let i = 0; i < 5; i++) {
        const tile = row.children[i];
        
        if (!tile.classList.contains('correct')) {
            const index = wordLetters.indexOf(guessLetters[i]);
            
            if (index !== -1) {
                tile.classList.add('present');
                updateKeyboardKey(guessLetters[i], 'present');
                wordLetters[index] = null; // Mark as used
            } else {
                tile.classList.add('absent');
                updateKeyboardKey(guessLetters[i], 'absent');
            }
        }
        
        // Add flip animation
        setTimeout(() => {
            tile.classList.add('flip');
        }, i * 200);
    }
}

// Update a key on the keyboard with the given state
function updateKeyboardKey(key, state) {
    const keys = document.querySelectorAll('.key');
    
    keys.forEach(k => {
        if (k.textContent === key) {
            // Don't override correct with present or absent
            if (k.classList.contains('correct')) return;
            
            // Don't override present with absent
            if (k.classList.contains('present') && state === 'absent') return;
            
            k.classList.add(state);
        }
    });
}

// Show a message to the user
function showMessage(messageKey) {
    const lang = LANGUAGES[currentLanguage];
    let message;
    
    if (messageKey === 'invalidWord') {
        message = lang.invalidWord;
    } else if (messageKey === 'notInCountry') {
        const countryName = document.querySelector('.country-flag span').textContent;
        message = lang.notInCountry.replace('{country}', countryName);
    } else if (messageKey === 'tooShort') {
        message = lang.tooShort;
    } else {
        message = messageKey; // Fallback for direct messages
    }
    
    const messageElement = document.createElement('div');
    messageElement.className = 'message animate__animated animate__bounceIn';
    messageElement.textContent = message;
    
    document.body.appendChild(messageElement);
    
    setTimeout(() => {
        messageElement.classList.add('animate__fadeOut');
        setTimeout(() => {
            messageElement.remove();
        }, 500);
    }, 2000);
}

// Shake the current row
function shakeRow(rowIndex) {
    const row = board.children[rowIndex];
    
    for (let i = 0; i < 5; i++) {
        const tile = row.children[i];
        tile.classList.add('shake');
        
        setTimeout(() => {
            tile.classList.remove('shake');
        }, 500);
    }
}


function gameWon() {
    gameOver = true;
    
    // Update stats
    stats.gamesPlayed++;
    stats.gamesWon++;
    stats.currentStreak++;
    
    if (stats.currentStreak > stats.maxStreak) {
        stats.maxStreak = stats.currentStreak;
    }
    
    stats.guessDistribution[guesses.length - 1]++;
    saveStats();
    
    // Use standard messages for all modes
    document.getElementById('game-over-title').textContent = LANGUAGES[currentLanguage].winTitle;
    document.getElementById('game-over-message').innerHTML = 
        `${LANGUAGES[currentLanguage].correctWord} <span id="correct-word">${word}</span>`;
    
    // Show stats in modal
    updateGameOverStats();
    
    setTimeout(() => {
        gameOverModal.style.display = 'flex';
    }, 1000);

    AudioManager.play('win');
    checkStreakCelebration();
}

function gameLost() {
    gameOver = true;
    
    // Update stats
    stats.gamesPlayed++;
    stats.currentStreak = 0;
    saveStats();
    
    // Use standard messages for all modes
    document.getElementById('game-over-title').textContent = LANGUAGES[currentLanguage].loseTitle;
    document.getElementById('game-over-message').innerHTML = 
        `${LANGUAGES[currentLanguage].correctWord} <span id="correct-word">${word}</span>`;
    
    // Show stats in modal
    updateGameOverStats();
    
    setTimeout(() => {
        gameOverModal.style.display = 'flex';
    }, 1000);

    AudioManager.play('loss');
}


function updateGameOverStats() {


    const lang = LANGUAGES[currentLanguage];
    
    // Update stats labels
    document.querySelectorAll('#game-over-modal .stat-label')[0].textContent = lang.gamesPlayed;
    document.querySelectorAll('#game-over-modal .stat-label')[1].textContent = lang.winPercentage;
    document.querySelectorAll('#game-over-modal .stat-label')[2].textContent = lang.currentStreak;
    document.querySelectorAll('#game-over-modal .stat-label')[3].textContent = lang.maxStreak;
    
    // Update distribution title
    document.querySelector('#game-over-modal h3').textContent = lang.guessDistribution;
    
    // Update buttons
    document.querySelector('#game-over-modal .action-buttons button:first-child').textContent = lang.playAgain;
    document.querySelector('#game-over-modal .action-buttons .share-btn').innerHTML = 
        `<i class="fas fa-share-alt"></i> ${lang.shareResults}`;


    // Update the stats display
    document.getElementById('game-over-games-played').textContent = stats.gamesPlayed;
    document.getElementById('game-over-win-percentage').textContent = 
        stats.gamesPlayed > 0 ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) + '%' : '0%';
    document.getElementById('game-over-current-streak').textContent = stats.currentStreak;
    document.getElementById('game-over-max-streak').textContent = stats.maxStreak;
    
    // Update guess distribution
    const guessDistribution = document.getElementById('game-over-guess-distribution');
    guessDistribution.innerHTML = '';
    
    const maxCount = Math.max(...stats.guessDistribution);
    
    stats.guessDistribution.forEach((count, index) => {
        const guessItem = document.createElement('div');
        guessItem.className = 'guess-item';
        
        const guessNumber = document.createElement('div');
        guessNumber.className = 'guess-number';
        guessNumber.textContent = index + 1;
        
        const guessBar = document.createElement('div');
        guessBar.className = 'guess-bar';
        
        const guessBarFill = document.createElement('div');
        guessBarFill.className = 'guess-bar-fill';
        guessBarFill.style.width = maxCount > 0 ? (count / maxCount) * 100 + '%' : '0%';
        
        const guessCount = document.createElement('div');
        guessCount.className = 'guess-count';
        guessCount.textContent = count;
        
        guessBar.appendChild(guessBarFill);
        guessItem.appendChild(guessNumber);
        guessItem.appendChild(guessBar);
        guessItem.appendChild(guessCount);
        guessDistribution.appendChild(guessItem);
    });
}


// Load stats from localStorage
function loadStats() {
    const savedStats = localStorage.getItem('boludleStats');
    
    if (savedStats) {
        stats = JSON.parse(savedStats);
    }
}

// Save stats to localStorage
function saveStats() {
    localStorage.setItem('boludleStats', JSON.stringify(stats));
}

// Show the stats modal
function showStats() {
    // Update the stats display
    document.getElementById('games-played').textContent = stats.gamesPlayed;
    document.getElementById('win-percentage').textContent = stats.gamesPlayed > 0 
        ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) + '%' 
        : '0%';
    document.getElementById('current-streak').textContent = stats.currentStreak;
    document.getElementById('max-streak').textContent = stats.maxStreak;
    
    // Update guess distribution
    const guessDistribution = document.querySelector('.guess-distribution');
    guessDistribution.innerHTML = '';
    
    const maxCount = Math.max(...stats.guessDistribution);
    
    stats.guessDistribution.forEach((count, index) => {
        const guessItem = document.createElement('div');
        guessItem.className = 'guess-item';
        
        const guessNumber = document.createElement('div');
        guessNumber.className = 'guess-number';
        guessNumber.textContent = index + 1;
        
        const guessBar = document.createElement('div');
        guessBar.className = 'guess-bar';
        
        const guessBarFill = document.createElement('div');
        guessBarFill.className = 'guess-bar-fill';
        guessBarFill.style.width = maxCount > 0 ? (count / maxCount) * 100 + '%' : '0%';
        
        const guessCount = document.createElement('div');
        guessCount.className = 'guess-count';
        guessCount.textContent = count;
        
        guessBar.appendChild(guessBarFill);
        guessItem.appendChild(guessNumber);
        guessItem.appendChild(guessBar);
        guessItem.appendChild(guessCount);
        guessDistribution.appendChild(guessItem);
    });
    
    statsModal.style.display = 'flex';
}

// Share stats
function shareStats() {
    const text = `Boludle - Estadísticas\n\nJugadas: ${stats.gamesPlayed}\nVictorias: ${stats.gamesWon}\nRacha actual: ${stats.currentStreak}\nRacha máxima: ${stats.maxStreak}\n\nDistribución de intentos:\n${stats.guessDistribution.map((count, i) => `${i + 1}: ${count}`).join('\n')}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Mis estadísticas de Boludle',
            text: text,
            url: window.location.href
        }).catch(() => {
            copyToClipboard(text);
            showMessage('Estadísticas copiadas');
        });
    } else {
        copyToClipboard(text);
        showMessage('Estadísticas copiadas');
    }
}

// Share result
function shareResult() {
    const resultText = generateShareText();
    
    if (navigator.share) {
        navigator.share({
            title: `Boludle ${guesses.length}/6`,
            text: resultText,
            url: window.location.href
        }).catch(() => {
            copyToClipboard(resultText);
            showMessage('Resultado copiado');
        });
    } else {
        copyToClipboard(resultText);
        showMessage('Resultado copiado');
    }
}

// Generate share text
/*
function generateShareText() {
    const guessCount = guesses.length === 6 ? 'X' : guesses.length;
    let result = `Boludle ${currentCountry} ${guessCount}/6\n\n`;
    
    guesses.forEach(guess => {
        const wordLetters = word.split('');
        const guessLetters = guess.split('');
        
        for (let i = 0; i < 5; i++) {
            if (guessLetters[i] === wordLetters[i]) {
                result += '🟩';
            } else if (wordLetters.includes(guessLetters[i])) {
                result += '🟨';
            } else {
                result += '⬜';
            }
        }
        result += '\n';
    });
    
    return result;
}
*/

// Copy text to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}


// Helper functions
function getCountryCode(country) {
  const codes = {
    'argentina': 'ar',
    'chile': 'cl',
    'peru': 'pe',
    'colombia': 'co',
    'mexico': 'mx'
  };
  return codes[country] || 'ar';
}

function getCountryName(country) {
  const names = {
    'argentina': 'Argentina',
    'chile': 'Chile',
    'peru': 'Perú',
    'colombia': 'Colombia',
    'mexico': 'México'
  };
  return names[country] || 'Argentina';
}

// Update UI when country changes
function updateCountryUI() {
    window.scrollTo(0, 0);

    const titleEl = document.querySelector('.title');
    const subtitleEl = document.querySelector('.subtitle');
    const flagContainer = document.querySelector('.country-flag');
    const countrySelector = document.querySelector('.country-selector');

    // First reset all background styles
    document.body.style.backgroundImage = '';
    document.body.style.backgroundSize = '';
    document.body.style.backgroundPosition = '';
    document.body.style.backgroundAttachment = '';

    // 1. Handle VERSION_CONFIG versions (new system)
    if (VERSION_CONFIG[currentCountry]) {
        const config = VERSION_CONFIG[currentCountry];
        
        // Apply "Wordz" title style
        titleEl.textContent = 'Wordz';
        subtitleEl.style.display = 'none';
        
        // Set custom title + icon
        flagContainer.innerHTML = `
            ${config.icon.startsWith('http') ? 
                `<img src="${config.icon}" class="game-mode-icon">` : 
                `<span class="game-mode-icon">${config.icon}</span>`}
            <span>${currentLanguage === 'es' ? config.title.es : config.title.en}</span>
        `;
        
        // Apply background if specified
        document.body.className = '';
        if (config.background) {
            document.body.style.backgroundImage = config.background;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundAttachment = 'fixed';
        }
        
        // Simplified selector (like football version)
        countrySelector.innerHTML = `
            <div class="other-versions-btn-container">
                <button id="other-versions-btn" class="other-versions-btn">
                    ${LANGUAGES[currentLanguage].otherVersions}
                </button>
            </div>
        `;
    }
    // 2. Original football version
    else if (currentCountry === 'football-players') {
        document.body.className = 'football-mode';
        titleEl.textContent = 'Wordz';
        subtitleEl.style.display = 'none';
        
        flagContainer.innerHTML = `
            <span class="football-icon">⚽</span>
            <span>${LANGUAGES[currentLanguage].footballPlayers}</span>
        `;
        
        countrySelector.innerHTML = `
            <div class="other-versions-btn-container">
                <button id="other-versions-btn" class="other-versions-btn">
                    ${LANGUAGES[currentLanguage].otherVersions}
                </button>
            </div>
        `;
    }
    // 3. Original Lexico Latino versions
    else {
        document.body.className = currentCountry;
        titleEl.textContent = 'Lexico';
        subtitleEl.style.display = 'inline';
        
        flagContainer.innerHTML = `
            <img src="https://flagcdn.com/w40/${getCountryCode(currentCountry)}.png" 
                 alt="${currentCountry}" 
                 class="flag-icon">
            <span>${getCountryName(currentCountry)}</span>
        `;
        
        countrySelector.innerHTML = `
            <h3>${LANGUAGES[currentLanguage].playOtherCountries}</h3>
            <div class="flags-container">
                <div class="flag-option" data-country="argentina">
                    <img src="https://flagcdn.com/w40/ar.png" alt="Argentina">
                    <span>Argentina</span>
                </div>
                <div class="flag-option" data-country="chile">
                    <img src="https://flagcdn.com/w40/cl.png" alt="Chile">
                    <span>Chile</span>
                </div>
                <div class="flag-option" data-country="peru">
                    <img src="https://flagcdn.com/w40/pe.png" alt="Perú">
                    <span>Perú</span>
                </div>
                <div class="flag-option" data-country="colombia">
                    <img src="https://flagcdn.com/w40/co.png" alt="Colombia">
                    <span>Colombia</span>
                </div>
                <div class="flag-option" data-country="mexico">
                    <img src="https://flagcdn.com/w40/mx.png" alt="México">
                    <span>México</span>
                </div>
            </div>
            <div class="other-versions-btn-container">
                <button id="other-versions-btn" class="other-versions-btn">
                    ${LANGUAGES[currentLanguage].otherVersions}
                </button>
            </div>
        `;
        
        // Reattach flag event listeners with URL update
        document.querySelectorAll('.flag-option').forEach(option => {
            option.addEventListener('click', () => {
                currentCountry = option.dataset.country;
                updateUrl(); // Added this line
                updateCountryUI();
                newGame();
            });
        });
    }

    // Reattach version button listener (for all cases)
    document.getElementById('other-versions-btn')?.addEventListener('click', () => {
        document.getElementById('game-modes-modal').style.display = 'flex';
    });
}


// Milestone configuration
const STREAK_MILESTONES = [5, 10, 25, 50, 100, 250, 500, 1000];
let currentStreak = 0;

// Call this when player wins a game
function checkStreakCelebration() {
  currentStreak = stats.currentStreak;
  
  if (STREAK_MILESTONES.includes(currentStreak)) {
    showStreakCelebration(currentStreak);
  }
}

function showStreakCelebration(streakCount) {
  // Create container
  const celebration = document.createElement('div');
  celebration.className = 'streak-celebration';
  
  // Create image element
  const img = document.createElement('img');
  img.className = 'streak-image';
  img.src = `/images/${streakCount}_wins.png`;
  img.alt = `${streakCount} wins streak!`;
  
  // Add image to container
  celebration.appendChild(img);
  
  // Add to DOM
  document.body.appendChild(celebration);
  
  // Auto-remove after animation
  setTimeout(() => {
    celebration.remove();
  }, 2500);
}


// Initialize the game when the page loads
//window.addEventListener('DOMContentLoaded', init);

// Initialize the game and handle URL routing
window.addEventListener('DOMContentLoaded', () => {
  init(); // Your existing initialization
  handleUrlRouting(); // New URL processor
});

// Handle back/forward button navigation
window.addEventListener('popstate', handleUrlRouting);

