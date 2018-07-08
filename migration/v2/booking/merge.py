import pandas as pd
import numpy as np

dfT = pd.read_csv("legacy_tokeet.csv")
dfR = pd.read_csv("legacy_regint.csv")
dfCombine = pd.merge(dfT,dfR)