export const reptiles = [
  {
    id: 1,
    img: '../assets/images/beared_dragon.png',
    mainBackground: '../assets/images/beared_dragon_bg.png',
    infoBackground: '../assets/images/beared_dragon_info_bg.png',
    name: 'Бородатая Агама',
    latinName: 'BEARDED DRAGON',
    area: 'Австралия',
    description: `Среднего размера ящерица с широким уплощенным телом. 
    Голова широкая, треугольной формы. Углы рта, область вокруг ушного отверстия и 
    особенно горло бородатой агамы покрыты острыми чешуйками-колючками, 
    расположенными в виде буквы V – это и есть та самая «борода», украшение, 
    делающее мордочку этой рептилии такой выразительной.`,
    testNameColor: '#FF8D27',
    testDescription: `Бородатая агама — экзотическая ящерица, которую чаще всего выбирают в качестве домашнего животного. Нестандартная внешность и спокойный характер не дадут пройти мимо тем, кто ищет себе необычного питомца. Агама в длину достигает 40-60 см. Окраска разнообразна, существуют различные выведенные морфы: можно встретить желтых, красных, белых агам и даже без чешуи. Эта ящерица ведет активную дневную жизнь в засушливых пустынях и полупустынях Австралии.`,
    fullDescription: {
      mainImg: '../assets/images/beared_dragon_main_icon.png',
      areaImg: '../assets/images/beared_dragon_area.png',
      maintenanceImg: '../assets/images/beared_dragon_maintenance.png',
      foodImg: '../assets/images/beared_dragon_food.png',
      natureAge: '8 лет',
      homeAge: '10-12 лет',
      weight: '300 гр',
      foodType: 'Всеядная',
      tailLength: '30 - 35 см',
      bodyLength: '40 - 60 см',
      tailColor: '#FFC700',
      bodyColor: '#FF8D27',
      areaDescription: `Естественной средой обитания необычного по внешнему виду чешуйчатого пресмыкающегося являются Австралийские полупустынные зоны, редкие лесистые, а также каменистого типа местности. Большое количество особей населяет штаты Новый Южный Уэльс и Квинсленд, а также северо-западную часть штата Виктория, восточную часть Южной Австралии и юго-восточную Северной Территории.
        <br/><br/>
        Бородатая агама предпочитает селиться в засушливых пустынных и полупустынных биотопах, сухих лесных зонах, каменистых полупустынях или тенистых кустарниковых зарослях. Животное ведет наземный или полудревесный образ жизни, и особенно активно только в дневные часы. Укрытиями для чешуйчатого пресмыкающегося служат вырытые самостоятельно или другими животными норы, а также каменистые груды и расщелины, расположенные у корневой системы растений.`,
      terrariumDescription: `Просторный горизонтальный террариум. Для одной особи 90*45*30 см, 90*45*45 см`,
      lightDescription: `Несколько ламп дневного света (Natural Light и Reptile Vision) и лампы с мощным УФ-излучением (UVB150-200). Световой день составляет 12-14 часов`,
      temperatureDescription: `<b>Дневная температура</b> в средней зоне — от +25 °C до +30 °C, в точке прогрева — до +30...+38 °C`,
      nightTemperatureDescription: `<b>Ночная температура</b> может опускаться до +22 °C`,
      humidity: 'Влажность в террариуме не поддерживается',
      priming:
        'В качестве грунта используют пустынный песок Desert Sand или Stone Desert.',
      difficulty: 2,
      food: {
        descriptions: [
          `Чаще всего в пищу употребляются насекомые. Не реже раза в неделю стоит разбавлять рацион и растительными компонентами.`,
          `Кормить:<br />— с 1-6м <b>ежедневно</b>;<br />— с 6-12м	<b>через день</b>;<br />
          — от 12м	<b>2-3 раза в неделю</b>.`,
          `Лучше не ограничиваться только насекомыми и периодически вводить в рацион растительную пищу. Особенно рептилии любят сочные фрукты и ягоды.`,
          `Насекомых посыпают специальными витаминами или кальцием.<br />  Корм нужно давать только утром и днем. В вечернее время кормление <b>не рекомендуется</b>.`,
        ],
        types: getFoodTypes([1, 2, 3, 4, 5, 6, 7]),
      },
    },
  },
  {
    id: 2,
    img: '../assets/images/physignathus_cocincinus.png',
    name: 'Водяная Агама',
    testNameColor: '#24AE2A',
    latinName: 'Physignathus cocincinus',
    area: 'Юго-Восточная Азия',
    testDescription: `Водяная агама – красивая и необычная ящерица, которая очень популярна среди заводчиков экзотических животных. Цветовой окрас здоровой водяной агамы яркого мятно-зеленого цвета с белыми боками и голубыми или коричневыми полосами вдоль спины ящерицы. Хвост ящерицы длинный с различными узорами, представленными в виде чередующихся темных и светлых полос.
    Водяные агамы очень дружелюбны и любопытны от природы. Они очень редко проявляют агрессию по отношению к человеку.`,
    description: `Рептилия обладает дружелюбным нравом, хорошо идет на контакт с человеком, быстро привыкает к владельцу. Важно при первом знакомстве с ними не показывать грубости и агрессии. Животное не любит, когда его резко хватают или издают громкие звуки. На приручение уходит не так много времени. Главное, что нужно рептилии — привыкнуть к вашему запаху и понять, что вы не представляете опасности, настроены подружиться с ней.`,
    mainBackground: '../assets/images/water_dragon_bg.png',
    infoBackground: '../assets/images/water_dragon_info_bg.png',
    fullDescription: {
      mainImg: '../assets/images/water_dragon_main_icon.png',
      areaImg: '../assets/images/water_dragon_area.png',
      maintenanceImg: '../assets/images/water-dragon-maintance.png',
      foodImg: '../assets/images/water_dragon_food.png',
      natureAge: '10-15 лет',
      homeAge: '18-20 лет',
      weight: '600-1000 гр',
      foodType: 'Всеядная',
      tailLength: '30 - 70 см',
      bodyLength: '70 - 150 см',
      tailColor: '#96CA3D',
      bodyColor: '#21A36C',
      areaDescription: `Ящерицы обычно выбирают для себя теплые места рядом с водоемами. Их можно часто встретить на берегу рек и озер, где они греются на солнце. Рептилии часто забираются на ветки, а днем особенно активны. Агамы хорошо плавают и даже умеют бегать по воде — при первых признаках опасности они могут спрыгнуть в водоем и быстро убежать от преследователя. Интересный факт — под водой эти ныряльщики могут провести до 25 минут.
<br/><br/>
      Водяные агамы ведут дневной образ жизни. Ночь они проводят на деревьях, питаются в дневное время суток, как на деревьях, так и в воде и на земле. Самое жаркое время суток ящерицы проводят на ветвях и стволах деревьев в непосредственной близости к воде, где наблюдается относительное проветривание. Водяная агама — это ящерица, распространенная в Китае, Таиланде, Малайзии и других странах Юго-Восточной Азии. Они обживают влажные леса, с удовольствием заселяясь на кустарниках и деревьях вблизи от водоемов.`,
      terrariumDescription: `Просторный вертикальный террариум. Для самца — 60×45×90 см, для самки — 45×45×90 см`,
      lightDescription: `Лампы дневного света со средним уровнем УФ-излучения.<br/>
      Световой день составляет 11-13 часов`,
      temperatureDescription: `<b>Дневная температура</b> в средней зоне — от +22 °C до +25 °C, в точке прогрева — до +35 °C`,
      nightTemperatureDescription: `<b>Ночная температура</b> может опускаться от +22 °C до +24 °C`,
      humidity:
        'Влажность не менее 60 %. Некоторым особям будет более комфортно при влажности 80 %',
      priming:
        'Оптимальным решением будет палюдариум, дно которого заполняется водой. Агама будет плавать, чтобы остудиться, а в террариуме сохранится высокая влажность',
      difficulty: 4,
      food: {
        descriptions: [
          `На стадии активного роста агамы очень любят поесть. Кормление проводиться каждый день. Рептилии должны получать сбалансированные корм с большим содержанием белка. Среди любимых лакомств агам — сверчки, саранча.`,
          `В момент достижения питомцем зрелости можно переходить на иной график кормления — около трех раз в неделю. Здесь придется позаботиться о предоставлении более крупного корма.`,
          `Среди любимых лакомств агам — сверчки, саранча. Не стоит забывать и о добавления в рацион натуральных витаминов. Они содержаться в зелени, овощах.`,
          `У каждой особи есть свои вкусовые предпочтения — кто-то  ест салат, других не оторвешь от клубники. Растительную пищу они едят не так часто, как белковую.`,
        ],
        types: getFoodTypes([8, 2, 9, 4, 5, 6, 7]),
      },
    },
  },
  {
    id: 3,
    img: '../assets/images/TRACHEMYS_SCRIPTA_ELEGANS.png',
    name: 'Красноухая Черепаха',
    latinName: 'TRACHEMYS SCRIPTA ELEGANS',
    area: 'Америка',
    testNameColor: '#035997',
    testDescription: `Красноухая черепаха самое популярное домашнее земноводное во всем мире, поэтому она стала самой продаваемой в конце XX века. Этот вид является родным для южной части Соединенных Штатов и северной Мексики. Однако он постепенно стал распространяется в другие регионы, из-за отказа людей содержать ее как домашнее животное и выбрасывания в местные водоемы.`,
    description: `Пресноводная черепашка небольшого размера, из которой получится чудесный питомец. Требует небольшой террариум с пресной водой и сухим местом, на которое может выползти, чтобы погреться. Маленькая черепаха требует ежедневного кормления, взрослую можно кормить раз 2-3 дня. Поскольку эти всеядные зверушки довольно неопрятно едят, их лучше кормить в отдельном загончике.`,
    mainBackground: '../assets/images/water_dragon_bg.png',
    infoBackground: '../assets/images/tortoise_info_bg.jpg',
    fullDescription: {
      mainImg: '../assets/images/tortoise_main_icon.svg',
      areaImg: '../assets/images/tortoise_area.png',
      maintenanceImg: '../assets/images/tortoise_maintenance.svg',
      foodImg: '../assets/images/tortoise_food.svg',
      natureAge: '20-30 лет',
      homeAge: '25-40 лет',
      weight: '800-1200 гр',
      foodType: 'Всеядная',
      tailLength: '3 - 5 см',
      bodyLength: '26 - 30 см',
      tailColor: '#21A36C',
      bodyColor: '#035997',
      areaDescription: `Родом красноухая пресноводная черепаха из Северной Америки, особенно часто встречается она вдоль течения реки Миссисипи до впадения ее в Мексиканский залив. Живет она в теплом климате, в южных штатах США, от Колорадо до Флориды. Но, популярность ее велика и сейчас она часто встречается в природе по всему миру, зачастую создавая угрозу местной фауне.
        <br/><br/>
      В природной среде обитания ей нужны такие условия: пресная вода, места для того чтобы погреться, густая растительность и для гнезда. Обычно это озера, пруды, болота, затоки. Водоемы предпочитает с теплой водой и слабым течением, обязательно с местами над поверхностью воды на которые она будет вылезать погреться. Зачастую <br/>в таких местах они прямо лежат друг на друге. Дно в таких местах, как правило, песчаное либо заиленное.`,
      terrariumDescription: `Просторный вертикальный террариум. <br/>Для одной особи — 60×45×30 см`,
      lightDescription: `Лампа ультрафиолетовая для водных черепах с UVB 10%.<br/>
      Световой день составляет 10-12 часов`,
      temperatureDescription: `<b>Дневная температура</b> на берегу — <br/>от +28°C до +35°C`,
      nightTemperatureDescription: `<b>Температура воды</b> в аквариуме с черепахой должна быть от +22°C до +28°C <br/>и не опускаться ниже +20°C`,
      humidity:
        'Воды должно быть столько, чтобы черепаха могла в ней свободно переворачиваться, <br/>то есть больше чем ширина ее панциря',
      priming:
        'Нужна искусственная суша или островок, <br>на который черепаха будет выползать и греться',
      difficulty: 2,
      food: {
        descriptions: [
          `Еду нужно давать один раз в день, но не более. Также, в аквариуме должны быть разные водоросли и любые другие растения, которые являются съедобными для черепах.`,
          `Взрослые черепахи питаются пищей <br/>раз в два или три дня и половину их рациона обязательно должна составлять растительность.`,
          `Нужно следить за тем, чтобы корм был подходящей комнатной температуры <br/>и обязательно сырой консистенции. Важно помнить о том, что молодые черепахи – это, прежде всего, хищники. Их основной вид корма – это рыба.`,
          `Количество даваемого корма определяется исходя из размера черепахи. Для малышей норма – два-три кусочка по 1 см³, а для черепах повзрослее – два-три куска в несколько раз больше по размеру.`,
        ],
        types: getFoodTypes([8, 10, 9, 4, 5, 11, 7]),
      },
    },
  },
  {
    id: 4,
    img: '../assets/images/CHAMAELEONIDAE.png',
    name: 'Йеменский Хамелеон',
    latinName: 'CHAMAELEONIDAE',
    testNameColor: '#21A36C',
    testDescription: `Хамелеоны — удивительные существа. Они имеют уникальное строение глаз, которое позволяет им вращаться вне зависимости друг от друга. Цепкие сдвоенные пальцы обеспечивают крепкий хват, они отлично перемещаются по веткам и лианам, а хвост служит пятой лапой — хамелеон может с легкостью удерживать свой вес на одном хвосте. Их язык превышает длину тела в 1.5 раза, они самые молниеносные охотники, при этом сами по себе хамелеоны довольно медлительны. Это прекрасные питомцы, которые обожают сидеть на руках.`,
    area: 'Африка',
    description: `Хамелеон рекомендован опытным заводчикам рептилий из-за своего трепетного нрава. Они умеют менять цвета, и у них весьма необычный внешний облик. Самыми популярными разновидностями хамелеонов для содержания дома считаются пантерный, йеменский и Джексона. Требуют просторного вольера, питаются мухами, кузнечиками, фруктами и ягодами.`,
    mainBackground: '../assets/images/water_dragon_bg.png',
    infoBackground: '../assets/images/water_dragon_info_bg.png',
    fullDescription: {
      mainImg: '../assets/images/hameleon_main_icon.svg',
      areaImg: '../assets/images/hameleon_area.png',
      maintenanceImg: '../assets/images/hameleon_maintenance.svg',
      foodImg: '../assets/images/hameleon_food.svg',
      natureAge: '3-5 лет',
      homeAge: '8-10 лет',
      weight: '160 гр',
      foodType: 'Всеядный',
      tailLength: '15 - 30 см',
      bodyLength: '35 - 55 см',
      tailColor: '#96CA3D',
      bodyColor: '#21A36C',
      areaDescription: `По климатическим признакам можно разделить на 4 основных типа: влажные береговые равнины, горные склоны и высокогорные плато Йемена, сухие аридные области восточного побережья Саудовской Аравии Встречается в сухой горной местности на высоте до 3500 метров над уровнем моря. Живёт на акациях и молочае.
<br/><br/>
      Ящерицы очень любят проводить много времени проводить на ветвях деревьев и кустарников. Однако при большом разнообразии выбирает из имеющихся видов наиболее понравившиеся виды растительности. К таковым относится акация, суккулентные и кактусовидные растения и кустарники семейства молочайных. Часто ящерицы селятся поблизости от человеческих поселений, выбирая сады и парковые заросли.`,
      terrariumDescription: `Просторный вертикальный террариум. <br/>Для самца — 60×45×90 см, для самки — 45×45×60 см`,
      lightDescription: `Лампы дневного света со средним уровнем УФ-излучения.<br/>
      Световой день составляет 11-13 часов`,
      temperatureDescription: `<b>Дневная температура</b> в средней зоне — <br/>от +27 °C до +29 °C, в точке прогрева — <br/>до +35 °C`,
      nightTemperatureDescription: `<b>Ночная температура</b> может опускаться <br/>от +22 °C до +24 °C`,
      humidity: 'Комфортные показатели для проживания — от 20 до 55 %',
      priming:
        'В качестве грунта лучше всего использовать древесный грунт. Он хорошо держит влагу и не плесневеет',
      difficulty: 3,
      food: {
        descriptions: [
          `Чаще всего в пищу употребляются насекомые. Не реже раза в неделю стоит разбавлять рацион и растительными компонентами.`,
          `Кормить:<br/>
          —с 1-6м <b>ежедневно</b>;<br/>
          — с 6-12м	<b>через день</b>;<br/>
          — от 12м	<b>2-3 раза в неделю</b>.`,
          `Насекомых посыпают специальными витаминами или кальцием. <br/>Корм нужно давать только утром и днем. В вечернее время кормление <b>не рекомендуется</b>.`,
          `Лучше не ограничиваться только насекомыми и периодически вводить в рацион растительную пищу. Особенно рептилии любят сочные фрукты и ягоды.`,
        ],
        types: getFoodTypes([1, 2, 3, 4, 5, 6, 7]),
      },
    },
  },
  {
    id: 5,
    img: '../assets/images/PANTHEROPHIS_GUTTATUS.png',
    name: 'Маисовый Полоз',
    latinName: 'PANTHEROPHIS GUTTATUS',
    area: 'Америка',
    testNameColor: '#423223',
    testDescription: `Маисовый полоз — это североамериканская неядовитая змея, которая относится к семейству ужеобразных. Рептилия не только не опасна для человека, но и повсеместно используется в роли домашнего животного. Это тихие и красивые питомцы, которые точно не заставят вас скучать. 
    Что касается отношения к человеку, то эта змея не опасна не только потому, что не выделяет яд, но и по той причине, что она практически никогда не кусается, как и дикие ужи.`,
    description: `Спокойная, неприхотливая, яркая змея, рекомендованная тем, кто решил завести первую в своей жизни ручную рептилию. Нрав у маисового полоза умеренный, змея неядовитая, её размер во взрослом виде — от 1,2 до 1,8 метров. Она питается свежими мышками 1 или 2 раза в неделю и живёт в тёплом террариуме, имитирующем климат родной Южной Америки. Срок жизни — до 23 лет.`,
    mainBackground: '../assets/images/water_dragon_bg.png',
    infoBackground: '../assets/images/poloz_info_bg.jpg',
    fullDescription: {
      mainImg: '../assets/images/poloz_main_icon.svg',
      areaImg: '../assets/images/poloz_area.png',
      maintenanceImg: '../assets/images/poloz_maintenance.svg',
      foodImg: '../assets/images/poloz_food.svg',
      natureAge: '10 лет',
      homeAge: '12-20 лет',
      weight: '350-520 гр',
      foodType: 'Плотоядный',
      tailLength: '110 - 200 см',
      bodyLength: '0 см',
      tailColor: '#423223',
      bodyColor: '#423223',
      areaDescription: `Маисовый полоз является коренным обитателем Северной Америки. Встречается этот вид также на севере Мексики, но чаще всего это пресмыкающееся встречается на востоке и юге, а также в центральной части Северо-Американского континента.
      <br/><br/>
      Встречается в различных природных условиях, при этом предпочтение представляют лесные массивы. Может селиться полоз и в условиях гористой местности, выбирая расщелины между скалами, которые являются надежным укрытием для змеиного семейства. Кроме этого, полоз обитает на полях, на лугах и других территориях, покрытых густой зеленой растительностью. Змею можно часто встретить рядом с человеческим жилищем, где рептилия может поселиться в одной из построек хозяйственного значения, где любят появляться грызуны.
      <br/><br/>
      Основные и многочисленные популяции встречаются рядом с фермерскими хозяйствами практически по всей территории Северной Америки, во многих провинциях Мексики, а также на Каймановых островах.`,
      terrariumDescription: `Просторный горизонтальный террариум. Для одной особи 60×45×30`,
      lightDescription: `В террариуме используются лампы дневного света. Для рептилии важно сочетание дневного и ночного режима. Световой день составляет 12 -14 часов`,
      temperatureDescription: `<b>Дневная температура</b> в средней зоне — <br/>от +21 °C до +24 °C, в точке прогрева — <br/>от +28 °C до +30 °C`,
      nightTemperatureDescription: `<b>Ночная температура</b> может опускаться до +22°C`,
      humidity:
        'Субстрат нужно опрыскивать. В зоне с более низкой температурой должно быть сухо. Когда полоз линяет – комфортная влажность дня него 70-80 %, в остальное время достаточно 60 %',
      priming:
        'Лучше всего подходит грунт Snake Bedding. Он не пылит, мягкий, поглощает запахи и держит тепло. Змеям нравится в него зарываться',
      difficulty: 2,
      food: {
        descriptions: [
          `Режим кормления выбирается индивидуально. На него напрямую влияет возраст, вес маисового полоза, условия содержания. Молодые животные могут есть 1-2 в неделю, более взрослые — 1 раз в 1-2 недели.`,
          `Эта рептилия плотоядна. <br/>На корм идут мыши, крысы, перепелята или цыплята.`,
          `Очень важно не перекармливать змею. Одна из потенциальных проблем содержания в домашних условиях — ожирение питомца.`,
          `Для домашних змей корм нужно хранить в замороженном состоянии, а подавать только доведенным до комнатной температуры или даже лучше чуть подогретым на лампе или батарее, так как они реагируют на тепло. В зимний период и в период гона змея может отказываться от пищи по нескольку недель.`,
        ],
        types: getFoodTypes([13, 9, 12]),
      },
    },
  },
  {
    id: 6,
    img: '../assets/images/PYTHON_REGIUS.png',
    name: 'Питон Королевский',
    latinName: 'PYTHON REGIUS',
    area: 'Африка',
    testNameColor: '#FF8D27',
    testDescription: `Королевский питон давно завоевал любовь террариумистов. Это тихие и красивые питомцы, которые точно не заставят вас скучать. Несмотря на свою длину и большой вес, змея подкупает спокойным нравом, удобством содержания и красотой. При правильном уходе такой питомец проживет 20-30 лет. 
    Самки обычно крупнее самцов. В своем виде питон один из самых маленьких — его длина редко превышает отметку в полтора метра.`,
    description: `Несмотря на название, королевский питон — самый маленький из всех питонов; это выведенный в неволе вид. Взрослая особь достигает в длину 1,2 м, иногда бывает чуть длиннее. Своё второе название «шаровидный» питон получил из-за привычки сворачиваться в клубок от испуга. Питается живыми грызунами раз в 1-2 недели. Неприхотлив, спокойно живёт в тёплом террариуме.`,
    mainBackground: '../assets/images/water_dragon_bg.png',
    infoBackground: '../assets/images/python_info_bg.png',
    fullDescription: {
      mainImg: '../assets/images/python_main_icon.svg',
      areaImg: '../assets/images/python_area.png',
      maintenanceImg: '../assets/images/python_maintenance.svg',
      foodImg: '../assets/images/python_food.svg',
      natureAge: '10 лет',
      homeAge: '30-40 лет',
      weight: '1200-1600 гр',
      foodType: 'Плотоядный',
      tailLength: '110 - 130 смv',
      bodyLength: '0 см',
      tailColor: '#FFC700',
      bodyColor: '#FFC700',
      areaDescription: `Ареал обитания находится в Центральной и Западной Африке. Он простирается от Сенегала и Сьерра-Леоне до юго-востока Судана и северо-запада Уганды. Восточная граница ареала проходит вдоль западного берега Нила и Нубийских гор в Южном Судане. Королевский питон встречается на территории 19 африканских стран. Его распространение носит нерегулярный характер. Имеются довольно много изолированных популяций.
      <br/><br/>
      Рептилии селятся преимущественно в низинах. Они населяют самые различные биотопы – от травянистых и кустарниковых саванн до более засушливого и заросшего кустарниками редколесья. Значительно реже они наблюдаются на болотистых местностях и в тропических дождевых лесах.`,
      terrariumDescription: `Просторный горизонтальный террариум. Для самца — 60×45×45 см, для самки — 90×45×45 см`,
      lightDescription: `В террариуме используются лампы дневного света. Для рептилии важно сочетание дневного и ночного режима. Световой день составляет 12 -14 часов`,
      temperatureDescription: `<b>Дневная температура</b> в средней зоне — <br/>от +24 °C до +26 °C, в точке прогрева — <br/>от +33 °C до +38 °C`,
      nightTemperatureDescription: `<b>Ночная температура</b> На ночь обогрев можно не отключать, но никаких дополнительных средств обогрева без рекомендации специалиста устанавливать не стоит`,
      humidity:
        'Не допустима избыточная влажность. Нужна повышенная влажность во время линьки питомца',
      priming:
        'На дно насыпается древесный субстрат. Не стоит использовать кокосовый субстрат или стружку, он предназначен для высокой влажности, которая питону не нужна, а в сухом состоянии он сильно пылит, забивая дыхательные пути змеи',
      difficulty: 2,
      food: {
        descriptions: [
          `Режим кормления выбирается индивидуально. На него напрямую влияет возраст, вес маисового полоза, условия содержания. Молодые животные могут есть 1-2 в неделю, более взрослые — 1 раз в 1-2 недели.`,
          `Эта рептилия плотоядна. <br/>На корм идут мыши, крысы, перепелята или цыплята.`,
          `Очень важно не перекармливать змею. Одна из потенциальных проблем содержания в домашних условиях — ожирение питомца.`,
          `Для домашних змей корм нужно хранить в замороженном состоянии, а подавать только доведенным до комнатной температуры или даже лучше чуть подогретым на лампе или батарее, так как они реагируют на тепло. В зимний период и в период гона змея может отказываться от пищи по нескольку недель.`,
        ],
        types: getFoodTypes([13, 9, 12]),
      },
    },
  },
  {
    id: 7,
    img: '../assets/images/EUBLEPHARIS_MACULARIUS.png',
    name: 'Пятнистый Эублефар',
    latinName: 'EUBLEPHARIS MACULARIUS',
    area: 'Юго-Западная Азия',
    testNameColor: '#FF8D27',
    testDescription: `Эублефары или леопардовые гекконы — идеальные рептилии как для начинающих, так и для опытных террариумистов. В домашних условиях это послушный и легкий в уходе питомец. Уже более 30 лет эублефаров разводят в США и Европе.
    <br />Животное небольшое, около 20 см в длину. Тело покрыто мелкой чешуей, на которой тут и там выделяются пупырышки. Окрас имеет много вариантов.
    <br />Эти гекконы ведут ночной образ жизни.`,
    description: `Яркий геккон до 28 см в длину и весящий до 65 г. Эта ящерка отличается ночным образом жизни, питается кузнечиками и пауками, нетребовательна в уходе и не нуждается в большом вольере. Эублефар неагрессивен, но с ним нужно быть аккуратнее — его хвост легко ломается. При желании можно купить парочку — самца и самку, хотя гекконы прекрасно чувствуют себя в одиночестве.`,
    mainBackground: '../assets/images/water_dragon_bg.png',
    infoBackground: '../assets/images/water_dragon_info_bg.png',
  },
  {
    id: 8,
    img: '../assets/images/Rhacodactylus_ciliatus.png',
    name: 'Реснитчатый Бананоед',
    latinName: 'Rhacodactylus ciliatus',
    area: 'Новая Каледония',
    testNameColor: '#FF8D27',
    testDescription: `Бананоеды — ручные гекконы, которых можно не кормить живыми насекомыми. В природе питаются насекомыми и перезрелыми фруктами, но в домашних условиях хорошо приучаются к специализированным кормам для рептилий.
    <br/>Реснитчатый — некрупный геккон до 12-15 см. Самый распространенный вид, который выбирают в качестве домашнего питомца. Имеет примечательные выросты вокруг глаз, за которые и получил свое название «реснитчатый», поскольку они немного напоминают ресницы.`,
    description: `Реснитчатые бананоеды обладатели самой привлекательной внешности. Геккон имеет примечательные выросты вокруг глаз, которые напоминают реснички. Для новичков это идеальная рептилия, он спокойный и ручной, а еще в рационе реснитчатого бананоеда можно полностью исключить живых насекомых, что не мало важно при выборе питомца для многих начинающих террариумистов.`,
    mainBackground: '../assets/images/water_dragon_bg.png',
    infoBackground: '../assets/images/water_dragon_info_bg.png',
  },
];

