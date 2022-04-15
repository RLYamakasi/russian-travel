import os, subprocess
from os import rename
import subprocess
import random
import glob
from shutil import copyfile
 
names = []
 
#Enter the folder where all the sounds/voicelines are in this line, could also use to shuffle other filetypes, just change .wav to whatever
filesA = glob.glob("D:\steam\steamapps\common\Skyrim Special Edition\Data\sound" + '/**/*.wav', recursive=True)
filesB = filesA.copy()
 
match = True
 
while(match):
    match = False
    random.shuffle(filesB)
    x = 0
    for file in filesA:
        if filesB[x] == file:
            #print(str(x)[65:] +": " + filesB[x][65:] + " = " + file)
            match = True
        x += 1
 
temp = "D:\steam\steamapps\common\Skyrim Special Edition\Data\sound\\temp.wav"
 
x = 0
for file in filesA:
    #print (file[67:] + " <-> " + filesB[x][67:])
    copyfile(file, temp)
    copyfile(filesB[x], file)
    copyfile(temp, filesB[x])
    x += 1
 
os.remove(temp)
 
print("Done!")
