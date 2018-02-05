if __name__ == "__main__":
	#open csv file
	#sort into essence/material groupings
	#create files based on essence/material groups 
	inputFilename = '../data/animalInfo.csv'
	inputFile = open(inputFilename, "r") 
	header = inputFile.readline()
	outputNames = []
	outFilelist = []

	for i in inputFile:
		i = i.strip()
		j = i.split(',')
		essence = j[4].strip()
		material = j[3].strip().capitalize()
		outFile = "../data/" + essence + material + ".csv"

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

	inputFile.close()

