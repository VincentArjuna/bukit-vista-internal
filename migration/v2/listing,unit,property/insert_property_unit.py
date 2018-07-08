import pandas as pd
import numpy as np


df = pd.read_csv("gv.csv")
df['area']=df['area'].map({
'Yogyakarta':'A0001',\
'Uluwatu':'A0002',\
'Canggu':'A0003',\
'Ubud':'A0004',\
'Jakarta':'A0005',\
'Bandung':'A0006',\
'Phuket':'A0007',\
'Bingin':'A0008',\
'Balangan':'A0009',\
'Jimbaran':'A0010',\
'Ungasan':'A0011',\
'Nusa Dua':'A0012',\
'Padang Padang':'A0013',\
'Gili Trawangan':'A0014',\
'Seminyak':'A0015',\
'Kuta':'A0016',\
'Singapore':'A0017',\
'Cemagi':'A0018',\
'Penang':'A0019',\
'Nusa Penida':'A0020'})
df['type'] = df['type'].map({'House': 1, 'Villa': 2,'Apartment':3,'Guesthouse':4,'Resort':5})
df['added'] = df['added'].map({
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
df['status']=df['status'].map({
'Partner': 1, 'Non Partner': 2})
df['package']=df['package'].map({
'Partnership':1,'Exclusive':2,'Allocation':3,'Tokeet':4,'Negotiable':5,'Non-Negotiable':6})
df['design']=df['design'].map({'Basic':1,'Adventurous':2,'Unique':3,'Modern Comfort':4,'Luxury':5})
df['life_support']=df['life_support'].map({
'Walk to supermarket/restaurant':1,\
'Drive to supermarket/restaurant':2,\
'No nearby shops':3})
df['service']=df['service'].map({'Onsite staff':1,'Self service':2})
df['swimming_pool']=df['swimming_pool'].map({
'Private pool':1,'Share pool':2,'No pool':3})
df['proximity']=df['proximity'].map({
'Walking distance to attraction':1,\
'5-10 minutes drive to attraction':2,\
'Far from center of attraction':3,\
'Remote location':4})
dfArea=df['area'].fillna('A0000')
dfAdded=df['added'].fillna('E0000')
cols=['onboard','unit']
cols2=['type','status','property']
cols3=['package','room','design','proximity','life_support',\
'swimming_pool','capacity','service']
df1=pd.DataFrame(df,columns=cols)
df2=pd.DataFrame(df,columns=cols2)
df3=pd.DataFrame(df,columns=cols3)
dfCombine=pd.concat([df1,dfArea,df2,dfAdded,df3],axis=1)
dfCombine.to_csv('i_property_unit.csv',index=False)