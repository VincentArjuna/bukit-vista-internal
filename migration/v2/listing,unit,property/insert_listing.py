import pandas as pd
import numpy as np

df = pd.read_csv("listing.csv")
df["profile_id"]=df['profile_id'].map({
'NULL':'PA0000',\
'W':'PA0001',\
'BV':'PA0002',\
'BC':'PA0003',\
'HA':'PA0004',\
'TL':'PA0005',\
'KK':'PA0006',\
'KW':'PA0007',\
'BW':'PA0008',\
'BSW':'PA0009',\
'BsW':'PA0009',\
'JW':'PA0010',\
'J':'PA0011',\
'DJ':'PA0012',\
'SH':'PA0013',\
'G':'PA0014',\
'BS':'PA0015',\
'A':'PA0016',\
'Gb':'PA0017',\
'Agoda':'PA0018',\
'T':'PA0019'})
df["employee_id"]= df['employee_id'].map({
'Air Support 1':'E0001',\
'Air Support 2':'E0002',\
'Bayu':'E0003',\
'Denny':'E0004',\
'Wayana':'E0005',\
'Jan':'E0006',\
'Bastian':'E0007',\
'Jing':'E0008',\
'Kris':'E0009',\
'Ghifarie':'E0010',\
'Tegar':'E0011',\
'Candra':'E0012',\
'Rafik':'E0013',\
'Gabriel':'E0014',\
'Tendi':'E0015',\
'Antria':'E0016',\
'Emil':'E0017',\
'Nanda':'E0018',\
'Gigih':'E0019',\
'Nungki':'E0020'})

