const lib = require('./lib.js');

test("Backward capatibility", () => {
  const realWorldSamples = [
    ["Boge, jaka dobra ljudyna",
     "Боже, яка добра людина"],
    
    ["Ne xotjila papljugyty Ukrajynsjku, tomu pysala i hovoryla Moskovsjkoju. Ne bez sljozlyvyx spohadiv pro «brak» Ukrajysnjkoji",
     "Не хотїла паплюжити Украйинську, тому писала і говорила Московською. Не без сльозливих спогадів про «брак» Украйиснької"],

    ["Zhadky pro VK, Dudja [i boh zna koho ctce, bo daleko pislja takoho hortaty ne duge xotju] i dumky z pocyrenjom Moskvomovnyx reklam — to nictco, ale pry tsjomu moja znevaha, bo ne xotju batcyty, do Moskovsjkoji kuljtury — «pryxovana povaha»",
     "Згадки про ВК, Дудя [і бог зна кого ще, бо далеко після такого гортати не дуже хотю] і думки з поширеньом Москвомовних реклам — то ніщо, але при цьому моя зневага, бо не хотю бачити, до Московської культури — «прихована повага»"],

     ["Zahljanuv na storinku, moge i spravdi vypravyv sja… Za sjohodnja perelysaje dvi Moskvomovni reklamy. Avgeg.",
      "Заглянув на сторінку, може і справді виправив ся… За сьогодня перелисає дві Москвомовні реклами. Авжеж."],

     ["I, sxoge, davno ne vtcyv Ukrajynsjku movu, ctce z tcasiv USSR:",
      "І, схоже, давно не вчив Украйинську мову, ще з часів УССР:"],

     ["Pospitj i holova krasce jme robyty.",
      "Поспіть і голова красше йме робити."],

     ["Ne znaju, joho storinku i toho zvitu, kotroho ja zhadav, znajcov sáme na ofitsijnij storintsji, kotra tcomusj pidpysana jak «sajty», ale Moskovsjkoju. Zauvagu, ge navmysno vidibrav z Moskovsjkyx dopysiv, de ne lyce pysje Moskovsjkoju, ale i pocyrjuje Moskovsjku kuljturu.",
      "Не знаю, його сторінку і того звіту, котрого я згадав, знайшов сáме на офіційній сторінцї, котра чомусь підписана як «сайти», але Московською. Зауважу, же навмисно відібрав з Московських дописів, де не лише писє Московською, але і поширює Московську культуру."],

     ["Vyrpravdka pro te, ge robe tsjoho vymuceno, bo jomu vagko cvydko zformuvaty — smixovynne. Todi naj robe poviljnice, ne rozumiju v tcim problema. I, otcevydno, ge jakctco pysaty Moskovsjkoju dalji — cvydce zformovuvaty dumky Ukrajynsjkoju ne stane.",
      "Вирправдка про те, же робе цього вимушено, бо йому важко швидко зформувати — сміховинне. Тоді най робе повільніше, не розумію в чім проблема. І, очевидно, же якщо писати Московською далї — швидше зформовувати думки Украйинською не стане."],

     ["Dlja Ukrajyntsja — godnyx, navitj Nitcan bude krasce za tsjoho. Rozrobnyk (Moskv.!) zvituje sja Moskovsjkoju, stege i pryljudno rozkazuje pro (Moskv.!) VK i (Moskv.!) Dudja. I tsje ja xutko troxy prokrutyv.",
      "Для Украйинця — жодних, навіть Нічан буде красше за цього. Розробник (Москв.!) звітує ся Московською, стеже і прилюдно розказує про (Москв.!) ВК і (Москв.!) Дудя. І цє я хутко трохи прокрутив."],

     ["Tam dekotryx tcerez Q pysaty treba (mogna), Qejts, Qebeljs, Qerynq. Lyce Hitler i Himler zvytcajovo tcerez H. Ale gart nepohanyj!",
      "Там декотрих через Ґ писати треба (можна), Ґейц, Ґебельс, Ґеринґ. Лише Гітлер і Гімлер звичайово через Г. Але жарт непоганий!"],

     ["Onov. Meni pidkazaly, ge to pereklad z Moskovsjkoju, tomu tak.",
      "Онов. Мені підказали, же то переклад з Московською, тому так."],
  ];

  for (const phraseSet of realWorldSamples) {
    const [ latin, cyrillic ] = phraseSet;

    expect(lib.toCyrillic(latin)).toBe(cyrillic);
    expect(lib.toLatin(cyrillic)).toBe(latin);
  }
});
