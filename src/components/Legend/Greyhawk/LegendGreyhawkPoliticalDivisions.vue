<script setup lang="ts">
import LegendSection from '@/components/Legend/Section/LegendSection.vue'
import L from '@/components/Legend/Link/LegendLink.vue'
</script>

<template>
  <legend-section :heraldry="['prelacy-almor']">
    <template #header>
      <h2><l>Prelacy of Almor</l></h2>
    </template>
    <p>
      Originally a clerical fief of <l>Aerdy</l>, <l>Almor</l> grew in power and independence as the
      <l>Great Kingdom</l> became weak and decadent. The various petty nobles and the Lord Mayor of
      the town of <l>Innspa</l> swear allegiance to the reigning prelate — usually a high priest.
      The state is only loosely organised, but it has a strong spirit of freedom and justice based
      upon religious precepts. The peoples are mainly farmers and herdsmen and fisherfolk. In the
      far north there are some foresters. Militia contingents bear crossbow, spear or polearm
      (fauchard or glaive most commonly), or longbow or battleaxe (northern contingent). Standing
      forces number around 5,000 total horse and foot, plus the nobility and gentry. The Prelacy is
      strongly supported by <l>Nyrond</l> as a buffer between that realm and that of the Overking,
      and pays a stipend to help support the standing army of <l>Almor</l>.
    </p>
  </legend-section>

  <legend-section
    :heraldry="[
      'bandit-kingdoms-dimre',
      'bandit-kingdoms-grosskopf',
      'bandit-kingdoms-johrase',
      'bandit-kingdoms-reyhu',
      'bandit-kingdoms-rookroost'
    ]"
  >
    <template #header>
      <h2><l>Bandit Kingdoms</l></h2>
    </template>
    <p>
      The <l>Bandit Kingdoms</l> are a collection of petty holdings which were founded sometime
      around 300-350 CY. This collection of small personal territories stretches from the southern
      <l>Shield Lands</l> to the <l>Bluff Hills</l> and northern verges of the
      <l>Fellreev Forest</l>, from the <l>Ritensa River</l> to the <l>Artonsamay River</l> in the
      east. Each little kingdom is ruled by a robber chieftain claiming a title such as Baron, Boss,
      Plar, General, Tyrant, Prince, Despot, and even King. The territorial boundaries of the
      holdings of these kinglets are subject to rapid change due to sudden warfare and defeat or
      victory. In all, there are 17 states within the confines of the area, ruled by four to six
      powerful lords, with the rest attempting either to become leading rulers or simply to survive.
      The relationship persists because no single bandit lord is strong enough to conquer the whole
      territory, and the combined strength of all is often required to defend against neighbouring
      states' retributive expeditions. So bandit and brigand band together in self interest, and no
      kinglet, regardless of ambition, has seriously attempted to rule the whole, for fear that
      threatened lords would turn to neighbouring states in spite even at the risk of destruction by
      the summoned "ally." Thus the combined kinglets continue to stand more or less together. The
      total military strength of all territories is quite considerable due to the fact that each
      ruler maintains a large force with which to raid and pillage. (There probably are some 10,000
      regular troops in total, if recent reconnaissance is to be trusted.)
    </p>
  </legend-section>

  <legend-section :heraldry="['bissel']">
    <template #header>
      <h2><l>March of Bissel</l></h2>
    </template>
    <p>
      The <l>Lirtlemark</l>, or <l>March of Bissel</l>, was the northernmost frontier of the kingdom
      of <l>Keoland</l>, c. 400 CY. It was wrested from the latter in the Small War (<l>Furyondy</l>
      vs. <l>Keoland</l>) which ended Keoish influence in <l>Veluna</l> (438 CY).
      <l>Bissel</l> became a tributary state of <l>Furyondy</l> for a few decades, but when humanoid
      invasions swept over the latter realm, the Margrave Rollo established the independence of the
      territory by bravery in service of the King of <l>Furyondy</l> (the Bisselites slaughtered a
      horde of Jebli (goblins) which lay in ambush for King Hugh III, who was guarded by but a small
      train.) The King granted the brave Rollo palatinate status for the deeds performed, and
      <l>Bissel</l> has enjoyed self-rule since. The March now stands as a bulwark between the
      <l>Ket</l> masses and the rest of the east. It likewise guards <l>Keoland</l> and the south.
      Because of its strategic position, both <l>Furyondy</l>-<l>Veluna</l> and <l>Keoland</l> now
      support the principality, and adventurers and mercenaries from all of the Flanaess can be
      found in the ranks of the "Border Companies'' which comprise the standing army of the
      Margrave. There are four regular companies and four reserve companies; each is 1,000 strong
      and contains contingents of horse, foot and archers. Favoured weapons are the lance, crossbow,
      pike, fauchard-fork, flail, and sword. Bisselite soldiers are very well equipped and
      well-armoured. Each company has a special squad of scouts (numbering 30 to 50) attached when
      on border duty.
    </p>
  </legend-section>

  <legend-section :heraldry="['blackmoor']">
    <template #header>
      <h2><l>Blackmoor</l></h2>
    </template>
    <p>
      This little-known territory exists between the fierce nomads to the south and the terrible
      <l>Land of Black Ice</l> to the north, protected by the cold marshes and the dangerous
      <l>Icy Sea</l>, as well as the vast stretches of the <l>Burneal Forest</l>. It is reported
      that hot springs and volcanism keep the area habitable, and that monsters teem in its
      wildernesses of brush and marsh. The original capital, <l>Blackmoor</l>, and its castle were
      sacked and ruined some years ago, but extensive labyrinths are supposed to exist under these
      ruins. There also is purported to be a strange "City of the Gods" somewhere within the
      Archbarony. Inhabitants of the area employ slings, bows (short), and spears. Cavalry is
      uncommon, except in the force of the ruler.
    </p>
  </legend-section>

  <legend-section :heraldry="['bone-march']">
    <template #header>
      <h2><l>Bone March</l></h2>
    </template>
    <p>
      When the Kingdom of <l>Aerdy</l> became an empire, its leaders determined to crush the
      troublesome barbarians pushing down from the Thillonrian Peninsula and settling in the strip
      of land between the <l>Rakers</l> and <l>Grendep Bay</l>. Being indifferent sailors, the
      Aerdians opted to attack overland, and began sending strong parties northward to drive the
      invaders from the north back to their homeland. After many sharp skirmishes, a large
      contingent of imperial troops was routed, and full-scale warfare began.
    </p>
    <p>
      The <l>Fruztii</l> tribes had retreated before the Aerdians, but sent out calls for their kin,
      and these doughty fighters poured down by land and sea for the prospect of battle and loot.
      Over 10,000 assembled and attacked the works under construction at <l>Spinecastle</l>. A
      relief force fought a pitched battle with these barbarians, most of whom were slain — along
      with several thousand imperial soldiers. The newly won fief was named for the remains of this
      struggle, the Battle of the Shamblefield, or Caldni Vir's Charge. In 560 CY hordes of
      humanoids (Euroz, Kell, Eiger, and others) began making forays into the <l>Bone March</l>, and
      these raids turned into a full scale invasion the next year. In 563 the land fell to these
      invaders, its lord was slain, and its army slain or enslaved. Humans in the area were likewise
      enslaved or killed, and the whole territory is now ruled by one or more of the humanoid
      chiefs. Exact information is not available. The humanoids gained access to the area by moving
      through the mountains, and now use these trails to raid the <l>Pale</l>, <l>Ratik</l>, and
      even <l>Nyrond</l> — although any movement through the <l>Flinty Hills</l> is at great peril
      due to the gnomes still holding out there. There is continual border warfare along the
      <l>Teesar Torrent</l> and in the Blemu Hills of Aerdy's <l>North Province</l>, although some
      say that the Overking would gladly make peace with the humanoids to the north and enlist them
      in his own armies.
    </p>
  </legend-section>

  <legend-section :heraldry="['celene']">
    <template #header>
      <h2><l>Kingdom of Celene</l></h2>
    </template>
    <p>
      This small land west of the <l>Wild Coast</l> beyond the Welkwood has long been under the rule
      of Olvenfolk. Although these are good creatures, they do not welcome strangers (with cause),
      and little certain knowledge of <l>Celene</l> or its Court exists. The realm is friendly with
      the <l>Ulek</l> states, and an alliance between <l>Celene</l> and these countries was
      responsible for the campaigns which drove all of the humanoids from the
      <l>Lortmil Mountains</l> — although the defeated forces of humanoids subsequently invaded and
      took over the <l>Pomarj</l>. A small number of humans and half-elvenfolk dwell in
      <l>Celene</l>, many serving in its military, for continual warfare is carried on (in the
      <l>Suss Forest</l> and beyond the <l>Jewel River</l>) with the <l>Pomarj</l> humanoid tribes.
    </p>
  </legend-section>

  <legend-section :heraldry="['dyvers']">
    <template #header>
      <h2><l>Free and Independent City of Dyvers</l></h2>
    </template>
    <p>
      <l>Dyvers</l>' position at the mouth of the <l>Velverdyva River</l> on the coast of the Lake
      of Unknown Depths (<l>Nyr Dyv</l>) makes it an important trading centre and busy port, with
      lake and river traffic from as far away as <l>Perrenland</l>, <l>Bissel</l>, <l>Nyrond</l>,
      <l>Urnst</l>, the <l>Pale</l>, <l>Tenh</l>, and even occasional missions from <l>Iuz</l>. The
      city was originally a part of the <l>Viceroyalty of Ferrond</l> and contributed heavily in
      money, goods, and men to the war which saw the institution of the <l>Kingdom of Furyondy</l>.
      Because of the alliance and close ties with <l>Veluna</l>, whose policies the Gentry of
      <l>Dyvers</l> see as restrictive, the city declared its independence in 526 CY, King Thrommel
      II allowing this act to pass unchallenged. <l>Dyvers</l> claims some 2,000 square miles of
      land, including the islands at the mouth of the <l>Velverdyva</l>, as its sovereign territory
      — although the Magisters have been careful not to claim any of the land on the north band of
      the river. The free city boasts a marine force of 1,000 men and an army twice as numerous.
      These troops are very well armed and equipped.
    </p>
  </legend-section>

  <legend-section :heraldry="['caliphate-ekbir']">
    <template #header>
      <h2><l>Caliphate of Ekbir</l></h2>
    </template>
    <p>
      <l>Ekbir</l> is the strongest city of the Bakluni in the Flanaess. Founded by survivors of the
      Invoked Devastation, the small port quickly grew into a place for nomads' goods as well. The
      original village grew into a walled town, and town grew into thriving city.
      <l>Ekbir</l> controls a sizable territory and has a large war fleet. Her forces consist
      principally of light and medium cavalry, although there are 1,000 heavy foot in her standing
      army, which is reported to number some 5,000 soldiers.
    </p>
  </legend-section>

  <legend-section :heraldry="['frost-barbarians']">
    <template #header>
      <h2><l>Frost Barbarians</l></h2>
      <strong><l>Kingdom of Fruztii</l></strong>
    </template>
    <p>
      The <l>Frost Barbarians</l> are the weakest of the three nations (of Suel peoples) inhabiting
      the Thillonrian Peninsula, called Rhizia by these peoples. They have never recovered from the
      Battle of Shamblefield, and have been under the suzerainty of the <l>Schnai</l> for the past
      two decades and several times previously as well. The supposed figurehead placed upon the
      throne of the <l>Fruztii</l> has, however, built his kingdom carefully, and in actuality it is
      now independent in all but oath. A recent pact concluded between <l>Fruztii</l> and
      <l>Ratik</l> saw a joint army wreak havoc in the <l>Bone March</l>, and during the next
      campaigning season clear the north pass of the “Fists” (see <l>Hold of Stonefist</l>).
    </p>
  </legend-section>

  <legend-section :heraldry="['kingdom-furyondy']">
    <template #header>
      <h2><l>Kingdom of Furyondy</l></h2>
    </template>
    <p>
      The <l>Viceroyalty of Ferrond</l> was founded upon several small states during the height of
      Aerdian power (c. 100 CY). It was aimed at giving the <l>Great Kingdom</l> a strong satrapy on
      the western frontier from which further conquest could be launched. The Viceroy ruled from the
      <l>Clatspur Mountains</l> to the <l>Nyr Dyv</l>, from the <l>Lortmils</l> in the south to the
      far shores of <l>Whyestil Lake</l>, and beyond, in the north. As the power of the Malachite
      Throne in <l>Rauxes</l> waned (c. 200 CY), the viceroys of <l>Ferrond</l> ruled more by their
      own writ and less by the leave of the Aerdi overlords. In 898 O.R. the heir to Viceroy Stinvri
      (the Viceroyalty had become hereditary some years previously) was crowned in <l>Dyvers</l> as
      Thrommel I, King of <l>Furyondy</l>, Prince of <l>Veluna</l>, Provost of the Northern Reaches,
      Warden General of the <l>Vesve Forest</l>, Marshall of the <l>Shield Lands</l>, Lord of
      <l>Dyvers</l>, etc. The adjunctive states were soon lost, but the central core of the kingdom
      was sound and viable and has persisted. Belvor IV is a most noble and just king, and his realm
      is closely allied with that of <l>Veluna</l>, constantly warring upon the evil
      <l>Horned Society</l> and <l>Iuz</l>, as well as lending contingents to expeditions mounted by
      the Earl of the <l>Shield Lands</l> against the <l>Bandit Kingdoms</l>. <l>Furyondy</l>'s
      belled heavy cavalry is famous throughout the Flanaess, as are their light infantry units
      drawn from the Vesve Forest. The standing army of the kingdom numbers only a few thousand, but
      noble and militia contingents swell its numbers to 20,000 or more in time of need. The
      Furyondian fleet upon the <l>Whyestil</l> absolutely commands that body of water, and there
      also is a Furyondian squadron upon the <l>Nyr Dyv</l>, sailing from its base at <l>Willip</l>.
      The kingdom's colours are blue and red stripes.
    </p>
  </legend-section>

  <legend-section :heraldry="['grand-duchy-geoff']">
    <template #header>
      <h2><l>Grand Duchy of Geoff</l></h2>
    </template>
    <p>
      The isolated position of <l>Geoff</l>, surrounded on all sides by mountains, hills, and
      forests, has made it virtually immune to the normal warfare of the Flanaess although at one
      time a brief conflict with <l>Keoland</l> was fought (c. 450 CY). <l>Rushmoor</l> forms the
      nominal eastern boundary of the realm. The inhabitants of the Grand Duchy are of
      Flan-Suel-Oerid mixture, seemingly combining the best features of each race. This is
      fortunate, as they are continually threatened by incursions of formidable ogres and giants
      coming down the <l>Crystalmists</l>. The Geoffites dwell in harmony with the olvenfolk in the
      realm, and these two peoples often combine to combat the invading monsters. The Grand Duke,
      Owen I, is a clever and valorous leader, on friendly terms with the Earl of <l>Sterich</l> and
      the King of <l>Keoland</l> alike. The forces of the Grand Duke include horse, bowmen, and
      contingents of pikemen from the mountain holdings.
    </p>
  </legend-section>

  <legend-section :heraldry="['gran-march']">
    <template #header>
      <h2><l>Gran March</l></h2>
    </template>
    <p>
      <l>Keoland</l> established the territory of the <l>Gran March</l> during its early stages,
      basing it upon a military-religious order of knights. These zealous fighters quickly subdued
      the warring inhabitants, established order within the area, and conscripted all fit males into
      worker and infantry battles (regimental-like for-mations). The land between the
      <l>Lortmils</l> and <l>Dim Forest</l> north of the <l>Sheldomar</l> became productive and
      peaceful, but the rule of these first Commandants was repressive and harsh. When Berlikyn,
      then ruler of the fief, was slain in combat in the war with <l>Veluna</l>-<l>Furyondy</l> in
      the Small War, the populace rose in rejoicing. <l>Keoland</l> reconsidered its policies
      thereafter, and allowed the people to elect their own Commandant from amongst the noble houses
      of <l>Gran March</l>. The state is now only a nominal vassal of <l>Keoland</l> and maintains
      friendly relations with <l>Bissel</l>. The army of the Commandant relies primarily upon its
      mailed cavalry-medium horse armed with lance, crossbow, and sword.
    </p>
  </legend-section>

  <legend-section :heraldry="['great-kingdom']">
    <template #header>
      <h2><l>Great Kingdom</l></h2>
      <strong><l>The Kingdom of Aerdy</l></strong>
    </template>
    <p>
      The history of the <l>Great Kingdom</l> is too well known to dwell upon here. Once the most
      powerful force for order and good, the Aerdians have declined over the last century to an
      unspeakable state of decadency. After a millennium of leadership, its rulers and nobles turned
      to evil and irrationality. Its current monarch, Ivid V of the royal house of Naelax, is
      reported to be quite mad, but crafty and deviously capable nonetheless. His writ extends to
      the Royal Demesne surrounding the capital, the <l>Grandwood</l>, and further only by threat
      and persuasion of the Peers whose fiefs comprise the balance of the realm. The Overking's
      Companion Guard consists of 10 select companies of various arms (heavy, medium, and light
      cavalry, crossbowmen, archers, and five companies of pole armed foot).
    </p>
    <p>
      Noble contingents allow the Overking to field an army numbering over 15,000 troops in a
      relatively short time, and if necessary a force of four or five times that can be called up.
    </p>
    <p>
      Both the <l target="north-province">North</l> and
      <l target="south-province">South</l> Provinces are under the suzerainty of Aerdi royal houses
      and are ruled almost as independent states. The troubles in the <l>Bone March</l> have caused
      the Herzog of the North to fall into line, as the difficulties with the
      <l>Iron League</l> brought his southern counterpart into closer cooperation with the Malachite
      Throne (see <l>North Province</l>, <l>South Province</l>, and also <l>See of Medegia</l>.) The
      <l>Sea Barons</l> pay a token tribute to the Overking and conduct their piratical operations
      under letters of marque bearing the Overking's Seal.
    </p>
  </legend-section>

  <legend-section :heraldry="['greyhawk']">
    <template #header>
      <h2><l>Free City of Greyhawk</l></h2>
    </template>
    <p>
      <l>Greyhawk</l> was established as a trading post on the <l>Selintan River</l> during the
      period of early migrations. As it flourished, a local warlord built a small keep on the hills
      above the village called <l>Greyhawk</l> which had sprung up around the trading centre,
      extracting taxes from the trade and occasionally raiding caravans (particularly those coming
      with silver ingots found in the burial mounds of the <l>Cairn Hills</l>). This petty noble
      soon became quite rich and powerful and assumed the title of Landgraf of <l>Selintan</l>.
      <l>Greyhawk</l> and the power of the new Landgraf grew rapidly thereafter, and his son and
      heir, Ganz, was wed to the daughter of the Gynarch (Despotrix) of <l>Hardby</l>, a sorceress
      of no small repute. Their descendants ruled a growing domain which rose to considerable
      heights c. 375 CY under the rule of Zagig Yragerne (the so-called Mad Archmage). It was Zagig
      who built the sprawling Castle <l>Greyhawk</l> (now a ruin) and poured funds into the City of
      <l>Greyhawk</l> in order to make it into the "Gem of the Flanaess." His reign was bizarre in
      many other ways, and it came as no surprise when it was reported that Zagig Yragerne had
      mysteriously vanished after years of rule when no change or ageing could be detected. The
      castle was abandoned, supposedly due to a terrible curse upon the place, but the City proper
      continued to flourish. In 498 CY it was proclaimed a free and independent city, ruling a
      territory from <l>Hardby</l> on the Woolly bay to the <l>Nyr Dyv</l>, between the eastern
      folds of the <l>Cairn Hills</l> and the Gnarley forest, including much of what is now the
      northern section of the <l>Wild Coast</l> region. These holdings have been lost over the
      intervening decades, and a decline in trade seemed certain to turn the place into a backwater,
      save for recent events. Several years ago a series of treasure troves was discovered in or
      near <l>Greyhawk</l> Castle. Immense wealth began flowing into the city, and artisans and
      mercenaries began flocking to <l>Greyhawk</l> due to this boom. Local lords used this influx
      of hard money to revitalise the city, and it again rules a considerable portion of the area,
      claiming all of the land from <l>Nyr Dyv</l> to the <l>Neen River</l> where it joins the
      <l>Selintan</l>, including the mines in the <l>Cairn Hills</l>. The Despotrix of
      <l>Hardby</l> now pays tribute to <l>Greyhawk</l> to avoid being absorbed in the growing city
      state once again.
    </p>
    <p>
      <l>Greyhawk</l> is ruled by its Lord Mayor; this individual is chosen by the Directing
      Oligarchy. The latter body is composed of the Captain-General of the Watch, the Constable, the
      Guildmaster of Thieves, the Guildmaster of Assassins, and various representatives of the
      Society of Magi, the Merchants and Traders Union, Artisans League, and Clerical leaders. The
      total number of the Directors ranges from 12 to 18.
    </p>
  </legend-section>

  <legend-section :heraldry="['highfolk']">
    <template #header>
      <h2><l>Highfolk</l></h2>
    </template>
    <legend-section>
      <template #header> <h3>Independent Town</h3> </template>
      <p>
        <l>Highfolk</l> is independent and of importance simply because it is the southern outpost
        of the Olvenfolk of the Quagflow Valley (the Fairdells in Olven). The town itself is a
        trading centre and home to some 2,000 humankind. It is well fortified and protects the
        homeland-the 100-mile stretch of valley above, which lies between the southern arm of the
        <l>Yatils</l> and the <l>Vesve Forest</l> to the east. There are many thorps set in
        beautiful dales along the banks of the river, and the Lord of the High Elves dwells in the
        region, along with some 10,000 of his kin and numerous Sylvan Elves as well (the latter in
        the fringes of the Vesve on the east bank). The folk of <l>Highfolk</l> and the valley above
        are at peace with their neighbours to the north and south. The more restless sometimes take
        service with mercenary bands of Perrenlander soldiery.
      </p>
    </legend-section>
    <legend-section>
      <template #header>
        <h3><l>Valley of the Velverdyva</l></h3>
      </template>
      <p>
        As related above for the independent town of the same name, <l>Highfolk</l> is principally
        an elven realm. The humans dwelling along the 100 miles of the valley are woodsmen who live
        in harmony with their demi-human fellows, or hillmen who are allies of the gnomes. The Lord
        of the High Elves is deferred to as the nominal ruler, but this is through general consent
        and respect. The word of the Gnome prince, a village Elder, or the Earl of a community of
        Sylvan Elves is listened to with as much respect. All the peoples of
        <l>Highfolk Valley</l> are independent and free-spirited. However, in time of need, they are
        able to muster a considerable body of fighters, including humans armed with longbows and
        many sorts of demi-human troops. The Knights of the Hart of <l>Highfolk</l> are drawn from
        the best of the elven and half-elven warriors of the valley region. The main enemies of the
        people of <l>Highfolk</l> come from the land of <l>Iuz</l>, penetrating the
        <l>Vesve Forest</l>.
      </p>
    </legend-section>
  </legend-section>

  <legend-section :heraldry="['horned-society']">
    <template #header>
      <h2><l>Horned Society</l></h2>
    </template>
    <p>
      Originally a stronghold of the more organised of the humanoid tribes, the area came under the
      rule of a group of evil humans some decades ago. It is speculated that these wicked people
      were disaffected bandits or were at least aided by one or more of the bandit kinglets. In any
      case, the land between the <l>Veng</l> and <l>Ritensa</l> Rivers as far north as the territory
      of the <l>Rovers of the Barrens</l> is now firmly in the grasp of the <l>Horned Society</l>.
      This association combines the masses of humanoid troops with the organisation and powers of
      humans. Deviltry is the religion of the Society, and its leading Hierarch is purported to be
      an evil high priest of the 18th level. Other leaders are reported as a magic-user above the
      12th level of ability, several other powerful clerics, a master thief of the 13th rank, and a
      trio of fighter Lords. It is known that many troops of bandits from the east frequent the
      walled town of <l>Molag</l>, and the <l>Horned Society</l> is on favourable terms with
      <l>Iuz</l>.
    </p>
  </legend-section>

  <legend-section :heraldry="['ice-barbarians']">
    <template #header>
      <h2><l>Ice Barbarians</l></h2>
      <strong><l>Kingdom of Cruski</l></strong>
    </template>
    <p>
      The Ice Barbarians inhabit the bleak shores of the Thillonrian Peninsula's north and east
      coasts. They will raid their cousins to the south, the Snow and Frost barbarians, or raid with
      them into <l>Ratik</l> or the more tempting <l>Great Kingdom</l>. In high summer they often
      find fighting by rounding the coasts of the <l>Hold of Stonefist</l>, and the
      <l>Cruskii</l> have both hatred and respect for the dour inhabitants of that land. Their most
      despised enemy, however, is the <l>Sea Barons</l>, whose ships they attack on sight, and whose
      isles they often attack and plunder — usually at a price. Of late these raiders have joined
      with <l target="frost-barbarians">Frost</l> and
      <l target="snow-barbarians">Snow</l> barbarians in order to counter the growing strength of
      the coastal defenders of the <l>Great Kingdom</l> and the <l>Sea Barons</l>.
    </p>
  </legend-section>

  <legend-section :heraldry="['idee']">
    <template #header>
      <h2><l>County of Idee</l></h2>
      <strong>Member of the <l>Iron League</l></strong>
    </template>
    <p>
      When the <l>South Province</l> rose in revolt against the Overking and the Herzog, the nobles
      and men of <l>Idee</l> were in the forefront. This territory is the most open to attack by the
      vengeful Aerdians, and so the Count maintains a standing army to man and support the chain of
      castles and fortresses which guard his northern frontier. Militia contingents are ready to
      stand to arms on instant notice. Meanwhile, <l>Idee</l> carries on a brisk trade via the sea
      lanes with <l>Onnwal</l> and <l>Nyrond</l>.
    </p>
  </legend-section>

  <legend-section :heraldry="['irongate']">
    <template #header>
      <h2><l>Free City of Irongate</l></h2>
      <strong>Member of the <l>Iron League</l></strong>
    </template>
    <p>
      This large and thriving city is based on sea commerce and trade between <l>Onnwal</l> and the
      East. <l>Irongate</l> developed an independent spirit early in its history due to its mingling
      of peoples and ideas. As the rule of the Overking grew more despotic, the people of the city
      began to murmur, and the Lord Mayor headed a deputation bearing grievances to the Herzog.
      These emissaries were thrown into prison, given a mock trial, and executed by ritual torture
      for the Overking's entertainment (446 CY). The following year the whole of the south was in
      arms against the realm, and after a brief struggle the <l>Iron League</l> was founded, an
      alliance of mutual support which aided the rebellious states to throw off the yoke of the
      Aerdi tyrants. <l>Irongate</l> has a strong naval squadron and a large company of armoured
      crossbowmen in League service. She can also raise 2,000 heavy militia infantry of high morale
      and excellent training. These troops are spetum or glaive-guisarme equipped and can march in a
      single day after muster.
    </p>
  </legend-section>

  <legend-section :heraldry="['iuz']">
    <template #header>
      <h2><l>Land of Iuz</l></h2>
    </template>
    <p>
      <l>Iuz</l>, old <l>Iuz</l> of fearbabe talk, may be human-or may once have been human, but
      this is not known for certain one way or another. He has ruled the lands from the
      <l>Howling Hills</l> south to the <l>Lake of Whyestil</l> for ages longer than any man can
      live. The lands between the <l>Dulsi</l> and the Opicm Rivers are steeped in wickedness and
      evil, so much so that the otherwise fearless <l>Wolf Nomads</l> and
      <l>Rovers of the Barrens</l> pass through the <l>Cold Marshes</l> rather than cross even the
      edge of the <l>Land of Iuz</l>. For a time the land was leaderless, for <l>Iuz</l> himself was
      missing. For many decades the evil of the place was in relative quietude for lack of evil
      direction, and the neighbours of good ilk prospered. <l>Iuz</l> had been trapped by the
      mirthful and mad Zagyg, locked away in a strange chamber deep below the ruins of
      <l>Greyhawk</l> Castle, one of nine powerful demi-gods so confined. These prisoners were
      loosed in 570 CY, and once again <l>Iuz</l> rules, and his forces gather for fell purpose.
      <l>Iuz</l> has vowed to bring ruin upon Tenser the Archmage and Lord Robilar and the others
      who tried to slay him when his prison was sprung.
    </p>
    <p>
      In addition to the many evil clerics, thieves, fighters, assassins, and magic-users who have
      gathered under the grim banner of <l>Iuz</l>, numbers of the foulest tribes of humanoids have
      grown in strength and are ready to march. Goblins, orcs, and hobgoblins in the thousands are
      known to be in arms, swelling the human contingents of <l>Iuz</l>'s armies.
    </p>
  </legend-section>

  <legend-section :heraldry="['kingdom-keoland']">
    <template #header>
      <h2><l>Kingdom of Keoland</l></h2>
    </template>
    <p>
      <l>Keoland</l> was the first major kingdom to be established in the Flanaess, the Oeridians
      and Suloise tribes mingling and joining to build a tolerant and prosperous realm which
      nominally included many and varied demi-human groups as well. After several centuries of
      benign leadership, a line of monarchs upon the Keoish Throne became ambitious and embarked
      upon a policy of conquest. At the peak of this imperialism, <l>Keoland</l> held sway from the
      <l>Pomarj</l> to the Crystalmist Mountains, while her armies pushed into <l>Ket</l> and
      threatened <l>Verbobonc</l> and <l>Veluna City</l> (c. 350-360 CY). The Ketite expedition came
      to grief in successive battles (<l>Molvar</l>, <l>Lopolla</l>), while an alliance between
      <l>Veluna</l> and <l>Furyondy</l> ended the Keoish threat in that quarter (Short War).
    </p>
    <p>
      Coincidentally, the Olvenfolk within the boundaries of <l>Keoland</l> objected to the warlike
      policies of the King and began expelling royal garrisons in the <l>Ulek Provinces</l> and
      <l>Celene</l>. In the ensuing struggle, the freemen of the western portion sided with the
      demi-humans. Raiders in the far south took advantage of these conditions to harry the Keoish
      coast from <l>Gradsul</l> to <l>Gryrax</l>. King Tavish III was slain in battle against the
      <l>Sea Princes</l> (Siege of <l>Westkeep</l>, 453 CY), and his son, Tavish IV, immediately
      changed the policies of the kingdom upon ascending to the throne. After protracted
      negotiations, the independent state of the <l>Yeomanry</l> was recognized, the
      <l>Ulek</l> states were granted autonomy, and <l>Keoland</l> returned to its former state of
      tolerance and prosperity thereafter. The semi-independent <l>Gran March</l> and Earldom of
      <l>Sterich</l> are loyal to the crown and furnish strong contingents to the royal army. The
      Keolanders are well known for their light cavalry employing javelins, crossbows, and lances.
      The bulk of the army consists of footmen armed with pole arms and long spears, while the
      nobility comprises the heavy cavalry portion of the force. There are typically small companies
      of elves, gnomes, halflings, and/or dwarves included in muster. The fleet is battleworthy but
      small, and conflict with the <l>Sea Princes</l> continues to plague the realm.
    </p>
  </legend-section>

  <legend-section :heraldry="['ket']">
    <template #header>
      <h2><l>Ket</l></h2>
    </template>
    <p>
      <l>Ket</l> is the frontier state of the Baklunish and a trading centre between eastern
      Flanaess and the world beyond. For many decades it has alternately menaced the
      Oeridian/Suloise states east and south and threatened them by invasion. Despite this continual
      warfare, the land flourished due to the rich trade with the <l>Paynim</l> tribes,
      <l>Tusmit</l>, <l>Ekbir</l>, <l>Perrenland</l>, <l>Bissel</l>, and <l>Veluna</l>. Goods from
      <l>Zeif</l> and <l>Wintershiven</l> pass through <l>Lopolla</l>. This mixture of cultures
      includes the people themselves, for the Ketites are of mixed racial stock, albeit of Baklunish
      culture for the most part. The court of the Beygraf is a strange mixture of eastern and
      western influences. This admixture pervades the military as well, for the Ketites field a
      strong force of pikes and crossbows along with their light horse archers and medium lancers.
      The army is well honed, for despite racial ties and trade, the <l>Paynim</l> clans often raid
      the border country west of the <l>Tuflik River</l>.
    </p>
  </legend-section>

  <legend-section :heraldry="['lordship-isles']">
    <template #header>
      <h2><l>Lordship of the Isles</l></h2>
      <strong>Principality — Member of the <l>Iron League</l></strong>
    </template>
    <p>
      This scattered principality stretches over seven major islands, from the
      <l>Spindrift Sound</l> to the mouth of the <l>Tilva Strait</l>. These islands are rich and
      fertile, and enjoy the benefits of their strategic location. They profit hugely from cargoes
      of goods brought from Hepmonaland to the <l>Great Kingdom</l> and collect tribute from those
      states which wish to use the Tilva Straits in commerce. The rulers of <l>Duxchan</l> gave up
      piracy in favour of more lucrative methods of extracting money from merchants. There is
      particular enmity between the <l>Sea Barons</l> and the Lord of the Isles for rather obvious
      reasons. The Duxchaners are still smarting from the Battle of <l>Medegia</l> (572 CY), wherein
      the <l>Sea Barons</l> sank four of their warships and made prizes of three loaded cogs before
      they could gain safety in <l>Pontylver</l>.
    </p>
  </legend-section>

  <legend-section :heraldry="['see-medegia']">
    <template #header>
      <h2><l>See of Medegia</l></h2>
    </template>
    <p>
      The Holy Censor was originally the chief cleric of the <l>Great Kingdom</l>. Clerical holdings
      were granted from <l>Rel Astra</l> to <l>Pontylver</l> south of the <l>Mikar</l> and
      <l>Flanmi</l> Rivers, including a portion of the Imperial Preserve (<l>Grandwood Forest</l>).
      This fief became so strong as to be virtually independent when the Malachite Throne went into
      decline. The Holy Censor still remains one of the chief advisors of the Overking, however, and
      he reigns oppressively over peasant masses with full approval from <l>Rauxes</l>. The clerics
      and nobles of the See have grown exceedingly rich, and their mercenary forces harry the
      Olvenfolk in the <l>Grandwood</l> and loot across the <l>Flanmi</l> in the
      <l>Glorioles</l> and <l>Hestmark Highlands</l> where the Censor has extended his holdings to
      these very foothills, contesting with dwarves and gnomes without quarter.
    </p>
  </legend-section>

  <legend-section :heraldry="['north-province']">
    <template #header>
      <h2><l>North Province</l></h2>
    </template>
    <p>
      The Herzog of <l>North Province</l> is a cousin of the Overking, as evil as his kin, but
      certainly not as demented. The boundaries of this princely fief extend from the
      <l>Blemu Hills</l> to the coast of the <l>Solnor Ocean</l>, extending as far south as the
      <l>Adri Forest</l>, and well below the <l>Trask River</l>. The court at <l>Eastfair</l> is
      infamous for its debaucheries. Movement of <l>Nyrond</l>-<l>Almor</l> forces into the lower
      <l>Bone March</l>, and the capture of <l>Knurl</l> by these forces, coupled with continuing
      incursions by humanoids from across the <l>Teesar Torrent</l>, have troubled
      <l>North Province</l>. A punitive force of mercenaries was defeated in the hills above
      <l>Bellport</l> recently, and it is now reported that the Herzog is seeking Imperial funding
      of a huge army to recapture the southern portion of <l>Bone March</l>. This force would
      undoubtedly contain both mercenary men-at-arms and humanoids enlisted from the upper portion
      of the march.
    </p>
  </legend-section>

  <legend-section :heraldry="['kingdom-nyrond']">
    <template #header>
      <h2><l>Kingdom of Nyrond</l></h2>
    </template>
    <p>
      The strength of <l>Nyrond</l>, and the hostility of its rulers and nobles, have been the major
      protection for the civilised nations of the Flanaess against the depredations of the
      <l>Great Kingdom</l> and its mad emperors. <l>Nyrond</l> also went through a phase of
      near-imperialism, making both the County of <l>Urnst</l> and the
      <l>Theocracy of the Pale</l> tributary states for a time. This course was altered, however,
      when the wise King Dustan I, called Crafty, saw his realm threatened by internal strife and
      exterior enemies and called up the Great Council of <l>Rel Mord</l>. Here, the king met with
      ambassadors from <l>Almor</l>, the <l>Iron League</l>, the <l>Pale</l>, and <l>Urnst</l>. All
      troops were withdrawn from the <l>Pale</l> and <l>Urnst</l> thereafter, the Nyrondese allowing
      both areas self-determination, and both, in turn, agreeing to a concord entailing mutual trade
      and military support. <l>Almor</l> was treated somewhat similarly, and aid was granted to the
      <l>Iron League</l> in the form of loans and treaties which assured the League of survival
      against the common enemy.
    </p>
    <p>
      The current boundaries of <l>Nyrond</l> are: <l>Nesser River</l> — <l>Franz River</l> —
      <l>Artonsamay River</l> — <l>Nutherwood</l> — <l>Gamboge Forest</l> (northern terminus) —
      <l>Rakers</l> — <l>Flint Hills</l> — (lower) <l>Harp River</l> — <l>Relmor Bay</l>. Nyrondal
      contingents assist <l>Urnst</l> and the <l>Pale</l> against the <l>Bandit Kingdoms</l>, and a
      squadron of their warships sails <l>Relmor Bay</l> and the <l>Sea of Gearnat</l> in support of
      the <l>Iron League</l>. Strong garrisons of the Nyrondese Army are stationed in strategic
      positions to move to the aid of either <l>Almor</l> or the <l>Pale</l> in time of need. In
      addition to human forces, <l>Nyrond</l> has special demi-human scouting troops. In time of
      need, pacts call for support from <l>Urnst</l> (County and Duchy) et al. Nyrondal heavy
      cavalry and armoured footmen comprise the majority of the realm's army, with lesser numbers of
      bowmen and light hillman infantry as support.
    </p>
  </legend-section>

  <legend-section :heraldry="['onnwal']">
    <template #header>
      <h2><l>Free State of Onnwal</l></h2>
      <strong>Member of the <l>Iron League</l></strong>
    </template>
    <p>
      <l>Onnwal</l> was originally a lesser fief of the Herzog of <l>South Province</l>, to be
      granted as he saw fit to his faithful followers. The oppressive rule of the
      <l>Great Kingdom</l> brought great discontent and instigated open rebellion, the whole of the
      <l>South Province</l> being in arms. All of the lower portion was lost to the empire when the
      <l>Iron League</l> was founded in 447 CY. This alliance joined <l>Onnwal</l> with the Free
      City of <l>Irongate</l> (which barred the <l>Onnwal</l> peninsula), <l>Idee</l>,
      <l>Sunndi</l>, and the demi-humans of the <l>Glorioles</l> and <l>Hestmark Highlands</l> in
      economic and military alliance. <l>Onnwal</l> and <l>Irongate</l> supplied the sea power,
      while the other members furnished troops for land actions although strong contingents from
      both of the former places were also sent to battle. <l>Irongate</l> was besieged by Aerdian
      forces for several months, but in the battle of a Thousand Banners the siege was lifted when a
      ruse panicked the northerners, and great numbers of them were subsequently slain by a combined
      host of men and Gray Elves of the League. While never invaded, <l>Onnwal</l> is subject to
      periodic sea raids from the Herzog's squadrons. The major port of <l>Scant</l> is
      exceptionally well fortified because of this fact. Other than a small force of regulars and
      her marines, <l>Onnwal</l> relies upon levies in time of war.
    </p>
  </legend-section>

  <legend-section :heraldry="['theocracy-pale']">
    <template #header>
      <h2><l>Theocracy of the Pale</l></h2>
    </template>
    <p>
      When <l>Nyrond</l> became a separate nation, the highly religious peoples inhabiting the area
      between the <l>Rakers</l> and Yol River likewise proclaimed their autonomy. Their clerical
      leaders were in effect the ruling nobles, and one of their number was chosen as supreme for
      his lifetime. After warfare with their southern neighbor and a period of subjugation, the
      <l>Pale</l> became independent once again, and since then has enjoyed a history of reasonable
      rule and relative peace. Barbarian, humanoid, and bandit raiders plague the Theocracy, but
      Prelatal troops are tough and efficient and capable of handling most problems of this nature.
      A balanced force of horse and foot numbering over 4,000 guards the borders of the realm, while
      levies numbering more than 10,000 can be raised in a week.
    </p>
    <p>The <l>Pale</l> is not noted for religious tolerance.</p>
  </legend-section>

  <legend-section :heraldry="['perrenland']">
    <template #header>
      <h2><l>Concatenated Cantons of Perrenland</l></h2>
    </template>
    <p>
      The original Flan tribes dwelling in the <l>Yatil Mountains</l> were far more warlike and
      fierce than most of their fellows elsewhere in the Flanaess. The would-be invaders were
      absorbed by these powerful clans — Oerids, Suloise, and even a few of Baklunish stock.
      Attempts at expansion into <l>Perrenland</l> by Furyondy and later <l>Ket</l> were vigorously
      resisted by the inhabitants, strong mountaineers and valley-dwelling folk alike. These
      attempts, as well as nomadic incursions into the area, brought the various clans together in a
      loose association under the banner of the strongest of their number, Perren, c. 400 CY. Clan
      holds were marked into cantonments, and the leaders (hetmen, voormanns, or whatever) elected
      an executive head, like unto a king with limited powers to rule for an eight year period, with
      counsel from the assembled clan leaders. This system has proven workable for the nation, and
      <l>Perrenland</l> is relatively prosperous through trade with the northern nomads, the
      Baklunish states, and <l>Veluna</l>-<l>Furyondy</l>. Her chief export is her well-trained
      mercenary bands, however. Such a force is typically made up of pikemen (30%) and pole armed
      mountaineers (20%), with lowland crossbowmen (30%) and other infantry (10%) armed with
      battleaxe, flail, etc. rounding out the infantry contingent; the remaining 10% is cavalry.
      Half of the horse is heavy, coming mainly from the <l>Schwartzenbruin</l> area, while the
      remainder is medium, bow armed cavalry from the <l>Clatspur</l> region. Although
      <l>Perrenland</l> does not claim the valley of the Quagflow River below the
      <l>Clatspur Range</l>, the High Elves from that region will often be seen in service with a
      band of Perrenlanders. (Such forces serve as scouts and light infantry and are bow armed; such
      an addition is typically equal to 10% of the human force.) Bands of mercenaries of this sort
      will be found in armies fielded by <l>Veluna</l>, Furyondy, and <l>Bissel</l>. Even
      <l>Ket</l> has used them in a dispute with <l>Tusmit</l>.
    </p>
    <p>
      <l>Perrenland</l> is always careful to maintain strict watch on all frontiers. Bodies of
      superb militia can be raised in but a single day to support the permanent garrisons which are
      quite small. A small squadron of warships suffices to assure the nation of maintaining
      <l>Lake Quag</l> as its own private domain. These vessels are also used as escorts for
      merchant barges and cogs travelling downriver.
    </p>
  </legend-section>

  <legend-section :heraldry="['plains-paynims']">
    <template #header>
      <h2><l>Plains of the Paynims</l></h2>
      <strong><l>Tribes of the Paynims</l></strong>
    </template>
    <p>
      Only a small portion of the rolling plains inhabited by nomadic Baklunish tribes falls within
      the Flanaess. The pair which is on our portion of the continent is sometimes nearly empty of
      human life, and at other times it is reported to swarm with horsemen. These nomads evidently
      move out of the <l>Dry Steppes</l> region when summer makes the area an arid waste, and return
      there in the rainy season. Of course, the tribe of <l>Ull</l> (q.v.) has a permanent territory
      and the northern parts of the plains are held by the more civilised states bordering the
      <l>Dramidj Ocean</l>. Each tribe is ruled by a noble, variously called Amir or Khan. Greater
      nobles are called Ilkhan, Orakhon, or Shah. Leaders of the royal rank are known as Tarkhan,
      Padishah or Kha Khan. The northern and western tribes use the titles Amir, Shah, and Padishah,
      while those from the south (<l>Dry Steppes</l>) favour Khan, Ilkhan, etc. These horsed nomads
      are poorly armoured but very mobile troops. The most lightly protected wield short, powerful
      horn bows and light curved swords, while the remainder (20% to 30%) employ light lance and
      mace or flail. Little else is known. The western states such as <l>Ket</l>, <l>Tusmit</l>, and
      <l>Ekbir</l> will often employ forces of mercenary <l>Paynim</l> nomads against each other or
      other marauding nomads. As the Tiger and <l>Wolf Nomads</l> (qq.v.) also used the title of
      Khan et al., it is speculated that these peoples are branches of the same race separated by an
      influx of later nomads (those using the titles Amir et al).
    </p>
  </legend-section>

  <legend-section :heraldry="['pomarj']">
    <template #header>
      <h2><l>Pomarj</l></h2>
    </template>
    <p>
      This rich peninsula was originally a collection of petty states under the protection of the
      Prince of <l>Ulek</l>. Not content with this status, the nobles of this area foreswore their
      oaths and drove out the garrisons of the sovereign's castles, taking them for their own. For
      several decades the <l>Pomarj</l> prospered under this new freedom, the mines in the
      <l>Drachensgrab</l> and sea trade making noble and commoner alike rich. However, in the
      Hateful Wars (498-510 CY), the combined <l>Ulek</l> states, with cooperation from
      <l>Veluna</l> and the demi-humans of the <l>Kron Hills</l>, broke the power of the Euroz and
      Jebli hordes which had nested in the <l>Lortmils</l> and were attempting to spread into the
      lands around. These humanoids were finally driven out and scattered some fleeing northward
      toward the <l>Yatils</l>, but most (having wiser leadership) taking to the <l>Suss</l> forest
      and thence to the rugged mountains of the <l>Pomarj</l>. Finding the humans there weak and
      indolent, the invaders attacked quickly, captured the strongholds, and then set themselves up
      as masters of the whole peninsula. There are undoubtedly renegade humans helping these
      invaders, and mercenaries as well-bought and paid for by the gold from the
      <l>Stoneheim</l> mines and the moonstones and cairngorms from the high peaks as well. A relief
      force of dwarves and men from the Prince crossed the <l>Jewel River</l> but were turned back
      after a fierce battle below the Hilly Pastures. The humanoids have not often dared to cross
      into <l>Ulek</l>, but their raiders cause much trouble in the <l>Wild Coast</l>.
    </p>
  </legend-section>

  <legend-section :heraldry="['ratik']">
    <template #header>
      <h2><l>Archbarony of Ratik</l></h2>
    </template>
    <p>
      When the <l>Bone March</l> was created by the Overking, a further outpost was desired and the
      Aerdi banners pushed northward as far as the <l>Timberway</l>. A military commander was
      appointed to see to the establishment of a secure territory and lumbering was gotten underway,
      as the great pines of the area were highly desirable in shipbuilding. The active commander
      soon sent such a stream of riches southward (he was a just man, friendly with the Dwerfolk,
      and an able tactician, too) — accompanying them with detailed reports of successful actions
      against the last of the <l>Frost Barbarians</l> in the area that the Overking took notice.
      After a raiding fleet was roundly beaten, the Overking elevated this general to the nobility,
      creating him Baron <l>Ratik</l>. Thereafter a succession of his descendants have ruled the
      fief, bravely combatting raiders so as to gain their respect and even friendship from some,
      while humans and demi-humans alike prospered. When the hordes of humanoids began attacking,
      <l>Ratik</l> had ample warning from the dwarves dwelling in the mountains. Companies of men
      and gnomes hurried west to aid their countrymen against the invaders, while couriers were sent
      south (and north) to alert the people there. Resistance was so fierce that the area was
      bypassed, and the attackers fell instead upon the <l>Bone March</l>. The isolated barony has
      since been ruled as a fief palatine.
    </p>
    <p>
      The Baron's forces are able to defend <l>Ratik</l>, but they are not strong enough to dislodge
      the humanoids from the mountains of the plain to the south. The baronial levies consist of
      schiltrons of spearmen and a small force of light cavalry. Large dwarven contingents are
      available in time of need, as are several companies of sturdy gnomes. A force of men-at-arms,
      crossbowmen, and mounted sergeants comprises the regular army of <l>Ratik</l>, with bow armed
      woodsmen patrolling the north and sling-equipped hillrunners watching the southern borders.
    </p>
  </legend-section>

  <legend-section :heraldry="['rel-astra']">
    <template #header>
      <h2><l>City of Rel Astra</l></h2>
    </template>
    <p>
      The city and constabular fief of <l>Rel Astra</l> extends from the precincts of the city
      northward to the Lone Heath south of the <l>Mikar</l>, including the town of <l>Ountsy</l>,
      whose mayor is subject to <l>Rel Astra</l>. This trading and mercantile port city is held in
      hereditary fief by a rival noble house of the Aerdi who are secretly conspiring against the
      royal house of Naelex, although they are careful to allow no proof of this to fall into their
      enemies' hands. They desperately seek close ties with <l>Medegia</l> and the
      <l>Sea Barons</l> to balance the weight of the Overking's kinsmen in North and
      <l>South Province</l>. It is reported that the Overking views these machinations with
      ill-concealed delight, for they are seen as check and balance, as the monarch fears his own at
      least as much as he distrusts others. In any case, the lord of <l>Rel Astra</l> at the same
      time desires to check the growth of the Censor's lands and holdings, and secret plots with the
      freefolk of <l>Grandwood Forest</l> and the Herzog of the <l>South Province</l> are rumoured.
      The Constable Mayor fields a strong force of cavalry and foot, as well as a squadron of
      warships. His horse units have a nucleus of nobles and knights numbering about 100, and their
      esquires and sergeants add some 400 medium cavalry; light horse contingents round the number
      to a full 1,000. There are an equal number of men-at-arms, about half of whom are crossbowmen.
      Levies and militia numbering 1,000 horse and 6,000 foot can be called up from
      <l>Rel Astra</l>, <l>Ountsy</l>, and the surrounding lands on short notice. Recently the Rel
      Astrans have employed mixed human and orcish scouting bands as light troops in the
      <l>Grandwood</l> and similar groups on the Lone Heath.
    </p>
  </legend-section>

  <legend-section :heraldry="['rovers-barrens']">
    <template #header>
      <h2><l>Rovers of the Barrens</l></h2>
    </template>
    <p>
      The tribes of nomadic peoples who dwell between the <l>Wastes</l> below the <l>Icy Sea</l> and
      the <l>Fellreev Forest</l> called themselves the People of the Plentiful Huntinglands, but
      their neighbours named them <l>Rovers of the Barrens</l> as they had no permanent settlements
      and the area they roamed seemed bleak. These tough nomads were content enough with their
      herds, hunts, and occasional raids upon <l>Furyondy</l>, the <l>Bandit Kingdoms</l>, or
      <l>Tenh</l>. The growth of the bandits' power and the swelling numbers of humanoids, however,
      have sharply reduced the territory, numbers, and power of these clans. At the great battle of
      <l>Opicm River</l>, the might of the <l>Rovers of the Barrens</l> gathered to war upon a
      combined host from the <l>Land of Iuz</l> and the newly formed <l>Horned Society</l>. The
      wardog soldiers and light cavalry of the Rovers were decimated and scattered, and many of
      their chieftains were slain. Perhaps three or four clans of but a few tribes each are all that
      now remain of the force which once sent the tumans of the <l>Wolf Nomads</l> flying back
      across the <l>Dulsi</l> without their grey-tailed banners. The numerous people that formerly
      went where they would between the <l>Dulsi</l> and <l>Veng</l> Rivers to
      <l>White Fanged Bay</l> and the <l>Zumker River</l> are now reduced to a handful of warriors
      huddling from the <l>Wastes</l> to the <l>Forlorn Forest</l>. The light cavalry of these
      tribes ply lance and javelin, although many also use bows. Picked men use lariats to pull
      enemies down. Certain tribes furnish excellent medium horsemen who provide shock power. The
      wardogs are footmen able to run with cavalry and fight, hamstringing enemy mounts and
      disrupting their formations.
    </p>
  </legend-section>

  <legend-section :heraldry="['scarlet-brotherhood']">
    <template #header>
      <h2><l>Scarlet Brotherhood</l></h2>
    </template>
    <p>
      It is said that an order of monastic religious militarists was founded long ago on the remote
      plateau south of the closed city of <l>Kro Terlep</l>. This order is purported to espouse the
      cause of the Suloise as the rightful rulers of all the Flanaess, claiming superiority of that
      race above all others, and embracing evil as the only hope of achieving its ends. Supposedly
      the <l>Scarlet Brotherhood</l> is the fruition of these aims, and it now controls the whole of
      the land from the Vast Swamp to the tip of the peninsula. Brothers of the Scarlet Sign are
      reportedly hiding as trusted advisors or henchmen in many courts and castles in the north,
      spying for their master and ready to strike. The Brotherhood is tripartite, according to tales
      told, with thieves as its lower ring, assassins next, and then the smallest and highest ring
      of monks as superior. The leader of the thieves is called "Elder Cousin," that of the
      assassins is known as "Foster Uncle" — thus other thieves are entitled "cousins" and assassins
      "nephews." The temple and monastery of the <l>Scarlet Brotherhood</l> is supposedly a fortress
      and walled town unto itself, guarded by soldiers, humanoid legions which are being readied for
      future conquest, and monsters trained to serve the Brotherhood.
    </p>
  </legend-section>

  <legend-section :heraldry="['sea-barons']">
    <template #header>
      <h2><l>Sea Barons</l></h2>
    </template>
    <p>
      The Aerdi power spread to the islands off the shores of the <l>Gullcliffs</l>, where the
      newcomers mixed with Flannae. The Overking eventually appointed certain nobles to baronial
      island fiefs, four in all, instructing them to build squadrons of ships and compete, for
      whichever of their number excelled in warfare at sea would be appointed over all as supreme
      baron and admiral as well. Baron Asperdi won the post, and to this day the High Admiral of the
      <l>Great Kingdom</l> is the hereditary baron of that place. The four barons are virtually
      independent today, but still swear fealty to the Overking and serve loyally if not with great
      enthusiasm. Their squadrons protect the coasts from <l>Bellport</l> to <l>Pontylver</l>,
      driving off the northern barbarian seawolves, protecting the coastal sealanes, and fighting
      with the ships of the <l>Duxchan</l> Lord whether piratical or otherwise.
    </p>
  </legend-section>

  <legend-section :heraldry="['hold-sea-princes']">
    <template #header>
      <h2><l>Hold of the Sea Princes</l></h2>
    </template>
    <p>
      The buccaneers of the <l>Azure Sea</l> and <l>Jeklea Bay</l> grew strong and wealthy when
      <l>Keoland</l> was at the height of its power, for the eyes of its leaders were turned
      northward toward empire, and the sea raiders were ignored. These privateers took to calling
      themselves <l>Sea Princes</l>, after a particularly successful captain who was in fact of
      noble birth. Sailing unchecked from their island and mainland strongholds, these raiders were
      the scourge of the coasts from <l>Gradsul</l> to <l>Scant</l>, on the <l>Pomarj</l>, and even
      beyond into the <l>Sea of Gearnat</l> and the <l>Tilva Strait</l>. When <l>Keoland</l> turned
      back from imperial expansion, her navy began to rebuild in order to check the threat of the
      <l>Sea Princes</l>, as they were now commonly known. Their numbers and strength had become so
      great, however, that the Keoish fleet, even with the aid of a squadron of
      <l>Ulek</l> warships, could at best deliver a sharp check to them (Battle of
      <l>Jetsom Island</l>). This lesson caused their leaders to rethink their policies, however,
      and several of the wiser captains retired to mainland estates, appointing lieutenants to
      command their ships, not in piratical or raiding activities in the Flanaess, but on
      expeditions to the <l>Amedio</l> coast and thence to trade northward with the rare woods,
      spices, ivory, and gold which they wrested from the jungle savages. Eventually the mainland
      possessions of the <l>Sea Princes</l> amounted to more territory than their island homes, and
      they practised little formal raiding. Today they probably are still the strongest sea power,
      but they also have a small and efficient army and are relatively peaceful traders. If those
      people have a fault, it is that they allow the use of slaves in their nation, despite strong
      protests from the <l>Yeomanry</l>. It is reported that the Prince of <l>Monmurg</l> would
      abolish this practice, but his fellow nobles (the Prince of <l>Toli</l>, the Plar of
      <l>Hool</l>, and the Grandee of <l>Westkeep</l>, along with the Commodores of <l>Jetsom</l>,
      <l>Fairwind</l>, and <l>Flotsom</l>) prevent it.
    </p>
  </legend-section>

  <legend-section :heraldry="['shield-lands']">
    <template #header>
      <h2><l>Shield Lands</l></h2>
    </template>
    <p>
      When the <l>Bandit Kingdoms</l> began to grow powerful, the petty nobles of the north shores
      of the <l>Nyr Dyv</l> banded together in a mutual protection society. The small Earldom of
      Walworth had the advantage of possessing a sizable island upon which was built the only city
      in the whole district, so its Lord was chosen as Knight Commander of the combined forces of
      the nobles. A headquarters was established at <l>Admundfort</l>, and a holy order of religious
      knights begun. The <l>Shield Lands</l> are still ruled by many small noblemen, while the Earl
      of Walworth is hereditary general of their combined military and naval forces. Their military
      activity brings contributions from <l>Furyondy</l> and <l>Urnst</l>, as well as many esquires
      and knights to serve in the core of the army, the Knights of Holy Shielding. This area
      currently is in desperate straits with the growing might of the <l>Horned Society</l> menacing
      the delicate balance.
    </p>
  </legend-section>

  <legend-section :heraldry="['snow-barbarians']">
    <template #header>
      <h2><l>Snow Barbarians</l></h2>
      <strong><l>Kingdom of Schnai</l></strong>
    </template>
    <p>
      The <l>Snow Barbarians</l> are the strongest and most numerous of the northern peoples.
      Several decades ago they captured the west coast below <l>Glot</l> and have managed to hold it
      since. For a time the <l>Frost Barbarians</l> were under the thumb of the King of the
      <l>Schnai</l>, but the <l>Fruztii</l> are now free except in pledge. This has not affected
      general concord with either neighbour, as all three consider the <l>Great Kingdom</l> and the
      <l>Sea Barons</l> as their most natural source of easy loot and profit. Although fighting
      invading humanoids has become a national pastime, there are sufficient men left to man the
      longships when campaigning season in the south is at hand. It is rumoured that the Baron of
      <l>Ratik</l> has sent messages to the King of the <l>Schnai</l> proposing four-way cooperation
      to take the <l>Hold of Stonefist</l> and the <l>Bone March</l>. Supposedly this proposal
      offers <l>Glot</l> and <l>Krakenheim</l> as possible gains for the <l>Schnai</l>, while the
      <l>Fruztii</l> and <l>Cruski</l> would divide the Hold, part of <l>Timberway</l> would be
      returned to the <l>Frost Barbarians</l>, and <l>Ratik</l> would rule <l>Bone March</l>. The
      reaction to these proposals can not be guessed, but the <l>Schnai</l> are undoubtedly keeping
      an eye on the joint <l>Fruztii</l>-<l>Ratik</l> ventures of late.
    </p>
  </legend-section>

  <legend-section :heraldry="['south-province']">
    <template #header>
      <h2><l>South Province</l></h2>
      <strong><l>Ahlissa</l></strong>
    </template>
    <p>
      The ruler of <l>South Province</l>, a cousin of the Overking in <l>Rauxes</l>, is in
      disfavour. All previous attempts to regain the lost portions of the fief have been turned back
      in defeat, and the revenues coming to the Malachite Throne have diminished considerably, for
      the lost territories were rich indeed. Thus the Herzog has stated the intent to stake his
      entire personal fortune on a last attempt to break the <l>Iron League</l>. Success, of course,
      would make most of his title something more than hot air, regain favour for him in
      <l>Rauxes</l>, swell his coffers to bursting with wealth, and lastly give much wicked
      satisfaction to him. At the present time the holding extends only to the fief of
      <l>Ahlissa</l> and the central lands always retained by the Herzog, the territory around
      Hexpools and the <l>Thelly River</l> (and portions of this are even claimed by the Censor of
      <l>Medegia</l> who seeks to take advantage of the Herzog's disgrace). While native troops,
      except for those of the petty nobles and gentry serving the Herzog, are unreliable at best,
      the heavy cavalry is considered to be highly effective, and mercenary men-at-arms,
      exceptionally well armed and equipped, make the Army of the South formidable. If the viceroy
      carries through with his vow, a major war can be anticipated soon. If it does erupt, it is
      certain that <l>Nyrond</l> and <l>Almor</l> will move to support the <l>Iron League</l> —
      comprised of <l>Idee</l>, <l>Irongate</l>, <l>Onnwal</l>, and <l>Sunndi</l> (qq.v.)
    </p>
  </legend-section>

  <legend-section :heraldry="['spindrift-isles']">
    <template #header>
      <h2><l>Spindrift Isles</l></h2>
    </template>
    <p>
      The islands furthest east in the Asperdi <l>Duxchan</l> chain are the <l>Spindrifts</l>, some
      100 leagues east of the Medegian coast. Exact information is not available, as neither the Sea
      Barons nor the <l>Duxchan</l> captains have reported upon them both groups likely desiring to
      expand their holdings by acquiring these islands. There are tales that numerous Olvenfolk
      dwell in the <l>Spindrifts</l>, and the reason that neither seafaring nation reports anything
      about them is because these elves capture and imprison any sailor so bold as to enter their
      domain. The isle furthest to the south was once ruled by a mighty wizard, one Lendore
      according to stories.
    </p>
    <p>
      The <l>Spindrifts</l> are known to be divided into two parts, the northern islands of the High
      Elves, and the single southern Lendore Isle. The three northern islands are supposedly
      overseen by five elven wizards supported by numerous elven lords and half-elven clergy. Ships
      from the <l>Lordship of the Isles</l> as well as from the <l>Sea Barons</l> who have ventured
      there have yet to return! There are no reported towns or villages in the northern islands and
      seclusion is all these demi-humans seem to require. Lendore Isle, on the other hand, has much
      trade with the continent and pays, through the Council of Seven of <l>Lo Reltarma</l>, a
      liberal sum to both the <l>Lordship of the Isles</l> and the <l>Sea Barons</l> to pass without
      incident. This immunity has been ignored on occasion by an enterprising pirate who is then
      later exterminated whether by an agent of the Council or by someone else is unknown. The
      humans of Lendore Isle pray almost exclusively to the ancient gods of the Suloise, but how
      this religion became dominant on this faraway isle is a mystery. Lendore Isle is named for the
      Arch-Mage who founded its civilization, but tales of him and the fellowship he brought to the
      <l>Spindrifts</l> are all but lost.
    </p>
  </legend-section>

  <legend-section :heraldry="['sterich']">
    <template #header>
      <h2><l>Earldom of Sterich</l></h2>
    </template>
    <p>
      The Earl of <l>Sterich</l> is a nominal vassal of the King of <l>Keoland</l>, although treated
      more as a favoured relative than a vassal by the king. The Sterish are loyal to their Earl and
      the King of <l>Keoland</l> alike, and in time of need a large contingent of the renowned light
      cavalry and sword-armed light infantry of the earldom are sent to <l>Keoland</l>, accompanied
      by companies of stout heavy dwarvish infantry from the <l>Crystalmists</l>. A good portion of
      the levies of <l>Sterich</l> must always remain on guard to the west, however, for many
      humanoids, giants, and even worse monsters tend to follow the headwaters of the
      <l>Davish River</l> down into the fertile low country to loot and pillage. The halberdiers and
      medium horse of <l>Sterich</l> are thus seldom seen outside their native land. The Earl
      maintains good relations with the <l>Grand Duchy of Geoff</l> (being of the same bloodline as
      the Grand Duke, this is not too surprising), and some trade is carried on with the
      <l>Yeomanry</l> via the <l>Javan River</l>.
    </p>
  </legend-section>

  <legend-section :heraldry="['hold-stonefist']">
    <template #header>
      <h2><l>Hold of Stonefist</l></h2>
    </template>
    <p>
      Stonefist, then Vlek Col Vlekzed, founded his chiefdom in approximately 430 CY. Vlek was cast
      out from the <l>Rovers of the Barrens</l> for banditry and lying, but a small number of
      warriors and their families followed him as leader. For several years he wandered around the
      fringes of his homeland, raiding and stealing from everyone without prejudice. These minor
      successes attracted a growing following of fellow outcasts, bandits, criminals and like
      unsavoury types. Yet with this strange mixture of fighters, he mounted a highly successful
      raid into <l>Tenh</l>, swung down into the <l>Bandit Kingdoms</l> and recruited more
      followers, and then defeated a punitive expedition sent from <l>Tenh</l>. When threatened by a
      bandit kinglet, Vlek replied by surprising his stronghold, sacking it, and carrying away most
      of its population. Riding unmolested through the lands of his former people, but not caring to
      test their fighting ability, Vlek moved beyond <l>White Fanged Bay</l> and established a
      fortified settlement as a permanent camp. The inhabitants of the area, the Coltens Feodality,
      were tricked into negotiation with Vlek. These negotiators and their escorting force were
      slaughtered, the remainder of the Coltens host routed by surprise and ferocity, and Vlek
      settled down to rule over the whole territory. As Vlek's infamy spread, malcontents from many
      nations came to his standard, despite his new name of Stonefist (implying both a terrible
      foeman and an inflexible ruler).
    </p>
    <p>
      The Mastership of the Hold is a semi-hereditary position and title. The descendants of Vlek
      (he had 219 wives and 351 male children who survived to maturity) compete in a bi-annual "Rite
      of Battle Fitness." The winner may challenge the Master, one of the Atamen of the three towns,
      or lead a warband and become a chief. The surviving losers join the standing warbands (the
      "Fists"), those who did best becoming chieftains, sub-chiefs, and leaders of raiding bands.
      These savage war and raiding bands commonly raid <l>Fruztii</l>, <l>Tenh</l>, and even the
      <l>Rovers of the Barrens</l>. About 30% or so of the population of the Hold dwell in permanent
      settlements, and from these people are drawn the bulk of the footmen. Most of the balance of
      the population are semi-nomadic, moving into the northern tundra in the summer, and migrating
      south in the fall. From these people come the horsemen and light infantry of the "Fists."
    </p>
  </legend-section>

  <legend-section :heraldry="['county-sunndi']">
    <template #header>
      <h2><l>County of Sunndi</l></h2>
      <strong>Member of the <l>Iron League</l></strong>
    </template>
    <p>
      The County of <l>Sunndi</l> was once a fief within a fief, being granted to a loyal peer of
      the Overking's Herzog of the <l>South Province</l> of the <l>Great Kingdom</l>. After a long
      period of oppressive taxation, maltreatment by royal troops and those of the Herzog as well,
      and harrying of its demi-human inhabitants, the nobles of human and non-human folk in the area
      joined the general uprising against Aerdian rule, and in 455 CY became a part of the
      <l>Iron League</l>. The county is well protected by natural barriers which enable it to be
      defended — the dense <l>Rieuwood</l> and hills to east and west. The neck of the Tilvanot
      Peninsula below <l>Sunndi</l> is corked with a great, semi-salt swamp. (This is a mixed
      blessing, as there are numbers of very unpleasant creatures dwelling therein.) The county
      benefits both from its natural resources (including agriculture) and from trade overland with
      <l>Idee</l>, by sea with <l>Duxchan</l>. It is threatened continually, however, from the north
      by the Herzog's legions, from the east by the forces of the Holy Censor of <l>Medegia</l>, and
      by the <l>Sea Barons</l> along its coasts. Sunnd troops are always in arms human and dwarven
      contingents in the <l>Glorioles</l>, human and gnome companies guarding the eastern hills,
      human and elven foresters ranging the northern woodlands. The Sunnd hillmen employ slings and
      morningstars, while the men of the interior prefer crossbows and bardiches. Except for the
      nobles and their equerries, Sunnd horse is medium or light, and not numerous in any event for
      they rely upon their confederates to the west (<l>Idee</l>) to provide cavalry.
    </p>
  </legend-section>

  <legend-section :heraldry="['duchy-tenh']">
    <template #header>
      <h2><l>Duchy of Tenh</l></h2>
    </template>
    <p>
      <l>Tenh</l> has always been under the rule of the Flannae, and most of its peoples are of that
      racial stock. The fertile uplands between the <l>Artonsamay</l> and the
      <l>Griff Mountains</l> proved sanctuary and home to Flan tribesmen as the influx of Oerids and
      Suel peoples elsewhere drove them off or absorbed them. About the time the Aerdi began to
      expand, the <l>Tenh</l> created their own state from the diverse groups within the boundaries
      of their land, and their greatest leader was proclaimed Duke. This realm has retained its
      freedom and independence down to this day, although it is continually troubled by bandits from
      the west, raiders from the north, marauding humanoids, and border clashes with the
      <l>Theocracy of the Pale</l>. <l>Tenh</l> medium cavalry is of excellent repute, as are its
      sturdy footmen, armed with shortbow and pole arms.
    </p>
  </legend-section>

  <legend-section :heraldry="['tiger-nomads']">
    <template #header>
      <h2><l>Tiger Nomads</l></h2>
      <strong><l>Chakyik</l></strong>
    </template>
    <p>
      The <l>Tiger Nomads</l> are tough and hardy horsemen who dwell on the prairies above the
      <l>Yatil Mountains</l>. They are herdsmen and hunters, roaming from the
      <l>Burneal Forest</l> to the foothills of the <l>Yatils</l>, the <l>Dramidj Ocean</l> to the
      banks of the <l>Fler</l>. Because of their proximity to more civilised states, these nomads
      have established a few towns and villages, mine silver and gems, and conduct a fair amount of
      trade with both <l>Ekbir</l> and <l>Perrenland</l>. Naturally, they likewise raid both places
      and war continually with the tribes of the <l>Burneal</l> and their cousins to the east, the
      <l>Wolf Nomads</l>. These people are Baklunish, and most do not even speak the common tongue
      of the Flanaess. Their banners bear the likeness of a tiger, tiger tails, etc. The Ilkhan's
      robe of state is a tiger skin, reportedly that from a sabre-tooth, while the lesser khans wear
      the pelts of normal tigers. <l>Tiger Nomads</l> move about on horseback, with carts carrying
      tents and other possessions. Their main force consists of light cavalry armed with horn bows
      and lances. There is a small percentage of better-protected cavalry which is comparable to
      medium. Infantry never accompanies a tuman or horde on the march, except if the whole people
      is moving. Small garrison forces of footmen are stationed in permanent settlements such as
      <l>Yecha</l>.
    </p>
  </legend-section>

  <legend-section :heraldry="['tusmit']">
    <template #header>
      <h2><l>Tusmit</l></h2>
    </template>
    <p>
      The state of <l>Tusmit</l> is maintained through the crafty playing off of one neighbour
      against the other — <l>Ekbir</l> against <l>Zeif</l>, <l>Zeif</l> against
      <l>Paynim</l> nomads, Paynims against <l>Ket</l>, and so forth. By such careful diplomacy,
      <l>Tusmit</l> maintains her rich holdings south of the <l>Tuflik</l> and avoids costly warfare
      of an open nature. Of course, her forces are engaged in frequent border clashes with
      <l>Ekbir</l> and <l>Ket</l>, as well as skirmishes with raiding tumans of
      <l>Paynim</l> horsemen. The Pasha fears absorption by <l>Ekbir</l>, and most of the politics
      he engages in reflect this. It is said that the Pasha plans to hire both Perrender and Uli
      mercenaries to settle the problem. The soldiery of <l>Tusmit</l> is similar to that of
      <l>Ekbir</l> in most respects.
    </p>
  </legend-section>

  <legend-section>
    <template #header>
      <h2><l>Ulek</l></h2>
    </template>
    <legend-section :heraldry="['county-ulek']">
      <template #header>
        <h3><l>County of Ulek</l></h3>
      </template>
      <p>
        Humans and demi-humans have long sought safety in the lands in and around the
        <l>Lortmils</l>. Flan tribes, dwarves, elves, and so forth settled permanently in the area
        which has been known as the <l>Ulek States</l> for centuries. These territories were under
        Keoish rule for a short period, but have been independent for a considerable period since.
        Although each is separate and distinct, they have a community of interest which allies them
        in the face of outside aggression or time of need. The County Palatine is on good terms with
        its neighbours north and south as well as its former suzerain, the
        <l>Kingdom of Keoland</l>. Since the humanoid tribes have been driven out of the
        <l>Lortmils</l>, the land has enjoyed considerable prosperity. Its troops are mixed human
        and demi-human companies. Cavalry is solely human, as are the heavy infantry. Lighter
        infantry and missile troops are typically gnome and halfling companies. The county extends
        between the <l>Kewl</l> and <l>Old</l> Rivers through the <l>Lortmils</l> to
        <l>Courwood</l> in the <l>Suss Forest</l>.
      </p>
    </legend-section>
    <legend-section :heraldry="['duchy-ulek']">
      <template #header>
        <h3><l>Duchy of Ulek</l></h3>
      </template>
      <p>
        The elven realm of <l>Ulek</l> is ruled by a wise and intelligent Duke of High Elven race.
        Many of the human inhabitants of the land are partially elven, and the remainder are
        well-disposed to demi-humans. After gaining independent status, these peoples were quick to
        make treaties of mutual aid with <l>Celene</l> and the lower <l>Ulek</l> states. While they
        do not love the Keoish, they do not bear them enmity, and normal relations and trade exist
        between the Duchy and the <l>Gran March</l> and <l>Keoland</l>. Most traffic, however,
        passes through the mountains to <l>Celene</l> and the gnomes of the <l>Kron Hills</l>. There
        is a standing force of some 1,000 men and elves serving the Duke. This force consists of a
        small troop of heavy cavalry, another of medium, and a body of elvish light. The balance
        (60%) consists of crossbowmen, billmen, and elvish archers. In time of need levies of men,
        elves, and gnomes can be raised speedily.
      </p>
    </legend-section>
    <legend-section :heraldry="['principality-ulek']">
      <template #header>
        <h3><l>Principality of Ulek</l></h3>
      </template>
      <p>
        Dwarves and other demi-humans are more numerous than are humans except in the city of
        <l>Gryrax</l>, where the larger folk are about twice as common. This is mainly because they
        are better sailors and are in charge of the dwarven prince's naval squadrons based at the
        capital. The remainder of the human population is scattered throughout the principality,
        which extends from the <l>Sheldomar</l> to the <l>Jewel River</l>, south of
        <l>Old River</l>, across the lower <l>Lortmils</l>. The human inhabitants also make up the
        entire cavalry force of the realm and provide a small portion of regular men-at-arms. Most
        of the infantry is dwarven, of course, with small contingents of gnomes, and a body of
        halfling scouts. At one time, the territory of the Prince reached to the tip of the
        <l>Pomarj</l>, but the nobles there despised a dwarven overlord, and they ejected the mixed
        garrisons which protected their holdings in the Prince's name. <l>Ulek</l> took no reprisal
        against them, and an effort was made to relieve the distressed territory when swarms of
        vicious humanoids fell upon it after being driven from the <l>Lortmils</l>. The Prince is on
        very good terms with the Count of <l>Ulek</l> and trades with <l>Keoland</l> and the
        <l>Sea Princes</l> as well.
      </p>
    </legend-section>
  </legend-section>

  <legend-section :heraldry="['ull']">
    <template #header>
      <h2><l>Ull</l></h2>
    </template>
    <p>
      A strong tribal clan of the <l>Paynim</l> nomads found the rich area between the
      <l>Barrier Peaks</l> and the <l>Ulsprue Mountains</l> provided them with ample grazing and a
      perfect territory to "settle" in. The Uli claimed this area of land for themselves and have
      held it against all comers. The territory comprises over 90,000 square leagues, including the
      hills that separate the <l>Ulsprue</l> from the <l>Crystalmists</l>. While many of the Uli
      retain their nomadic habits and roam the open plains to the north, a fair number of these
      people have taken to more settled ways. A caravan town is situated near the centre of
      <l>Ull</l> (Ulakand), and there are numerous hill and mountain villages to the south. The
      numbers of the Uli enable them to field a strong force of cavalry and still protect their town
      and villages with tough infantry. The latter use huge bows, strange pole arms, and great
      maces. As traders, the Uli are crafty and sly. They are fierce, warlike, and highly
      unpredictable otherwise.
    </p>
  </legend-section>

  <legend-section>
    <template #header>
      <h2><l>Urnst</l></h2>
    </template>
    <legend-section :heraldry="['county-urnst']">
      <template #header>
        <h3><l>County of Urnst</l></h3>
      </template>
      <p>
        The County of <l>Urnst</l> is populated by a mixture of peoples, most being of Oerid stock,
        but hostile toward the Aerdi, unwilling to serve a Nyrondal monarch. The Palatine Duke of
        <l>Urnst</l> long encouraged separatists in the county above, and eventually the King of
        <l>Nyrond</l> was forced to agree to a separation of this state from the kingdom. The land
        to the great bend of the <l>Artonsamay</l>, south to the <l>Franz</l>, to the shores of
        <l>Nyr Dyv</l> is ruled by the House of Gellor, whose current representative is the Countess
        Belissica. The county is allied to and under the protection of the <l>Duchy of Urnst</l>,
        but its ruler is by no means subservient to the duke (who is seeking to marry his eldest son
        to the Countess and thus permanently unite the lands into one realm). The county maintains a
        small but efficient squadron of warships on the <l>Nyr Dyv</l>. An army of some 2,000 horse
        and foot garrisons the key strongholds, and noble levies can raise 10 times that number of
        troops in a week or two.
      </p>
    </legend-section>
    <legend-section :heraldry="['duchy-urnst']">
      <template #header>
        <h3><l>Duchy of Urnst</l></h3>
      </template>
      <p>
        The riches of this area are great indeed, consisting of most sorts of precious metals,
        precious stones, and even the prized corundum gems. Because of this the duchy has been
        desired by the kingdoms of <l>Aerdy</l> and <l>Nyrond</l> in that order. When the Nyrondel
        won their independence, they took the County <l>Urnst</l>, and were massing troops to cross
        the Nesser, but the first crossings were turned back by galleys, and the campaign sputtered
        later in the year, never to be restarted. <l>Urnst</l> has plenty of other problems of a
        continuing nature — its <l>Cairn Hills</l> border with <l>Greyhawk</l>, the
        <l>Abbor-Alz</l> frontier which has desert nomad raiders, and difficulties with the lakemen
        of the <l>Nyr Dyv</l> (q.v.). The Duke is not idle during all this: he has developed an
        excellent army of borderers while maintaining a centrally located force of cavalry, as he
        still distrusts <l>Nyrond</l>.
      </p>
    </legend-section>
  </legend-section>

  <legend-section :heraldry="['valley-mage']">
    <template #header>
      <h2><l>Valley of the Mage</l></h2>
    </template>
    <p>
      Long ago a mighty wizard secluded himself in the lush valley at the headwaters of the
      <l>Javan River</l> amidst the <l>Barrier Peaks</l>. His servants posted the approaches to the
      area, warning all alike that entrance to the domain thus established was forbidden except by
      express invitation from its laird. What has transpired since the valley was claimed many
      decades ago is simply a matter of conjecture, for no one goes there. (The Grand Duke does not
      care, and an expedition from <l>Gran March</l> never returned.) There are, of course, tales of
      bold adventurers returning loaded with platinum and gems which are said to litter stream beds
      as pebbles do elsewhere, but even these stories are insufficient to cause much interest, as
      the area is positively known to be inhabited by horrible monsters. What is known for certain
      is that bodies of troops are sometimes seen near the verges of <l>Dim Forest</l>, and that
      mysterious groups sometimes journey in the direction of this place.
    </p>
  </legend-section>

  <legend-section :heraldry="['veluna']">
    <template #header>
      <h2><l>Archclericy of Veluna</l></h2>
    </template>
    <p>
      The <l>Archclericy of Veluna</l> has long been a shining example of the better side of
      humankind in the Flanaess. Since the state became independent, it has treated fairly and
      justly with its neighbours and championed the cause of righteousness everyhere. After the
      unfortunate Short War (see <l>Bissel</l>, <l>Keoland</l>), <l>Veluna</l> returned to normal
      affairs and only engaged in formal military action again when the Horde of Elemental Evil
      manifested itself. The Archclericy aids <l>Bissel</l>, <l>Highfolk</l>, and the Gnomes of the
      <l>Kron Hills</l>. She is on very close terms with <l>Furyondy</l> (q.v.). Seven noble houses
      support the clerical ruler of the realm, the Plar of <l>Veluna</l> being the foremost. The
      semi-independent Viscount of <l>Verbobonc</l> is a willing vassal of the state, and his
      inclusion in the council makes an eighth noble. <l>Veluna</l> fields a regular army which has
      a small core of heavy cavalry, large troops of medium horse, and scouts which are light
      cavalry. The bulk of her infantry are pikemen, with gnomish support and elven archers.
    </p>
  </legend-section>

  <legend-section :heraldry="['verbobonc']">
    <template #header>
      <h2><l>Viscounty and Town of Verbobonc</l></h2>
    </template>
    <p>
      This small state would hardly be worth mention in a continent-wide work of this nature,
      despite its riches, except that evil forces chose the area to establish a stronghold. A temple
      and fortress were constructed in the wooded hills southeast of the town of <l>Verbobonc</l>.
      not far from the village of Hommlet. Trade was ravaged, the countryside pillaged, and bands of
      evil humanoids and men were flocking to the gruesome standards raised. Prompt action was taken
      when it became apparent that evil had grown strong. The Right Worshipful Mayor of the town
      called up the trained levies, and the Viscount brought all of his retainers and the militia,
      and these forces were in the forefront of the ensuing battle which broke the hordes of the
      Temple. The viscounty is a large one, extending from the <l>Velverdyva</l>'s south bank some
      15 leagues into the <l>Kron Hills</l>, being over 50 leagues in breadth. <l>Verbobonc</l> is
      situated in the approximate centre of its east-west axis.
    </p>
  </legend-section>

  <legend-section
    :heraldry="['wild-coast-elredd', 'wild-coast-fax', 'wild-coast-narwell', 'wild-coast-safeton']"
  >
    <template #header>
      <h2><l>Wild Coast</l></h2>
    </template>
    <p>
      The western shores of the <l>Sea of Gearnat</l> have long been called the <l>Wild Coast</l>,
      for the region has been a haven for malcontents, dissidents, demi-humans, humanoids, and the
      outcasts of other states. It is a fair but not particularly fertile area — rolling countryside
      interspersed with woodlands, fens, and scattered clusters of dwellings. Parts of the
      <l>Gnarley Forest</l>, all of the Welkwood east of the <l>Jewel River</l>, and
      <l>Suss Forest</l> are considered as being in this region. The <l>Wild Coast</l> remains a
      free territory comprised of petty nobles, robber barons, guildheld towns, fishing and forest
      villages, freebooters, mercenaries, and displaced persons of all sorts. This is due to the
      remote and isolated position it holds, its lack of resources, and the fact that it has never
      been a desirable position strategically. Portions of the area have been under the control of
      <l>Celene</l>, the Prince of <l>Ulek</l>, the Gynarch of <l>Hardby</l>, and the
      <l>Free City of Greyhawk</l> at various times. The inhabitants, being of a mind otherwise,
      have always managed to regain their freedom.
    </p>
    <p>
      There is no question that the <l>Wild Coast</l> is known throughout the Flanaess as a place of
      sanctuary, albeit a highly dangerous one, filled with adventure at the very least. Its
      racially mixed peoples are well known as mercenaries and adventurers themselves. The area
      gives rise to many outstanding clerics, fighters, magic-users, and thieves. Legendary natives
      of the <l>Wild Coast</l> include such persons as Mordenkainen, Robilar, and Tenser, to name
      but a few. Tales relate that somewhere within the <l>Suss</l> there exists a lost city of the
      Old Suloise from which the <l>Jewel River</l> gained its name. It has never been found, and
      the legend is highly doubtful. Since the <l>Pomarj</l> has been in the control of rapacious
      humanoids, the southern portions of the <l>Wild Coast</l> have been less than wholesome in any
      event, and expeditions into the <l>Suss Forest</l> have not been attempted of late for obvious
      reasons.
    </p>
  </legend-section>

  <legend-section :heraldry="['wolf-nomads']">
    <template #header>
      <h2><l>Wolf Nomads</l></h2>
      <strong><l>Wegwiur</l></strong>
    </template>
    <p>
      Much as their western kin have done, the <l>Wolf Nomads</l> have assumed a few civilised
      characteristics, in that they have a permanent capital and carry on trade with
      <l>Perrenland</l>. At one time the Wegwiur horsemen contested gladly with the
      <l>Rovers of the Barrens</l> for rights to the lands around the <l>Howling Hills</l> and the
      <l>Dulsi River</l>, sometimes defeating them, and sometimes being driven away. With the
      rebirth of <l>Iuz</l>, the <l>Wolf Nomads</l> shun the territory they once disputed, and are
      themselves subject to raids from humanoids and humans from <l>Iuz</l>. These Nomads are not
      daunted by these forays, however, and have given as good as they've gotten. Having lost their
      favourite foemen, the Wolves of the Prairies fight with the <l>Tiger Nomads</l> or raid
      southward for sport. Their banners depict one or more wolves, and their standards bear wolf
      tails and heads. They are otherwise akin to the <l>Tiger Nomads</l> (q.v.).
    </p>
  </legend-section>

  <legend-section :heraldry="['yeomanry']">
    <template #header>
      <h2><l>The Yeomanry</l></h2>
    </template>
    <p>
      The peoples who settled the territory west of the <l>Javan River</l>, north of the
      <l>Hool Marshes</l> and below the <l>Jotens</l> were mixed tribes of Flannae-Suel. Some
      Oeridians also came into the area, accepted by the original settlers as long as the newcomers
      did not infringe the lands or rights of those already there. These peoples developed the habit
      of holding annual meetings of all the tribes in the region, where disputes were settled and
      arrangements of all sorts made. All warriors were treated equally, but each tribe appointed
      one spokesman for each dozen. Eventually, as numbers grew, this became one for every 12 dozen,
      with the 12 spokesmen electing a 13th to speak for all. This democratic tradition persisted
      when the region came under Keoish rule. Despite its isolated position, considerable commerce
      was carried on between the kingdom proper and the <l>Yeomanry</l>, for the latter area was
      very rich. Although they exploited them, the Keoish also brought many benefits to the
      inhabitants of the land. The Keoish monarch, regarding the yeomen as persons of gentle birth
      and their appointed spokesmen as lesser nobility, gave the region a voice in council (and
      exposure to the affairs of the world beyond the boundaries of the <l>Yeomanry</l>). Many
      thousands of yeomen served in the Keoish military for decades, but when the kingdom began its
      wars of conquest, the freemen of the territory revolted and closed their frontier to Keoish
      rule forever. The move was successful primarily because the kingdom was beset with rebellion
      everywhere, but the result was the founding of a state ruled by all of its warriors through
      election! All those bearing arms, those who have borne them in the past, and artisans and
      craftsmen are now entitled to elect spokesmen.
    </p>
    <p>
      The Freeholder must be elected from one of the several scores of greater landowners, but he is
      ruled by the council of Common Grosspokesmen. He conducts government affairs and directs the
      Free Captains of the Battles. The soldiers of the <l>Yeomanry</l> are mostly spearmen and
      crossbowmen. The mountaineers provide heavy, pole armed troops and light slingers. The greater
      freeholders furnish the small cavalry contingents. Demi-humans are enlisted in time of need,
      for they too are electors of the land. Elvish spear and bow units, dwarvish mailed foot, and
      halfling light troops are brought to the field when the army of the <l>Yeomanry</l> sallies
      forth.
    </p>
  </legend-section>

  <legend-section :heraldry="['sultanate-zeif']">
    <template #header>
      <h2><l>Sultanate of Zeif</l></h2>
    </template>
    <p>
      The Sultanate of <l>Zeif</l> is the westernmost state of the Flanaess, a portion of it
      extending beyond the north-south dividing line marked by the <l>Ulsprue Range</l>. The lands
      of the Sultan stretch from the <l>Dramidj</l> to south of the town of <l>Antalotol</l>, and
      border <l>Ekbir</l> and <l>Tusmit</l>. Little is known of the Sultan or his court. The army of
      <l>Zeif</l> is said to be comprised mainly of superb mailed cavalry and huge footmen armed
      with two-handed swords. It is likely that numbers of mercenary <l>Paynim</l> horsemen are also
      enlisted in its ranks. The warm currents of the <l>Dramidj</l> make the land very rich,
      although the Sultan possesses few mineral resources save a secret source of chrysoberyls and
      peridots which are so fine as to be sought after as far east as <l>Keoland</l>,
      <l>Furyondy</l>, and beyond. <l>Zeif</l> is supposed to have territorial designs upon both
      <l>Ekbir</l> and <l>Tusmit</l>, but this is not certain.
    </p>
  </legend-section>
</template>
