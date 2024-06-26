/** 时区项类型 */
export type TimeZoneItem = {
  label: string;
  enLabel: string;
  value: string;
  tzNum: number;
};

/** 时区列表 */
export const timeZoneOptions: TimeZoneItem[] = [
  {
    label: '(UTC-12:00) 国际日期变更线西',
    enLabel: '(UTC-12:00) International Date Line West',
    value: 'Etc/GMT+12',
    tzNum: -12
  },
  {
    label: '(UTC-11:00) 协调世界时-11',
    enLabel: '(UTC-11:00) Coordinated Universal Time -11',
    value: 'Etc/GMT+11',
    tzNum: -11
  },
  {
    label: '(UTC-10:00) 阿留申群岛',
    enLabel: '(UTC-10:00) Aleutian Islands',
    value: 'America/Adak',
    tzNum: -10
  },
  {
    label: '(UTC-10:00) 夏威夷',
    enLabel: '(UTC-10:00) Hawaii',
    value: 'Pacific/Honolulu',
    tzNum: -10
  },
  {
    label: '(UTC-09:30) 马克萨斯群岛',
    enLabel: '(UTC-09:30) Marquesas Islands',
    value: 'Pacific/Marquesas',
    tzNum: -9.5
  },
  {
    label: '(UTC-09:00) 阿拉斯加',
    enLabel: '(UTC-09:00) Alaska',
    value: 'America/Anchorage',
    tzNum: -9
  },
  {
    label: '(UTC-09:00) 协调世界时-09',
    enLabel: '(UTC-09:00) Coordinated Universal Time -09',
    value: 'Etc/GMT+9',
    tzNum: -9
  },
  {
    label: '(UTC-08:00) 太平洋时间（美国和加拿大）',
    enLabel: '(UTC-08:00) Pacific Time (US & Canada)',
    value: 'America/Los_Angeles',
    tzNum: -8
  },
  {
    label: '(UTC-08:00) 下加利福尼亚州',
    enLabel: '(UTC-08:00) Tijuana, Baja California',
    value: 'America/Tijuana',
    tzNum: -8
  },
  {
    label: '(UTC-08:00) 协调世界时-08',
    enLabel: '(UTC-08:00) Coordinated Universal Time -08',
    value: 'Etc/GMT+8',
    tzNum: -8
  },
  {
    label: '(UTC-07:00) 拉巴斯，马扎特兰',
    enLabel: '(UTC-07:00) La Paz, Mazatlan',
    value: 'America/Mazatlan',
    tzNum: -7
  },
  {
    label: '(UTC-07:00) 山地时间（美国和加拿大）',
    enLabel: '(UTC-07:00) Mountain Time (US & Canada)',
    value: 'America/Denver',
    tzNum: -7
  },
  {
    label: '(UTC-07:00) 亚利桑那',
    enLabel: '(UTC-07:00) Arizona',
    value: 'America/Phoenix',
    tzNum: -7
  },
  {
    label: '(UTC-07:00) 育空',
    enLabel: '(UTC-07:00) Yukon',
    value: 'America/Whitehorse',
    tzNum: -7
  },
  {
    label: '(UTC-06:00) 复活节岛',
    enLabel: '(UTC-06:00) Easter Island',
    value: 'Pacific/Easter',
    tzNum: -6
  },
  {
    label: '(UTC-06:00) 瓜达拉哈拉，墨西哥城，蒙特雷',
    enLabel: '(UTC-06:00) Guadalajara, Mexico City, Monterrey',
    value: 'America/Mexico_City',
    tzNum: -6
  },
  {
    label: '(UTC-06:00) 萨斯喀彻温',
    enLabel: '(UTC-06:00) Saskatchewan',
    value: 'America/Regina',
    tzNum: -6
  },
  {
    label: '(UTC-06:00) 中部时间（美国和加拿大）',
    enLabel: '(UTC-06:00) Central Time (US & Canada)',
    value: 'America/Chicago',
    tzNum: -6
  },
  {
    label: '(UTC-06:00) 中美洲',
    enLabel: '(UTC-06:00) Central America',
    value: 'America/Guatemala',
    tzNum: -6
  },
  {
    label: '(UTC-05:00) 波哥大，利马，基多，里奥布朗库',
    enLabel: '(UTC-05:00) Bogota, Lima, Quito, Rio Branco',
    value: 'America/Bogota',
    tzNum: -5
  },
  {
    label: '(UTC-05:00) 东部时间（美国和加拿大）',
    enLabel: '(UTC-05:00) Eastern Time (US & Canada)',
    value: 'America/New_York',
    tzNum: -5
  },
  {
    label: '(UTC-05:00) 哈瓦那',
    enLabel: '(UTC-05:00) Havana',
    value: 'America/Havana',
    tzNum: -5
  },
  {
    label: '(UTC-05:00) 海地',
    enLabel: '(UTC-05:00) Haiti',
    value: 'America/Port-au-Prince',
    tzNum: -5
  },
  {
    label: '(UTC-05:00) 切图马尔',
    enLabel: '(UTC-05:00) Chetumal',
    value: 'America/Cancun',
    tzNum: -5
  },
  {
    label: '(UTC-05:00) 特克斯和凯科斯群岛',
    enLabel: '(UTC-05:00) Turks & Caicos Islands',
    value: 'America/Grand_Turk',
    tzNum: -5
  },
  {
    label: '(UTC-05:00) 印第安那州（东部）',
    enLabel: '(UTC-05:00) Indiana (Eastern)',
    value: 'America/Indianapolis',
    tzNum: -5
  },
  {
    label: '(UTC-04:00) 太平洋时间（加拿大）',
    enLabel: '(UTC-04:00) Pacific Time (Canada)',
    value: 'America/Halifax',
    tzNum: -4
  },
  {
    label: '(UTC-04:00) 阿拉斯加',
    enLabel: '(UTC-04:00) Alaska',
    value: 'America/Caracas',
    tzNum: -4
  },
  {
    label: '(UTC-04:00) 库亚巴',
    enLabel: '(UTC-04:00) Cuiabá',
    value: 'America/Cuiaba',
    tzNum: -4
  },
  {
    label: '(UTC-04:00) 乔治敦，拉巴斯，玛瑙斯，圣胡安',
    enLabel: '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
    value: 'America/La_Paz',
    tzNum: -4
  },
  {
    label: '(UTC-04:00) 圣地亚哥',
    enLabel: '(UTC-04:00) San Diego',
    value: 'America/Santiago',
    tzNum: -4
  },
  {
    label: '(UTC-04:00) 亚松森',
    enLabel: '(UTC-04:00) Asuncion',
    value: 'America/Asuncion',
    tzNum: -4
  },
  {
    label: '(UTC-03:30) 纽芬兰',
    enLabel: '(UTC-03:30) Newfoundland',
    value: 'America/St_Johns',
    tzNum: -3.5
  },
  {
    label: '(UTC-03:00) 阿拉瓜伊纳',
    enLabel: '(UTC-03:00) Araguaina',
    value: 'America/Araguaina',
    tzNum: -3
  },
  {
    label: '(UTC-03:00) 巴西利亚',
    enLabel: '(UTC-03:00) Brasilia',
    value: 'America/Sao_Paulo',
    tzNum: -3
  },
  {
    label: '(UTC-03:00) 布宜诺斯艾利斯',
    enLabel: '(UTC-03:00) Buenos Aires',
    value: 'America/Buenos_Aires',
    tzNum: -3
  },
  {
    label: '(UTC-03:00) 卡宴，福塔雷斯',
    enLabel: '(UTC-03:00) Cayenne, Fortales',
    value: 'America/Cayenne',
    tzNum: -3
  },
  {
    label: '(UTC-03:00) 蒙德维的亚',
    enLabel: '(UTC-03:00) Montevideo',
    value: 'America/Montevideo',
    tzNum: -3
  },
  {
    label: '(UTC-03:00) 蓬塔阿雷纳斯',
    enLabel: '(UTC-03:00) Punta Arenas',
    value: 'America/Punta_Arenas',
    tzNum: -3
  },
  {
    label: '(UTC-03:00) 萨尔瓦多',
    enLabel: '(UTC-03:00) El Salvador',
    value: 'America/Bahia',
    tzNum: -3
  },
  {
    label: '(UTC-03:00) 圣皮埃尔和密克隆群岛',
    enLabel: '(UTC-03:00) Saint-Pierre & Miquelon',
    value: 'America/Miquelon',
    tzNum: -3
  },
  {
    label: '(UTC-02:00) 格陵兰',
    enLabel: '(UTC-02:00) Greenland',
    value: 'America/Godthab',
    tzNum: -2
  },
  {
    label: '(UTC-02:00) 协调世界时-02',
    enLabel: '(UTC-02:00) Coordinated Universal Time -02',
    value: 'Etc/GMT+2',
    tzNum: -2
  },
  {
    label: '(UTC-01:00) 佛得角群岛',
    enLabel: '(UTC-01:00) Cape Verde Islands',
    value: 'Atlantic/Cape_Verde',
    tzNum: -1
  },
  {
    label: '(UTC-01:00) 亚速尔群岛',
    enLabel: '(UTC-01:00) Azores',
    value: 'Atlantic/Azores',
    tzNum: -1
  },
  {
    label: '(UTC) 协调世界时',
    enLabel: '(UTC) Coordinated Universal Time',
    value: 'UTC',
    tzNum: 0
  },
  {
    label: '(UTC-00:00) 都柏林，爱丁堡，里斯本，伦敦',
    enLabel: '(UTC-00:00) Dublin, Edinburgh, Lisbon, London',
    value: 'Europe/London',
    tzNum: 0
  },
  {
    label: '(UTC-00:00) 蒙罗维亚，雷克雅未克',
    enLabel: '(UTC-00:00) Monrovia, Reykjavik',
    value: 'Atlantic/Reykjavik',
    tzNum: 0
  },
  {
    label: '(UTC-00:00) 圣多美',
    enLabel: '(UTC-00:00) Sao Tome',
    value: 'Africa/Sao_Tome',
    tzNum: 0
  },
  {
    label: '(UTC+01:00) 卡斯布兰卡',
    enLabel: '(UTC+01:00) Casblanca',
    value: 'Africa/Casablanca',
    tzNum: 1
  },
  {
    label: '(UTC+01:00) 阿姆斯特丹，柏林，伯尔尼，罗马，斯德哥尔摩，维也纳',
    enLabel: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    value: 'Europe/Berlin',
    tzNum: 1
  },
  {
    label: '(UTC+01:00) 贝尔格莱德，布拉迪斯拉发，布达佩斯，卢布尔雅那，布拉格',
    enLabel: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
    value: 'Europe/Budapest',
    tzNum: 1
  },
  {
    label: '(UTC+01:00) 布鲁塞尔，哥本哈根，马德里，巴黎',
    enLabel: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
    value: 'Europe/Paris',
    tzNum: 1
  },
  {
    label: '(UTC+01:00) 萨拉热窝，斯科普里，华沙，萨格勒布',
    enLabel: '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
    value: 'Europe/Warsaw',
    tzNum: 1
  },
  {
    label: '(UTC+01:00) 中非西部',
    enLabel: '(UTC+01:00) West Central Africa',
    value: 'Africa/Lagos',
    tzNum: 1
  },
  {
    label: '(UTC+02:00) 贝鲁特',
    enLabel: '(UTC+02:00) Beirut',
    value: 'Asia/Beirut',
    tzNum: 2
  },
  {
    label: '(UTC+02:00) 大马士革',
    enLabel: '(UTC+02:00) Damascus',
    value: 'Asia/Damascus',
    tzNum: 2
  },
  {
    label: '(UTC+02:00) 的黎波里',
    enLabel: '(UTC+02:00) Tripoli',
    value: 'Africa/Tripoli',
    tzNum: 2
  },
  {
    label: '(UTC+02:00) 哈拉雷，比勒陀利亚',
    enLabel: '(UTC+02:00) Harare, Pretoria',
    value: 'Africa/Johannesburg',
    tzNum: 2
  },
  {
    label: '(UTC+02:00) 赫尔辛基，基辅，里加，索菲亚，塔林，维尔纽斯',
    enLabel: '(UTC+02:00) Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius',
    value: 'Europe/Kiev',
    tzNum: 2
  },
  {
    label: '(UTC+02:00) 基希纳乌',
    enLabel: '(UTC+02:00) Chisinau',
    value: 'Europe/Chisinau',
    tzNum: 2
  },
  {
    label: '(UTC+02:00) 加里宁格勒',
    enLabel: '(UTC+02:00) Kaliningrad',
    value: 'Europe/Kaliningrad',
    tzNum: 2
  },
  {
    label: '(UTC+02:00) 加沙，希伯伦',
    enLabel: '(UTC+02:00) Gaza, Hebron',
    value: 'Asia/Hebron',
    tzNum: 2
  },
  {
    label: '(UTC+02:00) 喀土穆',
    enLabel: '(UTC+02:00) Khartoum',
    value: 'Africa/Khartoum',
    tzNum: 2
  },
  {
    label: '(UTC+02:00) 开罗',
    enLabel: '(UTC+02:00) Cairo',
    value: 'Africa/Cairo',
    tzNum: 2
  },
  {
    label: '(UTC+02:00) 温得和克',
    enLabel: '(UTC+02:00) Windhoek',
    value: 'Africa/Windhoek',
    tzNum: 2
  },
  {
    label: '(UTC+02:00) 雅典，布加勒斯特',
    enLabel: '(UTC+02:00) Athens, Bucharest',
    value: 'Europe/Bucharest',
    tzNum: 2
  },
  {
    label: '(UTC+02:00) 耶路撒冷',
    enLabel: '(UTC+02:00) Jerusalem',
    value: 'Asia/Jerusalem',
    tzNum: 2
  },
  {
    label: '(UTC+02:00) 朱巴',
    enLabel: '(UTC+02:00) Juba',
    value: 'Africa/Juba',
    tzNum: 2
  },
  {
    label: '(UTC+03:00) 安曼',
    enLabel: '(UTC+03:00) Amman',
    value: 'Asia/Amman',
    tzNum: 3
  },
  {
    label: '(UTC+03:00) 巴格达',
    enLabel: '(UTC+03:00) Baghdad',
    value: 'Asia/Baghdad',
    tzNum: 3
  },
  {
    label: '(UTC+03:00) 伏尔加格勒',
    enLabel: '(UTC+03:00) Volgograd',
    value: 'Europe/Volgograd',
    tzNum: 3
  },
  {
    label: '(UTC+03:00) 格威特，利雅得',
    enLabel: '(UTC+03:00) Gwait, Riyadh',
    value: 'Asia/Riyadh',
    tzNum: 3
  },
  {
    label: '(UTC+03:00) 明斯克',
    enLabel: '(UTC+03:00) Minsk',
    value: 'Europe/Minsk',
    tzNum: 3
  },
  {
    label: '(UTC+03:00) 莫斯科，圣彼得堡',
    enLabel: '(UTC+03:00) Moscow, St. Petersburg',
    value: 'Europe/Moscow',
    tzNum: 3
  },
  {
    label: '(UTC+03:00) 内罗毕',
    enLabel: '(UTC+03:00) Nairobi',
    value: 'Africa/Nairobi',
    tzNum: 3
  },
  {
    label: '(UTC+03:00) 伊斯坦布尔',
    enLabel: '(UTC+03:00) Istanbul',
    value: 'Europe/Istanbul',
    tzNum: 3
  },
  {
    label: '(UTC+03:30) 德黑兰',
    enLabel: '(UTC+03:30) Tehran',
    value: 'Asia/Tehran',
    tzNum: 3.5
  },
  {
    label: '(UTC+04:00) 阿布扎比，马斯喀特',
    enLabel: '(UTC+04:00) Abu Dhabi, Muscat',
    value: 'Asia/Dubai',
    tzNum: 4
  },
  {
    label: '(UTC+04:00) 阿斯特拉罕，乌里扬诺夫斯克',
    enLabel: '(UTC+04:00) Astrakhan, Ulyanovsk',
    value: 'Europe/Astrakhan',
    tzNum: 4
  },
  {
    label: '(UTC+04:00) 埃里温',
    enLabel: '(UTC+04:00) Yerevan',
    value: 'Asia/Yerevan',
    tzNum: 4
  },
  {
    label: '(UTC+04:00) 巴库',
    enLabel: '(UTC+04:00) Baku',
    value: 'Asia/Baku',
    tzNum: 4
  },
  {
    label: '(UTC+04:00) 第比利斯',
    enLabel: '(UTC+04:00) Tbilisi',
    value: 'Asia/Tbilisi',
    tzNum: 4
  },
  {
    label: '(UTC+04:00) 路易港',
    enLabel: '(UTC+04:00) Port Louis',
    value: 'Indian/Mauritius',
    tzNum: 4
  },
  {
    label: '(UTC+04:00) 萨拉托夫',
    enLabel: '(UTC+04:00) Saratov',
    value: 'Europe/Saratov',
    tzNum: 4
  },
  {
    label: '(UTC+04:00) 伊热夫斯克，萨马拉',
    enLabel: '(UTC+04:00) Izhevsk, Samara',
    value: 'Europe/Samara',
    tzNum: 4
  },
  {
    label: '(UTC+04:30) 喀布尔',
    enLabel: '(UTC+04:30) Kabul',
    value: 'Asia/Kabul',
    tzNum: 4.5
  },
  {
    label: '(UTC+05:00) 阿什哈巴德，塔什干',
    enLabel: '(UTC+05:00) Ashgabat, Tashkent',
    value: 'Asia/Tashkent',
    tzNum: 5
  },
  {
    label: '(UTC+05:00) 克孜洛尔达',
    enLabel: '(UTC+05:00) Kyzylorda',
    value: 'Asia/Qyzylorda',
    tzNum: 5
  },
  {
    label: '(UTC+05:00) 叶卡捷琳堡',
    enLabel: '(UTC+05:00) Yekaterinburg',
    value: 'Asia/Yekaterinburg',
    tzNum: 5
  },
  {
    label: '(UTC+05:00) 伊斯兰堡，卡拉奇',
    enLabel: '(UTC+05:00) Islamabad, Karachi',
    value: 'Asia/Karachi',
    tzNum: 5
  },
  {
    label: '(UTC+05:30) 钦奈，加尔各答，孟买，新德里',
    enLabel: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
    value: 'Asia/Calcutta',
    tzNum: 5.5
  },
  {
    label: '(UTC+05:30) 斯里加亚渥登普拉',
    enLabel: '(UTC+05:30) Sri Jayavodhanpura',
    value: 'Asia/Colombo',
    tzNum: 5.5
  },
  {
    label: '(UTC+05:45) 加德满都',
    enLabel: '(UTC+05:45) Kathmandu',
    value: 'Asia/Katmandu',
    tzNum: 5.75
  },
  {
    label: '(UTC+06:00) 阿斯塔纳',
    enLabel: '(UTC+06:00) Astana',
    value: 'Asia/Urumqi',
    tzNum: 6
  },
  {
    label: '(UTC+06:00) 达卡',
    enLabel: '(UTC+06:00) Dhaka',
    value: 'Asia/Dhaka',
    tzNum: 6
  },
  {
    label: '(UTC+06:00) 鄂木斯克',
    enLabel: '(UTC+06:00) Omsk',
    value: 'Asia/Omsk',
    tzNum: 6
  },
  {
    label: '(UTC+06:30) 仰光',
    enLabel: '(UTC+06:30) Yangon',
    value: 'Asia/Rangoon',
    tzNum: 6.5
  },
  {
    label: '(UTC+07:00) 巴尔瑙尔，格尔塔-阿尔泰斯克',
    enLabel: '(UTC+07:00) Barnaul, Gertha-Altaisk',
    value: 'Asia/Barnaul',
    tzNum: 7
  },
  {
    label: '(UTC+07:00) 科布多',
    enLabel: '(UTC+07:00) Khovd',
    value: 'Asia/Hovd',
    tzNum: 7
  },
  {
    label: '(UTC+07:00) 克拉斯诺亚尔斯克',
    enLabel: '(UTC+07:00) Krasnoyarsk',
    value: 'Asia/Krasnoyarsk',
    tzNum: 7
  },
  {
    label: '(UTC+07:00) 曼谷，河内，雅加达',
    enLabel: '(UTC+07:00) Bangkok, Hanoi, Jakarta',
    value: 'Asia/Bangkok',
    tzNum: 7
  },
  {
    label: '(UTC+07:00) 托木斯克',
    enLabel: '(UTC+07:00) Tomsk',
    value: 'Asia/Tomsk',
    tzNum: 7
  },
  {
    label: '(UTC+07:00) 新西伯利亚',
    enLabel: '(UTC+07:00) Novosibirsk',
    value: 'Asia/Novosibirsk',
    tzNum: 7
  },
  {
    label: '(UTC+08:00) 北京，重庆，香港特别行政区，乌鲁木齐',
    enLabel: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
    value: 'Asia/Shanghai',
    tzNum: 8
  },
  {
    label: '(UTC+08:00) 吉隆波，新加坡',
    enLabel: '(UTC+08:00) Kuala Lumpur, Singapore',
    value: 'Asia/Singapore',
    tzNum: 8
  },
  {
    label: '(UTC+08:00) 珀斯',
    enLabel: '(UTC+08:00) Perth',
    value: 'Australia/Perth',
    tzNum: 8
  },
  {
    label: '(UTC+08:00) 台北',
    enLabel: '(UTC+08:00) Taipei',
    value: 'Asia/Taipei',
    tzNum: 8
  },
  {
    label: '(UTC+08:00) 乌兰巴托',
    enLabel: '(UTC+08:00) Ulaanbaatar',
    value: 'Asia/Ulaanbaatar',
    tzNum: 8
  },
  {
    label: '(UTC+08:00) 伊尔库茨克',
    enLabel: '(UTC+08:00) Irkutsk',
    value: 'Asia/Irkutsk',
    tzNum: 8
  },
  {
    label: '(UTC+08:45) 尤克拉',
    enLabel: '(UTC+08:45) Eucla',
    value: 'Australia/Eucla',
    tzNum: 8.75
  },
  {
    label: '(UTC+09:00) 赤塔市',
    enLabel: '(UTC+09:00) Chita',
    value: 'Asia/Chita',
    tzNum: 9
  },
  {
    label: '(UTC+09:00) 大阪，札幌，东京',
    enLabel: '(UTC+09:00) Osaka, Sapporo, Tokyo',
    value: 'Asia/Tokyo',
    tzNum: 9
  },
  {
    label: '(UTC+09:00) 平壤',
    enLabel: '(UTC+09:00) Pyongyang',
    value: 'Asia/Pyongyang',
    tzNum: 9
  },
  {
    label: '(UTC+09:00) 首尔',
    enLabel: '(UTC+09:00) Seoul',
    value: 'Asia/Seoul',
    tzNum: 9
  },
  {
    label: '(UTC+09:00) 雅库茨克',
    enLabel: '(UTC+09:00) Yakutsk',
    value: 'Asia/Yakutsk',
    tzNum: 9
  },
  {
    label: '(UTC+09:30) 阿德莱德',
    enLabel: '(UTC+09:30) Adelaide',
    value: 'Australia/Adelaide',
    tzNum: 9.5
  },
  {
    label: '(UTC+09:30) 达尔文',
    enLabel: '(UTC+09:30) Darwin',
    value: 'Australia/Darwin',
    tzNum: 9.5
  },
  {
    label: '(UTC+10:00) 布里斯班',
    enLabel: '(UTC+10:00) Brisbane',
    value: 'Australia/Brisbane',
    tzNum: 10
  },
  {
    label: '(UTC+10:00) 符拉迪活斯托克',
    enLabel: '(UTC+10:00) Vladivostok',
    value: 'Asia/Vladivostok',
    tzNum: 10
  },
  {
    label: '(UTC+10:00) 关岛，莫尔兹比港',
    enLabel: '(UTC+10:00) Guam, Port Moresby',
    value: 'Pacific/Port_Moresby',
    tzNum: 10
  },
  {
    label: '(UTC+10:00) 霍巴特',
    enLabel: '(UTC+10:00) Hobart',
    value: 'Australia/Hobart',
    tzNum: 10
  },
  {
    label: '(UTC+10:00) 堪培拉，墨尔本，悉尼',
    enLabel: '(UTC+10:00) Canberra, Melbourne, Sydney',
    value: 'Australia/Sydney',
    tzNum: 10
  },
  {
    label: '(UTC+10:30) 豪勋爵岛',
    enLabel: '(UTC+10:30) Lord Howe Island',
    value: 'Australia/Lord_Howe',
    tzNum: 10.5
  },
  {
    label: '(UTC+11:00) 布干维尔岛',
    enLabel: '(UTC+11:00) Bougainville',
    value: 'Pacific/Bougainville',
    tzNum: 11
  },
  {
    label: '(UTC+11:00) 马加丹',
    enLabel: '(UTC+11:00) Magadan',
    value: 'Asia/Magadan',
    tzNum: 11
  },
  {
    label: '(UTC+11:00) 诺福克岛',
    enLabel: '(UTC+11:00) Norfolk Island',
    value: 'Pacific/Norfolk',
    tzNum: 11
  },
  {
    label: '(UTC+11:00) 乔库尔达赫',
    enLabel: '(UTC+11:00) Joe Culdach',
    value: 'Asia/Srednekolymsk',
    tzNum: 11
  },
  {
    label: '(UTC+11:00) 萨哈林',
    enLabel: '(UTC+11:00) Sakhalin',
    value: 'Asia/Sakhalin',
    tzNum: 11
  },
  {
    label: '(UTC+11:00) 所罗门群岛，新喀里多尼亚',
    enLabel: '(UTC+11:00) Solomon Islands, New Caledonia',
    value: 'Pacific/Guadalcanal',
    tzNum: 11
  },
  {
    label: '(UTC+12:00) 阿纳德尔，堪察加彼得罗巴甫洛夫斯克',
    enLabel: '(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky',
    value: 'Asia/Kamchatka',
    tzNum: 12
  },
  {
    label: '(UTC+12:00) 奥克兰，惠灵顿',
    enLabel: '(UTC+12:00) Auckland, Wellington',
    value: 'Pacific/Auckland',
    tzNum: 12
  },
  {
    label: '(UTC+12:00) 斐济',
    enLabel: '(UTC+12:00) Fiji',
    value: 'Pacific/Fiji',
    tzNum: 12
  },
  {
    label: '(UTC+12:00) 协调世界时+12',
    enLabel: '(UTC+12:00) Coordinated Universal Time +12',
    value: 'Etc/GMT-12',
    tzNum: 12
  }
  // {
  //   label: '(UTC+12:45) 查塔姆群岛',
  //   enLabel: '(UTC+12:45) Chatham Islands',
  //   value: 'Pacific/Chatham',
  //   tzNum: 12.75,
  // },
  // {
  //   label: '(UTC+13:00) 努库阿洛法',
  //   enLabel: '(UTC+13:00) Nukualofa',
  //   value: 'Pacific/Tongatapu',
  //   tzNum: 13,
  // },
  // {
  //   label: '(UTC+13:00) 萨摩亚群岛',
  //   enLabel: '(UTC+13:00) Samoa',
  //   value: 'Pacific/Apia',
  //   tzNum: 13,
  // },
  // {
  //   label: '(UTC+13:00) 协调世界时+13',
  //   enLabel: '(UTC+13:00) Coordinated Universal Time +13',
  //   value: 'Etc/GMT-13',
  //   tzNum: 13,
  // },
  // {
  //   label: '(UTC+14:00) 圣诞岛',
  //   enLabel: '(UTC+14:00) Christmas Island',
  //   value: 'Pacific/Kiritimati',
  //   tzNum: 14,
  // },
];
