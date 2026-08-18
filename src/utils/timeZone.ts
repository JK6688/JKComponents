const _localeEnum = {
  ZH_CN: 'zh-CN',
  ZH_HK: 'zh-HK',
  EN_US: 'en-US',
  JA_JP: 'ja-JP',
  KO_KR: 'ko-KR',
  DE_DE: 'de-DE',
  RU_RU: 'ru-RU',
  FR_FR: 'fr-FR',
  MS_MY: 'ms-MY',
  PT_BR: 'pt-BR'
} as const;

type LocaleType = (typeof _localeEnum)[keyof typeof _localeEnum];

/** 时区项类型 */
export type TimeZoneItem = {
  textMap: Record<LocaleType, string>;
  value: string;
  tzNum: number;
};

/** 时区列表 */
export const timeZoneOptions: TimeZoneItem[] = [
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-12:00) 国际日期变更线西`,
      [_localeEnum.ZH_HK]: `(UTC-12:00) 國際日期變更線西`,
      [_localeEnum.EN_US]: `(UTC-12:00) International Date Line West`,
      [_localeEnum.JA_JP]: `(UTC-12:00) 国際日付変更線西`,
      [_localeEnum.KO_KR]: `(UTC-12:00) 국제 날짜 변경선 서쪽`,
      [_localeEnum.DE_DE]: `(UTC-12:00) Internationale Datumsgrenze West`,
      [_localeEnum.RU_RU]: `(UTC-12:00) Международная линия перемены дат, запад`,
      [_localeEnum.FR_FR]: `(UTC-12:00) Ligne internationale de changement de date, ouest`,
      [_localeEnum.MS_MY]: `(UTC-12:00) Garisan Tarikh Antarabangsa Barat`,
      [_localeEnum.PT_BR]: `(UTC-12:00) Linha Internacional de Data Oeste`
    },
    value: `Etc/GMT+12`,
    tzNum: -12
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-11:00) 协调世界时-11`,
      [_localeEnum.ZH_HK]: `(UTC-11:00) 協調世界時-11`,
      [_localeEnum.EN_US]: `(UTC-11:00) Coordinated Universal Time -11`,
      [_localeEnum.JA_JP]: `(UTC-11:00) 協定世界時-11`,
      [_localeEnum.KO_KR]: `(UTC-11:00) 협정 세계시-11`,
      [_localeEnum.DE_DE]: `(UTC-11:00) Koordinierte Weltzeit -11`,
      [_localeEnum.RU_RU]: `(UTC-11:00) Всемирное координированное время -11`,
      [_localeEnum.FR_FR]: `(UTC-11:00) Temps universel coordonné -11`,
      [_localeEnum.MS_MY]: `(UTC-11:00) Waktu Universal Selaras -11`,
      [_localeEnum.PT_BR]: `(UTC-11:00) Horário Universal Coordenado -11`
    },
    value: `Etc/GMT+11`,
    tzNum: -11
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-10:00) 阿留申群岛`,
      [_localeEnum.ZH_HK]: `(UTC-10:00) 阿留申群島`,
      [_localeEnum.EN_US]: `(UTC-10:00) Aleutian Islands`,
      [_localeEnum.JA_JP]: `(UTC-10:00) アリューシャン列島`,
      [_localeEnum.KO_KR]: `(UTC-10:00) 알류샨 열도`,
      [_localeEnum.DE_DE]: `(UTC-10:00) Aleuten`,
      [_localeEnum.RU_RU]: `(UTC-10:00) Алеутские острова`,
      [_localeEnum.FR_FR]: `(UTC-10:00) Îles Aléoutiennes`,
      [_localeEnum.MS_MY]: `(UTC-10:00) Kepulauan Aleut`,
      [_localeEnum.PT_BR]: `(UTC-10:00) Ilhas Aleutas`
    },
    value: `America/Adak`,
    tzNum: -10
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-10:00) 夏威夷`,
      [_localeEnum.ZH_HK]: `(UTC-10:00) 夏威夷`,
      [_localeEnum.EN_US]: `(UTC-10:00) Hawaii`,
      [_localeEnum.JA_JP]: `(UTC-10:00) ハワイ`,
      [_localeEnum.KO_KR]: `(UTC-10:00) 하와이`,
      [_localeEnum.DE_DE]: `(UTC-10:00) Hawaii`,
      [_localeEnum.RU_RU]: `(UTC-10:00) Гавайи`,
      [_localeEnum.FR_FR]: `(UTC-10:00) Hawaï`,
      [_localeEnum.MS_MY]: `(UTC-10:00) Hawaii`,
      [_localeEnum.PT_BR]: `(UTC-10:00) Havaí`
    },
    value: `Pacific/Honolulu`,
    tzNum: -10
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-09:30) 马克萨斯群岛`,
      [_localeEnum.ZH_HK]: `(UTC-09:30) 馬克薩斯群島`,
      [_localeEnum.EN_US]: `(UTC-09:30) Marquesas Islands`,
      [_localeEnum.JA_JP]: `(UTC-09:30) マルキーズ諸島`,
      [_localeEnum.KO_KR]: `(UTC-09:30) 마르키즈 제도`,
      [_localeEnum.DE_DE]: `(UTC-09:30) Marquesas-Inseln`,
      [_localeEnum.RU_RU]: `(UTC-09:30) Маркизские острова`,
      [_localeEnum.FR_FR]: `(UTC-09:30) Îles Marquises`,
      [_localeEnum.MS_MY]: `(UTC-09:30) Kepulauan Marquesas`,
      [_localeEnum.PT_BR]: `(UTC-09:30) Ilhas Marquesas`
    },
    value: `Pacific/Marquesas`,
    tzNum: -9.5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-09:00) 阿拉斯加`,
      [_localeEnum.ZH_HK]: `(UTC-09:00) 阿拉斯加`,
      [_localeEnum.EN_US]: `(UTC-09:00) Alaska`,
      [_localeEnum.JA_JP]: `(UTC-09:00) アラスカ`,
      [_localeEnum.KO_KR]: `(UTC-09:00) 알래스카`,
      [_localeEnum.DE_DE]: `(UTC-09:00) Alaska`,
      [_localeEnum.RU_RU]: `(UTC-09:00) Аляска`,
      [_localeEnum.FR_FR]: `(UTC-09:00) Alaska`,
      [_localeEnum.MS_MY]: `(UTC-09:00) Alaska`,
      [_localeEnum.PT_BR]: `(UTC-09:00) Alasca`
    },
    value: `America/Anchorage`,
    tzNum: -9
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-09:00) 协调世界时-09`,
      [_localeEnum.ZH_HK]: `(UTC-09:00) 協調世界時-09`,
      [_localeEnum.EN_US]: `(UTC-09:00) Coordinated Universal Time -09`,
      [_localeEnum.JA_JP]: `(UTC-09:00) 協定世界時-09`,
      [_localeEnum.KO_KR]: `(UTC-09:00) 협정 세계시-09`,
      [_localeEnum.DE_DE]: `(UTC-09:00) Koordinierte Weltzeit -09`,
      [_localeEnum.RU_RU]: `(UTC-09:00) Всемирное координированное время -09`,
      [_localeEnum.FR_FR]: `(UTC-09:00) Temps universel coordonné -09`,
      [_localeEnum.MS_MY]: `(UTC-09:00) Waktu Universal Selaras -09`,
      [_localeEnum.PT_BR]: `(UTC-09:00) Horário Universal Coordenado -09`
    },
    value: `Etc/GMT+9`,
    tzNum: -9
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-08:00) 太平洋时间（美国和加拿大）`,
      [_localeEnum.ZH_HK]: `(UTC-08:00) 太平洋時間（美國和加拿大）`,
      [_localeEnum.EN_US]: `(UTC-08:00) Pacific Time (US & Canada)`,
      [_localeEnum.JA_JP]: `(UTC-08:00) 太平洋時間（米国とカナダ）`,
      [_localeEnum.KO_KR]: `(UTC-08:00) 태평양 표준시(미국 및 캐나다)`,
      [_localeEnum.DE_DE]: `(UTC-08:00) Pazifische Zeit (USA & Kanada)`,
      [_localeEnum.RU_RU]: `(UTC-08:00) Тихоокеанское время (США и Канада)`,
      [_localeEnum.FR_FR]: `(UTC-08:00) Heure du Pacifique (États-Unis et Canada)`,
      [_localeEnum.MS_MY]: `(UTC-08:00) Waktu Pasifik (AS & Kanada)`,
      [_localeEnum.PT_BR]: `(UTC-08:00) Horário do Pacífico (EUA e Canadá)`
    },
    value: `America/Los_Angeles`,
    tzNum: -8
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-08:00) 下加利福尼亚州`,
      [_localeEnum.ZH_HK]: `(UTC-08:00) 下加利福尼亞州`,
      [_localeEnum.EN_US]: `(UTC-08:00) Tijuana, Baja California`,
      [_localeEnum.JA_JP]: `(UTC-08:00) ティフアナ、バハ・カリフォルニア`,
      [_localeEnum.KO_KR]: `(UTC-08:00) 티후아나, 바하칼리포르니아`,
      [_localeEnum.DE_DE]: `(UTC-08:00) Tijuana, Baja California`,
      [_localeEnum.RU_RU]: `(UTC-08:00) Тихуана, Нижняя Калифорния`,
      [_localeEnum.FR_FR]: `(UTC-08:00) Tijuana, Basse-Californie`,
      [_localeEnum.MS_MY]: `(UTC-08:00) Tijuana, Baja California`,
      [_localeEnum.PT_BR]: `(UTC-08:00) Tijuana, Baixa Califórnia`
    },
    value: `America/Tijuana`,
    tzNum: -8
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-08:00) 协调世界时-08`,
      [_localeEnum.ZH_HK]: `(UTC-08:00) 協調世界時-08`,
      [_localeEnum.EN_US]: `(UTC-08:00) Coordinated Universal Time -08`,
      [_localeEnum.JA_JP]: `(UTC-08:00) 協定世界時-08`,
      [_localeEnum.KO_KR]: `(UTC-08:00) 협정 세계시-08`,
      [_localeEnum.DE_DE]: `(UTC-08:00) Koordinierte Weltzeit -08`,
      [_localeEnum.RU_RU]: `(UTC-08:00) Всемирное координированное время -08`,
      [_localeEnum.FR_FR]: `(UTC-08:00) Temps universel coordonné -08`,
      [_localeEnum.MS_MY]: `(UTC-08:00) Waktu Universal Selaras -08`,
      [_localeEnum.PT_BR]: `(UTC-08:00) Horário Universal Coordenado -08`
    },
    value: `Etc/GMT+8`,
    tzNum: -8
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-07:00) 拉巴斯，马萨特兰`,
      [_localeEnum.ZH_HK]: `(UTC-07:00) 拉巴斯，馬薩特蘭`,
      [_localeEnum.EN_US]: `(UTC-07:00) La Paz, Mazatlan`,
      [_localeEnum.JA_JP]: `(UTC-07:00) ラパス、マサトラン`,
      [_localeEnum.KO_KR]: `(UTC-07:00) 라파스, 마사틀란`,
      [_localeEnum.DE_DE]: `(UTC-07:00) La Paz, Mazatlán`,
      [_localeEnum.RU_RU]: `(UTC-07:00) Ла-Пас, Масатлан`,
      [_localeEnum.FR_FR]: `(UTC-07:00) La Paz, Mazatlán`,
      [_localeEnum.MS_MY]: `(UTC-07:00) La Paz, Mazatlan`,
      [_localeEnum.PT_BR]: `(UTC-07:00) La Paz, Mazatlán`
    },
    value: `America/Mazatlan`,
    tzNum: -7
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-07:00) 山地时间（美国和加拿大）`,
      [_localeEnum.ZH_HK]: `(UTC-07:00) 山區時間（美國和加拿大）`,
      [_localeEnum.EN_US]: `(UTC-07:00) Mountain Time (US & Canada)`,
      [_localeEnum.JA_JP]: `(UTC-07:00) 山岳部時間（米国とカナダ）`,
      [_localeEnum.KO_KR]: `(UTC-07:00) 산악 표준시(미국 및 캐나다)`,
      [_localeEnum.DE_DE]: `(UTC-07:00) Mountain Time (USA & Kanada)`,
      [_localeEnum.RU_RU]: `(UTC-07:00) Горное время (США и Канада)`,
      [_localeEnum.FR_FR]: `(UTC-07:00) Heure des Rocheuses (États-Unis et Canada)`,
      [_localeEnum.MS_MY]: `(UTC-07:00) Waktu Gunung (AS & Kanada)`,
      [_localeEnum.PT_BR]: `(UTC-07:00) Horário das Montanhas (EUA e Canadá)`
    },
    value: `America/Denver`,
    tzNum: -7
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-07:00) 亚利桑那`,
      [_localeEnum.ZH_HK]: `(UTC-07:00) 亞利桑那`,
      [_localeEnum.EN_US]: `(UTC-07:00) Arizona`,
      [_localeEnum.JA_JP]: `(UTC-07:00) アリゾナ`,
      [_localeEnum.KO_KR]: `(UTC-07:00) 애리조나`,
      [_localeEnum.DE_DE]: `(UTC-07:00) Arizona`,
      [_localeEnum.RU_RU]: `(UTC-07:00) Аризона`,
      [_localeEnum.FR_FR]: `(UTC-07:00) Arizona`,
      [_localeEnum.MS_MY]: `(UTC-07:00) Arizona`,
      [_localeEnum.PT_BR]: `(UTC-07:00) Arizona`
    },
    value: `America/Phoenix`,
    tzNum: -7
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-07:00) 育空`,
      [_localeEnum.ZH_HK]: `(UTC-07:00) 育空`,
      [_localeEnum.EN_US]: `(UTC-07:00) Yukon`,
      [_localeEnum.JA_JP]: `(UTC-07:00) ユーコン`,
      [_localeEnum.KO_KR]: `(UTC-07:00) 유콘`,
      [_localeEnum.DE_DE]: `(UTC-07:00) Yukon`,
      [_localeEnum.RU_RU]: `(UTC-07:00) Юкон`,
      [_localeEnum.FR_FR]: `(UTC-07:00) Yukon`,
      [_localeEnum.MS_MY]: `(UTC-07:00) Yukon`,
      [_localeEnum.PT_BR]: `(UTC-07:00) Yukon`
    },
    value: `America/Whitehorse`,
    tzNum: -7
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-06:00) 复活节岛`,
      [_localeEnum.ZH_HK]: `(UTC-06:00) 復活節島`,
      [_localeEnum.EN_US]: `(UTC-06:00) Easter Island`,
      [_localeEnum.JA_JP]: `(UTC-06:00) イースター島`,
      [_localeEnum.KO_KR]: `(UTC-06:00) 이스터섬`,
      [_localeEnum.DE_DE]: `(UTC-06:00) Osterinsel`,
      [_localeEnum.RU_RU]: `(UTC-06:00) Остров Пасхи`,
      [_localeEnum.FR_FR]: `(UTC-06:00) Île de Pâques`,
      [_localeEnum.MS_MY]: `(UTC-06:00) Pulau Easter`,
      [_localeEnum.PT_BR]: `(UTC-06:00) Ilha de Páscoa`
    },
    value: `Pacific/Easter`,
    tzNum: -6
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-06:00) 瓜达拉哈拉，墨西哥城，蒙特雷`,
      [_localeEnum.ZH_HK]: `(UTC-06:00) 瓜達拉哈拉，墨西哥城，蒙特雷`,
      [_localeEnum.EN_US]: `(UTC-06:00) Guadalajara, Mexico City, Monterrey`,
      [_localeEnum.JA_JP]: `(UTC-06:00) グアダラハラ、メキシコシティ、モンテレイ`,
      [_localeEnum.KO_KR]: `(UTC-06:00) 과달라하라, 멕시코시티, 몬테레이`,
      [_localeEnum.DE_DE]: `(UTC-06:00) Guadalajara, Mexiko-Stadt, Monterrey`,
      [_localeEnum.RU_RU]: `(UTC-06:00) Гвадалахара, Мехико, Монтеррей`,
      [_localeEnum.FR_FR]: `(UTC-06:00) Guadalajara, Mexico, Monterrey`,
      [_localeEnum.MS_MY]: `(UTC-06:00) Guadalajara, Mexico City, Monterrey`,
      [_localeEnum.PT_BR]: `(UTC-06:00) Guadalajara, Cidade do México, Monterrey`
    },
    value: `America/Mexico_City`,
    tzNum: -6
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-06:00) 萨斯喀彻温`,
      [_localeEnum.ZH_HK]: `(UTC-06:00) 薩斯喀徹溫`,
      [_localeEnum.EN_US]: `(UTC-06:00) Saskatchewan`,
      [_localeEnum.JA_JP]: `(UTC-06:00) サスカチュワン`,
      [_localeEnum.KO_KR]: `(UTC-06:00) 서스캐처원`,
      [_localeEnum.DE_DE]: `(UTC-06:00) Saskatchewan`,
      [_localeEnum.RU_RU]: `(UTC-06:00) Саскачеван`,
      [_localeEnum.FR_FR]: `(UTC-06:00) Saskatchewan`,
      [_localeEnum.MS_MY]: `(UTC-06:00) Saskatchewan`,
      [_localeEnum.PT_BR]: `(UTC-06:00) Saskatchewan`
    },
    value: `America/Regina`,
    tzNum: -6
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-06:00) 中部时间（美国和加拿大）`,
      [_localeEnum.ZH_HK]: `(UTC-06:00) 中部時間（美國和加拿大）`,
      [_localeEnum.EN_US]: `(UTC-06:00) Central Time (US & Canada)`,
      [_localeEnum.JA_JP]: `(UTC-06:00) 中部時間（米国とカナダ）`,
      [_localeEnum.KO_KR]: `(UTC-06:00) 중부 표준시(미국 및 캐나다)`,
      [_localeEnum.DE_DE]: `(UTC-06:00) Central Time (USA & Kanada)`,
      [_localeEnum.RU_RU]: `(UTC-06:00) Центральное время (США и Канада)`,
      [_localeEnum.FR_FR]: `(UTC-06:00) Heure du Centre (États-Unis et Canada)`,
      [_localeEnum.MS_MY]: `(UTC-06:00) Waktu Tengah (AS & Kanada)`,
      [_localeEnum.PT_BR]: `(UTC-06:00) Horário Central (EUA e Canadá)`
    },
    value: `America/Chicago`,
    tzNum: -6
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-06:00) 中美洲`,
      [_localeEnum.ZH_HK]: `(UTC-06:00) 中美洲`,
      [_localeEnum.EN_US]: `(UTC-06:00) Central America`,
      [_localeEnum.JA_JP]: `(UTC-06:00) 中央アメリカ`,
      [_localeEnum.KO_KR]: `(UTC-06:00) 중앙아메리카`,
      [_localeEnum.DE_DE]: `(UTC-06:00) Mittelamerika`,
      [_localeEnum.RU_RU]: `(UTC-06:00) Центральная Америка`,
      [_localeEnum.FR_FR]: `(UTC-06:00) Amérique centrale`,
      [_localeEnum.MS_MY]: `(UTC-06:00) Amerika Tengah`,
      [_localeEnum.PT_BR]: `(UTC-06:00) América Central`
    },
    value: `America/Guatemala`,
    tzNum: -6
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-05:00) 波哥大，利马，基多，里奥布朗库`,
      [_localeEnum.ZH_HK]: `(UTC-05:00) 波哥大，利馬，基多，里奧布朗庫`,
      [_localeEnum.EN_US]: `(UTC-05:00) Bogota, Lima, Quito, Rio Branco`,
      [_localeEnum.JA_JP]: `(UTC-05:00) ボゴタ、リマ、キト、リオブランコ`,
      [_localeEnum.KO_KR]: `(UTC-05:00) 보고타, 리마, 키토, 리우브랑쿠`,
      [_localeEnum.DE_DE]: `(UTC-05:00) Bogotá, Lima, Quito, Rio Branco`,
      [_localeEnum.RU_RU]: `(UTC-05:00) Богота, Лима, Кито, Риу-Бранку`,
      [_localeEnum.FR_FR]: `(UTC-05:00) Bogotá, Lima, Quito, Rio Branco`,
      [_localeEnum.MS_MY]: `(UTC-05:00) Bogota, Lima, Quito, Rio Branco`,
      [_localeEnum.PT_BR]: `(UTC-05:00) Bogotá, Lima, Quito, Rio Branco`
    },
    value: `America/Bogota`,
    tzNum: -5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-05:00) 东部时间（美国和加拿大）`,
      [_localeEnum.ZH_HK]: `(UTC-05:00) 東部時間（美國和加拿大）`,
      [_localeEnum.EN_US]: `(UTC-05:00) Eastern Time (US & Canada)`,
      [_localeEnum.JA_JP]: `(UTC-05:00) 東部時間（米国とカナダ）`,
      [_localeEnum.KO_KR]: `(UTC-05:00) 동부 표준시(미국 및 캐나다)`,
      [_localeEnum.DE_DE]: `(UTC-05:00) Eastern Time (USA & Kanada)`,
      [_localeEnum.RU_RU]: `(UTC-05:00) Восточное время (США и Канада)`,
      [_localeEnum.FR_FR]: `(UTC-05:00) Heure de l'Est (États-Unis et Canada)`,
      [_localeEnum.MS_MY]: `(UTC-05:00) Waktu Timur (AS & Kanada)`,
      [_localeEnum.PT_BR]: `(UTC-05:00) Horário do Leste (EUA e Canadá)`
    },
    value: `America/New_York`,
    tzNum: -5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-05:00) 哈瓦那`,
      [_localeEnum.ZH_HK]: `(UTC-05:00) 哈瓦那`,
      [_localeEnum.EN_US]: `(UTC-05:00) Havana`,
      [_localeEnum.JA_JP]: `(UTC-05:00) ハバナ`,
      [_localeEnum.KO_KR]: `(UTC-05:00) 아바나`,
      [_localeEnum.DE_DE]: `(UTC-05:00) Havanna`,
      [_localeEnum.RU_RU]: `(UTC-05:00) Гавана`,
      [_localeEnum.FR_FR]: `(UTC-05:00) La Havane`,
      [_localeEnum.MS_MY]: `(UTC-05:00) Havana`,
      [_localeEnum.PT_BR]: `(UTC-05:00) Havana`
    },
    value: `America/Havana`,
    tzNum: -5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-05:00) 海地`,
      [_localeEnum.ZH_HK]: `(UTC-05:00) 海地`,
      [_localeEnum.EN_US]: `(UTC-05:00) Haiti`,
      [_localeEnum.JA_JP]: `(UTC-05:00) ハイチ`,
      [_localeEnum.KO_KR]: `(UTC-05:00) 아이티`,
      [_localeEnum.DE_DE]: `(UTC-05:00) Haiti`,
      [_localeEnum.RU_RU]: `(UTC-05:00) Гаити`,
      [_localeEnum.FR_FR]: `(UTC-05:00) Haïti`,
      [_localeEnum.MS_MY]: `(UTC-05:00) Haiti`,
      [_localeEnum.PT_BR]: `(UTC-05:00) Haiti`
    },
    value: `America/Port-au-Prince`,
    tzNum: -5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-05:00) 切图马尔`,
      [_localeEnum.ZH_HK]: `(UTC-05:00) 切圖馬爾`,
      [_localeEnum.EN_US]: `(UTC-05:00) Chetumal`,
      [_localeEnum.JA_JP]: `(UTC-05:00) チェトゥマル`,
      [_localeEnum.KO_KR]: `(UTC-05:00) 체투말`,
      [_localeEnum.DE_DE]: `(UTC-05:00) Chetumal`,
      [_localeEnum.RU_RU]: `(UTC-05:00) Четумаль`,
      [_localeEnum.FR_FR]: `(UTC-05:00) Chetumal`,
      [_localeEnum.MS_MY]: `(UTC-05:00) Chetumal`,
      [_localeEnum.PT_BR]: `(UTC-05:00) Chetumal`
    },
    value: `America/Cancun`,
    tzNum: -5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-05:00) 特克斯和凯科斯群岛`,
      [_localeEnum.ZH_HK]: `(UTC-05:00) 特克斯和凱科斯群島`,
      [_localeEnum.EN_US]: `(UTC-05:00) Turks & Caicos Islands`,
      [_localeEnum.JA_JP]: `(UTC-05:00) タークス・カイコス諸島`,
      [_localeEnum.KO_KR]: `(UTC-05:00) 터크스 케이커스 제도`,
      [_localeEnum.DE_DE]: `(UTC-05:00) Turks- und Caicosinseln`,
      [_localeEnum.RU_RU]: `(UTC-05:00) Теркс и Кайкос`,
      [_localeEnum.FR_FR]: `(UTC-05:00) Îles Turques-et-Caïques`,
      [_localeEnum.MS_MY]: `(UTC-05:00) Kepulauan Turks dan Caicos`,
      [_localeEnum.PT_BR]: `(UTC-05:00) Ilhas Turks e Caicos`
    },
    value: `America/Grand_Turk`,
    tzNum: -5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-05:00) 印第安那州（东部）`,
      [_localeEnum.ZH_HK]: `(UTC-05:00) 印第安納州（東部）`,
      [_localeEnum.EN_US]: `(UTC-05:00) Indiana (Eastern)`,
      [_localeEnum.JA_JP]: `(UTC-05:00) インディアナ州（東部）`,
      [_localeEnum.KO_KR]: `(UTC-05:00) 인디애나주(동부)`,
      [_localeEnum.DE_DE]: `(UTC-05:00) Indiana (Ost)`,
      [_localeEnum.RU_RU]: `(UTC-05:00) Индиана (восток)`,
      [_localeEnum.FR_FR]: `(UTC-05:00) Indiana (Est)`,
      [_localeEnum.MS_MY]: `(UTC-05:00) Indiana (Timur)`,
      [_localeEnum.PT_BR]: `(UTC-05:00) Indiana (Leste)`
    },
    value: `America/Indianapolis`,
    tzNum: -5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-04:00) 太平洋时间（加拿大）`,
      [_localeEnum.ZH_HK]: `(UTC-04:00) 太平洋時間（加拿大）`,
      [_localeEnum.EN_US]: `(UTC-04:00) Pacific Time (Canada)`,
      [_localeEnum.JA_JP]: `(UTC-04:00) 太平洋時間（カナダ）`,
      [_localeEnum.KO_KR]: `(UTC-04:00) 태평양 표준시(캐나다)`,
      [_localeEnum.DE_DE]: `(UTC-04:00) Pazifische Zeit (Kanada)`,
      [_localeEnum.RU_RU]: `(UTC-04:00) Тихоокеанское время (Канада)`,
      [_localeEnum.FR_FR]: `(UTC-04:00) Heure du Pacifique (Canada)`,
      [_localeEnum.MS_MY]: `(UTC-04:00) Waktu Pasifik (Kanada)`,
      [_localeEnum.PT_BR]: `(UTC-04:00) Horário do Pacífico (Canadá)`
    },
    value: `America/Halifax`,
    tzNum: -4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-04:00) 阿拉斯加`,
      [_localeEnum.ZH_HK]: `(UTC-04:00) 阿拉斯加`,
      [_localeEnum.EN_US]: `(UTC-04:00) Alaska`,
      [_localeEnum.JA_JP]: `(UTC-04:00) アラスカ`,
      [_localeEnum.KO_KR]: `(UTC-04:00) 알래스카`,
      [_localeEnum.DE_DE]: `(UTC-04:00) Alaska`,
      [_localeEnum.RU_RU]: `(UTC-04:00) Аляска`,
      [_localeEnum.FR_FR]: `(UTC-04:00) Alaska`,
      [_localeEnum.MS_MY]: `(UTC-04:00) Alaska`,
      [_localeEnum.PT_BR]: `(UTC-04:00) Alasca`
    },
    value: `America/Caracas`,
    tzNum: -4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-04:00) 库亚巴`,
      [_localeEnum.ZH_HK]: `(UTC-04:00) 庫亞巴`,
      [_localeEnum.EN_US]: `(UTC-04:00) Cuiabá`,
      [_localeEnum.JA_JP]: `(UTC-04:00) クイアバ`,
      [_localeEnum.KO_KR]: `(UTC-04:00) 쿠이아바`,
      [_localeEnum.DE_DE]: `(UTC-04:00) Cuiabá`,
      [_localeEnum.RU_RU]: `(UTC-04:00) Куяба`,
      [_localeEnum.FR_FR]: `(UTC-04:00) Cuiabá`,
      [_localeEnum.MS_MY]: `(UTC-04:00) Cuiabá`,
      [_localeEnum.PT_BR]: `(UTC-04:00) Cuiabá`
    },
    value: `America/Cuiaba`,
    tzNum: -4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-04:00) 乔治敦，拉巴斯，玛瑙斯，圣胡安`,
      [_localeEnum.ZH_HK]: `(UTC-04:00) 喬治敦，拉巴斯，馬瑙斯，聖胡安`,
      [_localeEnum.EN_US]: `(UTC-04:00) Georgetown, La Paz, Manaus, San Juan`,
      [_localeEnum.JA_JP]: `(UTC-04:00) ジョージタウン、ラパス、マナウス、サンフアン`,
      [_localeEnum.KO_KR]: `(UTC-04:00) 조지타운, 라파스, 마나우스, 산후안`,
      [_localeEnum.DE_DE]: `(UTC-04:00) Georgetown, La Paz, Manaus, San Juan`,
      [_localeEnum.RU_RU]: `(UTC-04:00) Джорджтаун, Ла-Пас, Манаус, Сан-Хуан`,
      [_localeEnum.FR_FR]: `(UTC-04:00) Georgetown, La Paz, Manaus, San Juan`,
      [_localeEnum.MS_MY]: `(UTC-04:00) Georgetown, La Paz, Manaus, San Juan`,
      [_localeEnum.PT_BR]: `(UTC-04:00) Georgetown, La Paz, Manaus, San Juan`
    },
    value: `America/La_Paz`,
    tzNum: -4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-04:00) 圣地亚哥`,
      [_localeEnum.ZH_HK]: `(UTC-04:00) 聖地亞哥`,
      [_localeEnum.EN_US]: `(UTC-04:00) San Diego`,
      [_localeEnum.JA_JP]: `(UTC-04:00) サンディエゴ`,
      [_localeEnum.KO_KR]: `(UTC-04:00) 샌디에이고`,
      [_localeEnum.DE_DE]: `(UTC-04:00) San Diego`,
      [_localeEnum.RU_RU]: `(UTC-04:00) Сан-Диего`,
      [_localeEnum.FR_FR]: `(UTC-04:00) San Diego`,
      [_localeEnum.MS_MY]: `(UTC-04:00) San Diego`,
      [_localeEnum.PT_BR]: `(UTC-04:00) San Diego`
    },
    value: `America/Santiago`,
    tzNum: -4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-04:00) 亚松森`,
      [_localeEnum.ZH_HK]: `(UTC-04:00) 亞松森`,
      [_localeEnum.EN_US]: `(UTC-04:00) Asuncion`,
      [_localeEnum.JA_JP]: `(UTC-04:00) アスンシオン`,
      [_localeEnum.KO_KR]: `(UTC-04:00) 아순시온`,
      [_localeEnum.DE_DE]: `(UTC-04:00) Asunción`,
      [_localeEnum.RU_RU]: `(UTC-04:00) Асунсьон`,
      [_localeEnum.FR_FR]: `(UTC-04:00) Asunción`,
      [_localeEnum.MS_MY]: `(UTC-04:00) Asunción`,
      [_localeEnum.PT_BR]: `(UTC-04:00) Assunção`
    },
    value: `America/Asuncion`,
    tzNum: -4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-03:30) 纽芬兰`,
      [_localeEnum.ZH_HK]: `(UTC-03:30) 紐芬蘭`,
      [_localeEnum.EN_US]: `(UTC-03:30) Newfoundland`,
      [_localeEnum.JA_JP]: `(UTC-03:30) ニューファンドランド`,
      [_localeEnum.KO_KR]: `(UTC-03:30) 뉴펀들랜드`,
      [_localeEnum.DE_DE]: `(UTC-03:30) Neufundland`,
      [_localeEnum.RU_RU]: `(UTC-03:30) Ньюфаундленд`,
      [_localeEnum.FR_FR]: `(UTC-03:30) Terre-Neuve`,
      [_localeEnum.MS_MY]: `(UTC-03:30) Newfoundland`,
      [_localeEnum.PT_BR]: `(UTC-03:30) Terra Nova`
    },
    value: `America/St_Johns`,
    tzNum: -3.5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-03:00) 阿拉瓜伊纳`,
      [_localeEnum.ZH_HK]: `(UTC-03:00) 阿拉瓜伊納`,
      [_localeEnum.EN_US]: `(UTC-03:00) Araguaina`,
      [_localeEnum.JA_JP]: `(UTC-03:00) アラグアイナ`,
      [_localeEnum.KO_KR]: `(UTC-03:00) 아라과이나`,
      [_localeEnum.DE_DE]: `(UTC-03:00) Araguaína`,
      [_localeEnum.RU_RU]: `(UTC-03:00) Арагуайна`,
      [_localeEnum.FR_FR]: `(UTC-03:00) Araguaína`,
      [_localeEnum.MS_MY]: `(UTC-03:00) Araguaina`,
      [_localeEnum.PT_BR]: `(UTC-03:00) Araguaína`
    },
    value: `America/Araguaina`,
    tzNum: -3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-03:00) 巴西利亚`,
      [_localeEnum.ZH_HK]: `(UTC-03:00) 巴西利亞`,
      [_localeEnum.EN_US]: `(UTC-03:00) Brasilia`,
      [_localeEnum.JA_JP]: `(UTC-03:00) ブラジリア`,
      [_localeEnum.KO_KR]: `(UTC-03:00) 브라질리아`,
      [_localeEnum.DE_DE]: `(UTC-03:00) Brasília`,
      [_localeEnum.RU_RU]: `(UTC-03:00) Бразилиа`,
      [_localeEnum.FR_FR]: `(UTC-03:00) Brasilia`,
      [_localeEnum.MS_MY]: `(UTC-03:00) Brasília`,
      [_localeEnum.PT_BR]: `(UTC-03:00) Brasília`
    },
    value: `America/Sao_Paulo`,
    tzNum: -3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-03:00) 布宜诺斯艾利斯`,
      [_localeEnum.ZH_HK]: `(UTC-03:00) 布宜諾斯艾利斯`,
      [_localeEnum.EN_US]: `(UTC-03:00) Buenos Aires`,
      [_localeEnum.JA_JP]: `(UTC-03:00) ブエノスアイレス`,
      [_localeEnum.KO_KR]: `(UTC-03:00) 부에노스아이레스`,
      [_localeEnum.DE_DE]: `(UTC-03:00) Buenos Aires`,
      [_localeEnum.RU_RU]: `(UTC-03:00) Буэнос-Айрес`,
      [_localeEnum.FR_FR]: `(UTC-03:00) Buenos Aires`,
      [_localeEnum.MS_MY]: `(UTC-03:00) Buenos Aires`,
      [_localeEnum.PT_BR]: `(UTC-03:00) Buenos Aires`
    },
    value: `America/Buenos_Aires`,
    tzNum: -3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-03:00) 卡宴，福塔雷斯`,
      [_localeEnum.ZH_HK]: `(UTC-03:00) 卡宴，福塔雷斯`,
      [_localeEnum.EN_US]: `(UTC-03:00) Cayenne, Fortales`,
      [_localeEnum.JA_JP]: `(UTC-03:00) カイエン、フォルタレザ`,
      [_localeEnum.KO_KR]: `(UTC-03:00) 카옌, 포르탈레자`,
      [_localeEnum.DE_DE]: `(UTC-03:00) Cayenne, Fortaleza`,
      [_localeEnum.RU_RU]: `(UTC-03:00) Кайенна, Форталеза`,
      [_localeEnum.FR_FR]: `(UTC-03:00) Cayenne, Fortaleza`,
      [_localeEnum.MS_MY]: `(UTC-03:00) Cayenne, Fortaleza`,
      [_localeEnum.PT_BR]: `(UTC-03:00) Caiena, Fortaleza`
    },
    value: `America/Cayenne`,
    tzNum: -3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-03:00) 蒙得维的亚`,
      [_localeEnum.ZH_HK]: `(UTC-03:00) 蒙得維的亞`,
      [_localeEnum.EN_US]: `(UTC-03:00) Montevideo`,
      [_localeEnum.JA_JP]: `(UTC-03:00) モンテビデオ`,
      [_localeEnum.KO_KR]: `(UTC-03:00) 몬테비데오`,
      [_localeEnum.DE_DE]: `(UTC-03:00) Montevideo`,
      [_localeEnum.RU_RU]: `(UTC-03:00) Монтевидео`,
      [_localeEnum.FR_FR]: `(UTC-03:00) Montevideo`,
      [_localeEnum.MS_MY]: `(UTC-03:00) Montevideo`,
      [_localeEnum.PT_BR]: `(UTC-03:00) Montevideo`
    },
    value: `America/Montevideo`,
    tzNum: -3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-03:00) 蓬塔阿雷纳斯`,
      [_localeEnum.ZH_HK]: `(UTC-03:00) 蓬塔阿雷納斯`,
      [_localeEnum.EN_US]: `(UTC-03:00) Punta Arenas`,
      [_localeEnum.JA_JP]: `(UTC-03:00) プンタアレナス`,
      [_localeEnum.KO_KR]: `(UTC-03:00) 푼타아레나스`,
      [_localeEnum.DE_DE]: `(UTC-03:00) Punta Arenas`,
      [_localeEnum.RU_RU]: `(UTC-03:00) Пунта-Аренас`,
      [_localeEnum.FR_FR]: `(UTC-03:00) Punta Arenas`,
      [_localeEnum.MS_MY]: `(UTC-03:00) Punta Arenas`,
      [_localeEnum.PT_BR]: `(UTC-03:00) Punta Arenas`
    },
    value: `America/Punta_Arenas`,
    tzNum: -3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-03:00) 萨尔瓦多`,
      [_localeEnum.ZH_HK]: `(UTC-03:00) 薩爾瓦多`,
      [_localeEnum.EN_US]: `(UTC-03:00) El Salvador`,
      [_localeEnum.JA_JP]: `(UTC-03:00) エルサルバドル`,
      [_localeEnum.KO_KR]: `(UTC-03:00) 엘살바도르`,
      [_localeEnum.DE_DE]: `(UTC-03:00) El Salvador`,
      [_localeEnum.RU_RU]: `(UTC-03:00) Сальвадор`,
      [_localeEnum.FR_FR]: `(UTC-03:00) Salvador`,
      [_localeEnum.MS_MY]: `(UTC-03:00) El Salvador`,
      [_localeEnum.PT_BR]: `(UTC-03:00) El Salvador`
    },
    value: `America/Bahia`,
    tzNum: -3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-03:00) 圣皮埃尔和密克隆群岛`,
      [_localeEnum.ZH_HK]: `(UTC-03:00) 聖皮埃爾和密克隆群島`,
      [_localeEnum.EN_US]: `(UTC-03:00) Saint-Pierre & Miquelon`,
      [_localeEnum.JA_JP]: `(UTC-03:00) サンピエール島・ミクロン島`,
      [_localeEnum.KO_KR]: `(UTC-03:00) 생피에르 미클롱`,
      [_localeEnum.DE_DE]: `(UTC-03:00) Saint-Pierre und Miquelon`,
      [_localeEnum.RU_RU]: `(UTC-03:00) Сен-Пьер и Микелон`,
      [_localeEnum.FR_FR]: `(UTC-03:00) Saint-Pierre-et-Miquelon`,
      [_localeEnum.MS_MY]: `(UTC-03:00) Saint-Pierre dan Miquelon`,
      [_localeEnum.PT_BR]: `(UTC-03:00) São Pedro e Miquelão`
    },
    value: `America/Miquelon`,
    tzNum: -3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-02:00) 格陵兰`,
      [_localeEnum.ZH_HK]: `(UTC-02:00) 格陵蘭`,
      [_localeEnum.EN_US]: `(UTC-02:00) Greenland`,
      [_localeEnum.JA_JP]: `(UTC-02:00) グリーンランド`,
      [_localeEnum.KO_KR]: `(UTC-02:00) 그린란드`,
      [_localeEnum.DE_DE]: `(UTC-02:00) Grönland`,
      [_localeEnum.RU_RU]: `(UTC-02:00) Гренландия`,
      [_localeEnum.FR_FR]: `(UTC-02:00) Groenland`,
      [_localeEnum.MS_MY]: `(UTC-02:00) Greenland`,
      [_localeEnum.PT_BR]: `(UTC-02:00) Groenlândia`
    },
    value: `America/Godthab`,
    tzNum: -2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-02:00) 协调世界时-02`,
      [_localeEnum.ZH_HK]: `(UTC-02:00) 協調世界時-02`,
      [_localeEnum.EN_US]: `(UTC-02:00) Coordinated Universal Time -02`,
      [_localeEnum.JA_JP]: `(UTC-02:00) 協定世界時-02`,
      [_localeEnum.KO_KR]: `(UTC-02:00) 협정 세계시-02`,
      [_localeEnum.DE_DE]: `(UTC-02:00) Koordinierte Weltzeit -02`,
      [_localeEnum.RU_RU]: `(UTC-02:00) Всемирное координированное время -02`,
      [_localeEnum.FR_FR]: `(UTC-02:00) Temps universel coordonné -02`,
      [_localeEnum.MS_MY]: `(UTC-02:00) Waktu Universal Selaras -02`,
      [_localeEnum.PT_BR]: `(UTC-02:00) Horário Universal Coordenado -02`
    },
    value: `Etc/GMT+2`,
    tzNum: -2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-01:00) 佛得角群岛`,
      [_localeEnum.ZH_HK]: `(UTC-01:00) 佛得角群島`,
      [_localeEnum.EN_US]: `(UTC-01:00) Cape Verde Islands`,
      [_localeEnum.JA_JP]: `(UTC-01:00) カーボベルデ諸島`,
      [_localeEnum.KO_KR]: `(UTC-01:00) 카보베르데 제도`,
      [_localeEnum.DE_DE]: `(UTC-01:00) Kapverdische Inseln`,
      [_localeEnum.RU_RU]: `(UTC-01:00) Острова Кабо-Верде`,
      [_localeEnum.FR_FR]: `(UTC-01:00) Îles du Cap-Vert`,
      [_localeEnum.MS_MY]: `(UTC-01:00) Kepulauan Cape Verde`,
      [_localeEnum.PT_BR]: `(UTC-01:00) Ilhas de Cabo Verde`
    },
    value: `Atlantic/Cape_Verde`,
    tzNum: -1
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-01:00) 亚速尔群岛`,
      [_localeEnum.ZH_HK]: `(UTC-01:00) 亞速爾群島`,
      [_localeEnum.EN_US]: `(UTC-01:00) Azores`,
      [_localeEnum.JA_JP]: `(UTC-01:00) アゾレス諸島`,
      [_localeEnum.KO_KR]: `(UTC-01:00) 아조레스 제도`,
      [_localeEnum.DE_DE]: `(UTC-01:00) Azoren`,
      [_localeEnum.RU_RU]: `(UTC-01:00) Азорские острова`,
      [_localeEnum.FR_FR]: `(UTC-01:00) Açores`,
      [_localeEnum.MS_MY]: `(UTC-01:00) Azores`,
      [_localeEnum.PT_BR]: `(UTC-01:00) Açores`
    },
    value: `Atlantic/Azores`,
    tzNum: -1
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC) 协调世界时`,
      [_localeEnum.ZH_HK]: `(UTC) 協調世界時`,
      [_localeEnum.EN_US]: `(UTC) Coordinated Universal Time`,
      [_localeEnum.JA_JP]: `(UTC) 協定世界時`,
      [_localeEnum.KO_KR]: `(UTC) 협정 세계시`,
      [_localeEnum.DE_DE]: `(UTC) Koordinierte Weltzeit`,
      [_localeEnum.RU_RU]: `(UTC) Всемирное координированное время`,
      [_localeEnum.FR_FR]: `(UTC) Temps universel coordonné`,
      [_localeEnum.MS_MY]: `(UTC) Waktu Universal Selaras`,
      [_localeEnum.PT_BR]: `(UTC) Horário Universal Coordenado`
    },
    value: `UTC`,
    tzNum: 0
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-00:00) 都柏林，爱丁堡，里斯本，伦敦`,
      [_localeEnum.ZH_HK]: `(UTC-00:00) 都柏林，愛丁堡，里斯本，倫敦`,
      [_localeEnum.EN_US]: `(UTC-00:00) Dublin, Edinburgh, Lisbon, London`,
      [_localeEnum.JA_JP]: `(UTC-00:00) ダブリン、エディンバラ、リスボン、ロンドン`,
      [_localeEnum.KO_KR]: `(UTC-00:00) 더블린, 에든버러, 리스본, 런던`,
      [_localeEnum.DE_DE]: `(UTC-00:00) Dublin, Edinburgh, Lissabon, London`,
      [_localeEnum.RU_RU]: `(UTC-00:00) Дублин, Эдинбург, Лиссабон, Лондон`,
      [_localeEnum.FR_FR]: `(UTC-00:00) Dublin, Édimbourg, Lisbonne, Londres`,
      [_localeEnum.MS_MY]: `(UTC-00:00) Dublin, Edinburgh, Lisbon, London`,
      [_localeEnum.PT_BR]: `(UTC-00:00) Dublin, Edimburgo, Lisboa, Londres`
    },
    value: `Europe/London`,
    tzNum: 0
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-00:00) 蒙罗维亚，雷克雅未克`,
      [_localeEnum.ZH_HK]: `(UTC-00:00) 蒙羅維亞，雷克雅未克`,
      [_localeEnum.EN_US]: `(UTC-00:00) Monrovia, Reykjavik`,
      [_localeEnum.JA_JP]: `(UTC-00:00) モンロビア、レイキャビク`,
      [_localeEnum.KO_KR]: `(UTC-00:00) 몬로비아, 레이캬비크`,
      [_localeEnum.DE_DE]: `(UTC-00:00) Monrovia, Reykjavík`,
      [_localeEnum.RU_RU]: `(UTC-00:00) Монровия, Рейкьявик`,
      [_localeEnum.FR_FR]: `(UTC-00:00) Monrovia, Reykjavik`,
      [_localeEnum.MS_MY]: `(UTC-00:00) Monrovia, Reykjavik`,
      [_localeEnum.PT_BR]: `(UTC-00:00) Monróvia, Reykjavik`
    },
    value: `Atlantic/Reykjavik`,
    tzNum: 0
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC-00:00) 圣多美`,
      [_localeEnum.ZH_HK]: `(UTC-00:00) 聖多美`,
      [_localeEnum.EN_US]: `(UTC-00:00) Sao Tome`,
      [_localeEnum.JA_JP]: `(UTC-00:00) サントメ`,
      [_localeEnum.KO_KR]: `(UTC-00:00) 상투메`,
      [_localeEnum.DE_DE]: `(UTC-00:00) São Tomé`,
      [_localeEnum.RU_RU]: `(UTC-00:00) Сан-Томе`,
      [_localeEnum.FR_FR]: `(UTC-00:00) São Tomé`,
      [_localeEnum.MS_MY]: `(UTC-00:00) Sao Tome`,
      [_localeEnum.PT_BR]: `(UTC-00:00) São Tomé`
    },
    value: `Africa/Sao_Tome`,
    tzNum: 0
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+01:00) 卡萨布兰卡`,
      [_localeEnum.ZH_HK]: `(UTC+01:00) 卡薩布蘭卡`,
      [_localeEnum.EN_US]: `(UTC+01:00) Casablanca`,
      [_localeEnum.JA_JP]: `(UTC+01:00) カサブランカ`,
      [_localeEnum.KO_KR]: `(UTC+01:00) 카사블랑카`,
      [_localeEnum.DE_DE]: `(UTC+01:00) Casablanca`,
      [_localeEnum.RU_RU]: `(UTC+01:00) Касабланка`,
      [_localeEnum.FR_FR]: `(UTC+01:00) Casablanca`,
      [_localeEnum.MS_MY]: `(UTC+01:00) Casablanca`,
      [_localeEnum.PT_BR]: `(UTC+01:00) Casablanca`
    },
    value: `Africa/Casablanca`,
    tzNum: 1
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+01:00) 阿姆斯特丹，柏林，伯尔尼，罗马，斯德哥尔摩，维也纳`,
      [_localeEnum.ZH_HK]: `(UTC+01:00) 阿姆斯特丹，柏林，伯恩，羅馬，斯德哥爾摩，維也納`,
      [_localeEnum.EN_US]: `(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna`,
      [_localeEnum.JA_JP]: `(UTC+01:00) アムステルダム、ベルリン、ベルン、ローマ、ストックホルム、ウィーン`,
      [_localeEnum.KO_KR]: `(UTC+01:00) 암스테르담, 베를린, 베른, 로마, 스톡홀름, 빈`,
      [_localeEnum.DE_DE]: `(UTC+01:00) Amsterdam, Berlin, Bern, Rom, Stockholm, Wien`,
      [_localeEnum.RU_RU]: `(UTC+01:00) Амстердам, Берлин, Берн, Рим, Стокгольм, Вена`,
      [_localeEnum.FR_FR]: `(UTC+01:00) Amsterdam, Berlin, Berne, Rome, Stockholm, Vienne`,
      [_localeEnum.MS_MY]: `(UTC+01:00) Amsterdam, Berlin, Bern, Rom, Stockholm, Vienna`,
      [_localeEnum.PT_BR]: `(UTC+01:00) Amsterdã, Berlim, Berna, Roma, Estocolmo, Viena`
    },
    value: `Europe/Berlin`,
    tzNum: 1
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+01:00) 贝尔格莱德，布拉迪斯拉发，布达佩斯，卢布尔雅那，布拉格`,
      [_localeEnum.ZH_HK]: `(UTC+01:00) 貝爾格萊德，布拉迪斯拉發，布達佩斯，盧布爾雅那，布拉格`,
      [_localeEnum.EN_US]: `(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague`,
      [_localeEnum.JA_JP]: `(UTC+01:00) ベオグラード、ブラチスラバ、ブダペスト、リュブリャナ、プラハ`,
      [_localeEnum.KO_KR]: `(UTC+01:00) 베오그라드, 브라티슬라바, 부다페스트, 류블랴나, 프라하`,
      [_localeEnum.DE_DE]: `(UTC+01:00) Belgrad, Bratislava, Budapest, Ljubljana, Prag`,
      [_localeEnum.RU_RU]: `(UTC+01:00) Белград, Братислава, Будапешт, Любляна, Прага`,
      [_localeEnum.FR_FR]: `(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague`,
      [_localeEnum.MS_MY]: `(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague`,
      [_localeEnum.PT_BR]: `(UTC+01:00) Belgrado, Bratislava, Budapeste, Liubliana, Praga`
    },
    value: `Europe/Budapest`,
    tzNum: 1
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+01:00) 布鲁塞尔，哥本哈根，马德里，巴黎`,
      [_localeEnum.ZH_HK]: `(UTC+01:00) 布魯塞爾，哥本哈根，馬德里，巴黎`,
      [_localeEnum.EN_US]: `(UTC+01:00) Brussels, Copenhagen, Madrid, Paris`,
      [_localeEnum.JA_JP]: `(UTC+01:00) ブリュッセル、コペンハーゲン、マドリード、パリ`,
      [_localeEnum.KO_KR]: `(UTC+01:00) 브뤼셀, 코펜하겐, 마드리드, 파리`,
      [_localeEnum.DE_DE]: `(UTC+01:00) Brüssel, Kopenhagen, Madrid, Paris`,
      [_localeEnum.RU_RU]: `(UTC+01:00) Брюссель, Копенгаген, Мадрид, Париж`,
      [_localeEnum.FR_FR]: `(UTC+01:00) Bruxelles, Copenhague, Madrid, Paris`,
      [_localeEnum.MS_MY]: `(UTC+01:00) Brussels, Copenhagen, Madrid, Paris`,
      [_localeEnum.PT_BR]: `(UTC+01:00) Bruxelas, Copenhague, Madri, Paris`
    },
    value: `Europe/Paris`,
    tzNum: 1
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+01:00) 萨拉热窝，斯科普里，华沙，萨格勒布`,
      [_localeEnum.ZH_HK]: `(UTC+01:00) 薩拉熱窩，斯科普里，華沙，薩格勒布`,
      [_localeEnum.EN_US]: `(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb`,
      [_localeEnum.JA_JP]: `(UTC+01:00) サラエボ、スコピエ、ワルシャワ、ザグレブ`,
      [_localeEnum.KO_KR]: `(UTC+01:00) 사라예보, 스코페, 바르샤바, 자그레브`,
      [_localeEnum.DE_DE]: `(UTC+01:00) Sarajevo, Skopje, Warschau, Zagreb`,
      [_localeEnum.RU_RU]: `(UTC+01:00) Сараево, Скопье, Варшава, Загреб`,
      [_localeEnum.FR_FR]: `(UTC+01:00) Sarajevo, Skopje, Varsovie, Zagreb`,
      [_localeEnum.MS_MY]: `(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb`,
      [_localeEnum.PT_BR]: `(UTC+01:00) Sarajevo, Skopje, Varsóvia, Zagreb`
    },
    value: `Europe/Warsaw`,
    tzNum: 1
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+01:00) 中非西部`,
      [_localeEnum.ZH_HK]: `(UTC+01:00) 中非西部`,
      [_localeEnum.EN_US]: `(UTC+01:00) West Central Africa`,
      [_localeEnum.JA_JP]: `(UTC+01:00) 中央アフリカ西部`,
      [_localeEnum.KO_KR]: `(UTC+01:00) 중앙아프리카 서부`,
      [_localeEnum.DE_DE]: `(UTC+01:00) Westliches Zentralafrika`,
      [_localeEnum.RU_RU]: `(UTC+01:00) Западная Центральная Африка`,
      [_localeEnum.FR_FR]: `(UTC+01:00) Afrique centrale occidentale`,
      [_localeEnum.MS_MY]: `(UTC+01:00) Afrika Tengah Barat`,
      [_localeEnum.PT_BR]: `(UTC+01:00) África Central Ocidental`
    },
    value: `Africa/Lagos`,
    tzNum: 1
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 贝鲁特`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 貝魯特`,
      [_localeEnum.EN_US]: `(UTC+02:00) Beirut`,
      [_localeEnum.JA_JP]: `(UTC+02:00) ベイルート`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 베이루트`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Beirut`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Бейрут`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Beyrouth`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Beirut`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Beirute`
    },
    value: `Asia/Beirut`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 大马士革`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 大馬士革`,
      [_localeEnum.EN_US]: `(UTC+02:00) Damascus`,
      [_localeEnum.JA_JP]: `(UTC+02:00) ダマスカス`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 다마스쿠스`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Damaskus`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Дамаск`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Damas`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Damsyik`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Damasco`
    },
    value: `Asia/Damascus`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 的黎波里`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 的黎波里`,
      [_localeEnum.EN_US]: `(UTC+02:00) Tripoli`,
      [_localeEnum.JA_JP]: `(UTC+02:00) トリポリ`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 트리폴리`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Tripolis`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Триполи`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Tripoli`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Tripoli`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Trípoli`
    },
    value: `Africa/Tripoli`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 哈拉雷，比勒陀利亚`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 哈拉雷，比勒陀利亞`,
      [_localeEnum.EN_US]: `(UTC+02:00) Harare, Pretoria`,
      [_localeEnum.JA_JP]: `(UTC+02:00) ハラレ、プレトリア`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 하라레, 프리토리아`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Harare, Pretoria`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Хараре, Претория`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Harare, Pretoria`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Harare, Pretoria`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Harare, Pretória`
    },
    value: `Africa/Johannesburg`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 赫尔辛基，基辅，里加，索菲亚，塔林，维尔纽斯`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 赫爾辛基，基輔，里加，索菲亞，塔林，維爾紐斯`,
      [_localeEnum.EN_US]: `(UTC+02:00) Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius`,
      [_localeEnum.JA_JP]: `(UTC+02:00) ヘルシンキ、キーウ、リガ、ソフィア、タリン、ビリニュス`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 헬싱키, 키이우, 리가, 소피아, 탈린, 빌뉴스`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Helsinki, Kiew, Riga, Sofia, Tallinn, Vilnius`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Хельсинки, Киев, Рига, София, Таллин, Вильнюс`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Helsinque, Kiev, Riga, Sófia, Tallinn, Vilnius`
    },
    value: `Europe/Kiev`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 基希纳乌`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 基希訥烏`,
      [_localeEnum.EN_US]: `(UTC+02:00) Chisinau`,
      [_localeEnum.JA_JP]: `(UTC+02:00) キシナウ`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 키시너우`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Chișinău`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Кишинёв`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Chișinău`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Chisinau`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Chisinau`
    },
    value: `Europe/Chisinau`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 加里宁格勒`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 加里寧格勒`,
      [_localeEnum.EN_US]: `(UTC+02:00) Kaliningrad`,
      [_localeEnum.JA_JP]: `(UTC+02:00) カリーニングラード`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 칼리닌그라드`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Kaliningrad`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Калининград`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Kaliningrad`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Kaliningrad`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Kaliningrado`
    },
    value: `Europe/Kaliningrad`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 加沙，希伯伦`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 加沙，希伯倫`,
      [_localeEnum.EN_US]: `(UTC+02:00) Gaza, Hebron`,
      [_localeEnum.JA_JP]: `(UTC+02:00) ガザ、ヘブロン`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 가자, 헤브론`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Gaza, Hebron`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Газа, Хеврон`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Gaza, Hébron`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Gaza, Hebron`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Gaza, Hebron`
    },
    value: `Asia/Hebron`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 喀土穆`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 喀土穆`,
      [_localeEnum.EN_US]: `(UTC+02:00) Khartoum`,
      [_localeEnum.JA_JP]: `(UTC+02:00) ハルツーム`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 하르툼`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Khartum`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Хартум`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Khartoum`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Khartoum`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Cartum`
    },
    value: `Africa/Khartoum`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 开罗`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 開羅`,
      [_localeEnum.EN_US]: `(UTC+02:00) Cairo`,
      [_localeEnum.JA_JP]: `(UTC+02:00) カイロ`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 카이로`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Kairo`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Каир`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Le Caire`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Kaherah`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Cairo`
    },
    value: `Africa/Cairo`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 温得和克`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 溫得和克`,
      [_localeEnum.EN_US]: `(UTC+02:00) Windhoek`,
      [_localeEnum.JA_JP]: `(UTC+02:00) ウィントフック`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 빈트후크`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Windhoek`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Виндхук`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Windhoek`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Windhoek`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Windhoek`
    },
    value: `Africa/Windhoek`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 雅典，布加勒斯特`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 雅典，布加勒斯特`,
      [_localeEnum.EN_US]: `(UTC+02:00) Athens, Bucharest`,
      [_localeEnum.JA_JP]: `(UTC+02:00) アテネ、ブカレスト`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 아테네, 부쿠레슈티`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Athen, Bukarest`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Афины, Бухарест`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Athènes, Bucarest`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Athens, Bucharest`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Atenas, Bucareste`
    },
    value: `Europe/Bucharest`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 耶路撒冷`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 耶路撒冷`,
      [_localeEnum.EN_US]: `(UTC+02:00) Jerusalem`,
      [_localeEnum.JA_JP]: `(UTC+02:00) エルサレム`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 예루살렘`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Jerusalem`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Иерусалим`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Jérusalem`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Baitulmaqdis`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Jerusalém`
    },
    value: `Asia/Jerusalem`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+02:00) 朱巴`,
      [_localeEnum.ZH_HK]: `(UTC+02:00) 朱巴`,
      [_localeEnum.EN_US]: `(UTC+02:00) Juba`,
      [_localeEnum.JA_JP]: `(UTC+02:00) ジュバ`,
      [_localeEnum.KO_KR]: `(UTC+02:00) 주바`,
      [_localeEnum.DE_DE]: `(UTC+02:00) Juba`,
      [_localeEnum.RU_RU]: `(UTC+02:00) Джуба`,
      [_localeEnum.FR_FR]: `(UTC+02:00) Djouba`,
      [_localeEnum.MS_MY]: `(UTC+02:00) Juba`,
      [_localeEnum.PT_BR]: `(UTC+02:00) Juba`
    },
    value: `Africa/Juba`,
    tzNum: 2
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+03:00) 安曼`,
      [_localeEnum.ZH_HK]: `(UTC+03:00) 安曼`,
      [_localeEnum.EN_US]: `(UTC+03:00) Amman`,
      [_localeEnum.JA_JP]: `(UTC+03:00) アンマン`,
      [_localeEnum.KO_KR]: `(UTC+03:00) 암만`,
      [_localeEnum.DE_DE]: `(UTC+03:00) Amman`,
      [_localeEnum.RU_RU]: `(UTC+03:00) Амман`,
      [_localeEnum.FR_FR]: `(UTC+03:00) Amman`,
      [_localeEnum.MS_MY]: `(UTC+03:00) Amman`,
      [_localeEnum.PT_BR]: `(UTC+03:00) Amã`
    },
    value: `Asia/Amman`,
    tzNum: 3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+03:00) 巴格达`,
      [_localeEnum.ZH_HK]: `(UTC+03:00) 巴格達`,
      [_localeEnum.EN_US]: `(UTC+03:00) Baghdad`,
      [_localeEnum.JA_JP]: `(UTC+03:00) バグダッド`,
      [_localeEnum.KO_KR]: `(UTC+03:00) 바그다드`,
      [_localeEnum.DE_DE]: `(UTC+03:00) Bagdad`,
      [_localeEnum.RU_RU]: `(UTC+03:00) Багдад`,
      [_localeEnum.FR_FR]: `(UTC+03:00) Bagdad`,
      [_localeEnum.MS_MY]: `(UTC+03:00) Baghdad`,
      [_localeEnum.PT_BR]: `(UTC+03:00) Bagdá`
    },
    value: `Asia/Baghdad`,
    tzNum: 3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+03:00) 伏尔加格勒`,
      [_localeEnum.ZH_HK]: `(UTC+03:00) 伏爾加格勒`,
      [_localeEnum.EN_US]: `(UTC+03:00) Volgograd`,
      [_localeEnum.JA_JP]: `(UTC+03:00) ボルゴグラード`,
      [_localeEnum.KO_KR]: `(UTC+03:00) 볼고그라드`,
      [_localeEnum.DE_DE]: `(UTC+03:00) Wolgograd`,
      [_localeEnum.RU_RU]: `(UTC+03:00) Волгоград`,
      [_localeEnum.FR_FR]: `(UTC+03:00) Volgograd`,
      [_localeEnum.MS_MY]: `(UTC+03:00) Volgograd`,
      [_localeEnum.PT_BR]: `(UTC+03:00) Volgogrado`
    },
    value: `Europe/Volgograd`,
    tzNum: 3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+03:00) 科威特，利雅得`,
      [_localeEnum.ZH_HK]: `(UTC+03:00) 科威特，利雅得`,
      [_localeEnum.EN_US]: `(UTC+03:00) Kuwait, Riyadh`,
      [_localeEnum.JA_JP]: `(UTC+03:00) クウェート、リヤド`,
      [_localeEnum.KO_KR]: `(UTC+03:00) 쿠웨이트, 리야드`,
      [_localeEnum.DE_DE]: `(UTC+03:00) Kuwait, Riad`,
      [_localeEnum.RU_RU]: `(UTC+03:00) Эль-Кувейт, Эр-Рияд`,
      [_localeEnum.FR_FR]: `(UTC+03:00) Koweït, Riyad`,
      [_localeEnum.MS_MY]: `(UTC+03:00) Kuwait, Riyadh`,
      [_localeEnum.PT_BR]: `(UTC+03:00) Kuwait, Riade`
    },
    value: `Asia/Riyadh`,
    tzNum: 3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+03:00) 明斯克`,
      [_localeEnum.ZH_HK]: `(UTC+03:00) 明斯克`,
      [_localeEnum.EN_US]: `(UTC+03:00) Minsk`,
      [_localeEnum.JA_JP]: `(UTC+03:00) ミンスク`,
      [_localeEnum.KO_KR]: `(UTC+03:00) 민스크`,
      [_localeEnum.DE_DE]: `(UTC+03:00) Minsk`,
      [_localeEnum.RU_RU]: `(UTC+03:00) Минск`,
      [_localeEnum.FR_FR]: `(UTC+03:00) Minsk`,
      [_localeEnum.MS_MY]: `(UTC+03:00) Minsk`,
      [_localeEnum.PT_BR]: `(UTC+03:00) Minsk`
    },
    value: `Europe/Minsk`,
    tzNum: 3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+03:00) 莫斯科，圣彼得堡`,
      [_localeEnum.ZH_HK]: `(UTC+03:00) 莫斯科，聖彼得堡`,
      [_localeEnum.EN_US]: `(UTC+03:00) Moscow, St. Petersburg`,
      [_localeEnum.JA_JP]: `(UTC+03:00) モスクワ、サンクトペテルブルク`,
      [_localeEnum.KO_KR]: `(UTC+03:00) 모스크바, 상트페테르부르크`,
      [_localeEnum.DE_DE]: `(UTC+03:00) Moskau, Sankt Petersburg`,
      [_localeEnum.RU_RU]: `(UTC+03:00) Москва, Санкт-Петербург`,
      [_localeEnum.FR_FR]: `(UTC+03:00) Moscou, Saint-Pétersbourg`,
      [_localeEnum.MS_MY]: `(UTC+03:00) Moscow, St. Petersburg`,
      [_localeEnum.PT_BR]: `(UTC+03:00) Moscou, São Petersburgo`
    },
    value: `Europe/Moscow`,
    tzNum: 3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+03:00) 内罗毕`,
      [_localeEnum.ZH_HK]: `(UTC+03:00) 內羅畢`,
      [_localeEnum.EN_US]: `(UTC+03:00) Nairobi`,
      [_localeEnum.JA_JP]: `(UTC+03:00) ナイロビ`,
      [_localeEnum.KO_KR]: `(UTC+03:00) 나이로비`,
      [_localeEnum.DE_DE]: `(UTC+03:00) Nairobi`,
      [_localeEnum.RU_RU]: `(UTC+03:00) Найроби`,
      [_localeEnum.FR_FR]: `(UTC+03:00) Nairobi`,
      [_localeEnum.MS_MY]: `(UTC+03:00) Nairobi`,
      [_localeEnum.PT_BR]: `(UTC+03:00) Nairóbi`
    },
    value: `Africa/Nairobi`,
    tzNum: 3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+03:00) 伊斯坦布尔`,
      [_localeEnum.ZH_HK]: `(UTC+03:00) 伊斯坦堡`,
      [_localeEnum.EN_US]: `(UTC+03:00) Istanbul`,
      [_localeEnum.JA_JP]: `(UTC+03:00) イスタンブール`,
      [_localeEnum.KO_KR]: `(UTC+03:00) 이스탄불`,
      [_localeEnum.DE_DE]: `(UTC+03:00) Istanbul`,
      [_localeEnum.RU_RU]: `(UTC+03:00) Стамбул`,
      [_localeEnum.FR_FR]: `(UTC+03:00) Istanbul`,
      [_localeEnum.MS_MY]: `(UTC+03:00) Istanbul`,
      [_localeEnum.PT_BR]: `(UTC+03:00) Istambul`
    },
    value: `Europe/Istanbul`,
    tzNum: 3
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+03:30) 德黑兰`,
      [_localeEnum.ZH_HK]: `(UTC+03:30) 德黑蘭`,
      [_localeEnum.EN_US]: `(UTC+03:30) Tehran`,
      [_localeEnum.JA_JP]: `(UTC+03:30) テヘラン`,
      [_localeEnum.KO_KR]: `(UTC+03:30) 테헤란`,
      [_localeEnum.DE_DE]: `(UTC+03:30) Teheran`,
      [_localeEnum.RU_RU]: `(UTC+03:30) Тегеран`,
      [_localeEnum.FR_FR]: `(UTC+03:30) Téhéran`,
      [_localeEnum.MS_MY]: `(UTC+03:30) Tehran`,
      [_localeEnum.PT_BR]: `(UTC+03:30) Teerã`
    },
    value: `Asia/Tehran`,
    tzNum: 3.5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+04:00) 阿布扎比，马斯喀特`,
      [_localeEnum.ZH_HK]: `(UTC+04:00) 阿布扎比，馬斯喀特`,
      [_localeEnum.EN_US]: `(UTC+04:00) Abu Dhabi, Muscat`,
      [_localeEnum.JA_JP]: `(UTC+04:00) アブダビ、マスカット`,
      [_localeEnum.KO_KR]: `(UTC+04:00) 아부다비, 무스카트`,
      [_localeEnum.DE_DE]: `(UTC+04:00) Abu Dhabi, Maskat`,
      [_localeEnum.RU_RU]: `(UTC+04:00) Абу-Даби, Маскат`,
      [_localeEnum.FR_FR]: `(UTC+04:00) Abou Dabi, Mascate`,
      [_localeEnum.MS_MY]: `(UTC+04:00) Abu Dhabi, Muscat`,
      [_localeEnum.PT_BR]: `(UTC+04:00) Abu Dhabi, Mascate`
    },
    value: `Asia/Dubai`,
    tzNum: 4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+04:00) 阿斯特拉罕，乌里扬诺夫斯克`,
      [_localeEnum.ZH_HK]: `(UTC+04:00) 阿斯特拉罕，烏里揚諾夫斯克`,
      [_localeEnum.EN_US]: `(UTC+04:00) Astrakhan, Ulyanovsk`,
      [_localeEnum.JA_JP]: `(UTC+04:00) アストラハン、ウリヤノフスク`,
      [_localeEnum.KO_KR]: `(UTC+04:00) 아스트라한, 울리야놉스크`,
      [_localeEnum.DE_DE]: `(UTC+04:00) Astrachan, Uljanowsk`,
      [_localeEnum.RU_RU]: `(UTC+04:00) Астрахань, Ульяновск`,
      [_localeEnum.FR_FR]: `(UTC+04:00) Astrakhan, Oulianovsk`,
      [_localeEnum.MS_MY]: `(UTC+04:00) Astrakhan, Ulyanovsk`,
      [_localeEnum.PT_BR]: `(UTC+04:00) Astracã, Ulianovsk`
    },
    value: `Europe/Astrakhan`,
    tzNum: 4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+04:00) 埃里温`,
      [_localeEnum.ZH_HK]: `(UTC+04:00) 葉里溫`,
      [_localeEnum.EN_US]: `(UTC+04:00) Yerevan`,
      [_localeEnum.JA_JP]: `(UTC+04:00) エレバン`,
      [_localeEnum.KO_KR]: `(UTC+04:00) 예레반`,
      [_localeEnum.DE_DE]: `(UTC+04:00) Jerewan`,
      [_localeEnum.RU_RU]: `(UTC+04:00) Ереван`,
      [_localeEnum.FR_FR]: `(UTC+04:00) Erevan`,
      [_localeEnum.MS_MY]: `(UTC+04:00) Yerevan`,
      [_localeEnum.PT_BR]: `(UTC+04:00) Yerevan`
    },
    value: `Asia/Yerevan`,
    tzNum: 4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+04:00) 巴库`,
      [_localeEnum.ZH_HK]: `(UTC+04:00) 巴庫`,
      [_localeEnum.EN_US]: `(UTC+04:00) Baku`,
      [_localeEnum.JA_JP]: `(UTC+04:00) バクー`,
      [_localeEnum.KO_KR]: `(UTC+04:00) 바쿠`,
      [_localeEnum.DE_DE]: `(UTC+04:00) Baku`,
      [_localeEnum.RU_RU]: `(UTC+04:00) Баку`,
      [_localeEnum.FR_FR]: `(UTC+04:00) Bakou`,
      [_localeEnum.MS_MY]: `(UTC+04:00) Baku`,
      [_localeEnum.PT_BR]: `(UTC+04:00) Baku`
    },
    value: `Asia/Baku`,
    tzNum: 4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+04:00) 第比利斯`,
      [_localeEnum.ZH_HK]: `(UTC+04:00) 第比利斯`,
      [_localeEnum.EN_US]: `(UTC+04:00) Tbilisi`,
      [_localeEnum.JA_JP]: `(UTC+04:00) トビリシ`,
      [_localeEnum.KO_KR]: `(UTC+04:00) 트빌리시`,
      [_localeEnum.DE_DE]: `(UTC+04:00) Tiflis`,
      [_localeEnum.RU_RU]: `(UTC+04:00) Тбилиси`,
      [_localeEnum.FR_FR]: `(UTC+04:00) Tbilissi`,
      [_localeEnum.MS_MY]: `(UTC+04:00) Tbilisi`,
      [_localeEnum.PT_BR]: `(UTC+04:00) Tbilisi`
    },
    value: `Asia/Tbilisi`,
    tzNum: 4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+04:00) 路易港`,
      [_localeEnum.ZH_HK]: `(UTC+04:00) 路易港`,
      [_localeEnum.EN_US]: `(UTC+04:00) Port Louis`,
      [_localeEnum.JA_JP]: `(UTC+04:00) ポートルイス`,
      [_localeEnum.KO_KR]: `(UTC+04:00) 포트루이스`,
      [_localeEnum.DE_DE]: `(UTC+04:00) Port Louis`,
      [_localeEnum.RU_RU]: `(UTC+04:00) Порт-Луи`,
      [_localeEnum.FR_FR]: `(UTC+04:00) Port-Louis`,
      [_localeEnum.MS_MY]: `(UTC+04:00) Port Louis`,
      [_localeEnum.PT_BR]: `(UTC+04:00) Port Louis`
    },
    value: `Indian/Mauritius`,
    tzNum: 4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+04:00) 萨拉托夫`,
      [_localeEnum.ZH_HK]: `(UTC+04:00) 薩拉托夫`,
      [_localeEnum.EN_US]: `(UTC+04:00) Saratov`,
      [_localeEnum.JA_JP]: `(UTC+04:00) サラトフ`,
      [_localeEnum.KO_KR]: `(UTC+04:00) 사라토프`,
      [_localeEnum.DE_DE]: `(UTC+04:00) Saratow`,
      [_localeEnum.RU_RU]: `(UTC+04:00) Саратов`,
      [_localeEnum.FR_FR]: `(UTC+04:00) Saratov`,
      [_localeEnum.MS_MY]: `(UTC+04:00) Saratov`,
      [_localeEnum.PT_BR]: `(UTC+04:00) Saratov`
    },
    value: `Europe/Saratov`,
    tzNum: 4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+04:00) 伊热夫斯克，萨马拉`,
      [_localeEnum.ZH_HK]: `(UTC+04:00) 伊熱夫斯克，薩馬拉`,
      [_localeEnum.EN_US]: `(UTC+04:00) Izhevsk, Samara`,
      [_localeEnum.JA_JP]: `(UTC+04:00) イジェフスク、サマラ`,
      [_localeEnum.KO_KR]: `(UTC+04:00) 이제프스크, 사마라`,
      [_localeEnum.DE_DE]: `(UTC+04:00) Ischewsk, Samara`,
      [_localeEnum.RU_RU]: `(UTC+04:00) Ижевск, Самара`,
      [_localeEnum.FR_FR]: `(UTC+04:00) Ijevsk, Samara`,
      [_localeEnum.MS_MY]: `(UTC+04:00) Izhevsk, Samara`,
      [_localeEnum.PT_BR]: `(UTC+04:00) Izhevsk, Samara`
    },
    value: `Europe/Samara`,
    tzNum: 4
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+04:30) 喀布尔`,
      [_localeEnum.ZH_HK]: `(UTC+04:30) 喀布爾`,
      [_localeEnum.EN_US]: `(UTC+04:30) Kabul`,
      [_localeEnum.JA_JP]: `(UTC+04:30) カブール`,
      [_localeEnum.KO_KR]: `(UTC+04:30) 카불`,
      [_localeEnum.DE_DE]: `(UTC+04:30) Kabul`,
      [_localeEnum.RU_RU]: `(UTC+04:30) Кабул`,
      [_localeEnum.FR_FR]: `(UTC+04:30) Kaboul`,
      [_localeEnum.MS_MY]: `(UTC+04:30) Kabul`,
      [_localeEnum.PT_BR]: `(UTC+04:30) Cabul`
    },
    value: `Asia/Kabul`,
    tzNum: 4.5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+05:00) 阿什哈巴德，塔什干`,
      [_localeEnum.ZH_HK]: `(UTC+05:00) 阿什哈巴德，塔什干`,
      [_localeEnum.EN_US]: `(UTC+05:00) Ashgabat, Tashkent`,
      [_localeEnum.JA_JP]: `(UTC+05:00) アシガバート、タシュケント`,
      [_localeEnum.KO_KR]: `(UTC+05:00) 아시가바트, 타슈켄트`,
      [_localeEnum.DE_DE]: `(UTC+05:00) Aschgabat, Taschkent`,
      [_localeEnum.RU_RU]: `(UTC+05:00) Ашхабад, Ташкент`,
      [_localeEnum.FR_FR]: `(UTC+05:00) Achgabat, Tachkent`,
      [_localeEnum.MS_MY]: `(UTC+05:00) Ashgabat, Tashkent`,
      [_localeEnum.PT_BR]: `(UTC+05:00) Asgabate, Tashkent`
    },
    value: `Asia/Tashkent`,
    tzNum: 5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+05:00) 克孜洛尔达`,
      [_localeEnum.ZH_HK]: `(UTC+05:00) 克孜洛爾達`,
      [_localeEnum.EN_US]: `(UTC+05:00) Kyzylorda`,
      [_localeEnum.JA_JP]: `(UTC+05:00) クズロルダ`,
      [_localeEnum.KO_KR]: `(UTC+05:00) 크즐오르다`,
      [_localeEnum.DE_DE]: `(UTC+05:00) Qysylorda`,
      [_localeEnum.RU_RU]: `(UTC+05:00) Кызылорда`,
      [_localeEnum.FR_FR]: `(UTC+05:00) Kyzylorda`,
      [_localeEnum.MS_MY]: `(UTC+05:00) Kyzylorda`,
      [_localeEnum.PT_BR]: `(UTC+05:00) Kyzylorda`
    },
    value: `Asia/Qyzylorda`,
    tzNum: 5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+05:00) 叶卡捷琳堡`,
      [_localeEnum.ZH_HK]: `(UTC+05:00) 葉卡捷琳堡`,
      [_localeEnum.EN_US]: `(UTC+05:00) Yekaterinburg`,
      [_localeEnum.JA_JP]: `(UTC+05:00) エカテリンブルク`,
      [_localeEnum.KO_KR]: `(UTC+05:00) 예카테린부르크`,
      [_localeEnum.DE_DE]: `(UTC+05:00) Jekaterinburg`,
      [_localeEnum.RU_RU]: `(UTC+05:00) Екатеринбург`,
      [_localeEnum.FR_FR]: `(UTC+05:00) Ekaterinbourg`,
      [_localeEnum.MS_MY]: `(UTC+05:00) Yekaterinburg`,
      [_localeEnum.PT_BR]: `(UTC+05:00) Ecaterimburgo`
    },
    value: `Asia/Yekaterinburg`,
    tzNum: 5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+05:00) 伊斯兰堡，卡拉奇`,
      [_localeEnum.ZH_HK]: `(UTC+05:00) 伊斯蘭堡，卡拉奇`,
      [_localeEnum.EN_US]: `(UTC+05:00) Islamabad, Karachi`,
      [_localeEnum.JA_JP]: `(UTC+05:00) イスラマバード、カラチ`,
      [_localeEnum.KO_KR]: `(UTC+05:00) 이슬라마바드, 카라치`,
      [_localeEnum.DE_DE]: `(UTC+05:00) Islamabad, Karatschi`,
      [_localeEnum.RU_RU]: `(UTC+05:00) Исламабад, Карачи`,
      [_localeEnum.FR_FR]: `(UTC+05:00) Islamabad, Karachi`,
      [_localeEnum.MS_MY]: `(UTC+05:00) Islamabad, Karachi`,
      [_localeEnum.PT_BR]: `(UTC+05:00) Islamabad, Karachi`
    },
    value: `Asia/Karachi`,
    tzNum: 5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+05:30) 钦奈，加尔各答，孟买，新德里`,
      [_localeEnum.ZH_HK]: `(UTC+05:30) 欽奈，加爾各答，孟買，新德里`,
      [_localeEnum.EN_US]: `(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi`,
      [_localeEnum.JA_JP]: `(UTC+05:30) チェンナイ、コルカタ、ムンバイ、ニューデリー`,
      [_localeEnum.KO_KR]: `(UTC+05:30) 첸나이, 콜카타, 뭄바이, 뉴델리`,
      [_localeEnum.DE_DE]: `(UTC+05:30) Chennai, Kalkutta, Mumbai, Neu-Delhi`,
      [_localeEnum.RU_RU]: `(UTC+05:30) Ченнаи, Колката, Мумбаи, Нью-Дели`,
      [_localeEnum.FR_FR]: `(UTC+05:30) Chennai, Calcutta, Mumbai, New Delhi`,
      [_localeEnum.MS_MY]: `(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi`,
      [_localeEnum.PT_BR]: `(UTC+05:30) Chennai, Calcutá, Mumbai, Nova Deli`
    },
    value: `Asia/Calcutta`,
    tzNum: 5.5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+05:30) 斯里加亚渥登普拉`,
      [_localeEnum.ZH_HK]: `(UTC+05:30) 斯里賈亞渥登普拉`,
      [_localeEnum.EN_US]: `(UTC+05:30) Sri Jayawardenepura`,
      [_localeEnum.JA_JP]: `(UTC+05:30) スリジャヤワルダナプラ`,
      [_localeEnum.KO_KR]: `(UTC+05:30) 스리자야와르데네푸라`,
      [_localeEnum.DE_DE]: `(UTC+05:30) Sri Jayawardenepura`,
      [_localeEnum.RU_RU]: `(UTC+05:30) Шри-Джаяварденепура`,
      [_localeEnum.FR_FR]: `(UTC+05:30) Sri Jayawardenepura`,
      [_localeEnum.MS_MY]: `(UTC+05:30) Sri Jayawardenepura`,
      [_localeEnum.PT_BR]: `(UTC+05:30) Sri Jayawardenepura`
    },
    value: `Asia/Colombo`,
    tzNum: 5.5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+05:45) 加德满都`,
      [_localeEnum.ZH_HK]: `(UTC+05:45) 加德滿都`,
      [_localeEnum.EN_US]: `(UTC+05:45) Kathmandu`,
      [_localeEnum.JA_JP]: `(UTC+05:45) カトマンズ`,
      [_localeEnum.KO_KR]: `(UTC+05:45) 카트만두`,
      [_localeEnum.DE_DE]: `(UTC+05:45) Kathmandu`,
      [_localeEnum.RU_RU]: `(UTC+05:45) Катманду`,
      [_localeEnum.FR_FR]: `(UTC+05:45) Katmandou`,
      [_localeEnum.MS_MY]: `(UTC+05:45) Kathmandu`,
      [_localeEnum.PT_BR]: `(UTC+05:45) Catmandu`
    },
    value: `Asia/Katmandu`,
    tzNum: 5.75
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+06:00) 阿斯塔纳`,
      [_localeEnum.ZH_HK]: `(UTC+06:00) 阿斯塔納`,
      [_localeEnum.EN_US]: `(UTC+06:00) Astana`,
      [_localeEnum.JA_JP]: `(UTC+06:00) アスタナ`,
      [_localeEnum.KO_KR]: `(UTC+06:00) 아스타나`,
      [_localeEnum.DE_DE]: `(UTC+06:00) Astana`,
      [_localeEnum.RU_RU]: `(UTC+06:00) Астана`,
      [_localeEnum.FR_FR]: `(UTC+06:00) Astana`,
      [_localeEnum.MS_MY]: `(UTC+06:00) Astana`,
      [_localeEnum.PT_BR]: `(UTC+06:00) Astana`
    },
    value: `Asia/Urumqi`,
    tzNum: 6
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+06:00) 达卡`,
      [_localeEnum.ZH_HK]: `(UTC+06:00) 達卡`,
      [_localeEnum.EN_US]: `(UTC+06:00) Dhaka`,
      [_localeEnum.JA_JP]: `(UTC+06:00) ダッカ`,
      [_localeEnum.KO_KR]: `(UTC+06:00) 다카`,
      [_localeEnum.DE_DE]: `(UTC+06:00) Dhaka`,
      [_localeEnum.RU_RU]: `(UTC+06:00) Дакка`,
      [_localeEnum.FR_FR]: `(UTC+06:00) Dacca`,
      [_localeEnum.MS_MY]: `(UTC+06:00) Dhaka`,
      [_localeEnum.PT_BR]: `(UTC+06:00) Daca`
    },
    value: `Asia/Dhaka`,
    tzNum: 6
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+06:00) 鄂木斯克`,
      [_localeEnum.ZH_HK]: `(UTC+06:00) 鄂木斯克`,
      [_localeEnum.EN_US]: `(UTC+06:00) Omsk`,
      [_localeEnum.JA_JP]: `(UTC+06:00) オムスク`,
      [_localeEnum.KO_KR]: `(UTC+06:00) 옴스크`,
      [_localeEnum.DE_DE]: `(UTC+06:00) Omsk`,
      [_localeEnum.RU_RU]: `(UTC+06:00) Омск`,
      [_localeEnum.FR_FR]: `(UTC+06:00) Omsk`,
      [_localeEnum.MS_MY]: `(UTC+06:00) Omsk`,
      [_localeEnum.PT_BR]: `(UTC+06:00) Omsk`
    },
    value: `Asia/Omsk`,
    tzNum: 6
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+06:30) 仰光`,
      [_localeEnum.ZH_HK]: `(UTC+06:30) 仰光`,
      [_localeEnum.EN_US]: `(UTC+06:30) Yangon`,
      [_localeEnum.JA_JP]: `(UTC+06:30) ヤンゴン`,
      [_localeEnum.KO_KR]: `(UTC+06:30) 양곤`,
      [_localeEnum.DE_DE]: `(UTC+06:30) Yangon`,
      [_localeEnum.RU_RU]: `(UTC+06:30) Янгон`,
      [_localeEnum.FR_FR]: `(UTC+06:30) Rangoun`,
      [_localeEnum.MS_MY]: `(UTC+06:30) Yangon`,
      [_localeEnum.PT_BR]: `(UTC+06:30) Yangon`
    },
    value: `Asia/Rangoon`,
    tzNum: 6.5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+07:00) 巴尔瑙尔，戈尔诺-阿尔泰斯克`,
      [_localeEnum.ZH_HK]: `(UTC+07:00) 巴爾瑙爾，戈爾諾-阿爾泰斯克`,
      [_localeEnum.EN_US]: `(UTC+07:00) Barnaul, Gorno-Altaysk`,
      [_localeEnum.JA_JP]: `(UTC+07:00) バルナウル、ゴルノ・アルタイスク`,
      [_localeEnum.KO_KR]: `(UTC+07:00) 바르나울, 고르노알타이스크`,
      [_localeEnum.DE_DE]: `(UTC+07:00) Barnaul, Gorno-Altaisk`,
      [_localeEnum.RU_RU]: `(UTC+07:00) Барнаул, Горно-Алтайск`,
      [_localeEnum.FR_FR]: `(UTC+07:00) Barnaoul, Gorno-Altaïsk`,
      [_localeEnum.MS_MY]: `(UTC+07:00) Barnaul, Gorno-Altaysk`,
      [_localeEnum.PT_BR]: `(UTC+07:00) Barnaul, Gorno-Altaisk`
    },
    value: `Asia/Barnaul`,
    tzNum: 7
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+07:00) 科布多`,
      [_localeEnum.ZH_HK]: `(UTC+07:00) 科布多`,
      [_localeEnum.EN_US]: `(UTC+07:00) Khovd`,
      [_localeEnum.JA_JP]: `(UTC+07:00) ホブド`,
      [_localeEnum.KO_KR]: `(UTC+07:00) 홉드`,
      [_localeEnum.DE_DE]: `(UTC+07:00) Chovd`,
      [_localeEnum.RU_RU]: `(UTC+07:00) Ховд`,
      [_localeEnum.FR_FR]: `(UTC+07:00) Hovd`,
      [_localeEnum.MS_MY]: `(UTC+07:00) Khovd`,
      [_localeEnum.PT_BR]: `(UTC+07:00) Khovd`
    },
    value: `Asia/Hovd`,
    tzNum: 7
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+07:00) 克拉斯诺亚尔斯克`,
      [_localeEnum.ZH_HK]: `(UTC+07:00) 克拉斯諾亞爾斯克`,
      [_localeEnum.EN_US]: `(UTC+07:00) Krasnoyarsk`,
      [_localeEnum.JA_JP]: `(UTC+07:00) クラスノヤルスク`,
      [_localeEnum.KO_KR]: `(UTC+07:00) 크라스노야르스크`,
      [_localeEnum.DE_DE]: `(UTC+07:00) Krasnojarsk`,
      [_localeEnum.RU_RU]: `(UTC+07:00) Красноярск`,
      [_localeEnum.FR_FR]: `(UTC+07:00) Krasnoïarsk`,
      [_localeEnum.MS_MY]: `(UTC+07:00) Krasnoyarsk`,
      [_localeEnum.PT_BR]: `(UTC+07:00) Krasnoyarsk`
    },
    value: `Asia/Krasnoyarsk`,
    tzNum: 7
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+07:00) 曼谷，河内，雅加达`,
      [_localeEnum.ZH_HK]: `(UTC+07:00) 曼谷，河內，雅加達`,
      [_localeEnum.EN_US]: `(UTC+07:00) Bangkok, Hanoi, Jakarta`,
      [_localeEnum.JA_JP]: `(UTC+07:00) バンコク、ハノイ、ジャカルタ`,
      [_localeEnum.KO_KR]: `(UTC+07:00) 방콕, 하노이, 자카르타`,
      [_localeEnum.DE_DE]: `(UTC+07:00) Bangkok, Hanoi, Jakarta`,
      [_localeEnum.RU_RU]: `(UTC+07:00) Бангкок, Ханой, Джакарта`,
      [_localeEnum.FR_FR]: `(UTC+07:00) Bangkok, Hanoï, Jakarta`,
      [_localeEnum.MS_MY]: `(UTC+07:00) Bangkok, Hanoi, Jakarta`,
      [_localeEnum.PT_BR]: `(UTC+07:00) Bangkok, Hanói, Jacarta`
    },
    value: `Asia/Bangkok`,
    tzNum: 7
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+07:00) 托木斯克`,
      [_localeEnum.ZH_HK]: `(UTC+07:00) 托木斯克`,
      [_localeEnum.EN_US]: `(UTC+07:00) Tomsk`,
      [_localeEnum.JA_JP]: `(UTC+07:00) トムスク`,
      [_localeEnum.KO_KR]: `(UTC+07:00) 톰스크`,
      [_localeEnum.DE_DE]: `(UTC+07:00) Tomsk`,
      [_localeEnum.RU_RU]: `(UTC+07:00) Томск`,
      [_localeEnum.FR_FR]: `(UTC+07:00) Tomsk`,
      [_localeEnum.MS_MY]: `(UTC+07:00) Tomsk`,
      [_localeEnum.PT_BR]: `(UTC+07:00) Tomsk`
    },
    value: `Asia/Tomsk`,
    tzNum: 7
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+07:00) 新西伯利亚`,
      [_localeEnum.ZH_HK]: `(UTC+07:00) 新西伯利亞`,
      [_localeEnum.EN_US]: `(UTC+07:00) Novosibirsk`,
      [_localeEnum.JA_JP]: `(UTC+07:00) ノヴォシビルスク`,
      [_localeEnum.KO_KR]: `(UTC+07:00) 노보시비르스크`,
      [_localeEnum.DE_DE]: `(UTC+07:00) Nowosibirsk`,
      [_localeEnum.RU_RU]: `(UTC+07:00) Новосибирск`,
      [_localeEnum.FR_FR]: `(UTC+07:00) Novossibirsk`,
      [_localeEnum.MS_MY]: `(UTC+07:00) Novosibirsk`,
      [_localeEnum.PT_BR]: `(UTC+07:00) Novosibirsk`
    },
    value: `Asia/Novosibirsk`,
    tzNum: 7
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+08:00) 北京，重庆，香港特别行政区，乌鲁木齐`,
      [_localeEnum.ZH_HK]: `(UTC+08:00) 北京，重慶，香港特別行政區，烏魯木齊`,
      [_localeEnum.EN_US]: `(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi`,
      [_localeEnum.JA_JP]: `(UTC+08:00) 北京、重慶、香港、ウルムチ`,
      [_localeEnum.KO_KR]: `(UTC+08:00) 베이징, 충칭, 홍콩, 우루무치`,
      [_localeEnum.DE_DE]: `(UTC+08:00) Peking, Chongqing, Hongkong, Ürümqi`,
      [_localeEnum.RU_RU]: `(UTC+08:00) Пекин, Чунцин, Гонконг, Урумчи`,
      [_localeEnum.FR_FR]: `(UTC+08:00) Pékin, Chongqing, Hong Kong, Ürümqi`,
      [_localeEnum.MS_MY]: `(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi`,
      [_localeEnum.PT_BR]: `(UTC+08:00) Pequim, Chongqing, Hong Kong, Ürümqi`
    },
    value: `Asia/Shanghai`,
    tzNum: 8
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+08:00) 吉隆坡，新加坡`,
      [_localeEnum.ZH_HK]: `(UTC+08:00) 吉隆坡，新加坡`,
      [_localeEnum.EN_US]: `(UTC+08:00) Kuala Lumpur, Singapore`,
      [_localeEnum.JA_JP]: `(UTC+08:00) クアラルンプール、シンガポール`,
      [_localeEnum.KO_KR]: `(UTC+08:00) 쿠알라룸푸르, 싱가포르`,
      [_localeEnum.DE_DE]: `(UTC+08:00) Kuala Lumpur, Singapur`,
      [_localeEnum.RU_RU]: `(UTC+08:00) Куала-Лумпур, Сингапур`,
      [_localeEnum.FR_FR]: `(UTC+08:00) Kuala Lumpur, Singapour`,
      [_localeEnum.MS_MY]: `(UTC+08:00) Kuala Lumpur, Singapura`,
      [_localeEnum.PT_BR]: `(UTC+08:00) Kuala Lumpur, Singapura`
    },
    value: `Asia/Singapore`,
    tzNum: 8
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+08:00) 珀斯`,
      [_localeEnum.ZH_HK]: `(UTC+08:00) 珀斯`,
      [_localeEnum.EN_US]: `(UTC+08:00) Perth`,
      [_localeEnum.JA_JP]: `(UTC+08:00) パース`,
      [_localeEnum.KO_KR]: `(UTC+08:00) 퍼스`,
      [_localeEnum.DE_DE]: `(UTC+08:00) Perth`,
      [_localeEnum.RU_RU]: `(UTC+08:00) Перт`,
      [_localeEnum.FR_FR]: `(UTC+08:00) Perth`,
      [_localeEnum.MS_MY]: `(UTC+08:00) Perth`,
      [_localeEnum.PT_BR]: `(UTC+08:00) Perth`
    },
    value: `Australia/Perth`,
    tzNum: 8
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+08:00) 台北`,
      [_localeEnum.ZH_HK]: `(UTC+08:00) 台北`,
      [_localeEnum.EN_US]: `(UTC+08:00) Taipei`,
      [_localeEnum.JA_JP]: `(UTC+08:00) 台北`,
      [_localeEnum.KO_KR]: `(UTC+08:00) 타이베이`,
      [_localeEnum.DE_DE]: `(UTC+08:00) Taipeh`,
      [_localeEnum.RU_RU]: `(UTC+08:00) Тайбэй`,
      [_localeEnum.FR_FR]: `(UTC+08:00) Taipei`,
      [_localeEnum.MS_MY]: `(UTC+08:00) Taipei`,
      [_localeEnum.PT_BR]: `(UTC+08:00) Taipei`
    },
    value: `Asia/Taipei`,
    tzNum: 8
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+08:00) 乌兰巴托`,
      [_localeEnum.ZH_HK]: `(UTC+08:00) 烏蘭巴托`,
      [_localeEnum.EN_US]: `(UTC+08:00) Ulaanbaatar`,
      [_localeEnum.JA_JP]: `(UTC+08:00) ウランバートル`,
      [_localeEnum.KO_KR]: `(UTC+08:00) 울란바토르`,
      [_localeEnum.DE_DE]: `(UTC+08:00) Ulaanbaatar`,
      [_localeEnum.RU_RU]: `(UTC+08:00) Улан-Батор`,
      [_localeEnum.FR_FR]: `(UTC+08:00) Oulan-Bator`,
      [_localeEnum.MS_MY]: `(UTC+08:00) Ulaanbaatar`,
      [_localeEnum.PT_BR]: `(UTC+08:00) Ulan Bator`
    },
    value: `Asia/Ulaanbaatar`,
    tzNum: 8
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+08:00) 伊尔库茨克`,
      [_localeEnum.ZH_HK]: `(UTC+08:00) 伊爾庫茨克`,
      [_localeEnum.EN_US]: `(UTC+08:00) Irkutsk`,
      [_localeEnum.JA_JP]: `(UTC+08:00) イルクーツク`,
      [_localeEnum.KO_KR]: `(UTC+08:00) 이르쿠츠크`,
      [_localeEnum.DE_DE]: `(UTC+08:00) Irkutsk`,
      [_localeEnum.RU_RU]: `(UTC+08:00) Иркутск`,
      [_localeEnum.FR_FR]: `(UTC+08:00) Irkoutsk`,
      [_localeEnum.MS_MY]: `(UTC+08:00) Irkutsk`,
      [_localeEnum.PT_BR]: `(UTC+08:00) Irkutsk`
    },
    value: `Asia/Irkutsk`,
    tzNum: 8
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+08:45) 尤克拉`,
      [_localeEnum.ZH_HK]: `(UTC+08:45) 尤克拉`,
      [_localeEnum.EN_US]: `(UTC+08:45) Eucla`,
      [_localeEnum.JA_JP]: `(UTC+08:45) ユークラ`,
      [_localeEnum.KO_KR]: `(UTC+08:45) 유클라`,
      [_localeEnum.DE_DE]: `(UTC+08:45) Eucla`,
      [_localeEnum.RU_RU]: `(UTC+08:45) Юкла`,
      [_localeEnum.FR_FR]: `(UTC+08:45) Eucla`,
      [_localeEnum.MS_MY]: `(UTC+08:45) Eucla`,
      [_localeEnum.PT_BR]: `(UTC+08:45) Eucla`
    },
    value: `Australia/Eucla`,
    tzNum: 8.75
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+09:00) 赤塔市`,
      [_localeEnum.ZH_HK]: `(UTC+09:00) 赤塔市`,
      [_localeEnum.EN_US]: `(UTC+09:00) Chita`,
      [_localeEnum.JA_JP]: `(UTC+09:00) チタ`,
      [_localeEnum.KO_KR]: `(UTC+09:00) 치타`,
      [_localeEnum.DE_DE]: `(UTC+09:00) Tschita`,
      [_localeEnum.RU_RU]: `(UTC+09:00) Чита`,
      [_localeEnum.FR_FR]: `(UTC+09:00) Tchita`,
      [_localeEnum.MS_MY]: `(UTC+09:00) Chita`,
      [_localeEnum.PT_BR]: `(UTC+09:00) Chita`
    },
    value: `Asia/Chita`,
    tzNum: 9
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+09:00) 大阪，札幌，东京`,
      [_localeEnum.ZH_HK]: `(UTC+09:00) 大阪，札幌，東京`,
      [_localeEnum.EN_US]: `(UTC+09:00) Osaka, Sapporo, Tokyo`,
      [_localeEnum.JA_JP]: `(UTC+09:00) 大阪、札幌、東京`,
      [_localeEnum.KO_KR]: `(UTC+09:00) 오사카, 삿포로, 도쿄`,
      [_localeEnum.DE_DE]: `(UTC+09:00) Osaka, Sapporo, Tokio`,
      [_localeEnum.RU_RU]: `(UTC+09:00) Осака, Саппоро, Токио`,
      [_localeEnum.FR_FR]: `(UTC+09:00) Osaka, Sapporo, Tokyo`,
      [_localeEnum.MS_MY]: `(UTC+09:00) Osaka, Sapporo, Tokyo`,
      [_localeEnum.PT_BR]: `(UTC+09:00) Osaka, Sapporo, Tóquio`
    },
    value: `Asia/Tokyo`,
    tzNum: 9
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+09:00) 平壤`,
      [_localeEnum.ZH_HK]: `(UTC+09:00) 平壤`,
      [_localeEnum.EN_US]: `(UTC+09:00) Pyongyang`,
      [_localeEnum.JA_JP]: `(UTC+09:00) 平壌`,
      [_localeEnum.KO_KR]: `(UTC+09:00) 평양`,
      [_localeEnum.DE_DE]: `(UTC+09:00) Pjöngjang`,
      [_localeEnum.RU_RU]: `(UTC+09:00) Пхеньян`,
      [_localeEnum.FR_FR]: `(UTC+09:00) Pyongyang`,
      [_localeEnum.MS_MY]: `(UTC+09:00) Pyongyang`,
      [_localeEnum.PT_BR]: `(UTC+09:00) Pyongyang`
    },
    value: `Asia/Pyongyang`,
    tzNum: 9
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+09:00) 首尔`,
      [_localeEnum.ZH_HK]: `(UTC+09:00) 首爾`,
      [_localeEnum.EN_US]: `(UTC+09:00) Seoul`,
      [_localeEnum.JA_JP]: `(UTC+09:00) ソウル`,
      [_localeEnum.KO_KR]: `(UTC+09:00) 서울`,
      [_localeEnum.DE_DE]: `(UTC+09:00) Seoul`,
      [_localeEnum.RU_RU]: `(UTC+09:00) Сеул`,
      [_localeEnum.FR_FR]: `(UTC+09:00) Séoul`,
      [_localeEnum.MS_MY]: `(UTC+09:00) Seoul`,
      [_localeEnum.PT_BR]: `(UTC+09:00) Seul`
    },
    value: `Asia/Seoul`,
    tzNum: 9
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+09:00) 雅库茨克`,
      [_localeEnum.ZH_HK]: `(UTC+09:00) 雅庫茨克`,
      [_localeEnum.EN_US]: `(UTC+09:00) Yakutsk`,
      [_localeEnum.JA_JP]: `(UTC+09:00) ヤクーツク`,
      [_localeEnum.KO_KR]: `(UTC+09:00) 야쿠츠크`,
      [_localeEnum.DE_DE]: `(UTC+09:00) Jakutsk`,
      [_localeEnum.RU_RU]: `(UTC+09:00) Якутск`,
      [_localeEnum.FR_FR]: `(UTC+09:00) Iakoutsk`,
      [_localeEnum.MS_MY]: `(UTC+09:00) Yakutsk`,
      [_localeEnum.PT_BR]: `(UTC+09:00) Yakutsk`
    },
    value: `Asia/Yakutsk`,
    tzNum: 9
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+09:30) 阿德莱德`,
      [_localeEnum.ZH_HK]: `(UTC+09:30) 阿德萊德`,
      [_localeEnum.EN_US]: `(UTC+09:30) Adelaide`,
      [_localeEnum.JA_JP]: `(UTC+09:30) アデレード`,
      [_localeEnum.KO_KR]: `(UTC+09:30) 애들레이드`,
      [_localeEnum.DE_DE]: `(UTC+09:30) Adelaide`,
      [_localeEnum.RU_RU]: `(UTC+09:30) Аделаида`,
      [_localeEnum.FR_FR]: `(UTC+09:30) Adélaïde`,
      [_localeEnum.MS_MY]: `(UTC+09:30) Adelaide`,
      [_localeEnum.PT_BR]: `(UTC+09:30) Adelaide`
    },
    value: `Australia/Adelaide`,
    tzNum: 9.5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+09:30) 达尔文`,
      [_localeEnum.ZH_HK]: `(UTC+09:30) 達爾文`,
      [_localeEnum.EN_US]: `(UTC+09:30) Darwin`,
      [_localeEnum.JA_JP]: `(UTC+09:30) ダーウィン`,
      [_localeEnum.KO_KR]: `(UTC+09:30) 다윈`,
      [_localeEnum.DE_DE]: `(UTC+09:30) Darwin`,
      [_localeEnum.RU_RU]: `(UTC+09:30) Дарвин`,
      [_localeEnum.FR_FR]: `(UTC+09:30) Darwin`,
      [_localeEnum.MS_MY]: `(UTC+09:30) Darwin`,
      [_localeEnum.PT_BR]: `(UTC+09:30) Darwin`
    },
    value: `Australia/Darwin`,
    tzNum: 9.5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+10:00) 布里斯班`,
      [_localeEnum.ZH_HK]: `(UTC+10:00) 布里斯班`,
      [_localeEnum.EN_US]: `(UTC+10:00) Brisbane`,
      [_localeEnum.JA_JP]: `(UTC+10:00) ブリスベン`,
      [_localeEnum.KO_KR]: `(UTC+10:00) 브리즈번`,
      [_localeEnum.DE_DE]: `(UTC+10:00) Brisbane`,
      [_localeEnum.RU_RU]: `(UTC+10:00) Брисбен`,
      [_localeEnum.FR_FR]: `(UTC+10:00) Brisbane`,
      [_localeEnum.MS_MY]: `(UTC+10:00) Brisbane`,
      [_localeEnum.PT_BR]: `(UTC+10:00) Brisbane`
    },
    value: `Australia/Brisbane`,
    tzNum: 10
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+10:00) 符拉迪沃斯托克`,
      [_localeEnum.ZH_HK]: `(UTC+10:00) 符拉迪沃斯托克`,
      [_localeEnum.EN_US]: `(UTC+10:00) Vladivostok`,
      [_localeEnum.JA_JP]: `(UTC+10:00) ウラジオストク`,
      [_localeEnum.KO_KR]: `(UTC+10:00) 블라디보스토크`,
      [_localeEnum.DE_DE]: `(UTC+10:00) Wladiwostok`,
      [_localeEnum.RU_RU]: `(UTC+10:00) Владивосток`,
      [_localeEnum.FR_FR]: `(UTC+10:00) Vladivostok`,
      [_localeEnum.MS_MY]: `(UTC+10:00) Vladivostok`,
      [_localeEnum.PT_BR]: `(UTC+10:00) Vladivostok`
    },
    value: `Asia/Vladivostok`,
    tzNum: 10
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+10:00) 关岛，莫尔兹比港`,
      [_localeEnum.ZH_HK]: `(UTC+10:00) 關島，莫爾茲比港`,
      [_localeEnum.EN_US]: `(UTC+10:00) Guam, Port Moresby`,
      [_localeEnum.JA_JP]: `(UTC+10:00) グアム、ポートモレスビー`,
      [_localeEnum.KO_KR]: `(UTC+10:00) 괌, 포트모르즈비`,
      [_localeEnum.DE_DE]: `(UTC+10:00) Guam, Port Moresby`,
      [_localeEnum.RU_RU]: `(UTC+10:00) Гуам, Порт-Морсби`,
      [_localeEnum.FR_FR]: `(UTC+10:00) Guam, Port Moresby`,
      [_localeEnum.MS_MY]: `(UTC+10:00) Guam, Port Moresby`,
      [_localeEnum.PT_BR]: `(UTC+10:00) Guam, Port Moresby`
    },
    value: `Pacific/Port_Moresby`,
    tzNum: 10
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+10:00) 霍巴特`,
      [_localeEnum.ZH_HK]: `(UTC+10:00) 霍巴特`,
      [_localeEnum.EN_US]: `(UTC+10:00) Hobart`,
      [_localeEnum.JA_JP]: `(UTC+10:00) ホバート`,
      [_localeEnum.KO_KR]: `(UTC+10:00) 호바트`,
      [_localeEnum.DE_DE]: `(UTC+10:00) Hobart`,
      [_localeEnum.RU_RU]: `(UTC+10:00) Хобарт`,
      [_localeEnum.FR_FR]: `(UTC+10:00) Hobart`,
      [_localeEnum.MS_MY]: `(UTC+10:00) Hobart`,
      [_localeEnum.PT_BR]: `(UTC+10:00) Hobart`
    },
    value: `Australia/Hobart`,
    tzNum: 10
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+10:00) 堪培拉，墨尔本，悉尼`,
      [_localeEnum.ZH_HK]: `(UTC+10:00) 坎培拉，墨爾本，悉尼`,
      [_localeEnum.EN_US]: `(UTC+10:00) Canberra, Melbourne, Sydney`,
      [_localeEnum.JA_JP]: `(UTC+10:00) キャンベラ、メルボルン、シドニー`,
      [_localeEnum.KO_KR]: `(UTC+10:00) 캔버라, 멜버른, 시드니`,
      [_localeEnum.DE_DE]: `(UTC+10:00) Canberra, Melbourne, Sydney`,
      [_localeEnum.RU_RU]: `(UTC+10:00) Канберра, Мельбурн, Сидней`,
      [_localeEnum.FR_FR]: `(UTC+10:00) Canberra, Melbourne, Sydney`,
      [_localeEnum.MS_MY]: `(UTC+10:00) Canberra, Melbourne, Sydney`,
      [_localeEnum.PT_BR]: `(UTC+10:00) Camberra, Melbourne, Sydney`
    },
    value: `Australia/Sydney`,
    tzNum: 10
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+10:30) 豪勋爵岛`,
      [_localeEnum.ZH_HK]: `(UTC+10:30) 豪勳爵島`,
      [_localeEnum.EN_US]: `(UTC+10:30) Lord Howe Island`,
      [_localeEnum.JA_JP]: `(UTC+10:30) ロード・ハウ島`,
      [_localeEnum.KO_KR]: `(UTC+10:30) 로드하우섬`,
      [_localeEnum.DE_DE]: `(UTC+10:30) Lord-Howe-Insel`,
      [_localeEnum.RU_RU]: `(UTC+10:30) Остров Лорд-Хау`,
      [_localeEnum.FR_FR]: `(UTC+10:30) Île Lord Howe`,
      [_localeEnum.MS_MY]: `(UTC+10:30) Pulau Lord Howe`,
      [_localeEnum.PT_BR]: `(UTC+10:30) Ilha Lord Howe`
    },
    value: `Australia/Lord_Howe`,
    tzNum: 10.5
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+11:00) 布干维尔岛`,
      [_localeEnum.ZH_HK]: `(UTC+11:00) 布干維爾島`,
      [_localeEnum.EN_US]: `(UTC+11:00) Bougainville`,
      [_localeEnum.JA_JP]: `(UTC+11:00) ブーゲンビル島`,
      [_localeEnum.KO_KR]: `(UTC+11:00) 부건빌`,
      [_localeEnum.DE_DE]: `(UTC+11:00) Bougainville`,
      [_localeEnum.RU_RU]: `(UTC+11:00) Бугенвиль`,
      [_localeEnum.FR_FR]: `(UTC+11:00) Bougainville`,
      [_localeEnum.MS_MY]: `(UTC+11:00) Bougainville`,
      [_localeEnum.PT_BR]: `(UTC+11:00) Bougainville`
    },
    value: `Pacific/Bougainville`,
    tzNum: 11
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+11:00) 马加丹`,
      [_localeEnum.ZH_HK]: `(UTC+11:00) 馬加丹`,
      [_localeEnum.EN_US]: `(UTC+11:00) Magadan`,
      [_localeEnum.JA_JP]: `(UTC+11:00) マガダン`,
      [_localeEnum.KO_KR]: `(UTC+11:00) 마가단`,
      [_localeEnum.DE_DE]: `(UTC+11:00) Magadan`,
      [_localeEnum.RU_RU]: `(UTC+11:00) Магадан`,
      [_localeEnum.FR_FR]: `(UTC+11:00) Magadan`,
      [_localeEnum.MS_MY]: `(UTC+11:00) Magadan`,
      [_localeEnum.PT_BR]: `(UTC+11:00) Magadan`
    },
    value: `Asia/Magadan`,
    tzNum: 11
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+11:00) 诺福克岛`,
      [_localeEnum.ZH_HK]: `(UTC+11:00) 諾福克島`,
      [_localeEnum.EN_US]: `(UTC+11:00) Norfolk Island`,
      [_localeEnum.JA_JP]: `(UTC+11:00) ノーフォーク島`,
      [_localeEnum.KO_KR]: `(UTC+11:00) 노퍽섬`,
      [_localeEnum.DE_DE]: `(UTC+11:00) Norfolkinsel`,
      [_localeEnum.RU_RU]: `(UTC+11:00) Остров Норфолк`,
      [_localeEnum.FR_FR]: `(UTC+11:00) Île Norfolk`,
      [_localeEnum.MS_MY]: `(UTC+11:00) Pulau Norfolk`,
      [_localeEnum.PT_BR]: `(UTC+11:00) Ilha Norfolk`
    },
    value: `Pacific/Norfolk`,
    tzNum: 11
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+11:00) 乔库尔达赫`,
      [_localeEnum.ZH_HK]: `(UTC+11:00) 喬庫爾達赫`,
      [_localeEnum.EN_US]: `(UTC+11:00) Srednekolymsk`,
      [_localeEnum.JA_JP]: `(UTC+11:00) スレドネコリムスク`,
      [_localeEnum.KO_KR]: `(UTC+11:00) 스레드네콜림스크`,
      [_localeEnum.DE_DE]: `(UTC+11:00) Srednekolymsk`,
      [_localeEnum.RU_RU]: `(UTC+11:00) Среднеколымск`,
      [_localeEnum.FR_FR]: `(UTC+11:00) Srednekolymsk`,
      [_localeEnum.MS_MY]: `(UTC+11:00) Srednekolymsk`,
      [_localeEnum.PT_BR]: `(UTC+11:00) Srednekolymsk`
    },
    value: `Asia/Srednekolymsk`,
    tzNum: 11
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+11:00) 萨哈林`,
      [_localeEnum.ZH_HK]: `(UTC+11:00) 薩哈林`,
      [_localeEnum.EN_US]: `(UTC+11:00) Sakhalin`,
      [_localeEnum.JA_JP]: `(UTC+11:00) サハリン`,
      [_localeEnum.KO_KR]: `(UTC+11:00) 사할린`,
      [_localeEnum.DE_DE]: `(UTC+11:00) Sachalin`,
      [_localeEnum.RU_RU]: `(UTC+11:00) Сахалин`,
      [_localeEnum.FR_FR]: `(UTC+11:00) Sakhaline`,
      [_localeEnum.MS_MY]: `(UTC+11:00) Sakhalin`,
      [_localeEnum.PT_BR]: `(UTC+11:00) Sacalina`
    },
    value: `Asia/Sakhalin`,
    tzNum: 11
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+11:00) 所罗门群岛，新喀里多尼亚`,
      [_localeEnum.ZH_HK]: `(UTC+11:00) 所羅門群島，新喀里多尼亞`,
      [_localeEnum.EN_US]: `(UTC+11:00) Solomon Islands, New Caledonia`,
      [_localeEnum.JA_JP]: `(UTC+11:00) ソロモン諸島、ニューカレドニア`,
      [_localeEnum.KO_KR]: `(UTC+11:00) 솔로몬 제도, 뉴칼레도니아`,
      [_localeEnum.DE_DE]: `(UTC+11:00) Salomonen, Neukaledonien`,
      [_localeEnum.RU_RU]: `(UTC+11:00) Соломоновы Острова, Новая Каледония`,
      [_localeEnum.FR_FR]: `(UTC+11:00) Îles Salomon, Nouvelle-Calédonie`,
      [_localeEnum.MS_MY]: `(UTC+11:00) Kepulauan Solomon, New Caledonia`,
      [_localeEnum.PT_BR]: `(UTC+11:00) Ilhas Salomão, Nova Caledônia`
    },
    value: `Pacific/Guadalcanal`,
    tzNum: 11
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+12:00) 阿纳德尔，堪察加彼得罗巴甫洛夫斯克`,
      [_localeEnum.ZH_HK]: `(UTC+12:00) 阿納德爾，堪察加彼得羅巴甫洛夫斯克`,
      [_localeEnum.EN_US]: `(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky`,
      [_localeEnum.JA_JP]: `(UTC+12:00) アナディリ、ペトロパブロフスク・カムチャツキー`,
      [_localeEnum.KO_KR]: `(UTC+12:00) 아나디리, 페트로파블롭스크캄차츠키`,
      [_localeEnum.DE_DE]: `(UTC+12:00) Anadyr, Petropawlowsk-Kamtschatski`,
      [_localeEnum.RU_RU]: `(UTC+12:00) Анадырь, Петропавловск-Камчатский`,
      [_localeEnum.FR_FR]: `(UTC+12:00) Anadyr, Petropavlovsk-Kamtchatski`,
      [_localeEnum.MS_MY]: `(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky`,
      [_localeEnum.PT_BR]: `(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky`
    },
    value: `Asia/Kamchatka`,
    tzNum: 12
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+12:00) 奥克兰，惠灵顿`,
      [_localeEnum.ZH_HK]: `(UTC+12:00) 奧克蘭，惠靈頓`,
      [_localeEnum.EN_US]: `(UTC+12:00) Auckland, Wellington`,
      [_localeEnum.JA_JP]: `(UTC+12:00) オークランド、ウェリントン`,
      [_localeEnum.KO_KR]: `(UTC+12:00) 오클랜드, 웰링턴`,
      [_localeEnum.DE_DE]: `(UTC+12:00) Auckland, Wellington`,
      [_localeEnum.RU_RU]: `(UTC+12:00) Окленд, Веллингтон`,
      [_localeEnum.FR_FR]: `(UTC+12:00) Auckland, Wellington`,
      [_localeEnum.MS_MY]: `(UTC+12:00) Auckland, Wellington`,
      [_localeEnum.PT_BR]: `(UTC+12:00) Auckland, Wellington`
    },
    value: `Pacific/Auckland`,
    tzNum: 12
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+12:00) 斐济`,
      [_localeEnum.ZH_HK]: `(UTC+12:00) 斐濟`,
      [_localeEnum.EN_US]: `(UTC+12:00) Fiji`,
      [_localeEnum.JA_JP]: `(UTC+12:00) フィジー`,
      [_localeEnum.KO_KR]: `(UTC+12:00) 피지`,
      [_localeEnum.DE_DE]: `(UTC+12:00) Fidschi`,
      [_localeEnum.RU_RU]: `(UTC+12:00) Фиджи`,
      [_localeEnum.FR_FR]: `(UTC+12:00) Fidji`,
      [_localeEnum.MS_MY]: `(UTC+12:00) Fiji`,
      [_localeEnum.PT_BR]: `(UTC+12:00) Fiji`
    },
    value: `Pacific/Fiji`,
    tzNum: 12
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+12:00) 协调世界时+12`,
      [_localeEnum.ZH_HK]: `(UTC+12:00) 協調世界時+12`,
      [_localeEnum.EN_US]: `(UTC+12:00) Coordinated Universal Time +12`,
      [_localeEnum.JA_JP]: `(UTC+12:00) 協定世界時+12`,
      [_localeEnum.KO_KR]: `(UTC+12:00) 협정 세계시 +12`,
      [_localeEnum.DE_DE]: `(UTC+12:00) Koordinierte Weltzeit +12`,
      [_localeEnum.RU_RU]: `(UTC+12:00) Всемирное координированное время +12`,
      [_localeEnum.FR_FR]: `(UTC+12:00) Temps universel coordonné +12`,
      [_localeEnum.MS_MY]: `(UTC+12:00) Waktu Universal Selaras +12`,
      [_localeEnum.PT_BR]: `(UTC+12:00) Tempo Universal Coordenado +12`
    },
    value: `Etc/GMT-12`,
    tzNum: 12
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+12:45) 查塔姆群岛`,
      [_localeEnum.ZH_HK]: `(UTC+12:45) 查塔姆群島`,
      [_localeEnum.EN_US]: `(UTC+12:45) Chatham Islands`,
      [_localeEnum.JA_JP]: `(UTC+12:45) チャタム諸島`,
      [_localeEnum.KO_KR]: `(UTC+12:45) 채텀 제도`,
      [_localeEnum.DE_DE]: `(UTC+12:45) Chatham-Inseln`,
      [_localeEnum.RU_RU]: `(UTC+12:45) Острова Чатем`,
      [_localeEnum.FR_FR]: `(UTC+12:45) Îles Chatham`,
      [_localeEnum.MS_MY]: `(UTC+12:45) Kepulauan Chatham`,
      [_localeEnum.PT_BR]: `(UTC+12:45) Ilhas Chatham`
    },
    value: `Pacific/Chatham`,
    tzNum: 12.75
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+13:00) 努库阿洛法`,
      [_localeEnum.ZH_HK]: `(UTC+13:00) 努庫阿洛法`,
      [_localeEnum.EN_US]: `(UTC+13:00) Nuku'alofa`,
      [_localeEnum.JA_JP]: `(UTC+13:00) ヌクアロファ`,
      [_localeEnum.KO_KR]: `(UTC+13:00) 누쿠알로파`,
      [_localeEnum.DE_DE]: `(UTC+13:00) Nuku'alofa`,
      [_localeEnum.RU_RU]: `(UTC+13:00) Нукуалофа`,
      [_localeEnum.FR_FR]: `(UTC+13:00) Nuku'alofa`,
      [_localeEnum.MS_MY]: `(UTC+13:00) Nuku'alofa`,
      [_localeEnum.PT_BR]: `(UTC+13:00) Nuku'alofa`
    },
    value: `Pacific/Tongatapu`,
    tzNum: 13
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+13:00) 萨摩亚群岛`,
      [_localeEnum.ZH_HK]: `(UTC+13:00) 薩摩亞群島`,
      [_localeEnum.EN_US]: `(UTC+13:00) Samoa`,
      [_localeEnum.JA_JP]: `(UTC+13:00) サモア`,
      [_localeEnum.KO_KR]: `(UTC+13:00) 사모아`,
      [_localeEnum.DE_DE]: `(UTC+13:00) Samoa`,
      [_localeEnum.RU_RU]: `(UTC+13:00) Самоа`,
      [_localeEnum.FR_FR]: `(UTC+13:00) Samoa`,
      [_localeEnum.MS_MY]: `(UTC+13:00) Samoa`,
      [_localeEnum.PT_BR]: `(UTC+13:00) Samoa`
    },
    value: `Pacific/Apia`,
    tzNum: 13
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+13:00) 协调世界时+13`,
      [_localeEnum.ZH_HK]: `(UTC+13:00) 協調世界時+13`,
      [_localeEnum.EN_US]: `(UTC+13:00) Coordinated Universal Time +13`,
      [_localeEnum.JA_JP]: `(UTC+13:00) 協定世界時+13`,
      [_localeEnum.KO_KR]: `(UTC+13:00) 협정 세계시 +13`,
      [_localeEnum.DE_DE]: `(UTC+13:00) Koordinierte Weltzeit +13`,
      [_localeEnum.RU_RU]: `(UTC+13:00) Всемирное координированное время +13`,
      [_localeEnum.FR_FR]: `(UTC+13:00) Temps universel coordonné +13`,
      [_localeEnum.MS_MY]: `(UTC+13:00) Waktu Universal Selaras +13`,
      [_localeEnum.PT_BR]: `(UTC+13:00) Tempo Universal Coordenado +13`
    },
    value: `Etc/GMT-13`,
    tzNum: 13
  },
  {
    textMap: {
      [_localeEnum.ZH_CN]: `(UTC+14:00) 圣诞岛`,
      [_localeEnum.ZH_HK]: `(UTC+14:00) 聖誕島`,
      [_localeEnum.EN_US]: `(UTC+14:00) Christmas Island`,
      [_localeEnum.JA_JP]: `(UTC+14:00) クリスマス島`,
      [_localeEnum.KO_KR]: `(UTC+14:00) 크리스마스섬`,
      [_localeEnum.DE_DE]: `(UTC+14:00) Weihnachtsinsel`,
      [_localeEnum.RU_RU]: `(UTC+14:00) Остров Рождества`,
      [_localeEnum.FR_FR]: `(UTC+14:00) Île Christmas`,
      [_localeEnum.MS_MY]: `(UTC+14:00) Pulau Krismas`,
      [_localeEnum.PT_BR]: `(UTC+14:00) Ilha Christmas`
    },
    value: `Pacific/Kiritimati`,
    tzNum: 14
  }
];