export const questions = [
  {
    id: 1,
    name: '1.  Какой пейзаж вам нравится больше всего?',
    answers: [
      {
        name: 'Горы',
        points: 0,
      },
      {
        name: 'Лес',
        points: 5,
      },
      {
        name: 'Озеро',
        points: 10,
      },
      {
        name: 'Пустыня',
        points: 15,
      },
    ],
  },
  {
    id: 2,
    name: '2. 	Насколько ответственным человеком вы себя считаете?',
    answers: [
      {
        name: 'Всегда довожу начатое до конца',
        points: 15,
      },
      {
        name: 'Быстро теряю интерес к тому, что делаю',
        points: 5,
      },
      {
        name: 'Иногда бываю слишком легкомысленным(ной)',
        points: 0,
      },
      {
        name: 'Стараюсь отвечать за свои поступки',
        points: 10,
      },
    ],
  },
  {
    id: 3,
    name: '3. 	Сколько времени вы тратите на учебу?',
    answers: [
      {
        name: 'Учеба занимает у меня большую часть жизни',
        points: 5,
      },
      {
        name: 'У меня много свободного времени',
        points: 15,
      },
      {
        name: 'Учусь половину дня',
        points: 10,
      },
      {
        name: 'Полностью занят(а) учебой ',
        points: 0,
      },
    ],
  },
  {
    id: 4,
    name: '4.	 Что вы ждете от своего будущего домашнего питомца?',
    answers: [
      {
        name: 'Возможность заботиться о ком-то',
        points: 15,
      },
      {
        name: 'Чтобы он добавил разнообразие в мою жизнь',
        points: 10,
      },
      {
        name: 'Возможность отвлечься от забот',
        points: 5,
      },
      {
        name: 'Хочу видеть в нем друга',
        points: 0,
      },
    ],
  },
  {
    id: 5,
    name: '5. 	Какая еда вам нравится больше всего?',
    answers: [
      {
        name: 'Мясо',
        points: 15,
      },
      {
        name: 'Рыба',
        points: 10,
      },
      {
        name: 'Фрукты',
        points: 0,
      },
      {
        name: 'Овощи',
        points: 5,
      },
    ],
  },
  {
    id: 6,
    name: '6.	 Ваша любимая погода?',
    answers: [
      {
        name: 'Гроза',
        points: 15,
      },
      {
        name: 'Ливень',
        points: 10,
      },
      {
        name: 'Солнечный и теплый день',
        points: 0,
      },
      {
        name: 'Погода с легким ветром',
        points: 5,
      },
    ],
  },
  {
    id: 7,
    name: '7.	 Боитесь ли вы насекомых и грызунов? ',
    answers: [
      {
        name: 'Совсем не боюсь',
        points: 15,
      },
      {
        name: 'Очень боюсь',
        points: 0,
      },
      {
        name: 'Боюсь только грызунов',
        points: 5,
      },
      {
        name: 'Боюсь только насекомых',
        points: 10,
      },
    ],
  },
  {
    id: 8,
    name: '8. 	Есть ли у вас другие питомцы?',
    answers: [
      {
        name: 'Да',
        points: 0,
      },
      {
        name: 'Нет',
        points: 5,
      },
    ],
  },
  {
    id: 9,
    name: '9. 	Сколько времени вы готовы уделять своему питомцу?',
    answers: [
      {
        name: 'Все свободное время',
        points: 15,
      },
      {
        name: '1-2 часа, не больше',
        points: 5,
      },
      {
        name: 'Очень мало',
        points: 0,
      },
      {
        name: 'Несколько часов в день',
        points: 10,
      },
    ],
  },
  {
    id: 10,
    name: '10.  Чем вы занимаетесь в свободное время?',
    answers: [
      {
        name: 'Сижу в интернете',
        points: 0,
      },
      {
        name: 'Читаю',
        points: 15,
      },
      {
        name: 'Гуляю на природе',
        points: 5,
      },
      {
        name: 'Общаюсь с близкими и друзьями',
        points: 10,
      },
    ],
  },
];

