def dictAppend(d,key):
	if key in d:
		d[key] += 1
	else:
		d[key] = 1

def printDic(d):
	for k in d:
		print "\t" + k + ":\t" + str(d[k])

def writeDic(d,fname):
	f = open(fname,"w").close()
	f = open(fname,"w")
	for k in d:
		f.write( k +","+ str(d[k]) + "\n" )
	f.close()


def run():
	#open csv file
	#sort into essence/material groupings
	#create files based on essence/material groups 
	print "Now running csvCreator.py"
	inputFilename = '../data/animalInfo.csv'
	inputFile = open(inputFilename, "r") 
	header = inputFile.readline()
	outputNames = []
	outFilelist = []

	#dictionary for statistics
	total = 0
	per = {}
	mat = {}
	ess = {}


	for i in inputFile:
		i = i.strip()
		j = i.split(',')
		personality = j[1]
		essence = j[4].strip()
		material = j[3].strip().capitalize()
		outFile = "../data/parsedCSV/" + essence + material + ".csv"

		output = None
		if outFile in outputNames: #if it has already been opened
			output = open(outFile, "a")
		else:
			open(outFile,"w").close()
			output = open(outFile,"w")
			outputNames.append(outFile)
		
		print "will write: " + i + " to " + outFile
		#raw_input("press enter to continue")
		output.write(i + "\n")
		output.close()

		total += 1
		dictAppend(per,personality)
		dictAppend(ess,essence)
		dictAppend(mat,material)


	print "Personalities"
	printDic(per)
	
	print "\nMaterials"
	printDic(mat)

	print "\nEssences"
	printDic(ess)

	writeDic(per,'../data/statisticsPer')
	writeDic(mat,'../data/statisticsMat')
	writeDic(ess,'../data/statisticsEss')



	inputFile.close()