df["unit_id"]=df['unit_id'].map({
'NULL':'UN0000',\
'Omah Cening':'UN0001',\
'PinkCoco Gili Air - Suite Del Mar':'UN0002',\
'PinkCoco Gili Air - Limas':'UN0003',\
'PinkCoco Gili Air - Gladak':'UN0004',\
'PinkCoco Gili Air - Grande':'UN0005',\
'PinkCoco Gili Air - Cocoon':'UN0006',\
'PinkCoco GT - Grand Deluxe Room':'UN0007',\
'PinkCoco GT - Deluxe Room':'UN0008',\
'PinkCoco Bali - Penthouse':'UN0009',\
'PinkCoco Bali - Panoramic':'UN0010',\
'PinkCoco Bali - Garden':'UN0011',\
'PinkCoco Bali - Deluxe Room':'UN0012',\
'PinkCoco Bali - Courtyard':'UN0013',\
'Villa Lulu':'UN0014',\
'Griya Langen - 6BR':'UN0015',\
'Watusaman - Ground Floor 5BR':'UN0016',\
'Homestay Tembi - Family Room Bugis':'UN0017',\
'Homestay Tembi - Family Room Suyawijaya':'UN0018',\
'Homestay Tembi - Family Room Prawiratama':'UN0019',\
'Homestay Tembi - Family Room Sadewa':'UN0020',\
'Homestay Tembi - Standard Room Jogokarya':'UN0021',\
'Homestay Tembi - Standard Room Mangkuyuda':'UN0022',\
'Homestay Tembi - Standard Room Brahmana':'UN0023',\
'Wisma Eyang Sosro - 3BR':'UN0024',\
'Rajaklana - Luxury Stone House':'UN0025',\
'Double D - 1':'UN0026',\
'Double D - 2':'UN0027',\
'Double D - 3':'UN0028',\
'Double D - 4':'UN0029',\
'Double D - 4br':'UN0030',\
'Joglo Agung Standard Room':'UN0031',\
'Joglo Agung Family Room A':'UN0032',\
'Coffee Network Villa':'UN0033',\
'The Miracle Villas':'UN0034',\
'Villa Shiva - Serenity':'UN0035',\
'Villa Shiva - Bali':'UN0036',\
'D\'Java Citra Ayu':'UN0037',\
'D\'Java Omah Sambilegi':'UN0038',\
'GK Gamat Garden-1':'UN0039',\
'GK Gamat Garden-2':'UN0040',\
'GK Gamat Garden-3':'UN0041',\
'GK Gamat Garden-4':'UN0042',\
'GK Gamat Garden':'UN0043',\
'Batan Sabo - 1':'UN0044',\
'Batan Sabo - 2':'UN0045',\
'Batan Sabo - 3':'UN0046',\
'Batan Sabo - 4':'UN0047',\
'Batan Sabo - 5':'UN0048',\
'Batan Sabo - 6':'UN0049',\
'Ayu Laba - Room Bawah #1':'UN0050',\
'Ayu Laba - Room Bawah Twin #2':'UN0051',\
'Ayu Laba - Room Bawah #3':'UN0052',\
'Ayu Laba - Room Bawah #4':'UN0053',\
'Ayu Laba - Room Bawah twin #5':'UN0054',\
'Ayu Laba - Room Bawah #6':'UN0055',\
'Ayu Laba - Lumbung Atas #7':'UN0056',\
'Ayu Laba - Lumbung Atas #8':'UN0057',\
'Ayu Laba - Lumbung Atas #9':'UN0058',\
'Ayu Laba - Lumbung Atas #10':'UN0059',\
'Ayu Laba - Rumah Kayu  Bawah  #11':'UN0060',\
'Ayu Laba - Rumah Kayu  #12':'UN0061',\
'Ayu Laba - Rumah Kayu':'UN0062',\
'2l Redsalt Two Lumbungs':'UN0063',\
'808 Residence':'UN0064',\
'8BR Kakol the whole villa)':'UN0065',\
'Agung Homestay - 1':'UN0066',\
'Agung Homestay - 2':'UN0067',\
'Agung Homestay - 3':'UN0068',\
'Ambalama - GV 1':'UN0069',\
'Ambalama - GV 2':'UN0070',\
'Ambalama - GV 3':'UN0071',\
'Ambalama - GV 4':'UN0072',\
'Ambalama - LG 7':'UN0073',\
'Ambalama - MV 5':'UN0074',\
'Ambalama - MV 6':'UN0075',\
'Amelle Exc - 1':'UN0076',\
'Amelle Exc - 2':'UN0077',\
'Amelle Res - 1':'UN0078',\
'Amelle Res - 2':'UN0079',\
'Amelle Res - 3':'UN0080',\
'Amelle Res - 4':'UN0081',\
'Amelle Res - 5':'UN0082',\
'Amelle Res - 6':'UN0083',\
'Amelle Res - 7':'UN0084',\
'Amelle Suite - 1':'UN0085',\
'Amelle Suite - 2':'UN0086',\
'Amelle Suite - 3':'UN0087',\
'Amelle Suite - 4':'UN0088',\
'Amelle Suite - 5':'UN0089',\
'Amelle Villa 1 BR - 1':'UN0090',\
'Amelle Villa 1 BR - 2':'UN0091',\
'Amelle Villa 2 BR - 1':'UN0092',\
'Amelle Villa 2 BR - 2':'UN0093',\
'Amelle Villa 2 BR - 3':'UN0094',\
'Amelle Villa 2 BR - 4':'UN0095',\
'Arca Apartment':'UN0096',\
'Arca Bungalow - Standard':'UN0097',\
'Arca Bungalow - Suite':'UN0098',\
'Arindra 4BR the whole villa)':'UN0099',\
'Armaya Homestay - 1':'UN0100',\
'Armaya Homestay - 2':'UN0101',\
'Armaya Homestay - 3':'UN0102',\
'Asri Guest House - 1':'UN0103',\
'Asri Guest House - 2':'UN0104',\
'Asri Guest House - 3':'UN0105',\
'Asri Guest House - 4':'UN0106',\
'Asri Guest House - 5':'UN0107',\
'Asri Guest House - 6':'UN0108',\
'Asri Guest House - 7':'UN0109',\
'Avisara':'UN0110',\
'Bagong Guesthouse':'UN0111',\
'Bagong Guesthouse - 1':'UN0112',\
'Bagong Guesthouse - 2':'UN0113',\
'Bagong Guesthouse - 2BR':'UN0114',\
'Bagong Guesthouse - 3':'UN0115',\
'Bagong Guesthouse - 4':'UN0116',\
'Bagong Guesthouse - 5':'UN0117',\
'Bagong Guesthouse - 6':'UN0118',\
'Bagong Guesthouse - 6BR':'UN0119',\
'Balangan Cottages - Bungalow 1':'UN0120',\
'Balangan Cottages - Bungalow 2':'UN0121',\
'Balangan Sleep Well':'UN0122',\
'Bali Bohemia':'UN0123',\
'Bali Bohemia - Loft 1':'UN0124',\
'Bali Mynah - Double 1':'UN0125',\
'Bali Mynah - Double 2':'UN0126',\
'Bali Mynah - Double 3':'UN0127',\
'Bali Mynah - Twin 1':'UN0128',\
'Bali Mynah - Twin 2':'UN0129',\
'Bali Mynah - Twin 3':'UN0130',\
'Bali Mynah New Villa - 1':'UN0131',\
'Bali Mynah New Villa - 2':'UN0132',\
'Bali Mynah Old Villa - 1':'UN0133',\
'Bali Mynah Old Villa - 2':'UN0134',\
'Bali Mynah New Villa - 1 3rd listing':'UN0135',\
'Bangka Suites #24 - VIP':'UN0136',\
'Bangka Suites #5 - Std':'UN0137',\
'Bangka Suites #6 - Std Plus':'UN0138',\
'Basura':'UN0139',\
'Batu Jaran Hill - 01 Kitchen)':'UN0140',\
'Batu Jaran Hill - 02':'UN0141',\
'Batu Jaran Hill - 03':'UN0142',\
'Batu Jaran Hill - 04':'UN0143',\
'Batu Jaran Hill - 05 Kitchen)':'UN0144',\
'Batu Jaran Hill - 06':'UN0145',\
'Batu Jaran Hill - 07':'UN0146',\
'Batu Jaran Hill - 08':'UN0147',\
'Batu Jaran Hill - 09':'UN0148',\
'Batu Jaran Hill - 10':'UN0149',\
'Beverly Dago Apartment - Ita':'UN0150',\
'Bingin Garden':'UN0151',\
'Bingin Jepun':'UN0152',\
'Bingin Surf Left - 01':'UN0153',\
'Bingin Surf Left - 02':'UN0154',\
'Bingin Surf Left - 03':'UN0155',\
'Bingin Surf Left - 04':'UN0156',\
'Bingin Surf Left - 05':'UN0157',\
'Bingin Surf Left - 06':'UN0158',\
'Bingin Surf Left - 07':'UN0159',\
'Bingin Surf Left - 08':'UN0160',\
'Bingin Surf Left - 09':'UN0161',\
'Bingin Surf Left - 10':'UN0162',\
'Bingin Surf Left - 2 bedrooms':'UN0163',\
'Bingin Surf Left - 4 bedrooms':'UN0164',\
'Bingin Ombak Standard - 1':'UN0165',\
'BiuBiu Kumala - Villa SO1':'UN0166',\
'Blue Garden - 1 twin)':'UN0167',\
'Blue Garden - 2 Double)':'UN0168',\
'Blue Garden - 3 - Double)':'UN0169',\
'Blue Garden - 4 - Double)':'UN0170',\
'Blue Garden - 5 - Double)':'UN0171',\
'Blue Garden - 6 - Double)':'UN0172',\
'Bobby\'s Guesthouse - 1 Temples)':'UN0173',\
'Bobby\'s Guesthouse - 2 Secrets)':'UN0174',\
'Bobby\'s Guesthouse - 3 twin The Bombie)':'UN0175',\
'Bobby\'s Guesthouse - 4 twin The Peak)':'UN0176',\
'Bobby\'s Guesthouse - 5 Family Race Tracks)':'UN0177',\
'Bobby\'s Guesthouse - 5 Family) 2nd listing':'UN0178',\
'Bobby\'s Guesthouse - All rooms':'UN0179',\
'Brad\'s Villa':'UN0180',\
'Breezy Point':'UN0181',\
'Buana - 101':'UN0182',\
'Buana - 102':'UN0183',\
'Buana - 103':'UN0184',\
'Buana - 104':'UN0185',\
'Buana - 105 twin)':'UN0186',\
'Buana - 106':'UN0187',\
'Buana - 107':'UN0188',\
'Buana - 201':'UN0189',\
'Buana - 202':'UN0190',\
'Buana - 203':'UN0191',\
'Buana - 204':'UN0192',\
'Buana - 205':'UN0193',\
'Buana - 206':'UN0194',\
'Buana - 207':'UN0195',\
'Buana - 208':'UN0196',\
'Canggu Beach Apartment':'UN0197',\
'Canggu Suite - 1':'UN0198',\
'Canggu Suite - 10':'UN0199',\
'Canggu Suite - 11':'UN0200',\
'Canggu Suite - 12':'UN0201',\
'Canggu Suite - 2':'UN0202',\
'Canggu Suite - 3':'UN0203',\
'Canggu Suite - 4':'UN0204',\
'Canggu Suite - 5':'UN0205',\
'Canggu Suite - 6':'UN0206',\
'Canggu Suite - 7':'UN0207',\
'Canggu Suite - 8':'UN0208',\
'Canggu Suite - 9':'UN0209',\
'Casa Grande Residence - 1BR - 0701':'UN0210',\
'Casa Grande Residence - 2BR - 0309':'UN0211',\
'Villa Casa Putih':'UN0212',\
'Casa Bianca':'UN0213',\
'Cemara Indah - Deluxe 1':'UN0214',\
'Cemara Indah - Deluxe 2':'UN0215',\
'Cemara Indah - Superior 1':'UN0216',\
'Cemara Indah - Superior 2':'UN0217',\
'Citra Sun Garden C2 no 2':'UN0218',\
'Comeback - 01 Twin Sekat)':'UN0219',\
'Comeback - 02 Double)':'UN0220',\
'Comeback - 03 Twin Sekat)':'UN0221',\
'Comeback - 04 Twin)':'UN0222',\
'Comeback - 05 Twin Sekat)':'UN0223',\
'Comeback - 06 Twin)':'UN0224',\
'Comeback - 07 Double)':'UN0225',\
'Comeback - 08 Double)':'UN0226',\
'Comeback - 09 Double)':'UN0227',\
'Comeback - 10 Twin Sekat)':'UN0228',\
'Comeback - 8BR':'UN0229',\
'Comeback - 2BR':'UN0230',\
'D\'Java Lempuyangan':'UN0231',\
'D\'Java':'UN0232',\
'D\'Java Babarsari':'UN0233',\
'D\'Java Gemilang':'UN0234',\
'D\'Java Monjali':'UN0235',\
'D\'Padang - 01':'UN0236',\
'D\'Padang - 02':'UN0237',\
'D\'Padang - 03':'UN0238',\
'D\'Padang - 04':'UN0239',\
'D\'Padang - 05':'UN0240',\
'D\'Padang - 06':'UN0241',\
'D\'Padang - 07':'UN0242',\
'D\'Padang - 08':'UN0243',\
'D\'Padang - 09':'UN0244',\
'D\'Padang - 10':'UN0245',\
'D\'Padang - 2BR':'UN0246',\
'D\'Padang - 3BR':'UN0247',\
'D\'Padang Wood Bungalow - 1':'UN0248',\
'D\'Padang Wood Bungalow - 2':'UN0249',\
'D\'Padang Wood Bungalow - 3':'UN0250',\
'D\'Padang Wood Bungalow - 4':'UN0251',\
'D\'Padang Wood Bungalow - 5':'UN0252',\
'D\'Padang Wood Bungalow - 6':'UN0253',\
'DD Ubud Villas':'UN0254',\
'Denpasar Residence - 2BR - 28ABH':'UN0255',\
'De Kutuh Villa #1':'UN0256',\
'De Kutuh Villa #2':'UN0257',\
'De Kutuh Villa #3':'UN0258',\
'De Kutuh Villa #4':'UN0259',\
'De Kutuh Villa #5':'UN0260',\
'Dhuna Guesthouse - 1':'UN0261',\
'Dhuna Guesthouse - 2':'UN0262',\
'Dinar Hills - A Suite)':'UN0263',\
'Dinar Hills - B Standard)':'UN0264',\
'Dinar Hills - C Standard)':'UN0265',\
'Dinar Hills - D Suite)':'UN0266',\
'Dinar Hills - E':'UN0267',\
'Dreamview Villa':'UN0268',\
'Elements Hostel':'UN0269',\
'Elements Hostel - 6 beds':'UN0270',\
'Elements Hostel - 8 beds':'UN0271',\
'Emerald Villas':'UN0272',\
'Family Circus - Cabin 1':'UN0273',\
'Family Circus - Cabin 2':'UN0274',\
'Full Moon - 1':'UN0275',\
'Full Moon - 10':'UN0276',\
'Full Moon - 2':'UN0277',\
'Full Moon - 3':'UN0278',\
'Full Moon - 4':'UN0279',\
'Full Moon - 5':'UN0280',\
'Full Moon - 6':'UN0281',\
'Full Moon - 7':'UN0282',\
'Full Moon - 8':'UN0283',\
'Full Moon - 8BR':'UN0284',\
'Full Moon - 9':'UN0285',\
'Gandaria Height Apartment - Zizi':'UN0286',\
'Gangga Guest House - 1':'UN0287',\
'Gangga Guest House - 2':'UN0288',\
'Gangga Guest House - 3':'UN0289',\
'Gangga Guest House - 4':'UN0290',\
'Gangga Guest House - 5':'UN0291',\
'Gangga Guest House - 6':'UN0292',\
'Gangga Guest House - 7':'UN0293',\
'Gangga Guest House - 8':'UN0294',\
'Gatra - 1':'UN0295',\
'Gatra - 2':'UN0296',\
'Gatra - 3':'UN0297',\
'Gatra - 4':'UN0298',\
'Gatra - 5':'UN0299',\
'Gatra - 6':'UN0300',\
'Gatra - 7':'UN0301',\
'Gatra - 8':'UN0302',\
'Gatra - 9':'UN0303',\
'Gili Eco Villas - 1 2br)':'UN0304',\
'Gili Eco Villas - 2 2br)':'UN0305',\
'Gili Eco Villas - 3 2br)':'UN0306',\
'Gili Eco Villas - 5 3br)':'UN0307',\
'Gili Eco Villas - Bungalow 1 1br)':'UN0308',\
'Gili Eco Villas - Bungalow 2 1br)':'UN0309',\
'Gili Teak':'UN0310',\
'Gondang Legi Villas - 1':'UN0311',\
'Gondang Legi Villas - 2':'UN0312',\
'Gondang Legi Villas - 3':'UN0313',\
'Gondang Legi Villas - 4':'UN0314',\
'Gondang Legi Villas - 5':'UN0315',\
'Gondang Legi Villas - 6':'UN0316',\
'Gondang Legi Villas - 7':'UN0317',\
'Gondang Legi Villas - Family Bungalow':'UN0318',\
'Gravity':'UN0319',\
'Griya Langen':'UN0320',\
'Griya Langen Rooms - Double':'UN0321',\
'Griya Langen Rooms - Double - 2':'UN0322',\
'Griya Langen Rooms - Twin':'UN0323',\
'Halcyon Villa':'UN0324',\
'Hazel House - D1':'UN0325',\
'Hazel House - D2':'UN0326',\
'Hazel House - F1':'UN0327',\
'Hazel House - Whole House':'UN0328',\
'Homestay Tembi - Deluxe Family Joyo Blumbang':'UN0329',\
'Homestay Tembi - Deluxe Suite Tejakusuma':'UN0330',\
'Hyarta Residence - c12':'UN0331',\
'Hyarta Residence - D10':'UN0332',\
'Jepun Sari - 88 Twin)':'UN0333',\
'Jepun Sari - 89 Twin)':'UN0334',\
'Jepun Sari - 90 Twin)':'UN0335',\
'Jepun Sari - 91 Double)':'UN0336',\
'Jepun Sari - 92 Double)':'UN0337',\
'Jepun Sari - 93 Double)':'UN0338',\
'Jepun Sari - 94 Double)':'UN0339',\
'Jepun Sari - 95 Double)':'UN0340',\
'Jepun Sari - 96 Suite)':'UN0341',\
'Jepun Sari - 97 Suite)':'UN0342',\
'Jepun Sari - 98 Suite)':'UN0343',\
'Jepun Sari - 99 Double)':'UN0344',\
'Jepun Sari - 100 Bungalow)':'UN0345',\
'Jubilee GuestHouse':'UN0346',\
'Kakol Guesthouse - 1':'UN0347',\
'Kakol Guesthouse - 2':'UN0348',\
'Kakol Guesthouse - 3':'UN0349',\
'Kakol Guesthouse - 4':'UN0350',\
'Kakol Guesthouse - 5':'UN0351',\
'Kakol Guesthouse - 6':'UN0352',\
'Kakol Guesthouse - 7':'UN0353',\
'Kakol Guesthouse - 8':'UN0354',\
'Kampung Jimba - Padang Padang A':'UN0355',\
'Kampung Jimba - Padang Padang B':'UN0356',\
'Kampung Jimba - Nias A':'UN0357',\
'Kampung Jimba - Nias B':'UN0358',\
'Kampung Jimba - Ulu A':'UN0359',\
'Kampung Jimba - Ulu B':'UN0360',\
'Kampung Jimba - Ulu C':'UN0361',\
'Kampung Jimba - Ulu D':'UN0362',\
'Kampung Jimba - Mentawai':'UN0363',\
'Kampung Jimba - Ombak A':'UN0364',\
'Kampung Jimba - Ombak B':'UN0365',\
'Kembang Kuning - 01':'UN0366',\
'Kembang Kuning - 02':'UN0367',\
'Kembang Kuning - 03':'UN0368',\
'Kembang Kuning - 04':'UN0369',\
'Kembang Kuning - 05':'UN0370',\
'Kembang Kuning - 06':'UN0371',\
'Kembang Kuning - 07':'UN0372',\
'Kembang Kuning - 08':'UN0373',\
'Kembang Kuning - 09':'UN0374',\
'Kembang Kuning - 10':'UN0375',\
'Kembang Kuning - 11':'UN0376',\
'Kembang Kuning - 12':'UN0377',\
'Kembang Kuning - 13 Bungalow)':'UN0378',\
'Kembang Kuning -3BR':'UN0379',\
'Kembang Kuning -4BR':'UN0380',\
'Kiskenda Cottages':'UN0381',\
'Kubu Nyang Nyang - 1':'UN0382',\
'Kubu Nyang Nyang - 2':'UN0383',\
'Kubu Nyang Nyang - 3':'UN0384',\
'Kubu Nyang Nyang - 4':'UN0385',\
'Kubu Nyang Nyang - 5':'UN0386',\
'Kubu Nyang Nyang 2 BR':'UN0387',\
'Kubu Tropis':'UN0388',\
'Kukuh House Ubud':'UN0389',\
'Kusuma Guest House - 1':'UN0390',\
'Kusuma Guest House - 2  Family )':'UN0391',\
'Kusuma Guest House - 3  Family )':'UN0392',\
'Kusuma Guest House - 4':'UN0393',\
'Kusuma Guest House - 5  Family )':'UN0394',\
'Kusuma Guest House - 6':'UN0395',\
'Kusuma Guest House - 7  Family )':'UN0396',\
'Kusuma Guest House - 8':'UN0397',\
'Kusuma Guest House - 9':'UN0398',\
'Kusuma Guest House - 10':'UN0399',\
'Kusuma Guest House - 11  Family )':'UN0400',\
'Kusuma Guest House - 12':'UN0401',\
'Kusuma Guest House - 12BR':'UN0402',\
'Kusuma Guest House - 2BR':'UN0403',\
'Kusuma Guest House - Family 2BR':'UN0404',\
'Kusuma GH-DOUBLE':'UN0405',\
'Kusuma GH-FAMILY':'UN0406',\
'Kutuh Manak - 01':'UN0407',\
'Kutuh Manak - 02':'UN0408',\
'Kutuh Manak - 03':'UN0409',\
'Kutuh Manak - 04':'UN0410',\
'Kutuh Manak - 05':'UN0411',\
'Kutuh Manak - 06':'UN0412',\
'Kutuh Manak - 07':'UN0413',\
'Kutuh Manak - 08':'UN0414',\
'Kutuh Manak - 09':'UN0415',\
'Kutuh Manak - 10':'UN0416',\
'La Cabane - Ceu':'UN0417',\
'La Cabane - Family Paz':'UN0418',\
'La Cabane Dlx #2':'UN0419',\
'La Cabane Dlx #2 + 1 extra person':'UN0420',\
'La Cabane Dlx #3':'UN0421',\
'La Cabane Dlx #3 + 1 extra person':'UN0422',\
'La Cabane Std #1':'UN0423',\
'La Cabane Std #4':'UN0424',\
'LaJoya1 Deluxe Bungalow #10':'UN0425',\
'LaJoya1 Deluxe Bungalow #11':'UN0426',\
'LaJoya1 Deluxe Bungalow #11 + 1 extra person':'UN0427',\
'LaJoya1 Deluxe Bungalow #12':'UN0428',\
'LaJoya1 Deluxe Bungalow #12 + 1 extra person':'UN0429',\
'LaJoya1 Deluxe Bungalow #14':'UN0430',\
'LaJoya1 Deluxe Bungalow #14 + 1 extra person':'UN0431',\
'LaJoya1 Deluxe Bungalow #15':'UN0432',\
'LaJoya1 Deluxe Bungalow #15 + 1 extra person':'UN0433',\
'LaJoya1 Deluxe Bungalow #16':'UN0434',\
'LaJoya1 Deluxe Bungalow #16 + 1 extra person':'UN0435',\
'LaJoya1 Deluxe Bungalow #17':'UN0436',\
'LaJoya1 Deluxe Bungalow #9':'UN0437',\
'LaJoya1 Deluxe Bungalow #9 + 1 extra person':'UN0438',\
'LaJoya1 Deluxe Room #20':'UN0439',\
'LaJoya1 Deluxe Room #20 + 1 rollaway bed':'UN0440',\
'LaJoya1 Deluxe Room #21':'UN0441',\
'LaJoya1 Deluxe Room #21 + 1 rollaway bed':'UN0442',\
'LaJoya1 Dlx Bungalow #10 + 1 extra person':'UN0443',\
'LaJoya1 Private Villa':'UN0444',\
'LaJoya1 Standard Bungalow #1':'UN0445',\
'LaJoya1 Standard Bungalow #2':'UN0446',\
'LaJoya1 Standard Bungalow #3':'UN0447',\
'LaJoya1 Standard Bungalow #4':'UN0448',\
'LaJoya1 Standard Bungalow #4 + 1 extra person':'UN0449',\
'LaJoya1 Standard Bungalow #5':'UN0450',\
'LaJoya1 Standard Bungalow #6':'UN0451',\
'LaJoya1 Standard Bungalow #7':'UN0452',\
'LaJoya1 Standard Bungalow #8':'UN0453',\
'LaJoya1 Standard Room #22':'UN0454',\
'LaJoya1 Standard Room #23':'UN0455',\
'LaJoya1 Std Family Room #24':'UN0456',\
'LaJoya1 Std Family Room #24 + 1 extra person':'UN0457',\
'LaJoya1 Std Family Room #24 + 2 extra people':'UN0458',\
'LaJoya1 Superior Family Room #25':'UN0459',\
'LaJoya1 Superior Family Room #25 + 1 extra pe':'UN0460',\
'LaJoya1 Superior Family Room #25 + 2 extra pe':'UN0461',\
'Lalang Puluh':'UN0462',\
'Le Yanandra - 1':'UN0463',\
'Le Yanandra - 2':'UN0464',\
'Le Yanandra - 3':'UN0465',\
'Le Yanandra - 4':'UN0466',\
'Le Yanandra - 5':'UN0467',\
'Lebak Guesthouse - 1':'UN0468',\
'Lebak Guesthouse - 2 Twin)':'UN0469',\
'Lebak Guesthouse - 3':'UN0470',\
'Lebak Guesthouse - 4':'UN0471',\
'Lebak Guesthouse - 5':'UN0472',\
'Lebak Guesthouse - 6':'UN0473',\
'Lebak Guesthouse - 7':'UN0474',\
'Lebak Guesthouse - 8':'UN0475',\
'Lebak Guesthouse - 9 Master)':'UN0476',\
'Lebak Residence - King 4':'UN0477',\
'Lebak Residence - King 7':'UN0478',\
'Lebak Residence - Suite 1':'UN0479',\
'Lebak Residence - Suite 2':'UN0480',\
'Lebak Residence - Suite 3':'UN0481',\
'Lebak Residence - Twin 5':'UN0482',\
'Lebak Residence - Twin 6':'UN0483',\
'Lebak Residence - Wooden 1':'UN0484',\
'Lebak Residence - Wooden 2':'UN0485',\
'Lemon Guesthouse - 1':'UN0486',\
'Lemon Guesthouse - 2':'UN0487',\
'Lemon Guesthouse - 3':'UN0488',\
'Lemon Guesthouse - 4':'UN0489',\
'Lemon Guesthouse - 5':'UN0490',\
'Lemon Guesthouse - 6':'UN0491',\
'Like at Home':'UN0492',\
'Like at Home - Std':'UN0493',\
'Like at Home Room #1':'UN0494',\
'Like at Home Room #2':'UN0495',\
'Like at Home Room #4':'UN0496',\
'Like at Home Room #5':'UN0497',\
'Like at Home Room #6':'UN0498',\
'LJBB Bungalow #10':'UN0499',\
'LJBB Bungalow #10 + 1 extra person':'UN0500',\
'LJBB Bungalow #10 + 1 extra person + 1 rollaw':'UN0501',\
'LJBB Bungalow #11':'UN0502',\
'LJBB Bungalow #11 + 1 rollaway bed':'UN0503',\
'LJBB Bungalow #12':'UN0504',\
'LJBB Bungalow #12 + 1 extra person':'UN0505',\
'LJBB Bungalow #12 + 1 rollaway bed':'UN0506',\
'LJBB Bungalow #14':'UN0507',\
'LJBB Bungalow #14 + 1 extra person':'UN0508',\
'LJBB Bungalow #14 + 1 rollaway bed':'UN0509',\
'LJBB Bungalow #15':'UN0510',\
'LJBB Bungalow #15 + 1 extra person':'UN0511',\
'LJBB Bungalow #15 + 1 extra person + 1 rollaw':'UN0512',\
'LJBB Bungalow #16':'UN0513',\
'LJBB Bungalow #16 + 1 extra person':'UN0514',\
'LJBB Bungalow #16 + 1 extra person + 1 rollaw':'UN0515',\
'LJBB Bungalow #17':'UN0516',\
'LJBB Bungalow #17 + 1 Extra Person':'UN0517',\
'LJBB Bungalow #17 + 1 rollaway bed':'UN0518',\
'LJBB Bungalow #18':'UN0519',\
'LJBB Bungalow #18 + 1 Extra Person':'UN0520',\
'LJBB Bungalow #18 + 1 rollaway bed':'UN0521',\
'LJBB Bungalow #18 + 2 rollaway beds':'UN0522',\
'LJBB Bungalow #19':'UN0523',\
'LJBB Bungalow #20':'UN0524',\
'LJBB Bungalow #20 + 1 extra person':'UN0525',\
'LJBB Bungalow #21':'UN0526',\
'LJBB Bungalow #21 + 1 rolaway bed':'UN0527',\
'LJBB Bungalow #22':'UN0528',\
'LJBB Bungalow #22 + 1 extra person':'UN0529',\
'LJBB Bungalow #22 + 1 Rollaway bed':'UN0530',\
'LJBB Nina #1':'UN0531',\
'LJBB Nina #1 + 1 extra person':'UN0532',\
'LJBB Nina #1 + 2 extra people':'UN0533',\
'LJBB Nina #2':'UN0534',\
'LJBB Nina #2 + 1 extra person':'UN0535',\
'LJBB Nina #2 + 2 extra people':'UN0536',\
'LJBB Nina #3':'UN0537',\
'LJBB Nina #3 + 1 extra person':'UN0538',\
'LJBB Nina #3 + 2 extra people':'UN0539',\
'LJBB Nina #4':'UN0540',\
'LJBB Nina #4 + 1 extra person':'UN0541',\
'LJBB Nina #4 + 2 extra people':'UN0542',\
'LJBB Nina #5':'UN0543',\
'LJBB Nina #5 + 1 extra person':'UN0544',\
'LJBB Nina #5 + 2 extra people':'UN0545',\
'LJBB Nina #6':'UN0546',\
'LJBB Nina #6 + 1 extra person':'UN0547',\
'LJBB Nina #6 + 2 extra people':'UN0548',\
'LJBB Pool Side':'UN0549',\
'LJBB Shaka #1':'UN0550',\
'LJBB Shaka #1 + 1 extra person':'UN0551',\
'LJBB Shaka #1 + 2 extra people':'UN0552',\
'LJBB Shaka #2':'UN0553',\
'LJBB Shaka #2 + 1 extra person':'UN0554',\
'LJBB Shaka #2 + 2 extra people':'UN0555',\
'LJBB Shaka #3':'UN0556',\
'LJBB Shaka #3 + 1 extra person':'UN0557',\
'LJBB Shaka #3 + 2 extra people':'UN0558',\
'LJBB Shaka #4':'UN0559',\
'LJBB Shaka #4 + 1 extra person':'UN0560',\
'LJBB Shaka #4 + 2 extra people':'UN0561',\
'LJBB Shaka #5':'UN0562',\
'LJBB Shaka #5 + 1 extra person':'UN0563',\
'LJBB Shaka #5 + 2 extra people':'UN0564',\
'LJBB Shaka #6':'UN0565',\
'LJBB Shaka #6 + 1 extra person':'UN0566',\
'LJBB Shaka #6 + 2 extra people':'UN0567',\
'LJBB Shaka/Nina':'UN0568',\
'LJBB Shaka/Nina - 2 bedrooms':'UN0569',\
'LJBB Shaka/Nina - 3 bedrooms':'UN0570',\
'Made Roejas Homestay - 1':'UN0571',\
'Made Roejas Homestay - 2':'UN0572',\
'Made Roejas Homestay - 2BR':'UN0573',\
'Made Roejas Homestay - 3':'UN0574',\
'Made Roejas Homestay - 4':'UN0575',\
'Made Roejas Homestay - 3BR':'UN0576',\
'Made Roejas Homestay - 4BR':'UN0577',\
'Maha Lahksmi - 1  2 BR )':'UN0578',\
'Maha Lahksmi - 2  1 BR )':'UN0579',\
'Maha Lahksmi - 3  1 BR )':'UN0580',\
'Maha Lahksmi - 4':'UN0581',\
'Maha Ungasan - 01 Private Pool)':'UN0582',\
'Maha Ungasan - 02 Private Pool)':'UN0583',\
'Maha Ungasan - 03 Garden View)':'UN0584',\
'Maha Ungasan - 04 Garden View)':'UN0585',\
'Maha Ungasan - 05 Garden View)':'UN0586',\
'Maha Ungasan - 06 Garden View)':'UN0587',\
'Maha Ungasan - 07 Garden View)':'UN0588',\
'Maha Ungasan - 08 Garden View)':'UN0589',\
'Maha Ungasan - 09 Garden View)':'UN0590',\
'Maha Ungasan - 10 Garden View)':'UN0591',\
'Mandala House':'UN0592',\
'Margonda Residence - Barel #1':'UN0593',\
'Margonda Residence - Barel #2':'UN0594',\
'Margonda Residence - Barel #3':'UN0595',\
'Margonda Residence - Barel #4':'UN0596',\
'Margonda Residence - Tika #1':'UN0597',\
'Margonda Residence - Tika #2':'UN0598',\
'Margonda Residence - Tika #4':'UN0599',\
'Margonda Residence - Tike #3':'UN0600',\
'Me Villa - A  2BR )':'UN0601',\
'Me Villa - B  1BR )':'UN0602',\
'Me Villa - C  1BR )':'UN0603',\
'Me Villa - D  1BR )':'UN0604',\
'Me Villa - E  1BR )':'UN0605',\
'Moyo & Son Surf Stay - 101 - Twin':'UN0606',\
'Moyo & Son Surf Stay - 102 - Double':'UN0607',\
'Moyo & Son Surf Stay - 103 - Double':'UN0608',\
'Moyo & Son Surf Stay - 104 - Double':'UN0609',\
'Moyo & Son Surf Stay - 105 - Double':'UN0610',\
'Moyo & Son Surf Stay - 106 - Double':'UN0611',\
'Moyo & Son Surf Stay - 107 - Twin':'UN0612',\
'Moyo & Son Surf Stay - 108 - Twin':'UN0613',\
'Moyo & Son Surf Stay - 109 - Whole Dorm':'UN0614',\
'Moyo & Son Surf Stay - 109 - Dorm 2 Person':'UN0615',\
'Moyo & Son Surf Stay - 109 - Dorm 1':'UN0616',\
'Moyo & Son Surf Stay - 109 - Dorm 2':'UN0617',\
'Moyo & Son Surf Stay - 109 - Dorm 3':'UN0618',\
'Moyo & Son Surf Stay - 109 - Dorm 4':'UN0619',\
'Moyo & Son Surf Stay - 109 - Dorm 5':'UN0620',\
'Moyo & Son Surf Stay - 109 - Dorm 6':'UN0621',\
'Moyo & Son Surf Stay - 109 - Dorm 7':'UN0622',\
'Moyo & Son Surf Stay - 109 - Dorm 8':'UN0623',\
'Moyo & Son Surf Stay - 201 - Twin':'UN0624',\
'Moyo & Son Surf Stay - 202 - Twin':'UN0625',\
'Moyo & Son Surf Stay - 203 - Twin':'UN0626',\
'Moyo & Son Surf Stay - 204 - Double':'UN0627',\
'Moyo & Son Surf Stay - 205 - Double':'UN0628',\
'Moyo & Son Surf Stay - 206 - Double':'UN0629',\
'Moyo & Son Surf Stay - 207 - Double':'UN0630',\
'Moyo & Son Surf Stay - 301 - Double':'UN0631',\
'Moyo & Son Surf Stay - 302 - Double':'UN0632',\
'Moyo & Son Surf Stay - 303 - Double':'UN0633',\
'Moyo & Son Surf Stay - 304 - Double':'UN0634',\
'Moyo & Son Surf Stay - 305 - Double':'UN0635',\
'Moyo & Son Surf Stay - 306 - Double':'UN0636',\
'My Rock-a-Villa':'UN0637',\
'My Villa 2BR':'UN0638',\
'My Villa 3BR':'UN0639',\
'Ndalem Kasongan - 1':'UN0640',\
'Ndalem Kasongan - 2':'UN0641',\
'Ndalem Kasongan - 3 shared bathroom)':'UN0642',\
'Ndalem Kasongan - 4 shared bathroom)':'UN0643',\
'Ndalem Kasongan - 5':'UN0644',\
'Ndalem Natan - 1':'UN0645',\
'Ndalem Natan - 2':'UN0646',\
'Ndalem Natan - 3':'UN0647',\
'Ndalem Natan - 4':'UN0648',\
'Ndalem Natan - 5':'UN0649',\
'Ndalem Natan - 6':'UN0650',\
'Ndalem Ngabean Double - 1':'UN0651',\
'Ndalem Ngabean Double - 2':'UN0652',\
'Ndalem Ngabean Double - 3':'UN0653',\
'Ndalem Ngabean Double - 4':'UN0654',\
'Ndalem Ngabean Double - 5':'UN0655',\
'Ndalem Ngabean Double - 6':'UN0656',\
'Ndalem Ngabean Family - 1':'UN0657',\
'Ndalem Ngabean Family - 2':'UN0658',\
'Ndalem Ngabean Family - 3':'UN0659',\
'Ndalem Ngabean Family - 4':'UN0660',\
'Ndalem Ngabean Family - 5':'UN0661',\
'Ndalem Ngabean Family - 6':'UN0662',\
'Ndalem Ngabean Family - 7':'UN0663',\
'Ndalem Panembahan - 1':'UN0664',\
'Ndalem Panembahan - 2':'UN0665',\
'Ndalem Panembahan - 3':'UN0666',\
'Ndalem Panembahan - 4':'UN0667',\
'Ndalem Panembahan - 5':'UN0668',\
'Ndalem Panembahan - 6':'UN0669',\
'Ndalem Panembahan - Whole Villa':'UN0670',\
'NDBV Lot 3':'UN0671',\
'NDBV Lot 6':'UN0672',\
'Ocho Bali Villa - Deluxe':'UN0673',\
'Ocho Bali Villa - Standard':'UN0674',\
'Omah Gerjen 29 - 1A':'UN0675',\
'Omah Gerjen 29 - 1B':'UN0676',\
'Omah Gerjen 29 - 2A':'UN0677',\
'Omah Gerjen 29 - 2B':'UN0678',\
'Omah Gerjen 29 - 3A':'UN0679',\
'Omah Gerjen 29 - 3B':'UN0680',\
'Omah Gerjen 3A & 3B':'UN0681',\
'Omah Gerjen 29 - 3BR':'UN0682',\
'Omah Lila - 1':'UN0683',\
'Omah Lila - 2':'UN0684',\
'Omah Lila - 2BR':'UN0685',\
'Omah Lila - 3':'UN0686',\
'Omah Lila - 3BR':'UN0687',\
'Padang Padang View - 1':'UN0688',\
'Padang Padang View - 2':'UN0689',\
'Padang Padang View - 3':'UN0690',\
'Padang Padang View - 4':'UN0691',\
'Peacock Ubud Inn - 1':'UN0692',\
'Peacock Ubud Inn - 10':'UN0693',\
'Peacock Ubud Inn - 11':'UN0694',\
'Peacock Ubud Inn - 2':'UN0695',\
'Peacock Ubud Inn - 3':'UN0696',\
'Peacock Ubud Inn - 4':'UN0697',\
'Peacock Ubud Inn - 5':'UN0698',\
'Peacock Ubud Inn - 6':'UN0699',\
'Peacock Ubud Inn - 7':'UN0700',\
'Peacock Ubud Inn - 8':'UN0701',\
'Peacock Ubud Inn - 9':'UN0702',\
'Pendopo Andari Deluxe  - 7':'UN0703',\
'Pendopo Andari - 02':'UN0704',\
'Pendopo Andari - 03':'UN0705',\
'Pejaten Valley - Deluxe 1':'UN0706',\
'Pejaten Valley - Executive 1':'UN0707',\
'Pejaten Valley - Executive 2':'UN0708',\
'Pejaten Valley - Family Room 1':'UN0709',\
'Pondok Lulik - 07':'UN0710',\
'Pondok Lulik - 08':'UN0711',\
'Pondok Lulik - 09':'UN0712',\
'Pondok Lulik - 10':'UN0713',\
'Pondok Lulik - 11':'UN0714',\
'Pondok Lulik - 12':'UN0715',\
'Pondok Lulik - 14':'UN0716',\
'Pondok Lulik - 15':'UN0717',\
'Pondok Lulik - 16':'UN0718',\
'Pondok Lulik - 17':'UN0719',\
'Pondok Lulik - 18 Bunk Bed)':'UN0720',\
'Pondok Lulik - 19 Bunk Bed)':'UN0721',\
'8br Pondok Lulik':'UN0722',\
'Pondok Lulik - Wooden #T1':'UN0723',\
'Pondok Lulik - Wooden #T2':'UN0724',\
'Pondok Lulik - Wooden #T3':'UN0725',\
'Pondok Lulik - Wooden #D1':'UN0726',\
'Pramestha Resort Town - Alinda A8 - Bambang':'UN0727',\
'Pramestha Resort Town - Alinda A9 - Bambang':'UN0728',\
'Pramestha Resort Town - Alinda B22 - Bambang':'UN0729',\
'Pramestha Resort Town - ZIzi':'UN0730',\
'Puri Kelapa - 01 Twin)':'UN0731',\
'Puri Kelapa - 02':'UN0732',\
'Puri Kelapa - 03 Twin)':'UN0733',\
'Puri Kelapa - 04':'UN0734',\
'Puri Kelapa - 05':'UN0735',\
'Puri Kelapa - 06':'UN0736',\
'Puri Kelapa - 07':'UN0737',\
'Puri Kelapa - 08 Twin)':'UN0738',\
'Puri Kelapa - 09':'UN0739',\
'Puri Kelapa - 10':'UN0740',\
'Puri Kelapa - 11 Twin)':'UN0741',\
'Puri Kelapa - 12':'UN0742',\
'Puri Kelapa - A1 Twin)':'UN0743',\
'Puri Kelapa - A2 Double)':'UN0744',\
'Puri Kelapa - B1 Twin)':'UN0745',\
'Puri Kelapa - B2 Double)':'UN0746',\
'Puri Kelapa - C1 Double)':'UN0747',\
'Puri Kelapa - C2 Twin)':'UN0748',\
'Puri Kelapa - D1 Twin)':'UN0749',\
'Puri Kelapa - D2 Double)':'UN0750',\
'Puri Kelapa - E Double)':'UN0751',\
'Puri Kelapa - Family 1':'UN0752',\
'Puri Kelapa - Family 2':'UN0753',\
'Puri Langenarjan - Deluxe 1':'UN0754',\
'Puri Langenarjan - Deluxe 2':'UN0755',\
'Puri Langenarjan - Deluxe 3':'UN0756',\
'Puri Langenarjan - Deluxe 4':'UN0757',\
'Puri Langenarjan - Deluxe 5':'UN0758',\
'Puri Minggiran - 1':'UN0759',\
'Puri Minggiran - 2':'UN0760',\
'Puri Minggiran - 3':'UN0761',\
'Puri Minggiran - 4':'UN0762',\
'Puri Minggiran - 5':'UN0763',\
'Puri Minggiran - 6':'UN0764',\
'Puri Minggiran - 7':'UN0765',\
'Puri Pandawa - Deluxe 1':'UN0766',\
'Puri Pandawa - Deluxe 2':'UN0767',\
'Puri Pandawa - Deluxe 3':'UN0768',\
'Puri Pandawa - Deluxe 4':'UN0769',\
'Puri Pandawa - Joglo 1':'UN0770',\
'Puri Pandawa - Joglo 2':'UN0771',\
'Puri Pandawa - Joglo 3':'UN0772',\
'Puri Pandawa - Joglo 4':'UN0773',\
'Puri Pandawa - Suite 1':'UN0774',\
'Puri Pandawa - Suite 2':'UN0775',\
'Puri Pandawa - Suite 3':'UN0776',\
'Puri Pandawa - Suite 4':'UN0777',\
'Puri Sabina - 01 Standard)':'UN0778',\
'Puri Sabina - 02 Standard)':'UN0779',\
'Puri Sabina - 03 Deluxe)':'UN0780',\
'Puri Sabina - 04 Deluxe)':'UN0781',\
'Puri Sabina - 05 Deluxe)':'UN0782',\
'Puri Sabina - 06 Deluxe Pool View)':'UN0783',\
'Puri Sabina - Deluxe Pool View':'UN0784',\
'Puri Sabina - Standard':'UN0785',\
'Rajaklana - Stone house 1':'UN0786',\
'Rajaklana - Wood house 1':'UN0787',\
'Rama Village #1 - Shita 1':'UN0788',\
'Rama Village #1 - Shita 2':'UN0789',\
'Rama Village #2 - Laksamana 1':'UN0790',\
'Rama Village #2 - Laksamana 2':'UN0791',\
'Rama Village #3 - Barata 1':'UN0792',\
'Rama Village #4 - Barata 2':'UN0793',\
'Rama Village #5 - Satrugna 1':'UN0794',\
'Rama Village #5 - Satrugna 2':'UN0795',\
'Rama Village 2BR':'UN0796',\
'Redsalt - Joglo 3br':'UN0797',\
'Redsalt - Lumbung 1':'UN0798',\
'Redsalt - Lumbung 2':'UN0799',\
'Riverside - Family 1':'UN0800',\
'Riverside - Family 2':'UN0801',\
'Riverside - Romantic 1':'UN0802',\
'Riverside - Romantic 2':'UN0803',\
'Roemah Boedi - Keputren 1':'UN0804',\
'Roemah Boedi - Keputren 2':'UN0805',\
'Roemah Boedi - Keputren 3':'UN0806',\
'Roemah Boedi - Keputren 4':'UN0807',\
'Roemah Boedi - Keputren 5':'UN0808',\
'Roemah Boedi - Keputren 6':'UN0809',\
'Roemah Boedi - Keputren 7':'UN0810',\
'Roemah Boedi - Keputren 8':'UN0811',\
'Roemah Boedi - Keputran 1':'UN0812',\
'Roemah Boedi - Keputran 2':'UN0813',\
'Royal Majestic 2BR':'UN0814',\
'Royal Majestic 3BR':'UN0815',\
'Rumah Eyang':'UN0816',\
'Rumah Lavia - Joglo':'UN0817',\
'Rumah Lavia - Omah Diandra 1':'UN0818',\
'Rumah Lavia - Omah Diandra 2':'UN0819',\
'Rumah Sarengat - 1 Double':'UN0820',\
'Rumah Sarengat - 2 Double':'UN0821',\
'Rumah Sarengat - 3 Twin':'UN0822',\
'Rumah Sarengat - 4 Double':'UN0823',\
'Rumah Sarengat - 5 Double':'UN0824',\
'Rumah Sarengat - 6 Double':'UN0825',\
'Rumah Sarengat - Full House':'UN0826',\
'Rumah Teteh':'UN0827',\
'Sahid Residence - 28D - Pak Ade':'UN0828',\
'Sahid Sudirman Residence - 27B':'UN0829',\
'Sakura Deluxe - 1':'UN0830',\
'Sakura Deluxe - 10':'UN0831',\
'Sakura Deluxe - 2':'UN0832',\
'Sakura Deluxe - 3':'UN0833',\
'Sakura Deluxe - 4':'UN0834',\
'Sakura Deluxe - 5':'UN0835',\
'Sakura Deluxe - 6':'UN0836',\
'Sakura Deluxe - 7':'UN0837',\
'Sakura Deluxe - 8':'UN0838',\
'Sakura Deluxe - 9':'UN0839',\
'Sakura Suite - 1':'UN0840',\
'Sakura Suite - 2':'UN0841',\
'Sakura Suite - 3':'UN0842',\
'Sakura Suite - 4':'UN0843',\
'Sakura Superior - 1':'UN0844',\
'Sakura Superior - 10':'UN0845',\
'Sakura Superior - 11':'UN0846',\
'Sakura Superior - 12':'UN0847',\
'Sakura Superior - 13':'UN0848',\
'Sakura Superior - 14':'UN0849',\
'Sakura Superior - 15':'UN0850',\
'Sakura Superior - 16':'UN0851',\
'Sakura Superior - 17':'UN0852',\
'Sakura Superior - 18':'UN0853',\
'Sakura Superior - 19':'UN0854',\
'Sakura Superior - 2':'UN0855',\
'Sakura Superior - 20':'UN0856',\
'Sakura Superior - 21':'UN0857',\
'Sakura Superior - 22':'UN0858',\
'Sakura Superior - 23':'UN0859',\
'Sakura Superior - 24':'UN0860',\
'Sakura Superior - 25':'UN0861',\
'Sakura Superior - 26':'UN0862',\
'Sakura Superior - 27':'UN0863',\
'Sakura Superior - 28':'UN0864',\
'Sakura Superior - 29':'UN0865',\
'Sakura Superior - 3':'UN0866',\
'Sakura Superior - 30':'UN0867',\
'Sakura Superior - 31':'UN0868',\
'Sakura Superior - 32':'UN0869',\
'Sakura Superior - 33':'UN0870',\
'Sakura Superior - 34':'UN0871',\
'Sakura Superior - 35':'UN0872',\
'Sakura Superior - 36':'UN0873',\
'Sakura Superior - 4':'UN0874',\
'Sakura Superior - 5':'UN0875',\
'Sakura Superior - 6':'UN0876',\
'Sakura Superior - 7':'UN0877',\
'Sakura Superior - 8':'UN0878',\
'Sakura Superior - 9':'UN0879',\
'Sanata Yoga Guesthouse - 1':'UN0880',\
'Sanata Yoga Guesthouse - 2':'UN0881',\
'Sanata Yoga Guesthouse - 3':'UN0882',\
'Sanata Yoga Guesthouse - 4':'UN0883',\
'Sanata Yoga Guesthouse - 5':'UN0884',\
'Sanata Yoga Guesthouse - 6':'UN0885',\
'Sanata Yoga Guesthouse - 7':'UN0886',\
'Sanata Yoga Guesthouse - 8':'UN0887',\
'Sanata Yoga Guesthouse - 9':'UN0888',\
'Sanata Yoga Guesthouse - 10':'UN0889',\
'Santosha 1BR Villa - 1':'UN0890',\
'Santosha 1BR Villa - 2':'UN0891',\
'Santosha 1BR Villa - 3':'UN0892',\
'Santosha 1BR Villa - 4':'UN0893',\
'Santosha 1BR Villa - 5':'UN0894',\
'Santosha 1BR Villa - 6':'UN0895',\
'Santosha Suite - 1':'UN0896',\
'Santosha Suite - 2':'UN0897',\
'Saveria Apartment - Steve':'UN0898',\
'Sawah Joglo - Deluxe 1':'UN0899',\
'Sawah Joglo - Deluxe 2':'UN0900',\
'Sawah Joglo - Deluxe 3':'UN0901',\
'Sawah Joglo - Deluxe 4':'UN0902',\
'Sawah Joglo - Deluxe 5':'UN0903',\
'Sawah Joglo - Deluxe 6':'UN0904',\
'Sawah Joglo - Deluxe 7':'UN0905',\
'Sawah Joglo - Deluxe 8':'UN0906',\
'Sawah Joglo - Family 2BR 1':'UN0907',\
'Sawah Joglo - Family 2BR 2':'UN0908',\
'Sawah Joglo - Suite 1':'UN0909',\
'Sawah Joglo - Suite 2':'UN0910',\
'Secret Garden 1BR':'UN0911',\
'Secret Garden 2BR':'UN0912',\
'Serpong Greenview Apartment - 19':'UN0913',\
'Serpong Greenview Apartment - 9':'UN0914',\
'Siaga Raya 3 - Unit 3a':'UN0915',\
'Siaga Raya 3 - Unit 3b':'UN0916',\
'Siaga Raya 3 - Unit N':'UN0917',\
'Siaga Raya 3 Villas - 2 Villas':'UN0918',\
'Siaga Raya 3 Villas - 3 Villas':'UN0919',\
'Singga Jo Villa':'UN0920',\
'Sisin Uma Homestay - Double 1':'UN0921',\
'Sisin Uma Homestay - Double 2':'UN0922',\
'Sisin Uma Homestay - Double 3':'UN0923',\
'Sisin Uma Homestay - Double 4':'UN0924',\
'Sisin Uma Homestay - Double 5':'UN0925',\
'Sisin Uma Homestay - Double 6':'UN0926',\
'Sisin Uma Homestay - Double 7':'UN0927',\
'Sisin Uma Homestay - Twin 1':'UN0928',\
'Sisin Uma Homestay - Twin 2':'UN0929',\
'Sleeping Buddha':'UN0930',\
'Srikandi Guesthouse - 1':'UN0931',\
'Srikandi Guesthouse - 2':'UN0932',\
'Srikandi Guesthouse - 3':'UN0933',\
'Srikandi Guesthouse - 4':'UN0934',\
'Srikandi Guesthouse - 8 Bedrooms':'UN0935',\
'Summerhouse':'UN0936',\
'Sunset Condotel Kuta':'UN0937',\
'Suparsa Guesthouse':'UN0938',\
'Surf Lodge':'UN0939',\
'Swan House':'UN0940',\
'Taman Asih - Superior Twins 1':'UN0941',\
'Taman Asih - Superior Twins 2':'UN0942',\
'Taman Asih - Superior Twins 3':'UN0943',\
'Taman Asih - Superior Twins 4':'UN0944',\
'Taman Asih - Superior Twins 5':'UN0945',\
'Taman Asih - Deluxe Double 16':'UN0946',\
'Taman Asih - Deluxe Double 17':'UN0947',\
'Taman Asih - Deluxe Double 18':'UN0948',\
'Taman Asih - Deluxe Double 19':'UN0949',\
'Taman Asih - Deluxe Double 20':'UN0950',\
'Taman Amartha - 1':'UN0951',\
'Taman Amartha - 2':'UN0952',\
'Taman Amartha - 3':'UN0953',\
'Taman Amartha - 4':'UN0954',\
'Taman Amartha - Deluxe':'UN0955',\
'Taman Amartha - Standard':'UN0956',\
'Taman Amertha - 10':'UN0957',\
'Taman Amertha - 11':'UN0958',\
'Taman Amertha - 12':'UN0959',\
'Taman Amertha - 13':'UN0960',\
'Taman Amertha - 14':'UN0961',\
'Taman Amertha - 5':'UN0962',\
'Taman Amertha - 6':'UN0963',\
'Taman Amertha - 7':'UN0964',\
'Taman Amertha - 8':'UN0965',\
'Taman Amertha - 9':'UN0966',\
'Taman Bintang #1 - Concrete Dbl Legong)':'UN0967',\
'Taman Bintang #2 - Concrete Twn Condong)':'UN0968',\
'Taman Bintang #3 - Concrete Twn Oleg)':'UN0969',\
'Taman Bintang #4 - Wooden Dbl Barong)':'UN0970',\
'Taman Bintang #5 - Wooden Dbl  Baris )':'UN0971',\
'Taman Bintang #6 - Wooden Twn Jauk)':'UN0972',\
'Taman Bintang #7 - Wooden Dbl Topeng)':'UN0973',\
'Taman Melati Margonda - Fia #1A':'UN0974',\
'Taman Melati Margonda - Fia #1B':'UN0975',\
'Tamu Ibu':'UN0976',\
'Tembi Rumah Budaya - Gandjuran':'UN0977',\
'Tembi Rumah Budaya - Ngadirojo':'UN0978',\
'Tembi Rumah Budaya - Badegan':'UN0979',\
'Tembi Rumah Budaya - Wuryantoro':'UN0980',\
'Tembi Rumah Budaya - Adikarto':'UN0981',\
'Tembi Rumah Budaya - Morangan':'UN0982',\
'Tembi Rumah Budaya - Polaman':'UN0983',\
'Tembi Rumah Budaya - Kriyan Kidul':'UN0984',\
'Tembi Rumah Budaya - Kriyan Lor':'UN0985',\
'The Alchemist - Blanche Niege':'UN0986',\
'The Alchemist - Family Bungalow':'UN0987',\
'The Alchemist - Le Petit Prince':'UN0988',\
'The Alchemist - Mykonos':'UN0989',\
'The Alchemist - One Love':'UN0990',\
'The Alchemist - Romeo':'UN0991',\
'The Alchemist - Romeo & Mykonos':'UN0992',\
'The Alchemist - Puri Putih':'UN0993',\
'The Beach House':'UN0994',\
'The Brothers':'UN0995',\
'The Gong - 2BR':'UN0996',\
'The Gong - 3BR':'UN0997',\
'The Gong - 4BR':'UN0998',\
'The Gong - 5BR':'UN0999',\
'The Gong - 214 Double)':'UN1000',\
'The Gong - 215 Double)':'UN1001',\
'The Gong - 216 Double)':'UN1002',\
'The Gong - 217 Double)':'UN1003',\
'The Gong - 218 Double)':'UN1004',\
'The Gong - 219 Double)':'UN1005',\
'The Gong - 220 Double)':'UN1006',\
'The Gong - 221 Double)':'UN1007',\
'The Gong - 222 Double)':'UN1008',\
'The Gong - 223 Double)':'UN1009',\
'The Gong - 224 Double Ocean View)':'UN1010',\
'The Gong - 101 Twin)':'UN1011',\
'The Gong - 102 Twin)':'UN1012',\
'The Gong - 103 Twin)':'UN1013',\
'The Gong - 104 Twin)':'UN1014',\
'The Gong - 105 Twin)':'UN1015',\
'The Gong - 106 Twin)':'UN1016',\
'The Gong - 107 Twin)':'UN1017',\
'The Gong - 108 Twin)':'UN1018',\
'The Hideaway - 1':'UN1019',\
'The Hideaway - 2':'UN1020',\
'The Hideaway - 3':'UN1021',\
'The Hideaway - 4':'UN1022',\
'The Jarrdin 2BR - C228 - Rahmat':'UN1023',\
'The Jarrdin 2BR - C522 - Rahmat':'UN1024',\
'The Jarrdin 2BR - C527 - Rahmat':'UN1025',\
'The Jarrdin 2BR - C1116 - Rahmat':'UN1026',\
'The Jarrdin Studio 1 - Rahmat':'UN1027',\
'The Jarrdin Studio 2 - Rahmat':'UN1028',\
'The Jepun - 1':'UN1029',\
'The Jepun - 2':'UN1030',\
'The Jepun - 3':'UN1031',\
'The Jepun - 4':'UN1032',\
'The Kayuri - 1':'UN1033',\
'The Kayuri - 2':'UN1034',\
'The Kharma Villa - 1':'UN1035',\
'The Kharma Villa - 2 master room)':'UN1036',\
'The Kharma Villa - 3':'UN1037',\
'The Kharma Villa - 4':'UN1038',\
'The Kharma Villa - 5':'UN1039',\
'The Kharma Villa - 6':'UN1040',\
'The Kharma Villa - 7':'UN1041',\
'The Pakis Hostel':'UN1042',\
'The Paving - Deluxe Double 1':'UN1043',\
'The Paving - Deluxe Double 2':'UN1044',\
'The Paving - Deluxe 3':'UN1045',\
'The Paving - Deluxe 4':'UN1046',\
'The Paving - Deluxe 5':'UN1047',\
'The Paving - Deluxe Twin 1':'UN1048',\
'The Paving - Super Deluxe 1':'UN1049',\
'The Paving - Super Deluxe 2':'UN1050',\
'The Paving - Super Deluxe 3':'UN1051',\
'The Paving - Super Deluxe 4':'UN1052',\
'The White House':'UN1053',\
'Three Monkeys - Deluxe 1 double)':'UN1054',\
'Three Monkeys - Deluxe 2 twin)':'UN1055',\
'Three Monkeys - Standard 1 twin)':'UN1056',\
'Three Monkeys - Standard 2 double)':'UN1057',\
'Tirtha Canggu Suites - 01':'UN1058',\
'Tirtha Canggu Suites - 02':'UN1059',\
'Tirtha Canggu Suites - 03':'UN1060',\
'Tirtha Canggu Suites - 04':'UN1061',\
'Tirtha Canggu Suites - 05':'UN1062',\
'Tirtha Canggu Suites - 06':'UN1063',\
'Tirtha Canggu Suites - 07':'UN1064',\
'Tirtha Canggu Suites - 08':'UN1065',\
'Tirtha Canggu Suites - 09':'UN1066',\
'Tirtha Canggu Suites - 10':'UN1067',\
'Tirtha Canggu Suites - 11':'UN1068',\
'Tirtha Canggu Suites - 12':'UN1069',\
'Tirtha Canggu Suites - 13':'UN1070',\
'Tirtha Canggu Suites - 14':'UN1071',\
'Tirtha Canggu Suites - 15':'UN1072',\
'Tirtha Canggu Suites - 16':'UN1073',\
'Tirtha Canggu Suites - 17':'UN1074',\
'Tirtha Canggu Suites - 18':'UN1075',\
'Tirtha Canggu Suites - 19':'UN1076',\
'Tirtha Canggu Suites - 20':'UN1077',\
'Tirtha Canggu Suites - 21':'UN1078',\
'Tirtha Canggu Suites - 22':'UN1079',\
'Tirtha Canggu Suites - 2BR':'UN1080',\
'Tirtha Canggu Suites - 8BR':'UN1081',\
'Tirto Raharjo - 1':'UN1082',\
'Tirto Raharjo - 2':'UN1083',\
'Tirto Raharjo - 3':'UN1084',\
'Tirto Raharjo - 4':'UN1085',\
'Tirto Raharjo - 5':'UN1086',\
'Treehouse Suites - 1-Bedroom':'UN1087',\
'Treehouse Suites - Deluxe':'UN1088',\
'Treehouse Suites - Economy':'UN1089',\
'Treehouse Suites - Executive':'UN1090',\
'Treehouse Suites - Premium Executive':'UN1091',\
'Treehouse Suites - Superior':'UN1092',\
'Ubud Indah':'UN1093',\
'Uluwatu Breeze - Twin':'UN1094',\
'Uluwatu Cottages - 11 Double)':'UN1095',\
'Uluwatu Cottages - 12 Double)':'UN1096',\
'Uluwatu Cottages - 13 Double)':'UN1097',\
'Uluwatu Cottages - 14 Double)':'UN1098',\
'Uluwatu Cottages - 15 Double)':'UN1099',\
'Uluwatu Cottages - 16 Double)':'UN1100',\
'Uluwatu Cottages - 17 Double)':'UN1101',\
'Uluwatu Cottages - 18 Double)':'UN1102',\
'Uluwatu Cottages - 19 Double)':'UN1103',\
'Uluwatu Cottages - 2 bedrooms':'UN1104',\
'Uluwatu Cottages - 20 Double)':'UN1105',\
'Uluwatu Cottages - 21 Twin)':'UN1106',\
'Uluwatu Cottages - 22 Twin)':'UN1107',\
'Uluwatu Cottages - 23 Twin)':'UN1108',\
'Uluwatu Cottages - 24 Twin)':'UN1109',\
'Uluwatu Cottages - 25 Suite)':'UN1110',\
'Uluwatu Cottages - 26 Suite)':'UN1111',\
'Uluwatu Cottages - 27 Suite)':'UN1112',\
'Uluwatu Cottages - 28 Suite)':'UN1113',\
'Uluwatu Cottages - 3 bedrooms':'UN1114',\
'Uluwatu Cottages - Double':'UN1115',\
'Uluwatu Cottages - Suite':'UN1116',\
'Uluwatu Jungle Villa - 1':'UN1117',\
'Uluwatu Jungle Villa - 2':'UN1118',\
'Uluwatu Jungle Villa - 2BR':'UN1119',\
'Uluwatu Jungle Villa - 3':'UN1120',\
'Uluwatu Jungle Villa - 3BR':'UN1121',\
'Uluwatu Jungle Villa - 4':'UN1122',\
'Uluwatu Jungle Villa - 4BR':'UN1123',\
'Uluwatu Jungle Villa - 5':'UN1124',\
'Uluwatu Jungle Villa - 8BR':'UN1125',\
'Uluwatu Jungle Villa - 5BR':'UN1126',\
'Uluwatu Jungle Villa - 6':'UN1127',\
'Uluwatu Jungle Villa - 7':'UN1128',\
'Uluwatu Jungle Villa - 8':'UN1129',\
'Uluwatu Jungle Villa - 9':'UN1130',\
'Uluwatu Jungle Villa - 10':'UN1131',\
'Uluwatu Village House - 1':'UN1132',\
'Uluwatu Village House - 2':'UN1133',\
'Uluwatu Village House - 2BR':'UN1134',\
'Uluwatu Village House - Bungalow 1':'UN1135',\
'Uluwatu Village House - Bungalow 2':'UN1136',\
'Uluwatu Village House - Bungalow 3':'UN1137',\
'Uluwatu Village House - Bungalow 4':'UN1138',\
'Uluwatu Village House - Bungalow 5':'UN1139',\
'V Residence - Deluxe':'UN1140',\
'V Residence - Suite':'UN1141',\
'V Residence - Superior':'UN1142',\
'Villa 9 Nelayan - 01':'UN1143',\
'Villa 9 Nelayan - 02':'UN1144',\
'Villa 9 Nelayan - 03':'UN1145',\
'Villa 9 Nelayan - 04 bunk bed)':'UN1146',\
'Villa 9 Nelayan - 05 bunk bed)':'UN1147',\
'Villa 9 Nelayan - 06 bunk bed)':'UN1148',\
'Villa 9 Nelayan - 07':'UN1149',\
'Villa 9 Nelayan - 08':'UN1150',\
'Villa 9 Nelayan - 09':'UN1151',\
'Villa 9 Nelayan - 10':'UN1152',\
'Villa 9 Nelayan - 11':'UN1153',\
'Villa 9 Nelayan - 12':'UN1154',\
'Villa Ajee':'UN1155',\
'Villa Akara':'UN1156',\
'Villa Akilea - 1':'UN1157',\
'Villa Akilea - 2':'UN1158',\
'Villa Akilea - 3':'UN1159',\
'Villa Akilea - 4':'UN1160',\
'Villa Akilea - 5':'UN1161',\
'Villa AKL - Langit 1':'UN1162',\
'Villa AKL - Langit 2':'UN1163',\
'Villa AKL - Tukad 1':'UN1164',\
'Villa AKL - Tukad 2':'UN1165',\
'Villa Anak':'UN1166',\
'Villa Anak 2nd listing':'UN1167',\
'Villa Arca':'UN1168',\
'Villa Arindra - 1':'UN1169',\
'Villa Arindra - 2':'UN1170',\
'Villa Arindra - 2 bedrooms':'UN1171',\
'Villa Arindra - 3':'UN1172',\
'Villa Arindra - 4':'UN1173',\
'Villa Asmara':'UN1174',\
'Villa Asmara - 2br':'UN1175',\
'Villa Ayunan':'UN1176',\
'Villa Bagus':'UN1177',\
'Villa Bali Cliff':'UN1178',\
'Villa Bambu - 1':'UN1179',\
'Villa Bambu - 2':'UN1180',\
'Villa Bambu - 3':'UN1181',\
'Villa Be Home':'UN1182',\
'Villa Bening':'UN1183',\
'Villa Bening - 2br':'UN1184',\
'Villa Bening - 3br':'UN1185',\
'Villa Bija - 3 bedroom villa':'UN1186',\
'Villa Bija - 6 bedroom villa':'UN1187',\
'Villa Bija - Apartment - 2BR':'UN1188',\
'Villa Bija - Apartment 2 double)':'UN1189',\
'Villa Bija - Apartment 3 Double)':'UN1190',\
'Villa Bija - Apartment 1':'UN1191',\
'Villa Bija - Apartment 4':'UN1192',\
'Villa Bija - Apartment 5':'UN1193',\
'Villa Bija - Apartment 6':'UN1194',\
'Villa Bingin Luna':'UN1195',\
'Pondok Ijo - Villa Bougenvile':'UN1196',\
'Pondok Ijo - Green':'UN1197',\
'Pondok Ijo - Red':'UN1198',\
'Pondok Ijo - Garden':'UN1199',\
'Pondok Ijo - Mozaic 3':'UN1200',\
'Pondok Ijo - Mozaic1':'UN1201',\
'Villa Bukit Surf':'UN1202',\
'Villa Bulan':'UN1203',\
'Villa Bulan 2nd listing':'UN1204',\
'Villa Cahaya':'UN1205',\
'Villa Cerita Indah':'UN1206',\
'Villa Chicken Nuggets':'UN1207',\
'Villa Diana':'UN1208',\
'Villa Driftwood':'UN1209',\
'Villa Entre Amis':'UN1210',\
'Villa Enzo':'UN1211',\
'Villa Esther':'UN1212',\
'Villa Ganesha':'UN1213',\
'Villa Hali Bali - 1 Bedroom':'UN1214',\
'Villa Hali Bali - 2 Bedroom':'UN1215',\
'Villa Hali Bali - Entire Villa':'UN1216',\
'Villa Hari Indah':'UN1217',\
'Villa Idaman - 1':'UN1218',\
'Villa Idaman - 2':'UN1219',\
'Villa Idaman - Whole Villa':'UN1220',\
'Villa Indigo':'UN1221',\
'Villa Istana Willy':'UN1222',\
'2BR - Villa Istana Willy':'UN1223',\
'Villa Jonson':'UN1224',\
'Villa Kama - 1':'UN1225',\
'Villa Kama - 1 2nd listing':'UN1226',\
'Villa Kama - 2':'UN1227',\
'Villa Kama - 3':'UN1228',\
'Villa Kama - 4':'UN1229',\
'Villa Kanha':'UN1230',\
'Villa Karang':'UN1231',\
'Villa Khaleesi':'UN1232',\
'Gili Khumba Villas - 1 1br)':'UN1233',\
'Gili Khumba Villas - 2 1br)':'UN1234',\
'Gili Khumba Villas - 3 2br)':'UN1235',\
'Gili Khumba Villas - 4 1br)':'UN1236',\
'Gili Khumba Villas - 5 2br)':'UN1237',\
'Gili Khumba Villas - 6 1br)':'UN1238',\
'Villa Kura Kura':'UN1239',\
'Villa Lila Loka - 1 Double)':'UN1240',\
'Villa Lila Loka - 1 Twin)':'UN1241',\
'Villa Lila Loka - 2 Double)':'UN1242',\
'Villa Lila Loka - 2 Twin)':'UN1243',\
'Villa Lila Loka - 3 Double)':'UN1244',\
'Villa Lila Loka - 3 Twin)':'UN1245',\
'Villa Lila Loka - 4 Double)':'UN1246',\
'Villa Lila Loka - 4 Twin)':'UN1247',\
'Villa Lila Loka - 5 Double)':'UN1248',\
'Villa Lila Loka - 5 Twin)':'UN1249',\
'Villa Lila Loka - 6 Double)':'UN1250',\
'Villa Lila Loka - 7 Double)':'UN1251',\
'Villa Loluan - 1':'UN1252',\
'Villa Loluan - 2':'UN1253',\
'Villa Malindo':'UN1254',\
'Villa Mandalay':'UN1255',\
'Villa Matahari':'UN1256',\
'Villa Mediapura - B':'UN1257',\
'Villa Mediapura - E':'UN1258',\
'Villa Mediapura - F':'UN1259',\
'Villa Mediapura - J':'UN1260',\
'Villa Megalan':'UN1261',\
'Villa Megalan - 1':'UN1262',\
'Villa Megalan - 2':'UN1263',\
'Villa Merdu':'UN1264',\
'Villa Merdu 2nd listing':'UN1265',\
'Villa Moyo Unit 3':'UN1266',\
'Villa Mundaka':'UN1267',\
'Villa Mynah':'UN1268',\
'Villa Nazeki - 1':'UN1269',\
'Villa Nazeki - 2':'UN1270',\
'Villa Nazeki - 3':'UN1271',\
'Villa Nazeki - 4':'UN1272',\
'Villa Nazeki - 5':'UN1273',\
'Villa Ombak':'UN1274',\
'Villa Papaya':'UN1275',\
'Villa Plumeria':'UN1276',\
'Villa Purnama':'UN1277',\
'Villa Purnama 2nd listing':'UN1278',\
'Villa Savasana':'UN1279',\
'Villa Shanti 2BR':'UN1280',\
'Villa Shanti 3BR':'UN1281',\
'Villa Shanti 5BR':'UN1282',\
'Villa Singa':'UN1283',\
'Villa Singa - 1br':'UN1284',\
'Villa Singa - 2br':'UN1285',\
'Villa Singa - 3br':'UN1286',\
'Villa Singa - 6br':'UN1287',\
'Villa Sonia':'UN1288',\
'Villa Sotis':'UN1289',\
'Villa Sunia':'UN1290',\
'Villa Sunia - 1':'UN1291',\
'Villa Sunia - 2':'UN1292',\
'Villa Tortoise':'UN1293',\
'Villa Tortoise - Entire Property':'UN1294',\
'Villa Tortoise - Room 1':'UN1295',\
'Villa Tortoise - Room 2':'UN1296',\
'Villa Tortoise - Room 2 2nd listing':'UN1297',\
'Villa Toya':'UN1298',\
'Villa Toya 2nd listing':'UN1299',\
'Villa Tropicana':'UN1300',\
'Villa Tykhe':'UN1301',\
'Villa Vintage 1':'UN1302',\
'Villa Zen':'UN1303',\
'Villas Kemang Timur - 5':'UN1304',\
'Vivo Villas B Unit':'UN1305',\
'VOC Guesthouse - 1':'UN1306',\
'VOC Guesthouse - 2':'UN1307',\
'VOC Guesthouse - 3':'UN1308',\
'VOC Guesthouse - 4':'UN1309',\
'VOC Guesthouse - 5':'UN1310',\
'VOC Guesthouse - 6':'UN1311',\
'White Coconut':'UN1312',\
'Watusaman Fullhouse':'UN1313',\
'Watusaman - Deluxe':'UN1314',\
'Watusaman - Standard':'UN1315',\
'Watusaman - Superior 1':'UN1316',\
'Watusaman - Superior 2':'UN1317',\
'Watusaman - Superior 3':'UN1318',\
'Watusaman - Superior 4':'UN1319',\
'Watusaman - Superior 5':'UN1320',\
'Wira Homestay - 10':'UN1321',\
'Wira Homestay - 11':'UN1322',\
'Wira Homestay - 12':'UN1323',\
'Wira Homestay - 14':'UN1324',\
'Wira Homestay - 15':'UN1325',\
'Wira Homestay - 16':'UN1326',\
'Wira Homestay - 18':'UN1327',\
'Wira Homestay - 19':'UN1328',\
'Wira Homestay - 20':'UN1329',\
'Wira Homestay - 21':'UN1330',\
'Wira Homestay - 22':'UN1331',\
'Wiras Village - 1 double)':'UN1332',\
'Wiras Village - 2 double)':'UN1333',\
'Wiras Village - Twin 1':'UN1334',\
'Yoga Searcher - 1':'UN1335',\
'Yoga Searcher - 2':'UN1336',\
'Yoga Searcher - 3':'UN1337',\
'Yoga Searcher - 4':'UN1338',\
'Yoga Searcher - 5':'UN1339',\
'Yoga Searcher - 6':'UN1340',\
'Yoga Searcher - 7':'UN1341',\
'Yoga Searcher - 8':'UN1342',\
'Dago Village - Bu Luki':'UN1343',\
'Dago Village - Bu Ami':'UN1344',\
'Dago Village - Bu Fenti - SkyFall Villa':'UN1345',\
'Dago Village - Bu Fenti - SkyFall Villa 2nd l':'UN1346',\
'Denpasar Residence - 2BR - A':'UN1347',\
'Denpasar Residence - 2BR - B':'UN1348',\
'Villa Rizki':'UN1349',\
'Adi Bali Homestay - T1':'UN1350',\
'Adi Bali Homestay - T2':'UN1351',\
'Adi Bali Homestay - D1':'UN1352',\
'Adi Bali Homestay - D2':'UN1353',\
'Villa Rama':'UN1354',\
'Villa Sinta':'UN1355',\
'The Jarrdin 2BR - C2229 - Rahmat':'UN1356',\
'Villa Mediapura - 2 Villas - F&J':'UN1357',\
'Rumah Eyang':'UN1358',\
'Kubu Pande Homestay - Double 1':'UN1359',\
'Kubu Pande Homestay - Double 2':'UN1360',\
'Kubu Pande Homestay - Double 3':'UN1361',\
'Kubu Pande Homestay - Double 4':'UN1362',\
'Kubu Pande Homestay - Twin 1':'UN1363',\
'Kubu Pande Homestay - Double 5':'UN1364',\
'Kubu Pande Homestay - Double 6':'UN1365',\
'Kubu Pande Homestay - 2 Rooms':'UN1366',\
'Indira Cottage - Standard 1':'UN1367',\
'Indira Cottage - Superior 1':'UN1368',\
'Indira Cottage - Deluxe 1':'UN1369',\
'Bamboo Villa - 1':'UN1370',\
'Ndalem Kasongan - Whole House':'UN1371',\
'Villa The Cantri - 3BR Hook':'UN1372',\
'Villa The Cantri - 3BR Standard':'UN1373',\
'Villa The Cantri - 2BR':'UN1374',\
'808 Residence - Family Room':'UN1375',\
'808 Residence - Standard Room':'UN1376',\
'808 Residence - Deluxe Room':'UN1377',\
'808 Residence - Apartment':'UN1378',\
'Kampung Jimba - Ulu A':'UN1379',\
'Kampung Jimba - Ulu B':'UN1380',\
'Kampung Jimba - Nias A':'UN1381',\
'Kampung Jimba - Nias B':'UN1382',\
'D\'Java Timuran - 1':'UN1383',\
'D\'Java Timuran - 2':'UN1384',\
'D\'Java Timuran - 3':'UN1385',\
'D\'Java Timuran - 4':'UN1386',\
'D\'Java Timuran - 5':'UN1387',\
'D\'Java Timuran - 6':'UN1388',\
'D\'Java Timuran - 7':'UN1389',\
'D\'Java Timuran - 8':'UN1390',\
'Rumah Kemang 50':'UN1391',\
'Pendopo 26  Whole Villa )':'UN1392',\
'Dago Butik Apartment':'UN1393',\
'Griya Siwi':'UN1394',\
'Teges Asri - 1':'UN1395',\
'Teges Asri - 2':'UN1396',\
'Teges Asri - 3':'UN1397',\
'Teges Asri - 4':'UN1398',\
'Teges Asri - 5':'UN1399',\
'Teges Asri - 6':'UN1400',\
'Teges Asri - 7 studio)':'UN1401',\
'Teges Asri - 7 BR':'UN1402',\
'Teges Asri - 2 BR':'UN1403',\
'Roemah Canting - Std Single - Galaran':'UN1404',\
'Roemah Canting - Std Double - Byok':'UN1405',\
'Roemah Canting - Std Double - Liman':'UN1406',\
'Roemah Canting - Std Double - Nembok':'UN1407',\
'Roemah Canting - Std Double - Cecekani':'UN1408',\
'Roemah Canting - Std Twin - Nitik':'UN1409',\
'Roemah Canting - Std Dlx - Wayang':'UN1410',\
'Roemah Canting - Std Dlx - Nyamplung':'UN1411',\
'Roemah Canting - Std Dlx Twin - Loron  T )':'UN1412',\
'Roemah Canting - Std Dlx - RengReng':'UN1413',\
'Roemah Canting - Fam -  Telon':'UN1414',\
'Roemah Canting - Whole House':'UN1415',\
'JogjaDreams Family Villa':'UN1416',\
'Griya Wirosaban':'UN1417',\
'Griya Asih - 1  Twin )':'UN1418',\
'Griya Asih - 2  Twin )':'UN1419',\
'Griya Asih - 3  Double )':'UN1420',\
'Griya Asih - 4  Double )':'UN1421',\
'Griya Asih - 5  Twin )':'UN1422',\
'Griya Asih - 6  Double )':'UN1423',\
'Griya Asih - Whole villa':'UN1424',\
'Tegal Panggung - Deluxe 1':'UN1425',\
'Tegal Panggung - Deluxe 2':'UN1426',\
'Tegal Panggung - Deluxe 3':'UN1427',\
'Tegal Panggung - Deluxe 4':'UN1428',\
'Tegal Panggung - Deluxe 5':'UN1429',\
'Tegal Panggung - Executive':'UN1430',\
'Tegal Panggung - Pavilion':'UN1431',\
'Bali Omah - 1 w/ bathroom':'UN1432',\
'Bali Omah - 2':'UN1433',\
'Bali Omah - 3':'UN1434',\
'Bali Omah - 4':'UN1435',\
'Bali Omah':'UN1436',\
'Villa Merdu - 1':'UN1437',\
'Villa Merdu - 2':'UN1438',\
'Villa Merdu - 3':'UN1439',\
'Pendopo 26 - 2':'UN1440',\
'Pendopo 26 - 3  Family )':'UN1441',\
'Pendopo 26 - 4':'UN1442',\
'Pendopo 26 - 5':'UN1443',\
'Pendopo 26 - 6':'UN1444',\
'Pendopo 26 - 7':'UN1445',\
'Pendopo 26 - 8':'UN1446',\
'Pendopo 26 - 9':'UN1447',\
'Toras Guesthouse - 1':'UN1448',\
'Toras Guesthouse - 2':'UN1449',\
'Toras Guesthouse - 3':'UN1450',\
'Toras Guesthouse - 4':'UN1451',\
'Toras Guesthouse - 5':'UN1452',\
'Toras Guesthouse - 6':'UN1453',\
'Toras Guesthouse - 7':'UN1454',\
'Toras Guesthouse - 8':'UN1455',\
'Omah Ucok - Wood':'UN1456',\
'Omah Ucok - Brick':'UN1457',\
'Omah Ucok - Stone':'UN1458',\
'Omah Ucok - Family Wood':'UN1459',\
'Omah Ucok - Family Brick':'UN1460',\
'Rumah Kami':'UN1461',\
'Rumah Kami Langenarjan':'UN1462',\
'Puri Casablanca - 2BR - Tower C':'UN1463',\
'Puri Casablanca - 4BR - Tower D':'UN1464',\
'The Jarrdin 2BR - CXXX - Rahmat':'UN1465',\
'Villa Casa Mia':'UN1466',\
'Villa Casa Mia - Room 1':'UN1467',\
'Villa Casa Mia - Room 2':'UN1468',\
'Villa Casa Mia - Room 3':'UN1469',\
'Villa Casa Mia - Room 4':'UN1470',\
'Omah JeTeHa':'UN1471',\
'William\'s Place - Green  1st F )':'UN1472',\
'William\'s Place - Blue  1st F )':'UN1473',\
'William\'s Place - Brown  2nd F )':'UN1474',\
'William\'s Place - Grey  2nd F )':'UN1475',\
'William\'s Place - Whole Villa':'UN1476',\
'Raka & Rai Guesthouse - 1':'UN1477',\
'Raka & Rai Guesthouse - 2':'UN1478',\
'Raka & Rai Guesthouse - 3':'UN1479',\
'Raka & Rai Guesthouse - 4':'UN1480',\
'Raka & Rai Guesthouse - 5':'UN1481',\
'Raka & Rai Guesthouse - 6':'UN1482',\
'Raka & Rai Guesthouse - 7':'UN1483',\
'Raka & Rai Guesthouse - 8':'UN1484',\
'Raka & Rai Guesthouse - 9':'UN1485',\
'Raka & Rai Guesthouse - 2BR':'UN1486',\
'Raka & Rai Guesthouse - 9BR':'UN1487',\
'Toya Villa - Orchid 1':'UN1488',\
'Toya Villa - Orchid 2':'UN1489',\
'Toya Villa - Orchid 3':'UN1490',\
'Toya Villa - Orchid 4':'UN1491',\
'Toya Villa - Magnolia 1':'UN1492',\
'Toya Villa - Magnolia 2':'UN1493',\
'Toya Villa - Magnolia 4':'UN1494',\
'Toya Villa - Magnolia 5':'UN1495',\
'Toya Villa - 9BR':'UN1496',\
'Toya Villa - 2BR':'UN1497',\
'Wisma Eyang Sosro - 1':'UN1498',\
'Wisma Eyang Sosro - 2':'UN1499',\
'Wisma Eyang Sosro - 3':'UN1500',\
'Wisma Eyang Sosro - 4 Twin Bed)':'UN1501',\
'Wisma Eyang Sosro - 5':'UN1502',\
'Wisma Eyang Sosro - 6':'UN1503',\
'Wisma Eyang Sosro - 7':'UN1504',\
'Wisma Eyang Sosro - 8':'UN1505',\
'Wisma Eyang Sosro - 9':'UN1506',\
'Villa Cenik Ubud - Cenik 1':'UN1507',\
'Villa Cenik Ubud - Cenik 2':'UN1508',\
'Villa Cenik Ubud - Cenik 3':'UN1509',\
'Villa Cenik Ubud - Cenik 4':'UN1510',\
'Vinnayaka Guesthouse - 1':'UN1511',\
'Vinnayaka Guesthouse - 2':'UN1512',\
'Vinnayaka Guesthouse - 3':'UN1513',\
'Vinnayaka Guesthouse - 4':'UN1514',\
'Suci Sari - 1 2BR)':'UN1515',\
'Suci Sari - 2 2BR)':'UN1516',\
'Suci Sari - 3 3BR)':'UN1517',\
'Melin Inn - 1A':'UN1518',\
'Melin Inn - 1B':'UN1519',\
'Melin Inn - 2A':'UN1520',\
'Melin Inn - 2B':'UN1521',\
'Melin Inn - 3  Family )':'UN1522',\
'Batu Agung - Wooden House 1':'UN1523',\
'Batu Agung - Wooden House 2':'UN1524',\
'Batu Agung - Wooden House 3':'UN1525',\
'Batu Agung - Wooden House 4':'UN1526',\
'Batu Agung - Wooden House 5':'UN1527',\
'Batu Agung - Standard Room 1':'UN1528',\
'Batu Agung - Standard Room 2':'UN1529',\
'Batu Agung - Standard Villa 1':'UN1530',\
'Batu Agung - Standard Villa 2':'UN1531',\
'Batu Agung - Standard Villa 3':'UN1532',\
'Batu Agung - 2 BR Villa':'UN1533',\
'Batu Agung - 3 BR Villa':'UN1534',\
'Bingin Ombak Standard - 1':'UN1535',\
'Bingin Ombak Standard - 2':'UN1536',\
'Bingin Ombak Standard - 3':'UN1537',\
'Bingin Ombak Standard - 4':'UN1538',\
'Bingin Ombak Apartment - 1 Lantai 1':'UN1539',\
'Bingin Ombak Apartment - 2 Lantai 2':'UN1540',\
'Bingin Ombak Family Aparment':'UN1541',\
'The Landmark 30-06':'UN1542',\
'The Landmark 30-05':'UN1543',\
'The Landmark 29-07':'UN1544',\
'The Landmark 29-02':'UN1545',\
'The Landmark 26-02':'UN1546',\
'The Landmark 25-02':'UN1547',\
'The Landmark 23-3A':'UN1548',\
'The Landmark 20-03':'UN1549',\
'The Landmark 18-06':'UN1550',\
'The Landmark 18-05':'UN1551',\
'The Landmark 18-3A':'UN1552',\
'The Landmark 18-03':'UN1553',\
'The Landmark 18-01':'UN1554',\
'Villa Luna':'UN1555',\
'Summergrass - Standard room 01':'UN1556',\
'Summergrass - Standard room 02':'UN1557',\
'Summergrass - Twin room 03':'UN1558',\
'Summergrass - Standard room 04':'UN1559',\
'Summergrass - Standard room 05':'UN1560',\
'Summergrass - Entire Property':'UN1561',\
'Posnya Seni Godod - Merapi':'UN1562',\
'WK Gamat Garden Villa  -  Private Pool Villa':'UN1563',\
'WK Gamat Garden Villa  -  Villa 1  D )':'UN1564',\
'WK Gamat Garden Villa - Villa 2  T )':'UN1565',\
'WK Gamat Garden Villa - Villa 3  D )':'UN1566',\
'WK Gamat Garden Villa - Villa 4  D )':'UN1567',\
'Bale Tudor - House\'s':'UN1568',\
'Bale Tudor - Villa Cassandra':'UN1569',\
'Bale Tudor - Cassandra 1':'UN1570',\
'Bale Tudor - Cassandra 2':'UN1571',\
'Bale Tudor - Villa James':'UN1572',\
'Bale Tudor - James 1':'UN1573',\
'Bale Tudor - James 2':'UN1574',\
'Bale Tudor - Villa Russel':'UN1575',\
'Bale Tudor - Russel 1':'UN1576',\
'Bale Tudor - Russel 2':'UN1577',\
'Bale Tudor - Whole Resort':'UN1578',\
'Bale Tudor - James & Russel 4BR':'UN1579',\
'Pondok Joglo Odit - Wooden 1 T)':'UN1580',\
'Pondok Joglo Odit - Wooden 2 D)':'UN1581',\
'Pondok Joglo Odit - Wooden 3 D)':'UN1582',\
'Pondok Joglo Odit - Wooden 4 D)':'UN1583',\
'Pondok Joglo Odit - Whole Villa':'UN1584',\
'Villa Kulat Entire)':'UN1585',\
'Griya Bausasran 52 - 1':'UN1586',\
'Griya Bausasran 52 - 2':'UN1587',\
'Griya Bausasran 52 - 3':'UN1588',\
'Griya Bausasran 52 - Entire House':'UN1589',\
'Bingin Surf Left - Room 1A':'UN1590',\
'Bingin Surf Left - Room 2A':'UN1591',\
'Bingin Surf Left - Room 3A':'UN1592',\
'Villa Kulat 2 BR)':'UN1593',\
'Cabana Krui Lampung':'UN1594',\
'Joglo Agung':'UN1595',\
'Rumah Agung':'UN1596',\
'Bali Shanti - 102':'UN1597',\
'Tamu Ibu':'UN1598',\
'Griya Tiyasan':'UN1599',\
'Lorong Homestay - Omah Ngarep':'UN1600',\
'Lorong Homestay - Petruk':'UN1601',\
'Lorong Homestay - Togog':'UN1602',\
'Lorong Homestay - Mbilung':'UN1603',\
'Lorong Homestay - Omah Mburi':'UN1604',\
'Lorong Homestay - Bagong':'UN1605',\
'Lorong Homestay - Semar':'UN1606',\
'Lorong Homestay - Gareng':'UN1607',\
'Double D Guesthouse - 4BR':'UN1608',\
'Sannyas - 1 Hollywood + Bath)':'UN1609',\
'Sannyas - 10 Valentina\'s Room)':'UN1610',\
'Sannyas - 2 Hollywood + Bath)':'UN1611',\
'Sannyas - 3 Hollywood + Shower)':'UN1612',\
'Sannyas - 4 Double + Bath)':'UN1613',\
'Sannyas - 5 Twin + Shower)':'UN1614',\
'Sannyas - 6a Quad)':'UN1615',\
'Sannyas - 6b Quad)':'UN1616',\
'Sannyas - 6c Quad)':'UN1617',\
'Sannyas - 6d Quad)':'UN1618',\
'Sannyas - 7a Triple)':'UN1619',\
'Sannyas - 7b Triple)':'UN1620',\
'Sannyas - 7c Triple)':'UN1621',\
'Sannyas - 8 Twin + Shower)':'UN1622',\
'Sannyas - 9 Twin + Shower)':'UN1623',\
'Wabisabi - 1 double)':'UN1624',\
'Wabisabi - 2 double)':'UN1625',\
'Wabisabi - 3 twin)':'UN1626',\
'Wabisabi - 4 double)':'UN1627',\
'Wabisabi - Entire House':'UN1628',\
'808 Residence - Rose':'UN1629',\
'808 Residence - Lotus':'UN1630',\
'808 Residence - Daisy':'UN1631',\
'Villa Entre Amis':'UN1632',\
'Mule Malu - King Double':'UN1633',\
'Mule Malu - Queen Double':'UN1634',\
'Sesapi Putih':'UN1635',\
'Shankara - Bungalow 1':'UN1636',\
'Shankara - Bungalow 2':'UN1637',\
'Shankara - Bungalow 3':'UN1638',\
'Shankara - Bungalow 4':'UN1639',\
'Shankara - Bungalow 5':'UN1640',\
'Coffee Network - Bungalow 1':'UN1641',\
'Coffee Network - Bungalow 2':'UN1642',\
'Coffee Network - Bungalow 3':'UN1643',\
'Coffee Network - Bungalow 4':'UN1644',\
'Coffee Network - Bungalow 5':'UN1645',\
'Coffee Network - Bungalow 6':'UN1646',\
'Sinar Sari - Room 1':'UN1647',\
'Sinar Sari - Room 2':'UN1648',\
'Sinar Sari - Room 3':'UN1649',\
'Sinar Sari - Room 4':'UN1650',\
'Sinar Sari - Room 5':'UN1651',\
'Seno Guesthouse - Double 1':'UN1652',\
'Seno Guesthouse - Double 2':'UN1653',\
'Seno Guesthouse - Double 3':'UN1654',\
'Seno Guesthouse - Double 4':'UN1655',\
'Seno Guesthouse - Double 5':'UN1656',\
'Seno Guesthouse - Double 6':'UN1657',\
'Seno Guesthouse - Double 7':'UN1658',\
'Seno Guesthouse - Double 8':'UN1659',\
'Seno Guesthouse - Double 9':'UN1660',\
'Seno Guesthouse - Double 10':'UN1661',\
'Seno Guesthouse - Double 11':'UN1662',\
'Seno Guesthouse - Double 12':'UN1663',\
'Seno Guesthouse - Double 13':'UN1664',\
'Seno Guesthouse - Twin 1':'UN1665',\
'Seno Guesthouse - Twin 2':'UN1666',\
'Seno Guesthouse - Twin 3':'UN1667',\
'Seno Guesthouse - Twin 4':'UN1668',\
'Villa Melasti Ungasan':'UN1669',\
'9 Nelayan - Water Cabin':'UN1670'})
df['listing_instant_book']=df['listing_instant_book'].map({'Yes':1,'No':2})
df['listing_status']=df['listing_status'].map({
'Listed':1,'Ready to launch':2,'Unlisted':3})
df['listing_remark']=df['listing_remark'].map({
'NEW':1,'New':1,'VA':2,'CS':3,'Cs':3,'NP':4,'Np':4})
dfUnit=df["unit_id"].fillna('UN0000')
dfProfile=df['profile_id'].fillna('PA0000')
dfEmployee=df['employee_id'].fillna('E0000')
dfStatus=df['listing_status'].fillna(0)
dfInstantBook=df['listing_instant_book'].fillna(0)
dfRemark=df['listing_remark'].fillna(0)
dfPOwner=df['unit_percentage_owner'].fillna(0)
dfPBv=df['unit_percentage_bv'].fillna(0)
cols=['listing_id','listing_onboard_date','listing_url','listing_name',\
'listing_account_owner','listing_account_bv']
df1=pd.DataFrame(df,columns=cols)
dfCombine=pd.concat([df1,dfStatus,dfInstantBook,dfRemark,dfUnit,dfProfile,dfEmployee],axis=1)
dfCombine2=pd.concat([dfUnit,dfPOwner,dfPBv],axis=1)
dfCombine.to_csv('i_listing_ok.csv',index=False)
dfCombine2.to_csv('i_update_unit.csv',index=False)