function getFoodTypes(ids) {
  const foodTypes = [
    {
      id: 1,
      coloredImg: '../assets/images/food/taracan.svg',
      maskedImg: '../assets/images/food/monochrome/taracan.svg',
      label: 'Туркменский таракан, Мадакаскарский таракан',
    },
    {
      id: 2,
      coloredImg: '../assets/images/food/zoofobas.svg',
      maskedImg: '../assets/images/food/monochrome/zoofobas.svg',
      label: 'Зофобас, червь мучной',
    },
    {
      id: 3,
      coloredImg: '../assets/images/food/oduvanchik.svg',
      maskedImg: '../assets/images/food/monochrome/oduvanchik.svg',
      label: 'Одуванчик, клевер, спорыш и другие сорные травы',
    },
    {
      id: 4,
      coloredImg: '../assets/images/food/brazhnik.svg',
      maskedImg: '../assets/images/food/monochrome/brazhnik.svg',
      label: 'Гусеница табачного бражника',
    },
    {
      id: 5,
      coloredImg: '../assets/images/food/salat.svg',
      maskedImg: '../assets/images/food/monochrome/salat.svg',
      label: 'Все виды салата',
    },
    {
      id: 6,
      coloredImg: '../assets/images/food/apple.svg',
      maskedImg: '../assets/images/food/monochrome/apple.svg',
      label: 'Сладкие ягоды и фрукты',
    },
    {
      id: 7,
      coloredImg: '../assets/images/food/sverchok.svg',
      maskedImg: '../assets/images/food/monochrome/sverchok.svg',
      label: 'Сверчок, саранча',
    },
    {
      id: 8,
      coloredImg: '../assets/images/food/fish.svg',
      maskedImg: '../assets/images/food/monochrome/fish.svg',
      label: 'Мелкая рыба',
    },
    {
      id: 9,
      coloredImg: '../assets/images/food/mouse.svg',
      maskedImg: '../assets/images/food/monochrome/mouse.svg',
      label: 'Мыши',
    },
    {
      id: 10,
      coloredImg: '../assets/images/food/ulitka.svg',
      maskedImg: '../assets/images/food/monochrome/ulitka.svg',
      label: 'Маленькие улитки, моллюски и  кальмары',
    },
    {
      id: 11,
      coloredImg: '../assets/images/food/sea_salat.svg',
      maskedImg: '../assets/images/food/monochrome/sea_salat.svg',
      label: 'Водяные растения: ряска, гиацинт и остальные',
    },
    {
      id: 12,
      coloredImg: '../assets/images/food/hen.svg',
      maskedImg: '../assets/images/food/monochrome/hen.svg',
      label: 'Цыплята, перепелята',
    },
    {
      id: 13,
      coloredImg: '../assets/images/food/krisa.svg',
      maskedImg: '../assets/images/food/monochrome/krisa.svg',
      label: 'Крысы',
    },
    {
      id: 14,
      coloredImg: '../assets/images/food/banka.svg',
      maskedImg: '../assets/images/food/monochrome/banka.svg',
      label: 'Специальные сбалансированные фруктовые пюре',
    },
  ];
  return foodTypes
    .filter((t) => ids.indexOf(t.id) > -1)
    .sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
}
