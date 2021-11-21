export interface PersonStateInterface {
  prop: boolean;
  persons: Array<Person>;
}

export interface Person {
  "Timestamp": string;
  "Email Address": string
  "Full Name": string
  "State of origin": string
  "Phone number": string
  "Nick name (optional)": string
  "Hobbies and passion": string
  "Photo (passport)": string
}

function state(): PersonStateInterface {
  return {
    prop: false,
    persons: [
      {
        "Timestamp": "5/10/2021 12:03:54",
        "Email Address": "",
        "Full Name": "Echemazu Ezinne chinonso ",
        "State of origin": "",
        "Phone number": "08143874597",
        "Nick name (optional)": "",
        "Hobbies and passion": "Reading , traveling and watching movies\nTo be able to give back to the society especially to the less privilege.",
        "Photo (passport)": "https://drive.google.com/open?id=1IcTfjc-eSfVLVkQSw_hIbSoVv7HwXFdp"
      },
      {
        "Timestamp": "6/23/2021 8:01:51",
        "Email Address": "",
        "Full Name": "ONYIA COLLINS CHINONSO",
        "State of origin": "Enugu",
        "Phone number": "08184552139, 08143069996",
        "Nick name (optional)": "Nonycollins ",
        "Hobbies and passion": "Music, football, painting, Surfing the net.",
        "Photo (passport)": "https://drive.google.com/open?id=1vYiSzrwIUSM8ULhqWxdZ4nRcRQEQGRPF"
      },
      {
        "Timestamp": "6/23/2021 8:33:48",
        "Email Address": "",
        "Full Name": "Oguejiofor Loveline Amarachi",
        "State of origin": "Anambra state",
        "Phone number": "07067987232",
        "Nick name (optional)": "Amy",
        "Hobbies and passion": "Traveling and cooking",
        "Photo (passport)": "https://drive.google.com/open?id=1NzU2uxxmMK9kpHNS6OQFIOcOOp3Zz9ir"
      },
      {
        "Timestamp": "6/23/2021 8:56:13",
        "Email Address": "",
        "Full Name": "Aliozor Theresa Ijeoma ",
        "State of origin": "Iwollo Oghe In Ezeagu Local Government Area EnuguState",
        "Phone number": "08063697226",
        "Nick name (optional)": "Tessy",
        "Hobbies and passion": "Reading",
        "Photo (passport)": "https://drive.google.com/open?id=1gYKZD17Btetih-aDn7iveY5BbN7UXCSG"
      },
      {
        "Timestamp": "6/23/2021 10:13:44",
        "Email Address": "",
        "Full Name": "Onyekwelu Victoria N",
        "State of origin": "Anambra",
        "Phone number": "08063303390",
        "Nick name (optional)": "",
        "Hobbies and passion": "Learning and self growth",
        "Photo (passport)": "https://drive.google.com/open?id=1R4Jakm0zbDbnM9oRsngl42JZV6XG1Nxr"
      },
      {
        "Timestamp": "6/23/2021 17:55:50",
        "Email Address": "",
        "Full Name": "Destiny chukwudi Egwim ",
        "State of origin": "IMO state ",
        "Phone number": "08113420623",
        "Nick name (optional)": "Snazzy(Snazzyxchange)",
        "Hobbies and passion": "Disk jockey and football",
        "Photo (passport)": "https://drive.google.com/open?id=1CXfdOj0iUdJlE_aOWQgUJ6qDDFYAOqPY"
      },
      {
        "Timestamp": "6/23/2021 18:37:49",
        "Email Address": "miraclechidiebere99@gmail.com",
        "Full Name": "UGWUJA, MIRACLE CHIDIEBERE",
        "State of origin": "ENUGU STATE",
        "Phone number": "08104000467",
        "Nick name (optional)": "Mimi",
        "Hobbies and passion": "I love reading, travelling and sports.",
        "Photo (passport)": "https://drive.google.com/open?id=1lh8KQxOXsb_rrZ-N6sYVxeIjEq_G4HvN"
      },
      {
        "Timestamp": "6/23/2021 18:48:21",
        "Email Address": "amujiamaka@gmail.com",
        "Full Name": "Amuji Amaka",
        "State of origin": "Enugu ",
        "Phone number": "07064430452",
        "Nick name (optional)": "Former Vice President of SCSN",
        "Hobbies and passion": "Dancing ",
        "Photo (passport)": "https://drive.google.com/open?id=1XfpiIfj8h4CKmh1CjqhZM1D84W5-1W6n"
      },
      {
        "Timestamp": "6/23/2021 18:49:31",
        "Email Address": "pmarky598@gmail.com",
        "Full Name": "Onyekwelu Jacinta chiamaka",
        "State of origin": "Anambra",
        "Phone number": "08163101484",
        "Nick name (optional)": "Marky",
        "Hobbies and passion": "Acting and traveling",
        "Photo (passport)": "https://drive.google.com/open?id=1Mha_ZoPIGVEFnirm5FqktUrYFbVw2mn9"
      },
      {
        "Timestamp": "6/23/2021 19:01:48",
        "Email Address": "Ndomewisdom2000@gmail.com",
        "Full Name": "Ndome wisdom Nneke ",
        "State of origin": "Cross river ",
        "Phone number": "08169434966",
        "Nick name (optional)": "Mailady ",
        "Hobbies and passion": "Cooking and  listening to good songs and having fun ",
        "Photo (passport)": "https://drive.google.com/open?id=15I3vzQ6E7iGI1w9Cg9BU99HmtdaXhrtB"
      },
      {
        "Timestamp": "6/23/2021 20:25:25",
        "Email Address": "nnenna.uja.231837@unn.edu.ng",
        "Full Name": "Nnenna Amarachi Uja",
        "State of origin": "Ebonyi state",
        "Phone number": "08058334144",
        "Nick name (optional)": "Nnenna",
        "Hobbies and passion": "",
        "Photo (passport)": "https://drive.google.com/open?id=1ABksE2U7KEpDxUaacrurIUbT6g0Cueha"
      },
      {
        "Timestamp": "6/24/2021 16:59:48",
        "Email Address": "dumewuzie@gmail.com",
        "Full Name": "Umewuzie daniel somtochukwu",
        "State of origin": "ANAMBRA",
        "Phone number": "09091455909",
        "Nick name (optional)": "danny pacheco",
        "Hobbies and passion": "Meeting new people",
        "Photo (passport)": "https://drive.google.com/open?id=1hPUjXje2_VEjdO6Alzv1ANy_msH7mPYv"
      },
      {
        "Timestamp": "6/25/2021 8:23:34",
        "Email Address": "mirianonyeka@gmail.com",
        "Full Name": "ONYEKA MIRIAN EZIOMUME",
        "State of origin": "IMO",
        "Phone number": "07067063109",
        "Nick name (optional)": "TZION-BABE",
        "Hobbies and passion": "SINGING, DANCING AND SPORTS (FOOTBALL)",
        "Photo (passport)": "https://drive.google.com/open?id=1bbXYQe8oWlu_e5hsBi8_Rii5DkZcGVl9"
      },
      {
        "Timestamp": "6/25/2021 12:35:45",
        "Email Address": "onyemas2015@gmail.com",
        "Full Name": "Onyebuchi Mascot Chukwunalum",
        "State of origin": "IMO",
        "Phone number": "09013391403",
        "Nick name (optional)": "",
        "Hobbies and passion": "Teaching",
        "Photo (passport)": "https://drive.google.com/open?id=1wANa4gge_g7_C7M0_v-Uwy4_kVQRaSUE"
      },
      {
        "Timestamp": "6/29/2021 8:01:17",
        "Email Address": "fc.marvlyn@gmail.com",
        "Full Name": "Kalu Ugochukwu Perfect",
        "State of origin": "ABIA",
        "Phone number": "07058329670",
        "Nick name (optional)": "El Perffectto ",
        "Hobbies and passion": "",
        "Photo (passport)": "https://drive.google.com/open?id=1LD9B0f01iSWHuB52lXovWPuPwNw7rhNb"
      },
      {
        "Timestamp": "6/29/2021 8:07:23",
        "Email Address": "vivianokoli96@gmail.com",
        "Full Name": "Okoli ifeyinwa Vivian ",
        "State of origin": "ANAMBRA",
        "Phone number": "09022755587/08072757749",
        "Nick name (optional)": "Anne ",
        "Hobbies and passion": "Dancing ",
        "Photo (passport)": "https://drive.google.com/open?id=1gnH8mL6c6824tQjRqwtQLMX1mfhiJLwh"
      },
      {
        "Timestamp": "6/29/2021 8:10:13",
        "Email Address": "gflow2182@gmail.com",
        "Full Name": "Moses Glory Ifechukwu",
        "State of origin": "DELTA",
        "Phone number": "08124026622",
        "Nick name (optional)": "Ifyy",
        "Hobbies and passion": "Singing, travelling and movies",
        "Photo (passport)": "https://drive.google.com/open?id=1GpEzYC5_ui8pWKQOjWcJjJBX6RqzZFIZ"
      },
      {
        "Timestamp": "6/29/2021 13:56:10",
        "Email Address": "amakachi89@gmail.com",
        "Full Name": "Chukwuemeka Genevieve chiamaka ",
        "State of origin": "IMO",
        "Phone number": "09066993549, 09031343975",
        "Nick name (optional)": "Genie",
        "Hobbies and passion": "Reading  books, music, arts, learning new things",
        "Photo (passport)": "https://drive.google.com/open?id=11QYrgbUkiyij5R9cmeSorTGZZFUGr4kh"
      },
      {
        "Timestamp": "6/29/2021 13:26:55",
        "Email Address": "obajohn75@gmail.com",
        "Full Name": "Oba John Obinna",
        "State of origin": "ENUGU",
        "Phone number": "09032295527",
        "Nick name (optional)": "Ojo",
        "Hobbies and passion": "Coding, Football and Teaching",
        "Photo (passport)": "https://drive.google.com/open?id=1WWcuYyEGRCbbQQzO8ksKlQx43H9MuR8U"
      },
      {
        "Timestamp": "6/29/2021 22:25:02",
        "Email Address": "guruchris1998@gmail.com",
        "Full Name": "Christian Ebube Onuigbo (CEO)",
        "State of origin": "ENUGU",
        "Phone number": "08165685659",
        "Nick name (optional)": "Aboobae",
        "Hobbies and passion": "Listening to musics, chat with friends, cooking. Bringing out the best in something or someone, die putting in efforts to build a better tomorrow. LOVE",
        "Photo (passport)": "https://drive.google.com/open?id=1ernwRkU3ptIrN_61doqiULD4BkZHJ12n"
      },
      {
        "Timestamp": "6/30/2021 7:53:31",
        "Email Address": "onyinye.okechukwu007@gmail.com",
        "Full Name": "Okechukwu Onyinye Cynthia ",
        "State of origin": "ANAMBRA",
        "Phone number": "07037200888",
        "Nick name (optional)": "Omalicha ",
        "Hobbies and passion": "Being a philanthropist ",
        "Photo (passport)": "https://drive.google.com/open?id=1yp06pjPL0A4Nmt3QgRCdhAE402P0lwT8"
      },
      {
        "Timestamp": "6/30/2021 10:40:32",
        "Email Address": "chinenye.onyekaba.231824@unn.edu.ng",
        "Full Name": "Onyekaba Afomachukwu Chinenye",
        "State of origin": "ANAMBRA",
        "Phone number": "08140769774",
        "Nick name (optional)": "Princess",
        "Hobbies and passion": "Reading, programming, swimming, initiating conversations, ",
        "Photo (passport)": "https://drive.google.com/open?id=1fkG0RIuLLSOMltILCPobs_YUrV9Vrs59"
      },
      {
        "Timestamp": "6/30/2021 10:52:44",
        "Email Address": "lilchianna@gmail.com",
        "Full Name": "Lilian Chinwemmeri Amajuoyi ",
        "State of origin": "IMO",
        "Phone number": "7060760159",
        "Nick name (optional)": "Lilie",
        "Hobbies and passion": "Adventures",
        "Photo (passport)": "https://drive.google.com/open?id=153fq0vt6-BKwy6oAEt6ikaZnZ2Qm9L_N"
      },
      {
        "Timestamp": "6/30/2021 11:01:29",
        "Email Address": "nancyekuma40@gmail.com",
        "Full Name": "Ekuma Nancy Oluchi",
        "State of origin": "EBONYI",
        "Phone number": "08100553571",
        "Nick name (optional)": "Lulu",
        "Hobbies and passion": "Travelling, Cooking, Shopping",
        "Photo (passport)": "https://drive.google.com/open?id=1hMfE-jyfvnLCG44YAsZQi_Mke_dUnq-a"
      },
      {
        "Timestamp": "6/30/2021 11:02:20",
        "Email Address": "chidinmashantel5@gmail.com",
        "Full Name": "Mbanasor Chidinma Grace",
        "State of origin": "IMO",
        "Phone number": "07037499341",
        "Nick name (optional)": "Shantel",
        "Hobbies and passion": "Dancing",
        "Photo (passport)": "https://drive.google.com/open?id=1ALG2YzcgLwi-h1RDmOn2tnM9InweUFza"
      },
      {
        "Timestamp": "6/30/2021 11:48:53",
        "Email Address": "richardinnocent033@gmail.com",
        "Full Name": "Richard Innocent",
        "State of origin": "ANAMBRA",
        "Phone number": "08165074551",
        "Nick name (optional)": "",
        "Hobbies and passion": "Studying, gaming and movies.",
        "Photo (passport)": "https://drive.google.com/open?id=1i_po-lzmJ9J3jxJURH_o5tSWhbc6rJc1"
      },
      {
        "Timestamp": "6/30/2021 12:21:24",
        "Email Address": "nwegbupraise@gmail.com",
        "Full Name": "Nwegbu Praise Chiagozie Toochukwu ",
        "State of origin": "ANAMBRA",
        "Phone number": "09037166225, 08103138790",
        "Nick name (optional)": "",
        "Hobbies and passion": "Football, watching news updates, politics and being happy",
        "Photo (passport)": "https://drive.google.com/open?id=1BIyjHQptHxLQM5sYFOzBp6AWATK2-TQi"
      },
      {
        "Timestamp": "6/30/2021 13:07:03",
        "Email Address": "akpusuone@yahoo.com",
        "Full Name": "Ushie Francis Akpusu",
        "State of origin": "CROSS-RIVER",
        "Phone number": "08109553726",
        "Nick name (optional)": "U_F_Akpusu",
        "Hobbies and passion": "Singing, Dancing, listening to music and watching of Movies.",
        "Photo (passport)": "https://drive.google.com/open?id=1yE6ed03t5rcIsWuYwYMJWOT40BNhg0vj"
      },
      {
        "Timestamp": "6/30/2021 20:55:11",
        "Email Address": "anayochukwuclement@gmail.com",
        "Full Name": "Alumona clement anayochukwu",
        "State of origin": "ENUGU",
        "Phone number": "08106963320",
        "Nick name (optional)": "clemzy",
        "Hobbies and passion": "Writing",
        "Photo (passport)": "https://drive.google.com/open?id=1WON1z5ddJgtfggkEfPiNLBCwHvymiQkZ"
      },
      {
        "Timestamp": "6/30/2021 21:55:28",
        "Email Address": "pg4chinwe@gmail.com",
        "Full Name": "Okeke Preciousgift ",
        "State of origin": "IMO",
        "Phone number": "8145869983",
        "Nick name (optional)": "PG",
        "Hobbies and passion": "Movies, Singing, Content creation and photography",
        "Photo (passport)": "https://drive.google.com/open?id=1BJXHSYIJR7v7IIceewEsctTxTc5h9d0o"
      },
      {
        "Timestamp": "6/30/2021 22:13:36",
        "Email Address": "donald.nsobundu.233010@unn.edu.ng",
        "Full Name": "Nsobundu Chukwuebuka Donald",
        "State of origin": "ANAMBRA",
        "Phone number": "08136745354 08133432890",
        "Nick name (optional)": "NcDonald",
        "Hobbies and passion": "Sports,Cooking, impacting life",
        "Photo (passport)": "https://drive.google.com/open?id=1nsNZAhG2rPgXUAfxxMYNwmKg0ASKPiQt"
      },
      {
        "Timestamp": "6/30/2021 22:28:07",
        "Email Address": "McCweez83@gmail.com",
        "Full Name": "Orie Kingsley chukwuebuka",
        "State of origin": "EBONYI",
        "Phone number": "09092541812, 07016270120, 08100390186",
        "Nick name (optional)": "Oreos_kizo ",
        "Hobbies and passion": "Music, football, weed 😏",
        "Photo (passport)": "https://drive.google.com/open?id=1TFjiWmVgCBQMcI46lmIlvg0U3-20_kia"
      },
      {
        "Timestamp": "7/1/2021 10:08:20",
        "Email Address": "payee57@gmail.com",
        "Full Name": "Okoro Franklin Chisom",
        "State of origin": "ENUGU",
        "Phone number": "08022115831, 07030910466",
        "Nick name (optional)": "Mon Payee",
        "Hobbies and passion": "Music",
        "Photo (passport)": "https://drive.google.com/open?id=1vLHXrei1LcVSdUAvo9eHxNItBLLH-Can"
      },
      {
        "Timestamp": "7/5/2021 6:42:19",
        "Email Address": "Soniayujay60@gmail.com",
        "Full Name": "Fabian Sonia Ujunwa",
        "State of origin": "ENUGU",
        "Phone number": "07062921262 or 09050376737",
        "Nick name (optional)": "Cherished Diamond",
        "Hobbies and passion": "Hobbies: cooking, traveling, listening to music and reasonable discussions and seeing movies.\nPassion: I have a great interest on becoming a creative fashion designer and a business icon.",
        "Photo (passport)": "https://drive.google.com/open?id=1_rRt82UA5CQI3U2hwwedxTpD_q4znhv9"
      },
      {
        "Timestamp": "7/6/2021 6:46:42",
        "Email Address": "prosperchibuike4@gmail.com",
        "Full Name": "Onyema chibuike prosper",
        "State of origin": "ABIA",
        "Phone number": "07068451642",
        "Nick name (optional)": "Skippo",
        "Hobbies and passion": "Sports, precisely football and being true to myself,confident in my own judgment/decisions",
        "Photo (passport)": "https://drive.google.com/open?id=1UABKDLvjfmUUp7x4AGdLhyK7grrnadXo"
      },
      {
        "Timestamp": "7/9/2021 8:35:40",
        "Email Address": "kasieugwu@gmail.com",
        "Full Name": "Ugwu Kasiemobi Perpetua",
        "State of origin": "ENUGU",
        "Phone number": "07030366066/08179025263",
        "Nick name (optional)": "Costly Damsel ",
        "Hobbies and passion": "",
        "Photo (passport)": "https://drive.google.com/open?id=1PKmR_fINlCD_SUHBVCTmxnFamUqgRr3c"
      },
      {
        "Timestamp": "7/15/2021 15:48:24",
        "Email Address": "fortunechinke12@gmail.com",
        "Full Name": "Fortune chinke",
        "State of origin": "ABIA",
        "Phone number": "08101788131",
        "Nick name (optional)": "Bhlue",
        "Hobbies and passion": "Forex trader, football, gamer",
        "Photo (passport)": "https://drive.google.com/open?id=110zlO30xc9Sdr9UmFaGoToAeyjmdGRsY"
      },
      {
        "Timestamp": "7/16/2021 22:18:39",
        "Email Address": "beatriceagu50@gmail.com",
        "Full Name": "Agukpo Beatrice Nneka ",
        "State of origin": "ENUGU",
        "Phone number": "07050459080",
        "Nick name (optional)": "Tricy",
        "Hobbies and passion": "Love listen to music / dancing ",
        "Photo (passport)": "https://drive.google.com/open?id=1JUFo3YjavQbdFCUk-6ODEXPvey3i8GSE"
      },
      {
        "Timestamp": "7/19/2021 13:04:09",
        "Email Address": "ezenwagodspower4@gmail.com",
        "Full Name": "Ezenwa Chimdike Godspower",
        "State of origin": "ANAMBRA",
        "Phone number": "08139091962",
        "Nick name (optional)": "",
        "Hobbies and passion": "Traveling, watching football, singing and reading",
        "Photo (passport)": "https://drive.google.com/open?id=1NOFmKAsmDKikT0cGMyRd9KjlsRTRZ9wb"
      },
      {
        "Timestamp": "7/19/2021 13:58:37",
        "Email Address": "nnabik255@gmail.com",
        "Full Name": "Ezeha Nnabuike Malachy",
        "State of origin": "ENUGU",
        "Phone number": "08066189173",
        "Nick name (optional)": "",
        "Hobbies and passion": "Reading",
        "Photo (passport)": "https://drive.google.com/open?id=1X4-WC1nK80drE4j7o_1p4ruJHwB1isBH"
      },
      {
        "Timestamp": "7/19/2021 13:58:41",
        "Email Address": "mmems.elle.020@gmail.com",
        "Full Name": "Ugwueke mmesom m",
        "State of origin": "ENUGU",
        "Phone number": "08143660228",
        "Nick name (optional)": "Mmemme",
        "Hobbies and passion": "Adventures, singing, trading",
        "Photo (passport)": "https://drive.google.com/open?id=1WFNR-vwyWmuHde5KGFVgJFZN-S0g5F80"
      },
      {
        "Timestamp": "7/19/2021 13:58:46",
        "Email Address": "kelvininnocent97@yahoo.com",
        "Full Name": "UDEBUANI INNOCENT EBUKA",
        "State of origin": "ANAMBRA",
        "Phone number": "08168212878",
        "Nick name (optional)": "LIONSHEGZY",
        "Hobbies and passion": "BOOKS ",
        "Photo (passport)": "https://drive.google.com/open?id=1kbtgFJTBEF-H6VTa4utebD7CS7XexJiB"
      },
      {
        "Timestamp": "7/19/2021 13:59:34",
        "Email Address": "chekwubecordelia7@gmail.com",
        "Full Name": "Ikeamaka chekwube cordelia",
        "State of origin": "ANAMBRA",
        "Phone number": "08183107258",
        "Nick name (optional)": "Sasha",
        "Hobbies and passion": "Watching movies",
        "Photo (passport)": "https://drive.google.com/open?id=1Z_jWnGQZbzrqbIy3Hhdz-Ry669jmwwgp"
      },
      {
        "Timestamp": "7/19/2021 14:01:53",
        "Email Address": "onuorahcynthia96@gmail.com",
        "Full Name": "Onuorah Chioma Cynthia ",
        "State of origin": "ANAMBRA",
        "Phone number": "9060233799",
        "Nick name (optional)": "Oma",
        "Hobbies and passion": "Watching movie ",
        "Photo (passport)": "https://drive.google.com/open?id=1NJNtZgvSoZzENip-1W9-bR14y0LXS0G3"
      },
      {
        "Timestamp": "7/19/2021 14:59:45",
        "Email Address": "nwosudebbie@gmail.com",
        "Full Name": "Nwosu Chidiebere.M.",
        "State of origin": "ANAMBRA",
        "Phone number": "08103333019",
        "Nick name (optional)": "Debbs",
        "Hobbies and passion": "Touch lives, travel the word and be on screens",
        "Photo (passport)": "https://drive.google.com/open?id=1BBf_5BJZ8MThEgO6-i5B9UlVl7vZUava"
      },
      {
        "Timestamp": "7/19/2021 17:26:17",
        "Email Address": "ikechukwuezenwa84@gmail.com",
        "Full Name": "Ikechukwu ThankGod Ezenwa",
        "State of origin": "ANAMBRA",
        "Phone number": "07033550857",
        "Nick name (optional)": "Machiavelli (Prof)",
        "Hobbies and passion": "Looking for trouble, making friends and enjoying life. ",
        "Photo (passport)": "https://drive.google.com/open?id=1eReCIuzvWDm0SsQaSanKd57JrdfSTpba"
      },
      {
        "Timestamp": "7/19/2021 17:44:17",
        "Email Address": "corneludochukwu@gmail.com",
        "Full Name": "Ugwuanyi Cornelius udochukwu",
        "State of origin": "ENUGU",
        "Phone number": "08144487746",
        "Nick name (optional)": "Cornel",
        "Hobbies and passion": "Football and reading",
        "Photo (passport)": "https://drive.google.com/open?id=1yDA6dZGL7zA_TercYbDsVIVo6L6LC7SE"
      },
      {
        "Timestamp": "7/19/2021 21:07:21",
        "Email Address": "whizcally@gmail.com",
        "Full Name": "Ogbodo Callistus Onyekaozuru",
        "State of origin": "ENUGU",
        "Phone number": "2348100805930",
        "Nick name (optional)": "Amadioha",
        "Hobbies and passion": "Football and writing",
        "Photo (passport)": "https://drive.google.com/open?id=1IFD9jtFuiTqUowqmAAyWvgGwZbZVz-aP"
      },
      {
        "Timestamp": "7/19/2021 21:11:13",
        "Email Address": "kingstonn.kk@gmail.com",
        "Full Name": "Mba Kingsley. J",
        "State of origin": "ANAMBRA",
        "Phone number": "08140185351",
        "Nick name (optional)": "Kingston ",
        "Hobbies and passion": "Video games and sport",
        "Photo (passport)": "https://drive.google.com/open?id=1ueRpKqiyAK6wdat5M_PavCGavqiHtiKJ"
      },
      {
        "Timestamp": "7/19/2021 21:24:18",
        "Email Address": "greatantholight@gmail.com",
        "Full Name": "Anthony Jerry Kalu",
        "State of origin": "ABIA",
        "Phone number": "08140660972",
        "Nick name (optional)": "Tonyjerry",
        "Hobbies and passion": "",
        "Photo (passport)": "https://drive.google.com/open?id=1CMPLy7_SZwBszlUzAF_ZeUcX3hSHvwVc"
      },
      {
        "Timestamp": "7/20/2021 4:51:43",
        "Email Address": "emmacephas2@gmail.com",
        "Full Name": "Emmanuel Chekwube Nwabueze ",
        "State of origin": "",
        "Phone number": "09034777439",
        "Nick name (optional)": "emCEPHAS",
        "Hobbies and passion": "Football ",
        "Photo (passport)": "https://drive.google.com/open?id=1m3wySojNNSA6FgY9p2xOjbt8Q64db-PY"
      },
      {
        "Timestamp": "7/20/2021 6:44:45",
        "Email Address": "osimiridebbieogechi@gmail.com",
        "Full Name": "Osimiri Ogechi Deborah ",
        "State of origin": "IMO",
        "Phone number": "09063620174",
        "Nick name (optional)": "Debbie ",
        "Hobbies and passion": "Cooking and dancing ",
        "Photo (passport)": "https://drive.google.com/open?id=14cWhdKe5PEWnx2mYrT2Y3UJ9Deh9zLbN"
      },
      {
        "Timestamp": "7/20/2021 7:15:08",
        "Email Address": "zeeugwu235049@gmail.com",
        "Full Name": "Ezinne Evelyn Ugwu",
        "State of origin": "ENUGU",
        "Phone number": "08140852487",
        "Nick name (optional)": "Zinney",
        "Hobbies and passion": "Reading, singing, dancing, teaching, listening to stories, debating, drawing, watching movies, and writing.",
        "Photo (passport)": "https://drive.google.com/open?id=1sSTbDxy0Em7lct6Fn7V7c90mZULyGyl-"
      },
      {
        "Timestamp": "7/20/2021 10:43:19",
        "Email Address": "chigoziedike29@gmail.com",
        "Full Name": "Idike Vitus Chigozie",
        "State of origin": "ENUGU",
        "Phone number": "08165688822",
        "Nick name (optional)": "Phoenix",
        "Hobbies and passion": "",
        "Photo (passport)": "https://drive.google.com/open?id=1RqF_GhkLwYni8e0LK3_zr3R699DpOJe5"
      },
      {
        "Timestamp": "7/21/2021 12:35:54",
        "Email Address": "joshua.okoro.238315@unn.edu.ng",
        "Full Name": "Okoro Joshua Tochukwu",
        "State of origin": "EBONYI",
        "Phone number": "09059229275",
        "Nick name (optional)": "Josh",
        "Hobbies and passion": "Reading and research",
        "Photo (passport)": "https://drive.google.com/open?id=1smOekuVVi0NJoHg-03BG_6zAalYsHgtW"
      },
      {
        "Timestamp": "7/22/2021 13:54:47",
        "Email Address": "Cornellius1058@gmail.com",
        "Full Name": "UGWOKE CORNELLIUS CHUKWUEBUKA",
        "State of origin": "ENUGU",
        "Phone number": "07064261058",
        "Nick name (optional)": "MEMPHIS",
        "Hobbies and passion": "FOOTBALL and EATING",
        "Photo (passport)": "https://drive.google.com/open?id=19iJrwOO1qNel5Bnv5IhEjPqj3i_oJ061"
      },
      {
        "Timestamp": "7/21/2021 21:48:06",
        "Email Address": "joyceorji547@gmail.com",
        "Full Name": "Orji ChinasaJoy",
        "State of origin": "ENUGU",
        "Phone number": "08107290849",
        "Nick name (optional)": "",
        "Hobbies and passion": "Singing /travelling",
        "Photo (passport)": "https://drive.google.com/open?id=1_rlTbjwINvQSvuMvL2Q0GcGMQg5NVNSF"
      },
      {
        "Timestamp": "7/21/2021 22:29:14",
        "Email Address": "charlieboi20012@gmail.com",
        "Full Name": "Imoagwu Somtochukwu Charles",
        "State of origin": "EBONYI",
        "Phone number": "09029984100",
        "Nick name (optional)": "Charly",
        "Hobbies and passion": "Playing Games and Driving, To be made",
        "Photo (passport)": "https://drive.google.com/open?id=12mE2VYI6_4jSlI1WQQShgnfoS441CGGj"
      },
      {
        "Timestamp": "7/22/2021 13:59:21",
        "Email Address": "Emetojosiah@gmail.com",
        "Full Name": "EMETO CHUKWUEMEKA JOSIAH",
        "State of origin": "IMO",
        "Phone number": "07031146337",
        "Nick name (optional)": "Sir TT",
        "Hobbies and passion": "EATING ",
        "Photo (passport)": "https://drive.google.com/open?id=1jEwscnr4mnvNryMtiGMz28ATj0H-aUuM"
      },
      {
        "Timestamp": "7/24/2021 8:26:30",
        "Email Address": "kingsley4151@gmail.com",
        "Full Name": "ODO CHINEDU KINGSLEY",
        "State of origin": "ENUGU",
        "Phone number": "07058644038",
        "Nick name (optional)": "Martinez",
        "Hobbies and passion": "Football",
        "Photo (passport)": "https://drive.google.com/open?id=1dyRq2ngHHCueIRhpXM3RAIfQBCM2_mRJ"
      },
      {
        "Timestamp": "8/5/2021 20:57:21",
        "Email Address": "agwuazinne@gmail.com",
        "Full Name": "Agwu Ebube-Ezinne Cynthia",
        "State of origin": "ENUGU",
        "Phone number": "09034911440",
        "Nick name (optional)": "Azinne",
        "Hobbies and passion": "Traveling and Eating ",
        "Photo (passport)": "https://drive.google.com/open?id=16BO7b4PgnAgcBiEdeL6Rhym5yZz65aq6"
      },
      {
        "Timestamp": "8/9/2021 18:32:10",
        "Email Address": "ezeamatuchiamaka@gmail.com",
        "Full Name": "Ezeamatu Marycynthia Chiamaka",
        "State of origin": "ANAMBRA",
        "Phone number": "+234 903 410 5994",
        "Nick name (optional)": "Macky",
        "Hobbies and passion": "Fashion designing and baking",
        "Photo (passport)": "https://drive.google.com/open?id=1axoqww0NwCQLWMOPxe4-WiHMUiHPXcwt"
      },
      {
        "Timestamp": "8/10/2021 13:13:20",
        "Email Address": "chinonso.echemazu.234495@unn.edu.ng",
        "Full Name": "Echemazu Ezinne Chinonso",
        "State of origin": "ENUGU",
        "Phone number": "08143874597",
        "Nick name (optional)": "Zinny",
        "Hobbies and passion": "Adventures, Reading and Movies",
        "Photo (passport)": "https://drive.google.com/open?id=17YJ0iEYWc8KGFxHt_2Cz4lKyS2SXhM04"
      },
      {
        "Timestamp": "8/10/2021 20:36:37",
        "Email Address": "goodnesschioma88@gmail.com",
        "Full Name": "Chukwudi Goodness Chioma",
        "State of origin": "ENUGU",
        "Phone number": "08181768373",
        "Nick name (optional)": "",
        "Hobbies and passion": "Impacting lives",
        "Photo (passport)": "https://drive.google.com/open?id=10az2p2GATAYohAVHdoJpni3qcZic-Ssk"
      },
      {
        "Timestamp": "8/17/2021 13:59:13",
        "Email Address": "nazysteph9672@gmail.com",
        "Full Name": "Okolo Chinaza Lynda",
        "State of origin": "ENUGU",
        "Phone number": "8136853838",
        "Nick name (optional)": "Gentle breeze",
        "Hobbies and passion": "Music and Education ",
        "Photo (passport)": "https://drive.google.com/open?id=1kytdBMJFEIVorLHM4CcvZkQIju1Q5ZpN"
      },
      {
        "Timestamp": "8/17/2021 13:59:25",
        "Email Address": "goldenprecious245@gmail.com",
        "Full Name": "Nwulu Precious Chidimma",
        "State of origin": "IMO",
        "Phone number": "09085044761",
        "Nick name (optional)": "Presh",
        "Hobbies and passion": "Learning and traveling",
        "Photo (passport)": "https://drive.google.com/open?id=1iB3xIPQlXsoOsooPNp9vq0bdtLaErgrW"
      }
    ]
  };
}

export default state;
