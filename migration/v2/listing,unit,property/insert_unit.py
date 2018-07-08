import pandas as pd
import numpy as np

df = pd.read_csv("unit.csv")
df["property_id"]=df["property_id"].map({
'Villa Melasti Ungasan':'PR0001',\
'PinkCoco Bali':'PR0002',\
'PinkCoco Gili Trawangan':'PR0003',\
'PinkCoco Gili Air':'PR0004',\
'Omah Cening':'PR0005',\
'Villa Lulu':'PR0006',\
'Seno Guesthouse':'PR0007',\
'Sinar Sari Bingin':'PR0008',\
'Shankara Guesthouse':'PR0009',\
'Watusaman':'PR0010',\
'Griya Langen':'PR0011',\
'Sesapi Putih':'PR0012',\
'Homestay Tembi':'PR0013',\
'Rajaklana':'PR0014',\
'Wisma Eyang Sosro':'PR0015',\
'Mule Malu':'PR0016',\
'Double D Guest House':'PR0017',\
'Lorong Homestay':'PR0018',\
'Griya Tiyasan':'PR0019',\
'Wabisabi':'PR0020',\
'Sannyas Yoga House':'PR0021',\
'Double D Guesthouse':'PR0022',\
'Joglo Agung':'PR0023',\
'Villa Shiva':'PR0024',\
'The Miracle Villas':'PR0025',\
'Coffee Network':'PR0026',\
'D\'Java Citra Ayu':'PR0027',\
'D\'Java Omah Sambilegi':'PR0028',\
'Bali Shanti':'PR0029',\
'Cabana Krui Lampung':'PR0030',\
'Le Yanandra':'PR0031',\
'Griya Bausasran 52':'PR0032',\
'Villa Kulat':'PR0033',\
'Pondok Joglo Odit':'PR0034',\
'Bale Tudor':'PR0035',\
'WK Gamat Garden VIlla':'PR0036',\
'Ayu Laba':'PR0037',\
'Summergrass':'PR0038',\
'Batan Sabo':'PR0039',\
'GK Gamat Garden':'PR0040',\
'Posnya Seni Godod':'PR0041',\
'Villa Luna':'PR0042',\
'Little Cabin - The Landmark':'PR0043',\
'Batu Agung Villa':'PR0044',\
'Melin Inn':'PR0045',\
'The Suci Sari':'PR0046',\
'Vinnayaka Guesthouse':'PR0047',\
'Villa Cenik Ubud':'PR0048',\
'Toya Villa Ubud':'PR0049',\
'Villa Casa Mia':'PR0050',\
'Omah JeTeHa':'PR0051',\
'Raka & Rai Guesthouse':'PR0052',\
'William\'s Place':'PR0053',\
'Puri Casablanca':'PR0054',\
'Griya Wirosaban':'PR0055',\
'Toras Guesthouse':'PR0056',\
'Teges Asri':'PR0057',\
'Tegal Panggung':'PR0058',\
'Griya Asih':'PR0059',\
'Griya Siwi':'PR0060',\
'Rumah Kami':'PR0061',\
'Umah Ucok':'PR0062',\
'Rumah Kemang 50':'PR0063',\
'Jogja Dreams':'PR0064',\
'Pendopo 26':'PR0065',\
'Villa The Cantri':'PR0066',\
'Bamboo Villas':'PR0067',\
'Bali Omah':'PR0068',\
'Roemah Canting':'PR0069',\
'Kubu Pande Homestay':'PR0070',\
'Watusaman Homestay':'PR0071',\
'Villa Rama':'PR0072',\
'Adi Bali Homestay':'PR0073',\
'Villa Rizki':'PR0074',\
'Dago Village':'PR0075',\
'Villa Hali':'PR0076',\
'Villa Siaga Raya 77 Mediapura':'PR0077',\
'The Jarrdin Apartment':'PR0078',\
'Ndalem Kasongan':'PR0079',\
'Vila Lila Loka':'PR0080',\
'Yoga Searcher':'PR0081',\
'Villa Purnama':'PR0082',\
'Villa Karang':'PR0083',\
'VOC':'PR0084',\
'D\'Java Timuran':'PR0085',\
'Wiras Village':'PR0086',\
'Villa Vintage 1':'PR0087',\
'Villa Tortoise':'PR0088',\
'Villa Megalan':'PR0089',\
'Villa Shanti':'PR0090',\
'Villa Matahari':'PR0091',\
'Villa Kanha':'PR0092',\
'Villa Istana Willy':'PR0093',\
'Villa Savasana':'PR0094',\
'Villa Sunia':'PR0095',\
'Villa Toya':'PR0096',\
'Villa Merdu':'PR0097',\
'Villa Malindo':'PR0098',\
'Villa Mundaka':'PR0099',\
'Wira Homestay':'PR0100',\
'Villa Idaman':'PR0101',\
'Villa Nazeki':'PR0102',\
'Villa Ganesha':'PR0103',\
'Villa Kama':'PR0104',\
'Villa Kura Kura':'PR0105',\
'Villa Zen & Papaya':'PR0106',\
'Villa Loluan':'PR0107',\
'The Beach House':'PR0108',\
'The Kayuri Canggu':'PR0109',\
'Agung Homestay':'PR0110',\
'The White House':'PR0111',\
'Villa Arindra':'PR0112',\
'Treehouse Suites':'PR0113',\
'Bagong Guesthouse':'PR0114',\
'Uluwatu Village House':'PR0115',\
'Bali Mynah':'PR0116',\
'Villa Akara':'PR0117',\
'Beverly Dago Apartment':'PR0118',\
'Villa Arca':'PR0119',\
'Bingin Ombak':'PR0120',\
'Villa Bali Cliff':'PR0121',\
'Brad\'s Villa':'PR0122',\
'Villa Bija':'PR0123',\
'Villa Casa Putih':'PR0124',\
'Villa Bulan & Cahaya':'PR0125',\
'Come Back Guesthouse':'PR0126',\
'Villa Enzo':'PR0127',\
'D\'Java Gemilang':'PR0128',\
'Denpasar Residence':'PR0129',\
'Dreamview Villa':'PR0130',\
'Full Moon Guesthouse':'PR0131',\
'Villa Mandalay':'PR0132',\
'Gili Eco & Khumba Villas':'PR0133',\
'Hazel House':'PR0134',\
'Kampung Jimba':'PR0135',\
'Villa Sonia':'PR0136',\
'Kubu Tropis':'PR0137',\
'La Cabane':'PR0138',\
'Villas Kemang Timur 5':'PR0139',\
'Lebak Guesthouse':'PR0140',\
'Made Roja Homestay':'PR0141',\
'Barel Apartment':'PR0142',\
'Rock-a-Villa':'PR0143',\
'Ndalem Ngabean':'PR0144',\
'Ocho Bali Villa':'PR0145',\
'Peacock Ubud Inn':'PR0146',\
'Pramestha Resort Town - Alinda':'PR0147',\
'Puri Minggiran':'PR0148',\
'Riverside Cottages':'PR0149',\
'Rumah Lavia':'PR0150',\
'Sahid Sudirman Residence - 27B':'PR0151',\
'9 Nelayan':'PR0152',\
'Saveria Apartment - Steve':'PR0153',\
'Siaga Raya 3 Villas':'PR0155',\
'Srikandi Guesthouse':'PR0156',\
'Surfloge Guesthouse':'PR0157',\
'Taman Melati Margonda':'PR0158',\
'The Alchemist':'PR0159',\
'Kakol Guesthouse':'PR0160',\
'The Paving':'PR0161',\
'?':'PR0162',\
'Tirto Raharjo':'PR0163',\
'Avisara Guesthouse':'PR0164',\
'Uluwatu Jungle Bugalow':'PR0165',\
'Bali Bohemia':'PR0166',\
'Villa Ajee':'PR0167',\
'Batu Jaran Hill':'PR0168',\
'Villa Anak':'PR0169',\
'Bingin Surf Left':'PR0170',\
'Villa Bagus':'PR0171',\
'Bobby\'s Place':'PR0172',\
'Villa Bening':'PR0173',\
'Casa Grande Residence':'PR0174',\
'Villa Bukit Surf':'PR0175',\
'Citra Sun Garden':'PR0176',\
'Villa Entre Amis':'PR0177',\
'D\'Java Babarsari':'PR0178',\
'Villa Hari Indah':'PR0179',\
'DD Ubud Villas':'PR0180',\
'Dinar Hills Villa':'PR0181',\
'Villa Khaleesi':'PR0182',\
'Family Circus':'PR0183',\
'Gatra\'s Ubud Inn':'PR0184',\
'Gravity Villa':'PR0185',\
'Jubilee GuestHouse':'PR0186',\
'Villa Singa':'PR0187',\
'Kubu Nyang Nyang':'PR0188',\
'Kutuh Manak':'PR0189',\
'White Coconut':'PR0190',\
'Like at Home':'PR0191',\
'Mandala House':'PR0192',\
'Moyo & Son Surf Stay':'PR0193',\
'Ndalem Natan':'PR0194',\
'Dago Butik Apartment':'PR0195',\
'NDBV Lot 6':'PR0196',\
'Padang Padang View':'PR0197',\
'Pondok Lulik':'PR0198',\
'Puri Langenarjan':'PR0199',\
'Rama Village':'PR0200',\
'Rumah Eyang':'PR0201',\
'Sahid Residence':'PR0202',\
'Santosha Ubud':'PR0203',\
'Serpong Greenview Apartment':'PR0204',\
'Sleeping Buddha':'PR0205',\
'Suparsa Guesthouse':'PR0206',\
'Taman Bintang':'PR0207',\
'Tembi Rumah Budaya':'PR0208',\
'The Hideaway':'PR0209',\
'808 Residence':'PR0210',\
'The Pakis Hostel':'PR0211',\
'Villa Amelle':'PR0212',\
'Tirtha Canggu Suites':'PR0213',\
'Asri Guest House':'PR0214',\
'Uluwatu Cottages':'PR0215',\
'Balangan Sleep Well':'PR0216',\
'Villa 9 Nelayan':'PR0217',\
'Basura':'PR0218',\
'Villa AKL':'PR0219',\
'The Jepun Bingin':'PR0220',\
'Villa Ayunan':'PR0221',\
'Blue Garden':'PR0222',\
'Villa Be Home':'PR0223',\
'Canggu Suite':'PR0224',\
'Pondok Ijo':'PR0225',\
'Cemara Indah':'PR0226',\
'Villa Driftwood':'PR0227',\
'D\'Java Guest House':'PR0228',\
'D\'Padang':'PR0229',\
'Dhuna Homestay':'PR0230',\
'Emerald Villas':'PR0231',\
'Gangga Guesthouse':'PR0232',\
'Gondang Legi Villas':'PR0233',\
'Jepun Sari':'PR0234',\
'Kiskenda Cottages':'PR0235',\
'Kusuma Guest House':'PR0236',\
'Villa Tykhe':'PR0237',\
'La Joya Biubiu':'PR0238',\
'Lemon Guesthouse':'PR0239',\
'Maha Ungasan':'PR0240',\
'ME Villa':'PR0241',\
'NDBV Lot 3':'PR0242',\
'Omah Lila':'PR0243',\
'Pejaten Valley':'PR0244',\
'Puri Kelapa':'PR0245',\
'Puri Sabina':'PR0246',\
'Royal Majestic Villa':'PR0247',\
'Rumah Teteh':'PR0248',\
'Sanata Yoga Guesthouse':'PR0249',\
'Secret Garden':'PR0250',\
'Sisin Uma Homestay':'PR0251',\
'Sunset Condotel Kuta':'PR0252',\
'Taman Amertha':'PR0253',\
'The Gong':'PR0254',\
'Redsalt':'PR0255',\
'The Khama Villas':'PR0256',\
'Villa Ambalama':'PR0257',\
'Three Monkeys':'PR0258',\
'Armaya Homestay':'PR0259',\
'Ubud Indah':'PR0260',\
'Balangan Cottages':'PR0261',\
'V Residence':'PR0262',\
'Bangka Suites':'PR0263',\
'Villa Akilea':'PR0264',\
'':'PR0265',\
'Villa Asmara':'PR0266',\
'Biubiu Kumala S01':'PR0267',\
'Villa Bambu':'PR0268',\
'Buana Homestay':'PR0269',\
'Villa Bingin Luna':'PR0270',\
'Casa Bianca':'PR0271',\
'Villa Cerita Indah':'PR0272',\
'D\'Java Lempuyangan':'PR0273',\
'D\'Java Monjali':'PR0274',\
'Villa Indigo':'PR0275',\
'De Kutuh Villa':'PR0276',\
'Elements Social House':'PR0277',\
'Gandaria Height Apartment':'PR0278',\
'Gili Teak':'PR0279',\
'Villa Moyo':'PR0280',\
'Hyarta Residence':'PR0281',\
'Kembang Kuning':'PR0282',\
'Villa Sotis':'PR0283',\
'Kukuh House':'PR0284',\
'Villa Tropicana':'PR0285',\
'La Joya 1':'PR0286',\
'Vivo Villas':'PR0287',\
'Lebak Residence':'PR0288',\
'Maha Lahksmi':'PR0289',\
'Sartika Apartment':'PR0290',\
'Indira Cottage':'PR0291',\
'My Villa':'PR0292',\
'Ndalem Panembahan':'PR0293',\
'Omah Gerjen 29':'PR0294',\
'Pendopo Andari':'PR0295',\
'Pramestha Resort Town':'PR0296',\
'Puri Pandawa':'PR0297',\
'Roemah Boedi':'PR0298',\
'Rumah Sarengat':'PR0299',\
'The Sakura':'PR0300',\
'Sawah Joglo':'PR0301',\
'Singga Jo Villa':'PR0302',\
'Summerhouse':'PR0303',\
'Taman Asih':'PR0304',\
'Tamu Ibu':'PR0305'})
dfProperty=df["property_id"].fillna('PR0000')
cols=['unit_id','unit_onboard_date','unit_name']
cols2=['unit_number_room','unit_swimming_pool','unit_capacity']
df1=pd.DataFrame(df,columns=cols)
df2=pd.DataFrame(df,columns=cols2)
dfCombine=pd.concat([df1,dfProperty,df2],axis=1)
dfCombine.to_csv('i_unit_ok.csv',index=False)
print("ok")
